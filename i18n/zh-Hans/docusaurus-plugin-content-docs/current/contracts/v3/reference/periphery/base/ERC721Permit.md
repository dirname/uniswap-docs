支持通过签名批准的非同质化代币，即许可功能

## 函数

### \_getAndIncrementNonce

```solidity
  function _getAndIncrementNonce(
    uint256 tokenId
  ) internal virtual returns (uint256)
```

获取特定令牌ID的当前nonce值并递增它，返回原始值。

### 构造函数

```solidity
  function constructor(
    string memory name_,
    string memory symbol_,
    string memory version_
  ) internal
```

计算nameHash和versionHash。

### DOMAIN_SEPARATOR

```solidity
  function DOMAIN_SEPARATOR(
  ) public view override returns (bytes32)
```

在许可签名中使用的域分隔符。

#### 返回值：

| 类型    | 描述                                           |
| :------ | :--------------------------------------------- |
| bytes32 | 在许可签名编码中使用的域分隔符                 |

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

通过签名批准特定的令牌ID供spender使用。

#### 参数：

| 名称       | 类型    | 描述                                                                    |
| :--------- | :------ | :----------------------------------------------------------------------- |
| `spender`  | address | 正在被批准的账户                                                         |
| `tokenId`  | uint256 | 正在被批准用于花费的令牌ID                                               |
| `deadline` | uint256 | 必须在该时间戳之前挖掘调用，以使批准生效                                 |
| `v`        | uint8   | 必须与`r`和`s`一起产生持有者有效的secp256k1签名                         |
| `r`        | bytes32 | 必须与`v`和`s`一起产生持有者有效的secp256k1签名                         |
| `s`        | bytes32 | 必须与`r`和`v`一起产生持有者有效的secp256k1签名                         |