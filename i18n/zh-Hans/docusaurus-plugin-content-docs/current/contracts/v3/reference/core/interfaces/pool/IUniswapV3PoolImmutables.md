这些参数对池子是永久固定的，即，方法将始终返回相同的值。

## 函数

### factory

```solidity
  function factory(
  ) external view returns (address)
```

部署池子的合约，必须遵循IUniswapV3Factory接口

#### 返回值：

| 类型    | 描述      |
| :------ | :--------------- |
| address | 合约地址 |

### token0

```solidity
  function token0(
  ) external view returns (address)
```

池子中的两个代币之一，按地址排序

#### 返回值：

| 类型    | 描述            |
| :------ | :--------------------- |
| address | 代币合约地址 |

### token1

```solidity
  function token1(
  ) external view returns (address)
```

池子中的两个代币之一，按地址排序

#### 返回值：

| 类型    | 描述            |
| :------ | :--------------------- |
| address | 代币合约地址 |

### fee

```solidity
  function fee(
  ) external view returns (uint24)
```

池子的费用，以bip的万分之一表示，即1e-6

#### 返回值：

| 类型   | 描述 |
| :----- | :---------- |
| uint24 | 费用         |

### tickSpacing

```solidity
  function tickSpacing(
  ) external view returns (int24)
```

池子的tick间距

tick只能以这个值的倍数使用，最小为1且总是正数
例如：tickSpacing为3意味着每3个tick可以初始化一次tick，即...，-6，-3，0，3，6，...
此值为int24类型以避免类型转换，尽管它总是正数。

#### 返回值：

| 类型  | 描述  |
| :---- | :----------- |
| int24 | tick间距 |

### maxLiquidityPerTick

```solidity
  function maxLiquidityPerTick(
  ) external view returns (uint128)
```

在范围内任何tick可以使用的流动性最大量

此参数在每个tick上强制执行，以防止在任何时刻流动性溢出uint128，并且还防止使用范围外的流动性来阻止向池子添加范围内的流动性

#### 返回值：

| 类型    | 描述                      |
| :------ | :------------------------------- |
| uint128 | 每tick流动性最大量 |