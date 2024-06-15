---
id: celo-deployments
title: CELO 部署
---

# Uniswap 合约部署

最新版本的 `@uniswap/v3-core`，`@uniswap/v3-periphery`，以及 `@uniswap/swap-router-contracts` 已在下面列出的地址进行部署。集成商不应再假定这些合约跨链部署在相同的地址上，并且应极其小心地确认以下映射。

| 合约                                                                                                                                             | CELO 地址                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| [UniswapV3Factory](https://github.com/Uniswap/uniswap-v3-core/blob/v1.0.0/contracts/UniswapV3Factory.sol)                                        | `0xAfE208a311B21f13EF87E33A90049fC17A7acDEc`       |
| [Multicall2](https://celoscan.io/address/0x633987602de5c4f337e3dbf265303a1080324204#code)                                                             | `0x633987602DE5C4F337e3DbF265303A1080324204`       |
| [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol)                         | `0xc1b262Dd7643D4B7cA9e51631bBd900a564BF49A`       |
| [TickLens](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/TickLens.sol)                                                 | `0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D`       |
| [NFTDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/libraries/NFTDescriptor.sol)                                   | `0xa9Fd765d85938D278cb0b108DbE4BF7186831186`       |
| [NonfungibleTokenPositionDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungibleTokenPositionDescriptor.sol)   | `0x644023b316bB65175C347DE903B60a756F6dd554`       |
| [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/TransparentUpgradeableProxy.sol) | `0x505B43c452AA4443e0a6B84bb37771494633Fde9`      |
| [NonfungiblePositionManager](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungiblePositionManager.sol)                 | `0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A`      |
| [V3Migrator](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/V3Migrator.sol)                                                   | `0x3cFd4d48EDfDCC53D3f173F596f621064614C582`      |
| [QuoterV2](https://github.com/Uniswap/v3-periphery/blob/main/contracts/lens/QuoterV2.sol)                                                             | `0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8`      |
| [SwapRouter02](https://github.com/Uniswap/swap-router-contracts/blob/main/contracts/SwapRouter02.sol)                                                  | `0x5615CDAb10dc425a742d643d949a7F474C01abc4`      |
| [Permit2](https://github.com/Uniswap/permit2)                                                                                                       | `0x000000000022D473030F116dDEE9F6B43aC78BA3`      |
| [UniversalRouter](https://github.com/Uniswap/universal-router)                                                                                      | `0x643770E279d5D0733F21d6DC03A8efbABf3255B4`      |
| [v3StakerAddress](https://github.com/Uniswap/v3-staker)                                                                                            | `0x6586FB35393abF7Ff454977a9b3c912d218791C6`      |

这些地址是最终的，是从以下 npm 包版本部署的：

- [`@uniswap/v3-core@1.0.0`](https://github.com/Uniswap/uniswap-v3-core/tree/v1.0.0)
- [`@uniswap/v3-periphery@1.0.0`](https://github.com/Uniswap/uniswap-v3-periphery/tree/v1.0.0)
- [`@uniswap/swap-router-contracts@1.1.0`](https://github.com/Uniswap/swap-router-contracts/tree/v1.1.0)

# Uniswap V3 Staker

一个由链更新的[部署地址列表托管在 Github 上](https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2)，用于 `UniswapV3Staker` 合约。

# Universal Router

`UniversalRouter` 合约是当前首选的 ERC20 和 NFT 交换入口点，取代了包括 `SwapRouter02` 在内的其他合约。一个由链更新的[部署地址列表托管在 Github 上](https://github.com/Uniswap/universal-router/tree/main/deploy-addresses)。

# Uniswap 池部署

每个 Uniswap 池都是 `UniswapV3Pool` 合约的一个唯一实例，并部署在其自己独特的地址上。池的合约源代码将在 etherscan 上自动验证。例如，这是以太坊主网上的 [ETH/USDC 0.3% 池](https://etherscan.io/address/0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8)。

您可以在 [Uniswap Info](https://info.uniswap.org/#/) 上查找现有池的地址，或者通过调用 `UniswapV3Factory` 合约上的 [`getPool`](../reference/core/interfaces/IUniswapV3Factory.md#getpool) 函数。

```solidity
getPool("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", 3000)
```

# CELO 本地资产

Uniswap 协议支持 ERC20 代币交易。为了交换像 ETH（或 Polygon 上的 MATIC）这样的本地资产，Uniswap 协议将这些资产包装在一个 ERC20 包装本地代币合约中。协议在以太坊和 Polygon 上使用以下 WETH9 地址和 WMATIC 地址。

**注意：CELO 是本地资产，它是一个代币，并将作为代币工作，需要批准路由器进行管理。*

| 网络 | ChainId   | 包装本地代币 | 地址                                          |
| ---- | --------- | ------------ | --------------------------------------------- |
| CELO | `142220`  | CELO 本地资产 | `0x471EcE3750Da237f93B8E339c536989b8978a438` |