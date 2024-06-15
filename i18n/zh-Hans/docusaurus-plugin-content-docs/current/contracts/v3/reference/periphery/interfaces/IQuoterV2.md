支持从确切输入或确切输出交易中引用计算的数量。对于每个池，还会告诉您跨越的已初始化刻度数和交易后池的平方根价格。

这些函数没有标记为视图（view），因为它们依赖于调用非视图函数并回退以计算结果。它们在燃气效率上也不高，因此不应在链上进行调用。

## 函数

### quoteExactInput

```solidity
  function quoteExactInput(
    bytes path,
    uint256 amountIn
  ) external returns (uint256 amountOut, uint160[] sqrtPriceX96AfterList, uint32[] initializedTicksCrossedList, uint256 gasEstimate)
```

在不执行交易的情况下，返回给定确切输入交易将收到的输出量。

#### 参数：

| 名称       | 类型    | 描述                                                 |
| :--------- | :------ | :--------------------------------------------------- |
| `path`     | bytes   | 交易路径，即每对代币和池费用                         |
| `amountIn` | uint256 | 要交易的第一个代币的数量                           |

#### 返回值：

| 名称                          | 类型    | 描述                                                                   |
| :---------------------------- | :------ | :--------------------------------------------------------------------- |
| `amountOut`                   | bytes   | 将接收到的最后一个代币的数量                                          |
| `sqrtPriceX96AfterList`       | uint256 | 交易后路径中每个池的平方根价格列表                                    |
| `initializedTicksCrossedList` |         | 交易跨越的路径中每个池的已初始化刻度列表                              |
| `gasEstimate`                 |         | 交易消耗的燃气估计值                                                   |

### quoteExactInputSingle

```solidity
  function quoteExactInputSingle(
    struct IQuoterV2.QuoteExactInputSingleParams params
  ) external returns (uint256 amountOut, uint160 sqrtPriceX96After, uint32 initializedTicksCrossed, uint256 gasEstimate)
```

返回给定确切输入但仅针对单个池交易将收到的输出量。

#### 参数：

| 名称     | 类型                                         | 描述                                                        |
| :------- | :------------------------------------------- | :-------------------------------------------------------------------------------- |
| `params` | struct IQuoterV2.QuoteExactInputSingleParams | 引用参数，编码为 `QuoteExactInputSingleParams` |

tokenIn 被交易进来的代币
tokenOut 被交易出去的代币
fee 考虑到的代币池费用
amountIn 所需的输入金额
sqrtPriceLimitX96 池的价格限制，交易不能超过此限制

#### 返回值：

| 名称                      | 类型                                         | 描述                                                                   |
| :------------------------ | :------------------------------------------- | :-------------------------------------------------------------------------------- |
| `amountOut`               | struct IQuoterV2.QuoteExactInputSingleParams | 将接收到的 `tokenOut` 数量                                                  |
| `sqrtPriceX96After`       |                                              | 交易后池的平方根价格                                                       |
| `initializedTicksCrossed` |                                              | 交易跨越的已初始化刻度数量                                                |
| `gasEstimate`             |                                              | 交易消耗的燃气估计值                                                       |

### quoteExactOutput

```solidity
  function quoteExactOutput(
    bytes path,
    uint256 amountOut
  ) external returns (uint256 amountIn, uint160[] sqrtPriceX96AfterList, uint32[] initializedTicksCrossedList, uint256 gasEstimate)
```

在不执行交易的情况下，返回给定确切输出交易所需的输入量。

#### 参数：

| 名称        | 类型    | 描述                                                                                         |
| :---------- | :------ | :------------------------------------------------------------------------------------------- |
| `path`      | bytes   | 交易路径，即每对代币和池费用。路径必须按相反顺序提供                                       |
| `amountOut` | uint256 | 要接收的最后一个代币的数量                                                                  |

#### 返回值：

| 名称                          | 类型    | 描述                                                                   |
| :---------------------------- | :------ | :------------------------------------------------------------------------------------------- |
| `amountIn`                    | bytes   | 需要支付的第一个代币的数量                                                      |
| `sqrtPriceX96AfterList`       | uint256 | 交易后路径中每个池的平方根价格列表                                        |
| `initializedTicksCrossedList` |         | 交易跨越的路径中每个池的已初始化刻度列表                                  |
| `gasEstimate`                 |         | 交易消耗的燃气估计值                                                       |

### quoteExactOutputSingle

```solidity
  function quoteExactOutputSingle(
    struct IQuoterV2.QuoteExactOutputSingleParams params
  ) external returns (uint256 amountIn, uint160 sqrtPriceX96After, uint32 initializedTicksCrossed, uint256 gasEstimate)
```

返回所需输入量以接收给定的确切输出量，但仅针对单个池的交易。

#### 参数：

| 名称     | 类型                                          | 描述                                                         |
| :------- | :-------------------------------------------- | :-------------------------------------------------------------------------------- |
| `params` | struct IQuoterV2.QuoteExactOutputSingleParams | 引用参数，编码为 `QuoteExactOutputSingleParams` |

tokenIn 被交易进来的代币
tokenOut 被交易出去的代币
fee 考虑到的代币池费用
amountOut 所需的输出金额
sqrtPriceLimitX96 池的价格限制，交易不能超过此限制

#### 返回值：

| 名称                      | 类型                                          | 描述                                                                   |
| :------------------------ | :-------------------------------------------- | :-------------------------------------------------------------------------------- |
| `amountIn`                | struct IQuoterV2.QuoteExactOutputSingleParams | 为了接收 `amountOut` 所需的交易输入量                                   |
| `sqrtPriceX96After`       |                                               | 交易后池的平方根价格                                                     |
| `initializedTicksCrossed` |                                               | 交易跨越的已初始化刻度数量                                               |
| `gasEstimate`             |                                               | 交易消耗的燃气估计值                                                     |