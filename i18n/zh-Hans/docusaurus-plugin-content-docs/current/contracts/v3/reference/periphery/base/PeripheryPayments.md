## 函数

### receive

```solidity
  function receive(
  ) external
```

### unwrapWETH9

```solidity
  function unwrapWETH9(
    uint256 amountMinimum,
    address recipient
  ) external
```

将合约的 WETH9 余额解包并作为 ETH 发送给接收者。

amountMinimum 参数防止恶意合约从用户那里窃取 WETH9。

#### 参数：

| 名称            | 类型    | 描述                           |
| :-------------- | :------ | :----------------------------- |
| `amountMinimum` | uint256 | 要解包的 WETH9 的最小金额     |
| `recipient`     | address | 接收 ETH 的地址                |

### sweepToken

```solidity
  function sweepToken(
    address token,
    uint256 amountMinimum,
    address recipient
  ) external
```

将此合约持有的代币全额转移给接收者。

amountMinimum 参数防止恶意合约从用户那里窃取代币。

#### 参数：

| 名称            | 类型    | 描述                                                                     |
| :-------------- | :------ | :----------------------------------------------------------------------- |
| `token`         | address | 将被转移到 `recipient` 的代币的合约地址                                 |
| `amountMinimum` | uint256 | 转移所需的代币最小金额                                                   |
| `recipient`     | address | 代币的目的地地址                                                         |

### refundETH

```solidity
  function refundETH(
  ) external
```

将此合约持有的任何 ETH 余额退还给 `msg.sender`

对于捆绑使用以太币的铸币或增加流动性，或者使用以太币作为输入金额的确切输出交换非常有用。

### pay

```solidity
  function pay(
    address token,
    address payer,
    address recipient,
    uint256 value
  ) internal
```

#### 参数：

| 名称        | 类型    | 描述                          |
| :---------- | :------ | :---------------------------- |
| `token`     | address | 要支付的代币                  |
| `payer`     | address | 必须支付的实体                |
| `recipient` | address | 将接收付款的实体              |
| `value`     | uint256 | 要支付的金额                  |