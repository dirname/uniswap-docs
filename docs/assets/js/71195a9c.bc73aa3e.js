"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[7576],{48660:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(83117),a=(r(67294),r(3905));const i={},l=void 0,o={unversionedId:"contracts/v3/reference/periphery/staker/libraries/RewardMath",id:"contracts/v3/reference/periphery/staker/libraries/RewardMath",title:"RewardMath",description:"\u5141\u8bb8\u6839\u636e\u6743\u76ca\u548c\u6fc0\u52b1\u63aa\u65bd\u7684\u67d0\u4e9b\u53c2\u6570\u8ba1\u7b97\u5956\u52b1",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/periphery/staker/libraries/RewardMath.md",sourceDirName:"contracts/v3/reference/periphery/staker/libraries",slug:"/contracts/v3/reference/periphery/staker/libraries/RewardMath",permalink:"/uniswap-docs/contracts/v3/reference/periphery/staker/libraries/RewardMath",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/staker/libraries/RewardMath.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"NFTPositionInfo",permalink:"/uniswap-docs/contracts/v3/reference/periphery/staker/libraries/NFTPositionInfo"},next:{title:"Base64Test",permalink:"/uniswap-docs/contracts/v3/reference/periphery/test/Base64Test"}},p={},d=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"computeRewardAmount",id:"computerewardamount",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4}],c={toc:d};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5141\u8bb8\u6839\u636e\u6743\u76ca\u548c\u6fc0\u52b1\u63aa\u65bd\u7684\u67d0\u4e9b\u53c2\u6570\u8ba1\u7b97\u5956\u52b1"),(0,a.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,a.kt)("h3",{id:"computerewardamount"},"computeRewardAmount"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function computeRewardAmount(\n    uint256 totalRewardUnclaimed,\n    uint160 totalSecondsClaimedX128,\n    uint256 startTime,\n    uint256 endTime,\n    uint128 liquidity,\n    uint160 secondsPerLiquidityInsideInitialX128,\n    uint160 secondsPerLiquidityInsideX128,\n    uint256 currentTime\n  ) internal pure returns (uint256 reward, uint160 secondsInsideX128)\n")),(0,a.kt)("p",null,"\u6839\u636e\u6fc0\u52b1\u548c\u6743\u76ca\u7684\u53c2\u6570\u8ba1\u7b97\u5e94\u5f97\u7684\u5956\u52b1\u91d1\u989d"),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"totalRewardUnclaimed")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5bf9\u4e8e\u6fc0\u52b1\u63aa\u65bd\uff0c\u672a\u8ba4\u9886\u5956\u52b1\u7684\u603b\u91d1\u989d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"totalSecondsClaimedX128")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5df2\u7ecf\u4e3a\u6fc0\u52b1\u63aa\u65bd\u8ba4\u9886\u7684\u5b8c\u6574\u6d41\u52a8\u6027\u79d2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"startTime")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6fc0\u52b1\u5956\u52b1\u5f00\u59cb\u7684\u7eaa\u5143\u79d2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"endTime")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5956\u52b1\u4e0d\u518d\u4ee5\u6ef4\u5b9a\u65b9\u5f0f\u53d1\u653e\u7684\u7eaa\u5143\u79d2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5728\u6d4b\u91cf\u5feb\u7167\u7684\u5468\u671f\u5185\u5047\u8bbe\u4fdd\u6301\u4e0d\u53d8\u7684\u6d41\u52a8\u6027\u91d1\u989d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"secondsPerLiquidityInsideInitialX128")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u671f\u521d\u7684\u6d41\u52a8\u6027\u523b\u5ea6\u8303\u56f4\u5185\u7684\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u79d2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"secondsPerLiquidityInsideX128")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u533a\u5757\u65f6\u95f4\u6233\u65f6\u7684\u6d41\u52a8\u6027\u523b\u5ea6\u8303\u56f4\u5185\u7684\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u79d2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"currentTime")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u533a\u5757\u65f6\u95f4\u6233\uff0c\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e\u5f00\u59cb\u65f6\u95f4")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"reward")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u5f97\u7684\u5956\u52b1\u91d1\u989d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"secondsInsideX128")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5728\u6743\u76ca\u671f\u95f4\uff0c\u4f4d\u7f6e\u8303\u56f4\u5185\u603b\u6d41\u52a8\u6027\u79d2\u6570")))))}s.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=d(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return r?n.createElement(f,l(l({ref:e},c),{},{components:r})):n.createElement(f,l({ref:e},c))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);