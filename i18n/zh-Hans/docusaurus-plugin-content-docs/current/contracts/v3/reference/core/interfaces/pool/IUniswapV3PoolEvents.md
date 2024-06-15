包含池发出的所有事件。

## 事件

### 初始化

```solidity
  event Initialize(
    uint160 sqrtPriceX96,
    int24 tick
  )
```

当池首次调用#initialize时，池会确切地发出一次此事件。

在Initialize之前，池无法发出Mint/Burn/Swap事件。

#### 参数：

| 名称           | 类型    | 描述                                                                          |
| :------------- | :------ | :----------------------------------------------------------------------------------- |
| `sqrtPriceX96` | uint160 | 池的初始平方根价格，作为Q64.96                                      |
| `tick`         | int24   | 池的初始tick，即池起始价格的以1.0001为底的对数。 |

### 铸币

```solidity
  event Mint(
    address sender,
    address owner,
    int24 tickLower,
    int24 tickUpper,
    uint128 amount,
    uint256 amount0,
    uint256 amount1
  )
```

当给定位置铸造流动性时发出。

#### 参数：

| 名称        | 类型    | 描述                                                     |
| :---------- | :------ | :-------------------------------------------------------------- |
| `sender`    | address | 铸造流动性的地址                           |
| `owner`     | address | 位置的所有者和任何铸造流动性接收者 |
| `tickLower` | int24   | 位置的下界tick                                  |
| `tickUpper` | int24   | 位置的上界tick                                  |
| `amount`    | uint128 | 在位置范围内铸造的流动性数量            |
| `amount0`   | uint256 | 为了铸造流动性所需token0的数量           |
| `amount1`   | uint256 | 为了铸造流动性所需token1的数量           |

### 收集

```solidity
  event Collect(
    address owner,
    int24 tickLower,
    int24 tickUpper,
    uint128 amount0,
    uint128 amount1
  )
```

当位置的所有者收集费用时发出。

如果调用者选择不收集费用，Collect事件可以带有零的amount0和amount1。

#### 参数：

| 名称        | 类型    | 描述                                            |
| :---------- | :------ | :----------------------------------------------------- |
| `owner`     | address | 收集费用的位置所有者 |
| `tickLower` | int24   | 位置的下界tick                         |
| `tickUpper` | int24   | 位置的上界tick                         |
| `amount0`   | uint128 | 收集的token0费用数量                    |
| `amount1`   | uint128 | 收集的token1费用数量                    |

### 燃烧

```solidity
  event Burn(
    address owner,
    int24 tickLower,
    int24 tickUpper,
    uint128 amount,
    uint256 amount0,
    uint256 amount1
  )
```

当移除位置的流动性时发出。

不会提取由流动性位置赚取的任何费用，这些费用必须通过#collect提取。

#### 参数：

| 名称        | 类型    | 描述                                              |
| :---------- | :------ | :------------------------------------------------------- |
| `owner`     | address | 移除流动性的位置所有者 |
| `tickLower` | int24   | 位置的下界tick                           |
| `tickUpper` | int24   | 位置的上界tick                           |
| `amount`    | uint128 | 要移除的流动性数量                        |
| `amount0`   | uint256 | 提取的token0数量                           |
| `amount1`   | uint256 | 提取的token1数量                           |

### 交换

```solidity
  event Swap(
    address sender,
    address recipient,
    int256 amount0,
    int256 amount1,
    uint160 sqrtPriceX96,
    uint128 liquidity,
    int24 tick
  )
```

在token0和token1之间的任何交换由池发出。

#### 参数：

| 名称           | 类型    | 描述                                                              |
| :------------- | :------ | :----------------------------------------------------------------------- |
| `sender`       | address | 发起交换调用并接收回调的地址 |
| `recipient`    | address | 接收交换输出的地址                         |
| `amount0`      | int256  | 池中token0余额的变化                              |
| `amount1`      | int256  | 池中token1余额的变化                              |
| `sqrtPriceX96` | uint160 | 交换后池的sqrt(price)，作为Q64.96                  |
| `liquidity`    | uint128 | 交换后池的流动性                                 |
| `tick`         | int24   | 交换后池的价格以1.0001为底的对数                  |

### 闪贷

```solidity
  event Flash(
    address sender,
    address recipient,
    uint256 amount0,
    uint256 amount1,
    uint256 paid0,
    uint256 paid1
  )
```

对于任何token0/token1的闪贷，池会发出。

#### 参数：

| 名称        | 类型    | 描述                                                                        |
| :---------- | :------ | :--------------------------------------------------------------------------------- |
| `sender`    | address | 发起交换调用并接收回调的地址           |
| `recipient` | address | 从闪贷接收代币的地址                                    |
| `amount0`   | uint256 | 被闪贷的token0数量                                              |
| `amount1`   | uint256 | 被闪贷的token1数量                                              |
| `paid0`     | uint256 | 为闪贷支付的token0数量，可以超过amount0加上费用 |
| `paid1`     | uint256 | 为闪贷支付的token1数量，可以超过amount1加上费用 |

### 增加观察次数上限

```solidity
  event IncreaseObservationCardinalityNext(
    uint16 observationCardinalityNextOld,
    uint16 observationCardinalityNextNew
  )
```

当存储的观察次数增加时，池会发出。

observationCardinalityNext在进行铸币/交换/燃烧前一个索引处写入观察结果时并不是观察次数。

#### 参数：

| 名称                            | 类型   | 描述                                            |
| :------------------------------ | :----- | :----------------------------------------------------- |
| `observationCardinalityNextOld` | uint16 | 下一个观察次数的先前值 |
| `observationCardinalityNextNew` | uint16 | 下一个观察次数的更新值  |

### 设置协议费用

```solidity
  event SetFeeProtocol(
    uint8 feeProtocol0Old,
    uint8 feeProtocol1Old,
    uint8 feeProtocol0New,
    uint8 feeProtocol1New
  )
```

当池更改协议费用时发出。

#### 参数：

| 名称              | 类型  | 描述                                   |
| :---------------- | :---- | :-------------------------------------------- |
| `feeProtocol0Old` | uint8 | token0协议费用的先前值 |
| `feeProtocol1Old` | uint8 | token1协议费用的先前值 |
| `feeProtocol0New` | uint8 | token0协议费用的更新值  |
| `feeProtocol1New` | uint8 | token1协议费用的更新值  |

### 收集协议费用

```solidity
  event CollectProtocol(
    address sender,
    address recipient,
    uint128 amount0,
    uint128 amount1
  )
```

当工厂所有者提取已收集的协议费用时发出。

#### 参数：

| 名称        | 类型    | 描述                                           |
| :---------- | :------ | :---------------------------------------------------- |
| `sender`    | address | 收集协议费用的地址           |
| `recipient` | address | 接收已收集协议费用的地址 |
| `amount0`   | uint128 | 提取的token0协议费用数量  |
| `amount1`   | uint128 | 提取的token1协议费用数量  |