---
id: trading
title: 执行交易
---   

## 引言

本指南将基于我们的 [报价指南](./01-quoting.md)，展示如何使用报价在 Uniswap V3 协议上构建和执行交易。它基于 Uniswap 示例代码库中的 [Trading 代码示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/trading)。要运行此示例，请参阅指南的 [README](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/README.md)，并遵循设置说明。

:::info
如果您需要了解 SDK 的简介以及这些指南如何与示例代码库相连，请访问我们的 [背景](../01-background.md) 页面！

要开始本地开发，请查阅 [本地开发指南](../02-local-development.md)。
:::

在本示例中，我们将在两个 ERC20 代币之间进行交易：**WETH 和 USDC**。代币、输入代币的数量以及手续费级别可以作为输入配置。

本指南将 **涵盖**：

1. 根据池信息构建路由
2. 构建未检查的交易
3. 执行交易

在本指南结束时，我们应该能够使用示例中包含的用户界面在任意两种 ERC20 代币之间创建并执行交易。

:::note
示例应用程序中包含了功能，可以在需要时将 ETH 包装/解包，以直接从 ETH 余额为示例的 WETH 到 USDC 交换提供资金。
:::

对于本指南，使用了以下 Uniswap 包：

- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)

本指南的核心代码可以在 [`trading.ts`](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/libs/trading.ts) 中找到。

## 使用钱包扩展

如同前一个指南中那样，我们的 [示例](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading) 使用一个 [配置文件](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/config.ts) 来配置所使用的输入。
其结构类似于报价配置，但我们也提供了选择环境的选项：

```typescript
export interface ExampleConfig {
  env: Environment
  rpc: {
    local: string
    mainnet: string
  }
  wallet: {
    address: string
    privateKey: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}
```

默认情况下，env 字段被设置为 `Environment.LOCAL`：

```typescript
export const CurrentConfig: ExampleConfig = {
  env: Environment.LOCAL,
  rpc: {
    local: 'http://localhost:8545',
    mainnet: '',
  },
  wallet: {
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    privateKey:
      '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
  },
  tokens: {
    in: WETH_TOKEN,
    amountIn: 1,
    out: USDC_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
}
```

在这个示例中，我们有使用如 MetaMask 这样的钱包扩展来签署我们发送的交易的选项。为此，让我们将环境更改为 `Environment.WALLET_EXTENSION`：

```typescript
export const CurrentConfig: ExampleConfig = {
  env: Environment.WALLET_EXTENSION,
  rpc: {
    local: 'http://localhost:8545',
  },
  wallet: {
    ...
  },
  tokens: {
    ...
  },
}
```

运行示例，然后将本地网络添加到您的钱包浏览器扩展中。例如，如果您使用的是 MetaMask，请遵循 [此指南](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)。
您还应该导入一个私钥以在您的本地网络上使用，例如来自 Foundry 示例钱包的 `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`。

考虑查阅示例的 [README](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/README.md)。

如果您在钱包中看不到交易的代币，可能需要 [导入它们](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask)。

## 根据池信息构建路由

为了构建我们的交易，我们将首先创建一个 `Pool` 模型实例。我们像在 [前一个指南](./01-quoting.md#referencing-the-pool-contract-and-fetching-metadata)中那样创建一个 **ethers** 合约。
我们首先从相关池合约中提取所需的元数据。元数据包括关于池的常量信息以及存储在其第一槽中的当前状态信息：

```typescript
async function getPoolInfo() {
    const [token0, token1, fee, liquidity, slot0] =
    await Promise.all([
        poolContract.fee(),
        poolContract.liquidity(),
        poolContract.slot0(),
    ])

    return {
        fee,
        liquidity,
        sqrtPriceX96: slot0[0],
        tick: slot0[1],
    } 
}
```

在继续之前，让我们讨论一下这里获取的值及其代表的含义：

- `fee` 是在池上执行的每个交易中收取的费用，单位是百万分之一 - 如果池的 `fee` 值为 500，则从交易金额中收取 ```500/ 1000000```（或 0.05%）作为费用。这笔费用归池的流动性提供者所有。
- `liquidity` 是池在当前价格下可用于交易的流动性数量。
- `sqrtPriceX96` 是池的当前价格，编码为 `token0` 和 `token1` 之间的比率。
- `tick` 是池当前价格对应的刻度。

查阅 [白皮书](https://uniswap.org/whitepaper-v3.pdf)，了解更多关于 Uniswap V3 中流动性和刻度的工作原理。

您可以在 [`pool.ts`](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/libs/pool.ts) 中找到完整的代码。

利用这些元数据以及我们的输入，我们将构建一个 `Pool`：

```typescript
const poolInfo = await getPoolInfo()

const pool = new Pool(
  CurrentConfig.tokens.in,
  CurrentConfig.tokens.out,
  CurrentConfig.tokens.poolFee,
  poolInfo.sqrtPriceX96.toString(),
  poolInfo.liquidity.toString(),
  poolInfo.tick
)
```

## 创建路由

有了这个 `Pool`，我们现在可以构建一个用于交易的路由。路由表示从一个代币到另一个代币跨过一个或多个池的路径。假设我们有三个池：

```
- PoolA: USDC/ WETH
- PoolB: USDT/ WETH
- PoolC: USDT/ DAI
```

我们希望从 USDC 交易到 DAI，因此我们通过我们的 3 个池创建一个路径：

```
PoolA -> PoolB -> PoolC
```

`Route` 对象可以从给定的池数组和输入输出代币找到这个路径。

为了使本指南简单化，我们仅在一个池上进行交换：

```typescript
import { Route } from '@uniswap/v3-sdk'

const swapRoute = new Route(
  [pool],
  CurrentConfig.tokens.in,
  CurrentConfig.tokens.out
)
```

我们的 `Route` 理解 `CurrentConfig.tokens.in` 应该通过池数组 `[pool]` 被交易为 `CurrentConfig.tokens.out`。

## 构建未检查的交易

一旦构建了路由对象，我们现在需要为给定的 `inputAmount` 示例获取报价：

```typescript
const amountOut = await getOutputQuote(swapRoute)
```

如下所示，使用 `v3-sdk` 的 `SwapQuoter` 获取报价，这与 [前一个报价指南](./01-quoting.md)中直接访问智能合约不同：

```typescript
import { SwapQuoter } from '@uniswap/v3-sdk'
import { CurrencyAmount, TradeType } from '@uniswap/sdk-core'

const { calldata } = await SwapQuoter.quoteCallParameters(
  swapRoute,
  CurrencyAmount.fromRawAmount(
    CurrentConfig.tokens.in,
    fromReadableAmount(
      CurrentConfig.tokens.amountIn,
      CurrentConfig.tokens.in.decimals
    )
  ),
  TradeType.EXACT_INPUT,
  {
    useQuoterV2: true,
  }
)
```

`SwapQuoter` 的 `quoteCallParameters` 函数为我们提供了调用 `Quoter` 所需的 calldata，然后我们解码返回的报价：

```typescript
const quoteCallReturnData = await provider.call({
  to: QUOTER_CONTRACT_ADDRESS,
  data: calldata,
})

return ethers.utils.defaultAbiCoder.decode(['uint256'], quoteCallReturnData)
```

有了报价和路由，我们现在可以使用基于输入的报价输出金额和路由构建交易。因为我们已经知道我们交易的预期输出，所以不必再次检查它。我们可以使用 `uncheckedTrade` 函数来创建我们的交易：

```typescript
import { Trade } from 'uniswap/v3-sdk'
import { CurrencyAmount, TradeType } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

const uncheckedTrade = Trade.createUncheckedTrade({
  route: swapRoute,
  inputAmount: CurrencyAmount.fromRawAmount(
    CurrentConfig.tokens.in,
    fromReadableAmount(
      CurrentConfig.tokens.amountIn,
      CurrentConfig.tokens.in.decimals
    )
  ),
  outputAmount: CurrencyAmount.fromRawAmount(
    CurrentConfig.tokens.out,
    JSBI.BigInt(amountOut)
  ),
  tradeType: TradeType.EXACT_INPUT,
})
```

本示例使用确切输入交易，但我们也可以根据相应调整报价代码来构造确切输出交易。

## 执行交易

一旦创建了交易，我们现在可以使用我们的提供商执行此交易。首先，我们必须给予 `SwapRouter` 批准，以便它能代表我们花费代币：

```typescript
const tokenApproval = await getTokenTransferApproval(CurrentConfig.tokens.in)
```

您可以在 [这里](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/libs/trading.ts#L151) 找到批准函数。
在大多数指南中，我们将使用此函数或类似实现。

然后，我们设置定义我们的执行中可能发生的时间和滑点的选项以及用于钱包的地址：

```typescript
import { SwapOptions } from '@uniswap/v3-sdk'
import { Percent } from '@uniswap/sdk-core'

const options: SwapOptions = {
  slippageTolerance: new Percent(50, 10_000), // 50 bips，或 0.50%
  deadline: Math.floor(Date.now() / 1000) + 60 * 20, // 当前 Unix 时间后的 20 分钟
  recipient: walletAddress,
}
```

我们交易的滑点是我们愿意接受的从计算输出金额的最大减少百分比。
截止日期是我们希望交易完成的最晚时间点。
如果我们设置的值太高，交易可能会等待数天，我们需要支付燃气费用来取消它。

接下来，我们使用 `SwapRouter` 类，这是 Uniswap [SwapRouter 合约](https://github.com/Uniswap/v3-periphery/blob/v1.0.0/contracts/SwapRouter.sol)的表示，来获取与我们的交易和选项相关的调用参数：

```typescript
import { SwapRouter } from '@uniswap/v3-sdk'

const methodParameters = SwapRouter.swapCallParameters([uncheckedTrade], options)
```

最后，我们可以从方法参数构建交易并发送交易：

```typescript
const tx = {
  data: methodParameters.calldata,
  to: SWAP_ROUTER_ADDRESS,
  value: methodParameters.value,
  from: walletAddress,
  maxFeePerGas: MAX_FEE_PER_GAS,
  maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,
}

const res = await wallet.sendTransaction(tx)
```

## 下一步

生成的示例允许在任何两种 ERC20 代币之间进行交易，但这对于最佳定价和费用来说可能是次优的。为了获得最佳可能的价格，我们使用 Uniswap 自动路由器通过池路由以获得最优成本。我们的 [路由](./03-routing.md) 指南将向您展示如何使用此路由器并执行最优交换。