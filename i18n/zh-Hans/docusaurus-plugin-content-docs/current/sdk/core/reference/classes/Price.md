[@uniswap/sdk-core](../README.md) / [Exports](../modules.md) / Price

# 类: Price<TBase, TQuote\>

## 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `TBase` | extends [`Currency`](../modules.md#currency) |
| `TQuote` | extends [`Currency`](../modules.md#currency) |

## 继承关系

- [`Fraction`](Fraction.md)

  ↳ **`Price`**

## 目录

### 构造函数

- [constructor](Price.md#constructor)

### 属性

- [baseCurrency](Price.md#basecurrency)
- [denominator](Price.md#denominator)
- [numerator](Price.md#numerator)
- [quoteCurrency](Price.md#quotecurrency)
- [scalar](Price.md#scalar)

### 访问器

- [adjustedForDecimals](Price.md#adjustedfordecimals)
- [asFraction](Price.md#asfraction)
- [quotient](Price.md#quotient)
- [remainder](Price.md#remainder)

### 方法

- [add](Price.md#add)
- [divide](Price.md#divide)
- [equalTo](Price.md#equalto)
- [greaterThan](Price.md#greaterthan)
- [invert](Price.md#invert)
- [lessThan](Price.md#lessthan)
- [multiply](Price.md#multiply)
- [quote](Price.md#quote)
- [subtract](Price.md#subtract)
- [toFixed](Price.md#tofixed)
- [toSignificant](Price.md#tosignificant)

## 构造函数

### constructor

• **new Price**<`TBase`, `TQuote`\>(...`args`)

构造一个价格，可以使用基础货币和报价货币金额，或者

#### 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `TBase` | extends [`Currency`](../modules.md#currency) |
| `TQuote` | extends [`Currency`](../modules.md#currency) |

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `...args` | [`TBase`, `TQuote`, [`BigintIsh`](../modules.md#bigintish), [`BigintIsh`](../modules.md#bigintish)] \| [{ `baseAmount`: [`CurrencyAmount`](CurrencyAmount.md)<`TBase`\> ; `quoteAmount`: [`CurrencyAmount`](CurrencyAmount.md)<`TQuote`\>  }] |

#### 覆写

[Fraction](Fraction.md).[constructor](Fraction.md#constructor)

#### 定义于

[entities/fractions/price.ts:18](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/price.ts#L18)

## 属性

### baseCurrency

• `Readonly` **baseCurrency**: `TBase`

#### 定义于

[entities/fractions/price.ts:10](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/price.ts#L10)

---

### denominator

• `Readonly` **denominator**: `default`

#### 继承自

[Fraction](Fraction.md).[denominator](Fraction.md#denominator)

#### 定义于

[entities/fractions/fraction.ts:26](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L26)

---

### numerator

• `Readonly` **numerator**: `default`

#### 继承自

[Fraction](Fraction.md).[numerator](Fraction.md#numerator)

#### 定义于

[entities/fractions/fraction.ts:25](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L25)

---

### quoteCurrency

• `Readonly` **quoteCurrency**: `TQuote`

#### 定义于

[entities/fractions/price.ts:11](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/price.ts#L11)

---

### scalar

• `Readonly` **scalar**: [`Fraction`](Fraction.md)

#### 定义于

[entities/fractions/price.ts:12](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/price.ts#L12)

## 访问器

### adjustedForDecimals

• `Private` `get` **adjustedForDecimals**(): [`Fraction`](Fraction.md)

获取按小数位数调整后的值，用于格式化

#### 返回

[`Fraction`](Fraction.md)

#### 定义于

[entities/fractions/price.ts:77](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/price.ts#L77)

---

### asFraction

• `get` **asFraction**(): [`Fraction`](Fraction.md)

将任何超类转换回分数的辅助方法

#### 返回

[`Fraction`](Fraction.md)

#### 继承自

Fraction.asFraction

#### 定义于

[entities/fractions/fraction.ts:154](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L154)

---

### quotient

• `get` **quotient**(): `default`

#### 返回

`default`

#### 继承自

Fraction.quotient

#### 定义于

[entities/fractions/fraction.ts:42](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L42)

---

### remainder

• `get` **remainder**(): [`Fraction`](Fraction.md)

#### 返回

[`Fraction`](Fraction.md)

#### 继承自

Fraction.remainder

#### 定义于

[entities/fractions/fraction.ts:47](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L47)

## 方法

### add

▸ **add**(`other`): [`Fraction`](Fraction.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Fraction`](Fraction.md)

#### 继承自

[Fraction](Fraction.md).[add](Fraction.md#add)

#### 定义于

[entities/fractions/fraction.ts:55](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L55)

---

### divide

▸ **divide**(`other`): [`Fraction`](Fraction.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Fraction`](Fraction.md)

#### 继承自

[Fraction](Fraction.md).[divide](Fraction.md#divide)

#### 定义于

[entities/fractions/fraction.ts:115](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L115)

---

### equalTo

▸ **equalTo**(`other`): `boolean`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

`boolean`

#### 继承自

[Fraction](Fraction.md).[equalTo](Fraction.md#equalto)

#### 定义于

[entities/fractions/fraction.ts:91](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L91)

---

### greaterThan

▸ **greaterThan**(`other`): `boolean`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

`boolean`

#### 继承自

[Fraction](Fraction.md).[greaterThan](Fraction.md#greaterthan)

#### 定义于

[entities/fractions/fraction.ts:99](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L99)

---

### invert

▸ **invert**(): [`Price`](Price.md)<`TQuote`, `TBase`\>

反转价格，交换基础货币和报价货币

#### 返回

[`Price`](Price.md)<`TQuote`, `TBase`\>

#### 覆写

[Fraction](Fraction.md).[invert](Fraction.md#invert)

#### 定义于

[entities/fractions/price.ts:49](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/price.ts#L49)

---

### lessThan

▸ **lessThan**(`other`): `boolean`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

`boolean`

#### 继承自

[Fraction](Fraction.md).[lessThan](Fraction.md#lessthan)

#### 定义于

[entities/fractions/fraction.ts:83](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L83)

---

### multiply

▸ **multiply**<`TOtherQuote`\>(`other`): [`Price`](Price.md)<`TBase`, `TOtherQuote`\>

将价格乘以另一个价格，返回一个新的价格。另一个价格必须具有与此价格的报价货币相同的基础货币

#### 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `TOtherQuote` | extends [`Currency`](../modules.md#currency) |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `other` | [`Price`](Price.md)<`TQuote`, `TOtherQuote`\> | 另一个价格 |

#### 返回

[`Price`](Price.md)<`TBase`, `TOtherQuote`\>

#### 覆写

[Fraction](Fraction.md).[multiply](Fraction.md#multiply)

#### 定义于

[entities/fractions/price.ts:57](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/price.ts#L57)

---

### quote

▸ **quote**(`currencyAmount`): [`CurrencyAmount`](CurrencyAmount.md)<`TQuote`\>

返回对应于给定基础货币数量的报价货币数量

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `currencyAmount` | [`CurrencyAmount`](CurrencyAmount.md)<`TBase`\> | 要根据价格引用的基础货币的数量 |

#### 返回

[`CurrencyAmount`](CurrencyAmount.md)<`TQuote`\>

#### 定义于

[entities/fractions/price.ts:67](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/price.ts#L67)

---

### subtract

▸ **subtract**(`other`): [`Fraction`](Fraction.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Fraction`](Fraction.md)

#### 继承自

[Fraction](Fraction.md).[subtract](Fraction.md#subtract)

#### 定义于

[entities/fractions/fraction.ts:69](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L69)

---

### toFixed

▸ **toFixed**(`decimalPlaces?`, `format?`, `rounding?`): `string`

#### 参数

| 名称 | 类型 | 默认值 |
| :------ | :------ | :------ |
| `decimalPlaces` | `number` | `4` |
| `format?` | `object` | `undefined` |
| `rounding?` | [`Rounding`](../enums/Rounding.md) | `undefined` |

#### 返回

`string`

#### 覆写

[Fraction](Fraction.md).[toFixed](Fraction.md#tofixed)

#### 定义于

[entities/fractions/price.ts:85](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/price.ts#L85)

---

### toSignificant

▸ **toSignificant**(`significantDigits?`, `format?`, `rounding?`): `string`

#### 参数

| 名称 | 类型 | 默认值 |
| :------ | :------ | :------ |
| `significantDigits` | `number` | `6` |
| `format?` | `object` | `undefined` |
| `rounding?` | [`Rounding`](../enums/Rounding.md) | `undefined` |

#### 返回

`string`

#### 覆写

[Fraction](Fraction.md).[toSignificant](Fraction.md#tosignificant)

#### 定义于

[entities/fractions/price.ts:81](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/price.ts#L81)