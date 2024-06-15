"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[1703],{84714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>k});var n=a(83117),r=(a(67294),a(3905));const i={},l=void 0,d={unversionedId:"contracts/v3/reference/periphery/staker/interfaces/IUniswapV3Staker",id:"contracts/v3/reference/periphery/staker/interfaces/IUniswapV3Staker",title:"IUniswapV3Staker",description:"Allows staking nonfungible liquidity tokens in exchange for reward tokens",source:"@site/docs/contracts/v3/reference/periphery/staker/interfaces/IUniswapV3Staker.md",sourceDirName:"contracts/v3/reference/periphery/staker/interfaces",slug:"/contracts/v3/reference/periphery/staker/interfaces/IUniswapV3Staker",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/staker/interfaces/IUniswapV3Staker",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/staker/interfaces/IUniswapV3Staker.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"Uniswap V3 Staker Contract",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/staker/UniswapV3Staker"},next:{title:"IncentiveId",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/staker/libraries/IncentiveId"}},p={},k=[{value:"Functions",id:"functions",level:2},{value:"factory",id:"factory",level:3},{value:"nonfungiblePositionManager",id:"nonfungiblepositionmanager",level:3},{value:"maxIncentiveDuration",id:"maxincentiveduration",level:3},{value:"maxIncentiveStartLeadTime",id:"maxincentivestartleadtime",level:3},{value:"incentives",id:"incentives",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"deposits",id:"deposits",level:3},{value:"Return Values:",id:"return-values-1",level:4},{value:"stakes",id:"stakes",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"rewards",id:"rewards",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-3",level:4},{value:"createIncentive",id:"createincentive",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"endIncentive",id:"endincentive",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Return Values:",id:"return-values-4",level:4},{value:"transferDeposit",id:"transferdeposit",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"withdrawToken",id:"withdrawtoken",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"stakeToken",id:"staketoken",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"unstakeToken",id:"unstaketoken",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"claimReward",id:"claimreward",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"Return Values:",id:"return-values-5",level:4},{value:"getRewardInfo",id:"getrewardinfo",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"Return Values:",id:"return-values-6",level:4},{value:"Events",id:"events",level:2},{value:"IncentiveCreated",id:"incentivecreated",level:3},{value:"Parameters:",id:"parameters-11",level:4},{value:"IncentiveEnded",id:"incentiveended",level:3},{value:"Parameters:",id:"parameters-12",level:4},{value:"DepositTransferred",id:"deposittransferred",level:3},{value:"Parameters:",id:"parameters-13",level:4},{value:"TokenStaked",id:"tokenstaked",level:3},{value:"Parameters:",id:"parameters-14",level:4},{value:"TokenUnstaked",id:"tokenunstaked",level:3},{value:"Parameters:",id:"parameters-15",level:4},{value:"RewardClaimed",id:"rewardclaimed",level:3},{value:"Parameters:",id:"parameters-16",level:4}],m={toc:k};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Allows staking nonfungible liquidity tokens in exchange for reward tokens"),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"factory"},"factory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function factory(\n  ) external view returns (contract IUniswapV3Factory)\n")),(0,r.kt)("p",null,"The Uniswap V3 Factory"),(0,r.kt)("h3",{id:"nonfungiblepositionmanager"},"nonfungiblePositionManager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function nonfungiblePositionManager(\n  ) external view returns (contract INonfungiblePositionManager)\n")),(0,r.kt)("p",null,"The nonfungible position manager with which this staking contract is compatible"),(0,r.kt)("h3",{id:"maxincentiveduration"},"maxIncentiveDuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxIncentiveDuration(\n  ) external view returns (uint256)\n")),(0,r.kt)("p",null,"The max duration of an incentive in seconds"),(0,r.kt)("h3",{id:"maxincentivestartleadtime"},"maxIncentiveStartLeadTime"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxIncentiveStartLeadTime(\n  ) external view returns (uint256)\n")),(0,r.kt)("p",null,"The max amount of seconds into the future the incentive startTime can be set"),(0,r.kt)("h3",{id:"incentives"},"incentives"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function incentives(\n    bytes32 incentiveId\n  ) external view returns (uint256 totalRewardUnclaimed, uint160 totalSecondsClaimedX128, uint96 numberOfStakes)\n")),(0,r.kt)("p",null,"Represents a staking incentive"),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"incentiveId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the incentive computed from its parameters")))),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"totalRewardUnclaimed")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of reward token not yet claimed by users")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"totalSecondsClaimedX128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total liquidity-seconds claimed, represented as a UQ32.128")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"numberOfStakes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint96"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The count of deposits that are currently staked for the incentive")))),(0,r.kt)("h3",{id:"deposits"},"deposits"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposits(\n  ) external view returns (address owner, uint48 numberOfStakes, int24 tickLower, int24 tickUpper)\n")),(0,r.kt)("p",null,"Returns information about a deposited NFT"),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"owner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The owner of the deposited NFT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"numberOfStakes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint48"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Counter of how many incentives for which the liquidity is staked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The lower tick of the range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The upper tick of the range")))),(0,r.kt)("h3",{id:"stakes"},"stakes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function stakes(\n    uint256 tokenId,\n    bytes32 incentiveId\n  ) external view returns (uint160 secondsPerLiquidityInsideInitialX128, uint128 liquidity)\n")),(0,r.kt)("p",null,"Returns information about a staked liquidity NFT"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the staked token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"incentiveId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the incentive for which the token is staked")))),(0,r.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secondsPerLiquidityInsideInitialX128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"secondsPerLiquidity represented as a UQ32.128")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of liquidity in the NFT as of the last time the rewards were computed")))),(0,r.kt)("h3",{id:"rewards"},"rewards"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function rewards(\n    contract IERC20Minimal rewardToken,\n    address owner\n  ) external view returns (uint256 rewardsOwed)\n")),(0,r.kt)("p",null,"Returns amounts of reward tokens owed to a given address according to the last time all stakes were updated"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"rewardToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"contract IERC20Minimal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The token for which to check rewards")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"owner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The owner for which the rewards owed are checked")))),(0,r.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"rewardsOwed")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the reward token claimable by the owner")))),(0,r.kt)("h3",{id:"createincentive"},"createIncentive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function createIncentive(\n    struct IUniswapV3Staker.IncentiveKey key,\n    uint256 reward\n  ) external\n")),(0,r.kt)("p",null,"Creates a new liquidity mining incentive program"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IUniswapV3Staker.IncentiveKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Details of the incentive to create")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reward")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of reward tokens to be distributed")))),(0,r.kt)("h3",{id:"endincentive"},"endIncentive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function endIncentive(\n    struct IUniswapV3Staker.IncentiveKey key\n  ) external returns (uint256 refund)\n")),(0,r.kt)("p",null,"Ends an incentive after the incentive end time has passed and all stakes have been withdrawn"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IUniswapV3Staker.IncentiveKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Details of the incentive to end")))),(0,r.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"refund")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The remaining reward tokens when the incentive is ended")))),(0,r.kt)("h3",{id:"transferdeposit"},"transferDeposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function transferDeposit(\n    uint256 tokenId,\n    address to\n  ) external\n")),(0,r.kt)("p",null,"Transfers ownership of a deposit from the sender to the given recipient"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the token (and the deposit) to transfer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The new owner of the deposit")))),(0,r.kt)("h3",{id:"withdrawtoken"},"withdrawToken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdrawToken(\n    uint256 tokenId,\n    address to,\n    bytes data\n  ) external\n")),(0,r.kt)("p",null,"Withdraws a Uniswap V3 LP token ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenId")," from this contract to the recipient ",(0,r.kt)("inlineCode",{parentName:"p"},"to")),(0,r.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of an Uniswap V3 LP token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address where the LP token will be sent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An optional data array that will be passed along to the ",(0,r.kt)("inlineCode",{parentName:"td"},"to")," address via the NFT safeTransferFrom")))),(0,r.kt)("h3",{id:"staketoken"},"stakeToken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function stakeToken(\n    struct IUniswapV3Staker.IncentiveKey key,\n    uint256 tokenId\n  ) external\n")),(0,r.kt)("p",null,"Stakes a Uniswap V3 LP token"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IUniswapV3Staker.IncentiveKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The key of the incentive for which to stake the NFT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the token to stake")))),(0,r.kt)("h3",{id:"unstaketoken"},"unstakeToken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function unstakeToken(\n    struct IUniswapV3Staker.IncentiveKey key,\n    uint256 tokenId\n  ) external\n")),(0,r.kt)("p",null,"Unstakes a Uniswap V3 LP token"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IUniswapV3Staker.IncentiveKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The key of the incentive for which to unstake the NFT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the token to unstake")))),(0,r.kt)("h3",{id:"claimreward"},"claimReward"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function claimReward(\n    contract IERC20Minimal rewardToken,\n    address to,\n    uint256 amountRequested\n  ) external returns (uint256 reward)\n")),(0,r.kt)("p",null,"Transfers ",(0,r.kt)("inlineCode",{parentName:"p"},"amountRequested")," of accrued ",(0,r.kt)("inlineCode",{parentName:"p"},"rewardToken")," rewards from the contract to the recipient ",(0,r.kt)("inlineCode",{parentName:"p"},"to")),(0,r.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"rewardToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"contract IERC20Minimal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The token being distributed as a reward")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address where claimed rewards will be sent to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountRequested")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of reward tokens to claim. Claims entire reward amount if set to 0.")))),(0,r.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reward")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of reward tokens claimed")))),(0,r.kt)("h3",{id:"getrewardinfo"},"getRewardInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getRewardInfo(\n    struct IUniswapV3Staker.IncentiveKey key,\n    uint256 tokenId\n  ) external returns (uint256 reward, uint160 secondsInsideX128)\n")),(0,r.kt)("p",null,"Calculates the reward amount that will be received for the given stake"),(0,r.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IUniswapV3Staker.IncentiveKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The key of the incentive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the token")))),(0,r.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reward")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The reward accrued to the NFT for the given incentive thus far")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secondsInsideX128")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The seconds inside the tick range")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"incentivecreated"},"IncentiveCreated"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event IncentiveCreated(\n    contract IERC20Minimal rewardToken,\n    contract IUniswapV3Pool pool,\n    uint256 startTime,\n    uint256 endTime,\n    address refundee,\n    uint256 reward\n  )\n")),(0,r.kt)("p",null,"Event emitted when a liquidity mining incentive has been created"),(0,r.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"rewardToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"contract IERC20Minimal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The token being distributed as a reward")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"contract IUniswapV3Pool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Uniswap V3 pool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"startTime")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The time when the incentive program begins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"endTime")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The time when rewards stop accruing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"refundee")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address which receives any remaining reward tokens after the end time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reward")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of reward tokens to be distributed")))),(0,r.kt)("h3",{id:"incentiveended"},"IncentiveEnded"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event IncentiveEnded(\n    bytes32 incentiveId,\n    uint256 refund\n  )\n")),(0,r.kt)("p",null,"Event that can be emitted when a liquidity mining incentive has ended"),(0,r.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"incentiveId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The incentive which is ending")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"refund")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of reward tokens refunded")))),(0,r.kt)("h3",{id:"deposittransferred"},"DepositTransferred"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event DepositTransferred(\n    uint256 tokenId,\n    address oldOwner,\n    address newOwner\n  )\n")),(0,r.kt)("p",null,"Emitted when ownership of a deposit changes"),(0,r.kt)("h4",{id:"parameters-13"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the deposit (and token) that is being transferred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"oldOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The owner before the deposit was transferred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The owner after the deposit was transferred")))),(0,r.kt)("h3",{id:"tokenstaked"},"TokenStaked"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event TokenStaked(\n    uint256 tokenId,\n    bytes32 liquidity,\n    uint128 incentiveId\n  )\n")),(0,r.kt)("p",null,"Event emitted when a Uniswap V3 LP token has been staked"),(0,r.kt)("h4",{id:"parameters-14"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of an Uniswap V3 LP token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of liquidity staked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"incentiveId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The incentive in which the token is staking")))),(0,r.kt)("h3",{id:"tokenunstaked"},"TokenUnstaked"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event TokenUnstaked(\n    uint256 tokenId,\n    bytes32 incentiveId\n  )\n")),(0,r.kt)("p",null,"Event emitted when a Uniswap V3 LP token has been unstaked"),(0,r.kt)("h4",{id:"parameters-15"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of an Uniswap V3 LP token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"incentiveId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The incentive in which the token is staking")))),(0,r.kt)("h3",{id:"rewardclaimed"},"RewardClaimed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event RewardClaimed(\n    address to,\n    uint256 reward\n  )\n")),(0,r.kt)("p",null,"Event emitted when a reward token has been claimed"),(0,r.kt)("h4",{id:"parameters-16"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address where claimed rewards were sent to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reward")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of reward tokens claimed")))))}o.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),k=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=k(a),N=r,u=s["".concat(p,".").concat(N)]||s[N]||o[N]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var k=2;k<i;k++)l[k]=a[k];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);