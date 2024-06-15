---
id: position-data
title: 流动性头寸
---

## 引言

本指南将向我们介绍 Uniswap V3 中的 **流动性头寸**，并展示用于与协议交互的 `v3-sdk` 类和合约。
这里展示的概念和代码片段可以在 Uniswap 代码示例 [仓库](https://github.com/Uniswap/examples) 的 **提供流动性** 示例中找到。

在本指南中，我们将研究 [Position](../../reference/classes/Position.md) 和 [NonfungiblePositionManager](../../reference/classes/NonfungiblePositionManager.md) 类，以及 [NonfungiblePositionManager 合约](../../../../contracts/v3/reference/periphery/NonfungiblePositionManager.md)。

到本指南结束时，我们应该熟悉用于与流动性头寸交互的最重要的类，并且应该了解如何从 **NonfungiblePositionManager 合约** 获取头寸。

对于本指南，使用了以下 Uniswap 包：

- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)
- [`@uniswap/v3-periphery`](https://www.npmjs.com/package/@uniswap/v3-periphery)

本指南中提到的代码可以在 [创建头寸](https://github.com/Uniswap/examples/blob/main/v3-sdk/minting-position/src)、[收取费用](https://github.com/Uniswap/examples/blob/main/v3-sdk/collecting-fees/src)、[修改头寸](https://github.com/Uniswap/examples/blob/d34a53412dbf905802da2249391788a225719bb8/v3-sdk/modifying-position/src) 和 [交换和添加流动性](https://github.com/Uniswap/examples/blob/main/v3-sdk/swap-and-add-liquidity/src) 示例中找到。

## 先决条件

要理解什么是头寸，我们需要理解 Uniswap 协议的一些底层概念。

考虑查阅 [概念部分](../../../../concepts/protocol/concentrated-liquidity.md) 以及 [Uniswap 书籍](https://uniswapv3book.com/docs/introduction/uniswap-v3/)。

### 集中流动性

Uniswap V3 池使用集中流动性来允许在特定价格下有更密集的流动性集中。
与 Uniswap V2 使用的全范围流动性模型相比，这允许交易者以较小的价格影响进行更大规模的交易。
流动性提供者可以选择他们希望其流动性被交易使用的特定价格范围。

为了实现这一点，Uniswap V3 池通过 **Tick** 来区分价格范围。

### Tick

Tick 是离散价格范围之间的边界。
1 Tick 的变化始终代表相对于当前价格的 0.01% 价格变动。
Uniswap V3 池可以有不同的 `tickSpacings`，这是一个描述池可以使用的 Tick 的常量。
只有索引可被 tickSpacing 整除的 Tick 才能初始化。
这个值取决于池的费用，费用较高的池具有较高的 tickSpacing。

例如，具有 **高** 费用（1%）的池有一个 tickSpacing 为 200，这意味着可初始化 Tick 之间的价格差异为：

$$1.0001^{200} = 1.0202$$ 或者 $$2.02$$%

### 流动性头寸

当有人向池提供流动性时，他们会创建一个 **流动性头寸**。
此头寸由提供的流动性数量和起始 Tick 和结束 Tick 定义，或头寸的价格范围。

由于 V3 池允许用户选择他们希望提供流动性的任何价格范围，因此可以创建不包含池当前价格的头寸。
在这种情况下，流动性提供者只会向池支付一种类型的代币，从而创建一个 **单边流动性头寸**。

要了解更多关于 Tick 和流动性头寸的工作原理，可以阅读 [白皮书](https://uniswap.org/whitepaper-v3.pdf) 或上述其他资源。

现在我们对 Uniswap V3 中的流动性头寸有了大致的理解，让我们看看 SDK 提供的相关类。

## Position 类

**sdk** 提供了一个 [`Position`](https://github.com/Uniswap/v3-sdk/blob/main/src/entities/position.ts) 类，用于创建链上头寸的本地表示。
它用于创建调用链上函数以创建或修改链上头寸的 calldata。

有四种方法可以构建一个头寸。

直接使用 [构造函数](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L40)：

```typescript
import { Pool, Position } from '@uniswap/v3-sdk'
import JSBI from 'jsbi'

const pool = new Pool(...)
const tickLower: number = -100
const tickUpper: number = 200
const liquidity: JSBI = JSBI.BigInt('1000000000000000000')

const position = new Position({
    pool,
    liquidity,
    tickLower,
    tickUpper
})
```

使用 [`fromAmounts()`](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L312) 函数：

```typescript
import { BigIntish } from '@uniswap/sdk-core'

const pool = new Pool(...)
const tickLower: number = -100
const tickUpper: number = 200
const amount0: BigIntish = '1000000000000000000'
const amount1: BigIntish = JSBI.BigInt('1000000000000000000')
const useFullPrecision: boolean = true

const position = Position.fromAmounts({
    pool, 
    tickLower, 
    tickUpper, 
    amount0, 
    amount1, 
    useFullPrecision
})
```

或者使用 [`fromAmount0()`](https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/entities/position.ts#L354) 或 [`fromAmount1()`](https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/entities/position.ts#L378) 函数：

```typescript
import { BigIntish } from '@uniswap/sdk-core'
...

const pool = new Pool(...)
const tickLower: number = -200
const tickUpper: number = 100
const amount0: BigIntish = '1000000000000000000'
const useFullPrecision: boolean = true

const singleSidePositionToken0 = Position.fromAmount0({
    pool, 
    tickLower, 
    tickUpper, 
    amount0,
    useFullPrecision
})

const amount1: BigIntish = 100000000

const singleSidePositionToken1 = Position.fromAmount1({
    pool, 
    tickLower, 
    tickUpper, 
    amount1,
    useFullPrecision
})
```

这两个最后的函数根据 `token0` 或 `token1` 的给定数量计算一个在给定 Tick 范围内的头寸。第二个代币的数量是从该 Tick 范围内的代币比率和一个代币的数量计算出来的。

如果钱包没有足够的 `token1` 或合约未获得必要的 **转账授权**，创建交易将会失败。

所有这些函数都接受一个具有 **命名值** 的对象作为调用参数。amount 和 liquidity 值是 `BigIntish` 类型，接受 `number`、`string` 和 `JSBI`。

`tickLower` 和 `tickUpper` 的值必须匹配池的 **可初始化 Tick**。

## NonfungiblePositionManager

`NonfungiblePositionManager` 类主要用于为 **NonfungiblePositionManager 合约** 上的功能创建 calldata。

在这一节中，我们将查看 **sdk** 类并在合约上编写函数。

### 创建一个头寸

要在池中创建一个头寸，将在合约上调用 [`mint`](../../../../contracts/v3/reference/periphery/NonfungiblePositionManager.md#mint) 函数。
**sdk** 类提供了 `addCallParameters` 函数来创建交易的 calldata：

```typescript
import { MintOptions, NonfungiblePositionManager } from '@uniswap/v3-sdk'

const mintOptions: MintOptions = {
  recipient: address,
  deadline: Math.floor(Date.now() / 1000) + 60 * 20,
  slippageTolerance: new Percent(50, 10_000),
}

// 获取创建头寸的 calldata
const { calldata, value } = NonfungiblePositionManager.addCallParameters(
  positionToMint,
  mintOptions
)
```

此调用会创建一个不存在的头寸，但也可以用来增加现有头寸。
查看 [创建头寸指南](./02-minting-position.md) 和 [修改头寸指南](./04-modifying-position.md) 以了解更多信息。

### 减少和增加头寸

要减少或增加头寸的流动性，将在合约上调用 `decreaseLiquidity` 或 `increaseLiquidity` 函数。
为了增加，使用上面提到的 `addCallParameters`，为了减少我们使用 `removeCallParameters`：

```typescript
const { calldata, value } = NonfungiblePositionManager.removeCallParameters(
  currentPosition,
  removeLiquidityOptions
)
```

查看 [修改头寸指南](04-modifying-position.md) 以了解如何创建 `currentPosition` 和 `removeLiquidityOptions` 参数。

### 收取费用

要收取累积的费用，将在合约上调用 `collect` 函数。
**sdk 类** 提供了 `collectCallParameters` 函数来为此创建 calldata：

```typescript
const { calldata, value } =
  NonfungiblePositionManager.collectCallParameters(collectOptions)
```


## 下一步

既然你已经熟悉了与流动性头寸交互的最重要的类和合约，继续阅读下一个关于 [创建头寸](./02-minting-position.md) 的指南。