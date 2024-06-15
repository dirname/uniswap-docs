"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[7970],{63638:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const l={id:"factory",title:"Factory"},o="initializeFactory",i={unversionedId:"contracts/v1/reference/factory",id:"contracts/v1/reference/factory",title:"Factory",description:"| Parameter |                           Description |",source:"@site/docs/contracts/v1/reference/01-factory.md",sourceDirName:"contracts/v1/reference",slug:"/contracts/v1/reference/factory",permalink:"/uniswap-docs/en/contracts/v1/reference/factory",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v1/reference/01-factory.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"factory",title:"Factory"},sidebar:"contractsSidebar",previous:{title:"Token Listing",permalink:"/uniswap-docs/en/contracts/v1/guides/token-listing"},next:{title:"Exchange",permalink:"/uniswap-docs/en/contracts/v1/reference/exchange"}},c={},p=[{value:"Smart Contract",id:"smart-contract",level:2},{value:"Web3",id:"web3",level:2},{value:"Smart Contract",id:"smart-contract-1",level:2},{value:"Web3",id:"web3-1",level:2},{value:"Smart Contract",id:"smart-contract-2",level:2},{value:"Web3",id:"web3-2",level:2},{value:"Smart Contract",id:"smart-contract-3",level:2},{value:"Web3",id:"web3-3",level:2},{value:"Smart Contract",id:"smart-contract-4",level:2},{value:"Web3",id:"web3-4",level:2}],d={toc:p};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"initializefactory"},"initializeFactory"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"template"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Ethereum address of exchange template")))),(0,n.kt)("h2",{id:"smart-contract"},"Smart Contract"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"initializeFactory(template: address)\n")),(0,n.kt)("h2",{id:"web3"},"Web3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"factoryContract.methods.initializeFactory(template).send()\n")),(0,n.kt)("h1",{id:"createexchange"},"createExchange"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"token"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Ethereum address of an ERC20 token")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,n.kt)("th",{parentName:"tr",align:"right"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Ethereum address of a Uniswap exchange")))),(0,n.kt)("h2",{id:"smart-contract-1"},"Smart Contract"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"createExchange(token: address): address\n")),(0,n.kt)("h2",{id:"web3-1"},"Web3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"factoryContract.methods.createExchange(token).send()\n")),(0,n.kt)("h1",{id:"getexchange"},"getExchange"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"token"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Ethereum address of an ERC20 token")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,n.kt)("th",{parentName:"tr",align:"right"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Ethereum address of a Uniswap exchange")))),(0,n.kt)("h2",{id:"smart-contract-2"},"Smart Contract"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@constant\ngetExchange(token: address): address\n")),(0,n.kt)("h2",{id:"web3-2"},"Web3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"factoryContract.methods.getExchange(token).call()\n")),(0,n.kt)("h1",{id:"gettoken"},"getToken"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Ethereum address of a Uniswap exchange")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,n.kt)("th",{parentName:"tr",align:"right"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Ethereum address of an ERC20 token")))),(0,n.kt)("h2",{id:"smart-contract-3"},"Smart Contract"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@constant\ngetToken(exchange: address): address\n")),(0,n.kt)("h2",{id:"web3-3"},"Web3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"factoryContract.methods.getToken(exchange).call()\n")),(0,n.kt)("h1",{id:"gettokenwithid"},"getTokenWithId"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"token_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Uniswap ID for an ERC20 token")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,n.kt)("th",{parentName:"tr",align:"right"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Ethereum address of an ERC20 token")))),(0,n.kt)("h2",{id:"smart-contract-4"},"Smart Contract"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@constant\ngetTokenWithId(token_id: uint256): address\n")),(0,n.kt)("h2",{id:"web3-4"},"Web3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"factoryContract.methods.getTokenWithId(token_id).call()\n")))}m.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),p=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=p(a),k=n,g=s["".concat(c,".").concat(k)]||s[k]||m[k]||l;return a?r.createElement(g,o(o({ref:e},d),{},{components:a})):r.createElement(g,o({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);