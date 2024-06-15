---
id: trade-tokens
title: 交易代币
---

在 Uniswap 中，每个 ERC20 代币都有一个独立的交易所合约。这些交易所持有 ETH 和相关 ERC20 的储备。用户无需等待订单匹配，可以随时与储备进行交易。储备资金由分散的流动性提供者池共享，他们从每笔交易中收取费用。

定价是自动化的，基于 `x * y = k` 市场制作公式，该公式会根据两个储备的相对规模和即将进入的交易规模自动调整价格。由于所有代币都以 ETH 作为共同对，它被用作任何 ERC20 ⇄ ERC20 对直接交易的中介资产。

## ETH ⇄ ERC20 计算

在 ETH 和 ERC20 代币之间确定价格所需的变量为：

- ERC20 交易所的 ETH 储备大小
- ERC20 交易所的 ERC20 储备大小
- 出售金额（输入）或购买金额（输出）

### 购买量（卖出订单）

对于卖出订单（确切输入），计算购买量（输出）：

```javascript
// 卖出 ETH 换取 ERC20
const inputAmount = userInputEthValue
const inputReserve = web3.eth.getBalance(exchangeAddress)
const outputReserve = tokenContract.methods.balanceOf(exchangeAddress).call()

// 卖出 ERC20 换取 ETH
const inputAmount = userInputTokenValue
const inputReserve = tokenContract.methods.balanceOf(exchangeAddress).call()
const outputReserve = web3.eth.getBalance(exchangeAddress)

// 输出购买量
const numerator = inputAmount * outputReserve * 997
const denominator = inputReserve * 1000 + inputAmount * 997
const outputAmount = numerator / denominator
```

### 出售量（买入订单）

对于买入订单（确切输出），计算成本（输入）：

```javascript
// 使用 ETH 购买 ERC20
const outputAmount = userInputTokenValue
const inputReserve = web3.eth.getBalance(exchangeAddress)
const outputReserve = tokenContract.methods.balanceOf(exchangeAddress).call()

// 使用 ERC20 购买 ETH
const outputAmount = userInputEthValue
const inputReserve = tokenContract.methods.balanceOf(exchangeAddress).call()
const outputReserve = web3.eth.getBalance(exchangeAddress)

// 成本
const numerator = outputAmount * inputReserve * 1000
const denominator = (outputReserve - outputAmount) * 997
const inputAmount = numerator / denominator + 1
```

### 流动性提供者费用

价格公式中内置了 0.3% 的流动性提供者费用。可以这样计算：

```javascript
fee = inputAmount * 0.003
```

### 汇率

汇率就是输出金额除以输入金额。

```javascript
const rate = outputAmount / inputAmount
```

## ERC20 ⇄ ERC20 计算

在两种 ERC20 代币之间确定价格所需的变量为：

- 输入 ERC20 交易所的 ETH 储备大小
- 输入 ERC20 交易所的 ERC20 储备大小
- 输出 ERC20 交易所的 ETH 储备大小
- 输出 ERC20 交易所的 ERC20 储备大小
- 出售金额（输入）或购买金额（输出）

### 购买量（卖出订单）

对于卖出订单（确切输入），计算购买量（输出）：

```javascript
// TokenA（ERC20）转换为 ETH
const inputAmountA = userInputTokenAValue
const inputReserveA = tokenContractA.methods.balanceOf(exchangeAddressA).call()
const outputReserveA = web3.eth.getBalance(exchangeAddressA)

const numeratorA = inputAmountA * outputReserveA * 997
const denominatorA = inputReserveA * 1000 + inputAmountA * 997
const outputAmountA = numeratorA / denominatorA

// ETH 转换为 TokenB
const inputAmountB = outputAmountA
const inputReserveB = web3.eth.getBalance(exchangeAddressB)
const outputReserveB = tokenContract.methods.balanceOf(exchangeAddressB).call()

const numeratorB = inputAmountB * outputReserveB * 997
const denominatorB = inputReserveB * 1000 + inputAmountB * 997
const outputAmountB = numeratorB / denominatorB
```

### 出售量（买入订单）

对于买入订单（确切输出），计算成本（输入）：

```javascript
// 使用 ETH 购买 TokenB
const outputAmountB = userInputTokenBValue
const inputReserveB = web3.eth.getBalance(exchangeAddressB)
const outputReserveB = tokenContractB.methods.balanceOf(exchangeAddressB).call()

// 成本
const numeratorB = outputAmountB * inputReserveB * 1000
const denominatorB = (outputReserveB - outputAmountB) * 997
const inputAmountB = numeratorB / denominatorB + 1

// 使用 TokenA 购买 ETH
const outputAmountA = userInputEthValue
const inputReserveA = tokenContractA.methods.balanceOf(exchangeAddressA).call()
const outputReserveA = web3.eth.getBalance(exchangeAddressA)

// 成本
const numeratorA = outputAmountA * inputReserveA * 1000
const denominatorA = (outputReserveA - outputAmountA) * 997
const inputAmountA = numeratorA / denominatorA + 1
```

### 流动性提供者费用

从 TokenA 到 ETH 的兑换在输入交易所存在 0.30% 的流动性提供者费用。剩余的 ETH 兑换成 TokenB 时，又存在另一个 0.3% 的流动性提供者费用。

```javascript
const exchangeAFee = inputAmountA * 0.003
const exchangeBFee = inputAmountB * 0.003
```

由于用户只输入 Token A，可以将其表示为：

```javascript
const combinedFee = inputAmountA * 0.00591
```

### 汇率

汇率就是输出金额除以输入金额。

```javascript
const rate = outputAmountB / inputAmountA
```

## 截止时间

许多 Uniswap 功能包括交易 `截止时间`，该时间设置了一个时间点，在此之后交易将不能再执行。这限制了矿工长时间持有已签名交易并基于市场变动执行它们的行为。它还减少了因燃气费问题导致交易执行时间过长而带来的不确定性。

截止时间通过将所需的时间（以秒为单位）添加到最新的以太坊区块时间戳上计算得出。

```javascript
web3.eth.getBlock('latest', (error, block) => {
  deadline = block.timestamp + 300 // 交易在 300 秒后过期（5 分钟）
})
```

## 接收者

Uniswap 允许交易者交换代币并将输出转移到新的 `接收者` 地址。这允许了一种支付方式，其中付款人发送一种代币，收款人收到另一种代币。

## ETH ⇄ ERC20 交易

敬请期待...

## ERC20 ⇄ ERC20 交易

敬请期待...

## 自定义池

敬请期待...