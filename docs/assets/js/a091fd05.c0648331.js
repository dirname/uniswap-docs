"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[2729],{67069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(83117),a=(n(67294),n(3905));const i={id:"signature-transfer",title:"SignatureTransfer",sidebar_position:1},l=void 0,s={unversionedId:"contracts/permit2/reference/signature-transfer",id:"contracts/permit2/reference/signature-transfer",title:"SignatureTransfer",description:"\u6e90\u4ee3\u7801",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/permit2/reference/signature-transfer.md",sourceDirName:"contracts/permit2/reference",slug:"/contracts/permit2/reference/signature-transfer",permalink:"/uniswap-docs/contracts/permit2/reference/signature-transfer",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/permit2/reference/signature-transfer.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"signature-transfer",title:"SignatureTransfer",sidebar_position:1},sidebar:"contractsSidebar",previous:{title:"\u6982\u89c8",permalink:"/uniswap-docs/contracts/permit2/overview"},next:{title:"AllowanceTransfer",permalink:"/uniswap-docs/contracts/permit2/reference/allowance-transfer"}},p={},o=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"\u5355\u4e2a<code>permitTransferFrom</code>",id:"\u5355\u4e2apermittransferfrom",level:3},{value:"\u6279\u91cf<code>permitTransferFrom</code>",id:"\u6279\u91cfpermittransferfrom",level:3},{value:"\u5355\u4e2a<code>permitWitnessTransferFrom</code>",id:"\u5355\u4e2apermitwitnesstransferfrom",level:3},{value:"\u6279\u91cf<code>permitWitnessTransferFrom</code>",id:"\u6279\u91cfpermitwitnesstransferfrom",level:3},{value:"\u975e\u5355\u8c03nonce\u6a21\u5f0f",id:"\u975e\u5355\u8c03nonce\u6a21\u5f0f",level:2},{value:"\u5b89\u5168\u8003\u8651",id:"\u5b89\u5168\u8003\u8651",level:2}],m={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/permit2/blob/main/src/SignatureTransfer.sol"},(0,a.kt)("strong",{parentName:"a"},"\u6e90\u4ee3\u7801")))),(0,a.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"\u6b64\u5408\u7ea6\u7684\u4e3b\u8981\u5165\u53e3\u70b9\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"permitTransferFrom"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u60a8\u5e0c\u671b\u901a\u8fc7\u7b7e\u540d\u9a8c\u8bc1\u4ece\u6240\u6709\u8005\u5904\u8f6c\u79fb\u4ee3\u5e01\u65f6\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"permitTransferFrom"),"\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"permitWitnessTransferFrom"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u60a8\u5e0c\u671b\u901a\u8fc7\u7b7e\u540d\u9a8c\u8bc1\u4ece\u6240\u6709\u8005\u5904\u8f6c\u79fb\u4ee3\u5e01\uff0c\u4f46\u540c\u65f6\u5e0c\u671b\u9a8c\u8bc1\u5176\u4ed6\u6570\u636e\u65f6\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"permitWitnessTransferFrom"),"\u3002\u60a8\u5e0c\u671b\u9a8c\u8bc1\u7684\u4efb\u4f55\u5176\u4ed6\u6570\u636e\u90fd\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"witness"),"\u53c2\u6570\u4f20\u9012\u3002")))),(0,a.kt)("p",null,"\u8fd9\u4e9b\u51fd\u6570\u90fd\u5e26\u6709\u6279\u91cf\u7248\u672c\uff0c\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u4e00\u7b14\u4ea4\u6613\u8f6c\u79fb\u591a\u4e2a\u4ee3\u5e01\u3002"),(0,a.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,a.kt)("h3",{id:"\u5355\u4e2apermittransferfrom"},"\u5355\u4e2a",(0,a.kt)("inlineCode",{parentName:"h3"},"permitTransferFrom")),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"permitTransferFrom"),"\u4ec5\u8f6c\u79fb\u4e00\u4e2a\u4ee3\u5e01\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u51fd\u6570\u7b7e\u540d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function permitTransferFrom(\n        PermitTransferFrom memory permit,\n        SignatureTransferDetails calldata transferDetails,\n        address owner,\n        bytes calldata signature\n    ) external\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"permit - \u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u6784\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"PermitTransferFrom"),"\u7ed3\u6784\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"struct PermitTransferFrom {\n        TokenPermissions permitted;\n        // \u9632\u6b62\u7b7e\u540d\u91cd\u653e\u7684\u6bcf\u4e2a\u4ee3\u5e01\u6240\u6709\u8005\u7684\u7b7e\u540d\u7684\u552f\u4e00\u503c\n        uint256 nonce;\n        // \u7b7e\u540d\u7684\u622a\u6b62\u65e5\u671f\n        uint256 deadline;\n    }\n\nstruct TokenPermissions {\n        // ERC20\u4ee3\u5e01\u5730\u5740\n        address token;\n        // \u53ef\u4ee5\u82b1\u8d39\u7684\u6700\u5927\u91d1\u989d\n        uint256 amount;\n    }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"transferDetails - \u5173\u4e8e\u63a5\u6536\u8005\u548c\u91d1\u989d\u7684\u4fe1\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"struct SignatureTransferDetails {\n        // \u63a5\u6536\u8005\u5730\u5740\n        address to;\n        // \u82b1\u8d39\u8bf7\u6c42\u7684\u91d1\u989d\n        uint256 requestedAmount;\n    }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"owner - \u7b7e\u540d\u6d88\u606f\u7684\u7b7e\u7f72\u8005\u548c\u4ee3\u5e01\u7684\u6240\u6709\u8005"),(0,a.kt)("li",{parentName:"ul"},"signature - \u5bf9\u8bb8\u53ef\u6570\u636e\u7684\u7b7e\u540d\u3002\u652f\u6301EOA\u7b7e\u540d\u3001\u7531",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-2098"},"EIP-2098"),"\u5b9a\u4e49\u7684\u7d27\u51d1\u7b7e\u540d\u4ee5\u53ca\u7531",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1271"},"EIP-1271"),"\u5b9a\u4e49\u7684\u5408\u7ea6\u7b7e\u540d")),(0,a.kt)("h3",{id:"\u6279\u91cfpermittransferfrom"},"\u6279\u91cf",(0,a.kt)("inlineCode",{parentName:"h3"},"permitTransferFrom")),(0,a.kt)("p",null,"\u5f53\u60a8\u60f3\u4ece\u6240\u6709\u8005\u5904\u8f6c\u79fb\u591a\u4e2a\u4ee3\u5e01\u65f6\uff0c\u4f7f\u7528\u5e26\u6709\u6279\u91cf\u53c2\u6570\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"permitTransferFrom"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u51fd\u6570\u7b7e\u540d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function permitTransferFrom(\n        PermitBatchTransferFrom memory permit,\n        SignatureTransferDetails[] calldata transferDetails,\n        address owner,\n        bytes calldata signature\n    ) external\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"permit - \u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u6784\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"PermitBatchTransferFrom"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"struct PermitBatchTransferFrom {\n        // \u5141\u8bb8\u8fdb\u884c\u8f6c\u79fb\u7684\u4ee3\u5e01\u53ca\u5176\u5bf9\u5e94\u7684\u91d1\u989d\n        TokenPermissions[] permitted;\n        // \u9632\u6b62\u7b7e\u540d\u91cd\u653e\u7684\u6bcf\u4e2a\u4ee3\u5e01\u6240\u6709\u8005\u7684\u7b7e\u540d\u7684\u552f\u4e00\u503c\n        uint256 nonce;\n        // \u7b7e\u540d\u7684\u622a\u6b62\u65e5\u671f\n        uint256 deadline;\n    }\n\nstruct TokenPermissions {\n        // ERC20\u4ee3\u5e01\u5730\u5740\n        address token;\n        // \u53ef\u4ee5\u82b1\u8d39\u7684\u6700\u5927\u91d1\u989d\n        uint256 amount;\n    }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"transferDetails - \u7531\u82b1\u8d39\u8005\u6839\u636e\u4ee3\u5e01\u8f6c\u79fb\u4fe1\u606f\u53c2\u6570\u5316\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SignatureTransferDetails"),"\u6570\u7ec4\u7684\u957f\u5ea6\u5fc5\u987b\u7b49\u4e8e\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"PermitBatchTransferFrom"),"\u7ed3\u6784\u4e00\u8d77\u4f20\u9012\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"TokenPermissions"),"\u6570\u7ec4\u7684\u957f\u5ea6\u3002\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"TokenPermissions"),"\u6570\u7ec4\u4e2d\u6307\u5b9a\u7684\u8981\u8f6c\u79fb\u7684\u4ee3\u5e01\u5e94\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"SignatureTransferDetails"),"\u6570\u7ec4\u7684\u7d22\u5f15\u5339\u914d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u82b1\u8d39\u8005\u88ab\u5141\u8bb8\u8bbf\u95ee\u4e00\u4e2a\u4ee3\u5e01\u4f46\u4e0d\u9700\u8981\u8f6c\u79fb\u8be5\u4ee3\u5e01\uff0c\u4ed6\u4eec\u53ef\u4ee5\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"li"},"requestedAmount"),"\u4e3a0\uff0c\u4ee5\u4fbf\u8df3\u8fc7\u8f6c\u79fb\u3002"))),(0,a.kt)("li",{parentName:"ul"},"owner - \u7b7e\u540d\u6d88\u606f\u7684\u7b7e\u7f72\u8005\u548c\u4ee3\u5e01\u7684\u6240\u6709\u8005")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"struct SignatureTransferDetails {\n        // \u63a5\u6536\u8005\u5730\u5740\n        address to;\n        // \u82b1\u8d39\u8bf7\u6c42\u7684\u91d1\u989d\n        uint256 requestedAmount;\n    }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"signature - \u5bf9\u8bb8\u53ef\u6570\u636e\u7684\u7b7e\u540d\u3002\u652f\u6301EOA\u7b7e\u540d\u3001\u7531",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-2098"},"EIP-2098"),"\u5b9a\u4e49\u7684\u7d27\u51d1\u7b7e\u540d\u4ee5\u53ca\u7531",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1271"},"EIP-1271"),"\u5b9a\u4e49\u7684\u5408\u7ea6\u7b7e\u540d")),(0,a.kt)("h3",{id:"\u5355\u4e2apermitwitnesstransferfrom"},"\u5355\u4e2a",(0,a.kt)("inlineCode",{parentName:"h3"},"permitWitnessTransferFrom")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u51fd\u6570\u7b7e\u540d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function permitWitnessTransferFrom(\n        PermitTransferFrom memory permit,\n        SignatureTransferDetails calldata transferDetails,\n        address owner,\n        bytes32 witness,\n        string calldata witnessTypeString,\n        bytes calldata signature\n    ) external\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"permit - \u4e0e\u4e0a\u8ff0\u5355\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"permitTransferFrom"),"\u60c5\u51b5\u4e2d\u5b9a\u4e49\u7684\u76f8\u540c\u7c7b\u578b\u6784\u5efa"),(0,a.kt)("li",{parentName:"ul"},"transferDetails - \u4e0e\u4e0a\u8ff0\u5355\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"permitTransferFrom"),"\u60c5\u51b5\u4e2d\u5b9a\u4e49\u7684\u76f8\u540c\u7c7b\u578b\u6784\u5efa"),(0,a.kt)("li",{parentName:"ul"},"owner - \u7b7e\u540d\u6d88\u606f\u7684\u7b7e\u7f72\u8005\u548c\u4ee3\u5e01\u7684\u6240\u6709\u8005"),(0,a.kt)("li",{parentName:"ul"},"witness - \u7531\u7528\u6237\u7b7e\u540d\u7684\u4efb\u610f\u6570\u636e\u3002\u7528\u4e8e\u91cd\u6784\u7b7e\u540d\u3002\u5982\u679c\u60a8\u5e0c\u671b\u8bb8\u53ef\u7b7e\u540d\u6062\u590d\u4e5f\u9a8c\u8bc1\u5176\u4ed6\u6570\u636e\uff0c\u8bf7\u4f20\u9012\u6b64\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"witnessTypeString - \u5b9a\u4e49\u4e86\u4ece\u5176\u6563\u5217\u89c1\u8bc1\u8005\u7684\u7c7b\u578b\u6570\u636e\u7684\u5b57\u7b26\u4e32\u3002\u5b83\u8fd8\u5fc5\u987b\u5305\u62ec",(0,a.kt)("inlineCode",{parentName:"li"},"TokenPermissions"),"\u7ed3\u6784\u5e76\u9075\u5faa",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712"),"\u7684\u7ed3\u6784\u987a\u5e8f\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ul"},"signature - \u5bf9\u8bb8\u53ef\u6570\u636e\u7684\u7b7e\u540d\u3002\u652f\u6301EOA\u7b7e\u540d\u3001\u7531",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-2098"},"EIP-2098"),"\u5b9a\u4e49\u7684\u7d27\u51d1\u7b7e\u540d\u4ee5\u53ca\u7531",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1271"},"EIP-1271"),"\u5b9a\u4e49\u7684\u5408\u7ea6\u7b7e\u540d")),(0,a.kt)("h3",{id:"\u6279\u91cfpermitwitnesstransferfrom"},"\u6279\u91cf",(0,a.kt)("inlineCode",{parentName:"h3"},"permitWitnessTransferFrom")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u51fd\u6570\u7b7e\u540d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function permitWitnessTransferFrom(\n        PermitBatchTransferFrom memory permit,\n        SignatureTransferDetails[] calldata transferDetails,\n        address owner,\n        bytes32 witness,\n        string calldata witnessTypeString,\n        bytes calldata signature\n    ) external\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"permit - \u4e0e\u6279\u91cf\u60c5\u51b5\u4e0b",(0,a.kt)("inlineCode",{parentName:"li"},"permitTransferFrom"),"\u76f8\u540c\u7684\u7c7b\u578b\u6784\u5efa"),(0,a.kt)("li",{parentName:"ul"},"transferDetails - \u4e0e\u6279\u91cf\u60c5\u51b5\u4e0b",(0,a.kt)("inlineCode",{parentName:"li"},"permitTransferFrom"),"\u76f8\u540c\u7684\u7c7b\u578b\u6784\u5efa"),(0,a.kt)("li",{parentName:"ul"},"owner - \u7b7e\u540d\u6d88\u606f\u7684\u7b7e\u7f72\u8005\u548c\u4ee3\u5e01\u7684\u6240\u6709\u8005"),(0,a.kt)("li",{parentName:"ul"},"witness - \u7531\u7528\u6237\u7b7e\u540d\u7684\u4efb\u610f\u6570\u636e\u3002\u7528\u4e8e\u91cd\u6784\u7b7e\u540d\u3002\u5982\u679c\u60a8\u5e0c\u671b\u8bb8\u53ef\u7b7e\u540d\u6062\u590d\u4e5f\u9a8c\u8bc1\u5176\u4ed6\u6570\u636e\uff0c\u8bf7\u4f20\u9012\u6b64\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"witnessTypeString - \u5b9a\u4e49\u4e86\u4ece\u5176\u6563\u5217\u89c1\u8bc1\u8005\u7684\u7c7b\u578b\u6570\u636e\u7684\u5b57\u7b26\u4e32\u3002\u5b83\u8fd8\u5fc5\u987b\u5305\u62ec",(0,a.kt)("inlineCode",{parentName:"li"},"TokenPermissions"),"\u7ed3\u6784\u5e76\u9075\u5faa",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712"),"\u7684\u7ed3\u6784\u987a\u5e8f\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ul"},"signature - \u5bf9\u8bb8\u53ef\u6570\u636e\u7684\u7b7e\u540d\u3002\u652f\u6301EOA\u7b7e\u540d\u3001\u7531",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-2098"},"EIP-2098"),"\u5b9a\u4e49\u7684\u7d27\u51d1\u7b7e\u540d\u4ee5\u53ca\u7531",(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1271"},"EIP-1271"),"\u5b9a\u4e49\u7684\u5408\u7ea6\u7b7e\u540d")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"permitWitnessTransferFrom"),"\u53c2\u6570\u793a\u4f8b")),(0,a.kt)("p",null,"\u5982\u679c\u96c6\u6210\u5408\u7ea6\u4e5f\u5e0c\u671b\u7b7e\u7f72\u8005\u9a8c\u8bc1\u5173\u4e8e\u4ea4\u6613\u7684\u4fe1\u606f\uff0c\u5219\u96c6\u6210\u5408\u7ea6\u53ef\u80fd\u4f1a\u8981\u6c42\u7b7e\u7f72\u8005\u540c\u65f6\u7b7e\u7f72\u6211\u4eec\u4e0b\u9762\u5b9a\u4e49\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ExampleTrade"),"\u5bf9\u8c61\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"struct ExampleTrade {\n    address exampleTokenAddress;\n    uint256 exampleMinimumAmountOut;\n}\n")),(0,a.kt)("p",null,"\u9075\u5faaEIP-721\uff0c\u6570\u636e\u7684typehash\u5c06\u7531\u4ee5\u4e0b\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes32 _EXAMPLE_TRADE_TYPEHASH = keccak256('ExampleTrade(address exampleTokenAddress,uint256 exampleMinimumAmountOut)');\n")),(0,a.kt)("p",null,"\u4e0e\u8bb8\u53ef\u6d88\u606f\u4e00\u8d77\u4f20\u9012\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"witness"),"\u5e94\u8be5\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"}," bytes32 witness = keccak256(\n            abi.encode(_EXAMPLE_TRADE_TYPEHASH, exampleTrade.exampleTokenAddress, exampleTrade.exampleMinimumAmountOut));\n")),(0,a.kt)("p",null,"\u5e76\u4e14\u8981\u4f20\u9012\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"witnessTypeString"),"\u5e94\u8be5\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'string constant witnessTypeString = "ExampleTrade witness)ExampleTrade(address exampleTokenAddress,uint256 exampleMinimumAmountOut)TokenPermissions(address token,uint256 amount)"\n')),(0,a.kt)("p",null,"\u91cd\u8981\u7684\u662f\u8981\u6ce8\u610f\uff0c\u5728\u6563\u5217\u591a\u4e2a\u7c7b\u578b\u7684\u7ed3\u6784\u65f6\uff0c\u7c7b\u578b\u5b57\u7b26\u4e32\u4e2d\u7684\u7ed3\u6784\u987a\u5e8f\u5f88\u91cd\u8981\u3002\u53c2\u8003EIP-721\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u7ed3\u6784\u7c7b\u578b\u5f15\u7528\u4e86\u5176\u4ed6\u7ed3\u6784\u7c7b\u578b\uff08\u800c\u8fd9\u4e9b\u7c7b\u578b\u53c8\u5f15\u7528\u4e86\u66f4\u591a\u7ed3\u6784\u7c7b\u578b\uff09\uff0c\u5219\u6536\u96c6\u5f15\u7528\u7684\u7ed3\u6784\u7c7b\u578b\u96c6\uff0c\u6309\u540d\u79f0\u6392\u5e8f\uff0c\u5e76\u9644\u52a0\u5230\u7f16\u7801\u4e2d\u3002\u4e00\u4e2a\u793a\u4f8b\u7f16\u7801\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Transaction(Person from,Person to,Asset tx)Asset(address token,uint256 amount)Person(address wallet,string name)"))),(0,a.kt)("h2",{id:"\u975e\u5355\u8c03nonce\u6a21\u5f0f"},"\u975e\u5355\u8c03nonce\u6a21\u5f0f"),(0,a.kt)("p",null,"\u6211\u4eec\u4e0d\u4f7f\u7528\u9012\u589e\u7684nonce\uff0c\u800c\u662f\u5f15\u5165\u975e\u5355\u8c03\u6216\u65e0\u5e8f\u7684nonce\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"nonceBitmap"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nonceBitmap"),"\u5c06\u6240\u6709\u8005\u7684\u5730\u5740\u6620\u5c04\u5230uint248\u503c\uff0c\u6211\u4eec\u5c06\u79f0\u4e4b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"wordPos"),"\uff0c\u8fd9\u662f\u6240\u9700\u4f4d\u56fe\u7684\u7d22\u5f15\u3002\u67092",(0,a.kt)("strong",{parentName:"p"},"248\u53ef\u80fd\u7684\u7d22\u5f15\u548c2"),"248\u53ef\u80fd\u7684\u4f4d\u56fe\uff0c\u5176\u4e2d\u6bcf\u4e2a\u4f4d\u56fe\u6301\u6709256\u4f4d\u3002\u5fc5\u987b\u7ffb\u8f6c\u4e00\u4e2a\u4f4d\u4ee5\u9632\u6b62\u7528\u6237\u7684\u7b7e\u540d\u91cd\u653e\u3002\u810f\u4f4d\u53ef\u80fd\u65e0\u6cd5\u518d\u6b21\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// nonceBitmap[ownerAddress][wordPosition]\u68c0\u7d22\u4e00\u4e2auint256\u4f4d\u56fe\nmapping(address => mapping(uint248 => uint256)) public nonceBitmap;\n")),(0,a.kt)("p",null,"\u7528\u6237\u5c06\u7b7e\u7f72\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"uint256 nonce"),"\u503c\uff0c\u5176\u4e2d\u524d248\u4f4d\u5bf9\u5e94\u4e8e\u8981\u5f04\u810f\u7684\u4f4d\u56fe\u7684\u5b57\u4f4d\u7f6e\uff0c\u6700\u540e8\u4f4d\u5bf9\u5e94\u4e8e\u5b9e\u9645\u8981\u7ffb\u8f6c\u7684\u4f4d\u4f4d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"uint248 wordPos = uint248(nonce >> 8);\nuint8 bitPos = uint8(nonce);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 bitmap = nonceBitmap[wordPos][bitPos]\n")),(0,a.kt)("h2",{id:"\u5b89\u5168\u8003\u8651"},"\u5b89\u5168\u8003\u8651"),(0,a.kt)("p",null,"\u96c6\u6210\u5408\u7ea6\u5fc5\u987b\u68c0\u67e5\u4ee3\u5e01\u662f\u5426\u7531\u6765\u81ea\u7b7e\u7f72\u8005\u7684\u89e6\u53d1\u8c03\u7528\u91ca\u653e\uff0c\u6216\u8005\u7b7e\u7f72\u8005\u662f\u5426\u6253\u7b97\u8ba9\u5176\u4ed6\u4eba\u91ca\u653e\u4ed6\u4eec\u7684\u7b7e\u540d\u3002"),(0,a.kt)("aside",null,"\ud83d\udca1 \u8003\u8651\u8fd9\u4e2a\u573a\u666f\uff1a",(0,a.kt)("p",null,"\u4e00\u4e2a\u540d\u53ebBob\u7684\u7b7e\u7f72\u8005\u7b7e\u7f72\u4e86\u4e00\u4e2a\u8bb8\u53ef\uff0c\u4ee5\u8def\u7531\u5668\u5408\u7ea6\u4f5c\u4e3a\u6388\u6743\u7684\u82b1\u8d39\u8005\u6765\u8f6c\u79fb100 USDC\u3002\u8def\u7531\u5668\u5408\u7ea6\u4ece\u672a\u68c0\u67e5\u8c03\u7528\u8005\u662f\u8c01\uff0c\u4f46\u4f1a\u5728Permit2\u5408\u7ea6\u4e0a\u82b1\u8d39\u4efb\u4f55\u8bb8\u53ef\u6d88\u606f\u3002\u653b\u51fb\u8005Eve\u53ef\u4ee5\u7a83\u53d6Bob\u7684\u7b7e\u540d\uff0c\u5c06\u5176\u4f20\u9012\u7ed9\u8def\u7531\u5668\uff0c\u81ea\u5df1\u4f5c\u4e3a\u63a5\u6536\u8005\uff0c\u7136\u540e\u5c06Bob\u7684\u4ee3\u5e01\u8f6c\u79fb\u5230\u81ea\u5df1\u624b\u4e2d\u3002")),(0,a.kt)("p",null,"\u901a\u7528\u8def\u7531\u5668\u901a\u8fc7\u68c0\u67e5\u8def\u7531\u5408\u7ea6\u5185\u90e8\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"msg.sender"),"\u662f\u5426\u4e3a\u9884\u671f\u7684\u82b1\u8d39\u8005\u6765\u9632\u8303\u8fd9\u79cd\u60c5\u51b5\uff0c\u65b9\u6cd5\u662f\u5728\u4efb\u4f55\u8bb8\u53ef\u8c03\u7528\u4e2d\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"msg.sender"),"\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"owner"),"\u53c2\u6570\u4f20\u9012\uff0c\u5e76\u5728\u4efb\u4f55\u8f6c\u79fb\u8c03\u7528\u4e2d\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"msg.sender"),"\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"from"),"\u53c2\u6570\u4f20\u9012\u3002"))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=o(n),c=a,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);