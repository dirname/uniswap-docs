"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[8241],{90520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(83117),o=(t(67294),t(3905));const r={id:"liscense-modifications",title:"License Modifications"},s=void 0,i={unversionedId:"contracts/v3/guides/governance/liscense-modifications",id:"contracts/v3/guides/governance/liscense-modifications",title:"License Modifications",description:"Licensing",source:"@site/docs/contracts/v3/guides/governance/license-modifications.md",sourceDirName:"contracts/v3/guides/governance",slug:"/contracts/v3/guides/governance/liscense-modifications",permalink:"/uniswap-docs/en/contracts/v3/guides/governance/liscense-modifications",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/guides/governance/license-modifications.md",tags:[],version:"current",frontMatter:{id:"liscense-modifications",title:"License Modifications"},sidebar:"contractsSidebar",previous:{title:"The Final Contract",permalink:"/uniswap-docs/en/contracts/v3/guides/flash-integrations/final-contract"},next:{title:"Overview",permalink:"/uniswap-docs/en/contracts/v3/reference/overview"}},l={},c=[{value:"Licensing",id:"licensing",level:2},{value:"Proposals",id:"proposals",level:2},{value:"Populating Proposal Calldata",id:"populating-proposal-calldata",level:2},{value:"Helpful Links",id:"helpful-links",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"licensing"},"Licensing"),(0,o.kt)("p",null,"Please note that Uniswap V3 is under ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-core#licensing"},"BUSL license")," until the Change Date, currently 2023-04-01. Exceptions to the license may be specified by Uniswap Governance via Additional Use Grants, which can, for example, allow V3 to be deployed on new chains. Please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://gov.uniswap.org/t/community-governance-process/7732"},"Uniswap Governance process")," to request a DAO vote for exceptions to the license, or to move up the Change Date."),(0,o.kt)("p",null,"License changes must be enacted via the ",(0,o.kt)("a",{parentName:"p",href:"https://ens.domains/"},"ENS domain")," uniswap.eth, which is controlled by Uniswap Governance. This means (among other things) that Governance has the power to associate arbitrary text with any subdomain of the form X.uniswap.eth. Modifications of the Change Date should be specified at v3-core-license-date.uniswap.eth, and Additional Use Grants should be specified at v3-core-license-grants.uniswap.eth. The process for associating text with a subdomain is detailed below:"),(0,o.kt)("details",null,(0,o.kt)("summary",null," ENS Subdomain Details & Process "),(0,o.kt)("p",null,"If the subdomain does not already exist which can be checked ",(0,o.kt)("a",{parentName:"p",href:"https://app.ens.domains/name/uniswap.eth/subdomains"},"here"),", the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ens.domains/contract-api-reference/ens#set-subdomain-record"},(0,o.kt)("inlineCode",{parentName:"a"},"setSubnodeRecord"))," function of the ENS registry should be called with the following arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"namehash('uniswap.eth')")," (",(0,o.kt)("inlineCode",{parentName:"li"},"0xa2a03459171c76bff45817330c10ef9f8af07011a33005b73b50189bbc7e7132"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"label"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"keccak256('v3-core-license-date')")," (",(0,o.kt)("inlineCode",{parentName:"li"},"0xee55740591b0fd5d7a28a6edc49567f6ff3febbe942ec0e2fa49ee536595085b"),") or ",(0,o.kt)("inlineCode",{parentName:"li"},"keccak256('v3-core-license-grants')")," (",(0,o.kt)("inlineCode",{parentName:"li"},"0x15ff9b5bd7642701a10e5ea8fb29c957ffda4854cd028e9f6218506e6b509af2"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"owner"),": ",(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x1a9c8182c09f50c8318d769245bea52c32be35bc"},(0,o.kt)("inlineCode",{parentName:"a"},"0x1a9C8182C09F50C8318d769245beA52c32BE35BC")),", the Uniswap Governance Timelock"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resolver"),": ",(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41"},(0,o.kt)("inlineCode",{parentName:"a"},"0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41")),", the public ENS resolver."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ttl"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"0"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Then, the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.ens.domains/contract-api-reference/publicresolver#set-text-data"},(0,o.kt)("inlineCode",{parentName:"a"},"setText"))," function of the public resolver should be called with the following arguments:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"namehash('v3-core-license-date.uniswap.eth')")," (",(0,o.kt)("inlineCode",{parentName:"li"},"0x0505ec7822d61b4cfb294f137d1a7f0ceedf162f555a4bf2f4be58a07cf266c5"),") or ",(0,o.kt)("inlineCode",{parentName:"li"},"namehash('v3-core-license-grants.uniswap.eth')")," (",(0,o.kt)("inlineCode",{parentName:"li"},"0xa35d592ec6e5289a387cba1d5f82be794f495bd5a361a1fb314687c6aefea1f4"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key"),": A suitable label, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"notice"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),": The text of the change. Note that text may already be associated with the subdomain in question. If it does, it can be reviewed at the following URLs for either ",(0,o.kt)("a",{parentName:"li",href:"https://app.ens.domains/name/v3-core-license-date.uniswap.eth/details"},"v3-core-license-date")," or ",(0,o.kt)("a",{parentName:"li",href:"https://app.ens.domains/name/v3-core-license-grants.uniswap.eth/details"},"v3-core-license-grants"),", and appended to as desired.")),(0,o.kt)("p",null,"Note: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ens.domains/contract-api-reference/publicresolver#set-content-hash"},(0,o.kt)("inlineCode",{parentName:"a"},"setContentHash"))," may also be used to associate text with a subdomain, but ",(0,o.kt)("inlineCode",{parentName:"p"},"setText")," is presented above for simplicity."),(0,o.kt)("p",null,"These contract function calls should then be encoded into a governance proposal, and approved by Uniswap Governance.")),(0,o.kt)("h2",{id:"proposals"},"Proposals"),(0,o.kt)("p",null,"Proposals are submitted via ",(0,o.kt)("inlineCode",{parentName:"p"},"GovernorBravoDelegator")," @ ",(0,o.kt)("inlineCode",{parentName:"p"},"0x408ED6354d4973f66138C91495F2f2FCbd8724C3"),", a proxy contract currently pointing to the implementation at ",(0,o.kt)("inlineCode",{parentName:"p"},"0x53a328F4086d7C0F1Fa19e594c9b842125263026"),". NPM packages for consuming the governance contract ABIs, and details on previous versions, are available ",(0,o.kt)("a",{parentName:"p",href:"../../../../concepts/governance/overview"},"here")),(0,o.kt)("details",null,(0,o.kt)("summary",null," Governor Bravo #propose Parameters "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n    * @notice Function used to propose a new proposal. Sender must have delegates above the proposal threshold\n    * @param targets Target addresses for proposal calls\n    * @param values Eth values for proposal calls\n    * @param signatures Function signatures for proposal calls\n    * @param calldatas Calldatas for proposal calls\n    * @param description String description of the proposal\n    * @return Proposal id of new proposal\n    */\nfunction propose(\n    address[] memory targets,\n    uint[] memory values,\n    string[] memory signatures,\n    bytes[] memory calldatas,\n    string memory description\n) public returns (uint)\n\n"))),(0,o.kt)("h2",{id:"populating-proposal-calldata"},"Populating Proposal Calldata"),(0,o.kt)("p",null,"Below is an example of using a scripting environment to generate a proposal. This is for educational purposes only - that example assumes access to a private key with a sufficient amount of delegated UNI to submit a proposal, which is an insecure practice. There are several ways to generate a proposal transaction and submit it to Ethereum; this example should only be used for reference and not in production."),(0,o.kt)("details",null,(0,o.kt)("summary",null," Populating `Propose` Calldata "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Contract, ethers } from 'ethers'\nimport { namehash } from '@ethersproject/hash'\nimport { keccak256 } from '@ethersproject/keccak256'\nimport { Interface } from '@ethersproject/abi'\n// note: contract ABIs should be imported via etherscan\nimport { GOVERNOR_BRAVO_ABI, ENS_REGISTRY_ABI, ENS_PUBLIC_RESOLVER_ABI } from './utils'\n\nconst GOVERNOR_BRAVO_ADDRESS: string = '0x408ED6354d4973f66138C91495F2f2FCbd8724C3'\nconst ENS_REGISTRY_ADDRESS: string = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'\nconst PUBLIC_ENS_RESOLVER_ADDRESS: string = '0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41'\nconst UNISWAP_GOVERNANCE_TIMELOCK_ADDRESS: string = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'\n\nconst provider = new ethers.providers.JsonRpcProvider('YOUR_RPC_URL_HERE')\nconst signer = provider.getSigner('YOUR_SIGNER_ADDRESS_HERE')\n\n// note: setting the subnode record should only take place if the subdomain does not already exist\nconst ensRegistryInterface = new Interface(ENS_REGISTRY_ABI)\nconst setSubnodeRecordCalldata = ensRegistryInterface.encodeFunctionData('setSubnodeRecord', [\n  // node: The parent node\n  namehash('uniswap.eth'),\n  // label: The hash of the label specifying the subnode\n  keccak256('v3-core-license-grants'),\n  // owner: The address of the new owner\n  UNISWAP_GOVERNANCE_TIMELOCK_ADDRESS,\n  // resolver: The address of the resolver\n  PUBLIC_ENS_RESOLVER_ADDRESS,\n  // ttl: The TTL, i.e., time to live, in seconds\n  0,\n])\n\nconst ensPublicResolverInterface = new Interface(ENS_PUBLIC_RESOLVER_ABI)\nconst setTextCalldata = ensPublicResolverInterface.encodeFunctionData('setText', [\n  // node: The node to update\n  namehash('v3-core-license-grants.uniswap.eth'),\n  // key: The key to set\n  '[your-projects-additional-use-grant-title]',\n  // value: The text data value to set\n  '[your-additional-use-grant-description]',\n])\n\n// Create a new local instance of the governorBravo contract\n// Note that in production the abi should be gathered via etherscan\nconst governorBravo = new Contract(GOVERNOR_BRAVO_ADDRESS, GOVERNOR_BRAVO_ABI, provider)\n\n// the ordered list of target addresses for calls to be made\nconst targets = [ENS_REGISTRY_ADDRESS, PUBLIC_ENS_RESOLVER_ADDRESS]\n\n// The ordered list of values to be passed to the calls to be made. i.e., the amount of\n// ETH values to be transferred within the transaction. as this example does not include\n// the transferring of any ETH, this list is empty.\nconst values = [0, 0]\n\n// The ordered list of function signatures to be called. The signatures arguments\n// are optional, if not provided, the function signature will be inferred from the calldata\nconst signatures = ['', '']\n\n// The ordered list of calldata to be passed to each call in the proposal. The calldata\n// in this example takes the place of the function signature arguments.\nconst calldatas = [setSubnodeRecordCalldata, setTextCalldata]\n\n// the description of the proposal.\nconst description = '# TITLE ## SECTION_EXPLANATION'\n\nasync function main() {\n  try {\n    const txResponse: ethers.providers.TransactionResponse = await governorBravo\n      .connect(signer)\n      .propose(targets, values, signatures, calldatas, description)\n    console.log(`Proposal transaction sent: ${txResponse.hash}`)\n    await txResponse.wait(1)\n    console.log(\n      `Proposal has been mined at blocknumber: ${txResponse.blockNumber}, transaction hash: ${txResponse.hash}`\n    )\n  } catch (error) {\n    console.error(error)\n  }\n}\n\nmain().then(() => console.log('done'))\n"))),(0,o.kt)("h2",{id:"helpful-links"},"Helpful Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x408ED6354d4973f66138C91495F2f2FCbd8724C3#readProxyContract"},"Governor Bravo Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x53a328f4086d7c0f1fa19e594c9b842125263026#code"},"Governor Bravo Delegate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Uniswap/deploy-v3#licensing"},"ENS Subnode Record Update Details"))))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return t?a.createElement(m,s(s({ref:n},p),{},{components:t})):a.createElement(m,s({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);