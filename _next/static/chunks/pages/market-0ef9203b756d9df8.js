(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5776],{3160:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/market",function(){return n(7756)}])},4693:function(e,t,n){"use strict";var a=n(5893),i=n(7357),s=n(5582);n(7294);let r=e=>{let{children:t,image:n}=e;return(0,a.jsxs)(i.Z,{sx:{...p.root,backgroundImage:"url(".concat(n,")")},children:[(0,a.jsx)(i.Z,{sx:p.overlay}),(0,a.jsx)(s.Z,{maxWidth:"md",sx:p.content,children:t})]})},p={root:{pt:16,pb:6,height:"50vh",minHeight:"400px",bgcolor:"white",backgroundSize:"cover",backgroundPosition:"center center",mb:6,position:"relative"},content:{position:"relative",display:"flex",justifyContent:"center"},overlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(180deg, rgba(24, 22, 22, 0) 0%, #1d1d1d 100%)"}};t.Z=r},7983:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7837),i=n(4038),s=n(2314);function r(e,t){let n=(0,s.Z)(t,i),r=(0,a.a)({queryKey:["Soonabots"],queryFn:()=>n?n.walletOfOwner(e).then(e=>e.map(e=>e.toNumber())):[]});return r}},2314:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(6076),i=n(4687),s=n(7294);function r(e,t){let{library:n,account:r,chainId:p}=(0,i.Ge)();return(0,s.useMemo)(()=>{if(!e||!t||!n||!p)return null;try{return new a.CH(e,t,n.getSigner(r))}catch(e){return console.error("Failed To Get Contract",e),null}},[e,t,n,r])}},1473:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});let a=[{id:1,name:"IOTABOTS",description:"IOTABOTS Games and some nice explanation",link:"/iotabots",image:"https://pbs.twimg.com/profile_banners/1453664485063933965/1654275883/1080x360"},{id:2,name:"Soonabots",description:"Soonabots race game now available.",link:"/soonabots",image:"https://images.soonaverse.com/0x69278e7ea657216937b139f070449bf000cbd835/r9k6xyq7f4q/collection_banner.jpeg"}]},7167:function(e,t,n){"use strict";n.r(t);var a=n(5893),i=n(7294),s=n(7309);t.default=function(e){let{nfts:t,createMarketItem:n}=e,[r,p]=(0,i.useState)({contractAddress:"",tokenId:0,price:0}),[o,u]=(0,i.useState)(""),y=e=>{e.preventDefault(),r&&n(s.M.soonabotsAddr,r,o)},l=e=>{let n=e.target.value;console.log("selectedTokenId",n),console.log("nfts",t);let a=t.find(e=>e==n);console.log("foundNft",a),p(a)};return(0,a.jsxs)("div",{className:"sell-product",children:[(0,a.jsx)("h2",{children:"List Your Items for Sale"}),(0,a.jsxs)("form",{onSubmit:y,className:"sell-product-form",children:[(0,a.jsx)("label",{htmlFor:"nftSelect",children:"Select Item:"}),(0,a.jsxs)("select",{id:"nftSelect",onChange:l,children:[(0,a.jsx)("option",{value:"",children:"--Select Item--"}),null==t?void 0:t.map(e=>(0,a.jsxs)("option",{value:e,children:["NFT #",e]},e))]}),(0,a.jsx)("label",{htmlFor:"price",children:"Listing Price (in SMR):"}),(0,a.jsx)("input",{type:"text",id:"price",value:o,onChange:e=>u(e.target.value)}),(0,a.jsx)("button",{type:"submit",disabled:!r,children:"List Item for Sale"})]})]})}},7756:function(e,t,n){"use strict";n.r(t);var a=n(5893),i=n(7294),s=n(1438),r=n(6076),p=n(5553),o=n(7167),u=n(7191),y=n(7250),l=n(1242),d=n(7309),m=n(7983),c=n(4687),f=n(9008),b=n.n(f),T=n(4693),w=n(6902),v=n(1473);let x=()=>{let{account:e,library:t}=(0,c.Ge)(),[n,f]=(0,i.useState)([]),{data:x,isFetched:M,error:g,refetch:h}=(0,m.Z)(e||"",d.M.soonabotsAddr);(0,i.useEffect)(()=>{},[]),(0,i.useEffect)(()=>{},[t,e]);let k=async(e,n,a)=>{let i=new s.Qg(t.provider),o=i.getSigner(),u=new r.CH(d.M.nftMarketAddr,l.Mt,o),m=new r.CH(e,y.Mt,o),c=await u.getListingPrice(),f=p.vz(a,"ether");try{let e=await m.approve(d.M.nftMarketAddr,n,{gasLimit:5e5});await e.wait(),console.log("approve product:",e)}catch(e){console.error("Error approve product:",e),console.error("Failed to approve product.")}try{let t=await u.createMarketItem(e,n,f,{value:c});await t.wait(),console.log("Market item created successfully")}catch(e){console.error("Error creating market item:",e)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(b(),{children:[(0,a.jsx)("title",{children:"Bot Market"}),(0,a.jsx)("meta",{name:"description",content:"Trade NFTs for free."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)(w.Z,{hero:(0,a.jsx)(T.Z,{image:v.W[0].image}),children:[t&&e&&(0,a.jsx)(o.default,{nfts:x,createMarketItem:k}),t&&e&&(0,a.jsx)(u.default,{})]})]})};t.default=x},7250:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"operator","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},4038:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')}},function(e){e.O(0,[5861,7739,7294,8115,8231,8494,8389,6719,6902,7191,9774,2888,179],function(){return e(e.s=3160)}),_N_E=e.O()}]);