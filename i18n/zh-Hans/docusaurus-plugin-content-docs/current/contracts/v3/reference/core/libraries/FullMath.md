促进乘法和除法操作，这些操作可能会导致中间值溢出，但不会损失任何精度。

处理“幽灵溢出”，即允许乘法和除法操作中，中间值溢出256位的情况。

## 函数

### mulDiv

```solidity
  function mulDiv(
    uint256 a,
    uint256 b,
    uint256 denominator
  ) internal pure returns (uint256 result)
```

以全精度计算 floor(a×b÷denominator)。如果结果溢出 uint256 或 denominator == 0，则抛出异常。

感谢 Remco Bloemen 根据 MIT 许可证提供的代码 https://xn--2-umb.com/21/muldiv

#### 参数：

| 名称         | 类型       | 描述            |
| :----------- | :--------- | :-------------- |
| `a`          | uint256    | 被乘数          |
| `b`          | uint256    | 乘数            |
| `denominator`| uint256    | 除数            |

#### 返回值：

| 名称     | 类型       | 描述            |
| :------- | :--------- | :-------------- |
| `result` | uint256    | 256位的结果     |

### mulDivRoundingUp

```solidity
  function mulDivRoundingUp(
    uint256 a,
    uint256 b,
    uint256 denominator
  ) internal pure returns (uint256 result)
```

以全精度计算 ceil(a×b÷denominator)。如果结果溢出 uint256 或 denominator == 0，则抛出异常。

#### 参数：

| 名称         | 类型       | 描述            |
| :----------- | :--------- | :-------------- |
| `a`          | uint256    | 被乘数          |
| `b`          | uint256    | 乘数            |
| `denominator`| uint256    | 除数            |

#### 返回值：

| 名称     | 类型       | 描述            |
| :------- | :--------- | :-------------- |
| `result` | uint256    | 256位的结果     |