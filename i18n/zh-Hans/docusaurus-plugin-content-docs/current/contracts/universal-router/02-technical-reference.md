---
id: technical-reference
title: 技术参考
sidebar_position: 1
---

## 函数

对 `UniversalRouter` 的所有交易都通过以下 `UniversalRouter.execute` 函数进行：

- `execute(bytes calldata commands, bytes[] calldata inputs, uint256 deadline)`
- `execute(bytes calldata commands, bytes[] calldata inputs)`

其中第一个函数添加了允许交易设置交易截止时间的功能。如果 `block.timestamp` 超过提供的 `deadline`，交易将被回滚。在该检查之后，这两个函数的执行方式相同。

`execute` 函数的工作原理类似于简化的虚拟机 - 它们接收命令列表和命令输入列表，并按照指定的顺序执行它们。

## 命令结构

函数的第一个参数 (`bytes calldata commands`) 是一个命令列表，用于指示合约应按执行顺序执行的操作。每个命令编码为1字节，包含以下8位的拆分：

| 0  | 1 2 | 3 4 5 6 7 |
| :- | :-- | :-------- |
| f  | r   | 命令       |

### `f`
一个单比特标志，指示命令是否可以在整个交易失败的情况下被允许回滚。
- 如果 `f` 是 `0` 即 `false` 并且命令回滚，则整个交易将回滚，没有任何命令会被执行。
- 如果 `f` 是 `1` 即 `true` 并且回滚发生，那么交易将继续，允许我们实现部分成交。如果使用此标志，请小心地包含进一步的命令以移除任何可能留在 `UniversalRouter` 合约中的未使用资金。

### `r`
两个未使用的比特位，保留供未来使用。将这两个比特位留作 `0` 将节省燃气费，但传递给合约的任何值都将被忽略。`UniversalRouter` 的后续版本可能会扩展用于 `command` 的5个比特位，至少会使用其中一个比特位。

### `command`
一个5比特的唯一标识符，表示应执行的命令。这些命令的值可以在 [Commands.sol](https://github.com/Uniswap/universal-router/blob/main/contracts/libraries/Commands.sol) 中找到，或者可以查看下面的表格。

当前尚未定义的命令类型没有分配相应的命令。提供这些标识符会导致交易因 `InvalidCommandType` 错误而回滚。

完整的命令列表如下表所示：

| 命令 | 值                                                                                    |
| :------ | :--------------------------------------------------------------------------------------- |
| `0x00`  | [`V3_SWAP_EXACT_IN`](./02-technical-reference.md#v3_swap_exact_in)                       |
| `0x01`  | [`V3_SWAP_EXACT_OUT`](./02-technical-reference.md#v3_swap_exact_out)                     |
| `0x02`  | [`PERMIT2_TRANSFER_FROM`](./02-technical-reference.md#permit2_transfer_from)             |
| `0x03`  | [`PERMIT2_PERMIT_BATCH`](./02-technical-reference.md#permit2_permit_batch)               |
| `0x04`  | [`SWEEP`](./02-technical-reference.md#sweep)                                             |
| `0x05`  | [`TRANSFER`](./02-technical-reference.md#transfer)                                       |
| `0x06`  | [`PAY_PORTION`](./02-technical-reference.md#pay_portion)                                 |
| `0x07`  |                                                                                          |
| `0x08`  | [`V2_SWAP_EXACT_IN`](./02-technical-reference.md#v2_swap_exact_in)                       |
| `0x09`  | [`V2_SWAP_EXACT_OUT`](./02-technical-reference.md#v2_swap_exact_out)                     |
| `0x0a`  | [`PERMIT2_PERMIT`](./02-technical-reference.md#permit2_permit)                           |
| `0x0b`  | [`WRAP_ETH`](./02-technical-reference.md#wrap_eth)                                       |
| `0x0c`  | [`UNWRAP_WETH`](./02-technical-reference.md#unwrap_weth)                                  |
| `0x0d`  | [`PERMIT2_TRANSFER_FROM_BATCH`](./02-technical-reference.md#permit2_transfer_from_batch) |
| `0x0e`  |                                                                                          |
| `0x0f`  |                                                                                          |
| `0x10`  | [`SEAPORT`](./02-technical-reference.md#seaport)                                         |
| `0x11`  | [`LOOKS_RARE_721`](./02-technical-reference.md#looks_rare_721)                           |
| `0x12`  | [`NFTX`](./02-technical-reference.md#nftx)                                               |
| `0x13`  | [`CRYPTOPUNKS`](./02-technical-reference.md#cryptopunks)                                 |
| `0x14`  | [`LOOKS_RARE_1155`](./02-technical-reference.md#looks_rare_1155)                         |
| `0x15`  | [`OWNER_CHECK_721`](./02-technical-reference.md#owner_check_721)                         |
| `0x16`  | [`OWNER_CHECK_1155`](./02-technical-reference.md#owner_check_1155)                       |
| `0x17`  | [`SWEEP_ERC721`](./02-technical-reference.md#sweep_erc721)                               |
| `0x18`  | [`X2Y2_721`](./02-technical-reference.md#x2y2_721)                                       |
| `0x19`  | [`SUDOSWAP`](./02-technical-reference.md#sudoswap)                                       |
| `0x1a`  | [`NFT20`](./02-technical-reference.md#nft20)                                             |
| `0x1b`  | [`X2Y2_1155`](./02-technical-reference.md#x2y2_1155)                                     |
| `0x1c`  | [`FOUNDATION`](./02-technical-reference.md#foundation)                                   |
| `0x1d`  | [`SWEEP_ERC1155`](./02-technical-reference.md#sweep_erc1155)                             |
| `0x1e`  |                                                                                          |
| `0x1f`  |                                                                                          |

## 命令输入

函数的第二个参数是一个字节字符串数组。数组中的每个元素都是abi编码的输入，将用于相应的命令。

`commands[i]` 是将使用 `inputs[i]` 作为其编码输入参数的命令。

路由器使用命令类型来知道如何解码编码的输入参数 - 根据选择的命令不同，所需的输入也不同。

每个命令所需的输入参数如下所述：

### `V3_SWAP_EXACT_IN`

- `address` 交易输出的接收者
- `uint256` 交易的输入代币数量
- `uint256` 用户想要的最低输出代币数量
- `bytes` 沿着交易的 UniswapV3 编码路径
- `bool` 一个标志，指示输入代币是来自 `msg.sender`（通过 Permit2）还是资金已经存在于 `UniversalRouter` 中

### `V3_SWAP_EXACT_OUT`

- `address` 交易输出的接收者
- `uint256` 接收的输出代币数量
- `uint256` 应花费的最大输入代币数量
- `bytes` 沿着交易的 UniswapV3 编码路径
- `bool` 一个标志，指示输入代币是来自 `msg.sender`（通过 Permit2）还是资金已经存在于 `UniversalRouter` 中

### `PERMIT2_TRANSFER_FROM`

- `address` 从 Permit2 获取的代币
- `address` 获取到的代币的接收者
- `uint256` 要获取的代币数量

被获取代币的个人始终是交易的 `msg.sender`

### `PERMIT2_PERMIT_BATCH`

- `IAllowanceTransfer.PermitBatch` 描述所有要执行的 Permit2 许可的 `PermitBatch` 结构体
- `bytes` 提供给 Permit2 的签名

签署许可的个人必须是交易的 `msg.sender`

### `SWEEP`

- `address` 要清扫的 ERC20 代币（或 Constants.ETH 对于 ETH）
- `address` 清扫的接收者
- `uint256` 从清扫中接收的最低所需代币数量

### `TRANSFER`

- `address` 要转移的 ERC20 代币（或 Constants.ETH 对于 ETH）
- `address` 转移的接收者
- `uint256` 要转移的数量

### `PAY_PORTION`

- `address` 要转移的 ERC20 代币（或 Constants.ETH 对于 ETH）
- `address` 转移的接收者
- `uint256` 在基点中，根据合约余额的百分比进行转移

### `V2_SWAP_EXACT_IN`

- `address` 交易输出的接收者
- `uint256` 交易的输入代币数量
- `uint256` 用户想要的最低输出代币数量
- `address[]` 沿着交易的 UniswapV2 代币路径
- `bool` 一个标志，指示输入代币是来自 `msg.sender`（通过 Permit2）还是资金已经存在于 `UniversalRouter` 中

### `V2_SWAP_EXACT_OUT`

- `address` 交易输出的接收者
- `uint256` 接收的输出代币数量
- `uint256` 应花费的最大输入代币数量
- `address[]` 沿着交易的 UniswapV2 代币路径
- `bool` 一个标志，指示输入代币是来自 `msg.sender`（通过 Permit2）还是资金已经存在于 `UniversalRouter` 中

### `PERMIT2_PERMIT`

- `IAllowanceTransfer.PermitSingle` 描述要执行的 Permit2 许可的 `PermitSingle` 结构体
- `bytes` 提供给 Permit2 的签名

签署许可的个人必须是交易的 `msg.sender`

### `WRAP_ETH`

- `address` WETH 的接收者
- `uint256` 要封装的 ETH 数量

### `UNWRAP_WETH`

- `address` ETH 的接收者
- `uint256` 从解封装中接收的最低所需 ETH 数量

### `PERMIT2_TRANSFER_FROM_BATCH`

- `IAllowanceTransfer.AllowanceTransferDetails[]` 一个 `AllowanceTransferDetails` 结构体数组，每个结构体描述了一个要执行的 Permit2 转账

### `SEAPORT`

- `uint256` 要转发到 Seaport 合约的 ETH 价值
- `bytes` 要用于调用 Seaport 合约的调用数据

### `LOOKS_RARE_721`

- `uint256` 要转发到 LooksRare 合约的 ETH 价值
- `bytes` 要用于调用 LooksRare 合约的调用数据
- `address` ERC721 的接收者
- `address` ERC721 代币地址
- `uint256` ERC721 的 ID

### `NFTX`

- `uint256` 要转发到 NFTX 合约的 ETH 价值
- `bytes` 要用于调用 NFTX 合约的调用数据

### `CRYPTOPUNKS`

- `uint256` 要购买的 PunkID
- `address` cryptopunk 的接收者
- `uint256` 要转发到 Cryptopunks 合约的 ETH 价值

### `LOOKS_RARE_1155`

- `uint256` 要转发到 LooksRare 合约的 ETH 价值
- `bytes` 要用于调用 LooksRare 合约的调用数据
- `address` ERC1155 的接收者
- `address` ERC1155 代币地址
- `uint256` ERC1155 的 ID
- `uint256` 要转移的 ERC1155 数量

### `OWNER_CHECK_721`

- `address` 所需的 ERC721 所有者
- `address` ERC721 代币地址
- `uint256` ERC721 的 ID

### `OWNER_CHECK_1155`

- `address` 所需的 ERC1155 所有者
- `address` ERC1155 代币地址
- `uint256` ERC1155 的 ID
- `uint256` 最低所需 ERC1155 数量

### `SWEEP_ERC721`

- `address` 要转移的 ERC721 代币地址
- `address` 转移的接收者
- `uint256` 要转移的代币 ID

### `X2Y2_721`

- `uint256` 要转发到 X2Y2 合约的 ETH 价值
- `bytes` 要用于调用 X2Y2 合约的调用数据
- `address` ERC721 的接收者
- `address` ERC721 代币地址
- `uint256` ERC721 的 ID

### `SUDOSWAP`

- `uint256` 要转发到 Sudoswap 合约的 ETH 价值
- `bytes` 要用于调用 Sudoswap 合约的调用数据

### `NFT20`

- `uint256` 要转发到 NFT20 合约的 ETH 价值
- `bytes` 要用于调用 NFT20 合约的调用数据

### `X2Y2_1155`

- `uint256` 要转发到 X2Y2 合约的 ETH 价值
- `bytes` 要用于调用 X2Y2 合约的调用数据
- `address` ERC1155 的接收者
- `address` ERC1155 代币地址
- `uint256` ERC1155 的 ID
- `uint256` 要转移的 ERC1155 数量

### `FOUNDATION`

- `uint256` 要转发到 Foundation 合约的 ETH 价值
- `bytes` 要用于调用 Foundation 合约的调用数据
- `address` ERC721 的接收者
- `address` ERC721 代币地址
- `uint256` ERC721 的 ID

### `SWEEP_ERC1155`

- `address` 要清扫的 ERC1155 代币地址
- `address` 清扫的接收者
- `uint256` 要清扫的代币 ID
- `uint256` 从清扫中接收的最低所需代币数量

## 示例：回滚命令

对于一个 Sudoswap 命令，该命令应 *被允许回滚*，应提供以下8比特的命令：

```markdown
command = 0x80 (10000000) && 0x19 (00011001) = 0x99 (10011001)
```

在处理可能回滚的命令时请谨慎 - 确保你已附加了用于处理两种结果下可能留在合约中的资金的命令。例如，如果 Sudoswap 命令回滚，可以添加一个后续的 `SWEEP` 命令，以确保任何未花费的 ETH 不会留在路由器中。