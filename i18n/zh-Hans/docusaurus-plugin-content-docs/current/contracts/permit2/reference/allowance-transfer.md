---
id: allowance-transfer
title: AllowanceTransfer
sidebar_position: 2
---

> [**源代码**](https://github.com/Uniswap/permit2/blob/main/src/AllowanceTransfer.sol)

## 概览

该合约的主要入口点是：

- `approve`
    - 当您不希望通过签名验证设置代币权限时，使用 `approve`。
- `permit`
    - 当您希望通过签名验证设置代币权限时，使用 `permit`。
- `transferFrom`
    - 当您想转移代币并且拥有必要权限时，使用 `transferFrom`。

## 函数

### `approve`

**函数签名**

```solidity
function approve(address token, address spender, uint160 amount, uint48 expiration) external
```

**参数**

- token - 要授权的代币地址
- spender - 要授权的花费者地址
- amount - 授权的代币数量，`type(uint160).max` 被视为无限授权额度
- expiration - 授权不再有效的截止时间戳，传入 `0` 将在 `block.timestamp` 时使权限过期

### 单个 `permit`

**函数签名**

```solidity
function permit(address owner, PermitSingle memory permitSingle, bytes calldata signature) external;
```

**参数**

- owner - 代币所有者的地址
- permitSingle - 通过以下方式构建：

```solidity
struct PermitSingle {
        // 单个代币授权的许可数据
        PermitDetails details;
        // 在允许的代币上获得授权的地址
        address spender;
        // 许可签名的截止日期
        uint256 sigDeadline;
    }

struct PermitDetails {
        // ERC20 代币地址
        address token;
        // 允许花费的最大金额
        uint160 amount;
        // 花费者代币授权变为无效的时间戳
        uint48 expiration;
        // 按照所有者、代币和花费者索引的递增值，用于每个签名
        uint48 nonce;
    }
```

- signature - 对许可数据的签名。支持 EOA 签名、由 [EIP-2098](https://eips.ethereum.org/EIPS/eip-2098) 定义的紧凑签名以及由 [EIP-1271](https://eips.ethereum.org/EIPS/eip-1271) 定义的合约签名

### 批量 `permit`

**函数签名**

```solidity
function permit(address owner, PermitBatch memory permitBatch, bytes calldata signature) external;
```

**参数**

- owner - 代币所有者的地址
- permitBatch - 通过以下方式构建：

```solidity
struct PermitBatch {
        // 多个代币授权的许可数据
        PermitDetails[] details;
        // 在允许的代币上获得授权的地址
        address spender;
        // 许可签名的截止日期
        uint256 sigDeadline;
    }
struct PermitDetails {
        // ERC20 代币地址
        address token;
        // 允许花费的最大金额
        uint160 amount;
        // 花费者代币授权变为无效的时间戳
        uint48 expiration;
        // 按照所有者、代币和花费者索引的递增值，用于每个签名
        uint48 nonce;
    }
```

- signature - 对许可数据的签名。支持 EOA 签名、由 [EIP-2098](https://eips.ethereum.org/EIPS/eip-2098) 定义的紧凑签名以及由 [EIP-1271](https://eips.ethereum.org/EIPS/eip-1271) 定义的合约签名

### 单个 `transferFrom`

**函数签名**

```solidity
function transferFrom(address from, address to, uint160 amount, address token) external;
```

**参数**

- from - 转移代币的地址
- to - 收款人的地址
- amount - 要转移的代币数量，最大数量为 `type(uint160).max`
- token - 要转移的代币地址

### 批量 `transferFrom`

**函数签名**

```solidity
function transferFrom(AllowanceTransferDetails[] calldata transferDetails) external;
```

**参数**

- transferDetails - 通过以下方式构建

```solidity
struct AllowanceTransferDetails {
        // 代币的所有者
        address from;
        // 代币的接收者
        address to;
        // 代币的数量
        uint160 amount;
        // 要转移的代币
        address token;
    }
```

## 非斯数模式

用于防止签名重放攻击的非斯数与标准递增非斯数类似。然而，我们将非斯数与允许的金额和允许的持续时间打包在一起。这意味着非斯数按 *所有者*、*代币* 和 *花费者* 增加。这也意味着您可以使用相同的非斯数同时签署两个不同的许可，只要代币或花费者不同，它们 *不会* 彼此取消。

非斯数被打包的映射定义如下：

```solidity
mapping(address => mapping(address => mapping(address => PackedAllowance))) public allowance;
```

并以如下方式索引：

```solidity
PackedAllowance allowanceInformation = allowance[ownerAddress][tokenAddress][spenderAddress];
uint48 nonce = allowanceInformation.nonce;
```

## 安全考虑

类似于 SignatureTransfer 中概述的安全考虑，集成的合约需要对调用者执行有效的安全检查，并在任何转移调用中为 `from` 参数传递正确的地址。

`AllowanceTransfer` 合约上的所有金额类型均为 `uint160`，因此请确保集成的合约在需要时安全地向下转换。查看 Permit2Lib 如何安全地下降类型。