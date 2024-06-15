"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[9693],{62086:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var n=a(83117),r=(a(67294),a(3905));const l={},i=void 0,p={unversionedId:"contracts/v3/reference/core/libraries/Tick",id:"contracts/v3/reference/core/libraries/Tick",title:"Tick",description:"\u5305\u542b\u7528\u4e8e\u7ba1\u7406\u523b\u5ea6\u8fc7\u7a0b\u548c\u76f8\u5173\u8ba1\u7b97\u7684\u51fd\u6570\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/core/libraries/Tick.md",sourceDirName:"contracts/v3/reference/core/libraries",slug:"/contracts/v3/reference/core/libraries/Tick",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/Tick",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/core/libraries/Tick.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"SwapMath",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/SwapMath"},next:{title:"TickBitmap",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/TickBitmap"}},d={},k=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"tickSpacingToMaxLiquidityPerTick",id:"tickspacingtomaxliquiditypertick",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"getFeeGrowthInside",id:"getfeegrowthinside",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c-1",level:4},{value:"update",id:"update",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c-2",level:4},{value:"clear",id:"clear",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-3",level:4},{value:"cross",id:"cross",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-4",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c-3",level:4}],o={toc:k};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5305\u542b\u7528\u4e8e\u7ba1\u7406\u523b\u5ea6\u8fc7\u7a0b\u548c\u76f8\u5173\u8ba1\u7b97\u7684\u51fd\u6570\u3002"),(0,r.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("h3",{id:"tickspacingtomaxliquiditypertick"},"tickSpacingToMaxLiquidityPerTick"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function tickSpacingToMaxLiquidityPerTick(\n    int24 tickSpacing\n  ) internal pure returns (uint128)\n")),(0,r.kt)("p",null,"\u6839\u636e\u7ed9\u5b9a\u7684\u523b\u5ea6\u95f4\u8ddd\u63a8\u5bfc\u51fa\u6bcf\u523b\u5ea6\u7684\u6700\u5927\u6d41\u52a8\u6027\u3002"),(0,r.kt)("p",null,"\u5728\u6c60\u6784\u9020\u51fd\u6570\u4e2d\u6267\u884c\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickSpacing")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6240\u9700\u7684\u523b\u5ea6\u95f4\u9694\u91cf\uff0c\u4ee5",(0,r.kt)("inlineCode",{parentName:"td"},"tickSpacing"),"\u7684\u500d\u6570\u5b9e\u73b0\uff0c\u4f8b\u5982\uff0c\u4e00\u4e2a3\u7684tickSpacing\u8981\u6c42\u6bcf\u96943\u4e2a\u523b\u5ea6\u521d\u59cb\u5316\u4e00\u6b21\u523b\u5ea6\uff0c\u5373...\uff0c-6\uff0c-3\uff0c0\uff0c3\uff0c6\uff0c...")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u523b\u5ea6\u7684\u6700\u5927\u6d41\u52a8\u6027")))),(0,r.kt)("h3",{id:"getfeegrowthinside"},"getFeeGrowthInside"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getFeeGrowthInside(\n    mapping(int24 => struct Tick.Info) self,\n    int24 tickLower,\n    int24 tickUpper,\n    int24 tickCurrent,\n    uint256 feeGrowthGlobal0X128,\n    uint256 feeGrowthGlobal1X128\n  ) internal view returns (uint256 feeGrowthInside0X128, uint256 feeGrowthInside1X128)\n")),(0,r.kt)("p",null,"\u68c0\u7d22\u8d39\u7528\u589e\u957f\u6570\u636e"),(0,r.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"self")),(0,r.kt)("td",{parentName:"tr",align:"left"},"mapping(int24 => struct Tick.Info)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u6240\u6709\u5df2\u521d\u59cb\u5316\u523b\u5ea6\u4fe1\u606f\u7684\u6620\u5c04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f4d\u7f6e\u7684\u4e0b\u754c\u523b\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f4d\u7f6e\u7684\u4e0a\u754c\u523b\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickCurrent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u523b\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeGrowthGlobal0X128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728token0\u4e2d\u7684\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u7684\u5168\u7403\u603b\u8d39\u7528\u589e\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeGrowthGlobal1X128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728token1\u4e2d\u7684\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u7684\u5168\u7403\u603b\u8d39\u7528\u589e\u957f")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeGrowthInside0X128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728\u4f4d\u7f6e\u7684\u523b\u5ea6\u8fb9\u754c\u5185\u7684token0\u7684\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u603b\u8d39\u7528\u589e\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeGrowthInside1X128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728\u4f4d\u7f6e\u7684\u523b\u5ea6\u8fb9\u754c\u5185\u7684token1\u7684\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u603b\u8d39\u7528\u589e\u957f")))),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function update(\n    mapping(int24 => struct Tick.Info) self,\n    int24 tick,\n    int24 tickCurrent,\n    int128 liquidityDelta,\n    uint256 feeGrowthGlobal0X128,\n    uint256 feeGrowthGlobal1X128,\n    bool upper,\n    uint128 maxLiquidity\n  ) internal returns (bool flipped)\n")),(0,r.kt)("p",null,"\u66f4\u65b0\u4e00\u4e2a\u523b\u5ea6\uff0c\u5e76\u8fd4\u56detrue\u5982\u679c\u523b\u5ea6\u4ece\u5df2\u521d\u59cb\u5316\u53d8\u4e3a\u672a\u521d\u59cb\u5316\uff0c\u6216\u8005\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"self")),(0,r.kt)("td",{parentName:"tr",align:"left"},"mapping(int24 => struct Tick.Info)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u6240\u6709\u5df2\u521d\u59cb\u5316\u523b\u5ea6\u4fe1\u606f\u7684\u6620\u5c04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c06\u88ab\u66f4\u65b0\u7684\u523b\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickCurrent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u523b\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidityDelta")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u4ece\u5de6\u5411\u53f3\uff08\u6216\u4ece\u53f3\u5411\u5de6\uff09\u7a7f\u8fc7\u523b\u5ea6\u65f6\uff0c\u8981\u6dfb\u52a0\uff08\u51cf\u53bb\uff09\u7684\u65b0\u6d41\u52a8\u6027\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeGrowthGlobal0X128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728token0\u4e2d\u7684\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u7684\u5168\u7403\u603b\u8d39\u7528\u589e\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeGrowthGlobal1X128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728token1\u4e2d\u7684\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u7684\u5168\u7403\u603b\u8d39\u7528\u589e\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"upper")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u4f4d\u7f6e\u7684\u4e0a\u754c\u523b\u5ea6\u4e3a\u771f\uff0c\u5426\u5219\u66f4\u65b0\u4f4d\u7f6e\u7684\u4e0b\u754c\u523b\u5ea6\u4e3a\u5047")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxLiquidity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5355\u4e2a\u523b\u5ea6\u7684\u6700\u5927\u6d41\u52a8\u6027\u5206\u914d")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"flipped")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u523b\u5ea6\u662f\u5426\u4ece\u5df2\u521d\u59cb\u5316\u53d8\u4e3a\u672a\u521d\u59cb\u5316\uff0c\u6216\u8005\u53cd\u4e4b\u4ea6\u7136")))),(0,r.kt)("h3",{id:"clear"},"clear"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function clear(\n    mapping(int24 => struct Tick.Info) self,\n    int24 tick\n  ) internal\n")),(0,r.kt)("p",null,"\u6e05\u9664\u523b\u5ea6\u6570\u636e"),(0,r.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"self")),(0,r.kt)("td",{parentName:"tr",align:"left"},"mapping(int24 => struct Tick.Info)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u6240\u6709\u5df2\u521d\u59cb\u5316\u523b\u5ea6\u4fe1\u606f\u7684\u6620\u5c04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c06\u88ab\u6e05\u9664\u7684\u523b\u5ea6")))),(0,r.kt)("h3",{id:"cross"},"cross"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function cross(\n    mapping(int24 => struct Tick.Info) self,\n    int24 tick,\n    uint256 feeGrowthGlobal0X128,\n    uint256 feeGrowthGlobal1X128\n  ) internal returns (int128 liquidityNet)\n")),(0,r.kt)("p",null,"\u6839\u636e\u4ef7\u683c\u53d8\u52a8\u8fc7\u6e21\u5230\u4e0b\u4e00\u4e2a\u523b\u5ea6\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"self")),(0,r.kt)("td",{parentName:"tr",align:"left"},"mapping(int24 => struct Tick.Info)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u6240\u6709\u5df2\u521d\u59cb\u5316\u523b\u5ea6\u4fe1\u606f\u7684\u6620\u5c04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fc7\u6e21\u7684\u76ee\u6807\u523b\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeGrowthGlobal0X128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728token0\u4e2d\u7684\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u7684\u5168\u7403\u603b\u8d39\u7528\u589e\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeGrowthGlobal1X128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728token1\u4e2d\u7684\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u7684\u5168\u7403\u603b\u8d39\u7528\u589e\u957f")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidityNet")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u4ece\u5de6\u5411\u53f3\uff08\u6216\u4ece\u53f3\u5411\u5de6\uff09\u7a7f\u8fc7\u523b\u5ea6\u65f6\uff0c\u6dfb\u52a0\uff08\u51cf\u53bb\uff09\u7684\u6d41\u52a8\u6027\u6570\u91cf")))))}m.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),k=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=k(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),c=k(a),f=r,N=c["".concat(d,".").concat(f)]||c[f]||m[f]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);