---
id: getting-started
title: 入门指南
---

以下页面包含有关 Uniswap SDK 的技术参考信息。
想要快速入门？[请看这里](../guides/quick-start)。
您可能也想从一个[指南](../guides/fetching-data)开始，
这将为您提供一个更友好的 SDK 引导！

SDK 采用 TypeScript 编写，拥有强大的测试套件，执行任意精度算术，
并支持四舍五入到有效数字或固定小数点后位数。
SDK 的主要输出是 _实体_：包含初始化和验证检查、
必要数据字段以及辅助函数的类。

SDK 中的一个重要概念是 _分数_。由于 Solidity 执行整数数学运算，因此在
非 EVM 环境中必须小心地忠实复制链上实际进行的计算。
首先需要关注的是确保使用了溢出安全的整数实现。
理想情况下，SDK 应该能够使用原生 [BigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。
然而，在支持变得更为广泛之前，使用 [JSBI](https://github.com/GoogleChromeLabs/jsbi) 对象代替，
设想一旦 BigInts 普及，可以编译掉这个依赖项。
第二个关注点是因为例如连续价格比率计算而导致的精度损失。
为了解决这个问题，所有数学运算都作为分数运算执行，确保任意精度直到
数值为了显示目的而四舍五入，或者为了适应固定位宽而截断为止。

Fractions 类以及其他 V2 SDK 依赖的类，都从 SDK 核心导出以实现与 V3 SDK 的互操作性。
参阅文档中的[核心 SDK 部分](../../core/overview.md)，了解更多关于这些类的信息。

SDK 在部署了 [工厂](../../../contracts/v2/reference/smart-contracts/factory#address) 的所有链上都能工作。

## 代码

[源码可在 GitHub 上获取](https://github.com/Uniswap/uniswap-sdk)。

## 依赖项

SDK 安装了少量的依赖项(https://github.com/Uniswap/v2-sdk/blob/main/package.json#L24)。
V2 SDK 最重要的依赖项是 SDK 核心，它以前是 V2 SDK 的一部分，但后来作为独立包发布以避免 V2 和 V3 SDK 之间的重复代码。