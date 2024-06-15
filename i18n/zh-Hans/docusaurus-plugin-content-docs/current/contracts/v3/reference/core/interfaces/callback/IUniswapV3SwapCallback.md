任何调用 IUniswapV3PoolActions#swap 的合约必须实现此接口。

## 函数

### uniswapV3SwapCallback

```solidity
  function uniswapV3SwapCallback(
    int256 amount0Delta,
    int256 amount1Delta,
    bytes data
  ) external
```

在通过 IUniswapV3Pool#swap 执行交换后，调用至 `msg.sender`。

在实现中，你必须支付因交换而欠池的代币。
必须检查调用此方法的实体是由规范的 UniswapV3Factory 部署的 UniswapV3Pool。
如果未交换代币，amount0Delta 和 amount1Delta 都可以为 0。

#### 参数：

| 名称           | 类型   | 描述                                                                                                                                                                             |
| :------------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount0Delta` | int256 | 交换结束时池发送（负数）或必须接收（正数）的 token0 数量。如果是正数，回调必须向池发送该数量的 token0。 |
| `amount1Delta` | int256 | 交换结束时池发送（负数）或必须接收（正数）的 token1 数量。如果是正数，回调必须向池发送该数量的 token1。 |
| `data`         | bytes  | 调用者通过 IUniswapV3PoolActions#swap 调用传递的任何数据。                                                                                                          |