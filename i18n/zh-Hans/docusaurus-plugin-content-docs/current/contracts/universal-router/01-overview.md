---
id: overview
title: 概览
sidebar_position: 1
---

`UniversalRouter` 是一个 ETH、ERC20 和 NFT 交换路由器，能够跨协议聚合交易，为用户提供高度灵活和个性化的交易。该合约无所有者，并且不可升级。

灵活的命令风格使我们能够为用户提供：

- Uniswap 交易的拆分与交错
- 跨 8 个市场购买 NFT
- 交易的部分填充
- ETH 的包装和解包
- 使用 [Permit2](../permit2/overview.md) 进行时间限定、签名控制的代币批准

交易通过一系列命令字符串进行编码，让用户在操作上拥有最大灵活性。通过单一交易即可使用所有这些功能，用户可实现的可能性无穷无尽。

*注：`UniversalRouter` 使用 `Permit2` 来消除直接向 `UniversalRouter` 提供代币批准的需求。`Permit2` 文档可在此处找到 [这里](../permit2/overview.md).*