---
id: bnb-deployments
title: BNB 部署
---

# Uniswap 合约部署

最新版本的 `@uniswap/v3-core`、`@uniswap/v3-periphery` 和 `@uniswap/swap-router-contracts` 已在以下地址部署。集成商不应再假设它们在不同链上部署到相同的地址，并应格外小心确认下面的映射。

| 合约                                                                                                                             | BNB 地址                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [UniswapV3Factory](https://github.com/Uniswap/uniswap-v3-core/blob/v1.0.0/contracts/UniswapV3Factory.sol)                        | `0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7`     |
| [Multicall](https://bscscan.com/address/0x963Df249eD09c358A4819E39d9Cd5736c3087184#code)                                             | `0x963Df249eD09c358A4819E39d9Cd5736c3087184`     |
| [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol)         | `0xC9A7f5b73E853664044ab31936D0E6583d8b1c79`     |
| [TickLens](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/TickLens.sol)                               | `0xD9270014D396281579760619CCf4c3af0501A47C`     |
| [NFTDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/libraries/NFTDescriptor.sol)                 | `0x831d93E55AF23A2977E4DA892d5005f4F2995071`     |
| [NonfungibleTokenPositionDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungibleTokenPositionDescriptor.sol) | `0x0281E98322e4e8E53491D576Ee6A2BFCE644C55C`     |
| [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/TransparentUpgradeableProxy.sol) | `0xAec98e489AE35F243eB63452f6ad233A6c97eE97`     |
| [NonfungiblePositionManager](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungiblePositionManager.sol) | `0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613`     |
| [V3Migrator](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/V3Migrator.sol)                                 | `0x32681814957e0C13117ddc0c2aba232b5c9e760f`     |
| [QuoterV2](https://github.com/Uniswap/v3-periphery/blob/main/contracts/lens/QuoterV2.sol)                                         | `0x78D78E420Da98ad378D7799bE8f4AF69033EB077`     |
| [SwapRouter02](https://github.com/Uniswap/swap-router-contracts/blob/main/contracts/SwapRouter02.sol)                             | `0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2`     |
| [Permit2](https://github.com/Uniswap/permit2)                                                                                    | `0x000000000022D473030F116dDEE9F6B43aC78BA3`     |
| [UniversalRouter](https://github.com/Uniswap/universal-router)                                                                   | `0x4Dae2f939ACf50408e13d58534Ff8c2776d45265`     |
| [v3StakerAddress](https://github.com/Uniswap/v3-staker)                                                                         | `0x49B53C35AF9072fC71767577BF6380a88EE32C71`     |


这些地址是最终确定的，是从以下 npm 包版本部署的：

- [`@uniswap/v3-core@1.0.0`](https://github.com/Uniswap/uniswap-v3-core/tree/v1.0.0)
- [`@uniswap/v3-periphery@1.0.0`](https://github.com/Uniswap/uniswap-v3-periphery/tree/v1.0.0)
- [`@uniswap/swap-router-contracts@1.1.0`](https://github.com/Uniswap/swap-router-contracts/tree/v1.1.0)

# Uniswap V3 Staker

一个最新的按链划分的 [部署地址列表托管在 Github 上](https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2)，用于 `UniswapV3Staker` 合约。

# Universal Router

`UniversalRouter` 合约是当前首选的 ERC20 和 NFT 交换入口点，取代了包括 `SwapRouter02` 在内的其他合约。一个最新的按链划分的 [部署地址列表托管在 Github 上](https://github.com/Uniswap/universal-router/tree/main/deploy-addresses)。

# Uniswap 池部署

每个 Uniswap 池都是 `UniswapV3Pool` 合约的一个独立实例，并部署在自己的唯一地址上。池的合约源代码将在 etherscan 上自动验证。例如，这是以太坊主网上 [ETH/USDC 0.3% 池](https://etherscan.io/address/0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8)。

您可以在 [Uniswap Info](https://info.uniswap.org/#/) 上查找现有池的地址，或者通过调用 `UniswapV3Factory` 合约上的 [`getPool`](../reference/core/interfaces/IUniswapV3Factory.md#getpool) 函数。

```solidity
getPool("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", 3000)
```

# 包装原生代币地址

Uniswap 协议支持 ERC20 代币的交易。为了交换像 ETH（或 Polygon 上的 MATIC）这样的原生资产，Uniswap 协议将这些资产包装在一个 ERC20 包装原生代币合约中。协议在以太坊上使用以下 WETH9 地址，在 Polygon 上使用 WMATIC 地址。

| 网络               | ChainId  | 包装原生代币 | 地址                                        |
| ------------------ | -------- | ------------ | ------------------------------------------- |
| Binance 智能链 | `56`     | WBNB         | `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c` |