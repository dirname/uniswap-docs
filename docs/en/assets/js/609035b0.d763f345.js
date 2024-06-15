"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[5485],{96173:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=t(83117),i=(t(67294),t(3905));const o={},c=void 0,a={unversionedId:"contracts/v3/reference/periphery/libraries/HexStrings",id:"contracts/v3/reference/periphery/libraries/HexStrings",title:"HexStrings",description:"Functions",source:"@site/docs/contracts/v3/reference/periphery/libraries/HexStrings.md",sourceDirName:"contracts/v3/reference/periphery/libraries",slug:"/contracts/v3/reference/periphery/libraries/HexStrings",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/libraries/HexStrings",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/libraries/HexStrings.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"ChainId",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/libraries/ChainId"},next:{title:"LiquidityAmounts",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/libraries/LiquidityAmounts"}},s={},p=[{value:"Functions",id:"functions",level:2},{value:"toHexString",id:"tohexstring",level:3},{value:"toHexStringNoPrefix",id:"tohexstringnoprefix",level:3}],l={toc:p};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"tohexstring"},"toHexString"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function toHexString(\n  ) internal returns (string)\n")),(0,i.kt)("p",null,"Converts a ",(0,i.kt)("inlineCode",{parentName:"p"},"uint256")," to its ASCII ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," hexadecimal representation with fixed length."),(0,i.kt)("p",null,"Credit to Open Zeppelin under MIT license ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/243adff49ce1700e0ecb99fe522fb16cff1d1ddc/contracts/utils/Strings.sol#L55"},"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/243adff49ce1700e0ecb99fe522fb16cff1d1ddc/contracts/utils/Strings.sol#L55")),(0,i.kt)("h3",{id:"tohexstringnoprefix"},"toHexStringNoPrefix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function toHexStringNoPrefix(\n  ) internal returns (string)\n")))}u.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,g=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(g,c(c({ref:r},l),{},{components:t})):n.createElement(g,c({ref:r},l))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);