[@uniswap/sdk-core](../README.md) / [Exports](../modules.md) / Fraction

# 类: Fraction

## 继承关系

- **`Fraction`**

  ↳ [`CurrencyAmount`](CurrencyAmount.md)

  ↳ [`Percent`](Percent.md)

  ↳ [`Price`](Price.md)

## 目录

### 构造函数

- [constructor](Fraction.md#constructor)

### 属性

- [denominator](Fraction.md#denominator)
- [numerator](Fraction.md#numerator)

### 访问器

- [asFraction](Fraction.md#asfraction)
- [quotient](Fraction.md#quotient)
- [remainder](Fraction.md#remainder)

### 方法

- [add](Fraction.md#add)
- [divide](Fraction.md#divide)
- [equalTo](Fraction.md#equalto)
- [greaterThan](Fraction.md#greaterthan)
- [invert](Fraction.md#invert)
- [lessThan](Fraction.md#lessthan)
- [multiply](Fraction.md#multiply)
- [subtract](Fraction.md#subtract)
- [toFixed](Fraction.md#tofixed)
- [toSignificant](Fraction.md#tosignificant)
- [tryParseFraction](Fraction.md#tryparsefraction)

## 构造函数

### constructor

• **new Fraction**(`numerator`, `denominator?`)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `numerator` | [`BigintIsh`](../modules.md#bigintish) |
| `denominator` | [`BigintIsh`](../modules.md#bigintish) |

#### 定义于

[entities/fractions/fraction.ts:28](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L28)

## 属性

### denominator

• `只读` **denominator**: `default`

#### 定义于

[entities/fractions/fraction.ts:26](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L26)

___

### numerator

• `只读` **numerator**: `default`

#### 定义于

[entities/fractions/fraction.ts:25](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L25)

## 访问器

### asFraction

• `获取` **asFraction**(): [`Fraction`](Fraction.md)

辅助方法，用于将任何超类转换回分数

#### 返回

[`Fraction`](Fraction.md)

#### 定义于

[entities/fractions/fraction.ts:154](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L154)

___

### quotient

• `获取` **quotient**(): `default`

#### 返回

`default`

#### 定义于

[entities/fractions/fraction.ts:42](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L42)

___

### remainder

• `获取` **remainder**(): [`Fraction`](Fraction.md)

#### 返回

[`Fraction`](Fraction.md)

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

#### 定义于

[entities/fractions/fraction.ts:55](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L55)

___

### divide

▸ **divide**(`other`): [`Fraction`](Fraction.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Fraction`](Fraction.md)

#### 定义于

[entities/fractions/fraction.ts:115](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L115)

___

### equalTo

▸ **equalTo**(`other`): `boolean`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

`boolean`

#### 定义于

[entities/fractions/fraction.ts:91](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L91)

___

### greaterThan

▸ **greaterThan**(`other`): `boolean`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

`boolean`

#### 定义于

[entities/fractions/fraction.ts:99](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L99)

___

### invert

▸ **invert**(): [`Fraction`](Fraction.md)

#### 返回

[`Fraction`](Fraction.md)

#### 定义于

[entities/fractions/fraction.ts:51](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L51)

___

### lessThan

▸ **lessThan**(`other`): `boolean`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

`boolean`

#### 定义于

[entities/fractions/fraction.ts:83](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L83)

___

### multiply

▸ **multiply**(`other`): [`Fraction`](Fraction.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Fraction`](Fraction.md)

#### 定义于

[entities/fractions/fraction.ts:107](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L107)

___

### subtract

▸ **subtract**(`other`): [`Fraction`](Fraction.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Fraction`](Fraction.md)

#### 定义于

[entities/fractions/fraction.ts:69](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L69)

___

### toFixed

▸ **toFixed**(`decimalPlaces`, `format?`, `rounding?`): `string`

#### 参数

| 名称 | 类型 | 默认值 |
| :------ | :------ | :------ |
| `decimalPlaces` | `number` | `undefined` |
| `format` | `object` | `undefined` |
| `rounding` | [`Rounding`](../enums/Rounding.md) | `Rounding.ROUND_HALF_UP` |

#### 返回

`string`

#### 定义于

[entities/fractions/fraction.ts:138](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L138)

___

### toSignificant

▸ **toSignificant**(`significantDigits`, `format?`, `rounding?`): `string`

#### 参数

| 名称 | 类型 | 默认值 |
| :------ | :------ | :------ |
| `significantDigits` | `number` | `undefined` |
| `format` | `object` | `undefined` |
| `rounding` | [`Rounding`](../enums/Rounding.md) | `Rounding.ROUND_HALF_UP` |

#### 返回

`string`

#### 定义于

[entities/fractions/fraction.ts:123](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L123)

___

### tryParseFraction

▸ `静态` `私有` **tryParseFraction**(`fractionish`): [`Fraction`](Fraction.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `fractionish` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Fraction`](Fraction.md)

#### 定义于

[entities/fractions/fraction.ts:33](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L33)