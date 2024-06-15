"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[7583],{9043:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=t(83117),o=(t(67294),t(3905));const r={id:"the-full-contract",title:"The Full Contract",sidebar_position:6},a=void 0,s={unversionedId:"contracts/v3/guides/providing-liquidity/the-full-contract",id:"contracts/v3/guides/providing-liquidity/the-full-contract",title:"The Full Contract",description:"Below we have the complete functioning code example: a contract that can custody Uniswap V3 position NFT's and manipulate the positions and liquidity therein by collecting fees, increasing or decreasing liquidity, and minting new positions. View on github here.",source:"@site/docs/contracts/v3/guides/providing-liquidity/the-full-contract.md",sourceDirName:"contracts/v3/guides/providing-liquidity",slug:"/contracts/v3/guides/providing-liquidity/the-full-contract",permalink:"/uniswap-docs/en/contracts/v3/guides/providing-liquidity/the-full-contract",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/guides/providing-liquidity/the-full-contract.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"the-full-contract",title:"The Full Contract",sidebar_position:6},sidebar:"contractsSidebar",previous:{title:"Increase Liquidity",permalink:"/uniswap-docs/en/contracts/v3/guides/providing-liquidity/increase-liquidity"},next:{title:"Overview",permalink:"/uniswap-docs/en/contracts/v3/guides/liquidity-mining/overview"}},d={},u=[],l={toc:u};function c(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,i.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below we have the complete functioning code example: a contract that can custody Uniswap V3 position NFT's and manipulate the positions and liquidity therein by collecting fees, increasing or decreasing liquidity, and minting new positions. View on github ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-docs/blob/main/examples/smart-contracts/LiquidityExamples.sol"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: GPL-2.0-or-later\npragma solidity =0.7.6;\npragma abicoder v2;\n\nimport '@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol';\nimport '@uniswap/v3-core/contracts/libraries/TickMath.sol';\nimport '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';\nimport '../libraries/TransferHelper.sol';\nimport '../interfaces/INonfungiblePositionManager.sol';\nimport '../base/LiquidityManagement.sol';\n\ncontract LiquidityExamples is IERC721Receiver {\n    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;\n    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;\n\n    uint24 public constant poolFee = 3000;\n\n    INonfungiblePositionManager public immutable nonfungiblePositionManager;\n\n    /// @notice Represents the deposit of an NFT\n    struct Deposit {\n        address owner;\n        uint128 liquidity;\n        address token0;\n        address token1;\n    }\n\n    /// @dev deposits[tokenId] => Deposit\n    mapping(uint256 => Deposit) public deposits;\n\n    constructor(\n        INonfungiblePositionManager _nonfungiblePositionManager\n    ) {\n        nonfungiblePositionManager = _nonfungiblePositionManager;\n    }\n\n    // Implementing `onERC721Received` so this contract can receive custody of erc721 tokens\n    function onERC721Received(\n        address operator,\n        address,\n        uint256 tokenId,\n        bytes calldata\n    ) external override returns (bytes4) {\n        // get position information\n\n        _createDeposit(operator, tokenId);\n\n        return this.onERC721Received.selector;\n    }\n\n    function _createDeposit(address owner, uint256 tokenId) internal {\n        (, , address token0, address token1, , , , uint128 liquidity, , , , ) =\n            nonfungiblePositionManager.positions(tokenId);\n\n        // set the owner and data for position\n        // operator is msg.sender\n        deposits[tokenId] = Deposit({owner: owner, liquidity: liquidity, token0: token0, token1: token1});\n    }\n\n    /// @notice Calls the mint function defined in periphery, mints the same amount of each token.\n    /// For this example we are providing 1000 DAI and 1000 USDC in liquidity\n    /// @return tokenId The id of the newly minted ERC721\n    /// @return liquidity The amount of liquidity for the position\n    /// @return amount0 The amount of token0\n    /// @return amount1 The amount of token1\n    function mintNewPosition()\n        external\n        returns (\n            uint256 tokenId,\n            uint128 liquidity,\n            uint256 amount0,\n            uint256 amount1\n        )\n    {\n        // For this example, we will provide equal amounts of liquidity in both assets.\n        // Providing liquidity in both assets means liquidity will be earning fees and is considered in-range.\n        uint256 amount0ToMint = 1000;\n        uint256 amount1ToMint = 1000;\n\n        // transfer tokens to contract\n        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amount0ToMint);\n        TransferHelper.safeTransferFrom(USDC, msg.sender, address(this), amount1ToMint);\n\n        // Approve the position manager\n        TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager), amount0ToMint);\n        TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager), amount1ToMint);\n\n        INonfungiblePositionManager.MintParams memory params =\n            INonfungiblePositionManager.MintParams({\n                token0: DAI,\n                token1: USDC,\n                fee: poolFee,\n                tickLower: TickMath.MIN_TICK,\n                tickUpper: TickMath.MAX_TICK,\n                amount0Desired: amount0ToMint,\n                amount1Desired: amount1ToMint,\n                amount0Min: 0,\n                amount1Min: 0,\n                recipient: address(this),\n                deadline: block.timestamp\n            });\n\n        // Note that the pool defined by DAI/USDC and fee tier 0.3% must already be created and initialized in order to mint\n        (tokenId, liquidity, amount0, amount1) = nonfungiblePositionManager.mint(params);\n\n        // Create a deposit\n        _createDeposit(msg.sender, tokenId);\n\n        // Remove allowance and refund in both assets.\n        if (amount0 < amount0ToMint) {\n            TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager), 0);\n            uint256 refund0 = amount0ToMint - amount0;\n            TransferHelper.safeTransfer(DAI, msg.sender, refund0);\n        }\n\n        if (amount1 < amount1ToMint) {\n            TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager), 0);\n            uint256 refund1 = amount1ToMint - amount1;\n            TransferHelper.safeTransfer(USDC, msg.sender, refund1);\n        }\n    }\n\n    /// @notice Collects the fees associated with provided liquidity\n    /// @dev The contract must hold the erc721 token before it can collect fees\n    /// @param tokenId The id of the erc721 token\n    /// @return amount0 The amount of fees collected in token0\n    /// @return amount1 The amount of fees collected in token1\n    function collectAllFees(uint256 tokenId) external returns (uint256 amount0, uint256 amount1) {\n        // Caller must own the ERC721 position, meaning it must be a deposit\n\n        // set amount0Max and amount1Max to uint256.max to collect all fees\n        // alternatively can set recipient to msg.sender and avoid another transaction in `sendToOwner`\n        INonfungiblePositionManager.CollectParams memory params =\n            INonfungiblePositionManager.CollectParams({\n                tokenId: tokenId,\n                recipient: address(this),\n                amount0Max: type(uint128).max,\n                amount1Max: type(uint128).max\n            });\n\n        (amount0, amount1) = nonfungiblePositionManager.collect(params);\n\n        // send collected feed back to owner\n        _sendToOwner(tokenId, amount0, amount1);\n    }\n\n    /// @notice A function that decreases the current liquidity by half. An example to show how to call the `decreaseLiquidity` function defined in periphery.\n    /// @param tokenId The id of the erc721 token\n    /// @return amount0 The amount received back in token0\n    /// @return amount1 The amount returned back in token1\n    function decreaseLiquidityInHalf(uint256 tokenId) external returns (uint256 amount0, uint256 amount1) {\n        // caller must be the owner of the NFT\n        require(msg.sender == deposits[tokenId].owner, 'Not the owner');\n        // get liquidity data for tokenId\n        uint128 liquidity = deposits[tokenId].liquidity;\n        uint128 halfLiquidity = liquidity / 2;\n\n        // amount0Min and amount1Min are price slippage checks\n        // if the amount received after burning is not greater than these minimums, transaction will fail\n        INonfungiblePositionManager.DecreaseLiquidityParams memory params =\n            INonfungiblePositionManager.DecreaseLiquidityParams({\n                tokenId: tokenId,\n                liquidity: halfLiquidity,\n                amount0Min: 0,\n                amount1Min: 0,\n                deadline: block.timestamp\n            });\n\n        (amount0, amount1) = nonfungiblePositionManager.decreaseLiquidity(params);\n\n        //send liquidity back to owner\n        _sendToOwner(tokenId, amount0, amount1);\n    }\n\n    /// @notice Increases liquidity in the current range\n    /// @dev Pool must be initialized already to add liquidity\n    /// @param tokenId The id of the erc721 token\n    /// @param amount0 The amount to add of token0\n    /// @param amount1 The amount to add of token1\n    function increaseLiquidityCurrentRange(\n        uint256 tokenId,\n        uint256 amountAdd0,\n        uint256 amountAdd1\n    )\n        external\n        returns (\n            uint128 liquidity,\n            uint256 amount0,\n            uint256 amount1\n        ) {\n\n        TransferHelper.safeTransferFrom(deposits[tokenId].token0, msg.sender, address(this), amountAdd0);\n        TransferHelper.safeTransferFrom(deposits[tokenId].token1, msg.sender, address(this), amountAdd1);\n\n        TransferHelper.safeApprove(deposits[tokenId].token0, address(nonfungiblePositionManager), amountAdd0);\n        TransferHelper.safeApprove(deposits[tokenId].token1, address(nonfungiblePositionManager), amountAdd1);\n\n        INonfungiblePositionManager.IncreaseLiquidityParams memory params = INonfungiblePositionManager.IncreaseLiquidityParams({\n            tokenId: tokenId,\n            amount0Desired: amountAdd0,\n            amount1Desired: amountAdd1,\n            amount0Min: 0,\n            amount1Min: 0,\n            deadline: block.timestamp\n        });\n\n        (liquidity, amount0, amount1) = nonfungiblePositionManager.increaseLiquidity(params);\n\n    }\n\n    /// @notice Transfers funds to owner of NFT\n    /// @param tokenId The id of the erc721\n    /// @param amount0 The amount of token0\n    /// @param amount1 The amount of token1\n    function _sendToOwner(\n        uint256 tokenId,\n        uint256 amount0,\n        uint256 amount1\n    ) internal {\n        // get owner of contract\n        address owner = deposits[tokenId].owner;\n\n        address token0 = deposits[tokenId].token0;\n        address token1 = deposits[tokenId].token1;\n        // send collected fees to owner\n        TransferHelper.safeTransfer(token0, owner, amount0);\n        TransferHelper.safeTransfer(token1, owner, amount1);\n    }\n\n    /// @notice Transfers the NFT to the owner\n    /// @param tokenId The id of the erc721\n    function retrieveNFT(uint256 tokenId) external {\n        // must be the owner of the NFT\n        require(msg.sender == deposits[tokenId].owner, 'Not the owner');\n        // transfer ownership to original owner\n        nonfungiblePositionManager.safeTransferFrom(address(this), msg.sender, tokenId);\n        //remove information related to tokenId\n        delete deposits[tokenId];\n    }\n}\n")))}c.isMDXComponent=!0},3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>p});var i=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var d=i.createContext({}),u=function(n){var e=i.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=u(n.components);return i.createElement(d.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,d=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),m=u(t),p=o,f=m["".concat(d,".").concat(p)]||m[p]||c[p]||r;return t?i.createElement(f,a(a({ref:e},l),{},{components:t})):i.createElement(f,a({ref:e},l))}));function p(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,a=new Array(r);a[0]=m;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=n,s.mdxType="string"==typeof n?n:o,a[1]=s;for(var u=2;u<r;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);