---
id: active-liquidity
title: 活跃流动性
---

## 引言

本指南将介绍如何从池的特定价格区间中获取和计算活跃流动性。它基于[Liquidity Density 示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/liquidity-density)，并且在[Uniswap Analytics](https://info.uniswap.org/#/pools)网站上以更复杂的方式实际使用。

:::info
如果您需要了解SDK的简要说明以及这些指南与示例仓库的关联，请访问我们的[背景](./01-background.md)页面！
:::

在本指南中，我们将使用V3子图从**theGraph**获取所有价格区间，并计算每个价格区间下池可以使用的活跃流动性。然后，我们使用`recharts`绘制图表，可视化池的流动性密度。

本指南将涵盖：

1. 从池获取tickSpacing和当前活跃价格区间
2. 从净流动性计算活跃流动性
3. 根据价格区间数据绘制图表

本指南不涵盖：

- 使用recharts库的具体细节。您可以在这里[阅读更多](https://recharts.org/en-US/)。

在指南结束时，我们应该能够可视化任何V3池的流动性。

## 理解活跃流动性

为了可视化池中活跃流动性的分布，我们希望围绕当前活跃价格区间绘制图表。为此，我们首先需要理解：

- 什么是初始化的价格区间？
- 当前价格区间是什么？

### 初始化的价格区间

当为池提供流动性时，LP（流动性提供者）决定流动性应该提供的**价格范围**以及要提供的流动性量。
池理解位置为**下限和上限价格区间之间的流动性**。在此上下文中，价格区间的索引是池资产间价格的表示。

观察这个[V3池的多个位置](https://www.desmos.com/calculator/oduetjzfp4)的[可视化]，我们可以看到，用于交换的可用流动性在位置内部不会改变，但在跨入下一个位置时会发生变化。
这就是池的**初始化价格区间**所代表的 - 它们是一个或多个位置开始或结束的表示。

<img src={require('./images/liquidityNetComparison.png').default} alt="LiquidityNet1" box-shadow="none"/>

进入或离开一个位置时，其流动性会添加到或从**用于交换的活跃流动性**中移除。
初始化的价格区间在`liquidityNet`字段中存储这种**可用流动性变化**。
这种变化总是相对于当前活跃价格区间 - 即当前价格进行存储。
当价格穿过一个初始化的价格区间时，它会被更新，之前穿过价格区间时添加的流动性现在将被移除，反之亦然。

`liquidityGross`值表示引用该价格区间的流动性的总值。
这对于特殊情况很重要，即一个位置在一个价格区间结束，而第二个具有完全相同流动性值的位置会在该价格区间开始。
在这种情况下，`liquidityNet`将为**0**，但`liquidityGross`仍将有一个值，这确保了价格区间不会从池中删除。

为了在图表中可视化流动性，我们只需要考虑变化，因此只获取`liquidityNet`不为0的价格区间就足够了。

### 获取初始化的价格区间

为了获取池的所有价格区间，我们将使用[Uniswap V3图](../../../../api/subgraph/overview.md)。
为了可视化活跃流动性，我们需要**tickIdx**、**liquidityGross**和**liquidityNet**。

我们定义GraphQL查询并[发送POST请求](https://axios-http.com/docs/post_example)至V3子图API端点：

```typescript
axios.post(
        "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
        {"query": `{ ticks(
              where: {poolAddress: "${poolAddress.toLowerCase()}", liquidityNet_not: "0"}
              first: 1000,
              skip: ${skip},
              orderBy: tickIdx,
              orderDirection: asc
            ) {
              tickIdx
              liquidityGross
              liquidityNet
            }
          }`
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
```

我们仅获取**有流动性**的价格区间，并将poolAddress转换为**小写**以便子图处理。为了确保价格区间正确排序，我们还在查询中定义了**排序方向**。

:::note
GraphQL一次只能获取1000条记录。如果一个池有超过1000个初始化的价格区间，需要多次调用才能获取所有信息。
:::

从**theGraph**获得的价格区间具有以下格式：

```typescript
interface GraphTick {
    tickIdx: string
    liquidityGross: string
    liquidityNet: string
}
```

### 当前价格区间

池的当前价格区间代表最后一次交换后的**当前价格**。
考虑到初始化的价格区间仅代表位置，我们看到它不一定就是初始化的价格区间之一，而是可以在它们之间任意一点。
当前价格下的活跃流动性也存储在智能合约中 - 我们已经在[上一个指南](./02-pool-data.md)中使用`liquidity`函数获取了它。

### Tick间距

只有那些索引可以被池的tickSpacing整除的余数为0的价格区间是可初始化的。
这是协议定义的一种约定，以节省gas。
池的tickSpacing取决于费用等级。
低费用的池旨在用于更稳定的代币对，并允许LP在其定位流动性时具有更高的粒度。

我们可以从`v3-sdk`暴露的`TICK_SPACINGS`枚举中获取`tickSpacing`：

```typescript
import { TICK_SPACINGS }

const tickSpacing = TICK_SPACINGS[fee]
```

或者，如果我们已经构建了一个`Pool`对象，我们只需调用`Pool.tickSpacing()`。

### 将所有内容组合在一起

为了可视化池的流动性密度，很少有理由显示池的完整价格区间范围，因为绝大多数流动性将集中在狭窄的价格范围内。

相反，我们将围绕当前价格显示合理数量的价格区间。

## 计算活跃流动性

我们知道价格区间之间的间距以及活跃流动性发生变化的初始化的价格区间。
我们所需要做的就是从当前价格区间开始计算，并向外迭代。

下面代码片段中提到的代码可以在[`active-liquidity.ts`](https://github.com/Uniswap/examples/tree/main/v3-sdk/pool-data/src/libs/active-liquidity.ts)找到。

为了绘制图表，我们想要一个看起来像这样的数据结构：

```typescript
interface TickProcessed {
    tickIdx: number,
    liquidityActive: JSBI,
    liquidityNet: JSBI,
    price0: string,
    price1: string,
    isCurrent: boolean
}
```

为了直接从价格区间索引访问初始化的价格区间，我们将其存储在一个[Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)中：

```typescript
const tickIdxToTickDictionary: Record<string, GraphTick> = Object.fromEntries(
    ticks.map((graphTick) => [graphTick.tickIdx, graphTick])
  ) 
```

此代码片段中的`ticks`变量是我们之前从V3子图得到的结果。

我们希望标记最接近当前价格的价格区间，并且我们希望能够向用户显示价格区间处的价格。
我们计算最接近当前价格的**可初始化价格区间**，并创建我们从中开始的活动价格区间：

```typescript
import { tickToPrice } from '@uniswap/v3-sdk'

const activeTickIdx = Math.floor(pool.tickCurrent / tickSpacing) * tickSpacing

const activeTickProcessed: TickProcessed = {
    tickIdx: activeTickIdx,
    liquidityActive: pool.liquidity,
    liquidityNet: JSBI.BigInt(0),
    price0: tickToPrice(tokenA, tokenB, activeTickIdx).toFixed(6),
    price1: tickToPrice(tokenB, tokenA, activeTickIdx).toFixed(6),
    isCurrent: true
}
```

这里我们也根据tickIdx计算代币的价格，`v3-sdk`为此导出了一个方便的实用程序函数`tickToPrice`。
我们将价格作为字符串存储，因为在本例中我们不会做进一步的计算。相反，我们将使用它在图表的工具提示中显示价格。
请注意，`price0`是tokenA相对于tokenB的价格，而`price1`是tokenB相对于tokenA的价格**在指定的价格区间**。

如果**当前价格区间已初始化**，我们还需要设置**liquidityNet**以正确处理离开位置：

```typescript
const currentTickInitialized = tickIdxToTickDictionary[activeTickIdx]
if (currentTickInitialized !== undefined) {
    activeTickProcessed.liquidityNet = JSBI.BigInt(currentTickInitialized.liquidityNet)
}
```

我们现在从活动价格区间开始向外迭代，并计算我们想要显示的每个价格区间的活跃流动性。然后将处理过的价格区间保存在`TickProcessed`数组中。
我们选择任意数量的价格区间进行显示，对于此示例，我们在每个方向上计算100个价格区间。

```typescript
import { TickMath, tickToPrice } from '@uniswap/v3-sdk'

let previousTickProcessed = {
    ...activeTickProcessed
}

processedTicks: TickProcessed[] = []

for (let i = 0; i < 100; i++) {
    const currentTickIdx = previousTickProcessed.tickIdx + tickSpacing

    if (currentTickIdx > TickMath.MAX_TICK) {
        break
    }

    const currentTickProcessed = {
        liquidityActive: previousTickProcessed.liquidityActive,
        tickIdx: currentTickIdx,
        liquidityNet: JSBI.BigInt(0),
        price0: tickToPrice(token0, token1, currentTickIdx),
        price1: tickToPrice(token1, token0, currentTickIdx),
        isActive: false
    }
    
    ...
}
```

我们一次计算一个价格区间，并且我们需要通过检查`TickMath.MAX_TICK`来确保我们的价格区间保持在可能的价格范围内。
再次，我们检查当前价格区间是否已初始化，如果是，则重新计算活跃流动性：

```typescript
for (let i = 0; i < 100; i++) {

    ...

    const currentTickInitialized = tickIdxToTickDictionary[currentTickIdx]

    if (currentTickInitialized !== undefined) {
        currentTickProcessed.liquidityNet = JSBI.BigInt(currentTickInitialized.liquidityNet)
        currentTickProcessed.liquidityActive = JSBI.add(
            previousTickProcessed.liquidityActive,
            JSBI.BigInt(currentTickInitialized.liquidityNet)
        )
    }

    processedTicks.push(currentTickProcessed)
    previousTickProcessed = currentTickProcessed
}
```

在我们完成计算当前价格区间之后的100个价格区间后，我们反向迭代之前的那些价格区间。向下迭代时，我们需要在向上迭代时添加净流动性的地方减去它。
您可以在[Uniswap示例仓库](https://github.com/Uniswap/examples/tree/main/v3-sdk/active-liquidity)中找到完整的代码示例。

最后，我们能够结合之前的、活动的和随后的价格区间：

```typescript
const allProcessedTicks = previousTicks.concat(activeTickProcessed).concat(subsequentTicks)
```

## 绘制图表

我们完成了计算，接下来是展示数据。**Recharts**无法处理JSBI，所以我们需要将我们创建的数组转换为它可以处理的格式：

```typescript
const chartTicks: TicksChart[] = allProcessedTicks.map((tickProcessed) => {
    return {...processedTick, liquidityActiveChart: parseFloat(tickProcessed.liquidityActive.toString())}
})
```

精度的损失在图表中不会明显可见，我们仍然可以在工具提示中显示确切的数字，如果我们愿意的话。
流动性在链上以`uint128`格式存储，因此最大精度损失将远小于几乎所有ERC20代币的小数位数。

最后，我们绘制图表：

```jsx
<ResponsiveContainer width="80%" height={400}>
    <BarChart>
        <XAxis />
        <YAxis />
        <Bar dataKey="liquidityActiveChart" fill="#2172E5">
            {chartTicks.map((entry, index) => {
                return (
                <Cell
                   key={`cell-${index}`}
                   fill={entry.isActive ? '#F51E87' : '#2172E5'}
                />
                )
            })}
        </Bar>
    </BarChart>
</ResponsiveContainer>
```

在实际应用中，您可能需要适当地格式化图表并向用户显示附加信息。
查看本指南的完整[代码示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/active-liquidity)以及官方recharts[文档](https://recharts.org/)。

您也可以查看[Uniswap Info](https://github.com/Uniswap/v3-info)仓库，看看类似的图表是如何在生产环境中使用的。

## 锁定流动性

如果您运行示例，您会注意到图表还显示了一个带有我们在这个示例中没有涉及的额外信息的自定义工具提示。
工具提示中的总锁定流动性代表在选定价格区间锁定的货币位置的总和。
它是计算为在跨越到下一个价格区间时交换的最大代币输出。
这里的V3池仅初始化为当前价格区间的流动性。

根据您的使用场景，显示这个值可能是有意义的。您可以在[代码示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/active-liquidity)中找到完整的代码。

## 下一步

现在您熟悉了流动性数据，可以考虑查阅我们的[下一个指南](./04-price-oracle.md)，了解如何使用Uniswap作为价格预言机。