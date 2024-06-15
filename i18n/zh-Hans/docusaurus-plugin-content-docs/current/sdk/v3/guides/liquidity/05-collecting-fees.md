---
id: liquidity-fees
title: 收取费用
---

## 引言

本指南将介绍如何从 Uniswap V3 协议上的流动性仓位收取费用。它基于 [收集费用代码示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/collecting-fees)，该示例可在 Uniswap 代码示例 [仓库](https://github.com/Uniswap/examples) 中找到。要运行此示例，请查阅示例的 [README](https://github.com/Uniswap/examples/blob/main/v3-sdk/collecting-fees/README.md) 并遵循设置说明。

:::info
如果您需要了解 SDK 的简介，并想了解更多关于这些指南与示例仓库之间联系的信息，请访问我们的 [背景](../01-background.md) 页面！
:::

在 Uniswap V3 协议中，流动性仓位使用非同质化代币表示。在本指南中，我们将使用 `NonfungiblePositionManager` 类帮助我们为 **USDC - DAI** 对铸造一个流动性仓位。然后，我们将尝试收取该仓位从交易对手方获得的任何费用。本指南的输入是 **两个代币**（我们正在为其提供流动性），**每个代币的数量**，池的 **费用** 以及我们希望为每个代币收集的 **最大累积费用**。

本指南将 **涵盖**：

1. 设置我们的费用收取
2. 提交我们的费用收取交易

在本指南结束时，根据上述输入，我们应该能够通过单击按钮收集已铸造仓位的累积费用（如果有），并在我们的仓位和代币余额中看到变化。

对于本指南，使用了以下 Uniswap 包：

- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)

本指南的核心代码可以在 [`collectFees()`](https://github.com/Uniswap/examples/blob/main/v3-sdk/collecting-fees/src/libs/liquidity.ts#L35) 中找到。

:::note
本指南假设您熟悉我们的 [铸造仓位](./01-minting-position.md) 指南。需要一个已铸造的仓位才能添加或移除流动性，因此在铸造仓位之前，按钮将处于禁用状态。

此外请注意，我们无需再次给予 `NonfungiblePositionManager` 转移我们代币的批准，因为我们在铸造仓位时已经完成过。
:::

## 设置我们的费用收取

所有费用收取逻辑都位于 [`collectFees`](https://github.com/Uniswap/examples/blob/be67e7df220b0a270c9d18bbaab529e017213adf/v3-sdk/collecting-fees/src/example/Example.tsx#L24) 函数中。请注意，直到仓位被铸造前，**收取费用** 按钮处于禁用状态。这是因为除非有仓位的流动性已被交易，否则将没有费用可收取。

首先，我们从 NonfungiblePositionManager 合约获取仓位以获取我们应得的费用：

```typescript
import { ethers } from 'ethers'
import JSBI from 'jsbi'
...

const nfpmContract = new ethers.Contract(NONFUNGIBLE_POSITION_MANAGER_ADDRESS, provider)
const position = nfpmContract.positions(positionId)
```

接下来，我们构建一个类型为  [`CollectOptions`](https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L105) 的选项对象，其中包含关于我们想要收取的费用的数据：

```typescript
import { CurrencyAmount } from '@uniswap/sdk-core'

const collectOptions: CollectOptions = {
  tokenId: positionId,
  expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(
    CurrentConfig.tokens.token0,
    JSBI.BigInt(position.tokensOwed0)
  ),
  expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
    CurrentConfig.tokens.token1,
    JSBI.BigInt(position.tokensOwed1)
  ),
  recipient: address,
}
```

有关获取仓位信息的更多信息，请参阅 [此处](./01-position-data.md#fetching-positions)。

与 `NonfungiblePositionManager` 暴露的其他函数类似，我们传递 `tokenId` 和费用的 `recipient`，在这种情况下，是我们的函数输入仓位 ID 和我们的钱包地址。

另外两个 `CurrencyAmount` 参数 (`expectedCurrencyOwed0` 和 `expectedCurrencyOwed1`) 定义了我们期望通过池中每个代币的累积费用获得的 **最大** 金额。我们通过指南的配置设置这些值。

在实际场景中，我们可以通过 NonfungiblePositionManager 合约的 `positions()` 函数获取应归于仓位的费用金额。
我们像在 [获取仓位指南](./03-fetching-positions.md) 中的这段代码片段那样获取仓位信息：

```typescript
const positionInfos = callResponses.map((position) => {
    return {
        tickLower: position.tickLower,
        tickUpper: position.tickUpper,
        liquidity: JSBI.BigInt(position.liquidity),
        feeGrowthInside0LastX128: JSBI.BigInt(position.feeGrowthInside0LastX128),
        feeGrowthInside1LastX128: JSBI.BigInt(position.feeGrowthInside1LastX128),
        tokensOwed0: JSBI.BigInt(position.tokensOwed0),
        tokensOwed1: JSBI.BigInt(position.tokensOwed1),
  }
})
```

`tokensOwed0` 和 `tokensOwed1` 值是应得的费用。

在此示例中，我们在 [`config.ts`](https://github.com/Uniswap/examples/blob/main/v3-sdk/collecting-fees/src/config.ts) 文件中硬编码了这些值。

## 提交我们的费用收取交易

接下来，我们使用构造的 `CollectOptions` 从 `NonfungiblePositionManager` 获取收取费用所需的调用参数：

```typescript
const { calldata, value } =
  NonfungiblePositionManager.collectCallParameters(collectOptions)
```

上述函数返回构造用于收取累积费用的交易所需的 calldata 和 value。现在我们已经有了交易所需的 calldata 和 value，我们可以构建并执行交易：

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

按下按钮后，如果有人与我们的仓位进行了交易，我们应该能够注意到随着费用的收取，USDC 和 DAI 的余额增加。

## 下一步

之前的指南详细介绍了创建和管理仓位所需的所有原子步骤。然而，这些方法可能不会使用您所有的期望货币。为了确保您在最小化燃气费的同时充分利用资金，请查看我们关于在单一交易中 [交换和添加流动性](./05-swap-and-add-liquidity.md) 的指南！