---
id: factory
title: 工厂
---

# 工厂

## 代码

[`UniswapV2Factory.sol`](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Factory.sol)

# 地址

`UniswapV2Factory` 在以太坊 [主网](https://etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f) 上部署于 `0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f`，以及在 [Ropsten](https://ropsten.etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f)、[Rinkeby](https://rinkeby.etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f)、[Görli](https://goerli.etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f) 和 [Kovan](https://kovan.etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f) 测试网上。它是从提交 [8160750](https://github.com/Uniswap/uniswap-v2-core/tree/816075049f811f1b061bca81d5d040b96f4c07eb) 构建的。

# 事件

## PairCreated

```solidity
event PairCreated(address indexed token0, address indexed token1, address pair, uint);
```

每当通过 [createPair](#createpair) 创建一个对时触发。

- `token0` 按排序顺序保证严格小于 `token1`。
- 最后的 `uint` 日志值对于创建的第一个对为 `1`，第二个为 `2`，依此类推（参见 [allPairs](#allpairs)/[getPair](#getpair)）。

# 只读函数

## getPair

```solidity
function getPair(address tokenA, address tokenB) external view returns (address pair);
```

返回 `tokenA` 和 `tokenB` 的对地址，如果已创建的话，否则返回 `address(0)` (`0x0000000000000000000000000000000000000000`)。

- `tokenA` 和 `tokenB` 可互换。
- 对地址也可以通过 SDK 确定性地计算出来。

## allPairs

```solidity
function allPairs(uint) external view returns (address pair);
```

返回工厂通过创建的第 `n` 个对（从 `0` 开始索引）的地址，或者如果尚未创建足够的对，则返回 `address(0)` (`0x0000000000000000000000000000000000000000`)。

- 传入 `0` 获取第一个创建的对的地址，`1` 获取第二个，依此类推。

## allPairsLength

```solidity
function allPairsLength() external view returns (uint);
```

返回到目前为止通过工厂创建的对的总数。

## feeTo

```solidity
function feeTo() external view returns (address);
```

参阅 [协议费用计算](../../concepts/advanced-topics/fees)。

## feeToSetter

```solidity
function feeToSetter() external view returns (address);
```

允许更改 [feeTo](#feeto) 的地址。

# 状态更改函数

## createPair

```solidity
function createPair(address tokenA, address tokenB) external returns (address pair);
```

如果尚不存在，则为 `tokenA` 和 `tokenB` 创建一个对。

- `tokenA` 和 `tokenB` 可互换。
- 触发 [PairCreated](#paircreated)。

# 接口

```solidity
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';
```

```solidity
pragma solidity >=0.5.0;

interface IUniswapV2Factory {
  event PairCreated(address indexed token0, address indexed token1, address pair, uint);

  function getPair(address tokenA, address tokenB) external view returns (address pair);
  function allPairs(uint) external view returns (address pair);
  function allPairsLength() external view returns (uint);

  function feeTo() external view returns (address);
  function feeToSetter() external view returns (address);

  function createPair(address tokenA, address tokenB) external returns (address pair);
}
```

# ABI

```typescript
import IUniswapV2Factory from '@uniswap/v2-core/build/IUniswapV2Factory.json'
```

[https://unpkg.com/@uniswap/v2-core@1.0.0/build/IUniswapV2Factory.json](https://unpkg.com/@uniswap/v2-core@1.0.0/build/IUniswapV2Factory.json)