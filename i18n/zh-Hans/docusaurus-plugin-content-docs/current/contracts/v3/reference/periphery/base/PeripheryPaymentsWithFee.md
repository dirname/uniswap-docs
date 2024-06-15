## 函数

### unwrapWETH9WithFee

```solidity
  function unwrapWETH9WithFee(
        uint256 amountMinimum,
        address recipient,
        uint256 feeBips,
        address feeRecipient
  ) public
```

将合约的 WETH9 余额解包并以 ETH 的形式发送给收件人，其中一部分（介于 0（不包括）到 1（包括）之间）将支付给手续费接收者。

amountMinimum 参数可以防止恶意合约从用户那里窃取 WETH9。

### sweepTokenWithFee

```solidity
  function sweepTokenWithFee(
        address token,
        uint256 amountMinimum,
        address recipient,
        uint256 feeBips,
        address feeRecipient
  ) public
```

将此合约持有的代币全额转移到收件人，其中一部分（介于 0（不包括）和 1（包括）之间）将支付给手续费接收者。

amountMinimum 参数可以防止恶意合约从用户那里窃取代币。