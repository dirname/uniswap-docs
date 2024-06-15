---
id: pricing
title: 定价
---

> 在寻找 [快速入门](quick-start)？

让我们来谈谈定价。本指南将重点关注两个最重要的 Uniswap 价格：**中间价** 和 **执行价**。

# 中间价

在 Uniswap 的上下文中，中间价反映了 **一个或多个对中储备的比率**。我们可以从三种方式思考这个价格。也许最简单的方式是，它定义了一个代币相对于另一个代币的价值。它还代表了理论上你可以以一个极小量（ε）的一个代币交换另一个代币的价格。最后，它可以被解释为当前资产的 _市场清算或公允价值价格_。

让我们考虑一下 DAI-WETH 的中间价（即，每 1 WETH 的 DAI 数量）。

## 直接

获取 DAI-WETH 中间价的最简单方法是直接观察该对：

```typescript
import { ChainId, Token, WETH9 } from '@uniswap/sdk-core'
import { Route } from '@uniswap/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)

// 要了解如何获取 Pair 数据，请参考之前的指南。
const pair = await createPair(DAI, WETH9[ChainId.MAINNET])

const route = new Route([pair], WETH9[DAI.chainId], DAI)

console.log(route.midPrice.toSignificant(6)) // 1901.08
console.log(route.midPrice.invert().toSignificant(6)) // 0.000526017
```

你可能想知道为什么我们必须构建一个 _路径_ 来获取中间价，而不是直接从对（毕竟，它包含了所有必要的数据）获取。原因很简单：路径迫使我们对交易的 _方向_ 表达意见。路径由一个或多个对、输入代币和输出代币组成（这完全定义了交易路径）。在这种情况下，我们将 WETH 作为输入代币，DAI 作为输出代币，这意味着我们对 WETH -> DAI 的交易感兴趣。

现在我们理解中间价将以 DAI/WETH 的形式定义。不过不用担心，如果我们需要 WETH/DAI 的价格，我们可以轻松地反转。

最后，你可能已经注意到我们正在将价格格式化为 6 位有效数字。这是因为内部，价格存储为精确精度的分数，可以根据需要转换为其他表示形式。对于完整选项列表，请参见 [Price](../../core/reference/classes/Price.md)。

## 间接

为了举例说明，假设 DAI 和 WETH 之间不存在直接对。为了获得 DAI-WETH 中间价，我们将需要选择一个有效的路径。想象一下，DAI 和 WETH 都与第三个代币 USDC 有对。在这种情况下，我们可以通过 USDC 对计算出间接中间价：

```typescript
import { ChainId, Token, WETH9} from '@uniswap/sdk-core'
import { Route, Pair } from '@uniswap/v2-sdk'

const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6)
const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)

// 要了解如何获取 Pair 数据，请参考之前的指南。
const USDCWETHPair = await createPair(USDC, WETH9[ChainId.MAINNET])
const DAIUSDCPair = await createPair(DAI, USDC)

const route = new Route([USDCWETHPair, DAIUSDCPair], WETH9[ChainId.MAINNET], DAI)

console.log(route.midPrice.toSignificant(6)) // 1896.34
console.log(route.midPrice.invert().toSignificant(6)) // 0.000527331
```

# 执行价

中间价很好地代表了路径的 _当前_ 状态，但交易呢？事实证明，定义另一个价格是有意义的，即交易的 _执行_ 价格，作为发送/接收资产的比率。

想象我们有兴趣用 1 WETH 交易 DAI：

```typescript
import { ChainId, Token, WETH9, CurrencyAmount, TradeType } from '@uniswap/sdk-core'
import { Route, Pair, Trade } from '@uniswap/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)

// 要了解如何获取 Pair 数据，请参考之前的指南。
const pair = await createPair(DAI, WETH9[DAI.chainId])

const route = new Route([pair], WETH9[DAI.chainId], DAI)

const trade = new Trade(route, CurrencyAmount.fromRawAmount(WETH9[DAI.chainId], '1000000000000000000'), TradeType.EXACT_INPUT)

console.log(trade.executionPrice.toSignificant(6)) // 1894.91
```

注意我们正在构建一个 1 WETH 的交易，以尽可能多的 DAI 进行交易，_鉴于直接对的当前储备_。执行价代表了此次交易的平均 DAI/WETH 价格。当然，任何对的储备都可以在每个区块发生变化，这将影响执行价。