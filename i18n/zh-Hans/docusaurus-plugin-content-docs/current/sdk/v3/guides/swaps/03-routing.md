---
id: routing
title: 路由交换
---

## 引言

本指南将介绍如何使用 Uniswap 的智能订单路由来计算最优路径并执行交换。与仅在单一池中交易不同，智能路由可能使用多个跳转（按需）以确保交换的最终结果是最佳价格。它基于 Uniswap 代码示例中的 [路由代码示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/routing)，可在 Uniswap 代码示例 [仓库](https://github.com/Uniswap/examples) 中找到。要运行此示例，请查看指南的 [README](https://github.com/Uniswap/examples/blob/main/v3-sdk/routing/README.md) 并遵循设置说明。

:::info
如果您需要了解 SDK 的简介以及这些指南如何与示例仓库连接，请访问我们的 [背景](./01-background.md) 页面！
:::

在此示例中，我们将交易 **WETH 和 USDC** 之间，但您可以配置示例以使用任意两种货币和输入货币的数量。

该指南将 **涵盖**：

1. 创建路由器实例
2. 创建一条路径
3. 使用路径进行交换

在本指南结束时，我们应该能够创建一条路径，并使用示例中包含的 UI 在任何两种货币代币间执行交换。

对于本指南，使用了以下 Uniswap 包：

- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)
- [`@uniswap/smart-order-router`](https://www.npmjs.com/package/@uniswap/smart-order-router)

本指南的核心代码可以在 [`routing.ts`](https://github.com/Uniswap/examples/blob/main/v3-sdk/routing/src/libs/routing.ts) 文件中找到。

我们将在本指南的一些代码片段中使用的配置具有以下结构：

```typescript
import { Token } from '@uniswap/sdk-core'

interface ExampleConfig {
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
  }
}

export const CurrentConfig: ExampleConfig = {...}
```

## 创建路由器实例

为了计算我们的路径，我们将使用 `@uniswap/smart-order-router` 包，特别是 `AlphaRouter` 类，它需要一个 `chainId` 和一个 `provider`。请注意，路由不支持本地分叉，因此即使在本地分叉上交换，我们也将使用主网提供商：

```typescript
import { AlphaRouter, ChainId } from '@uniswap/smart-order-router'

const provider = new ethers.providers.JsonRpcProvider(rpcUrl)

const router = new AlphaRouter({
  chainId: ChainId.MAINNET,
  provider,
})
```

## 创建一条路径

我们将使用 [SwapRouter02](https://github.com/Uniswap/v3-periphery/blob/v1.0.0/contracts/SwapRouter.sol) 进行我们的交易。
`smart-order-router` 包为我们提供了一个 `SwapOptionsSwapRouter02` 接口，定义了要使用的钱包、滑点容忍度以及我们需要与合约交互的交易截止时间：

```typescript
import { SwapOptionsSwapRouter02, SwapType } from '@uniswap/smart-order-router'
import { Percent } from '@uniswap/sdk-core'

const options: SwapOptionsSwapRouter02 = {
  recipient: CurrentConfig.wallet.address,
  slippageTolerance: new Percent(50, 10_000),
  deadline: Math.floor(Date.now() / 1000 + 1800),
  type: SwapType.SWAP_ROUTER_02,
}
```

如 [前一指南](./02-trading.md#executing-a-trade) 中所述，设置参数为合理值非常重要。

使用这些选项，我们现在可以使用货币和输入金额创建交易 (`TradeType.EXACT_INPUT` 或 `TradeType.EXACT_OUTPUT`) 来获取报价。对于此示例，我们将使用 `EXACT_INPUT` 交易来获取以报价货币输出的报价。

```typescript
import { CurrencyAmount, TradeType } from '@uniswap/sdk-core'

const rawTokenAmountIn: JSBI = fromReadableAmount(
      CurrentConfig.currencies.amountIn,
      CurrentConfig.currencies.in.decimals
    )

const route = await router.route(
  CurrencyAmount.fromRawAmount(
    CurrentConfig.currencies.in,
    rawTokenAmountIn
  ),
  CurrentConfig.currencies.out,
  TradeType.EXACT_INPUT,
  options
)
```

`fromReadableAmount` 函数根据完整单位和代币的小数位数计算代币在其最小单位中的数量：

```typescript title="src/libs/conversion.ts"
export function fromReadableAmount(amount: number, decimals: number): JSBI {
  const extraDigits = Math.pow(10, countDecimals(amount))
  const adjustedAmount = amount * extraDigits
  return JSBI.divide(
    JSBI.multiply(
      JSBI.BigInt(adjustedAmount),
      JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(decimals))
    ),
    JSBI.BigInt(extraDigits)
  )
}
```

`route` 和 `route.methodParameters` 是 *可选的*，因为请求可能会失败，例如如果 **两个代币之间不存在路径** 或由于网络问题。我们检查调用是否成功：

```typescript
if (!route || !route.methodParameters) {
    // 处理失败的请求
}
```

根据我们的问题原因和偏好，我们可以重试请求或抛出错误。

## 使用路径进行交换

首先，我们需要给予 `SwapRouter` 智能合约权限，以便代表我们花费代币：

```typescript
import { ethers } from 'ethers'
...

const wallet = new ethers.Wallet(privateKey, provider)
const tokenContract = new ethers.Contract(
    CurrentConfig.tokens.in.address, 
    ERC20ABI, 
    wallet
)
const tokenApproval = await tokenContract.approve(
    V3_SWAP_ROUTER_ADDRESS, 
    ethers.BigNumber.from(rawTokenAmountIn.toString())
)
```

为了让智能合约能够花费某钱包的代币，智能合约首先需要从该钱包获得批准。
ERC20 代币有一个 `approve` 函数，接受我们想要允许花费我们代币的智能合约地址以及智能合约应被允许花费的金额。

我们可以在 [Github](https://github.com/Uniswap/v3-periphery/blob/main/deploys.md) 上获取我们链的 **V3_SWAP_ROUTER_ADDRESS**。请记住，不同的链可能有 **不同的部署地址** 对于相同的合约。
网络分叉的本地版本的部署地址与您分叉的网络相同，所以对于 **主网的分叉** 将是 **主网** 的地址。

我们需要等待一个区块，让批准交易被区块链包含。

一旦批准被授予，我们现在可以使用路径计算的 calldata、值和 gas 值来执行交易：

```typescript
const txRes = await wallet.sendTransaction({
  data: route.methodParameters.calldata,
  to: V3_SWAP_ROUTER_ADDRESS,
  value: route.methodParameters.value,
  from: wallet.address,
  maxFeePerGas: MAX_FEE_PER_GAS,
  maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,
})
```

交换后，您应该在区块确认后不久在 UI 中看到货币余额更新。

您可以在 [`routing.ts`](https://github.com/Uniswap/examples/blob/main/v3-sdk/routing/src/libs/routing.ts) 中找到完整的代码。

## 下一步

现在您已经熟悉了交易，考虑查阅我们关于向 Uniswap [提供流动性](../liquidity/01-position-data.md) 的下一组指南！