"use strict";(self.webpackChunksimples_ui=self.webpackChunksimples_ui||[]).push([[7422],{5139:(e,l,i)=>{i.d(l,{Z:()=>r});var n=i(6252),t={class:"app-type"},a=(0,n.aZ)({name:"AppType"}),o=i(3379),d=i.n(o),s=i(3610);d()(s.Z,{insert:"head",singleton:!1}),s.Z.locals,a.render=function(e,l,i,a,o,d){return(0,n.wg)(),(0,n.iD)("div",t,[(0,n.WI)(e.$slots,"default")])};var r=a},7422:(e,l,i)=>{i.r(l),i.d(l,{default:()=>g});var n=i(6252),t=i(2262),a=i(3577),o={class:"simple-switch"},d={name:"SimplesSwitch",props:{modelValue:Boolean,disabled:Boolean,color:String,closeColor:String,width:String,height:String,cicle:String,loading:Boolean},setup(e,l){var i=l.emit;return{handleClick:()=>{e.disabled||i("update:modelValue",!e.modelValue)}}}},s=i(3379),r=i.n(s),p=i(72);r()(p.Z,{insert:"head",singleton:!1}),p.Z.locals,d.render=function(e,l,i,t,d,s){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",{class:(0,a.C_)(["simple-switch--warp",[i.modelValue?"simple-switch--warp-r":""]]),onClick:l[0]||(l[0]=(...e)=>t.handleClick&&t.handleClick(...e)),style:(0,a.j5)({width:i.width+"px",height:i.height+"px"})},[(0,n._)("div",{class:(0,a.C_)(["simple-switch--item",[i.modelValue?"simple-switch--item-r":""]]),style:(0,a.j5)({width:i.cicle+"px",height:i.cicle+"px"})},null,6)],6)])};var u=d,c=i(5139),h=(0,n.Uk)("基本使用"),m=(0,n.Uk)("不可用"),w=(0,n.Uk)("不同大小"),g={setup(e){var l=(0,t.iH)(!1),i=(0,t.iH)(!0);return(0,t.iH)(!1),(e,a)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.kq)(" 基本使用 "),(0,n.Wm)((0,t.SU)(c.Z),null,{default:(0,n.w5)((()=>[h])),_:1}),(0,n.Wm)(u,{modelValue:(0,t.SU)(l),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,t.dq)(l)?l.value=e:l=e)},null,8,["modelValue"]),(0,n.kq)(" 不可用 "),(0,n.Wm)((0,t.SU)(c.Z),null,{default:(0,n.w5)((()=>[m])),_:1}),(0,n.Wm)(u,{modelValue:(0,t.SU)(i),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,t.dq)(i)?i.value=e:i=e),disabled:""},null,8,["modelValue"]),(0,n.kq)(" 自定义颜色 "),(0,n.kq)(' <app-type>自定义颜色</app-type>\n  <simples-switch v-model="colorValue" color="#ff9f00" close-color="#f5cb90" /> '),(0,n.kq)(" 不同大小 "),(0,n.Wm)((0,t.SU)(c.Z),null,{default:(0,n.w5)((()=>[w])),_:1}),(0,n.Wm)(u,{modelValue:(0,t.SU)(l),"onUpdate:modelValue":a[2]||(a[2]=e=>(0,t.dq)(l)?l.value=e:l=e),width:"100",height:"30",cicle:"40"},null,8,["modelValue"])],64))}}},72:(e,l,i)=>{var n=i(3645),t=i.n(n)()((function(e){return e[1]}));t.push([e.id,"\n.simple-switch--warp {\n  position: relative;\n  width: 50px;\n  height: 20px;\n  border-radius: 10px;\n  background-color: rgb(212, 211, 211);\n}\n.simple-switch--item {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background-color: #fff;\n  top: -15%;\n  box-shadow: 0px 0px 3px gray;\n}\n.simple-switch--item-r {\n  background-color: rgb(19, 145, 196);\n  right: 0%;\n}\n.simple-switch--warp-r {\n  background-color: skyblue;\n}\n.simple-switch {\n  width: 80px;\n  height: 30px;\n}\n",""]),l.Z=t},3610:(e,l,i)=>{var n=i(3645),t=i.n(n)()((function(e){return e[1]}));t.push([e.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]),l.Z=t}}]);