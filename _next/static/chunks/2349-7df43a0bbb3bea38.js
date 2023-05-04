"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2349],{5553:function(t,r,e){e.d(r,{dF:function(){return E},bM:function(){return F},fi:function(){return A},vz:function(){return S}});var i=e(6441),o=e(1581),n=e(8794),l=e(2593);let a=new o.Yd(n.i),s={},u=l.O$.from(0),m=l.O$.from(-1);function f(t,r,e,i){let n={fault:r,operation:e};return void 0!==i&&(n.value=i),a.throwError(t,o.Yd.errors.NUMERIC_FAULT,n)}let d="0";for(;d.length<256;)d+=d;function h(t){if("number"!=typeof t)try{t=l.O$.from(t).toNumber()}catch(t){}return"number"==typeof t&&t>=0&&t<=256&&!(t%1)?"1"+d.substring(0,t):a.throwArgumentError("invalid decimal size","decimals",t)}function c(t,r){null==r&&(r=0);let e=h(r);t=l.O$.from(t);let i=t.lt(u);i&&(t=t.mul(m));let o=t.mod(e).toString();for(;o.length<e.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];let n=t.div(e).toString();return t=1===e.length?n:n+"."+o,i&&(t="-"+t),t}function g(t,r){null==r&&(r=0);let e=h(r);"string"==typeof t&&t.match(/^-?[0-9.]+$/)||a.throwArgumentError("invalid decimal value","value",t);let i="-"===t.substring(0,1);i&&(t=t.substring(1)),"."===t&&a.throwArgumentError("missing value","value",t);let o=t.split(".");o.length>2&&a.throwArgumentError("too many decimal points","value",t);let n=o[0],s=o[1];for(n||(n="0"),s||(s="0");"0"===s[s.length-1];)s=s.substring(0,s.length-1);for(s.length>e.length-1&&f("fractional component exceeds decimals","underflow","parseFixed"),""===s&&(s="0");s.length<e.length-1;)s+="0";let u=l.O$.from(n),d=l.O$.from(s),c=u.mul(e).add(d);return i&&(c=c.mul(m)),c}class v{constructor(t,r,e,i){t!==s&&a.throwError("cannot use FixedFormat constructor; use FixedFormat.from",o.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=r,this.width=e,this.decimals=i,this.name=(r?"":"u")+"fixed"+String(e)+"x"+String(i),this._multiplier=h(i),Object.freeze(this)}static from(t){if(t instanceof v)return t;"number"==typeof t&&(t=`fixed128x${t}`);let r=!0,e=128,i=18;if("string"==typeof t){if("fixed"===t);else if("ufixed"===t)r=!1;else{let o=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||a.throwArgumentError("invalid fixed format","format",t),r="u"!==o[1],e=parseInt(o[2]),i=parseInt(o[3])}}else if(t){let o=(r,e,i)=>null==t[r]?i:(typeof t[r]!==e&&a.throwArgumentError("invalid fixed format ("+r+" not "+e+")","format."+r,t[r]),t[r]);r=o("signed","boolean",r),e=o("width","number",e),i=o("decimals","number",i)}return e%8&&a.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",e),i>80&&a.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new v(s,r,e,i)}}class w{constructor(t,r,e,i){t!==s&&a.throwError("cannot use FixedNumber constructor; use FixedNumber.from",o.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=i,this._hex=r,this._value=e,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&a.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);let r=g(this._value,this.format.decimals),e=g(t._value,t.format.decimals);return w.fromValue(r.add(e),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);let r=g(this._value,this.format.decimals),e=g(t._value,t.format.decimals);return w.fromValue(r.sub(e),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);let r=g(this._value,this.format.decimals),e=g(t._value,t.format.decimals);return w.fromValue(r.mul(e).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);let r=g(this._value,this.format.decimals),e=g(t._value,t.format.decimals);return w.fromValue(r.mul(this.format._multiplier).div(e),this.format.decimals,this.format)}floor(){let t=this.toString().split(".");1===t.length&&t.push("0");let r=w.from(t[0],this.format),e=!t[1].match(/^(0*)$/);return this.isNegative()&&e&&(r=r.subUnsafe(x.toFormat(r.format))),r}ceiling(){let t=this.toString().split(".");1===t.length&&t.push("0");let r=w.from(t[0],this.format),e=!t[1].match(/^(0*)$/);return!this.isNegative()&&e&&(r=r.addUnsafe(x.toFormat(r.format))),r}round(t){null==t&&(t=0);let r=this.toString().split(".");if(1===r.length&&r.push("0"),(t<0||t>80||t%1)&&a.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;let e=w.from("1"+d.substring(0,t),this.format),i=p.toFormat(this.format);return this.mulUnsafe(e).addUnsafe(i).floor().divUnsafe(e)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(t){if(null==t)return this._hex;t%8&&a.throwArgumentError("invalid byte width","width",t);let r=l.O$.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return(0,i.$m)(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return w.fromString(this._value,t)}static fromValue(t,r,e){return null!=e||null==r||(0,l.Zm)(r)||(e=r,r=null),null==r&&(r=0),null==e&&(e="fixed"),w.fromString(c(t,r),v.from(e))}static fromString(t,r){null==r&&(r="fixed");let e=v.from(r),o=g(t,e.decimals);!e.signed&&o.lt(u)&&f("unsigned value cannot be negative","overflow","value",t);let n=null;e.signed?n=o.toTwos(e.width).toHexString():(n=o.toHexString(),n=(0,i.$m)(n,e.width/8));let l=c(o,e.decimals);return new w(s,n,l,e)}static fromBytes(t,r){null==r&&(r="fixed");let e=v.from(r);if((0,i.lE)(t).length>e.width/8)throw Error("overflow");let o=l.O$.from(t);e.signed&&(o=o.fromTwos(e.width));let n=o.toTwos((e.signed?0:1)+e.width).toHexString(),a=c(o,e.decimals);return new w(s,n,a,e)}static from(t,r){if("string"==typeof t)return w.fromString(t,r);if((0,i._t)(t))return w.fromBytes(t,r);try{return w.fromValue(t,0,r)}catch(t){if(t.code!==o.Yd.errors.INVALID_ARGUMENT)throw t}return a.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}let x=w.from(1),p=w.from("0.5"),b=new o.Yd("units/5.7.0"),_=["wei","kwei","mwei","gwei","szabo","finney","ether"];function F(t,r){if("string"==typeof r){let t=_.indexOf(r);-1!==t&&(r=3*t)}return c(t,null!=r?r:18)}function S(t,r){if("string"!=typeof t&&b.throwArgumentError("value must be a string","value",t),"string"==typeof r){let t=_.indexOf(r);-1!==t&&(r=3*t)}return g(t,null!=r?r:18)}function E(t){return F(t,18)}function A(t){return S(t,18)}},2349:function(t,r,e){e.r(r),e.d(r,{default:function(){return E}});var i=e(5893),o=e(7294),n=e(6242),l=e(4267),a=e(5861),s=e(3366),u=e(7462),m=e(6010),f=e(4780),d=e(948),h=e(1657),c=e(1588),g=e(4867);function v(t){return(0,g.Z)("MuiCardActions",t)}(0,c.Z)("MuiCardActions",["root","spacing"]);let w=["disableSpacing","className"],x=t=>{let{classes:r,disableSpacing:e}=t;return(0,f.Z)({root:["root",!e&&"spacing"]},v,r)},p=(0,d.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,r)=>{let{ownerState:e}=t;return[r.root,!e.disableSpacing&&r.spacing]}})(({ownerState:t})=>(0,u.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),b=o.forwardRef(function(t,r){let e=(0,h.Z)({props:t,name:"MuiCardActions"}),{disableSpacing:o=!1,className:n}=e,l=(0,s.Z)(e,w),a=(0,u.Z)({},e,{disableSpacing:o}),f=x(a);return(0,i.jsx)(p,(0,u.Z)({className:(0,m.Z)(f.root,n),ownerState:a,ref:r},l))});var _=e(3321),F=e(5553);let S=t=>{var r;let{quest:e,onSolve:o}=t;return(0,i.jsxs)(n.Z,{children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(a.Z,{variant:"h5",component:"div",children:null==e?void 0:e.description}),(0,i.jsxs)(a.Z,{color:"textSecondary",children:["Points: ",null==e?void 0:null===(r=e.points)||void 0===r?void 0:r.toNumber()]}),(0,i.jsxs)(a.Z,{color:"textSecondary",children:["Your Balance: ",null==e?void 0:e.balance]}),(0,i.jsxs)(a.Z,{color:"textSecondary",children:["Required tokens:"," ",F.dF((null==e?void 0:e.requiredTokenAmount)||0)]})]}),(0,i.jsxs)(b,{children:[(0,i.jsx)(_.Z,{disabled:!(null==e?void 0:e.userCanSolve),size:"small",onClick:()=>o(null==e?void 0:e.id),children:"Solve"}),(null==e?void 0:e.active)?"Active":"Inactive"]})]})};var E=S}}]);