包含在 Uniswap V3 中使用的 ERC20 接口的子集。

## 函数

### balanceOf

```solidity
  function balanceOf(
    address account
  ) external view returns (uint256)
```

返回代币余额

#### 参数：

| 名称       | 类型    | 描述                                                                     |
| :--------- | :------ | :----------------------------------------------------------------------- |
| `account`  | address | 用于查找其持有代币数量（即余额）的帐户                                  |

#### 返回值：

| 类型    | 描述                           |
| :------ | :----------------------------- |
| uint256 | 帐户持有的代币数量             |

### transfer

```solidity
  function transfer(
    address recipient,
    uint256 amount
  ) external returns (bool)
```

从 `msg.sender` 向接收者转移指定金额的代币

#### 参数：

| 名称        | 类型    | 描述                                                      |
| :---------- | :------ | :-------------------------------------------------------- |
| `recipient` | address | 将接收转移金额的帐户                                      |
| `amount`    | uint256 | 发送方发送给接收者的代币数量                               |

#### 返回值：

| 类型 | 描述                                          |
| :--- | :-------------------------------------------- |
| bool | 成功转移返回 true，失败转移返回 false            |

### allowance

```solidity
  function allowance(
    address owner,
    address spender
  ) external view returns (uint256)
```

返回所有者授予消耗者当前的允许额度

#### 参数：

| 名称      | 类型    | 描述                           |
| :-------- | :------ | :----------------------------- |
| `owner`   | address | 代币所有者的帐户               |
| `spender` | address | 代币消耗者的帐户               |

#### 返回值：

| 类型    | 描述                                     |
| :------ | :--------------------------------------- |
| uint256 | `owner` 授予 `spender` 的当前允许额度     |

### approve

```solidity
  function approve(
    address spender,
    uint256 amount
  ) external returns (bool)
```

将 `msg.sender` 对 `spender` 的允许额度设置为 `amount` 的值

#### 参数：

| 名称      | 类型    | 描述                                                                     |
| :-------- | :------ | :----------------------------------------------------------------------- |
| `spender` | address | 将被允许使用所有者一定数量代币的帐户                                    |
| `amount`  | uint256 | `spender` 被允许使用的代币数量                                           |

#### 返回值：

| 类型 | 描述                                            |
| :--- | :---------------------------------------------- |
| bool | 成功批准返回 true，未成功批准返回 false           |

### transferFrom

```solidity
  function transferFrom(
    address sender,
    address recipient,
    uint256 amount
  ) external returns (bool)
```

根据 `msg.sender` 的允许额度，从 `sender` 向 `recipient` 转移 `amount` 个代币

#### 参数：

| 名称        | 类型    | 描述                                                         |
| :---------- | :------ | :----------------------------------------------------------- |
| `sender`    | address | 将发起转移的帐户                                             |
| `recipient` | address | 转移的接收者                                                 |
| `amount`    | uint256 | 转移的数量                                                   |

#### 返回值：

| 类型 | 描述                                            |
| :--- | :---------------------------------------------- |
| bool | 成功转移返回 true，失败转移返回 false             |

## 事件

### Transfer

```solidity
  event Transfer(
    address from,
    address to,
    uint256 value
  )
```

当通过 `#transfer` 或 `#transferFrom` 方法从一个地址向另一个地址转移代币时触发的事件。

#### 参数：

| 名称    | 类型    | 描述                                                             |
| :------ | :------ | :----------------------------------------------------------------- |
| `from`  | address | 发送代币的帐户，即余额减少的帐户                                 |
| `to`    | address | 接收代币的帐户，即余额增加的帐户                                 |
| `value` | uint256 | 转移的代币数量                                                   |

### Approval

```solidity
  event Approval(
    address owner,
    address spender,
    uint256 value
  )
```

当特定所有者代币的消耗者允许额度发生变化时触发的事件。

#### 参数：

| 名称      | 类型    | 描述                                               |
| :-------- | :------ | :-------------------------------------------------- |
| `owner`   | address | 批准其代币被消耗的帐户                             |
| `spender` | address | 其消耗允许额度被修改的帐户                         |
| `value`   | uint256 | 从所有者到消耗者的新的允许额度                     |