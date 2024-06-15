---
id: overview
title: 概览
sidebar_position: 1
---

# UniswapX

UniswapX 是一种新的无需许可、开源（GPL）的基于拍卖的路由协议，用于跨自动做市商（AMM）和其他流动性来源进行交易。

UniswapX 在多个方面改进了交易：

- 通过聚合流动性来源提供更佳的价格
- 无燃气费交易
- 防止最大可提取价值（MEV）
- 失败的交易没有成本
- 并且在未来的几个月里，UniswapX 将扩展到无燃气费的跨链交易。

交易者生成签名订单，指定他们的交易意图，而填充者使用任意的填充策略来竞争以满足这些订单。

# 在 UniswapX 上交易
要使用 UniswapX 进行交易，交易者会创建一种称为独家荷兰订单的新类型的订单，该订单指定了在特定时间段内他们愿意在交易中接收的最大和最小输出。

<!-- <img src={require('./images/UniswapX_graph.png').default} alt="UniswapX" width="100%%" /> -->

然后，他们签署一条消息，使用 Permit2 允许在发送和接收的代币数量与衰减曲线中所指定的数量匹配的情况下完成交易。这些签名订单消息公开广播，可供任何想要成为“填充者”的人执行。

## UniswapX 上的填充者
UniswapX 在 Uniswap 生态系统中引入了一个新参与者——_填充者_。这些代理从交易者那里接收签名订单，并使用他们可以访问的任何流动性来源来竞争执行这些订单。

任何人都可以在 UniswapX 上填充订单，开始操作请阅读我们的 [填充者集成指南](/contracts/uniswapx/guides/createfiller)。

## 参数化 UniswapX 订单
UniswapX 协议并没有明确参数化像独家荷兰订单这样的订单定价，而是将订单参数化留给订单构造器来配置。

在当前 Uniswap 实验室的 UniswapX 接口实现中，一些填充者可能会选择帮助参数化订单，作为报价者参与其中。这些填充者只有在保证改善 Uniswap v3 或 v2 流动性池的交易者执行效果时才能赢得报价。赢得报价的填充者将在有限的时间内获得优先执行权，以填充他们提交的获胜报价的订单。

为了确保测试期间交易者有顺畅的交易体验，报价者集合将在 UniswapX 启动后由 Uniswap 实验室筛选，计划在不久的将来使报价系统完全无需许可。

如果你有兴趣在测试期间作为报价者参与，请[在此](mailto:quoters@uniswap.org)联系我们。

# UniswapX 协议架构

<!-- ![Architecture](./assets/uniswapx-architecture.png) -->
<img src={require('./images/UniswapX.png').default} alt="UniswapX" width="100%%" />

### 反应器

订单反应器 _结算_ UniswapX 订单。它们负责验证特定类型的订单，将其解析为输入和输出，并根据填充者的策略执行它们，以及验证订单是否成功履行。

反应器使用以下步骤处理订单：
- 验证订单
- 解析订单为输入和输出
- 使用 permit2 的 `permitWitnessTransferFrom` 函数，以订单为见证，从交易者向填充合约拉动输入代币
- 调用填充合约上的 `reactorCallback`
- 验证输出代币是否被输出接收者收到

反应器实现了 [IReactor](https://github.com/Uniswap/UniswapX/blob/main/src/interfaces/IReactor.sol) 接口，它抽象了订单规范的细节。这允许不同的反应器实现使用不同格式的订单与同一接口一起工作，允许共享基础设施并方便填充者轻松扩展。

当前反应器实现：
- [LimitOrderReactor](https://github.com/Uniswap/UniswapX/blob/main/src/reactors/LimitOrderReactor.sol)：一个处理简单静态限价订单的反应器
- [DutchOrderReactor](https://github.com/Uniswap/UniswapX/blob/main/src/reactors/DutchOrderReactor.sol)：一个处理线性衰减荷兰订单的反应器
- [ExclusiveDutchOrderReactor](https://github.com/Uniswap/UniswapX/blob/main/src/reactors/ExclusiveDutchOrderReactor.sol)：一个处理在线性衰减开始前有一段排他期的荷兰订单的反应器

### 填充合约

订单填充合约 _填充_ UniswapX 订单。它们指定了填充者履行订单的策略，并通过 `reactorCallback` 被反应器调用。

本仓库中提供了几个示例填充合约实现：
- [SwapRouter02Executor](https://github.com/Uniswap/UniswapX/blob/main/src/sample-executors/SwapRouter02Executor.sol)：一个使用 SwapRouter02 路由器的 UniswapV2 和 UniswapV3 的填充合约

### 直接填充

如果填充者希望使用手头的资金而不是填充合约来填充订单，他们可以通过指定 `address(1)` 作为填充合约，高效地使用 `directFill` 宏来实现这一点。这将使用 `msg.sender` 从填充者处拉动代币以满足订单输出。

# 白皮书
更多关于 UniswapX 协议的详细信息可以在 [UniswapX 白皮书](https://uniswap.org/whitepaper-uniswapx.pdf) 中找到。

# 部署地址

| 合约                      | 地址                                                                                                               | 源代码                                                                                                                    |
| ---                       | ---                                                                                                               | ---                                                                                                                       |
| 独家荷兰订单反应器 | [0x6000da47483062A0D734Ba3dc7576Ce6A0B645C4](https://etherscan.io/address/0x6000da47483062A0D734Ba3dc7576Ce6A0B645C4) | [ExclusiveDutchOrderReactor](https://github.com/Uniswap/UniswapX/blob/v1.0.0/src/reactors/ExclusiveDutchOrderReactor.sol) |
| 订单报价器                 | [0x54539967a06Fc0E3C3ED0ee320Eb67362D13C5fF](https://etherscan.io/address/0x54539967a06Fc0E3C3ED0ee320Eb67362D13C5fF) | [OrderQuoter](https://github.com/Uniswap/UniswapX/blob/v1.0.0/src/OrderQuoter.sol)                                        |
| Permit2                   | [0x000000000022D473030F116dDEE9F6B43aC78BA3](https://etherscan.io/address/0x000000000022D473030F116dDEE9F6B43aC78BA3) | [Permit2](https://github.com/Uniswap/permit2)                                                                             |