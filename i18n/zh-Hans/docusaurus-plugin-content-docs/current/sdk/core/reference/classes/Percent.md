[@uniswap/sdk-core](../README.md) / [Exports](../modules.md) / Percent

# 类: Percent

## 继承关系

- [`Fraction`](Fraction.md)

  ↳ **`Percent`**

## 目录

### 构造函数

- [constructor](Percent.md#constructor)

### 属性

- [denominator](Percent.md#denominator)
- [isPercent](Percent.md#ispercent)
- [numerator](Percent.md#numerator)

### 访问器

- [asFraction](Percent.md#asfraction)
- [quotient](Percent.md#quotient)
- [remainder](Percent.md#remainder)

### 方法

- [add](Percent.md#add)
- [divide](Percent.md#divide)
- [equalTo](Percent.md#equalto)
- [greaterThan](Percent.md#greaterthan)
- [invert](Percent.md#invert)
- [lessThan](Percent.md#lessthan)
- [multiply](Percent.md#multiply)
- [subtract](Percent.md#subtract)
- [toFixed](Percent.md#tofixed)
- [toSignificant](Percent.md#tosignificant)

## 构造函数

### constructor

• **new Percent**(`numerator`, `denominator?`)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `numerator` | [`BigintIsh`](../modules.md#bigintish) |
| `denominator` | [`BigintIsh`](../modules.md#bigintish) |

#### 继承自

[Fraction](Fraction.md).[constructor](Fraction.md#constructor)

#### 定义于

[entities/fractions/fraction.ts:28](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L28)

## 属性

### denominator

• `只读` **denominator**: `default`

#### 继承自

[Fraction](Fraction.md).[denominator](Fraction.md#denominator)

#### 定义于

[entities/fractions/fraction.ts:26](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L26)

---

### isPercent

• `只读` **isPercent**: ``true``

这个布尔值防止一个分数被解释为一个百分比

#### 定义于

[entities/fractions/percent.ts:19](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/percent.ts#L19)

---

### numerator

• `只读` **numerator**: `default`

#### 继承自

[Fraction](Fraction.md).[numerator](Fraction.md#numerator)

#### 定义于

[entities/fractions/fraction.ts:25](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L25)

## 访问器

### asFraction

• `获取` **asFraction**(): [`Fraction`](Fraction.md)

将任何超类转换回分数的辅助方法

#### 返回

[`Fraction`](Fraction.md)

#### 继承自

Fraction.asFraction

#### 定义于

[entities/fractions/fraction.ts:154](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L154)

---

### quotient

• `获取` **quotient**(): `default`

#### 返回

`default`

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

## 方法

### add

▸ **add**(`other`): [`Percent`](Percent.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Percent`](Percent.md)

#### 覆盖

[Fraction](Fraction.md).[add](Fraction.md#add)

#### 定义于

[entities/fractions/percent.ts:21](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/percent.ts#L21)

---

### divide

▸ **divide**(`other`): [`Percent`](Percent.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Percent`](Percent.md)

#### 覆盖

[Fraction](Fraction.md).[divide](Fraction.md#divide)

#### 定义于

[entities/fractions/percent.ts:33](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/percent.ts#L33)

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

▸ **invert**(): [`Fraction`](Fraction.md)

#### 返回

[`Fraction`](Fraction.md)

#### 继承自

[Fraction](Fraction.md).[invert](Fraction.md#invert)

#### 定义于

[entities/fractions/fraction.ts:51](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/fraction.ts#L51)

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

▸ **multiply**(`other`): [`Percent`](Percent.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Percent`](Percent.md)

#### 覆盖

[Fraction](Fraction.md).[multiply](Fraction.md#multiply)

#### 定义于

[entities/fractions/percent.ts:29](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/percent.ts#L29)

---

### subtract

▸ **subtract**(`other`): [`Percent`](Percent.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `other` | [`BigintIsh`](../modules.md#bigintish) \| [`Fraction`](Fraction.md) |

#### 返回

[`Percent`](Percent.md)

#### 覆盖

[Fraction](Fraction.md).[subtract](Fraction.md#subtract)

#### 定义于

[entities/fractions/percent.ts:25](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/percent.ts#L25)

---

### toFixed

▸ **toFixed**(`decimalPlaces?`, `format?`, `rounding?`): `string`

#### 参数

| 名称 | 类型 | 默认值 |
| :------ | :------ | :------ |
| `decimalPlaces` | `number` | `2` |
| `format?` | `object` | `undefined` |
| `rounding?` | [`Rounding`](../enums/Rounding.md) | `undefined` |

#### 返回

`string`

#### 覆盖

[Fraction](Fraction.md).[toFixed](Fraction.md#tofixed)

#### 定义于

[entities/fractions/percent.ts:41](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/percent.ts#L41)

---

### toSignificant

▸ **toSignificant**(`significantDigits?`, `format?`, `rounding?`): `string`

#### 参数

| 名称 | 类型 | 默认值 |
| :------ | :------ | :------ |
| `significantDigits` | `number` | `5` |
| `format?` | `object` | `undefined` |
| `rounding?` | [`Rounding`](../enums/Rounding.md) | `undefined` |

#### 返回

`string`

#### 覆盖

[Fraction](Fraction.md).[toSignificant](Fraction.md#tosignificant)

#### 定义于

[entities/fractions/percent.ts:37](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/fractions/percent.ts#L37)