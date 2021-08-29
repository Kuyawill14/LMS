"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7339],{3272:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var n=i(7757),a=i.n(n),o=(i(2239),i(5714));function r(e,t,i,n,a,o,r){try{var s=e[o](r),l=s.value}catch(e){return void i(e)}s.done?t(l):Promise.resolve(l).then(n,a)}const s={data:function(){return{valid:!1,isTimer:!1,file:null,fileSize:null,loading:!1,dialog:!1,form:new o.ZP({}),nullDatetime:null,datetime:new Date,datetimeString:"2019-01-01 12:00",formattedDatetime:"09/01/2019 12:00",textFieldProps:{appendIcon:"event"},dateProps:{headerColor:"primary"},timeProps:{useSeconds:!0,ampmInTitle:!0},FieldRules:[function(e){return!!e||"Field is required"}]}},methods:{validate:function(){var e=this;this.loading=!this.loading,this.$refs.NewClassworkForm.validate()?this.SaveClasswork():setTimeout((function(){e.loading=!e.loading}),1e3)},toastSuccess:function(){return this.$toasted.success("Classwork Successfully added",{theme:"toasted-primary",position:"top-center",icon:"done",duration:3e3})},SaveClasswork:function(){var e,t=this;return(e=a().mark((function e(){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(i=new FormData).append("course_id",t.$route.params.id),i.append("type",t.form.type),i.append("title",t.form.title),i.append("instruction",t.form.instruction),"Objective Type"==t.form.type?t.form.points="":"Subjective Type"==t.form.type&&(t.form.duration=""),i.append("points",t.form.points),i.append("duration",t.form.duration),i.append("attachment_name",t.file_name),i.append("attachment_size",t.fileSize),i.append("file",t.file),t.$store.dispatch("createClasswork",i).then((function(e){201==e.status&&(t.toastSuccess(),"Objective Type"==t.form.type?t.$router.push({name:"add-question",params:{id:e.data.course_id},query:{clwk:e.data.id}}):"Subjective Type"==t.form.type&&t.$router.push({name:"clwk",params:{id:e.data.course_id},query:{clwk:e.data.id}}),t.$refs.NewClassworkForm.reset(),t.loading=!t.loading)}));case 12:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(n,a){var o=e.apply(t,i);function s(e){r(o,n,a,s,l,"next",e)}function l(e){r(o,n,a,s,l,"throw",e)}s(void 0)}))})()},onFileChange:function(e){if(this.file=e[0],this.file_name=e[0].name,e[0].size>1e6){var t=.001*e[0].size,i=parseInt(.001*t);this.fileSize=i+"mb"}else{var n=.001*e[0].size,a=parseInt(n);this.fileSize=a+"kb"}}},beforeMount:function(){}};const l=(0,i(1900).Z)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",[i("vue-element-loading",{attrs:{active:e.loading,spinner:"bar-fade-scale"}}),e._v(" "),i("v-form",{ref:"NewClassworkForm",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-card-title",[i("span",{staticClass:"headline"},[e._v("Add Classwork")])]),e._v(" "),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},[i("v-select",{attrs:{outlined:"",rules:e.FieldRules,items:["Objective Type","Subjective Type"],label:"Type"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),e._v(" "),i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},[i("v-textarea",{attrs:{rows:"1",outlined:"",rules:e.FieldRules,label:"Title","auto-grow":""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},[i("v-textarea",{attrs:{outlined:"",rules:e.FieldRules,label:"Instruction","auto-grow":""},model:{value:e.form.instruction,callback:function(t){e.$set(e.form,"instruction",t)},expression:"form.instruction"}})],1),e._v(" "),"Objective Type"==e.form.type?i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},[i("v-text-field",{attrs:{rules:e.FieldRules,"append-icon":"mdi-"+(e.isTimer?"timer":"timer-off"),outlined:"",min:"0",hint:"mins",label:"Time Limit",type:"number"},on:{click:function(t){e.isTimer=!e.isTimer}},model:{value:e.form.duration,callback:function(t){e.$set(e.form,"duration",t)},expression:"form.duration"}})],1):e._e(),e._v(" "),"Subjective Type"==e.form.type?i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},["Subjective Type"==e.form.type?i("v-file-input",{ref:"inputFile",attrs:{placeholder:"Upload your documents",label:"File input",outlined:"","show-size":"",counter:"",multiple:"","prepend-icon":"","prepend-inner-icon":"mdi-paperclip"},on:{change:e.onFileChange},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.text;return[i("v-chip",{attrs:{small:"",label:"",color:"primary"}},[e._v("\n                                "+e._s(n)+"\n                            ")])]}}],null,!1,1221588800)}):e._e()],1):e._e(),e._v(" "),"Subjective Type"==e.form.type?i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},["Subjective Type"==e.form.type?i("v-text-field",{attrs:{rules:e.FieldRules,outlined:"",min:"0",label:"Points",type:"number"},model:{value:e.form.points,callback:function(t){e.$set(e.form,"points",t)},expression:"form.points"}}):e._e()],1):e._e()],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{text:"",disabled:e.loading},on:{click:function(t){return e.$emit("CloseDialog")}}},[e._v("\n                Close\n            ")]),e._v(" "),i("v-btn",{attrs:{color:"primary",text:"",disabled:e.loading,loading:e.loading},on:{click:function(t){return e.validate()}}},[e._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null).exports}}]);