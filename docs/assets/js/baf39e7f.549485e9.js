"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[7031],{97768:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(83117),r=(t(67294),t(3905));const l={id:"lock-mechanism",title:"\u9501\u5b9a\u673a\u5236 - \u95ea\u7535\u4f1a\u8ba1",sidebar_position:4},o="\u9501\u5b9a\u5165\u95e8",i={unversionedId:"contracts/v4/concepts/lock-mechanism",id:"contracts/v4/concepts/lock-mechanism",title:"\u9501\u5b9a\u673a\u5236 - \u95ea\u7535\u4f1a\u8ba1",description:"V4 \u4e2d\u7684\u9501\u5b9a\u673a\u5236\u786e\u4fdd\u4e86\u7279\u5b9a\u64cd\u4f5c\u4ee5\u539f\u5b50\u65b9\u5f0f\u6267\u884c\uff0c\u4e0d\u53d7\u5e72\u6270\uff0c\u4fdd\u8bc1\u4e86\u6c60\u7ba1\u7406\u5668\u72b6\u6001\u7684\u4e00\u81f4\u6027\u548c\u6b63\u786e\u6027\u3002\u6c60\u7ba1\u7406\u5668\u4f7f\u7528 Lockers \u6765\u7ba1\u7406\u4e00\u4e2a\u9501\u961f\u5217\uff0c\u786e\u4fdd\u6240\u6709\u8d27\u5e01\u589e\u91cf\u5728\u91ca\u653e\u9501\u4e4b\u524d\u5f97\u5230\u7ed3\u7b97\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v4/concepts/05-lock-mechanism.mdx",sourceDirName:"contracts/v4/concepts",slug:"/contracts/v4/concepts/lock-mechanism",permalink:"/uniswap-docs/contracts/v4/concepts/lock-mechanism",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v4/concepts/05-lock-mechanism.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"lock-mechanism",title:"\u9501\u5b9a\u673a\u5236 - \u95ea\u7535\u4f1a\u8ba1",sidebar_position:4},sidebar:"contractsSidebar",previous:{title:"\u4ea4\u6362\u4ee3\u5e01",permalink:"/uniswap-docs/contracts/v4/concepts/swap-tokens"},next:{title:"\u94a9\u5b50\u90e8\u7f72",permalink:"/uniswap-docs/contracts/v4/concepts/hook-deployment"}},c={},p=[{value:"\u4e3b\u8981\u7ec4\u4ef6",id:"\u4e3b\u8981\u7ec4\u4ef6",level:2},{value:"1. <strong>\u9501\u5b9a\u4e0e\u89e3\u9501\uff1a</strong>",id:"1-\u9501\u5b9a\u4e0e\u89e3\u9501",level:3},{value:"2. <strong>Lockers.sol</strong>",id:"2-lockerssol",level:3},{value:"3. <strong>\u975e\u96f6\u589e\u91cf\u8ffd\u8e2a\uff08\u95ea\u7535\u4f1a\u8ba1\uff09\uff1a</strong>",id:"3-\u975e\u96f6\u589e\u91cf\u8ffd\u8e2a\u95ea\u7535\u4f1a\u8ba1",level:3},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:p};function k(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9501\u5b9a\u5165\u95e8"},"\u9501\u5b9a\u5165\u95e8"),(0,r.kt)("p",null,"V4 \u4e2d\u7684\u9501\u5b9a\u673a\u5236\u786e\u4fdd\u4e86\u7279\u5b9a\u64cd\u4f5c\u4ee5\u539f\u5b50\u65b9\u5f0f\u6267\u884c\uff0c\u4e0d\u53d7\u5e72\u6270\uff0c\u4fdd\u8bc1\u4e86\u6c60\u7ba1\u7406\u5668\u72b6\u6001\u7684\u4e00\u81f4\u6027\u548c\u6b63\u786e\u6027\u3002\u6c60\u7ba1\u7406\u5668\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Lockers")," \u6765\u7ba1\u7406\u4e00\u4e2a\u9501\u961f\u5217\uff0c\u786e\u4fdd\u6240\u6709\u8d27\u5e01\u589e\u91cf\u5728\u91ca\u653e\u9501\u4e4b\u524d\u5f97\u5230\u7ed3\u7b97\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u5728\u5408\u7ea6\u4e0a\u83b7\u53d6\u9501\u5e76\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"lockAcquired")," \u56de\u8c03\u51fd\u6570\uff0c\u53ef\u4ee5\u5bf9\u6c60\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modifyPosition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"donate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"take")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"settle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mint"))),(0,r.kt)("h2",{id:"\u4e3b\u8981\u7ec4\u4ef6"},"\u4e3b\u8981\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolManager")," \u4e2d\uff0c\u201c\u9501\u5b9a\u201d\u672c\u8d28\u4e0a\u662f\u4e00\u79cd\u786e\u4fdd\u67d0\u4e9b\u64cd\u4f5c\u534f\u8c03\u8fdb\u884c\u3001\u4e92\u4e0d\u5e72\u6270\u7684\u65b9\u5f0f\u3002\u4ee5\u4e0b\u662f\u9501\u5b9a\u673a\u5236\u7684\u4e3b\u8981\u7ec4\u6210\u90e8\u5206\uff1a"),(0,r.kt)("h3",{id:"1-\u9501\u5b9a\u4e0e\u89e3\u9501"},"1. ",(0,r.kt)("strong",{parentName:"h3"},"\u9501\u5b9a\u4e0e\u89e3\u9501\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"lock")," \u51fd\u6570\u662f\u542f\u52a8\u9501\u5b9a\u673a\u5236\u7684\u5730\u65b9\u3002\u5b83\u5c06\u5730\u5740\u5143\u7ec4\uff08locker \u5730\u5740\uff0clockCaller \u5730\u5740\uff09\u63a8\u5165\u9501\u6570\u7ec4\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function lock(address lockTarget, bytes calldata data) external payable override returns (bytes memory result) {\n    Lockers.push(lockTarget, msg.sender);\n\n    // \u8c03\u7528\u8005\u5728\u6b64\u56de\u8c03\u4e2d\u5b8c\u6210\u6240\u6709\u64cd\u4f5c\uff0c\u5305\u62ec\u901a\u8fc7\u8c03\u7528 settle \u6765\u652f\u4ed8\u5176\u6b20\u6b3e\n    result = ILockCallback(lockTarget).lockAcquired(msg.sender, data);\n\n    if (Lockers.length() == 1) {\n        if (Lockers.nonzeroDeltaCount() != 0) revert CurrencyNotSettled();\n        Lockers.clear();\n    } else {\n        Lockers.pop();\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u9501\u5b9a\u671f\u95f4\uff0c\u4f1a\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ILockCallback(lockTarget).lockAcquired(msg.sender, data)")," \u56de\u8c03\u51fd\u6570\uff0c\u5728\u8fd9\u91cc\u9501\u5b9a\u7684\u5408\u7ea6\u53ef\u4ee5\u6267\u884c\u5fc5\u8981\u7684\u64cd\u4f5c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b8c\u6210\u56de\u8c03\u4e2d\u7684\u64cd\u4f5c\u540e\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"Lockers")," \u53ea\u6709\u4e00\u4e2a\u5143\u7d20\uff0c\u5219\u6e05\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"Lockers"),"\uff0c\u8868\u793a\u9501\u5df2\u91ca\u653e\uff1b\u5426\u5219\uff0c\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"Lockers")," \u4e2d\u5f39\u51fa\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u8868\u793a\u8be5\u7279\u5b9a\u5730\u5740\u7684\u9501\u5df2\u91ca\u653e\u3002"))),(0,r.kt)("h3",{id:"2-lockerssol"},"2. ",(0,r.kt)("strong",{parentName:"h3"},"Lockers.sol")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Lockers")," \u5e93\u5728\u77ac\u65f6\u5b58\u50a8\u4e2d\u5b58\u50a8\u4e86\u4e00\u4e2a locker \u5730\u5740\u53ca\u5176\u5bf9\u5e94\u7684 lockCaller \u5730\u5740\u7684\u6570\u7ec4/\u961f\u5217\u3002\u6bcf\u4e2a locker \u7531\u4e00\u4e2a\u5143\u7ec4\uff08address locker\uff0caddress lockCaller\uff09\u8868\u793a\uff0c\u5e76\u4e14\u6bcf\u4e2a\u5143\u7ec4\u5360\u7528\u77ac\u65f6\u5b58\u50a8\u4e2d\u7684\u4e24\u4e2a\u69fd\u4f4d\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"push"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"pop"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"length")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"clear")," \u51fd\u6570\u7528\u4e8e\u7ba1\u7406\u8fd9\u4e2a\u961f\u5217\u3002"),(0,r.kt)("h3",{id:"3-\u975e\u96f6\u589e\u91cf\u8ffd\u8e2a\u95ea\u7535\u4f1a\u8ba1"},"3. ",(0,r.kt)("strong",{parentName:"h3"},"\u975e\u96f6\u589e\u91cf\u8ffd\u8e2a\uff08\u95ea\u7535\u4f1a\u8ba1\uff09\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Lockers")," \u5e93\u8fd8\u5305\u62ec\u4e00\u4e2a\u673a\u5236\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"nonzeroDeltaCount"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"incrementNonzeroDeltaCount")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"decrementNonzeroDeltaCount")," \u6765\u8ddf\u8e2a\u975e\u96f6\u589e\u91cf\u7684\u6570\u91cf\u3002\u8fd9\u4e9b\u51fd\u6570\u8ffd\u8e2a\u53d1\u751f\u7684\u53d8\u5316\u6216\u589e\u91cf\u6570\u91cf\uff0c\u5e76\u5728\u91ca\u653e\u9501\u524d\u68c0\u67e5\u8fd9\u4e9b\u589e\u91cf\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"_accountDelta")," \u51fd\u6570\u8ffd\u8e2a\u6bcf\u4e2a locker \u5bf9\u4e8e\u7279\u5b9a\u8d27\u5e01\u7684\u4f59\u989d\u53d8\u5316\uff08\u589e\u91cf\uff09\u3002\u5b83\u9996\u5148\u68c0\u67e5\u589e\u91cf\uff08\u4f59\u989d\u53d8\u5316\uff09\u662f\u5426\u4e3a\u96f6\uff1b\u5982\u679c\u662f\uff0c\u51fd\u6570\u7acb\u5373\u8fd4\u56de\uff0c\u56e0\u4e3a\u6ca1\u6709\u9700\u8981\u8ba1\u7b97\u7684\u53d8\u5316\u3002\u5982\u679c\u589e\u91cf\u975e\u96f6\uff0c\u51fd\u6570\u68c0\u7d22\u6307\u5b9a locker \u548c\u8d27\u5e01\u7684\u5f53\u524d\u4f59\u989d\uff0c\u7136\u540e\u901a\u8fc7\u5c06\u589e\u91cf\u52a0\u5230\u5f53\u524d\u4f59\u989d\u6765\u8ba1\u7b97\u65b0\u4f59\u989d\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6b64\u51fd\u6570\u8fd8\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Lockers")," \u5e93\u6765\u9012\u589e\u6216\u9012\u51cf\u8ffd\u8e2a\u975e\u96f6\u4f59\u989d\u53d8\u5316\u6570\u91cf\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"nonzeroDeltaCount"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function _accountDelta(Currency currency, int128 delta) internal {\nif (delta == 0) return;\n\n      address locker = Lockers.getCurrentLocker();\n      int256 current = currencyDelta[locker][currency];\n      int256 next = current + delta;\n\n      unchecked {\n          if (next == 0) {\n              Lockers.decrementNonzeroDeltaCount();\n          } else if (current == 0) {\n              Lockers.incrementNonzeroDeltaCount();\n          }\n      }\n\n      currencyDelta[locker][currency] = next;\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u673a\u5236\u662f Uniswap V4 \u6240\u8c13\u201c\u95ea\u7535\u4f1a\u8ba1\u201d\u7684\u5173\u952e\u90e8\u5206\u3002\u95ea\u7535\u4f1a\u8ba1\u662f\u5728\u65b0\u7684\u5355\u4e00\u98ce\u683c\u6c60\u7ba1\u7406\u4e2d\u5f15\u5165\u7684\u4e00\u79cd\u521b\u65b0\u65b9\u6cd5\u3002\u6b64\u529f\u80fd\u4ece\u6839\u672c\u4e0a\u6539\u53d8\u4e86\u4ea4\u6613\u8fc7\u7a0b\u4e2d\u7684\u4ee3\u5e01\u7ba1\u7406\u65b9\u5f0f\u3002\u4f20\u7edf\u65b9\u6cd5\u901a\u5e38\u8981\u6c42\u5728\u6bcf\u4e2a\u64cd\u4f5c\u9636\u6bb5\u660e\u786e\u8ffd\u8e2a\u4ee3\u5e01\u4f59\u989d\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u95ea\u7535\u4f1a\u8ba1\u9075\u5faa\u7684\u539f\u5219\u662f\uff0c\u5728\u6bcf\u6b21\u4ea4\u6613\u6216\u201c\u9501\u5b9a\u5468\u671f\u201d\u7ed3\u675f\u65f6\uff0c\u6c60\u6216\u8c03\u7528\u8005\u90fd\u4e0d\u5e94\u6709\u51c0\u6b20\u4ee3\u5e01\uff0c\u4ece\u800c\u6781\u5927\u5730\u7b80\u5316\u4e86\u4f1a\u8ba1\u6d41\u7a0b\u3002"))),(0,r.kt)("h3",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,r.kt)("p",null,"PoolManager \u5408\u7ea6\u4e2d\u7684\u9501\u5b9a\u673a\u5236\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f53\u7528\u6237\u60f3\u8981\u9501\u5b9a\u65f6\uff0c\u4ed6\u4eec\u5e26\u7740\u5e0c\u671b\u4f20\u9012\u7ed9\u56de\u8c03\u7684\u6570\u636e\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"lock()")," \u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lock()")," \u51fd\u6570\u5c06\u5143\u7ec4\uff08address locker\uff0caddress lockCaller\uff09\u63a8\u5165\u9501\u961f\u5217\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lock()")," \u51fd\u6570\u968f\u540e\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"ILockCallback(lockTarget).lockAcquired(msg.sender, data)")," \u56de\u8c03\u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u56de\u8c03\u53ef\u4ee5\u6267\u884c\u6240\u9700\u7684\u64cd\u4f5c\uff0c\u5982\u66f4\u65b0\u7528\u6237\u7684\u4f59\u989d\u6216\u4e0e\u5176\u4ed6\u5408\u7ea6\u4ea4\u4e92\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u56de\u8c03\u5b8c\u6210\u540e\uff0c\u8fd4\u56de\u81f3 ",(0,r.kt)("inlineCode",{parentName:"li"},"lock()")," \u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lock()")," \u51fd\u6570\u68c0\u67e5\u961f\u5217\u4e2d\u662f\u5426\u6709\u5176\u4ed6\u9501\u3002\u5982\u679c\u6709\uff0c\u5b83\u4f1a\u5f39\u51fa\u961f\u5217\u4e2d\u7684\u4e0b\u4e00\u4e2a\u9501\u5e76\u4e3a\u8be5\u9501\u8c03\u7528\u56de\u8c03\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u961f\u5217\u4e2d\u6ca1\u6709\u66f4\u591a\u9501\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"lock()")," \u51fd\u6570\u8fd4\u56de\u3002")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4ece\u793e\u533a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kadenzipfel/uni-lbp/blob/main/src/LiquidityBootstrappingHooks.sol"},'"\u6d41\u52a8\u6027\u5f15\u5bfc\u6302\u94a9"')," \u7684\u793a\u4f8b\uff0c\u8be5\u793a\u4f8b\u4f7f\u7528\u9501\u5b9a\u673a\u5236\u5e76\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"modifyPosition")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"swap")," \u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'/// @notice \u5f53\u6c60\u7ba1\u7406\u5668\u83b7\u53d6\u9501\u65f6\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570\n///         \u7528\u4e8e\u5185\u90e8\u4fee\u6539\u4ed3\u4f4d\u548c\u4ea4\u6362\u4ee3\u5e01\n/// @param data \u4f20\u9012\u7ed9 lock \u51fd\u6570\u7684\u6570\u636e\n/// @return \u4f59\u989d\u589e\u91cf\nfunction lockAcquired(bytes calldata data) external override poolManagerOnly returns (bytes memory) {\n    bytes4 selector = abi.decode(data[:32], (bytes4));\n\n    if (selector == IPoolManager.modifyPosition.selector) {\n        ModifyPositionCallback memory callback = abi.decode(data[32:], (ModifyPositionCallback));\n\n        BalanceDelta delta = poolManager.modifyPosition(callback.key, callback.params, bytes(""));\n\n        if (callback.params.liquidityDelta < 0) {\n            // \u51cf\u5c11\u6d41\u52a8\u6027\uff0c\u4ece\u6c60\u7ba1\u7406\u5668\u53d6\u8d70\u4ee3\u5e01\n            _takeDeltas(callback.key, delta, callback.takeToOwner); // \u5982\u679c\u6307\u5b9a\uff0c\u53d6\u81f3\u6240\u6709\u8005\uff08\u9000\u51fa\uff09\n        } else {\n            // \u589e\u52a0\u6d41\u52a8\u6027\uff0c\u5411\u6c60\u7ba1\u7406\u5668\u7ed3\u7b97\u4ee3\u5e01\n            _settleDeltas(callback.key, delta);\n        }\n\n        return abi.encode(delta);\n    }\n\n    if (selector == IPoolManager.swap.selector) {\n        SwapCallback memory callback = abi.decode(data[32:], (SwapCallback));\n\n        BalanceDelta delta = poolManager.swap(callback.key, callback.params, bytes(""));\n\n        // \u53d6\u8d70\u548c\u7ed3\u7b97\u589e\u91cf\n        _takeDeltas(callback.key, delta, true); // \u5c06\u4ee3\u5e01\u53d6\u81f3\u6240\u6709\u8005\n        _settleDeltas(callback.key, delta);\n\n        return abi.encode(delta);\n    }\n\n    return bytes("");\n}\n')),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5728\u91ca\u653e\u9501\u4e4b\u524d\uff0c\u4f1a\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"nonzeroDeltaCount")," \u4ee5\u786e\u4fdd\u6240\u6709\u8d27\u5e01\u589e\u91cf\u90fd\u5df2\u7ed3\u7b97\u3002\u8fd9\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"_takeDeltas")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"_settleDeltas")," \u51fd\u6570\u5b8c\u6210\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"/// @notice \u6839\u636e\u4f59\u989d\u589e\u91cf\u53d6\u8d70\u4ee3\u5e01\u7684\u5e2e\u52a9\u51fd\u6570\n/// @param delta \u4f59\u989d\u589e\u91cf\n/// @param takeToOwner \u662f\u5426\u5c06\u4ee3\u5e01\u53d6\u81f3\u6240\u6709\u8005\nfunction _takeDeltas(PoolKey memory key, BalanceDelta delta, bool takeToOwner) internal {\n    PoolId poolId = key.toId();\n    int256 delta0 = delta.amount0();\n    int256 delta1 = delta.amount1();\n\n    if (delta0 < 0) {\n        poolManager.take(key.currency0, takeToOwner ? owner[poolId] : address(this), uint256(-delta0));\n    }\n\n    if (delta1 < 0) {\n        poolManager.take(key.currency1, takeToOwner ? owner[poolId] : address(this), uint256(-delta1));\n    }\n}\n\n/// @notice \u6839\u636e\u4f59\u989d\u589e\u91cf\u7ed3\u7b97\u4ee3\u5e01\u7684\u5e2e\u52a9\u51fd\u6570\n/// @param key \u6c60\u952e\n/// @param delta \u4f59\u989d\u589e\u91cf\nfunction _settleDeltas(PoolKey memory key, BalanceDelta delta) internal {\n    int256 delta0 = delta.amount0();\n    int256 delta1 = delta.amount1();\n\n    if (delta0 > 0) {\n        key.currency0.transfer(address(poolManager), uint256(delta0));\n        poolManager.settle(key.currency0);\n    }\n\n    if (delta1 > 0) {\n        key.currency1.transfer(address(poolManager), uint256(delta1));\n        poolManager.settle(key.currency1);\n    }\n}\n")))}k.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,u=d["".concat(c,".").concat(m)]||d[m]||k[m]||l;return t?a.createElement(u,o(o({ref:n},s),{},{components:t})):a.createElement(u,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);