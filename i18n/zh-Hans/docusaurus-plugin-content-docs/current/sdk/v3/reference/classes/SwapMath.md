[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / SwapMath

# 类: SwapMath

## 目录

### 构造函数

- [constructor](SwapMath.md#constructor)

### 方法

- [computeSwapStep](SwapMath.md#computeswapstep)

## 构造函数

### constructor

• `Private` **new SwapMath**()

无法构造。

#### 定义于

[utils/swapMath.ts:13](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/swapMath.ts#L13)

## 方法

### computeSwapStep

▸ `Static` **computeSwapStep**(`sqrtRatioCurrentX96`, `sqrtRatioTargetX96`, `liquidity`, `amountRemaining`, `feePips`): [`default`, `default`, `default`, `default`]

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `sqrtRatioCurrentX96` | `default` |
| `sqrtRatioTargetX96` | `default` |
| `liquidity` | `default` |
| `amountRemaining` | `default` |
| `feePips` | [`FeeAmount`](../enums/FeeAmount.md) |

#### 返回

[`default`, `default`, `default`, `default`]

#### 定义于

[utils/swapMath.ts:15](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/swapMath.ts#L15)