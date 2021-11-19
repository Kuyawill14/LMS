"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7415],{503:(t,i,e)=>{e.d(i,{Z:()=>n});var s=e(1519),a=e.n(s)()((function(t){return t[1]}));a.push([t.id,"span img{max-height:20rem!important;max-width:100%!important}.dropZone{border:2px dashed #eee;border-radius:.3rem;height:7rem;position:relative;width:100%}.dropZone-info{color:#a8a8a8;position:absolute;text-align:center;top:50%;transform:translateY(-50%);width:100%}.dropZone-title{color:#787878}.dropZone input{bottom:0;cursor:pointer;height:100%;left:0;opacity:0;position:absolute;right:0;top:0;width:100%}.dropZone-upload-limit-info{display:flex;flex-direction:column;justify-content:flex-start}.dropZone-over{background:#e0e0e0;opacity:.8}.dropZone-uploaded{height:auto;padding-top:4rem;position:relative}.dropZone-uploaded-info{align-items:center;color:#a8a8a8;display:flex;flex-direction:column;position:absolute;text-align:center;top:50%;transform:translateY(-50%);width:100%}.filePreview{width:100%}.removeFile{width:200px}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}",""]);const n=a},7415:(t,i,e)=>{e.r(i),e.d(i,{default:()=>h});var s=e(7757),a=e.n(s),n=e(8),l=e.n(n),o=e(629);function r(t,i,e,s,a,n,l){try{var o=t[n](l),r=o.value}catch(t){return void e(t)}o.done?i(r):Promise.resolve(r).then(s,a)}function c(t){return function(){var i=this,e=arguments;return new Promise((function(s,a){var n=t.apply(i,e);function l(t){r(n,s,a,l,o,"next",t)}function o(t){r(n,s,a,l,o,"throw",t)}l(void 0)}))}}function d(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,s)}return e}function u(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?d(Object(e),!0).forEach((function(i){p(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function p(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}const m={props:["classworkDetails"],components:{attachlinkDiaglog:function(){return e.e(2514).then(e.bind(e,2514))}},data:function(){var t=this;return{AttachLink:!1,FileList:[],file:[],fileSize:null,dragging:!1,link:"test12",myClasssworkStatus:[],uploadPercentage:0,isUploading:[],tempId:this.classworkDetails.Sub_id,isResubmit:!1,isloading:!0,fileIndex:null,tempFile:null,isUpIndex:null,comment:null,isCommenting:!1,linkName:null,linkFile:null,IsSaving:!1,isDeleting:!1,isDeleting_id:null,isUploadSaving:!1,isUploaded:!1,valid:!0,linkRules:[function(t){return!!t||"Required."},function(i){return t.isURL(i)||"URL is not valid"}],linkNameRule:[function(t){return!!t||"Required."}],DateToday:new Date,CheckeFileExtention:null,fileType:["pdf","txt","docx","doc","jpg","jpeg","gif","svg","png","bmp","link"],extensionIcon:["mdi-file-pdf","mdi-note-text-outline","mdi-file-word","mdi-file-link","mdi-image"],acceptedFileType:["xlsx","xls","jpg","jpeg","gif","svg","png","bmp","doc","docx","ppt","pptx","pdf","text"],selected:0,ScrollPosistion:0,TempFile:""}},computed:u(u({},(0,o.Se)(["get_CurrentUser","statusDetails"])),{},{extension:function(){return this.tempFile?this.tempFile.name.split(".").pop():""},Checkextension:function(){return this.CheckeFileExtention?this.CheckeFileExtention.name.split(".").pop():""},Fileextension:function(){return this.classworkDetails.attachment.split(".").pop()},SubmittedFilextension:function(){return this.classworkDetails.Submitted_Answers[0].name.split(".").pop()}}),methods:u(u({},(0,o.nv)(["checkClassworkStatus"])),{},{handleScroll:function(t){this.ScrollPosistion=window.scrollY},CheckFileIcon:function(t){return"jpg"==t||"jpeg"==t||"gif"==t||"svg"==t||"png"==t||"bmp"==t?"mdi-image":"pdf"==t?"mdi-file-pdf":"txt"==t?"mdi-note-text-outline":"docx"==t||"doc"==t?"mdi-file-word":"link"==t?"mdi-file-link":void 0},CheckFileIconColor:function(t){return"jpg"==t||"jpeg"==t||"gif"==t||"svg"==t||"png"==t||"bmp"==t?"info":"pdf"==t?"red":"txt"==t?"primary":"docx"==t||"doc"==t?"blue":"link"==t?"green":"primary"},format_date1:function(t){if(t)return l()(String(t)).tz("Asia/Manila").format("YYYY-MM-DD HH:mm:ss")},validate:function(){this.$refs.form.validate()&&this.scrapeDocID()},isURL:function(t){var i;try{i=new URL(t)}catch(t){return!1}return"http:"===i.protocol||"https:"===i.protocol},OpenFile:function(t){window.open(t,"_blank")},scrapeDocID:function(){var t=this.linkFile;this.classworkDetails.Submitted_Answers.push({name:this.linkName,fileSize:"",fileExte:"link",link:t}),this.isUpIndex=this.classworkDetails.Submitted_Answers.length,this.AttachLink=!this.AttachLink,this.AddLinkInSubmittedAnswer()},AddLinkInSubmittedAnswer:function(){var t=this,i=this.classworkDetails.Submitted_Answers.length-1,e=null==this.tempId?"empty":this.tempId,s=new FormData;s.append("Submission_id",e),s.append("id",this.classworkDetails.id),s.append("class_classwork_id",this.classworkDetails.class_classwork_id),s.append("type",this.classworkDetails.type),s.append("fileName",this.classworkDetails.Submitted_Answers[i].name),s.append("fileSize",this.classworkDetails.Submitted_Answers[i].fileSize),s.append("fileExte",this.classworkDetails.Submitted_Answers[i].fileExte),s.append("file",this.classworkDetails.Submitted_Answers[i].link),axios.post("/api/student/linkAndstatus",s).then((function(i){t.AttachLink=!1,t.linkName=null,t.linkFile=null,t.tempId=i.data,t.classworkDetails.status="Submitting"}))},UploadFile:function(){this.$refs.UploadAttachFile.$refs.input.click()},UploadMoreFile:function(){//console.log("test"),this.file.length<=4&&this.$refs.AttAchMoreFile.click()},format_date:function(t){if(t)return l()(String(t)).tz("Asia/Manila").format("dddd, h:mm a")},DownLoadFile:function(t,i){var e;e="docx"==i?"https://view.officeapps.live.com/op/view.aspx?src="+t:t,window.open(e,"_blank")},onChange:function(t){var i=this,e=this.FileList[this.FileList.length-1];this.CheckeFileExtention=e;var s=!1;this.acceptedFileType.forEach((function(t){i.Checkextension!=t||(s=!0)})),1==s?e.size<=1e7?this.createFile(e):this.toastError("Your file is to big, maximum file size is 10mb only!"):this.toastError("This file format is not yet supported for upload!")},createFile:function(t){var i;i=this.classworkDetails.Submitted_Answers.length,this.isUploading[i]=!0,this.fileIndex=i,this.tempFile=t;var e=t.size;if(e>1e6){var s=parseInt(.001*(.001*e));this.fileSize=s+"mb"}else{var a=parseInt(.001*e);this.fileSize=a+"kb"}this.isUpIndex=this.classworkDetails.Submitted_Answers.length,this.classworkDetails.Submitted_Answers.push({name:this.tempFile.name,fileSize:this.fileSize,fileExte:this.extension,link:"",file:this.tempFile}),this.fileIndex=this.file.length,this.isUploadSaving=!0,this.UpdateSubmission(this.classworkDetails.Submitted_Answers.length-1)},removeFile:function(t){var i=this;this.isDeleting_id=t,this.isDeleting=!0,axios.put("/api/submission/file-remove/"+this.tempId,{Fileindex:t}).then((function(e){i.uploadPercentage=0,i.file.splice(t,1),i.tempId=null,i.isUploading[t]=!1,i.isDeleting=!1,i.isDeleting_id=null}))},test:function(){this.link},checkStatus:function(t){var i=this,e={};e.id=this.$route.query.clwk,e.type=this.classworkDetails.type,this.$store.dispatch("checkClassworkStatus",e).then((function(){i.myClasssworkStatus=i.statusDetails,i.tempId=i.statusDetails.Sub_id,"submit"!=t&&(i.isloading=!i.isloading)}))},UpdateSubmission:function(t){var i=this,e=null==this.tempId?"empty":this.tempId,s=new FormData;s.append("Submission_id",e),s.append("id",this.classworkDetails.id),s.append("class_classwork_id",this.classworkDetails.class_classwork_id),s.append("type",this.classworkDetails.type),s.append("fileName",this.classworkDetails.Submitted_Answers[t].name),s.append("fileSize",this.classworkDetails.Submitted_Answers[t].fileSize),s.append("fileExte",this.classworkDetails.Submitted_Answers[t].fileExte),s.append("file",this.classworkDetails.Submitted_Answers[t].file),axios.post("/api/student/update-status",s,{onUploadProgress:function(t){var e=t.total,s=t.lengthComputable?e:null;null!=s&&(i.uploadPercentage=Math.round(100*t.loaded/s))}}).then((function(t){i.classworkDetails.Submitted_Answers[i.isUpIndex].link=t.data.link,i.tempId=null==i.tempId?t.data.id:i.tempId,i.isUploadSaving=!1,i.isUpIndex=null,i.classworkDetails.status="Submitting"}))},DeleteUpload:function(t){var i=this;this.isDeleting_id=t,this.isDeleting=!0;axios.put("/api/submission/file-remove/"+this.tempId,{Fileindex:t}).then((function(e){i.classworkDetails.Submitted_Answers.splice(t,1),0!=i.FileList.length&&i.FileList.splice(t,1),i.uploadPercentage=0,i.isUploading[t]=!1,i.isDeleting=!1,i.isDeleting_id=null}))},SubmitClasswork:function(){var t=this;return c(a().mark((function i(){return a().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t.IsSaving=!0,"submit",axios.put("/api/student/submit-classwork/"+t.tempId).then((function(i){200==i.status&&(t.classworkDetails.status="Submitted",t.IsSaving=!1,t.isResubmit=!1)}));case 3:case"end":return i.stop()}}),i)})))()},addComment:function(t){var i=this;return c(a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={},i.isCommenting=!0,s.classwork_id=t.id,s.to_user=t.user_id,s.type="Private",s.course_id=i.$route.params.id,s.comment=i.comment,axios.post("/api/post/classwork/comment/insert",s).then((function(t){200==t.status&&(i.classworkDetails.comments.push({content:t.data.comment,id:t.data.id,name:t.data.name,profile_pic:t.data.profile_pic}),i.comment=null)})),i.isCommenting=!1;case 9:case"end":return e.stop()}}),e)})))()},DeleteComment:function(t,i){var e=this;return c(a().mark((function s(){return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:axios.delete("/api/post/classwork/comment/delete/"+t).then((function(t){1==t.data.success&&e.classworkDetails.comments.splice(i,1)}));case 1:case"end":return s.stop()}}),s)})))()},MarkAsSubmitting:function(t){return c(a().mark((function i(){return a().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:axios.put("/api/student/markAsSubmitting/"+t).then((function(){}));case 1:case"end":return i.stop()}}),i)})))()},clickResubmit:function(){this.isResubmit?this.SubmitClasswork():(this.MarkAsSubmitting(this.classworkDetails.Sub_id),this.isResubmit=!this.isResubmit)}}),created:function(){return c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){this.isloading=!this.isloading,window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}};var v=e(2446),f=e.n(v),b=e(503),k={insert:"head",singleton:!1};f()(b.Z,k);b.Z.locals;const h=(0,e(1900).Z)(m,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{attrs:{transition:"slide-y-reverse-transition"}},[t.$vuetify.breakpoint.mdAndUp?t._e():e("v-app-bar",{attrs:{elevation:"5",app:"",color:"primary"}},[t.$vuetify.breakpoint.mdAndUp?t._e():e("v-btn",{attrs:{dark:"",rounded:"",icon:"",text:""},on:{click:function(i){return t.$router.push({name:"classwork"})}}},[e("v-icon",[t._v("mdi-arrow-left-thick")])],1),t._v(" "),e("v-divider",{attrs:{vertical:""}})],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.AttachLink,callback:function(i){t.AttachLink=i},expression:"AttachLink"}},[e("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(i){return i.preventDefault(),t.validate()}},model:{value:t.valid,callback:function(i){t.valid=i},expression:"valid"}},[e("v-card",[e("v-card-title",[e("v-btn",{attrs:{icon:""},on:{click:function(i){t.AttachLink=!1}}},[e("v-icon",[t._v("mdi-close")])],1),t._v(" "),e("span",{staticClass:"text-h6"},[t._v(" Attach Link \r\n                    \r\n                     "),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on,a=i.attrs;return[e("v-icon",t._g(t._b({attrs:{color:"primary",dark:""}},"v-icon",a,!1),s),[t._v("\r\n                              mdi-information\r\n                            ")])]}}])},[t._v(" "),e("span",[t._v("\r\n                                Supported Links:\r\n                                "),e("ul",[e("li",[t._v("https://docs.google.com/presentation/d/[document-id]")]),t._v(" "),e("li",[t._v("https://docs.google.com/document/d/[document-id]")]),t._v(" "),e("li",[t._v("https://www.youtube.com/watch?v=[video-id]")])])])])],1)],1),t._v(" "),e("v-card-text",[e("v-row",[e("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[e("v-textarea",{staticClass:"mb-0 pb-0",attrs:{rules:t.linkNameRule,outlined:"",dense:"",rows:"1",label:"Title","auto-grow":""},model:{value:t.linkName,callback:function(i){t.linkName=i},expression:"linkName"}})],1),t._v(" "),e("v-col",{staticClass:"mb-0 pb-0 mt-0 pt-0",attrs:{cols:"12"}},[e("v-textarea",{staticClass:"mb-0 pb-0",attrs:{rules:t.linkRules,outlined:"",dense:"",rows:"1",label:"Link","auto-grow":""},model:{value:t.linkFile,callback:function(i){t.linkFile=i},expression:"linkFile"}})],1)],1)],1),t._v(" "),e("v-card-actions",{staticClass:"pb-2 pl-5 pr-5"},[e("v-btn",{attrs:{color:"primary",block:"",rounded:"",type:"submit",disabled:!t.valid}},[t._v("\r\n                    Confirm\r\n                  ")])],1)],1)],1)],1),t._v(" "),e("v-row",{ref:"ContainerSize",class:t.$vuetify.breakpoint.mdAndUp?"pa-3":"pa-0",attrs:{justify:"center","no-gutters":""}},[t.$vuetify.breakpoint.mdAndUp||(1==t.selected||2==t.selected)?e("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12",md:"4",lg:"4",xl:"4"}},[t.$vuetify.breakpoint.mdAndUp||1==t.selected?e("v-card",{staticClass:"pa-7",attrs:{outlined:"",elevation:t.$vuetify.breakpoint.mdAndUp?1:0}},[e("v-row",[t.$vuetify.breakpoint.mdAndUp?e("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on,a=i.attrs;return[e("v-btn",t._g(t._b({attrs:{rounded:"",icon:"",text:""},on:{click:function(i){return t.$router.push({name:"classwork"})}}},"v-btn",a,!1),s),[e("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-left-thick")])],1)]}}],null,!1,1749575868)},[t._v(" "),e("span",[t._v("Back to classworks")])])],1):t._e(),t._v(" "),e("v-col",{staticClass:"pt-0 mt-0 pl-1 pr-1 pb-0 mb-0 d-flex justify-space-between",attrs:{cols:"12"}},[e("div",{staticClass:"font-weight-medium text-body-2 mt-3"},[t._v("Your Work")]),t._v(" "),null==t.classworkDetails.publish?e("div",["Submitted"==t.classworkDetails.status&&!t.classworkDetails.graded&&(1!=t.classworkDetails.availability||t.format_date1(t.DateToday)<=t.format_date1(t.classworkDetails.to_date))?e("v-btn",{staticClass:"blue--text",attrs:{rounded:"",text:""},on:{click:function(i){return t.clickResubmit()}}},[t._v(t._s(t.isResubmit?"Cancel":"Resubmit"))]):t._e(),t._v(" "),t.classworkDetails.graded?e("v-chip",{staticClass:"ma-2",attrs:{color:"green",outlined:""}},[t._v("\r\n                            Graded: "+t._s(t.classworkDetails.score)+" /"+t._s(t.classworkDetails.points)+"\r\n                            ")]):t._e()],1):t._e()]),t._v(" "),e("v-col",{staticClass:"pl-1 pr-1",attrs:{cols:"12"}},[e("v-divider")],1),t._v(" "),t.isloading?e("v-col",{attrs:{cols:"12"}},[t.isloading?e("v-container",{staticClass:"fill-height"},[e("v-row",{attrs:{"align-content":"center",justify:"center"}},[e("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[t._v("\r\n                                Loading\r\n                            ")]),t._v(" "),e("v-col",{attrs:{cols:"6"}},[e("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"3"}})],1)],1)],1):t._e()],1):t._e(),t._v(" "),e("v-file-input",{ref:"UploadAttachFile",staticClass:"d-none",attrs:{multiple:"",accept:".xlsx,.xls,image/*,.doc,.docx,.ppt, .pptx,.txt,.pdf,text/plain"},on:{change:t.onChange},model:{value:t.FileList,callback:function(i){t.FileList=i},expression:"FileList"}}),t._v(" "),t.isloading?t._e():e("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[e("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[e("v-row",{staticClass:"mb-2",attrs:{"ma-0":"","pa-0":""}},t._l(t.classworkDetails.Submitted_Answers,(function(i,s){return e("v-col",{key:s,staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[e("v-list",{attrs:{dense:"",nav:"",outlined:""}},[e("v-list-item",{attrs:{link:"",disabled:t.isUpIndex==s&&t.isUploadSaving}},[e("v-list-item-avatar",[e("v-icon",{attrs:{color:t.CheckFileIconColor(i.fileExte)}},[t._v("\r\n                                                "+t._s(t.CheckFileIcon(i.fileExte))+"\r\n                                              ")])],1),t._v(" "),e("v-list-item-content",{on:{click:function(e){return t.OpenFile(i.link)}}},[e("v-list-item-title",[t._v("\r\n                                                    "+t._s(i.name)+"\r\n                                                ")]),t._v(" "),t.isUploading[s]&&t.isUploadSaving?e("v-list-item-subtitle",[t.isUpIndex==s?e("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"5"}}):t._e()],1):t._e()],1),t._v(" "),e("v-list-item-action",["Submitting"!=t.classworkDetails.status&&!t.isResubmit||null!=t.classworkDetails.publish?t._e():e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on,n=i.attrs;return[e("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.isUpIndex!=s,expression:"isUpIndex != index"}],attrs:{loading:t.isDeleting&&t.isDeleting_id==s,rounded:"",small:"",icon:"",text:""},on:{click:function(i){return t.DeleteUpload(s)}}},"v-btn",n,!1),a),[e("v-icon",[t._v("mdi-close")])],1)]}}],null,!0)},[t._v(" "),e("span",[t._v("Delete")])])],1)],1)],1)],1)})),1)],1),t._v(" "),null==t.classworkDetails.publish?e("v-col",{staticClass:"ma-0 pa-0 mb-4 ",attrs:{cols:"12"}},[t.isResubmit||"Submitting"==t.classworkDetails.status||null==t.classworkDetails.status?e("v-menu",{attrs:{"max-width":"250",transition:"scale-transition","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on,a=i.attrs;return[e("v-btn",t._g(t._b({staticClass:"pl-12 pr-12 pb-3 pt-3",attrs:{block:"",color:"primary",dark:"",disabled:1==t.classworkDetails.availability&&t.format_date1(t.DateToday)<t.format_date1(t.classworkDetails.from_date),outlined:""}},"v-btn",a,!1),s),[t._v("\r\n                                  "+t._s(a.expanded)+"\r\n                                    Add "),e("v-icon",{attrs:{right:""}},[t._v("mdi-plus")])],1)]}}],null,!1,3245075026)},[t._v(" "),e("v-list",{attrs:{nav:"",dense:""}},[e("v-list-item",{attrs:{link:""},on:{click:function(i){return t.UploadFile()}}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-cloud-upload-outline")]),t._v(" Upload File\r\n                                  ")],1),t._v(" "),e("v-list-item",{attrs:{link:""},on:{click:function(i){t.AttachLink=!t.AttachLink}}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-link-variant")]),t._v("Attach Link\r\n                                  ")],1)],1)],1):t._e()],1):t._e(),t._v(" "),0==t.classworkDetails.availability?e("v-col",{staticClass:"ma-0 pa-0 mb-1 ",attrs:{cols:"12"}},[e("v-btn",{staticClass:"pl-12 pr-12 pb-3 pt-3",attrs:{disabled:0==t.classworkDetails.Submitted_Answers.length||null!=t.classworkDetails.publish,block:"",loading:t.IsSaving,color:"Submitted"!=t.classworkDetails.status||t.isResubmit?"primary":"success"},on:{click:function(i){("Submitted"!=t.classworkDetails.status||t.isResubmit)&&t.SubmitClasswork()}}},["Submitted"!=t.classworkDetails.status||t.isResubmit?t._e():e("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v("\r\n                                "+t._s("Submitted"!=t.classworkDetails.status||t.isResubmit?"Submit Classwork":"Submitted"))],1)],1):e("v-col",{staticClass:"ma-0 pa-0 mb-1 ",attrs:{cols:"12"}},[e("v-row",[t.format_date1(t.DateToday)>=t.format_date1(t.classworkDetails.from_date)?e("v-col",{attrs:{cols:"12"}},[e("v-btn",{staticClass:"pl-12 pr-12 pb-3 pt-3",attrs:{disabled:0==t.classworkDetails.Submitted_Answers.length,block:"",loading:t.IsSaving,color:"Submitted"!=t.classworkDetails.status||t.isResubmit?"primary":"success"},on:{click:function(i){("Submitted"!=t.classworkDetails.status||t.isResubmit)&&t.SubmitClasswork()}}},["Submitted"!=t.classworkDetails.status||t.isResubmit?t._e():e("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v("\r\n                                    "+t._s("Submitted"!=t.classworkDetails.status||t.isResubmit?"Submit Classwork":"Submitted"))],1)],1):e("v-col",{attrs:{cols:"12"}},[e("v-btn",{attrs:{block:"",color:"primary",disabled:""}},[t._v("\r\n                                    Not Yet Available"),e("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1)],1)],1)],1)],1)],1)],1):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp||2==t.selected?e("v-card",{class:t.$vuetify.breakpoint.mdAndUp?"mt-4":"",attrs:{outlined:"",elevation:t.$vuetify.breakpoint.mdAndUp?1:0}},[e("div",{staticClass:"pt-3 pl-4 pr-4 pb-2"},[e("v-icon",{attrs:{left:""}},[t._v("mdi-comment")]),t._v("Private Comments\r\n            ")],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list",{staticClass:"mb-0 pb-0",staticStyle:{"overflow-y":"scroll","scrollbar-width":"thin"},attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"350":"450"}},t._l(t.classworkDetails.comments,(function(i,s){return e("v-list-item",{key:s,staticClass:"mb-0 pb-0"},[e("v-list-item-avatar",[e("v-img",{attrs:{src:null==i.profile_pic||""==i.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+i.name:i.profile_pic}})],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{domProps:{innerHTML:t._s(i.name)}}),t._v(" "),e("v-list-item-subtitle",{domProps:{innerHTML:t._s(i.content)}})],1),t._v(" "),e("v-list-item-action",[e("v-menu",{attrs:{"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on,a=i.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),s),[e("v-icon",{attrs:{small:"",color:"grey lighten-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e("v-list",{attrs:{dense:"",nav:""}},[e("v-list-item",{on:{click:function(e){return t.DeleteComment(i.id,s)}}},[e("v-list-item-title",[t._v("Remove")])],1)],1)],1)],1)],1)})),1),t._v(" "),e("v-divider"),t._v(" "),e("v-list",{staticClass:"mb-0 pb-0 mt-0 pt-0"},[e("v-list-item",{staticClass:"mb-0 pb-0"},[e("v-list-item-avatar",[e("v-img",{attrs:{src:null==t.get_CurrentUser.profile_pic||""==t.get_CurrentUser.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+t.get_CurrentUser.firstName+" "+t.get_CurrentUser.lastName:t.get_CurrentUser.profile_pic}})],1),t._v(" "),e("v-list-item-content",{staticClass:"ma-0 pa-0"},[e("v-textarea",{staticClass:"pa-0 mt-7",attrs:{loading:t.isCommenting,"prepend-avatar":"mdi-emoticon-dead",filled:"",rounded:"",dense:"","auto-grow":"",rows:"1","clear-icon":"mdi-close-circle",clearable:"",placeholder:"Comment",type:"text"},model:{value:t.comment,callback:function(i){t.comment=i},expression:"comment"}})],1),t._v(" "),e("v-list-item-action",[e("v-btn",{attrs:{loading:t.isCommenting,icon:""},on:{click:function(i){return t.addComment(t.classworkDetails)}}},[e("v-icon",{attrs:{color:"primary"}},[t._v("mdi-send")])],1)],1)],1)],1)],1):t._e()],1):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp||0==t.selected?e("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pt-0 pl-5":"mt-0 pl-0 pt-0",attrs:{cols:"12",md:"8",lg:"8",xl:"8"}},[e("v-card",{class:t.$vuetify.breakpoint.mdAndUp?"pa-5":"pa-1",attrs:{outlined:t.$vuetify.breakpoint.mdAndUp,elevation:t.$vuetify.breakpoint.mdAndUp?1:0}},[e("v-row",{staticClass:"mb-0 pb-0"},[e("v-col",{staticClass:"ma-0",attrs:{cols:"12",md:"12"}},[e("v-row",[e("v-col",{staticClass:"pr-7",attrs:{cols:"12"}},[e("div",{staticClass:"d-flex flex-row justify-space-between"},[e("v-btn",{staticClass:"mt-3 ml-5",attrs:{fab:"",dark:"",small:"",color:"primary"}},[e("v-icon",[t._v("\r\n                                    mdi-book-open-variant\r\n                                    ")])],1),t._v(" "),e("div",{staticClass:"float-right mt-3",attrs:{fab:""}},[e("div",{staticClass:"text-md-h5"},[e("v-icon",{attrs:{large:"",color:"primary"}},[t._v("mdi-book-clock-outline")])],1),t._v(" "),e("div",{staticClass:"caption ml-2"},[t._v("Due "+t._s(t.classworkDetails.availability?t.format_date(t.classworkDetails.to_date):"always Available"))])])],1)]),t._v(" "),e("v-col",{staticClass:"pl-7 pr-5",attrs:{cols:"12"}},[e("div",{staticClass:"font-weight-medium text-sm-body-2 text-md-h6 text-xl-h5"},[t._v(t._s(t.classworkDetails.title))]),t._v(" "),e("div",{staticClass:"pt-2 d-flex flex-row "},[e("div",{staticClass:"font-weight-bold"},[t._v(t._s(t.classworkDetails.points)+" Points")])]),t._v(" "),e("v-divider")],1),t._v(" "),e("v-col",{staticClass:"pl-7 pr-5",attrs:{cols:"12"}},[e("span",{staticClass:"text-sm-body-2 ",domProps:{innerHTML:t._s(t.classworkDetails.instruction)}})]),t._v(" "),0!=t.classworkDetails.rubrics.length?e("v-col",{staticClass:" pb-5 pl-4 pr-4",attrs:{cols:"12"}},[e("div",{staticClass:"overline"},[t._v("Rubrics")]),t._v(" "),e("v-list",t._l(t.classworkDetails.rubrics,(function(i,s){return e("v-list-item",{key:s},[e("v-list-item-avatar",{attrs:{tile:""}},[e("div",{staticClass:"font-weight-bold"},[t._v(t._s(i.points)+"%")])]),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"font-weight-medium"},[t._v(t._s(i.criteria_name))]),t._v(" "),e("v-list-item-subtitle",[t._v(t._s(i.description))])],1)],1)})),1)],1):t._e(),t._v(" "),null!=t.classworkDetails.attachment?e("v-col",{staticClass:" pb-5 pl-4 pr-4",attrs:{cols:"12"}},[e("div",{staticClass:"overline"},[t._v("Attachments")]),t._v(" "),e("v-list",{staticClass:"ma-0 pa-0",attrs:{dense:""}},t._l(t.classworkDetails.attachment,(function(i,s){return e("v-list-item",{key:s,staticClass:"ma-0 pa-0"},[e("v-list-item-avatar",[e("v-icon",{attrs:{large:"",color:t.CheckFileIconColor(i.extension)}},[t._v("\r\n                                                    "+t._s(t.CheckFileIcon(i.extension))+"\r\n                                                    ")])],1),t._v(" "),e("v-list-item-content",[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var a=s.hover;return[e("v-list-item-title",{class:a?"blue--text":"",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.DownLoadFile(i.attachment,i.extension)}}},[t._v(t._s(i.name))])]}}],null,!0)})],1)],1)})),1)],1):t._e()],1)],1)],1)],1)],1):t._e()],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?t._e():e("v-bottom-navigation",{attrs:{app:"",grow:"",value:t.selected,color:"primary"}},[e("v-btn",{on:{click:function(i){t.selected=0}}},[e("span",[t._v("Details")]),t._v(" "),e("v-icon",[t._v("mdi-book-information-variant")])],1),t._v(" "),e("v-btn",{on:{click:function(i){t.selected=1}}},[e("span",[t._v("Submission")]),t._v(" "),e("v-icon",[t._v("mdi-playlist-edit")])],1),t._v(" "),e("v-btn",{on:{click:function(i){t.selected=2}}},[e("span",[t._v("Comment")]),t._v(" "),e("v-icon",[t._v("mdi-comment")])],1)],1)],1)}),[],!1,null,null,null).exports}}]);