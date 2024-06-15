任何调用 IUniswapV3PoolActions#mint 的合约必须实现此接口。

## 函数

### uniswapV3MintCallback

```solidity
  function uniswapV3MintCallback(
    uint256 amount0Owed,
    uint256 amount1Owed,
    bytes data
  ) external
```

在从 IUniswapV3Pool#mint 向仓位注入流动性后，被调用到 `msg.sender`。

在实现中，你必须为注入的流动性支付给池子应得的代币。
调用此方法的对象必须是通过标准 UniswapV3Factory 部署的 UniswapV3Pool。

#### 参数：

| 名称         | 类型    | 描述                                                                         |
| :----------- | :------ | :--------------------------------------------------------------------------- |
| `amount0Owed` | uint256 | 池子因注入流动性而应得的 token0 的数量                                       |
| `amount1Owed` | uint256 | 池子因注入流动性而应得的 token1 的数量                                       |
| `data`       | bytes   | 调用者通过 IUniswapV3PoolActions#mint 调用传递的任意数据                     |