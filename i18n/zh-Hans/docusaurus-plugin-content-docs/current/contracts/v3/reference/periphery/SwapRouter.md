针对 Uniswap V3 进行无状态交换执行的路由器

> 输入参数可以在 [**Swap Router Interface**](./interfaces/ISwapRouter) 中查看。

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

在通过 IUniswapV3Pool#swap 执行交换后调用到 `msg.sender`。

在实现中，你必须为交换支付池子应得的代币。
调用此方法的实体必须是通过规范的 UniswapV3Factory 部署的 UniswapV3Pool。
amount0Delta 和 amount1Delta 如果没有交换任何代币则都可以为 0。

#### 参数：

| 名称           | 类型   | 描述                                                                                                                                                                             |
| :------------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount0Delta` | int256 | 交换结束时池子发送（负数）或必须接收（正数）的 token0 的数量。如果为正数，回调必须向池子发送该数量的 token0。 |
| `amount1Delta` | int256 | 交换结束时池子发送（负数）或必须接收（正数）的 token1 的数量。如果为正数，回调必须向池子发送该数量的 token1。 |
| `data`         | bytes  | 调用者通过 IUniswapV3PoolActions#swap 调用传递的任意数据                                                                                                                             |

### exactInputSingle

```solidity
  function exactInputSingle(
    struct ISwapRouter.ExactInputSingleParams params
  ) external returns (uint256 amountOut)
```

以 `amountIn` 数量的一个代币交换尽可能多的另一个代币。

#### 参数：

| 名称     | 类型                                      | 描述                                                                            |
| :------- | :---------------------------------------- | :-------------------------------------------------------------------------------- |
| `params` | struct ISwapRouter.ExactInputSingleParams | 进行交换所必需的参数，编码为 calldata 中的 `ExactInputSingleParams`               |

#### 返回值：

| 名称        | 类型    | 描述                      |
| :---------- | :------ | :------------------------- |
| `amountOut` | uint256 | 接收到的代币数量           |

### exactInput

```solidity
  function exactInput(
    struct ISwapRouter.ExactInputParams params
  ) external returns (uint256 amountOut)
```

沿着指定路径以 `amountIn` 数量的一个代币交换尽可能多的另一个代币。

#### 参数：

| 名称     | 类型                                | 描述                                                                                  |
| :------- | :---------------------------------- | :------------------------------------------------------------------------------------ |
| `params` | struct ISwapRouter.ExactInputParams | 进行多跳交换所必需的参数，编码为 calldata 中的 `ExactInputParams`                       |

#### 返回值：

| 名称        | 类型    | 描述                      |
| :---------- | :------ | :------------------------- |
| `amountOut` | uint256 | 接收到的代币数量           |

### exactOutputSingle

```solidity
  function exactOutputSingle(
    struct ISwapRouter.ExactOutputSingleParams params
  ) external returns (uint256 amountIn)
```

以尽可能少的一个代币交换 `amountOut` 数量的另一个代币。

#### 参数：

| 名称     | 类型                                       | 描述                                                                              |
| :------- | :----------------------------------------- | :------------------------------------------------------------------------------------------------- |
| `params` | struct ISwapRouter.ExactOutputSingleParams | 进行交换所必需的参数，编码为 calldata 中的 `ExactOutputSingleParams`                 |

#### 返回值：

| 名称       | 类型    | 描述                     |
| :--------- | :------ | :------------------------ |
| `amountIn` | uint256 | 输入代币的数量            |

### exactOutput

```solidity
  function exactOutput(
    struct ISwapRouter.ExactOutputParams params
  ) external returns (uint256 amountIn)
```

沿着指定路径（反转）以尽可能少的一个代币交换 `amountOut` 数量的另一个代币。

#### 参数：

| 名称     | 类型                                 | 描述                                                                                       |
| :------- | :----------------------------------- | :----------------------------------------------------------------------------------------- |
| `params` | struct ISwapRouter.ExactOutputParams | 进行多跳交换所必需的参数，编码为 calldata 中的 `ExactOutputParams`                          |

#### 返回值：

| 名称       | 类型    | 描述                     |
| :--------- | :------ | :------------------------ |
| `amountIn` | uint256 | 输入代币的数量            |