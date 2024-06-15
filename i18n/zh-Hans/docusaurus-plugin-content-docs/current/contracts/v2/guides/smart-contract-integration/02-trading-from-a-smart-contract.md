---
id: trading-from-a-smart-contract
title: 实现交易
---

当从智能合约进行交易时，最重要的是需要一个_外部价格源_。没有这个，交易可能会遭受严重的抢先交易损失。

_阅读[安全考虑](#safety-considerations)以获取更多信息。_

# 使用路由器

最安全地交换代币的方式是使用[路由器](../../reference/smart-contracts/router-02)，它提供了多种方法来安全地在不同资产之间进行交换。你会发现每个涉及以确切数量的 ETH / 代币买入或卖出的方法都有一个对应的函数。

首先，你必须使用外部价格源来计算你想要调用的函数的安全参数。这可能是当你出售确切输入量时收到的最小金额，或者当你购买确切输出量时愿意支付的最大金额。

同样重要的是要确保你的合约控制了足够的 ETH / 代币来进行交换，并且已经授予路由器撤回这些代币的权限。

_查看[定价](../../concepts/advanced-topics/pricing#pricing-trades)页面以深入了解获取价格的方法。_

# 示例

想象一下，你希望从你的智能合约中用 50 DAI 换取尽可能多的 ETH。

## transferFrom

在进行交换之前，我们的智能合约需要控制 50 DAI。实现这一点的最简单方法是通过调用 DAI 的 `transferFrom` 方法，将所有者设置为 `msg.sender`：

```solidity
uint amountIn = 50 * 10 ** DAI.decimals();
require(DAI.transferFrom(msg.sender, address(this), amountIn), 'transferFrom 失败。');
```

## approve

现在我们的合约拥有 50 DAI，我们需要批准[路由器](../../reference/smart-contracts/router-02)撤走这些 DAI：

```solidity
require(DAI.approve(address(UniswapV2Router02), amountIn), 'approve 失败。');
```

## swapExactTokensForETH

现在我们准备进行交换：

```solidity
// amountOutMin 必须从某种预言机中获取
address[] memory path = new address[](2);
path[0] = address(DAI);
path[1] = UniswapV2Router02.WETH();
UniswapV2Router02.swapExactTokensForETH(amountIn, amountOutMin, path, msg.sender, block.timestamp);
```

# 安全考虑

由于以太坊交易发生在敌对环境中，不执行安全检查的智能合约_可能被用于牟利的攻击利用_。如果智能合约假设 Uniswap 上的当前价格是一个“公平”价格而不执行安全检查，_它就容易受到操纵_。恶意行为者可以很容易地在交换前后插入交易（一种“三明治”攻击），导致智能合约以更差的价格进行交易，以牺牲交易者的代价从中获利，然后将合约恢复到其原始状态。（一个重要的例外是，这类攻击在极度流动性的资金池中，和/或在低价值交易中会受到缓解。）

防止这些攻击的最佳方式是使用外部价格源或“价格预言机”。最好的“预言机”仅仅是_交易者对当前价格的链下观察_，它可以作为安全性检查传递到交易中。这种策略最适合_用户自行发起交易_的情况。

然而，当无法使用链下价格时，应改用链上预言机。确定给定情况下最佳预言机不属于本指南的内容，但有关 Uniswap V2 预言机方法的更多详细信息，请参阅[预言机](../../concepts/core-concepts/oracles)。