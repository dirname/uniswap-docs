---
id: pair
title: 对
---

此文档涵盖了特定于 Uniswap 的功能。对于 ERC-20 功能，请参阅 [对 (ERC-20)](../smart-contracts/pair-erc-20)。

# 代码

[`UniswapV2Pair.sol`](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol)

# 地址

请参阅 [对地址](../../guides/smart-contract-integration/getting-pair-addresses)。

# 事件

## Mint

```solidity
event Mint(address indexed sender, uint amount0, uint amount1);
```

每当通过 [mint](#mint-1) 创建流动性代币时触发。

## Burn

```solidity
event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);
```

每当通过 [burn](#burn-1) 销毁流动性代币时触发。

## Swap

```solidity
event Swap(
  address indexed sender,
  uint amount0In,
  uint amount1In,
  uint amount0Out,
  uint amount1Out,
  address indexed to
);
```

每当通过 [swap](#swap-1) 发生交换时触发。

## Sync

```solidity
event Sync(uint112 reserve0, uint112 reserve1);
```

每当通过 [mint](#mint-1)，[burn](#burn-1)，[swap](#swap-1)，或 [sync](#sync-1) 更新储备金时触发。

# 只读函数

## MINIMUM_LIQUIDITY

```solidity
function MINIMUM_LIQUIDITY() external pure returns (uint);
```

为所有对返回 `1000`。请参阅 [最低流动性](../../concepts/protocol-overview/smart-contracts#minimum-liquidity)。

## factory

```solidity
function factory() external view returns (address);
```

返回 [工厂地址](../smart-contracts/factory#address)。

## token0

```solidity
function token0() external view returns (address);
```

返回排序顺序较低的对代币的地址。

## token1

```solidity
function token1() external view returns (address);
```

返回排序顺序较高的对代币的地址。

## getReserves

```solidity
function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
```

返回用于定价交易和分配流动性的 token0 和 token1 的储备金。请参阅 [定价](../../concepts/advanced-topics/pricing)。还返回上一个该对发生交互的区块的 `block.timestamp`（模 `2**32`）。

## price0CumulativeLast

```solidity
function price0CumulativeLast() external view returns (uint);
```

请参阅 [预言机](../../concepts/core-concepts/oracles)。

## price1CumulativeLast

```solidity
function price1CumulativeLast() external view returns (uint);
```

请参阅 [预言机](../../concepts/core-concepts/oracles)。

## kLast

```solidity
function kLast() external view returns (uint);
```

返回最近的流动性事件时的储备金乘积。请参阅 [协议费用计算](../../concepts/advanced-topics/fees#protocol-charge-calculation)。

# 状态更改函数

## mint

```solidity
function mint(address to) external returns (uint liquidity);
```

创建池代币。

- 触发 [Mint](#mint)，[Sync](#sync)，[Transfer](../smart-contracts/pair-erc-20#transfer)。

## burn

```solidity
function burn(address to) external returns (uint amount0, uint amount1);
```

销毁池代币。

- 触发 [Burn](#burn)，[Sync](#sync)，[Transfer](../smart-contracts/pair-erc-20#transfer)。

## swap

```solidity
function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
```

交换代币。对于常规交换，`data.length` 必须为 `0`。另请参阅 [闪电交换](../../concepts/core-concepts/flash-swaps)。

- 触发 [Swap](#swap)，[Sync](#sync)。

## skim

```solidity
function skim(address to) external;
```

请参阅 <a href='/whitepaper.pdf' target='_blank' rel='noopener noreferrer'>白皮书</a>。

## sync

```solidity
function sync() external;
```

请参阅 <a href='/whitepaper.pdf' target='_blank' rel='noopener noreferrer'>白皮书</a>。

- 触发 [Sync](#sync)。

# 接口

```solidity
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';
```

```solidity
pragma solidity >=0.5.0;

interface IUniswapV2Pair {
  event Approval(address indexed owner, address indexed spender, uint value);
  event Transfer(address indexed from, address indexed to, uint value);

  function name() external pure returns (string memory);
  function symbol() external pure returns (string memory);
  function decimals() external pure returns (uint8);
  function totalSupply() external view returns (uint);
  function balanceOf(address owner) external view returns (uint);
  function allowance(address owner, address spender) external view returns (uint);

  function approve(address spender, uint value) external returns (bool);
  function transfer(address to, uint value) external returns (bool);
  function transferFrom(address from, address to, uint value) external returns (bool);

  function DOMAIN_SEPARATOR() external view returns (bytes32);
  function PERMIT_TYPEHASH() external pure returns (bytes32);
  function nonces(address owner) external view returns (uint);

  function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;

  event Mint(address indexed sender, uint amount0, uint amount1);
  event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);
  event Swap(
      address indexed sender,
      uint amount0In,
      uint amount1In,
      uint amount0Out,
      uint amount1Out,
      address indexed to
  );
  event Sync(uint112 reserve0, uint112 reserve1);

  function MINIMUM_LIQUIDITY() external pure returns (uint);
  function factory() external view returns (address);
  function token0() external view returns (address);
  function token1() external view returns (address);
  function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
  function price0CumulativeLast() external view returns (uint);
  function price1CumulativeLast() external view returns (uint);
  function kLast() external view returns (uint);

  function mint(address to) external returns (uint liquidity);
  function burn(address to) external returns (uint amount0, uint amount1);
  function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
  function skim(address to) external;
  function sync() external;
}
```

# ABI

```typescript
import IUniswapV2Pair from '@uniswap/v2-core/build/IUniswapV2Pair.json'
```

[https://unpkg.com/@uniswap/v2-core@1.0.0/build/IUniswapV2Pair.json](https://unpkg.com/@uniswap/v2-core@1.0.0/build/IUniswapV2Pair.json)