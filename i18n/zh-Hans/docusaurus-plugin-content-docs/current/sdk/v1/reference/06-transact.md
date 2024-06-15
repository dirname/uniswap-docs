---
id: transact
title: 进行交易
---

# getExecutionDetails

此函数将交易数据格式化，以便针对相关的 Uniswap 交易所执行。

## 函数签名

```typescript
export function getExecutionDetails(
  trade: TradeDetails,
  maxSlippage?: number,
  deadline?: number,
  recipient?: string
): ExecutionDetails
```

## 输入参数

| 参数        | 类型           | 描述                                                             |
| :---------- | :------------- | :----------------------------------------------------------------- |
| trade       | `TradeDetails` | 要执行的交易。                                                   |
| maxSlippage? | `number`       | 允许的最大滑点，以基点表示。默认为 200（2%）。                   |
| deadline?   | `number`       | 交易过期时间。默认为从现在起的 10 分钟后。                       |
| recipient?  | `string`       | 可选的接收方地址。默认为 `msg.sender`                             |

## 示例用法

方法参数将以以下形式之一返回：`BigNumber`、`number` 或 `string`。`BigNumber` 是大数字对象，`numbers` 是基数为 10 的小数，而 `string`s 是地址。

```typescript
const tradeDetails: TradeDetails = tradeExactEthForTokensWithData(reserves, '1000000000000000000')

const executionDetails: ExecutionDetails = await getExecutionDetails(tradeDetails)

/*
{
  // 相关交易所的地址
  exchangeAddress: 0x09cabEC1eAd1c0Ba254B09efb3EE13841712bE14,

  // 必须调用的方法名称
  methodName: "ethToTokenSwapInput",

  // 方法名称的 id
  methodId: "0xf39b5b9b",

  // 需要与交易一同发送的以太币价值
  value: <BigNumber>,

  // 方法参数作为数组
  methodArguments: MethodArgument[]
}
*/
```