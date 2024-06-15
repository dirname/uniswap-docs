"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[2661],{42896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(83117),a=(n(67294),n(3905));const i={id:"pair",title:"Pair"},s=void 0,l={unversionedId:"contracts/v2/reference/smart-contracts/pair",id:"contracts/v2/reference/smart-contracts/pair",title:"Pair",description:"This documentation covers Uniswap-specific functionality. For ERC-20 functionality, see Pair (ERC-20).",source:"@site/docs/contracts/v2/reference/smart-contracts/02-pair.md",sourceDirName:"contracts/v2/reference/smart-contracts",slug:"/contracts/v2/reference/smart-contracts/pair",permalink:"/uniswap-docs/en/contracts/v2/reference/smart-contracts/pair",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v2/reference/smart-contracts/02-pair.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"pair",title:"Pair"},sidebar:"contractsSidebar",previous:{title:"Factory",permalink:"/uniswap-docs/en/contracts/v2/reference/smart-contracts/factory"},next:{title:"Pair (ERC-20)",permalink:"/uniswap-docs/en/contracts/v2/reference/smart-contracts/Pair-ERC-20"}},u={},o=[{value:"Mint",id:"mint",level:2},{value:"Burn",id:"burn",level:2},{value:"Swap",id:"swap",level:2},{value:"Sync",id:"sync",level:2},{value:"MINIMUM_LIQUIDITY",id:"minimum_liquidity",level:2},{value:"factory",id:"factory",level:2},{value:"token0",id:"token0",level:2},{value:"token1",id:"token1",level:2},{value:"getReserves",id:"getreserves",level:2},{value:"price0CumulativeLast",id:"price0cumulativelast",level:2},{value:"price1CumulativeLast",id:"price1cumulativelast",level:2},{value:"kLast",id:"klast",level:2},{value:"mint",id:"mint-1",level:2},{value:"burn",id:"burn-1",level:2},{value:"swap",id:"swap-1",level:2},{value:"skim",id:"skim",level:2},{value:"sync",id:"sync-1",level:2}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This documentation covers Uniswap-specific functionality. For ERC-20 functionality, see ",(0,a.kt)("a",{parentName:"p",href:"../smart-contracts/pair-erc-20"},"Pair (ERC-20)"),"."),(0,a.kt)("h1",{id:"code"},"Code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol"},(0,a.kt)("inlineCode",{parentName:"a"},"UniswapV2Pair.sol"))),(0,a.kt)("h1",{id:"address"},"Address"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../guides/smart-contract-integration/getting-pair-addresses"},"Pair Addresses"),"."),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("h2",{id:"mint"},"Mint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event Mint(address indexed sender, uint amount0, uint amount1);\n")),(0,a.kt)("p",null,"Emitted each time liquidity tokens are created via ",(0,a.kt)("a",{parentName:"p",href:"#mint-1"},"mint"),"."),(0,a.kt)("h2",{id:"burn"},"Burn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\n")),(0,a.kt)("p",null,"Emitted each time liquidity tokens are destroyed via ",(0,a.kt)("a",{parentName:"p",href:"#burn-1"},"burn"),"."),(0,a.kt)("h2",{id:"swap"},"Swap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event Swap(\n  address indexed sender,\n  uint amount0In,\n  uint amount1In,\n  uint amount0Out,\n  uint amount1Out,\n  address indexed to\n);\n")),(0,a.kt)("p",null,"Emitted each time a swap occurs via ",(0,a.kt)("a",{parentName:"p",href:"#swap-1"},"swap"),"."),(0,a.kt)("h2",{id:"sync"},"Sync"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event Sync(uint112 reserve0, uint112 reserve1);\n")),(0,a.kt)("p",null,"Emitted each time reserves are updated via ",(0,a.kt)("a",{parentName:"p",href:"#mint-1"},"mint"),", ",(0,a.kt)("a",{parentName:"p",href:"#burn-1"},"burn"),", ",(0,a.kt)("a",{parentName:"p",href:"#swap-1"},"swap"),", or ",(0,a.kt)("a",{parentName:"p",href:"#sync-1"},"sync"),"."),(0,a.kt)("h1",{id:"read-only-functions"},"Read-Only Functions"),(0,a.kt)("h2",{id:"minimum_liquidity"},"MINIMUM_LIQUIDITY"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function MINIMUM_LIQUIDITY() external pure returns (uint);\n")),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"1000")," for all pairs. See ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/protocol-overview/smart-contracts#minimum-liquidity"},"Minimum Liquidity"),"."),(0,a.kt)("h2",{id:"factory"},"factory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function factory() external view returns (address);\n")),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"../smart-contracts/factory#address"},"factory address"),"."),(0,a.kt)("h2",{id:"token0"},"token0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function token0() external view returns (address);\n")),(0,a.kt)("p",null,"Returns the address of the pair token with the lower sort order."),(0,a.kt)("h2",{id:"token1"},"token1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function token1() external view returns (address);\n")),(0,a.kt)("p",null,"Returns the address of the pair token with the higher sort order."),(0,a.kt)("h2",{id:"getreserves"},"getReserves"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);\n")),(0,a.kt)("p",null,"Returns the reserves of token0 and token1 used to price trades and distribute liquidity. See ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/advanced-topics/pricing"},"Pricing"),". Also returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"block.timestamp")," (mod ",(0,a.kt)("inlineCode",{parentName:"p"},"2**32"),") of the last block during which an interaction occured for the pair."),(0,a.kt)("h2",{id:"price0cumulativelast"},"price0CumulativeLast"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function price0CumulativeLast() external view returns (uint);\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/core-concepts/oracles"},"Oracles"),"."),(0,a.kt)("h2",{id:"price1cumulativelast"},"price1CumulativeLast"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function price1CumulativeLast() external view returns (uint);\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/core-concepts/oracles"},"Oracles"),"."),(0,a.kt)("h2",{id:"klast"},"kLast"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function kLast() external view returns (uint);\n")),(0,a.kt)("p",null,"Returns the product of the reserves as of the most recent liquidity event. See ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/advanced-topics/fees#protocol-charge-calculation"},"Protocol Charge Calculation"),"."),(0,a.kt)("h1",{id:"state-changing-functions"},"State-Changing Functions"),(0,a.kt)("h2",{id:"mint-1"},"mint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function mint(address to) external returns (uint liquidity);\n")),(0,a.kt)("p",null,"Creates pool tokens."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emits ",(0,a.kt)("a",{parentName:"li",href:"#mint"},"Mint"),", ",(0,a.kt)("a",{parentName:"li",href:"#sync"},"Sync"),", ",(0,a.kt)("a",{parentName:"li",href:"../smart-contracts/pair-erc-20#transfer"},"Transfer"),".")),(0,a.kt)("h2",{id:"burn-1"},"burn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function burn(address to) external returns (uint amount0, uint amount1);\n")),(0,a.kt)("p",null,"Destroys pool tokens."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emits ",(0,a.kt)("a",{parentName:"li",href:"#burn"},"Burn"),", ",(0,a.kt)("a",{parentName:"li",href:"#sync"},"Sync"),", ",(0,a.kt)("a",{parentName:"li",href:"../smart-contracts/pair-erc-20#transfer"},"Transfer"),".")),(0,a.kt)("h2",{id:"swap-1"},"swap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;\n")),(0,a.kt)("p",null,"Swaps tokens. For regular swaps, ",(0,a.kt)("inlineCode",{parentName:"p"},"data.length")," must be ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". Also see ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/core-concepts/flash-swaps"},"Flash Swaps"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emits ",(0,a.kt)("a",{parentName:"li",href:"#swap"},"Swap"),", ",(0,a.kt)("a",{parentName:"li",href:"#sync"},"Sync"),".")),(0,a.kt)("h2",{id:"skim"},"skim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function skim(address to) external;\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{href:"/whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"},"whitepaper"),"."),(0,a.kt)("h2",{id:"sync-1"},"sync"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function sync() external;\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{href:"/whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"},"whitepaper"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emits ",(0,a.kt)("a",{parentName:"li",href:"#sync"},"Sync"),".")),(0,a.kt)("h1",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity >=0.5.0;\n\ninterface IUniswapV2Pair {\n  event Approval(address indexed owner, address indexed spender, uint value);\n  event Transfer(address indexed from, address indexed to, uint value);\n\n  function name() external pure returns (string memory);\n  function symbol() external pure returns (string memory);\n  function decimals() external pure returns (uint8);\n  function totalSupply() external view returns (uint);\n  function balanceOf(address owner) external view returns (uint);\n  function allowance(address owner, address spender) external view returns (uint);\n\n  function approve(address spender, uint value) external returns (bool);\n  function transfer(address to, uint value) external returns (bool);\n  function transferFrom(address from, address to, uint value) external returns (bool);\n\n  function DOMAIN_SEPARATOR() external view returns (bytes32);\n  function PERMIT_TYPEHASH() external pure returns (bytes32);\n  function nonces(address owner) external view returns (uint);\n\n  function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\n\n  event Mint(address indexed sender, uint amount0, uint amount1);\n  event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\n  event Swap(\n      address indexed sender,\n      uint amount0In,\n      uint amount1In,\n      uint amount0Out,\n      uint amount1Out,\n      address indexed to\n  );\n  event Sync(uint112 reserve0, uint112 reserve1);\n\n  function MINIMUM_LIQUIDITY() external pure returns (uint);\n  function factory() external view returns (address);\n  function token0() external view returns (address);\n  function token1() external view returns (address);\n  function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);\n  function price0CumulativeLast() external view returns (uint);\n  function price1CumulativeLast() external view returns (uint);\n  function kLast() external view returns (uint);\n\n  function mint(address to) external returns (uint liquidity);\n  function burn(address to) external returns (uint amount0, uint amount1);\n  function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;\n  function skim(address to) external;\n  function sync() external;\n}\n")),(0,a.kt)("h1",{id:"abi"},"ABI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import IUniswapV2Pair from '@uniswap/v2-core/build/IUniswapV2Pair.json'\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://unpkg.com/@uniswap/v2-core@1.0.0/build/IUniswapV2Pair.json"},"https://unpkg.com/@uniswap/v2-core@1.0.0/build/IUniswapV2Pair.json")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);