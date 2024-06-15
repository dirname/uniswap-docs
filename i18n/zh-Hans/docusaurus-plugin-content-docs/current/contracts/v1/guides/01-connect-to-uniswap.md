---
id: connect-to-uniswap
title: 连接到 Uniswap
---

Uniswap 的智能合约存在于以太坊区块链上。使用 [ethers.js](https://github.com/ethers-io/ethers.js/) 或 [web3.js](https://github.com/ethereum/web3.js) 将您的网站连接到以太坊。用户需要一个支持 web3 的浏览器。在桌面端，这意味着使用 [MetaMask](https://metamask.io/) 插件或类似工具。在移动端，兼容 web3 的浏览器包括 [Trust Wallet](https://trustwalletapp.com/) 和 [Coinbase Wallet](https://wallet.coinbase.com/)。请访问 [ethereum.org](https://ethereum.org/use/#_3-what-is-a-wallet-and-which-one-should-i-use) 了解更多详情。

# 工厂合约

Uniswap 的 [工厂合约](https://github.com/Uniswap/uniswap-v1/blob/master/contracts/uniswap_factory.vy) 可用于为任何尚未拥有交易所的 ERC20 代币创建交易所合约。它还作为系统中已添加的 ERC20 代币及其关联交易所的注册表。

可以通过工厂地址和 ABI 实例化工厂合约：

## [工厂地址](https://etherscan.io/address/0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95)

```javascript
// 主网
const factory = '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95'

// 测试网络
const ropsten = '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351'
const rinkeby = '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36'
const kovan = '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30'
const görli = '0x6Ce570d02D73d4c384b46135E87f8C592A8c86dA'
```

### 工厂接口

在 web3 中创建工厂接口需要 **工厂地址** 和 **工厂 ABI**：

```javascript
const factoryABI = [
  // ABI 定义...
]
```

```javascript
const factoryContract = new web3.eth.Contract(factoryABI, factoryAddress)
```

# 交易所合约

## 获取交易所地址

每个 ERC20 代币都有一个单独的交易所合约。工厂合约中的 `getExchange` 方法可用于找到与 ERC20 代币地址相关的以太坊地址。

```javascript
const exchangeAddress = factoryContract.methods.getExchange(tokenAddress)
```

如果返回值是 `0x0000000000000000000000000000000000000000`，则该代币尚未拥有交易所。

## 交易所接口

在 web3 中创建交易所接口需要 **交易所地址** 和 **交易所 ABI**：

```javascript
const exchangeABI = [
  // ABI 定义...
]
```

```javascript
const exchangeContract = new web3.eth.Contract(exchangeABI, exchangeAddress)
```

# 代币合约

一些 Uniswap 交互需要直接调用 ERC20 代币合约，而不是它们所关联的交易所。

## 获取代币地址

工厂合约中的 `getToken` 方法可用于查找与交易所合约相关联的 ERC20 代币地址。将 ERC20 代币添加到 Uniswap 没有任何门槛，也不会检查代币合约的有效性。前端界面应维护一份有效的 ERC20 代币列表，供用户安全交易，或允许用户粘贴任意地址。

```javascript
const tokenAddress = factoryContract.methods.getToken(exchangeAddress)
```

如果返回值是 `0x0000000000000000000000000000000000000000`，则输入地址不是 Uniswap 交易所。

## 代币接口

在 web3 中创建代币接口需要 **代币地址** 和 **代币 ABI**：

```javascript
const tokenABI = [
  // ABI 定义...
]
```

```javascript
const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress)
```