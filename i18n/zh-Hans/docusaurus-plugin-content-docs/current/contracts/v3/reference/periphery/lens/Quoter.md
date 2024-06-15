允许在不执行交易的情况下获取给定交换的预期输出金额或输入金额。

这些函数的燃气费效率不高，不应该在链上调用。相反，应该乐观地执行
交换，并在回调中检查金额。

## 函数

### 构造函数

```solidity
  function constructor(
  ) public
```

### uniswapV3SwapCallback

```solidity
  function uniswapV3SwapCallback(
    int256 amount0Delta,
    int256 amount1Delta,
    bytes data
  ) external
```

在通过 IUniswapV3Pool#swap 执行交换后调用至 `msg.sender`。

在实现中，你必须支付因交换而欠池的代币。
必须检查此方法的调用者是UniswapV3Factory规范部署的UniswapV3Pool。
amount0Delta 和 amount1Delta 都可以为0，如果未交换任何代币。

#### 参数：

| 名称            | 类型   | 描述                                                                                 |
| :-------------- | :----- | :----------------------------------------------------------------------------------- |
| `amount0Delta`  | int256 | 交换结束时池必须发送（负数）或接收（正数）的 token0 的数量。如果为正数，则回调必须向池发送该数量的 token0。|
|`amount1Delta`   | int256 | 交换结束时池必须发送（负数）或接收（正数）的 token1 的数量。如果为正数，则回调必须向池发送该数量的 token1。|
|`data`           | bytes | 调用者通过 IUniswapV3PoolActions#swap 调用传递的任何数据

### quoteExactInputSingle

```solidity
  function quoteExactInputSingle(
    address tokenIn,
    address tokenOut,
    uint24 fee,
    uint256 amountIn,
    uint160 sqrtPriceLimitX96
  ) public returns (uint256 amountOut)
```

返回单个池交换给定确切输入的输出金额

#### 参数：

| 名称                | 类型    | 描述                                                     |
| :------------------ | :------ | :-------------------------------------------------------------- |
| `tokenIn`           | address | 正在交换的代币                                               |
| `tokenOut`          | address | 交换出来的代币                                               |
| `fee`               | uint24  | 考虑用于配对的代币池的费用                                   |
| `amountIn`          | uint256 | 希望的输入金额                                               |
| `sqrtPriceLimitX96` | uint160 | 交换不能超过的池价格限制                                       |

#### 返回值：

| 名称        | 类型    | 描述                                     |
| :---------- | :------ | :---------------------------------------------- |
| `amountOut` | uint256 | 将收到的 `tokenOut` 数量 |

### quoteExactInput

```solidity
  function quoteExactInput(
    bytes path,
    uint256 amountIn
  ) external returns (uint256 amountOut)
```

在不执行交换的情况下返回给定确切输入交换的输出金额

#### 参数：

| 名称       | 类型    | 描述                                                 |
| :--------- | :------ | :---------------------------------------------------------- |
| `path`     | bytes   | 交换的路径，即每对代币和池费用                           |
| `amountIn` | uint256 | 要交换的第一个代币的数量                               |

#### 返回值：

| 名称        | 类型    | 描述                                         |
| :---------- | :------ | :-------------------------------------------------- |
| `amountOut` | uint256 | 将收到的最后一个代币的数量 |

### quoteExactOutputSingle

```solidity
  function quoteExactOutputSingle(
    address tokenIn,
    address tokenOut,
    uint24 fee,
    uint256 amountOut,
    uint160 sqrtPriceLimitX96
  ) public returns (uint256 amountIn)
```

返回单个池交换给定确切输出金额所需的输入金额

#### 参数：

| 名称                | 类型    | 描述                                                     |
| :------------------ | :------ | :-------------------------------------------------------------- |
| `tokenIn`           | address | 正在交换的代币                                               |
| `tokenOut`          | address | 交换出来的代币                                               |
| `fee`               | uint24  | 考虑用于配对的代币池的费用                                   |
| `amountOut`         | uint256 | 希望的输出金额                                               |
| `sqrtPriceLimitX96` | uint160 | 交换不能超过的池价格限制                                       |

#### 返回值：

| 名称       | 类型    | 描述                                                                   |
| :--------- | :------ | :---------------------------------------------------------------------------- |
| `amountIn` | uint256 | 为了获得 `amountOut` ，进行交换所需作为输入的金额                       |

### quoteExactOutput

```solidity
  function quoteExactOutput(
    bytes path,
    uint256 amountOut
  ) external returns (uint256 amountIn)
```

在不执行交换的情况下返回给定确切输出交换所需的输入金额

#### 参数：

| 名称        | 类型    | 描述                                                 |
| :---------- | :------ | :---------------------------------------------------------- |
| `path`      | bytes   | 交换的路径，即每对代币和池费用                           |
| `amountOut` | uint256 | 要接收的最后一个代币的数量                               |

#### 返回值：

| 名称       | 类型    | 描述                                   |
| :--------- | :------ | :-------------------------------------------- |
| `amountIn` | uint256 | 需要支付的第一个代币的数量 |