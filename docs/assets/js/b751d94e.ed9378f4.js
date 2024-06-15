"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[6475],{75174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const i={id:"computation",title:"\u8ba1\u7b97"},l="getMarketDetails",o={unversionedId:"sdk/v1/reference/computation",id:"sdk/v1/reference/computation",title:"\u8ba1\u7b97",description:"\u6b64\u51fd\u6570\u4e3a\u4f20\u9012\u7684\u50a8\u5907\u6570\u636e\u8ba1\u7b97\u5e02\u573a\u8be6\u60c5\u3002\u5e02\u573a\u88ab\u5b9a\u4e49\u4e3a ETH&lt;&gt;ERC20\u3001ERC20&lt;&gt;ETH \u6216 ERC20&lt;&gt;ERC20 \u7684\u914d\u5bf9\uff0c\u5176\u4e2d\u7b2c\u4e00\u4e2a\u8d27\u5e01\u662f\u8f93\u5165\uff0c\u7b2c\u4e8c\u4e2a\u662f\u8f93\u51fa\u3002\u5fc5\u987b\u4e3a\u8f93\u5165\u548c\u8f93\u51fa\u8d27\u5e01\u6307\u5b9a\u50a8\u5907\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/sdk/v1/reference/03-computation.md",sourceDirName:"sdk/v1/reference",slug:"/sdk/v1/reference/computation",permalink:"/uniswap-docs/sdk/v1/reference/computation",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v1/reference/03-computation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"computation",title:"\u8ba1\u7b97"},sidebar:"sdkSidebar",previous:{title:"\u6570\u636e",permalink:"/uniswap-docs/sdk/v1/reference/data"},next:{title:"\u683c\u5f0f\u5316",permalink:"/uniswap-docs/sdk/v1/reference/format"}},p={},s=[{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d",level:2},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u7528\u6cd5",id:"\u793a\u4f8b\u7528\u6cd5",level:2},{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d-1",level:2},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-1",level:2},{value:"\u793a\u4f8b\u7528\u6cd5",id:"\u793a\u4f8b\u7528\u6cd5-1",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getmarketdetails"},"getMarketDetails"),(0,r.kt)("p",null,"\u6b64\u51fd\u6570\u4e3a\u4f20\u9012\u7684\u50a8\u5907\u6570\u636e\u8ba1\u7b97\u5e02\u573a\u8be6\u60c5\u3002\u5e02\u573a\u88ab\u5b9a\u4e49\u4e3a ETH","<",">","ERC20\u3001ERC20","<",">","ETH \u6216 ERC20","<",">","ERC20 \u7684\u914d\u5bf9\uff0c\u5176\u4e2d\u7b2c\u4e00\u4e2a\u8d27\u5e01\u662f\u8f93\u5165\uff0c\u7b2c\u4e8c\u4e2a\u662f\u8f93\u51fa\u3002\u5fc5\u987b\u4e3a\u8f93\u5165\u548c\u8f93\u51fa\u8d27\u5e01\u6307\u5b9a\u50a8\u5907\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5904\u7406 ETH \u7684\u60c5\u51b5\u4e0b\uff0c\u5e94\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u4f5c\u4e3a\u50a8\u5907\u6570\u636e\u4f20\u9012\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/sdk/1.0.0/reference/data/#getttokenreserves"},(0,r.kt)("inlineCode",{parentName:"a"},"getTokenReserves"))," \u683c\u5f0f\u7684 ERC20 \u50a8\u5907\uff0c\u6216\u8005\u624b\u52a8\u83b7\u53d6\u6240\u9700\u6570\u636e\u5e76\u4f20\u9012\u8fdb\u6765\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6c47\u7387\u8ba1\u7b97\u81f3 18 \u4f4d\u5c0f\u6570\u7cbe\u5ea6\u3002"))),(0,r.kt)("h2",{id:"\u51fd\u6570\u7b7e\u540d"},"\u51fd\u6570\u7b7e\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export function getMarketDetails(\n  optionalReservesInput: OptionalReserves,\n  optionalReservesOutput: OptionalReserves\n): MarketDetails\n")),(0,r.kt)("h2",{id:"\u8f93\u5165\u53c2\u6570"},"\u8f93\u5165\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"optionalReservesInput"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"OptionalReserves")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u5165\u8d27\u5e01\u7684\u50a8\u5907\u6570\u636e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"optionalReservesOutput"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"OptionalReserves")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u51fa\u8d27\u5e01\u7684\u50a8\u5907\u6570\u636e\u3002")))),(0,r.kt)("h2",{id:"\u793a\u4f8b\u7528\u6cd5"},"\u793a\u4f8b\u7528\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const reserves: ChainIdOrProvider = await getTokenReserves(tokenAddress)\n\nconst marketDetails: MarketDetails = getMarketDetails(undefined, reserves) // ETH<>ERC20\n\n/*\n{\n  // \u5e02\u573a\u7c7b\u578b\n  tradeType: 'ETH_TO_TOKEN',\n\n  // \u5047\u8bbe\u7684 ETH \u50a8\u5907\n  inputReserves: {\n    token: {\n      chainId: 1,\n      address: 'ETH',\n      decimals: 18\n    }\n  },\n\n  // \u5f52\u4e00\u5316\u7684\u4ee3\u5e01\u50a8\u5907\n  outputReserves: <NormalizedReserves>,\n\n  // \u8ba1\u7b97\u81f3 18 \u4f4d\u5c0f\u6570\u7cbe\u5ea6\u7684\u5e02\u573a\u6c47\u7387\n  marketRate: {\n    rate: <BigNumber>,        // x \u8f93\u51fa / 1 \u8f93\u5165\n    rateInverted: <BigNumber> // x \u8f93\u5165 / 1 \u8f93\u51fa\n  }\n}\n*/\n")),(0,r.kt)("h1",{id:"gettradedetails"},"getTradeDetails"),(0,r.kt)("p",null,"\u6b64\u51fd\u6570\u4e3a\u4f20\u9012\u7684\u5e02\u573a\u6570\u636e\u8ba1\u7b97\u4ea4\u6613\u8be6\u60c5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4f20\u9012\u7684 ","_","tradeAmount \u5927\u4e8e\u76f8\u5173 Uniswap \u4ea4\u6613\u6240\u4e2d\u7684 ETH/\u4ee3\u5e01\u6570\u91cf\uff0c\u6b64\u51fd\u6570\u4f1a\u629b\u51fa\u9519\u8bef\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ea4\u6613\u91d1\u989d\u5fc5\u987b\u4ee5\u975e\u5341\u8fdb\u5236\u5f62\u5f0f\u4f20\u9012\uff08\u4f8b\u5982\uff0c1 ETH \u8868\u793a\u4e3a 1000000000000000000 wei\uff09\u3002"))),(0,r.kt)("h2",{id:"\u51fd\u6570\u7b7e\u540d-1"},"\u51fd\u6570\u7b7e\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export function getTradeDetails(\n  tradeExact: TRADE_EXACT,\n  _tradeAmount: BigNumberish,\n  marketDetails: MarketDetails\n): TradeDetails\n")),(0,r.kt)("h2",{id:"\u8f93\u5165\u53c2\u6570-1"},"\u8f93\u5165\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tradeExact"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TRADE_EXACT")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u5165\u6216\u8f93\u51fa\u8d27\u5e01\u662f\u5426\u4e3a\u786e\u5207\u6570\u91cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"_","tradeAmount"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8981\u8d2d\u4e70/\u5356\u51fa\u7684\u6570\u91cf\uff08\u53d6\u51b3\u4e8e tradeExact \u7684\u8f93\u51fa/\u8f93\u5165\u8d27\u5e01\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"marketDetails"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MarketDetails")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e02\u573a\u8be6\u60c5\u3002")))),(0,r.kt)("h2",{id:"\u793a\u4f8b\u7528\u6cd5-1"},"\u793a\u4f8b\u7528\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const _purchaseAmount: BigNumber = new BigNumber('2.5')\nconst _decimals: number = 18\nconst tradeAmount: BigNumber = _purchaseAmount.multipliedBy(10 ** _decimals)\nconst marketDetails: MarketDetails = getMarketDetails(undefined, reserves) // ETH<>ERC20\n\n// \u4f7f\u7528 ETH \u7cbe\u786e\u8d2d\u4e70 2.5 \u4e2a 18 \u4f4d\u5c0f\u6570\u7684 ERC20\nconst tradeDetails: TradeDetails = getTradeDetails(TRADE_EXACT.OUTPUT, tradeAmount, marketDetails)\n\n/*\n{\n  marketDetailsPre: <MarketDetails>,\n\n  marketDetailsPost: <MarketDetails>,\n\n  tradeType: 'ETH_TO_TOKEN',\n\n  tradeExact: 'OUTPUT',\n\n  inputAmount: {\n    token: <Token>,\n    amount: <BigNumber>\n  },\n\n  outputAmount: {\n    token: <Token>,\n    amount: <BigNumber>\n  },\n\n  // \u6267\u884c\u6c47\u7387\u8ba1\u7b97\u81f3 18 \u4f4d\u5c0f\u6570\u7cbe\u5ea6\n  executionRate: {\n    rate: <BigNumber>         // x \u8f93\u51fa / 1 \u8f93\u5165\n    rateInverted: <BigNumber> // x \u8f93\u5165 / 1 \u8f93\u51fa\n  },\n\n  // \u4ea4\u6613\u524d\u540e\u7684\u5e02\u573a\u6c47\u7387\u4e4b\u95f4\u7684\u6ed1\u70b9\uff0c\u4ee5\u57fa\u70b9\u8868\u793a\uff0c\u8ba1\u7b97\u81f3 18 \u4f4d\u5c0f\u6570\u7cbe\u5ea6\n  marketRateSlippage: <BigNumber>,\n\n  // \u6267\u884c\u6c47\u7387\u4e0e\u4ea4\u6613\u524d\u5e02\u573a\u6c47\u7387\u4e4b\u95f4\u7684\u6ed1\u70b9\uff0c\u4ee5\u57fa\u70b9\u8868\u793a\uff0c\u8ba1\u7b97\u81f3 18 \u4f4d\u5c0f\u6570\u7cbe\u5ea6\n  executionRateSlippage: <BigNumber>\n}\n*/\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);