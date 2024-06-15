提供与 V3 池预言机集成的功能。

## 功能

### consult

```solidity
  function consult(
    address pool,
    uint32 period
  ) internal view returns (int24 arithmeticMeanTick, uint128 harmonicMeanLiquidity)
```

计算给定的 Uniswap V3 池的加权平均刻度和流动性。

#### 参数：

| 名称     | 类型    | 描述                                                              |
| :------- | :------ | :---------------------------------------------------------------- |
| `pool`   | address | 我们想要观察的 Uniswap V3 池的地址                               |
| `period` | uint32  | 开始计算时间加权平均值之前的秒数                                |

#### 返回值：

| 名称                      | 类型    | 描述                                                                        |
| :------------------------ | :------ | :--------------------------------------------------------------------------------- |
| `arithmeticMeanTick`      | int24   | 从 (block.timestamp - secondsAgo) 到 block.timestamp 的算术平均刻度        |
| `harmonicMeanLiquidity`   | uint128 | 从 (block.timestamp - secondsAgo) 到 block.timestamp 的调和平均流动性 |


### getQuoteAtTick

```solidity
  function getQuoteAtTick(
    int24 tick,
    uint128 baseAmount,
    address baseToken,
    address quoteToken
  ) internal pure returns (uint256 quoteAmount)
```

给定一个刻度和代币数量，计算在交换中收到的代币数量。

#### 参数：

| 名称         | 类型    | 描述                                                             |
| :----------- | :------ | :----------------------------------------------------------------- |
| `tick`       | int24   | 用于计算报价的刻度值                                             |
| `baseAmount` | uint128 | 要转换的代币数量                                                 |
| `baseToken`  | address | 用作 baseAmount 计价单位的 ERC20 代币合约地址                     |
| `quoteToken` | address | 用作 quoteAmount 计价单位的 ERC20 代币合约地址                    |

#### 返回值：

| 名称          | 类型    | 描述                                               |
| :------------ | :------ | :-------------------------------------------------------- |
| `quoteAmount` | uint256 | 以 baseToken 的 baseAmount 兑换得到的 quoteToken 数量 |