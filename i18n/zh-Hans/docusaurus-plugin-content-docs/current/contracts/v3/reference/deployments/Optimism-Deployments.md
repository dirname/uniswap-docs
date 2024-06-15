---
id: optimism-deployments
title: Optimism 部署
---

# Uniswap 合约部署

`@uniswap/v3-core`、`@uniswap/v3-periphery` 和 `@uniswap/swap-router-contracts` 的最新版本已部署在下面列出的地址。集成商不应再假设这些合约在不同链上部署于相同的地址，并且应格外小心地确认以下映射。

| 合约                                                                                                                                                     | Optimism 地址                           | OP Sepolia SDK-Core 地址               | OP Sepolia 地址                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| [UniswapV3Factory](https://github.com/Uniswap/uniswap-v3-core/blob/v1.0.0/contracts/UniswapV3Factory.sol)                                                    | `0x1F98431c8aD98523631AE4a59f267346ea31F984` | `0x8CE191193D15ea94e11d327b4c7ad8bbE520f6aF` | `0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24` |
| [Multicall](https://optimistic.etherscan.io/address/0x1F98415757620B543A52E61c46B32eB19261F984#code)                                                         | `0x1F98415757620B543A52E61c46B32eB19261F984` | `0x80e4e06841bb76AA9735E0448cB8d003C0EF009a` | `0xd867e273eAbD6c853fCd0Ca0bFB6a3aE6491d2C1` |
| [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol)                                   | `0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2` | `0xD7303474Baca835743B54D73799688990f24a79D` | `0xD7303474Baca835743B54D73799688990f24a79D` |
| [TickLens](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/TickLens.sol)                                                          | `0xbfd8137f7d1516D3ea5cA83523914859ec47F573` | `0xCb7f54747F58F8944973cea5b8f4ac2209BadDC5` | `0xedf6066a2b290C185783862C7F4776A2C8077AD1` |
| [Quoter](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/Quoter.sol)                                                              | `0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6` | ``                                           | ``                                           |
| [SwapRouter](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/SwapRouter.sol)                                                           | `0xE592427A0AEce92De3Edee1F18E0157C05861564` | ``                                           | ``                                           |
| [NFTDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/libraries/NFTDescriptor.sol)                                           | `0x42B24A95702b9986e82d421cC3568932790A48Ec` | `0x4e0caFF1Df1cCd7CF782FDdeD77f020699B57f1a` | `0x4e0caFF1Df1cCd7CF782FDdeD77f020699B57f1a` |
| [NonfungibleTokenPositionDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungibleTokenPositionDescriptor.sol)           | `0x91ae842A5Ffd8d12023116943e72A606179294f3` | `0xd7c6e867591608D32Fe476d0DbDc95d0cf584c8F` | `0xd7c6e867591608D32Fe476d0DbDc95d0cf584c8F` |
| [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/TransparentUpgradeableProxy.sol) | `0xEe6A57eC80ea46401049E92587E52f5Ec1c24785` | `0x1E2A708040Eb6Ed08893E27E35D399e8E8e7857E` | `0x1E2A708040Eb6Ed08893E27E35D399e8E8e7857E` |
| [NonfungiblePositionManager](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungiblePositionManager.sol)                           | `0xC36442b4a4522E871399CD717aBDD847Ab11FE88` | `0xdA75cEf1C93078e8b736FCA5D5a30adb97C8957d` | `0x27F971cb582BF9E50F397e4d29a5C7A34f11faA2` |
| [V3Migrator](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/V3Migrator.sol)                                                           | ``                                           | `0xE7EcbAAaA54D007A00dbb6c1d2f150066D69dA07` | `0xCbf8b7f80800bd4888Fbc7bf1713B80FE4E23E10` |
| [QuoterV2](https://github.com/Uniswap/v3-periphery/blob/main/contracts/lens/QuoterV2.sol)                                                                    | `0x61fFE014bA17989E743c5F6cB21bF9697530B21e` | `0x0FBEa6cf957d95ee9313490050F6A0DA68039404` | `0xC5290058841028F1614F3A6F0F5816cAd0df5E27` |
| [SwapRouter02](https://github.com/Uniswap/swap-router-contracts/blob/main/contracts/SwapRouter02.sol)                                                        | `0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45` | `0x94cC0AaC535CCDB3C01d6787D6413C739ae12bc4` | `0x94cC0AaC535CCDB3C01d6787D6413C739ae12bc4` |
| [Permit2](https://github.com/Uniswap/permit2)                                                                                                                | `0x000000000022D473030F116dDEE9F6B43aC78BA3` | `0x000000000022D473030F116dDEE9F6B43aC78BA3` | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| [UniversalRouter](https://github.com/Uniswap/universal-router)                                                                                               | `0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8` | `0xD5bBa708b39537d33F2812E5Ea032622456F1A95` | `0xD5bBa708b39537d33F2812E5Ea032622456F1A95` |
| [v3StakerAddress](https://github.com/Uniswap/v3-staker)                                                                                                      | `0xe34139463bA50bD61336E0c446Bd8C0867c6fE65` | `0x78eF13931e5625C828ef8Ec455ba7fa09fDa9808` | ``                                           |

这些地址是最终的，从以下 npm 包版本进行部署：

- [`@uniswap/v3-core@1.0.0`](https://github.com/Uniswap/uniswap-v3-core/tree/v1.0.0)
- [`@uniswap/v3-periphery@1.0.0`](https://github.com/Uniswap/uniswap-v3-periphery/tree/v1.0.0)
- [`@uniswap/swap-router-contracts@1.1.0`](https://github.com/Uniswap/swap-router-contracts/tree/v1.1.0)

# Uniswap V3 Staker

[UniswapV3Staker] 合约按链部署的最新地址列表托管在 Github 上的 [v1.0.2 版本](https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2)。

# Universal Router

`UniversalRouter` 合约是 ERC20 和 NFT 交换当前首选入口点，取代了包括 `SwapRouter02` 在内的其他合约。按链部署的最新地址列表托管在 Github 上的 [universal-router](https://github.com/Uniswap/universal-router/tree/main/deploy-addresses)。

# Uniswap 池部署

每个 Uniswap 池都是 `UniswapV3Pool` 合约的一个独立实例，并部署在其唯一的地址上。池的合约源代码将在 etherscan 上自动验证。例如，这是以太坊主网上的 [ETH/USDC 0.3% 池](https://etherscan.io/address/0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8)。

您可以在 [Uniswap Info](https://info.uniswap.org/#/) 或通过调用 `UniswapV3Factory` 合约上的 [`getPool`](../reference/core/interfaces/IUniswapV3Factory.md#getpool) 函数查找现有池的地址。

```solidity
getPool("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", 3000)
```

# 包装原生代币地址

Uniswap 协议支持 ERC20 代币的交易。为了交换像 ETH（或 Polygon 上的 MATIC）这样的原生资产，Uniswap 协议将这些资产包装在 ERC20 包装原生代币合约中。协议在以太坊上使用以下 WETH9 地址，在 Polygon 上使用 WMATIC 地址。

| 网络             | ChainId    | 包装原生代币 | 地址                                      |
| ------------------- | ---------- | -------------------- | -------------------------------------------- |
| Optimism            | `10`       | WETH                 | `0x4200000000000000000000000000000000000006` |
| Optimism Sepolia    | `11155420` | WETH                 | `0x4200000000000000000000000000000000000006` |