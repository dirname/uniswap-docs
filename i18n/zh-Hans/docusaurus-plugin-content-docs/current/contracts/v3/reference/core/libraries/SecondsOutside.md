包含用于处理从刻度到32位时间戳值（特别是刻度外的秒数）映射的方法。

映射使用int24作为键，因为刻度表示为int24，并且每个字有8（2^3）个值。
注意“刻度外的秒数”始终是一个相对测量值，只有在较低刻度和较高刻度的总流动性大于0时才一致。

## 函数

### 初始化

```solidity
  function initialize(
    mapping(int24 => uint256) self,
    int24 tick,
    int24 tickCurrent,
    int24 tickSpacing,
    uint32 time
  ) internal
```

首次使用刻度时调用，以设置刻度外的秒数值。假设刻度未初始化。

#### 参数：

| 名称           | 类型                      | 描述                                             |
| :------------- | :------------------------ | :----------------------------------------------- |
| `self`         | mapping(int24 => uint256) | 将刻度到刻度外秒数的打包映射                   |
| `tick`         | int24                     | 要初始化的刻度                                  |
| `tickCurrent`  | int24                     | 当前刻度                                        |
| `tickSpacing`  | int24                     | 可用刻度之间的间距                              |
| `time`         | uint32                    | 当前时间戳                                      |

### 清除

```solidity
  function clear(
    mapping(int24 => uint256) self,
    int24 tick,
    int24 tickSpacing
  ) internal
```

当刻度不再使用时调用，清除该刻度的刻度外秒数值。

#### 参数：

| 名称           | 类型                      | 描述                                             |
| :------------- | :------------------------ | :----------------------------------------------- |
| `self`         | mapping(int24 => uint256) | 将刻度到刻度外秒数的打包映射                   |
| `tick`         | int24                     | 要清除的刻度                                    |
| `tickSpacing`  | int24                     | 可用刻度之间的间距                              |

### 穿越

```solidity
  function cross(
    mapping(int24 => uint256) self,
    int24 tick,
    int24 tickSpacing,
    uint32 time
  ) internal
```

当已初始化的刻度被穿越时调用，以更新该刻度的刻度外秒数。每次已初始化的刻度被穿越时都必须调用此函数。

#### 参数：

| 名称           | 类型                      | 描述                                                |
| :------------- | :------------------------ | :-------------------------------------------------- |
| `self`         | mapping(int24 => uint256) | 将刻度到刻度外秒数的打包映射                       |
| `tick`         | int24                     | 要穿越的刻度                                       |
| `tickSpacing`  | int24                     | 可用刻度之间的间距                                 |
| `time`         | uint32                    | 当前区块时间戳截断至32位                           |

### 获取

```solidity
  function get(
    mapping(int24 => uint256) self,
    int24 tick,
    int24 tickSpacing
  ) internal view returns (uint32)
```

获取已初始化刻度的刻度外秒数。应仅对已初始化的刻度调用。

#### 参数：

| 名称           | 类型                      | 描述                                             |
| :------------- | :------------------------ | :----------------------------------------------- |
| `self`         | mapping(int24 => uint256) | 将刻度到刻度外秒数的打包映射                   |
| `tick`         | int24                     | 要获取刻度外秒数值的刻度                       |
| `tickSpacing`  | int24                     | 可用刻度之间的间距                              |

#### 返回值：

| 类型   | 描述                             |
| :----- | :------------------------------- |
| uint32 | 该刻度的刻度外秒数值             |

### 刻度内秒数

```solidity
  function secondsInside(
    mapping(int24 => uint256) self,
    int24 tickLower,
    int24 tickUpper,
    int24 tickCurrent,
    int24 tickSpacing
  ) internal view returns (uint32)
```

获取刻度范围内的秒数，假设tickLower和tickUpper均已初始化。

#### 参数：

| 名称           | 类型                      | 描述                                               |
| :------------- | :------------------------ | :------------------------------------------------- |
| `self`         | mapping(int24 => uint256) | 将刻度到刻度外秒数的打包映射                     |
| `tickLower`    | int24                     | 要获取刻度内秒数的下限刻度                       |
| `tickUpper`    | int24                     | 要获取刻度内秒数的上限刻度                       |
| `tickCurrent`  | int24                     | 当前刻度                                          |
| `tickSpacing`  | int24                     | 可用刻度之间的间距                                |

#### 返回值：

| 名称 | 类型   | 描述                                                                 |
| :--- | :----- | :------------------------------------------------------------------- |
| `a`  | uint32 | 相对的刻度内秒数值，可以快照并与其后的快照比较以计算出在tickLower和tickUpper之间的时间，即位置的流动性被使用的时长。 |