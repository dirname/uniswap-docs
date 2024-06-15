任何调用 IUniswapV3PoolActions#flash 的合约必须实现此接口。

## 函数

### uniswapV3FlashCallback

```solidity
  function uniswapV3FlashCallback(
    uint256 fee0,
    uint256 fee1,
    bytes data
  ) external
```

在从 IUniswapV3Pool#flash 转账给接收者后，会调用到 `msg.sender`。

在实现中，你必须向池子偿还通过 flash 发送的代币加上计算出的费用。
调用此方法的调用者必须是通过标准 UniswapV3Factory 部署的 UniswapV3Pool。

#### 参数：

| 名称   | 类型    | 描述                                                                     |
| :----- | :------ | :----------------------------------------------------------------------- |
| `fee0` | uint256 | 到 flash 结束时，池子应得的 token0 的费用金额                           |
| `fee1` | uint256 | 到 flash 结束时，池子应得的 token1 的费用金额                           |
| `data` | bytes   | 调用者通过 IUniswapV3PoolActions#flash 调用传递的任何数据                 |