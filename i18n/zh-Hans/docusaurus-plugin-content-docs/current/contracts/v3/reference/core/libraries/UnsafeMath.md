包含执行常见数学函数的方法，但不执行任何溢出或下溢检查。

## 函数

### divRoundingUp

```solidity
  function divRoundingUp(
    uint256 x,
    uint256 y
  ) internal pure returns (uint256 z)
```

返回 ceil(x / y)

如果 y == 0 则引发异常

#### 参数：

| 名称 | 类型    | 描述         |
| :--- | :------ | :----------- |
| `x`  | uint256 | 被除数       |
| `y`  | uint256 | 除数         |

#### 返回值：

| 名称 | 类型    | 描述                 |
| :--- | :------ | :------------------- |
| `z`  | uint256 | 商，即 ceil(x / y)   |