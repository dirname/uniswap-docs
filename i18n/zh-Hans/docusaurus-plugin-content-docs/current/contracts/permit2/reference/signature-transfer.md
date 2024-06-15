---
id: signature-transfer
title: SignatureTransfer
sidebar_position: 1
---

> [**源代码**](https://github.com/Uniswap/permit2/blob/main/src/SignatureTransfer.sol)

## 概览

此合约的主要入口点是：

- `permitTransferFrom`
    - 当您希望通过签名验证从所有者处转移代币时，使用`permitTransferFrom`。
- `permitWitnessTransferFrom`
    - 当您希望通过签名验证从所有者处转移代币，但同时希望验证其他数据时，使用`permitWitnessTransferFrom`。您希望验证的任何其他数据都可以通过`witness`参数传递。

这些函数都带有批量版本，允许用户通过一笔交易转移多个代币。

## 函数

### 单个`permitTransferFrom`

使用`permitTransferFrom`仅转移一个代币。

**函数签名**

```solidity
function permitTransferFrom(
        PermitTransferFrom memory permit,
        SignatureTransferDetails calldata transferDetails,
        address owner,
        bytes calldata signature
    ) external
```

**参数**

- permit - 使用以下内容构建`PermitTransferFrom`结构：

```solidity
struct PermitTransferFrom {
        TokenPermissions permitted;
        // 防止签名重放的每个代币所有者的签名的唯一值
        uint256 nonce;
        // 签名的截止日期
        uint256 deadline;
    }

struct TokenPermissions {
        // ERC20代币地址
        address token;
        // 可以花费的最大金额
        uint256 amount;
    }
```

- transferDetails - 关于接收者和金额的信息

```solidity
struct SignatureTransferDetails {
        // 接收者地址
        address to;
        // 花费请求的金额
        uint256 requestedAmount;
    }
```

- owner - 签名消息的签署者和代币的所有者
- signature - 对许可数据的签名。支持EOA签名、由[EIP-2098](https://eips.ethereum.org/EIPS/eip-2098)定义的紧凑签名以及由[EIP-1271](https://eips.ethereum.org/EIPS/eip-1271)定义的合约签名

### 批量`permitTransferFrom`

当您想从所有者处转移多个代币时，使用带有批量参数的`permitTransferFrom`。

**函数签名**

```solidity
function permitTransferFrom(
        PermitBatchTransferFrom memory permit,
        SignatureTransferDetails[] calldata transferDetails,
        address owner,
        bytes calldata signature
    ) external
```

**参数**

- permit - 使用以下内容构建`PermitBatchTransferFrom`：

```solidity
struct PermitBatchTransferFrom {
        // 允许进行转移的代币及其对应的金额
        TokenPermissions[] permitted;
        // 防止签名重放的每个代币所有者的签名的唯一值
        uint256 nonce;
        // 签名的截止日期
        uint256 deadline;
    }

struct TokenPermissions {
        // ERC20代币地址
        address token;
        // 可以花费的最大金额
        uint256 amount;
    }
```

- transferDetails - 由花费者根据代币转移信息参数化。
    - `SignatureTransferDetails`数组的长度必须等于与`PermitBatchTransferFrom`结构一起传递的`TokenPermissions`数组的长度。在`TokenPermissions`数组中指定的要转移的代币应与`SignatureTransferDetails`数组的索引匹配。
    - 如果一个花费者被允许访问一个代币但不需要转移该代币，他们可以指定`requestedAmount`为0，以便跳过转移。
- owner - 签名消息的签署者和代币的所有者

```solidity
struct SignatureTransferDetails {
        // 接收者地址
        address to;
        // 花费请求的金额
        uint256 requestedAmount;
    }
```

- signature - 对许可数据的签名。支持EOA签名、由[EIP-2098](https://eips.ethereum.org/EIPS/eip-2098)定义的紧凑签名以及由[EIP-1271](https://eips.ethereum.org/EIPS/eip-1271)定义的合约签名

### 单个`permitWitnessTransferFrom`

**函数签名**

```solidity
function permitWitnessTransferFrom(
        PermitTransferFrom memory permit,
        SignatureTransferDetails calldata transferDetails,
        address owner,
        bytes32 witness,
        string calldata witnessTypeString,
        bytes calldata signature
    ) external
```

**参数**

- permit - 与上述单个`permitTransferFrom`情况中定义的相同类型构建
- transferDetails - 与上述单个`permitTransferFrom`情况中定义的相同类型构建
- owner - 签名消息的签署者和代币的所有者
- witness - 由用户签名的任意数据。用于重构签名。如果您希望许可签名恢复也验证其他数据，请传递此数据。
- witnessTypeString - 定义了从其散列见证者的类型数据的字符串。它还必须包括`TokenPermissions`结构并遵循[EIP-712](https://eips.ethereum.org/EIPS/eip-712)的结构顺序。下面是一个示例。
- signature - 对许可数据的签名。支持EOA签名、由[EIP-2098](https://eips.ethereum.org/EIPS/eip-2098)定义的紧凑签名以及由[EIP-1271](https://eips.ethereum.org/EIPS/eip-1271)定义的合约签名

### 批量`permitWitnessTransferFrom`

**函数签名**

```solidity
function permitWitnessTransferFrom(
        PermitBatchTransferFrom memory permit,
        SignatureTransferDetails[] calldata transferDetails,
        address owner,
        bytes32 witness,
        string calldata witnessTypeString,
        bytes calldata signature
    ) external
```

**参数**

- permit - 与批量情况下`permitTransferFrom`相同的类型构建
- transferDetails - 与批量情况下`permitTransferFrom`相同的类型构建
- owner - 签名消息的签署者和代币的所有者
- witness - 由用户签名的任意数据。用于重构签名。如果您希望许可签名恢复也验证其他数据，请传递此数据。
- witnessTypeString - 定义了从其散列见证者的类型数据的字符串。它还必须包括`TokenPermissions`结构并遵循[EIP-712](https://eips.ethereum.org/EIPS/eip-712)的结构顺序。下面是一个示例。
- signature - 对许可数据的签名。支持EOA签名、由[EIP-2098](https://eips.ethereum.org/EIPS/eip-2098)定义的紧凑签名以及由[EIP-1271](https://eips.ethereum.org/EIPS/eip-1271)定义的合约签名

**`permitWitnessTransferFrom`参数示例**

如果集成合约也希望签署者验证关于交易的信息，则集成合约可能会要求签署者同时签署我们下面定义的`ExampleTrade`对象：

```solidity
struct ExampleTrade {
	address exampleTokenAddress;
	uint256 exampleMinimumAmountOut;
}
```

遵循EIP-721，数据的typehash将由以下定义：

```solidity
bytes32 _EXAMPLE_TRADE_TYPEHASH = keccak256('ExampleTrade(address exampleTokenAddress,uint256 exampleMinimumAmountOut)');
```

与许可消息一起传递的`witness`应该是：

```solidity
 bytes32 witness = keccak256(
            abi.encode(_EXAMPLE_TRADE_TYPEHASH, exampleTrade.exampleTokenAddress, exampleTrade.exampleMinimumAmountOut));
```

并且要传递的`witnessTypeString`应该是：

```solidity
string constant witnessTypeString = "ExampleTrade witness)ExampleTrade(address exampleTokenAddress,uint256 exampleMinimumAmountOut)TokenPermissions(address token,uint256 amount)"
```

重要的是要注意，在散列多个类型的结构时，类型字符串中的结构顺序很重要。参考EIP-721：

> 如果结构类型引用了其他结构类型（而这些类型又引用了更多结构类型），则收集引用的结构类型集，按名称排序，并附加到编码中。一个示例编码是`Transaction(Person from,Person to,Asset tx)Asset(address token,uint256 amount)Person(address wallet,string name)`
> 

## 非单调nonce模式

我们不使用递增的nonce，而是引入非单调或无序的nonce与`nonceBitmap`。

`nonceBitmap`将所有者的地址映射到uint248值，我们将称之为`wordPos`，这是所需位图的索引。有2**248可能的索引和2**248可能的位图，其中每个位图持有256位。必须翻转一个位以防止用户的签名重放。脏位可能无法再次使用。

```solidity
// nonceBitmap[ownerAddress][wordPosition]检索一个uint256位图
mapping(address => mapping(uint248 => uint256)) public nonceBitmap;
```

用户将签署一个`uint256 nonce`值，其中前248位对应于要弄脏的位图的字位置，最后8位对应于实际要翻转的位位置。

```solidity
uint248 wordPos = uint248(nonce >> 8);
uint8 bitPos = uint8(nonce);
```

```solidity
uint256 bitmap = nonceBitmap[wordPos][bitPos]
```

## 安全考虑

集成合约必须检查代币是否由来自签署者的触发调用释放，或者签署者是否打算让其他人释放他们的签名。

<aside>
💡 考虑这个场景：

一个名叫Bob的签署者签署了一个许可，以路由器合约作为授权的花费者来转移100 USDC。路由器合约从未检查调用者是谁，但会在Permit2合约上花费任何许可消息。攻击者Eve可以窃取Bob的签名，将其传递给路由器，自己作为接收者，然后将Bob的代币转移到自己手中。

</aside>

通用路由器通过检查路由合约内部的`msg.sender`是否为预期的花费者来防范这种情况，方法是在任何许可调用中将`msg.sender`作为`owner`参数传递，并在任何转移调用中将`msg.sender`作为`from`参数传递。