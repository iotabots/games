(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2089],{917:function(e,t,n){"use strict";n.d(t,{F4:function(){return y},iv:function(){return p},xB:function(){return u}});var r=n(7294);n(8417);var a=n(2443);n(8679);var o=n(444),s=n(8137),i=n(7278),u=(0,a.w)(function(e,t){var n=e.styles,u=(0,s.O)([n],void 0,(0,r.useContext)(a.T)),p=(0,r.useRef)();return(0,i.j)(function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,a=document.querySelector('style[data-emotion="'+e+" "+u.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==a&&(r=!0,a.setAttribute("data-emotion",e),n.hydrate([a])),p.current=[n,r],function(){n.flush()}},[t]),(0,i.j)(function(){var e=p.current,n=e[0];if(e[1]){e[1]=!1;return}if(void 0!==u.next&&(0,o.My)(t,u.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",u,n,!1)},[t,u.name]),null});function p(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.O)(t)}var y=function(){var e=p.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},8679:function(e,t,n){"use strict";var r=n(1296),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function u(e){return r.isMemo(e)?s:i[e.$$typeof]||a}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=s;var p=Object.defineProperty,y=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(f){var a=c(n);a&&a!==f&&e(t,a,r)}var s=y(n);l&&(s=s.concat(l(n)));for(var i=u(t),m=u(n),b=0;b<s.length;++b){var x=s[b];if(!o[x]&&!(r&&r[x])&&!(m&&m[x])&&!(i&&i[x])){var v=d(n,x);try{p(t,x,v)}catch(e){}}}}return t}},6103:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,p=n?Symbol.for("react.context"):60110,y=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,c=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,T=n?Symbol.for("react.responder"):60118,g=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case y:case l:case o:case i:case s:case c:return e;default:switch(e=e&&e.$$typeof){case p:case d:case b:case m:case u:return e;default:return t}}case a:return t}}}function h(e){return w(e)===l}t.AsyncMode=y,t.ConcurrentMode=l,t.ContextConsumer=p,t.ContextProvider=u,t.Element=r,t.ForwardRef=d,t.Fragment=o,t.Lazy=b,t.Memo=m,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=c,t.isAsyncMode=function(e){return h(e)||w(e)===y},t.isConcurrentMode=h,t.isContextConsumer=function(e){return w(e)===p},t.isContextProvider=function(e){return w(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===i},t.isStrictMode=function(e){return w(e)===s},t.isSuspense=function(e){return w(e)===c},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===i||e===s||e===c||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===p||e.$$typeof===d||e.$$typeof===v||e.$$typeof===T||e.$$typeof===g||e.$$typeof===x)},t.typeOf=w},1296:function(e,t,n){"use strict";e.exports=n(6103)},1750:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iotabots/components/Balance",function(){return n(7098)}])},8226:function(e,t,n){"use strict";var r=n(5893);n(7294);var a=n(7357),o=n(5861),s=n(8078);let i=e=>{let{label:t,value:n,symbol:i}=e;return(0,r.jsxs)(a.Z,{sx:u.card,children:[(0,r.jsx)(o.Z,{color:"text.secondary",fontSize:14,mt:0,children:t}),(0,r.jsxs)(a.Z,{sx:u.wrapper,children:[(0,r.jsx)(o.Z,{boxShadow:1,variant:"h6",my:0,mr:1,children:n?n.split(".")[0]:(0,r.jsx)(s.Z,{width:60})}),(0,r.jsx)(o.Z,{boxShadow:1,fontWeight:700,fontSize:12,color:"text.secondary",children:i})]})]})},u={container:{width:"100%",display:"flex",marginBottom:"30px",gap:2},card:{bgcolor:"background.paper",p:2,flex:1,borderRadius:2,boxShadow:1},wrapper:{display:"flex",alignItems:"flex-end"}};t.Z=i},7309:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});let r={soonabotRaceAddr:"0xC587021041Fd1f5e15a24bdCE3F37DddB359b8D6",soonabotsAddr:"0x2f5C574ddF275b4cDfAE26fE8e75621c4B7E106e",soonabotsStakeAddr:"0x83a612E70A505012F7E38e4b8f37C806f2ef7Aa8",iotabotsAddr:"0xb5A53615170e4684E488C9E1c641aB9dDC307489",iotabotsGameAddr:"0x3CE8aB86dED969004102caB650060373e04A0448",eggsAddr:"0xdFCF738225F6508F7A664c3c7D236432501e16d4",eggsBurnAddr:"0x08c399d67d6A536b21d8D4CAd2F703fFd3e0aF58",nftMarketAddr:"0x390f1A9056121bf3087010Ea3804c920f3AE03c9",questsAddr:"0x7Db4a0de77b13780b4eFd3bAe634A5bAe57F611f"}},2314:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(6076),a=n(4687),o=n(7294);function s(e,t){let{library:n,account:s,chainId:i}=(0,a.Ge)();return(0,o.useMemo)(()=>{if(!e||!t||!n||!i)return null;try{return new r.CH(e,t,n.getSigner(s))}catch(e){return console.error("Failed To Get Contract",e),null}},[e,t,n,s])}},7098:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893);n(7294);var a=n(7357),o=n(5553),s=n(7837),i=n(2929),u=n(2314),p=n(7309),y=n(8226);let l=e=>{let{totalSupply:t,playerBalance:n,account:l}=e,{data:c,isError:f,isLoading:m,refetch:b}=function(e,t){let n=(0,u.Z)(t,i),r=(0,s.a)({queryKey:["TokenBalance"],queryFn:()=>n?n.balanceOf(e).then(e=>o.dF(e)).catch(e=>({error:e})):"Geht net"});return r}(l,p.M.eggsAddr),x=[{label:"Current Supply",value:t},{label:"Player Balance",value:String(c)}];return(0,r.jsx)(a.Z,{sx:d.container,children:x.map(e=>(0,r.jsx)(y.Z,{...e},e.label))})},d={container:{width:"100%",display:"flex",marginBottom:"30px",gap:2}};var c=l},2929:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}},function(e){e.O(0,[5861,7294,8115,2092,9774,2888,179],function(){return e(e.s=1750)}),_N_E=e.O()}]);