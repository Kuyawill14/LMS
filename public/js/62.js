"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62],{62:(e,t,c)=>{c.r(t),c.d(t,{default:()=>a});const l={data:function(){return{imageList:["theme1.jpg","theme2.jpg","theme3.jpg","theme4.jpg","theme5.jpg","theme6.jpg","theme7.jpg","theme8.jpg"],imagelenght:null,SelectedImage:null,CheckSelect:!1}},methods:{SelectImage:function(e){this.SelectedImage==e?(this.SelectedImage=null,this.CheckSelect=!1):(this.SelectedImage=e,this.CheckSelect=!0)},SaveSelect:function(){this.$emit("SaveSelected",this.SelectedImage)}},mounted:function(){this.imagelenght=this.imageList.length}};const a=(0,c(1900).Z)(l,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("v-card",{staticClass:"pa-3"},[c("v-card-title",{staticClass:"text-h5"},[e._v("\n      Gallery\n    ")]),e._v(" "),c("v-card-text",[c("v-row",{attrs:{"no-gutters":""}},e._l(e.imagelenght,(function(t,l){return c("v-col",{key:l,staticClass:"pa-1",attrs:{cols:"12",md:"3",lg:"3"}},[c("v-hover",{staticClass:"pa-1",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hover;return[c("v-img",{staticClass:"white--text",attrs:{src:"../../images/"+e.imageList[l],elevation:a?12:2,gradient:e.SelectedImage==e.imageList[l]?"":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"120px"},on:{click:function(t){return e.SelectImage(e.imageList[l])}}},[a||e.SelectedImage==e.imageList[l]?c("v-icon",{attrs:{color:"primary"}},[e._v("mdi-"+e._s(e.CheckSelect?"check-circle":"check-circle-outline"))]):e._e(),e._v(" "),c("v-fade-transition",[a?c("v-overlay",{staticStyle:{cursor:"pointer"},attrs:{absolute:"",color:"#FAFAFA"}}):e._e()],1)],1)]}}],null,!0)})],1)})),1)],1),e._v(" "),c("v-card-actions",[c("v-btn",{attrs:{disabled:!e.CheckSelect,color:"primary"},on:{click:function(t){return e.SaveSelect()}}},[e._v("\n        Select Background\n    ")]),e._v(" "),c("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(t){return e.$emit("CloseDialog")}}},[e._v("\n        Cancel\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports}}]);