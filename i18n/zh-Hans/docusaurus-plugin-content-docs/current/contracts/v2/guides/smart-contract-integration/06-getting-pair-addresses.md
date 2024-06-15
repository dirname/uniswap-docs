---
id: getting-pair-addresses
title: 成对地址
---

# 获取成对地址

获取成对地址的最直接方式是调用工厂上的 [getPair](../../reference/smart-contracts/factory#getpair)。如果该成对存在，此函数将返回其地址；否则返回 `address(0)` (`0x0000000000000000000000000000000000000000`)。

- 确定成对是否存在与否的“标准”方法。
- 需要进行链上查询。

# CREATE2

得益于在工厂中的一些 [巧妙操作](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Factory.sol#L32)，我们还可以在没有任何链上查询的情况下计算成对地址，这归功于 [CREATE2](https://eips.ethereum.org/EIPS/eip-1014)。为此技术需要以下值：

|                        |                                                                        |
| :--------------------- | :--------------------------------------------------------------------- |
| `address`              | 工厂的 [地址](../../reference/smart-contracts/factory#address)         |
| `salt`                 | `keccak256(abi.encodePacked(token0, token1))`                          |
| `keccak256(init_code)` | `0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f`   |

- `token0` 必须按照排序顺序严格小于 `token1`。

* 可以离线计算。
* 需要执行 `keccak256` 的能力。

## 示例

### Solidity

```solidity
address factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
address token0 = 0xCAFE000000000000000000000000000000000000; // 请修改！
address token1 = 0xF00D000000000000000000000000000000000000; // 请修改！

address pair = address(uint(keccak256(abi.encodePacked(
  hex'ff',
  factory,
  keccak256(abi.encodePacked(token0, token1)),
  hex'96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'
))));
```