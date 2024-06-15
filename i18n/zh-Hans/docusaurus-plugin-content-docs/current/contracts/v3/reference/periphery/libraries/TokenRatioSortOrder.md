# TokenRatioSortOrder

```solidity
// 用于排序代币比率的库
library TokenRatioSortOrder {
    // 最高的分子权重
    int256 constant NUMERATOR_MOST = 300;
    // 较高的分子权重
    int256 constant NUMERATOR_MORE = 200;
    // 标准的分子权重
    int256 constant NUMERATOR = 100;
    // 最低的分母权重
    int256 constant DENOMINATOR_MOST = -300;
    // 较低的分母权重
    int256 constant DENOMINATOR_MORE = -200;
    // 标准的分母权重
    int256 constant DENOMINATOR = -100;
}
```