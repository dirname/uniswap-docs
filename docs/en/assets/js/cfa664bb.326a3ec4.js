"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[862],{38743:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const i={},l=void 0,o={unversionedId:"contracts/v3/reference/core/libraries/TickBitmap",id:"contracts/v3/reference/core/libraries/TickBitmap",title:"TickBitmap",description:"Stores a packed mapping of tick index to its initialized state",source:"@site/docs/contracts/v3/reference/core/libraries/TickBitmap.md",sourceDirName:"contracts/v3/reference/core/libraries",slug:"/contracts/v3/reference/core/libraries/TickBitmap",permalink:"/uniswap-docs/en/contracts/v3/reference/core/libraries/TickBitmap",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/core/libraries/TickBitmap.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"Tick",permalink:"/uniswap-docs/en/contracts/v3/reference/core/libraries/Tick"},next:{title:"TickMath",permalink:"/uniswap-docs/en/contracts/v3/reference/core/libraries/TickMath"}},c={},p=[{value:"Functions",id:"functions",level:2},{value:"flipTick",id:"fliptick",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"nextInitializedTickWithinOneWord",id:"nextinitializedtickwithinoneword",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values",level:4}],s={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Stores a packed mapping of tick index to its initialized state"),(0,r.kt)("p",null,"The mapping uses int16 for keys since ticks are represented as int24 and there are 256 (2^8) values per word."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"fliptick"},"flipTick"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function flipTick(\n    mapping(int16 => uint256) self,\n    int24 tick,\n    int24 tickSpacing\n  ) internal\n")),(0,r.kt)("p",null,"Flips the initialized state for a given tick from false to true, or vice versa"),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"self")),(0,r.kt)("td",{parentName:"tr",align:"left"},"mapping(int16 => uint256)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The mapping in which to flip the tick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The tick to flip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickSpacing")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The spacing between usable ticks")))),(0,r.kt)("h3",{id:"nextinitializedtickwithinoneword"},"nextInitializedTickWithinOneWord"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function nextInitializedTickWithinOneWord(\n    mapping(int16 => uint256) self,\n    int24 tick,\n    int24 tickSpacing,\n    bool lte\n  ) internal view returns (int24 next, bool initialized)\n")),(0,r.kt)("p",null,"Returns the next initialized tick contained in the same word (or adjacent word) as the tick that is either\nto the left (less than or equal to) or right (greater than) of the given tick"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"self")),(0,r.kt)("td",{parentName:"tr",align:"left"},"mapping(int16 => uint256)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The mapping in which to compute the next initialized tick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The starting tick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickSpacing")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The spacing between usable ticks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lte")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to search for the next initialized tick to the left (less than or equal to the starting tick)")))),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"next")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The next initialized or uninitialized tick up to 256 ticks away from the current tick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"initialized")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether the next tick is initialized, as the function only searches within up to 256 ticks")))))}d.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=p(n),m=r,f=k["".concat(c,".").concat(m)]||k[m]||d[m]||i;return n?a.createElement(f,l(l({ref:e},s),{},{components:n})):a.createElement(f,l({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"}}]);