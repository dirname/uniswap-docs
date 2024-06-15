[@uniswap/sdk-core](../README.md) / [Exports](../modules.md) / Ether

# 类: Ether

Ether 是 '原生' 货币的主要用法，即对于以太坊主网和所有测试网

## 继承关系

- [`NativeCurrency`](NativeCurrency.md)

  ↳ **`Ether`**

## 目录

### 构造函数

- [constructor](Ether.md#constructor)

### 属性

- [chainId](Ether.md#chainid)
- [decimals](Ether.md#decimals)
- [isNative](Ether.md#isnative)
- [isToken](Ether.md#istoken)
- [name](Ether.md#name)
- [symbol](Ether.md#symbol)
- [\_etherCache](Ether.md#_ethercache)

### 访问器

- [wrapped](Ether.md#wrapped)

### 方法

- [equals](Ether.md#equals)
- [onChain](Ether.md#onchain)

## 构造函数

### constructor

• `受保护` **new Ether**(`chainId`)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `chainId` | `number` |

#### 覆盖

[NativeCurrency](NativeCurrency.md).[constructor](NativeCurrency.md#constructor)

#### 定义于

[entities/ether.ts:11](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/ether.ts#L11)

## 属性

### chainId

• `只读` **chainId**: `number`

此货币所在的链ID

#### 继承自

[NativeCurrency](NativeCurrency.md).[chainId](NativeCurrency.md#chainid)

#### 定义于

[entities/baseCurrency.ts:21](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L21)

___

### decimals

• `只读` **decimals**: `number`

用于表示货币金额的十进制数

#### 继承自

[NativeCurrency](NativeCurrency.md).[decimals](NativeCurrency.md#decimals)

#### 定义于

[entities/baseCurrency.ts:25](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L25)

___

### isNative

• `只读` **isNative**: ``true``

#### 继承自

[NativeCurrency](NativeCurrency.md).[isNative](NativeCurrency.md#isnative)

#### 定义于

[entities/nativeCurrency.ts:7](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/nativeCurrency.ts#L7)

___

### isToken

• `只读` **isToken**: ``false``

#### 继承自

[NativeCurrency](NativeCurrency.md).[isToken](NativeCurrency.md#istoken)

#### 定义于

[entities/nativeCurrency.ts:8](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/nativeCurrency.ts#L8)

___

### name

• `可选` `只读` **name**: `string`

货币的名称，即描述性的文本非唯一标识符

#### 继承自

[NativeCurrency](NativeCurrency.md).[name](NativeCurrency.md#name)

#### 定义于

[entities/baseCurrency.ts:33](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L33)

___

### symbol

• `可选` `只读` **symbol**: `string`

货币的符号，即简短的文本非唯一标识符

#### 继承自

[NativeCurrency](NativeCurrency.md).[symbol](NativeCurrency.md#symbol)

#### 定义于

[entities/baseCurrency.ts:29](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L29)

___

### \_etherCache

▪ `静态` `私有` **\_etherCache**: `Object` = `{}`

#### 索引签名

▪ [chainId: `number`]: [`Ether`](Ether.md)

#### 定义于

[entities/ether.ts:21](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/ether.ts#L21)

## 访问器

### wrapped

• `获取` **wrapped**(): [`Token`](Token.md)

返回此货币的包装版本，可以在Uniswap合约中使用。货币必须实现此功能才能在Uniswap中使用

#### 返回

[`Token`](Token.md)

#### 覆盖

NativeCurrency.wrapped

#### 定义于

[entities/ether.ts:15](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/ether.ts#L15)

## 方法

### equals

▸ **equals**(`other`): `boolean`

返回此货币是否与另一个货币在功能上等效

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `other` | [`Currency`](../modules.md#currency) | 另一个货币 |

#### 返回

`boolean`

#### 覆盖

[NativeCurrency](NativeCurrency.md).[equals](NativeCurrency.md#equals)

#### 定义于

[entities/ether.ts:27](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/ether.ts#L27)

___

### onChain

▸ `静态` **onChain**(`chainId`): [`Ether`](Ether.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `chainId` | `number` |

#### 返回

[`Ether`](Ether.md)

#### 定义于

[entities/ether.ts:23](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/ether.ts#L23)