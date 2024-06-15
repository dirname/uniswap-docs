## 函数

### hasMultiplePools

```solidity
  function hasMultiplePools(
    bytes path
  ) internal returns (bool)
```

如果路径包含两个或更多个池，则返回 true。

#### 参数：

| 名称   | 类型  | 描述           |
| :----- | :---- | :-------------------- |
| `path` | bytes | 编码后的交换路径 |

#### 返回值：

| 类型 | 描述                                         |
| :--- | :-------------------------------------------------- |
| bool | 如果路径包含两个或更多个池则为 true，否则为 false |

### decodeFirstPool

```solidity
  function decodeFirstPool(
    bytes path
  ) internal returns (address tokenA, address tokenB, uint24 fee)
```

解码路径中的第一个池。

#### 参数：

| 名称   | 类型  | 描述                 |
| :----- | :---- | :-------------------------- |
| `path` | bytes | 编码后的交换路径 |

#### 返回值：

| 名称     | 类型    | 描述                        |
| :------- | :------ | :--------------------------------- |
| `tokenA` | address | 给定池的第一个代币  |
| `tokenB` | address | 给定池的第二个代币 |
| `fee`    | uint24  | 池的费用级别          |

### getFirstPool

```solidity
  function getFirstPool(
    bytes path
  ) internal returns (bytes)
```

获取路径中对应于第一个池的段。

#### 参数：

| 名称   | 类型  | 描述                 |
| :----- | :---- | :-------------------------- |
| `path` | bytes | 编码后的交换路径 |

#### 返回值：

| 类型  | 描述                                                                |
| :---- | :------------------------------------------------------------------------- |
| bytes | 包含定位路径中的第一个池所需所有数据的段 |

### skipToken

```solidity
  function skipToken(
    bytes path
  ) internal returns (bytes)
```

从缓冲区跳过一个代币+费用元素，并返回剩余部分。

#### 参数：

| 名称   | 类型  | 描述   |
| :----- | :---- | :------------ |
| `path` | bytes | 交换路径 |

#### 返回值：

| 类型  | 描述                                |
| :---- | :----------------------------------------- |
| bytes | 路径中剩余的代币+费用元素 |