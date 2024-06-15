提供适用于各种系统设计的价格和流动性数据。

存储的预言机数据实例，“观测”，在预言机数组中收集。
每个池子初始化时，预言机数组长度为 1。任何人均可支付 SSTORE 费用来增加
预言机数组的最大长度。当数组完全填充时，将添加新的槽位。
当预言机数组的完整长度被填充时，观测会被覆盖。
通过向 observe() 函数传递 0，可以独立于预言机数组的长度获取最近的观测。

## 函数

### initialize

```solidity
  function initialize(
    struct Oracle.Observation[65535] self,
    uint32 time
  ) internal returns (uint16 cardinality, uint16 cardinalityNext)
```

通过写入第一个槽位来初始化预言机数组。对于观测数组的生命周期，此函数仅调用一次。

#### 参数：

| 名称   | 类型                             | 描述                                                                    |
| :----- | :------------------------------- | :----------------------------------------------------------------------------- |
| `self` | struct Oracle.Observation[65535] | 存储的预言机数组                                                        |
| `time` | uint32                           | 预言机初始化的时间，通过截断到 uint32 的 block.timestamp 提供 |

#### 返回值：

| 名称              | 类型   | 描述                                                   |
| :---------------- | :----- | :------------------------------------------------------------ |
| `cardinality`     | uint16 | 预言机数组中已填充元素的数量          |
| `cardinalityNext` | uint16 | 预言机数组的新长度，独立于填充情况 |

### write

```solidity
  function write(
    struct Oracle.Observation[65535] self,
    uint16 index,
    uint32 blockTimestamp,
    int24 tick,
    uint128 liquidity,
    uint16 cardinality,
    uint16 cardinalityNext
  ) internal returns (uint16 indexUpdated, uint16 cardinalityUpdated)
```

将一个预言机观测写入数组

每区块最多写入一次。索引表示最近写入的元素的位置。cardinality 和 index 必须在外部进行跟踪。
如果索引位于允许的数组长度末尾（根据 cardinality），且下一个 cardinality 大于当前值，则可以增加 cardinality。此限制是为了保持顺序而创建的。

#### 参数：

| 名称              | 类型                             | 描述                                                     |
| :---------------- | :------------------------------- | :-------------------------------------------------------------- |
| `self`            | struct Oracle.Observation[65535] | 存储的预言机数组                                         |
| `index`           | uint16                           | 最近更新观测的位置           |
| `blockTimestamp`  | uint32                           | 新观测的时间戳                            |
| `tick`            | int24                            | 新观测时刻的活跃 tick              |
| `liquidity`       | uint128                          | 新观测时刻的总范围内流动性 |
| `cardinality`     | uint16                           | 预言机数组中已填充元素的数量            |
| `cardinalityNext` | uint16                           | 预言机数组的新长度，独立于填充情况   |

#### 返回值：

| 名称                 | 类型   | 描述                                                            |
| :------------------- | :----- | :--------------------------------------------------------------------- |
| `indexUpdated`       | uint16 | 预言机数组中最近写入元素的新索引 |
| `cardinalityUpdated` | uint16 | 预言机数组的新 cardinality                                |

### grow

```solidity
  function grow(
    struct Oracle.Observation[65535] self,
    uint16 current,
    uint16 next
  ) internal returns (uint16)
```

准备预言机数组以存储多达 `next` 个观测

#### 参数：

| 名称      | 类型                             | 描述                                                               |
| :-------- | :------------------------------- | :------------------------------------------------------------------------ |
| `self`    | struct Oracle.Observation[65535] | 存储的预言机数组                                                   |
| `current` | uint16                           | 预言机数组的当前下一个 cardinality                          |
| `next`    | uint16                           | 将在预言机数组中填充的提议下一个 cardinality |

#### 返回值：

| 名称   | 类型   | 描述                                                      |
| :----- | :----- | :--------------------------------------------------------------- |
| `next` | uint16 | 将在预言机数组中填充的下一个 cardinality |

### observe

```solidity
  function observe(
    struct Oracle.Observation[65535] self,
    uint32 time,
    uint32[] secondsAgos,
    int24 tick,
    uint16 index,
    uint128 liquidity,
    uint16 cardinality
  ) internal view returns (int56[] tickCumulatives, uint160[] liquidityCumulatives)
```

返回在给定时间前的每个时间点的累积器值，这些时间点在 `secondsAgos` 数组中指定

如果 `secondsAgos` 大于最旧观测，函数将回退。

#### 参数：

| 名称          | 类型                             | 描述                                                                           |
| :------------ | :------------------------------- | :------------------------------------------------------------------------------------ |
| `self`        | struct Oracle.Observation[65535] | 存储的预言机数组                                                               |
| `time`        | uint32                           | 当前 block.timestamp                                                           |
| `secondsAgos` | uint32[]                         | 每个要回溯的时间量，以秒为单位，在该时间点返回一个观测 |
| `tick`        | int24                            | 当前 tick                                                                      |
| `index`       | uint16                           | 在预言机数组中给定观测的位置 |
| `liquidity`   | uint128                          | 当前范围内池流动性                                                   |
| `cardinality` | uint16                           | 预言机数组中已填充元素的数量                                  |

#### 返回值：

| 名称                   | 类型      | 描述                                                                                 |
| :--------------------- | :-------- | :------------------------------------------------------------------------------------------ |
| `tickCumulatives`      | int56[]   | 自池首次初始化以来经过的时间 * tick，截至每个 `secondsAgo`      |
| `liquidityCumulatives` | uint160[] | 自池首次初始化以来经过的时间 * 流动性，截至每个 `secondsAgo` |