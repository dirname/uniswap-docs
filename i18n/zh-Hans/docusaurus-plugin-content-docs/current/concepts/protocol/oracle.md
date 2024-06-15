---
id: oracle
title: 预言机
sidebar_position: 3
---

:::note
对预言机的概念感到陌生？首先查看以太坊基金会的 [预言机概述](https://ethereum.org/en/developers/docs/oracles/)。
:::

所有Uniswap v3池都可以作为预言机，提供历史价格和流动性数据访问。这种能力解锁了广泛的链上应用场景。

历史数据存储为观察值数组的形式。最初，每个池只追踪一个观察值，随着时间块的流逝而覆盖它。这限制了用户可以访问的历史数据的时间跨度。然而，任何愿意支付交易费用的方都可以[增加追踪的观察值数量](../../contracts/v3/reference/core/UniswapV3Pool#increaseobservationcardinalitynext)（最多可达`65535`），将数据可用期扩展到大约9天或更长。

直接在池合约中存储价格和流动性历史数据大大减少了调用合约逻辑错误的可能性，并通过消除存储历史值的需求降低了集成成本。此外，v3预言机的显著最大长度使得操纵预言机价格变得极其困难，因为调用合约可以廉价地构建任意范围内的时间加权平均值，该范围可以位于（或完全包含）预言机数组的长度内。

## 观察值

`Observation`采用以下形式：

```solidity
struct Observation {
    // 观察时的区块时间戳
    uint32 blockTimestamp;
    // 累积刻度，即自池首次初始化以来的刻度*经过的时间
    int56 tickCumulative;
    // 每流动性的秒数，即自池首次初始化以来的已过秒数 / 最大(1, 流动性)
    uint160 secondsPerLiquidityCumulativeX128;
    // 是否已初始化观察值
    bool initialized;
}
```

`Observation`可以通过v3池上的[`observations`](../../contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolState#observations)方法获取。但是，这不是推荐的消费预言机数据的方式。相反，优先使用`observe`：

```solidity
function observe(uint32[] calldata secondsAgos)
    external
    view
    returns (int56[] memory tickCumulatives, uint160[] memory secondsPerLiquidityCumulativeX128s);
```

每次调用`observe`时，调用者必须指定一个包含任意数量秒前的数组，表示返回观察值的时间。注意，给定的所有时间都必须比存储的最旧观察值更新（或同样旧）。注意：如果这些时间并不精确对应于写入观察值的区块，则会构造一个假设观察值，消除了调用者手动插值的需要。这是使用`observe`而不是`observations`的主要原因之一。

请注意，由于预言机每区块最多只更新一次，因此使用`secondsAgo`值为`0`调用`observe`将返回最近写入的观察值，这只能与当前区块开始时（或更早）一样新。

## 刻度累加器

刻度累加器存储观察时刻的活动刻度累计总和。刻度累加器的值单调递增，每秒增长当前刻度的值。

为了得出区间内的算术平均刻度，调用者需要检索两个连续的观察值，取这两个值的差值，然后除以它们之间的时间间隔。从刻度累加器计算TWAP也在[**白皮书**](https://uniswap.org/whitepaper-v3.pdf)中有所涉及。需要注意的是，使用算术平均刻度推导出的价格对应于_几何_平均价格。

参阅[OracleLibrary](https://github.com/Uniswap/uniswap-v3-periphery/blob/main/contracts/libraries/OracleLibrary.sol)，了解如何使用刻度累加器的示例。

## 流动性累加器

流动性累加器存储观察时刻的秒数 / 在范围内的流动性值。流动性累加器的值单调递增，每秒增长秒数 / 在范围内的流动性值。

为了得出区间内的调和平均流动性，调用者需要检索两个连续的观察值，取这两个值的差值，然后将经过的时间除以这个值。计算TWAL在[**白皮书**](https://uniswap.org/whitepaper-v3.pdf)中有更详细的说明。

:::note
在范围内的流动性累加器应谨慎使用。因为当前刻度和当前在范围内的流动性可能完全不相关，存在一些情况下，在同一池的区间内采取算术平均刻度和调和平均流动性可能会不准确地描述这个池相对于另一个池。例如，如果池A的当前刻度在5秒内是0，接下来5秒内是100，刻度累加器将是50。如果在同一区间内，在范围内流动性为5000和50，调和平均流动性将是~99。将此与池B（由相同的资产组成）进行比较，其中刻度是50，在范围内流动性约为99，持续10秒。累加器的值将相同，但底层行为当然非常不同。
:::

## 从刻度推导价格

> 当我们使用"活动刻度"或其他方式来指代池的当前刻度时，我们的意思是离当前价格最近的下界刻度。

当创建池时，每个代币根据代币对中的代币合约地址被分配给`token0`或`token1`。代币是否是`token0`或`token1`是没有意义的；它仅用于维护相对估值和池合约中通用逻辑的固定分配目的。

从当前刻度推导资产价格是可行的，因为在池合约中，`token0`以`token1`的固定表达式表示。

---

在WETH / USDC池中找到WETH价格的一个例子，其中WETH是`token0`，USDC是`token1`：

你有一个预言机读数，显示`tickCumulative`的返回值为[`70_000`, `1_070_000`]，两次观察之间的经过时间为10秒。

我们可以通过取累加器值之差（`1_070_000` - `70_000` = `1_000_000`），然后除以经过的时间（`1_000_000` / `10` = `100_000`）来推导这个区间内的平均刻度。

有了刻度读数`100_000`，我们可以使用当前刻度作为公式`p(i) = 1.0001**i`中的`i`（见[白皮书](https://uniswap.org/whitepaper-v3.pdf)的6.1节）来找到`token1`（USDC）以`token0`（WETH）的值。

`1.0001**100_000 ≅ 22015.5` USDC / WETH

---

刻度是带符号整数，可以表示为负数，因此在任何`token0`的价值低于`token1`的情况下，`tickCumulative`将返回负刻度值，而`token0`以`token1`计算的结果将返回相对值`< 0`。