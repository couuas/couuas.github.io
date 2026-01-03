const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PortfolioDetail-AdurT5AN.js","assets/mermaid-C-v3_poi.js","assets/d3--x_RIlPQ.js","assets/highlight-oFPFMupF.js","assets/pdf-CVzfGURS.js","assets/fancyapps-B9LBmYJj.js","assets/fancyapps-DxT1xVcY.css","assets/gsap-COmk0yTM.js","assets/PortfolioDetail-DKbtkT6E.css","assets/BlogDetail-uy4jMVVo.js","assets/BlogDetail-NJLZOjN6.css","assets/Journal-BNOtzqc3.js","assets/Journal-BLSX4Ukb.css","assets/JournalDetail-kPxBV7NQ.js","assets/JournalDetail-BGJLusnW.css","assets/GalaxyPage-CBO0hyUp.js","assets/three-CgjpmSNj.js","assets/GalaxyPage-DRVmf_08.css","assets/PresentationPage-C_CEVtMc.js","assets/swiper-LWfZhxmj.js","assets/swiper-B31GnZFy.css","assets/PresentationPage-BPLfbYFp.css"])))=>i.map(i=>d[i]);
import{e as Oi,r as H,m as Ii,t as Li,d as ae,i as gn,f as At,g as sr,j as Di,k as lr,l as ar,w as Fe,n as qe,q as cr,s as Je,u as ur,v as dr,x as Fi,y as F,z as fr,p as jn,h as Ni,a as nn,A as tn,B as $,C as V,D as u,E as Ae,F as re,G as ee,H as an,I as Le,J as Ie,K as De,L as he,M as Ce,N as yn,T as Bi,O as Mn,P as Rt,Q as Xe,R as pn,S as mr,U as pr,V as hr,W as vr,X as gr}from"./pdf-CVzfGURS.js";import{_ as Ke}from"./mermaid-C-v3_poi.js";import{g as yr}from"./highlight-oFPFMupF.js";import{N as Ot}from"./fancyapps-B9LBmYJj.js";import{g as _r}from"./gsap-COmk0yTM.js";import"./d3--x_RIlPQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const m of a)if(m.type==="childList")for(const o of m.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(a){const m={};return a.integrity&&(m.integrity=a.integrity),a.referrerPolicy&&(m.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?m.credentials="include":a.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function i(a){if(a.ep)return;a.ep=!0;const m=l(a);fetch(a.href,m)}})();let ji;const Rn=n=>ji=n,Gi=Symbol();function gt(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var hn;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(hn||(hn={}));function br(){const n=Oi(!0),t=n.run(()=>H({}));let l=[],i=[];const a=Ii({install(m){Rn(a),a._a=m,m.provide(Gi,a),m.config.globalProperties.$pinia=a,i.forEach(o=>l.push(o)),i=[]},use(m){return this._a?l.push(m):i.push(m),this},_p:l,_a:null,_e:n,_s:new Map,state:t});return a}const Vi=()=>{};function It(n,t,l,i=Vi){n.add(t);const a=()=>{n.delete(t)&&i()};return!l&&lr()&&ar(a),a}function rn(n,...t){n.forEach(l=>{l(...t)})}const wr=n=>n(),Lt=Symbol(),Gn=Symbol();function yt(n,t){n instanceof Map&&t instanceof Map?t.forEach((l,i)=>n.set(i,l)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const l in t){if(!t.hasOwnProperty(l))continue;const i=t[l],a=n[l];gt(a)&&gt(i)&&n.hasOwnProperty(l)&&!gn(i)&&!At(i)?n[l]=yt(a,i):n[l]=i}return n}const Sr=Symbol();function xr(n){return!gt(n)||!Object.prototype.hasOwnProperty.call(n,Sr)}const{assign:Ye}=Object;function Cr(n){return!!(gn(n)&&n.effect)}function Ar(n,t,l,i){const{state:a,actions:m,getters:o}=t,f=l.state.value[n];let r;function c(){f||(l.state.value[n]=a?a():{});const d=cr(l.state.value[n]);return Ye(d,m,Object.keys(o||{}).reduce((p,h)=>(p[h]=Ii(ae(()=>{Rn(l);const g=l._s.get(n);return o[h].call(g,g)})),p),{}))}return r=Ui(n,c,t,l,i,!0),r}function Ui(n,t,l={},i,a,m){let o;const f=Ye({actions:{}},l),r={deep:!0};let c,d,p=new Set,h=new Set,g;const C=i.state.value[n];!m&&!C&&(i.state.value[n]={}),H({});let I;function z(ne){let Z;c=d=!1,typeof ne=="function"?(ne(i.state.value[n]),Z={type:hn.patchFunction,storeId:n,events:g}):(yt(i.state.value[n],ne),Z={type:hn.patchObject,payload:ne,storeId:n,events:g});const ce=I=Symbol();qe().then(()=>{I===ce&&(c=!0)}),d=!0,rn(p,Z,i.state.value[n])}const Y=m?function(){const{state:Z}=l,ce=Z?Z():{};this.$patch(pe=>{Ye(pe,ce)})}:Vi;function G(){o.stop(),p.clear(),h.clear(),i._s.delete(n)}const R=(ne,Z="")=>{if(Lt in ne)return ne[Gn]=Z,ne;const ce=function(){Rn(i);const pe=Array.from(arguments),_e=new Set,K=new Set;function W(X){_e.add(X)}function E(X){K.add(X)}rn(h,{args:pe,name:ce[Gn],store:O,after:W,onError:E});let te;try{te=ne.apply(this&&this.$id===n?this:O,pe)}catch(X){throw rn(K,X),X}return te instanceof Promise?te.then(X=>(rn(_e,X),X)).catch(X=>(rn(K,X),Promise.reject(X))):(rn(_e,te),te)};return ce[Lt]=!0,ce[Gn]=Z,ce},M={_p:i,$id:n,$onAction:It.bind(null,h),$patch:z,$reset:Y,$subscribe(ne,Z={}){const ce=It(p,ne,Z.detached,()=>pe()),pe=o.run(()=>Fe(()=>i.state.value[n],_e=>{(Z.flush==="sync"?d:c)&&ne({storeId:n,type:hn.direct,events:g},_e)},Ye({},r,Z)));return ce},$dispose:G},O=Di(M);i._s.set(n,O);const j=(i._a&&i._a.runWithContext||wr)(()=>i._e.run(()=>(o=Oi()).run(()=>t({action:R}))));for(const ne in j){const Z=j[ne];if(gn(Z)&&!Cr(Z)||At(Z))m||(C&&xr(Z)&&(gn(Z)?Z.value=C[ne]:yt(Z,C[ne])),i.state.value[n][ne]=Z);else if(typeof Z=="function"){const ce=R(Z,ne);j[ne]=ce,f.actions[ne]=Z}}return Ye(O,j),Ye(Li(O),j),Object.defineProperty(O,"$state",{get:()=>i.state.value[n],set:ne=>{z(Z=>{Ye(Z,ne)})}}),i._p.forEach(ne=>{Ye(O,o.run(()=>ne({store:O,app:i._a,pinia:i,options:f})))}),C&&m&&l.hydrate&&l.hydrate(O.$state,C),c=!0,d=!0,O}function Hi(n,t,l){let i;const a=typeof t=="function";i=a?l:t;function m(o,f){const r=ur();return o=o||(r?Je(Gi,null):null),o&&Rn(o),o=ji,o._s.has(n)||(a?Ui(n,t,i,o):Ar(n,i,o)),o._s.get(n)}return m.$id=n,m}function qi(n){const t=Li(n),l={};for(const i in t){const a=t[i];a.effect?l[i]=ae({get:()=>n[i],set(m){n[i]=m}}):(gn(a)||At(a))&&(l[i]=sr(n,i))}return l}const ln=typeof document<"u";function $i(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function kr(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&$i(n.default)}const de=Object.assign;function Vn(n,t){const l={};for(const i in t){const a=t[i];l[i]=Ne(a)?a.map(n):n(a)}return l}const vn=()=>{},Ne=Array.isArray;function Dt(n,t){const l={};for(const i in n)l[i]=i in t?t[i]:n[i];return l}const Wi=/#/g,Er=/&/g,Tr=/\//g,Pr=/=/g,Mr=/\?/g,zi=/\+/g,Rr=/%5B/g,Or=/%5D/g,Yi=/%5E/g,Ir=/%60/g,Ki=/%7B/g,Lr=/%7C/g,Qi=/%7D/g,Dr=/%20/g;function kt(n){return n==null?"":encodeURI(""+n).replace(Lr,"|").replace(Rr,"[").replace(Or,"]")}function Fr(n){return kt(n).replace(Ki,"{").replace(Qi,"}").replace(Yi,"^")}function _t(n){return kt(n).replace(zi,"%2B").replace(Dr,"+").replace(Wi,"%23").replace(Er,"%26").replace(Ir,"`").replace(Ki,"{").replace(Qi,"}").replace(Yi,"^")}function Nr(n){return _t(n).replace(Pr,"%3D")}function Br(n){return kt(n).replace(Wi,"%23").replace(Mr,"%3F")}function jr(n){return Br(n).replace(Tr,"%2F")}function _n(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Gr=/\/$/,Vr=n=>n.replace(Gr,"");function Un(n,t,l="/"){let i,a={},m="",o="";const f=t.indexOf("#");let r=t.indexOf("?");return r=f>=0&&r>f?-1:r,r>=0&&(i=t.slice(0,r),m=t.slice(r,f>0?f:t.length),a=n(m.slice(1))),f>=0&&(i=i||t.slice(0,f),o=t.slice(f,t.length)),i=$r(i??t,l),{fullPath:i+m+o,path:i,query:a,hash:_n(o)}}function Ur(n,t){const l=t.query?n(t.query):"";return t.path+(l&&"?")+l+(t.hash||"")}function Ft(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Hr(n,t,l){const i=t.matched.length-1,a=l.matched.length-1;return i>-1&&i===a&&cn(t.matched[i],l.matched[a])&&Ji(t.params,l.params)&&n(t.query)===n(l.query)&&t.hash===l.hash}function cn(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Ji(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var l in n)if(!qr(n[l],t[l]))return!1;return!0}function qr(n,t){return Ne(n)?Nt(n,t):Ne(t)?Nt(t,n):n?.valueOf()===t?.valueOf()}function Nt(n,t){return Ne(t)?n.length===t.length&&n.every((l,i)=>l===t[i]):n.length===1&&n[0]===t}function $r(n,t){if(n.startsWith("/"))return n;if(!n)return t;const l=t.split("/"),i=n.split("/"),a=i[i.length-1];(a===".."||a===".")&&i.push("");let m=l.length-1,o,f;for(o=0;o<i.length;o++)if(f=i[o],f!==".")if(f==="..")m>1&&m--;else break;return l.slice(0,m).join("/")+"/"+i.slice(o).join("/")}const $e={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let bt=(function(n){return n.pop="pop",n.push="push",n})({}),Hn=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function Wr(n){if(!n)if(ln){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Vr(n)}const zr=/^[^#]+#/;function Yr(n,t){return n.replace(zr,"#")+t}function Kr(n,t){const l=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-l.left-(t.left||0),top:i.top-l.top-(t.top||0)}}const On=()=>({left:window.scrollX,top:window.scrollY});function Qr(n){let t;if("el"in n){const l=n.el,i=typeof l=="string"&&l.startsWith("#"),a=typeof l=="string"?i?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!a)return;t=Kr(a,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Bt(n,t){return(history.state?history.state.position-t:-1)+n}const wt=new Map;function Jr(n,t){wt.set(n,t)}function Zr(n){const t=wt.get(n);return wt.delete(n),t}function Xr(n){return typeof n=="string"||n&&typeof n=="object"}function Zi(n){return typeof n=="string"||typeof n=="symbol"}let ye=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Xi=Symbol("");ye.MATCHER_NOT_FOUND+"",ye.NAVIGATION_GUARD_REDIRECT+"",ye.NAVIGATION_ABORTED+"",ye.NAVIGATION_CANCELLED+"",ye.NAVIGATION_DUPLICATED+"";function un(n,t){return de(new Error,{type:n,[Xi]:!0},t)}function He(n,t){return n instanceof Error&&Xi in n&&(t==null||!!(n.type&t))}const eo=["params","query","hash"];function no(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const l of eo)l in n&&(t[l]=n[l]);return JSON.stringify(t,null,2)}function to(n){const t={};if(n===""||n==="?")return t;const l=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<l.length;++i){const a=l[i].replace(zi," "),m=a.indexOf("="),o=_n(m<0?a:a.slice(0,m)),f=m<0?null:_n(a.slice(m+1));if(o in t){let r=t[o];Ne(r)||(r=t[o]=[r]),r.push(f)}else t[o]=f}return t}function jt(n){let t="";for(let l in n){const i=n[l];if(l=Nr(l),i==null){i!==void 0&&(t+=(t.length?"&":"")+l);continue}(Ne(i)?i.map(a=>a&&_t(a)):[i&&_t(i)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+l,a!=null&&(t+="="+a))})}return t}function io(n){const t={};for(const l in n){const i=n[l];i!==void 0&&(t[l]=Ne(i)?i.map(a=>a==null?null:""+a):i==null?i:""+i)}return t}const ro=Symbol(""),Gt=Symbol(""),In=Symbol(""),Et=Symbol(""),St=Symbol("");function mn(){let n=[];function t(i){return n.push(i),()=>{const a=n.indexOf(i);a>-1&&n.splice(a,1)}}function l(){n=[]}return{add:t,list:()=>n.slice(),reset:l}}function Qe(n,t,l,i,a,m=o=>o()){const o=i&&(i.enterCallbacks[a]=i.enterCallbacks[a]||[]);return()=>new Promise((f,r)=>{const c=h=>{h===!1?r(un(ye.NAVIGATION_ABORTED,{from:l,to:t})):h instanceof Error?r(h):Xr(h)?r(un(ye.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&i.enterCallbacks[a]===o&&typeof h=="function"&&o.push(h),f())},d=m(()=>n.call(i&&i.instances[a],t,l,c));let p=Promise.resolve(d);n.length<3&&(p=p.then(c)),p.catch(h=>r(h))})}function qn(n,t,l,i,a=m=>m()){const m=[];for(const o of n)for(const f in o.components){let r=o.components[f];if(!(t!=="beforeRouteEnter"&&!o.instances[f]))if($i(r)){const c=(r.__vccOpts||r)[t];c&&m.push(Qe(c,l,i,o,f,a))}else{let c=r();m.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${f}" at "${o.path}"`);const p=kr(d)?d.default:d;o.mods[f]=d,o.components[f]=p;const h=(p.__vccOpts||p)[t];return h&&Qe(h,l,i,o,f,a)()}))}}return m}function oo(n,t){const l=[],i=[],a=[],m=Math.max(t.matched.length,n.matched.length);for(let o=0;o<m;o++){const f=t.matched[o];f&&(n.matched.find(c=>cn(c,f))?i.push(f):l.push(f));const r=n.matched[o];r&&(t.matched.find(c=>cn(c,r))||a.push(r))}return[l,i,a]}let so=()=>location.protocol+"//"+location.host;function er(n,t){const{pathname:l,search:i,hash:a}=t,m=n.indexOf("#");if(m>-1){let o=a.includes(n.slice(m))?n.slice(m).length:1,f=a.slice(o);return f[0]!=="/"&&(f="/"+f),Ft(f,"")}return Ft(l,n)+i+a}function lo(n,t,l,i){let a=[],m=[],o=null;const f=({state:h})=>{const g=er(n,location),C=l.value,I=t.value;let z=0;if(h){if(l.value=g,t.value=h,o&&o===C){o=null;return}z=I?h.position-I.position:0}else i(g);a.forEach(Y=>{Y(l.value,C,{delta:z,type:bt.pop,direction:z?z>0?Hn.forward:Hn.back:Hn.unknown})})};function r(){o=l.value}function c(h){a.push(h);const g=()=>{const C=a.indexOf(h);C>-1&&a.splice(C,1)};return m.push(g),g}function d(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(de({},h.state,{scroll:On()}),"")}}function p(){for(const h of m)h();m=[],window.removeEventListener("popstate",f),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",f),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:r,listen:c,destroy:p}}function Vt(n,t,l,i=!1,a=!1){return{back:n,current:t,forward:l,replaced:i,position:window.history.length,scroll:a?On():null}}function ao(n){const{history:t,location:l}=window,i={value:er(n,l)},a={value:t.state};a.value||m(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function m(r,c,d){const p=n.indexOf("#"),h=p>-1?(l.host&&document.querySelector("base")?n:n.slice(p))+r:so()+n+r;try{t[d?"replaceState":"pushState"](c,"",h),a.value=c}catch(g){console.error(g),l[d?"replace":"assign"](h)}}function o(r,c){m(r,de({},t.state,Vt(a.value.back,r,a.value.forward,!0),c,{position:a.value.position}),!0),i.value=r}function f(r,c){const d=de({},a.value,t.state,{forward:r,scroll:On()});m(d.current,d,!0),m(r,de({},Vt(i.value,r,null),{position:d.position+1},c),!1),i.value=r}return{location:i,state:a,push:f,replace:o}}function co(n){n=Wr(n);const t=ao(n),l=lo(n,t.state,t.location,t.replace);function i(m,o=!0){o||l.pauseListeners(),history.go(m)}const a=de({location:"",base:n,go:i,createHref:Yr.bind(null,n)},t,l);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}let en=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var be=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(be||{});const uo={type:en.Static,value:""},fo=/[a-zA-Z0-9_]/;function mo(n){if(!n)return[[]];if(n==="/")return[[uo]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(g){throw new Error(`ERR (${l})/"${c}": ${g}`)}let l=be.Static,i=l;const a=[];let m;function o(){m&&a.push(m),m=[]}let f=0,r,c="",d="";function p(){c&&(l===be.Static?m.push({type:en.Static,value:c}):l===be.Param||l===be.ParamRegExp||l===be.ParamRegExpEnd?(m.length>1&&(r==="*"||r==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),m.push({type:en.Param,value:c,regexp:d,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=r}for(;f<n.length;){if(r=n[f++],r==="\\"&&l!==be.ParamRegExp){i=l,l=be.EscapeNext;continue}switch(l){case be.Static:r==="/"?(c&&p(),o()):r===":"?(p(),l=be.Param):h();break;case be.EscapeNext:h(),l=i;break;case be.Param:r==="("?l=be.ParamRegExp:fo.test(r)?h():(p(),l=be.Static,r!=="*"&&r!=="?"&&r!=="+"&&f--);break;case be.ParamRegExp:r===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+r:l=be.ParamRegExpEnd:d+=r;break;case be.ParamRegExpEnd:p(),l=be.Static,r!=="*"&&r!=="?"&&r!=="+"&&f--,d="";break;default:t("Unknown state");break}}return l===be.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),p(),o(),a}const Ut="[^/]+?",po={sensitive:!1,strict:!1,start:!0,end:!0};var Pe=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Pe||{});const ho=/[.+*?^${}()[\]/\\]/g;function vo(n,t){const l=de({},po,t),i=[];let a=l.start?"^":"";const m=[];for(const c of n){const d=c.length?[]:[Pe.Root];l.strict&&!c.length&&(a+="/");for(let p=0;p<c.length;p++){const h=c[p];let g=Pe.Segment+(l.sensitive?Pe.BonusCaseSensitive:0);if(h.type===en.Static)p||(a+="/"),a+=h.value.replace(ho,"\\$&"),g+=Pe.Static;else if(h.type===en.Param){const{value:C,repeatable:I,optional:z,regexp:Y}=h;m.push({name:C,repeatable:I,optional:z});const G=Y||Ut;if(G!==Ut){g+=Pe.BonusCustomRegExp;try{`${G}`}catch(M){throw new Error(`Invalid custom RegExp for param "${C}" (${G}): `+M.message)}}let R=I?`((?:${G})(?:/(?:${G}))*)`:`(${G})`;p||(R=z&&c.length<2?`(?:/${R})`:"/"+R),z&&(R+="?"),a+=R,g+=Pe.Dynamic,z&&(g+=Pe.BonusOptional),I&&(g+=Pe.BonusRepeatable),G===".*"&&(g+=Pe.BonusWildcard)}d.push(g)}i.push(d)}if(l.strict&&l.end){const c=i.length-1;i[c][i[c].length-1]+=Pe.BonusStrict}l.strict||(a+="/?"),l.end?a+="$":l.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const o=new RegExp(a,l.sensitive?"":"i");function f(c){const d=c.match(o),p={};if(!d)return null;for(let h=1;h<d.length;h++){const g=d[h]||"",C=m[h-1];p[C.name]=g&&C.repeatable?g.split("/"):g}return p}function r(c){let d="",p=!1;for(const h of n){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const g of h)if(g.type===en.Static)d+=g.value;else if(g.type===en.Param){const{value:C,repeatable:I,optional:z}=g,Y=C in c?c[C]:"";if(Ne(Y)&&!I)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const G=Ne(Y)?Y.join("/"):Y;if(!G)if(z)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=G}}return d||"/"}return{re:o,score:i,keys:m,parse:f,stringify:r}}function go(n,t){let l=0;for(;l<n.length&&l<t.length;){const i=t[l]-n[l];if(i)return i;l++}return n.length<t.length?n.length===1&&n[0]===Pe.Static+Pe.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Pe.Static+Pe.Segment?1:-1:0}function nr(n,t){let l=0;const i=n.score,a=t.score;for(;l<i.length&&l<a.length;){const m=go(i[l],a[l]);if(m)return m;l++}if(Math.abs(a.length-i.length)===1){if(Ht(i))return 1;if(Ht(a))return-1}return a.length-i.length}function Ht(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const yo={strict:!1,end:!0,sensitive:!1};function _o(n,t,l){const i=vo(mo(n.path),l),a=de(i,{record:n,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function bo(n,t){const l=[],i=new Map;t=Dt(yo,t);function a(p){return i.get(p)}function m(p,h,g){const C=!g,I=$t(p);I.aliasOf=g&&g.record;const z=Dt(t,p),Y=[I];if("alias"in p){const M=typeof p.alias=="string"?[p.alias]:p.alias;for(const O of M)Y.push($t(de({},I,{components:g?g.record.components:I.components,path:O,aliasOf:g?g.record:I})))}let G,R;for(const M of Y){const{path:O}=M;if(h&&O[0]!=="/"){const L=h.record.path,j=L[L.length-1]==="/"?"":"/";M.path=h.record.path+(O&&j+O)}if(G=_o(M,h,z),g?g.alias.push(G):(R=R||G,R!==G&&R.alias.push(G),C&&p.name&&!Wt(G)&&o(p.name)),tr(G)&&r(G),I.children){const L=I.children;for(let j=0;j<L.length;j++)m(L[j],G,g&&g.children[j])}g=g||G}return R?()=>{o(R)}:vn}function o(p){if(Zi(p)){const h=i.get(p);h&&(i.delete(p),l.splice(l.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=l.indexOf(p);h>-1&&(l.splice(h,1),p.record.name&&i.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function f(){return l}function r(p){const h=xo(p,l);l.splice(h,0,p),p.record.name&&!Wt(p)&&i.set(p.record.name,p)}function c(p,h){let g,C={},I,z;if("name"in p&&p.name){if(g=i.get(p.name),!g)throw un(ye.MATCHER_NOT_FOUND,{location:p});z=g.record.name,C=de(qt(h.params,g.keys.filter(R=>!R.optional).concat(g.parent?g.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),p.params&&qt(p.params,g.keys.map(R=>R.name))),I=g.stringify(C)}else if(p.path!=null)I=p.path,g=l.find(R=>R.re.test(I)),g&&(C=g.parse(I),z=g.record.name);else{if(g=h.name?i.get(h.name):l.find(R=>R.re.test(h.path)),!g)throw un(ye.MATCHER_NOT_FOUND,{location:p,currentLocation:h});z=g.record.name,C=de({},h.params,p.params),I=g.stringify(C)}const Y=[];let G=g;for(;G;)Y.unshift(G.record),G=G.parent;return{name:z,path:I,params:C,matched:Y,meta:So(Y)}}n.forEach(p=>m(p));function d(){l.length=0,i.clear()}return{addRoute:m,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:f,getRecordMatcher:a}}function qt(n,t){const l={};for(const i of t)i in n&&(l[i]=n[i]);return l}function $t(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:wo(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function wo(n){const t={},l=n.props||!1;if("component"in n)t.default=l;else for(const i in n.components)t[i]=typeof l=="object"?l[i]:l;return t}function Wt(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function So(n){return n.reduce((t,l)=>de(t,l.meta),{})}function xo(n,t){let l=0,i=t.length;for(;l!==i;){const m=l+i>>1;nr(n,t[m])<0?i=m:l=m+1}const a=Co(n);return a&&(i=t.lastIndexOf(a,i-1)),i}function Co(n){let t=n;for(;t=t.parent;)if(tr(t)&&nr(n,t)===0)return t}function tr({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function zt(n){const t=Je(In),l=Je(Et),i=ae(()=>{const r=F(n.to);return t.resolve(r)}),a=ae(()=>{const{matched:r}=i.value,{length:c}=r,d=r[c-1],p=l.matched;if(!d||!p.length)return-1;const h=p.findIndex(cn.bind(null,d));if(h>-1)return h;const g=Yt(r[c-2]);return c>1&&Yt(d)===g&&p[p.length-1].path!==g?p.findIndex(cn.bind(null,r[c-2])):h}),m=ae(()=>a.value>-1&&To(l.params,i.value.params)),o=ae(()=>a.value>-1&&a.value===l.matched.length-1&&Ji(l.params,i.value.params));function f(r={}){if(Eo(r)){const c=t[F(n.replace)?"replace":"push"](F(n.to)).catch(vn);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ae(()=>i.value.href),isActive:m,isExactActive:o,navigate:f}}function Ao(n){return n.length===1?n[0]:n}const ko=Fi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zt,setup(n,{slots:t}){const l=Di(zt(n)),{options:i}=Je(In),a=ae(()=>({[Kt(n.activeClass,i.linkActiveClass,"router-link-active")]:l.isActive,[Kt(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const m=t.default&&Ao(t.default(l));return n.custom?m:Ni("a",{"aria-current":l.isExactActive?n.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:a.value},m)}}}),Me=ko;function Eo(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function To(n,t){for(const l in t){const i=t[l],a=n[l];if(typeof i=="string"){if(i!==a)return!1}else if(!Ne(a)||a.length!==i.length||i.some((m,o)=>m.valueOf()!==a[o].valueOf()))return!1}return!0}function Yt(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Kt=(n,t,l)=>n??t??l,Po=Fi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:l}){const i=Je(St),a=ae(()=>n.route||i.value),m=Je(Gt,0),o=ae(()=>{let c=F(m);const{matched:d}=a.value;let p;for(;(p=d[c])&&!p.components;)c++;return c}),f=ae(()=>a.value.matched[o.value]);jn(Gt,ae(()=>o.value+1)),jn(ro,f),jn(St,a);const r=H();return Fe(()=>[r.value,f.value,n.name],([c,d,p],[h,g,C])=>{d&&(d.instances[p]=c,g&&g!==d&&c&&c===h&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),c&&d&&(!g||!cn(d,g)||!h)&&(d.enterCallbacks[p]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=a.value,d=n.name,p=f.value,h=p&&p.components[d];if(!h)return Qt(l.default,{Component:h,route:c});const g=p.props[d],C=g?g===!0?c.params:typeof g=="function"?g(c):g:null,z=Ni(h,de({},C,t,{onVnodeUnmounted:Y=>{Y.component.isUnmounted&&(p.instances[d]=null)},ref:r}));return Qt(l.default,{Component:z,route:c})||z}}});function Qt(n,t){if(!n)return null;const l=n(t);return l.length===1?l[0]:l}const Mo=Po;function Ro(n){const t=bo(n.routes,n),l=n.parseQuery||to,i=n.stringifyQuery||jt,a=n.history,m=mn(),o=mn(),f=mn(),r=dr($e);let c=$e;ln&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Vn.bind(null,S=>""+S),p=Vn.bind(null,jr),h=Vn.bind(null,_n);function g(S,U){let N,Q;return Zi(S)?(N=t.getRecordMatcher(S),Q=U):Q=S,t.addRoute(Q,N)}function C(S){const U=t.getRecordMatcher(S);U&&t.removeRoute(U)}function I(){return t.getRoutes().map(S=>S.record)}function z(S){return!!t.getRecordMatcher(S)}function Y(S,U){if(U=de({},U||r.value),typeof S=="string"){const ie=Un(l,S,U.path),ve=t.resolve({path:ie.path},U),Ge=a.createHref(ie.fullPath);return de(ie,ve,{params:h(ve.params),hash:_n(ie.hash),redirectedFrom:void 0,href:Ge})}let N;if(S.path!=null)N=de({},S,{path:Un(l,S.path,U.path).path});else{const ie=de({},S.params);for(const ve in ie)ie[ve]==null&&delete ie[ve];N=de({},S,{params:p(ie)}),U.params=p(U.params)}const Q=t.resolve(N,U),le=S.hash||"";Q.params=d(h(Q.params));const me=Ur(i,de({},S,{hash:Fr(le),path:Q.path})),se=a.createHref(me);return de({fullPath:me,hash:le,query:i===jt?io(S.query):S.query||{}},Q,{redirectedFrom:void 0,href:se})}function G(S){return typeof S=="string"?Un(l,S,r.value.path):de({},S)}function R(S,U){if(c!==S)return un(ye.NAVIGATION_CANCELLED,{from:U,to:S})}function M(S){return j(S)}function O(S){return M(de(G(S),{replace:!0}))}function L(S,U){const N=S.matched[S.matched.length-1];if(N&&N.redirect){const{redirect:Q}=N;let le=typeof Q=="function"?Q(S,U):Q;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=G(le):{path:le},le.params={}),de({query:S.query,hash:S.hash,params:le.path!=null?{}:S.params},le)}}function j(S,U){const N=c=Y(S),Q=r.value,le=S.state,me=S.force,se=S.replace===!0,ie=L(N,Q);if(ie)return j(de(G(ie),{state:typeof ie=="object"?de({},le,ie.state):le,force:me,replace:se}),U||N);const ve=N;ve.redirectedFrom=U;let Ge;return!me&&Hr(i,Q,N)&&(Ge=un(ye.NAVIGATION_DUPLICATED,{to:ve,from:Q}),Te(Q,Q,!0,!1)),(Ge?Promise.resolve(Ge):ce(ve,Q)).catch(we=>He(we)?He(we,ye.NAVIGATION_GUARD_REDIRECT)?we:Re(we):q(we,ve,Q)).then(we=>{if(we){if(He(we,ye.NAVIGATION_GUARD_REDIRECT))return j(de({replace:se},G(we.to),{state:typeof we.to=="object"?de({},le,we.to.state):le,force:me}),U||ve)}else we=_e(ve,Q,!0,se,le);return pe(ve,Q,we),we})}function ne(S,U){const N=R(S,U);return N?Promise.reject(N):Promise.resolve()}function Z(S){const U=je.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(S):S()}function ce(S,U){let N;const[Q,le,me]=oo(S,U);N=qn(Q.reverse(),"beforeRouteLeave",S,U);for(const ie of Q)ie.leaveGuards.forEach(ve=>{N.push(Qe(ve,S,U))});const se=ne.bind(null,S,U);return N.push(se),Oe(N).then(()=>{N=[];for(const ie of m.list())N.push(Qe(ie,S,U));return N.push(se),Oe(N)}).then(()=>{N=qn(le,"beforeRouteUpdate",S,U);for(const ie of le)ie.updateGuards.forEach(ve=>{N.push(Qe(ve,S,U))});return N.push(se),Oe(N)}).then(()=>{N=[];for(const ie of me)if(ie.beforeEnter)if(Ne(ie.beforeEnter))for(const ve of ie.beforeEnter)N.push(Qe(ve,S,U));else N.push(Qe(ie.beforeEnter,S,U));return N.push(se),Oe(N)}).then(()=>(S.matched.forEach(ie=>ie.enterCallbacks={}),N=qn(me,"beforeRouteEnter",S,U,Z),N.push(se),Oe(N))).then(()=>{N=[];for(const ie of o.list())N.push(Qe(ie,S,U));return N.push(se),Oe(N)}).catch(ie=>He(ie,ye.NAVIGATION_CANCELLED)?ie:Promise.reject(ie))}function pe(S,U,N){f.list().forEach(Q=>Z(()=>Q(S,U,N)))}function _e(S,U,N,Q,le){const me=R(S,U);if(me)return me;const se=U===$e,ie=ln?history.state:{};N&&(Q||se?a.replace(S.fullPath,de({scroll:se&&ie&&ie.scroll},le)):a.push(S.fullPath,le)),r.value=S,Te(S,U,N,se),Re()}let K;function W(){K||(K=a.listen((S,U,N)=>{if(!fe.listening)return;const Q=Y(S),le=L(Q,fe.currentRoute.value);if(le){j(de(le,{replace:!0,force:!0}),Q).catch(vn);return}c=Q;const me=r.value;ln&&Jr(Bt(me.fullPath,N.delta),On()),ce(Q,me).catch(se=>He(se,ye.NAVIGATION_ABORTED|ye.NAVIGATION_CANCELLED)?se:He(se,ye.NAVIGATION_GUARD_REDIRECT)?(j(de(G(se.to),{force:!0}),Q).then(ie=>{He(ie,ye.NAVIGATION_ABORTED|ye.NAVIGATION_DUPLICATED)&&!N.delta&&N.type===bt.pop&&a.go(-1,!1)}).catch(vn),Promise.reject()):(N.delta&&a.go(-N.delta,!1),q(se,Q,me))).then(se=>{se=se||_e(Q,me,!1),se&&(N.delta&&!He(se,ye.NAVIGATION_CANCELLED)?a.go(-N.delta,!1):N.type===bt.pop&&He(se,ye.NAVIGATION_ABORTED|ye.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),pe(Q,me,se)}).catch(vn)}))}let E=mn(),te=mn(),X;function q(S,U,N){Re(S);const Q=te.list();return Q.length?Q.forEach(le=>le(S,U,N)):console.error(S),Promise.reject(S)}function ke(){return X&&r.value!==$e?Promise.resolve():new Promise((S,U)=>{E.add([S,U])})}function Re(S){return X||(X=!S,W(),E.list().forEach(([U,N])=>S?N(S):U()),E.reset()),S}function Te(S,U,N,Q){const{scrollBehavior:le}=n;if(!ln||!le)return Promise.resolve();const me=!N&&Zr(Bt(S.fullPath,0))||(Q||!N)&&history.state&&history.state.scroll||null;return qe().then(()=>le(S,U,me)).then(se=>se&&Qr(se)).catch(se=>q(se,S,U))}const Be=S=>a.go(S);let xe;const je=new Set,fe={currentRoute:r,listening:!0,addRoute:g,removeRoute:C,clearRoutes:t.clearRoutes,hasRoute:z,getRoutes:I,resolve:Y,options:n,push:M,replace:O,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:m.add,beforeResolve:o.add,afterEach:f.add,onError:te.add,isReady:ke,install(S){S.component("RouterLink",Me),S.component("RouterView",Mo),S.config.globalProperties.$router=fe,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>F(r)}),ln&&!xe&&r.value===$e&&(xe=!0,M(a.location).catch(Q=>{}));const U={};for(const Q in $e)Object.defineProperty(U,Q,{get:()=>r.value[Q],enumerable:!0});S.provide(In,fe),S.provide(Et,fr(U)),S.provide(St,r);const N=S.unmount;je.add(S),S.unmount=function(){je.delete(S),je.size<1&&(c=$e,K&&K(),K=null,r.value=$e,xe=!1,X=!1),N()}}};function Oe(S){return S.reduce((U,N)=>U.then(()=>Z(N)),Promise.resolve())}return fe}function mu(){return Je(In)}function Oo(n){return Je(Et)}const Io='---\ntitle: "About Wasker Vue"\ndate: "2025-12-25"\nimage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"\ncategory: "Project"\ndescription: "Exploring the evolution of the Wasker ecosystem from static templates to the 3D + AI production version."\n---\n\n# 📜 The Evolution of Wasker\n\n> This is a story of self-iteration and technical advancement. [Wasker](../../portfolio/en/wasker%20series/wasker_template.md) has evolved from a simple HTML static page into a modern Content Management System integrated with 3D visuals, AI interaction, and a global distribution gateway.\n\n---\n\n## 1️⃣ wasker_static_template (Vanilla Static Template)\n> **The Start**: Returning to the essence of web development, pursuing ultimate loading speed and pure interactive experiences.\n\n🔗 **Open Source**: [github.com/couuas/wasker](https://github.com/couuas/wasker)\n\n*   **Tech Stack**: `HTML5`, `CSS3`, `JavaScript (ES6)`, `Bootstrap Grid`, `GSAP`, `Swup.js`, `Swiper.js`, `Isotope`, `Fancybox`.\n*   **Core Features**:\n    *   **Seamless Navigation**: Uses `Swup.js` for logical single-page navigation, smooth and natural.\n    *   **High-Performance Animation**: Integrated `GSAP` and `ScrollTrigger` for delicate parallax scrolling and entrance effects.\n    *   **Responsive Layout**: Based on the `Bootstrap Grid` system, optimized for all devices.\n    *   **Lightbox Gallery**: Integrated `Fancybox` for immersive previews of media content.\n\n---\n\n## 2️⃣ wasker_vue_template (Vue 3 Driven Template)\n> **The Advancement**: Transitioning from "writing pages" to "building applications," introducing component-based development and Markdown-driven (CMS) philosophy.\n\n🔗 **Open Source**: [github.com/couuas/wasker](https://github.com/couuas/wasker/tree/main/wasker_vue_template)\n\n*   **Tech Stack**: `Vue 3 (Composition API)`, `Vite`, `Pinia`, `GSAP`, `Markdown-it`, `Highlight.js`.\n*   **Core Features**:\n    *   **Markdown-Driven Content (CMS)**: Blogs, portfolios, and resumes are driven entirely by `.md` files, achieving true database-free management.\n    *   **Auto-Routing**: Automatically analyzes and generates page routes based on the `src/content/` directory structure.\n    *   **Efficient State Management**: Uses `Pinia` to manage global application state, resulting in a cleaner architecture.\n    *   **Smart Layout**: Basic personal information is dynamically injected and rendered from the `profile.md` Frontmatter.\n\n---\n\n## 3️⃣ wasker_vue (3D + AI + Global Distribution Edition)\n> **The Breakthrough**: The current ultimate production version. More than just a showcase, it\'s a deep exploration of 3D interaction, AI assistants, and DevOps architecture.\n\n🔗 **Demo Site**: [couuas.pp.ua](https://couuas.pp.ua)\n\n*   **Tech Stack**: `Vue 3`, `Vite`, `Three.js`, `3D-Force-Graph`, `Telegram Proxy`, `Cloudflare Workers & Pages`, `Vercel`, `GitHub Actions`.\n*   **Core Features**:\n    *   **✨ 3D Galaxy System**: Built with `Three.js` and `3D-Force-Graph` to create a dynamic data galaxy with visual relationship indexing.\n    *   **🌍 Global Multi-Site Distribution**: \n        *   **Single Build Source**: Unified build via `GitHub Actions`.\n        *   **Tri-Center Distribution**: Synchronized to **Cloudflare**, **Vercel**, and **GitHub**, with automatic optimal path selection via `gateway.js`.\n    *   **🤖 Integrated AI Assistant**: Built-in `TheAiAssistant` component to enhance the visitor\'s interactive browsing experience.\n    *   **🛡️ Secure Communication Architecture**: All backend push logic is proxied through `Cloudflare Workers`, ensuring zero secret exposure in frontend environments.\n    *   **📄 Automated Workflow**: Automatically generates RSS feeds and knowledge base graph data during the build process for a fully automated pipeline.\n',Lo=`---
title: "TRICYS Performance Bottleneck Analysis and Optimization"
date: "2025-12-29"
category: "Performance"
description: "An in-depth analysis of TRICYS simulation program bottlenecks, proposing the 'Compile Once, Run Many' strategy to solve crashes and efficiency issues in large-scale concurrency."
---

# TRICYS Performance Bottleneck Analysis
## Background
The CFEDR analysis report fitting formula section requires calculating a large number of training samples. The required TRICYS configuration is as follows:
\`\`\`json
{
    "paths": {
        "package_path": "./CFEDR2.mo"
    },
    "simulation": {
        "model_name": "CFEDR.Cycle",
        "variableFilter": "time|sds.inventory",
        "stop_time": 24000.0,
        "step_size": 1
    },
    "simulation_parameters": {
        "pulse.power": [100, 200, 500, 1000, 1500, 2000, 2500, 3000],
        "pulse.width": [0.5, 0.6, 0.7, 0.8, 0.9, 0.99],
        "pulse.period": [0.33, 0.5, 1, 1.5, 2, 2.5, 3],
        "plasma.Burn_Fraction": [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1],
        "plasma.Fueling_Efficiency": [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.98],
        "bz.TBR": [1.05, 1.1, 1.15, 1.2],
        "tep.DIR": [0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1]
    }
}
\`\`\`

With 7 parameters total and a Cartesian product combination, it generates \`8 * 6 * 7 * 9 * 10 * 4 * 15 = 1,814,400\` simulation jobs.

  * **Time Bottleneck**: For sequential execution, a single task takes about 30s. Estimated total time: \`30 * 1814400 / 60 / 60 / 24 = 630 days\`, which is unacceptable.
  * **Space Bottleneck**: 15 simulation results in CSV format take ~135MB (9MB per task). Estimated total space: \`9 * 1814400 / 1024 / 1024 = 15.619 TB\`, far exceeding typical server capacity.
  * **Concurrency Crashes**: Concurrent execution crashes frequently with \`Assertion failed: error not defined [8] ... libzmq-src\\src\\ip.cpp:464\`. This indicates ZeroMQ (the communication layer for OpenModelica) has race conditions or resource exhaustion in multi-threaded environments.

Thus, TRICYS needs a performance bottleneck analysis and overhaul to fully exploit computational resources.

## Code Overview
The core logic of \`simulation.py (TRICYS base simulation)\` includes three parts: pre-process, task execution, and post-process.
1. Pre-process parses the config and generates the task list for parameter sweeping.
2. Execution core: \`mod = ModelicaSystem(...)\`, \`mod.setParameters(...)\`, \`mod.simulate(...)\`.
3. Post-process merges results and handles custom logic.

\`\`\`mermaid
graph TD
    %% Styling
    classDef pre fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    classDef exec fill:#fff3e0,stroke:#ff6f00,stroke-width:2px;
    classDef post fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;

    %% 1. Pre-process
    subgraph PreProcess ["Pre-process"]
        direction TB
        A[Start: Load Config]
        B[Generate 1.8M Jobs]
    end

    %% 2. Task Execution
    subgraph TaskExecution ["Task Execution"]
        direction TB
        C{Concurrent?}
        
        %% Concurrent mode
        subgraph ConcurrentMode [Concurrent Mode]
            direction TB
            D[ThreadPoolExecutor]
            E[Worker: _run_single_job]
            F[Init ModelicaSystem]
            G[mod.setParameters]
            H[mod.simulate]
            I[Pandas Read/Clean/Write CSV]
            J[Return Path]
        end

        %% Sequential mode
        subgraph SequentialMode [Sequential Mode]
            direction TB
            K[Sequential Loop]
            L[Reuse ModelicaSystem]
            M[Loop: setParameters -> simulate -> Pandas Clean]
        end
    end

    %% 3. Post-process
    subgraph PostProcess ["Post-process"]
        direction TB
        N[Collect All Paths]
        O[Pandas.concat ALL Results]
        P[Write Final CSV]
    end

    %% Connections
    A --> B
    B --> C
    
    C -- Yes --> D
    D --> E --> F --> G --> H --> I --> J
    
    C -- No --> K
    K --> L --> M
    
    J --> N
    M --> N
    N --> O --> P

    %% Apply styles
    class A,B pre;
    class C,D,E,F,G,H,I,J,K,L,M exec;
    class N,O,P post;
\`\`\`

## Performance Bottlenecks
### CPU Profiling
#### VizTracer Analysis
\`\`\`python
from viztracer import VizTracer
tracer = VizTracer(output_file="concurrent_trace.json", min_duration=1000)
tracer.start()

run_simulation(config)

tracer.stop()
tracer.save() 
\`\`\`
![](/assets/img-dark/content/blog/sequence_tracer.png)
Summary:
1. OMPython uses ZeroMQ to communicate with the \`omc\` server (daemon), parsing result strings back into Python objects.
2. The most time-consuming part is \`buildModel()\` during \`ModelicaSystem\` initialization, where \`omc\` parses Modelica code into C and calls \`gcc\` to compile it.
3. \`simulate()\` reuses the generated executable via \`_excute_child()\` subprocess calls.
4. \`setParameters()\` is negligible.

![](/assets/img-dark/content/blog/concurrent_tracer.png)
Summary:
1. Each thread starts its own \`omc\` server. While they should be isolated, high thread counts still cause crashes.
2. Lack of \`mod\` object reuse means the expensive \`buildModel()\` step consumes >50% of CPU resources in every thread.

\`\`\`mermaid
graph TD
    %% Styling
    classDef user fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;
    classDef app fill:#fff3e0,stroke:#e65100,stroke-width:2px;
    classDef comm fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef parser fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
    classDef ext fill:#424242,stroke:#000000,stroke-width:2px,color:#fff;
    classDef file fill:#fff9c4,stroke:#fbc02d,stroke-width:2px,stroke-dasharray: 5 5;

    %% User Layer
    UserScript[("User Script<br>(simulation.py)")]:::user

    %% Python Process
    subgraph PythonProcess ["Python Process (OMPython)"]
        direction TB
        
        %% App Layer
        subgraph AppLayer ["Application Layer (High-Level API)"]
            MS["ModelicaSystem"]:::app
            MS_Methods["Methods:<br>__init__ (Build)<br>setParameters<br>simulate"]:::app
        end

        %% Comm Layer
        subgraph CommLayer ["Communication Layer (Transport)"]
            Session["OMCSessionZMQ"]:::comm
            ZMQ_Socket["ZMQ REQ Socket"]:::comm
        end

        %% Parser Layer
        subgraph ParserLayer ["Parser Layer (Translation)"]
            Parser["OMTypedParser.py"]:::parser
            Grammar["PyParsing Grammar"]:::parser
        end
    end

    %% External System
    subgraph ExternalSystem ["External System (OS / Background)"]
        OMC_Daemon["omc (Daemon Process)<br>OpenModelica Compiler"]:::ext
        GCC["GCC / Clang<br>(C Compiler)"]:::ext
        
        subgraph FileSystem ["File System (Disk I/O)"]
            SourceFiles[".mo Source Files"]:::file
            TempFiles["Temp Files:<br>_override.txt<br>_init.xml<br>.csv inputs"]:::file
            Binaries["Binary Executable<br>(.exe / .elf)"]:::file
            Results["Result Files<br>(.mat / .csv)"]:::file
        end
    end

    %% Interactions
    UserScript --> |"1. mod = ModelicaSystem(...)"| MS
    MS --- MS_Methods

    MS --> |"2. loadFile / buildModel"| Session
    Session --> |"3. sendExpression (String)"| ZMQ_Socket
    ZMQ_Socket <==> |"4. ZMQ Protocol"| OMC_Daemon
    
    OMC_Daemon -.-> |"5. Read"| SourceFiles
    OMC_Daemon -.-> |"6. Generate C & Compile"| GCC
    GCC -.-> |"7. Write"| Binaries
    OMC_Daemon -.-> |"8. Generate"| TempFiles

    Session --> |"9. Raw Response String"| Parser
    Parser --- Grammar
    Parser --> |"10. Python Objects"| Session

    %% Simulation Flow (The Bottleneck)
    UserScript --> |"11. mod.simulate()"| MS
    MS --> |"12. Write Override Params"| TempFiles
    MS -- "13. subprocess.Popen()" --> Binaries
    Binaries -.-> |"14. Read Params"| TempFiles
    Binaries -.-> |"15. Write Results"| Results
    
    UserScript --> |"16. Read Results (Pandas/Scipy)"| Results

    MS o--o Session
\`\`\`

#### OMPython Code Analysis
OMPython's architecture isn't built for high-frequency, short-cycle massive concurrency.
**1. Client-Server Architecture**
* **Overhead**: Every API call requires string serialization/deserialization over ZMQ.
* **Parsing**: Results are Modelica strings (e.g., \`{1.0, 2.0}\`) parsed by \`OMTypedParser.py\`. This is slow for high-frequency calls.
* **Concurrency**: \`OMCSessionZMQ\` is not thread-safe, leading to \`libzmq\` crashes in \`ThreadPoolExecutor\`.

**2. \`ModelicaSystem(...)\`: Expensive Initialization**
Initializing a \`ModelicaSystem\` object triggers a full compilation pipeline: \`loadFile\`, \`loadModel\`, \`buildModel\` (C generation + GCC compile), and XML parsing of \`_init.xml\`. This is the primary bottleneck.

**3. \`setParameters(...)\`: Lightweight Mem-Op**
This only updates local Python dictionaries and is very fast (microseconds).

**4. \`simulate(...)\`: Hidden I/O Bottleneck**
Uses a "file-based parameter passing" mechanism. Every simulation writes an \`_override.txt\` file. For 1.8M tasks, this creates 1.8M small-file I/O operations, causing an "I/O storm".

#### Improvement Ideas
* **Sequential**: Limited gains, already reuses executables.
* **Concurrent**: Huge potential. **"Compile Once, Run Many"**.
    * **Bypass OMPython**: Don't instantiate \`ModelicaSystem\` in workers.
    * **Direct EXE Calls**: Compile once in the main process, then call the EXE directly via \`subprocess\` with \`-override\` flags in workers, bypassing OMC and ZMQ entirely.

### Memory Profiling
#### Issues
1. **OOM Risk**: \`pd.concat(all_dfs, axis=1)\` for 1.8M tasks would need terabytes of RAM.
2. **Resource Leak**: Unmanaged Futures in \`ThreadPoolExecutor\` accumulate memory.

#### Improvement Ideas
* **Streaming**: Use **HDF5** for layered storage.
* **Instant Release**: Run task -> read result -> write to HDF5 -> **immediately free memory and delete temp files**.

### Disk and I/O Profiling
#### Issues
1. **Inifficient CSV**: CSV is >2x the size of MAT (135MB vs 72MB). 15.6TB of writing will kill SSD lifespans.
2. **Small-file Storm**: Millions of temp files are a nightmare for NTFS.
3. **Log Overhead**: Logging at \`INFO\` level adds significant I/O overhead.

#### Improvement Ideas
* **Binary Format**: Use \`.mat\` throughout.
* **HDF5 Compression**: Use HDF5 (Blosc) to compress 15TB down to ~3TB.
* **Disk Isolation**: Separate OS/temp files and data storage on different physical drives.

## Roadmap
### Short-term (2-3 weeks)
#### 1. Core Architecture Upgrade
* **Single Compilation**: Use \`ModelicaSystem\` once to get the \`.exe\` path.
* **\`subprocess\` Scheduler**: Lightweight worker calling the EXE directly: \`./EXE -override p1=v1 -r result.mat\`. Use \`ProcessPoolExecutor\` to fix ZMQ crashes.
* **Throttling**: Add license-aware workers if needed.

#### 2. Data Flow Optimization
* **MAT Output**: Change \`outputFormat\` to \`mat\`.
* **Streaming Archive**: Read MAT -> Write HDF5 -> Delete MAT instantly.

### Long-term
#### 3. Task-level Caching (Proxy)
Implement a cache layer generating unique hashes for \`job_params\`. Skip simulations if a hash already exists in the cache.

## Hardware Recommendation
For 1.8M tasks on Windows with Aspen/COMSOL:

| Component | Suggestion | Reason |
| :--- | :--- | :--- |
| **CPU** | **Dual Socket**, **128+ Cores / 256+ Threads**, ≥ 3.0 GHz, 128 PCIe lanes | **Cores = Productivity**. Dual sockets allow 200+ concurrent processes. |
| **RAM** | **512 GB** (Rec: 1 TB), DDR5 ECC 12-Channel | 200 instances of Aspen/COMSOL consume 1-2GB each. High bandwidth is critical. |
| **Storage** | **2 x 4TB Enterprise NVMe** (U.2), **DWPD ≥ 3** | High durability is required for massive I/O. Isolate temp files and storage. |
| **GPU** | **16 GB+** GDDR6, Professional Card | Handles 200+ background task graphical requirements without system lag. |
| **OS** | **Windows Server 2022** | Better NUMA scheduling and process stability for 24/7 loads. |
`,Do='---\ntitle: "关于 Wasker Vue"\ndate: "2025-12-25"\nimage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"\ncategory: "Project"\ndescription: "回望 Wasker 体系从静态模板到 3D + AI 实战版的演进之路，见证个人站点的技术迭代。"\n---\n\n# 📜 关于 Wasker 发展历程\n\n> 这是一个关于自我迭代与技术进阶的故事。[Wasker](../../portfolio/zh/wasker%20series/wasker_template.md) 从最初的纯 HTML 静态页，逐步演进为一套集成了 3D 视觉、AI 交互与全球分发网关的现代化内容管理系统。\n\n---\n\n## 1️⃣ wasker_static_template (原生静态模板)\n> **起步**：回归 Web 开发的本质，追求极致的加载速度与纯粹的交互体验。\n\n🔗 **开源地址**：[github.com/couuas/wasker](https://github.com/couuas/wasker)\n\n*   **技术栈**: `HTML5`, `CSS3`, `JavaScript (ES6)`, `Bootstrap Grid`, `GSAP`, `Swup.js`, `Swiper.js`, `Isotope`, `Fancybox`。\n*   **核心功能**:\n    *   **无刷新页面跳转**: 使用 `Swup.js` 实现逻辑上的单页导航，流畅自然。\n    *   **高性能动画**: 集成 `GSAP` 和 `ScrollTrigger` 实现细腻的视差滚动与入场特效。\n    *   **响应式布局**: 基于 `Bootstrap Grid` 网格系统适配全平台设备。\n    *   **灯箱画廊**: 集成 `Fancybox`，用于媒体内容的沉浸式预览。\n\n---\n\n## 2️⃣ wasker_vue_template (Vue 3 驱动模板)\n> **进阶**：从“写页面”向“写应用”转变，引入组件化开发与 Markdown 内容驱动（CMS）思想。\n\n🔗 **开源地址**：[github.com/couuas/wasker](https://github.com/couuas/wasker/tree/main/wasker_vue_template)\n\n*   **技术栈**: `Vue 3 (Composition API)`, `Vite`, `Pinia`, `GSAP`, `Markdown-it`, `Highlight.js`。\n*   **核心功能**:\n    *   **Markdown 内容驱动 (CMS)**: 博客、作品集和简历完全由 `.md` 文件驱动，实现真正的免数据库管理。\n    *   **自动化路由**: 根据 `src/content/` 目录结构自动分析并生成页面路由。\n    *   **高效状态管理**: 使用 `Pinia` 统一管理应用全局状态，架构更清晰。\n    *   **智能化布局**: 个人基本信息直接从 `profile.md` 的 Frontmatter 中动态注入渲染。\n\n---\n\n## 3️⃣ wasker_vue (进阶 3D + AI + 全球分发版)\n> **突破**：当前的终极实战版本。不仅是展示，更是对 3D 交互、智能助手与 DevOps 架构的深度探索。\n\n🔗 **演示地址**：[couuas.pp.ua](https://couuas.pp.ua)\n\n*   **技术栈**: `Vue 3`, `Vite`, `Three.js`, `3D-Force-Graph`, `Telegram Proxy`, `Cloudflare Workers & Pages`, `Vercel`, `GitHub Actions`。\n*   **核心核心功能**:\n    *   **✨ 3D 交互星系 (Galaxy System)**: 采用 `Three.js` 构建动态数据星系，通过 `3D-Force-Graph` 实现内容的视觉化关联索引。\n    *   **🌍 全球多站分发系统**: \n        *   **单一构建源**: `GitHub Actions` 统一构建。\n        *   **三中心分发**: 同步至 **Cloudflare**, **Vercel** 和 **GitHub**，通过 `gateway.js` 实现全球最优路径自动接入。\n    *   **🤖 集成 AI 助手**: 内置 `TheAiAssistant` 组件，通过 AI 增强访客的交互式浏览体验。\n    *   **🛡️ 安全通信架构**: 所有的后端推送逻辑均通过 `Cloudflare Workers` 代理，确保前端环境零密钥泄露。\n    *   **📄 自动化工作流**: 构建过程中自动生成 RSS 订阅源与知识库图谱数据，实现全链路自动化。\n',Fo=`---
title: "TRICYS 性能瓶颈分析与优化"
date: "2025-12-29"
category: "Performance"
description: "深入剖析 TRICYS 仿真程序的性能瓶颈，提出基于“编译一次，运行多次”的核心优化策略，解决大规模并发下的崩溃与效率问题。"
---

# TRICYS性能瓶颈分析
## 分析背景
CFEDR分析报告拟合公式小节中需要计算大规模的训练样本，TRICYS所需配置如下：
\`\`\`json
{
    "paths": {
        "package_path": "./CFEDR2.mo"
    },
    "simulation": {
        "model_name": "CFEDR.Cycle",
        "variableFilter": "time|sds.inventory",
        "stop_time": 24000.0,
        "step_size": 1
    },
    "simulation_parameters": {
        "pulse.power": [100, 200, 500, 1000, 1500, 2000, 2500, 3000],
        "pulse.width": [0.5, 0.6, 0.7, 0.8, 0.9, 0.99],
        "pulse.period": [0.33, 0.5, 1, 1.5, 2, 2.5, 3],
        "plasma.Burn_Fraction": [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1],
        "plasma.Fueling_Efficiency": [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.98],
        "bz.TBR": [1.05, 1.1, 1.15, 1.2],
        "tep.DIR": [0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1]
    }
}
\`\`\`

总计 7 个参数，每个参数之间采用笛卡尔积的组合方式共生成 \`8 * 6 * 7 * 9 * 10 * 4 * 15 = 1,814,400\` 个仿真任务。

  * **时间瓶颈**：对于 TRICYS 的顺序执行，从日志文件可以看出单个仿真任务计算需要 30s，估计总计算时长 \`30 * 1814400 / 60 / 60 / 24 = 630 days\`，这是不可接受的。
  * **空间瓶颈**：实测显示，CSV 格式下 15 个仿真输出结果约 135MB（单任务 9MB），估计所需总存储空间 \`9 * 1814400 / 1024 / 1024 = 15.619 TB\`，远超常规服务器存储容量。
  * **并发崩溃**：对于 TRICYS 的并发执行，程序频繁崩溃，日志提示 \`Assertion failed: error not defined [8] ... libzmq-src\\src\\ip.cpp:464\`。这表明 ZeroMQ 底层库（OpenModelica 的通信层）在多线程环境下存在严重的竞态条件或资源耗尽问题。

综上所述，TRICYS 必须进行性能瓶颈分析及改进，以支持程序层面对计算资源的全面压榨。

## 代码概述
\`simulation.py（TRICYS 基础仿真）\`核心逻辑包括三个部分：前处理(pre-process)，任务执行，后处理(post-process)。
1. 前处理主要解析配置文件并生成参数扫描的仿真任务列表
2. 任务执行的核心代码为\`mod = ModelicaSystem(...)\`,\`mod.setParameters(...)\`,\`mod.simulate(...)\`
3. 后处理主要合并仿真结果以及自定义处理逻辑。

\`\`\`mermaid
graph TD
    %% 定义样式
    classDef pre fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    classDef exec fill:#fff3e0,stroke:#ff6f00,stroke-width:2px;
    classDef post fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;

    %% 1. 前处理阶段
    subgraph PreProcess ["前处理 (Pre-process)"]
        direction TB
        A[Start: Load Config]
        B[Generate 181W Jobs]
    end

    %% 2. 任务执行阶段
    subgraph TaskExecution ["任务执行 (Task Execution)"]
        direction TB
        C{Concurrent?}
        
        %% 并发分支
        subgraph ConcurrentMode [Concurrent Mode]
            direction TB
            D[ThreadPoolExecutor]
            E[Worker: _run_single_job]
            F[Init ModelicaSystem ]
            G[mod.setParameters]
            H[mod.simulate]
            I[Pandas Read/Clean/Write CSV]
            J[Return Path]
        end

        %% 顺序分支
        subgraph SequentialMode [Sequential Mode]
            direction TB
            K[Sequential Loop]
            L[Reuse ModelicaSystem]
            M[Loop: setParameters -> simulate -> Pandas Clean]
        end
    end

    %% 3. 后处理阶段
    subgraph PostProcess ["后处理 (Post-process)"]
        direction TB
        N[Collect All Paths]
        O[Pandas.concat ALL Results]
        P[Write Final CSV]
    end

    %% 连接关系
    A --> B
    B --> C
    
    C -- Yes --> D
    D --> E --> F --> G --> H --> I --> J
    
    C -- No --> K
    K --> L --> M
    
    J --> N
    M --> N
    N --> O --> P

    %% 应用样式
    class A,B pre;
    class C,D,E,F,G,H,I,J,K,L,M exec;
    class N,O,P post;
\`\`\`


## 性能瓶颈
### CPU性能剖析
#### VizTracer分析
\`\`\`python
from viztracer import VizTracer
tracer = VizTracer(output_file="concurrent_trace.json",min_duration=1000)
tracer.start()

run_simulation(config)

tracer.stop()
tracer.save() 
\`\`\`
![](/assets/img-dark/content/blog/sequence_tracer.png)
总结：
1. OMPython底层设计是使用 ZeroMQ 通信中间件与omc服务端（守护进程）传递命令，由omc返回结果后再解析字符串为python对象。
2. 最耗时的操作是初始化ModelicaSystem对象中的buildModel()环节，该环节耗时原因是omc对modelica源码解析成C代码并调用gcc编译器进行编译生成.exe/elf可执行文件。
3. simulate()函数实际上是复用了.exe/elf可执行文件，使用_excute_child()起子进程调用
4. setParameters()函数忽略不计

![](/assets/img-dark/content/blog/concurrent_tracer.png)
总结：
1. 每个子线程在初始化ModelicaSystem对象中起一个omc服务端，常理来说不会发生竞争状态，线程数量过多仍会报错
2. 每个子线程没有复用mod对象，导致最耗时的buildModel()环节占用了每个子线程一半以上的计算资源


\`\`\`mermaid

graph TD
    %% 定义样式
    classDef user fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;
    classDef app fill:#fff3e0,stroke:#e65100,stroke-width:2px;
    classDef comm fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef parser fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
    classDef ext fill:#424242,stroke:#000000,stroke-width:2px,color:#fff;
    classDef file fill:#fff9c4,stroke:#fbc02d,stroke-width:2px,stroke-dasharray: 5 5;

    %% 用户层
    UserScript[("User Script<br>(simulation.py)")]:::user

    %% Python 进程边界
    subgraph PythonProcess ["Python Process (OMPython)"]
        direction TB
        
        %% 应用层 (ModelicaSystem)
        subgraph AppLayer ["Application Layer (High-Level API)"]
            MS["ModelicaSystem"]:::app
            MS_Methods["Methods:<br>__init__ (Build)<br>setParameters<br>simulate"]:::app
        end

        %% 通信层 (Session)
        subgraph CommLayer ["Communication Layer (Transport)"]
            Session["OMCSessionZMQ<br>(or OMCSession)"]:::comm
            ZMQ_Socket["ZMQ REQ Socket"]:::comm
        end

        %% 解析层 (Parser)
        subgraph ParserLayer ["Parser Layer (Translation)"]
            Parser["OMTypedParser.py"]:::parser
            Grammar["PyParsing Grammar"]:::parser
        end
    end

    %% 外部进程/系统
    subgraph ExternalSystem ["External System (OS / Background)"]
        OMC_Daemon["omc (Daemon Process)<br>OpenModelica Compiler"]:::ext
        GCC["GCC / Clang<br>(C Compiler)"]:::ext
        
        subgraph FileSystem ["File System (Disk I/O)"]
            SourceFiles[".mo Source Files"]:::file
            TempFiles["Temp Files:<br>_override.txt<br>_init.xml<br>.csv inputs"]:::file
            Binaries["Binary Executable<br>(.exe / .elf)"]:::file
            Results["Result Files<br>(.mat / .csv)"]:::file
        end
    end

    %% 交互关系连线
    
    %% 1. 用户调用
    UserScript --> |"1. mod = ModelicaSystem(...)"| MS
    MS --- MS_Methods

    %% 2. 初始化与编译流程
    MS --> |"2. loadFile / buildModel"| Session
    Session --> |"3. sendExpression (String)"| ZMQ_Socket
    ZMQ_Socket <==> |"4. ZMQ Protocol (TCP/IPC)"| OMC_Daemon
    
    OMC_Daemon -.-> |"5. Read"| SourceFiles
    OMC_Daemon -.-> |"6. Generate C & Compile"| GCC
    GCC -.-> |"7. Write"| Binaries
    OMC_Daemon -.-> |"8. Generate"| TempFiles

    %% 3. 解析流程
    Session --> |"9. Raw Response String"| Parser
    Parser --- Grammar
    Parser --> |"10. Python Objects (Dict/Tuple)"| Session

    %% 4. 仿真流程 (瓶颈所在)
    UserScript --> |"11. mod.simulate()"| MS
    MS --> |"12. Write Override Params"| TempFiles
    MS -- "13. subprocess.Popen()" --> Binaries
    Binaries -.-> |"14. Read Params"| TempFiles
    Binaries -.-> |"15. Write Results"| Results
    
    %% 5. 结果读取
    UserScript --> |"16. Read Results (Pandas/Scipy)"| Results

    %% 连接 Session 和 App
    MS o--o Session

\`\`\`

#### OMPython代码剖析
通过阅读 \`OMPython\` 库的源代码，发现其底层架构设计并不适合高频、短周期的海量并发任务。以下是针对核心组件和方法的源码级性能分析：

**1. 架构设计：客户端-服务器 (Client-Server) 通信**

OMPython 本质上是一个“瘦客户端”，它通过 **ZeroMQ (ZMQ)** 或 CORBA 协议与后台的 OpenModelica 编译器 (OMC) 守护进程进行通信。
* **通信开销**：每一次 API 调用（如 \`sendExpression\`），都需要将 Python 字符串序列化，通过 Socket 发送给 OMC，OMC 执行后再将结果序列化传回。
* **解析开销**：接收到的结果通常是 Modelica 语法的字符串（如 \`{1.0, 2.0}\`），需要通过 \`OMTypedParser.py\` 进行正则解析和类型转换。对于高频调用，这种“字符串<->对象”的转换占据了大量 CPU 时间。
* **并发缺陷**：\`OMCSessionZMQ\` 类中的 Socket 连接并不是线程安全的。TRICYS 尝试在多线程 (\`ThreadPoolExecutor\`) 中并发调用同一个或多个 Session，直接导致了底层的 \`libzmq\` 断言失败和程序崩溃。

**2. \`ModelicaSystem(...)\`：昂贵的初始化**

实例化了一个新的 \`ModelicaSystem\` 对象不仅是简单的对象创建，而是包含了完整的“编译流水线”：
* **加载与解析**：调用 \`loadFile\` 和 \`loadModel\` 将模型源码读入内存。
* **构建 (Build)**：调用 \`buildModel\` API。这会触发 C 代码生成和 GCC/Clang 编译，生成可执行文件 (\`.exe\`) 和 XML 初始化文件。
* **XML 解析**：调用 \`xmlparse()\` 方法，解析生成的 \`_init.xml\` 文件，将其中的数千个变量映射到 Python 字典中。
* **性能结论**：这是一个极度消耗 CPU 和 I/O 的操作。在循环或并发任务中重复执行此步骤是 TRICYS 最大的性能杀手。

**3. \`setParameters(...)\`：轻量级的字典操作**

与直觉相反，\`setParameters\` 方法本身并不与 OMC 通信，也不会触发重编译，因此**不是性能瓶颈**。
* **源码逻辑**：该方法仅将用户传入的参数键值对更新到 \`self.overridevariables\` 这个 Python 字典中。
* **性能结论**：该操作是纯内存操作，耗时极短（微秒级），可以放心高频使用。

**4. \`simulate(...)\`：隐蔽的 I/O 瓶颈**

虽然 \`simulate\` 方法复用了已编译的 \`.exe\` 文件（避免了重编译），但其源码实现中包含大量低效的文件 I/O 操作，在大规模并发下引发“I/O 风暴”：
* **Override 文件写入**：每次仿真前，它会将 \`self.overridevariables\` 中的所有参数写入一个临时的 \`_override.txt\` 文件。硬盘读写速度远慢于内存传参。
* **CSV 输入生成**：如果涉及输入变量，会调用 \`createCSVData()\` 将数据写入 CSV 文件。
* **性能结论**：\`simulate\` 的瓶颈在于“文件传参”机制。在 180 万次任务中，这会导致 180 万次小文件的创建、写入和关闭，严重拖慢整体速度。

#### 改进思路

  * **顺序执行**：改进空间有限，受限于单核性能，已经复用了.exe执行文件。
  * **并发执行**：改进空间极大。核心策略是 **"Compile Once, Run Many"（编译一次，运行多次）**。
      * **剥离 OMPython**：不再在 Worker 中实例化 \`ModelicaSystem\`。
      * **直接调用 EXE**：主进程编译一次获取 \`.exe\` 路径，Worker 进程通过 \`subprocess\` 直接调用该 EXE，并通过命令行参数 \`-override\` 传参，彻底绕过 OMC 和 ZMQ。

### 内存性能剖析

#### 存在的问题

1.  **结果合并的内存爆炸 (OOM Risk)**
    代码最后尝试 \`combined_df = pd.concat(all_dfs, axis=1)\`。对于 180 万个任务，这意味着试图将几 TB 的数据一次性读入内存，必然导致内存溢出。
2.  **线程池内存累积**
    \`ThreadPoolExecutor\` 中未及时清理的 Future 对象和结果路径列表也会占用可观内存。

#### 改进思路

  * **流式处理 (Streaming)**：放弃一次性合并。采用 **HDF5** 分层存储结构。
  * **即时归档与释放**：仿真完成一个任务 -\\> 读取结果 -\\> 写入 HDF5 -\\> **立即释放内存并删除临时文件**。

### 磁盘及 I/O 读写剖析

#### 存在的问题

1.  **CSV 格式低效**
    实测显示 CSV 格式体积是 MAT 格式的 **2 倍以上**（135MB vs 72MB）。15.6 TB 的总写入量会耗尽磁盘寿命并阻塞 I/O。
2.  **小文件风暴**
    180 万次任务会产生数百万个临时文件（CSV, MAT, XML, LOG），频繁的创建与删除操作是 NTFS 文件系统的噩梦。
3.  **Log 日志输出**
    过高的日志级别（INFO）在高频循环中会产生大量 I/O 开销。

#### 改进思路

  * **二进制格式**：全流程改用 OpenModelica 默认的 \`.mat\` 格式，体积减半。
  * **HDF5 压缩**：最终存储采用 HDF5 (Blosc 压缩)，预计可将最终体积压缩至 **3 TB** 左右。
  * **物理隔离**：系统/临时文件与数据存储分盘处理。

## 改进计划

### 短期计划（2-3周）
#### 1\\. 核心架构升级

  * **废弃 \`ModelicaSystem\` 循环调用**：仅在脚本开始时使用 \`ModelicaSystem\` 进行**一次**模型编译 (\`buildModel\`)，获取 \`.exe\` 文件路径。
  * **实现 \`subprocess\` 调度器**：
      * 编写轻量级 Worker 函数，仅接收参数字典和 EXE 路径。
      * 构造命令行指令：\`./CFEDR_Cycle.exe -override param1=val1,param2=val2 -r result.mat\`。
      * 使用 \`ProcessPoolExecutor\` (多进程) 替代 \`ThreadPoolExecutor\` (多线程)，彻底根治 ZeroMQ 崩溃问题。
      * 引入 **License 感知的限流机制**：若商业软件 Token 有限，需限制 \`max_workers\` 并增加重试逻辑。

#### 2\\. 数据流优化

  * **输出格式变更**：将 \`outputFormat=csv\` 改为 \`mat\`。
  * **流式归档**：主进程使用 \`pd.HDFStore\`，在任务完成的瞬间读取 MAT，写入 HDF5，并**立即删除源文件**。

### 长期计划 

#### 3\\. 任务级缓存机制（代理机制）

  *   **动作:** 在任务执行器中增加一个缓存层（代理层）。
  *   **实现:** 在执行每个 \`job_params\` 对应的任务前，先根据其参数内容生成一个唯一的哈希值（或字符串标识）。检查结果目录中是否存在与此哈希对应的结果文件。如果存在，则直接跳过该任务的仿真，复用已有结果。
  *   **收益:** 避免重复运行完全相同的仿真任务，在调试或多次运行相似分析时节省大量时间与计算资源。

## 硬件配置清单

基于 180 万任务量及 Windows 环境下 Aspen/COMSOL 协同仿真的需求，推荐以下配置：

| 组件 | 核心参数指标建议 | 关键理由 |
| :--- | :--- | :--- |
| **CPU** | **架构**：双路（Dual Socket）服务器架构<br>**核心数**：总计 **128 核 / 256 线程** (或更高，如 192核)<br>**主频**：全核满载频率 ≥ 3.0 GHz<br>**PCIe通道**：128条 PCIe 4.0/5.0 通道 | **License 充足意味着“核心数 = 生产力”**。双路 CPU 能提供极致的线程密度，配合您的 Python \`multiprocessing\`，可以同时开启 200+ 个仿真进程，比单路工作站快 3-4 倍。大量的 PCIe 通道用于喂饱高速硬盘。 |
| **内存** | **容量**：**512 GB** (推荐) 或 **1 TB**<br>**类型**：DDR5 ECC Registered (RDIMM)<br>**通道**：**12 通道** (必须插满所有通道) | 并发跑 200 个 Aspen/COMSOL 实例会消耗惊人的内存（每个实例约 1-2GB）；且双路 CPU 需要巨大的内存带宽来避免数据传输瓶颈。**512GB 是起步安全线**。 |
| **硬盘** | **容量**：**2 块 × 4TB (总物理容量 8TB)**<br>**类型**：**企业级 (Enterprise)** NVMe SSD (U.2 接口最佳)<br>**耐用度**：**DWPD ≥ 3** (写入密集型)<br>**IOPS**：随机写入 \\> 200,000 | 在高并发下，200 个进程同时写日志和结果，I/O 压力是之前的数倍。**必须选用高耐用度 (Write Intensive)** 的企业盘。建议物理隔离：盘A做系统/临时交换，盘B做 HDF5 最终存储。 |
| **GPU** | **显存**：**16 GB** (或 24 GB) GDDR6<br>**类型**：中高端专业绘图卡<br>**驱动**：支持 OpenGL / DirectX 专业驱动 | 虽然主要靠 CPU 计算，但在 200 个并发任务后台运行时，如果你需要通过远程桌面查看某个任务的图形结果，大显存显卡能保证系统界面不卡顿、不黑屏。 |
| **系统** | **版本**：**Windows Server 2022 (64位)**<br>**授权**：数据中心版 (Datacenter) 或 标准版 (Standard) | 只有 Server 版操作系统能完美调度双路 CPU 的 NUMA 架构，并稳定管理数百个后台进程而不强制休眠或重启。 |

`,No=`---
url: "https://vitejs.dev"
shortname: "Vite"
description: "Next Generation Frontend Tooling."
date: "2023-01-02"
---
`,Bo=`---
url: "https://vuejs.org"
shortname: "Vue.js"
description: "The Progressive JavaScript Framework."
date: "2023-01-01"
---
`,jo=`---
title: A Fresh Start
date: 2026-01-01
weather: Sunny
mood: Hopeful
description: First day of the new year, embracing new challenges.
---

Today marks the beginning of 2026. The morning sun was exceptionally bright, casting long shadows across the quiet street. It feels like the perfect time to reset and focus on the goals ahead.

I spent the morning organizing my workspace and reflecting on the past year. There's so much potential waiting to be untapped.
`,Go=`---
title: 新年新气象
date: 2026-01-01
weather: 晴朗
mood: 充满希望
description: 2026年的第一天，万象更新。
---

今天是2026年的第一天。清晨的阳光格外明媚，洒在安静的街道上。感觉是时候重新出发，专注于眼前的目标了。

我花了一上午整理工作区，回顾了过去的一年。未来充满了无限可能，等待我去探索。
`,Vo=`---
title: "Wasker Template Theme"
date: "2025-12-25"
client: "Archived"
description: "A minimalist, high-performance, and beautifully designed Vue 3 portfolio and blog theme."
---

# 📂 Project Background

> **wasker** was originally a free pure HTML static site, which was difficult to extend. Therefore, I refactored it into the **vue_template** project, aiming to leverage **Vue 3** features and the **Vite** build tool. This created a highly customizable Markdown-based frontend project that supports one-click deployment via **GitHub Actions**.

🔗 **Open Source**: [github.com/couuas/wasker](https://github.com/couuas/wasker/)

---

# 🛠️ Feature List

## 1️⃣ wasker_static_template (Vanilla Static Template)
> A portfolio template built with native **HTML/JS**, designed to provide a smooth Single Page Application (SPA) experience without the complexity of heavy frameworks.

*   **Tech Stack**: \`HTML5\`, \`CSS3\`, \`JavaScript (ES6)\`, \`Bootstrap Grid\` (Grid only), \`GSAP\`, \`Swup.js\`, \`Swiper.js\`, \`Isotope\`, \`Fancybox\`.
*   **Core Features**:
    *   **SPA Experience**: Uses \`Swup.js\` for seamless navigation without full page reloads.
    *   **High-Performance Animation**: Integrated \`GSAP\` and \`ScrollTrigger\` for entrance animations, parallax effects, and smooth transitions.
    *   **Responsive Layout**: Built on \`Bootstrap Grid\`, fully optimized for mobile, tablet, and desktop.
    *   **Portfolio Filtering**: Integrated \`Isotope\` for dynamic category filtering and masonry layouts.
    *   **Lightbox Gallery**: Integrated \`Fancybox\` for immersive image and video previews.
    *   **Touch Slider**: Uses \`Swiper.js\` for smooth service cards or testimonials.
    *   **Pure Dark Mode**: Pre-configured professional dark UI for a premium visual experience.
    *   **Smooth Scrolling**: Optimized internal anchor jumps via \`smooth-scroll.js\`.

---

## 2️⃣ wasker_vue_template (Vue 3 Driven Template)
> The advanced version of \`wasker\`, refactored with **Vue 3 + Vite**, introducing a modern development architecture and content management solution.

*   **Tech Stack**: \`Vue 3 (Composition API)\`, \`Vite\`, \`Pinia\`, \`GSAP\`, \`Markdown-it\`, \`Highlight.js\`.
*   **Core Features**:
    *   **Markdown-Driven Content (CMS)**:
        *   **Database-Free Management**: Blogs, portfolios, links, and profiles are driven entirely by \`.md\` files.
        *   **Auto-Routing**: Routes are automatically generated based on the \`src/content/\` directory structure.
    *   **Efficient State Management**: Uses \`Pinia\` to manage global state (e.g., sidebar, data loading).
    *   **Enhanced Animation**:
        *   Integrated \`GSAP\` for natural page transitions.
        *   Supports typewriter effects and delicate component entrance animations.
    *   **Smart Layout System**:
        *   **Dynamic Sidebar**: Personal information is rendered dynamically from the \`profile.md\` Frontmatter.
        *   **Responsive Sidebar**: Deeply optimized mobile navigation.
    *   **Auto-Categorization**: Blogs and projects are automatically tagged based on their physical folder structure.
    *   **RSS Support**: Built-in script to generate \`rss.xml\` automatically during the build process.
    *   **Modern Dev Experience**: Benefits from \`Vite\`'s Instant Hot Module Replacement (HMR) and modular component development.

---

# 📈 Progress Recap

*(No detailed recap available yet)*

---

# 🚀 Future Roadmap

> [!NOTE]
> This version is archived. For future development and feature evolutions, please follow **[wasker_vue](./wasker_vue.md)**.
`,Uo=`---
title: "Wasker Vue Site"
date: "2025-12-25"
client: "Open Source"
description: "An ultimate Vue 3 personal site featuring 3D galaxy interaction, AI-enhanced experiences, and global routing optimization."
---

# 📂 Project Background

> From the [waker_static_template](./wasker_tempalte.md) pure static template to the [wasker_vue_template](./wasker_tempalte.md) Vue 3 driven template, I aimed to build a modern personal site, shifting the focus from simple display to **content-driven** architecture and knowledge base applications.

🔗 **Demo Site**: [couuas.pp.ua](https://couuas.pp.ua)

---

# 🛠️ Feature List

This is the **ultimate production version** of \`wasker\`, deeply integrating **3D interactive visuals**, **AI intelligent enhancements**, and a **fully automated multi-platform distribution and routing optimization** system on top of the **Vue 3** architecture.

### 💻 Tech Stack
\`Vue 3\`, \`Vite\`, \`Three.js\`, \`3D-Force-Graph\`, \`Telegram Proxy\`, \`Cloudflare Workers & Pages\`, \`Vercel\`, \`GitHub Actions\`

### 🚀 Core Features
*   **✨ 3D Galaxy System**: Built with \`Three.js\` and \`3d-force-graph\` to create dynamic data galaxies, supporting node interaction and \`GalaxyBottomSheet\` responsive panels.
*   **🌍 Multi-Platform Automated Deployment**:
    *   **Single Build Source**: Unified CI/CD execution via \`GitHub Actions\`.
    *   **Global Tri-Center Distribution**: Automatically synced to **Cloudflare Pages**, **Vercel Edge**, and **GitHub Pages** to eliminate single points of failure.
*   **⚡ Smart Gateway**: Powered by \`gateway.js\` (Cloudflare Worker). Concurrently probes node latency upon entry and automatically routes to the optimal path.
*   **🤖 Integrated AI Assistant**: Built-in \`TheAiAssistant\` component providing real-time intelligent guidance and interactive Q&A.
*   **🛡️ Secure Communication Proxy**: Uses \`Cloudflare Workers\` to proxy backend requests, achieving zero-key exposure for secure message pushing (e.g., Telegram forms).
*   **📄 Media & Automation Enhancements**: Embedded PDF preview (\`vue-pdf-embed\`) and automated generation of RSS feeds and graph data during build.

---

# 📈 Progress Recap

*(No detailed recap available yet)*

---

# 🚀 Future Roadmap

> [!TIP]
> Currently exploring deeper **AI Agent** integration and automated synchronization solutions for personal knowledge bases. Stay tuned!
`,Ho=`---
title: "Wasker Template Theme"
date: "2025-12-25"
client: "Archived"
description: "一个极简、高性能且富有设计感的 Vue 3 作品集与博客主题。"
---

# 📂 项目来源（背景）

> **wasker** 原来是一个免费纯 HTML 静态站点，扩展非常麻烦。因此，我对该站进行了重构，推出了 **vue_template** 项目，旨在利用 **Vue 3** 特性及 **Vite** 构建工具，开发一个可二次开发的 Markdown 渲染前端项目，并支持通过 **GitHub Actions** 实现一键演示部署。

🔗 **开源地址**：[github.com/couuas/wasker](https://github.com/couuas/wasker/)

---

# 🛠️ 功能清单（展示）

## 1️⃣ wasker_static_template (原生静态模板)
> 这是一个基于原生 **HTML/JS** 构建的个人作品集模板，旨在不使用复杂框架的情况下提供流畅的单页应用 (SPA) 体验。

*   **技术栈**: \`HTML5\`, \`CSS3\`, \`JavaScript (ES6)\`, \`Bootstrap Grid\` (仅网格系统), \`GSAP\`, \`Swup.js\`, \`Swiper.js\`, \`Isotope\`, \`Fancybox\`。
*   **核心功能**:
    *   **无刷新页面跳转 (SPA 体验)**: 使用 \`Swup.js\` 实现逻辑上的单页导航，页面切换无需全页刷新。
    *   **高性能动画**: 集成 \`GSAP\` 和 \`ScrollTrigger\`，支持元素入场动画、视差滚动和平滑过渡。
    *   **响应式布局**: 基于 \`Bootstrap Grid\` 系统，完美适配手机、平板及桌面端。
    *   **作品集过滤**: 集成 \`Isotope\` 插件，支持按分类动态过滤和瀑布流布局。
    *   **灯箱画廊**: 集成 \`Fancybox\`，用于图片和视频的沉浸式预览。
    *   **触摸滑动器**: 使用 \`Swiper.js\` 实现服务卡片或评论部分的流畅滑动。
    *   **纯暗黑模式设计**: 预设专业深色 UI 风格，视觉体验极佳。
    *   **平滑滚动**: 通过 \`smooth-scroll.js\` 优化内部锚点跳转体验。

---

## 2️⃣ wasker_vue_template (Vue 3 驱动模板)
> 这是 \`wasker\` 的进阶版，采用 **Vue 3 + Vite** 重构，引入了更现代的开发架构和内容管理方案。

*   **技术栈**: \`Vue 3 (Composition API)\`, \`Vite\`, \`Pinia\`, \`GSAP\`, \`Markdown-it\`, \`Highlight.js\`。
*   **核心功能**:
    *   **Markdown 内容驱动 (CMS)**:
        *   **免数据库管理**: 博客、作品集、友链和个人简介完全由 \`.md\` 文件驱动。
        *   **自动化路由**: 系统根据 \`src/content/\` 目录结构自动生成路由。
    *   **高效状态管理**: 使用 \`Pinia\` 统一管理应用状态（如侧边栏、数据加载等）。
    *   **增强的动画系统**:
        *   集成 \`GSAP\` 实现自然的页面切换。
        *   支持打字机特效和细腻的组件入场动画。
    *   **智能布局系统**:
        *   **动态右侧栏**: 个人信息直接从 \`profile.md\` 的 Frontmatter 中动态渲染。
        *   **响应式侧边栏**: 深度优化的移动端导航体验。
    *   **自动化分类**: 博客和作品集根据物理文件夹自动识别并应用分类标签。
    *   **RSS 订阅支持**: 内置脚本，在构建时自动根据博客内容生成 \`rss.xml\`。
    *   **现代化开发者体验**: 得益于 \`Vite\` 的极速热更新 (HMR) 和模块化组件开发。

---

# 📈 发展路径（复盘）

*(暂无详细复盘内容)*

---

# 🚀 未来规划（展望）

> [!NOTE]
> 该版本已归档，后续开发计划与功能演进请关注 **[wasker_vue](./wasker_vue.md)**。
`,qo=`---
title: "Wasker Vue Site"
date: "2025-12-25"
client: "Open Source"
description: "融合 3D 星系交互与 AI 增强体验，具备全球感知优选能力的 Vue 3 终极个人站。"
---

# 📂 项目来源（背景）

> 从 [waker_static_template](./wasker_tempalte.md) 纯静态模板到 [wasker_vue_template](./wasker_tempalte.md) Vue 3 驱动模板，我希望在该基础上构建一个现代化的个人站点，开发重心从页面展示向**内容驱动**进行衔接，转向知识库的搭建及应用。

🔗 **演示站点**：[couuas.pp.ua](https://couuas.pp.ua)

---

# 🛠️ 功能清单（展示）

这是 \`wasker\` 的**终极实战版本**，在 **Vue 3** 架构基础上深度集成了 **3D 交互视觉**、**AI 智能增强** 以及 **全自动化多平台分发与路由优选** 系统。

### 💻 技术栈
\`Vue 3\`, \`Vite\`, \`Three.js\`, \`3D-Force-Graph\`, \`Telegram Proxy\`, \`Cloudflare Workers & Pages\`, \`Vercel\`, \`GitHub Actions\`

### 🚀 核心功能
*   **✨ 3D 交互星系 (Galaxy System)**: 采用 \`Three.js\` 与 \`3d-force-graph\` 构建动态数据星系，支持节点交互与 \`GalaxyBottomSheet\` 响应式面板。
*   **🌍 自动化多站并行部署 (Multi-Platform Deploy)**:
    *   **单一构建源**: 使用 \`GitHub Actions\` 统一执行 CI/CD。
    *   **全球三中心分发**: 自动同步至 **Cloudflare Pages**、**Vercel Edge** 和 **GitHub Pages**，消除单点故障。
*   **⚡ 智能优选网关 (Smart Gateway)**: 基于 \`gateway.js\` (Cloudflare Worker) 实现。进入主站时并发探测各节点延迟，自动路由至最优线路。
*   **🤖 集成 AI 助手 (TheAiAssistant)**: 内置专门的 AI 助手组件，提供实时的智能引导与交互问答能力。
*   **🛡️ 安全通信代理**: 通过 \`Cloudflare Workers\` 代理后端请求，实现前端零密钥暴露的安全消息推送（如 Telegram 表单）。
*   **📄 媒体与自动化增强**: 内置 PDF 在线预览 (\`vue-pdf-embed\`)，支持构建时自动生成 RSS 订阅源与关联图谱。

---

# 📈 发展路径（复盘）

*(暂无详细复盘内容)*

---

# 🚀 未来规划（展望）

> [!TIP]
> 正在探索更深层次的 **AI Agent** 集成与个人知识库的自动化同步方案，敬请期待。
`,Jt=`---
name: "COUUAS"
roles: [ "Full Stack Developer", "SPEC-Coding Practitioner", "Nuclear Safety Software Engineer","Open Source Project Enthusiast","Dreamer 😊"]
avatar: "/assets/img-dark/ui/avatar.png"
banner: "/assets/img-dark/ui/banner1.jpg"

services:
  - title: "Full Stack Development"
    description: "Expertise in the Vue.js and Python ecosystems. I build robust full-stack applications, from intricate interactive frontends to high-performance APIs, ensuring stability for mission-critical logic."
    link: "/contact"
  - title: "SPEC-Coding Solutions"
    description: "Implementing structured SPEC-Coding methodologies to manage complex logic. I deliver clean, maintainable, and highly scalable architectures tailored for industrial-grade software."
    link: "/contact"
  - title: "Nuclear Digital Twin"
    description: "Specializing in the Tritium Fuel Cycle. I develop high-fidelity digital twins that provide precise simulation, real-time monitoring, and safety assessments for complex nuclear processes."
    link: "/contact"
  - title: "Scientific Visualization"
    description: "Transforming complex industrial data into intuitive 3D experiences. I bridge the gap between nuclear engineering and modern web tech to create high-impact, data-driven visual solutions."
    link: "/contact"

languages:
  - name: "Chinese"
    level: "Native"
    percent: 100
  - name: "English"
    level: "75%"
    percent: 75

skills:
  # --- Core Development Stack ---
  - name: "Vue.js / Vite"
    percent: 95
  - name: "Python / FastAPI"
    percent: 90
  - name: "Node.js"
    percent: 75

  # --- Domain Expertise ---
  - name: "Digital Twin / Three.js"
    percent: 85
  - name: "Nuclear Safety Engineering"
    percent: 90
  - name: "SPEC-Coding Standards"
    percent: 95


education:
  - title: "USC，Software Engineering"
    year: "2016 - 2020"
    description: "Repellendus minima repellat fuga tempora impedit alias dolores odit id, placeat ut officia dicta."
    certificate: ""
  - title: "USC，Nuclear Energy Engineering"
    year: "2022 - 2025"
    description: "Dolore molestias rerum voluptate quas laborum perferendis iste omnis ipsam velit eius architecto quibusdam. Recusandae unde minima officiis dolore."
    certificate: ""

work:
  - title: "Institute of Energy, Hefei Comprehensive National Science Center"
    year: "2025 - Today"
    description: "Praesentium minus dolores reprehenderit doloremque suscipit dolore animi deleniti expedita, soluta beatae! Voluptatibus, cupiditate earum facilis. Quae, dolores!"

footer:
  copyright: "©2025. All rights reserved."
  designer: "COUUAS"
  designer_url: "https://couuas.pp.ua"
---`;var En={exports:{}},ge={},on={},We={},Zt;function dn(){if(Zt)return We;Zt=1;function n(o){return typeof o>"u"||o===null}function t(o){return typeof o=="object"&&o!==null}function l(o){return Array.isArray(o)?o:n(o)?[]:[o]}function i(o,f){var r,c,d,p;if(f)for(p=Object.keys(f),r=0,c=p.length;r<c;r+=1)d=p[r],o[d]=f[d];return o}function a(o,f){var r="",c;for(c=0;c<f;c+=1)r+=o;return r}function m(o){return o===0&&Number.NEGATIVE_INFINITY===1/o}return We.isNothing=n,We.isObject=t,We.toArray=l,We.repeat=a,We.isNegativeZero=m,We.extend=i,We}var $n,Xt;function wn(){if(Xt)return $n;Xt=1;function n(t,l){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=l,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(l){var i=this.name+": ";return i+=this.reason||"(unknown reason)",!l&&this.mark&&(i+=" "+this.mark.toString()),i},$n=n,$n}var Wn,ei;function $o(){if(ei)return Wn;ei=1;var n=dn();function t(l,i,a,m,o){this.name=l,this.buffer=i,this.position=a,this.line=m,this.column=o}return t.prototype.getSnippet=function(i,a){var m,o,f,r,c;if(!this.buffer)return null;for(i=i||4,a=a||75,m="",o=this.position;o>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(o-1))===-1;)if(o-=1,this.position-o>a/2-1){m=" ... ",o+=5;break}for(f="",r=this.position;r<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(r))===-1;)if(r+=1,r-this.position>a/2-1){f=" ... ",r-=5;break}return c=this.buffer.slice(o,r),n.repeat(" ",i)+m+c+f+`
`+n.repeat(" ",i+this.position-o+m.length)+"^"},t.prototype.toString=function(i){var a,m="";return this.name&&(m+='in "'+this.name+'" '),m+="at line "+(this.line+1)+", column "+(this.column+1),i||(a=this.getSnippet(),a&&(m+=`:
`+a)),m},Wn=t,Wn}var zn,ni;function Se(){if(ni)return zn;ni=1;var n=wn(),t=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],l=["scalar","sequence","mapping"];function i(m){var o={};return m!==null&&Object.keys(m).forEach(function(f){m[f].forEach(function(r){o[String(r)]=f})}),o}function a(m,o){if(o=o||{},Object.keys(o).forEach(function(f){if(t.indexOf(f)===-1)throw new n('Unknown option "'+f+'" is met in definition of "'+m+'" YAML type.')}),this.tag=m,this.kind=o.kind||null,this.resolve=o.resolve||function(){return!0},this.construct=o.construct||function(f){return f},this.instanceOf=o.instanceOf||null,this.predicate=o.predicate||null,this.represent=o.represent||null,this.defaultStyle=o.defaultStyle||null,this.styleAliases=i(o.styleAliases||null),l.indexOf(this.kind)===-1)throw new n('Unknown kind "'+this.kind+'" is specified for "'+m+'" YAML type.')}return zn=a,zn}var Yn,ti;function fn(){if(ti)return Yn;ti=1;var n=dn(),t=wn(),l=Se();function i(o,f,r){var c=[];return o.include.forEach(function(d){r=i(d,f,r)}),o[f].forEach(function(d){r.forEach(function(p,h){p.tag===d.tag&&p.kind===d.kind&&c.push(h)}),r.push(d)}),r.filter(function(d,p){return c.indexOf(p)===-1})}function a(){var o={scalar:{},sequence:{},mapping:{},fallback:{}},f,r;function c(d){o[d.kind][d.tag]=o.fallback[d.tag]=d}for(f=0,r=arguments.length;f<r;f+=1)arguments[f].forEach(c);return o}function m(o){this.include=o.include||[],this.implicit=o.implicit||[],this.explicit=o.explicit||[],this.implicit.forEach(function(f){if(f.loadKind&&f.loadKind!=="scalar")throw new t("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=i(this,"implicit",[]),this.compiledExplicit=i(this,"explicit",[]),this.compiledTypeMap=a(this.compiledImplicit,this.compiledExplicit)}return m.DEFAULT=null,m.create=function(){var f,r;switch(arguments.length){case 1:f=m.DEFAULT,r=arguments[0];break;case 2:f=arguments[0],r=arguments[1];break;default:throw new t("Wrong number of arguments for Schema.create function")}if(f=n.toArray(f),r=n.toArray(r),!f.every(function(c){return c instanceof m}))throw new t("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!r.every(function(c){return c instanceof l}))throw new t("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new m({include:f,explicit:r})},Yn=m,Yn}var Kn,ii;function Wo(){if(ii)return Kn;ii=1;var n=Se();return Kn=new n("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),Kn}var Qn,ri;function zo(){if(ri)return Qn;ri=1;var n=Se();return Qn=new n("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),Qn}var Jn,oi;function Yo(){if(oi)return Jn;oi=1;var n=Se();return Jn=new n("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),Jn}var Zn,si;function xt(){if(si)return Zn;si=1;var n=fn();return Zn=new n({explicit:[Wo(),zo(),Yo()]}),Zn}var Xn,li;function Ko(){if(li)return Xn;li=1;var n=Se();function t(a){if(a===null)return!0;var m=a.length;return m===1&&a==="~"||m===4&&(a==="null"||a==="Null"||a==="NULL")}function l(){return null}function i(a){return a===null}return Xn=new n("tag:yaml.org,2002:null",{kind:"scalar",resolve:t,construct:l,predicate:i,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),Xn}var et,ai;function Qo(){if(ai)return et;ai=1;var n=Se();function t(a){if(a===null)return!1;var m=a.length;return m===4&&(a==="true"||a==="True"||a==="TRUE")||m===5&&(a==="false"||a==="False"||a==="FALSE")}function l(a){return a==="true"||a==="True"||a==="TRUE"}function i(a){return Object.prototype.toString.call(a)==="[object Boolean]"}return et=new n("tag:yaml.org,2002:bool",{kind:"scalar",resolve:t,construct:l,predicate:i,represent:{lowercase:function(a){return a?"true":"false"},uppercase:function(a){return a?"TRUE":"FALSE"},camelcase:function(a){return a?"True":"False"}},defaultStyle:"lowercase"}),et}var nt,ci;function Jo(){if(ci)return nt;ci=1;var n=dn(),t=Se();function l(r){return 48<=r&&r<=57||65<=r&&r<=70||97<=r&&r<=102}function i(r){return 48<=r&&r<=55}function a(r){return 48<=r&&r<=57}function m(r){if(r===null)return!1;var c=r.length,d=0,p=!1,h;if(!c)return!1;if(h=r[d],(h==="-"||h==="+")&&(h=r[++d]),h==="0"){if(d+1===c)return!0;if(h=r[++d],h==="b"){for(d++;d<c;d++)if(h=r[d],h!=="_"){if(h!=="0"&&h!=="1")return!1;p=!0}return p&&h!=="_"}if(h==="x"){for(d++;d<c;d++)if(h=r[d],h!=="_"){if(!l(r.charCodeAt(d)))return!1;p=!0}return p&&h!=="_"}for(;d<c;d++)if(h=r[d],h!=="_"){if(!i(r.charCodeAt(d)))return!1;p=!0}return p&&h!=="_"}if(h==="_")return!1;for(;d<c;d++)if(h=r[d],h!=="_"){if(h===":")break;if(!a(r.charCodeAt(d)))return!1;p=!0}return!p||h==="_"?!1:h!==":"?!0:/^(:[0-5]?[0-9])+$/.test(r.slice(d))}function o(r){var c=r,d=1,p,h,g=[];return c.indexOf("_")!==-1&&(c=c.replace(/_/g,"")),p=c[0],(p==="-"||p==="+")&&(p==="-"&&(d=-1),c=c.slice(1),p=c[0]),c==="0"?0:p==="0"?c[1]==="b"?d*parseInt(c.slice(2),2):c[1]==="x"?d*parseInt(c,16):d*parseInt(c,8):c.indexOf(":")!==-1?(c.split(":").forEach(function(C){g.unshift(parseInt(C,10))}),c=0,h=1,g.forEach(function(C){c+=C*h,h*=60}),d*c):d*parseInt(c,10)}function f(r){return Object.prototype.toString.call(r)==="[object Number]"&&r%1===0&&!n.isNegativeZero(r)}return nt=new t("tag:yaml.org,2002:int",{kind:"scalar",resolve:m,construct:o,predicate:f,represent:{binary:function(r){return r>=0?"0b"+r.toString(2):"-0b"+r.toString(2).slice(1)},octal:function(r){return r>=0?"0"+r.toString(8):"-0"+r.toString(8).slice(1)},decimal:function(r){return r.toString(10)},hexadecimal:function(r){return r>=0?"0x"+r.toString(16).toUpperCase():"-0x"+r.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),nt}var tt,ui;function Zo(){if(ui)return tt;ui=1;var n=dn(),t=Se(),l=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function i(r){return!(r===null||!l.test(r)||r[r.length-1]==="_")}function a(r){var c,d,p,h;return c=r.replace(/_/g,"").toLowerCase(),d=c[0]==="-"?-1:1,h=[],"+-".indexOf(c[0])>=0&&(c=c.slice(1)),c===".inf"?d===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:c===".nan"?NaN:c.indexOf(":")>=0?(c.split(":").forEach(function(g){h.unshift(parseFloat(g,10))}),c=0,p=1,h.forEach(function(g){c+=g*p,p*=60}),d*c):d*parseFloat(c,10)}var m=/^[-+]?[0-9]+e/;function o(r,c){var d;if(isNaN(r))switch(c){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===r)switch(c){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===r)switch(c){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(n.isNegativeZero(r))return"-0.0";return d=r.toString(10),m.test(d)?d.replace("e",".e"):d}function f(r){return Object.prototype.toString.call(r)==="[object Number]"&&(r%1!==0||n.isNegativeZero(r))}return tt=new t("tag:yaml.org,2002:float",{kind:"scalar",resolve:i,construct:a,predicate:f,represent:o,defaultStyle:"lowercase"}),tt}var it,di;function ir(){if(di)return it;di=1;var n=fn();return it=new n({include:[xt()],implicit:[Ko(),Qo(),Jo(),Zo()]}),it}var rt,fi;function rr(){if(fi)return rt;fi=1;var n=fn();return rt=new n({include:[ir()]}),rt}var ot,mi;function Xo(){if(mi)return ot;mi=1;var n=Se(),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),l=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function i(o){return o===null?!1:t.exec(o)!==null||l.exec(o)!==null}function a(o){var f,r,c,d,p,h,g,C=0,I=null,z,Y,G;if(f=t.exec(o),f===null&&(f=l.exec(o)),f===null)throw new Error("Date resolve error");if(r=+f[1],c=+f[2]-1,d=+f[3],!f[4])return new Date(Date.UTC(r,c,d));if(p=+f[4],h=+f[5],g=+f[6],f[7]){for(C=f[7].slice(0,3);C.length<3;)C+="0";C=+C}return f[9]&&(z=+f[10],Y=+(f[11]||0),I=(z*60+Y)*6e4,f[9]==="-"&&(I=-I)),G=new Date(Date.UTC(r,c,d,p,h,g,C)),I&&G.setTime(G.getTime()-I),G}function m(o){return o.toISOString()}return ot=new n("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:i,construct:a,instanceOf:Date,represent:m}),ot}var st,pi;function es(){if(pi)return st;pi=1;var n=Se();function t(l){return l==="<<"||l===null}return st=new n("tag:yaml.org,2002:merge",{kind:"scalar",resolve:t}),st}function or(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var lt,hi;function ns(){if(hi)return lt;hi=1;var n;try{var t=or;n=t("buffer").Buffer}catch{}var l=Se(),i=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function a(r){if(r===null)return!1;var c,d,p=0,h=r.length,g=i;for(d=0;d<h;d++)if(c=g.indexOf(r.charAt(d)),!(c>64)){if(c<0)return!1;p+=6}return p%8===0}function m(r){var c,d,p=r.replace(/[\r\n=]/g,""),h=p.length,g=i,C=0,I=[];for(c=0;c<h;c++)c%4===0&&c&&(I.push(C>>16&255),I.push(C>>8&255),I.push(C&255)),C=C<<6|g.indexOf(p.charAt(c));return d=h%4*6,d===0?(I.push(C>>16&255),I.push(C>>8&255),I.push(C&255)):d===18?(I.push(C>>10&255),I.push(C>>2&255)):d===12&&I.push(C>>4&255),n?n.from?n.from(I):new n(I):I}function o(r){var c="",d=0,p,h,g=r.length,C=i;for(p=0;p<g;p++)p%3===0&&p&&(c+=C[d>>18&63],c+=C[d>>12&63],c+=C[d>>6&63],c+=C[d&63]),d=(d<<8)+r[p];return h=g%3,h===0?(c+=C[d>>18&63],c+=C[d>>12&63],c+=C[d>>6&63],c+=C[d&63]):h===2?(c+=C[d>>10&63],c+=C[d>>4&63],c+=C[d<<2&63],c+=C[64]):h===1&&(c+=C[d>>2&63],c+=C[d<<4&63],c+=C[64],c+=C[64]),c}function f(r){return n&&n.isBuffer(r)}return lt=new l("tag:yaml.org,2002:binary",{kind:"scalar",resolve:a,construct:m,predicate:f,represent:o}),lt}var at,vi;function ts(){if(vi)return at;vi=1;var n=Se(),t=Object.prototype.hasOwnProperty,l=Object.prototype.toString;function i(m){if(m===null)return!0;var o=[],f,r,c,d,p,h=m;for(f=0,r=h.length;f<r;f+=1){if(c=h[f],p=!1,l.call(c)!=="[object Object]")return!1;for(d in c)if(t.call(c,d))if(!p)p=!0;else return!1;if(!p)return!1;if(o.indexOf(d)===-1)o.push(d);else return!1}return!0}function a(m){return m!==null?m:[]}return at=new n("tag:yaml.org,2002:omap",{kind:"sequence",resolve:i,construct:a}),at}var ct,gi;function is(){if(gi)return ct;gi=1;var n=Se(),t=Object.prototype.toString;function l(a){if(a===null)return!0;var m,o,f,r,c,d=a;for(c=new Array(d.length),m=0,o=d.length;m<o;m+=1){if(f=d[m],t.call(f)!=="[object Object]"||(r=Object.keys(f),r.length!==1))return!1;c[m]=[r[0],f[r[0]]]}return!0}function i(a){if(a===null)return[];var m,o,f,r,c,d=a;for(c=new Array(d.length),m=0,o=d.length;m<o;m+=1)f=d[m],r=Object.keys(f),c[m]=[r[0],f[r[0]]];return c}return ct=new n("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:l,construct:i}),ct}var ut,yi;function rs(){if(yi)return ut;yi=1;var n=Se(),t=Object.prototype.hasOwnProperty;function l(a){if(a===null)return!0;var m,o=a;for(m in o)if(t.call(o,m)&&o[m]!==null)return!1;return!0}function i(a){return a!==null?a:{}}return ut=new n("tag:yaml.org,2002:set",{kind:"mapping",resolve:l,construct:i}),ut}var dt,_i;function bn(){if(_i)return dt;_i=1;var n=fn();return dt=new n({include:[rr()],implicit:[Xo(),es()],explicit:[ns(),ts(),is(),rs()]}),dt}var ft,bi;function os(){if(bi)return ft;bi=1;var n=Se();function t(){return!0}function l(){}function i(){return""}function a(m){return typeof m>"u"}return ft=new n("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:t,construct:l,predicate:a,represent:i}),ft}var mt,wi;function ss(){if(wi)return mt;wi=1;var n=Se();function t(m){if(m===null||m.length===0)return!1;var o=m,f=/\/([gim]*)$/.exec(m),r="";return!(o[0]==="/"&&(f&&(r=f[1]),r.length>3||o[o.length-r.length-1]!=="/"))}function l(m){var o=m,f=/\/([gim]*)$/.exec(m),r="";return o[0]==="/"&&(f&&(r=f[1]),o=o.slice(1,o.length-r.length-1)),new RegExp(o,r)}function i(m){var o="/"+m.source+"/";return m.global&&(o+="g"),m.multiline&&(o+="m"),m.ignoreCase&&(o+="i"),o}function a(m){return Object.prototype.toString.call(m)==="[object RegExp]"}return mt=new n("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:t,construct:l,predicate:a,represent:i}),mt}var pt,Si;function ls(){if(Si)return pt;Si=1;var n;try{var t=or;n=t("esprima")}catch{typeof window<"u"&&(n=window.esprima)}var l=Se();function i(f){if(f===null)return!1;try{var r="("+f+")",c=n.parse(r,{range:!0});return!(c.type!=="Program"||c.body.length!==1||c.body[0].type!=="ExpressionStatement"||c.body[0].expression.type!=="ArrowFunctionExpression"&&c.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function a(f){var r="("+f+")",c=n.parse(r,{range:!0}),d=[],p;if(c.type!=="Program"||c.body.length!==1||c.body[0].type!=="ExpressionStatement"||c.body[0].expression.type!=="ArrowFunctionExpression"&&c.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return c.body[0].expression.params.forEach(function(h){d.push(h.name)}),p=c.body[0].expression.body.range,c.body[0].expression.body.type==="BlockStatement"?new Function(d,r.slice(p[0]+1,p[1]-1)):new Function(d,"return "+r.slice(p[0],p[1]))}function m(f){return f.toString()}function o(f){return Object.prototype.toString.call(f)==="[object Function]"}return pt=new l("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:i,construct:a,predicate:o,represent:m}),pt}var ht,xi;function Pn(){if(xi)return ht;xi=1;var n=fn();return ht=n.DEFAULT=new n({include:[bn()],explicit:[os(),ss(),ls()]}),ht}var Ci;function as(){if(Ci)return on;Ci=1;var n=dn(),t=wn(),l=$o(),i=bn(),a=Pn(),m=Object.prototype.hasOwnProperty,o=1,f=2,r=3,c=4,d=1,p=2,h=3,g=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,C=/[\x85\u2028\u2029]/,I=/[,\[\]\{\}]/,z=/^(?:!|!!|![a-z\-]+!)$/i,Y=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function G(e){return Object.prototype.toString.call(e)}function R(e){return e===10||e===13}function M(e){return e===9||e===32}function O(e){return e===9||e===32||e===10||e===13}function L(e){return e===44||e===91||e===93||e===123||e===125}function j(e){var y;return 48<=e&&e<=57?e-48:(y=e|32,97<=y&&y<=102?y-97+10:-1)}function ne(e){return e===120?2:e===117?4:e===85?8:0}function Z(e){return 48<=e&&e<=57?e-48:-1}function ce(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function pe(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function _e(e,y,w){y==="__proto__"?Object.defineProperty(e,y,{configurable:!0,enumerable:!0,writable:!0,value:w}):e[y]=w}for(var K=new Array(256),W=new Array(256),E=0;E<256;E++)K[E]=ce(E)?1:0,W[E]=ce(E);function te(e,y){this.input=e,this.filename=y.filename||null,this.schema=y.schema||a,this.onWarning=y.onWarning||null,this.legacy=y.legacy||!1,this.json=y.json||!1,this.listener=y.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function X(e,y){return new t(y,new l(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function q(e,y){throw X(e,y)}function ke(e,y){e.onWarning&&e.onWarning.call(null,X(e,y))}var Re={YAML:function(y,w,D){var A,s,v;y.version!==null&&q(y,"duplication of %YAML directive"),D.length!==1&&q(y,"YAML directive accepts exactly one argument"),A=/^([0-9]+)\.([0-9]+)$/.exec(D[0]),A===null&&q(y,"ill-formed argument of the YAML directive"),s=parseInt(A[1],10),v=parseInt(A[2],10),s!==1&&q(y,"unacceptable YAML version of the document"),y.version=D[0],y.checkLineBreaks=v<2,v!==1&&v!==2&&ke(y,"unsupported YAML version of the document")},TAG:function(y,w,D){var A,s;D.length!==2&&q(y,"TAG directive accepts exactly two arguments"),A=D[0],s=D[1],z.test(A)||q(y,"ill-formed tag handle (first argument) of the TAG directive"),m.call(y.tagMap,A)&&q(y,'there is a previously declared suffix for "'+A+'" tag handle'),Y.test(s)||q(y,"ill-formed tag prefix (second argument) of the TAG directive"),y.tagMap[A]=s}};function Te(e,y,w,D){var A,s,v,_;if(y<w){if(_=e.input.slice(y,w),D)for(A=0,s=_.length;A<s;A+=1)v=_.charCodeAt(A),v===9||32<=v&&v<=1114111||q(e,"expected valid JSON character");else g.test(_)&&q(e,"the stream contains non-printable characters");e.result+=_}}function Be(e,y,w,D){var A,s,v,_;for(n.isObject(w)||q(e,"cannot merge mappings; the provided source object is unacceptable"),A=Object.keys(w),v=0,_=A.length;v<_;v+=1)s=A[v],m.call(y,s)||(_e(y,s,w[s]),D[s]=!0)}function xe(e,y,w,D,A,s,v,_){var b,k;if(Array.isArray(A))for(A=Array.prototype.slice.call(A),b=0,k=A.length;b<k;b+=1)Array.isArray(A[b])&&q(e,"nested arrays are not supported inside keys"),typeof A=="object"&&G(A[b])==="[object Object]"&&(A[b]="[object Object]");if(typeof A=="object"&&G(A)==="[object Object]"&&(A="[object Object]"),A=String(A),y===null&&(y={}),D==="tag:yaml.org,2002:merge")if(Array.isArray(s))for(b=0,k=s.length;b<k;b+=1)Be(e,y,s[b],w);else Be(e,y,s,w);else!e.json&&!m.call(w,A)&&m.call(y,A)&&(e.line=v||e.line,e.position=_||e.position,q(e,"duplicated mapping key")),_e(y,A,s),delete w[A];return y}function je(e){var y;y=e.input.charCodeAt(e.position),y===10?e.position++:y===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):q(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function fe(e,y,w){for(var D=0,A=e.input.charCodeAt(e.position);A!==0;){for(;M(A);)A=e.input.charCodeAt(++e.position);if(y&&A===35)do A=e.input.charCodeAt(++e.position);while(A!==10&&A!==13&&A!==0);if(R(A))for(je(e),A=e.input.charCodeAt(e.position),D++,e.lineIndent=0;A===32;)e.lineIndent++,A=e.input.charCodeAt(++e.position);else break}return w!==-1&&D!==0&&e.lineIndent<w&&ke(e,"deficient indentation"),D}function Oe(e){var y=e.position,w;return w=e.input.charCodeAt(y),!!((w===45||w===46)&&w===e.input.charCodeAt(y+1)&&w===e.input.charCodeAt(y+2)&&(y+=3,w=e.input.charCodeAt(y),w===0||O(w)))}function S(e,y){y===1?e.result+=" ":y>1&&(e.result+=n.repeat(`
`,y-1))}function U(e,y,w){var D,A,s,v,_,b,k,T,x=e.kind,B=e.result,P;if(P=e.input.charCodeAt(e.position),O(P)||L(P)||P===35||P===38||P===42||P===33||P===124||P===62||P===39||P===34||P===37||P===64||P===96||(P===63||P===45)&&(A=e.input.charCodeAt(e.position+1),O(A)||w&&L(A)))return!1;for(e.kind="scalar",e.result="",s=v=e.position,_=!1;P!==0;){if(P===58){if(A=e.input.charCodeAt(e.position+1),O(A)||w&&L(A))break}else if(P===35){if(D=e.input.charCodeAt(e.position-1),O(D))break}else{if(e.position===e.lineStart&&Oe(e)||w&&L(P))break;if(R(P))if(b=e.line,k=e.lineStart,T=e.lineIndent,fe(e,!1,-1),e.lineIndent>=y){_=!0,P=e.input.charCodeAt(e.position);continue}else{e.position=v,e.line=b,e.lineStart=k,e.lineIndent=T;break}}_&&(Te(e,s,v,!1),S(e,e.line-b),s=v=e.position,_=!1),M(P)||(v=e.position+1),P=e.input.charCodeAt(++e.position)}return Te(e,s,v,!1),e.result?!0:(e.kind=x,e.result=B,!1)}function N(e,y){var w,D,A;if(w=e.input.charCodeAt(e.position),w!==39)return!1;for(e.kind="scalar",e.result="",e.position++,D=A=e.position;(w=e.input.charCodeAt(e.position))!==0;)if(w===39)if(Te(e,D,e.position,!0),w=e.input.charCodeAt(++e.position),w===39)D=e.position,e.position++,A=e.position;else return!0;else R(w)?(Te(e,D,A,!0),S(e,fe(e,!1,y)),D=A=e.position):e.position===e.lineStart&&Oe(e)?q(e,"unexpected end of the document within a single quoted scalar"):(e.position++,A=e.position);q(e,"unexpected end of the stream within a single quoted scalar")}function Q(e,y){var w,D,A,s,v,_;if(_=e.input.charCodeAt(e.position),_!==34)return!1;for(e.kind="scalar",e.result="",e.position++,w=D=e.position;(_=e.input.charCodeAt(e.position))!==0;){if(_===34)return Te(e,w,e.position,!0),e.position++,!0;if(_===92){if(Te(e,w,e.position,!0),_=e.input.charCodeAt(++e.position),R(_))fe(e,!1,y);else if(_<256&&K[_])e.result+=W[_],e.position++;else if((v=ne(_))>0){for(A=v,s=0;A>0;A--)_=e.input.charCodeAt(++e.position),(v=j(_))>=0?s=(s<<4)+v:q(e,"expected hexadecimal character");e.result+=pe(s),e.position++}else q(e,"unknown escape sequence");w=D=e.position}else R(_)?(Te(e,w,D,!0),S(e,fe(e,!1,y)),w=D=e.position):e.position===e.lineStart&&Oe(e)?q(e,"unexpected end of the document within a double quoted scalar"):(e.position++,D=e.position)}q(e,"unexpected end of the stream within a double quoted scalar")}function le(e,y){var w=!0,D,A=e.tag,s,v=e.anchor,_,b,k,T,x,B={},P,J,ue,oe;if(oe=e.input.charCodeAt(e.position),oe===91)b=93,x=!1,s=[];else if(oe===123)b=125,x=!0,s={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),oe=e.input.charCodeAt(++e.position);oe!==0;){if(fe(e,!0,y),oe=e.input.charCodeAt(e.position),oe===b)return e.position++,e.tag=A,e.anchor=v,e.kind=x?"mapping":"sequence",e.result=s,!0;w||q(e,"missed comma between flow collection entries"),J=P=ue=null,k=T=!1,oe===63&&(_=e.input.charCodeAt(e.position+1),O(_)&&(k=T=!0,e.position++,fe(e,!0,y))),D=e.line,Ue(e,y,o,!1,!0),J=e.tag,P=e.result,fe(e,!0,y),oe=e.input.charCodeAt(e.position),(T||e.line===D)&&oe===58&&(k=!0,oe=e.input.charCodeAt(++e.position),fe(e,!0,y),Ue(e,y,o,!1,!0),ue=e.result),x?xe(e,s,B,J,P,ue):k?s.push(xe(e,null,B,J,P,ue)):s.push(P),fe(e,!0,y),oe=e.input.charCodeAt(e.position),oe===44?(w=!0,oe=e.input.charCodeAt(++e.position)):w=!1}q(e,"unexpected end of the stream within a flow collection")}function me(e,y){var w,D,A=d,s=!1,v=!1,_=y,b=0,k=!1,T,x;if(x=e.input.charCodeAt(e.position),x===124)D=!1;else if(x===62)D=!0;else return!1;for(e.kind="scalar",e.result="";x!==0;)if(x=e.input.charCodeAt(++e.position),x===43||x===45)d===A?A=x===43?h:p:q(e,"repeat of a chomping mode identifier");else if((T=Z(x))>=0)T===0?q(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):v?q(e,"repeat of an indentation width identifier"):(_=y+T-1,v=!0);else break;if(M(x)){do x=e.input.charCodeAt(++e.position);while(M(x));if(x===35)do x=e.input.charCodeAt(++e.position);while(!R(x)&&x!==0)}for(;x!==0;){for(je(e),e.lineIndent=0,x=e.input.charCodeAt(e.position);(!v||e.lineIndent<_)&&x===32;)e.lineIndent++,x=e.input.charCodeAt(++e.position);if(!v&&e.lineIndent>_&&(_=e.lineIndent),R(x)){b++;continue}if(e.lineIndent<_){A===h?e.result+=n.repeat(`
`,s?1+b:b):A===d&&s&&(e.result+=`
`);break}for(D?M(x)?(k=!0,e.result+=n.repeat(`
`,s?1+b:b)):k?(k=!1,e.result+=n.repeat(`
`,b+1)):b===0?s&&(e.result+=" "):e.result+=n.repeat(`
`,b):e.result+=n.repeat(`
`,s?1+b:b),s=!0,v=!0,b=0,w=e.position;!R(x)&&x!==0;)x=e.input.charCodeAt(++e.position);Te(e,w,e.position,!1)}return!0}function se(e,y){var w,D=e.tag,A=e.anchor,s=[],v,_=!1,b;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),b=e.input.charCodeAt(e.position);b!==0&&!(b!==45||(v=e.input.charCodeAt(e.position+1),!O(v)));){if(_=!0,e.position++,fe(e,!0,-1)&&e.lineIndent<=y){s.push(null),b=e.input.charCodeAt(e.position);continue}if(w=e.line,Ue(e,y,r,!1,!0),s.push(e.result),fe(e,!0,-1),b=e.input.charCodeAt(e.position),(e.line===w||e.lineIndent>y)&&b!==0)q(e,"bad indentation of a sequence entry");else if(e.lineIndent<y)break}return _?(e.tag=D,e.anchor=A,e.kind="sequence",e.result=s,!0):!1}function ie(e,y,w){var D,A,s,v,_=e.tag,b=e.anchor,k={},T={},x=null,B=null,P=null,J=!1,ue=!1,oe;for(e.anchor!==null&&(e.anchorMap[e.anchor]=k),oe=e.input.charCodeAt(e.position);oe!==0;){if(D=e.input.charCodeAt(e.position+1),s=e.line,v=e.position,(oe===63||oe===58)&&O(D))oe===63?(J&&(xe(e,k,T,x,B,null),x=B=P=null),ue=!0,J=!0,A=!0):J?(J=!1,A=!0):q(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,oe=D;else if(Ue(e,w,f,!1,!0))if(e.line===s){for(oe=e.input.charCodeAt(e.position);M(oe);)oe=e.input.charCodeAt(++e.position);if(oe===58)oe=e.input.charCodeAt(++e.position),O(oe)||q(e,"a whitespace character is expected after the key-value separator within a block mapping"),J&&(xe(e,k,T,x,B,null),x=B=P=null),ue=!0,J=!1,A=!1,x=e.tag,B=e.result;else if(ue)q(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=_,e.anchor=b,!0}else if(ue)q(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=_,e.anchor=b,!0;else break;if((e.line===s||e.lineIndent>y)&&(Ue(e,y,c,!0,A)&&(J?B=e.result:P=e.result),J||(xe(e,k,T,x,B,P,s,v),x=B=P=null),fe(e,!0,-1),oe=e.input.charCodeAt(e.position)),e.lineIndent>y&&oe!==0)q(e,"bad indentation of a mapping entry");else if(e.lineIndent<y)break}return J&&xe(e,k,T,x,B,null),ue&&(e.tag=_,e.anchor=b,e.kind="mapping",e.result=k),ue}function ve(e){var y,w=!1,D=!1,A,s,v;if(v=e.input.charCodeAt(e.position),v!==33)return!1;if(e.tag!==null&&q(e,"duplication of a tag property"),v=e.input.charCodeAt(++e.position),v===60?(w=!0,v=e.input.charCodeAt(++e.position)):v===33?(D=!0,A="!!",v=e.input.charCodeAt(++e.position)):A="!",y=e.position,w){do v=e.input.charCodeAt(++e.position);while(v!==0&&v!==62);e.position<e.length?(s=e.input.slice(y,e.position),v=e.input.charCodeAt(++e.position)):q(e,"unexpected end of the stream within a verbatim tag")}else{for(;v!==0&&!O(v);)v===33&&(D?q(e,"tag suffix cannot contain exclamation marks"):(A=e.input.slice(y-1,e.position+1),z.test(A)||q(e,"named tag handle cannot contain such characters"),D=!0,y=e.position+1)),v=e.input.charCodeAt(++e.position);s=e.input.slice(y,e.position),I.test(s)&&q(e,"tag suffix cannot contain flow indicator characters")}return s&&!Y.test(s)&&q(e,"tag name cannot contain such characters: "+s),w?e.tag=s:m.call(e.tagMap,A)?e.tag=e.tagMap[A]+s:A==="!"?e.tag="!"+s:A==="!!"?e.tag="tag:yaml.org,2002:"+s:q(e,'undeclared tag handle "'+A+'"'),!0}function Ge(e){var y,w;if(w=e.input.charCodeAt(e.position),w!==38)return!1;for(e.anchor!==null&&q(e,"duplication of an anchor property"),w=e.input.charCodeAt(++e.position),y=e.position;w!==0&&!O(w)&&!L(w);)w=e.input.charCodeAt(++e.position);return e.position===y&&q(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(y,e.position),!0}function we(e){var y,w,D;if(D=e.input.charCodeAt(e.position),D!==42)return!1;for(D=e.input.charCodeAt(++e.position),y=e.position;D!==0&&!O(D)&&!L(D);)D=e.input.charCodeAt(++e.position);return e.position===y&&q(e,"name of an alias node must contain at least one character"),w=e.input.slice(y,e.position),m.call(e.anchorMap,w)||q(e,'unidentified alias "'+w+'"'),e.result=e.anchorMap[w],fe(e,!0,-1),!0}function Ue(e,y,w,D,A){var s,v,_,b=1,k=!1,T=!1,x,B,P,J,ue;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,s=v=_=c===w||r===w,D&&fe(e,!0,-1)&&(k=!0,e.lineIndent>y?b=1:e.lineIndent===y?b=0:e.lineIndent<y&&(b=-1)),b===1)for(;ve(e)||Ge(e);)fe(e,!0,-1)?(k=!0,_=s,e.lineIndent>y?b=1:e.lineIndent===y?b=0:e.lineIndent<y&&(b=-1)):_=!1;if(_&&(_=k||A),(b===1||c===w)&&(o===w||f===w?J=y:J=y+1,ue=e.position-e.lineStart,b===1?_&&(se(e,ue)||ie(e,ue,J))||le(e,J)?T=!0:(v&&me(e,J)||N(e,J)||Q(e,J)?T=!0:we(e)?(T=!0,(e.tag!==null||e.anchor!==null)&&q(e,"alias node should not have any properties")):U(e,J,o===w)&&(T=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):b===0&&(T=_&&se(e,ue))),e.tag!==null&&e.tag!=="!")if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&q(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),x=0,B=e.implicitTypes.length;x<B;x+=1)if(P=e.implicitTypes[x],P.resolve(e.result)){e.result=P.construct(e.result),e.tag=P.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else m.call(e.typeMap[e.kind||"fallback"],e.tag)?(P=e.typeMap[e.kind||"fallback"][e.tag],e.result!==null&&P.kind!==e.kind&&q(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+P.kind+'", not "'+e.kind+'"'),P.resolve(e.result)?(e.result=P.construct(e.result),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):q(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):q(e,"unknown tag !<"+e.tag+">");return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||T}function Nn(e){var y=e.position,w,D,A,s=!1,v;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};(v=e.input.charCodeAt(e.position))!==0&&(fe(e,!0,-1),v=e.input.charCodeAt(e.position),!(e.lineIndent>0||v!==37));){for(s=!0,v=e.input.charCodeAt(++e.position),w=e.position;v!==0&&!O(v);)v=e.input.charCodeAt(++e.position);for(D=e.input.slice(w,e.position),A=[],D.length<1&&q(e,"directive name must not be less than one character in length");v!==0;){for(;M(v);)v=e.input.charCodeAt(++e.position);if(v===35){do v=e.input.charCodeAt(++e.position);while(v!==0&&!R(v));break}if(R(v))break;for(w=e.position;v!==0&&!O(v);)v=e.input.charCodeAt(++e.position);A.push(e.input.slice(w,e.position))}v!==0&&je(e),m.call(Re,D)?Re[D](e,D,A):ke(e,'unknown document directive "'+D+'"')}if(fe(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,fe(e,!0,-1)):s&&q(e,"directives end mark is expected"),Ue(e,e.lineIndent-1,c,!1,!0),fe(e,!0,-1),e.checkLineBreaks&&C.test(e.input.slice(y,e.position))&&ke(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Oe(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,fe(e,!0,-1));return}if(e.position<e.length-1)q(e,"end of the stream or a document separator is expected");else return}function xn(e,y){e=String(e),y=y||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var w=new te(e,y),D=e.indexOf("\0");for(D!==-1&&(w.position=D,q(w,"null byte is not allowed in input")),w.input+="\0";w.input.charCodeAt(w.position)===32;)w.lineIndent+=1,w.position+=1;for(;w.position<w.length-1;)Nn(w);return w.documents}function Cn(e,y,w){y!==null&&typeof y=="object"&&typeof w>"u"&&(w=y,y=null);var D=xn(e,w);if(typeof y!="function")return D;for(var A=0,s=D.length;A<s;A+=1)y(D[A])}function An(e,y){var w=xn(e,y);if(w.length!==0){if(w.length===1)return w[0];throw new t("expected a single document in the stream, but found more")}}function Bn(e,y,w){return typeof y=="object"&&y!==null&&typeof w>"u"&&(w=y,y=null),Cn(e,y,n.extend({schema:i},w))}function kn(e,y){return An(e,n.extend({schema:i},y))}return on.loadAll=Cn,on.load=An,on.safeLoadAll=Bn,on.safeLoad=kn,on}var Tn={},Ai;function cs(){if(Ai)return Tn;Ai=1;var n=dn(),t=wn(),l=Pn(),i=bn(),a=Object.prototype.toString,m=Object.prototype.hasOwnProperty,o=9,f=10,r=13,c=32,d=33,p=34,h=35,g=37,C=38,I=39,z=42,Y=44,G=45,R=58,M=61,O=62,L=63,j=64,ne=91,Z=93,ce=96,pe=123,_e=124,K=125,W={};W[0]="\\0",W[7]="\\a",W[8]="\\b",W[9]="\\t",W[10]="\\n",W[11]="\\v",W[12]="\\f",W[13]="\\r",W[27]="\\e",W[34]='\\"',W[92]="\\\\",W[133]="\\N",W[160]="\\_",W[8232]="\\L",W[8233]="\\P";var E=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function te(s,v){var _,b,k,T,x,B,P;if(v===null)return{};for(_={},b=Object.keys(v),k=0,T=b.length;k<T;k+=1)x=b[k],B=String(v[x]),x.slice(0,2)==="!!"&&(x="tag:yaml.org,2002:"+x.slice(2)),P=s.compiledTypeMap.fallback[x],P&&m.call(P.styleAliases,B)&&(B=P.styleAliases[B]),_[x]=B;return _}function X(s){var v,_,b;if(v=s.toString(16).toUpperCase(),s<=255)_="x",b=2;else if(s<=65535)_="u",b=4;else if(s<=4294967295)_="U",b=8;else throw new t("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+_+n.repeat("0",b-v.length)+v}function q(s){this.schema=s.schema||l,this.indent=Math.max(1,s.indent||2),this.noArrayIndent=s.noArrayIndent||!1,this.skipInvalid=s.skipInvalid||!1,this.flowLevel=n.isNothing(s.flowLevel)?-1:s.flowLevel,this.styleMap=te(this.schema,s.styles||null),this.sortKeys=s.sortKeys||!1,this.lineWidth=s.lineWidth||80,this.noRefs=s.noRefs||!1,this.noCompatMode=s.noCompatMode||!1,this.condenseFlow=s.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function ke(s,v){for(var _=n.repeat(" ",v),b=0,k=-1,T="",x,B=s.length;b<B;)k=s.indexOf(`
`,b),k===-1?(x=s.slice(b),b=B):(x=s.slice(b,k+1),b=k+1),x.length&&x!==`
`&&(T+=_),T+=x;return T}function Re(s,v){return`
`+n.repeat(" ",s.indent*v)}function Te(s,v){var _,b,k;for(_=0,b=s.implicitTypes.length;_<b;_+=1)if(k=s.implicitTypes[_],k.resolve(v))return!0;return!1}function Be(s){return s===c||s===o}function xe(s){return 32<=s&&s<=126||161<=s&&s<=55295&&s!==8232&&s!==8233||57344<=s&&s<=65533&&s!==65279||65536<=s&&s<=1114111}function je(s){return xe(s)&&!Be(s)&&s!==65279&&s!==r&&s!==f}function fe(s,v){return xe(s)&&s!==65279&&s!==Y&&s!==ne&&s!==Z&&s!==pe&&s!==K&&s!==R&&(s!==h||v&&je(v))}function Oe(s){return xe(s)&&s!==65279&&!Be(s)&&s!==G&&s!==L&&s!==R&&s!==Y&&s!==ne&&s!==Z&&s!==pe&&s!==K&&s!==h&&s!==C&&s!==z&&s!==d&&s!==_e&&s!==M&&s!==O&&s!==I&&s!==p&&s!==g&&s!==j&&s!==ce}function S(s){var v=/^\n* /;return v.test(s)}var U=1,N=2,Q=3,le=4,me=5;function se(s,v,_,b,k){var T,x,B,P=!1,J=!1,ue=b!==-1,oe=-1,Ee=Oe(s.charCodeAt(0))&&!Be(s.charCodeAt(s.length-1));if(v)for(T=0;T<s.length;T++){if(x=s.charCodeAt(T),!xe(x))return me;B=T>0?s.charCodeAt(T-1):null,Ee=Ee&&fe(x,B)}else{for(T=0;T<s.length;T++){if(x=s.charCodeAt(T),x===f)P=!0,ue&&(J=J||T-oe-1>b&&s[oe+1]!==" ",oe=T);else if(!xe(x))return me;B=T>0?s.charCodeAt(T-1):null,Ee=Ee&&fe(x,B)}J=J||ue&&T-oe-1>b&&s[oe+1]!==" "}return!P&&!J?Ee&&!k(s)?U:N:_>9&&S(s)?me:J?le:Q}function ie(s,v,_,b){s.dump=(function(){if(v.length===0)return"''";if(!s.noCompatMode&&E.indexOf(v)!==-1)return"'"+v+"'";var k=s.indent*Math.max(1,_),T=s.lineWidth===-1?-1:Math.max(Math.min(s.lineWidth,40),s.lineWidth-k),x=b||s.flowLevel>-1&&_>=s.flowLevel;function B(P){return Te(s,P)}switch(se(v,x,s.indent,T,B)){case U:return v;case N:return"'"+v.replace(/'/g,"''")+"'";case Q:return"|"+ve(v,s.indent)+Ge(ke(v,k));case le:return">"+ve(v,s.indent)+Ge(ke(we(v,T),k));case me:return'"'+Nn(v)+'"';default:throw new t("impossible error: invalid scalar style")}})()}function ve(s,v){var _=S(s)?String(v):"",b=s[s.length-1]===`
`,k=b&&(s[s.length-2]===`
`||s===`
`),T=k?"+":b?"":"-";return _+T+`
`}function Ge(s){return s[s.length-1]===`
`?s.slice(0,-1):s}function we(s,v){for(var _=/(\n+)([^\n]*)/g,b=(function(){var J=s.indexOf(`
`);return J=J!==-1?J:s.length,_.lastIndex=J,Ue(s.slice(0,J),v)})(),k=s[0]===`
`||s[0]===" ",T,x;x=_.exec(s);){var B=x[1],P=x[2];T=P[0]===" ",b+=B+(!k&&!T&&P!==""?`
`:"")+Ue(P,v),k=T}return b}function Ue(s,v){if(s===""||s[0]===" ")return s;for(var _=/ [^ ]/g,b,k=0,T,x=0,B=0,P="";b=_.exec(s);)B=b.index,B-k>v&&(T=x>k?x:B,P+=`
`+s.slice(k,T),k=T+1),x=B;return P+=`
`,s.length-k>v&&x>k?P+=s.slice(k,x)+`
`+s.slice(x+1):P+=s.slice(k),P.slice(1)}function Nn(s){for(var v="",_,b,k,T=0;T<s.length;T++){if(_=s.charCodeAt(T),_>=55296&&_<=56319&&(b=s.charCodeAt(T+1),b>=56320&&b<=57343)){v+=X((_-55296)*1024+b-56320+65536),T++;continue}k=W[_],v+=!k&&xe(_)?s[T]:k||X(_)}return v}function xn(s,v,_){var b="",k=s.tag,T,x;for(T=0,x=_.length;T<x;T+=1)e(s,v,_[T],!1,!1)&&(T!==0&&(b+=","+(s.condenseFlow?"":" ")),b+=s.dump);s.tag=k,s.dump="["+b+"]"}function Cn(s,v,_,b){var k="",T=s.tag,x,B;for(x=0,B=_.length;x<B;x+=1)e(s,v+1,_[x],!0,!0)&&((!b||x!==0)&&(k+=Re(s,v)),s.dump&&f===s.dump.charCodeAt(0)?k+="-":k+="- ",k+=s.dump);s.tag=T,s.dump=k||"[]"}function An(s,v,_){var b="",k=s.tag,T=Object.keys(_),x,B,P,J,ue;for(x=0,B=T.length;x<B;x+=1)ue="",x!==0&&(ue+=", "),s.condenseFlow&&(ue+='"'),P=T[x],J=_[P],e(s,v,P,!1,!1)&&(s.dump.length>1024&&(ue+="? "),ue+=s.dump+(s.condenseFlow?'"':"")+":"+(s.condenseFlow?"":" "),e(s,v,J,!1,!1)&&(ue+=s.dump,b+=ue));s.tag=k,s.dump="{"+b+"}"}function Bn(s,v,_,b){var k="",T=s.tag,x=Object.keys(_),B,P,J,ue,oe,Ee;if(s.sortKeys===!0)x.sort();else if(typeof s.sortKeys=="function")x.sort(s.sortKeys);else if(s.sortKeys)throw new t("sortKeys must be a boolean or a function");for(B=0,P=x.length;B<P;B+=1)Ee="",(!b||B!==0)&&(Ee+=Re(s,v)),J=x[B],ue=_[J],e(s,v+1,J,!0,!0,!0)&&(oe=s.tag!==null&&s.tag!=="?"||s.dump&&s.dump.length>1024,oe&&(s.dump&&f===s.dump.charCodeAt(0)?Ee+="?":Ee+="? "),Ee+=s.dump,oe&&(Ee+=Re(s,v)),e(s,v+1,ue,!0,oe)&&(s.dump&&f===s.dump.charCodeAt(0)?Ee+=":":Ee+=": ",Ee+=s.dump,k+=Ee));s.tag=T,s.dump=k||"{}"}function kn(s,v,_){var b,k,T,x,B,P;for(k=_?s.explicitTypes:s.implicitTypes,T=0,x=k.length;T<x;T+=1)if(B=k[T],(B.instanceOf||B.predicate)&&(!B.instanceOf||typeof v=="object"&&v instanceof B.instanceOf)&&(!B.predicate||B.predicate(v))){if(s.tag=_?B.tag:"?",B.represent){if(P=s.styleMap[B.tag]||B.defaultStyle,a.call(B.represent)==="[object Function]")b=B.represent(v,P);else if(m.call(B.represent,P))b=B.represent[P](v,P);else throw new t("!<"+B.tag+'> tag resolver accepts not "'+P+'" style');s.dump=b}return!0}return!1}function e(s,v,_,b,k,T){s.tag=null,s.dump=_,kn(s,_,!1)||kn(s,_,!0);var x=a.call(s.dump);b&&(b=s.flowLevel<0||s.flowLevel>v);var B=x==="[object Object]"||x==="[object Array]",P,J;if(B&&(P=s.duplicates.indexOf(_),J=P!==-1),(s.tag!==null&&s.tag!=="?"||J||s.indent!==2&&v>0)&&(k=!1),J&&s.usedDuplicates[P])s.dump="*ref_"+P;else{if(B&&J&&!s.usedDuplicates[P]&&(s.usedDuplicates[P]=!0),x==="[object Object]")b&&Object.keys(s.dump).length!==0?(Bn(s,v,s.dump,k),J&&(s.dump="&ref_"+P+s.dump)):(An(s,v,s.dump),J&&(s.dump="&ref_"+P+" "+s.dump));else if(x==="[object Array]"){var ue=s.noArrayIndent&&v>0?v-1:v;b&&s.dump.length!==0?(Cn(s,ue,s.dump,k),J&&(s.dump="&ref_"+P+s.dump)):(xn(s,ue,s.dump),J&&(s.dump="&ref_"+P+" "+s.dump))}else if(x==="[object String]")s.tag!=="?"&&ie(s,s.dump,v,T);else{if(s.skipInvalid)return!1;throw new t("unacceptable kind of an object to dump "+x)}s.tag!==null&&s.tag!=="?"&&(s.dump="!<"+s.tag+"> "+s.dump)}return!0}function y(s,v){var _=[],b=[],k,T;for(w(s,_,b),k=0,T=b.length;k<T;k+=1)v.duplicates.push(_[b[k]]);v.usedDuplicates=new Array(T)}function w(s,v,_){var b,k,T;if(s!==null&&typeof s=="object")if(k=v.indexOf(s),k!==-1)_.indexOf(k)===-1&&_.push(k);else if(v.push(s),Array.isArray(s))for(k=0,T=s.length;k<T;k+=1)w(s[k],v,_);else for(b=Object.keys(s),k=0,T=b.length;k<T;k+=1)w(s[b[k]],v,_)}function D(s,v){v=v||{};var _=new q(v);return _.noRefs||y(s,_),e(_,0,s,!0,!0)?_.dump+`
`:""}function A(s,v){return D(s,n.extend({schema:i},v))}return Tn.dump=D,Tn.safeDump=A,Tn}var ki;function us(){if(ki)return ge;ki=1;var n=as(),t=cs();function l(i){return function(){throw new Error("Function "+i+" is deprecated and cannot be used.")}}return ge.Type=Se(),ge.Schema=fn(),ge.FAILSAFE_SCHEMA=xt(),ge.JSON_SCHEMA=ir(),ge.CORE_SCHEMA=rr(),ge.DEFAULT_SAFE_SCHEMA=bn(),ge.DEFAULT_FULL_SCHEMA=Pn(),ge.load=n.load,ge.loadAll=n.loadAll,ge.safeLoad=n.safeLoad,ge.safeLoadAll=n.safeLoadAll,ge.dump=t.dump,ge.safeDump=t.safeDump,ge.YAMLException=wn(),ge.MINIMAL_SCHEMA=xt(),ge.SAFE_SCHEMA=bn(),ge.DEFAULT_SCHEMA=Pn(),ge.scan=l("scan"),ge.parse=l("parse"),ge.compose=l("compose"),ge.addConstructor=l("addConstructor"),ge}var vt,Ei;function ds(){if(Ei)return vt;Ei=1;var n=us();return vt=n,vt}var Ti;function fs(){if(Ti)return En.exports;Ti=1;var n=ds(),t="\\ufeff?",l=typeof process<"u"?process.platform:"",i="^("+t+"(= yaml =|---)$([\\s\\S]*?)^(?:\\2|\\.\\.\\.)\\s*$"+(l==="win32"?"\\r?":"")+"(?:\\n)?)",a=new RegExp(i,"m");En.exports=m,En.exports.test=r;function m(c,d){c=c||"";var p={allowUnsafe:!1};d=d instanceof Object?{...p,...d}:p,d.allowUnsafe=!!d.allowUnsafe;var h=c.split(/(\r?\n)/);return h[0]&&/= yaml =|---/.test(h[0])?f(c,d.allowUnsafe):{attributes:{},body:c,bodyBegin:1}}function o(c,d){for(var p=1,h=d.indexOf(`
`),g=c.index+c[0].length;h!==-1;){if(h>=g)return p;p++,h=d.indexOf(`
`,h+1)}return p}function f(c,d){var p=a.exec(c);if(!p)return{attributes:{},body:c,bodyBegin:1};var h=d?n.load:n.safeLoad,g=p[p.length-1].replace(/^\s+|\s+$/g,""),C=h(g)||{},I=c.replace(p[0],""),z=o(p,c);return{attributes:C,body:I,bodyBegin:z,frontmatter:g}}function r(c){return c=c||"",a.test(c)}return En.exports}var ms=fs();const Pi=yr(ms),ze=H([]),Mi=H(!1);function Ln(){return(()=>{if(Mi.value)return;const o=Object.assign({"/src/content/blog/en/about-wasker.md":Io,"/src/content/blog/en/performance_bottleneck_analysis.md":Lo,"/src/content/blog/zh/about-wasker.md":Do,"/src/content/blog/zh/performance_bottleneck_analysis.md":Fo,"/src/content/friend/vite.md":No,"/src/content/friend/vuejs.md":Bo,"/src/content/journal/en/2026-01-01.md":jo,"/src/content/journal/zh/2026-01-01.md":Go,"/src/content/portfolio/en/wasker series/wasker_template.md":Vo,"/src/content/portfolio/en/wasker series/wasker_vue.md":Uo,"/src/content/portfolio/zh/wasker series/wasker_template.md":Ho,"/src/content/portfolio/zh/wasker series/wasker_vue.md":qo,"/src/content/profile/profile.md":Jt}),f=[];for(const r in o){const c=o[r],d=Pi(c),p=d.attributes;if(!p.image&&!p.cover){const L=Math.ceil(Math.random()*25);p.image=`/assets/img-dark/default/${L}.jpg`}else p.cover&&!p.image&&(p.image=p.cover);const h=r.includes("/blog/"),g=r.includes("/portfolio/"),C=r.includes("/friend/"),I=r.includes("/journal/");let z="zh";r.includes("/en/")?z="en":r.includes("/zh/")&&(z="zh");const Y=r.split("/").pop().replace(".md","");if(I&&!/^\d{4}-\d{2}-\d{2}$/.test(Y))continue;let G=p.category;const R=r.split("/"),M=h?"blog":g?"portfolio":C?"friend":I?"journal":null,O=M?R.findIndex(L=>L===M):-1;if(O!==-1){let L=O+1;if((R[L]==="zh"||R[L]==="en")&&L++,R.length>L+1){const j=R[L];G=j.charAt(0).toUpperCase()+j.slice(1)}}f.push({...p,category:G,slug:Y,body:d.body,type:h?"blog":g?"portfolio":C?"friend":I?"journal":"other",lang:z,path:r})}f.sort((r,c)=>new Date(c.date)-new Date(r.date)),ze.value=f,Mi.value=!0})(),{posts:ze,getPosts:o=>ae(()=>o?ze.value.filter(f=>f.type===o):ze.value),getCategories:o=>ae(()=>{const r=(o?ze.value.filter(c=>c.type===o):ze.value).map(c=>c.category).filter(Boolean);return["All",...new Set(r)]}),getPostBySlug:(o,f)=>ae(()=>ze.value.find(r=>r.slug===o&&(f?r.type===f:!0))),getAdjacentPosts:(o,f,r="en")=>ae(()=>{const c=ze.value.filter(g=>(f?g.type===f:!0)&&g.lang===r),d=c.findIndex(g=>g.slug===o);if(d===-1)return{prev:null,next:null};const p=d>0?c[d-1]:null,h=d<c.length-1?c[d+1]:null;return{prev:p,next:h}}),getProfile:()=>ae(()=>{const o=Object.assign({"/src/content/profile/profile.md":Jt});for(const f in o){const r=o[f],c=Pi(r);return{...c.attributes,body:c.body}}return null})}}const Tt=Hi("music",()=>{const n=H(null),t=H(!1),l=H(0),i=H(0),a=H(.7),m=H(!1),o=H(0),f=H([{title:"Call of Silence",artist:"PIANO",album:"Unknown",src:"/audio/call_of_silence.mp3"}]),r=ae(()=>f.value[o.value]),c=ae(()=>i.value>0?l.value/i.value*100:0),d=L=>{n.value||(n.value=L,n.value.src=r.value.src,n.value.volume=a.value,n.value.addEventListener("loadedmetadata",()=>{i.value=n.value.duration}),n.value.addEventListener("timeupdate",()=>{l.value=n.value.currentTime}),n.value.addEventListener("play",()=>{t.value=!0}),n.value.addEventListener("pause",()=>{t.value=!1}),n.value.addEventListener("ended",()=>{n.value.currentTime=0,n.value.play().catch(j=>{console.error("Loop playback failed:",j)})}),n.value.addEventListener("volumechange",()=>{a.value=n.value.volume,m.value=n.value.muted}),n.value.addEventListener("error",j=>{console.error("Audio loading error:",j),console.error("Current audio source:",n.value.src)}))},p=()=>{n.value&&(t.value?n.value.pause():n.value.play().catch(L=>{console.error("Playback failed:",L)}))},h=()=>{n.value&&n.value.play().catch(L=>{console.error("Play failed:",L)})},g=()=>{n.value&&n.value.pause()},C=L=>{n.value&&(n.value.currentTime=L)},I=L=>{!n.value||!i.value||(n.value.currentTime=L/100*i.value)},z=L=>{if(!n.value)return;const j=Math.max(0,Math.min(1,L));n.value.volume=j,a.value=j,j>0&&(n.value.muted=!1,m.value=!1)},Y=()=>{n.value&&(n.value.muted=!n.value.muted,m.value=n.value.muted)},G=()=>{o.value>0&&(o.value--,M())},R=()=>{o.value<f.value.length-1&&(o.value++,M())},M=()=>{if(!n.value)return;const L=t.value;n.value.src=r.value.src,n.value.load(),L&&n.value.play().catch(j=>{console.error("Playback failed:",j)})};return{audio:n,isPlaying:t,currentTime:l,duration:i,volume:a,isMuted:m,currentTrackIndex:o,playlist:f,currentTrack:r,progress:c,initAudio:d,togglePlay:p,play:h,pause:g,seek:C,seekByPercentage:I,setVolume:z,toggleMute:Y,previousTrack:G,nextTrack:R,loadTrack:M,tryAutoPlay:async()=>{if(n.value)try{await n.value.play(),console.log("Auto-play successful")}catch(L){console.warn("Auto-play blocked by browser:",L.message),console.log("Please click play button to start music")}}}}),Ve=(n,t)=>{const l=n.__vccOpts||n;for(const[i,a]of t)l[i]=a;return l},ps={class:"mil-music-player"},hs={class:"mil-player-container"},vs={class:"mil-track-info"},gs={class:"mil-track-details"},ys={class:"mil-track-title"},_s={class:"mil-track-artist"},bs={class:"mil-player-controls"},ws={class:"mil-control-buttons"},Ss={class:"mil-progress-container"},xs={class:"mil-time mil-current"},Cs={class:"mil-time mil-duration"},As={key:0,class:"mil-volume-control"},ks={__name:"MusicPlayer",setup(n){const t=Tt(),l=H(typeof window<"u"?window.innerWidth:1920),i=ae(()=>l.value>=1200),a=()=>{l.value=window.innerWidth},m=ae(()=>t.isPlaying),o=ae(()=>t.currentTrack),f=ae(()=>t.progress),r=ae(()=>t.volume),c=ae(()=>t.isMuted),d=ae(()=>h(t.currentTime)),p=ae(()=>h(t.duration)),h=E=>{if(!isFinite(E))return"0:00";const te=Math.floor(E/60),X=Math.floor(E%60);return`${te}:${X.toString().padStart(2,"0")}`},g=E=>{const X=E.currentTarget.getBoundingClientRect(),ke=(E.clientX-X.left)/X.width*100;t.seekByPercentage(ke)},C=E=>{const X=E.currentTarget.getBoundingClientRect(),q=E.clientX-X.left,ke=Math.max(0,Math.min(1,q/X.width));t.setVolume(ke)},I=H(!1),z=E=>{I.value=!0,L(E),E.preventDefault(),document.addEventListener("mousemove",Y),document.addEventListener("mouseup",G)},Y=E=>{I.value&&L(E)},G=()=>{I.value=!1,document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",G)},R=E=>{I.value=!0,L(E.touches[0],E.currentTarget)},M=E=>{I.value&&(E.preventDefault(),L(E.touches[0],E.currentTarget))},O=()=>{I.value=!1},L=(E,te)=>{const X=document.querySelector(".mil-progress-bar");if(!X)return;const q=X.getBoundingClientRect(),Re=E.clientX-q.left,Te=Math.max(0,Math.min(100,Re/q.width*100));t.seekByPercentage(Te)},j=H(!1),ne=E=>{j.value=!0,W(E),E.preventDefault(),document.addEventListener("mousemove",Z),document.addEventListener("mouseup",ce)},Z=E=>{j.value&&W(E)},ce=()=>{j.value=!1,document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",ce)},pe=E=>{j.value=!0,W(E.touches[0])},_e=E=>{j.value&&(E.preventDefault(),W(E.touches[0]))},K=()=>{j.value=!1},W=E=>{const te=document.querySelector(".mil-volume-bar");if(!te)return;const X=te.getBoundingClientRect(),ke=E.clientX-X.left,Re=Math.max(0,Math.min(1,ke/X.width));t.setVolume(Re)};return nn(()=>{window.addEventListener("resize",a)}),tn(()=>{window.removeEventListener("resize",a),document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",G),document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",ce)}),(E,te)=>(V(),$("div",ps,[u("div",hs,[u("div",vs,[te[4]||(te[4]=u("div",{class:"mil-track-cover"},[u("i",{class:"fas fa-music"})],-1)),u("div",gs,[u("div",ys,re(o.value.title),1),u("div",_s,re(o.value.artist),1)])]),u("div",bs,[u("div",ws,[u("button",{onClick:te[0]||(te[0]=(...X)=>F(t).previousTrack&&F(t).previousTrack(...X)),class:"mil-control-btn","aria-label":"Previous track"},[...te[5]||(te[5]=[u("i",{class:"fas fa-step-backward"},null,-1)])]),u("button",{onClick:te[1]||(te[1]=(...X)=>F(t).togglePlay&&F(t).togglePlay(...X)),class:"mil-control-btn mil-play-btn","aria-label":"Play/Pause"},[u("i",{class:ee(m.value?"fas fa-pause":"fas fa-play")},null,2)]),u("button",{onClick:te[2]||(te[2]=(...X)=>F(t).nextTrack&&F(t).nextTrack(...X)),class:"mil-control-btn","aria-label":"Next track"},[...te[6]||(te[6]=[u("i",{class:"fas fa-step-forward"},null,-1)])])]),u("div",Ss,[u("span",xs,re(d.value),1),u("div",{class:"mil-progress-bar",onClick:g,onMousedown:z,onTouchstart:R,onTouchmove:M,onTouchend:O},[u("div",{class:"mil-progress-fill",style:an({width:f.value+"%"})},[...te[7]||(te[7]=[u("div",{class:"mil-progress-thumb"},null,-1)])],4)],32),u("span",Cs,re(p.value),1)])]),i.value?(V(),$("div",As,[u("button",{onClick:te[3]||(te[3]=(...X)=>F(t).toggleMute&&F(t).toggleMute(...X)),class:"mil-volume-btn","aria-label":"Toggle mute"},[u("i",{class:ee(c.value||r.value===0?"fas fa-volume-mute":r.value<.5?"fas fa-volume-down":"fas fa-volume-up")},null,2)]),u("div",{class:"mil-volume-bar",onClick:C,onMousedown:ne,onTouchstart:pe,onTouchmove:_e,onTouchend:K},[u("div",{class:"mil-volume-fill",style:an({width:(c.value?0:r.value*100)+"%"})},[...te[8]||(te[8]=[u("div",{class:"mil-volume-thumb"},null,-1)])],4)],32)])):Ae("",!0)])]))}},Es=Ve(ks,[["__scopeId","data-v-d8ccd25c"]]),Ts={class:"mil-content-frame mil-cloned"},Ps={class:"mil-scroll mil-half-2"},Ms={class:"mil-main-content"},Rs={key:0,class:"mil-banner"},Os={class:"mil-bg-frame"},Is=["src"],Ls={class:"mil-banner-content"},Ds={class:"mil-avatar mil-mb-30"},Fs=["src"],Ns={class:"mil-mb-15"},Bs={class:"mil-link"},js={key:1,class:"mil-space-90 mil-p-0-75"},Gs={class:"row mil-mb-75"},Vs={class:"mil-service-card mil-up"},Us={class:"mil-mb-20"},Hs={class:"mil-accent"},qs={class:"mil-mb-20-plus"},$s={class:"row mil-mb-60"},Ws={class:"mil-skill-item mil-up"},zs={class:"mil-top"},Ys={class:"mil-link"},Ks={class:"mil-progress"},Qs={class:"row mil-mb-60"},Js={class:"mil-skill-item mil-up"},Zs={class:"mil-top"},Xs={class:"mil-link"},el={class:"mil-progress"},nl={class:"mil-timeline mil-mb-75"},tl={class:"mil-timeline-card"},il={class:"mil-left"},rl={class:"mil-line-height mil-mb-20"},ol={class:"mil-accent"},sl={class:"mil-badge mil-dark mil-mb-20-plus"},ll=["href"],al={class:"mil-right"},cl={class:""},ul={class:"mil-timeline mil-mb-75"},dl={class:"mil-timeline-card"},fl={class:"mil-left"},ml={class:"mil-line-height mil-mb-20"},pl={class:"mil-accent"},hl={class:"mil-badge mil-dark mil-mb-20-plus"},vl={class:"mil-right"},gl={class:""},yl=["innerHTML"],_l={class:"mil-up"},bl={key:0,class:"mil-space-90 mil-jcb"},wl=["href"],Sl=70,xl=20,Cl=1500,Al={__name:"TheRightBar",setup(n){const t=H(null),{getProfile:l}=Ln(),i=l();let a=null;function m(f,r){if(!r||!r.length)return;let c=0,d=0,p=!1;const h=()=>{if(!f)return;const g=r[c];p?d--:d++,f.textContent=g.substring(0,d);let C=Sl;p&&(C=xl),!p&&d===g.length?(C=Cl,p=!0):p&&d===0&&(p=!1,c=(c+1)%r.length,C=500),a=setTimeout(h,C)};h()}const o=()=>{i.value&&i.value.roles&&t.value&&(a&&clearTimeout(a),m(t.value,i.value.roles))};return Fe(()=>i.value,o),nn(()=>{o()}),tn(()=>{a&&clearTimeout(a)}),(f,r)=>(V(),$("div",Ts,[u("div",Ps,[u("div",Ms,[F(i)?(V(),$("div",Rs,[u("div",Os,[u("img",{src:F(i).banner,alt:"banner",class:"mil-banner-bg mil-scale-img","data-value-1":"1","data-value-2":"1.3"},null,8,Is)]),r[1]||(r[1]=u("div",{class:"mil-banner-overlay"},null,-1)),u("div",Ls,[u("div",Ds,[u("img",{src:F(i).avatar,alt:"avatar"},null,8,Fs)]),u("h1",Ns,re(F(i).name),1),u("div",Bs,[r[0]||(r[0]=Le("I'm a ",-1)),u("span",{class:"mil-typing",ref_key:"typingElement",ref:t},null,512)])])])):Ae("",!0),F(i)?(V(),$("div",js,[r[3]||(r[3]=u("div",{class:"mil-title-line mil-mb-60 mil-up"},[u("h2",null,"Services"),u("div",{class:"mil-line"}),u("div",{class:"mil-h2 mil-number"},"01")],-1)),u("div",Gs,[(V(!0),$(Ie,null,De(F(i).services,(c,d)=>(V(),$("div",{class:"col-xs-12 col-sm-6 mil-mb-15",key:d},[u("div",Vs,[u("h3",Us,[u("span",Hs,re(String(d+1).padStart(2,"0"))+".",1),Le(" "+re(c.title),1)]),u("p",qs,re(c.description),1),he(F(Me),{to:c.link,class:"mil-link mil-hover-link"},{default:Ce(()=>[...r[2]||(r[2]=[Le("Order service",-1)])]),_:1},8,["to"])])]))),128))]),r[4]||(r[4]=u("div",{class:"mil-title-line mil-mb-60 mil-up"},[u("h2",null,"Language"),u("div",{class:"mil-line"}),u("div",{class:"mil-h2 mil-number"},"02")],-1)),u("div",$s,[(V(!0),$(Ie,null,De(F(i).languages,(c,d)=>(V(),$("div",{class:"col-xs-12 col-sm-6 mil-mb-30",key:d},[u("div",Ws,[u("div",zs,[u("span",Ys,re(c.name),1),u("span",null,re(c.level),1)]),u("div",Ks,[u("div",{class:"mil-progress-prog mil-add-class",style:an({width:c.percent+"%"})},null,4)])])]))),128))]),r[5]||(r[5]=u("div",{class:"mil-title-line mil-mb-60 mil-up"},[u("h2",null,"Skills"),u("div",{class:"mil-line"}),u("div",{class:"mil-h2 mil-number"},"03")],-1)),u("div",Qs,[(V(!0),$(Ie,null,De(F(i).skills,(c,d)=>(V(),$("div",{class:"col-xs-12 col-sm-6 mil-mb-30",key:d},[u("div",Js,[u("div",Zs,[u("span",Xs,re(c.name),1),u("span",null,re(c.percent)+"%",1)]),u("div",el,[u("div",{class:"mil-progress-prog mil-add-class",style:an({width:c.percent+"%"})},null,4)])])]))),128))]),r[6]||(r[6]=u("div",{class:"mil-title-line mil-mb-60 mil-up"},[u("h2",null,"Education"),u("div",{class:"mil-line"}),u("div",{class:"mil-h2 mil-number"},"04")],-1)),u("ul",nl,[(V(!0),$(Ie,null,De(F(i).education,(c,d)=>(V(),$("li",{class:"mil-mb-15 mil-up",key:d},[u("div",tl,[u("div",il,[u("h3",rl,[u("span",ol,re(String(d+1).padStart(2,"0"))+".",1),Le(" "+re(c.title),1)]),u("div",sl,re(c.year),1),c.certificate?(V(),$("a",{key:0,href:c.certificate,class:"mil-link mil-hover-link","data-fancybox":"certificate","data-no-swup":""},"Certificate",8,ll)):Ae("",!0)]),u("div",al,[u("p",cl,re(c.description),1)])])]))),128))]),r[7]||(r[7]=u("div",{class:"mil-title-line mil-mb-60 mil-up"},[u("h2",null,"Work"),u("div",{class:"mil-line"}),u("div",{class:"mil-h2 mil-number"},"05")],-1)),u("ul",ul,[(V(!0),$(Ie,null,De(F(i).work,(c,d)=>(V(),$("li",{class:"mil-mb-15 mil-up",key:d},[u("div",dl,[u("div",fl,[u("h3",ml,[u("span",pl,re(String(d+1).padStart(2,"0"))+".",1),Le(" "+re(c.title),1)]),u("div",hl,re(c.year),1)]),u("div",vl,[u("p",gl,re(c.description),1)])])]))),128))]),r[8]||(r[8]=u("div",{class:"mil-divider mil-mb-60 mil-up"},null,-1)),u("div",{class:"mil-mb-30 mil-up",innerHTML:F(i).body},null,8,yl),u("div",_l,[he(Es)])])):Ae("",!0)]),u("footer",null,[F(i)&&F(i).footer?(V(),$("div",bl,[u("p",null,re(F(i).footer.copyright),1),u("p",null,[r[9]||(r[9]=Le("Design by: ",-1)),u("a",{href:F(i).footer.designer_url,class:"mil-text-link",target:"_blank"},re(F(i).footer.designer),9,wl)])])):Ae("",!0)])])]))}},Ct=Ve(Al,[["__scopeId","data-v-70210703"]]),kl={class:"transition-fade"},El={__name:"Home",setup(n){return(t,l)=>(V(),$("div",kl,[he(Ct)]))}};let sn,Ze;function Dn(){const n=()=>{Ze.getAll().forEach(l=>l.kill())},t=async()=>{if(!sn||!Ze){const o=await Ke(()=>import("./gsap-COmk0yTM.js").then(r=>r.i),[]),f=await Ke(()=>import("./gsap-COmk0yTM.js").then(r=>r.S),[]);sn=o.gsap||o.default,Ze=f.ScrollTrigger||f.default,sn.registerPlugin(Ze)}n(),Ze.refresh(),setTimeout(()=>{Ze.refresh()},100),document.querySelectorAll(".mil-up").forEach(o=>{if(o.classList.contains("mil-animated")){o.style.opacity=1,o.style.pointerEvents="all",o.style.transform="translateY(0) scale(1)";return}const f=o.closest(".mil-half-1")||o.closest(".mil-half-2")||window;document.body.contains(o)&&sn.fromTo(o,{opacity:0,y:40,scale:.95,pointerEvents:"none"},{y:0,opacity:1,scale:1,duration:.4,onComplete:()=>{o.style.pointerEvents="all",o.classList.add("mil-animated")},scrollTrigger:{trigger:o,scroller:f===window?"body":f,toggleActions:"play none none reverse",start:"top+=90px bottom"}})}),document.querySelectorAll(".mil-up-instant").forEach((o,f)=>{o.classList.contains("mil-animated")||document.body.contains(o)&&sn.fromTo(o,{opacity:0,y:40,scale:.95,pointerEvents:"none"},{y:0,opacity:1,scale:1,duration:.4,delay:.1,onComplete:()=>{o.style.pointerEvents="all",o.classList.add("mil-animated")}})}),document.querySelectorAll(".mil-scale-img").forEach(o=>{const f=o.closest(".mil-half-1")||o.closest(".mil-half-2")||window,r=Math.max(.95,o.getAttribute("data-value-1")||1),c=o.getAttribute("data-value-2")||1.1,d=window.innerWidth<1200?"top-=100 bottom-=100%":"top bottom-=100%";sn.fromTo(o,{scale:r,y:"0%"},{scale:c,y:"10%",scrollTrigger:{scroller:f===window?"body":f,trigger:o,start:d,scrub:!0,toggleActions:"play none none reverse"}})}),document.querySelectorAll(".mil-progress-prog").forEach(o=>{const f=o.getAttribute("data-size");f&&o.style.setProperty("--size",f);const r=o.closest(".mil-half-1")||o.closest(".mil-half-2")||window;Ze.create({trigger:o,scroller:r===window?"body":r,toggleActions:"play none none reverse",onEnter:()=>o.classList.add("mil-active"),onLeaveBack:()=>o.classList.remove("mil-active")})})};return tn(()=>{n()}),{initAnimations:t,killAnimations:n}}const Sn=Hi("app",()=>{const n=H(!1);function t(){n.value=!n.value}function l(){n.value=!1}const i=H(!0);function a(d){i.value=d}const m=H(0);function o(){m.value++,l()}const f=H(localStorage.getItem("wasker_lang")||"en");function r(d){f.value=d,localStorage.setItem("wasker_lang",d)}function c(){const d=f.value==="zh"?"en":"zh";r(d)}return{isMenuOpen:n,toggleMenu:t,closeMenu:l,isLoading:i,setLoading:a,triggerAssistant:m,openAssistant:o,currentLang:f,setLang:r,toggleLang:c}}),Tl={class:"mil-toast-icon"},Pl={key:0,class:"fal fa-check-circle"},Ml={key:1,class:"fal fa-exclamation-circle"},Rl={class:"mil-toast-content"},Ol={class:"mil-toast-title"},Il=["innerHTML"],Ll={__name:"ToastNotification",setup(n,{expose:t}){const l=H(!1),i=H(""),a=H("success"),m=(f,r="success")=>{i.value=f,a.value=r,l.value=!0,setTimeout(()=>{l.value=!1},5e3)},o=()=>{l.value=!1};return t({show:m}),(f,r)=>(V(),yn(Bi,{name:"toast"},{default:Ce(()=>[l.value?(V(),$("div",{key:0,class:ee(["mil-toast",a.value])},[u("div",Tl,[a.value==="success"?(V(),$("i",Pl)):(V(),$("i",Ml))]),u("div",Rl,[u("div",Ol,re(a.value==="success"?"Success":"Error"),1),u("div",{class:"mil-toast-message",innerHTML:i.value},null,8,Il)]),u("div",{class:"mil-toast-close",onClick:o},[...r[0]||(r[0]=[u("i",{class:"fal fa-times"},null,-1)])])],2)):Ae("",!0)]),_:1}))}},Fn=Ve(Ll,[["__scopeId","data-v-130684fc"]]),Dl={class:"mil-content-frame"},Fl={class:"mil-scroll mil-bp-fix mil-half-1"},Nl={class:"mil-row-fix"},Bl={key:0,class:"row"},jl=["onClick"],Gl=["src","alt"],Vl={class:"mil-descr"},Ul={class:"mil-post-text"},Hl={class:"mil-left"},ql={class:"mil-line-height mil-mb-20"},$l={class:"mil-right"},Wl={key:1,class:"mil-list-container"},zl={class:"mil-list-col mil-list-date"},Yl={class:"mil-list-col mil-list-cat"},Kl={class:"mil-cat-pill"},Ql={class:"mil-list-col mil-list-title"},Jl={key:0,class:"mil-list-desc"},Zl={key:2,class:"col-12 mil-mb-15"},Xl={class:"mil-bottom-panel mil-up-instant"},ea={class:"mil-w-100 mil-list-footer"},na=["onClick"],ta={class:"mil-action-list"},ia=["title"],ra=["title"],oa={__name:"Portfolio",setup(n){const{getPosts:t,getCategories:l}=Ln(),{initAnimations:i}=Dn(),a=Sn(),{currentLang:m}=qi(a),o=t("portfolio"),f=l("portfolio"),r=H("All"),c=H(!1),d=H(null),p=ae(()=>{let K=o.value.filter(W=>W.lang===m.value);return r.value!=="All"&&(K=K.filter(W=>W.category===r.value)),K}),h=()=>{a.toggleLang()},g=ae(()=>c.value?p.value:p.value.slice(0,6));ae(()=>!c.value&&p.value.length>6);const C=K=>{r.value=K,c.value=!1},I=K=>{window.innerWidth<=768&&(d.value=d.value===K?null:K)};Fe(g,async()=>{await qe(),i()},{deep:!0});const z=H(null),Y=H(!1),G=()=>{if(z.value){const K=z.value;Y.value=K.scrollWidth>K.clientWidth}};nn(()=>{G(),window.addEventListener("resize",G)}),tn(()=>{window.removeEventListener("resize",G)}),Fe([f,m],async()=>{await qe(),G()});const R=H(!1),M=H(!1),O=H(!1),L=()=>{R.value=!R.value},j=()=>{M.value=!M.value,M.value?(document.body.classList.remove("mil-half-page"),document.body.classList.add("mil-fw-page")):(document.body.classList.remove("mil-fw-page"),document.body.classList.add("mil-half-page"))},ne=()=>{O.value=!O.value};Fe(O,async()=>{await qe(),i()});const Z=K=>K?new Date(K).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"",ce=H(!1),pe=H(null),_e=()=>{navigator.clipboard.writeText(window.location.href),ce.value=!0,pe.value&&pe.value.show("Link copied to clipboard","success"),setTimeout(()=>{ce.value=!1},2e3)};return(K,W)=>(V(),$("div",Dl,[he(Fn,{ref_key:"toastRef",ref:pe},null,512),u("div",Fl,[u("div",Nl,[O.value?(V(),$("div",Wl,[(V(!0),$(Ie,null,De(g.value,E=>(V(),yn(F(Me),{key:E.slug,to:"/portfolio/"+E.slug,class:"mil-list-row mil-up"},{default:Ce(()=>[u("div",zl,re(Z(E.date)),1),u("div",Yl,[u("span",Kl,re(E.category),1)]),u("div",Ql,[u("h6",null,re(E.title),1),E.description?(V(),$("p",Jl,re(E.description),1)):Ae("",!0)]),W[2]||(W[2]=u("div",{class:"mil-list-col mil-list-arrow"},[u("i",{class:"fas fa-arrow-right"})],-1))]),_:2},1032,["to"]))),128))])):(V(),$("div",Bl,[(V(!0),$(Ie,null,De(g.value,(E,te)=>(V(),$("div",{key:E.slug,class:ee(g.value.length%2!==0&&te===0?"col-lg-12":"col-lg-6")},[u("div",{class:ee(["mil-blog-card mil-mb-15 mil-up",{"mil-active":d.value===E.slug}]),onClick:X=>I(E.slug)},[E.image?(V(),$("img",{key:0,src:E.image,alt:E.title},null,8,Gl)):Ae("",!0),u("div",Vl,[u("div",Ul,[u("div",Hl,[u("h3",ql,re(E.title),1),he(F(Me),{to:"/portfolio/"+E.slug,class:"mil-link mil-hover-link mil-accent"},{default:Ce(()=>[...W[0]||(W[0]=[Le("read more",-1)])]),_:1},8,["to"]),E.pdf?(V(),yn(F(Me),{key:0,to:"/presentation/"+E.slug,class:"mil-link mil-hover-link mil-accent",style:{"margin-left":"30px"}},{default:Ce(()=>[...W[1]||(W[1]=[Le("Read PPT",-1)])]),_:1},8,["to"])):Ae("",!0)]),u("div",$l,[u("p",null,re(E.description),1)])])])],10,jl)],2))),128))])),p.value.length===0?(V(),$("div",Zl,[...W[3]||(W[3]=[u("p",null,"No projects found in this category.",-1)])])):Ae("",!0)]),u("div",Xl,[u("div",ea,[u("div",{class:"mil-fixed-icon mil-left-icon",onClick:_e,style:{cursor:"pointer"},title:"Copy Link"},[u("i",{class:ee(["fas",ce.value?"fa-check":"fa-share-alt"])},null,2)]),u("div",{class:ee(["mil-filter-container",{"mil-has-overflow":Y.value}])},[u("div",{class:"mil-filter",ref_key:"filterContainer",ref:z},[(V(!0),$(Ie,null,De(F(f),E=>(V(),$("a",{key:E,onClick:Mn(te=>C(E),["prevent"]),href:"#",class:ee(["mil-link","mil-pill",{"mil-current":r.value===E}]),"data-no-swup":""},re(E),11,na))),128))],512)],2),u("div",{class:ee(["mil-action-menu-wrapper",{"mil-active":R.value}])},[u("div",ta,[u("div",{class:"mil-action-btn",onClick:ne,title:O.value?"Grid View":"List View"},[u("i",{class:ee(["fas",O.value?"fa-th-large":"fa-list"])},null,2)],8,ia),u("div",{class:"mil-action-btn",onClick:h,title:"Switch Language"},[...W[4]||(W[4]=[u("i",{class:"fas fa-globe"},null,-1)])]),u("div",{class:"mil-action-btn",onClick:j,title:M.value?"Original View":"Full Screen View"},[u("i",{class:ee(["fas",M.value?"fa-compress-alt":"fa-expand-alt"])},null,2)],8,ra)]),u("div",{class:ee(["mil-action-trigger mil-icon-btn",{"mil-active":R.value}]),onClick:L},[u("i",{class:ee(["fas",R.value?"fa-times":"fa-ellipsis-v"])},null,2)],2)],2)])])])]))}},sa=Ve(oa,[["__scopeId","data-v-06453cd3"]]),la={class:"mil-content-frame"},aa={class:"mil-scroll mil-half-1 mil-bp-fix"},ca={class:"mil-row-fix"},ua={key:0,class:"row"},da=["onClick"],fa=["src","alt"],ma={class:"mil-descr"},pa={class:"mil-post-text"},ha={class:"mil-left"},va={class:"mil-line-height mil-mb-30"},ga={class:"mil-right"},ya={key:1,class:"mil-list-container"},_a={class:"mil-list-col mil-list-date"},ba={class:"mil-list-col mil-list-cat"},wa={class:"mil-cat-pill"},Sa={class:"mil-list-col mil-list-title"},xa={key:0,class:"mil-list-desc"},Ca={key:2,class:"col-12 mil-mb-15"},Aa={class:"mil-bottom-panel mil-up-instant"},ka={class:"mil-w-100 mil-list-footer"},Ea=["onClick"],Ta={class:"mil-action-list"},Pa=["title"],Ma=["title"],Ra={__name:"Blog",setup(n){const{getPosts:t,getCategories:l}=Ln(),{initAnimations:i}=Dn(),a=Sn(),{currentLang:m}=qi(a),o=t("blog"),f=l("blog"),r=H("All"),c=H(!1),d=H(null),p=ae(()=>{let K=o.value.filter(W=>W.lang===m.value);return r.value!=="All"&&(K=K.filter(W=>W.category===r.value)),K}),h=()=>{a.toggleLang()},g=ae(()=>c.value?p.value:p.value.slice(0,6));ae(()=>!c.value&&p.value.length>6);const C=K=>{r.value=K,c.value=!1},I=K=>{window.innerWidth<=768&&(d.value=d.value===K?null:K)};Fe(g,async()=>{await qe(),i()},{deep:!0});const z=H(null),Y=H(!1),G=()=>{if(z.value){const K=z.value;Y.value=K.scrollWidth>K.clientWidth}};nn(()=>{G(),window.addEventListener("resize",G)}),tn(()=>{window.removeEventListener("resize",G)}),Fe([f,m],async()=>{await qe(),G()});const R=H(!1),M=H(!1),O=H(!1),L=()=>{R.value=!R.value},j=()=>{M.value=!M.value,M.value?(document.body.classList.remove("mil-half-page"),document.body.classList.add("mil-fw-page")):(document.body.classList.remove("mil-fw-page"),document.body.classList.add("mil-half-page"))},ne=()=>{O.value=!O.value};Fe(O,async()=>{await qe(),i()});const Z=K=>K?new Date(K).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"",ce=H(!1),pe=H(null),_e=()=>{navigator.clipboard.writeText(window.location.href),ce.value=!0,pe.value&&pe.value.show("Link copied to clipboard","success"),setTimeout(()=>{ce.value=!1},2e3)};return(K,W)=>(V(),$("div",la,[he(Fn,{ref_key:"toastRef",ref:pe},null,512),u("div",aa,[u("div",ca,[O.value?(V(),$("div",ya,[(V(!0),$(Ie,null,De(g.value,E=>(V(),yn(F(Me),{key:E.slug,to:"/blog/"+E.slug,class:"mil-list-row mil-up"},{default:Ce(()=>[u("div",_a,re(Z(E.date)),1),u("div",ba,[u("span",wa,re(E.category),1)]),u("div",Sa,[u("h6",null,re(E.title),1),E.description?(V(),$("p",xa,re(E.description),1)):Ae("",!0)]),W[1]||(W[1]=u("div",{class:"mil-list-col mil-list-arrow"},[u("i",{class:"fas fa-arrow-right"})],-1))]),_:2},1032,["to"]))),128))])):(V(),$("div",ua,[(V(!0),$(Ie,null,De(g.value,(E,te)=>(V(),$("div",{key:E.slug,class:ee(g.value.length%2!==0&&te===0?"col-lg-12":"col-lg-6")},[u("div",{class:ee(["mil-blog-card mil-mb-15 mil-up",{"mil-active":d.value===E.slug}]),onClick:X=>I(E.slug)},[E.image?(V(),$("img",{key:0,src:E.image,alt:E.title},null,8,fa)):Ae("",!0),u("div",ma,[u("div",pa,[u("div",ha,[u("h3",va,re(E.title),1),he(F(Me),{to:"/blog/"+E.slug,class:"mil-link mil-hover-link mil-accent"},{default:Ce(()=>[...W[0]||(W[0]=[Le("read more",-1)])]),_:1},8,["to"])]),u("div",ga,[u("p",null,re(E.description),1)])])])],10,da)],2))),128))])),p.value.length===0?(V(),$("div",Ca,[...W[2]||(W[2]=[u("p",null,"No posts found in this category.",-1)])])):Ae("",!0)]),u("div",Aa,[u("div",ka,[u("div",{class:"mil-fixed-icon mil-left-icon",onClick:_e,style:{cursor:"pointer"},title:"Copy Link"},[u("i",{class:ee(["fas",ce.value?"fa-check":"fa-share-alt"])},null,2)]),u("div",{class:ee(["mil-filter-container",{"mil-has-overflow":Y.value}])},[u("div",{class:"mil-filter",ref_key:"filterContainer",ref:z},[(V(!0),$(Ie,null,De(F(f),E=>(V(),$("a",{key:E,onClick:Mn(te=>C(E),["prevent"]),href:"#",class:ee(["mil-link","mil-pill",{"mil-current":r.value===E}]),"data-no-swup":""},re(E),11,Ea))),128))],512)],2),u("div",{class:ee(["mil-action-menu-wrapper",{"mil-active":R.value}])},[u("div",Ta,[u("div",{class:"mil-action-btn",onClick:ne,title:O.value?"Grid View":"List View"},[u("i",{class:ee(["fas",O.value?"fa-th-large":"fa-list"])},null,2)],8,Pa),u("div",{class:"mil-action-btn",onClick:h,title:"Switch Language"},[...W[3]||(W[3]=[u("i",{class:"fas fa-globe"},null,-1)])]),u("div",{class:"mil-action-btn",onClick:j,title:M.value?"Original View":"Full Screen View"},[u("i",{class:ee(["fas",M.value?"fa-compress-alt":"fa-expand-alt"])},null,2)],8,Ma)]),u("div",{class:ee(["mil-action-trigger mil-icon-btn",{"mil-active":R.value}]),onClick:L},[u("i",{class:ee(["fas",R.value?"fa-times":"fa-ellipsis-v"])},null,2)],2)],2)])])])]))}},Oa=Ve(Ra,[["__scopeId","data-v-4d1576d2"]]),Ia="/assets/img-dark/ui/banner2.jpg",La={class:"mil-content-frame mil-contact-frame",style:{"background-color":"#121212","border-radius":"1rem"}},Da={class:"mil-scroll mil-bp-fix-2 mil-half-1"},Fa={class:"mil-main-content"},Na={class:"mil-space-90 mil-p-0-75"},Ba={class:"row mil-aic"},ja={class:"col-sm-6 mil-mb-15"},Ga={class:"mil-input-frame"},Va={class:"col-sm-6 mil-mb-15"},Ua={class:"mil-input-frame"},Ha={class:"col-lg-12 mil-mb-15"},qa={class:"mil-input-frame"},$a={class:"col-lg-12 mil-mb-15"},Wa={class:"mil-input-frame"},za={class:"col-12 col-sm-12 col-md-12 mil-mb-15"},Ya={class:"custom-checkbox"},Ka={class:"col-lg-12 mil-mb-15"},Qa=["disabled"],Ja={__name:"Contact",setup(n){const t=H({name:"",email:"",subject:"",message:"",consent:!1}),l=H(!1),i=H(null),a=async()=>{if(!t.value.consent){i.value.show("Please consent to the processing of your personal data before sending.","error");return}const m="https://contact.10nguiusc.workers.dev";if(m.includes("your-worker-name")){i.value.show("System Configuration Error: API URL is missing.","error");return}l.value=!0;try{const o=await fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.value.name,email:t.value.email,subject:t.value.subject,message:t.value.message})});o.ok?(i.value.show("Your message has been sent successfully! I will get back to you shortly.","success"),t.value={name:"",email:"",subject:"",message:"",consent:!1}):(console.error("API Error:",await o.text()),i.value.show('Transmission failed. <br>Please email me directly at: <a href="mailto:couuas@gmail.com" style="color:#fff; text-decoration: underline;">couuas@gmail.com</a>',"error"))}catch(o){console.error("Network Error:",o),i.value.show('Network error occurred. <br>Please try again or email: <a href="mailto:couuas@gmail.com" style="color:#fff; text-decoration: underline;">couuas@gmail.com</a>',"error")}finally{l.value=!1}};return(m,o)=>(V(),$("div",La,[he(Fn,{ref_key:"toast",ref:i},null,512),u("div",Da,[u("div",Fa,[o[11]||(o[11]=Rt('<div class="mil-banner"><div class="mil-bg-frame"><img src="'+Ia+'" alt="banner" class="mil-banner-bg mil-scale-img" data-value-1="1" data-value-2="1.3"></div><div class="mil-banner-overlay"></div><div class="mil-banner-content mil-type-2"><div class="mil-link mil-mb-20">contact</div><h1>Get in touch</h1><p class="mil-light-soft mil-mb-40">Your message will be sent directly to my Telegram chat.</p></div></div>',1)),u("div",Na,[u("form",{onSubmit:Mn(a,["prevent"])},[u("div",Ba,[u("div",ja,[u("div",Ga,[Xe(u("input",{type:"text",placeholder:"Your Name",name:"name","onUpdate:modelValue":o[0]||(o[0]=f=>t.value.name=f),required:""},null,512),[[pn,t.value.name]]),o[5]||(o[5]=u("i",{class:"fal fa-user"},null,-1))])]),u("div",Va,[u("div",Ua,[Xe(u("input",{type:"email",placeholder:"Email",name:"email","onUpdate:modelValue":o[1]||(o[1]=f=>t.value.email=f),required:""},null,512),[[pn,t.value.email]]),o[6]||(o[6]=u("i",{class:"fal fa-at"},null,-1))])]),u("div",Ha,[u("div",qa,[Xe(u("input",{type:"text",placeholder:"Subject",name:"subject","onUpdate:modelValue":o[2]||(o[2]=f=>t.value.subject=f),required:""},null,512),[[pn,t.value.subject]]),o[7]||(o[7]=u("i",{class:"fal fa-lightbulb"},null,-1))])]),u("div",$a,[u("div",Wa,[Xe(u("textarea",{placeholder:"Your message",name:"message","onUpdate:modelValue":o[3]||(o[3]=f=>t.value.message=f),required:""},null,512),[[pn,t.value.message]]),o[8]||(o[8]=u("i",{class:"fal fa-user"},null,-1))])]),u("div",za,[u("label",Ya,[Xe(u("input",{type:"checkbox","onUpdate:modelValue":o[4]||(o[4]=f=>t.value.consent=f)},null,512),[[mr,t.value.consent]]),o[9]||(o[9]=u("span",{class:"checkmark"},null,-1)),o[10]||(o[10]=Le(" I consent to the processing of my personal data ",-1))])]),u("div",Ka,[u("button",{type:"submit",class:"mil-btn-sm",style:{width:"100%","justify-content":"center"},disabled:l.value},re(l.value?"Sending...":"Send"),9,Qa)])])],32)])])]),o[12]||(o[12]=Rt('<div class="mil-bottom-panel"><div class="mil-space-90"><div class="mil-jcb mil-w-100"><a href="https://t.me/couuas" class="mil-icon-text" target="_blank"><i class="fab fa-whatsapp"></i><div class="mil-link">+1 (919) 919 9996</div></a><a href="mailto:couuas@gmail.com" class="mil-icon-text" target="_blank"><i class="fal fa-at"></i><div class="mil-link">couuas@gmail.com</div></a></div></div></div>',1))]))}},Za={class:"mil-content-frame"},Xa={class:"mil-scroll mil-half-1 mil-bp-fix"},ec={class:"mil-row-fix"},nc={class:"row"},tc=["onClick"],ic=["src","alt"],rc={class:"mil-descr"},oc={class:"mil-post-text"},sc={class:"mil-left"},lc={class:"mil-line-height mil-mb-20"},ac=["href"],cc={class:"mil-right"},uc={class:"mil-bottom-panel mil-up-instant"},dc={class:"mil-jcc mil-space-15 mil-w-100"},fc={class:"mil-input-frame"},mc=["disabled"],pc={key:0,class:"far fa-paper-plane"},hc={key:1,class:"fas fa-spinner fa-spin"},vc={__name:"Friends",setup(n){const{getPosts:t}=Ln(),{initAnimations:l}=Dn(),i=t("friend"),a=H(null),m=d=>{window.innerWidth<=768&&(a.value=a.value===d?null:d)},o=H(""),f=H(!1),r=H(null),c=async()=>{if(!o.value||!o.value.startsWith("http")){r.value.show("Please enter a valid URL (starting with http:// or https://)","error");return}const d="https://contact.10nguiusc.workers.dev";f.value=!0;try{const p=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Friend Applicant",email:"link-submission@wasker.site",subject:"🔗 New Friend Link Application",message:`User submitted a new friend link:

${o.value}`})});if(p.ok)r.value.show("Link sent to my Telegram successfully! I will check it out.","success"),o.value="";else{const h=await p.text();console.error("API Error:",h),r.value.show("Failed to send link.","error")}}catch(p){console.error(p),r.value.show("Network error. Please try again.","error")}finally{f.value=!1}};return Fe(i,async()=>{await qe(),l()},{deep:!0}),(d,p)=>(V(),$("div",Za,[u("div",Xa,[u("div",ec,[u("div",nc,[(V(!0),$(Ie,null,De(F(i),(h,g)=>(V(),$("div",{key:h.slug,class:ee(F(i).length%2!==0&&g===0?"col-lg-12":"col-lg-6")},[u("div",{class:ee(["mil-blog-card mil-mb-15 mil-up",{"mil-active":a.value===h.slug}]),onClick:C=>m(h.slug)},[h.image?(V(),$("img",{key:0,src:h.image,alt:h.shortname},null,8,ic)):Ae("",!0),u("div",rc,[u("div",oc,[u("div",sc,[u("h3",lc,re(h.shortname),1),u("a",{href:h.url,target:"_blank",class:"mil-link mil-hover-link mil-accent"},"Visit Site",8,ac)]),u("div",cc,[u("p",null,re(h.description),1)])])])],10,tc)],2))),128))])]),u("div",uc,[u("div",dc,[u("form",{class:"mil-subscribe",onSubmit:Mn(c,["prevent"])},[u("div",fc,[Xe(u("input",{type:"url",placeholder:"Want to be friends? Paste your link here (https://...)",name:"url","onUpdate:modelValue":p[0]||(p[0]=h=>o.value=h),required:""},null,512),[[pn,o.value]])]),u("button",{type:"submit",class:"mil-btn-sm",disabled:f.value},[f.value?(V(),$("i",hc)):(V(),$("i",pc))],8,mc)],32)])])]),he(Fn,{ref_key:"toast",ref:r},null,512)]))}},gc=Ve(vc,[["__scopeId","data-v-5d9b9265"]]),Pt=Ro({history:co("/"),routes:[{path:"/",name:"home",component:El,meta:{bodyClass:"mil-fw-page"}},{path:"/portfolio",name:"portfolio",component:sa,meta:{bodyClass:"mil-half-page"}},{path:"/portfolio/:id",name:"portfolio-detail",component:()=>Ke(()=>import("./PortfolioDetail-AdurT5AN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),meta:{bodyClass:"mil-half-page"}},{path:"/blog",name:"blog",component:Oa,meta:{bodyClass:"mil-half-page"}},{path:"/friends",name:"friends",component:gc,meta:{bodyClass:"mil-half-page"}},{path:"/blog/:id",name:"blog-detail",component:()=>Ke(()=>import("./BlogDetail-uy4jMVVo.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,10])),meta:{bodyClass:"mil-half-page"}},{path:"/journal",name:"journal",component:()=>Ke(()=>import("./Journal-BNOtzqc3.js"),__vite__mapDeps([11,4,1,2,3,5,6,7,12])),meta:{bodyClass:"mil-half-page"}},{path:"/journal/:id",name:"journal-detail",component:()=>Ke(()=>import("./JournalDetail-kPxBV7NQ.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,14])),meta:{bodyClass:"mil-half-page"}},{path:"/contact",name:"contact",component:Ja,meta:{bodyClass:"mil-half-page"}},{path:"/galaxy",name:"galaxy",component:()=>Ke(()=>import("./GalaxyPage-CBO0hyUp.js"),__vite__mapDeps([15,1,2,3,16,4,5,6,7,17])),meta:{bodyClass:"mil-fw-page"}},{path:"/presentation/:id",name:"presentation",component:()=>Ke(()=>import("./PresentationPage-C_CEVtMc.js"),__vite__mapDeps([18,4,19,20,1,2,3,5,6,7,21])),meta:{bodyClass:"mil-fw-page"}}],scrollBehavior(n,t,l){return{top:0}}});Pt.beforeEach((n,t,l)=>{l()});const yc={class:"progress-ring",viewBox:"0 0 36 36"},_c=["stroke-dasharray"],bc={class:"compact-disc"},wc={key:0,class:"fas fa-play play-icon"},Sc={key:1,class:"fas fa-pause pause-icon"},xc={__name:"CompactMusicPlayer",setup(n){const t=Tt();return(l,i)=>(V(),$("div",{class:ee(["compact-music-player",{"is-playing":F(t).isPlaying}])},[u("div",{class:"compact-disc-container",onClick:i[0]||(i[0]=(...a)=>F(t).togglePlay&&F(t).togglePlay(...a)),title:"Play/Pause"},[(V(),$("svg",yc,[i[1]||(i[1]=u("circle",{class:"progress-ring-bg",cx:"18",cy:"18",r:"17",fill:"none","stroke-width":"1.5"},null,-1)),u("circle",{class:"progress-ring-circle","stroke-dasharray":`${F(t).progress}, 100`,cx:"18",cy:"18",r:"17",fill:"none","stroke-width":"1.5",pathLength:"100"},null,8,_c)])),u("div",bc,[F(t).isPlaying?(V(),$("i",Sc)):(V(),$("i",wc)),i[2]||(i[2]=u("div",{class:"compact-cover-icon"},[u("i",{class:"fas fa-music"})],-1))])])],2))}},Cc=Ve(xc,[["__scopeId","data-v-286816bb"]]),Ac={class:"mil-menu-part mil-sidebar-flex"},kc={class:"mil-menu-panel mil-relative-panel"},Ec={id:"swupMenu"},Tc=["href","onClick"],Pc=["href","onClick"],Mc=["href","onClick"],Rc=["href","onClick"],Oc=["href","onClick"],Ic=["href","onClick"],Lc=["href","onClick"],Dc={class:"mil-sidebar-player"},Fc={__name:"TheSidebar",setup(n){const t=Sn();return(l,i)=>(V(),$("div",Ac,[he(F(Me),{to:"/",class:"mil-logo"},{default:Ce(()=>[...i[9]||(i[9]=[u("span",null,"wa",-1)])]),_:1}),u("div",kc,[u("nav",{class:ee(["mil-main-menu",{"mil-active":F(t).isMenuOpen}])},[u("ul",Ec,[he(F(Me),{to:"/",custom:""},{default:Ce(({href:a,navigate:m,isExactActive:o})=>[u("li",{class:ee({"mil-current":o}),onClick:i[0]||(i[0]=(...f)=>F(t).closeMenu&&F(t).closeMenu(...f))},[u("a",{href:a,onClick:m,class:ee({"mil-active":o})},[...i[10]||(i[10]=[u("i",{class:"fal fa-home"},null,-1),u("span",null,"Home",-1)])],10,Tc)],2)]),_:1}),he(F(Me),{to:"/portfolio",custom:""},{default:Ce(({href:a,navigate:m,isActive:o})=>[u("li",{class:ee({"mil-current":o}),onClick:i[1]||(i[1]=(...f)=>F(t).closeMenu&&F(t).closeMenu(...f))},[u("a",{href:a,onClick:m,class:ee({"mil-active":o})},[...i[11]||(i[11]=[u("i",{class:"fal fa-palette"},null,-1),u("span",null,"Portfolio",-1)])],10,Pc)],2)]),_:1}),he(F(Me),{to:"/blog",custom:""},{default:Ce(({href:a,navigate:m,isActive:o})=>[u("li",{class:ee({"mil-current":o}),onClick:i[2]||(i[2]=(...f)=>F(t).closeMenu&&F(t).closeMenu(...f))},[u("a",{href:a,onClick:m,class:ee({"mil-active":o})},[...i[12]||(i[12]=[u("i",{class:"fal fa-book"},null,-1),u("span",null,"Blog",-1)])],10,Mc)],2)]),_:1}),he(F(Me),{to:"/journal",custom:""},{default:Ce(({href:a,navigate:m,isActive:o})=>[u("li",{class:ee({"mil-current":o}),onClick:i[3]||(i[3]=(...f)=>F(t).closeMenu&&F(t).closeMenu(...f))},[u("a",{href:a,onClick:m,class:ee({"mil-active":o})},[...i[13]||(i[13]=[u("i",{class:"fal fa-pen-nib"},null,-1),u("span",null,"Journal",-1)])],10,Rc)],2)]),_:1}),he(F(Me),{to:"/friends",custom:""},{default:Ce(({href:a,navigate:m,isActive:o})=>[u("li",{class:ee({"mil-current":o}),onClick:i[4]||(i[4]=(...f)=>F(t).closeMenu&&F(t).closeMenu(...f))},[u("a",{href:a,onClick:m,class:ee({"mil-active":o})},[...i[14]||(i[14]=[u("i",{class:"fal fa-link"},null,-1),u("span",null,"Friends",-1)])],10,Oc)],2)]),_:1}),he(F(Me),{to:"/contact",custom:""},{default:Ce(({href:a,navigate:m,isActive:o})=>[u("li",{class:ee({"mil-current":o}),onClick:i[5]||(i[5]=(...f)=>F(t).closeMenu&&F(t).closeMenu(...f))},[u("a",{href:a,onClick:m,class:ee({"mil-active":o})},[...i[15]||(i[15]=[u("i",{class:"fal fa-envelope"},null,-1),u("span",null,"Contact",-1)])],10,Ic)],2)]),_:1}),i[18]||(i[18]=u("li",{class:"mil-sidebar-separator"},null,-1)),he(F(Me),{to:"/galaxy",custom:""},{default:Ce(({href:a,navigate:m,isActive:o})=>[u("li",{class:ee([{"mil-current":o},"mil-lab-item"]),onClick:i[6]||(i[6]=(...f)=>F(t).closeMenu&&F(t).closeMenu(...f))},[u("a",{href:a,onClick:m,class:ee({"mil-active":o})},[...i[16]||(i[16]=[u("i",{class:"fal fa-atom"},null,-1),u("span",null,"Galaxy",-1)])],10,Lc)],2)]),_:1}),u("li",{class:"mil-lab-item",onClick:i[7]||(i[7]=(...a)=>F(t).openAssistant&&F(t).openAssistant(...a))},[...i[17]||(i[17]=[u("a",{href:"javascript:void(0);"},[u("i",{class:"fal fa-robot"}),u("span",null,"Assistant")],-1)])])])],2),u("div",Dc,[he(Cc)]),u("div",{class:ee(["mil-menu-btn",{"mil-active":F(t).isMenuOpen}]),onClick:i[8]||(i[8]=(...a)=>F(t).toggleMenu&&F(t).toggleMenu(...a))},[...i[19]||(i[19]=[u("span",null,null,-1)])],2)])]))}},Nc=Ve(Fc,[["__scopeId","data-v-4019400f"]]),Bc={__name:"GlobalAudio",setup(n){const t=Tt(),l=H(null);return nn(()=>{t.initAudio(l.value)}),(i,a)=>(V(),$("audio",{ref_key:"audio",ref:l,preload:"metadata",style:{display:"none"}},null,512))}},jc={class:"mil-frame-wrapper"},Gc={class:"mil-preloader-content"},Vc={class:"mil-mb-30"},Uc={class:"mil-accent mil-percent"},Hc={class:"mil-preload-track"},qc={class:"mil-frame"},$c={class:"mil-content"},Wc={class:"mil-left-part"},zc={__name:"MainLayout",setup(n){const t=Sn(),l=Oo(),{initAnimations:i,killAnimations:a}=Dn(),m=H(typeof window<"u"?window.innerWidth:1920),o=ae(()=>m.value>=1200),f=()=>{m.value=window.innerWidth},r=H(l.meta.bodyClass),c=H(l.meta.bodyClass),d=ae(()=>r.value!=="mil-fw-page"),p=H(!0),h=H(0),g=H("mil-preloader"),C=()=>{const R=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${R}px`)},I=()=>{r.value?document.body.className=r.value:document.body.className=""};nn(()=>{C(),window.addEventListener("resize",C),window.addEventListener("resize",f),r.value=l.meta.bodyClass,I(),Ot.bind("[data-fancybox]",{});const R=setInterval(()=>{h.value<100?h.value+=5:(clearInterval(R),g.value+=" mil-complete",i(),setTimeout(()=>{p.value=!1,t.setLoading(!1)},800))},100)}),tn(()=>{window.removeEventListener("resize",C),window.removeEventListener("resize",f),Ot.destroy()});const z=(R,M)=>{R.classList.add("mil-page-entering"),R.style.zIndex="1";const O=r.value==="mil-half-page",L=c.value==="mil-fw-page",j=document.querySelector(".mil-right-part"),ne=O&&L;ne&&j&&(j.classList.add("mil-entering"),j.classList.remove("mil-leaving","mil-ready")),setTimeout(()=>{R.classList.remove("mil-page-entering"),ne&&j&&(j.classList.remove("mil-entering"),j.classList.add("mil-ready")),setTimeout(()=>{document.documentElement.classList.remove("is-animating"),R.classList.remove("mil-page-leaving"),j&&j.classList.remove("mil-leaving","mil-entering"),i(),M()},800)},100)},Y=(R,M)=>{a(),c.value=r.value,document.documentElement.classList.add("is-animating");const O=r.value==="mil-half-page",L=l.meta.bodyClass==="mil-fw-page";l.meta.bodyClass;const j=document.querySelector(".mil-right-part");j&&O&&L&&(j.classList.add("mil-leaving"),j.classList.remove("mil-ready","mil-entering")),l.meta.bodyClass!==r.value&&(r.value=l.meta.bodyClass,I()),_r.set(R,{position:"absolute",width:"100%",top:0,left:0,zIndex:0}),R.classList.add("mil-page-leaving"),setTimeout(()=>{M()},800)},G=()=>{};return(R,M)=>{const O=pr("router-view");return V(),$("div",jc,[he(Bc),p.value?(V(),$("div",{key:0,class:ee(g.value)},[u("div",Gc,[u("h1",Vc,[M[1]||(M[1]=u("span",{class:"mil-h3"},"Loading:",-1)),M[2]||(M[2]=Le()),u("span",Uc,re(h.value),1),M[3]||(M[3]=Le()),M[4]||(M[4]=u("span",{class:"mil-h3"},"%",-1))]),u("div",Hc,[u("div",{class:"mil-preload-line",style:an({width:h.value+"%"})},null,4)])])],2)):Ae("",!0),u("div",qc,[he(Nc),u("div",$c,[u("div",{class:ee(["mil-overlay",{"mil-active":F(t).isMenuOpen}]),onClick:M[0]||(M[0]=(...L)=>F(t).closeMenu&&F(t).closeMenu(...L))},null,2),u("div",Wc,[he(O,null,{default:Ce(({Component:L})=>[he(Bi,{mode:"default",css:!1,onEnter:z,onLeave:Y,onAfterLeave:G},{default:Ce(()=>[(V(),yn(hr(L),{key:F(l).path}))]),_:2},1024)]),_:1}),o.value?(V(),$("div",{key:0,class:ee(["mil-mobile-right-bar",{"mil-hidden-trigger":!d.value}])},[he(Ct)],2)):Ae("",!0)]),o.value?(V(),$("div",{key:0,class:ee(["mil-right-part",{"mil-hidden-trigger":!d.value}])},[he(Ct)],2)):Ae("",!0)])])])}}},Yc=Ve(zc,[["__scopeId","data-v-49cbdffe"]]),Kc="7585472949277212715",Qc="7585468127446564917",Jc="pat_HX1NEryw7XWbB2pIEreLfAegvjq39LgZjSOVxbVjeEKa9nchxOvcpjs6EfwK9GWf",Zc="pat_Mh8ElBr4kVTH0K9rDoqnBt54jTG46OfohBwIE1bp1ujALRGRpnAeSYeIuoNeke6Y";function Xc(){try{const n=Intl.DateTimeFormat().resolvedOptions().timeZone;return["Asia/Shanghai","Asia/Urumqi","Asia/Harbin","Asia/Chongqing","Asia/Kashgar"].includes(n)?"CN":"GLOBAL"}catch(n){return console.warn("Timezone detection failed, defaulting to GLOBAL:",n),"GLOBAL"}}function eu(n){return n==="CN"?Kc:Qc}function Ri(n){return n==="CN"?Jc:Zc}const nu=5e3,tu="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.1.0-beta.3/libs/cn/index.js",iu="https://sf-coze-web-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.1.0-beta.3/libs/oversea/index.js",ru={__name:"TheAiAssistant",setup(n){const t=Sn(),l=H(!1);Fe(()=>t.isLoading,M=>{M||(l.value=!0)}),Fe(()=>t.triggerAssistant,()=>{if(a)try{a.showChatBot(),p.value=!0}catch(M){console.error("Failed to show chat bot via trigger",M)}});let i=!1,a=null;const m=H(!1),o=window.innerWidth<768,f=H({bottom:o?100:80,right:o?20:80}),r=H({x:0,y:0}),c=H({bottom:0,right:0}),d=H(!1),p=H(!1);function h(M){m.value=!0,d.value=!1,r.value={x:M.clientX,y:M.clientY},c.value={...f.value},document.addEventListener("mousemove",g),document.addEventListener("mouseup",C)}function g(M){if(!m.value)return;const O=M.clientX-r.value.x,L=M.clientY-r.value.y;(Math.abs(O)>3||Math.abs(L)>3)&&(d.value=!0),f.value={bottom:c.value.bottom-L,right:c.value.right-O}}function C(M){if(m.value=!1,document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",C),!d.value&&a)try{a.showChatBot(),setTimeout(()=>{p.value=!0},200)}catch(O){console.error("Failed to show chat bot",O)}}function I(M){if(p.value&&!m.value){const O=document.querySelector(".draggable-widget-container");O&&!O.contains(M.target)&&(p.value=!1)}}function z(M){m.value=!0,d.value=!1,r.value={x:M.touches[0].clientX,y:M.touches[0].clientY},c.value={...f.value},document.addEventListener("touchmove",Y,{passive:!1}),document.addEventListener("touchend",G)}function Y(M){if(!m.value)return;const O=M.touches[0].clientX-r.value.x,L=M.touches[0].clientY-r.value.y;(Math.abs(O)>3||Math.abs(L)>3)&&(d.value=!0,M.cancelable&&M.preventDefault()),f.value={bottom:c.value.bottom-L,right:c.value.right-O}}function G(){if(m.value=!1,document.removeEventListener("touchmove",Y),document.removeEventListener("touchend",G),!d.value&&a)try{a.showChatBot()}catch{}}function R(M){return new Promise((O,L)=>{if(document.querySelector(`script[src="${M}"]`)){O();return}const j=document.createElement("script");j.src=M,j.async=!0;const ne=setTimeout(()=>{j.onerror=null,j.onload=null,L(new Error(`Timeout loading script: ${M}`))},nu);j.onload=()=>{clearTimeout(ne),O()},j.onerror=Z=>{clearTimeout(ne),L(Z)},document.body.appendChild(j)})}return nn(()=>{document.addEventListener("click",I);const M=Xc();async function O(L){const j=eu(L);if(!j||j.includes("xxxx")){console.warn("Coze Bot ID not configured. AI Assistant will not load.");return}const ne=L==="CN"?tu:iu;try{if(await R(ne),window.CozeWebSDK){a=new window.CozeWebSDK.WebChatClient({config:{bot_id:j},auth:{type:"token",token:Ri(L),onRefreshToken:async()=>Ri(L)},componentProps:{title:"Wasker AI",layout:window.innerWidth<768?"mobile":"pc"},el:document.getElementById("coze-chat-container")}),i=!0;const Z=document.getElementById("coze-chat-container");new ResizeObserver(pe=>{for(const _e of pe){const K=_e.contentRect.height;console.log("[ResizeObserver] Height:",K);const W=K>100;W?p.value=!0:window.innerWidth<768&&(p.value=!1),window.innerWidth<768&&(W?(f.value.bottom=0,f.value.right=0):(f.value.bottom=100,f.value.right=20))}}).observe(Z)}}catch(Z){console.error("Failed to load Coze SDK:",Z),L==="GLOBAL"&&console.log("Attempting failover to CN SDK...")}}console.log(`Initializing AI Assistant for region: ${M}`),setTimeout(()=>{O(M)},1e3)}),tn(()=>{document.removeEventListener("click",I),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",Y),document.removeEventListener("touchend",G)}),(M,O)=>Xe((V(),$("div",{class:ee(["draggable-widget-container",{"mobile-open":o&&p.value,"desktop-open":!o&&p.value,"widget-hidden":!p.value}]),style:an(!p.value||!o?{bottom:f.value.bottom+"px",right:f.value.right+"px"}:{}),onMousedown:h,onTouchstart:z},[...O[0]||(O[0]=[u("div",{id:"coze-chat-container",class:"coze-target"},null,-1),u("div",{class:"drag-shield"},null,-1)])],38)),[[vr,l.value]])}},ou=Ve(ru,[["__scopeId","data-v-1202253e"]]),su={__name:"App",setup(n){return(t,l)=>(V(),$(Ie,null,[he(Yc),he(ou)],64))}},Mt=gr(su);Mt.use(br());Mt.use(Pt);Pt.isReady().then(()=>{Mt.mount("#app")});export{Me as R,Fn as T,Ve as _,Sn as a,Oo as b,mu as c,Dn as d,qi as s,Ln as u};
