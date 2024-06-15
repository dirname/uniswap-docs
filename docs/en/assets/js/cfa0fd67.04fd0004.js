"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[3481],{24679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(83117),i=(a(67294),a(3905));const r={},l=void 0,s={unversionedId:"sdk/v3/reference/classes/TickList",id:"sdk/v3/reference/classes/TickList",title:"TickList",description:"@uniswap/v3-sdk / Exports / TickList",source:"@site/docs/sdk/v3/reference/classes/TickList.md",sourceDirName:"sdk/v3/reference/classes",slug:"/sdk/v3/reference/classes/TickList",permalink:"/uniswap-docs/en/sdk/v3/reference/classes/TickList",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v3/reference/classes/TickList.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"TickLibrary",permalink:"/uniswap-docs/en/sdk/v3/reference/classes/TickLibrary"},next:{title:"TickListDataProvider",permalink:"/uniswap-docs/en/sdk/v3/reference/classes/TickListDataProvider"}},k={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods-1",level:2},{value:"binarySearch",id:"binarysearch",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getTick",id:"gettick",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isAtOrAboveLargest",id:"isatorabovelargest",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"isBelowSmallest",id:"isbelowsmallest",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"nextInitializedTick",id:"nextinitializedtick",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"nextInitializedTickWithinOneWord",id:"nextinitializedtickwithinoneword",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"validateList",id:"validatelist",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4}],p={toc:d};function o(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README.md"},"@uniswap/v3-sdk")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules.md"},"Exports")," / TickList"),(0,i.kt)("h1",{id:"class-ticklist"},"Class: TickList"),(0,i.kt)("p",null,"Utility methods for interacting with sorted lists of ticks"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"constructors"},"Constructors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/classes/TickList#constructor"},"constructor"))),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/classes/TickList#binarysearch"},"binarySearch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/classes/TickList#gettick"},"getTick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/classes/TickList#isatorabovelargest"},"isAtOrAboveLargest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/classes/TickList#isbelowsmallest"},"isBelowSmallest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/classes/TickList#nextinitializedtick"},"nextInitializedTick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/classes/TickList#nextinitializedtickwithinoneword"},"nextInitializedTickWithinOneWord")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/classes/TickList#validatelist"},"validateList"))),(0,i.kt)("h2",{id:"constructors-1"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"new TickList"),"()"),(0,i.kt)("p",null,"Cannot be constructed"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L18"},"utils/tickList.ts:18")),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"binarysearch"},"binarySearch"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"binarySearch"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ticks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tick"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Finds the largest tick in the list of ticks that is less than or equal to tick"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ticks")),(0,i.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,i.kt)("a",{parentName:"td",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"list of ticks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"tick to find the largest tick that is less than or equal to tick")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L62"},"utils/tickList.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gettick"},"getTick"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getTick"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ticks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,i.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ticks")),(0,i.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,i.kt)("a",{parentName:"td",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L50"},"utils/tickList.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isatorabovelargest"},"isAtOrAboveLargest"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"isAtOrAboveLargest"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ticks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tick"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ticks")),(0,i.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,i.kt)("a",{parentName:"td",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L45"},"utils/tickList.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isbelowsmallest"},"isBelowSmallest"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"isBelowSmallest"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ticks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tick"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ticks")),(0,i.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,i.kt)("a",{parentName:"td",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L40"},"utils/tickList.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nextinitializedtick"},"nextInitializedTick"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"nextInitializedTick"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ticks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tick"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lte"),"): ",(0,i.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick"))),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ticks")),(0,i.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,i.kt)("a",{parentName:"td",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"lte")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick"))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L83"},"utils/tickList.ts:83")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nextinitializedtickwithinoneword"},"nextInitializedTickWithinOneWord"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"nextInitializedTickWithinOneWord"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ticks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tick"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lte"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tickSpacing"),"): ","[",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"]"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ticks")),(0,i.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,i.kt)("a",{parentName:"td",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"lte")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickSpacing")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"]"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L101"},"utils/tickList.ts:101")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"validatelist"},"validateList"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"validateList"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ticks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tickSpacing"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ticks")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/uniswap-docs/en/sdk/v3/reference/classes/Tick"},(0,i.kt)("inlineCode",{parentName:"a"},"Tick")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickSpacing")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L20"},"utils/tickList.ts:20")))}o.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var k=n.createContext({}),d=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(k.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,k=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,u=c["".concat(k,".").concat(m)]||c[m]||o[m]||r;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var s={};for(var k in t)hasOwnProperty.call(t,k)&&(s[k]=t[k]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);