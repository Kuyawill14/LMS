"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6201],{6201:(t,i,e)=>{e.r(i),e.d(i,{default:()=>o});var a=e(2239);const s={props:["Preview_id"],data:function(){return{isloading:!0,totalPoints:null,totalQuestion:null,Details:{},DateToday:""}},computed:{Fileextension:function(){return this.Details.attachment.split(".").pop()}},methods:{getClassworkDetails:function(){var t=this;axios.get("/api/classwork/showDetails/"+this.Preview_id+"/"+this.$route.params.id).then((function(i){t.Details=i.data.Details,t.Details.from_date=(0,a.Z)(t.Details.from_date).format("YYYY-MM-DDTHH:mm:ss"),t.isloading=!t.isloading,t.totalPoints=i.data.totalpoints,t.totalQuestion=i.data.ItemsCount}))},format_date:function(t){if(t)return(0,a.Z)(String(t)).format("dddd, h:mm a")},DownLoadFile:function(t){window.location="/storage/"+t}},mounted:function(){this.getClassworkDetails();var t=new Date;this.DateToday=(0,a.Z)(t).format("YYYY-MM-DDTHH:mm:ss")},created:function(){this.$emit("isMounted")}};const o=(0,e(1900).Z)(s,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card",{attrs:{outlined:""}},[e("v-card-title",{staticClass:"ma-0 pa-0 float-right mr-2 mt-1"},[e("v-btn",{attrs:{icon:""},on:{click:function(i){return t.$emit("toggleCloseDialog")}}},[e("v-icon",[t._v("mdi-window-close")])],1)],1),t._v(" "),e("v-card-text",{staticClass:"mt-12 ml-0 pl-0 pl-2"},[e("v-row",{staticStyle:{height:"2vh"}}),t._v(" "),t.isloading?e("v-row",{staticClass:"fill-height",staticStyle:{height:"30vh"},attrs:{"align-content":"center",justify:"center"}},[e("v-col",{attrs:{cols:"6"}},[e("v-progress-linear",{attrs:{w:"",color:"primary",indeterminate:"",rounded:"",height:"4"}})],1)],1):t._e(),t._v(" "),t.isloading?t._e():e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-container",{staticClass:"d-flex flex-row justify-space-between",attrs:{"ma-0":"","pa-0":""}},[e("v-btn",{staticClass:"mx-2 mt-2",attrs:{fab:"",dark:"",color:"primary"}},[e("v-icon",{attrs:{"x-large":""}},[t._v("\n                    mdi-book-open-variant\n                    ")])],1),t._v(" "),e("div",{staticClass:"float-right mt-3",attrs:{fab:""}},[e("div",{staticClass:"text-md-h5 font-weight-medium"},[e("v-icon",{attrs:{large:"",color:"primary"}},[t._v("mdi-book-clock-outline")]),t._v(" "),"Subjective Type"!=t.Details.type?e("span",[t._v(t._s(t.Details.duration)+" mins")]):t._e()],1),t._v(" "),e("div",{staticClass:"caption ml-2 font-weight-medium"},[t._v(" "+t._s(0!=t.Details.availability?"Due "+t.format_date(t.Details.to_date):"No due date"))])])],1)],1),t._v(" "),e("v-col",{staticClass:"pl-7 pr-5",attrs:{cols:"12"}},[e("div",{staticClass:"text-sm-body-2 font-weight-bold"},[t._v(t._s(t.Details.title))]),t._v(" "),e("div",{staticClass:"pt-2 d-flex flex-row "},["Objective Type"==t.Details.type?e("div",{staticClass:"captions font-weight-medium"},[e("v-icon",[t._v("mdi-circle-medium")]),t._v(t._s(t.totalQuestion)+" Question")],1):t._e(),t._v(" "),e("div",{staticClass:"captions font-weight-medium"},[e("v-icon",[t._v("mdi-circle-medium")]),t._v(t._s("Objective Type"==t.Details.type?t.totalPoints:t.Details.points)+" Points")],1)]),t._v(" "),e("v-divider")],1),t._v(" "),e("v-col",{staticClass:"pl-8 pr-5 ",attrs:{cols:"12"}},[e("div",{staticClass:"text-sm-body-2 "},[t._v(" "+t._s(t.Details.instruction))])]),t._v(" "),"Subjective Type"==t.Details.type?e("v-col",{staticClass:"pl-5 pr-5 pb-2",attrs:{cols:"12"}},[e("div",{staticClass:"text-caption font-weight-medium"},[t._v("Attachments")]),t._v(" "),e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var a=i.hover;return[e("v-alert",{class:a?"grey lighten-2":"",staticStyle:{cursor:"pointer"},attrs:{outlined:"",icon:"pdf"==t.Fileextension?"mdi-file-pdf":"docx"==t.Fileextension?"mdi-file-word":"",color:"pdf"==t.Fileextension?"red":"docx"==t.Fileextension?"blue":""},on:{click:function(i){return t.DownLoadFile(t.Details.attachment)}}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{staticClass:"grow"},[e("div",{class:a?"text-decoration-underline":""},[t._v(" "+t._s(t.Details.attachment_name))])]),t._v(" "),e("v-col",{staticClass:"shrink"},[e("div",{staticClass:"black--text font-weight-medium"},[t._v(t._s(t.Details.attachment_size))])])],1)],1)]}}],null,!1,3831247556)})],1):t._e(),t._v(" "),0==t.Details.availability?e("v-col",{staticClass:"pl-10 pr-5 pb-5 text-right",attrs:{cols:"12"}},["Objective Type"==t.Details.type?e("v-btn",{attrs:{rounded:"",color:"primary",dark:0!=t.totalQuestion},on:{click:function(i){return t.$emit("OpenClasswork")}}},[t._v("\n                            View Quiz"),e("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e(),t._v(" "),"Subjective Type"==t.Details.type?e("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(i){return t.$emit("OpenClasswork")}}},[t._v("\n                                Submit Work"),e("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e()],1):e("v-col",{staticClass:"pl-10 pr-5 pb-5 text-right",attrs:{cols:"12"}},["Objective Type"==t.Details.type?e("div",{staticClass:"ma-0 pa-0"},[t.DateToday>t.Details.from_date?e("v-btn",{attrs:{rounded:"",color:"primary",dark:0!=t.totalQuestion},on:{click:function(i){return t.$emit("OpenClasswork")}}},[t._v("\n                                View Quiz"),e("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):e("v-btn",{attrs:{rounded:"",disabled:"",color:"primary"}},[t._v("\n                                Not Yet Available")])],1):t._e(),t._v(" "),"Subjective Type"==t.Details.type?e("div",{staticClass:"ma-0 pa-0"},[t.DateToday>t.Details.from_date?e("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(i){return t.$emit("OpenClasswork")}}},[t._v("\n                                Submit Work"),e("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):e("v-btn",{attrs:{rounded:"",color:"primary",disabled:"",dark:""}},[t._v("\n                                Not Yet Available"),e("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1)],1):t._e()])],1),t._v(" "),e("v-row",{staticStyle:{height:"2vh"}})],1)],1)}),[],!1,null,null,null).exports}}]);