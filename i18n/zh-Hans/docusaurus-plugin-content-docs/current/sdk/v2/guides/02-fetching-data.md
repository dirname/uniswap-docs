---
id: fetching-data
title: 获取数据
---

> 在寻找 [快速入门](quick-start)？

虽然SDK是完全自包含的，但在两种情况下它需要_链上数据_才能正常运行。
本指南将详细介绍这两种情况，并提供一个示例供你使用来获取这些数据。

# 情况1：代币

不出所料，SDK需要某种ERC-20代币的概念才能正常工作。这立即引出了关于_代币数据来自何处_的问题。

以DAI为例，让我们尝试以SDK可以处理的格式表示它。为此，我们至少需要3个数据：**chainId**、**代币地址**以及代币有**多少小数位**。我们可能还对代币的**符号**和/或**名称**感兴趣。

## 标识数据

前两块数据——**chainId**和**代币地址**——必须由我们提供。仔细想想，这是有道理的，因为实际上没有其他方式来明确识别一个代币。

所以，在DAI的情况下，我们知道**chainId**是`1`（我们在主网上），**代币地址**是`0x6B175474E89094C44Da98b954EedeAC495271d0F`。请注意，外部验证代币地址非常重要。不要从你不信任的来源使用地址！

## 必需数据

我们需要的下一块数据是**小数位数**。

### 用户提供

这里的一个选项是直接传递正确的值，我们可能知道它是`18`。到此为止，我们已经准备好将DAI表示为[Token](../../core/reference/classes/Token.md)：

```typescript
import { ChainId, Token } from '@uniswap/sdk-core'

const chainId = ChainId.MAINNET
const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // 必须进行校验和
const decimals = 18

const DAI = new Token(chainId, tokenAddress, decimals)
```

如果我们不知道或者不想硬编码这个值，我们可以通过任何检索链上数据的方法自己查找，函数看起来像这样：

```typescript
import { ChainId } from '@uniswap/sdk-core'

async function getDecimals(chainId: ChainId, tokenAddress: string): Promise<number> {
  // 设置provider，导入必要的ABI...
  const tokenContract = new ethers.Contract(tokenAddress, erc20abi, provider)
  return tokenContract["decimals"]()
}
```

## 可选数据

最后，我们可以谈谈**符号**和**名称**。因为这些字段在SDK本身中任何地方都没有使用，它们是可选的，如果你想要在你的应用程序中使用它们，你可以提供它们。但是，SDK不会为你获取它们，所以你必须提供它们：

```typescript
import { ChainId, Token } from '@uniswap/sdk-core'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
```

# 情况2：对

现在我们已经探讨了如何定义代币，让我们谈谈对。要了解更多关于Uniswap对是什么的信息，请参阅[Pair](../../../contracts/v2/reference/smart-contracts/pair)

以DAI-WETH对为例。

## 标识数据

每个对都由两个代币组成（参见前一节）。请注意，路由器使用的WETH被[SDK Core作为WETH9导出](../../core/reference/overview.md)。

## 必需数据

我们需要的数据是该对的_储备金_。要了解更多关于储备金的信息，请参阅[getReserves](../../../contracts/v2/reference/smart-contracts/pair#getreserves)。

### 用户提供

这里的一个选项是简单地传递我们自己获取的值来创建一个[Pair](../reference/pair)。在这个例子中，我们使用ethers直接从区块链获取数据：

```typescript
import { ChainId, Token, WETH9, CurrencyAmount } from '@uniswap/sdk-core'
import { Pair } from '@uniswap/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)

async function createPair(): Promise<Pair> {
  const pairAddress = Pair.getAddress(DAI, WETH9[DAI.chainId])

  // 设置provider，导入必要的ABI...
  const pairContract = new ethers.Contract(pairAddress, uniswapV2poolABI, provider)
  const reserves = await pairContract["getReserves"]()
  const [reserve0, reserve1] = reserves

  const tokens = [DAI, WETH9[DAI.chainId]]
  const [token0, token1] = tokens[0].sortsBefore(tokens[1]) ? tokens : [tokens[1], tokens[0]]

  const pair = new Pair(CurrencyAmount.fromRawAmount(token0, reserve0), CurrencyAmount.fromRawAmount(token1, reserve1))
  return pair
}
```

请注意，这些值可以频繁地每区块变化，并且应该保持最新。