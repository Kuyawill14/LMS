"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7272],{9329:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var n=i(7757),o=i.n(n),a=(i(2239),i(5714));function s(t,e,i,n,o,a,s){try{var l=t[a](s),r=l.value}catch(t){return void i(t)}l.done?e(r):Promise.resolve(r).then(n,o)}const l={data:function(){return{valid:!1,isTimer:!1,file:[],fileSize:[],loading:!1,dialog:!1,form:new a.ZP({}),nullDatetime:null,datetime:new Date,datetimeString:"2019-01-01 12:00",formattedDatetime:"09/01/2019 12:00",textFieldProps:{appendIcon:"event"},dateProps:{headerColor:"primary"},timeProps:{useSeconds:!0,ampmInTitle:!0},FieldRules:[function(t){return!!t||"Field is required"}],file_name:[],counter:0,tmpName:[],uploadPercentage:0,uploadIndex:null}},computed:{extension:function(){return this.file[this.counter]?this.file[this.counter].name.split(".").pop():""}},methods:{RemoveFile:function(t){this.file_name.splice(t,1),this.file.splice(t,1),console.log(this.file)},validate:function(){var t=this;this.loading=!this.loading,this.$refs.NewClassworkForm.validate()?this.SaveClasswork():setTimeout((function(){t.loading=!t.loading}),1e3)},toastSuccess:function(){return this.$toasted.success("Classwork Successfully added",{theme:"toasted-primary",position:"top-center",icon:"done",duration:3e3})},SaveClasswork:function(){var t,e=this;return(t=o().mark((function t(){var i,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for((i=new FormData).append("course_id",e.$route.params.id),i.append("type",e.form.type),i.append("title",e.form.title),i.append("instruction",e.form.instruction),"Objective Type"==e.form.type?e.form.points="":"Subjective Type"==e.form.type&&(e.form.duration=""),i.append("points",e.form.points),i.append("duration",e.form.duration),n=0;n<e.file.length;n++)i.append("file["+n+"]",e.file[n]),i.append("attachment_name["+n+"]",e.file_name[n].name),i.append("attachment_size["+n+"]",e.file_name[n].size),i.append("attachment_extension["+n+"]",e.file_name[n].extesion);e.$store.dispatch("createClasswork",i).then((function(t){201==t.status&&(e.toastSuccess(),"Objective Type"==e.form.type?e.$router.push({name:"add-question",params:{id:t.data.course_id},query:{clwk:t.data.id}}):"Subjective Type"==e.form.type&&e.$router.push({name:"clwk",params:{id:t.data.course_id},query:{clwk:t.data.id}}),e.$emit("realodClassworks"))}));case 10:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(n,o){var a=t.apply(e,i);function l(t){s(a,n,o,l,r,"next",t)}function r(t){s(a,n,o,l,r,"throw",t)}l(void 0)}))})()},addFile:function(){var t=this,e=new FormData;e.append("type","Classwork"),e.append("file",this.file[this.counter]),axios.post("/api/classwork/newAttachment",e,{onUploadProgress:function(e){var i=e.total,n=e.lengthComputable?i:null;null!=n&&(t.uploadPercentage=Math.round(100*e.loaded/n))}}).then((function(e){t.counter++}))},onFileChange:function(t){if(this.uploadIndex=this.counter,this.file.push(t[0]),t[0].size>1e6){var e=.001*t[0].size,i=parseInt(.001*e);this.fileSize[this.counter]=i+"mb"}else{var n=.001*t[0].size,o=parseInt(n);this.fileSize[this.counter]=o+"kb"}this.file_name.push({name:t[0].name,size:this.fileSize[this.counter],extesion:this.extension}),this.addFile()}},beforeMount:function(){}};const r=(0,i(1900).Z)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"ma-0 pa-0"},[i("vue-element-loading",{attrs:{active:t.loading,spinner:"bar-fade-scale"}}),t._v(" "),i("v-form",{ref:"NewClassworkForm",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-card-title",[i("v-btn",{attrs:{large:"",icon:"",disabled:t.loading},on:{click:function(e){return t.$emit("CloseDialog")}}},[i("v-icon",[t._v("mdi-close")])],1),t._v(" "),i("span",{staticClass:"h6"},[t._v("New Classwork")])],1),t._v(" "),i("v-card-text",[i("v-container",{attrs:{"mb-0":"","pb-0":""}},[i("v-row",[i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},[i("v-select",{attrs:{outlined:"",rules:t.FieldRules,items:["Objective Type","Subjective Type"],label:"Type"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},[i("v-textarea",{attrs:{rows:"1",outlined:"",rules:t.FieldRules,label:"Title","auto-grow":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},[i("v-textarea",{attrs:{outlined:"",rules:t.FieldRules,label:"Instruction","auto-grow":""},model:{value:t.form.instruction,callback:function(e){t.$set(t.form,"instruction",e)},expression:"form.instruction"}})],1),t._v(" "),"Objective Type"==t.form.type?i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},[i("v-text-field",{attrs:{rules:t.FieldRules,"append-icon":"mdi-"+(t.isTimer?"timer":"timer-off"),outlined:"",min:"0",hint:"mins",label:"Time Limit",type:"number"},on:{click:function(e){t.isTimer=!t.isTimer}},model:{value:t.form.duration,callback:function(e){t.$set(t.form,"duration",e)},expression:"form.duration"}})],1):t._e(),t._v(" "),"Subjective Type"==t.form.type?i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},["Subjective Type"==t.form.type?i("v-text-field",{staticClass:"mb-0 pb-0",attrs:{rules:t.FieldRules,outlined:"",min:"0",label:"Points",type:"number"},model:{value:t.form.points,callback:function(e){t.$set(t.form,"points",e)},expression:"form.points"}}):t._e()],1):t._e(),t._v(" "),i("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12"}},[i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",text:"",rounded:""},on:{click:function(e){return t.$refs.inputFile.$refs.input.click()}}},[i("v-icon",{attrs:{left:""}},[t._v("\n                                  mdi-attachment\n                              ")]),t._v("\n                              Attach file\n                          ")],1),t._v(" "),i("v-file-input",{ref:"inputFile",staticClass:"d-none",attrs:{multiple:""},on:{change:t.onFileChange}}),t._v(" "),i("v-list",{staticClass:"ma-0 pa-0",attrs:{dense:""}},t._l(t.file_name,(function(e,n){return i("v-list-item",{key:n,staticClass:"ma-0 pa-0"},[i("v-list-item-avatar",[i("v-icon",{attrs:{large:"",color:"docx"==e.extesion?"blue":"red"}},[t._v("\n                                            "+t._s("docx"==e.extesion?"mdi-file-word":"mdi-file-pdf")+"\n                                        ")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name))]),t._v(" "),i("v-list-item-subtitle",[t.uploadIndex==n&&100!=t.uploadPercentage?i("v-progress-linear",{attrs:{rounded:"",value:t.uploadPercentage}}):t._e()],1)],1),t._v(" "),i("v-list-item-action",[i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.RemoveFile(n)}}},[i("v-icon",[t._v("\n                                        mdi-close\n                                        ")])],1)],1)],1)})),1)],1)],1)],1)],1),t._v(" "),i("v-card-actions",{staticClass:"pl-5 pr-5"},[i("v-btn",{attrs:{block:"",disabled:"Subjective Type"==t.form.type?null==t.form.title||""==t.form.title||null==t.form.type||""==t.form.type||null==t.form.instruction||""==t.form.instruction||null==t.form.points||""==t.form.points:null==t.form.title||""==t.form.title||null==t.form.type||""==t.form.type||null==t.form.instruction||""==t.form.instruction||null==t.form.duration||""==t.form.duration,color:"primary",rounded:"",loading:t.loading},on:{click:function(e){return t.validate()}}},[t._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null).exports}}]);