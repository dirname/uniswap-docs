---
id: custom-linking
title: 自定义链接
---

# 查询参数

Uniswap 前端支持 URL 查询参数，以便进行自定义链接至 Uniswap 交易所。用户和开发者可以利用这些查询参数，以自定义预填充设置链接至 Uniswap 交易所。

每个页面有特定的可用 URL 参数可以设置。全局参数可以在所有页面上使用。

在不正确的页面上使用的参数将不会对交易所设置产生任何影响。未通过 URL 参数设置的参数将被设置为标准交易所默认值。

## 全局

| 参数   | 类型     | 描述                       |
| :----- | :------- | :------------------------- |
| theme  | `String` | 设置为主题模式或浅色模式。 |

### 主题选项

主题可以设置为 `light` 或 `dark`。

### 示例用法

`https://app.uniswap.org/#/swap?theme=dark&use=v1`

## 交换页面

| 参数           | 类型             | 描述                                                                                   |
| :------------- | :--------------- | :------------------------------------------------------------------------------------- |
| inputCurrency  | `address`        | 将用于交换输出货币的输入货币。                                                         |
| outputCurrency | `address or ETH` | 输入货币将被交换的输出货币。                                                           |
| slippage       | `number`         | 进行交易时要使用的最大滑点（以 bips 为单位）                                          |
| exactAmount    | `number`         | 要购买或出售的自定义代币数量。                                                        |
| exactField     | `string`         | 设置自定义代币数量的字段。必须是 `input` 或 `output`。                                 |

### 默认值

ETH 作为输入货币默认。当为输入或输出选择不同代币时，ETH 将默认为相反的选定货币。

### 约束条件

地址必须是有效的 ERC20 地址。滑点和金额值必须是交易所接受的有效数字（否则会阻止交换）。滑点可以为 0，或在范围 10->9999 bips（转换为 0%，0.01%->99%）

当选择 ETH 作为输出货币时，用户还必须选择非 ETH 的 inputCurrency（以防止 ETH 在两个字段中都出现）

### 设置金额

两个参数，exactField 和 exactAmount 可用于设置要出售或购买的具体代币数量。URL 中必须同时设置两个字段，否则设置将无效果。

### 示例用法

`https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x0F5D2fB29fb7d3CFeE444a200298f468908cC942?use=v1`

## 发送页面

发送页面具有与交换页面相同的选项，再加上一个额外的参数，`recipient`。

| 参数      | 类型      | 描述                                                 |
| :-------- | :-------- | :--------------------------------------------------- |
| recipient | `address` | 发送交易的接收者地址。                              |

### 示例用法

`https://app.uniswap.org/#/send?recipient=0x74Aa01d162E6dC6A657caC857418C403D48E2D77?use=v1`

## 池页面

池页面由三个子路由组成：`add-liquidity`、`remove-liquidity`、`create-exchange`。

### 添加流动性

| 参数       | 类型      | 描述                                                        |
| :--------- | :-------- | :---------------------------------------------------------- |
| ethAmount  | `number`  | 存入池中的 ETH 数量。                                      |
| token      | `address` | 要添加流动性的池的 ERC20 地址。                            |
| tokenAmount | `number`  | 存入池中的所选代币的数量。                                 |

### 示例用法

`https://app.uniswap.org/#/add-liquidity?ethAmount=2.34&token=0x42456D7084eacF4083f1140d3229471bbA2949A8&tokenAmount=300?use=v1`

## 移除流动性

| 参数              | 类型      | 描述                                                                                           |
| :---------------- | :-------- | :--------------------------------------------------------------------------------------------- |
| poolTokenAddress  | `address` | 要从中撤出流动性的池。（必须是一个有现有交易所的 ERC20 地址）                                  |
| poolTokenAmount   | `number`  | 从流动性池中提取的池代币数量。                                                                |

### 示例用法

`https://app.uniswap.org/#/remove-liquidity?poolTokenAmount=1.23&use=v1`

## 创建交易所

| 参数         | 类型      | 描述                                                                                     |
| :----------- | :-------- | :--------------------------------------------------------------------------------------- |
| tokenAddress | `address` | 要创建交易所的 ERC20 代币。必须是有效 ERC20 代币，且不存在现有交易所。                  |

### 示例用法

`https://app.uniswap.org/#/swap?use=v1&create-exchange?tokenAddress=0x0F5D2fB29fb7d3CFeE444a200298f468908cC942`

## 自定义路由

即使与 URL 参数结合使用，自定义代币路由仍然可以使用。URL 参数在设置层次结构中高于自定义路由。

一个使用自定义代币路由和 URL 参数的例子。

`https://app.uniswap.org/#/swap/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942?exactField=input&exactAmount=10&use=v1`