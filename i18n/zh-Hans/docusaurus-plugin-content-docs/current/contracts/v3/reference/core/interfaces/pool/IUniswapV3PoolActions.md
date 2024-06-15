包含任何人都可以调用的池方法。

## 函数

### 初始化

```solidity
  function initialize(
    uint160 sqrtPriceX96
  ) external
```

为池设置初始价格。

价格表示为 sqrt(amountToken1/amountToken0) 的 Q64.96 值。

#### 参数：

| 名称           | 类型    | 描述                                    |
| :------------- | :------ | :-------------------------------------- |
| `sqrtPriceX96` | uint160 | 池的初始 sqrt 价格，作为 Q64.96 值。 |

### 铸币

```solidity
  function mint(
    address recipient,
    int24 tickLower,
    int24 tickUpper,
    uint128 amount,
    bytes data
  ) external returns (uint256 amount0, uint256 amount1)
```

为给定的接收者/tickLower/tickUpper 位置添加流动性。

调用此方法的实体将收到回调形式的 IUniswapV3MintCallback#uniswapV3MintCallback，在其中他们必须支付因流动性而欠下的任何 token0 或 token1。应支付的 token0/token1 数量取决于 tickLower、tickUpper、流动性数量和当前价格。

#### 参数：

| 名称        | 类型    | 描述                                              |
| :---------- | :------ | :------------------------------------------------ |
| `recipient` | address | 将创建流动性的地址。                              |
| `tickLower` | int24   | 要添加流动性的位置的下界 tick。                   |
| `tickUpper` | int24   | 要添加流动性的位置的上界 tick。                   |
| `amount`    | uint128 | 要铸币的流动性数量。                              |
| `data`      | bytes   | 应通过回调传递的任何数据。                         |

#### 返回值：

| 名称      | 类型    | 描述                                                                                                 |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------- |
| `amount0` | uint256 | 为了铸币给定数量的流动性而支付的 token0 数量。与回调中的值匹配。                             |
| `amount1` | uint256 | 为了铸币给定数量的流动性而支付的 token1 数量。与回调中的值匹配。                             |

### 收集

```solidity
  function collect(
    address recipient,
    int24 tickLower,
    int24 tickUpper,
    uint128 amount0Requested,
    uint128 amount1Requested
  ) external returns (uint128 amount0, uint128 amount1)
```

收集位置应得的代币。

不会重新计算已赚取的费用，这必须通过铸造或燃烧任意数量的流动性来完成。收集必须由位置所有者调用。要仅提取 token0 或仅提取 token1，可将 amount0Requested 或 amount1Requested 设置为零。要提取所有应得的代币，调用者可以传递大于实际应得代币的任何值，例如 type(uint128).max。应得的代币可能来自累积的交易费用或燃烧的流动性。

#### 参数：

| 名称               | 类型    | 描述                                              |
| :----------------- | :------ | :------------------------------------------------ |
| `recipient`        | address | 应该接收所收集成费用的地址。                     |
| `tickLower`        | int24   | 要收取费用的位置的下界 tick。                    |
| `tickUpper`        | int24   | 要收取费用的位置的上界 tick。                    |
| `amount0Requested` | uint128 | 应从应得费用中提取多少 token0。                  |
| `amount1Requested` | uint128 | 应从应得费用中提取多少 token1。                  |

#### 返回值：

| 名称      | 类型    | 描述                            |
| :-------- | :------ | :------------------------------ |
| `amount0` | uint128 | 在 token0 中收取的费用总额。     |
| `amount1` | uint128 | 在 token1 中收取的费用总额。     |

### 燃烧

```solidity
  function burn(
    int24 tickLower,
    int24 tickUpper,
    uint128 amount
  ) external returns (uint256 amount0, uint256 amount1)
```

从发送方燃烧流动性，并为流动性应得的代币记账到位置。

可以用于通过以 0 数量调用来触发对位置应得费用的重新计算。
费用必须通过调用 #collect 单独收取。

#### 参数：

| 名称        | 类型    | 描述                                                |
| :---------- | :------ | :-------------------------------------------------- |
| `tickLower` | int24   | 要燃烧流动性的位置的下界 tick。                 |
| `tickUpper` | int24   | 要燃烧流动性的位置的上界 tick。                 |
| `amount`    | uint128 | 要燃烧的流动性数量。                               |

#### 返回值：

| 名称      | 类型    | 描述                                |
| :-------- | :------ | :---------------------------------- |
| `amount0` | uint256 | 发送给接收者的 token0 数量。       |
| `amount1` | uint256 | 发送给接收者的 token1 数量。       |

### 交换

```solidity
  function swap(
    address recipient,
    bool zeroForOne,
    int256 amountSpecified,
    uint160 sqrtPriceLimitX96,
    bytes data
  ) external returns (int256 amount0, int256 amount1)
```

交换 token0 为 token1，或 token1 为 token0。

调用此方法的实体将收到回调形式的 IUniswapV3SwapCallback#uniswapV3SwapCallback。

#### 参数：

| 名称                | 类型    | 描述                                                                                                        |
| :------------------ | :------ | :---------------------------------------------------------------------------------------------------------------- |
| `recipient`         | address | 接收交换输出的地址。                                                                                       |
| `zeroForOne`        | bool    | 交换的方向，token0 到 token1 为真，反之为假。                                                                |
| `amountSpecified`   | int256  | 交换的数量，隐式配置交换为精确输入（正数），或精确输出（负数）。                                           |
| `sqrtPriceLimitX96` | uint160 | Q64.96 sqrt 价格限制。如果 zero for one，则交换后价格不能低于此值。如果 one for zero，则交换后价格不能高于此值。 |
| `data`              | bytes   | 通过回调传递的任何数据。                                                                                  |

#### 返回值：

| 名称      | 类型   | 描述                                                                                |
| :-------- | :----- | :---------------------------------------------------------------------------------- |
| `amount0` | int256 | 池中 token0 余额的变化，负数时精确，正数时最小。                                   |
| `amount1` | int256 | 池中 token1 余额的变化，负数时精确，正数时最小。                                   |

### 快闪

```solidity
  function flash(
    address recipient,
    uint256 amount0,
    uint256 amount1,
    bytes data
  ) external
```

接收 token0 和/或 token1 并在回调中归还，加上费用。

调用此方法的实体将收到回调形式的 IUniswapV3FlashCallback#uniswapV3FlashCallback。
可以通过使用 0 amount{0,1} 调用并从回调发送捐赠金额来按比例向当前范围内流动性提供者捐赠底层代币。

#### 参数：

| 名称        | 类型    | 描述                                                  |
| :---------- | :------ | :---------------------------------------------------- |
| `recipient` | address | 将接收 token0 和 token1 数量的地址。                |
| `amount0`   | uint256 | 要发送的 token0 数量。                                |
| `amount1`   | uint256 | 要发送的 token1 数量。                                |
| `data`      | bytes   | 通过回调传递的任何数据。                              |

### 增加观察卡数

```solidity
  function increaseObservationCardinalityNext(
    uint16 observationCardinalityNext
  ) external
```

增加此池将存储的价格和流动性观察的最大数量。

如果池已经具有大于或等于输入 observationCardinalityNext 的 observationCardinalityNext，则此方法为无操作。

#### 参数：

| 名称                         | 类型   | 描述                                                      |
| :--------------------------- | :----- | :-------------------------------------------------------- |
| `observationCardinalityNext` | uint16 | 池希望存储的观察次数的期望最小数量。 |