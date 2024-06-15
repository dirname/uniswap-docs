---
id: avax-deployments
title: AVAX 部署
---

# Uniswap 合约部署

最新版本的 `@uniswap/v3-core`、`@uniswap/v3-periphery` 和 `@uniswap/swap-router-contracts` 已在以下地址部署。集成商不应再假设它们在不同链上部署到相同的地址，并应格外小心确认下面的映射。

| 合约                                                                                                                             | AVAX Avalanche C-Chain 地址                          |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [UniswapV3Factory](https://github.com/Uniswap/uniswap-v3-core/blob/v1.0.0/contracts/UniswapV3Factory.sol)                        | `0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD`       |
| [Multicall](https://snowtrace.io/address/0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2/contract/43114/code)                         | `0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2`       |
| [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol)         | `0x9AdA7D7879214073F40183F3410F2b3f088c6381`       |
| [TickLens](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/TickLens.sol)                              | `0xEB9fFC8bf81b4fFd11fb6A63a6B0f098c6e21950`      |
| [NFTDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/libraries/NFTDescriptor.sol)               | `0x27Dd7eE7fE723e83Bf3612a75a034951fe299E99`      |
| [NonfungibleTokenPositionDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungibleTokenPositionDescriptor.sol) | `0xe89B7C295d73FCCe88eF263F86e7310925DaEBAF`     |
| [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/TransparentUpgradeableProxy.sol) | `0xE1f93a7cB6fFa2dB4F9d5A2FD43158A428993C09`     |
| [NonfungiblePositionManager](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungiblePositionManager.sol) | `0x655C406EBFa14EE2006250925e54ec43AD184f8B`     |
| [V3Migrator](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/V3Migrator.sol)                                 | `0x44f5f1f5E452ea8d29C890E8F6e893fC0f1f0f97`     |
| [QuoterV2](https://github.com/Uniswap/v3-periphery/blob/main/contracts/lens/QuoterV2.sol)                                         | `0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F`     |
| [SwapRouter02](https://github.com/Uniswap/swap-router-contracts/blob/main/contracts/SwapRouter02.sol)                             | `0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE`     |
| [Permit2](https://github.com/Uniswap/permit2)                                                                                   | `0x000000000022D473030F116dDEE9F6B43aC78BA3`     |
| [UniversalRouter](https://github.com/Uniswap/universal-router)                                                                   | `0x4Dae2f939ACf50408e13d58534Ff8c2776d45265`     |
| [v3StakerAddress](https://github.com/Uniswap/v3-staker)                                                                         | `0xCA9D0668C600c4dd07ca54Be1615FE5CDFd76Ac3`     |

这些地址是最终的，从以下 npm 包版本部署：

- [`@uniswap/v3-core@1.0.0`](https://github.com/Uniswap/uniswap-v3-core/tree/v1.0.0)
- [`@uniswap/v3-periphery@1.0.0`](https://github.com/Uniswap/uniswap-v3-periphery/tree/v1.0.0)
- [`@uniswap/swap-router-contracts@1.1.0`](https://github.com/Uniswap/swap-router-contracts/tree/v1.1.0)


# Uniswap V3 Staker

[UniswapV3Staker] 合约按链部署的最新地址列表托管在 Github 上：[https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2](https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2)

# Universal Router

`UniversalRouter` 合约是当前首选的 ERC20 和 NFT 交换入口点，取代了包括 `SwapRouter02` 在内的其他合约。按链部署的最新地址列表托管在 Github 上：[https://github.com/Uniswap/universal-router/tree/main/deploy-addresses](https://github.com/Uniswap/universal-router/tree/main/deploy-addresses)

# Uniswap 池部署

每个 Uniswap 池都是 `UniswapV3Pool` 合约的一个独立实例，并部署在其自己独特的地址上。池的合约源代码将在 etherscan 上自动验证。例如，这是以太坊主网上的 [ETH/USDC 0.3% 池](https://etherscan.io/address/0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8)。

您可以在 [Uniswap Info](https://info.uniswap.org/#/) 上查找现有池的地址，或通过调用 `UniswapV3Factory` 合约上的 [`getPool`](../reference/core/interfaces/IUniswapV3Factory.md#getpool) 函数。

```solidity
getPool("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", 3000)
```

# 包装本地代币地址

Uniswap 协议支持 ERC20 代币交易。为了交换像 ETH（或 Polygon 上的 MATIC）这样的原生资产，Uniswap 协议使用 ERC20 包装本地代币合约将这些资产包装起来。协议在以太坊上使用以下 WETH9 地址，在 Polygon 上使用 WMATIC 地址。

| 网络 | ChainId  | 包装本地代币 | 地址                                          |
| ---- | -------- | ------------ | --------------------------------------------- |
| AVAX | `43114`  | WAVAX        | `0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7` |