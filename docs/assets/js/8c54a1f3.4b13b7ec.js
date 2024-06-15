"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[1615],{65166:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(83117),i=(t(67294),t(3905));const o={},a=void 0,c={unversionedId:"contracts/v3/reference/periphery/libraries/HexStrings",id:"contracts/v3/reference/periphery/libraries/HexStrings",title:"HexStrings",description:"\u51fd\u6570",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/periphery/libraries/HexStrings.md",sourceDirName:"contracts/v3/reference/periphery/libraries",slug:"/contracts/v3/reference/periphery/libraries/HexStrings",permalink:"/uniswap-docs/contracts/v3/reference/periphery/libraries/HexStrings",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/libraries/HexStrings.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"ChainId",permalink:"/uniswap-docs/contracts/v3/reference/periphery/libraries/ChainId"},next:{title:"LiquidityAmounts",permalink:"/uniswap-docs/contracts/v3/reference/periphery/libraries/LiquidityAmounts"}},p={},s=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"toHexString",id:"tohexstring",level:3},{value:"toHexStringNoPrefix",id:"tohexstringnoprefix",level:3}],l={toc:s};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,i.kt)("h3",{id:"tohexstring"},"toHexString"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function toHexString(\n  ) internal returns (string)\n")),(0,i.kt)("p",null,"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"uint256")," \u8f6c\u6362\u4e3a\u5176\u56fa\u5b9a\u957f\u5ea6\u7684 ASCII ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," \u5341\u516d\u8fdb\u5236\u8868\u793a\u3002"),(0,i.kt)("p",null,"\u6b64\u529f\u80fd\u57fa\u4e8e MIT \u8bb8\u53ef\u4e0b\u7684 Open Zeppelin\uff0c\u6e90\u4ee3\u7801\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/243adff49ce1700e0ecb99fe522fb16cff1d1ddc/contracts/utils/Strings.sol#L55"},"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/243adff49ce1700e0ecb99fe522fb16cff1d1ddc/contracts/utils/Strings.sol#L55")),(0,i.kt)("h3",{id:"tohexstringnoprefix"},"toHexStringNoPrefix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function toHexStringNoPrefix(\n  ) internal returns (string)\n")))}u.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,g=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(g,a(a({ref:r},l),{},{components:t})):n.createElement(g,a({ref:r},l))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);