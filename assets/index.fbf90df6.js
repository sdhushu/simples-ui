import{s as n}from"./Button.617f4c98.js";import{s as i}from"./Snackbar.ad2da3ff.js";import{r as m,o as p,c,f as t,h as a,w as o,O as u,F as f,l as r}from"./vendor.2c8e45dd.js";import"./preload-helper.0a5f1423.js";const k=r("\u663E\u793A\u65F6\u957F"),_=r("\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01 "),v=r("\u5173\u95ED"),h=r("\u6309\u94AE"),B={setup(w){const e=m(!1);let d=()=>{i.info("\u8FD9\u662F\u4E00\u6761\u6D88\u606F")};return(b,s)=>(p(),c(f,null,[t(" \u57FA\u672C\u4F7F\u7528 "),a(n,{type:"primary",block:"",onClick:s[0]||(s[0]=l=>e.value=!e.value)},{default:o(()=>[k]),_:1}),t(' <simplesnackbar v-model:show="show">\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01</simplesnackbar> '),t(" \u5782\u76F4\u6392\u5217 "),a(i,{show:e.value,"onUpdate:show":s[2]||(s[2]=l=>e.value=l)},{action:o(()=>[a(n,{type:"primary",onClick:s[1]||(s[1]=l=>e.value=!e.value)},{default:o(()=>[v]),_:1})]),default:o(()=>[_]),_:1},8,["show"]),t(' <simplesnackbar v-model:show="show" :duration="1000">\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01</simplesnackbar> '),a(n,{onClick:u(d)},{default:o(()=>[h]),_:1},8,["onClick"])],64))}};export{B as default};