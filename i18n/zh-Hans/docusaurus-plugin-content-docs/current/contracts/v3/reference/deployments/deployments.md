---
id: deployments
title: 部署地址
---

# Uniswap 合约部署

Uniswap 协议由多个网络上的多个合约组成。

请不要假设不同链上的合约部署在相同的地址上，并且在使用合约之前务必仔细确认地址。

- [`Ethereum`](./Ethereum-Deployments.md)
- [`Arbitrum`](./Arbitrum-Deployments.md)
- [`Optimism`](./Optimism-Deployments.md)
- [`Polygon`](./Polygon-Deployments.md)
- [`Base`](./Base-Deployments.md)
- [`BNB`](./BNB-Binance-Deployments.md)
- [`Avalanche C-Chain`](./AVAX-Deployments.md)
- [`CELO`](./Celo-Deployments.md)
- [`Blast`](./Blast-Deployments.md)

这些地址是最终的，从以下 npm 包版本进行部署：

- [`@uniswap/v3-core@1.0.0`](https://github.com/Uniswap/uniswap-v3-core/tree/v1.0.0)
- [`@uniswap/v3-periphery@1.0.0`](https://github.com/Uniswap/uniswap-v3-periphery/tree/v1.0.0)
- [`@uniswap/swap-router-contracts@1.1.0`](https://github.com/Uniswap/swap-router-contracts/tree/v1.1.0)


# 通用路由器

`UniversalRouter` 合约是当前首选的 ERC20 和 NFT 交换入口点，取代了包括 `SwapRouter02` 在内的其他合约。[按链列出的最新部署地址托管在 Github 上](https://github.com/Uniswap/universal-router/tree/main/deploy-addresses)。

# Uniswap 池部署

每个 Uniswap 池都是 `UniswapV3Pool` 合约的一个独立实例，并在其自己独特的地址上部署。池的合约源代码将在 etherscan 上自动验证。例如，这是 Ethereum 主网上 [ETH/USDC 0.3% 池](https://etherscan.io/address/0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8)。

您可以在 [Uniswap Info](https://info.uniswap.org/#/) 上查找现有池的地址，或者通过调用 `UniswapV3Factory` 合约上的 [`getPool`](../reference/core/interfaces/IUniswapV3Factory.md#getpool) 函数。

```solidity
getPool("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", 3000)
```