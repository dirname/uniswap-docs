---
id: liscense-modifications
title: 许可证修改
---

## 许可证

请注意，Uniswap V3 在变更日期之前遵循 [BUSL 许可证](https://github.com/Uniswap/v3-core#licensing)，当前的变更日期为 2023-04-01。许可证的例外情况可能通过额外使用授权由 Uniswap 治理指定，例如，允许在新链上部署 V3。请遵循 [Uniswap 治理流程](https://gov.uniswap.org/t/community-governance-process/7732) 请求 DAO 投票以对许可证进行例外处理，或提前变更日期。

许可证变更必须通过受 Uniswap 治理控制的 [ENS 域名](https://ens.domains/) uniswap.eth 来实施。这意味着（以及其他事项）治理有权将任意文本与任何形式为 X.uniswap.eth 的子域名关联。变更日期的修改应在 v3-core-license-date.uniswap.eth 指定，而额外使用授权应在 v3-core-license-grants.uniswap.eth 指定。将文本与子域名关联的过程详细如下：

<details>
<summary> ENS 子域名详情与流程 </summary>

如果子域名尚不存在，这可以通过 [这里](https://app.ens.domains/name/uniswap.eth/subdomains) 进行检查，应调用 ENS 注册表的 [`setSubnodeRecord`](https://docs.ens.domains/contract-api-reference/ens#set-subdomain-record) 函数，并带有以下参数：

- `node`：`namehash('uniswap.eth')` (`0xa2a03459171c76bff45817330c10ef9f8af07011a33005b73b50189bbc7e7132`)
- `label`：`keccak256('v3-core-license-date')` (`0xee55740591b0fd5d7a28a6edc49567f6ff3febbe942ec0e2fa49ee536595085b`) 或 `keccak256('v3-core-license-grants')` (`0x15ff9b5bd7642701a10e5ea8fb29c957ffda4854cd028e9f6218506e6b509af2`)
- `owner`：[`0x1a9C8182C09F50C8318d769245beA52c32BE35BC`](https://etherscan.io/address/0x1a9c8182c09f50c8318d769245bea52c32be35bc)，即 Uniswap 治理时钟锁
- `resolver`：[`0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41`](https://etherscan.io/address/0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41)，即公共 ENS 解析器。
- `ttl`：`0`

2. 然后，应调用公共解析器的 [`setText`](https://docs.ens.domains/contract-api-reference/publicresolver#set-text-data) 函数，并带有以下参数：

- `node`：`namehash('v3-core-license-date.uniswap.eth')` (`0x0505ec7822d61b4cfb294f137d1a7f0ceedf162f555a4bf2f4be58a07cf266c5`) 或 `namehash('v3-core-license-grants.uniswap.eth')` (`0xa35d592ec6e5289a387cba1d5f82be794f495bd5a361a1fb314687c6aefea1f4`)
- `key`：一个合适的标签，如 `notice`。
- `value`：变更的文本。注意，问题子域名中可能已有关联的文本。如果有，可以在以下 URL 查看 [v3-core-license-date](https://app.ens.domains/name/v3-core-license-date.uniswap.eth/details) 或 [v3-core-license-grants](https://app.ens.domains/name/v3-core-license-grants.uniswap.eth/details)，并按需追加。

注意：`setContentHash` 也可以用于将文本与子域名关联，但为了简化，在上面呈现了 `setText`。

然后，这些合约函数调用应编码成治理提案，并由 Uniswap 治理批准。

</details>

## 提案

提案通过 `GovernorBravoDelegator` 提交 @ `0x408ED6354d4973f66138C91495F2f2FCbd8724C3`，这是一个当前指向实现的代理合约 `0x53a328F4086d7C0F1Fa19e594c9b842125263026`。用于消费治理合约 ABI 的 npm 包以及关于先前版本的详细信息可在 [此处](../../../../concepts/governance/overview) 获取。

<details>
    <summary> Governor Bravo #propose 参数 </summary>

```solidity
/**
    * @notice 用于提出新提案的函数。发送者必须具有高于提案阈值的委托人
    * @param targets 提案调用的目标地址
    * @param values 提案调用的 ETH 值
    * @param signatures 提案调用的功能签名
    * @param calldatas 提案调用的 calldatas
    * @param description 提案的字符串描述
    * @return 新提案的提案 id
    */
function propose(
    address[] memory targets,
    uint[] memory values,
    string[] memory signatures,
    bytes[] memory calldatas,
    string memory description
) public returns (uint)

```

</details>

## 填充提案 Calldata

下面是一个使用脚本环境生成提案的例子。这仅用于教育目的 - 该示例假设可以访问具有足够委托 UNI 的私钥来提交提案，这是一种不安全的做法。有几种方法可以生成提案交易并将其提交到以太坊；此示例仅供参考，不应在生产环境中使用。

<details>
<summary> 填充 `Propose` Calldata </summary>

```typescript
import { Contract, ethers } from 'ethers'
import { namehash } from '@ethersproject/hash'
import { keccak256 } from '@ethersproject/keccak256'
import { Interface } from '@ethersproject/abi'
// 注意：合同 ABIs 应通过 etherscan 导入
import { GOVERNOR_BRAVO_ABI, ENS_REGISTRY_ABI, ENS_PUBLIC_RESOLVER_ABI } from './utils'

const GOVERNOR_BRAVO_ADDRESS: string = '0x408ED6354d4973f66138C91495F2f2FCbd8724C3'
const ENS_REGISTRY_ADDRESS: string = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
const PUBLIC_ENS_RESOLVER_ADDRESS: string = '0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41'
const UNISWAP_GOVERNANCE_TIMELOCK_ADDRESS: string = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'

const provider = new ethers.providers.JsonRpcProvider('YOUR_RPC_URL_HERE')
const signer = provider.getSigner('YOUR_SIGNER_ADDRESS_HERE')

// 注意：设置子节点记录仅应在子域名尚不存在的情况下进行
const ensRegistryInterface = new Interface(ENS_REGISTRY_ABI)
const setSubnodeRecordCalldata = ensRegistryInterface.encodeFunctionData('setSubnodeRecord', [
  // node: 父节点
  namehash('uniswap.eth'),
  // label: 指定子节点的标签的哈希
  keccak256('v3-core-license-grants'),
  // owner: 新所有者的地址
  UNISWAP_GOVERNANCE_TIMELOCK_ADDRESS,
  // resolver: 解析器的地址
  PUBLIC_ENS_RESOLVER_ADDRESS,
  // ttl: 时间存活期，即，生存时间，以秒为单位
  0,
])

const ensPublicResolverInterface = new Interface(ENS_PUBLIC_RESOLVER_ABI)
const setTextCalldata = ensPublicResolverInterface.encodeFunctionData('setText', [
  // node: 要更新的节点
  namehash('v3-core-license-grants.uniswap.eth'),
  // key: 要设置的键
  '[your-projects-additional-use-grant-title]',
  // value: 要设置的文本数据值
  '[your-additional-use-grant-description]',
])

// 创建一个新的本地实例的 governorBravo 合约
// 注意：在生产环境中，abi 应通过 etherscan 获得
const governorBravo = new Contract(GOVERNOR_BRAVO_ADDRESS, GOVERNOR_BRAVO_ABI, provider)

// 要进行调用的目标地址的有序列表
const targets = [ENS_REGISTRY_ADDRESS, PUBLIC_ENS_RESOLVER_ADDRESS]

// 要进行调用时传递的值的有序列表。即，交易内要转移的 ETH 值的数量。由于此示例不包括任何 ETH 的转移，因此此列表为空。
const values = [0, 0]

// 要调用的功能签名的有序列表。签名参数是可选的，如果不提供，将从 calldata 推断功能签名
const signatures = ['', '']

// 要在提案中传递给每个调用的 calldata 的有序列表。此示例中的 calldata 取代了功能签名参数的位置。
const calldatas = [setSubnodeRecordCalldata, setTextCalldata]

// 提案的描述。
const description = '# TITLE ## SECTION_EXPLANATION'

async function main() {
  try {
    const txResponse: ethers.providers.TransactionResponse = await governorBravo
      .connect(signer)
      .propose(targets, values, signatures, calldatas, description)
    console.log(`Proposal transaction sent: ${txResponse.hash}`)
    await txResponse.wait(1)
    console.log(
      `Proposal has been mined at blocknumber: ${txResponse.blockNumber}, transaction hash: ${txResponse.hash}`
    )
  } catch (error) {
    console.error(error)
  }
}

main().then(() => console.log('done'))
```

</details>

## 有用链接

- [Governor Bravo 代理](https://etherscan.io/address/0x408ED6354d4973f66138C91495F2f2FCbd8724C3#readProxyContract)
- [Governor Bravo 委托人](https://etherscan.io/address/0x53a328f4086d7c0f1fa19e594c9b842125263026#code)
- [ENS 子节点记录更新详情](https://github.com/Uniswap/deploy-v3#licensing)