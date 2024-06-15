提供用于获取池的批量tick数据的功能。

这避免了级联操作，如获取tick位图、解析位图以确定要获取的tick，然后发送额外的多调用来获取tick数据。

## 功能

### getPopulatedTicksInWord

```solidity
  function getPopulatedTicksInWord(
    address pool,
    int16 tickBitmapIndex
  ) external returns (struct ITickLens.PopulatedTick[] populatedTicks)
```

从池的tick位图的一个字中获取所有已填充tick的数据。

#### 参数：

| 名称                | 类型    | 描述                                                                                                  |
| :------------------ | :------ | :----------------------------------------------------------------------------------------------------- |
| `pool`              | address | 要获取已填充tick数据的池的地址                                                                        |
| `tickBitmapIndex`   | int16   | 在池的tick位图中，要解析位图并获取所有已填充tick的字的索引                                            |

#### 返回值：

| 名称               | 类型                      | 描述                                                             |
| :----------------- | :------------------------ | :--------------------------------------------------------------- |
| `populatedTicks`   | ITickLens.PopulatedTick[] | 给定tick位图字中的tick数据数组                                   |