提供了从代币数量和价格计算流动性数量的函数。

## 函数

### getLiquidityForAmount0

```solidity
  function getLiquidityForAmount0(
    uint160 sqrtRatioAX96,
    uint160 sqrtRatioBX96,
    uint256 amount0
  ) internal returns (uint128 liquidity)
```

根据给定的token0数量和价格范围，计算收到的流动性数量。

计算公式为：amount0 * (sqrt(upper) - sqrt(lower)) / (sqrt(upper) - sqrt(lower))

#### 参数：

| 名称            | 类型    | 描述                                        |
| :-------------- | :------ | :------------------------------------------------- |
| `sqrtRatioAX96` | uint160 | 表示第一个tick边界的平方根价格               |
| `sqrtRatioBX96` | uint160 | 表示第二个tick边界的平方根价格               |
| `amount0`       | uint256 | 正在输入的amount0数量                           |

#### 返回值：

| 名称        | 类型    | 描述                      |
| :---------- | :------ | :------------------------------- |
| `liquidity` | uint128 | 返回的流动性数量             |

### getLiquidityForAmount1

```solidity
  function getLiquidityForAmount1(
    uint160 sqrtRatioAX96,
    uint160 sqrtRatioBX96,
    uint256 amount1
  ) internal returns (uint128 liquidity)
```

根据给定的token1数量和价格范围，计算收到的流动性数量。

计算公式为：amount1 / (sqrt(upper) - sqrt(lower))。

#### 参数：

| 名称            | 类型    | 描述                                        |
| :-------------- | :------ | :------------------------------------------------- |
| `sqrtRatioAX96` | uint160 | 表示第一个tick边界的平方根价格               |
| `sqrtRatioBX96` | uint160 | 表示第二个tick边界的平方根价格               |
| `amount1`       | uint256 | 正在输入的amount1数量                           |

#### 返回值：

| 名称        | 类型    | 描述                      |
| :---------- | :------ | :------------------------------- |
| `liquidity` | uint128 | 返回的流动性数量             |

### getLiquidityForAmounts

```solidity
  function getLiquidityForAmounts(
    uint160 sqrtRatioX96,
    uint160 sqrtRatioAX96,
    uint160 sqrtRatioBX96,
    uint256 amount0,
    uint256 amount1
  ) internal returns (uint128 liquidity)
```

根据给定的token0、token1数量，当前池子价格以及tick边界的价 格，计算最大流动性接收量。

#### 参数：

| 名称            | 类型    | 描述                                        |
| :-------------- | :------ | :------------------------------------------------- |
| `sqrtRatioX96`  | uint160 | 表示当前池子价格的平方根价格                   |
| `sqrtRatioAX96` | uint160 | 表示第一个tick边界的平方根价格               |
| `sqrtRatioBX96` | uint160 | 表示第二个tick边界的平方根价格               |
| `amount0`       | uint256 | 正在输入的token0数量                             |
| `amount1`       | uint256 | 正在输入的token1数量                             |

#### 返回值：

| 名称        | 类型    | 描述                              |
| :---------- | :------ | :--------------------------------------- |
| `liquidity` | uint128 | 最大接收的流动性数量                |

### getAmount0ForLiquidity

```solidity
  function getAmount0ForLiquidity(
    uint160 sqrtRatioAX96,
    uint160 sqrtRatioBX96,
    uint128 liquidity
  ) internal returns (uint256 amount0)
```

根据给定的流动性数量和价格范围，计算token0的数量。

#### 参数：

| 名称            | 类型    | 描述                                        |
| :-------------- | :------ | :------------------------------------------------- |
| `sqrtRatioAX96` | uint160 | 表示第一个tick边界的平方根价格               |
| `sqrtRatioBX96` | uint160 | 表示第二个tick边界的平方根价格               |
| `liquidity`     | uint128 | 正在评估的流动性数量                           |

#### 返回值：

| 名称      | 类型    | 描述          |
| :-------- | :------ | :------------------- |
| `amount0` | uint256 | token0的数量         |

### getAmount1ForLiquidity

```solidity
  function getAmount1ForLiquidity(
    uint160 sqrtRatioAX96,
    uint160 sqrtRatioBX96,
    uint128 liquidity
  ) internal returns (uint256 amount1)
```

根据给定的流动性数量和价格范围，计算token1的数量。

#### 参数：

| 名称            | 类型    | 描述                                        |
| :-------------- | :------ | :------------------------------------------------- |
| `sqrtRatioAX96` | uint160 | 表示第一个tick边界的平方根价格               |
| `sqrtRatioBX96` | uint160 | 表示第二个tick边界的平方根价格               |
| `liquidity`     | uint128 | 正在评估的流动性数量                           |

#### 返回值：

| 名称      | 类型    | 描述          |
| :-------- | :------ | :------------------- |
| `amount1` | uint256 | token1的数量         |

### getAmountsForLiquidity

```solidity
  function getAmountsForLiquidity(
    uint160 sqrtRatioX96,
    uint160 sqrtRatioAX96,
    uint160 sqrtRatioBX96,
    uint128 liquidity
  ) internal returns (uint256 amount0, uint256 amount1)
```

根据给定的流动性数量、当前池子价格以及tick边界的价 格，计算token0和token1的价值。

#### 参数：

| 名称            | 类型    | 描述                                        |
| :-------------- | :------ | :------------------------------------------------- |
| `sqrtRatioX96`  | uint160 | 表示当前池子价格的平方根价格                   |
| `sqrtRatioAX96` | uint160 | 表示第一个tick边界的平方根价格               |
| `sqrtRatioBX96` | uint160 | 表示第二个tick边界的平方根价格               |
| `liquidity`     | uint128 | 正在评估的流动性数量                           |

#### 返回值：

| 名称      | 类型    | 描述          |
| :-------- | :------ | :------------------- |
| `amount0` | uint256 | token0的数量         |
| `amount1` | uint256 | token1的数量         |