---
id: polygon-deployments
title: Polygon 部署
---

# Uniswap 合约部署

最新版本的 `@uniswap/v3-core`、`@uniswap/v3-periphery` 和 `@uniswap/swap-router-contracts` 已在下面列出的地址进行部署。集成者不应再假设它们在不同链上部署到相同的地址，并且应极其小心地确认以下映射。

| 合约                                                                                                                                                     | Polygon 地址                            | Polygon Mumbai 地址                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------- |
| [UniswapV3Factory](https://github.com/Uniswap/uniswap-v3-core/blob/v1.0.0/contracts/UniswapV3Factory.sol)                                                    | `0x1F98431c8aD98523631AE4a59f267346ea31F984` | `0x1F98431c8aD98523631AE4a59f267346ea31F984` |
| [Multicall](https://polygonscan.com/address/0x1F98415757620B543A52E61c46B32eB19261F984#code)                                                                 | `0x1F98415757620B543A52E61c46B32eB19261F984` | `0x1F98415757620B543A52E61c46B32eB19261F984` |
| [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol)                                   | `0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2` | `0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2` |
| [TickLens](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/TickLens.sol)                                                          | `0xbfd8137f7d1516D3ea5cA83523914859ec47F573` | `0xbfd8137f7d1516D3ea5cA83523914859ec47F573` |
| [Quoter](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/Quoter.sol)                                                              | `0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6` | `0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6` |
| [SwapRouter](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/SwapRouter.sol)                                                           | `0xE592427A0AEce92De3Edee1F18E0157C05861564` | `0xE592427A0AEce92De3Edee1F18E0157C05861564` |
| [NFTDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/libraries/NFTDescriptor.sol)                                           | `0x42B24A95702b9986e82d421cC3568932790A48Ec` | `0x42B24A95702b9986e82d421cC3568932790A48Ec` |
| [NonfungibleTokenPositionDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungibleTokenPositionDescriptor.sol)           | `0x91ae842A5Ffd8d12023116943e72A606179294f3` | `0x91ae842A5Ffd8d12023116943e72A606179294f3` |
| [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/TransparentUpgradeableProxy.sol) | `0xEe6A57eC80ea46401049E92587E52f5Ec1c24785` | `0xEe6A57eC80ea46401049E92587E52f5Ec1c24785` |
| [NonfungiblePositionManager](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungiblePositionManager.sol)                           | `0xC36442b4a4522E871399CD717aBDD847Ab11FE88` | `0xC36442b4a4522E871399CD717aBDD847Ab11FE88` |
| [V3Migrator](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/V3Migrator.sol)                                                           | `0xA5644E29708357803b5A882D272c41cC0dF92B34` | `0xA5644E29708357803b5A882D272c41cC0dF92B34` |
| [QuoterV2](https://github.com/Uniswap/v3-periphery/blob/main/contracts/lens/QuoterV2.sol)                                                                    | `0x61fFE014bA17989E743c5F6cB21bF9697530B21e` | `0x61fFE014bA17989E743c5F6cB21bF9697530B21e` |
| [SwapRouter02](https://github.com/Uniswap/swap-router-contracts/blob/main/contracts/SwapRouter02.sol)                                                        | `0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45` | `0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45` |
| [Permit2](https://github.com/Uniswap/permit2)                                                                                                                | `0x000000000022D473030F116dDEE9F6B43aC78BA3` | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| [UniversalRouter](https://github.com/Uniswap/universal-router)                                                                                               | `0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2` | `0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD` |
| [v3StakerAddress](https://github.com/Uniswap/v3-staker)                                                                                                      | `0xe34139463bA50bD61336E0c446Bd8C0867c6fE65` | `0xe34139463bA50bD61336E0c446Bd8C0867c6fE65` |


这些地址是最终的，从以下 npm 包版本进行部署：

- [`@uniswap/v3-core@1.0.0`](https://github.com/Uniswap/uniswap-v3-core/tree/v1.0.0)
- [`@uniswap/v3-periphery@1.0.0`](https://github.com/Uniswap/uniswap-v3-periphery/tree/v1.0.0)
- [`@uniswap/swap-router-contracts@1.1.0`](https://github.com/Uniswap/swap-router-contracts/tree/v1.1.0)

# Uniswap V3 Staker

[UniswapV3Staker] 合约按链的最新部署地址列表托管在 Github 上 [(https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2)](https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2)。

# Universal Router

`UniversalRouter` 合约是当前首选的 ERC20 和 NFT 交换入口点，取代了包括 `SwapRouter02` 在内的其他合约。按链的最新部署地址列表托管在 Github 上 [(https://github.com/Uniswap/universal-router/tree/main/deploy-addresses)](https://github.com/Uniswap/universal-router/tree/main/deploy-addresses)。

# Uniswap 池部署

每个 Uniswap 池都是 `UniswapV3Pool` 合约的一个独特实例，部署在其自己独特的地址。池的合约源代码将在 etherscan 上自动验证。例如，这是以太坊主网上的 [ETH/USDC 0.3% 池](https://etherscan.io/address/0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8)。

您可以在 [Uniswap Info](https://info.uniswap.org/#/) 上查找现有池的地址，或者通过调用 `UniswapV3Factory` 合约上的 [`getPool`](../reference/core/interfaces/IUniswapV3Factory.md#getpool) 函数。

```solidity
getPool("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", 3000)
```

# 包装本地代币地址

Uniswap 协议支持 ERC20 代币交易。为了交换像 ETH（或 Polygon 上的 MATIC）这样的原生资产，Uniswap 协议将这些资产包装在 ERC20 包装本地代币合约中。协议使用以下在以太坊上的 WETH9 地址和 Polygon 上的 WMATIC 地址。

| 网络             | ChainId  | 包装本地代币 | 地址                                      |
| ------------------- | -------- | -------------------- | -------------------------------------------- |
| Polygon             | `137`    | WMATIC               | `0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270` |
| Polygon Mumbai      | `80001`  | WMATIC               | `0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889` |