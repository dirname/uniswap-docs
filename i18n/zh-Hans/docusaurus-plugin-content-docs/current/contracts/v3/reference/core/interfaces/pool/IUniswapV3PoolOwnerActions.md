包含仅工厂所有者可以调用的池方法。

## 函数

### setFeeProtocol

```solidity
  function setFeeProtocol(
    uint8 feeProtocol0,
    uint8 feeProtocol1
  ) external
```

设置协议在费用中所占百分比的分母。

#### 参数：

| 名称             | 类型   | 描述                                     |
| :--------------- | :----- | :--------------------------------------- |
| `feeProtocol0`   | uint8  | 池中 token0 的新协议费用                 |
| `feeProtocol1`   | uint8  | 池中 token1 的新协议费用                 |

### collectProtocol

```solidity
  function collectProtocol(
    address recipient,
    uint128 amount0Requested,
    uint128 amount1Requested
  ) external returns (uint128 amount0, uint128 amount1)
```

收集池中累积的协议费用。

#### 参数：

| 名称               | 类型     | 描述                                                                 |
| :----------------- | :------- | :------------------------------------------------------------------- |
| `recipient`        | address  | 应该接收已收集的协议费用的地址                                       |
| `amount0Requested` | uint128  | 要发送的最大 token0 数量，可以为 0 以仅收集 token1 的费用              |
| `amount1Requested` | uint128  | 要发送的最大 token1 数量，可以为 0 以仅收集 token0 的费用              |

#### 返回值：

| 名称       | 类型     | 描述                                 |
| :--------- | :------- | :----------------------------------- |
| `amount0`  | uint128  | 在 token0 中收集的协议费用            |
| `amount1`  | uint128  | 在 token1 中收集的协议费用            |