支持从确切输入或确切输出交易中引用计算的数量

这些函数没有标记为视图，因为它们依赖于调用非视图函数并回退以计算结果。它们在燃气效率方面也并不高效，因此不应该在链上被调用。

## 函数

### quoteExactInput

```solidity
  function quoteExactInput(
    bytes path,
    uint256 amountIn
  ) external returns (uint256 amountOut)
```

在不执行交易的情况下，返回给定确切输入交易将收到的输出金额

#### 参数：

| 名称       | 类型    | 描述                                                 |
| :--------- | :------ | :--------------------------------------------------- |
| `path`     | bytes   | 交易的路径，即每对代币和池子费用                   |
| `amountIn` | uint256 | 需要交易的第一个代币的数量                         |

#### 返回值：

| 名称        | 类型    | 描述                                         |
| :---------- | :------ | :------------------------------------------- |
| `amountOut` | uint256 | 将收到的最后一个代币的数量                 |

### quoteExactInputSingle

```solidity
  function quoteExactInputSingle(
    address tokenIn,
    address tokenOut,
    uint24 fee,
    uint256 amountIn,
    uint160 sqrtPriceLimitX96
  ) external returns (uint256 amountOut)
```

对于单个池子的交易，返回给定确切输入将收到的输出金额

#### 参数：

| 名称                | 类型    | 描述                                                     |
| :------------------ | :------ | :------------------------------------------------------- |
| `tokenIn`           | address | 正在交易进来的代币                                       |
| `tokenOut`          | address | 正在交易出去的代币                                       |
| `fee`               | uint24  | 考虑该对时，代币池的费用                                 |
| `amountIn`          | uint256 | 所需的输入金额                                           |
| `sqrtPriceLimitX96` | uint160 | 不能由交易超过的池子价格限制                             |

#### 返回值：

| 名称        | 类型    | 描述                                     |
| :---------- | :------ | :---------------------------------------- |
| `amountOut` | uint256 | 将收到的`tokenOut`数量                   |

### quoteExactOutput

```solidity
  function quoteExactOutput(
    bytes path,
    uint256 amountOut
  ) external returns (uint256 amountIn)
```

在不执行交易的情况下，返回给定确切输出交易所需的输入金额

#### 参数：

| 名称        | 类型    | 描述                                                 |
| :---------- | :------ | :--------------------------------------------------- |
| `path`      | bytes   | 交易的路径，即每对代币和池子费用                   |
| `amountOut` | uint256 | 最后一个代币的接收量                                 |

#### 返回值：

| 名称       | 类型    | 描述                                   |
| :--------- | :------ | :------------------------------------- |
| `amountIn` | uint256 | 需要支付的第一个代币的金额             |

### quoteExactOutputSingle

```solidity
  function quoteExactOutputSingle(
    address tokenIn,
    address tokenOut,
    uint24 fee,
    uint256 amountOut,
    uint160 sqrtPriceLimitX96
  ) external returns (uint256 amountIn)
```

为了接收给定的确切输出金额，但针对单个池子的交易，返回所需的输入金额

#### 参数：

| 名称                | 类型    | 描述                                                     |
| :------------------ | :------ | :------------------------------------------------------- |
| `tokenIn`           | address | 正在交易进来的代币                                       |
| `tokenOut`          | address | 正在交易出去的代币                                       |
| `fee`               | uint24  | 考虑该对时，代币池的费用                                 |
| `amountOut`         | uint256 | 所需的输出金额                                           |
| `sqrtPriceLimitX96` | uint160 | 不能由交易超过的池子价格限制                             |

#### 返回值：

| 名称       | 类型    | 描述                                                                   |
| :--------- | :------ | :--------------------------------------------------------------------- |
| `amountIn` | uint256 | 为了接收`amountOut`，进行交易所需的输入金额                           |