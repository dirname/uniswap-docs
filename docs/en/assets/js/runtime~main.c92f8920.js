(()=>{"use strict";var e,a,d,b,c,f={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return f[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=f,r.amdO={},e=[],r.O=(a,d,b,c)=>{if(!d){var f=1/0;for(i=0;i<e.length;i++){d=e[i][0],b=e[i][1],c=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&c||f>=c)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,c<f&&(f=c));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[d,b,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var f={};a=a||[null,d({}),d([]),d(d)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,r.d(c,f),c},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({3:"9e655d12",53:"935f2afb",61:"21fae75e",69:"5e195082",81:"eff989e7",88:"fe005a97",110:"22c578af",205:"177f99d7",209:"c86ddb6c",213:"77da04c7",231:"bc1393aa",251:"c1263e3f",267:"d85e961c",296:"d660f7be",335:"3c87572f",392:"2a5c6a11",394:"dcf555ce",435:"b5a8e32c",484:"db59f93e",497:"15aaa5c0",505:"786f48e7",536:"9d9c3de4",542:"dac64400",544:"5aa884d7",555:"2bc3ae94",561:"af0dda45",571:"2fa27f20",579:"aa07a568",623:"9e859ee1",637:"b1db9209",698:"816fd0f8",702:"5c2c9df5",714:"1ef30014",827:"f5f7b237",862:"cfa664bb",887:"f3429934",895:"cc2f27ee",954:"277f95fa",956:"b7d0ba7b",975:"5a1f7dd8",1013:"3b2f66b0",1022:"09b22b17",1045:"5731d926",1050:"88591dac",1067:"9bc9f163",1093:"636246bd",1122:"8b29df8a",1137:"5e392a3f",1164:"cb783e9d",1217:"d55c15dc",1218:"70a90cdb",1306:"78505fdc",1343:"090958ea",1354:"d6af0d0c",1403:"9e9f1a7d",1474:"ed2a8ca3",1522:"9d5d396a",1526:"871c9908",1533:"1b066873",1633:"c75d635d",1650:"4872c578",1679:"4d1f2ea7",1697:"169fd686",1703:"72b74801",1730:"0238ff43",1779:"14c9538b",1800:"8bda705a",1897:"35a6d760",1899:"77dbfa01",1913:"83ad800e",1914:"88a1c894",1931:"42dbca10",1932:"73eb9788",1984:"5e05a05c",1986:"8e5207a3",2018:"05fdda6e",2078:"2cab6d7d",2085:"c4d236e5",2141:"a807c9ad",2150:"d33b7241",2174:"9bb441a3",2181:"3112482c",2182:"7a54331c",2202:"47bcd523",2215:"f50961d8",2243:"2839ff9c",2245:"f3a30f43",2254:"bc47be50",2283:"27de03bd",2321:"eaf7c88b",2327:"7094eed3",2334:"4b8d6a38",2392:"fb63f884",2415:"b3a18167",2464:"a65a42ea",2486:"b74b64fd",2489:"081ac959",2491:"eeb1217a",2509:"8d5581e6",2514:"4b40f8b1",2515:"66ac573f",2520:"c1768cb2",2535:"814f3328",2545:"d6c4d2ca",2579:"c8b1e91c",2601:"b3dd4aed",2661:"fea7d970",2685:"13630d17",2692:"b445aed8",2693:"e0b62121",2720:"5cfbaa64",2725:"2793b99b",2764:"8041a4ca",2788:"33a2cb51",2799:"67504628",2881:"d621934b",2922:"173302c8",2929:"a8729e26",2965:"cbfb8aef",2971:"bc817736",2974:"38ed04c4",2992:"1fa3fc85",3027:"6bf76ded",3089:"a6aa9e1f",3152:"467f5303",3160:"45fa3fd8",3226:"0518eddc",3237:"1df93b7f",3273:"c146d5db",3277:"d226590d",3303:"a1d8f969",3320:"bd72a3ad",3336:"00baa0a7",3338:"4800e17b",3342:"107b966c",3352:"62b4a17f",3354:"9bb0e3cc",3401:"78120a91",3479:"d80648da",3481:"cfa0fd67",3484:"a71fa4de",3553:"ac7d2b0c",3569:"e353de8a",3572:"40c5257e",3595:"109db8e9",3608:"9e4087bc",3615:"7478dcf2",3653:"f5e5a8b7",3698:"c4465245",3812:"f5e9deb6",3854:"01f438ce",3978:"dfac0766",4026:"1c8303ad",4070:"6ec513df",4084:"8ccdfae3",4117:"a2293b4a",4208:"e7e17ad1",4212:"a65c0899",4239:"99e60818",4260:"0b2cacb1",4263:"3e0774dc",4301:"2ba09045",4307:"94907b18",4553:"de78605f",4626:"33573070",4647:"08ade82e",4655:"b548dc1f",4697:"bc04164e",4729:"12783f05",4763:"7aeaf9ad",4777:"a9e17a0c",4781:"6ad227f0",4787:"8869ebdf",4802:"7d730bcd",4826:"b0bcefc5",4921:"c0899119",4960:"bb8559dd",5050:"78658074",5056:"148a3cfc",5107:"ae9a4b0f",5117:"1404b93e",5118:"0b375fe9",5148:"b10fe2f8",5157:"375efada",5167:"dd3ebbd7",5240:"ad20f5af",5248:"67f0ea74",5288:"3364aa5f",5384:"29c66ef0",5470:"7b0c5b51",5471:"3e5e205e",5473:"c24cb60c",5485:"609035b0",5527:"a3b9db13",5549:"6b23da3b",5592:"7304549f",5596:"5689c4ce",5602:"eb2da414",5622:"62f8fc62",5655:"4fa1bc36",5688:"e5d00dca",5703:"de65ab10",5726:"8f8486f4",5781:"9b459baf",5810:"996bab9f",5839:"58e28a0f",5878:"0a208b8b",5902:"d6d4c30a",5903:"38cb8189",5907:"957e5b12",5942:"b66681a8",5997:"5225bb67",6048:"8fe91d5b",6060:"7a2c5649",6077:"88b0e389",6103:"ccc49370",6106:"2fdcfec8",6161:"60e89a25",6225:"07e068e7",6274:"fd1c2790",6278:"b7e05b0b",6279:"350a7028",6300:"0097bd4c",6332:"20a73b30",6333:"2a70e232",6419:"87811d98",6442:"655c0a1c",6522:"b711aaba",6593:"7353ea62",6594:"b2aaa450",6600:"52a035ac",6676:"de8da0ba",6677:"f5d1bb82",6689:"acf7e945",6732:"a652b163",6736:"ee6a1a1f",6751:"949032cc",6773:"24aa1ef8",6779:"890db9dc",6784:"1c6b6c26",6864:"d3da1ac9",6901:"1e78b5d4",7018:"d7b6de3c",7129:"80ad46b9",7144:"4485f76e",7149:"12ce3d68",7212:"42f38ad2",7270:"b0b1f30b",7294:"6bbf1a0b",7304:"0227bafc",7317:"dcffa939",7342:"a50a094f",7411:"1ab4db70",7431:"7129f724",7472:"858fdb51",7512:"92d1c604",7568:"679ed0d3",7583:"9298f592",7584:"09019d00",7601:"7591da59",7612:"40a3c49d",7728:"2fb0b6b3",7774:"3a144a51",7803:"26c13e14",7829:"f7f84fab",7840:"a47c2fba",7918:"17896441",7920:"1a4e3797",7958:"e9294926",7970:"ce083119",8073:"4a71ea08",8083:"392bee2f",8084:"5b1b0a87",8086:"13abec89",8096:"04576d4f",8116:"3f99df50",8117:"ae261189",8120:"21d4f814",8173:"0b210838",8174:"b712b7f4",8241:"b3affd40",8264:"2578c662",8301:"a830383e",8321:"d9fe94ca",8395:"913fb12c",8412:"0699f403",8415:"e61c7d18",8457:"9f10e76c",8460:"8587d00e",8507:"b3390065",8600:"3958532f",8606:"5a23c83e",8738:"bf69ec6b",8755:"7fed76fd",8779:"6c20fd36",8831:"28b41910",8850:"87c53564",8871:"571e95d6",8926:"b798bb40",8983:"b31e5e64",9007:"5e526677",9041:"465572a2",9054:"e454c6a9",9060:"17f881fc",9243:"8416cbe4",9245:"ee4887da",9312:"fa0d652b",9383:"04ca3a7a",9417:"76968827",9419:"21dbc6ad",9444:"1b913cc1",9453:"a82bfe1d",9462:"8fccc0b8",9467:"b0a3c24d",9471:"463ece90",9490:"f1d9b772",9491:"2505e2ee",9494:"5df158d5",9514:"1be78505",9515:"9867963b",9579:"e8375951",9639:"905dc3b5",9669:"df378d51",9686:"0c255dda",9708:"21dd4661",9712:"62596f3f",9788:"c1516942",9802:"fca17b61",9810:"5ee7b1bc",9818:"4d7ad038",9835:"418a6bce",9837:"8f53776d",9844:"116ac209",9849:"36989dfe",9898:"4ad59e06",9936:"3880a11a",9941:"ef2da8d7",9965:"9d12256d"}[e]||e)+"."+{3:"73a7c8d2",53:"d9f1b159",61:"ccdcc2bb",69:"3c1a5427",81:"f637cb41",88:"8d23fdc8",110:"b79ca896",205:"36b39b9c",209:"3e6db9af",213:"d2bca610",231:"6abd2fa5",251:"5c01ecbf",267:"50c6317a",296:"7280ca88",335:"362f3c0b",392:"035bd5d6",394:"0c59873d",435:"4887bb22",484:"2e13af20",497:"33a5ce7d",505:"b64145b3",536:"cda75151",542:"f0d61f4e",544:"bf157718",555:"c0d73c99",561:"67dc617e",571:"c3b70914",579:"24c13dd8",623:"86ea109e",637:"b7deda15",698:"f1271253",702:"ccd5722b",714:"320532d9",827:"d88b3ce9",862:"326a3ec4",887:"8c857f1a",889:"fd15abb4",895:"f8cafb7f",954:"c39efecf",956:"4c970e31",975:"20ba991b",1013:"1b9a02f1",1022:"41815050",1045:"bfb63d2e",1050:"4caafe93",1067:"c1b55a19",1093:"481aabd1",1122:"45b225df",1137:"1008eea0",1164:"58c1c73e",1217:"1ce1840e",1218:"6bd24a41",1306:"e11b8f75",1343:"7fea0fd0",1354:"274b83dc",1403:"40611289",1474:"fdc0a8c7",1522:"0ddd9e73",1526:"df17ae22",1533:"70da428b",1633:"ecca9296",1650:"b4d70519",1679:"36e71413",1697:"51c294fb",1703:"343a82b5",1730:"84f93cd3",1779:"eb39587e",1800:"843a2eb4",1897:"19ad892a",1899:"ed5d002a",1913:"2bb65ed0",1914:"67001de3",1931:"5707fa15",1932:"ac803c24",1984:"9d470de0",1986:"400d8af7",2004:"e5717816",2018:"83e3f708",2078:"45a59d5d",2085:"f462cc40",2141:"25ded86b",2150:"61d30ac2",2174:"03667fc3",2181:"a9d59c95",2182:"ccee1e0f",2202:"67d857db",2215:"e425e59f",2243:"6c44e822",2245:"066df5c1",2254:"2e3b5c57",2283:"92de5623",2321:"9afd0633",2327:"eb948518",2334:"b8087a15",2392:"0e2924b5",2415:"714b5bf4",2464:"39b77631",2486:"b40c2b44",2489:"7cba4ec3",2491:"9735146e",2509:"ed24783e",2514:"7970e6a3",2515:"e5840af8",2520:"1a5dec8f",2535:"df208621",2545:"1ce9f12d",2579:"44d6b1d6",2601:"13cd6fc6",2661:"20582d36",2685:"953f10c0",2692:"a9fa9352",2693:"0ccc271b",2699:"62ead187",2720:"3ab749ea",2725:"0650d5b2",2764:"1a4e7dc6",2788:"8d15934e",2799:"6868c882",2881:"9c5cd053",2922:"ad4cf73e",2929:"2e146ea4",2965:"ed3dae71",2971:"9fb1bd4c",2974:"879417e6",2992:"23e82be4",3027:"c66a6dfb",3089:"71b7b229",3152:"ac72b087",3160:"ed276e91",3226:"330e6737",3237:"39c27d81",3273:"b975cc11",3277:"9e9365ff",3303:"e4f461a8",3320:"0aa528ad",3336:"2c208daa",3338:"189913b6",3342:"5cd1ca03",3352:"847347c7",3354:"33c7298f",3401:"d5181db3",3479:"e56a7b0e",3481:"04fd0004",3484:"4d344a33",3553:"b413fc19",3569:"2df75002",3572:"dfd25ea9",3595:"542d6707",3608:"ba0291d9",3615:"290e0a21",3653:"31bab678",3698:"f876f41f",3812:"39d382b5",3854:"600f3923",3978:"d06c67f4",4026:"12683b90",4070:"acb3d513",4084:"7a87ba91",4117:"54d44798",4208:"589e1c0e",4212:"94c3dbe4",4239:"ddd81f31",4260:"9c83d586",4263:"55b754d9",4301:"799a97a8",4307:"ca02df81",4553:"f2637c0d",4626:"7553ce03",4647:"0ac4aa20",4655:"873b4b2e",4697:"e8ff9583",4729:"01b6fd45",4763:"c22e7927",4777:"a5fc5321",4781:"c76d3ef3",4787:"23b66507",4802:"bf2e44b4",4826:"50d3ad56",4921:"2c20a6bc",4960:"f3610b56",5050:"7207797b",5056:"b58217b4",5107:"7127ca2c",5117:"16094c2e",5118:"786f2909",5148:"50130f54",5157:"103b7f2f",5167:"bc963d09",5240:"04fd8544",5248:"35260af8",5288:"4e7e8527",5384:"b382c536",5470:"f8375a62",5471:"57e83599",5473:"8b33a510",5485:"d763f345",5527:"0df7a80d",5549:"bfa89657",5592:"629cd1fa",5596:"96e8eb69",5602:"514afcf1",5622:"28b6967c",5655:"5f67d0cc",5688:"87233105",5703:"0ccd2750",5726:"819375da",5781:"82886e7f",5810:"0386951c",5839:"61c3df5b",5878:"b673b988",5902:"464e3347",5903:"90b512e7",5907:"2b27d1e6",5942:"943ae426",5997:"2ef8abe6",6048:"07eaeb84",6060:"d1cd80d3",6077:"d58cb2a5",6096:"87de5b7b",6103:"e0d3b29e",6106:"ed73820a",6161:"7a8f5445",6225:"7161b2c8",6274:"f6fb2491",6278:"e09d9387",6279:"7e2ea69c",6300:"75e9fb72",6332:"257a4b42",6333:"e6cf800a",6419:"a5cc8c0b",6442:"0c1691af",6522:"3caf04d1",6593:"1dbc9715",6594:"46c409dc",6600:"11374b9f",6676:"a8743146",6677:"051f0baf",6689:"c925a301",6732:"0e392bb4",6736:"1bb8bc1c",6751:"c538e9ba",6773:"17b96d4c",6779:"723af82a",6784:"b8211797",6864:"7cfaf851",6901:"a99518ff",6945:"8be180eb",7018:"2c78b92f",7129:"9f823b88",7144:"cd7d3142",7149:"b6429397",7212:"3a4b0e66",7270:"bfca1ebc",7294:"86695aae",7304:"13754144",7317:"5229e011",7342:"a1ae6fae",7411:"66370fb0",7431:"40370333",7472:"7b38f552",7512:"742cd291",7568:"a3f863b7",7583:"bf79a812",7584:"baa93e1b",7601:"7c7f7ea8",7612:"776a5738",7728:"39e7680c",7774:"1907c7b4",7803:"e4b26f9b",7829:"7710eea5",7840:"d01710d2",7918:"ca196f4c",7920:"73946dcd",7958:"f8a461e4",7970:"2d6f31d7",8073:"e1ad24f4",8083:"571d20b7",8084:"0624d2d5",8086:"cc1b3ede",8096:"fd410d55",8116:"ee2ace7c",8117:"52ded21d",8120:"502d5b0b",8173:"27314897",8174:"9b891681",8241:"5679ce94",8264:"78f356a5",8301:"dc321f11",8321:"a072f94b",8395:"932e1fab",8412:"ba450734",8415:"b4489aaf",8457:"3158e260",8460:"7c3c2d4e",8507:"545263ec",8600:"5d7efcbb",8606:"87a7201c",8738:"6c988908",8755:"b3093f71",8779:"1de8de8d",8831:"29337103",8850:"db5941d0",8871:"3f94c900",8894:"192aedb7",8926:"c8076a7c",8983:"001fd255",9007:"ff688dd0",9041:"1fb2aa7a",9054:"49e61cd4",9060:"73b72560",9243:"1c1f15ea",9245:"c9734eff",9312:"2c116ab8",9383:"f1c16e64",9417:"15d2700c",9419:"09aac066",9444:"936c5cf4",9453:"e1e6da77",9462:"e45a74cd",9467:"a355e301",9471:"706063c6",9490:"b69ffb72",9491:"e38b213b",9494:"af40f322",9514:"9f3dd3ae",9515:"ee88b471",9579:"1f9f33e4",9639:"c3209d08",9669:"5d79d32c",9686:"652355d5",9708:"e67acf33",9712:"7219aa66",9788:"bf426217",9802:"421756a7",9810:"864a119b",9818:"c2c16682",9835:"be12a7b6",9837:"be427233",9844:"be87327d",9849:"99f2bd20",9898:"4c4da299",9936:"144008c2",9941:"416374ca",9965:"e89218f8"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},c="@uniswap/docs:",r.l=(e,a,d,f)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+d),t.src=e),b[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var c=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/uniswap-docs/en/",r.gca=function(e){return e={17896441:"7918",33573070:"4626",67504628:"2799",76968827:"9417",78658074:"5050","9e655d12":"3","935f2afb":"53","21fae75e":"61","5e195082":"69",eff989e7:"81",fe005a97:"88","22c578af":"110","177f99d7":"205",c86ddb6c:"209","77da04c7":"213",bc1393aa:"231",c1263e3f:"251",d85e961c:"267",d660f7be:"296","3c87572f":"335","2a5c6a11":"392",dcf555ce:"394",b5a8e32c:"435",db59f93e:"484","15aaa5c0":"497","786f48e7":"505","9d9c3de4":"536",dac64400:"542","5aa884d7":"544","2bc3ae94":"555",af0dda45:"561","2fa27f20":"571",aa07a568:"579","9e859ee1":"623",b1db9209:"637","816fd0f8":"698","5c2c9df5":"702","1ef30014":"714",f5f7b237:"827",cfa664bb:"862",f3429934:"887",cc2f27ee:"895","277f95fa":"954",b7d0ba7b:"956","5a1f7dd8":"975","3b2f66b0":"1013","09b22b17":"1022","5731d926":"1045","88591dac":"1050","9bc9f163":"1067","636246bd":"1093","8b29df8a":"1122","5e392a3f":"1137",cb783e9d:"1164",d55c15dc:"1217","70a90cdb":"1218","78505fdc":"1306","090958ea":"1343",d6af0d0c:"1354","9e9f1a7d":"1403",ed2a8ca3:"1474","9d5d396a":"1522","871c9908":"1526","1b066873":"1533",c75d635d:"1633","4872c578":"1650","4d1f2ea7":"1679","169fd686":"1697","72b74801":"1703","0238ff43":"1730","14c9538b":"1779","8bda705a":"1800","35a6d760":"1897","77dbfa01":"1899","83ad800e":"1913","88a1c894":"1914","42dbca10":"1931","73eb9788":"1932","5e05a05c":"1984","8e5207a3":"1986","05fdda6e":"2018","2cab6d7d":"2078",c4d236e5:"2085",a807c9ad:"2141",d33b7241:"2150","9bb441a3":"2174","3112482c":"2181","7a54331c":"2182","47bcd523":"2202",f50961d8:"2215","2839ff9c":"2243",f3a30f43:"2245",bc47be50:"2254","27de03bd":"2283",eaf7c88b:"2321","7094eed3":"2327","4b8d6a38":"2334",fb63f884:"2392",b3a18167:"2415",a65a42ea:"2464",b74b64fd:"2486","081ac959":"2489",eeb1217a:"2491","8d5581e6":"2509","4b40f8b1":"2514","66ac573f":"2515",c1768cb2:"2520","814f3328":"2535",d6c4d2ca:"2545",c8b1e91c:"2579",b3dd4aed:"2601",fea7d970:"2661","13630d17":"2685",b445aed8:"2692",e0b62121:"2693","5cfbaa64":"2720","2793b99b":"2725","8041a4ca":"2764","33a2cb51":"2788",d621934b:"2881","173302c8":"2922",a8729e26:"2929",cbfb8aef:"2965",bc817736:"2971","38ed04c4":"2974","1fa3fc85":"2992","6bf76ded":"3027",a6aa9e1f:"3089","467f5303":"3152","45fa3fd8":"3160","0518eddc":"3226","1df93b7f":"3237",c146d5db:"3273",d226590d:"3277",a1d8f969:"3303",bd72a3ad:"3320","00baa0a7":"3336","4800e17b":"3338","107b966c":"3342","62b4a17f":"3352","9bb0e3cc":"3354","78120a91":"3401",d80648da:"3479",cfa0fd67:"3481",a71fa4de:"3484",ac7d2b0c:"3553",e353de8a:"3569","40c5257e":"3572","109db8e9":"3595","9e4087bc":"3608","7478dcf2":"3615",f5e5a8b7:"3653",c4465245:"3698",f5e9deb6:"3812","01f438ce":"3854",dfac0766:"3978","1c8303ad":"4026","6ec513df":"4070","8ccdfae3":"4084",a2293b4a:"4117",e7e17ad1:"4208",a65c0899:"4212","99e60818":"4239","0b2cacb1":"4260","3e0774dc":"4263","2ba09045":"4301","94907b18":"4307",de78605f:"4553","08ade82e":"4647",b548dc1f:"4655",bc04164e:"4697","12783f05":"4729","7aeaf9ad":"4763",a9e17a0c:"4777","6ad227f0":"4781","8869ebdf":"4787","7d730bcd":"4802",b0bcefc5:"4826",c0899119:"4921",bb8559dd:"4960","148a3cfc":"5056",ae9a4b0f:"5107","1404b93e":"5117","0b375fe9":"5118",b10fe2f8:"5148","375efada":"5157",dd3ebbd7:"5167",ad20f5af:"5240","67f0ea74":"5248","3364aa5f":"5288","29c66ef0":"5384","7b0c5b51":"5470","3e5e205e":"5471",c24cb60c:"5473","609035b0":"5485",a3b9db13:"5527","6b23da3b":"5549","7304549f":"5592","5689c4ce":"5596",eb2da414:"5602","62f8fc62":"5622","4fa1bc36":"5655",e5d00dca:"5688",de65ab10:"5703","8f8486f4":"5726","9b459baf":"5781","996bab9f":"5810","58e28a0f":"5839","0a208b8b":"5878",d6d4c30a:"5902","38cb8189":"5903","957e5b12":"5907",b66681a8:"5942","5225bb67":"5997","8fe91d5b":"6048","7a2c5649":"6060","88b0e389":"6077",ccc49370:"6103","2fdcfec8":"6106","60e89a25":"6161","07e068e7":"6225",fd1c2790:"6274",b7e05b0b:"6278","350a7028":"6279","0097bd4c":"6300","20a73b30":"6332","2a70e232":"6333","87811d98":"6419","655c0a1c":"6442",b711aaba:"6522","7353ea62":"6593",b2aaa450:"6594","52a035ac":"6600",de8da0ba:"6676",f5d1bb82:"6677",acf7e945:"6689",a652b163:"6732",ee6a1a1f:"6736","949032cc":"6751","24aa1ef8":"6773","890db9dc":"6779","1c6b6c26":"6784",d3da1ac9:"6864","1e78b5d4":"6901",d7b6de3c:"7018","80ad46b9":"7129","4485f76e":"7144","12ce3d68":"7149","42f38ad2":"7212",b0b1f30b:"7270","6bbf1a0b":"7294","0227bafc":"7304",dcffa939:"7317",a50a094f:"7342","1ab4db70":"7411","7129f724":"7431","858fdb51":"7472","92d1c604":"7512","679ed0d3":"7568","9298f592":"7583","09019d00":"7584","7591da59":"7601","40a3c49d":"7612","2fb0b6b3":"7728","3a144a51":"7774","26c13e14":"7803",f7f84fab:"7829",a47c2fba:"7840","1a4e3797":"7920",e9294926:"7958",ce083119:"7970","4a71ea08":"8073","392bee2f":"8083","5b1b0a87":"8084","13abec89":"8086","04576d4f":"8096","3f99df50":"8116",ae261189:"8117","21d4f814":"8120","0b210838":"8173",b712b7f4:"8174",b3affd40:"8241","2578c662":"8264",a830383e:"8301",d9fe94ca:"8321","913fb12c":"8395","0699f403":"8412",e61c7d18:"8415","9f10e76c":"8457","8587d00e":"8460",b3390065:"8507","3958532f":"8600","5a23c83e":"8606",bf69ec6b:"8738","7fed76fd":"8755","6c20fd36":"8779","28b41910":"8831","87c53564":"8850","571e95d6":"8871",b798bb40:"8926",b31e5e64:"8983","5e526677":"9007","465572a2":"9041",e454c6a9:"9054","17f881fc":"9060","8416cbe4":"9243",ee4887da:"9245",fa0d652b:"9312","04ca3a7a":"9383","21dbc6ad":"9419","1b913cc1":"9444",a82bfe1d:"9453","8fccc0b8":"9462",b0a3c24d:"9467","463ece90":"9471",f1d9b772:"9490","2505e2ee":"9491","5df158d5":"9494","1be78505":"9514","9867963b":"9515",e8375951:"9579","905dc3b5":"9639",df378d51:"9669","0c255dda":"9686","21dd4661":"9708","62596f3f":"9712",c1516942:"9788",fca17b61:"9802","5ee7b1bc":"9810","4d7ad038":"9818","418a6bce":"9835","8f53776d":"9837","116ac209":"9844","36989dfe":"9849","4ad59e06":"9898","3880a11a":"9936",ef2da8d7:"9941","9d12256d":"9965"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,d)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)d.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((d,c)=>b=e[a]=[d,c]));d.push(b[2]=c);var f=r.p+r.u(a),t=new Error;r.l(f,(d=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var c=d&&("load"===d.type?"missing":d.type),f=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+f+")",t.name="ChunkLoadError",t.type=c,t.request=f,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var b,c,f=d[0],t=d[1],o=d[2],n=0;if(f.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(d);n<f.length;n++)c=f[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},d=self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();