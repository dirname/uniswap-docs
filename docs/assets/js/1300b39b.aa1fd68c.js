"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[8732],{27607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(83117),a=(t(67294),t(3905));const i={id:"pricing",title:"\u5b9a\u4ef7"},o=void 0,c={unversionedId:"sdk/v2/guides/pricing",id:"sdk/v2/guides/pricing",title:"\u5b9a\u4ef7",description:"\u5728\u5bfb\u627e \u5feb\u901f\u5165\u95e8\uff1f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/sdk/v2/guides/03-pricing.md",sourceDirName:"sdk/v2/guides",slug:"/sdk/v2/guides/pricing",permalink:"/uniswap-docs/sdk/v2/guides/pricing",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v2/guides/03-pricing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"pricing",title:"\u5b9a\u4ef7"},sidebar:"sdkSidebar",previous:{title:"\u83b7\u53d6\u6570\u636e",permalink:"/uniswap-docs/sdk/v2/guides/fetching-data"},next:{title:"\u4ea4\u6613",permalink:"/uniswap-docs/sdk/v2/guides/trading"}},p={},s=[{value:"\u76f4\u63a5",id:"\u76f4\u63a5",level:2},{value:"\u95f4\u63a5",id:"\u95f4\u63a5",level:2}],u={toc:s};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5bfb\u627e ",(0,a.kt)("a",{parentName:"p",href:"quick-start"},"\u5feb\u901f\u5165\u95e8"),"\uff1f")),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u8c08\u8c08\u5b9a\u4ef7\u3002\u672c\u6307\u5357\u5c06\u91cd\u70b9\u5173\u6ce8\u4e24\u4e2a\u6700\u91cd\u8981\u7684 Uniswap \u4ef7\u683c\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u4e2d\u95f4\u4ef7")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u6267\u884c\u4ef7"),"\u3002"),(0,a.kt)("h1",{id:"\u4e2d\u95f4\u4ef7"},"\u4e2d\u95f4\u4ef7"),(0,a.kt)("p",null,"\u5728 Uniswap \u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c\u4e2d\u95f4\u4ef7\u53cd\u6620\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u6216\u591a\u4e2a\u5bf9\u4e2d\u50a8\u5907\u7684\u6bd4\u7387"),"\u3002\u6211\u4eec\u53ef\u4ee5\u4ece\u4e09\u79cd\u65b9\u5f0f\u601d\u8003\u8fd9\u4e2a\u4ef7\u683c\u3002\u4e5f\u8bb8\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u662f\uff0c\u5b83\u5b9a\u4e49\u4e86\u4e00\u4e2a\u4ee3\u5e01\u76f8\u5bf9\u4e8e\u53e6\u4e00\u4e2a\u4ee3\u5e01\u7684\u4ef7\u503c\u3002\u5b83\u8fd8\u4ee3\u8868\u4e86\u7406\u8bba\u4e0a\u4f60\u53ef\u4ee5\u4ee5\u4e00\u4e2a\u6781\u5c0f\u91cf\uff08\u03b5\uff09\u7684\u4e00\u4e2a\u4ee3\u5e01\u4ea4\u6362\u53e6\u4e00\u4e2a\u4ee3\u5e01\u7684\u4ef7\u683c\u3002\u6700\u540e\uff0c\u5b83\u53ef\u4ee5\u88ab\u89e3\u91ca\u4e3a\u5f53\u524d\u8d44\u4ea7\u7684 ",(0,a.kt)("em",{parentName:"p"},"\u5e02\u573a\u6e05\u7b97\u6216\u516c\u5141\u4ef7\u503c\u4ef7\u683c"),"\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u8003\u8651\u4e00\u4e0b DAI-WETH \u7684\u4e2d\u95f4\u4ef7\uff08\u5373\uff0c\u6bcf 1 WETH \u7684 DAI \u6570\u91cf\uff09\u3002"),(0,a.kt)("h2",{id:"\u76f4\u63a5"},"\u76f4\u63a5"),(0,a.kt)("p",null,"\u83b7\u53d6 DAI-WETH \u4e2d\u95f4\u4ef7\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u76f4\u63a5\u89c2\u5bdf\u8be5\u5bf9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, WETH9 } from '@uniswap/sdk-core'\nimport { Route } from '@uniswap/v2-sdk'\n\nconst DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)\n\n// \u8981\u4e86\u89e3\u5982\u4f55\u83b7\u53d6 Pair \u6570\u636e\uff0c\u8bf7\u53c2\u8003\u4e4b\u524d\u7684\u6307\u5357\u3002\nconst pair = await createPair(DAI, WETH9[ChainId.MAINNET])\n\nconst route = new Route([pair], WETH9[DAI.chainId], DAI)\n\nconsole.log(route.midPrice.toSignificant(6)) // 1901.08\nconsole.log(route.midPrice.invert().toSignificant(6)) // 0.000526017\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u80fd\u60f3\u77e5\u9053\u4e3a\u4ec0\u4e48\u6211\u4eec\u5fc5\u987b\u6784\u5efa\u4e00\u4e2a ",(0,a.kt)("em",{parentName:"p"},"\u8def\u5f84")," \u6765\u83b7\u53d6\u4e2d\u95f4\u4ef7\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4ece\u5bf9\uff08\u6bd5\u7adf\uff0c\u5b83\u5305\u542b\u4e86\u6240\u6709\u5fc5\u8981\u7684\u6570\u636e\uff09\u83b7\u53d6\u3002\u539f\u56e0\u5f88\u7b80\u5355\uff1a\u8def\u5f84\u8feb\u4f7f\u6211\u4eec\u5bf9\u4ea4\u6613\u7684 ",(0,a.kt)("em",{parentName:"p"},"\u65b9\u5411")," \u8868\u8fbe\u610f\u89c1\u3002\u8def\u5f84\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u5bf9\u3001\u8f93\u5165\u4ee3\u5e01\u548c\u8f93\u51fa\u4ee3\u5e01\u7ec4\u6210\uff08\u8fd9\u5b8c\u5168\u5b9a\u4e49\u4e86\u4ea4\u6613\u8def\u5f84\uff09\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c06 WETH \u4f5c\u4e3a\u8f93\u5165\u4ee3\u5e01\uff0cDAI \u4f5c\u4e3a\u8f93\u51fa\u4ee3\u5e01\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u5bf9 WETH -> DAI \u7684\u4ea4\u6613\u611f\u5174\u8da3\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u7406\u89e3\u4e2d\u95f4\u4ef7\u5c06\u4ee5 DAI/WETH \u7684\u5f62\u5f0f\u5b9a\u4e49\u3002\u4e0d\u8fc7\u4e0d\u7528\u62c5\u5fc3\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981 WETH/DAI \u7684\u4ef7\u683c\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5730\u53cd\u8f6c\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u6211\u4eec\u6b63\u5728\u5c06\u4ef7\u683c\u683c\u5f0f\u5316\u4e3a 6 \u4f4d\u6709\u6548\u6570\u5b57\u3002\u8fd9\u662f\u56e0\u4e3a\u5185\u90e8\uff0c\u4ef7\u683c\u5b58\u50a8\u4e3a\u7cbe\u786e\u7cbe\u5ea6\u7684\u5206\u6570\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8f6c\u6362\u4e3a\u5176\u4ed6\u8868\u793a\u5f62\u5f0f\u3002\u5bf9\u4e8e\u5b8c\u6574\u9009\u9879\u5217\u8868\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/uniswap-docs/sdk/core/reference/classes/Price"},"Price"),"\u3002"),(0,a.kt)("h2",{id:"\u95f4\u63a5"},"\u95f4\u63a5"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4e3e\u4f8b\u8bf4\u660e\uff0c\u5047\u8bbe DAI \u548c WETH \u4e4b\u95f4\u4e0d\u5b58\u5728\u76f4\u63a5\u5bf9\u3002\u4e3a\u4e86\u83b7\u5f97 DAI-WETH \u4e2d\u95f4\u4ef7\uff0c\u6211\u4eec\u5c06\u9700\u8981\u9009\u62e9\u4e00\u4e2a\u6709\u6548\u7684\u8def\u5f84\u3002\u60f3\u8c61\u4e00\u4e0b\uff0cDAI \u548c WETH \u90fd\u4e0e\u7b2c\u4e09\u4e2a\u4ee3\u5e01 USDC \u6709\u5bf9\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 USDC \u5bf9\u8ba1\u7b97\u51fa\u95f4\u63a5\u4e2d\u95f4\u4ef7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, WETH9} from '@uniswap/sdk-core'\nimport { Route, Pair } from '@uniswap/v2-sdk'\n\nconst USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6)\nconst DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)\n\n// \u8981\u4e86\u89e3\u5982\u4f55\u83b7\u53d6 Pair \u6570\u636e\uff0c\u8bf7\u53c2\u8003\u4e4b\u524d\u7684\u6307\u5357\u3002\nconst USDCWETHPair = await createPair(USDC, WETH9[ChainId.MAINNET])\nconst DAIUSDCPair = await createPair(DAI, USDC)\n\nconst route = new Route([USDCWETHPair, DAIUSDCPair], WETH9[ChainId.MAINNET], DAI)\n\nconsole.log(route.midPrice.toSignificant(6)) // 1896.34\nconsole.log(route.midPrice.invert().toSignificant(6)) // 0.000527331\n")),(0,a.kt)("h1",{id:"\u6267\u884c\u4ef7"},"\u6267\u884c\u4ef7"),(0,a.kt)("p",null,"\u4e2d\u95f4\u4ef7\u5f88\u597d\u5730\u4ee3\u8868\u4e86\u8def\u5f84\u7684 ",(0,a.kt)("em",{parentName:"p"},"\u5f53\u524d")," \u72b6\u6001\uff0c\u4f46\u4ea4\u6613\u5462\uff1f\u4e8b\u5b9e\u8bc1\u660e\uff0c\u5b9a\u4e49\u53e6\u4e00\u4e2a\u4ef7\u683c\u662f\u6709\u610f\u4e49\u7684\uff0c\u5373\u4ea4\u6613\u7684 ",(0,a.kt)("em",{parentName:"p"},"\u6267\u884c")," \u4ef7\u683c\uff0c\u4f5c\u4e3a\u53d1\u9001/\u63a5\u6536\u8d44\u4ea7\u7684\u6bd4\u7387\u3002"),(0,a.kt)("p",null,"\u60f3\u8c61\u6211\u4eec\u6709\u5174\u8da3\u7528 1 WETH \u4ea4\u6613 DAI\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, WETH9, CurrencyAmount, TradeType } from '@uniswap/sdk-core'\nimport { Route, Pair, Trade } from '@uniswap/v2-sdk'\n\nconst DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)\n\n// \u8981\u4e86\u89e3\u5982\u4f55\u83b7\u53d6 Pair \u6570\u636e\uff0c\u8bf7\u53c2\u8003\u4e4b\u524d\u7684\u6307\u5357\u3002\nconst pair = await createPair(DAI, WETH9[DAI.chainId])\n\nconst route = new Route([pair], WETH9[DAI.chainId], DAI)\n\nconst trade = new Trade(route, CurrencyAmount.fromRawAmount(WETH9[DAI.chainId], '1000000000000000000'), TradeType.EXACT_INPUT)\n\nconsole.log(trade.executionPrice.toSignificant(6)) // 1894.91\n")),(0,a.kt)("p",null,"\u6ce8\u610f\u6211\u4eec\u6b63\u5728\u6784\u5efa\u4e00\u4e2a 1 WETH \u7684\u4ea4\u6613\uff0c\u4ee5\u5c3d\u53ef\u80fd\u591a\u7684 DAI \u8fdb\u884c\u4ea4\u6613\uff0c",(0,a.kt)("em",{parentName:"p"},"\u9274\u4e8e\u76f4\u63a5\u5bf9\u7684\u5f53\u524d\u50a8\u5907"),"\u3002\u6267\u884c\u4ef7\u4ee3\u8868\u4e86\u6b64\u6b21\u4ea4\u6613\u7684\u5e73\u5747 DAI/WETH \u4ef7\u683c\u3002\u5f53\u7136\uff0c\u4efb\u4f55\u5bf9\u7684\u50a8\u5907\u90fd\u53ef\u4ee5\u5728\u6bcf\u4e2a\u533a\u5757\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u5c06\u5f71\u54cd\u6267\u884c\u4ef7\u3002"))}l.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);