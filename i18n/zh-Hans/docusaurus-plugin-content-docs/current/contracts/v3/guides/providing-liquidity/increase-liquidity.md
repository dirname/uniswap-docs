---
id: increase-liquidity
title: 增加流动性
sidebar_position: 5
---

## 在当前范围内增加流动性

确保在继续本节之前先完成 [初始指南](./setting-up-your-contract.md)

- 此示例假设合约已经拥有 NFT 的所有权。

- 我们无法使用 Uniswap v3 协议更改给定流动性的边界；`increaseLiquidity` 只能增加一个位置的流动性。
- 在生产环境中，应调整 `amount0Min` 和 `amount1Min` 来创建滑点保护。

```solidity
    /// @notice 在当前范围内增加流动性
    /// @dev 池子必须已经初始化才能添加流动性
    /// @param tokenId ERC721 代币的 id
    /// @param amount0 要添加的 token0 数量
    /// @param amount1 要添加的 token1 数量
    function increaseLiquidityCurrentRange(
        uint256 tokenId,
        uint256 amountAdd0,
        uint256 amountAdd1
    )
        external
        returns (
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        )
    {
        INonfungiblePositionManager.IncreaseLiquidityParams memory params =
            INonfungiblePositionManager.IncreaseLiquidityParams({
                tokenId: tokenId,
                amount0Desired: amountAdd0,
                amount1Desired: amountAdd1,
                amount0Min: 0,
                amount1Min: 0,
                deadline: block.timestamp
            });

        (liquidity, amount0, amount1) = nonfungiblePositionManager.increaseLiquidity(params);
    }
```