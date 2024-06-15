---
id: trading
title: 交易
---

> 在寻找 [快速入门](quick-start)？

SDK _不能执行交易或代表您发送交易_。相反，它提供了实用的类和函数，使得计算与Uniswap安全交互所需的数据变得容易。几乎所有与Uniswap安全交易所需的内容都由 [Trade](../reference/trade) 实体提供。但是，使用这些数据以在对您的应用程序有意义的任何上下文中发送交易是您的责任。

本指南将专门介绍向 [最新Uniswap V2路由器](../../../contracts/v2/reference/smart-contracts/router-02) 发送交易。

# 向路由器发送交易

假设我们想用1个WETH换取尽可能多的DAI：

```typescript
import { ChainId, Token, WETH9, CurrencyAmount, TradeType } from '@uniswap/sdk-core'
import {Trade, Route} from '@uniswap/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)

// 查看数据获取指南以了解如何获取Pair数据
const pair = await createPair(DAI, WETH9[DAI.chainId])

const route = new Route([pair], WETH9[DAI.chainId], DAI)

const amountIn = '1000000000000000000' // 1 WETH

const trade = new Trade(route, CurrencyAmount.fromRawAmount(WETH9[DAI.chainId], amountIn), TradeType.EXACT_INPUT)
```

所以，我们已经构建了一个trade实体，但我们要如何使用它来实际发送交易呢？还有一些我们需要准备的组件。

在继续之前，我们应该探讨一下在交易上下文中ETH是如何工作的。内部，SDK使用WETH，因为所有Uniswap V2对都在底层使用WETH。然而，作为最终用户，你完全可以使用ETH，并依赖路由器处理WETH的转换。所以，让我们使用ETH。

第一步是选择适当的路由器函数。路由器函数的命名旨在易于理解；在这种情况下，我们想要使用 [swapExactETHForTokens](../../../contracts/v2/reference/smart-contracts/router-02#swapexactethfortokens)，因为我们正在用一个确定数量的ETH交换代币。

这个Solidity接口函数如下：

```solidity
function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

回到我们的交易代码，我们可以构造所有必要的参数：

```typescript
import {Percent} from '@uniswap/sdk-core'

const slippageTolerance = new Percent('50', '10000') // 50 bips，或0.50%

const amountOutMin = trade.minimumAmountOut(slippageTolerance).toExact() // 需要转换为例如十进制字符串
const path = [WETH9[DAI.chainId].address, DAI.address]
const to = '' // 应该是一个经过校验的接收方地址
const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 从当前Unix时间起20分钟
const value = trade.inputAmount.toExact() // 需要转换为例如十进制字符串
```

滑点容忍度编码了 _我们在交易失败前愿意承受的价格波动程度_。由于以太坊交易是在对抗性环境中广播和确认的，这种容忍度是我们能做的最好的保护措施，以防止价格波动。我们使用此滑点容忍度来计算我们必须收到的DAI的 _最低_ 数量，以防止我们的交易回滚，这要归功于 [minimumAmountOut](../reference/trade#minimumamountout-since-204)。请注意，这段代码假设当前价格，即路线的中间价格，是公平的（通常这是一个好假设，因为有套利行为）来计算最坏情况的结果。

路径只是我们通过的代币地址的有序列表，在我们的情况下是WETH和DAI（请注意，我们使用的是WETH地址，尽管我们使用的是ETH）。

to地址是将接收DAI的地址。

截止时间是在该Unix时间戳之后交易将失败的时间，以防止我们的交易长时间未被确认，而我们希望撤销交易。

value是我们交易中必须包含的ETH数量，作为 `msg.value`。