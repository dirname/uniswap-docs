## 函数

### safeTransferFrom

```solidity
  function safeTransferFrom(
    address token,
    address from,
    address to,
    uint256 value
  ) internal
```

从目标地址向指定目的地转移代币
如果转移失败，将抛出'STF'错误

#### 参数：

| 名称    | 类型    | 描述                                                       |
| :------ | :------ | :---------------------------------------------------------------- |
| `token` | address | 要转移的代币的合约地址               |
| `from`  | address | 代币将从中转移的原始地址 |
| `to`    | address | 转移的目的地地址                           |
| `value` | uint256 | 要转移的数量                                      |

### safeTransfer

```solidity
  function safeTransfer(
    address token,
    address to,
    uint256 value
  ) internal
```

从msg.sender向收件人转移代币

如果转移失败，将抛出ST错误

#### 参数：

| 名称    | 类型    | 描述                                                 |
| :------ | :------ | :---------------------------------------------------------- |
| `token` | address | 将要转移的代币的合约地址 |
| `to`    | address | 转移的接收者                               |
| `value` | uint256 | 转移的价值                                   |

### safeApprove

```solidity
  function safeApprove(
    address token,
    address to,
    uint256 value
  ) internal
```

批准指定的合约在给定的代币中花费给定的额度

如果转移失败，将抛出'SA'错误

#### 参数：

| 名称    | 类型    | 描述                                                       |
| :------ | :------ | :---------------------------------------------------------------- |
| `token` | address | 要批准的代币的合约地址                  |
| `to`    | address | 批准的目标                                        |
| `value` | uint256 | 目标将被允许花费的给定代币的数量 |

### safeTransferETH

```solidity
  function safeTransferETH(
    address to,
    uint256 value
  ) internal
```

向收件人地址转移ETH

如果失败，将抛出`STE`错误

#### 参数：

| 名称    | 类型    | 描述                     |
| :------ | :------ | :------------------------------ |
| `to`    | address | 转移的目的地                |
| `value` | uint256 | 要转移的价值     |