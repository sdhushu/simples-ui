import{_ as x}from"./preload-helper.043fafbb.js";import{o as f,c as _,a as V,m as w,n as g,r,f as s,h as i,U as o,w as c,V as m,F as S,l as u}from"./vendor.1aa91344.js";import{A as p}from"./AppType.a88c4d32.js";const y={name:"SimplesSwitch",props:{modelValue:Boolean,disabled:Boolean,color:String,closeColor:String,width:String,height:String,cicle:String,loading:Boolean},setup(d,e){const l=e.emit;return{handleClick:()=>{d.disabled||l("update:modelValue",!d.modelValue)}}}},C={class:"simple-switch"};function k(d,e,l,n,t,a){return f(),_("div",C,[V("div",{class:w(["simple-switch--warp",[l.modelValue?"simple-switch--warp-r":""]]),onClick:e[0]||(e[0]=(...v)=>n.handleClick&&n.handleClick(...v)),style:g({width:l.width+"px",height:l.height+"px"})},[V("div",{class:w(["simple-switch--item",[l.modelValue?"simple-switch--item-r":""]]),style:g({width:l.cicle+"px",height:l.cicle+"px"})},null,6)],6)])}var h=x(y,[["render",k]]);const b=u("\u57FA\u672C\u4F7F\u7528"),B=u("\u4E0D\u53EF\u7528"),N=u("\u4E0D\u540C\u5927\u5C0F"),T={setup(d){let e=r(!1),l=r(!0);return r(!1),(n,t)=>(f(),_(S,null,[s(" \u57FA\u672C\u4F7F\u7528 "),i(o(p),null,{default:c(()=>[b]),_:1}),i(h,{modelValue:o(e),"onUpdate:modelValue":t[0]||(t[0]=a=>m(e)?e.value=a:e=a)},null,8,["modelValue"]),s(" \u4E0D\u53EF\u7528 "),i(o(p),null,{default:c(()=>[B]),_:1}),i(h,{modelValue:o(l),"onUpdate:modelValue":t[1]||(t[1]=a=>m(l)?l.value=a:l=a),disabled:""},null,8,["modelValue"]),s(" \u81EA\u5B9A\u4E49\u989C\u8272 "),s(` <app-type>\u81EA\u5B9A\u4E49\u989C\u8272</app-type>
  <simples-switch v-model="colorValue" color="#ff9f00" close-color="#f5cb90" /> `),s(" \u4E0D\u540C\u5927\u5C0F "),i(o(p),null,{default:c(()=>[N]),_:1}),i(h,{modelValue:o(e),"onUpdate:modelValue":t[2]||(t[2]=a=>m(e)?e.value=a:e=a),width:"100",height:"30",cicle:"40"},null,8,["modelValue"])],64))}};export{T as default};