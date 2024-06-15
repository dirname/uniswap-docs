---
id: price-oracle
title: Uniswap 作为价格预言机
---

## 引言

本指南将介绍如何从 V3 池获取价格观察数据，以获取链上资产价格。
它基于 [Price Oracle 示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/price-oracle)，该示例可在 Uniswap 代码示例 [仓库](https://github.com/Uniswap/example) 中找到。
要运行此示例，请查阅指南的 [README](https://github.com/Uniswap/examples/blob/main/v3-sdk/price-oracle/README.md) 并遵循设置说明。

:::info
如果您需要关于 SDK 的简要介绍以及了解这些指南与示例仓库之间的联系，请访问我们的 [背景](./01-background.md) 页面！
:::

在本示例中，我们将使用 **ethers JS** 来观察池的当前刻度在多个区块中的发展情况。
然后，我们将计算所观测时间间隔的时间加权平均价格 - **TWAP**，以及时间加权平均流动性 - **TWAL**。

本指南将 **涵盖**：

1. 理解观察数据
2. 获取观察数据
3. 计算 TWAP
4. 计算 TWAL
5. 为何优选 observe 而非 observations

在深入本指南之前，考虑阅读使用 Uniswap V3 作为 [链上预言机](../../../../concepts/protocol/oracle.md) 的理论基础。

对于本指南，使用了以下 Uniswap 包：
  
- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)

本指南的核心代码可以在 [`oracle.ts`](https://github.com/Uniswap/examples/tree/main/v3-sdk/price-oracle/src/libs/oracle.ts) 中找到。

## 理解观察数据

首先，我们需要创建一个池合约来从区块链获取数据。请参阅 [池数据指南](./02-pool-data.md)，了解如何计算地址并创建 **ethers Contract** 来进行交互。

```typescript
const poolContract = new ethers.Contract(
    poolAddress,
    IUniswapV3PoolABI.abi,
    provider
)
```

所有 V3 池都存储当前刻度和区块时间戳的观察数据。
为了最小化池部署成本，当池创建时，仅在合约中存储一个观察数据。
任何愿意承担燃气费用的人都可以 [增加](../../../../contracts/v3/reference/core/UniswapV3Pool.md#increaseobservationcardinalitynext) 存储的观察数据数量，最多可达 `65535`。
如果池无法存储额外的观察数据，则会覆盖最旧的一个。

我们创建一个接口来映射我们的数据：

```typescript
interface Observation {
    secondsAgo: number
    tickCumulative: bigint
    secondsPerLiquidityCumulativeX128: bigint
}
```

为了从池合约获取 `Observations`，我们将使用 [`observe`](../../../../contracts/v3/reference/core/UniswapV3Pool.md#observe) 函数：

```solidity
function observe(
    uint32[] secondsAgos
) external view override noDelegateCall returns (
    int56[] tickCumulatives, 
    uint160[] secondsPerLiquidityCumulativeX128s
)
```

我们首先通过调用 `slot0` 函数检查池中存储了多少观察数据。

```typescript
const slot0 = await poolContract.slot0()

const observationCount = slot0.observationCardinality
const maxObservationCount = slot0.observationCardinalityNext
```

`observationCardinalityNext` 是池当前 **能存储** 的观察数据的最大数量。
`observationCardinality` 是池目前 **已存储** 的观察数据的实际数量。

观察数据仅在调用池上的 `swap()` 函数或 **修改仓位** 时存储，因此在 `observationCardinalityNext` 增加后写入观察数据可能需要一些时间。
如果池上的观察数据数量不足，我们需要调用 `increaseObservationCardinalityNext()` 函数，并将其设置为我们期望的值。

这是一个写操作，因为合约需要在区块链上存储更多数据。
我们将需要一个 **钱包** 或 **签名者** 来支付相应的燃气费用。

在此示例中，我们希望获取 10 个观察数据。

```typescript
import { ethers } from 'ethers'

let provider = new ethers.providers.WebSocketProvider('rpcUrl...')
let wallet = new ethers.Wallet('private_key', provider)

const poolContract = new ethers.Contract(
    poolAddress,
    IUniswapV3PoolABI.abi,
    wallet
)

const txRes = await poolContract.increaseObservationCardinalityNext(10)
```

现在，池将填充未使用的观察数据槽位。
由于有人必须支付写入观察数据的燃气费用，向观察数据数组写入内容是池的 `swap()` 和 `modifyPosition()` 函数的一部分。

:::note
保存一个观察数据是在区块链上的写操作，因此会产生燃气费用。
这意味着池仅能在执行池合约写调用的区块上保存观察数据。
如果没有为某个区块存储观察数据，则将其计算为两个最近观察数据之间的时间加权算术平均值。
正因为如此，我们可以确信最旧的观察数据至少有 10 个区块之久。
很可能是覆盖的区块数大于 10。
:::

## 获取观察数据

我们现在可以确定至少存在 10 个观察数据，并且可以安全地获取过去 10 个区块的观察数据。
我们使用数字数组调用 `observe` 函数，表示从现在起若干秒前的观察数据的时间戳。

在此示例中，我们在过去十个区块计算平均值，所以我们获取 2 个观察数据，它们之间相隔 9 倍的区块时间。
获取 `0 秒` 前的观察数据将返回 **最近的观察数据**，其被插值到当前时间戳，因为观察数据最多每区块写入一次。

```typescript
const timestamps = [
    0, 108
]

const [tickCumulatives, secondsPerLiquidityCumulatives] = await poolContract.observe(timestamps)

const observations: Observation[] = timestamps.map((time, i) => {
    return {
        secondsAgo: time
        tickCumulative: BigInt(tickCumulatives[i])
        secondsPerLiquidityCumulativeX128: BigInt(secondsPerLiquidityCumulatives[i]) 
    }
})
```

我们将 RPC 提供商的响应映射到与我们的观察数据接口匹配的形式。

## 计算平均价格

为了计算我们获取期间的时间加权平均价格（TWAP），我们首先需要理解所获取的值含义。

`tickCumulative` 值是我们获取的时间戳处的 `刻度累加器` 快照。刻度累加器存储自池初始化以来每一秒的所有当前刻度的总和。因此，其值随每一秒而递增。

我们不能直接使用单个观察数据的值来做任何有意义的事情。相反，我们需要比较两个观察数据之间的 **差异** 并计算 **时间加权算术平均值**。

```typescript
const diffTickCumulative = observations[0].tickCumulative - observations[1].tickCumulative
const secondsBetween = 108

const averageTick = diffTickCumulative / secondsBetween
```

现在我们知道过去 10 个区块的平均活跃刻度，我们可以使用 `tickToPrice` 函数计算价格，该函数返回一个 [`Price`](../../../core/reference/classes/Price.md) 对象。请参阅 [池数据](./02-pool-data.md) 指南，了解如何构建池对象并访问其属性。对于本指南，我们不需要完整的刻度数据。

```typescript
import { tickToPrice, Pool } from '@uniswap/v3-sdk'

const pool = new Pool(...)

const TWAP = tickToPrice(pool.token0, pool.token1, averageTick)
```

我们现在计算了过去 108 秒的 **时间加权平均价格**。

让我们继续计算平均流动性。

## 计算平均流动性

要理解 **活跃流动性** 这一术语，请参阅 [上一个指南](./03-active-liquidity.md)。
类似于 `刻度累加器`，`流动性累加器` 自池初始化以来存储每秒的值总和，并且随每一秒递增。
由于活跃流动性值的大小，简单地累加活跃流动性是不切实际的。而是累加 **每流动性秒数**。

`secondsPerLiquidityX128` 值通过将上次观察数据后的秒数左移 128 位，并除以活跃流动性计算得出。然后将其添加到累加器中。

```solidity
uint32 delta = blockTimestamp - last.blockTimestamp;

uint128 secondsPerLiquidityX128 = (uint160(delta) << 128) / liquidity
uint160 secondsPerLiquidityCumulativeX128 = last.secondsPerLiquidityCumulativeX128 + secondsPerLiquidityX128
```

`last` 在这个示意性代码片段中是最新的观察数据。考虑查看 [Solidity Oracle 库](https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/Oracle.sol)，以查看实际实现。

让我们反转这个计算，找出我们观测时间段内的平均活跃流动性。

```typescript
const diffSecondsPerLiquidityX128 = observations[0].secondsPerLiquidityCumulativeX128 -
                    observations[1].secondsPerLiquidityCumulativeX128
const secondsBetweenX128 = BigInt(108) << 128

const TWAL =  secondsBetweenX128 / diffSecondsPerLiquidityX128
```

这个 **时间加权平均流动性** 是观测时间段的调和平均值。

:::note
与操纵/更改池的流动性相关的成本比操纵资产价格的成本要小几个数量级，因为 **价格** 对于具有 **一个以上市场** 的资产会被套利。
向池中添加大量流动性和在区块过后提取它们，基本上只花费燃气费用。

小心使用 **TWAP** 并考虑处理异常值。
:::

## 为何优选 observe 而非 observations？

如前所述，`observe` 函数根据池中存储的最近观察数据计算请求的时间戳的观察数据。
也可以直接通过调用 `observations` 函数并传入我们感兴趣的观察数据的索引来获取存储的观察数据。

让我们获取池中存储的所有观察数据。我们已经确保 observationCardinality 为 10。
固态结构 `Observation` 如下所示：

```solidity
struct Observation {
    // 观察数据的区块时间戳
    uint32 blockTimestamp;
    // 刻度累加器，即自池首次初始化以来刻度*已过时间
    int56 tickCumulative;
    // 每流动性秒数，即已过秒数 / max(1, liquidity) 自池首次初始化以来
    uint160 secondsPerLiquidityCumulativeX128;
    // 观察数据是否已初始化
    bool initialized;
}
```

可以请求直到（但不包括）索引 `65535` 的任何观察数据，但等于或大于 `observationCardinality` 的索引将返回未初始化的观察数据。

以下代码片段的完整代码可以在 [`oracle.ts`](https://github.com/uniswap/examples/blob/main/v3-sdk/oracle/src/libs/oracle.ts) 中找到

```typescript
let requests = []
for (let i = 0; i < 10; i++) {
    requets.push(poolContract.observations(i))
}

const results = await Promise.all(requests)
```

我们一次只能请求一个观察数据，所以我们会创建一个 Promise 数组来获取观察数据数组。

我们在这里已经看到了与使用 `observe` 函数的一个不同之处。
虽然 `observe` 在智能合约中创建数组并返回它，但调用 `observations` 需要我们进行多次 RPC 调用。

:::note
根据我们的设置和所使用的节点，任一选项都可能更快，但进行多次 RPC 调用总是有区块链状态在我们调用之间发生变化的风险。
虽然极其不可能，但仍有可能在我们的调用之间，我们的节点更新了新区块和新观察数据。
因为我们访问数组的索引，这将给我们一个意外的结果，我们需要在实现中将其作为边缘情况来处理。
:::

处理这种行为的一种方法是部署或 [使用](https://github.com/mds1/multicall) 具有 [多调用](https://solidity-by-example.org/app/multi-call/) 功能的合约，以便通过一次请求获取所有观察数据。
您还可以在 [池数据指南](./02-pool-data.md) 中找到 JS 多调用的示例。

我们将 RPC 结果映射到我们创建的 TypeScript 接口：

```typescript
const utcNow = Math.floor(Date.now() / 1000)
const observations = results.map((result) => {
    const secondsAgo = utcNow - Number(result.blockTimeStamp)
    return {
        secondsAgo,
        tickCumulative: BigInt(result.tickCumulative),
        secondsPerLiquidityCumulativeX128: BigInt(result.secondsPerLiquidityCumulativeX128) 
    }
}).sort((a, b) => a.secondsAgo - b.secondsAgo)
```

我们现在有了与我们习惯的格式相同的观察数据数组。

:::note
因为观察数据存储在一个 **固定大小的数组** 中，如果有新的观察数据存储，则始终覆盖最旧的观察数据，所以它们是 **未排序** 的。
我们需要按时间戳对结果进行排序。
:::

我们获取的观察数据的时间戳对应于池上发生 **交易或仓位变化** 的区块。
正因为如此，我们需要从 **相邻的观察数据** 手动计算特定区间内的观察数据。

综上所述，与 `observe` 相比，使用 `observations` 更难处理，而且我们需要考虑多种边缘情况。
因此，建议使用 `observe` 函数。

## 下一步

既然您已经熟悉 Uniswap 的预言机功能，不妨查看关于 **范围订单** 的 [下一指南](./05-range-orders.md)。