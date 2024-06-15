DAI/CHAI 用于许可的接口

## 函数

### permit

```solidity
  function permit(
    address holder,
    address spender,
    uint256 nonce,
    uint256 expiry,
    bool allowed,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```

通过持有者签名批准spender消费一些代币

这是DAI和CHAI使用的许可接口

#### 参数：

| 名称      | 类型    | 描述                                                                   |
| :-------- | :------ | :--------------------------------------------------------------------- |
| `holder`  | address | 代币持有者的地址，即代币所有者                                        |
| `spender` | address | 代币消费者的地址                                                      |
| `nonce`   | uint256 | 持有者的nonce，在每次调用permit时递增                                  |
| `expiry`  | uint256 | 许可不再有效的timestamp                                               |
| `allowed` | bool    | 设置批准金额的布尔值，为真表示类型(uint256).max，为假表示0             |
| `v`       | uint8   | 必须与`r`和`s`一起生成来自持有者的有效secp256k1签名                    |
| `r`       | bytes32 | 必须与`v`和`s`一起生成来自持有者的有效secp256k1签名                    |
| `s`       | bytes32 | 必须与`r`和`v`一起生成来自持有者的有效secp256k1签名                    |