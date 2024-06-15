---
id: exchange
title: 交易所
---

# 设置

| 参数         |                        描述 |
| :--------- | ---------------------------------: |
| token_addr | ERC20 代币的以太坊地址 |

## 智能合约

```python
# 只能在创建交易所时由工厂合约调用
setup(token_addr: address):
```

## Web3

```javascript
// 只能在创建交易所时由工厂合约调用
exchangeContract.methods.setup((token: String)).send()
```

# 添加流动性

| 参数            | 类型    |                描述 |
| :------------ | :------ | -------------------------: |
| msg.value     | uint256 |        添加的 ETH 数量 |
| min_liquidity | uint256 |   最小生成的流动性数量 |
| max_tokens    | uint256 | 最大添加的 ERC20 代币数 |
| deadline      | uint256 |       交易截止时间 |

| 返回值 |                                   |
| :------ | --------------------------------: |
| uint256 | 发行的流动性代币数量 |

## 智能合约

```python
@payable
addLiquidity(
    min_liquidity: uint256,
    max_tokens: uint256,
    deadline: uint256
): uint256
```

## Web3

```javascript
exchangeContract.methods.addLiquidity(min_liquidity, max_tokens, deadline).send({ value: ethValue })
```

# 移除流动性

| 参数       | 类型    |                  描述 |
| :--------- | :------ | ---------------------------: |
| amount     | uint256 |   燃烧的流动性数量 |
| min_eth    | uint256 |          最少移除的 ETH |
| min_tokens | uint256 | 最少移除的 ERC20 代币数 |
| deadline   | uint256 |         交易截止时间 |

| 返回值 |                                 |
| :------ | ------------------------------: |
| uint256 |           移除的 ETH 数量 |
| uint256 | 移除的 ERC20 代币数量 |

## 智能合约

```python
removeLiquidity(
    amount: uint256;
    min_eth: uint256,
    min_tokens: uint256,
    deadline: uint256
): (uint256, uint256)
```

## Web3

```javascript
exchangeContract.methods.removeLiquidity(amount, min_eth, min_tokens, deadline).send()
```

# 默认

| 参数     | 类型    |        描述 |
| :-------- | :------ | -----------------: |
| msg.value | uint256 | 出售的 ETH 数量 |

## 智能合约

```python
# Vyper 中的默认函数等同于 Solidity 中的 "fallback" 函数
@payable
__default__():
```

## Web3

```javascript
web3.eth.sendTransaction({ value: ethAmount })
```

# ethToTokenSwapInput

| 参数       | 类型    |                 描述 |
| :--------- | :------ | --------------------------: |
| msg.value  | uint256 |          出售的 ETH 数量 |
| min_tokens | uint256 | 最小购买的 ERC20 代币数量 |
| deadline   | uint256 |        交易截止时间 |

| 返回值 |                               |
| :------ | ----------------------------: |
| uint256 | 购买的 ERC20 代币数量 |

## 智能合约

```python
@payable
ethToTokenSwapInput(
    min_tokens: uint256,
    deadline: uint256
): uint256
```

## Web3

```javascript
exchangeContract.methods.ethToTokenSwapInput(min_liquidity, max_tokens, deadline).send({ value: ethValue })
```

# ethToTokenTransferInput

| 参数       | 类型    |                        描述 |
| :--------- | :------ | ---------------------------------: |
| msg.value  | uint256 |                 出售的 ETH 数量 |
| min_tokens | uint256 |        最小购买的 ERC20 代币数量 |
| deadline   | uint256 |               交易截止时间 |
| recipient  | address | 接收 ERC20 代币的地址 |

| 返回值 |                               |
| :------ | ----------------------------: |
| uint256 | 购买的 ERC20 代币数量 |

## 智能合约

```python
@payable
ethToTokenTransferInput(
    min_tokens: uint256,
    deadline: uint256,
    recipient: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .ethToTokenTransferInput(min_liquidity, max_tokens, deadline, recipient)
  .send({ value: ethValue })
```

# ethToTokenSwapOutput

| 参数         | 类型    |                   描述 |
| :------------ | :------ | ----------------------------: |
| msg.value     | uint256 |              最大出售的 ETH 数量 |
| tokens_bought | uint256 | 购买的 ERC20 代币数量 |
| deadline      | uint256 |          交易截止时间 |

| 返回值 |                    |
| :------ | -----------------: |
| uint256 | 出售的 ETH 数量 |

## 智能合约

```python
@payable
ethToTokenSwapOutput(
    tokens_bought: uint256,
    deadline: uint256
): uint256
```

## Web3

```javascript
exchangeContract.methods.ethToTokenSwapOutput(tokens_bought, deadline).send({ value: ethValue })
```

# ethToTokenTransferOutput

| 参数         | 类型    |                        描述 |
| :------------ | :------ | ---------------------------------: |
| msg.value     | uint256 |                   最大出售的 ETH 数量 |
| tokens_bought | uint256 |      购买的 ERC20 代币数量 |
| deadline      | uint256 |               交易截止时间 |
| recipient     | address | 接收 ERC20 代币的地址 |

| 返回值 |                    |
| :------ | -----------------: |
| uint256 | 出售的 ETH 数量 |

## 智能合约

```python
@payable
ethToTokenTransferOutput(
    tokens_bought: uint256,
    deadline: uint256,
    recipient: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .ethToTokenTransferOutput(tokens_bought, deadline, (recipient: String))
  .send({ value: ethValue })
```

# tokenToEthSwapInput

| 参数     | 类型    |                 描述 |
| :---------- | :------ | --------------------------: |
| tokens_sold | uint256 | 出售的 ERC20 代币数量 |
| min_eth     | uint256 |          最小购买的 ETH |
| deadline    | uint256 |        交易截止时间 |

| 返回值 |                      |
| :------ | -------------------: |
| uint256 | 购买的 ETH 数量 |

## 智能合约

```python
tokenToEthSwapInput(
    tokens_sold: uint256,
    min_eth: uint256,
    deadline: uint256
): uint256
```

## Web3

```javascript
exchangeContract.methods.tokenToEthSwapInput(tokens_sold, min_eth, deadline).send()
```

# tokenToEthTransferInput

| 参数     | 类型    |                 描述 |
| :---------- | :------ | --------------------------: |
| tokens_sold | uint256 | 出售的 ERC20 代币数量 |
| min_eth     | uint256 |          最小购买的 ETH |
| deadline    | uint256 |        交易截止时间 |
| recipient   | address |   接收 ETH 的地址 |

| 返回值 |                      |
| :------ | -------------------: |
| uint256 | 购买的 ETH 数量 |

## 智能合约

```python
tokenToEthTransferInput(
    tokens_sold: uint256,
    min_eth: uint256,
    deadline: uint256,
    recipient: address
): uint256
```

## Web3

```javascript
exchangeContract.methods.tokenToEthTransferInput(tokens_sold, min_eth, deadline, recipient).send()
```

# tokenToEthSwapOutput

| 参数   | 类型    |               描述 |
| :--------- | :------ | ------------------------: |
| eth_bought | uint256 |      购买的 ETH 数量 |
| max_tokens | uint256 | 最大出售的 ERC20 代币数量 |
| deadline   | uint256 |      交易截止时间 |

| 返回值 |                             |
| :------ | --------------------------: |
| uint256 | 出售的 ERC20 代币数量 |

## 智能合约

```python
tokenToEthSwapOutput(
    eth_bought: uint256,
    max_tokens: uint256,
    deadline: uint256
): uint256
```

## Web3

```javascript
exchangeContract.methods.tokenToEthSwapOutput(eth_bought, max_tokens, (deadline: Integer)).send()
```

# tokenToEthTransferOutput

| 参数   | 类型    |               描述 |
| :--------- | :------ | ------------------------: |
| eth_bought | uint256 |      购买的 ETH 数量 |
| max_tokens | uint256 | 最大出售的 ERC20 代币数量 |
| deadline   | uint256 |      交易截止时间 |
| recipient  | address | 接收 ETH 的地址 |

| 返回值 |                             |
| :------ | --------------------------: |
| uint256 | 出售的 ERC20 代币数量 |

## 智能合约

```python
tokenToEthTransferOutput(
    eth_bought: uint256,
    max_tokens: uint256,
    deadline: uint256,
    recipient: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .tokenToEthTransferOutput(eth_bought, max_tokens, (deadline: Integer), (recipient: String))
  .send()
```

# tokenToTokenSwapInput

| 参数             | 类型    |                        描述 |
| :---------------- | :------ | ---------------------------------: |
| tokens_sold       | uint256 |  出售的输入 ERC20 代币数量 |
| min_tokens_bought | uint256 | 最小购买的输出 ERC20 代币数量 |
| min_eth_bought    | uint256 | 最小作为中介购买的 ETH |
| deadline          | uint256 |               交易截止时间 |
| token_addr        | address |      输出 ERC20 代币的地址 |

| 返回值 |                                      |
| :------ | -----------------------------------: |
| uint256 | 购买的输出 ERC20 代币数量 |

## 智能合约

```python
tokenToTokenSwapInput(
    tokens_sold: uint256,
    min_tokens_bought: uint256,
    min_eth_bought: uint256,
    deadline: uint256,
    token_addr: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .tokenToTokenSwapInput(tokens_sold, min_tokens_bought, min_eth_bought, deadline, token_addr)
  .send()
```

# tokenToTokenTransferInput

| 参数             | 类型    |                               描述 |
| :---------------- | :------ | ----------------------------------------: |
| tokens_sold       | uint256 |         出售的输入 ERC20 代币数量 |
| min_tokens_bought | uint256 |        最小购买的输出 ERC20 代币数量 |
| min_eth_bought    | uint256 |        最小作为中介购买的 ETH |
| deadline          | uint256 |                      交易截止时间 |
| recipient         | address | 接收输出 ERC20 代币的地址 |
| token_addr        | address |             输出 ERC20 代币的地址 |

| 返回值 |                                      |
| :------ | -----------------------------------: |
| uint256 | 购买的输出 ERC20 代币数量 |

## 智能合约

```python
tokenToTokenTransferInput(
    tokens_sold: uint256,
    min_tokens_bought: uint256,
    min_eth_bought: uint256,
    deadline: uint256,
    recipient: address
    token_addr: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .tokenToTokenTransferInput(tokens_sold, min_tokens_bought, min_eth_bought, deadline, recipient, token_addr)
  .send()
```

# tokenToTokenSwapOutput

| 参数         | 类型    |                          描述 |
| :-------------- | :------ | -----------------------------------: |
| tokens_bought   | uint256 | 购买的输出 ERC20 代币数量 |
| max_tokens_sold | uint256 |    最大购买的输入 ERC20 代币数量 |
| max_eth_sold    | uint256 |   最大作为中介购买的 ETH |
| deadline        | uint256 |                 交易截止时间 |
| token_addr      | address |        输出 ERC20 代币的地址 |

| 返回值 |                                   |
| :------ | --------------------------------: |
| uint256 | 购买的输入 ERC20 代币数量 |

## 智能合约

```python
tokenToTokenSwapOutput(
    tokens_bought: uint256,
    max_tokens_sold: uint256,
    max_eth_sold: uint256,
    deadline: uint256,
    token_addr: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .tokenToTokenSwapOutput(tokens_bought, max_tokens_sold, max_eth_sold, deadline, token_addr)
  .send()
```

# tokenToTokenTransferOutput

| 参数         | 类型    |                               描述 |
| :-------------- | :------ | ----------------------------------------: |
| tokens_bought   | uint256 |      购买的输出 ERC20 代币数量 |
| max_tokens_sold | uint256 |         最大购买的输入 ERC20 代币数量 |
| max_eth_sold    | uint256 |        最大作为中介购买的 ETH |
| deadline        | uint256 |                      交易截止时间 |
| recipient       | address | 接收输出 ERC20 代币的地址 |
| token_addr      | address |             输出 ERC20 代币的地址 |

| 返回值 |                                   |
| :------ | --------------------------------: |
| uint256 | 购买的输入 ERC20 代币数量 |

## 智能合约

```python
tokenToTokenTransferOutput(
    tokens_bought: uint256,
    max_tokens_sold: uint256,
    max_eth_sold: uint256,
    deadline: uint256,
    recipient: address,
    token_addr: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .tokenToTokenTransferOutput(tokens_bought, max_tokens_sold, max_eth_sold, deadline, recipient, token_addr)
  .send()
```

# tokenToExchangeSwapInput

| 参数             | 类型    |                            描述 |
| :---------------- | :------ | -------------------------------------: |
| tokens_sold       | uint256 |      出售的输入 ERC20 代币数量 |
| min_tokens_bought | uint256 |     最小购买的输出 ERC20 代币数量 |
| min_eth_bought    | uint256 |     最小作为中介购买的 ETH |
| deadline          | uint256 |                   交易截止时间 |
| exchange_addr     | address | 输出 ERC20 代币交易所的地址 |

| 返回值 |                                      |
| :------ | -----------------------------------: |
| uint256 | 购买的输出 ERC20 代币数量 |

## 智能合约

```python
tokenToTokenSwapInput(
    tokens_sold: uint256,
    min_tokens_bought: uint256,
    min_eth_bought: uint256,
    deadline: uint256,
    exchange_addr: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .tokenToTokenSwapInput(tokens_sold, min_tokens_bought, min_eth_bought, deadline, exchange_addr)
  .send()
```

# tokenToExchangeTransferInput

| 参数             | 类型    |                               描述 |
| :---------------- | :------ | ----------------------------------------: |
| tokens_sold       | uint256 |         出售的输入 ERC20 代币数量 |
| min_tokens_bought | uint256 |        最小购买的输出 ERC20 代币数量 |
| min_eth_bought    | uint256 |        最小作为中介购买的 ETH |
| deadline          | uint256 |                      交易截止时间 |
| recipient         | address | 接收输出 ERC20 代币的地址 |
| exchange_addr     | address |    输出 ERC20 代币交易所的地址 |

| 返回值 |                                      |
| :------ | -----------------------------------: |
| uint256 | 购买的输出 ERC20 代币数量 |

## 智能合约

```python
tokenToExchangeTransferInput(
    tokens_sold: uint256,
    min_tokens_bought: uint256,
    min_eth_bought: uint256,
    deadline: uint256,
    recipient: address
    exchange_addr: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .tokenToExchangeTransferInput(tokens_sold, min_tokens_bought, min_eth_bought, deadline, recipient, exchange_addr)
  .send()
```

# tokenToExchangeSwapOutput

| 参数       | 类型    |                            描述 |
| :-------------- | :------ | -------------------------------------: |
| tokens_bought   | uint256 |   购买的输出 ERC20 代币数量 |
| max_tokens_sold | uint256 |      最大购买的输入 ERC20 代币数量 |
| max_eth_sold    | uint256 |     最大作为中介购买的 ETH |
| deadline        | uint256 |                   交易截止时间 |
| exchange_addr   | address | 输出 ERC20 代币交易所的地址 |

| 返回值 |                                   |
| :------ | --------------------------------: |
| uint256 | 购买的输入 ERC20 代币数量 |

## 智能合约

```python
tokenToExchangeSwapOutput(
    tokens_bought: uint256,
    max_tokens_sold: uint256,
    max_eth_sold: uint256,
    deadline: uint256,
    exchange_addr: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .tokenToExchangeSwapOutput(tokens_bought, max_tokens_sold, max_eth_sold, deadline, exchange_addr)
  .send()
```

# tokenToExchangeTransferOutput

| 参数       | 类型    |                               描述 |
| :-------------- | :------ | ----------------------------------------: |
| tokens_bought   | uint256 |      购买的输出 ERC20 代币数量 |
| max_tokens_sold | uint256 |         最大购买的输入 ERC20 代币数量 |
| max_eth_sold    | uint256 |        最大作为中介购买的 ETH |
| deadline        | uint256 |                      交易截止时间 |
| recipient       | address | 接收输出 ERC20 代币的地址 |
| exchange_addr   | address |    输出 ERC20 代币交易所的地址 |

| 返回值 |                                   |
| :------ | --------------------------------: |
| uint256 | 购买的输入 ERC20 代币数量 |

## 智能合约

```python
tokenToExchangeTransferOutput(
    tokens_bought: uint256,
    max_tokens_sold: uint256,
    max_eth_sold: uint256,
    deadline: uint256,
    recipient: address,
    exchange_addr: address
): uint256
```

## Web3

```javascript
exchangeContract.methods
  .tokenToExchangeTransferOutput(tokens_bought, max_tokens_sold, max_eth_sold, deadline, recipient, exchange_addr)
  .send()
```

# getEthToTokenInputPrice

| 参数   | 类型    |        描述 |
| :-------- | :------ | -----------------: |
| eth_sold  | uint256 | 出售的 ETH 数量 |

| 返回值 |                                           |
| :------ | ----------------------------------------: |
| uint256 | 可以购买的 ERC20 代币数量 |

## 智能合约

```python
@constant
getEthToTokenInputPrice(eth_sold: uint256): uint256
```

## Web3

```javascript
exchangeContract.methods.getEthToTokenInputPrice(eth_sold).call()
```

# getEthToTokenOutputPrice

| 参数         | 类型    |                   描述 |
| :------------ | :------ | ----------------------------: |
| tokens_bought | uint256 | 购买的 ERC20 代币数量 |

| 返回值 |                                 |
| :------ | ------------------------------: |
| uint256 | 必须出售的 ETH 数量 |

## 智能合约

```python
@constant
getEthToTokenOutputPrice(tokens_bought: uint256): uint256
```

## Web3

```javascript
exchangeContract.methods.getEthToTokenOutputPrice(tokens_bought).call()
```

# getTokenToEthInputPrice

| 参数     | 类型    |                 描述 |
| :---------- | :------ | --------------------------: |
| tokens_sold | uint256 | 出售的 ERC20 代币数量 |

| 返回值 |                                  |
| :------ | -------------------------------: |
| uint256 | 可以购买的 ETH 数量 |

## 智能合约

```python
@constant
getTokenToEthInputPrice(tokens_sold: uint256): uint256
```

## Web3

```javascript
exchangeContract.methods.getTokenToEthInputPrice(tokens_sold).call()
```

# getTokenToEthOutputPrice

| 参数   | 类型    |          描述 |
| :--------- | :------ | -------------------: |
| eth_bought | uint256 | 购买的 ETH 数量 |

| 返回值 |                                          |
| :------ | ---------------------------------------: |
| uint256 | 必须出售的 ERC20 代币数量 |

## 智能合约

```python
@constant
getTokenToEthOutputPrice(eth_bought: uint256): uint256
```

## Web3

```javascript
exchangeContract.methods.getTokenToEthOutputPrice(eth_bought).call()
```

# tokenAddress

| 返回值 |                                         |
| :------ | --------------------------------------: |
| address | 在交易所中出售的 ERC20 代币地址 |

## 智能合约

```python
@constant
tokenAddress(): address
```

## Web3

```javascript
exchangeContract.methods.tokenAddress().call()
```

# factoryAddress

| 返回值 |                                          |
| :------ | ---------------------------------------: |
| address | 创建交易所的工厂地址 |

## 智能合约

```python
@constant
factoryAddress(): address
```

## Web3

```javascript
exchangeContract.methods.factoryAddress().call()
```

# name

| 返回值 |                         |
| :------ | ----------------------: |
| bytes32 | 流动性代币名称 |

## 智能合约

```python
# 所有交易所合约具有相同的名称
@constant
name(): bytes32 // Uniswap V1
```

## Web3

```javascript
exchangeContract.methods.tokenAddress().call()
```

# symbol

| 返回值 |                           |
| :------ | ------------------------: |
| bytes32 | 流动性代币符号 |

## 智能合约

```python
# 所有交易所合约具有相同的符号
@constant
symbol(): bytes32 // UNI-V1
```

## Web3

```javascript
exchangeContract.methods.tokenAddress().call()
```

# decimals

| 返回值 |                             |
| :------ | --------------------------: |
| uint256 | 流动性代币的小数位数 |

## 智能合约

```python
# 所有交易所合约具有相同的小数位数
@constant
decimals(): uint256 // 18
```

## Web3

```javascript
exchangeContract.methods.decimals().call()
```

# balanceOf

| 参数   | 类型    |      描述 |
| :-------- | :------ | ---------------: |
| \_owner   | address | 以太坊地址 |

| 返回值 |                                    |
| :------ | ---------------------------------: |
| uint256 | 地址的流动性代币余额 |

## 智能合约

```python
@constant
balanceOf(_owner: address): uint256
```

## Web3

```javascript
exchangeContract.methods.balanceOf(_owner).call()
```

# transfer

| 参数   | 类型    |        描述 |
| :-------- | :------ | -----------------: |
| \_to      | address |  收款人地址 |
| \_value   | uint256 | 转移的数量 |

| 返回值 |                                                 |
| :------ | ----------------------------------------------: |
| bool    | 成功则返回真。失败或回退则返回假 |

## 智能合约

```python
transfer(
    _to: address,
    _value : uint256
): bool
```

## Web3

```javascript
exchangeContract.methods.transfer(_to, _value).send()
```

# transferFrom

| 参数   | 类型    |        描述 |
| :-------- | :------ | -----------------: |
| \_from    | address | 发送者地址 |
| \_to      | address |  收款人地址 |
| \_value   | uint256 | 转移的数量 |

| 返回值 |                                                 |
| :------ | ----------------------------------------------: |
| bool    | 成功则返回真。失败或回退则返回假 |

## 智能合约

```python
transferFrom(
    _from: address,
    _to: address,
    _value : uint256
): bool
```

## Web3

```javascript
exchangeContract.methods.transferFrom(_from, _to, _value).send()
```

# approve

| 参数   | 类型    |                 描述 |
| :-------- | :------ | --------------------------: |
| \_spender | address | 批准的消费方地址 |
| \_value   | uint256 |       消费方的额度 |

| 返回值 |                                                 |
| :------ | ----------------------------------------------: |
| bool    | 成功则返回真。失败或回退则返回假 |

## 智能合约

```python
approve(
    _spender: address,
    _value: uint256
): bool
```

## Web3

```javascript
exchangeContract.methods