(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1558],{3965:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(3366),r=n(7462),i=n(7294),s=n(6010),o=n(4780),l=n(1657),u=n(948),p=n(1588),d=n(4867);function c(e){return(0,d.Z)("MuiCardMedia",e)}(0,p.Z)("MuiCardMedia",["root","media","img"]);var y=n(5893);let m=["children","className","component","image","src","style"],f=e=>{let{classes:t,isMediaComponent:n,isImageComponent:a}=e;return(0,o.Z)({root:["root",n&&"media",a&&"img"]},c,t)},x=(0,u.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{isMediaComponent:a,isImageComponent:r}=n;return[t.root,a&&t.media,r&&t.img]}})(({ownerState:e})=>(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),h=["video","audio","picture","iframe","img"],b=["picture","img"],g=i.forwardRef(function(e,t){let n=(0,l.Z)({props:e,name:"MuiCardMedia"}),{children:i,className:o,component:u="div",image:p,src:d,style:c}=n,g=(0,a.Z)(n,m),v=-1!==h.indexOf(u),w=!v&&p?(0,r.Z)({backgroundImage:`url("${p}")`},c):c,T=(0,r.Z)({},n,{component:u,isMediaComponent:v,isImageComponent:-1!==b.indexOf(u)}),Z=f(T);return(0,y.jsx)(x,(0,r.Z)({className:(0,s.Z)(Z.root,o),as:u,role:!v&&p?"img":void 0,ref:t,style:w,ownerState:T,src:v?p||d:void 0},g,{children:i}))});var v=g},8456:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var a=n(3366),r=n(7462),i=n(7294),s=n(6010),o=n(4780),l=n(917),u=n(8216),p=n(1657),d=n(948),c=n(1588),y=n(4867);function m(e){return(0,y.Z)("MuiCircularProgress",e)}(0,c.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=n(5893);let x=["className","color","disableShrink","size","style","thickness","value","variant"],h=e=>e,b,g,v,w,T=(0,l.F4)(b||(b=h`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=(0,l.F4)(g||(g=h`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),L=e=>{let{classes:t,variant:n,color:a,disableShrink:r}=e,i={root:["root",n,`color${(0,u.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,u.Z)(n)}`,r&&"circleDisableShrink"]};return(0,o.Z)(i,m,t)},k=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${(0,u.Z)(n.color)}`]]}})(({ownerState:e,theme:t})=>(0,r.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(v||(v=h`
      animation: ${0} 1.4s linear infinite;
    `),T)),j=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),M=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,t[`circle${(0,u.Z)(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>(0,r.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(w||(w=h`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z)),S=i.forwardRef(function(e,t){let n=(0,p.Z)({props:e,name:"MuiCircularProgress"}),{className:i,color:o="primary",disableShrink:l=!1,size:u=40,style:d,thickness:c=3.6,value:y=0,variant:m="indeterminate"}=n,h=(0,a.Z)(n,x),b=(0,r.Z)({},n,{color:o,disableShrink:l,size:u,thickness:c,value:y,variant:m}),g=L(b),v={},w={},T={};if("determinate"===m){let e=2*Math.PI*((44-c)/2);v.strokeDasharray=e.toFixed(3),T["aria-valuenow"]=Math.round(y),v.strokeDashoffset=`${((100-y)/100*e).toFixed(3)}px`,w.transform="rotate(-90deg)"}return(0,f.jsx)(k,(0,r.Z)({className:(0,s.Z)(g.root,i),style:(0,r.Z)({width:u,height:u},w,d),ownerState:b,ref:t,role:"progressbar"},T,h,{children:(0,f.jsx)(j,{className:g.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,f.jsx)(M,{className:g.circle,style:v,ownerState:b,cx:44,cy:44,r:(44-c)/2,fill:"none",strokeWidth:c})})}))});var B=S},4141:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iotabots",function(){return n(8887)}])},0:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(5893);n(7294);var r=n(7357),i=n(5861),s=n(5984);let o=e=>{let{icon:t,content:n}=e;return(0,a.jsxs)(r.Z,{sx:l.root,children:[(0,a.jsx)(r.Z,{sx:l.container}),(0,a.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center",gap:4,p:4,position:"relative"},children:[(0,a.jsxs)(r.Z,{sx:{flex:1},children:[(0,a.jsx)(i.Z,{gutterBottom:!0,variant:"h4",children:n.title}),(0,a.jsx)(i.Z,{children:n.description}),(0,a.jsx)(s.N,{color:"secondary",sx:{mt:3}})]}),t]})]})},l={root:{bgcolor:"primary.main",borderRadius:2,boxShadow:1,overflow:"hidden",my:4,position:"relative","& svg":{maxHeight:140,maxWidth:140}},container:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(90deg, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.5) 100%)"}},u=()=>(0,a.jsxs)("svg",{width:"257",height:"238",viewBox:"0 0 257 238",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M243.42 0.98999L143.92 74.89L162.32 31.29L243.42 0.98999Z",fill:"#E2761B",stroke:"#E2761B","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M13.7207 0.98999L112.421 75.59L94.9207 31.29L13.7207 0.98999ZM207.621 172.29L181.121 212.89L237.821 228.49L254.121 173.19L207.621 172.29ZM3.2207 173.19L19.4207 228.49L76.1207 212.89L49.6207 172.29L3.2207 173.19Z",fill:"#E4761B",stroke:"#E4761B","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M72.9201 103.69L57.1201 127.59L113.42 130.09L111.42 69.59L72.9201 103.69ZM184.22 103.69L145.22 68.89L143.92 130.09L200.12 127.59L184.22 103.69ZM76.1201 212.89L109.92 196.39L80.7201 173.59L76.1201 212.89ZM147.22 196.39L181.12 212.89L176.42 173.59L147.22 196.39Z",fill:"#E4761B",stroke:"#E4761B","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M181.12 212.89L147.22 196.39L149.92 218.49L149.62 227.79L181.12 212.89ZM76.1201 212.89L107.62 227.79L107.42 218.49L109.92 196.39L76.1201 212.89Z",fill:"#D7C1B3",stroke:"#D7C1B3","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M108.12 158.99L79.9199 150.69L99.8199 141.59L108.12 158.99ZM149.02 158.99L157.32 141.59L177.32 150.69L149.02 158.99Z",fill:"#233447",stroke:"#233447","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M76.1201 212.89L80.9201 172.29L49.6201 173.19L76.1201 212.89ZM176.32 172.29L181.12 212.89L207.62 173.19L176.32 172.29ZM200.12 127.59L143.92 130.09L149.12 158.99L157.42 141.59L177.42 150.69L200.12 127.59ZM79.9201 150.69L99.9201 141.59L108.12 158.99L113.42 130.09L57.1201 127.59L79.9201 150.69Z",fill:"#CD6116",stroke:"#CD6116","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M57.1201 127.59L80.7201 173.59L79.9201 150.69L57.1201 127.59ZM177.42 150.69L176.42 173.59L200.12 127.59L177.42 150.69ZM113.42 130.09L108.12 158.99L114.72 193.09L116.22 148.19L113.42 130.09ZM143.92 130.09L141.22 148.09L142.42 193.09L149.12 158.99L143.92 130.09Z",fill:"#E4751F",stroke:"#E4751F","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M149.12 158.99L142.42 193.09L147.22 196.39L176.42 173.59L177.42 150.69L149.12 158.99ZM79.9199 150.69L80.7199 173.59L109.92 196.39L114.72 193.09L108.12 158.99L79.9199 150.69Z",fill:"#F6851B",stroke:"#F6851B","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M149.62 227.79L149.92 218.49L147.42 216.29H109.72L107.42 218.49L107.62 227.79L76.1201 212.89L87.1201 221.89L109.42 237.39H147.72L170.12 221.89L181.12 212.89L149.62 227.79Z",fill:"#C0AD9E",stroke:"#C0AD9E","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M147.22 196.39L142.42 193.09H114.72L109.92 196.39L107.42 218.49L109.72 216.29H147.42L149.92 218.49L147.22 196.39Z",fill:"#161616",stroke:"#161616","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M247.62 79.69L256.12 38.89L243.42 0.98999L147.22 72.39L184.22 103.69L236.52 118.99L248.12 105.49L243.12 101.89L251.12 94.59L244.92 89.79L252.92 83.69L247.62 79.69ZM1.12012 38.89L9.62012 79.69L4.22012 83.69L12.2201 89.79L6.12012 94.59L14.1201 101.89L9.12012 105.49L20.6201 118.99L72.9201 103.69L109.92 72.39L13.7201 0.98999L1.12012 38.89Z",fill:"#763D16",stroke:"#763D16","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("path",{d:"M236.521 118.99L184.221 103.69L200.121 127.59L176.421 173.59L207.621 173.19H254.121L236.521 118.99ZM72.9207 103.69L20.6207 118.99L3.2207 173.19H49.6207L80.7207 173.59L57.1207 127.59L72.9207 103.69ZM143.921 130.09L147.221 72.39L162.421 31.29H94.9207L109.921 72.39L113.421 130.09L114.621 148.29L114.721 193.09H142.421L142.621 148.29L143.921 130.09Z",fill:"#F6851B",stroke:"#F6851B","stroke-linecap":"round","stroke-linejoin":"round"})]}),p=()=>(0,a.jsx)(o,{icon:(0,a.jsx)(u,{}),content:{title:"Connect with Metamask",description:"You need to be connected to metamask.",button:"Connect"}});var d=p},4693:function(e,t,n){"use strict";var a=n(5893),r=n(7357),i=n(5582);n(7294);let s=e=>{let{children:t,image:n}=e;return(0,a.jsxs)(r.Z,{sx:{...o.root,backgroundImage:"url(".concat(n,")")},children:[(0,a.jsx)(r.Z,{sx:o.overlay}),(0,a.jsx)(i.Z,{maxWidth:"md",sx:o.content,children:t})]})},o={root:{pt:16,pb:6,height:"50vh",minHeight:"400px",bgcolor:"white",backgroundSize:"cover",backgroundPosition:"center center",mb:6,position:"relative"},content:{position:"relative",display:"flex",justifyContent:"center"},overlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(180deg, rgba(24, 22, 22, 0) 0%, #1d1d1d 100%)"}};t.Z=s},8226:function(e,t,n){"use strict";var a=n(5893);n(7294);var r=n(7357),i=n(5861),s=n(8078);let o=e=>{let{label:t,value:n,symbol:o}=e;return(0,a.jsxs)(r.Z,{sx:l.card,children:[(0,a.jsx)(i.Z,{color:"text.secondary",fontSize:14,mt:0,children:t}),(0,a.jsxs)(r.Z,{sx:l.wrapper,children:[(0,a.jsx)(i.Z,{boxShadow:1,variant:"h6",my:0,mr:1,children:n?n.split(".")[0]:(0,a.jsx)(s.Z,{width:60})}),(0,a.jsx)(i.Z,{boxShadow:1,fontWeight:700,fontSize:12,color:"text.secondary",children:o})]})]})},l={container:{width:"100%",display:"flex",marginBottom:"30px",gap:2},card:{bgcolor:"background.paper",p:2,flex:1,borderRadius:2,boxShadow:1},wrapper:{display:"flex",alignItems:"flex-end"}};t.Z=o},3604:function(e,t,n){"use strict";var a=n(5893);n(7294);var r=n(7357),i=n(5861);let s=e=>{let{rank:t,address:n,highlight:s}=e;return(0,a.jsxs)(r.Z,{sx:{bgcolor:"background.paper",borderRadius:2,boxShadow:1,display:"flex",overflow:"hidden"},children:[(0,a.jsxs)(r.Z,{sx:{flex:1,display:"flex",p:2,gap:4,alignItems:"center"},children:[(0,a.jsxs)(i.Z,{variant:"h5",children:["#",t]}),n&&(0,a.jsx)(i.Z,{color:"text.secondary",children:n})]}),(0,a.jsxs)(r.Z,{sx:{bgcolor:"grey.800",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:100},children:[(0,a.jsx)(i.Z,{variant:"h6",fontWeight:700,children:s.value}),(0,a.jsx)(i.Z,{fontWeight:700,fontSize:12,color:"text.secondary",children:s.label})]})]})};t.Z=s},2314:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(6076),r=n(4687),i=n(7294);function s(e,t){let{library:n,account:s,chainId:o}=(0,r.Ge)();return(0,i.useMemo)(()=>{if(!e||!t||!n||!o)return null;try{return new a.CH(e,t,n.getSigner(s))}catch(e){return console.error("Failed To Get Contract",e),null}},[e,t,n,s])}},1473:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});let a=[{id:1,name:"IOTABOTS",description:"IOTABOTS Games and some nice explanation",link:"/iotabots",image:"https://pbs.twimg.com/profile_banners/1453664485063933965/1654275883/1080x360"},{id:2,name:"Soonabots",description:"Soonabots race game now available.",link:"/soonabots",image:"https://images.soonaverse.com/0x69278e7ea657216937b139f070449bf000cbd835/r9k6xyq7f4q/collection_banner.jpeg"}]},7098:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(5893);n(7294);var r=n(7357),i=n(5553),s=n(7837),o=n(2929),l=n(2314),u=n(7309),p=n(8226);let d=e=>{let{totalSupply:t,playerBalance:n,account:d}=e,{data:y,isError:m,isLoading:f,refetch:x}=function(e,t){let n=(0,l.Z)(t,o),a=(0,s.a)({queryKey:["TokenBalance"],queryFn:()=>n?n.balanceOf(e).then(e=>i.dF(e)).catch(e=>({error:e})):"Geht net"});return a}(d,u.M.eggsAddr),h=[{label:"Current Supply",value:t},{label:"Player Balance",value:String(y)}];return(0,a.jsx)(r.Z,{sx:c.container,children:h.map(e=>(0,a.jsx)(p.Z,{...e},e.label))})},c={container:{width:"100%",display:"flex",marginBottom:"30px",gap:2}};var y=d},9302:function(e,t,n){"use strict";n.r(t);var a=n(5893);n(7294);var r=n(7357),i=n(8078),s=n(5861),o=n(3321);let l=()=>(0,a.jsxs)(r.Z,{sx:u.root,children:[(0,a.jsx)(i.Z,{variant:"rectangular",animation:"wave",sx:u.image}),(0,a.jsxs)(r.Z,{sx:u.content,children:[(0,a.jsx)(s.Z,{variant:"h6",children:(0,a.jsx)(i.Z,{width:80,animation:"wave"})}),(0,a.jsx)(s.Z,{children:(0,a.jsx)(i.Z,{width:120,animation:"wave"})}),(0,a.jsx)(r.Z,{sx:u.buttons,children:[1,2,3].map(e=>(0,a.jsx)(o.Z,{disabled:!0,children:(0,a.jsx)(i.Z,{width:40})},e))}),(0,a.jsx)(s.Z,{children:(0,a.jsx)(i.Z,{width:120,animation:"wave"})})]})]}),u={root:{overflow:"hidden",mt:4,bgcolor:"background.paper",borderRadius:2,boxShadow:1},image:{height:220},content:{display:"flex",flexDirection:"column",alignItems:"center",p:4},buttons:{display:"flex",gap:2,justifyContent:"center"}};t.default=l},6120:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(5893),r=n(7294),i=n(7357),s=n(5861),o=n(1438),l=n(9485),u=n(6076),p=n(5553),d=n(7921),c=n(2929),y=n(4687),m=n(5441),f=n(3321),x=n(7309);let h=()=>{let{library:e,active:t}=(0,y.Ge)(),[n,h]=(0,r.useState)(10),[b,g]=(0,r.useState)(""),v=x.M.eggsBurnAddr,w=x.M.eggsAddr,T=async()=>{let t=new o.Qg(e.provider);if(!t){g("No provider available");return}if(!l.UJ(v)){g("Invalid contract address");return}try{await Z()}catch(e){g("Error: ".concat(e.message))}let a=t.getSigner(),r=new u.CH(v,d,a);try{g("Sending transaction...");let e=await r.burnTokens(p.vz(String(n),18));g("Transaction sent, waiting for confirmation..."),await e.wait(),g("Transaction confirmed, tokens burned! \uD83D\uDD25")}catch(e){g("Error: ".concat(e.message))}},Z=async()=>{let t=new o.Qg(e.provider);if(!t){g("No provider available");return}if(!l.UJ(v)){g("Invalid contract address");return}let a=t.getSigner(),r=p.vz(String(n),18);try{g("Sending approval transaction...");let e=new u.CH(w,c,a),t=await e.approve(v,r);g("Approval transaction sent, waiting for confirmation..."),await t.wait(),g("Approval transaction confirmed")}catch(e){g("Error: ".concat(e.message))}};return(0,a.jsxs)(i.Z,{sx:{p:4,bgcolor:"background.paper"},children:[t&&(0,a.jsxs)(i.Z,{sx:{display:"flex",gap:4},children:[(0,a.jsx)(m.Z,{sx:{flex:1},type:"number",variant:"filled",value:n,onChange:e=>h(Number(e.target.value)),label:"Amount to burn"}),(0,a.jsx)(f.Z,{variant:"contained",disabled:n<=0,onClick:T,children:"Burn Tokens \uD83D\uDD25"})]}),b&&(0,a.jsx)(s.Z,{children:b})]})};var b=n(8226);let g=()=>{let[e,t]=(0,r.useState)(""),n=x.M.eggsAddr,{library:i}=(0,y.Ge)();return(0,r.useEffect)(()=>{let e=async()=>{if(!i||!l.UJ(n))return;let e=new o.Qg(i.provider),a=new u.CH(n,c,e);try{let e=await a.balanceOf("0x000000000000000000000000000000000000dEaD");t(p.bM(e,18))}catch(e){console.error("Error fetching total burned tokens: ".concat(e.message))}};(null==i?void 0:i.provider)&&e()},[i,n]),(0,a.jsx)(b.Z,{label:"Total Burned Tokens",value:e,symbol:"EGGS"})},v=()=>(0,a.jsxs)(i.Z,{sx:w.root,children:[(0,a.jsxs)(i.Z,{sx:w.wrapper,children:[(0,a.jsxs)(i.Z,{sx:{flex:1},children:[(0,a.jsx)(s.Z,{variant:"h4",children:"Burn EGG Tokens"}),(0,a.jsx)(s.Z,{children:"You can either burn or sell your tokens. By burning them you participate in the Leaderboard below."})]}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(g,{})})]}),(0,a.jsx)(h,{})]}),w={root:{bgcolor:"primary.main",borderRadius:2,boxShadow:1,overflow:"hidden"},wrapper:{display:"flex",gap:4,p:4}};var T=v},7482:function(e,t,n){"use strict";n.r(t);var a=n(5893);n(7294);var r=n(7357),i=n(5861);let s=()=>(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(i.Z,{gutterBottom:!0,variant:"h4",children:"How it works"}),(0,a.jsx)(i.Z,{gutterBottom:!0,variant:"h5",children:"EGGS Token Burning Process"}),(0,a.jsx)(i.Z,{color:"text.secondary",children:"Burning EGGS tokens permanently removes a specified amount of tokens from circulation, reducing the total supply. This action is irreversible."}),(0,a.jsx)(i.Z,{mt:2,gutterBottom:!0,variant:"h6",children:"Step 1: Approve the contract"}),(0,a.jsx)(i.Z,{color:"text.secondary",children:"Before burning tokens, you need to approve the smart contract to transfer the specified amount of EGGS tokens on your behalf. This is a security measure implemented in the ERC20 standard to ensure that you maintain control over your tokens."}),(0,a.jsx)(i.Z,{color:"text.secondary",children:"By approving the contract, you grant permission for the smart contract to transfer a specific amount of tokens from your account. This allowance can be changed at any time by approving a new amount."}),(0,a.jsx)(i.Z,{mt:2,gutterBottom:!0,variant:"h6",component:"h6",children:"Step 2: Burn tokens"}),(0,a.jsx)(i.Z,{color:"text.secondary",children:'After approving the contract, you can proceed to burn the tokens. Clicking the "Burn Tokens" button will send a transaction to the smart contract, which will transfer the specified amount of tokens to a designated "dead" address. This action effectively removes the tokens from circulation.'}),(0,a.jsx)(i.Z,{color:"text.secondary",children:"Please note that burning tokens is an irreversible action. Once burned, the tokens cannot be recovered."})]});t.default=s},4075:function(e,t,n){"use strict";n.r(t);var a=n(5893);n(7294);var r=n(7357),i=n(5861);let s=[{id:1,content:"Each player must connect their wallet to the IOTABOTVERSE platform\n  and hold an IOTABOT (ERC721 Token) to participate in the game."},{id:2,content:"Players can only play against their own IOTABOT."},{id:3,content:"Each game round consists of one move: Rock, Paper, or Scissors."},{id:4,content:"To initiate a game, the player must submit a move by signing a\n    transaction on the ShimmerEVM network."},{id:5,content:"Once both moves have been submitted, the smart contract will\n    determine the winner using the standard Rock Paper Scissors rules: \n    Rock beats Scissors, Scissors beats Paper, Paper beats Rock."},{id:6,content:"If the player wins, they are awarded 10 EGGS tokens."},{id:7,content:"In case of a tie or a loss, the game is declared a draw or a loss\n    respectively, and no rewards will be distributed."}],o=()=>(0,a.jsxs)(r.Z,{sx:{bgcolor:"background.paper",boxShadow:1,borderRadius:2,p:3},children:[(0,a.jsx)(i.Z,{gutterBottom:!0,variant:"h5",children:"Rules"}),(0,a.jsx)(r.Z,{children:(0,a.jsx)("ol",{style:{marginTop:0,marginBottom:0,marginLeft:0,paddingLeft:24},children:s.map(e=>(0,a.jsx)("li",{style:{marginBottom:8},children:(0,a.jsx)(i.Z,{color:"text.secondary",children:e.content})},e.id))})})]});t.default=o},8887:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(5893),r=n(7294),i=n(9008),s=n.n(i),o=n(6154),l=n(4687),u=n(1438),p=n(6076),d=n(5553),c=n(4038),y=n(2929),m=n(5582),f=n(7357),x=n(5861),h=n(6902),b=n(7309),g=n(9485),v=n(7921),w=n(3604);let T=e=>{let{top:t}=e,[n,i]=(0,r.useState)([]),s=b.M.eggsBurnAddr,{library:o}=(0,l.Ge)();(0,r.useEffect)(()=>{let e=async()=>{let e=new u.Qg(o.provider);if(!e||!g.UJ(s))return;let n=new p.CH(s,v,e);try{let e=await n.getTopBurners(t),a=await Promise.all(e.map(async e=>{let t=await n.burnedTokens(e);return{address:e,burnedAmount:d.bM(t,18)}}));i(a)}catch(e){console.error("Error fetching leaderboard: ".concat(e.message))}};o.provider&&e()},[o,s,t]);let c=e=>e?e.slice(0,6)+"..."+e.slice(-4):"";return(0,a.jsx)(f.Z,{sx:{display:"flex",flexDirection:"column",gap:3},children:n.map((e,t)=>(0,a.jsx)(w.Z,{rank:t+1,address:c(e.address),highlight:{label:"Eggs",value:null==e?void 0:e.burnedAmount}},t))})};var Z=n(7098),L=n(3870),k=n(9302),j=n(1473),M=n(4693),S=n(4075),B=n(7482),O=n(6120),C=n(0);function I(){let{active:e,account:t,library:n}=(0,l.Ge)(),[i,g]=(0,r.useState)(null),[v,w]=(0,r.useState)(null),[I,E]=(0,r.useState)([]);async function A(){let e=new u.Qg(n.provider),a=new p.CH(b.M.eggsAddr,y,e),r=await a.balanceOf(t);r=d.dF(r);let i=await a.totalSupply();w(i=d.dF(i)),g(r);let s=await a.balanceOf(b.M.iotabotsAddr);s=d.dF(s)}async function R(){let e=new u.Qg(n.provider),a=new p.CH(b.M.iotabotsAddr,c,e),r=await a.walletOfOwner(t),i=await Promise.all(r.map(async e=>{let t=e.toNumber(),n=await a.tokenURI(t),r=await o.Z.get(n);return r.data}));E(i)}return(0,r.useEffect)(()=>{t&&n.provider&&(R(),A())},[t,n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"IOTABOTS"}),(0,a.jsx)("meta",{name:"description",content:"The first PFP NFTs on IOTA and Shimmer."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(h.Z,{hero:(0,a.jsx)(M.Z,{image:j.W[0].image}),children:e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.Z,{maxWidth:"md",children:(0,a.jsxs)(f.Z,{sx:{display:"flex",gap:4,flexWrap:"wrap"},children:[(0,a.jsxs)(f.Z,{sx:{flex:1},children:[(0,a.jsx)(x.Z,{variant:"h3",sx:{mb:1},children:"Rock, Paper, Scissors"}),(0,a.jsx)(x.Z,{color:"text.secondary",sx:{mb:3},children:"Play now against your IOTABOTS and collect EGGS from wining Rock, Paper, Scissors against them. Good luck!"}),t&&n.provider&&(0,a.jsx)(Z.default,{playerBalance:i,totalSupply:v,account:t}),(0,a.jsxs)(f.Z,{sx:{textAlign:"center"},children:[I&&I.map((e,t)=>{let{image:n,name:r,edition:i}=e;return(0,a.jsx)(L.default,{id:i,image:n,name:r,refetchGame:A},t)}),!I&&(0,a.jsx)(k.default,{})]})]}),(0,a.jsx)(f.Z,{sx:{flex:1},children:(0,a.jsx)(S.default,{})})]})}),(0,a.jsxs)(m.Z,{sx:{mt:6},maxWidth:"md",children:[(0,a.jsx)(O.default,{}),(0,a.jsxs)(f.Z,{sx:{my:6},children:[(0,a.jsx)(x.Z,{variant:"h3",sx:{mb:1},children:"Leaderboard"}),(0,a.jsx)(x.Z,{color:"text.secondary",sx:{mb:3},children:"These are the honorful top 10 burners. Go a head and burn some yourself to show up here."}),e&&(0,a.jsx)(T,{top:10})]}),(0,a.jsx)(B.default,{})]})]}):(0,a.jsx)(m.Z,{maxWidth:"md",children:(0,a.jsx)(C.Z,{})})})]})}},7921:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_eggsToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"burnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getBurnerAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBurnerCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"top","type":"uint256"}],"name":"getTopBurners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]')},2929:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},4038:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')}},function(e){e.O(0,[5861,7739,7294,8115,8231,8494,8389,6719,8764,2092,3318,7851,5441,6902,3870,9774,2888,179],function(){return e(e.s=4141)}),_N_E=e.O()}]);