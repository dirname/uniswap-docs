一个构建池的合约必须实现此方法，以便将参数传递给池。

这样做是为了避免在池合约中使用构造函数参数，这会导致池的初始化代码哈希值
成为常量，从而允许池的CREATE2地址以较低成本在链上计算。

## 函数

### parameters

```solidity
  function parameters(
  ) external view returns (address factory, address token0, address token1, uint24 fee, int24 tickSpacing)
```

获取用于构建池的参数，在池创建期间暂时设置。

#### 返回值:

| 名称           | 类型     | 描述                                                                                     |
| :------------- | :------- | :--------------------------------------------------------------------------------------- |
| `factory `     | address  | 工厂地址                                                                                 |
| `token0`       | address  | 池中的第一个代币，按地址排序                                                             |
| `token1`       | address  | 池中的第二个代币，按地址排序                                                            |
| `fee `         | uint24   | 在池中每次交换收取的费用，以百万分之一的百分比表示                                       |
| `tickSpacing`  | int24    | 初始化ticks之间的最小数量                                                                |