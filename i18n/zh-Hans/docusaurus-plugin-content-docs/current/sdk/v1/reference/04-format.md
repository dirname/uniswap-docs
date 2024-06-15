---
id: format
title: 格式化
---

# formatSignificant

此函数将值格式化为指定的有效数字数量。

## 函数签名

```typescript
export function formatSignificant(bigNumberish: BigNumberish, options?: FormatSignificantOptions): string
```

## 输入参数

| 参数        | 类型                       | 描述                |
| ----------- | -------------------------- | ------------------- |
| bigNumberish | `BigNumberish`             | 要格式化的值。     |
| options?    | `FormatSignificantOptions` | 格式化选项。        |

## 示例用法

```typescript
const 格式化后: string = formatSignificant('123456', { significantDigits: 3 }) // 1.23
```

# formatSignificantDecimals

此函数将代币和以太坊的值格式化为指定的有效数字数量。

## 函数签名

```typescript
export function formatSignificantDecimals(
  bigNumberish: BigNumberish,
  decimals: number,
  options?: FormatSignificantOptions
): string
```

## 输入参数

| 参数        | 类型                       | 描述                          |
| ----------- | -------------------------- | ----------------------------- |
| bigNumberish | `BigNumberish`             | 要格式化的值。                |
| decimals    | `number`                   | 传递值的小数位数。           |
| options?    | `FormatSignificantOptions` | 格式化选项。                  |

## 示例用法

```typescript
const 格式化后: string = formatSignificantDecimals('1234560000000000000', 18, {
  significantDigits: 3,
}) // 1.23
```

# formatFixed

此函数将值格式化为指定的小数位数。

## 函数签名

```typescript
export function formatFixed(bigNumberish: BigNumberish, options?: FormatFixedOptions): string
```

## 输入参数

| 参数        | 类型                 | 描述                |
| ----------- | -------------------- | ------------------- |
| bigNumberish | `BigNumberish`       | 要格式化的值。      |
| options?    | `FormatFixedOptions` | 格式化选项。        |

## 示例用法

```typescript
const 格式化后: string = formatFixed('1.2345', { decimalPlaces: 2 }) // 1.23
```

# formatFixedDecimals

此函数将代币和以太坊的值格式化为指定的小数位数。

## 函数签名

```typescript
export function formatFixedDecimals(bigNumberish: BigNumberish, decimals: number, options?: FormatFixedOptions): string
```

## 输入参数

| 参数        | 类型                 | 描述                          |
| ----------- | -------------------- | ----------------------------- |
| bigNumberish | `BigNumberish`       | 要格式化的值。                |
| decimals    | `number`             | 传递值的小数位数。            |
| options?    | `FormatFixedOptions` | 格式化选项。                  |

## 示例用法

```typescript
const 格式化后: string = formatFixedDecimals('1234560000000000000', 18, {
  decimalPlaces: 2,
}) // 1.23
```