用于简化 ETH 存取款的功能

## 功能

### unwrapWETH9WithFee

```solidity
  function unwrapWETH9WithFee(
  ) external
```

将合约持有的 WETH9 解包为 ETH，并将其发送给接收者，其中介于 0（不包括）和 1（包括）之间的百分比会分配给手续费接收者

amountMinimum 参数可以防止恶意合约从用户那里窃取 WETH9。

### sweepTokenWithFee

```solidity
  function sweepTokenWithFee(
  ) external
```

将此合约持有的代币全额转移给接收者，其中介于 0（不包括）和 1（包括）之间的百分比会分配给手续费接收者

amountMinimum 参数可以防止恶意合约从用户那里窃取代币。