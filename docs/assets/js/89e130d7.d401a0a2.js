"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[6045],{91297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const i={id:"quick-start",title:"\u667a\u80fd\u5408\u7ea6\u5feb\u901f\u5165\u95e8"},l=void 0,o={unversionedId:"contracts/v2/guides/smart-contract-integration/quick-start",id:"contracts/v2/guides/smart-contract-integration/quick-start",title:"\u667a\u80fd\u5408\u7ea6\u5feb\u901f\u5165\u95e8",description:"\u4e3a\u4ee5\u592a\u574a\u5f00\u53d1\u667a\u80fd\u5408\u7ea6\u6d89\u53ca\u4e00\u7cfb\u5217\u79bb\u7ebf\u5de5\u5177\uff0c\u7528\u4e8e\u751f\u6210\u548c\u6d4b\u8bd5\u5728Ethereum Virtual Machine (EVM)\u4e0a\u8fd0\u884c\u7684\u5b57\u8282\u7801\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v2/guides/smart-contract-integration/01-quick-start.md",sourceDirName:"contracts/v2/guides/smart-contract-integration",slug:"/contracts/v2/guides/smart-contract-integration/quick-start",permalink:"/uniswap-docs/contracts/v2/guides/smart-contract-integration/quick-start",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v2/guides/smart-contract-integration/01-quick-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"quick-start",title:"\u667a\u80fd\u5408\u7ea6\u5feb\u901f\u5165\u95e8"},sidebar:"contractsSidebar",previous:{title:"Iframe \u96c6\u6210",permalink:"/uniswap-docs/contracts/v2/guides/interface-integration/iframe-integration"},next:{title:"\u5b9e\u73b0\u4ea4\u6613",permalink:"/uniswap-docs/contracts/v2/guides/smart-contract-integration/trading-from-a-smart-contract"}},s={},p=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u521d\u59cb\u5316\u9879\u76ee",id:"\u521d\u59cb\u5316\u9879\u76ee",level:2},{value:"\u8bbe\u7f6enpm",id:"\u8bbe\u7f6enpm",level:2},{value:"\u6dfb\u52a0\u4f9d\u8d56\u9879",id:"\u6dfb\u52a0\u4f9d\u8d56\u9879",level:2},{value:"\u7f16\u5199\u6211\u4eec\u7684\u5408\u7ea6",id:"\u7f16\u5199\u6211\u4eec\u7684\u5408\u7ea6",level:2},{value:"\u7f16\u5199\u6d4b\u8bd5",id:"\u7f16\u5199\u6d4b\u8bd5",level:2},{value:"\u7f16\u8bd1\u548c\u90e8\u7f72\u5408\u7ea6",id:"\u7f16\u8bd1\u548c\u90e8\u7f72\u5408\u7ea6",level:2},{value:"\u6b63\u5728\u8fdb\u884c\u4e2d",id:"\u6b63\u5728\u8fdb\u884c\u4e2d",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e3a\u4ee5\u592a\u574a\u5f00\u53d1\u667a\u80fd\u5408\u7ea6\u6d89\u53ca\u4e00\u7cfb\u5217\u79bb\u7ebf\u5de5\u5177\uff0c\u7528\u4e8e\u751f\u6210\u548c\u6d4b\u8bd5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://eth.wiki/en/concepts/evm/ethereum-virtual-machine-(evm)-awesome-list"},"Ethereum Virtual Machine (EVM)"),"\u4e0a\u8fd0\u884c\u7684\u5b57\u8282\u7801\u3002\n\u4e00\u4e9b\u5de5\u5177\u8fd8\u5305\u542b\u4e86\u5c06\u8fd9\u4e9b\u5b57\u8282\u7801\u90e8\u7f72\u5230\u4ee5\u592a\u574a\u7f51\u7edc\u548c\u6d4b\u8bd5\u7f51\u7684\u5de5\u4f5c\u6d41\u7a0b\u3002\n\u8fd9\u4e9b\u5de5\u5177\u6709\u591a\u79cd\u9009\u62e9\u3002\u672c\u6307\u5357\u5c06\u5f15\u5bfc\u4f60\u901a\u8fc7\u4f7f\u7528\u4e00\u7ec4\u7279\u5b9a\u7684\u5de5\u5177(",(0,a.kt)("inlineCode",{parentName:"p"},"truffle")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"mocha"),")\u7f16\u5199\u548c\u6d4b\u8bd5\u4e00\u4e2a\u4e0eUniswap\u534f\u8bae\u4ea4\u4e92\u7684\u7b80\u5355\u667a\u80fd\u5408\u7ea6\u3002"),(0,a.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,a.kt)("p",null,"\u8981\u9075\u5faa\u6b64\u6307\u5357\uff0c\u4f60\u5fc5\u987b\u5b89\u88c5\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"nodejs >= v12.x & npm >= 6.x"))),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u9879\u76ee"},"\u521d\u59cb\u5316\u9879\u76ee"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u96f6\u5f00\u59cb\uff0c\u4f46\u4f7f\u7528\u50cf",(0,a.kt)("inlineCode",{parentName:"p"},"truffle"),"\u8fd9\u6837\u7684\u5de5\u5177\u6765\u521d\u59cb\u5316\u4e00\u4e2a\u7a7a\u9879\u76ee\u4f1a\u66f4\u7b80\u5355\u3002\n\u521b\u5efa\u4e00\u4e2a\u7a7a\u76ee\u5f55\uff0c\u5e76\u5728\u8be5\u76ee\u5f55\u5185\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npx truffle init"),"\u6765\u89e3\u5305\u9ed8\u8ba4\u7684",(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/boxes"},"Truffle box"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"mkdir demo\ncd demo\nnpx truffle init\n")),(0,a.kt)("h2",{id:"\u8bbe\u7f6enpm"},"\u8bbe\u7f6enpm"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5f15\u7528Uniswap V2\u5408\u7ea6\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528\u6211\u4eec\u90e8\u7f72\u7684npm artifacts\uff0c\u5176\u4e2d\u5305\u542b\u6838\u5fc3\u548c\u5916\u56f4\u667a\u80fd\u5408\u7ea6\u53ca\u63a5\u53e3\u3002\u4e3a\u4e86\u6dfb\u52a0npm\u4f9d\u8d56\u9879\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u521d\u59cb\u5316npm\u5305\u3002\n\u6211\u4eec\u53ef\u4ee5\u5728\u540c\u4e00\u76ee\u5f55\u4e0b\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npm init"),"\u6765\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u63a5\u53d7\u6240\u6709\u9ed8\u8ba4\u8bbe\u7f6e\uff0c\u7a0d\u540e\u53ef\u4ee5\u66f4\u6539\u5b83\u4eec\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm init\n")),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u4f9d\u8d56\u9879"},"\u6dfb\u52a0\u4f9d\u8d56\u9879"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6709\u4e86npm\u5305\uff0c\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u6211\u4eec\u7684\u4f9d\u8d56\u9879\u3002\u8ba9\u6211\u4eec\u540c\u65f6\u6dfb\u52a0\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@uniswap/v2-core"},(0,a.kt)("inlineCode",{parentName:"a"},"@uniswap/v2-core")),"\u548c\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@uniswap/v2-periphery"},(0,a.kt)("inlineCode",{parentName:"a"},"@uniswap/v2-periphery")),"\u5305\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm i --save @uniswap/v2-core\nnpm i --save @uniswap/v2-periphery\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u68c0\u67e5",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/@uniswap"),"\u76ee\u5f55\uff0c\u4f60\u73b0\u5728\u53ef\u4ee5\u627e\u5230Uniswap V2\u5408\u7ea6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"moody@MacBook-Pro ~/I/u/demo> ls node_modules/@uniswap/v2-core/contracts\nUniswapV2ERC20.sol    UniswapV2Pair.sol     libraries/\nUniswapV2Factory.sol  interfaces/           test/\nmoody@MacBook-Pro ~/I/u/demo> ls node_modules/@uniswap/v2-periphery/contracts/\nUniswapV2Migrator.sol  examples/              test/\nUniswapV2Router01.sol  interfaces/\nUniswapV2Router02.sol  libraries/\n")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u5305\u65e2\u5305\u62ec\u667a\u80fd\u5408\u7ea6\u6e90\u4ee3\u7801\u4e5f\u5305\u62ec\u6784\u5efaartifacts\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199\u6211\u4eec\u7684\u5408\u7ea6"},"\u7f16\u5199\u6211\u4eec\u7684\u5408\u7ea6"),(0,a.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u5f00\u59cb\u7f16\u5199\u793a\u4f8b\u5408\u7ea6\u3002\n\u5bf9\u4e8e\u7f16\u5199Solidity\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528IntelliJ\u6216\u5e26\u6709Solidity\u63d2\u4ef6\u7684VSCode\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u6587\u672c\u7f16\u8f91\u5668\u3002\n\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u5408\u7ea6\uff0c\u8fd4\u56de\u7ed9\u5b9a\u4ee3\u5e01\u5bf9\u7684\u4e00\u5b9a\u6570\u91cf\u6d41\u52a8\u6027\u7684\u4ef7\u503c\u3002\n\u9996\u5148\u521b\u5efa\u51e0\u4e2a\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"mkdir contracts/interfaces\ntouch contracts/interfaces/ILiquidityValueCalculator.sol\ntouch contracts/LiquidityValueCalculator.sol\n")),(0,a.kt)("p",null,"\u8fd9\u5c06\u662f\u6211\u4eec\u5c06\u5b9e\u73b0\u7684\u5408\u7ea6\u7684\u63a5\u53e3\u3002\u5c06\u5176\u653e\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"contracts/interfaces/ILiquidityValueCalculator.sol"),"\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.6.6;\n\ninterface ILiquidityValueCalculator {\n    function computeLiquidityShareValue(uint liquidity, address tokenA, address tokenB) external returns (uint tokenAAmount, uint tokenBAmount);\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u4ece\u6784\u9020\u51fd\u6570\u5f00\u59cb\u3002\u4e3a\u4e86\u8ba1\u7b97\u4ee3\u5e01\u5bf9\u7684\u5730\u5740\u5e76\u67e5\u627e\u6d41\u52a8\u4efd\u989d\u7684\u603b\u4f9b\u5e94\u91cf\u4ee5\u53ca\u50a8\u5907\u91d1\u7684\u6570\u91cf\uff0c\u4f60\u9700\u8981\u77e5\u9053",(0,a.kt)("inlineCode",{parentName:"p"},"UniswapV2Factory"),"\u5728\u54ea\u91cc\u90e8\u7f72\u3002\n\u6211\u4eec\u53ef\u4ee5\u5c06\u6b64\u4f5c\u4e3a\u4f20\u9012\u7ed9\u6784\u9020\u51fd\u6570\u7684\u5730\u5740\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u5de5\u5382\u5730\u5740\u5728\u4e3b\u7f51\u548c\u6240\u6709\u6d4b\u8bd5\u7f51\u4e0a\u662f\u5e38\u91cf\uff0c\u6240\u4ee5\u4f60\u53ef\u80fd\u60f3\u5728\u4f60\u7684\u5408\u7ea6\u4e2d\u5c06\u8fd9\u4e2a\u503c\u8bbe\u4e3a\u5e38\u91cf\uff0c\n\u4f46\u7531\u4e8e\u6211\u4eec\u9700\u8981\u5355\u5143\u6d4b\u8bd5\u5408\u7ea6\uff0c\u5b83\u5e94\u8be5\u662f\u4e00\u4e2a\u53c2\u6570\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528Solidity\u4e0d\u53ef\u53d8\u6027\u6765\u8282\u7701\u8bbf\u95ee\u6b64\u53d8\u91cf\u65f6\u7684gas\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.6.6;\n\nimport './interfaces/ILiquidityValueCalculator.sol';\n\ncontract LiquidityValueCalculator is ILiquidityValueCalculator {\n    address public factory;\n    constructor(address factory_) public {\n        factory = factory_;\n    }\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u9700\u8981\u80fd\u591f\u67e5\u627e\u4e00\u5bf9\u7684\u6d41\u52a8\u6027\u7684\u603b\u4f9b\u5e94\u91cf\u53ca\u5176\u4ee3\u5e01\u4f59\u989d\u3002\n\u8ba9\u6211\u4eec\u628a\u8fd9\u4e2a\u653e\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u51fd\u6570\u4e2d\u3002\u4e3a\u4e86\u5b9e\u73b0\u5b83\uff0c\u6211\u4eec\u5fc5\u987b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u67e5\u627e\u4ee3\u5e01\u5bf9\u5730\u5740"),(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u4ee3\u5e01\u5bf9\u7684\u50a8\u5907\u91d1"),(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u4ee3\u5e01\u5bf9\u6d41\u52a8\u6027\u7684\u603b\u4f9b\u5e94\u91cf"),(0,a.kt)("li",{parentName:"ol"},"\u6309\u7167tokenA\u3001tokenB\u7684\u987a\u5e8f\u6392\u5e8f\u50a8\u5907\u91d1")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UniswapV2Library"),"\u4e2d\u6709\u5bf9\u6b64\u6709\u5e2e\u52a9\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.6.6;\n\nimport './interfaces/ILiquidityValueCalculator.sol';\nimport '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';\nimport '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';\n\ncontract LiquidityValueCalculator is ILiquidityValueCalculator {\n    function pairInfo(address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB, uint totalSupply) {\n        IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, tokenA, tokenB));\n        totalSupply = pair.totalSupply();\n        (uint reserves0, uint reserves1,) = pair.getReserves();\n        (reserveA, reserveB) = tokenA == pair.token0() ? (reserves0, reserves1) : (reserves1, reserves0);\n    }\n}\n")),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ea\u9700\u8981\u8ba1\u7b97\u4efd\u989d\u4ef7\u503c\u3002\u6211\u4eec\u5c06\u7559\u7ed9\u8bfb\u8005\u5b8c\u6210\u8fd9\u4e00\u90e8\u5206\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.6.6;\n\nimport './interfaces/ILiquidityValueCalculator.sol';\nimport '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';\nimport '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';\n\ncontract LiquidityValueCalculator is ILiquidityValueCalculator {\n    address public factory;\n    constructor(address factory_) public {\n        factory = factory_;\n    }\n\n    function pairInfo(address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB, uint totalSupply) {\n        IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, tokenA, tokenB));\n        totalSupply = pair.totalSupply();\n        (uint reserves0, uint reserves1,) = pair.getReserves();\n        (reserveA, reserveB) = tokenA == pair.token0() ? (reserves0, reserves1) : (reserves1, reserves0);\n    }\n\n    function computeLiquidityShareValue(uint liquidity, address tokenA, address tokenB) external override returns (uint tokenAAmount, uint tokenBAmount) {\n        revert('TODO');\n    }\n}\n")),(0,a.kt)("h2",{id:"\u7f16\u5199\u6d4b\u8bd5"},"\u7f16\u5199\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u4e3a\u4e86\u6d4b\u8bd5\u4f60\u7684\u5408\u7ea6\uff0c\u4f60\u9700\u8981\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4e00\u4e2a\u6d4b\u8bd5\u7f51"),(0,a.kt)("li",{parentName:"ol"},"\u90e8\u7f72",(0,a.kt)("inlineCode",{parentName:"li"},"UniswapV2Factory")),(0,a.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u81f3\u5c112\u4e2aERC20\u4ee3\u5e01\u7528\u4e8e\u4e00\u5bf9"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u5de5\u5382\u521b\u5efa\u4e00\u4e2a\u4ee3\u5e01\u5bf9"),(0,a.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u4f60\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"LiquidityValueCalculator"),"\u5408\u7ea6"),(0,a.kt)("li",{parentName:"ol"},"\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"LiquidityValueCalculator#computeLiquidityShareValue")),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u65ad\u8a00\u9a8c\u8bc1\u7ed3\u679c")),(0,a.kt)("p",null,"#","1\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"truffle test"),"\u547d\u4ee4\u81ea\u52a8\u4e3a\u4f60\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4f60\u53ea\u5e94\u5728\u5355\u5143\u6d4b\u8bd5\u4e2d\u90e8\u7f72",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\u76ee\u5f55\u4e2d\u7684\u9884\u7f16\u8bd1Uniswap\u5408\u7ea6\u3002\n\u8fd9\u662f\u56e0\u4e3aSolidity\u4f1a\u5728\u7f16\u8bd1\u7684\u5408\u7ea6artifacts\u540e\u9644\u52a0\u5143\u6570\u636e\u54c8\u5e0c\uff0c\u5176\u4e2d\u5305\u62ec\u5408\u540c\u6e90\u4ee3\u7801\u8def\u5f84\u7684\u54c8\u5e0c\uff0c\u800c\u5176\u4ed6\u673a\u5668\u4e0a\u7684\u7f16\u8bd1\u4e0d\u4f1a\u4ea7\u751f\u5b8c\u5168\u76f8\u540c\u7684\u5b57\u8282\u7801\u3002\n\u8fd9\u5b58\u5728\u95ee\u9898\uff0c\u56e0\u4e3a\u5728Uniswap V2\u4e2d\uff0c\u6211\u4eec\u5728v2-periphery\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/libraries/UniswapV2Library.sol#L24"},(0,a.kt)("inlineCode",{parentName:"a"},"UniswapV2Library")),"\u4e2d\u4f7f\u7528\u5b57\u8282\u7801\u7684\u54c8\u5e0c\uff0c\n\u6765\u8ba1\u7b97\u4ee3\u5e01\u5bf9\u5730\u5740\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u83b7\u53d6\u90e8\u7f72UniswapV2Factory\u7684\u5b57\u8282\u7801\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5bfc\u5165\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const UniswapV2FactoryBytecode = require('@uniswap/v2-core/build/UniswapV2Factory.json').bytecode\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u6765\u81ea",(0,a.kt)("inlineCode",{parentName:"p"},"@openzeppelin/contracts"),"\u7684\u6807\u51c6ERC20\u6765\u90e8\u7f72ERC20\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u9605\u8bfb\u66f4\u591a\u5173\u4e8e\u4f7f\u7528Truffle\u90e8\u7f72\u5408\u7ea6\u548c\u7f16\u5199\u6d4b\u8bd5\u7684\u4fe1\u606f\n",(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript"},"here"),"\u3002"),(0,a.kt)("h2",{id:"\u7f16\u8bd1\u548c\u90e8\u7f72\u5408\u7ea6"},"\u7f16\u8bd1\u548c\u90e8\u7f72\u5408\u7ea6"),(0,a.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4f7f\u7528Truffle\u7f16\u8bd1\u548c\u90e8\u7f72\u5408\u7ea6\u7684\u4fe1\u606f\n",(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/getting-started/compiling-contracts"},"here")," \u548c\n",(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations"},"here")," \u5206\u522b\u3002"),(0,a.kt)("h2",{id:"\u6b63\u5728\u8fdb\u884c\u4e2d"},"\u6b63\u5728\u8fdb\u884c\u4e2d"),(0,a.kt)("p",null,"\u672c\u6307\u5357\u6b63\u5728\u8fdb\u884c\u4e2d\u3002\u8bf7\u901a\u8fc7\u4e0b\u9762\u7684\u7f16\u8f91\u6309\u94ae\u4e3a\u672c\u6307\u5357\u505a\u51fa\u8d21\u732e\uff01"))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);