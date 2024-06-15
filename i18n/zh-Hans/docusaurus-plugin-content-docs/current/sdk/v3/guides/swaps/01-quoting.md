---
id: quoting
title: 获取报价
---     

## 引言

本指南将介绍如何获取在 Uniswap 协议上任何代币对的当前报价。它基于 [Quoting 代码示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/quoting)，该示例可以在 Uniswap 示例代码库中找到[repository](https://github.com/Uniswap/examples)。要运行此示例，请查看示例的 [README](https://github.com/Uniswap/examples/blob/main/v3-sdk/quoting/README.md) 并遵循设置说明。

:::info
如果您需要了解 SDK 的简介以及这些指南如何与示例存储库相关联，可以访问我们的 [背景](../01-background.md) 页面！
:::

在本示例中，我们将使用 `quoteExactInputSingle` 来获取 **USDC - WETH** 对的报价。
输入参数包括 **输入代币**、**输出代币**、**输入金额** 和 **费用**。

**费用** 输入参数代表在交易时分发给所有范围内流动性的交易费用。它是池的一个标识符，其他标识符为 **tokenIn** 和 **tokenOut**。

本指南将 **涵盖**：

1. 计算池的部署地址
2. 引用池合约并获取元数据
3. 引用 Quoter 合约并获取报价

在本指南结束时，我们应该能够通过按下 Web 应用程序上的按钮来获取给定输入代币对和输入代币金额的报价。

对于本指南，使用了以下 Uniswap 包：

- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)

本指南核心代码可以在 [`quote.ts`](https://github.com/Uniswap/examples/blob/main/v3-sdk/quoting/src/libs/quote.ts) 中找到

## 示例配置

我们将使用示例配置 `CurrentConfig` 在本指南的大多数代码片段中。其格式如下：

```typescript
import { Token } from '@uniswap/sdk-core'

interface ExampleConfig {
  rpc: {
    local: string
    mainnet: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}

export const CurrentConfig: ExampleConfig = {...}
```

示例的默认配置使用了主网的本地分支。如果您尚未这样做，请查看我们的 [本地开发指南](../02-local-development.md)。
要更改 rpc 端点或使用的池，请编辑 [`Currentconfig`](https://github.com/Uniswap/examples/blob/main/v3-sdk/quoting/src/config.ts#L21)。
要直接连接到主网，设置配置中的 `mainnet` 字段：

```typescript
export const CurrentConfig: ExampleConfig = {
  rpc: {
    local: 'http://localhost:8545',
    mainnet: 'https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721',
  },
  tokens: {
    in: USDC_TOKEN,
    amountIn: 1000,
    out: WETH_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
}
```

所使用的池在 [`constants.ts`](https://github.com/Uniswap/examples/blob/main/v3-sdk/quoting/src/libs/constants.ts#L14) 中以一对代币的形式定义。
您也可以在配置中更改这两个代币和池的费用，只需确保您的配置实际上存在一个池即可。
请查阅 [Uniswap info](https://info.uniswap.org/#/pools) 上的顶级池信息。

## 计算池的部署地址

为了与 **USDC - WETH** 池合约交互，我们首先需要计算其部署地址。
如果您还没有直接与智能合约合作过，可以查阅 Alchemy 提供的这份 [指南](https://docs.alchemy.com/docs/smart-contract-basics)。
SDK 提供了一个用于此目的的实用方法：

```typescript
import { computePoolAddress } from '@uniswap/v3-sdk' 

const currentPoolAddress = computePoolAddress({
  factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
  tokenA: CurrentConfig.tokens.in,
  tokenB: CurrentConfig.tokens.out,
  fee: CurrentConfig.tokens.poolFee,
})
```

由于每个 *Uniswap V3 Pool* 都由3个特征唯一识别（输入代币、输出代币、费用），我们结合使用这些
与 *PoolFactory* 合约的地址一起计算 **USDC - ETH** 池的地址。
这些参数已经在我们的 [constants.ts](https://github.com/Uniswap/examples/blob/main/v3-sdk/quoting/src/libs/constants.ts#L14) 文件中定义：

```typescript
const WETH_TOKEN = new Token(
  1,
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  18,
  'WETH',
  'Wrapped Ether'
)

const USDC_TOKEN = new Token(
  1,
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  6,
  'USDC',
  'USD//C'
)
```

这些常量在 Introduction 中提到的 `config.ts` 文件中使用。

我们可以在 [这里](../../../../contracts/v3/reference/Deployments.md) 找到我们链的 Pool Factory 合约地址。

## 引用池合约并获取元数据

现在我们已经得到了 **USDC - ETH** 池的部署地址，我们可以构建一个 **ethers** `Contract` 实例来与之交互：

```typescript
import { ethers } from 'ethers'

const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
const poolContract = new ethers.Contract(
  currentPoolAddress,
  IUniswapV3PoolABI.abi,
  provider
)
```

为了构建 *Contract*，我们需要提供合约的地址、其 ABI 和将为我们执行 RPC 调用的提供者。
我们通过 [@uniswap/v3-core](https://www.npmjs.com/package/@uniswap/v3-core) 包获取对合约 ABI 的访问权限，该包包含 Uniswap V3 协议的核心智能合约：

```typescript
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
```

构建了对合约的引用后，我们现在可以通过提供者访问其方法。
我们使用批处理 `Promise` 调用。这种方法并发查询状态数据，而不是顺序查询，以最小化因两个区块之间执行顺序查询可能返回不同步数据的机会：

```typescript
const [token0, token1, fee, liquidity, slot0] = await Promise.all([
  poolContract.token0(),
  poolContract.token1(),
  poolContract.fee(),
  poolContract.liquidity(),
  poolContract.slot0(),
])
```

这些方法的返回值将成为获取报价函数的输入。
`token0` 和 `token1` 变量是池中代币的地址，不应与 sdk 中的 `Token` 对象混淆。
要查看完整代码，请查阅 `quote.ts` 中的 [`getPoolConstants()`](https://github.com/Uniswap/examples/blob/main/v3-sdk/quoting/src/libs/quote.ts#L35)。

:::note
在此示例中，我们获取的元数据已经存在于我们的输入中。本指南首先获取这些信息是为了展示如何获取任何元数据，这将在未来的指南中进一步扩展。
:::

## 引用 Quoter 合约并获取报价

为了获取交易的报价，Uniswap 部署了一个 **Quoter 合约**。我们将使用此合约来获取我们交易可预期的输出数量，而无需实际执行交易。
请在 [quote.ts](https://github.com/Uniswap/examples/blob/main/v3-sdk/quoting/src/libs/quote.ts) 中查阅以下代码片段的完整代码

就像我们对池合约所做的那样，我们需要构建一个 **ethers** `Contract` 实例，以便与我们的 Quoter 合约交互：

```typescript
const quoterContract = new ethers.Contract(
  QUOTER_CONTRACT_ADDRESS,
  Quoter.abi,
  getProvider()
)
```

我们通过 [@uniswap/v3-periphery](https://www.npmjs.com/package/@uniswap/v3-periphery) 包获取对合约 ABI 的访问权限，该包包含了 Uniswap V3 协议的外围智能合约：

```typescript
import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'
```

我们从 [Github](https://github.com/Uniswap/v3-periphery/blob/main/deploys.md) 获取我们链的 QUOTE_CONTRACT_ADDRESS。

我们现在可以使用我们的 Quoter 合约来获取报价。

理想情况下，报价函数应该是 `view` 函数，这将使我们能够以极低的燃气成本轻松地在链上查询它们。然而，Uniswap V3 Quoter 合约依赖于设计为回滚以返回所需数据的状态更改调用。这意味着调用 Quoter 将非常昂贵，且不应在链上调用。

为绕过这一难题，我们可以使用 **ethers.js** `Contract` 实例提供的 `callStatic` 方法。
这是一个有用的方法，它向以太坊节点提交一个状态更改交易，但要求节点模拟状态更改，而不是执行它。然后，我们的脚本可以返回模拟状态更改的结果：

```typescript
const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
  token0,
  token1,
  fee,
  fromReadableAmount(
    CurrentConfig.tokens.amountIn,
    CurrentConfig.tokens.in.decimals
  ).toString(),
  0
)
```

`fromReadableAmount()` 函数根据全单位金额和小数位创建代币最小单位的数量。

调用的结果是你将为报价交换收到的输出代币数量。

需要注意的是 `quoteExactInputSingle` 只是 Quoter 提供的四种不同方法之一：

1. `quoteExactInputSingle` - 给定你想要交换的数量，为单个池的交换产生输出数量的报价
2. `quoteExactInput` - 给定你想要交换的数量，为多个池的交换产生输出数量的报价
3. `quoteExactOutputSingle` - 给定你想要得到的输出数量，为单个池的交换产生输入数量的报价
4. `quoteExactOutput` - 给定你想要得到的输出数量，为多个池的交换产生输入数量的报价

如果我们想交易两个彼此没有共享池的代币，我们将需要在多个池上进行交换。
这就是 `quoteExactInput` 和 `quoteExactOutput` 方法的用武之地。
我们将在 [路由指南](03-routing.md) 中更深入地探讨路由。

对于 `exactOutput` 和 `exactOutputSingle` 方法，我们需要记住，池不能给我们超过它持有的代币数量。
如果我们尝试从一个只持有 50 WETH 的池中获取 100 WETH 的报价，函数调用将会失败。

## 下一步

既然您已经能够进行报价，不妨查看我们下一个关于使用此报价进行 [交易](./02-trading.md) 的指南！