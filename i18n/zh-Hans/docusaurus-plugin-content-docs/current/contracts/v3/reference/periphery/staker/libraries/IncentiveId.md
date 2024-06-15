## 函数

### compute

```solidity
  function compute(
    struct IUniswapV3Staker.IncentiveKey key
  ) internal pure returns (bytes32 incentiveId)
```

计算质押激励的关键值

#### 参数：

| 名称   | 类型                                   | 描述                                                         |
| :----- | :------------------------------------- | :----------------------------------------------------------- |
| `key`  | struct IUniswapV3Staker.IncentiveKey | 用于计算激励标识符的组成部分                                |

#### 返回值：

| 名称            | 类型    | 描述                             |
| :-------------- | :------ | :------------------------------- |
| `incentiveId`   | bytes32 | 激励的标识符                     |