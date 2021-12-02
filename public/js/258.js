"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[258],{38293:(t,i,e)=>{e.d(i,{Z:()=>o});var a=e(1519),s=e.n(a)()((function(t){return t[1]}));s.push([t.id,"span img{max-height:15rem!important;max-width:100%!important}",""]);const o=s},258:(t,i,e)=>{e.r(i),e.d(i,{default:()=>d});var a=e(80008),s=e.n(a);const o={props:["Preview_details"],data:function(){return{isloading:!0,totalPoints:null,totalQuestion:null,Details:{}}},computed:{Fileextension:function(){return this.Details.attachment.split(".").pop()}},methods:{format_date:function(t){if(t)return s()(String(t)).tz("Asia/Manila").format("dddd,  h:mm a")},DownLoadFile:function(t){window.location="/storage/"+t}},mounted:function(){this.isloading=!this.isloading},created:function(){this.$emit("isMounted")}};var n=e(72446),r=e.n(n),l=e(38293),c={insert:"head",singleton:!1};r()(l.Z,c);l.Z.locals;const d=(0,e(51900).Z)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card",{attrs:{outlined:""}},[e("v-card-title",{staticClass:"ma-0 pa-0 float-right mr-2 mt-1"},[e("v-btn",{attrs:{icon:""},on:{click:function(i){return t.$emit("toggleCloseDialog")}}},[e("v-icon",[t._v("mdi-window-close")])],1)],1),t._v(" "),e("v-card-text",{staticClass:"mt-12 ml-0 pl-0 pl-2"},[e("v-row",{staticStyle:{height:"2vh"}}),t._v(" "),t.isloading?e("v-row",{staticClass:"fill-height",staticStyle:{height:"30vh"},attrs:{"align-content":"center",justify:"center"}},[e("vue-element-loading",{attrs:{active:t.isloading,duration:"0.7",textStyle:{fontSize:"14px"},spinner:"line-scale",color:"#EF6C00",size:"50"}})],1):t._e(),t._v(" "),t.isloading?t._e():e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-container",{staticClass:"d-flex flex-row justify-space-between",attrs:{"ma-0":"","pa-0":""}},[e("v-btn",{staticClass:"mx-2 mt-2",attrs:{fab:"",dark:"",color:"primary"}},[e("v-icon",{attrs:{"x-large":""}},[t._v("\n                    mdi-book-open-variant\n                    ")])],1),t._v(" "),e("div",{staticClass:"float-right mt-3",attrs:{fab:""}},[e("div",{staticClass:"text-md-h5 font-weight-medium"},[e("v-icon",{attrs:{large:"",color:"primary"}},[t._v("mdi-book-clock-outline")]),t._v(" "),"Subjective Type"!=t.Preview_details.type?e("span",[t._v(t._s(t.Preview_details.duration)+" mins")]):t._e()],1),t._v(" "),e("div",{staticClass:"caption ml-2 font-weight-medium"},[t._v(" "+t._s(0!=t.Preview_details.availability?"Due "+t.format_date(t.Preview_details.to_date):"No due date"))])])],1)],1),t._v(" "),e("v-col",{staticClass:"pl-7 pr-5",attrs:{cols:"12"}},[e("div",{staticClass:"text-sm-body-2 font-weight-bold"},[t._v(t._s(t.Preview_details.title))]),t._v(" "),e("div",{staticClass:"pt-2 d-flex flex-row "},["Objective Type"==t.Preview_details.type?e("div",{staticClass:"captions font-weight-medium"},[e("v-icon",[t._v("mdi-circle-medium")]),t._v(t._s(t.Preview_details.total_questions)+" Question")],1):t._e(),t._v(" "),e("div",{staticClass:"captions font-weight-medium"},[e("v-icon",[t._v("mdi-circle-medium")]),t._v(t._s((t.Preview_details.type,t.Preview_details.points))+" Points")],1)]),t._v(" "),e("v-divider")],1),t._v(" "),e("v-col",{staticClass:"pl-8 pr-5 ",attrs:{cols:"12"}},[e("span",{staticClass:"text-sm-body-2 ",domProps:{innerHTML:t._s(t.Preview_details.instruction)}})]),t._v(" "),e("v-col",{staticClass:"pl-10 pr-5 pb-5 text-right",attrs:{cols:"12"}},["Objective Type"==t.Preview_details.type?e("v-btn",{attrs:{rounded:"",color:"primary",dark:0!=t.totalQuestion},on:{click:function(i){return t.$emit("OpenClasswork")}}},[t._v("\n                            View Quiz"),e("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e(),t._v(" "),"Subjective Type"==t.Preview_details.type?e("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(i){return t.$emit("OpenClasswork")}}},[t._v("\n                                Submit Work"),e("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e()],1)],1),t._v(" "),e("v-row",{staticStyle:{height:"2vh"}})],1)],1)}),[],!1,null,null,null).exports}}]);