## 函数

### \_blockTimestamp

```solidity
  function _blockTimestamp(
  ) internal view virtual returns (uint32)
```

返回截断至32位的区块时间戳，即模2\*\*32。此方法在测试中被重写。

### snapshotCumulativesInside

```solidity
  function snapshotCumulativesInside(
    int24 tickLower,
    int24 tickUpper
  ) external view override noDelegateCall returns (int56 tickCumulativeInside, uint160 secondsPerLiquidityInsideX128, uint32 secondsInside)
```

返回给定价格范围内的tick累积量、每单位流动性秒数和区间内秒数的快照

快照仅应与其他快照进行比较，这些快照是在持有仓位的周期内获取的。
也就是说，如果从第一次快照到第二次快照之间未持续持有仓位，则不能比较快照。

#### 参数：

| 名称        | 类型  | 描述                 |
| :---------- | :---- | :-------------------------- |
| `tickLower` | int24 | 价格区间的下限tick |
| `tickUpper` | int24 | 价格区间的上限tick |

#### 返回值：

| 名称                            | 类型    | 描述                                         |
| :------------------------------ | :------ | :-------------------------------------------------- |
| `tickCumulativeInside`          | int56   | 区间内的tick累积量快照  |
| `secondsPerLiquidityInsideX128` | uint160 | 区间内的每单位流动性秒数快照 |
| `secondsInside`                 | uint32  | 区间内的秒数快照 |

### observe

```solidity
  function observe(
    uint32[] secondsAgos
  ) external view override noDelegateCall returns (int56[] tickCumulatives, uint160[] secondsPerLiquidityCumulativeX128s)
```

返回每个从当前区块时间戳前`secondsAgo`时刻的累积tick和流动性

为了获取时间加权平均tick或区间内流动性，你必须使用两个值调用此函数，一个代表周期开始，另一个代表周期结束。例如，要获取过去一小时的时间加权平均tick，你必须使用secondsAgos = [3600, 0]调用它。
时间加权平均tick表示池的几何时间加权平均价格，在token1/token0的sqrt(1.0001)为底的对数形式。TickMath库可用于从tick值转换为比率。

#### 参数：

| 名称          | 类型     | 描述                                                                   |
| :------------ | :------- | :---------------------------------------------------------------------------- |
| `secondsAgos` | uint32[] | 应返回每个累积tick和流动性值的前多少秒 |

#### 返回值：

| 名称                                 | 类型      | 描述                                                                                     |
| :----------------------------------- | :-------- | :---------------------------------------------------------------------------------------------- |
| `tickCumulatives`                    | int56[]   | 每个从当前区块时间戳前`secondsAgo`时刻的累积tick值                |
| `secondsPerLiquidityCumulativeX128s` | uint160[] | 每个从当前区块时间戳前`secondsAgo`时刻的累积每单位流动性值 |

### increaseObservationCardinalityNext

```solidity
  function increaseObservationCardinalityNext(
    uint16 observationCardinalityNext
  ) external override lock noDelegateCall
```

增加池将存储的价格和流动性观察的最大数量

如果池已经具有大于或等于输入observationCardinalityNext的observationCardinalityNext，则此方法为无操作（noop）。

#### 参数：

| 名称                         | 类型   | 描述                                                      |
| :--------------------------- | :----- | :--------------------------------------------------------------- |
| `observationCardinalityNext` | uint16 | 池希望存储的最小观察数 |

### initialize

```solidity
  function initialize(
    uint160 sqrtPriceX96
  ) external override
```

设置池的初始价格

未锁定，因为它初始化时解锁状态

#### 参数：

| 名称           | 类型    | 描述                                    |
| :------------- | :------ | :--------------------------------------------- |
| `sqrtPriceX96` | uint160 | 池的初始平方根价格作为Q64.96 |

### mint

```solidity
  function mint(
    address recipient,
    int24 tickLower,
    int24 tickUpper,
    uint128 amount,
    bytes data
  ) external override lock returns (uint256 amount0, uint256 amount1)
```

为给定的recipient/tickLower/tickUpper位置添加流动性

通过\_modifyPosition间接应用noDelegateCall

#### 参数：

| 名称        | 类型    | 描述                                              |
| :---------- | :------ | :------------------------------------------------------- |
| `recipient` | address | 将创建流动性的地址      |
| `tickLower` | int24   | 添加流动性的位置的下限tick |
| `tickUpper` | int24   | 添加流动性的位置的上限tick |
| `amount`    | uint128 | 要铸造的流动性数量 |
| `data`      | bytes   | 应通过回调传递的任何数据   |

#### 返回值：

| 名称      | 类型    | 描述                                                                                                 |
| :-------- | :------ | :---------------------------------------------------------------------------------------------------------- |
| `amount0` | uint256 | 为铸造给定数量的流动性而支付的token0的数量。与回调中的值匹配 |
| `amount1` | uint256 | 为铸造给定数量的流动性而支付的token1的数量。与回调中的值匹配 |

### collect

```solidity
  function collect(
    address recipient,
    int24 tickLower,
    int24 tickUpper,
    uint128 amount0Requested,
    uint128 amount1Requested
  ) external override lock returns (uint128 amount0, uint128 amount1)
```

收集归某位置所有的代币

不会重新计算已赚取的费用，这必须通过铸造或燃烧任意数量的流动性来完成。收集必须由仓位所有者调用。要只提取token0或只提取token1，可将amount0Requested或amount1Requested设置为零。要提取所有应得代币，调用方可以传递任何大于实际应得代币数量的值，例如type(uint128).max。应得代币可能来自累积的交易费用或燃烧的流动性。

#### 参数：

| 名称               | 类型    | 描述                                              |
| :----------------- | :------ | :------------------------------------------------------- |
| `recipient`        | address | 应接收所收集费用的地址      |
| `tickLower`        | int24   | 收集费用的位置的下限tick |
| `tickUpper`        | int24   | 收集费用的位置的上限tick |
| `amount0Requested` | uint128 | 从应得费用中提取的token0数量   |
| `amount1Requested` | uint128 | 从应得费用中提取的token1数量   |

#### 返回值：

| 名称      | 类型    | 描述                            |
| :-------- | :------ | :------------------------------------- |
| `amount0` | uint128 | 在token0中收集的费用数量 |
| `amount1` | uint128 | 在token1中收集的费用数量 |

### burn

```solidity
  function burn(
    int24 tickLower,
    int24 tickUpper,
    uint128 amount
  ) external override lock returns (uint256 amount0, uint256 amount1)
```

从发送方烧毁流动性，并将应得的代币记入该仓位

通过\_modifyPosition间接应用noDelegateCall

#### 参数：

| 名称        | 类型    | 描述                                                |
| :---------- | :------ | :--------------------------------------------------------- |
| `tickLower` | int24   | 烧毁流动性的位置的下限tick |
| `tickUpper` | int24   | 烧毁流动性的位置的上限tick |
| `amount`    | uint128 | 要烧毁的流动性数量 |

#### 返回值：

| 名称      | 类型    | 描述                                |
| :-------- | :------ | :----------------------------------------- |
| `amount0` | uint256 | 发送给接收者的token0数量 |
| `amount1` | uint256 | 发送给接收者的token1数量 |

### swap

```solidity
  function swap(
    address recipient,
    bool zeroForOne,
    int256 amountSpecified,
    uint160 sqrtPriceLimitX96,
    bytes data
  ) external override noDelegateCall returns (int256 amount0, int256 amount1)
```

交换token0为token1，或token1为token0

调用此方法的实体将接收到IUniswapV3SwapCallback#uniswapV3SwapCallback形式的回调

#### 参数：

| 名称                | 类型    | 描述                                                                                                                                                                        |
| :------------------ | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `recipient`         | address | 接收交换输出的地址                                                                                                                                      |
| `zeroForOne`        | bool    | 交换的方向，true表示token0到token1，false表示token1到token0                                                                                                   |
| `amountSpecified`   | int256  | 交换的数量，隐式配置交换为精确输入（正数），或精确输出（负数）                                                                 |
| `sqrtPriceLimitX96` | uint160 | Q64.96平方根价格限制。如果零对一，交换后的价格不能低于此值。如果一对零，交换后的价格不能高于此值 |
| `data`              | bytes   | 任何要传递给回调的数据                                                                                                                                      |

#### 返回值：

| 名称      | 类型   | 描述                                                                                |
| :-------- | :----- | :----------------------------------------------------------------------------------------- |
| `amount0` | int256 | 池中token0余额的变化，当为负数时为精确值，当为正数时为最小值 |
| `amount1` | int256 | 池中token1余额的变化，当为负数时为精确值，当为正数时为最小值 |

### flash

```solidity
  function flash(
    address recipient,
    uint256 amount0,
    uint256 amount1,
    bytes data
  ) external override lock noDelegateCall
```

接收token0和/或token1并将其偿还，加上手续费，在回调中

调用此方法的实体将接收到IUniswapV3FlashCallback#uniswapV3FlashCallback形式的回调
可用于通过以0 amount{0,1}调用并从回调发送捐赠金额(s)，按比例向当前在范围内的流动性提供者捐赠底层代币

#### 参数：

| 名称        | 类型    | 描述                                                  |
| :---------- | :------ | :----------------------------------------------------------- |
| `recipient` | address | 将接收token0和token1数量的地址 |
| `amount0`   | uint256 | 要发送的token0数量                                 |
| `amount1`   | uint256 | 要发送的token1数量                                 |
| `data`      | bytes   | 任何要传递给回调的数据                |

### setFeeProtocol

```solidity
  function setFeeProtocol(
    uint8 feeProtocol0,
    uint8 feeProtocol1
  ) external override lock onlyFactoryOwner
```

设置协议%份额费用的分母

#### 参数：

| 名称           | 类型  | 描述                             |
| :------------- | :---- | :-------------------------------------- |
| `feeProtocol0` | uint8 | 池的token0的新协议费用 |
| `feeProtocol1` | uint8 | 池的token1的新协议费用 |

### collectProtocol

```solidity
  function collectProtocol(
    address recipient,
    uint128 amount0Requested,
    uint128 amount1Requested
  ) external override lock onlyFactoryOwner returns (uint128 amount0, uint128 amount1)
```

收集累积到池中的协议费用

#### 参数：

| 名称               | 类型    | 描述                                                                   |
| :----------------- | :------ | :---------------------------------------------------------------------------- |
| `recipient`        | address | 收集的协议费用应发送至的地址                   |
| `amount0Requested` | uint128 | 可以为0，仅在token1中收集费用 |
| `amount1Requested` | uint128 | 可以为0，仅在token0中收集费用 |

#### 返回值：

| 名称      | 类型    | 描述                          |
| :-------- | :------ | :----------------------------------- |
| `amount0` | uint128 | 在token0中收集的协议费用 |
| `amount1` | uint128 | 在token1中收集的协议费用 |