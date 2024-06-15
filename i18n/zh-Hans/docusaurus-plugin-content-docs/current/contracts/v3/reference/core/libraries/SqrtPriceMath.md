包含使用价格平方根作为 Q64.96 和流动性来计算价差的数学运算。

## 函数

### getNextSqrtPriceFromAmount0RoundingUp

```solidity
  function getNextSqrtPriceFromAmount0RoundingUp(
    uint160 sqrtPX96,
    uint128 liquidity,
    uint256 amount,
    bool add
  ) internal pure returns (uint160)
```

根据 token0 的价差获取下一个价格平方根。

总是向上取整，因为在精确输出情况下（价格上涨）我们需要移动价格至少到能够得到所需的输出量，在精确输入情况下（价格下跌）我们需要移动价格少一点以避免发送过多的输出。
最精确的公式是 *liquidity \* sqrtPX96 / (liquidity +- amount \* sqrtPX96)*，
如果因为溢出而无法计算，则我们计算 *liquidity / (liquidity / sqrtPX96 +- amount)*。

#### 参数：

| 名称        | 类型    | 描述                                                     |
| :---------- | :------ | :------------------------------------------------------- |
| `sqrtPX96`  | uint160 | 起始价格，即在考虑 token0 价差之前的价格。              |
| `liquidity` | uint128 | 可用流动性数量。                                        |
| `amount`    | uint256 | 要添加或从虚拟储备中移除的 token0 数量。                |
| `add`       | bool    | 是否添加或移除 token0 的数量。                           |

#### 返回值：

| 类型    | 描述                                             |
| :------ | :----------------------------------------------- |
| uint160 | 根据 add 添加或移除 amount 后的价格。             |

### getNextSqrtPriceFromAmount1RoundingDown

```solidity
  function getNextSqrtPriceFromAmount1RoundingDown(
    uint160 sqrtPX96,
    uint128 liquidity,
    uint256 amount,
    bool add
  ) internal pure returns (uint160)
```

根据 token1 的价差获取下一个价格平方根。

总是向下取整，因为在精确输出情况下（价格下跌）我们需要移动价格至少到能够得到所需的输出量，在精确输入情况下（价格上涨）我们需要移动价格少一点以避免发送过多的输出。
我们计算的公式与无损版本相差不到1 Wei：*sqrtPX96 +- amount / liquidity*。

#### 参数：

| 名称        | 类型    | 描述                                                       |
| :---------- | :------ | :--------------------------------------------------------- |
| `sqrtPX96`  | uint160 | 起始价格，即在考虑 token1 价差之前的价格。                |
| `liquidity` | uint128 | 可用流动性数量。                                          |
| `amount`    | uint256 | 要添加或从虚拟储备中移除的 token1 数量。                  |
| `add`       | bool    | 是否添加或移除 token1 的数量。                             |

#### 返回值：

| 类型    | 描述                             |
| :------ | :------------------------------- |
| uint160 | 添加或移除 `amount` 后的价格。   |

### getNextSqrtPriceFromInput

```solidity
  function getNextSqrtPriceFromInput(
    uint160 sqrtPX96,
    uint128 liquidity,
    uint256 amountIn,
    bool zeroForOne
  ) internal pure returns (uint160 sqrtQX96)
```

根据输入数量的 token0 或 token1 获取下一个价格平方根。

如果价格或流动性为0，或者下一个价格超出范围则抛出异常。

#### 参数：

| 名称         | 类型    | 描述                                                      |
| :----------- | :------ | :-------------------------------------------------------- |
| `sqrtPX96`   | uint160 | 起始价格，即在考虑输入数量之前的价格。                    |
| `liquidity`  | uint128 | 可用流动性数量。                                          |
| `amountIn`   | uint256 | 正在交换的 token0 或 token1 的数量。                       |
| `zeroForOne` | bool    | 输入的数量是 token0 还是 token1。                         |

#### 返回值：

| 名称       | 类型    | 描述                                             |
| :--------- | :------ | :----------------------------------------------- |
| `sqrtQX96` | uint160 | 在向 token0 或 token1 添加输入数量后的新价格。     |

### getNextSqrtPriceFromOutput

```solidity
  function getNextSqrtPriceFromOutput(
    uint160 sqrtPX96,
    uint128 liquidity,
    uint256 amountOut,
    bool zeroForOne
  ) internal pure returns (uint160 sqrtQX96)
```

根据输出数量的 token0 或 token1 获取下一个价格平方根。

如果价格或流动性为0或下一个价格超出范围则抛出异常。

#### 参数：

| 名称         | 类型    | 描述                                                  |
| :----------- | :------ | :---------------------------------------------------- |
| `sqrtPX96`   | uint160 | 在考虑输出数量之前的价格。                            |
| `liquidity`  | uint128 | 可用流动性数量。                                      |
| `amountOut`  | uint256 | 正在交换出的 token0 或 token1 的数量。                 |
| `zeroForOne` | bool    | 输出的数量是 token0 还是 token1。                      |

#### 返回值：

| 名称       | 类型    | 描述                                                         |
| :--------- | :------ | :----------------------------------------------------------- |
| `sqrtQX96` | uint160 | 在移除 token0 或 token1 的输出数量后的新价格。               |

### getAmount0Delta

```solidity
  function getAmount0Delta(
    uint160 sqrtRatioAX96,
    uint160 sqrtRatioBX96,
    uint128 liquidity,
    bool roundUp
  ) internal pure returns (uint256 amount0)
```

根据两个价格获取 token0 的价差。

计算 *liquidity / sqrt(较低) - liquidity / sqrt(较高)*，
即 *liquidity \* (sqrt(较高) - sqrt(较低)) / (sqrt(较高) \* sqrt(较低))*

#### 参数：

| 名称            | 类型    | 描述                              |
| :-------------- | :------ | :-------------------------------- |
| `sqrtRatioAX96` | uint160 | 一个价格平方根。                  |
| `sqrtRatioBX96` | uint160 | 另一个价格平方根。                |
| `liquidity`     | uint128 | 可用流动性数量。                  |
| `roundUp`       | bool    | 是否向上取整价差或向下取整。       |

#### 返回值：

| 名称      | 类型    | 描述                                                                                   |
| :-------- | :------ | :-------------------------------------------------------------------------------------------- |
| `amount0` | uint256 | 在两个传递的价格之间，覆盖大小为 liquidity 的位置所需的 token0 数量。               |

### getAmount1Delta

```solidity
  function getAmount1Delta(
    uint160 sqrtRatioAX96,
    uint160 sqrtRatioBX96,
    uint128 liquidity,
    bool roundUp
  ) internal pure returns (uint256 amount1)
```

根据两个价格获取 token1 的价差。

计算 *liquidity \* (sqrt(较高) - sqrt(较低))*。

#### 参数：

| 名称            | 类型    | 描述                              |
| :-------------- | :------ | :-------------------------------- |
| `sqrtRatioAX96` | uint160 | 一个价格平方根。                  |
| `sqrtRatioBX96` | uint160 | 另一个价格平方根。                |
| `liquidity`     | uint128 | 可用流动性数量。                  |
| `roundUp`       | bool    | 是否向上取整价差或向下取整。       |

#### 返回值：

| 名称      | 类型    | 描述                                                                                   |
| :-------- | :------ | :-------------------------------------------------------------------------------------------- |
| `amount1` | uint256 | 在两个传递的价格之间，覆盖大小为 liquidity 的位置所需的 token1 数量。               |

### getAmount0Delta

```solidity
  function getAmount0Delta(
    uint160 sqrtRatioAX96,
    uint160 sqrtRatioBX96,
    int128 liquidity
  ) internal pure returns (int256 amount0)
```

帮助函数，用于获取带符号的 token0 价差。

#### 参数：

| 名称            | 类型    | 描述                                                    |
| :-------------- | :------ | :------------------------------------------------------- |
| `sqrtRatioAX96` | uint160 | 一个价格平方根。                                         |
| `sqrtRatioBX96` | uint160 | 另一个价格平方根。                                       |
| `liquidity`     | int128  | 计算 amount0 价差的流动性变化。                          |

#### 返回值：

| 名称      | 类型   | 描述                                                                        |
| :-------- | :----- | :--------------------------------------------------------------------------------- |
| `amount0` | int256 | 在两个价格之间，对应于传递的 liquidityDelta 的 token0 数量。           |

### getAmount1Delta

```solidity
  function getAmount1Delta(
    uint160 sqrtRatioAX96,
    uint160 sqrtRatioBX96,
    int128 liquidity
  ) internal pure returns (int256 amount1)
```

帮助函数，用于获取带符号的 token1 价差。

#### 参数：

| 名称            | 类型    | 描述                                                    |
| :-------------- | :------ | :------------------------------------------------------- |
| `sqrtRatioAX96` | uint160 | 一个价格平方根。                                         |
| `sqrtRatioBX96` | uint160 | 另一个价格平方根。                                       |
| `liquidity`     | int128  | 计算 amount1 价差的流动性变化。                          |

#### 返回值：

| 名称      | 类型   | 描述                                                                        |
| :-------- | :----- | :--------------------------------------------------------------------------------- |
| `amount1` | int256 | 在两个价格之间，对应于传递的 liquidityDelta 的 token1 数量。           |