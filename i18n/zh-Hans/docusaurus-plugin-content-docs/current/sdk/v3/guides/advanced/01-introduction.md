---
id: introduction
title: 引言
---

对于某些更高级的使用场景，需要使用 Uniswap 工具链中的多个工具。

:::info
如果你需要了解 SDK 的简介，并想了解更多这些指南如何与示例仓库相连的信息，请访问我们的[背景](../01-background.md)页面！
:::

以下示例使用了 **ethersJS** 和在 The Graph 托管服务上运行的 **Uniswap V3 子图**。要了解更多关于 Uniswap 的子图，请访问[API](../../../../api/subgraph/overview.md)部分。

我们将深入探讨 Uniswap V3 协议，并通过实用示例理解由 Uniswap 智能合约存储的数据。
我们将探索如何计算特定价格范围内的可用流动性，可视化**流动性密度**在池中，使用 Uniswap 作为**价格预言机**以及通过创建**限价订单**进行交易。

这些指南比之前的长一些，提供了更多的理论背景。

## 理论背景

这里展示的一些指南需要一定的理论和数学背景。
为了充分利用高级指南，我们鼓励你退一步，阅读一些关于 Uniswap 协议背后的数学和理论。

关于 Uniswap 协议最全面的信息来源是[Uniswap V3 书籍](https://uniswapv3book.com/)。

除了文档的[概念](../../../../concepts/uniswap-protocol.md)部分，[Uniswap V3 白皮书](https://uniswap.org/whitepaper-v3.pdf)是了解该协议的一个很好的入门资料。
如果你还没有查阅过，它可能比你预期的更简洁、更容易理解。

### Solidity 中的数据类型

Uniswap V3 池利用 Solidity 提供的多种数据类型来高效地存储它们的状态。
如果你对 Solidity 数据类型还不熟悉，可以参考[Solidity 语言参考](https://docs.soliditylang.org/en/v0.8.7/types.html#)。
对于接下来的指南，查看其中的两种类型将是有益的，我们将在下面概述它们。

Ticks 被存储为一个[mapping(int24 => Tick.Info)](https://github.com/Uniswap/v3-core/blob/main/contracts/UniswapV3Pool.sol#L93)。
Solidity [映射](https://docs.soliditylang.org/en/v0.8.7/types.html#mapping-types)非常类似于哈希映射，这样我们就可以通过一次读取操作用其键访问任何值。
`Tick.Info` [(https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/Tick.sol#L17)]存储了我们处理池时需要的 Tick 值：

```solidity
struct Info {
        // 引用此 Tick 的总位置流动性
        uint128 liquidityGross;
        // 当从左到右（或从右到左）跨越 Tick 时，添加（减去）的净流动性，
        int128 liquidityNet;
        // 在这个 Tick 的另一侧（相对于当前 Tick）每单位流动性的费用增长
        // 只有相对意义，没有绝对意义——该值取决于 Tick 初始化的时间
        uint256 feeGrowthOutside0X128;
        uint256 feeGrowthOutside1X128;
        // Tick 另一侧的累积 Tick 值
        int56 tickCumulativeOutside;
        // 在这个 Tick 的另一侧（相对于当前 Tick）每单位流动性的秒数
        // 只有相对意义，没有绝对意义——该值取决于 Tick 初始化的时间
        uint160 secondsPerLiquidityOutsideX128;
        // 在 Tick 的另一侧花费的秒数（相对于当前 Tick）
        // 只有相对意义，没有绝对意义——该值取决于 Tick 初始化的时间
        uint32 secondsOutside;
        // 如果 Tick 已初始化，则为真，即该值与 liquidityGross != 0 表达式完全等价
        // 这些 8 位被设置以防止在跨越新初始化的 Tick 时出现新的 sstores
        bool initialized;
    }
```

在接下来的指南中，我们将使用这些值中的大部分。

在这种情况下，我们可以通过其`int24`键访问存储在池中的任何`Tick.Info`值。
Tick 的键通常被称为它的 *索引*。
映射是不可迭代的，因此如果我们试图获取存储在池中的所有 Ticks，我们不能简单地遍历映射。
相反，我们必须知道映射的键（索引），我们将在[池数据指南](./02-pool-data.md)中探索如何做到这一点。

我们需要理解的第二个 Solidity 数据类型是普通的无符号[整数](https://docs.soliditylang.org/en/v0.8.7/types.html#integers)。
Solidity 支持从`uint8`到`uint256`的无符号整数大小，分别长8位和256位。

让我们看一下 V3 池的`tickBitmap`函数：

```solidity
  function tickBitmap(
      int16 wordPosition
  ) external view returns (uint256)
```

类似于 Tick 映射，tickBitmap 是类型[mapping(int16 => uint256)](https://github.com/Uniswap/v3-core/blob/main/contracts/UniswapV3Pool.sol#L95)的映射。

让我们看看在[Etherscan](https://etherscan.io/address/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640#readContract)上的低费用 WETH/USDC 池。
如果我们调用`tickBitmap`函数并输入`0`，我们将得到以下响应（截至撰写本文时）：

<img src={require('./images/tickBitmap-etherscan.png').default} alt="TickBitmapEtherscan" box-shadow="none"/>

`uint256`返回值被 Etherscan 解释为代表十进制数字的形式。
实际的原始返回值是256位，看起来像这样：

```raw
0x0000 ... 大量零和一 ... 000000110000000000
```

我们不把这个零和一的字符串解释为代表一个数字的形式，而是将其视为256个布尔值。

如果值的位置处的值为1，则该位置的 Tick 是**已初始化**的，意味着它持有值。

通过这个技巧，V3 池允许我们用一个调用获取**256个 Tick**的状态。
在接下来的指南中，我们将详细介绍如何从获取的 tickBitmaps 计算 Tick 索引。

## Uniswap 的历史

为了更好地理解 V3 协议，了解**去中心化交易所**的历史以及自2018年成立以来的 Uniswap 协议也是有益的。
你可以在[V1](https://hackmd.io/@HaydenAdams/HJ9jLsfTz?type=view#Swaps-vs-Transfers)和[V2](https://uniswap.org/whitepaper.pdf)的白皮书中阅读更多关于 Uniswap 的旧版本，以及合同部分的[V1](../../../../contracts/v1/overview.md)和[V2](../../../../contracts/v2/overview.md)部分。