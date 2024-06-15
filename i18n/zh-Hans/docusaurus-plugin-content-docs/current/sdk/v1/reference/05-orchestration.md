---
id: orchestration
title: 编排功能
---

编排功能为在[/sdk/1.0.0/reference/data](数据)和[计算](/sdk/1.0.0/reference/computation)中定义的函数提供了易于理解的封装。

以`WithData`结尾的函数是同步的，需要将代币储备作为参数传递。没有该后缀的函数是异步的，需要将代币地址作为参数传递。

# tradeExactEthForTokensWithData

此函数便于用确切数量的ETH交换指定的代币。

## 函数签名

```typescript
export function tradeExactEthForTokensWithData(reserves: OptionalReserves, ethAmount: BigNumberish): TradeDetails
```

## 输入参数

| 参数        | 类型               | 描述                         |
| :---------- | :----------------- | :--------------------------- |
| reserves    | `OptionalReserves` | 输出代币的储备数据。         |
| ethAmount   | `BigNumberish`     | 输入的ETH数量。              |

## 示例使用

```typescript
const tradeDetails: TradeDetails = tradeExactEthForTokensWithData(reserves, '1000000000000000000')
```

# tradeExactEthForTokens

此函数便于用确切数量的ETH交换指定的代币。

## 函数签名

```typescript
export async function tradeExactEthForTokens(
  tokenAddress: string,
  ethAmount: BigNumberish,
  chainIdOrProvider?: ChainIdOrProvider
): Promise<TradeDetails>
```

## 输入参数

| 参数              | 类型                | 描述                                                                                                                                                                                                                     |
| :---------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tokenAddress      | `string`            | 输出代币的地址。                                                                                                                                                                                                         |
| ethAmount         | `BigNumberish`      | 输入的ETH数量。                                                                                                                                                                                                          |
| chainIdOrProvider | `ChainIdOrProvider` | 支持的链ID (`1`, `3`, `4`, 或 `42`)，或连接到具有支持链ID的链的[底层web3提供者](https://docs.ethers.io/ethers.js/html/api-providers.html#web3provider-inherits-from-jsonrpcprovider)。 |

## 示例使用

```typescript
const tradeDetails: TradeDetails = await tradeExactEthForTokens(tokenAddress, '1000000000000000000')
```

# tradeEthForExactTokensWithData

此函数便于用ETH交换确切数量的指定代币。

## 函数签名

```typescript
export function tradeEthForExactTokensWithData(reserves: OptionalReserves, tokenAmount: BigNumberish): TradeDetails
```

## 输入参数

| 参数       | 类型               | 描述                         |
| :--------- | :----------------- | :--------------------------- |
| reserves   | `OptionalReserves` | 输出代币的储备数据。         |
| tokenAmount | `BigNumberish`     | 输出的代币数量。             |

## 示例使用

```typescript
const tradeDetails: TradeDetails = tradeEthForExactTokensWithData(reserves, '1000000000000000000')
```

# tradeEthForExactTokens

此函数便于用ETH交换确切数量的指定代币。

## 函数签名

```typescript
export async function tradeEthForExactTokens(
  tokenAddress: string,
  tokenAmount: BigNumberish,
  chainIdOrProvider?: ChainIdOrProvider
): Promise<TradeDetails>
```

## 输入参数

| 参数              | 类型                | 描述                                                                                                                                                                                                                     |
| :---------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tokenAddress      | `string`            | 输出代币的地址。                                                                                                                                                                                                         |
| tokenAmount       | `BigNumberish`      | 输出的代币数量。                                                                                                                                                                                                         |
| chainIdOrProvider | `ChainIdOrProvider` | 支持的链ID (`1`, `3`, `4`, 或 `42`)，或连接到具有支持链ID的链的[底层web3提供者](https://docs.ethers.io/ethers.js/html/api-providers.html#web3provider-inherits-from-jsonrpcprovider)。 |

## 示例使用

```typescript
const tradeDetails: TradeDetails = await tradeEthForExactTokens(tokenAddress, '1000000000000000000')
```

# tradeExactTokensForEthWithData

此函数便于用确切数量的指定代币交换ETH。

## 函数签名

```typescript
export function tradeExactTokensForEthWithData(reserves: OptionalReserves, tokenAmount: BigNumberish): TradeDetails
```

## 输入参数

| 参数       | 类型               | 描述                        |
| :--------- | :----------------- | :-------------------------- |
| reserves   | `OptionalReserves` | 输入代币的储备数据。        |
| tokenAmount | `BigNumberish`     | 输入的代币数量。            |

## 示例使用

```typescript
const tradeDetails: TradeDetails = tradeExactTokensForEthWithData(reserves, '1000000000000000000')
```

# tradeExactTokensForEth

此函数便于用确切数量的指定代币交换ETH。

## 函数签名

```typescript
export async function tradeExactTokensForEth(
  tokenAddress: string,
  tokenAmount: BigNumberish,
  chainIdOrProvider?: ChainIdOrProvider
): Promise<TradeDetails>
```

## 输入参数

| 参数              | 类型                | 描述                                                                                                                                                                                                                     |
| :---------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tokenAddress      | `string`            | 输入代币的地址。                                                                                                                                                                                                         |
| tokenAmount       | `BigNumberish`      | 输入的代币数量。                                                                                                                                                                                                         |
| chainIdOrProvider | `ChainIdOrProvider` | 支持的链ID (`1`, `3`, `4`, 或 `42`)，或连接到具有支持链ID的链的[底层web3提供者](https://docs.ethers.io/ethers.js/html/api-providers.html#web3provider-inherits-from-jsonrpcprovider)。 |

## 示例使用

```typescript
const tradeDetails: TradeDetails = await tradeExactTokensForEth(tokenAddress, '1000000000000000000')
```

# tradeTokensForExactEthWithData

此函数便于用指定代币交换确切数量的ETH。

## 函数签名

```typescript
export function tradeTokensForExactEthWithData(reserves: OptionalReserves, ethAmount: BigNumberish): TradeDetails
```

## 输入参数

| 参数        | 类型               | 描述                        |
| :---------- | :----------------- | :-------------------------- |
| reserves    | `OptionalReserves` | 输入代币的储备数据。        |
| ethAmount   | `BigNumberish`     | 输出的ETH数量。             |

## 示例使用

```typescript
const tradeDetails: TradeDetails = tradeTokensForExactEthWithData(reserves, '1000000000000000000')
```

# tradeTokensForExactEth

此函数便于用指定代币交换确切数量的ETH。

## 函数签名

```typescript
export async function tradeTokensForExactEth(
  tokenAddress: string,
  ethAmount: BigNumberish,
  chainIdOrProvider?: ChainIdOrProvider
): Promise<TradeDetails>
```

## 输入参数

| 参数              | 类型                | 描述                                                                                                                                                                                                                     |
| :---------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tokenAddress      | `string`            | 输入代币的地址。                                                                                                                                                                                                         |
| ethAmount         | `BigNumberish`      | 输出的ETH数量。                                                                                                                                                                                                          |
| chainIdOrProvider | `ChainIdOrProvider` | 支持的链ID (`1`, `3`, `4`, 或 `42`)，或连接到具有支持链ID的链的[底层web3提供者](https://docs.ethers.io/ethers.js/html/api-providers.html#web3provider-inherits-from-jsonrpcprovider)。 |

## 示例使用

```typescript
const tradeDetails: TradeDetails = await tradeTokensForExactEth(tokenAddress, '1000000000000000000')
```

# tradeExactTokensForTokensWithData

此函数便于用确切数量的指定代币交换另一种代币。

## 函数签名

```typescript
export function tradeExactTokensForTokensWithData(
  reservesInput: OptionalReserves,
  reservesOutput: OptionalReserves,
  tokenAmount: BigNumberish
): TradeDetails
```

## 输入参数

| 参数           | 类型               | 描述                         |
| :------------- | :----------------- | :--------------------------- |
| reservesInput  | `OptionalReserves` | 输入代币的储备数据。         |
| reservesOutput | `OptionalReserves` | 输出代币的储备数据。         |
| tokenAmount    | `BigNumberish`     | 输入的代币数量。             |

## 示例使用

```typescript
const tradeDetails: TradeDetails = tradeExactTokensForTokensWithData(
  reservesInput,
  reservesOutput,
  '1000000000000000000'
)
```

# tradeExactTokensForTokens

此函数便于用确切数量的指定代币交换另一种代币。

## 函数签名

```typescript
export async function tradeExactTokensForTokens(
  tokenAddressInput: string,
  tokenAddressOutput: string,
  tokenAmount: BigNumberish,
  chainIdOrProvider?: ChainIdOrProvider
): Promise<TradeDetails>
```

## 输入参数

| 参数              | 类型                | 描述                                                                                                                                                                                                                     |
| :---------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tokenAddressInput | `string`            | 输入代币的地址。                                                                                                                                                                                                         |
| tokenAddressOutput | `string`            | 输出代币的地址。                                                                                                                                                                                                         |
| tokenAmount       | `BigNumberish`      | 输入的代币数量。                                                                                                                                                                                                         |
| chainIdOrProvider | `ChainIdOrProvider` | 支持的链ID (`1`, `3`, `4`, 或 `42`)，或连接到具有支持链ID的链的[底层web3提供者](https://docs.ethers.io/ethers.js/html/api-providers.html#web3provider-inherits-from-jsonrpcprovider)。 |

## 示例使用

```typescript
const tradeDetails: TradeDetails = await tradeExactTokensForTokens(
  tokenAddressInput,
  tokenAddressOutput,
  '1000000000000000000'
)
```

# tradeTokensForExactTokensWithData

此函数便于用指定代币交换确切数量的另一种代币。

## 函数签名

```typescript
export function tradeTokensForExactTokensWithData(
  reservesInput: OptionalReserves,
  reservesOutput: OptionalReserves,
  tokenAmount: BigNumberish
): TradeDetails
```

## 输入参数

| 参数           | 类型               | 描述                         |
| :------------- | :----------------- | :--------------------------- |
| reservesInput  | `OptionalReserves` | 输入代币的储备数据。         |
| reservesOutput | `OptionalReserves` | 输出代币的储备数据。         |
| tokenAmount    | `BigNumberish`     | 输出的代币数量。             |

## 示例使用

```typescript
const tradeDetails: TradeDetails = tradeTokensForExactTokensWithData(
  reservesInput,
  reservesOutput,
  '1000000000000000000'
)
```

# tradeTokensForExactTokens

此函数便于用确切数量的指定代币交换另一种代币。

## 函数签名

```typescript
export async function tradeTokensForExactTokens(
  tokenAddressInput: string,
  tokenAddressOutput: string,
  tokenAmount: BigNumberish,
  chainIdOrProvider?: ChainIdOrProvider
): Promise<TradeDetails>
```

## 输入参数

| 参数              | 类型                | 描述                                                                                                                                                                                                                     |
| :---------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tokenAddressInput | `string`            | 输入代币的地址。                                                                                                                                                                                                         |
| tokenAddressOutput | `string`            | 输出代币的地址。                                                                                                                                                                                                         |
| tokenAmount       | `BigNumberish`      | 输出的代币数量。                                                                                                                                                                                                         |
| chainIdOrProvider | `ChainIdOrProvider` | 支持的链ID (`1`, `3`, `4`, 或 `42`)，或连接到具有支持链ID的链的[底层web3提供者](https://docs.ethers.io/ethers.js/html/api-providers.html#web3provider-inherits-from-jsonrpcprovider)。 |

## 示例使用

```typescript
const tradeDetails: TradeDetails = await tradeTokensForExactTokens(
  tokenAddressInput,
  tokenAddressOutput,
  '1000000000000000000'
)
```