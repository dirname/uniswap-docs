---
id: supporting-meta-transactions
title: 支持元交易
---

所有 Uniswap V2 池代币都通过 [permit](../../reference/smart-contracts/pair-erc-20#permit) 函数支持元交易批准。这消除了在与池代币进行程序化交互前需要一个阻塞的批准交易的需求。

# ERC-712

在标准的 ERC-20 代币合约中，所有者只能通过直接调用使用 `msg.sender` 来授权自身的函数来注册批准。通过元批准，所有权和权限是从调用者（有时称为转发器）传递给函数的签名中派生出来的。由于使用以太坊私钥签署数据可能是一个棘手的任务，Uniswap V2 依赖于 [ERC-712](https://eips.ethereum.org/EIPS/eip-712)，这是一个具有广泛社区支持的签名标准，以确保用户安全和钱包兼容性。

## 域分隔符

```solidity
keccak256(
  abi.encode(
    keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),
    keccak256(bytes(name)),
    keccak256(bytes('1')),
    chainId,
    address(this)
  )
);
```

- `name` 总是 `Uniswap V2`，见 [name](../../reference/smart-contracts/pair-erc-20#name)。
- `chainId` 由 [ERC-1344](https://ethereum-magicians.org/t/eip-1344-add-chain-id-opcode/1131) 的 `chainid` 操作码确定。
- `address(this)` 是池的地址，见 [Pair Addresses](../../../../sdk/v2/guides/getting-pair-addresses)。

## Permit 类型哈希

```solidity
keccak256('Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)');
```