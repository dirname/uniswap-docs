用于方便存取 ETH 的函数

## 函数

### unwrapWETH9

```solidity
  function unwrapWETH9(
    uint256 amountMinimum,
    address recipient
  ) external
```

将合约中的 WETH9 平衡解包并以 ETH 形式发送给接收者。

amountMinimum 参数可防止恶意合约从用户处窃取 WETH9。

#### 参数：

| 名称            | 类型    | 描述                           |
| :-------------- | :------ | :------------------------------------ |
| `amountMinimum` | uint256 | 要解包的 WETH9 最小金额 |
| `recipient`     | address | 接收 ETH 的地址             |

### refundETH

```solidity
  function refundETH(
  ) external
```

将此合约持有的任何 ETH 余额退还给 `msg.sender`

对于捆绑使用以太币的铸造或增加流动性，或者使用以太币作为输入金额的确切输出交换非常有用。

### sweepToken

```solidity
  function sweepToken(
    address token,
    uint256 amountMinimum,
    address recipient
  ) external
```

将此合约持有的代币全额转移到接收者

amountMinimum 参数可防止恶意合约从用户处窃取代币

#### 参数：

| 名称            | 类型    | 描述                                                                |
| :-------------- | :------ | :------------------------------------------------------------------------- |
| `token`         | address | 将被转移至 `recipient` 的代币的合约地址 |
| `amountMinimum` | uint256 | 转移所需的代币最小金额                        |
| `recipient`     | address | 代币的目标地址                                       |