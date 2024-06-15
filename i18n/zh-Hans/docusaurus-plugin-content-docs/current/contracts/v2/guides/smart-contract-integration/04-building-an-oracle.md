---
id: building-an-oracle
title: 构建预言机
---

要在 Uniswap V2 上构建价格预言机，你首先需要理解你的使用场景所需的要求。一旦你了解了你所需的平均价格类型，就只需根据需要的频率存储交易对的累积价格变量，并利用两个或更多累积价格变量的观测值计算平均价格。

# 理解需求

要理解你的需求，你应该首先研究以下问题的答案：

- 数据的新鲜度重要吗？
  即：平均价格是否必须包括当前价格？
- 近期的价格比历史价格更重要吗？
  即：当前价格是否比历史价格更具有权重？

请记下你的答案以便下面的讨论。

# 预言机策略

## 固定窗口

如果数据新鲜度不重要，且近期价格与历史价格被同等加权，那么在每个周期（例如每24小时）存储一次累积价格就足够了。

通过这些数据点计算平均价格，你将得到“固定窗口”，这些窗口可以在每个周期结束后更新。我们编写了一个此类预言机的例子
[这里](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleOracleSimple.sol)。

这个例子没有限制固定窗口的最大大小，即它只要求窗口大小大于一个周期（例如24小时）。

## 移动平均

如果数据新鲜度很重要，你可以使用滑动窗口，在其中累积价格变量的测量频率高于每周期一次。

至少有
[两种类型的移动平均](https://www.investopedia.com/terms/m/movingaverage.asp#types-of-moving-averages)
可以使用 Uniswap 的累积价格变量进行计算。

[简单移动平均](https://www.investopedia.com/terms/s/sma.asp)
对每个价格测量给予相同的权重。我们已经构建了一个滑动窗口预言机的例子
[这里](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol)。

[指数移动平均](https://www.investopedia.com/terms/e/ema.asp)
对最近的价格测量给予更大的权重。我们还没有为这种类型的预言机编写示例。

如果你希望近期价格比历史价格更重要，例如在清算的情况下，你可能希望使用指数移动平均。但是请注意，对近期价格给予更多的权重会使预言机更容易受到操纵，
而不是将所有价格测量平等加权。

## 计算平均价格

要计算两个累积价格观测值之间的平均价格，取周期开始和结束时累积价格之间的差值，
然后除以它们之间流逝的时间（秒）。这将产生一个
[固定点无符号Q112x112](https://en.wikipedia.org/wiki/Fixed-point_arithmetic#Notation)
数字，表示一种资产相对于另一种资产的价格。这个数字表示为`uint224`，其中
上112位代表整数部分，下112位代表小数部分。

交易对包含`price0CumulativeLast`和`price1CumulativeLast`，它们分别是`token1`/`token0`和`token0`/`token1`储备比率。即`token0`的价格用
`token1`/`token0`表示，而`token1`的价格用`token0`/`token1`表示。

# 获取最新的累积价格

如果你想计算历史累积价格观测值和当前累积价格之间的平均价格，你应该使用当前区块的累积价格值。如果当前区块中累积价格尚未更新，例如因为当前区块中交易对上没有发生任何流动性事件（`mint`/`burn`/`swap`），你可以反事实地计算累积价格。

我们为预言机合约提供了一个库，其中包含了方法
[`UniswapV2OracleLibrary#currentCumulativePrices`](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/libraries/UniswapV2OracleLibrary.sol#L16)
用于获取截至当前区块的累积价格。
此方法返回的当前累积价格是_反事实_计算的，意味着它不需要调用
相对昂贵的`#sync`方法在交易对上。
无论当前区块是否已执行交换，该结果都是正确的。

# 关于溢出的注意事项

`UniswapV2Pair`的累积价格变量设计为最终会溢出，
即`price0CumulativeLast`和`price1CumulativeLast`以及`blockTimestampLast`将通过0溢出。

这不应该对你的预言机设计构成问题，因为平均价格计算关注的是两次独立累积价格变量观测值之间的差异
（即减法）。
从两个累积价格值中相减将产生一个适合`uint256`范围内的数字，只要观测是在最大`2^32`秒，即约136年的周期内完成的。

`blockTimestampLast`仅存储在`uint32`中。由于上述相同的原因，交易对可以通过仅存储`block.timestamp % uint32(-1)`来节省一个存储槽，以及在交易对生命周期中的许多SSTORES。
这是可行的，因为交易对在更新累积价格时只关心每次流动性事件之间的时间间隔，这总是预期小于`2^32`秒。

在你自己的预言机中计算流逝时间时，你可以简单地将`block.timestamp`的观测值存储为`uint256`，并避免处理溢出数学来计算观测之间的流逝时间。这就是
[ExampleSlidingWindowOracle](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol)
如何处理观测时间戳的。

## 集成预言机

要将预言机集成到你的合约中，你必须确保预言机对累积价格变量的观测保持最新状态。
只要你预言机保持更新，你就可以依赖它生成平均价格。
保持你的预言机更新的过程被称为“维护”。

## 预言机维护

为了在一段时间内测量平均价格，预言机必须有一种方式来引用周期开始和结束时的累积价格。
推荐的做法是在预言机合约中存储这些价格，并频繁调用预言机以存储最新的累积价格。

可靠的预言机维护是一项艰巨的任务，
并且在网络拥堵时期可能会成为失败点。
相反，考虑直接将此功能构建到你自己的智能合约的关键调用中，或者激励其他方进行预言机
维护调用。

## 无需维护选项

可以通过利用存储证明来避免定期在周期开始时存储这个累积价格。然而，这种方法有局限性，
尤其是在关于气体成本和可以测量平均价格的最大时间长度方面。
如果你想尝试这种方法，你可以参考
[Keydonix的这个仓库](https://github.com/Keydonix/uniswap-oracle/)。

Keydonix开发了一个基于Uniswap v2的通用型价格喂入预言机，支持任意时间窗口（最多256个区块），并且不需要任何主动维护。