允许从与 Uniswap v2 兼容的代币对迁移流动性到 Uniswap v3 池。

## 函数

### migrate

```solidity
  function migrate(
    struct IV3Migrator.MigrateParams params
  ) external
```

通过燃烧 v2 流动性并为 v3 铸造新位置，将流动性迁移到 v3。

通过 `amount{0,1}Min` 实施滑点保护，这应该是最大 v3 流动性量预期值的折扣，v2 流动性可以获得这些。对于迁移到范围外位置的特殊情况，`amount{0,1}Min` 可以设置为 0，强制该位置保持在范围外。

#### 参数：

| 名称      | 类型                                     | 描述                                                                                       |
| --------- | ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| `params` | struct IV3Migrator.MigrateParams | 迁移 v2 流动性所需的参数，在 calldata 中编码为 `MigrateParams` 结构体。 |