生成包含 JSON 元数据字符串的数据 URI 的字符串

## 函数

### 构造函数

```solidity
  function constructor(
  ) public
```

### tokenURI

```solidity
  function tokenURI(
    contract INonfungiblePositionManager positionManager,
    uint256 tokenId
  ) external returns (string)
```

为特定位置管理器的令牌 ID 生成描述其的 URI

注意，此 URI 可能是带有直接内联的 JSON 内容的数据：URI

#### 参数：

| 名称               | 类型                                   | 描述                                                                      |
| ------------------ | -------------------------------------- | ------------------------------------------------------------------------- |
| `positionManager`  | contract INonfungiblePositionManager   | 要描述其令牌的位置管理器                                                  |
| `tokenId`          | uint256                                | 要生成描述的令牌的 ID，该 ID 可能无效                                       |

#### 返回值：

| 名称 | 类型                                   | 描述                                 |
| ---- | -------------------------------------- | ------------------------------------ |
| `The`| contract INonfungiblePositionManager   | ERC721 兼容元数据的 URI              |

### flipRatio

```solidity
  function flipRatio(
  ) public returns (bool)
```

### tokenRatioPriority

```solidity
  function tokenRatioPriority(
  ) public returns (int256)
```