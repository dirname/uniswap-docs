允许在不执行交易的情况下获取给定交换的预期输出量或输入量。

这些函数的燃气费效率不高，不应该在链上被调用。相反，应该乐观地执行交换，并在回调中检查金额。

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
  ) external view override
```

在通过 IUniswapV3Pool#swap 执行交换后，调用到 `msg.sender`。

在实现中，你必须支付因交换而欠池子的代币。
调用此方法的实体必须是通过规范的 UniswapV3Factory 部署的 UniswapV3Pool。
如果未交换任何代币，amount0Delta 和 amount1Delta 都可以为 0。

#### 参数：

| 名称             | 类型   | 描述                                                                                                                                                                                                                                 |
| :--------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount0Delta`   | int256 | 交换结束时池子发送（负数）或必须接收（正数）的 token0 的数量。如果是正数，回调必须将该数量的 token0 发送给池子。                                                                                                                         |
| `amount1Delta`   | int256 | 交换结束时池子发送（负数）或必须接收（正数）的 token1 的数量。如果是正数，回调必须将该数量的 token1 发送给池子。                                                                                                                         |
| `data`           | bytes  | 通过 IUniswapV3PoolActions#swap 调用由调用者传递的任何数据                                                                                                                                           |

### quoteExactInputSingle

```solidity
  function quoteExactInputSingle(
  ) public override returns (uint256 amountOut, uint160 sqrtPriceX96After, uint32 initializedTicksCrossed, uint256 gasEstimate)
```

### quoteExactInput

```solidity
  function quoteExactInput(
  ) public override returns (uint256 amountOut, uint160[] sqrtPriceX96AfterList, uint32[] initializedTicksCrossedList, uint256 gasEstimate)
```

### quoteExactOutputSingle

```solidity
  function quoteExactOutputSingle(
  ) public override returns (uint256 amountIn, uint160 sqrtPriceX96After, uint32 initializedTicksCrossed, uint256 gasEstimate)
```

### quoteExactOutput

```solidity
  function quoteExactOutput(
  ) public override returns (uint256 amountIn, uint160[] sqrtPriceX96AfterList, uint32[] initializedTicksCrossedList, uint256 gasEstimate)
```