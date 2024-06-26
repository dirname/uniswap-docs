---
id: arbitrum-deployments
title: Arbitrum 部署
---

# Uniswap 合约部署

最新版本的 `@uniswap/v3-core`、`@uniswap/v3-periphery` 和 `@uniswap/swap-router-contracts` 已在以下地址部署。集成商不应再假设它们在不同链上部署到相同的地址，并应极其小心地确认下面列出的映射。

| 合约                                                                                                                                                     | Arbitrum 地址                           | Arbitrum Sepolia 地址                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------- |
| [UniswapV3Factory](https://github.com/Uniswap/uniswap-v3-core/blob/v1.0.0/contracts/UniswapV3Factory.sol)                                                    | `0x1F98431c8aD98523631AE4a59f267346ea31F984` | `0x248AB79Bbb9bC29bB72f7Cd42F17e054Fc40188e` |
| [Multicall](https://arbiscan.io/address/0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB#code)                                                                     | `0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB` | `0x2B718b475e385eD29F56775a66aAB1F5cC6B2A0A` |
| [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol)                                   | `0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2` | ``                                           |
| [TickLens](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/TickLens.sol)                                                          | `0xbfd8137f7d1516D3ea5cA83523914859ec47F573` | `0x0fd18587734e5C2dcE2dccDcC7DD1EC89ba557d9` |
| [Quoter](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/Quoter.sol)                                                              | `0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6` | ``                                           |
| [SwapRouter](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/SwapRouter.sol)                                                           | `0xE592427A0AEce92De3Edee1F18E0157C05861564` | ``                                           |
| [NFTDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/libraries/NFTDescriptor.sol)                                           | `0x42B24A95702b9986e82d421cC3568932790A48Ec` | ``                                           |
| [NonfungibleTokenPositionDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungibleTokenPositionDescriptor.sol)           | `0x91ae842A5Ffd8d12023116943e72A606179294f3` | ``                                           |
| [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/TransparentUpgradeableProxy.sol) | `0xEe6A57eC80ea46401049E92587E52f5Ec1c24785` | ``                                           |
| [NonfungiblePositionManager](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungiblePositionManager.sol)                           | `0xC36442b4a4522E871399CD717aBDD847Ab11FE88` | `0x6b2937Bde17889EDCf8fbD8dE31C3C2a70Bc4d65` |
| [V3Migrator](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/V3Migrator.sol)                                                           | `0xA5644E29708357803b5A882D272c41cC0dF92B34` | `0x398f43ef2c67B941147157DA1c5a868E906E043D` |
| [QuoterV2](https://github.com/Uniswap/v3-periphery/blob/main/contracts/lens/QuoterV2.sol)                                                                    | `0x61fFE014bA17989E743c5F6cB21bF9697530B21e` | `0x2779a0CC1c3e0E44D2542EC3e79e3864Ae93Ef0B` |
| [SwapRouter02](https://github.com/Uniswap/swap-router-contracts/blob/main/contracts/SwapRouter02.sol)                                                        | `0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45` | `0x101F443B4d1b059569D643917553c771E1b9663E` |
| [Permit2](https://github.com/Uniswap/permit2)                                                                                                                | `0x000000000022D473030F116dDEE9F6B43aC78BA3` | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| [UniversalRouter](https://github.com/Uniswap/universal-router)                                                                                               | `0x5E325eDA8064b456f4781070C0738d849c824258` | `0x4A7b5Da61326A6379179b40d00F57E5bbDC962c2` |
| [v3StakerAddress](https://github.com/Uniswap/v3-staker)                                                                                                      | `0xe34139463bA50bD61336E0c446Bd8C0867c6fE65` | ``                                           |


这些地址是最终的，从以下 npm 包版本部署：

- [`@uniswap/v3-core@1.0.0`](https://github.com/Uniswap/uniswap-v3-core/tree/v1.0.0)
- [`@uniswap/v3-periphery@1.0.0`](https://github.com/Uniswap/uniswap-v3-periphery/tree/v1.0.0)
- [`@uniswap/swap-router-contracts@1.1.0`](https://github.com/Uniswap/swap-router-contracts/tree/v1.1.0)

# Uniswap V3 Staker

一个最新的按链部署地址列表[托管在 Github 上](https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2)，用于 `UniswapV3Staker` 合约。

# Universal Router

`UniversalRouter` 合约是当前首选的 ERC20 和 NFT 交换入口点，取代了包括 `SwapRouter02` 在内的其他合约。一个最新的按链部署地址列表[托管在 Github 上](https://github.com/Uniswap/universal-router/tree/main/deploy-addresses)。

# Uniswap 池部署

每个 Uniswap 池都是 `UniswapV3Pool` 合约的一个独特实例，并部署在其自己的唯一地址上。池的合约源代码将在 etherscan 上自动验证。例如，这是以太坊主网上的 [ETH/USDC 0.3% 池](https://etherscan.io/address/0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8)。

您可以在 [Uniswap Info](https://info.uniswap.org/#/) 上查找现有池的地址，或者通过调用 `UniswapV3Factory` 合约上的 [`getPool`](../reference/core/interfaces/IUniswapV3Factory.md#getpool) 函数来查找。

```solidity
getPool("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", 3000)
```

# 包装的原生代币地址

Uniswap 协议支持 ERC20 代币的交易。为了交换像 ETH（或 Polygon 上的 MATIC）这样的原生资产，Uniswap 协议使用 ERC20 包装原生代币合约将这些资产包装起来。协议在以太坊和 Polygon 上使用以下 WETH9 地址和 WMATIC 地址。

| 网络             | ChainId  | 包装的原生代币 | 地址                                      |
| ------------------- | -------- | -------------------- | -------------------------------------------- |
| Arbitrum            | `42161`  | WETH                 | `0x82aF49447D8a07e3bd95BD0d56f35241523fBab1` |
| Arbitrum Sepolia    | `421614` | WETH                 | `0x980B62Da83eFf3D4576C647993b0c1D7faf17c73` |