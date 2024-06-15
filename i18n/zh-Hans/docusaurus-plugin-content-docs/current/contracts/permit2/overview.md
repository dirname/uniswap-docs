---
id: overview
title: 概览
sidebar_position: 1
---

[`Permit2`](https://github.com/Uniswap/permit2) 是两个合约的统一，即 [`SignatureTransfer`](./reference/signature-transfer.md) 和 [`AllowanceTransfer`](./reference/allowance-transfer.md)。`SignatureTransfer` 合约处理所有基于签名的转账，这意味着绕过了代币上的授权，对花费者的权限仅在一次性签名被消耗的交易期间有效。`AllowanceTransfer` 合约处理设置代币上的授权，给予花费者在指定时间内花费指定金额的权限。通过 `AllowanceTransfer` 合约进行的任何转账只有在设置了正确的权限时才会成功。

## 资源

一个关于 Permit2 合约及其示例使用的出色 [解释](https://github.com/dragonfly-xyz/useful-solidity-patterns/tree/main/patterns/permit2)。

## 批准 Permit2

在集成的合约可以通过 Permit2 请求用户的代币之前，用户必须通过特定的代币合约批准 Permit2 合约，例如调用：

```solidity
USDC.approve(permit2Address, totalAmount);
```

为了从 Permit2 中获得最大利益，用户应该在合约上进行最大授权，其中：
```solidity
totalAmount = type(uint256).max;
```