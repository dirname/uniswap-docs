在路由中调用任何符合EIP-2612标准的代币的permit功能的特性。

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
  ) external
```

允许此合约从`msg.sender`处花费指定的代币。

`owner`始终是`msg.sender`，而`spender`始终是`address(this)`。

#### 参数：

| 名称       | 类型    | 描述                                                                     |
| :--------- | :------ | :------------------------------------------------------------------------------ |
| `token`    | address | 被花费的代币的地址                                                  |
| `value`    | uint256 | 可以花费的代币数量                                           |
| `deadline` | uint256 | 时间戳，当前区块时间必须小于或等于这个时间戳 |
| `v`        | uint8   | 必须与`r`和`s`一起产生持有者有效的secp256k1签名   |
| `r`        | bytes32 | 必须与`v`和`s`一起产生持有者有效的secp256k1签名   |
| `s`        | bytes32 | 必须与`r`和`v`一起产生持有者有效的secp256k1签名   |

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

允许此合约从`msg.sender`处花费指定的代币。

`owner`始终是`msg.sender`，而`spender`始终是`address(this)`。
可以代替#selfPermit使用，以防止由于对#selfPermit的抢先调用导致的调用失败。

#### 参数：

| 名称       | 类型    | 描述                                                                     |
| :--------- | :------ | :------------------------------------------------------------------------------ |
| `token`    | address | 被花费的代币的地址                                                  |
| `value`    | uint256 | 可以花费的代币数量                                           |
| `deadline` | uint256 | 时间戳，当前区块时间必须小于或等于这个时间戳 |
| `v`        | uint8   | 必须与`r`和`s`一起产生持有者有效的secp256k1签名   |
| `r`        | bytes32 | 必须与`v`和`s`一起产生持有者有效的secp256k1签名   |
| `s`        | bytes32 | 必须与`r`和`v`一起产生持有者有效的secp256k1签名   |

### selfPermitAllowed

```solidity
  function selfPermitAllowed(
    address token,
    uint256 nonce,
    uint256 expiry,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```

允许此合约花费发送者的代币，用于具有`allowed`参数的许可签名。

`owner`始终是`msg.sender`，而`spender`始终是`address(this)`

#### 参数：

| 名称     | 类型    | 描述                                                                   |
| :------- | :------ | :---------------------------------------------------------------------------- |
| `token`  | address | 被花费的代币的地址                                                |
| `nonce`  | uint256 | 持有者的当前nonce                                                |
| `expiry` | uint256 | 许可不再有效的时刻                                       |
| `v`      | uint8   | 必须与`r`和`s`一起产生持有者有效的secp256k1签名 |
| `r`      | bytes32 | 必须与`v`和`s`一起产生持有者有效的secp256k1签名 |
| `s`      | bytes32 | 必须与`r`和`v`一起产生持有者有效的secp256k1签名 |

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

允许此合约花费发送者的代币，用于具有`allowed`参数的许可签名。

`owner`始终是`msg.sender`，而`spender`始终是`address(this)`
可以代替#selfPermitAllowed使用，以防止由于对#selfPermitAllowed的抢先调用导致的调用失败。

#### 参数：

| 名称     | 类型    | 描述                                                                   |
| :------- | :------ | :---------------------------------------------------------------------------- |
| `token`  | address | 被花费的代币的地址                                                |
| `nonce`  | uint256 | 持有者的当前nonce                                                |
| `expiry` | uint256 | 许可不再有效的时刻                                       |
| `v`      | uint8   | 必须与`r`和`s`一起产生持有者有效的secp256k1签名 |
| `r`      | bytes32 | 必须与`v`和`s`一起产生持有者有效的secp256k1签名 |
| `s`      | bytes32 | 必须与`r`和`v`一起产生持有者有效的secp256k1签名 |