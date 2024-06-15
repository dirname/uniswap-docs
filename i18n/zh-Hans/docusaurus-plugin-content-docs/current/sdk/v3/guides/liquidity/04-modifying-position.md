---
id: modifying-position
title: 添加与移除流动性
---

## 引言

本指南将介绍如何通过在 Uniswap V3 协议上增加或减少流动性来修改流动性头寸。它基于 Uniswap 示例代码库中的 [修改头寸代码示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/modifying-position)，您可以在 Uniswap 的 [代码示例](https://github.com/Uniswap/examples)存储库中找到这个示例。要运行此示例，请参阅示例的 [README](https://github.com/Uniswap/examples/blob/main/v3-sdk/modifying-position/README.md)，并遵循设置说明。

:::info
如果您需要了解 SDK 的概览以及这些指南如何与示例存储库连接，欢迎访问我们的 [背景](../01-background.md) 页面！
:::

在 Uniswap V3 协议中，流动性头寸使用非同质化代币表示。在本指南中，我们将使用 `NonfungiblePositionManager` 类来帮助我们铸造一个流动性头寸，然后修改 **USDC - DAI** 对的提供的流动性。本指南的输入是 **两个代币**，我们正在为它们提供流动性、我们为每个代币提供的 **数量**、Pool 的 **费用** 以及我们要 **添加和移除** 我们头寸的 **比例**。

本指南将 **涵盖**：

1. 向我们的头寸添加流动性
2. 从我们的头寸移除流动性

到本指南结束时，根据上述输入，我们应该能够通过单击按钮向铸造的头寸添加或移除流动性，并看到我们的头寸和代币余额中反映的变化。

对于本指南，使用了以下 Uniswap 包：

- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)

本指南的核心代码可以在 [`addLiquidity()`](https://github.com/Uniswap/examples/blob/d34a53412dbf905802da2249391788a225719bb8/v3-sdk/modifying-position/src/example/Example.tsx#L33) 和 [`removeLiquidity()`](https://github.com/Uniswap/examples/blob/733d586070afe2c8cceb35d557a77eac7a19a656/v3-sdk/modifying-position/src/example/Example.tsx#L83) 中找到。

:::note
本指南假设您熟悉我们的 [铸造头寸](./02-minting-position.md) 指南。需要一个已铸造的头寸才能添加或移除流动性，因此在铸造头寸之前，按钮将处于禁用状态。

此外请注意，我们无需给予 `NonfungiblePositionManager` 转移我们的代币的批准，因为我们在铸造头寸时已经这样做了。
:::

## 配置与工具函数

示例可以在 [`config.ts`](https://github.com/Uniswap/examples/blob/d34a53412dbf905802da2249391788a225719bb8/v3-sdk/modifying-position/src/config.ts) 文件中进行配置。
`CurrentConfig` 对象具有以下结构：

```typescript
export const CurrentConfig: ExampleConfig = {
  env: Environment.LOCAL,
  rpc: {
    local: 'http://localhost:8545',
    mainnet: 'https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721',
  },
  wallet: {
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    privateKey:
      '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
  },
  tokens: {
    token0: USDC_TOKEN,
    token0Amount: 1000,
    token1: DAI_TOKEN,
    token1Amount: 1000,
    poolFee: FeeAmount.LOW,
    fractionToRemove: 1,
    fractionToAdd: 0.5,
  },
}
```

您应该已经熟悉 `rpc`、`wallet` 和代币参数，它们的使用方式与我们 v3-sdk 系列早期指南中相同。
`fractionToAdd` 变量是我们将用来增加头寸的乘数。**0.5** 的分数意味着我们将流动性增加了 **50%**。
`fractionToRemove` 变量是我们稍后在本指南中想要移除的头寸的比例。**1** 的分数意味着我们移除了 **100%** 的流动性。

## 向我们的头寸添加流动性

假设我们已经铸造了一个头寸，我们的第一步是使用原始头寸计算我们想要增加当前头寸的数量：

```typescript
const fractionToAdd: number = ...

const amount0Increased: JSBI = fromReadableAmount(
    readableAmount0 * fractionToAdd, 
    token0.decimals
)
const amount1Increase: JSBI = fromReadableAmount(
    readableAmount1 * fractionToAdd, 
    token1.decimals
)

const positionToIncreaseBy = constructPosition(
    amount0Increased,
    amount1Increase
  )
)
```

`fromReadableAmount()` 函数计算以最小单位表示的代币数量，例如，1 ETH 将是 `1000000000000000000` Wei，因为 ETH 有 18 位小数。

获取金额的更好方法可能是直接从区块链使用 positionId 获取它们。
我们在本系列的 [第一个指南](./01-position-data.md#fetching-positions) 中演示了如何做到这一点。

```typescript
import { Pool, Position } from '@uniswap/v3-sdk'
import JSBI from 'jsbi'

function constructPosition(
    amount0: JSBI,
    amount1: JSBI
): Position {
    // 使用前一个指南中的相同方式创建 Pool
    const pool = new Pool(...)

    // 使用输入金额的最大流动性创建位置
    return Position.fromAmounts({
        pool,
        tickLower:
            nearestUsableTick(pool.tickCurrent, pool.tickSpacing) -
            pool.tickSpacing * 2,
        tickUpper:
            nearestUsableTick(pool.tickCurrent, pool.tickSpacing) +
            pool.tickSpacing * 2,
        amount0,
        amount1,
        useFullPrecision: true,
    })
}
```

该函数接收两个参数，这些参数用于构造 Position 实例。在此示例中，两个参数都遵循相同的逻辑：我们将参数化的 `tokenAmount` 乘以参数化的 `fractionToAdd`，因为新的流动性头寸将叠加在已铸造的流动性头寸之上。

然后我们需要构建一个类型为 [`AddLiquidityOptions`](https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L77) 的选项对象，类似于我们在铸造情况下的做法。在这种情况下，我们将使用 [`IncreaseOptions`](https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L75)：

```typescript
import { AddLiquidityOptions } from '@uniswap/v3-sdk'

const addLiquidityOptions: AddLiquidityOptions = {
  deadline: Math.floor(Date.now() / 1000) + 60 * 20,
  slippageTolerance: new Percent(50, 10_000),
  tokenId,
}
```

与铸造相比，我们省略了 `recipient` 参数，而是传入了我们之前铸造的头寸的 `tokenId`。
由于头寸已经存在，接受者不会改变，相反，NonfungiblePositionManager 合约可以通过使用其 id 访问现有头寸来修改它。

tokenId 可以使用 NonfungiblePositionManager 合约的 tokenOfOwnerByIndex 函数获取，如 [这里](./01-position-data.md#fetching-positions) 所述。

然后，新创建的头寸连同选项对象一起传递给 `NonfungiblePositionManager` 的 `addCallParameters`：

```typescript
import { NonfungiblePositionManager } from '@uniswap/v3-sdk'

const positionToIncreaseBy = constructPosition(CurrentConfig.tokens.amount0, CurrentConfig.tokens.amount1)

const { calldata, value } = NonfungiblePositionManager.addCallParameters(
  positionToIncreaseBy,
  addLiquidityOptions
)
```

`addCallParameters` 的返回值是提交以增加我们头寸流动性的交易所需的 calldata 和 value。我们现在可以构建并执行交易：

```typescript
import { ethers } from 'ethers'

const transaction = {
  data: calldata,
  to: NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,
  value: value,
  from: address,
  maxFeePerGas: MAX_FEE_PER_GAS,
  maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,
}

const wallet = new ethers.Wallet(privateKey, provider)

const txRes = await wallet.sendTransaction(transaction)
```

我们可以从 [Github](https://github.com/Uniswap/v3-periphery/blob/main/deploys.md) 获取 NonfungiblePositionManager 的合约地址。

按下按钮后，注意 USDC 和 DAI 的余额如何下降，而我们头寸的流动性增加。

## 从我们的头寸移除流动性

`removeLiquidity` 函数是添加流动性的镜像操作，结果会有些类似，要求已铸造头寸。

首先，我们创建一个与我们铸造的完全相同的头寸：

```typescript
const amount0: JSBI = fromReadableAmount(
    readableAmount0 * fractionToAdd, 
    token0.decimals
)
const amount1: JSBI = fromReadableAmount(
    readableAmount1 * fractionToAdd, 
    token1.decimals
)

const currentPosition = constructPosition(
  amount0,
  amount1
)
```

然后我们需要构建一个类型为 [`RemoveLiquidityOptions`](https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L138) 的选项对象：

```typescript
import { RemoveLiquidityOptions } from '@uniswap/v3-sdk'
import { Percent } from '@uniswap/sdk-core'

const removeLiquidityOptions: RemoveLiquidityOptions = {
  deadline: Math.floor(Date.now() / 1000) + 60 * 20,
  slippageTolerance: new Percent(50, 10_000),
  tokenId: positionId,
  // 移除流动性的百分比
  liquidityPercentage: new Percent(0.5),
  collectOptions,
}
```

正如添加流动性一样，我们省略了 `recipient` 参数，而是传入了我们之前铸造的头寸的 `tokenId`。

我们还提供了两个额外的参数：

- `liquidityPercentage` 确定从初始头寸移除多少流动性（作为 `Percentage`），并将移除的流动性转回我们的地址。我们从指南配置中设置这个百分比，范围从 0（0%）到 1（100%）。在这个例子中，我们将移除 50% 的流动性。
- [`collectOptions`](https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L105) 给我们提供了收集这个头寸产生的任何费用的选项。在这个示例中，我们不会收集任何费用，所以我们提供零值。如果您想了解如何在不修改您的头寸的情况下收取费用，请查阅我们的 [收取费用](./03-collecting-fees.md) 指南！

```typescript
import { CurrencyAmount } from '@uniswap/sdk-core'
import { CollectOptions } from '@uniswap/v3-sdk'

const collectOptions: Omit<CollectOptions, 'tokenId'> = {
  expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(
    token0,
    0
  ),
  expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
    token1,
    0
  ),
  recipient: address,
}
```

头寸对象连同选项对象一起传递给 `NonfungiblePositionManager` 的 `removeCallParameters`，类似于我们在添加流动性案例中的做法：

```typescript
const { calldata, value } = NonfungiblePositionManager.removeCallParameters(
  currentPosition,
  removeLiquidityOptions
)
```

`removeCallParameters` 的返回值是构建交易以从我们的头寸移除流动性所需的 calldata 和 value。我们可以构建交易并发送以执行：

```typescript
const transaction = {
  data: calldata,
  to: NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,
  value: value,
  from: address,
  maxFeePerGas: MAX_FEE_PER_GAS,
  maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,
}

const txRes = await wallet.sendTransaction(transaction)
```

按下按钮后，注意 USDC 和 DAI 的余额如何增加，而我们头寸的流动性减少。

## 下一步

现在您已经学会了铸造和修改头寸，来看看如何从头寸 [收取费用](./04-collecting-fees.md) 吧！