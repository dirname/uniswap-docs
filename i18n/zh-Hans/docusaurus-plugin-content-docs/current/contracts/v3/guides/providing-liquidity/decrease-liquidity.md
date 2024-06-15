---
id: decrease-liquidity
title: 减少流动性
sidebar_position: 4
---

确保在继续本节之前，您已经完成了[设置您的合约](./setting-up-your-contract.md)

在这里，我们减少我们仓位的流动性，但不完全撤出所有流动性。

- 此示例假设合约已经持有仓位 NFT，并且要求调用地址与将仓位 NFT 存入我们合约的地址相同。

- 在生产环境中，`amount0Min` 和 `amount1Min` 应进行调整以创建滑点保护。

## 减少流动性

```solidity
    /// @notice 函数用于将当前流动性减少一半。一个示例，展示如何调用在周边定义的 `decreaseLiquidity` 函数。
    /// @param tokenId ERC721 代币的 ID
    /// @return amount0 以 token0 形式收到的金额
    /// @return amount1 以 token1 形式返回的金额
    function decreaseLiquidityInHalf(uint256 tokenId) external returns (uint256 amount0, uint256 amount1) {
        // 调用者必须是 NFT 的所有者
        require(msg.sender == deposits[tokenId].owner, '不是所有者');
        // 获取 tokenId 的流动性数据
        uint128 liquidity = deposits[tokenId].liquidity;
        uint128 halfLiquidity = liquidity / 2;

        // amount0Min 和 amount1Min 是价格滑点检查
        // 如果燃烧后收到的金额不大于这些最小值，交易将失败
        INonfungiblePositionManager.DecreaseLiquidityParams memory params =
            INonfungiblePositionManager.DecreaseLiquidityParams({
                tokenId: tokenId,
                liquidity: halfLiquidity,
                amount0Min: 0,
                amount1Min: 0,
                deadline: block.timestamp
            });

        (amount0, amount1) = nonfungiblePositionManager.decreaseLiquidity(params);

        // 将流动性发送回所有者
        _sendToOwner(tokenId, amount0, amount1);
    }
```

## 向调用地址发送费用

这个内部辅助函数将任何以费用或仓位代币形式存在的代币发送给 NFT 的所有者。

在 `_sendToOwner` 中，我们将上一个函数中预先填充的应得费用金额作为参数传递给 `safeTransfer`，该函数将费用转移给 `owner`。

```solidity
    /// @notice 将资金转移到 NFT 的所有者
    /// @param tokenId ERC721 的 ID
    /// @param amount0 token0 的数量
    /// @param amount1 token1 的数量
    function _sendToOwner(
        uint256 tokenId,
        uint256 amount0,
        uint256 amount1
    ) internal {
        // 获取合约的所有者
        address owner = deposits[tokenId].owner;

        address token0 = deposits[tokenId].token0;
        address token1 = deposits[tokenId].token1;
        // 将收集到的费用发送给所有者
        TransferHelper.safeTransfer(token0, owner, amount0);
        TransferHelper.safeTransfer(token1, owner, amount1);
    }
```