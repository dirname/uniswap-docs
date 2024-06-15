---
id: library
title: 库
---

# 库

## 代码

[`UniswapV2Library.sol`](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/libraries/UniswapV2Library.sol)

# 内部函数

## sortTokens

```solidity
function sortTokens(address tokenA, address tokenB) internal pure returns (address token0, address token1);
```

对代币地址进行排序。

## pairFor

```solidity
function pairFor(address factory, address tokenA, address tokenB) internal pure returns (address pair);
```

通过v2 SDK，无需进行任何外部调用即可计算一对代币的地址。

## getReserves

```solidity
function getReserves(address factory, address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB);
```

在传递的代币对上调用[getReserves](../smart-contracts/pair#getreserves)，并返回按照参数传递顺序排列的结果。

## quote

```solidity
function quote(uint amountA, uint reserveA, uint reserveB) internal pure returns (uint amountB);
```

给定一些资产数量和储备金，返回代表等值的另一种资产的数量。

- 在调用[mint](../smart-contracts/pair#mint-1)之前，用于计算最优代币数量。

## getAmountOut

```solidity
function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) internal pure returns (uint amountOut);
```

给定一个_输入_资产数量，根据储备金返回另一个资产的最大_输出_数量（考虑了费用）。

- 用于[getAmountsOut](#getamountsout)。

## getAmountIn

```solidity
function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) internal pure returns (uint amountIn);
```

根据储备金，返回购买给定_输出_资产数量所需的最小_输入_资产数量（考虑了费用）。

- 用于[getAmountsIn](#getamountsin)。

## getAmountsOut

```solidity
function getAmountsOut(uint amountIn, address[] memory path) internal view returns (uint[] memory amounts);
```

给定一个_输入_资产数量和一系列代币地址，通过依次调用路径中每对代币地址的[getReserves](#getreserves)，并使用这些来调用[getAmountOut](#getamountout)，计算所有后续最大_输出_代币数量。

- 在调用[swap](../smart-contracts/pair#swap-1)之前，用于计算最优代币数量。

## getAmountsIn

```solidity
function getAmountsIn(address factory, uint amountOut, address[] memory path) internal view returns (uint[] memory amounts);
```

给定一个_输出_资产数量和一系列代币地址，通过依次调用路径中每对代币地址的[getReserves](#getreserves)，并使用这些来调用[getAmountIn](#getamountin)，计算所有前导最小_输入_代币数量。

- 在调用[swap](../smart-contracts/pair#swap-1)之前，用于计算最优代币数量。