---
id: overview
title: 概览
---

> 已经部署的新版 Governor Bravo 的更新参考文档可通过 [Etherscan](https://etherscan.io/address/0x408ED6354d4973f66138C91495F2f2FCbd8724C3) 获取，以下部分参考资料可能已经过时。

Uniswap 协议由 UNI 代币持有者通过治理模块和时间锁（Timelock）三个不同的组件进行管理和升级。这些合约共同使社区能够提议、投票并实施对 Uniswap 协议的更改。

任何地址，只要委托的 UNI 超过 250 万（总供应量的 0.25%），都可以提出治理行动，其中包含已完成的可执行代码。当提案创建后，在 7 天的投票期内，社区可以进行投票。如果“支持”票数多于“反对”票（即简单多数），并且“支持”票数超过 4000 万（达到法定人数），它将在时间锁中排队，并且可以在最少两天后执行。

## 时间锁（Timelock）

时间锁合约采用“延迟时间、选择退出”的升级模式来修改系统参数、逻辑和合约。时间锁有硬编码的最小延迟时间为两天，这是对治理行为可能的最短通知时间。每个提议的行动将在公告发布后至少两天的未来公布。重大升级，如更改风险系统，可能会有多达 30 天的延迟。时间锁受治理模块控制；在时间锁仪表板上可以监控待处理和已完成的治理行动。

![](./images/gov_diagram-1.png)

# 关键事件

## DelegateChanged

```solidity
DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)
```

当账户更改其代表时触发。

## DelegateVotesChanged

```solidity
DelegateVotesChanged(address indexed delegate, uint previousBalance, uint newBalance)
```

当代表账户的投票余额发生变化时触发。

## ProposalCreated

```solidity
ProposalCreated(uint id, address proposer, address[] targets, uint[] values, string[] signatures, bytes[] calldatas, uint startBlock, uint endBlock, string description)
```

当创建新提案时触发。

## VoteCast

```solidity
VoteCast(address voter, uint proposalId, bool support, uint votes)
```

当提案的投票已投出时触发。

## ProposalCanceled

```solidity
ProposalCanceled(uint id)
```

当提案被取消时触发。

## ProposalQueued

```solidity
ProposalQueued(uint id, uint eta)
```

当提案在时间锁中排队时触发。

## ProposalExecuted

```solidity
ProposalExecuted(uint id)
```

当提案在时间锁中执行时触发。

# 只读函数：UNI

## 获取当前投票数

```solidity
function getCurrentVotes(address account) returns (uint96)
```

返回账户在当前区块的投票余额。

| 名称    | 类型      |                                                                  |
| :------ | :-------- | :--------------------------------------------------------------- |
| account | `address` | 需要检索投票数量的账户地址。                                    |

## 获取历史投票数

```solidity
function getPriorVotes(address account, uint blockNumber) returns (uint96)
```

返回账户在特定区块号的历史投票数。传递的区块号必须是一个已最终确定的区块，否则函数将回退。

| 名称        | 类型      |                                                                        |
| :---------- | :-------- | :--------------------------------------------------------------------- |
| account     | `address` | 需要检索历史投票数的账户地址。                                        |
| blocknumber | `uint`    | 需要检索历史投票数的区块号。                                          |
|             |           |                                                                        |
| unnamed     | `uint96`  | 历史投票数                                                            |

# 状态改变函数：UNI

## 委托投票

```solidity
function delegate(address delegatee)
```

将发送者的投票委托给代表人。用户每次只能委托给一个地址，而添加到代表人投票计数的投票数等于用户账户中的 UNI 余额。从当前区块开始，直到发送者再次委托或转移其 UNI，投票都会被委托。

| 名称      | 类型      |                                                                    |
| :-------- | :-------- | :----------------------------------------------------------------- |
| delegatee | `address` | 发送者希望将其投票委托给的地址。                                  |

## 通过签名委托投票

```solidity
function delegateBySig(address delegatee, uint nonce, uint expiry, uint8 v, bytes32 r, bytes32 s)
```

将发送者的投票委托给代表人。用户每次只能委托给一个地址，而添加到代表人投票计数的投票数等于用户账户中的 UNI 余额。从当前区块开始，直到发送者再次委托或转移其 UNI，投票都会被委托。

| 名称      | 类型      |                                                                                                                     |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------------------ |
| delegatee | `address` | 发送者希望将其投票委托给的地址。                                                                                    |
| nonce     | `uint`    | 需要与签名匹配的合同状态。这可以从合同的公共非重复使用数映射中检索出来。                                            |
| expiry    | `uint`    | 签名到期的时间。以自 Unix 时代以来的秒数表示的区块时间戳。                                                           |
| v         | `uint`    | 签名的恢复字节。                                                                                                    |
| r         | `bytes32` | ECDSA 签名对的一半。                                                                                                |
| s         | `bytes32` | ECDSA 签名对的一半。                                                                                                |

# 只读函数：Governor Alpha

## 法定人数投票数

```solidity
function quorumVotes() public pure returns (uint)
```

返回提案成功所需的最低投票数。

## 提案门槛

```solidity
function proposalThreshold() returns (uint)
```

返回账户创建提案所需的最低投票数。

## 提案最大操作数

```solidity
function proposalMaxOperations() returns (uint)
```

返回提案中可以包含的最大操作数。操作是在提案成功并执行时将调用的函数调用。

## 投票延迟

```solidity
function votingDelay() returns (uint)
```

返回在可以开始投票提案之前需要等待的区块数。此值在创建提案时会添加到当前区块号。

## 投票期

```solidity
function votingPeriod() returns (uint)
```

返回提案投票的持续时间，以区块为单位。

## 获取动作

```solidity
function getActions(uint proposalId) returns (uint proposalId) public view returns (address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas)
```

获取选定提案的动作。传递一个提案 ID 并获取该提案的目标、值、签名和 calldatas。

| 名称       | 类型   |                    |
| :--------- | :----- | :----------------- |
| proposalId | `uint` | 提案的 ID。        |

返回：

- 提案调用的合约地址数组。
- 提案作为值使用的无符号整数数组。
- 提案的签名字符串数组。
- 提案的 calldata 字节数组。

## 获取收据

```solidity
function getReceipt(uint proposalId, address voter) returns (Receipt memory)
```

返回给定选民的提案选票收据。

| 名称       | 类型      |                                                              |
| :--------- | :-------- | :----------------------------------------------------------- |
| proposalId | `uint`    | 获取选民选票收据的提案 ID。                                 |
| voter      | `address` | 提案选民的账户地址。                                        |
|            |           |                                                              |
| Receipt    | `struct`  | 用于存储选民地址选票的 Receipt 结构。                       |

## 状态

```solidity
function state(uint proposalId) returns (ProposalState)
```

返回类型为 ProposalState 的枚举，可能的类型有：
- Pending 待定
- Active 活动中
- Canceled 取消
- Defeated 失败
- Succeeded 成功
- Queued 已排队
- Expired 已过期
- Executed 已执行

| 名称       | 类型   |                    |
| :--------- | :----- | :----------------- |
| proposalId | `uint` | 提案的 ID。        |

# 状态改变函数：Governor Alpha

## 提出

```solidity
function propose(address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas, string memory description) returns (uint)
```

创建一个改变协议的提案。

提案将由委托投票者投票。如果在投票期结束前有足够的支持，提案将自动生效。生效的提案会在时间锁合约中排队并执行。

发送者在立即前一个区块持有的 UNI 必须超过当前提案门槛（proposalThreshold()）。提案最多可以包含 10 个动作（基于 proposalMaxOperations()）。

提议者不能在当前有正在进行或活动中的提案时创建另一个提案。由于时间锁的限制，不可能在同一区块中排队两个相同的操作，因此单个提案中的操作必须是唯一的，并且共享相同操作的独特提案必须在不同的区块中排队。

| 名称        | 类型      |                                                                                                                                                                                         |
| :---------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| targets     | `address` | 在提案执行期间要进行调用的目标地址的有序列表。这个数组的长度必须与本函数中所有其他数组参数的长度相同。                                                   |
| values      | `uint`    | 在提案执行期间要传递给调用的值（即 msg.value）的有序列表。这个数组的长度必须与本函数中所有其他数组参数的长度相同。                                     |
| signatures  | `string`  | 在执行期间要传递的函数签名的有序列表。这个数组的长度必须与本函数中所有其他数组参数的长度相同。                                                         |
| calldatas   | `bytes`   | 在提案执行期间每个单独函数调用要传递的数据的有序列表。这个数组的长度必须与本函数中所有其他数组参数的长度相同。                                         |
| description | `string`  | 提案的描述及其将实施的变更的人类可读描述。                                                                                                               |
|             |           |                                                                                                                                                                                         |
| Unnamed     | `uint`    | 返回新提案的 ID                                                                                                                                          |

## 排队

```solidity
function queue(uint proposalId)
```

提案成功后，任何地址都可以调用 queue 方法将提案移入时间锁队列。只有在提案成功的情况下才能将其排队。

| 名称       | 类型   |                                   |
| :--------- | :----- | :-------------------------------- |
| proposalId | `uint` | 给定的成功提案的 ID。             |

## 执行

```solidity
function execute(uint proposalId) payable
```

在时间锁延迟期过后，任何账户都可以调用 execute 方法将提案中的更改应用到目标合约。这将调用提案中描述的每个动作。
此函数是可支付的，以便时间锁合约可以调用提案中选定的可支付函数。

| 名称       | 类型   |                                   |
| :--------- | :----- | :-------------------------------- |
| proposalId | `uint` | 给定的成功提案的 ID。             |

## 取消

```solidity
function cancel(uint proposalId)
```

取消尚未执行的提案。守护者是唯一可以执行此操作的实体，除非提议者没有保持创建提案所需的代表。如果提议者拥有的代表少于提案门槛，任何人都可以取消提案。

| 名称       | 类型   |                            |
| :--------- | :----- | :------------------------- |
| proposalId | `uint` | 要取消的提案的 ID。         |

## 投票

```solidity
function castVote(uint proposalId, bool support)
```

对提案进行投票。账户的投票权重由提案变为活动状态时的委托投票数决定。

| 名称       | 类型   |                                                                     |
| :--------- | :----- | :------------------------------------------------------------------ |
| proposalId | `uint` | 给定的成功提案的 ID。                                               |
| support    | `bool` | 对提案投票的“是”或“否”的布尔值，真表示“是”，假表示“否”。       |

## 通过签名投票

```solidity
function castVoteBySig(uint proposalId, bool support, uint8 v, bytes32 r, bytes32 s)
```

对提案进行投票。账户的投票权重由提案变为活动状态时的委托投票数决定。此方法与 Cast Vote 目的相同，但允许离线签名参与治理投票。有关如何创建离线签名的更多详细信息，请查阅 EIP-712。

| 名称       | 类型      |                                                                                         |
| :--------- | :-------- | :-------------------------------------------------------------------------------------- |
| proposalId | `uint`    | 给定的成功提案的 ID。                                                                   |
| support    | `bool`    | 对提案投票的“是”或“否”的布尔值，真表示“是”，假表示“否”。                           |
| expiry     | `uint`    | 签名到期的时间。以自 Unix 时代以来的秒数表示的区块时间戳。                               |
| v          | `uint`    | 签名的恢复字节。                                                                        |
| r          | `bytes32` | ECDSA 签名对的一半。                                                                    |
| s          | `bytes32` | ECDSA 签名对的一半。                                                                    |