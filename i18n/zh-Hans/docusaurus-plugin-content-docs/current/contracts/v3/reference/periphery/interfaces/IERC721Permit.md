ERC721 的扩展，包括基于签名的批准的许可功能。

## 函数

### PERMIT_TYPEHASH

```solidity
  function PERMIT_TYPEHASH(
  ) external returns (bytes32)
```

在许可签名中使用的许可类型哈希。

#### 返回值：

| 类型    | 描述             |
| :------ | :---------------------- |
| bytes32 | 许可的类型哈希 |

### DOMAIN_SEPARATOR

```solidity
  function DOMAIN_SEPARATOR(
  ) external returns (bytes32)
```

在许可签名中使用的域分隔符。

#### 返回值：

| 名称  | 类型 | 描述                                           |
| :---- | :--- | :---------------------------------------------------- |
| `The` |      | 在许可签名编码中使用的域分隔符 |

### permit

```solidity
  function permit(
    address spender,
    uint256 tokenId,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```

通过签名批准特定的代币ID由spender消费。

#### 参数：

| 名称       | 类型    | 描述                                                                    |
| :--------- | :------ | :----------------------------------------------------------------------------- |
| `spender`  | address | 正在被批准的账户                                             |
| `tokenId`  | uint256 | 正在被批准用于消费的代币的ID                        |
| `deadline` | uint256 | 必须在该时间戳之前挖掘调用以使批准生效 |
| `v`        | uint8   | 必须与 `r` 和 `s` 一起产生持有者的有效secp256k1签名  |
| `r`        | bytes32 | 必须与 `v` 和 `s` 一起产生持有者的有效secp256k1签名  |
| `s`        | bytes32 | 必须与 `r` 和 `v` 一起产生持有者的有效secp256k1签名  |