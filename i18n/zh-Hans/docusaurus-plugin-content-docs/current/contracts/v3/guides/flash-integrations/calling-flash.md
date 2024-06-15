---
id: calling-flash
title: 调用 Flash
sidebar_position: 2
---

## 参数结构体

为了调用 `flash`，我们需要初始调用的闪贷参数以及我们想要传递给回调函数的任何参数。

`FlashParams` 结构体将包含我们希望从池中提取的代币地址和数量，以及三个费用等级，用于确定我们正在从哪个池中提取以及我们将与之进行交易的池。

```solidity
  struct FlashParams {
        address token0;
        address token1;
        uint24 fee1;
        uint256 amount0;
        uint256 amount1;
        uint24 fee2;
        uint24 fee3;
    }
```

`FlashCallbackData` 结构体将包含我们想要发送到回调的数据。这包括 `poolKey`，它表示已排序的代币和匹配的费用等级，由 [**PoolAddress**](https://github.com/Uniswap/uniswap-v3-periphery/blob/main/contracts/libraries/PoolAddress.sol) 库返回。

```solidity
    struct FlashCallbackData {
        uint256 amount0;
        uint256 amount1;
        address payer;
        PoolAddress.PoolKey poolKey;
        uint24 poolFee2;
        uint24 poolFee3;
    }
```

## 池键

现在我们开始定义函数，通过从 `Flashparams`（我们在内存中声明为 `params`）分配相关参数到我们的变量 `poolKey`。

```solidity
    function initFlash(FlashParams memory params) external {
        PoolAddress.PoolKey memory poolKey =
            PoolAddress.PoolKey({token0: params.token0, token1: params.token1, fee: params.fee1});
    }
```

接下来，我们将 `pool` 声明为类型 [**IUniswapV3Pool**]，这使我们能够在我们想要的池合约上调用 `flash`。

```solidity
        IUniswapV3Pool pool = IUniswapV3Pool(PoolAddress.computeAddress(factory, poolKey));
```

## 调用 Flash

最后，我们在之前声明的 `pool` 上调用 `flash`。在最后一个参数中，我们使用 `abi.encode` 对 `FlashCallbackData` 进行编码，这将在回调中被解码并用于指导交易的下一步。

```solidity
        pool.flash(
            address(this),
            params.amount0,
            params.amount1,
            abi.encode(
                FlashCallbackData({
                    amount0: params.amount0,
                    amount1: params.amount1,
                    payer: msg.sender,
                    poolKey: poolKey,
                    poolFee2: params.fee2,
                    poolFee3: params.fee3
                })
            )
        );
```

完整的函数：

```solidity
    //fee1 是初始借款的池的费用
    //fee2 是第一个套利池的费用
    //fee3 是第二个套利池的费用
    struct FlashParams {
        address token0;
        address token1;
        uint24 fee1;
        uint256 amount0;
        uint256 amount1;
        uint24 fee2;
        uint24 fee3;
    }

    // fee2 和 fee3 是与 token0 和 token1 的其他两个池相关的另外两个费用
    struct FlashCallbackData {
        uint256 amount0;
        uint256 amount1;
        address payer;
        PoolAddress.PoolKey poolKey;
        uint24 poolFee2;
        uint24 poolFee3;
    }

function initFlash(FlashParams memory params) external {
        PoolAddress.PoolKey memory poolKey =
            PoolAddress.PoolKey({token0: params.token0, token1: params.token1, fee: params.fee1});
        IUniswapV3Pool pool = IUniswapV3Pool(PoolAddress.computeAddress(factory, poolKey));
        pool.flash(
            address(this),
            params.amount0,
            params.amount1,
            abi.encode(
                FlashCallbackData({
                    amount0: params.amount0,
                    amount1: params.amount1,
                    payer: msg.sender,
                    poolKey: poolKey,
                    poolFee2: params.fee2,
                    poolFee3: params.fee3
                })
            )
        );
    }
```