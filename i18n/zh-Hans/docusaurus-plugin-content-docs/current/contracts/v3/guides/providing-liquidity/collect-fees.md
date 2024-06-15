---
id: collect-fees
title: 收取费用
sidebar_position: 3
---

## 收取费用

- 在继续本节之前，请确保已经完成[第一个指南](./setting-up-your-contract.md)。

- 对于这些流动性交互的每个示例，我们的合约必须拥有流动性头寸的 NFT。因此，在任何没有将 NFT 存款编码到函数中的示例中，假设合约已经持有该 NFT。

为了收取所有者头寸的费用，需要将 NFT 从调用地址转移，并将 NFT 的相关变量分配给我们函数内的本地变量，然后将这些变量传递给`nonfungiblePositionManager`以调用`collect`。

这个函数会收集所有费用，并将其发送给 NFT 的原始所有者，同时保持对头寸 NFT 的控制权。

```solidity
    /// @notice 收集与提供的流动性相关的费用
    /// @dev 合约在收取费用前必须持有 erc721 代币
    /// @param tokenId erc721 代币的 id
    /// @return amount0 在 token0 中收取的费用金额
    /// @return amount1 在 token1 中收取的费用金额
    function collectAllFees(uint256 tokenId) external returns (uint256 amount0, uint256 amount1) {
        // 调用者必须拥有 ERC721 头寸
        // 对 safeTransfer 的调用将触发 `onERC721Received`，该方法必须返回选择器，否则转账将失败
        nonfungiblePositionManager.safeTransferFrom(msg.sender, address(this), tokenId);

        // 将 amount0Max 和 amount1Max 设置为 uint256.max 来收集所有费用
        // 或者可以将 recipient 设置为 msg.sender 并避免在 `sendToOwner` 中的另一笔交易
        INonfungiblePositionManager.CollectParams memory params =
            INonfungiblePositionManager.CollectParams({
                tokenId: tokenId,
                recipient: address(this),
                amount0Max: type(uint128).max,
                amount1Max: type(uint128).max
            });

        (amount0, amount1) = nonfungiblePositionManager.collect(params);

        // 将收集到的费用送回给所有者
        _sendToOwner(tokenId, amount0, amount1);
    }
```

## 将费用发送到调用地址

这个内部辅助函数会以费用或头寸代币的形式，将任何代币发送给 NFT 的所有者。

在 `_sendToOwner` 中，我们将应得的费用金额作为参数传递给 `safeTransfer`，这会将费用转移到 `owner`。

```solidity
    /// @notice 将资金转移到 NFT 的所有者
    /// @param tokenId erc721 的 id
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