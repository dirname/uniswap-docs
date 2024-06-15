---
id: overview
title: 概览
---

## 代码

[`治理`](https://github.com/Uniswap/governance)

## 文档

有关 Uniswap 治理系统的参考资料，请参阅 [治理参考](../../../contracts/v3/reference/governance/overview.md)。

## UNI 地址

`UNI` 在以太坊 [主网](https://etherscan.io/address/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984) 上部署于地址 `0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984`，同时也在 [Ropsten](https://ropsten.etherscan.io/address/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984)、[Rinkeby](https://rinkeby.etherscan.io/address/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984)、[Görli](https://goerli.etherscan.io/address/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984) 和 [Kovan](https://kovan.etherscan.io/address/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984) 测试网上部署。它由提交 [ab22c08](https://github.com/Uniswap/governance/commit/ab22c084bacb2636a1aebf9759890063eb6e4946) 构建而成。

### ABI

```typescript
import Uni from '@uniswap/governance/build/Uni.json'
```

[https://unpkg.com/@uniswap/governance@1.0.2/build/Uni.json](https://unpkg.com/@uniswap/governance@1.0.2/build/Uni.json)

## 时间锁

`时间锁` 在以太坊 [主网](https://etherscan.io/address/0x1a9C8182C09F50C8318d769245beA52c32BE35BC) 上部署于地址 `0x1a9C8182C09F50C8318d769245beA52c32BE35BC`，并且在 [Ropsten](https://ropsten.etherscan.io/address/0x1a9C8182C09F50C8318d769245beA52c32BE35BC)、[Rinkeby](https://rinkeby.etherscan.io/address/0x1a9C8182C09F50C8318d769245beA52c32BE35BC)、[Görli](https://goerli.etherscan.io/address/0x1a9C8182C09F50C8318d769245beA52c32BE35BC) 和 [Kovan](https://kovan.etherscan.io/address/0x1a9C8182C09F50C8318d769245beA52c32BE35BC) 测试网上也有部署。它由提交 [ab22c08](https://github.com/Uniswap/governance/commit/ab22c084bacb2636a1aebf9759890063eb6e4946) 构建而成。

### ABI

```typescript
import Timelock from '@uniswap/governance/build/Timelock.json'
```

[https://unpkg.com/@uniswap/governance@1.0.2/build/Timelock.json](https://unpkg.com/@uniswap/governance@1.0.2/build/Timelock.json)

## GovernorAlpha（已弃用）

`GovernorAlpha` 在以太坊 [主网](https://etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F) 上部署于地址 `0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F`，并且在 [Ropsten](https://ropsten.etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F)、[Rinkeby](https://rinkeby.etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F)、[Görli](https://goerli.etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F) 和 [Kovan](https://kovan.etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F) 测试网上也有部署。它由提交 [ab22c08](https://github.com/Uniswap/governance/commit/ab22c084bacb2636a1aebf9759890063eb6e4946) 构建而成。

### ABI

`GovernorAlpha` 的 ABI 可在 [Etherscan](https://etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F) 查看，也可以通过一个 [npm 包](https://www.npmjs.com/package/@uniswap/governance) 获取。

[https://unpkg.com/@uniswap/governance@1.0.2/build/GovernorAlpha.json](https://unpkg.com/@uniswap/governance@1.0.2/build/GovernorAlpha.json)

```typescript
import GovernorAlpha from '@uniswap/governance/build/GovernorAlpha.json'
```

## GovernorAlpha v2（已弃用）

`GovernorAlpha v2` 在以太坊 [主网](https://etherscan.io/address/0xC4e172459f1E7939D522503B81AFAaC1014CE6F6) 上部署于地址 `0xC4e172459f1E7939D522503B81AFAaC1014CE6F6`。

### ABI

`GovernorAlpha v2` 的 ABI 可在 [Etherscan](https://etherscan.io/address/0xC4e172459f1E7939D522503B81AFAaC1014CE6F6) 查看。

## GovernorBravo（当前使用）

`GovernorBravo` 在以太坊 [主网](https://etherscan.io/address/0x408ED6354d4973f66138C91495F2f2FCbd8724C3#code) 上部署于地址 `0x408ED6354d4973f66138C91495F2f2FCbd8724C3`。

### ABI

Governor Bravo 的 ABI 可以在 [Etherscan](https://etherscan.io/address/0x408ED6354d4973f66138C91495F2f2FCbd8724C3#code) 找到。

## 其他地址

**以下地址仅存在于以太坊主网上。**

UNI 的 Merkle 分配器地址为 `0x090D4613473dEE047c3f2706764f49E0821D256e`。

Staking 奖励工厂的地址为 `0x3032Ab3Fa8C01d786D29dAdE018d7f2017918e12`。

四个 Staking 奖励地址分别为：

```js
0x6c3e4cb2e96b01f4b866965a91ed4437839a121a
0x7fba4b8dc5e7616e59622806932dbea72537a56b
0xa1484c3aa22a66c62b77e0ae78e15258bd0cb711
0xca35e32e7926b96a9988f61d510e038108d8068e
```

四个为期一年的归属合约地址分别为：

```js
0x4750c43867ef5f89869132eccf19b9b6c4286e1a
0xe3953d9d317b834592ab58ab2c7a6ad22b54075d
0x4b4e140d1f131fdad6fb59c13af796fd194e4135
0x3d30b1ab88d487b0f3061f40de76845bec3f1e94
```

`feeToSetterVester` 地址为 `0x18e433c7Bf8A2E1d0197CE5d8f9AFAda1A771360`。

`feeTo` 地址为 `0xDAF819c2437a82f9e01f6586207ebF961a7f0970`。