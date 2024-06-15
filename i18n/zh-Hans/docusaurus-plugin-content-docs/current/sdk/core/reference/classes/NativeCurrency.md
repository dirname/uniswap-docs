[@uniswap/sdk-core](../README.md) / [Exports](../modules.md) / NativeCurrency

# 类: NativeCurrency

表示其所在链的原生货币，例如。

## 继承关系

- `BaseCurrency`

  ↳ **`NativeCurrency`**

  ↳↳ [`Ether`](Ether.md)

## 目录

### 构造函数

- [constructor](NativeCurrency.md#constructor)

### 属性

- [chainId](NativeCurrency.md#chainid)
- [decimals](NativeCurrency.md#decimals)
- [isNative](NativeCurrency.md#isnative)
- [isToken](NativeCurrency.md#istoken)
- [name](NativeCurrency.md#name)
- [symbol](NativeCurrency.md#symbol)

### 访问器

- [wrapped](NativeCurrency.md#wrapped)

### 方法

- [equals](NativeCurrency.md#equals)

## 构造函数

### constructor

• `受保护` **new NativeCurrency**(`chainId`, `decimals`, `symbol?`, `name?`)

构造基础类 `BaseCurrency` 的实例。

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `chainId` | `数字` | 此货币所在的链 ID |
| `decimals` | `数字` | 货币的小数位数 |
| `symbol?` | `字符串` | 货币的符号 |
| `name?` | `字符串` | 货币的名称 |

#### 继承自

BaseCurrency.constructor

#### 定义于

[entities/baseCurrency.ts:42](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L42)

## 属性

### chainId

• `只读` **chainId**: `数字`

此货币所在的链 ID

#### 继承自

BaseCurrency.chainId

#### 定义于

[entities/baseCurrency.ts:21](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L21)

___

### decimals

• `只读` **decimals**: `数字`

用于表示货币金额的小数位数

#### 继承自

BaseCurrency.decimals

#### 定义于

[entities/baseCurrency.ts:25](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L25)

___

### isNative

• `只读` **isNative**: ``真``

#### 覆盖

BaseCurrency.isNative

#### 定义于

[entities/nativeCurrency.ts:7](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/nativeCurrency.ts#L7)

___

### isToken

• `只读` **isToken**: ``假``

#### 覆盖

BaseCurrency.isToken

#### 定义于

[entities/nativeCurrency.ts:8](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/nativeCurrency.ts#L8)

___

### name

• `可选` `只读` **name**: `字符串`

货币的名称，即描述性的文本非唯一标识符

#### 继承自

BaseCurrency.name

#### 定义于

[entities/baseCurrency.ts:33](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L33)

___

### symbol

• `可选` `只读` **symbol**: `字符串`

货币的符号，即简短的文本非唯一标识符

#### 继承自

BaseCurrency.symbol

#### 定义于

[entities/baseCurrency.ts:29](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L29)

## 访问器

### wrapped

• `抽象` `获取` **wrapped**(): [`Token`](Token.md)

返回可以与 Uniswap 合约一起使用的此货币的包装版本。必须实现此方法才能在 Uniswap 中使用货币

#### 返回

[`Token`](Token.md)

#### 继承自

BaseCurrency.wrapped

#### 定义于

[entities/baseCurrency.ts:62](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L62)

## 方法

### equals

▸ `抽象` **equals**(`other`): `布尔值`

返回此货币是否在功能上等同于其他货币

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `other` | [`Currency`](../modules.md#currency) | 其他货币 |

#### 返回

`布尔值`

#### 继承自

BaseCurrency.equals

#### 定义于

[entities/baseCurrency.ts:56](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L56)