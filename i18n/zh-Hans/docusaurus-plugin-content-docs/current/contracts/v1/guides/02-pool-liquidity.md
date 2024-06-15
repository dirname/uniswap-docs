---
id: pool-liquidity
title: 池流动性
---

# 正式化模型

Uniswap 流动性池是自主的，并使用恒定乘积做市商 (`x * y = k`)。该模型已被正式化，智能合约实现通过了轻量级的形式验证。

- [正式化规范](https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf)
- [轻量级验证](https://github.com/runtimeverification/verified-smart-contracts/tree/uniswap/uniswap/results)

## 创建交易所

`createExchange` 函数用于为尚未创建交易所的 ERC20 代币部署交易所合约。

```javascript
factory.methods.createExchange(tokenAddress).send()
```

一旦创建了交易所，就可以通过 [`getExchange`](connect-to-uniswap/#get-exchange-address) 获取其地址。

## 交易所储备

每个交易所合约持有 ETH 和相关 ERC20 代币的流动性储备。

### ETH 储备

与 ERC20 代币交易所关联的 ETH 储备是交易所智能合约的 ETH 余额。

```javascript
const ethReserve = web3.eth.getBalance(exchangeAddress)
```

### ERC20 储备

与 ERC20 代币交易所关联的 ERC20 储备是交易所智能合约的 ERC20 余额。

```javascript
const tokenReserve = tokenContract.methods.balanceOf(exchangeAddress)
```

## 添加流动性

任何想要加入的人都可以通过调用 `addLiquidity` 函数加入 Uniswap 流动性池。

```javascript
exchange.methods.addLiquidity(min_liquidity, max_tokens, deadline).send({ value: ethAmount })
```

添加流动性需要向 ERC20 代币的关联交易所合约存入等值的 ETH 和 ERC20 代币。

第一个加入池的流动性提供者通过存入他们认为等值的 ETH 和 ERC20 代币来设置初始汇率。如果这个比例不对，套利交易者将以牺牲初始流动性提供者的代价将价格带回到均衡状态。

所有未来的流动性提供者使用存款时的汇率存入 ETH 和 ERC20。

### 参数

发送到 `addLiquidity` 的 `ethAmount` 是将确切存入流动储备的 ETH 数量。它应该是流动性提供者希望存入储备的总价值的 50%。

由于流动性提供者必须按照当前汇率进行存款，Uniswap 智能合约使用 `ethAmount` 来确定必须存入的 ERC20 代币数量。这个代币数量是流动性提供者希望存入的剩余 50% 总价值。由于汇率可能在交易签名和在以太坊上执行之间发生变化，`max_tokens` 用于限制此比率波动的幅度。对于第一个流动性提供者，`max_tokens` 就是存入的确切代币数量。

铸造流动性代币来跟踪每个流动性提供者对总储备贡献的比例。`min_liquidity` 结合 `max_tokens` 和 `ethAmount` 来限制流动性代币的铸造速率。对于第一个流动性提供者，`min_liquidity` 不起作用，可以设置为 0。

交易 `deadline` 用于设置交易不能再执行的时间点。这限制了“免费期权”问题，在这个问题中，以太坊矿工可以持有已签名的交易并根据市场走势执行它们。

## 移除流动性

流动性提供者使用 `removeLiquidity` 函数提取他们在储备中的份额。

```javascript
exchange.methods.removeLiquidity(amount, min_eth, min_tokens, deadline).send()
```

流动性按提取时储备的相同比率撤回。如果汇率不佳，则存在有利可图的套利机会，这将纠正价格。

### 参数

`amount` 指定了将被销毁的流动性代币的数量。将这个数量除以总流动性代币供应量，得到的是提供者正在提取的 ETH 和 ER20 储备的百分比。

由于汇率可能在交易签名和在以太坊上执行之间发生变化，`min_eth` 和 `min_tokens` 用于限制此比率波动的幅度。

与 `addLiquidity` 相同，`deadline` 用于设置交易不能再执行的时间点。