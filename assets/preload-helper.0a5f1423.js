import{x as p,G as m,g,S as f}from"./vendor.2c8e45dd.js";const C=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};C();const S="Simples",y="simples",N="0.0.0.0",b=8080,v="Simples",w="https://www.runoob.com/wp-content/uploads/2017/01/vue.png",U="zh-CN",z={style:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"},x={baidu:""},L=!1,P={menu:[{text:{"zh-CN":"\u5F00\u53D1\u6307\u5357","en-US":"Developer guide"},type:1},{text:{"zh-CN":"\u57FA\u672C\u4ECB\u7ECD","en-US":"Basic Introduce"},doc:"home",type:3},{text:{"zh-CN":"\u5FEB\u901F\u5F00\u59CB","en-US":"Quickstart"},doc:"quickstart",type:3},{text:{"zh-CN":"\u6309\u9700\u5F15\u5165","en-US":"Import on demand"},doc:"importOnDemand",type:3},{text:{"zh-CN":"\u57FA\u7840\u7EC4\u4EF6","en-US":"Basic Components"},type:1},{text:{"zh-CN":"Button \u6309\u94AE","en-US":"Button"},doc:"button",type:2},{text:{"zh-CN":"Cell \u5355\u5143\u683C","en-US":"Cell"},doc:"cell",type:2},{text:{"zh-CN":"Image \u56FE\u7247","en-US":"Image"},doc:"image",type:2},{text:{"zh-CN":"Loading \u52A0\u8F7D","en-US":"Loading"},doc:"loading",type:2},{text:{"zh-CN":"Chip \u7EB8\u7247","en-US":"Chip"},doc:"chip",type:2},{text:{"zh-CN":"Badge \u5FBD\u6807","en-US":"Badge"},doc:"badge",type:2},{text:{"zh-CN":"\u5C55\u793A\u7EC4\u4EF6","en-US":"Display Components"},type:1},{text:{"zh-CN":"Skeleton \u9AA8\u67B6\u5C4F","en-US":"Skeleton"},doc:"skeleton",type:2},{text:{"zh-CN":"ImagePreview \u56FE\u7247\u9884\u89C8","en-US":"ImagePreview"},doc:"image-preview",type:2},{text:{"zh-CN":"Card \u5361\u7247","en-US":"Card"},doc:"card",type:2},{text:{"zh-CN":"Divider \u5206\u5272\u7EBF","en-US":"Divider"},doc:"divider",type:2},{text:{"zh-CN":"\u5BFC\u822A\u7EC4\u4EF6","en-US":"Navigation Components"},type:1},{text:{"zh-CN":"Tabs \u9009\u9879\u5361","en-US":"Tabs"},doc:"tabs",type:2},{text:{"zh-CN":"\u53CD\u9988\u7EC4\u4EF6","en-US":"Action Components"},type:1},{text:{"zh-CN":"Snackbar \u6D88\u606F\u6761","en-US":"Snackbar"},doc:"snackbar",type:2},{text:{"zh-CN":"Dialog \u5BF9\u8BDD\u6846","en-US":"Dialog"},doc:"dialog",type:2},{text:{"zh-CN":"\u8868\u5355\u7EC4\u4EF6","en-US":"Form Components"},type:1},{text:{"zh-CN":"Input \u8F93\u5165\u6846","en-US":"Input"},doc:"input",type:2},{text:{"zh-CN":"Switch \u5F00\u5173","en-US":"Switch"},doc:"switch",type:2}],redirect:"/home",title:{"zh-CN":"Simpls \u9762\u5411Vue3\u7684\u7EC4\u4EF6\u5E93","en-US":"PC components built for Vue3"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},github:"https://github.com/sdhushu/simples-ui"}},k={redirect:"/home",title:{"zh-CN":"Simpls \u9762\u5411Vue3\u7684\u7EC4\u4EF6\u5E93","en-US":"PC components built for Vue3"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"}}},E={"color-primary":"#41B883","color-link":"#00c48f","color-type":"#00c48f","color-progress":"#1d92e9","color-pc-language-active":"#3a7afe","color-pc-language-active-background":"#edf5ff","color-side-bar":"#41B883","color-side-bar-active-background":"#cde6c7","color-app-bar":"#41B883","color-mobile-cell-hover":"#3a7afe","color-mobile-cell-hover-background":"#3a7afe1a","color-mobile-language-active":"#3a7afe","color-mobile-language-active-background":"#edf5ff"};var A={name:S,namespace:y,host:N,port:b,title:v,logo:w,defaultLanguage:U,highlight:z,analysis:x,useMobile:L,pc:P,mobile:k,themes:E},_=(e,t)=>{for(const[r,n]of t)e[r]=n;return e};function O(e){return e.replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function j(e){return O(e).replace(e.charAt(0),e.charAt(0).toUpperCase())}function I(){const[,e,t]=window.location.hash.split("/");return{language:e,menuName:t}}function $(){return/Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent)}var s;(function(e){e[e.TITLE=1]="TITLE",e[e.COMPONENT=2]="COMPONENT",e[e.DOCUMENTATION=3]="DOCUMENTATION"})(s||(s={}));function M(){return window.self!==window.top}function V(e={}){return Object.keys(e).reduce((t,r)=>{const n=e[r];return n&&(t[r]=n),t},{})}function c(){const{href:e}=window.location,t=e.slice(e.indexOf("?"));return new URLSearchParams(t)}function q(e,t="mobile"){const r=()=>{var o;const n=t==="mobile"?(o=c().get("language"))!=null?o:"zh-CN":I().language;e(n)};l(r),r()}function H(e){const t=()=>{var n;const r=(n=c().get("platform"))!=null?n:"mobile";e(r)};l(t),t()}function l(e){p(()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),m(()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}function R(e){const t=g(e,"themes",{});Object.keys(t).forEach(r=>{const n=t[r];f({[`--site-${r}`]:n})})}const B="modulepreload",d={},D="./",F=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${D}${n}`,n in d)return;d[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":B,o||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),o)return new Promise((h,u)=>{i.addEventListener("load",h),i.addEventListener("error",u)})})).then(()=>t())};export{s as M,_,F as a,j as b,A as c,M as d,H as e,I as g,$ as i,V as r,R as s,q as w};