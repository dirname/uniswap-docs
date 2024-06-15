---
id: factory
title: 工厂合约
---

# 初始化工厂合约 `initializeFactory`

| 参数      |                           描述             |
| --------- | ------------------------------------ |
| template  | 交易所模板的以太坊地址               |

## 智能合约

```python
initializeFactory(template: address)
```

## Web3

```javascript
factoryContract.methods.initializeFactory(template).send()
```

# 创建交易所 `createExchange`

| 参数      | 类型    |                        描述             |
| --------- | ------- | --------------------------------- |
| token     | address | ERC20 代币的以太坊地址           |

| 返回值   |                                        |
| -------- | ------------------------------------- |
| address  | Uniswap 交易所的以太坊地址           |

## 智能合约

```python
createExchange(token: address): address
```

## Web3

```javascript
factoryContract.methods.createExchange(token).send()
```

# 获取交易所 `getExchange`

| 参数      | 类型    |                        描述             |
| --------- | ------- | --------------------------------- |
| token     | address | ERC20 代币的以太坊地址           |

| 返回值   |                                        |
| -------- | ------------------------------------- |
| address  | Uniswap 交易所的以太坊地址           |

## 智能合约

```python
@constant
getExchange(token: address): address
```

## Web3

```javascript
factoryContract.methods.getExchange(token).call()
```

# 获取代币 `getToken`

| 参数      | 类型    |                            描述             |
| --------- | ------- | ------------------------------------- |
| exchange  | address | Uniswap 交易所的以太坊地址             |

| 返回值   |                                    |
| -------- | --------------------------------- |
| address  | ERC20 代币的以太坊地址           |

## 智能合约

```python
@constant
getToken(exchange: address): address
```

## Web3

```javascript
factoryContract.methods.getToken(exchange).call()
```

# 根据ID获取代币 `getTokenWithId`

| 参数      | 类型    |                   描述             |
| --------- | ------- | ---------------------------- |
| token_id  | uint256 | ERC20 代币的Uniswap ID       |

| 返回值   |                                    |
| -------- | --------------------------------- |
| address  | ERC20 代币的以太坊地址           |

## 智能合约

```python
@constant
getTokenWithId(token_id: uint256): address
```

## Web3

```javascript
factoryContract.methods.getTokenWithId(token_id).call()
```