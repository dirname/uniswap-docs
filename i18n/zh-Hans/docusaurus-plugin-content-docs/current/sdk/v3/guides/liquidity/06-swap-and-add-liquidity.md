---
id: swap-and-add
title: 交换与添加流动性
---

## 引言

本指南将涵盖如何在单一原子交易中执行交换与添加流动性的操作。它基于[交换与添加示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/swap-and-add-liquidity)，该示例可在 Uniswap 代码示例[仓库](https://github.com/Uniswap/examples)中找到。要运行此示例，请查看示例的[README](https://github.com/Uniswap/examples/tree/main/v3-sdk/swap-and-add-liquidity)并遵循设置说明。

:::info
如果您需要了解 SDK 的简介以及这些指南如何与示例仓库相连的信息，请访问我们的[背景](../01-background.md)页面！
:::

当向 Uniswap v3 池添加流动性时，您必须以特定比例提供两种资产。在许多情况下，您的合约或用户的钱包持有这两种资产的不同比例。为了存入 100% 的资产，您必须首先将资产交换到最优比例，然后才能添加流动性。

然而，这种交换可能会改变池的平衡，从而改变最优比例。为了避免这种情况，我们可以使用路由器以原子方式执行此交换与添加流动性操作。我们指南的输入是**两个代币**，我们正在为它们创建池，我们正在为每个代币池化的**数量**，用于交换和添加的每个代币的**数量**，以及池的**费用**。

本指南将**涵盖**：

1. 设置路由器实例
2. 配置我们的比例计算
3. 计算我们的货币比例
4. 构建并执行我们的交换与添加交易

在本指南结束时，给定上述输入，我们应该能够通过按下按钮使用 100% 的输入资产进行交换和添加流动性，并在我们的仓位和代币余额中看到变化。

对于本指南，使用了以下 Uniswap 包：

- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)
- [`@uniswap/smart-order-router`](https://www.npmjs.com/package/@uniswap/smart-order-router)

本指南的核心代码可以在[`swapAndAddLiquidity()`](https://github.com/Uniswap/examples/blob/main/v3-sdk/swap-and-add-liquidity/src/libs/liquidity.ts#L48)中找到。

:::note
本指南假设您熟悉我们的[Minting a Position](./01-minting-position.md)指南。创建仓位是必需的，以便添加或移除流动性，因此在创建仓位之前，按钮将被禁用。

还请注意，我们无需给予`NonfungiblePositionManager`转移我们代币的批准，因为在创建我们的仓位时我们已经完成了这一步。
:::

## 设置路由器实例

第一步是批准`SwapRouter`智能合约代表我们花费代币，以便我们向仓位添加流动性：

```typescript
const tokenInApproval = await getTokenTransferApproval(
  token0,
  V3_SWAP_ROUTER_ADDRESS
)

const tokenOutApproval = await getTokenTransferApproval(
  token1,
  V3_SWAP_ROUTER_ADDRESS
)
```

我们在[这里](./02-minting-position.md#giving-approval-to-transfer-our-tokens)描述了`getTokenTransferApproval`函数。

然后我们可以设置我们的路由器，即`AlphaRouter`，它是[smart-order-router 包](https://www.npmjs.com/package/@uniswap/smart-order-router)的一部分。路由器初始化需要一个`chainId`和一个`provider`。请注意，路由不支持本地分叉，因此即使在本地分叉上进行交换，我们也将使用主网提供商：

```typescript
import { ethers } from 'ethers'
import { AlphaRouter } from '@uniswap/smart-order-router'

const provider = new ethers.providers.JsonRpcProvider(rpcUrl)

const router = new AlphaRouter({ chainId: 1, provider })
```

对于更详细的示例，请参阅我们的[路由指南](../trading/03-routing.md)。

## 配置我们的比例计算

创建了路由器后，我们现在需要构建调用其`routeToRatio`函数所需的参数，该函数将确保所使用的货币比例与池要求的比例相匹配，以便添加我们的总流动性。这将需要以下参数：

前两个参数是我们作为输入传递给`routeToRatio`算法的货币金额：

```typescript
import { CurrencyAmount } from '@uniswap/sdk-core'

const token0CurrencyAmount = CurrencyAmount.fromRawAmount(
  token0,
  fromReadableAmount(
    token0AmountToAdd,
    token0.decimals
  )
)

const token1CurrencyAmount = CurrencyAmount.fromRawAmount(
  token1,
  fromReadableAmount(
    token1AmountToAdd,
    token1.decimals
  )
)
```

接下来，我们将创建一个流动性为`1`的占位符仓位，因为流动性仍然未知，并且将在`routeToRatio`的调用中设置：

```typescript
import { Pool, Position, nearestUsableTick } from '@uniswap/v3-sdk'

const placeholderPosition = new Position{
    pool,
    liquidity: 1,
    tickLower:
      nearestUsableTick(pool.tickCurrent, pool.tickSpacing) -
      pool.tickSpacing * 2,
    tickUpper:
      nearestUsableTick(pool.tickCurrent, pool.tickSpacing) +
      poolInfo.tickSpacing * 2
}
```

然后我们需要创建一个`SwapAndAddConfig`实例，它将为`routeToRatio`算法设置额外的配置参数：

- `ratioErrorTolerance`确定结果比例与最优比例之间的误差范围。
- `maxIterations`确定算法寻找在误差容限内的比例的最大迭代次数。如果超过最大迭代次数，则返回错误。运行算法更多次的好处是我们有更多机会找到一条路径，但更多迭代将需要更长的时间来执行。在我们的示例中使用了一个默认值 6。

```typescript
import { Fraction } from '@uniswap/sdk-core'
import { SwapAndAddConfig } from '@uniswap/smart-order-router'

const swapAndAddConfig: SwapAndAddConfig = {
  ratioErrorTolerance: new Fraction(1, 100),
  maxIterations: 6,
}
```

最后，我们将创建一个`SwapAndAddOptions`实例，以配置我们正在向其添加流动性的仓位，以及在两个不同的对象中定义的交换参数：

- **`swapConfig`**配置从交换剩余的尘埃的接收者、滑点容忍度以及交换的截止日期。
- **`addLiquidityOptions`**必须包含一个`tokenId`以添加到现有仓位

```typescript
import { SwapAndAddOptions } from '@uniswap/smart-order-router'

const swapAndAddOptions: SwapAndAddOptions = {
  swapOptions: {
    type: SwapType.SWAP_ROUTER_02,
    recipient: address,
    slippageTolerance: new Percent(50, 10_000),
    deadline: Math.floor(Date.now() / 1000) + 60 * 20,
  },
  addLiquidityOptions: {
    tokenId: positionId,
  },
}
```

## 计算我们的货币比例

构建了调用`routeToRatio`所需的所有参数后，我们现在可以调用该函数：

```typescript
import { SwapToRatioResponse } from '@uniswap/smart-order-router'

const routeToRatioResponse: SwapToRatioResponse = await router.routeToRatio(
  token0CurrencyAmount,
  token1CurrencyAmount,
  currentPosition,
  swapAndAddConfig,
  swapAndAddOptions
)
```

函数调用的返回类型是[SwapToRatioResponse](https://github.com/Uniswap/smart-order-router/blob/97c1bb7cb64b22ebf3509acda8de60c0445cf250/src/routers/router.ts#L121)。如果成功找到了路径，该对象将有两个字段：状态（成功）和`SwapToRatioRoute`对象。在构建并提交交易之前，我们检查确保这两个条件都成立：

```typescript
import { SwapToRatioStatus } from '@uniswap/smart-order-router'

if (
  !routeToRatioResponse ||
  routeToRatioResponse.status !== SwapToRatioStatus.SUCCESS
) {
  // 处理失败的交易
}
```

如果没有找到路径，我们将为交易返回一个`Failed`状态。

## 构建并执行我们的交换与添加交易

在确保成功找到路径之后，我们现在可以构建并发送交易。响应(`SwapToRatioRoute`)将包含构建交易对象所需的属性：

```typescript
import { SwapToRatioRoute } from '@uniswap/smart-order-router'

const route: SwapToRatioRoute = routeToRatioResponse.result
const transaction = {
  data: route.methodParameters?.calldata,
  to: V3_SWAP_ROUTER_ADDRESS,
  value: route.methodParameters?.value,
  from: address,
}

const txRes = await wallet.sendTransaction(transaction)
```

如果交易成功，我们的交换与添加将完成！我们应该看到输入代币余额减少，而仓位余额应相应增加。