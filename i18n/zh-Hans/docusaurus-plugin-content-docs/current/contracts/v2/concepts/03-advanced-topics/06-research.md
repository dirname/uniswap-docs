---
id: research
title: 研究
---

自动做市商是一个新概念，因此，新的研究经常出现。我们在此精选了一些最深思熟虑的研究。

# Uniswap 的金融炼金术

作者：Dave White, Martin Tassy, Charlie Noyes, 和 Dan Robinson

> 自动做市商是一种去中心化交易所的类型，允许用户在链上资产如 USDC 和 ETH 之间进行交易。Uniswap 是以太坊上最受欢迎的 AMM。与大多数 AMM 类似，Uniswap 通过持有两种资产的储备来促进特定资产对之间的交易。它根据储备规模设定交易价格，确保价格与更广泛的市场保持一致。任何想要的人都可以加入特定资产对的“池”，成为流动性提供者（LP），之所以称为 LP，是因为他们为他人交易提供了流动资产。LP 同时向两个储备贡献资产，承担部分交易风险以换取收益份额。

- [Uniswap 的金融炼金术](https://research.paradigm.xyz/uniswaps-alchemy)

# Uniswap 市场分析

作者：Guillermo Angeris, Hsien-Tang Kao, Rei Chiang, Charlie Noyes, Tarun Chitra

> 尽管 Uniswap 及其他恒定乘积市场简单，但它们在实践中表现良好。在这篇论文中，我们对恒定乘积市场及其泛化进行了简单的正式分析，表明在某些常见条件下，这些市场必须紧密跟踪参考市场价格。我们还展示了 Uniswap 满足许多其他理想特性，并通过大规模基于代理的模拟，数值地证明了 Uniswap 在广泛的市场条件下是稳定的。

- [Uniswap 市场分析](https://arxiv.org/abs/1911.03380)

# 改进的价格预言机：恒定函数市场制造者

作者：Guillermo Angeris, Tarun Chitra

> 自动做市商最初由 Hanson 的对数市场评分规则（或 LMSR）在预测市场中流行起来，已成为去中心化金融的重要构建模块，即“原语”。一个特别有用的原语是能够测量资产价格的能力，这通常被称为定价预言机问题。在这篇论文中，我们专注于分析一个非常大的自动做市商类别，称为恒定函数市场制造者（或 CFMMs），包括现有的流行市场制造者，如 Uniswap、Balancer 和 Curve，其年度交易量总计数十亿美元。我们给出了充分条件，在相当普遍的假设下，与这些恒定函数市场制造者互动的代理被激励正确报告资产价格，并且他们可以以计算高效的方式做到这一点。我们还推导出以前未知的几个其他有用属性。这些包括对 CFMMs 所持有的资产总价值的下限，以及保证没有任何代理可以通过任何一组交易耗尽给定 CFMM 所持有的资产储备的下限。

- [改进的价格预言机：恒定函数市场制造者](https://arxiv.org/abs/2003.10001)

# Pintail 研究

Pintail 发布的 [medium](https://medium.com/@pintail) 文章。

- [理解 Uniswap 收益](https://medium.com/@pintail/understanding-uniswap-returns-cc593f3499ef)
- [Uniswap：对流动性提供者来说是一笔好买卖吗？](https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2)

# 几何平均市场中的流动性提供者收益

作者：Alex Evans

> 几何平均市场制造者（G3Ms），如 Uniswap 和 Balancer，构成了一类流行的自动做市商（AMMs），定义如下规则：每次交易前后的 AMM 储备必须具有相同的（加权）几何平均值。这篇论文将已知的适用于恒定权重 G3M 的多个结果扩展到一般情况下的 G3M，其中权重随时间变化且可能随机。这些结果包括投资者因向 G3M 提供流动性而获得的流动性池（LP）股份的回报和无套利价格。利用这些表达式，我们展示了如何创建其 LP 股份复制金融衍生品收益的 G3M。由此产生的对冲策略对于满足弹性约束的衍生合约的收益函数而言，是模型无关且精确的。这些策略使 LP 股份能够复制各种交易策略和金融合同，包括标准期权。因此，G3M 被证明能够通过被动持有 LP 股份重现各种主动交易策略。

- [几何平均市场中的流动性提供者收益](https://arxiv.org/abs/2006.08806)

# 恒定乘积市场的复制组合

作者：Joseph Clark

> 我们推导了恒定乘积市场的复制组合。这本质上是做空波动率（卖出期权），解释了为什么需要正向交易成本来吸引流动性提供者参与。在期货和期权市场不存在的地方，这个收益可以用来创建它们。

- [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3550601](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3550601)