---
id: base-deployments
title: 基础部署
---

# Uniswap 合约部署

最新版本的 `@uniswap/v3-core`、`@uniswap/v3-periphery` 和 `@uniswap/swap-router-contracts` 已在下面列出的地址部署。集成商不应再假设它们在不同链上部署到相同的地址，并应格外小心确认以下映射。

| 合约                                                                                                                                                     |  基础网络地址                                | 基础 Sepolia 网络地址                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------- |
| [UniswapV3Factory](https://github.com/Uniswap/uniswap-v3-core/blob/v1.0.0/contracts/UniswapV3Factory.sol)                                                    | `0x33128a8fC17869897dcE68Ed026d694621f6FDfD` | `0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24` |
| [Multicall](https://basescan.org/address/0x091e99cb1c49331a94dd62755d168e941abd0693#code)                                                                    | `0x091e99cb1C49331a94dD62755D168E941AbD0693` | `0xd867e273eAbD6c853fCd0Ca0bFB6a3aE6491d2C1` |
| [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol)                                   | `0x3334d83e224aF5ef9C2E7DDA7c7C98Efd9621fA9` | `0xD7303474Baca835743B54D73799688990f24a79D` |
| [TickLens](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/TickLens.sol)                                                          | `0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d` | `0xedf6066a2b290C185783862C7F4776A2C8077AD1` |
| [NFTDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/libraries/NFTDescriptor.sol)                                           | `0xF9d1077fd35670d4ACbD27af82652a8d84577d9F` | `0x4e0caFF1Df1cCd7CF782FDdeD77f020699B57f1a` |
| [NonfungibleTokenPositionDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungibleTokenPositionDescriptor.sol)           | `0x4f225937EDc33EFD6109c4ceF7b560B2D6401009` | `0xd7c6e867591608D32Fe476d0DbDc95d0cf584c8F` |
| [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/TransparentUpgradeableProxy.sol) | `0x4615C383F85D0a2BbED973d83ccecf5CB7121463` | `0x1E2A708040Eb6Ed08893E27E35D399e8E8e7857E` |
| [NonfungiblePositionManager](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungiblePositionManager.sol)                           | `0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1` | `0x27F971cb582BF9E50F397e4d29a5C7A34f11faA2` |
| [V3Migrator](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/V3Migrator.sol)                                                           | `0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7` | `0xCbf8b7f80800bd4888Fbc7bf1713B80FE4E23E10` |
| [QuoterV2](https://github.com/Uniswap/v3-periphery/blob/main/contracts/lens/QuoterV2.sol)                                                                    | `0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a` | `0xC5290058841028F1614F3A6F0F5816cAd0df5E27` |
| [SwapRouter02](https://github.com/Uniswap/swap-router-contracts/blob/main/contracts/SwapRouter02.sol)                                                        | `0x2626664c2603336E57B271c5C0b26F421741e481` | `0x94cC0AaC535CCDB3C01d6787D6413C739ae12bc4` |
| [Permit2](https://github.com/Uniswap/permit2)                                                                                                                | `0x000000000022D473030F116dDEE9F6B43aC78BA3` | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| [UniversalRouter](https://github.com/Uniswap/universal-router)                                                                                               | `0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD` | `0x050E797f3625EC8785265e1d9BDd4799b97528A1` |
| [v3StakerAddress](https://github.com/Uniswap/v3-staker)                                                                                                      | `0x42bE4D6527829FeFA1493e1fb9F3676d2425C3C1` | ``                                           |


这些地址是最终的，从以下 npm 包版本进行部署：

- [`@uniswap/v3-core@1.0.0`](https://github.com/Uniswap/uniswap-v3-core/tree/v1.0.0)
- [`@uniswap/v3-periphery@1.0.0`](https://github.com/Uniswap/uniswap-v3-periphery/tree/v1.0.0)
- [`@uniswap/swap-router-contracts@1.1.0`](https://github.com/Uniswap/swap-router-contracts/tree/v1.1.0)

# Uniswap V3 Staker

[每个链的部署地址的最新列表托管在 Github 上](https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2)，用于 `UniswapV3Staker` 合约。

# Universal Router

`UniversalRouter` 合约是当前首选的 ERC20 和 NFT 交换入口点，取代了包括 `SwapRouter02` 在内的其他合约。[每个链的部署地址的最新列表托管在 Github 上](https://github.com/Uniswap/universal-router/tree/main/deploy-addresses)。

# Uniswap 池部署

每个 Uniswap 池都是 `UniswapV3Pool` 合约的一个唯一实例，部署在自己的唯一地址上。池的合约源代码将在 etherscan 上自动验证。例如，这是以太坊主网上的 [ETH/USDC 0.3% 池](https://etherscan.io/address/0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8)。

您可以在 [Uniswap Info](https://info.uniswap.org/#/) 上查找现有池的地址，或通过调用 `UniswapV3Factory` 合约上的 [`getPool`](../reference/core/interfaces/IUniswapV3Factory.md#getpool) 函数。

```solidity
getPool("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", 3000)
```

# 包装的原生代币地址

Uniswap 协议支持 ERC20 代币的交易。为了交换像 ETH（或 Polygon 上的 MATIC）这样的原生资产，Uniswap 协议使用 ERC20 包装的原生代币合约将这些资产包装起来。协议在以太坊上使用以下 WETH9 地址，在 Polygon 上使用 WMATIC 地址。

| 网络             | 链ID  | 包装的原生代币 | 地址                                      |
| ------------------- | -------- | -------------------- | -------------------------------------------- |
| 基础网络            | `8453`   | WETH                 | `0x4200000000000000000000000000000000000006` |
| 基础 Sepolia 网络   | `84532`  | WETH                 | `0x4200000000000000000000000000000000000006` |