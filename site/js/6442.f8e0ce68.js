"use strict";(self.webpackChunksimples_ui=self.webpackChunksimples_ui||[]).push([[6442],{5139:(n,l,e)=>{e.d(l,{Z:()=>o});var a=e(6229),t={class:"app-type"},i=(0,a.aZ)({name:"AppType"}),r=e(3379),s=e.n(r),u=e(3610);s()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,i.render=function(n,l,e,i,r,s){return(0,a.wg)(),(0,a.iD)("div",t,[(0,a.WI)(n.$slots,"default")])};var o=i},3264:(n,l,e)=>{e.d(l,{Z:()=>c});var a=e(6229),t={class:"simples-tab-item",ref:"ItemRef"},i=e(2343),r={name:"SimplesTabItem",props:{name:String},setup(n,l){var e=(0,i.iH)(null);return(0,a.bv)((()=>{e.value.ariaLabel=n.name})),{ItemRef:e}}},s=e(3379),u=e.n(s),o=e(3833);u()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,r.render=function(n,l,e,i,r,s){return(0,a.wg)(),(0,a.iD)("div",t,[(0,a.WI)(n.$slots,"default")],512)};var c=r},3661:(n,l,e)=>{e.d(l,{Z:()=>c});var a=e(6229),t={class:"simples-tabs-items",ref:"ItemRef"},i=e(2343),r={name:"SimplesTabsItems",props:{active:String,list:Object},setup(n,l){var e=(0,i.iH)(null);return n.active,(0,a.bv)((()=>{(0,a.YP)((()=>n.active),((l,a)=>{var t;console.log(l,n.active),l&&(t=-1,n.list.forEach((l=>{t++,l==n.active&&(()=>{console.log(e);var l=e.value.offsetWidth;console.log(-l*t);for(var a=0;a<n.list.length;a++)e.value.children[a].style="transform: translateX(".concat(-l*t,"px)")})()})))}),{immediate:!0})})),{ItemRef:e}}},s=e(3379),u=e.n(s),o=e(2588);u()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,r.render=function(n,l,e,i,r,s){return(0,a.wg)(),(0,a.iD)("div",t,[(0,a.WI)(n.$slots,"default")],512)};var c=r},6442:(n,l,e)=>{e.r(l),e.d(l,{default:()=>cn});var a=e(6229),t=e(2343),i=e(2502),r={name:"SimplesTabs",props:{active:String,color:String,activeColor:String,inactiveColor:String},setup(n,l){var e=(0,t.iH)(0),i=(0,t.iH)(null),r=l.emit,s=(0,t.iH)(0);(0,a.bv)((()=>{for(var l=function(l){n.active&&n.active==i.value.children[l].ariaLabel&&u(i.value.children[l])},e=0;e<i.value.children.length;e++)l(e)}));var u=l=>{for(var a=0;a<i.value.children.length;a++)i.value.children[a].style="color:".concat(n.inactiveColor)||0;l.path?(()=>{for(var a=function(a){"simple-wrap"==l.path[a].className&&(r("update:active",l.path[a].ariaLabel),l.path[a].style="color:".concat(n.activeColor)||0,s.value=l.path[a].offsetLeft+"px",e.value=l.path[a].clientWidth+"px")},t=0;t<l.path.length;t++)a(t)})():(l.style="color:".concat(n.activeColor)||0,s.value=l.offsetLeft+"px",e.value=l.clientWidth+"px")};return{handleClick:u,width:e,translateX:s,divEle:i}}},s=e(3379),u=e.n(s),o=e(5652);u()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,r.render=function(n,l,e,t,r,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{class:"simple-tabs",ref:"divEle",onClick:l[0]||(l[0]=(...n)=>t.handleClick&&t.handleClick(...n)),style:(0,i.j5)({backgroundColor:e.color})},[(0,a.WI)(n.$slots,"default")],4),(0,a._)("div",{class:"simple-line",style:(0,i.j5)({width:"".concat(t.width),transform:"translateX(".concat(t.translateX,")")})},null,4)],64)};var c=r,p=["ariaLabel"],d={class:"simple-tab"},f={name:"SimplesTab",props:{name:String,disabled:Boolean},setup:(n,l)=>({line:(0,t.iH)(0)})},m=e(6436);u()(m.Z,{insert:"head",singleton:!1}),m.Z.locals,f.render=function(n,l,e,t,r,s){return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["simple-wrap",[e.disabled?"simple-disabled":""]]),ariaLabel:e.name},[(0,a._)("div",d,[(0,a.WI)(n.$slots,"default")])],10,p)};var v=f,h=e(3661),k=e(3264),_=(e(5139),(0,a.Uk)("初始化选中")),w=(0,a._)("span",null,[(0,a._)("span",null,[(0,a._)("span",null,"232323")])],-1),g=(0,a.Uk)("我"),W=(0,a.Uk)("消息中心"),b=(0,a.Uk)("订单"),U=(0,a.Uk)("基础使用"),C=(0,a._)("span",null,[(0,a._)("span",null,[(0,a._)("span",null,"232323")])],-1),Z=(0,a.Uk)("我的工作台"),S=(0,a.Uk)("消息中心"),x=(0,a.Uk)("订单管理"),y=(0,a.Uk)("修改样式"),I=(0,a._)("span",null,[(0,a._)("span",null,[(0,a._)("span",null,"232323")])],-1),q=(0,a.Uk)("我的工作台"),H=(0,a.Uk)("消息中心"),L=(0,a.Uk)("订单管理"),D=(0,a.Uk)("禁用选项"),T=(0,a._)("span",null,[(0,a._)("span",null,[(0,a._)("span",null,"232323")])],-1),X=(0,a.Uk)("我的工作台"),$=(0,a.Uk)("消息中心"),j=(0,a.Uk)("订单管理"),R=(0,a.Uk)("视图联动"),E=(0,a._)("span",null,[(0,a._)("span",null,[(0,a._)("span",null,"232323")])],-1),Y=(0,a.Uk)("我的工作台"),z=(0,a.Uk)("消息中心"),A=(0,a.Uk)("订单管理"),B=(0,a.Uk)("订单管理5"),N=(0,a._)("span",null,null,-1),O=(0,a._)("span",null,null,-1),P=(0,a._)("span",null,null,-1),F=(0,a._)("span",null,null,-1),G=(0,a._)("span",null,null,-1),J=(0,a._)("span",null,null,-1),K=(0,a.Uk)(" 呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。 我用子弹写日记，介绍完了风景。 接下来换介绍我自己。 我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。 "),M=(0,a.Uk)(" 很多人不长眼睛，嚣张都靠武器。 赤手空拳就缩成蚂蚁。 不用麻烦了，不用麻烦了。 不用麻烦，不用麻烦了，不用麻烦了。 "),Q=(0,a.Uk)(" 你们一起上，我在赶时间。 每天决斗观众都累了，英雄也累了。 不用麻烦了，不用麻烦了。 副歌不长你们有几个，一起上好了。 正义呼唤我，美女需要我。 牛仔很忙的。 "),V=(0,a.Uk)(" 很多人不长眼睛，嚣张都靠武器。 赤手空拳就缩成蚂蚁。 不用麻烦了，不用麻烦了。 不用麻烦，不用麻烦了，不用麻烦了。 "),nn=(0,a._)("span",null,null,-1),ln=(0,a._)("span",null,null,-1),en=(0,a._)("span",null,null,-1),an=(0,a._)("span",null,null,-1),tn=(0,a._)("span",null,null,-1),rn=(0,a._)("span",null,null,-1),sn=(0,a.Uk)(" 呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。 我用子弹写日记，介绍完了风景。 接下来换介绍我自己。 我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。 "),un={setup(n){var l=(0,t.iH)("选项卡2"),e=(0,t.qj)(["选项卡1","选项卡2","选项卡3","选项卡4","选项卡5"]),i=()=>{console.log(111)};return(n,r)=>{var s=(0,a.up)("apptype");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.kq)(" 初始化选中 "),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[_])),_:1}),(0,a.Wm)(c,{active:l.value,"onUpdate:active":r[0]||(r[0]=n=>l.value=n)},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{name:"选项卡1"},{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)(v,{name:"选项卡2"},{default:(0,a.w5)((()=>[g])),_:1}),(0,a.Wm)(v,{name:"选项卡3"},{default:(0,a.w5)((()=>[W])),_:1}),(0,a.Wm)(v,{name:"选项卡4"},{default:(0,a.w5)((()=>[b])),_:1})])),_:1},8,["active"]),(0,a.kq)(" 基础使用 "),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[U])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[C])),_:1}),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[Z])),_:1}),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[S])),_:1}),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[x])),_:1})])),_:1}),(0,a.kq)(" 修改样式 "),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[y])),_:1}),(0,a.Wm)(c,{color:"#2979ff","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[I])),_:1}),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[q])),_:1}),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[H])),_:1}),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[L])),_:1})])),_:1}),(0,a.kq)(" 禁用选项 "),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[D])),_:1}),(0,a.Wm)(c,{color:"#2979ff","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{onClick:(0,t.SU)(i)},{default:(0,a.w5)((()=>[T])),_:1},8,["onClick"]),(0,a.Wm)(v,{onClick:(0,t.SU)(i)},{default:(0,a.w5)((()=>[X])),_:1},8,["onClick"]),(0,a.Wm)(v,{onClick:(0,t.SU)(i)},{default:(0,a.w5)((()=>[$])),_:1},8,["onClick"]),(0,a.Wm)(v,{disabled:"",onClick:(0,t.SU)(i)},{default:(0,a.w5)((()=>[j])),_:1},8,["onClick"])])),_:1}),(0,a.kq)(" 容器垂直布局 "),(0,a.kq)(' <simples-tabs\n    color="#2979ff"\n    layout-direction="vertical"\n    active-color="#fff"\n    inactive-color="hsla(0, 0%, 100%, .6)"\n  >\n    <simples-tab @click="handleClick"\n      ><span\n        ><span><span>232323</span></span></span\n      ></simples-tab\n    >\n    <simples-tab @click="handleClick">我的工作台</simples-tab>\n    <simples-tab @click="handleClick">消息中心</simples-tab>\n  </simples-tabs> '),(0,a.kq)(" 视图联动 "),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[R])),_:1}),(0,a.Wm)(c,{active:l.value,"onUpdate:active":r[1]||(r[1]=n=>l.value=n),color:"#2979ff","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{name:"选项卡1",onClick:(0,t.SU)(i)},{default:(0,a.w5)((()=>[E])),_:1},8,["onClick"]),(0,a.Wm)(v,{name:"选项卡2",onClick:(0,t.SU)(i)},{default:(0,a.w5)((()=>[Y])),_:1},8,["onClick"]),(0,a.Wm)(v,{name:"选项卡3",onClick:(0,t.SU)(i)},{default:(0,a.w5)((()=>[z])),_:1},8,["onClick"]),(0,a.Wm)(v,{name:"选项卡4",onClick:(0,t.SU)(i)},{default:(0,a.w5)((()=>[A])),_:1},8,["onClick"]),(0,a.Wm)(v,{name:"选项卡5",onClick:(0,t.SU)(i)},{default:(0,a.w5)((()=>[B])),_:1},8,["onClick"])])),_:1},8,["active"]),(0,a.Wm)(h.Z,{active:l.value,"onUpdate:active":r[2]||(r[2]=n=>l.value=n),list:(0,t.SU)(e)},{default:(0,a.w5)((()=>[(0,a.Wm)(k.Z,{name:"选项卡1"},{default:(0,a.w5)((()=>[N,O,P,F,G,J,K])),_:1}),(0,a.Wm)(k.Z,{name:"选项卡2"},{default:(0,a.w5)((()=>[M])),_:1}),(0,a.Wm)(k.Z,{name:"选项卡3"},{default:(0,a.w5)((()=>[Q])),_:1}),(0,a.Wm)(k.Z,{name:"选项卡4"},{default:(0,a.w5)((()=>[V])),_:1}),(0,a.Wm)(k.Z,{name:"选项卡5"},{default:(0,a.w5)((()=>[nn,ln,en,an,tn,rn,sn])),_:1})])),_:1},8,["active","list"])],64)}}},on=e(3345),cn=(u()(on.Z,{insert:"head",singleton:!1}),on.Z.locals,un)},3833:(n,l,e)=>{var a=e(7705),t=e.n(a)()((function(n){return n[1]}));t.push([n.id,"\n.simples-tab-item {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex: none;\r\n    /* transform: translateX(-1280px); */\n}\r\n",""]),l.Z=t},6436:(n,l,e)=>{var a=e(7705),t=e.n(a)()((function(n){return n[1]}));t.push([n.id,"\n.simple-tab {\r\n  padding: 0 20px;\r\n  font-size: 14px;\r\n  /* color: #fff; */\r\n  transition: 2s linear;\r\n  cursor: pointer;\r\n  white-space: nowrap;\n}\n.simple-wrap {\r\n  height: 100%;\r\n  display: flex;\r\n  position: relative;\r\n  align-items: center;\n}\n.simple-disabled {\r\n  pointer-events: none;\n}\r\n\r\n\r\n\r\n\r\n\r\n",""]),l.Z=t},2588:(n,l,e)=>{var a=e(7705),t=e.n(a)()((function(n){return n[1]}));t.push([n.id,"\n.simples-tabs-items {\r\n  width: 100%;\r\n  height: auto;\r\n  background: cornflowerblue;\r\n  display: flex;\r\n  transition: width 1s, height 1s, transform 1s;\r\n  overflow: auto;\n}\n.simples-tabs-items::-webkit-scrollbar {\r\n  width: 0;\r\n  height: 0;\n}\r\n",""]),l.Z=t},5652:(n,l,e)=>{var a=e(7705),t=e.n(a)()((function(n){return n[1]}));t.push([n.id,"\n.simple-tabs {\r\n  width: auto;\r\n  height: 60px;\r\n  /* padding-left: 55px; */\r\n  /* background-color: aqua; */\r\n  display: flex;\n}\n.simple-line {\r\n  width: 0;\r\n  height: 3px;\r\n  background-color: #409eff;\r\n  transition: width 1s, height 1s, transform 1s;\n}\r\n",""]),l.Z=t},3345:(n,l,e)=>{var a=e(7705),t=e.n(a)()((function(n){return n[1]}));t.push([n.id,"\n* {\n  margin: 0;\n  padding: 0;\n}\n.ds {\n  width: 500px;\n  height: 800px;\n}\n.cs {\n  width: 100%;\n  height: 100%;\n}\n",""]),l.Z=t},3610:(n,l,e)=>{var a=e(7705),t=e.n(a)()((function(n){return n[1]}));t.push([n.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]),l.Z=t}}]);