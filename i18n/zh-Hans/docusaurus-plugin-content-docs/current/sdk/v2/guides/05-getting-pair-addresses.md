---
id: getting-pair-addresses
title: 对池地址
---

# 获取对池地址

获取对池地址的最直接方式是调用工厂上的 [getPair](../../../contracts/v2/reference/smart-contracts/factory#getpair)。如果该对池存在，此函数将返回其地址；否则返回 `address(0)` (`0x0000000000000000000000000000000000000000`)。

- 确定对池是否存在的“规范”方法。
- 需要进行链上查询。

# CREATE2

得益于工厂中的一些 [巧妙操作](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Factory.sol#L32)，我们还可以在没有任何链上查询的情况下计算对池地址，这归功于 [CREATE2](https://eips.ethereum.org/EIPS/eip-1014)。对于此技术，需要以下值：

|                       |                                                                                  |
| :-------------------- | :-------------------------------------------------------------------------------- |
| `address`             | [工厂地址](../../../contracts/v2/reference/smart-contracts/factory)               |
| `salt`                | `keccak256(abi.encodePacked(token0, token1))`                                    |
| `keccak256(init_code)` | `0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f`            |

- `token0` 必须严格小于 `token1`（按排序顺序）。

* 可以离线计算。
* 需要执行 `keccak256` 的能力。

## 示例

### TypeScript

本示例使用了 [Uniswap V2 SDK](../reference/getting-started)。实际上，SDK 在幕后计算对池地址，消除了像这样手动计算它们的需要。

```typescript
import { FACTORY_ADDRESS, INIT_CODE_HASH } from '@uniswap/v2-sdk'
import { pack, keccak256 } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'

const token0 = '0xCAFE000000000000000000000000000000000000' // 改变我！
const token1 = '0xF00D000000000000000000000000000000000000' // 改变我！

const pair = getCreate2Address(
  FACTORY_ADDRESS,
  keccak256(['bytes'], [pack(['address', 'address'], [token0, token1])]),
  INIT_CODE_HASH
)
```