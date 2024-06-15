"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[1729],{73247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const i={id:"inheritance-constructors",title:"\u5165\u95e8\u6307\u5357",sidebar_position:1},s=void 0,o={unversionedId:"contracts/v3/guides/flash-integrations/inheritance-constructors",id:"contracts/v3/guides/flash-integrations/inheritance-constructors",title:"\u5165\u95e8\u6307\u5357",description:"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u7f16\u5199\u4e00\u4e2a\u667a\u80fd\u5408\u7ea6\uff0c\u8be5\u5408\u7ea6\u8c03\u7528 V3 \u6c60\u4e0a\u7684 flash \u51fd\u6570\uff0c\u5e76\u5728\u5177\u6709\u76f8\u540c\u4ee3\u5e01\u5bf9\u4f46\u4e0d\u540c\u8d39\u7528\u5c42\u7ea7\u7684\u76f8\u5e94\u6c60\u4e2d\u4ea4\u6362\u5168\u90e8\u63d0\u53d6\u7684 token0 \u548c token1\u3002\u4ea4\u6362\u540e\uff0c\u5408\u7ea6\u5c06\u5411\u7b2c\u4e00\u4e2a\u6c60\u652f\u4ed8\u6b3e\u9879\uff0c\u5e76\u5c06\u5229\u6da6\u8f6c\u79fb\u81f3\u539f\u59cb\u8c03\u7528\u5730\u5740\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/guides/flash-integrations/Inheritance-constructors.md",sourceDirName:"contracts/v3/guides/flash-integrations",slug:"/contracts/v3/guides/flash-integrations/inheritance-constructors",permalink:"/uniswap-docs/contracts/v3/guides/flash-integrations/inheritance-constructors",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/guides/flash-integrations/Inheritance-constructors.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"inheritance-constructors",title:"\u5165\u95e8\u6307\u5357",sidebar_position:1},sidebar:"contractsSidebar",previous:{title:"\u6982\u89c8",permalink:"/uniswap-docs/contracts/v3/guides/liquidity-mining/overview"},next:{title:"\u8c03\u7528 Flash",permalink:"/uniswap-docs/contracts/v3/guides/flash-integrations/calling-flash"}},l={},p=[{value:"Flash \u4ea4\u6613\u6982\u8ff0",id:"flash-\u4ea4\u6613\u6982\u8ff0",level:2},{value:"Flash \u56de\u8c03",id:"flash-\u56de\u8c03",level:2},{value:"\u7ee7\u627f V3 \u5408\u7ea6",id:"\u7ee7\u627f-v3-\u5408\u7ea6",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u7f16\u5199\u4e00\u4e2a\u667a\u80fd\u5408\u7ea6\uff0c\u8be5\u5408\u7ea6\u8c03\u7528 V3 \u6c60\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"flash")," \u51fd\u6570\uff0c\u5e76\u5728\u5177\u6709\u76f8\u540c\u4ee3\u5e01\u5bf9\u4f46\u4e0d\u540c\u8d39\u7528\u5c42\u7ea7\u7684\u76f8\u5e94\u6c60\u4e2d\u4ea4\u6362\u5168\u90e8\u63d0\u53d6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"token0")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"\u3002\u4ea4\u6362\u540e\uff0c\u5408\u7ea6\u5c06\u5411\u7b2c\u4e00\u4e2a\u6c60\u652f\u4ed8\u6b3e\u9879\uff0c\u5e76\u5c06\u5229\u6da6\u8f6c\u79fb\u81f3\u539f\u59cb\u8c03\u7528\u5730\u5740\u3002"),(0,r.kt)("h2",{id:"flash-\u4ea4\u6613\u6982\u8ff0"},"Flash \u4ea4\u6613\u6982\u8ff0"),(0,r.kt)("p",null,"Flash \u4ea4\u6613\u662f\u4e00\u79cd\u5728\u4ee5\u592a\u574a\u4e0a\u8f6c\u79fb\u4ee3\u5e01\u7684\u65b9\u6cd5\uff0c\u5b83\u5728\u6ee1\u8db3\u4ee3\u5e01\u4f59\u989d\u8f6c\u79fb\u7684\u5fc5\u8981\u6761\u4ef6\u4e4b\u524d\u5c31\u5148\u8f6c\u79fb\u4e86\u4ee3\u5e01\u4f59\u989d\u3002\u5728\u4ea4\u6362\u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c\u8fd9\u610f\u5473\u7740\u8f93\u51fa\u5728\u63a5\u6536\u8f93\u5165\u4e4b\u524d\u5c31\u4ece\u4ea4\u6362\u53d1\u9001\u51fa\u53bb\u3002"),(0,r.kt)("p",null,"Uniswap V3 \u5728 Pool \u5408\u7ea6\u4e2d\u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"flash"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Flash")," \u5c06\u6307\u5b9a\u6570\u91cf\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"token0")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"token1")," \u63d0\u53d6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient")," \u5730\u5740\u3002\u63d0\u53d6\u7684\u91d1\u989d\u52a0\u4e0a\u4ea4\u6362\u8d39\u7528\uff0c\u5728\u4ea4\u6613\u7ed3\u675f\u65f6\u5c06\u5f52\u8fd8\u7ed9\u6c60\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"flash")," \u5305\u62ec\u7b2c\u56db\u4e2a\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\uff0c\u5141\u8bb8\u8c03\u7528\u8005\u4f7f\u7528 abi.encode \u7f16\u7801\u4efb\u4f55\u5fc5\u8981\u7684\u6570\u636e\u901a\u8fc7\u6b64\u51fd\u6570\u5e76\u7a0d\u540e\u89e3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    function flash(\n        address recipient,\n        uint256 amount0,\n        uint256 amount1,\n        bytes calldata data\n    ) external override lock noDelegateCall {\n")),(0,r.kt)("h2",{id:"flash-\u56de\u8c03"},"Flash \u56de\u8c03"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"flash")," \u4f1a\u63d0\u53d6\u4ee3\u5e01\uff0c\u4f46\u662f\u5b83\u4eec\u5982\u4f55\u88ab\u507f\u8fd8\u5462\uff1f\u8981\u7406\u89e3\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u5fc5\u987b\u67e5\u770b flash \u51fd\u6570\u4ee3\u7801\u7684\u5185\u90e8\u3002\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-core/blob/main/contracts/UniswapV3Pool.sol#L791"},(0,r.kt)("strong",{parentName:"a"},"flash"))," \u51fd\u6570\u4e2d\u95f4\u90e8\u5206\uff0c\u6211\u4eec\u770b\u5230\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"IUniswapV3FlashCallback(msg.sender).uniswapV3FlashCallback(fee0, fee1, data);\n")),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u8c03\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashCallback")," \u51fd\u6570 - \u5b83\u4f20\u9012\u4e86\u8ba1\u7b97\u6c60\u5e94\u5f97\u4f59\u989d\u6240\u9700\u7684\u8d39\u7528\u6570\u636e\uff0c\u4ee5\u53ca\u4efb\u4f55\u7f16\u7801\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u53c2\u6570\u4e2d\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u5728 V3 \u4e2d\uff0c\u6709\u4e09\u4e2a\u72ec\u7acb\u7684\u56de\u8c03\u51fd\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"uniswapV3SwapCallback"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"uniswapV3MintCallback")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"uniswapV3FlashCallback"),"\uff0c\u6bcf\u4e2a\u90fd\u53ef\u4ee5\u8986\u76d6\u81ea\u5b9a\u4e49\u903b\u8f91\u3002\u4e3a\u4e86\u7f16\u5199\u6211\u4eec\u7684\u5957\u5229\u5408\u7ea6\uff0c\u6211\u4eec\u5c06\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"flash")," \u5e76\u8986\u76d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"uniswapV3FlashCallback"),"\uff0c\u5176\u4e2d\u5305\u542b\u5b8c\u6210\u6267\u884c\u6211\u4eec\u4ea4\u6613\u6240\u9700\u6b65\u9aa4\u3002"),(0,r.kt)("h2",{id:"\u7ee7\u627f-v3-\u5408\u7ea6"},"\u7ee7\u627f V3 \u5408\u7ea6"),(0,r.kt)("p",null,"\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"IUniswapV3FlashCallback")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"PeripheryPayments"),"\uff0c\u56e0\u4e3a\u6211\u4eec\u5c06\u5728\u8fd9\u4e24\u4e2a\u5408\u7ea6\u4e2d\u4f7f\u7528\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e24\u4e2a\u7ee7\u627f\u7684\u5408\u7ea6\u5df2\u7ecf\u6269\u5c55\u4e86\u6211\u4eec\u5c06\u4f7f\u7528\u7684\u8bb8\u591a\u5176\u4ed6\u5408\u7ea6\uff0c\u4f8b\u5982 ",(0,r.kt)("a",{parentName:"p",href:"/uniswap-docs/contracts/v3/reference/core/libraries/LowGasSafeMath"},"LowGasSafeMath"),"\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.7.6/contracts.html?highlight=using#using-for"},"attach")," \u8fde\u63a5\u5230\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"uint256")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"int256"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"contract PairFlash is IUniswapV3FlashCallback, PeripheryPayments {\n    using LowGasSafeMath for uint256;\n    using LowGasSafeMath for int256;\n")),(0,r.kt)("p",null,"\u58f0\u660e\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u516c\u5171\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"swapRouter")," \u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ISwapRouter"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    ISwapRouter public immutable swapRouter;\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\u58f0\u660e\u6784\u9020\u51fd\u6570\uff0c\u5f53\u5408\u7ea6\u90e8\u7f72\u65f6\u53ea\u6267\u884c\u4e00\u6b21\u3002\u6211\u4eec\u7684\u6784\u9020\u51fd\u6570\u786c\u7f16\u7801\u4e86 V3 \u8def\u7531\u5668\u3001\u5de5\u5382\u548c weth9 \u5730\u5740\uff0c\u5373\u4ee5\u592a\u5e01\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://weth.io/"},"ERC-20 \u5305\u88c5\u5668"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    constructor(\n        ISwapRouter _swapRouter,\n        address _factory,\n        address _WETH9\n    ) PeripheryImmutableState(_factory, _WETH9) {\n        swapRouter = _swapRouter;\n    }\n")),(0,r.kt)("p",null,"\u5b8c\u6574\u7684\u5bfc\u5165\u90e8\u5206\u548c\u5408\u7ea6\u58f0\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity =0.7.6;\npragma abicoder v2;\n\nimport '@uniswap/v3-core/contracts/interfaces/callback/IUniswapV3FlashCallback.sol';\nimport '@uniswap/v3-core/contracts/libraries/LowGasSafeMath.sol';\n\nimport '@uniswap/v3-periphery/contracts/base/PeripheryPayments.sol';\nimport '@uniswap/v3-periphery/contracts/base/PeripheryImmutableState.sol';\nimport '@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol';\nimport '@uniswap/v3-periphery/contracts/libraries/CallbackValidation.sol';\nimport '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';\nimport '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';\n\ncontract PairFlash is IUniswapV3FlashCallback, PeripheryPayments {\n    using LowGasSafeMath for uint256;\n    using LowGasSafeMath for int256;\n\n    ISwapRouter public immutable swapRouter;\n\n    constructor(\n        ISwapRouter _swapRouter,\n        address _factory,\n        address _WETH9\n    ) PeripheryImmutableState(_factory, _WETH9) {\n        swapRouter = _swapRouter;\n    }\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);