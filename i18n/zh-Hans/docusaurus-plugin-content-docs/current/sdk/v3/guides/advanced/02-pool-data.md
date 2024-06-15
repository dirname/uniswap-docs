---
id: pool-data
title: 获取池数据
---

## 引言

本指南将涵盖如何使用完整刻度数据初始化池，以允许链下计算。它基于[获取池数据示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/pool-data)，该示例位于Uniswap代码示例[仓库](https://github.com/Uniswap/examples)中。要运行此示例，请参阅指南的[README](https://github.com/Uniswap/examples/blob/main/v3-sdk/pool-data/README.md)，并遵循设置说明。

:::info
如果您需要了解SDK的简要介绍以及这些指南如何与示例仓库相连，请访问我们的[背景](./01-background.md)页面！
:::

在本示例中，我们将使用**ethers JS**和**ethers-multicall**构建一个`Pool`对象，以便在后续指南中使用。

本指南将**覆盖**：

1. 计算池的地址
2. 引用池合约并获取元数据
3. 使用多调用来获取所有已初始化刻度的位置
4. 使用多调用通过其索引获取所有刻度
5. 构建池对象

在本指南结束时，我们将创建一个`Pool`对象，准确地表示我们在获取时V3池的状态。

对于本指南，使用了以下Uniswap包：
  
- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)

我们还将使用`ethers-multicall`npm包：

- [`ethers-multicall`](https://www.npmjs.com/package/ethers-multicall)

本指南的核心代码可以在[`fetcher.ts`](https://github.com/Uniswap/examples/tree/main/v3-sdk/multicall/src/libs/fetcher.ts)中找到。

## 配置

伴随本指南的示例可以在[`config.ts`](https://github.com/Uniswap/examples/tree/main/v3-sdk/multicall/src/config.ts)文件中进行配置。
默认配置定义了RPC端点和用于本指南的池：

```typescript
export const CurrentConfig: ExampleConfig = {
  env: Environment.MAINNET,
  rpc: {
    local: 'http://localhost:8545',
    mainnet: 'https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721',
  },
  ...
  pool: {
    token0: USDC_TOKEN,
    token1: WETH_TOKEN,
    fee: FeeAmount.MEDIUM,
  },
}
```

FeeAmount.MEDIUM意味着池具有**0.3%**的交换费用。
`USDC_TOKEN`和`WETH_TOKEN`在[`constants.ts`](https://github.com/Uniswap/examples/tree/main/v3-sdk/multicall/src/libs/constants.ts)文件中定义：

```typescript
export const WETH_TOKEN = new Token(
  SupportedChainId.MAINNET,
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  18,
  'WETH',
  'Wrapped Ether'
)

export const USDC_TOKEN = new Token(
  SupportedChainId.MAINNET,
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  6,
  'USDC',
  'USD//C'
)
```

## 计算池部署地址

在本示例中，我们将构建**USDC - WETH**池与**MEDIUM**费用。SDK提供了一种方法来计算地址：

```typescript
import { Pool } from '@uniswap/v3-sdk'
import { CurrentConfig } from '../config.ts'

const poolAddress = Pool.getAddress(
    CurrentConfig.pool.token0, 
    CurrentConfig.pool.token1, 
    CurrentConfig.pool.fee
  )
```

Uniswap V3允许在部署池时有4个不同的费用层级，因此每对代币可以存在多个池。

## 创建池合约实例并获取元数据

现在我们有了**USDC - ETH**池的地址，我们可以构建一个**ethers**`Contract`实例来与之交互。
为了构建合约，我们需要提供合约的地址、其ABI和连接到RPC端点的提供者。我们通过`@uniswap/v3-core`包获得对合约ABI的访问权限，该包包含了Uniswap V3协议的核心智能合约：

```typescript
import { ethers } from 'ethers
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'

const provider = getProvider()
const poolContract = new ethers.Contract(
    poolAddress,
    IUniswapV3PoolABI.abi,
    provider
)
```

`getProvider()`函数返回一个`ethers.providers.JsonRpcProvider`，根据我们在`config.ts`中设置的环境，其包含本地或主网RPC URL。

一旦我们设置了对合约的引用，我们就可以继续访问其方法。为了构建我们链下表示的池合约，我们需要获取其流动性、sqrtPrice、当前活动的刻度和完整的刻度数据。
我们直接从区块链获取**liquidity**、**sqrtPrice**和**tick**，通过在池合约上调用`liquidity()`和`slot0()`：

```typescript
const [liquidity, slot0] =
  await Promise.all([
    poolContract.liquidity(),
    poolContract.slot0(),
  ])
```

[插槽0函数](../../../../contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolState.md#slot0)代表池的第一个（第0个）存储插槽，并在一个函数中暴露多个有用的值：

```solidity
  function slot0(
  ) external view returns (
    uint160 sqrtPriceX96, 
    int24 tick, 
    uint16 observationIndex, 
    uint16 observationCardinality, 
    uint16 observationCardinalityNext, 
    uint8 feeProtocol, 
    bool unlocked
  )
```

对于我们的用例，我们只需要`sqrtPriceX96`和当前活动的`tick`。

## 获取所有刻度

V3池使用刻度来[集中流动性](../../../../concepts/protocol/concentrated-liquidity.md)在价格范围内，从而允许更好的交易定价。
尽管大多数池只有几个**已初始化的刻度**，但有可能池的流动性由数千个**已初始化的刻度**定义。
在这种情况下，使用常规RPC调用来获取所有刻度可能非常昂贵或缓慢。

如果您不熟悉刻度的概念，请查看[`介绍`](./01-introduction.md)。

为了访问刻度数据，我们将使用V3池合约的`ticks`函数：

```solidity
  function ticks(
    int24 tick
  ) external view returns (
    uint128 liquidityGross, 
    int128 liquidityNet, 
    uint256 feeGrowthOutside0X128, 
    uint256 feeGrowthOutside1X128, 
    int56 tickCumulativeOutside, 
    uint160 secondsPerLiquidityOutsideX128, 
    uint32 secondsOutside, 
    bool initialized
  )
```

我们向函数提供的`tick`参数是尝试获取的刻度的**索引**（内存位置）。
为了获取池中所有已初始化刻度的索引，我们可以从**tickBitmaps**计算它们。
为了获取V3池的`tickBitmap`函数：

```solidity
  function tickBitmap(
      int16 wordPosition
  ) external view returns (uint256)
```

池存储大量位图，每个位图都包含256个刻度的状态。
函数接受的参数`int16 wordPosition`是我们要获取的位图的位置。
我们可以从池的`tickSpacing`计算所有位图（有时也称为单词）的位置。

所以总结一下，我们需要4个步骤来获取所有已初始化的刻度：

1. 根据池的tickSpacing计算所有位图位置。
2. 使用它们的位置获取所有位图。
3. 从位图计算所有刻度的内存位置。
4. 通过其内存位置获取所有刻度。

我们将为获取调用使用多调用。

## 多调用

多调用合约**聚合来自多个合约调用的结果**，因此允许在**一次RPC请求**中发送多个合约调用。
这可以显著提高大量数据的获取速度，并确保所获取的数据全部来自**同一区块**。

我们将使用MakerDAO的Multicall2合约。
我们使用`ethers-muticall`npm包轻松地与合约交互。

## 计算所有位图位置

如前所述，Uniswap V3池存储**位图**，也称为*单词*，它们代表每次256个可初始化刻度的状态。
单词中某个位的值为1，如果该索引处的刻度被初始化；如果未初始化，则为0。
我们可以从池的**单词**计算已初始化刻度的位置。

所有Uniswap V3池的刻度都在索引`-887272`和`887272`之间。
我们可以根据这些索引和池的tickSpacing计算最小和最大单词：

```typescript
function tickToWord(tick: number): number {
  let compressed = Math.floor(tick / tickSpacing)
  if (tick < 0 && tick % tickSpacing !== 0) {
    compressed -= 1
  }
  return tick >> 8
}

const minWord = tickToWord(-887272)
const maxWord = tickToWord(887272)
```

刻度只能在**可被tickSpacing整除**的索引处初始化。
一个单词包含256个刻度，所以我们可以通过右移8位来压缩刻度。

## 从位置获取位图

知道了池合约中的单词位置，我们现在可以使用多调用和`tickBitmap`读取调用来从池中获取它们。

首先，我们初始化我们的多调用提供者和池合约：

```typescript
import { ethers } from 'ethers'
import { Contract, Provider } from 'ethers-multicall'

const ethersProvider = new ethers.providers.JsonRpcProvider("...rpcUrl")
const multicallProvider = new Provider(ethersProvider)
await multicallProvider.init()

const poolContract = new Contract(poolAddress, IUniswapV3PoolABI.abi)
```

`multicallProvider`创建多调用请求并通过ethers提供者发送。

接下来，我们遍历所有可能的单词位置，并为每个位置添加一个`tickBitmap`调用：

```typescript
let calls: any[] = []
let wordPosIndices: number[] = []
for (let i = minWord; i <= maxWord; i++) {
  wordPosIndices.push(i)
  calls.push(poolContract.tickBitmap(i))
}
```

我们还跟踪单词位置索引，以便能够按照我们向数组添加调用的相同顺序遍历它们。

我们使用`multicallProvider.all()`函数发送多调用并映射结果：

```typescript
const results: bigint[] = (await multicallProvider.all(calls)).map(
    (ethersResponse) => {
      return BigInt(ethersResponse.toString())
    }
  )
```

关于位图外观的一个很好的可视化可以在[Uniswap V3开发手册](https://uniswapv3book.com/docs/milestone_2/tick-bitmap-index/)中找到：

<img src={require('./images/tickBitmap_cut.png').default} alt="TickBitmap" box-shadow="none"/>

我们鼓励任何试图深入了解Uniswap协议的人阅读Uniswap V3手册。

## 计算所有刻度的内存位置

现在我们已经获取了所有**位图**，我们检查哪些刻度被初始化，并从**单词索引**和池的**tickSpacing**计算**刻度位置**。

我们通过将位向正在查看的索引移动并执行按位与操作来检查单词内部的刻度是否**初始化**：

```typescript
const bit = 1n
const initialized = (bitmap & (bit << BigInt(i))) !== 0n
```

如果刻度**初始化**，我们通过将单词索引乘以256来反转从刻度到单词的压缩，这相当于左移8位，加上我们当前的位置，并乘以tickSpacing：

```typescript
const tickIndex = (ind * 256 + i) * tickSpacing
```

整个循环看起来像这样：

```typescript
const tickIndices: number[] = []

  for (let j = 0; j < wordPosIndices.length; j++) {
    const ind = wordPosIndices[j]
    const bitmap = results[j]

    if (bitmap !== 0n) {
      for (let i = 0; i < 256; i++) {
        const bit = 1n
        const initialized = (bitmap & (bit << BigInt(i))) !== 0n
        if (initialized) {
          const tickIndex = (ind * 256 + i) * tickSpacing
          tickIndices.push(tickIndex)
        }
      }
    }
  }
```

我们现在有一个数组，其中包含所有已初始化刻度的索引。

## 通过其索引获取所有刻度

我们再次使用多调用提供者执行所有刻度索引的聚合读取调用。
我们再次创建调用承诺数组，并使用`.all()`进行多调用：

```typescript
const calls: any[] = []

for (const index of tickIndices) {
  calls.push(poolContract.ticks(index))
}

const results = await multicallProvider.all(calls)
```

结果数组的顺序与**tickIndices**中的元素相同。

我们能够组合**tickIndices**和**results**数组来创建一个`Tick`对象数组：

```typescript
const allTicks: Tick[] = []

  for (let i = 0; i < tickIndices.length; i++) {
    const index = tickIndices[i]
    const ethersResponse = results[i]
    const tick = new Tick({
      index,
      liquidityGross: JSBI.BigInt(ethersResponse.liquidityGross.toString()),
      liquidityNet: JSBI.BigInt(ethersResponse.liquidityNet.toString()),
    })
    allTicks.push(tick)
  }
```

我们需要将RPC提供者的响应解析为JSBI值，以便v3-sdk可以使用。

## 构建池

我们现在有了构建`Pool`所需的一切：

```typescript
const usdcWethPool = new Pool(
    USDC,
    WETH,
    feeAmount,
    slot0.sqrtPriceX96,
    liquidity,
    slot0.tick,
    allTicks
)
```

使用这个完全初始化的池，我们可以进行准确的链下计算。

## 下一步

现在您熟悉了获取池数据，继续您的旅程，学习[下一个示例](./03-active-liquidity.md)，了解如何可视化池的流动性密度。