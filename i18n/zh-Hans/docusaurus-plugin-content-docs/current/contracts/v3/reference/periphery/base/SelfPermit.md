在路径中调用任何符合EIP-2612标准的代币的permit功能的功能。

这些函数预期将嵌入到多调用(multicalls)中，以允许外部拥有账户(EOA)在一个交易中批准合约并调用需要批准的函数。

## 函数

### selfPermit

```solidity
  function selfPermit(
    address token,
    uint256 value,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) public
```

允许此合约从`msg.sender`花费给定的代币。

`owner`总是`msg.sender`，而`spender`总是`address(this)`。

#### 参数：

| 名称       | 类型    | 描述                                                                     |
| :--------- | :------ | :------------------------------------------------------------------------------ |
| `token`    | address | 被花费的代币地址                                                  |
| `value`    | uint256 | 可以被花费的代币数量                                           |
| `deadline` | uint256 | 时间戳，当前区块时间必须小于或等于这个时间戳 |
| `v`        | uint8   | 必须与`r`和`s`一起产生持有者的有效secp256k1签名   |
| `r`        | bytes32 | 必须与`v`和`s`一起产生持有者的有效secp256k1签名   |
| `s`        | bytes32 | 必须与`r`和`v`一起产生持有者的有效secp256k1签名   |

### selfPermitIfNecessary

```solidity
  function selfPermitIfNecessary(
    address token,
    uint256 value,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```

允许此合约从`msg.sender`花费给定的代币。

`owner`总是`msg.sender`，而`spender`总是`address(this)`。可以替代#selfPermit使用，以防止因对#selfPermit的抢先调用导致的失败。

#### 参数：

| 名称       | 类型    | 描述                                                                     |
| :--------- | :------ | :------------------------------------------------------------------------------ |
| `token`    | address | 被花费的代币地址                                                  |
| `value`    | uint256 | 可以被花费的代币数量                                           |
| `deadline` | uint256 | 时间戳，当前区块时间必须小于或等于这个时间戳 |
| `v`        | uint8   | 必须与`r`和`s`一起产生持有者的有效secp256k1签名   |
| `r`        | bytes32 | 必须与`v`和`s`一起产生持有者的有效secp256k1签名   |
| `s`        | bytes32 | 必须与`r`和`v`一起产生持有者的有效secp256k1签名   |

### selfPermitAllowed

```solidity
  function selfPermitAllowed(
    address token,
    uint256 nonce,
    uint256 expiry,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) public
```

对于具有`allowed`参数的许可签名，允许此合约花费发送者代币。

`owner`总是`msg.sender`，而`spender`总是`address(this)`。

#### 参数：

| 名称     | 类型    | 描述                                                                   |
| :------- | :------ | :---------------------------------------------------------------------------- |
| `token`  | address | 被花费的代币地址                                                |
| `nonce`  | uint256 | 持有者的当前nonce值                                                |
| `expiry` | uint256 | 许可不再有效的时刻的时间戳                          |
| `v`      | uint8   | 必须与`r`和`s`一起产生持有者的有效secp256k1签名 |
| `r`      | bytes32 | 必须与`v`和`s`一起产生持有者的有效secp256k1签名 |
| `s`      | bytes32 | 必须与`r`和`v`一起产生持有者的有效secp256k1签名 |

### selfPermitAllowedIfNecessary

```solidity
  function selfPermitAllowedIfNecessary(
    address token,
    uint256 nonce,
    uint256 expiry,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```

对于具有`allowed`参数的许可签名，允许此合约花费发送者代币。

`owner`总是`msg.sender`，而`spender`总是`address(this)`。可以替代#selfPermitAllowed使用，以防止因对#selfPermitAllowed的抢先调用导致的失败。

#### 参数：

| 名称     | 类型    | 描述                                                                   |
| :------- | :------ | :---------------------------------------------------------------------------- |
| `token`  | address | 被花费的代币地址                                                |
| `nonce`  | uint256 | 持有者的当前nonce值                                                |
| `expiry` | uint256 | 许可不再有效的时刻的时间戳                          |
| `v`      | uint8   | 必须与`r`和`s`一起产生持有者的有效secp256k1签名 |
| `r`      | bytes32 | 必须与`v`和`s`一起产生持有者的有效secp256k1签名 |
| `s`      | bytes32 | 必须与`r`和`v`一起产生持有者的有效secp256k1签名 |