import{_ as N,c as i,r as F,g as S,M as R,s as q,i as W,a as t}from"./preload-helper.043fafbb.js";import{o as _,c as u,a as E,r as m,g as c,u as G,b as J,d as b,e as D,f as L,t as y,h as f,w as P,i as A,v as U,n as K,F as w,j as k,T as Q,k as M,l as X,m as z,p as $,q as Y,s as Z,x as ee,y as te,z as ne,A as ae,P as oe,B as se,C as re,D as ie,E as _e,R as ce,I as le}from"./vendor.1aa91344.js";const pe={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},de={class:"varlet-site-mobile var-elevation--3"},ue={class:"varlet-site-mobile-content"},me=["src"];function he(e,o,a,n,p,s){return _(),u("div",de,[E("div",ue,[E("iframe",{src:`./mobile.html#/${a.componentName}?language=${a.language}&platform=pc&replace=${a.replace}`},null,8,me)])])}var ve=N(pe,[["render",he],["__scopeId","data-v-64a53243"]]);const ge={name:"AppHeader",props:{language:{type:String}},setup(){const e=m(c(i,"title")),o=m(c(i,"logo")),a=m(c(i,"pc.header.i18n")),n=m(c(i,"pc.header.github")),p=m(!1),s=G(),l=J(()=>F(a.value));return{logo:o,title:e,languages:a,nonEmptyLanguages:l,github:n,isOpenMenu:p,handleLanguageChange:r=>{const{menuName:d}=S();s.replace(`/${r}/${d}`),p.value=!1}}}},fe={class:"varlet-site-header"},Ee={class:"varlet-site-header__lead"},be=["src"],Te={key:1,class:"varlet-site-header__title"},Ce={class:"varlet-site-header__tail"},Ne=["href"];function Le(e,o,a,n,p,s){const l=b("var-icon"),g=b("var-cell"),r=D("ripple");return _(),u("div",fe,[E("div",Ee,[n.logo?(_(),u("img",{key:0,class:"varlet-site-header__logo",src:n.logo,alt:"logo"},null,8,be)):L("v-if",!0),n.title?(_(),u("div",Te,y(n.title),1)):L("v-if",!0)]),E("div",Ce,[n.languages?(_(),u("div",{key:0,class:"varlet-site-header__language",onMouseenter:o[0]||(o[0]=d=>n.isOpenMenu=!0),onMouseleave:o[1]||(o[1]=d=>n.isOpenMenu=!1)},[f(l,{name:"translate",size:"26px",color:"#666"}),f(l,{name:"chevron-down",color:"#666"}),f(Q,{name:"fade"},{default:P(()=>[A(E("div",{class:"varlet-site-header__language-list var-elevation--5",style:K({pointerEvents:n.isOpenMenu?"auto":"none"})},[(_(!0),u(w,null,k(n.nonEmptyLanguages,(d,T)=>A((_(),M(g,{key:T,class:z({"varlet-site-header__language-list--active":a.language===T}),onClick:V=>n.handleLanguageChange(T)},{default:P(()=>[X(y(d),1)]),_:2},1032,["class","onClick"])),[[r]])),128))],4),[[U,n.isOpenMenu]])]),_:1})],32)):L("v-if",!0),n.github?(_(),u("a",{key:1,class:"varlet-site-header__link",target:"_blank",href:n.github},[f(l,{name:"github",color:"#666",size:28})],8,Ne)):L("v-if",!0)])])}var ye=N(ge,[["render",Le],["__scopeId","data-v-15d54e16"]]);const Ae={name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup(e,{emit:o}){const a=$(R),n=m(c(i,"themes"));return{menuTypes:a,themes:n,changeRoute:s=>{s.type===R.TITLE||e.menuName===s.doc||o("change",s)}}}},Ie={class:"varlet-site-sidebar var-elevation--3"},Se={key:0,class:"varlet-site-sidebar__item--title"},Re={key:1,class:"varlet-site-sidebar__item--link"};function Pe(e,o,a,n,p,s){const l=b("var-cell"),g=D("ripple");return _(),u("div",Ie,[(_(!0),u(w,null,k(a.menu,(r,d)=>A((_(),M(l,{class:z(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":r.doc===a.menuName,"varlet-site-sidebar__link":r.type!==n.menuTypes.TITLE,"varlet-site-sidebar__title":r.type===n.menuTypes.TITLE}]),key:d,onClick:T=>n.changeRoute(r)},{default:P(()=>[r.type===n.menuTypes.TITLE?(_(),u("span",Se,y(r.text[a.language]),1)):(_(),u("span",Re,y(r.text[a.language]),1))]),_:2},1032,["class","onClick"])),[[g,{touchmoveForbid:!1,disabled:r.type===n.menuTypes.TITLE,color:n.themes["color-side-bar"]}]])),128))])}var ze=N(Ae,[["render",Pe],["__scopeId","data-v-251bcda4"]]);const Oe=Y({components:{AppMobile:ve,AppHeader:ye,AppSidebar:ze},setup(){const e=c(i,"defaultLanguage"),o=m(c(i,"pc.menu",[])),a=m(c(i,"useMobile")),n=c(i,"mobile.redirect"),p=m(""),s=m(null),l=m(""),g=m(null),r=Z(),d=h=>{const v=o.value.find(I=>I.doc===h);return(v==null?void 0:v.type)===R.COMPONENT?h:n.slice(1)},T=()=>{const{language:h,menuName:v}=S();if(W()&&a.value){window.location.href=`./mobile.html#/${v}?language=${h||e}&platform=mobile`;return}ne(()=>{const I=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-cell"),j=o.value.findIndex(H=>H.doc===v);j!==-1&&I[j].scrollIntoView({block:"center",inline:"start"})})},V=h=>{g.value.scrollTop=0,s.value=d(h.doc),l.value=h.doc};return ee(()=>T()),te(()=>r.path,()=>{const{language:h,menuName:v}=S();!h||!v||(s.value=d(v),l.value=v,p.value=h,document.title=c(i,"pc.title")[h])},{immediate:!0}),q(i),{menu:o,language:p,componentName:s,menuName:l,doc:g,useMobile:a,handleSidebarChange:V}}}),Ve={class:"varlet-site"},je={class:"varlet-site-content"};function De(e,o,a,n,p,s){const l=b("app-header"),g=b("app-sidebar"),r=b("router-view"),d=b("app-mobile");return _(),u("div",Ve,[f(l,{language:e.language},null,8,["language"]),E("div",je,[f(g,{language:e.language,menu:e.menu,"menu-name":e.menuName,onChange:e.handleSidebarChange},null,8,["language","menu","menu-name","onChange"]),E("div",{class:z(["varlet-site-doc-container",[!e.useMobile&&"varlet-site-doc-container--pc-only"]]),ref:"doc"},[f(r)],2),A(f(d,{"component-name":e.componentName,language:e.language,replace:e.menuName},null,8,["component-name","language","replace"]),[[U,e.useMobile]])])])}var Ue=N(Oe,[["render",De]]),x=[{path:"/en-US/badge",component:()=>t(()=>import("./en-US.393e242c.js"),["assets/en-US.393e242c.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/badge",component:()=>t(()=>import("./zh-CN.10b16dbd.js"),["assets/zh-CN.10b16dbd.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/en-US/button",component:()=>t(()=>import("./en-US.3e1e8c29.js"),["assets/en-US.3e1e8c29.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/button",component:()=>t(()=>import("./zh-CN.faad9ae3.js"),["assets/zh-CN.faad9ae3.js","assets/index.1375627c.css","assets/Button.25c4478a.js","assets/Button.e247b0f7.css","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css","assets/wrap.966d70f3.js","assets/wrap.06e2189f.css","assets/AppType.a88c4d32.js","assets/AppType.1d0f11d5.css"])},{path:"/en-US/card",component:()=>t(()=>import("./en-US.cd075085.js"),["assets/en-US.cd075085.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/card",component:()=>t(()=>import("./zh-CN.e999c2a3.js"),["assets/zh-CN.e999c2a3.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/en-US/cell",component:()=>t(()=>import("./en-US.9fd74c56.js"),["assets/en-US.9fd74c56.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/cell",component:()=>t(()=>import("./zh-CN.3a6d3389.js"),["assets/zh-CN.3a6d3389.js","assets/Cell.1f5e23a6.js","assets/Cell.778ed884.css","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css","assets/wrap.966d70f3.js","assets/wrap.06e2189f.css"])},{path:"/en-US/chip",component:()=>t(()=>import("./en-US.962450a8.js"),["assets/en-US.962450a8.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/chip",component:()=>t(()=>import("./zh-CN.66edba79.js"),["assets/zh-CN.66edba79.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/en-US/dialog",component:()=>t(()=>import("./en-US.e0222455.js"),["assets/en-US.e0222455.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/dialog",component:()=>t(()=>import("./zh-CN.cf88b07d.js"),["assets/zh-CN.cf88b07d.js","assets/index.39da263d.js","assets/index.4779680a.css","assets/Button.25c4478a.js","assets/Button.e247b0f7.css","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css","assets/Snackbar.085e16d2.js","assets/Snackbar.f8123f1d.css"])},{path:"/en-US/divider",component:()=>t(()=>import("./en-US.d60936d4.js"),["assets/en-US.d60936d4.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/divider",component:()=>t(()=>import("./zh-CN.74105d2f.js"),["assets/zh-CN.74105d2f.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/en-US/image",component:()=>t(()=>import("./en-US.98f714d9.js"),["assets/en-US.98f714d9.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/image",component:()=>t(()=>import("./zh-CN.9698b6dc.js"),["assets/zh-CN.9698b6dc.js","assets/Image.92d3631f.js","assets/Image.be842c60.css","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css","assets/wrap.966d70f3.js","assets/wrap.06e2189f.css"])},{path:"/en-US/image-preview",component:()=>t(()=>import("./en-US.fe09243b.js"),["assets/en-US.fe09243b.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/image-preview",component:()=>t(()=>import("./zh-CN.07832d7a.js"),["assets/zh-CN.07832d7a.js","assets/index.10ed0edf.js","assets/index.b0101f89.css","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css","assets/Button.25c4478a.js","assets/Button.e247b0f7.css"])},{path:"/en-US/input",component:()=>t(()=>import("./en-US.74967013.js"),["assets/en-US.74967013.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/input",component:()=>t(()=>import("./zh-CN.00e3cbcb.js"),["assets/zh-CN.00e3cbcb.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/en-US/loading",component:()=>t(()=>import("./en-US.5606d347.js"),["assets/en-US.5606d347.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/loading",component:()=>t(()=>import("./zh-CN.c359c9e5.js"),["assets/zh-CN.c359c9e5.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/en-US/skeleton",component:()=>t(()=>import("./en-US.4b82c88a.js"),["assets/en-US.4b82c88a.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/skeleton",component:()=>t(()=>import("./zh-CN.d2350135.js"),["assets/zh-CN.d2350135.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/en-US/snackbar",component:()=>t(()=>import("./en-US.e51d21fa.js"),["assets/en-US.e51d21fa.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/snackbar",component:()=>t(()=>import("./zh-CN.a6513be0.js"),["assets/zh-CN.a6513be0.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/en-US/switch",component:()=>t(()=>import("./en-US.6fbd0392.js"),["assets/en-US.6fbd0392.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/switch",component:()=>t(()=>import("./zh-CN.3737f24f.js"),["assets/zh-CN.3737f24f.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/tab",component:()=>t(()=>import("./zh-CN.f769f775.js"),["assets/zh-CN.f769f775.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/tab-item",component:()=>t(()=>import("./zh-CN.98d3025d.js"),["assets/zh-CN.98d3025d.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/en-US/tabs",component:()=>t(()=>import("./en-US.40f480ed.js"),["assets/en-US.40f480ed.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/tabs",component:()=>t(()=>import("./zh-CN.c4b2f4a9.js"),["assets/zh-CN.c4b2f4a9.js","assets/index.b28e5203.js","assets/index.63219f32.css","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css","assets/TabsItems.1958cd84.js","assets/TabsItems.b0d6c6d3.css","assets/TabItem.f0b5e3e0.js","assets/TabItem.e2e87648.css","assets/AppType.a88c4d32.js","assets/AppType.1d0f11d5.css"])},{path:"/zh-CN/tabs-items",component:()=>t(()=>import("./zh-CN.50301f7a.js"),["assets/zh-CN.50301f7a.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/en-US/home",component:()=>t(()=>import("./home.en-US.b04ce623.js"),["assets/home.en-US.b04ce623.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])},{path:"/zh-CN/home",component:()=>t(()=>import("./home.zh-CN.122d8fc6.js"),["assets/home.zh-CN.122d8fc6.js","assets/preload-helper.043fafbb.js","assets/vendor.1aa91344.js","assets/vendor.88c09e00.css"])}];function we(){const e=$({style:{position:"fixed",width:"100%",left:0,top:0,zIndex:10086},trackColor:"#fff",color:c(i,"themes.color-progress"),lineWidth:3,value:0});let o;const a=()=>{o=window.setTimeout(()=>{if(e.value>=95)return;let s=Math.random();e.value<70&&(s=Math.round(5*Math.random())),e.value+=s,a()},200)},n=()=>{e.value=0,setTimeout(()=>e.color="#3594d9",200),a()},p=()=>{e.value=100,setTimeout(()=>e.color="#fff",300),window.clearTimeout(o)};return ae(oe,e),{start:n,end:p}}const ke=c(i,"defaultLanguage"),B=c(i,"pc.redirect"),Me=c(i,"mobile.redirect");B&&x.push({path:"/:pathMatch(.*)*",redirect:`/${ke}${B}`});const C=se({history:re(),routes:x});let O=!0;const{start:$e,end:xe}=we();C.beforeEach((e,o)=>{if(e.path===o.path)return!1;O=!1,setTimeout(()=>!O&&$e(),200),window._hmt&&e.path&&window._hmt.push(["_trackPageview",`/#${e.fullPath}`])});C.afterEach(()=>{O=!0,xe()});Object.defineProperty(window,"onMobileRouteChange",{value:(e,o,a)=>{if(e===Me){C.replace(`/${o}/${a}`);return}C.replace(`/${o}${e}`)}});ie(Ue).use(C).use(_e).use(ce).use(le).mount("#app");