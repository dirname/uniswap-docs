在 Uniswap V3 中用于安全管理流动性的内部函数。

## 参数结构体

### AddLiquidityParams

```solidity
    struct AddLiquidityParams {
        address token0; // 第一个代币地址
        address token1; // 第二个代币地址
        uint24 fee;     // 手续费等级
        address recipient; // 接收者地址
        int24 tickLower;   // 下限tick
        int24 tickUpper;   // 上限tick
        uint256 amount0Desired; // 希望添加的token0数量
        uint256 amount1Desired; // 希望添加的token1数量
        uint256 amount0Min;     // 最小接受的token0数量
        uint256 amount1Min;     // 最小接受的token1数量
    }
```

## 函数

### uniswapV3MintCallback

```solidity
  function uniswapV3MintCallback(
    uint256 amount0Owed,
    uint256 amount1Owed,
    bytes data
  ) external
```

在从 IUniswapV3Pool#mint 向仓位注入流动性后，调用至 `msg.sender`。

在实现中，你必须支付因注入流动性而欠池子的代币。
调用此方法的实体必须检查是否为由标准 UniswapV3Factory 部署的 UniswapV3Pool。

#### 参数：

| 名称           | 类型    | 描述                                                                     |
| :------------- | :------ | :----------------------------------------------------------------------- |
| `amount0Owed`  | uint256 | 池子因注入流动性而应得的token0的数量                                   |
| `amount1Owed`  | uint256 | 池子因注入流动性而应得的token1的数量                                   |
| `data`         | bytes   | 通过 IUniswapV3PoolActions#mint 调用者传递的任何数据                     |

### addLiquidity

```solidity
  function addLiquidity(
    AddLiquidityParams memory params
  ) internal returns (uint128 liquidity, uint256 amount0, uint256 amount1, contract IUniswapV3Pool pool)
```

向已初始化的池子添加流动性。