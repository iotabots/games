(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5440],{5661:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake/components/StakeSoonabots",function(){return n(9157)}])},9157:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(5861),s=n(7357),o=n(4687),d=n(7294),c=n(7309),l=n(5800),u=n(8731),i=n(8277),f=n(7983);let h=()=>{let{active:e,account:t,library:n}=(0,o.Ge)(),[h,k]=(0,d.useState)([]),[g,w]=(0,d.useState)([]),{data:S}=(0,f.Z)(t||"",c.M.soonabotsAddr);return(0,d.useEffect)(()=>{e&&t&&(l.Z.loadNfts(n,c.M.soonabotsAddr,t).then(e=>{k(e)}),l.Z.getStakedNFTs(n,c.M.soonabotsStakeAddr,t).then(e=>{w(e)}))},[e,t,S]),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.Z,{variant:"h4",children:"Soonabots"}),(0,r.jsx)(a.Z,{color:"text.secondary",children:"Available now!"}),(0,r.jsxs)(s.Z,{sx:{display:"flex",flexWrap:"wrap",gap:2,mt:2,mb:4},children:[t&&g.length>0&&g.map((e,t)=>(0,r.jsx)(i.default,{stakeAddress:c.M.soonabotsStakeAddr,nft:e},t)),t&&h.length>0&&h.map((e,t)=>(0,r.jsx)(u.default,{stakeAddress:c.M.soonabotsStakeAddr,nft:e,disabled:!1},t))]})]})};t.default=h},8277:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),s=n(4687),o=n(1438),d=n(6076),c=n(5553),l=n(6231),u=n(861);let i=e=>{let{stakeAddress:t,nft:n}=e,{account:i,library:f}=(0,s.Ge)(),[h,k]=(0,a.useState)(""),[g,w]=(0,a.useState)(-1),[S,v]=(0,a.useState)(null);(0,a.useEffect)(()=>{if(i&&f&&!S){let e=new o.Qg(f.provider),n=e.getSigner(),r=new d.CH(t,l.Mt,n);v(r)}let e=setInterval(()=>{E()},5e3);return()=>clearInterval(e)},[i,n]);let E=async()=>{try{let e=new o.Qg(f.provider),r=e.getSigner(),a=new d.CH(t,l.Mt,r),s=await a.getCurrentStakeEarned(n.tokenId);w(s.toString())}catch(e){k("❌ Error fetching earned rewards: ".concat(e.message)),console.error("Error fetching earned rewards:",e)}},p=async()=>{if(S&&n.tokenId)try{await S.unStakeNFT(n.tokenId),k("\uD83C\uDF89 Successfully unstaked NFT with ID ".concat(n.tokenId,"!"))}catch(e){k("❌ Error unstaking NFT: ".concat(e.message))}},b=async()=>{if(S)try{await S.harvest(n.tokenId),k("\uD83C\uDF89 Successfully harvested rewards for NFT with ID ".concat(n.tokenId,"!")),w(0)}catch(e){k("❌ Error harvesting rewards: ".concat(e.message)),console.error("Error harvesting rewards:",e)}};return(0,r.jsx)(r.Fragment,{children:n&&(0,r.jsx)(u.Z,{image:null==n?void 0:n.url,name:"#".concat(n.tokenId),description:"Earned: ".concat(c.dF(g)," EGGS"),onHarvest:b,onUnStake:p})})};t.default=i}},function(e){e.O(0,[5861,7739,7294,8115,9574,6231,1180,9774,2888,179],function(){return e(e.s=5661)}),_N_E=e.O()}]);