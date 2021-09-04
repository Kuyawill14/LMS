"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3124],{8949:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(1519),a=i.n(s)()((function(t){return t[1]}));a.push([t.id,".dropZone[data-v-a89e2640]{border:2px dashed #eee;border-radius:.3rem;height:7rem;position:relative;width:100%}.dropZone-info[data-v-a89e2640]{color:#a8a8a8;position:absolute;text-align:center;top:50%;transform:translateY(-50%);width:100%}.dropZone-title[data-v-a89e2640]{color:#787878}.dropZone input[data-v-a89e2640]{bottom:0;cursor:pointer;height:100%;left:0;opacity:0;position:absolute;right:0;top:0;width:100%}.dropZone-upload-limit-info[data-v-a89e2640]{display:flex;flex-direction:column;justify-content:flex-start}.dropZone-over[data-v-a89e2640]{background:#e0e0e0;opacity:.8}.dropZone-uploaded[data-v-a89e2640]{height:auto;padding-top:4rem;position:relative}.dropZone-uploaded-info[data-v-a89e2640]{align-items:center;color:#a8a8a8;display:flex;flex-direction:column;position:absolute;text-align:center;top:50%;transform:translateY(-50%);width:100%}.filePreview[data-v-a89e2640]{width:100%}.removeFile[data-v-a89e2640]{width:200px}",""]);const n=a},3124:(t,e,i)=>{i.r(e),i.d(e,{default:()=>h});var s=i(7757),a=i.n(s),n=i(2239);function l(t,e,i,s,a,n,l){try{var o=t[n](l),r=o.value}catch(t){return void i(t)}o.done?e(r):Promise.resolve(r).then(s,a)}function o(t){return function(){var e=this,i=arguments;return new Promise((function(s,a){var n=t.apply(e,i);function o(t){l(n,s,a,o,r,"next",t)}function r(t){l(n,s,a,o,r,"throw",t)}o(void 0)}))}}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const d={props:["classworkDetails"],components:{attachlinkDiaglog:function(){return i.e(2514).then(i.bind(i,2514))}},data:function(){return{AttachLink:!1,file:[],fileSize:null,dragging:!1,link:"test12",StatusDetails:[],uploadPercentage:0,isUploading:[],tempId:"",isResubmit:!1,isloading:!0,fileIndex:null,tempFile:null,isUpIndex:null,comment:null,isCommenting:!1,linkName:null,linkFile:null,IsSaving:!1,isDeleting:!1}},computed:c(c({},(0,i(629).Se)(["get_CurrentUser"])),{},{extension:function(){return this.tempFile?this.tempFile.name.split(".").pop():""},Fileextension:function(){return this.classworkDetails.attachment.split(".").pop()},SubmittedFilextension:function(){return this.StatusDetails.Submitted_Answers[0].name.split(".").pop()}}),methods:{OpenFile:function(t){window.open(t,"_blank")},scrapeDocID:function(){var t="https://drive.google.com/file/d/"+this.linkFile.replace(/.*\/d\//,"").replace(/\/.*/,"")+"/preview";0==this.StatusDetails.length?this.file.push({fileName:this.linkName,fileSize:"",fileExte:"link",file:t}):(this.file.push({fileName:this.linkName,fileSize:"",fileExte:"link",file:t}),this.StatusDetails.Submitted_Answers.push({name:this.linkName,fileSize:"",fileExte:"link",link:t})),this.AddLinkInSubmittedAnswer()},AddLinkInSubmittedAnswer:function(){var t=this,e=this.file.length-1,i=null==this.tempId?"empty":this.tempId,s=new FormData;s.append("Submission_id",i),s.append("id",this.classworkDetails.id),s.append("class_classwork_id",this.classworkDetails.class_classwork_id),s.append("type",this.classworkDetails.type),s.append("fileName",this.file[e].fileName),s.append("fileSize",this.file[e].fileSize),s.append("fileExte",this.file[e].fileExte),s.append("file",this.file[e].file),axios.post("/api/student/linkAndstatus",s).then((function(e){t.AttachLink=!1,t.linkName=null,t.linkFile=null}))},UploadFile:function(){this.$refs.UploadAttachFile.click()},UploadMoreFile:function(){this.file.length<=4&&this.$refs.AttAchMoreFile.click()},format_date:function(t){if(t)return(0,n.Z)(String(t)).format("dddd, h:mm a")},DownLoadFile:function(t,e){var i;i="docx"==e?"https://view.officeapps.live.com/op/view.aspx?src="+t:t,window.open(i,"_blank")},onChange:function(t){var e=t.target.files||t.dataTransfer.files;this.createFile(e[0])},createFile:function(t){var e=this.file.length;this.isUploading[e]=!0,this.fileIndex=e,this.tempFile=t;var i=t.size;if(i>1e6){var s=parseInt(.001*(.001*i));this.fileSize=s+"mb"}else{var a=parseInt(.001*i);this.fileSize=a+"kb"}0==this.StatusDetails.length?this.file.push({fileName:this.tempFile.name,fileSize:this.fileSize,fileExte:this.extension,file:this.tempFile}):(this.file.push({fileName:this.tempFile.name,fileSize:this.fileSize,fileExte:this.extension,file:this.tempFile}),this.StatusDetails.Submitted_Answers.push({name:this.tempFile.name,fileSize:this.fileSize,fileExte:this.extension})),this.fileIndex=this.file.length,this.isUpIndex=this.file.length-1,this.UpdateSubmission(this.file.length-1)},removeFile:function(t){var e=this;this.isDeleting=!0,axios.put("/api/submission/file-remove/"+this.tempId,{Fileindex:t}).then((function(i){e.uploadPercentage=0,e.file="",e.tempId=null,e.isUploading[t]=!1,e.isDeleting=!1}))},test:function(){this.link},checkStatus:function(t){var e=this;return o(a().mark((function i(){return a().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:axios.get("/api/submission/check-sbj/"+e.classworkDetails.id).then((function(i){e.StatusDetails=i.data,e.tempId=i.data.Sub_id,"submit"!=t&&(e.isloading=!e.isloading)}));case 1:case"end":return i.stop()}}),i)})))()},UpdateSubmission:function(t){var e=this,i=null==this.tempId?"empty":this.tempId,s=new FormData;s.append("Submission_id",i),s.append("id",this.classworkDetails.id),s.append("class_classwork_id",this.classworkDetails.class_classwork_id),s.append("type",this.classworkDetails.type),s.append("fileName",this.file[t].fileName),s.append("fileSize",this.file[t].fileSize),s.append("fileExte",this.extension),s.append("file",this.file[t].file),axios.post("/api/student/update-status",s,{onUploadProgress:function(t){var i=t.total,s=t.lengthComputable?i:null;null!=s&&(e.uploadPercentage=Math.round(100*t.loaded/s))}}).then((function(t){e.tempId=null==e.tempId?t.data:e.tempId}))},DeleteUpload:function(t){var e=this;this.isDeleting=!0;axios.put("/api/submission/file-remove/"+this.tempId,{Fileindex:t}).then((function(i){e.checkStatus("submit"),e.uploadPercentage=0,e.isUploading[t]=!1,e.isDeleting=!1}))},SubmitClasswork:function(){var t=this;return o(a().mark((function e(){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[],0!=t.classworkDetails.rubrics.length?t.classworkDetails.rubrics.forEach((function(t){i.push({id:t.id,points:null})})):i=null,t.IsSaving=!0,"submit",axios.put("/api/student/submit-classwork/"+t.tempId,{data:i}).then((function(e){200==e.status&&(t.checkStatus("submit"),t.IsSaving=!1,t.isResubmit=!1)}));case 5:case"end":return e.stop()}}),e)})))()},addComment:function(t){var e=this;return o(a().mark((function i(){var s;return a().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:s={},e.isCommenting=!0,s.classwork_id=t.id,s.to_user=t.user_id,s.type="Private",s.course_id=e.$route.params.id,s.comment=e.comment,axios.post("/api/post/classwork/comment/insert",s).then((function(t){200==t.status&&(e.classworkDetails.comments.push({content:t.data.comment,id:t.data.id,name:t.data.name,profile_pic:t.data.profile_pic}),e.comment=null)})),e.isCommenting=!1;case 9:case"end":return i.stop()}}),i)})))()},DeleteComment:function(t,e){var i=this;return o(a().mark((function s(){return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:axios.delete("/api/post/classwork/comment/delete/"+t).then((function(t){1==t.data.success&&i.classworkDetails.comments.splice(e,1)}));case 1:case"end":return s.stop()}}),s)})))()}},created:function(){this.checkStatus()}};var u=i(2446),v=i.n(u),m=i(8949),f={insert:"head",singleton:!1};v()(m.Z,f);m.Z.locals;const h=(0,i(1900).Z)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pt-5"},[i("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.AttachLink,callback:function(e){t.AttachLink=e},expression:"AttachLink"}},[i("v-card",[i("v-card-title",[i("v-btn",{attrs:{icon:""},on:{click:function(e){t.AttachLink=!1}}},[i("v-icon",[t._v("mdi-close")])],1),t._v(" "),i("span",{staticClass:"text-h6"},[t._v(" Attach Link")])],1),t._v(" "),i("v-card-text",[i("v-row",[i("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[i("v-textarea",{staticClass:"mb-0 pb-0",attrs:{outlined:"",dense:"",rows:"1",label:"Title","auto-grow":""},model:{value:t.linkName,callback:function(e){t.linkName=e},expression:"linkName"}})],1),t._v(" "),i("v-col",{staticClass:"mb-0 pb-0 mt-0 pt-0",attrs:{cols:"12"}},[i("v-textarea",{staticClass:"mb-0 pb-0",attrs:{outlined:"",dense:"",rows:"1",label:"Link","auto-grow":""},model:{value:t.linkFile,callback:function(e){t.linkFile=e},expression:"linkFile"}})],1)],1)],1),t._v(" "),i("v-card-actions",{staticClass:"pb-2 pl-5 pr-5"},[i("v-btn",{attrs:{color:"primary",block:"",rounded:""},on:{click:t.scrapeDocID}},[t._v("\r\n                    Confirm\r\n                  ")])],1)],1)],1),t._v(" "),i("v-row",{staticClass:"pa-2",attrs:{justify:"center","no-gutters":""}},[i("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12",md:"5",lg:"4"}},[i("v-card",{staticClass:"pa-7",attrs:{outlined:"",elevation:"1"}},[i("v-row",[i("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{rounded:"",icon:"",text:""},on:{click:function(e){return t.$router.push({name:"classwork"})}}},"v-btn",a,!1),s),[i("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-left-thick")])],1)]}}])},[t._v(" "),i("span",[t._v("Back to classworks")])])],1),t._v(" "),i("v-col",{staticClass:"pt-0 mt-0 pl-1 pr-1 pb-0 mb-0 d-flex justify-space-between",attrs:{cols:"12"}},[i("div",{staticClass:"font-weight-medium text-body-2 mt-3"},[t._v("Your Work")]),t._v(" "),"Submitted"!=t.StatusDetails.status||t.StatusDetails.graded?t._e():i("v-btn",{staticClass:"blue--text",attrs:{rounded:"",text:""},on:{click:function(e){t.isResubmit=!t.isResubmit}}},[t._v(t._s(t.isResubmit?"Cancel":"Resubmit"))]),t._v(" "),t.StatusDetails.graded?i("v-chip",{staticClass:"ma-2",attrs:{color:"green",outlined:""}},[t._v("\r\n                         Graded: "+t._s(t.StatusDetails.score)+" /"+t._s(t.StatusDetails.totalPoints)+"\r\n                        ")]):t._e()],1),t._v(" "),i("v-col",{staticClass:"pl-1 pr-1",attrs:{cols:"12"}},[i("v-divider")],1),t._v(" "),t.isloading?i("v-col",{attrs:{cols:"12"}},[t.isloading?i("v-container",{staticClass:"fill-height"},[i("v-row",{attrs:{"align-content":"center",justify:"center"}},[i("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[t._v("\r\n                                Loading\r\n                            ")]),t._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"3"}})],1)],1)],1):t._e()],1):t._e(),t._v(" "),i("input",{ref:"AttAchMoreFile",staticClass:"d-none",attrs:{accept:"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*",type:"file"},on:{change:t.onChange}}),t._v(" "),i("input",{ref:"UploadAttachFile",staticClass:"d-none",attrs:{accept:"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*",type:"file"},on:{change:t.onChange}}),t._v(" "),t.isloading?t._e():i("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[""!=t.file[0]||null!=t.file[0]?i("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},["Submitting"!=t.StatusDetails.status&&"Submitted"!=t.StatusDetails.status?i("v-row",{staticClass:"mb-5"},t._l(t.file,(function(e,s){return i("v-col",{key:s,staticClass:"ma-0 pa-0 ",attrs:{cols:"12"}},[i("v-list",{attrs:{dense:"",nav:"",outlined:""}},[i("v-list-item",{attrs:{link:""}},[i("v-list-item-avatar",[i("v-icon",{attrs:{color:"pdf"==e.fileExte?"red":"docx"==e.fileExte?"blue":"link"==e.fileExte?"green":"jpg"==e.fileExte||"png"==e.fileExte||"bmp"==e.fileExte?"info":""}},[t._v("\r\n                                                "+t._s("pdf"==e.fileExte?"mdi-file-pdf":"docx"==e.fileExte?"mdi-file-word":"link"==e.fileExte?"mdi-file-link":"jpg"==e.fileExte||"png"==e.fileExte||"bmp"==e.fileExte?"mdi-folder-multiple-image":"")+"\r\n                                              ")])],1),t._v(" "),i("v-list-item-content",{on:{click:function(i){return t.OpenFile(e.link)}}},[i("v-list-item-title",[t._v("\r\n                                                    "+t._s(e.fileName)+"\r\n                                                ")]),t._v(" "),t.isUploading[s]&&100!=t.uploadPercentage?i("div",[t.isUpIndex==s?i("v-progress-linear",{attrs:{rounded:"",value:t.uploadPercentage}}):t._e()],1):t._e()],1),t._v(" "),i("v-list-item-action",[t.isUploading[s]&&100!=t.uploadPercentage?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticStyle:{"z-index":"10"},attrs:{rounded:"",small:"",loading:t.isDeleting,icon:"",text:""},on:{click:function(e){return t.removeFile(s)}}},"v-btn",n,!1),a),[i("v-icon",[t._v("mdi-close")])],1)]}}],null,!0)},[t._v(" "),i("span",[t._v("Delete")])])],1)],1)],1)],1)})),1):i("v-row",{staticClass:"mb-2",attrs:{"ma-0":"","pa-0":""}},t._l(t.StatusDetails.Submitted_Answers,(function(e,s){return i("v-col",{key:s,staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[i("v-list",{attrs:{dense:"",nav:"",outlined:""}},[i("v-list-item",{attrs:{link:""}},[i("v-list-item-avatar",[i("v-icon",{attrs:{color:"pdf"==e.fileExte?"red":"docx"==e.fileExte?"blue":"link"==e.fileExte?"green":"jpg"==e.fileExte||"png"==e.fileExte||"bmp"==e.fileExte?"info":""}},[t._v("\r\n                                                "+t._s("pdf"==e.fileExte?"mdi-file-pdf":"docx"==e.fileExte?"mdi-file-word":"link"==e.fileExte?"mdi-file-link":"jpg"==e.fileExte||"png"==e.fileExte||"bmp"==e.fileExte?"mdi-folder-multiple-image":"")+"\r\n                                              ")])],1),t._v(" "),i("v-list-item-content",{on:{click:function(i){return t.OpenFile(e.link)}}},[i("v-list-item-title",[t._v("\r\n                                                    "+t._s(e.name)+"\r\n                                                ")])],1),t._v(" "),i("v-list-item-action",["Submitting"==t.StatusDetails.status||t.isResubmit?i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticStyle:{"z-index":"10"},attrs:{loading:t.isDeleting,rounded:"",small:"",icon:"",text:""},on:{click:function(e){return t.DeleteUpload(s)}}},"v-btn",n,!1),a),[i("v-icon",[t._v("mdi-close")])],1)]}}],null,!0)},[t._v(" "),i("span",[t._v("Delete")])]):t._e()],1)],1)],1)],1)})),1)],1):t._e(),t._v(" "),i("v-col",{staticClass:"ma-0 pa-0 mb-4 ",attrs:{cols:"12"}},[t.isResubmit||"Submitting"==t.StatusDetails.status||null==t.StatusDetails.status?i("v-menu",{attrs:{"max-width":"250",transition:"scale-transition","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"pl-12 pr-12 pb-3 pt-3",attrs:{block:"",color:"primary",dark:"",outlined:""}},"v-btn",a,!1),s),[t._v("\r\n                                  "+t._s(a.expanded)+"\r\n                                    Add "),i("v-icon",{attrs:{right:""}},[t._v("mdi-plus")])],1)]}}],null,!1,857056327)},[t._v(" "),i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item",{attrs:{link:""},on:{click:function(e){t.file[t.fileIndex-1]||t.isResubmit?t.UploadMoreFile():t.UploadFile()}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-cloud-upload-outline")]),t._v(" Upload File\r\n                                  ")],1),t._v(" "),i("v-list-item",{attrs:{link:""},on:{click:function(e){t.AttachLink=!t.AttachLink}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-link-variant")]),t._v("Attach Link\r\n                                  ")],1)],1)],1):t._e()],1),t._v(" "),i("v-col",{staticClass:"ma-0 pa-0 mb-1 ",attrs:{cols:"12"}},[i("v-btn",{staticClass:"pl-12 pr-12 pb-3 pt-3",attrs:{block:"",loading:t.IsSaving,color:"Submitted"!=t.StatusDetails.status||t.isResubmit?"primary":"success"},on:{click:function(e){("Submitted"!=t.StatusDetails.status||t.isResubmit)&&t.SubmitClasswork()}}},["Submitted"!=t.StatusDetails.status||t.isResubmit?t._e():i("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v("\r\n                                "+t._s("Submitted"!=t.StatusDetails.status||t.isResubmit?"Submit Classwork":"Submitted"))],1)],1)],1)],1)],1),t._v(" "),i("v-card",{staticClass:"mt-4",attrs:{elevation:"1",outlined:""}},[i("div",{staticClass:"pt-3 pl-4 pr-4 pb-2"},[i("v-icon",{attrs:{left:""}},[t._v("mdi-comment")]),t._v("Private Comments\r\n            ")],1),t._v(" "),i("v-divider"),t._v(" "),i("v-list",{staticClass:"mb-0 pb-0"},t._l(t.classworkDetails.comments,(function(e,s){return i("v-list-item",{key:s,staticClass:"mb-0 pb-0"},[i("v-list-item-avatar",[i("v-img",{attrs:{src:null==e.profile_pic||""==e.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+e.name:e.profile_pic}})],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{domProps:{innerHTML:t._s(e.name)}}),t._v(" "),i("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.content)}})],1),t._v(" "),i("v-list-item-action",[i("v-menu",{attrs:{"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),s),[i("v-icon",{attrs:{small:"",color:"grey lighten-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),i("v-list",{attrs:{dense:"",nav:""}},[i("v-list-item",{on:{click:function(i){return t.DeleteComment(e.id,s)}}},[i("v-list-item-title",[t._v("Remove")])],1)],1)],1)],1)],1)})),1),t._v(" "),i("v-divider"),t._v(" "),i("v-list",{staticClass:"mb-0 pb-0 mt-0 pt-0"},[i("v-list-item",{staticClass:"mb-0 pb-0"},[i("v-list-item-avatar",[i("v-img",{attrs:{src:null==t.get_CurrentUser.profile_pic||""==t.get_CurrentUser.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+t.get_CurrentUser.firstName+" "+t.get_CurrentUser.lastName:t.get_CurrentUser.profile_pic}})],1),t._v(" "),i("v-list-item-content",{staticClass:"ma-0 pa-0"},[i("v-textarea",{staticClass:"pa-0 mt-7",attrs:{loading:t.isCommenting,"prepend-avatar":"mdi-emoticon-dead",filled:"",rounded:"",dense:"","auto-grow":"",rows:"1","clear-icon":"mdi-close-circle",clearable:"",placeholder:"Comment",type:"text"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),t._v(" "),i("v-list-item-action",[i("v-btn",{attrs:{loading:t.isCommenting,icon:""},on:{click:function(e){return t.addComment(t.classworkDetails)}}},[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-send")])],1)],1)],1)],1)],1)],1),t._v(" "),i("v-col",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"mt-2 pl-0 pt-2":"pt-0 pl-5",attrs:{cols:"12",md:"7",lg:"8"}},[i("v-card",{staticClass:"pa-5",attrs:{elevation:"1",outlined:""}},[i("v-row",{staticClass:"mb-0 pb-0"},[i("v-col",{staticClass:"ma-0",attrs:{cols:"12",md:"12"}},[i("v-row",[i("v-col",{staticClass:"pr-7",attrs:{cols:"12"}},[i("div",{staticClass:"d-flex flex-row justify-space-between"},[i("v-btn",{staticClass:"mt-3 ml-5",attrs:{fab:"",dark:"",small:"",color:"primary"}},[i("v-icon",[t._v("\r\n                                    mdi-book-open-variant\r\n                                    ")])],1),t._v(" "),i("div",{staticClass:"float-right mt-3",attrs:{fab:""}},[i("div",{staticClass:"text-md-h5"},[i("v-icon",{attrs:{large:"",color:"primary"}},[t._v("mdi-book-clock-outline")])],1),t._v(" "),i("div",{staticClass:"caption ml-2"},[t._v("Due "+t._s(t.classworkDetails.availability?t.format_date(t.classworkDetails.to_date):"always Available"))])])],1)]),t._v(" "),i("v-col",{staticClass:"pl-7 pr-5",attrs:{cols:"12"}},[i("div",{staticClass:"font-weight-medium text-sm-body-2 text-md-h6 text-xl-h5"},[t._v(t._s(t.classworkDetails.title))]),t._v(" "),i("div",{staticClass:"pt-2 d-flex flex-row "},[i("div",{staticClass:"font-weight-bold"},[t._v(t._s(t.classworkDetails.points)+" Points")])]),t._v(" "),i("v-divider")],1),t._v(" "),i("v-col",{staticClass:"pl-7 pr-5",attrs:{cols:"12"}},[i("div",{staticClass:"text-sm-body-2"},[t._v(" "+t._s(t.classworkDetails.instruction))])]),t._v(" "),i("v-col",{staticClass:" pb-5 pl-4 pr-4",attrs:{cols:"12"}},[i("div",{staticClass:"overline"},[t._v("Rubrics")]),t._v(" "),i("v-list",t._l(t.classworkDetails.rubrics,(function(e,s){return i("v-list-item",{key:s},[i("v-list-item-avatar",{attrs:{tile:""}},[i("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.points)+"%")])]),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{staticClass:"font-weight-medium"},[t._v(t._s(e.criteria_name))]),t._v(" "),i("v-list-item-subtitle",[t._v(t._s(e.description))])],1)],1)})),1)],1),t._v(" "),i("v-col",{staticClass:" pb-5 pl-4 pr-4",attrs:{cols:"12"}},[i("div",{staticClass:"overline"},[t._v("Attachments")]),t._v(" "),i("v-list",{staticClass:"ma-0 pa-0",attrs:{dense:""}},t._l(t.classworkDetails.attachment,(function(e,s){return i("v-list-item",{key:s,staticClass:"ma-0 pa-0"},[i("v-list-item-avatar",[i("v-icon",{attrs:{large:"",color:"docx"==e.extension?"blue":"red"}},[t._v("\r\n                                                    "+t._s("docx"==e.extension?"mdi-file-word":"mdi-file-pdf")+"\r\n                                                    ")])],1),t._v(" "),i("v-list-item-content",[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var a=s.hover;return[i("v-list-item-title",{class:a?"blue--text":"",staticStyle:{cursor:"pointer"},on:{click:function(i){return t.DownLoadFile(e.attachment,e.extension)}}},[t._v(t._s(e.name))])]}}],null,!0)})],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"a89e2640",null).exports}}]);