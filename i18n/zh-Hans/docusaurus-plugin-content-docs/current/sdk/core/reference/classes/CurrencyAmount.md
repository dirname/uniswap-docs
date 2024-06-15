[@uniswap/sdk-core](../README.md) / [Exports](../modules.md) / CurrencyAmount

# 类: CurrencyAmount<T\>

## 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `T` | extends [`Currency`](../modules.md#currency) |

## 继承关系

- [`Fraction`](Fraction.md)

  ↳ **`CurrencyAmount`**

## 目录

### 构造函数

- [constructor](CurrencyAmount.md#constructor)

### 属性

- [currency](CurrencyAmount.md#currency)
- [decimalScale](CurrencyAmount.md#decimalscale)
- [denominator](CurrencyAmount.md#denominator)
- [numerator](CurrencyAmount.md#numerator)

### 访问器

- [asFraction](CurrencyAmount.md#asfraction)
- [quotient](CurrencyAmount.md#quotient)
- [remainder](CurrencyAmount.md#remainder)
- [wrapped](CurrencyAmount.md#wrapped)

### 方法

- [add](CurrencyAmount.md#add)
- [divide](CurrencyAmount.md#divide)
- [equalTo](CurrencyAmount.md#equalto)
- [greaterThan](CurrencyAmount.md#greaterthan)
- [invert](CurrencyAmount.md#invert)
- [lessThan](CurrencyAmount.md#lessthan)
- [multiply](CurrencyAmount.md#multiply)
- [subtract](CurrencyAmount.md#subtract)
- [toExact](CurrencyAmount.md#toexact)
- [toFixed](CurrencyAmount.md#tofixed)
- [toSignificant](CurrencyAmount.md#tosignificant)
- [fromFractionalAmount](CurrencyAmount.md#fromfractionalamount)
- [fromRawAmount](CurrencyAmount.md#fromrawamount)

## 构造函数

### constructor

• `受保护` **new CurrencyAmount**<`T`\>(`currency`, `numerator`, `denominator?`)

#### 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `T` | extends [`Currency`](../modules.md#currency) |

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `currency` | `T` |
| `numerator` | [`BigintIsh`](../modules.md#bigintish) |
| `denominator?` | [`BigintIsh`](../modules.md#bigintish) |

#### 覆写

[Fraction](Fraction.md).[constructor](Fraction.md#constructor)

#### 定义于

[entities/fractions/currencyAmount.ts:40](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L40)

## 属性

### currency

• `只读` **currency**: `T`

#### 定义于

[entities/fractions/currencyAmount.ts:14](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L14)

---

### decimalScale

• `只读` **decimalScale**: `默认值`

#### 定义于

[entities/fractions/currencyAmount.ts:15](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L15)

---

### denominator

• `只读` **denominator**: `默认值`

#### 继承自

[Fraction](Fraction.md).[denominator](Fraction.md#denominator)

#### 定义于

[entities/fractions/fraction.ts:26](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L26)

---

### numerator

• `只读` **numerator**: `默认值`

#### 继承自

[Fraction](Fraction.md).[numerator](Fraction.md#numerator)

#### 定义于

[entities/fractions/fraction.ts:25](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L25)

## 访问器

### asFraction

• `获取` **asFraction**(): [`Fraction`](Fraction.md)

辅助方法，用于将任何超类转换回分数

#### 返回

[`Fraction`](Fraction.md)

#### 继承自

Fraction.asFraction

#### 定义于

[entities/fractions/fraction.ts:154](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L154)

---

### quotient

• `获取` **quotient**(): `默认值`

#### 返回

`默认值`

#### 继承自

Fraction.quotient

#### 定义于

[entities/fractions/fraction.ts:42](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L42)

---

### remainder

• `获取` **remainder**(): [`Fraction`](Fraction.md)

#### 返回

[`Fraction`](Fraction.md)

#### 继承自

Fraction.remainder

#### 定义于

[entities/fractions/fraction.ts:47](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L47)

---

### wrapped

• `获取` **wrapped**(): [`CurrencyAmount`](CurrencyAmount.md)<[`Token`](Token.md)\>

#### 返回

[`CurrencyAmount`](CurrencyAmount.md)<[`Token`](Token.md)\>

#### 定义于

[entities/fractions/currencyAmount.ts:91](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L91)

## 方法

### add

▸ **add**(`other`): [`CurrencyAmount`](CurrencyAmount.md)<`T`\>

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`CurrencyAmount`](CurrencyAmount.md)<`T`\> |

#### 返回

[`CurrencyAmount`](CurrencyAmount.md)<`T`\>

#### 覆写

[Fraction](Fraction.md).[add](Fraction.md#add)

#### 定义于

[entities/fractions/currencyAmount.ts:47](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L47)

---

### divide

▸ **divide**(`other`): [`CurrencyAmount`](CurrencyAmount.md)<`T`\>

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`CurrencyAmount`](CurrencyAmount.md)<`T`\>

#### 覆写

[Fraction](Fraction.md).[divide](Fraction.md#divide)

#### 定义于

[entities/fractions/currencyAmount.ts:64](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L64)

---

### equalTo

▸ **equalTo**(`other`): `布尔值`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

`布尔值`

#### 继承自

Fraction.equalTo

#### 定义于

[entities/fractions/fraction.ts:91](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L91)

---

### greaterThan

▸ **greaterThan**(`other`): `布尔值`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

`布尔值`

#### 继承自

Fraction.greaterThan

#### 定义于

[entities/fractions/fraction.ts:99](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L99)

---

### invert

▸ **invert**(): [`Fraction`](Fraction.md)

#### 返回

[`Fraction`](Fraction.md)

#### 继承自

Fraction.invert

#### 定义于

[entities/fractions/fraction.ts:51](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L51)

---

### lessThan

▸ **lessThan**(`other`): `布尔值`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

`布尔值`

#### 继承自

Fraction.lessThan

#### 定义于

[entities/fractions/fraction.ts:83](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L83)

---

### multiply

▸ **multiply**(`other`): [`CurrencyAmount`](CurrencyAmount.md)<`T`\>

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`CurrencyAmount`](CurrencyAmount.md)<`T`\>

#### 覆写

[Fraction](Fraction.md).[multiply](Fraction.md#multiply)

#### 定义于

[entities/fractions/currencyAmount.ts:59](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L59)

---

### subtract

▸ **subtract**(`other`): [`CurrencyAmount`](CurrencyAmount.md)<`T`\>

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`CurrencyAmount`](CurrencyAmount.md)<`T`\> |

#### 返回

[`CurrencyAmount`](CurrencyAmount.md)<`T`\>

#### 覆写

[Fraction](Fraction.md).[subtract](Fraction.md#subtract)

#### 定义于

[entities/fractions/currencyAmount.ts:53](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L53)

---

### toExact

▸ **toExact**(`format?`): `字符串`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `format` | `对象` |

#### 返回

`字符串`

#### 定义于

[entities/fractions/currencyAmount.ts:86](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L86)

---

### toFixed

▸ **toFixed**(`decimalPlaces?`, `format?`, `rounding?`): `字符串`

#### 参数

| 名称 | 类型 | 默认值 |
| :------ | :------ | :------ |
| `decimalPlaces` | `数字` | `未定义` |
| `format?` | `对象` | `未定义` |
| `rounding` | [`Rounding`](../enums/Rounding.md) | `Rounding.ROUND_DOWN` |

#### 返回

`字符串`

#### 覆写

[Fraction](Fraction.md).[toFixed](Fraction.md#tofixed)

#### 定义于

[entities/fractions/currencyAmount.ts:77](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L77)

---

### toSignificant

▸ **toSignificant**(`significantDigits?`, `format?`, `rounding?`): `字符串`

#### 参数

| 名称 | 类型 | 默认值 |
| :------ | :------ | :------ |
| `significantDigits` | `数字` | `6` |
| `format?` | `对象` | `未定义` |
| `rounding` | [`Rounding`](../enums/Rounding.md) | `Rounding.ROUND_DOWN` |

#### 返回

`字符串`

#### 覆写

[Fraction](Fraction.md).[toSignificant](Fraction.md#tosignificant)

#### 定义于

[entities/fractions/currencyAmount.ts:69](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L69)

---

### fromFractionalAmount

▸ `静态` **fromFractionalAmount**<`T`\>(`currency`, `numerator`, `denominator`): [`CurrencyAmount`](CurrencyAmount.md)<`T`\>

使用不等于1的分母构建货币金额

#### 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `T` | extends [`Currency`](../modules.md#currency) |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `currency` | `T` | 货币 |
| `numerator` | [`BigintIsh`](../modules.md#bigintish) | 分数代币金额的分子 |
| `denominator` | [`BigintIsh`](../modules.md#bigintish) | 分数代币金额的分母 |

#### 返回

[`CurrencyAmount`](CurrencyAmount.md)<`T`\>

#### 定义于

[entities/fractions/currencyAmount.ts:32](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L32)

---

### fromRawAmount

▸ `静态` **fromRawAmount**<`T`\>(`currency`, `rawAmount`): [`CurrencyAmount`](CurrencyAmount.md)<`T`\>

从无单位的代币数量返回新的货币金额实例，即原始数量

#### 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `T` | extends [`Currency`](../modules.md#currency) |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `currency` | `T` | 金额中的货币 |
| `rawAmount` | [`BigintIsh`](../modules.md#bigintish) | 原始代币或以太坊金额 |

#### 返回

[`CurrencyAmount`](CurrencyAmount.md)<`T`\>

#### 定义于

[entities/fractions/currencyAmount.ts:22](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/currencyAmount.ts#L22)