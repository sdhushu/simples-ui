import{_ as i}from"./preload-helper.0a5f1423.js";import{o as t,c as l,N as r,l as n,t as o,f as a,m as d}from"./vendor.2c8e45dd.js";const c={name:"SimplesCell",props:{title:String,desc:String,border:Boolean}},_={key:0},m={key:1,class:"simple-desc"};function f(s,p,e,v,u,g){return t(),l("div",{class:d(["simple-cell",[e.border?"simple-border":""]])},[r(s.$slots,"left"),n(o(e.title)+" ",1),e.title?a("v-if",!0):(t(),l("span",_,[r(s.$slots,"default")])),e.desc?(t(),l("div",m,o(e.desc),1)):a("v-if",!0),r(s.$slots,"right")],2)}var S=i(c,[["render",f]]);export{S as s};
