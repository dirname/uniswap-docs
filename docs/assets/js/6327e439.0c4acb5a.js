"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[2764],{13755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>T,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(83117),o=(t(67294),t(3905));const a={id:"constants",title:"\u5e38\u91cf"},s=void 0,p={unversionedId:"sdk/v1/reference/constants",id:"sdk/v1/reference/constants",title:"\u5e38\u91cf",description:"\u4ee5\u4e0b\u662f SDK \u4e2d\u4f7f\u7528\u7684\u6240\u6709\u5916\u90e8\u5e38\u91cf\u7684\u8be6\u5c3d\u5217\u8868\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/sdk/v1/reference/07-constants.md",sourceDirName:"sdk/v1/reference",slug:"/sdk/v1/reference/constants",permalink:"/uniswap-docs/sdk/v1/reference/constants",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v1/reference/07-constants.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"constants",title:"\u5e38\u91cf"},sidebar:"sdkSidebar",previous:{title:"\u8fdb\u884c\u4ea4\u6613",permalink:"/uniswap-docs/sdk/v1/reference/transact"},next:{title:"\u7c7b\u578b",permalink:"/uniswap-docs/sdk/v1/reference/types"}},u={},c=[],i={toc:c};function T(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f SDK \u4e2d\u4f7f\u7528\u7684\u6240\u6709\u5916\u90e8\u5e38\u91cf\u7684\u8be6\u5c3d\u5217\u8868\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import BigNumber from 'bignumber.js'\n\nimport ERC20 from './abis/ERC20.json'\nimport FACTORY from './abis/FACTORY.json'\nimport EXCHANGE from './abis/EXCHANGE.json'\n\nexport const ETH = 'ETH'\n\nexport enum SUPPORTED_CHAIN_ID {\n  Mainnet = 1,\n  Ropsten = 3,\n  Rinkeby = 4,\n  Kovan = 42,\n}\n\nexport const FACTORY_ADDRESS: { [key: number]: string } = {}\n\nexport const FACTORY_ABI: string = JSON.stringify(FACTORY)\nexport const EXCHANGE_ABI: string = JSON.stringify(EXCHANGE)\n\nexport enum TRADE_TYPE {\n  ETH_TO_TOKEN = 'ETH_TO_TOKEN',\n  TOKEN_TO_ETH = 'TOKEN_TO_ETH',\n  TOKEN_TO_TOKEN = 'TOKEN_TO_TOKEN',\n}\n\nexport enum TRADE_EXACT {\n  INPUT = 'INPUT',\n  OUTPUT = 'OUTPUT',\n}\n\nexport enum TRADE_METHODS {\n  ethToTokenSwapInput = 'ethToTokenSwapInput',\n  ethToTokenTransferInput = 'ethToTokenTransferInput',\n  ethToTokenSwapOutput = 'ethToTokenSwapOutput',\n  ethToTokenTransferOutput = 'ethToTokenTransferOutput',\n  tokenToEthSwapInput = 'tokenToEthSwapInput',\n  tokenToEthTransferInput = 'tokenToEthTransferInput',\n  tokenToEthSwapOutput = 'tokenToEthSwapOutput',\n  tokenToEthTransferOutput = 'tokenToEthTransferOutput',\n  tokenToTokenSwapInput = 'tokenToTokenSwapInput',\n  tokenToTokenTransferInput = 'tokenToTokenTransferInput',\n  tokenToTokenSwapOutput = 'tokenToTokenSwapOutput',\n  tokenToTokenTransferOutput = 'tokenToTokenTransferOutput',\n}\n\nexport const TRADE_METHOD_IDS: { [key: string]: string } = {}\n\nexport enum FIXED_UNDERFLOW_BEHAVIOR {\n  ZERO = 'ZERO',\n  LESS_THAN = 'LESS_THAN',\n  ONE_DIGIT = 'ONE_DIGIT',\n}\n")))}T.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>O});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},T={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),f=c(t),O=o,l=f["".concat(u,".").concat(O)]||f[O]||T[O]||a;return t?r.createElement(l,s(s({ref:n},i),{},{components:t})):r.createElement(l,s({ref:n},i))}));function O(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);