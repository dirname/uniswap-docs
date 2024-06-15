包含用于与不一致返回 true/false 的 ERC20 代币交互的辅助方法

## 函数

### safeTransfer

```solidity
  function safeTransfer(
    address token,
    address to,
    uint256 value
  ) internal
```

将代币从 msg.sender 转移到接收者

在代币合约上调用 transfer，如果转移失败则使用 TF 错误

#### 参数：

| 名称    | 类型    | 描述                                                 |
| :------ | :------ | :--------------------------------------------------- |
| `token` | address | 将要转移的代币的合约地址                             |
| `to`    | address | 转移的接收者                                         |
| `value` | uint256 | 转移的价值                                           |