## 函数

### getPopulatedTicksInWord

```solidity
  function getPopulatedTicksInWord(
    address pool,
    int16 tickBitmapIndex
  ) public returns (struct ITickLens.PopulatedTick[] populatedTicks)
```

从池的tick位图的一个单词中获取所有填充tick的数据。

#### 参数：

| 名称                | 类型    | 描述                                                                                                  |
| :------------------ | :------ | :----------------------------------------------------------------------------------------------------- |
| `pool`              | address | 获取填充tick数据的池的地址                                                                            |
| `tickBitmapIndex`   | int16   | 在tick位图中要解析位图并获取所有填充tick的单词的索引                                                  |

#### 返回值：

| 名称             | 类型                      | 描述                                                         |
| :--------------- | :------------------------ | :----------------------------------------------------------- |
| `populatedTicks` | ITickLens.PopulatedTick[] | 给定tick位图单词的tick数据数组                               |