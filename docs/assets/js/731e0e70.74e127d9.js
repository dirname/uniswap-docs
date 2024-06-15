"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[7759],{39479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var i=t(83117),r=(t(67294),t(3905));const a={id:"increase-liquidity",title:"\u589e\u52a0\u6d41\u52a8\u6027",sidebar_position:5},o=void 0,u={unversionedId:"contracts/v3/guides/providing-liquidity/increase-liquidity",id:"contracts/v3/guides/providing-liquidity/increase-liquidity",title:"\u589e\u52a0\u6d41\u52a8\u6027",description:"\u5728\u5f53\u524d\u8303\u56f4\u5185\u589e\u52a0\u6d41\u52a8\u6027",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/guides/providing-liquidity/increase-liquidity.md",sourceDirName:"contracts/v3/guides/providing-liquidity",slug:"/contracts/v3/guides/providing-liquidity/increase-liquidity",permalink:"/uniswap-docs/contracts/v3/guides/providing-liquidity/increase-liquidity",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/guides/providing-liquidity/increase-liquidity.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"increase-liquidity",title:"\u589e\u52a0\u6d41\u52a8\u6027",sidebar_position:5},sidebar:"contractsSidebar",previous:{title:"\u51cf\u5c11\u6d41\u52a8\u6027",permalink:"/uniswap-docs/contracts/v3/guides/providing-liquidity/decrease-liquidity"},next:{title:"\u5b8c\u6574\u7684\u5408\u7ea6",permalink:"/uniswap-docs/contracts/v3/guides/providing-liquidity/the-full-contract"}},c={},s=[{value:"\u5728\u5f53\u524d\u8303\u56f4\u5185\u589e\u52a0\u6d41\u52a8\u6027",id:"\u5728\u5f53\u524d\u8303\u56f4\u5185\u589e\u52a0\u6d41\u52a8\u6027",level:2}],d={toc:s};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5728\u5f53\u524d\u8303\u56f4\u5185\u589e\u52a0\u6d41\u52a8\u6027"},"\u5728\u5f53\u524d\u8303\u56f4\u5185\u589e\u52a0\u6d41\u52a8\u6027"),(0,r.kt)("p",null,"\u786e\u4fdd\u5728\u7ee7\u7eed\u672c\u8282\u4e4b\u524d\u5148\u5b8c\u6210 ",(0,r.kt)("a",{parentName:"p",href:"/uniswap-docs/contracts/v3/guides/providing-liquidity/setting-up"},"\u521d\u59cb\u6307\u5357")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6b64\u793a\u4f8b\u5047\u8bbe\u5408\u7ea6\u5df2\u7ecf\u62e5\u6709 NFT \u7684\u6240\u6709\u6743\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6211\u4eec\u65e0\u6cd5\u4f7f\u7528 Uniswap v3 \u534f\u8bae\u66f4\u6539\u7ed9\u5b9a\u6d41\u52a8\u6027\u7684\u8fb9\u754c\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"increaseLiquidity")," \u53ea\u80fd\u589e\u52a0\u4e00\u4e2a\u4f4d\u7f6e\u7684\u6d41\u52a8\u6027\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5e94\u8c03\u6574 ",(0,r.kt)("inlineCode",{parentName:"p"},"amount0Min")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"amount1Min")," \u6765\u521b\u5efa\u6ed1\u70b9\u4fdd\u62a4\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    /// @notice \u5728\u5f53\u524d\u8303\u56f4\u5185\u589e\u52a0\u6d41\u52a8\u6027\n    /// @dev \u6c60\u5b50\u5fc5\u987b\u5df2\u7ecf\u521d\u59cb\u5316\u624d\u80fd\u6dfb\u52a0\u6d41\u52a8\u6027\n    /// @param tokenId ERC721 \u4ee3\u5e01\u7684 id\n    /// @param amount0 \u8981\u6dfb\u52a0\u7684 token0 \u6570\u91cf\n    /// @param amount1 \u8981\u6dfb\u52a0\u7684 token1 \u6570\u91cf\n    function increaseLiquidityCurrentRange(\n        uint256 tokenId,\n        uint256 amountAdd0,\n        uint256 amountAdd1\n    )\n        external\n        returns (\n            uint128 liquidity,\n            uint256 amount0,\n            uint256 amount1\n        )\n    {\n        INonfungiblePositionManager.IncreaseLiquidityParams memory params =\n            INonfungiblePositionManager.IncreaseLiquidityParams({\n                tokenId: tokenId,\n                amount0Desired: amountAdd0,\n                amount1Desired: amountAdd1,\n                amount0Min: 0,\n                amount1Min: 0,\n                deadline: block.timestamp\n            });\n\n        (liquidity, amount0, amount1) = nonfungiblePositionManager.increaseLiquidity(params);\n    }\n")))}l.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,y=p["".concat(c,".").concat(m)]||p[m]||l[m]||a;return t?i.createElement(y,o(o({ref:n},d),{},{components:t})):i.createElement(y,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);