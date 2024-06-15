[@uniswap/sdk-core](../README.md) / [导出](../modules.md) / Token

# 类: Token

表示具有唯一地址和一些元数据的 ERC20 代币。

## 继承关系

- `BaseCurrency`

  ↳ **`Token`**

## 目录

### 构造函数

- [constructor](Token.md#constructor)

### 属性

- [address](Token.md#address)
- [chainId](Token.md#chainid)
- [decimals](Token.md#decimals)
- [isNative](Token.md#isnative)
- [isToken](Token.md#istoken)
- [name](Token.md#name)
- [symbol](Token.md#symbol)

### 访问器

- [wrapped](Token.md#wrapped)

### 方法

- [equals](Token.md#equals)
- [sortsBefore](Token.md#sortsbefore)

## 构造函数

### constructor

• **new Token**(`chainId`, `address`, `decimals`, `symbol?`, `name?`, `bypassChecksum?`)

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `chainId` | `number` | BaseCurrency#chainId |
| `address` | `string` | 此代币所在链上的合约地址 |
| `decimals` | `number` | BaseCurrency#decimals |
| `symbol?` | `string` | BaseCurrency#symbol |
| `name?` | `string` | BaseCurrency#name |
| `bypassChecksum?` | `boolean` | 如果为真，它只检查长度 === 42，以 0x 开头且仅包含十六进制字符 |

#### 覆盖

BaseCurrency.constructor

#### 定义于

[entities/token.ts:27](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/token.ts#L27)

## 属性

### address

• `只读` **address**: `string`

此代币所在链上的合约地址

#### 定义于

[entities/token.ts:16](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/token.ts#L16)

___

### chainId

• `只读` **chainId**: `number`

此货币所在的链 ID

#### 继承自

BaseCurrency.chainId

#### 定义于

[entities/baseCurrency.ts:21](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L21)

___

### decimals

• `只读` **decimals**: `number`

用于表示货币金额的小数位数

#### 继承自

BaseCurrency.decimals

#### 定义于

[entities/baseCurrency.ts:25](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L25)

___

### isNative

• `只读` **isNative**: ``false``

#### 覆盖

BaseCurrency.isNative

#### 定义于

[entities/token.ts:10](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/token.ts#L10)

___

### isToken

• `只读` **isToken**: ``true``

#### 覆盖

BaseCurrency.isToken

#### 定义于

[entities/token.ts:11](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/token.ts#L11)

___

### name

• `可选` `只读` **name**: `string`

货币的名称，即描述性的文本非唯一标识符

#### 继承自

BaseCurrency.name

#### 定义于

[entities/baseCurrency.ts:33](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L33)

___

### symbol

• `可选` `只读` **symbol**: `string`

货币的符号，即简短的文本非唯一标识符

#### 继承自

BaseCurrency.symbol

#### 定义于

[entities/baseCurrency.ts:29](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/baseCurrency.ts#L29)

## 访问器

### wrapped

• `获取` **wrapped**(): [`Token`](Token.md)

返回此代币，无需包装

#### 返回

[`Token`](Token.md)

#### 覆盖

BaseCurrency.wrapped

#### 定义于

[entities/token.ts:66](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/token.ts#L66)

## 方法

### equals

▸ **equals**(`other`): `boolean`

如果两个代币等效，则返回 true，即具有相同的 chainId 和地址。

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `other` | [`Currency`](../modules.md#currency) | 要比较的其他代币 |

#### 返回

`boolean`

#### 覆盖

BaseCurrency.equals

#### 定义于

[entities/token.ts:47](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/token.ts#L47)

___

### sortsBefore

▸ **sortsBefore**(`other`): `boolean`

如果此代币的地址在其他代币的地址之前排序，则返回 true

**`抛出`**

如果代币具有相同的地址

**`抛出`**

如果代币位于不同的链上

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `other` | [`Token`](Token.md) | 要比较的其他代币 |

#### 返回

`boolean`

#### 定义于

[entities/token.ts:57](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/token.ts#L57)