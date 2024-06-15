[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / Route

# 类: Route<TInput, TOutput\>

表示一个可以通过的池列表，用于进行交换

## 泛型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | 输入代币 |
| `TOutput` | extends `Currency` | 输出代币 |

## 目录

### 构造函数

- [constructor](Route.md#constructor)

### 属性

- [\_midPrice](Route.md#_midprice)
- [input](Route.md#input)
- [output](Route.md#output)
- [pools](Route.md#pools)
- [tokenPath](Route.md#tokenpath)

### 访问器

- [chainId](Route.md#chainid)
- [midPrice](Route.md#midprice)

## 构造函数

### constructor

• **new Route**<`TInput`, `TOutput`\>(`pools`, `input`, `output`)

创建一个路由实例。

#### 泛型参数

| 名称 | 类型 |
| :------ | :------ |
| `TInput` | extends `Currency` |
| `TOutput` | extends `Currency` |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `pools` | [`Pool`](Pool.md)[] | 一个由 `Pool` 对象组成的数组，按照交换将采取的路线排序 |
| `input` | `TInput` | 输入代币 |
| `output` | `TOutput` | 输出代币 |

#### 定义于

[entities/route.ts:25](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/route.ts#L25)

## 属性

### \_midPrice

• `私有` **\_midPrice**: ``null`` \| `Price`<`TInput`, `TOutput`\> = `null`

#### 定义于

[entities/route.ts:17](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/route.ts#L17)

---

### input

• `只读` **input**: `TInput`

#### 定义于

[entities/route.ts:14](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/route.ts#L14)

---

### output

• `只读` **output**: `TOutput`

#### 定义于

[entities/route.ts:15](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/route.ts#L15)

---

### pools

• `只读` **pools**: [`Pool`](Pool.md)[]

#### 定义于

[entities/route.ts:12](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/route.ts#L12)

---

### tokenPath

• `只读` **tokenPath**: `Token`[]

#### 定义于

[entities/route.ts:13](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/route.ts#L13)

## 访问器

### chainId

• `获取` **chainId**(): `数字`

#### 返回

`数字`

#### 定义于

[entities/route.ts:54](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/route.ts#L54)

---

### midPrice

• `获取` **midPrice**(): `Price`<`TInput`, `TOutput`\>

返回路由的中间价格

#### 返回

`Price`<`TInput`, `TOutput`\>

#### 定义于

[entities/route.ts:61](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/route.ts#L61)