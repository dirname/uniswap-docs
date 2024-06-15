仓位表示在某一较低和较高刻度边界之间的所有者地址的流动性。

仓位存储额外的状态信息，用于追踪该仓位应得的费用。

## 函数

### get

```solidity
  function get(
    mapping(bytes32 => struct Position.Info) self,
    address owner,
    int24 tickLower,
    int24 tickUpper
  ) internal view returns (struct Position.Info position)
```

给定所有者和仓位边界，返回仓位的Info结构体。

#### 参数：

| 名称        | 类型                                     | 描述                               |
| :---------- | :--------------------------------------- | :--------------------------------- |
| `self`      | mapping(bytes32 => struct Position.Info) | 包含所有用户仓位的映射             |
| `owner`     | address                                  | 仓位所有者的地址                   |
| `tickLower` | int24                                    | 仓位的较低刻度边界                 |
| `tickUpper` | int24                                    | 仓位的较高刻度边界                 |

#### 返回值：

| 名称       | 类型                 | 描述                                            |
| :--------- | :------------------- | :---------------------------------------------- |
| `position` | struct Position.Info | 给定所有者仓位的信息结构体                       |

### update

```solidity
  function update(
    struct Position.Info self,
    int128 liquidityDelta,
    uint256 feeGrowthInside0X128,
    uint256 feeGrowthInside1X128
  ) internal
```

将累积的费用记入用户的仓位。

#### 参数：

| 名称                   | 类型                 | 描述                                                                                     |
| :--------------------- | :------------------- | :--------------------------------------------------------------------------------------- |
| `self`                 | struct Position.Info | 包含所有用户仓位的映射                                                                   |
| `liquidityDelta`       | int128               | 由于仓位更新而导致的池流动性变化                                                         |
| `feeGrowthInside0X128` | uint256              | 在仓位的刻度边界内，每单位流动性的token0全时费用增长                                     |
| `feeGrowthInside1X128` | uint256              | 在仓位的刻度边界内，每单位流动性的token1全时费用增长                                     |