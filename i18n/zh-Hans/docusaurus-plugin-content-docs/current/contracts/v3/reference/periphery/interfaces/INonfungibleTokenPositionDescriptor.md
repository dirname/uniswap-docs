## 函数

### tokenURI

```solidity
  function tokenURI(
    contract INonfungiblePositionManager positionManager,
    uint256 tokenId
  ) external returns (string)
```

为位置管理器的特定令牌ID生成描述其的URI。

请注意，此URI可能是一个data: URI，其中直接内联了JSON内容。

#### 参数：

| 名称              | 类型                                 | 描述                                                                    |
| :---------------- | :----------------------------------- | :----------------------------------------------------------------------------- |
| `positionManager` | contract INonfungiblePositionManager | 要描述其令牌的位置管理器                                   |
| `tokenId`         | uint256                              | 要生成描述的令牌ID，该ID可能无效 |

#### 返回值：

| 类型   | 描述                          |
| :----- | :----------------------------------- |
| string | 符合ERC721标准的元数据的URI |

## 事件

### UpdateTokenRatioPriority

```solidity
  event UpdateTokenRatioPriority(
    address token,
    int256 priority
  )
```

当在显示的价格比率中给定令牌一个新的优先级顺序时触发。

#### 参数：

| 名称       | 类型    | 描述                                                           |
| :--------- | :------ | :-------------------------------------------------------------------- |
| `token`    | address | 正在被赋予优先级顺序的令牌                                  |
| `priority` | int256  | 表示比率中的优先级 - 较大的整数获得分子优先级 |