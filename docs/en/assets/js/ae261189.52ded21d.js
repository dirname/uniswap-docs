"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[8117],{84424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const o={id:"common-errors",title:"Common Errors"},s=void 0,i={unversionedId:"contracts/v2/reference/smart-contracts/common-errors",id:"contracts/v2/reference/smart-contracts/common-errors",title:"Common Errors",description:"This document covers a few error codes frequently encountered while building on Uniswap V2.",source:"@site/docs/contracts/v2/reference/smart-contracts/07-common-errors.md",sourceDirName:"contracts/v2/reference/smart-contracts",slug:"/contracts/v2/reference/smart-contracts/common-errors",permalink:"/uniswap-docs/en/contracts/v2/reference/smart-contracts/common-errors",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v2/reference/smart-contracts/07-common-errors.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"common-errors",title:"Common Errors"},sidebar:"contractsSidebar",previous:{title:"Router02",permalink:"/uniswap-docs/en/contracts/v2/reference/smart-contracts/router-02"},next:{title:"V2 Deployment Addresses",permalink:"/uniswap-docs/en/contracts/v2/reference/smart-contracts/v2-deployments"}},c={},l=[{value:"Fee On Transfer Tokens",id:"fee-on-transfer-tokens",level:2},{value:"Inclusive Fee On Transfer Tokens",id:"inclusive-fee-on-transfer-tokens",level:3},{value:"Exclusive Fee On Transfer Tokens",id:"exclusive-fee-on-transfer-tokens",level:3},{value:"Rebasing Tokens",id:"rebasing-tokens",level:2},{value:"Negative Rebasing Tokens",id:"negative-rebasing-tokens",level:3},{value:"Positive Rebasing Tokens",id:"positive-rebasing-tokens",level:3},{value:"A Note on Rebasing Tokens",id:"a-note-on-rebasing-tokens",level:3}],u={toc:l};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document covers a few error codes frequently encountered while building on Uniswap V2."),(0,a.kt)("h1",{id:"uniswapv2-k"},"UniswapV2: K"),(0,a.kt)("p",null,"This is an error that is frequently encountered, and requires a bit of context to understand it."),(0,a.kt)("p",null,"The Uniswap constant product formula is \u201cX ","*"," Y = K\u201d. Where X and Y represent the respective reserve balances of two ERC-20 tokens, and \u201cK\u201d represents the product of the reserves. It is this \u201cK\u201d to which the \u201cK\u201d error refers."),(0,a.kt)("p",null,"In essence, the \u201cK\u201d error means that a trade was attempted that somehow left the trading pair with less reserves than should be there, and as a result the transaction is reverted."),(0,a.kt)("p",null,"This can have a few different causes."),(0,a.kt)("h2",{id:"fee-on-transfer-tokens"},"Fee On Transfer Tokens"),(0,a.kt)("p",null,"The most common examples are caused by \u201cfee on transfer\u201d tokens."),(0,a.kt)("h3",{id:"inclusive-fee-on-transfer-tokens"},"Inclusive Fee On Transfer Tokens"),(0,a.kt)("p",null,"In most cases, a fee on transfer token burns or diverts a small portion of every transfer such that the recipient of the transfer ends up with slightly less than the sender gave. This is called an \u201cinclusive\u201d fee on transfer."),(0,a.kt)("p",null,"In the case of inclusive fee on transfer tokens, you can use the corresponding swap functions in the router contract which end with ",(0,a.kt)("a",{parentName:"p",href:"../smart-contracts/router-02#swapexacttokensfortokenssupportingfeeontransfertokens"},"\u201cSupportingFeeOnTransfer\u201d"),". These functions succeed by adjusting the \u201camountOutMin\u201d parameter to check the recipient amount rather than the sending amount when calculating the invariant."),(0,a.kt)("h3",{id:"exclusive-fee-on-transfer-tokens"},"Exclusive Fee On Transfer Tokens"),(0,a.kt)("p",null,"The other type, \u201cexclusive\u201d fee on transfer tokens, work by sending an additional transfer from the sending address after the primary transfer. Because the router contract cannot anticipate this trailing transfer when calculating the invariant, the transaction will either revert, or partially succeed by sending the primary transfer but breaking the pool upon the trailing transfer."),(0,a.kt)("p",null,"In the case of exclusive fee on transfer tokens, the SupportingFeeOnTransfer functions may work, but there will be some tokens designed in such a way that they fundamentally break the router. If you are still getting a \u201cK\u201d error when using these functions, you may need to make a fork of the router contract that accommodates your token design."),(0,a.kt)("h2",{id:"rebasing-tokens"},"Rebasing Tokens"),(0,a.kt)("p",null,"The less common instance of the \u201cK\u201d error is as a result of rebasing tokens."),(0,a.kt)("p",null,"Rebasing tokens can alter the balance of any addresses holding their tokens arbitrarily. This usually works at pre specified intervals and as a result of a handful of variables used in the economics of a rebasing token."),(0,a.kt)("p",null,"Rebasing tokens typically work in two ways."),(0,a.kt)("h3",{id:"negative-rebasing-tokens"},"Negative Rebasing Tokens"),(0,a.kt)("p",null,"A negative rebasing token, the more common variant, deflates the balances of token owners. Because the rebasing is not triggered by transfers, the router cannot expect when or how a rebasing will happen. Once it does, the pair reserves will be unbalanced, and the next person to transact with the pair will bear the cost of the delta as a result of the rebasing."),(0,a.kt)("p",null,"Needless to say, an unenviable position."),(0,a.kt)("p",null,"Negative rebasing tokens have solved this error by altering their token contract to call ",(0,a.kt)("a",{parentName:"p",href:"../smart-contracts/pair#sync"},"sync")," on the trading pair at the end of every transaction involving the Uniswap router contract. Those interested in forking the router contract should anticipate that negative rebasing tokens will break the pair until the token contracts are updated to accommodate your new router."),(0,a.kt)("h3",{id:"positive-rebasing-tokens"},"Positive Rebasing Tokens"),(0,a.kt)("p",null,"Positive rebasing tokens arbitrarily increase the balances of token holders. When a positive rebase happens, it creates a surplus that is unaccounted for in the trading pair. Because the extra tokens are unaccounted for in the trading pair, anyone can call skim() on the trading pair and effectively steal the positive difference from the rebalance."),(0,a.kt)("p",null,"While positive rebalancing does not break any functionality of Uniswap, those interested in them should be aware that the positive balance found in any pair will be freely available for taking."),(0,a.kt)("h3",{id:"a-note-on-rebasing-tokens"},"A Note on Rebasing Tokens"),(0,a.kt)("p",null,"For those interested in building a rebasing token, a word of caution: many contracts involving decentralized trading and liquidity provisioning will break upon interacting with your token. An example approach that will lead to much easier integration in future protocols can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://chai.money/about.html"},"CHAI"),". CHAI uses a wrapper function that contains the rebalancing within the wrapper, such that the redeemable token can be easily integrated into many different systems."),(0,a.kt)("h1",{id:"uniswapv2-locked"},"UniswapV2: LOCKED"),(0,a.kt)("p",null,"The LOCKED error is a guard built into the router contract that prevents customized reentrancy contracts from attempting to return malicious code into the router contract at the end of a transaction."),(0,a.kt)("p",null,"This error is commonly encountered when using Ganache CLI to fork the Ethereum mainnet to a local instance as a part of a development environment. The error is a bug in Ganache-Cli that will hopefully be fixed in a future release by the truffle team."),(0,a.kt)("p",null,"A temporary fix is available by simply restarting the local fork."),(0,a.kt)("h1",{id:"no-access-to-archive-node"},"No Access To Archive Node"),(0,a.kt)("p",null,"This is an error with either Metamask or Ganache-CLI. It usually occurs after a local fork is instantiated and contracts are deployed but there is one failed transaction."),(0,a.kt)("p",null,"A temporary fix is available by restarting the local fork and resetting metamask."),(0,a.kt)("h1",{id:"uniswapv2-transfer_failed"},"UniswapV2: TRANSFER_FAILED"),(0,a.kt)("p",null,"This means the core contract was unable to send tokens to the recipient. This is most likely due to a scam token, where the token owner has maliciously disabled the transfer function in a way that allows users to buy the token, but not sell them."),(0,a.kt)("h1",{id:"uniswapv2-expired"},"UniswapV2: EXPIRED"),(0,a.kt)("p",null,"This is a result of a transaction that took too long to be broadcast to the mainnet."),(0,a.kt)("p",null,"Uniswap does not set gas prices natively, so most users default to the suggested gas prices in metamask. Sometimes metamask gets it wrong, though, and sets the gas price too low. If a swap takes more than 20 minutes to execute, the core contract won\u2019t allow it to go through."),(0,a.kt)("h1",{id:"action-requires-an-active-reserve"},"Action Requires an Active Reserve"),(0,a.kt)("p",null,"VM Exception While Processing Transaction: Action Requires an Active Reserve"),(0,a.kt)("p",null,"This is potentially a ganache bug encountered when working on flash swaps. We haven't figured out the source of it yet."),(0,a.kt)("h1",{id:"unable-to-approve-transaction-on-the-front-end"},"Unable To Approve Transaction On The Front End"),(0,a.kt)("p",null,"There are rare circumstances where users are unable to approve a token on the Uniswap front end."),(0,a.kt)("p",null,"This is a result of some token contracts taking steps to defend against malicious contracts that attempt to front run approvals and steal a users tokens. It happens only when the user is trying to increase an approval allowance from a preallocated amount to a larger one, and only happens with a few token contracts."),(0,a.kt)("p",null,"The solution is have the user manually set the router contract approval amount to zero, then to the number they want. The easiest way to do this is through Etherscan."))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);