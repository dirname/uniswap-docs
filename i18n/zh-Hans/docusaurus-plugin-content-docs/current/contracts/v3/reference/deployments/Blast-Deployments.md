---
id: blast-deployments
title: Uniswap 合约部署
---

# Uniswap 合约部署

最新版本的 `@uniswap/v3-core`，`@uniswap/v3-periphery`，以及 `@uniswap/swap-router-contracts` 已在下面列出的地址进行部署。集成商不应再假定这些合约跨链部署在相同的地址上，并且应极其小心地确认以下映射。

| 合约                                                                                                                                             | Blast 地址                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| [UniswapV3Factory](https://github.com/Uniswap/uniswap-v3-core/blob/v1.0.0/contracts/UniswapV3Factory.sol)                                        | `0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd`    |
| [Multicall](https://blastscan.io/address/0xdc7f370de7631ce9e2c2e1dcda6b3b5744cf4705#code)                                                         | `0xdC7f370de7631cE9e2c2e1DCDA6B3B5744Cf4705`    |
| [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol)                       | `0x7C9cAa4ac84C8FAD8Bd504DBF90e791F91f41705`    |
| [TickLens](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/lens/TickLens.sol)                                               | `0x2E95185bCdD928a3e984B7e2D6560Ab1b17d7274`    |
| [NFTDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/libraries/NFTDescriptor.sol)                               | `0xAa32bD3926097fd04d22b4433e9867417EE79333`    |
| [NonfungibleTokenPositionDescriptor](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungibleTokenPositionDescriptor.sol) | `0x497089D9450BB58f536c38c1C0d0A37472303508`    |
| [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/TransparentUpgradeableProxy.sol) | `0xB22Ef02E13B1900EBF10391e57162402c11BfF05`    |
| [NonfungiblePositionManager](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/NonfungiblePositionManager.sol)               | `0xB218e4f7cF0533d4696fDfC419A0023D33345F28`    |
| [V3Migrator](https://github.com/Uniswap/uniswap-v3-periphery/blob/v1.0.0/contracts/V3Migrator.sol)                                                 | `0x15CA7043CD84C5D21Ae76Ba0A1A967d42c40ecE0`    |
| [QuoterV2](https://github.com/Uniswap/v3-periphery/blob/main/contracts/lens/QuoterV2.sol)                                                         | `0x6Cdcd65e03c1CEc3730AeeCd45bc140D57A25C77`    |
| [SwapRouter02](https://github.com/Uniswap/swap-router-contracts/blob/main/contracts/SwapRouter02.sol)                                             | `0x549FEB8c9bd4c12Ad2AB27022dA12492aC452B66`    |
| [Permit2](https://github.com/Uniswap/permit2)                                                                                                     | `0x000000000022d473030f116ddee9f6b43ac78ba3`    |
| [UniversalRouter](https://github.com/Uniswap/universal-router)                                                                                   | `0x643770E279d5D0733F21d6DC03A8efbABf3255B4`    |
| [v3StakerAddress](https://github.com/Uniswap/v3-staker)                                                                                          | `0xEcAF7c276f746170642e97De961f2f0361e1aCc8`    |

这些地址是最终的，并且是从以下 npm 包版本部署的：

- [`@uniswap/v3-core@1.0.0`](https://github.com/Uniswap/uniswap-v3-core/tree/v1.0.0)
- [`@uniswap/v3-periphery@1.0.0`](https://github.com/Uniswap/uniswap-v3-periphery/tree/v1.0.0)
- [`@uniswap/swap-router-contracts@1.1.0`](https://github.com/Uniswap/swap-router-contracts/tree/v1.1.0)


# Universal Router

`UniversalRouter` 合约是当前首选的 ERC20 和 NFT 交换入口点，取代了包括 `SwapRouter02` 在内的其他合约。一个按链更新的[部署地址列表托管在 Github 上](https://github.com/Uniswap/universal-router/tree/main/deploy-addresses)。

# Uniswap 池部署

每个 Uniswap 池都是 `UniswapV3Pool` 合约的一个独特实例，并在其自己的唯一地址进行部署。池的合约源代码将在 etherscan 上自动验证。例如，这是以太坊主网上 [ETH/USDC 0.3% 池](https://etherscan.io/address/0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8)。

您可以在 [Uniswap Info](https://info.uniswap.org/#/) 上查找现有池的地址，或通过调用 `UniswapV3Factory` 合约上的 [`getPool`](../reference/core/interfaces/IUniswapV3Factory.md#getpool) 函数来查找。

```solidity
getPool("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", 3000)
```

# 包装原生代币地址

Uniswap 协议支持 ERC20 代币交易。为了交换像 ETH（或 Polygon 上的 MATIC）这样的原生资产，Uniswap 协议将这些资产包装在 ERC20 包装原生代币合约中。协议使用以下以太坊上的 WETH9 地址和 Polygon 上的 WMATIC 地址。

| 网络 | ChainId | 包装原生代币 | 地址                                         |
| ---- | ------- | ------------ | -------------------------------------------- |
| Blast | `81457` | WETH         | `0x4300000000000000000000000000000000000004` |