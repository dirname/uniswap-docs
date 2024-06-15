通过 Uniswap V3 进行代币交换的函数

## 参数结构体

请注意，`fee` 是以基点的百分比表示（例如，在 0.3% 层级的池中，`fee` 为 3000；在 0.01% 层级的池中，`fee` 为 100）。

### ExactInputSingleParams

```solidity
    struct ExactInputSingleParams {
        address tokenIn;         // 输入代币地址
        address tokenOut;        // 输出代币地址
        uint24 fee;              // 手续费
        address recipient;       // 接收者地址
        uint256 deadline;        // 截止时间
        uint256 amountIn;        // 输入金额
        uint256 amountOutMinimum;// 最小输出金额
        uint160 sqrtPriceLimitX96;// 价格限制（平方根形式）
    }
```

### ExactInputParams

```solidity
   struct ExactInputParams {
        bytes path;              // 路径
        address recipient;       // 接收者地址
        uint256 deadline;        // 截止时间
        uint256 amountIn;        // 输入金额
        uint256 amountOutMinimum;// 最小输出金额
    }
```

### ExactOutputSingleParams

```solidity
    struct ExactOutputSingleParams {
        address tokenIn;         // 输入代币地址
        address tokenOut;        // 输出代币地址
        uint24 fee;              // 手续费
        address recipient;       // 接收者地址
        uint256 deadline;        // 截止时间
        uint256 amountOut;       // 输出金额
        uint256 amountInMaximum; // 最大输入金额
        uint160 sqrtPriceLimitX96;// 价格限制（平方根形式）
    }
```

### ExactOutputParams

```solidity
    struct ExactOutputParams {
        bytes path;              // 路径
        address recipient;       // 接收者地址
        uint256 deadline;        // 截止时间
        uint256 amountOut;       // 输出金额
        uint256 amountInMaximum; // 最大输入金额
    }
```

## 函数

### exactInputSingle

```solidity
  function exactInputSingle(
    struct ISwapRouter.ExactInputSingleParams params
  ) external returns (uint256 amountOut)
```

用一种代币的 `amountIn` 换取尽可能多的另一种代币

#### 参数：

| 名称     | 类型                                      | 描述                                                                            |
| :------- | :---------------------------------------- | :------------------------------------------------------------------------------------- |
| `params` | struct ISwapRouter.ExactInputSingleParams | 交换所必需的参数，编码为 calldata 中的 `ExactInputSingleParams` |

#### 返回值：

| 名称        | 类型                                      | 描述                      |
| :---------- | :---------------------------------------- | :------------------------------- |
| `amountOut` | uint256                                   | 收到的代币数量               |

### exactInput

```solidity
  function exactInput(
    struct ISwapRouter.ExactInputParams params
  ) external returns (uint256 amountOut)
```

沿指定路径用一种代币的 `amountIn` 换取尽可能多的另一种代币

#### 参数：

| 名称     | 类型                                | 描述                                                                                |
| :------- | :---------------------------------- | :----------------------------------------------------------------------------------------- |
| `params` | struct ISwapRouter.ExactInputParams | 多跳交换所必需的参数，编码为 calldata 中的 `ExactInputParams` |

#### 返回值：

| 名称        | 类型                                | 描述                      |
| :---------- | :---------------------------------- | :------------------------------- |
| `amountOut` | uint256                             | 收到的代币数量               |

### exactOutputSingle

```solidity
  function exactOutputSingle(
    struct ISwapRouter.ExactOutputSingleParams params
  ) external returns (uint256 amountIn)
```

用尽可能少的一种代币换取 `amountOut` 的另一种代币

#### 参数：

| 名称     | 类型                                       | 描述                                                                             |
| :------- | :----------------------------------------- | :-------------------------------------------------------------------------------------- |
| `params` | struct ISwapRouter.ExactOutputSingleParams | 交换所必需的参数，编码为 calldata 中的 `ExactOutputSingleParams` |

#### 返回值：

| 名称       | 类型                                       | 描述                   |
| :--------- | :----------------------------------------- | :---------------------------- |
| `amountIn` | uint256                                    | 输入代币数量            |

### exactOutput

```solidity
  function exactOutput(
    struct ISwapRouter.ExactOutputParams params
  ) external returns (uint256 amountIn)
```

沿指定路径（反转）用尽可能少的一种代币换取 `amountOut` 的另一种代币

#### 参数：

| 名称     | 类型                                 | 描述                                                                                 |
| :------- | :----------------------------------- | :------------------------------------------------------------------------------------------ |
| `params` | struct ISwapRouter.ExactOutputParams | 多跳交换所必需的参数，编码为 calldata 中的 `ExactOutputParams` |

#### 返回值：

| 名称       | 类型                                 | 描述                   |
| :--------- | :----------------------------------- | :---------------------------- |
| `amountIn` | uint256                              | 输入代币数量            |