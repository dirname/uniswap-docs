---
id: data
title: 数据
---

# getTokenReserves

此函数为给定网络上的特定代币地址获取 Uniswap 储备数据。

- 如果仅指定链 ID，则用于满足数据请求的以太坊节点由[`ethers.getDefaultProvider`](https://docs.ethers.io/ethers.js/html/api-providers.html#connecting-to-ethereum)确定，否则它是由传递的提供者指定的。
- 如果提供的tokenAddress不是具有Uniswap交易所的代币，此函数将抛出错误。

## 函数签名

```typescript
export async function getTokenReserves(
  tokenAddress: string,
  chainIdOrProvider: ChainIdOrProvider = 1
): Promise<TokenReservesNormalized>
```

## 输入参数

| 参数             | 类型                  | 描述                                                                                                                                                                                                                                  |
| :--------------- | :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tokenAddress     | `string`              | 具有Uniswap交易所的代币的校验和地址。                                                                                                                                                                                                  |
| chainIdOrProvider | `ChainIdOrProvider` | 受支持的链ID（`1`、`3`、`4`或`42`），或者是一个[底层web3提供者](https://docs.ethers.io/ethers.js/html/api-providers.html#web3provider-inherits-from-jsonrpcprovider)，连接到具有受支持链ID的链。 |

## 示例用法

```typescript
const tokenAddress = '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359' // DAI 主网
const chainIdOrProvider: ChainIdOrProvider = 1 // 可能是例如window.ethereum

const tokenReserves: TokenReservesNormalized = await getTokenReserves(tokenAddress, chainIdOrProvider)

/*
{
  // 传递的代币的详细信息
  token: {
    chainId: 1,
    address: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
    decimals: 18
  },

  // 传递的代币的Uniswap交易所的详细信息
  exchange: {
    chainId: 1,
    address: '0x09cabEC1eAd1c0Ba254B09efb3EE13841712bE14',
    decimals: 18
  },

  // 传递的代币的储备中ETH部分的详细信息
  ethReserve: {
    token: {
      chainId: 1,
      address: 'ETH',
      decimals: 18
    },
    amount: <BigNumber>
  },

  // 传递的代币的储备中代币部分的详细信息
  tokenReserve: {
    token: {
      chainId: 1,
      address: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
      decimals: 18
    },
    amount: <BigNumber>
  }
}
*/
```