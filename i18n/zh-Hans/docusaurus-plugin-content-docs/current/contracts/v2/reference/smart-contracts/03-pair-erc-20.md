---
id: Pair-ERC-20
title: Pair (ERC-20)
---

此文档涵盖了用于表示池代币的 ERC-20 功能。对于特定于 Uniswap 的功能，请参阅 [Pair](../smart-contracts/pair)。

# 代码

[`UniswapV2ERC20.sol`](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)

# 事件

## Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint value);
```

每当通过 [approve](#approve) 或 [permit](#permit) 发生批准时触发。

## Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint value);
```

每当通过 [transfer](#transfer-1)、[transferFrom](#transferfrom)、[mint](../smart-contracts/pair#mint-1) 或 [burn](../smart-contracts/pair#burn-1) 发生转移时触发。

# 只读函数

## name

```solidity
function name() external pure returns (string memory);
```

对于所有对，返回 `Uniswap V2`。

## symbol

```solidity
function symbol() external pure returns (string memory);
```

对于所有对，返回 `UNI-V2`。

## decimals

```solidity
function decimals() external pure returns (uint8);
```

对于所有对，返回 `18`。

## totalSupply

```solidity
function totalSupply() external view returns (uint);
```

返回一对的总池代币数量。

## balanceOf

```solidity
function balanceOf(address owner) external view returns (uint);
```

返回由地址拥有的池代币数量。

## allowance

```solidity
function allowance(address owner, address spender) external view returns (uint);
```

返回一个地址允许spender通过 [transferFrom](#transferfrom) 转移的流动性代币数量。

## DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32);
```

返回用于 [permit](#permit) 的域分隔符。

## PERMIT_TYPEHASH

```solidity
function PERMIT_TYPEHASH() external view returns (bytes32);
```

返回用于 [permit](#permit) 的类型哈希。

## nonces

```solidity
function nonces(address owner) external view returns (uint);
```

返回用于 [permit](#permit) 的地址当前的nonce值。

# 状态更改函数

## approve

```solidity
function approve(address spender, uint value) external returns (bool);
```

让 `msg.sender` 设置他们对spender的允许额度。

- 触发 [Approval](#approval)。

## transfer

```solidity
function transfer(address to, uint value) external returns (bool);
```

让 `msg.sender` 向地址发送池代币。

- 触发 [Transfer](#transfer)。

## transferFrom

```solidity
function transferFrom(address from, address to, uint value) external returns (bool);
```

从一个地址向另一个地址发送池代币。

- 需要批准。
- 触发 [Transfer](#transfer)。

## permit

```solidity
function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;
```

通过签名授予批准额度给spender。

- 参见 [使用 Permit](../../guides/smart-contract-integration/supporting-meta-transactions)。
- 触发 [Approval](#approval)。

# 接口

```solidity
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2ERC20.sol';
```

```solidity
pragma solidity >=0.5.0;

interface IUniswapV2ERC20 {
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
}
```

# ABI

```typescript
import IUniswapV2ERC20 from '@uniswap/v2-core/build/IUniswapV2ERC20.json'
```

[https://unpkg.com/@uniswap/v2-core@1.0.0/build/IUniswapV2ERC20.json](https://unpkg.com/@uniswap/v2-core@1.0.0/build/IUniswapV2ERC20.json)