"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4082],{74082:(t,l,e)=>{e.r(l),e.d(l,{default:()=>s});const a={data:function(){return{title:null,link:null}},methods:{scrapeDocID:function(){this.link.replace(/.*\/d\//,"").replace(/\/.*/,"")}}};const s=(0,e(51900).Z)(a,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("v-card",[e("v-card-title",[e("v-btn",{attrs:{icon:""},on:{click:function(l){return t.$emit("toggleCancelDialog")}}},[e("v-icon",[t._v("mdi-close")])],1),t._v(" "),e("span",{staticClass:"text-h6"},[t._v(" Attach Link")])],1),t._v(" "),e("v-card-text",[e("v-row",[e("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[e("v-textarea",{staticClass:"mb-0 pb-0",attrs:{outlined:"",dense:"",rows:"1",label:"Title","auto-grow":""},model:{value:t.title,callback:function(l){t.title=l},expression:"title"}})],1),t._v(" "),e("v-col",{staticClass:"mb-0 pb-0 mt-0 pt-0",attrs:{cols:"12"}},[e("v-textarea",{staticClass:"mb-0 pb-0",attrs:{outlined:"",dense:"",rows:"1",label:"Link","auto-grow":""},model:{value:t.link,callback:function(l){t.link=l},expression:"link"}})],1)],1)],1),t._v(" "),e("v-card-actions",{staticClass:"pb-2 pl-5 pr-5"},[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"primary",block:"",rounded:""},on:{click:t.scrapeDocID}},[t._v("\n        Confirm\n      ")])],1)],1)}),[],!1,null,null,null).exports}}]);