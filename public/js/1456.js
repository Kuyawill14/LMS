(self.webpackChunk=self.webpackChunk||[]).push([[1456],{7254:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var s=i(3645),a=i.n(s)()((function(t){return t[1]}));a.push([t.id,".dropZone[data-v-03e75c02]{width:100%;height:7rem;position:relative;border:2px dashed #eee;border-radius:.3rem}.dropZone-info[data-v-03e75c02]{color:#a8a8a8;position:absolute;top:50%;width:100%;transform:translateY(-50%);text-align:center}.dropZone-title[data-v-03e75c02]{color:#787878}.dropZone input[data-v-03e75c02]{position:absolute;cursor:pointer;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0}.dropZone-upload-limit-info[data-v-03e75c02]{display:flex;justify-content:flex-start;flex-direction:column}.dropZone-over[data-v-03e75c02]{background:#e0e0e0;opacity:.8}.dropZone-uploaded[data-v-03e75c02]{padding-top:4rem;height:auto;position:relative}.dropZone-uploaded-info[data-v-03e75c02]{display:flex;flex-direction:column;align-items:center;color:#a8a8a8;position:absolute;top:50%;width:100%;transform:translateY(-50%);text-align:center}.filePreview[data-v-03e75c02]{width:100%}.removeFile[data-v-03e75c02]{width:200px}",""]);const l=a},1456:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>p});var s=i(7757),a=i.n(s),l=i(381),n=i.n(l),o=i(9669),r=i.n(o);function c(t,e,i,s,a,l,n){try{var o=t[l](n),r=o.value}catch(t){return void i(t)}o.done?e(r):Promise.resolve(r).then(s,a)}function d(t){return function(){var e=this,i=arguments;return new Promise((function(s,a){var l=t.apply(e,i);function n(t){c(l,s,a,n,o,"next",t)}function o(t){c(l,s,a,n,o,"throw",t)}n(void 0)}))}}const u={props:["classworkDetails"],components:{attachlinkDiaglog:function(){return i.e(802).then(i.bind(i,802))}},data:function(){return{AttachLink:!1,file:[],fileSize:null,dragging:!1,link:"test12",StatusDetails:[],uploadPercentage:0,isUploading:[],tempId:"",isResubmit:!1,isloading:!0,fileIndex:null,tempFile:null,isUpIndex:null}},computed:{extension:function(){return this.tempFile?this.tempFile.name.split(".").pop():""},Fileextension:function(){return this.classworkDetails.attachment.split(".").pop()},SubmittedFilextension:function(){return this.StatusDetails.Submitted_Answers[0].name.split(".").pop()}},methods:{UploadFile:function(){this.$refs.UploadAttachFile.click()},UploadMoreFile:function(){this.file.length<=4&&this.$refs.AttAchMoreFile.click()},format_date:function(t){if(t)return n()(String(t)).format("dddd, h:mm a")},DownLoadFile:function(t){window.location="/storage/"+t},onChange:function(t){var e=t.target.files||t.dataTransfer.files;this.createFile(e[0])},createFile:function(t){var e=this.file.length;this.isUploading[e]=!0,this.fileIndex=e,this.tempFile=t;var i=t.size;if(i>1e6){var s=parseInt(.001*(.001*i));this.fileSize=s+"mb"}else{var a=parseInt(.001*i);this.fileSize=a+"kb"}0==this.StatusDetails.length?this.file.push({fileName:this.tempFile.name,fileSize:this.fileSize,fileExte:this.extension,file:this.tempFile}):(this.file.push({fileName:this.tempFile.name,fileSize:this.fileSize,fileExte:this.extension,file:this.tempFile}),this.StatusDetails.Submitted_Answers.push({name:this.tempFile.name,fileSize:this.fileSize,fileExte:this.extension})),this.fileIndex=this.file.length,this.isUpIndex=this.file.length-1,this.UpdateSubmission(this.file.length-1)},removeFile:function(t){var e=this;r().put("/api/submission/file-remove/"+this.tempId,{Fileindex:t}).then((function(i){e.uploadPercentage=0,e.file="",e.tempId=null,e.isUploading[t]=!1}))},test:function(){var t='<iframe class="ql-video" frameborder="0" allowfullscreen="true" src="'+this.link+'"></iframe><div><br></div>';console.log(t)},checkStatus:function(t){var e=this;return d(a().mark((function i(){return a().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:r().get("/api/submission/check-sbj/"+e.classworkDetails.id).then((function(i){e.StatusDetails=i.data,e.tempId=i.data.Sub_id,"submit"!=t&&(e.isloading=!e.isloading)}));case 1:case"end":return i.stop()}}),i)})))()},UpdateSubmission:function(t){var e=this,i=null==this.tempId?"empty":this.tempId,s=new FormData;s.append("Submission_id",i),s.append("id",this.classworkDetails.id),s.append("class_classwork_id",this.classworkDetails.class_classwork_id),s.append("type",this.classworkDetails.type),s.append("fileName",this.file[t].fileName),s.append("fileSize",this.file[t].fileSize),s.append("fileExte",this.extension),s.append("file",this.file[t].file),r().post("/api/student/update-status",s,{onUploadProgress:function(t){var i=t.total,s=t.lengthComputable?i:null;null!=s&&(e.uploadPercentage=Math.round(100*t.loaded/s))}}).then((function(t){e.tempId=null==e.tempId?t.data:e.tempId}))},DeleteUpload:function(t){var e=this;r().put("/api/submission/file-remove/"+this.tempId,{Fileindex:t}).then((function(i){e.checkStatus("submit"),e.uploadPercentage=0,e.isUploading[t]=!1}))},SubmitClasswork:function(){var t=this;return d(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"submit",r().put("/api/student/submit-classwork/"+t.tempId).then((function(e){200==e.status&&(t.checkStatus("submit"),t.isResubmit=!1)}));case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.checkStatus()}};i(5305);const p=(0,i(1900).Z)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pt-5"},[i("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.AttachLink,callback:function(e){t.AttachLink=e},expression:"AttachLink"}},[t.AttachLink?i("attachlinkDiaglog",{on:{toggleCancelDialog:function(e){t.AttachLink=!t.AttachLink},ToggleRefresh:function(e){t.$emit("ToggleRefresh"),t.AttachLink=!t.AttachLink}}}):t._e()],1),t._v(" "),i("v-row",{staticClass:"pa-2",attrs:{justify:"center","no-gutters":""}},[i("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12",md:"5",lg:"4"}},[i("v-card",{staticClass:"pa-7",attrs:{outlined:"",elevation:"1"}},[i("v-row",[i("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{rounded:"",icon:"",text:""},on:{click:function(e){return t.$router.push({name:"classwork"})}}},"v-btn",a,!1),s),[i("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-left-thick")])],1)]}}])},[t._v(" "),i("span",[t._v("Back to classworks")])])],1),t._v(" "),i("v-col",{staticClass:"pt-0 mt-0 pl-1 pr-1 pb-0 mb-0 d-flex justify-space-between",attrs:{cols:"12"}},[i("div",{staticClass:"font-weight-medium text-body-2 mt-3"},[t._v("Your Work")]),t._v(" "),"Submitted"!=t.StatusDetails.status||t.StatusDetails.graded?t._e():i("v-btn",{staticClass:"blue--text",attrs:{rounded:"",text:""},on:{click:function(e){t.isResubmit=!t.isResubmit}}},[t._v(t._s(t.isResubmit?"Cancel":"Resubmit"))]),t._v(" "),t.StatusDetails.graded?i("v-chip",{staticClass:"ma-2",attrs:{color:"green",outlined:""}},[t._v("\n                         Graded: "+t._s(t.StatusDetails.score)+" /"+t._s(t.StatusDetails.totalPoints)+"\n                        ")]):t._e()],1),t._v(" "),i("v-col",{staticClass:"pl-1 pr-1",attrs:{cols:"12"}},[i("v-divider")],1),t._v(" "),t.isloading?i("v-col",{attrs:{cols:"12"}},[t.isloading?i("v-container",{staticClass:"fill-height"},[i("v-row",{attrs:{"align-content":"center",justify:"center"}},[i("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[t._v("\n                                Loading\n                            ")]),t._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"3"}})],1)],1)],1):t._e()],1):t._e(),t._v(" "),i("input",{ref:"AttAchMoreFile",staticClass:"d-none",attrs:{accept:"application/pdf",type:"file"},on:{change:t.onChange}}),t._v(" "),i("input",{ref:"UploadAttachFile",staticClass:"d-none",attrs:{accept:"application/pdf",type:"file"},on:{change:t.onChange}}),t._v(" "),t.isloading?t._e():i("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[""!=t.file[0]||null!=t.file[0]?i("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},["Submitting"!=t.StatusDetails.status&&"Submitted"!=t.StatusDetails.status?i("v-row",{staticClass:"mb-5"},t._l(t.file,(function(e,s){return i("v-col",{key:s,staticClass:"ma-0 pa-0 ",attrs:{cols:"12"}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var l=a.hover;return[i("v-alert",{staticClass:"mb-1 pa-3",class:l?"grey lighten-2":"",staticStyle:{cursor:"pointer"},attrs:{outlined:"",icon:"pdf"==e.fileExte?"mdi-file-pdf":"docx"==e.fileExte?"mdi-file-word":"jpg"==e.fileExte||"png"==e.fileExte||"bmp"==e.fileExte?"mdi-folder-multiple-image":"",color:"pdf"==e.fileExte?"red":"docx"==e.fileExte?"blue":"jpg"==e.fileExte||"png"==e.fileExte||"bmp"==e.fileExte?"info":""}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{class:100!=t.uploadPercentage?"grow text-left mb-0 pb-0":"grow text-left"},[i("div",{class:l?"text-decoration-underline":""},[t._v(" "+t._s(e.fileName))])]),t._v(" "),i("v-col",{class:100!=t.uploadPercentage?"shrink d-flex mb-0 pb-0":"shrink d-flex"},[i("div",{staticClass:"black--text mt-1 mr-2"},[t._v(t._s(e.fileSize))]),t._v(" "),i("div",[t.isUploading[s]&&100!=t.uploadPercentage?t._e():i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,l=e.attrs;return[i("v-btn",t._g(t._b({attrs:{rounded:"",small:"",icon:"",text:""},on:{click:function(e){return t.removeFile(s)}}},"v-btn",l,!1),a),[i("v-icon",[t._v("mdi-close")])],1)]}}],null,!0)},[t._v(" "),i("span",[t._v("Delete")])])],1)]),t._v(" "),t.isUploading[s]&&100!=t.uploadPercentage?i("v-col",{staticClass:"pt-0 mt-0",attrs:{cols:"12"}},[t.isUpIndex==s?i("v-progress-linear",{attrs:{rounded:"",value:t.uploadPercentage}}):t._e()],1):t._e()],1)],1)]}}],null,!0)})],1)})),1):i("v-row",{staticClass:"mb-2",attrs:{"ma-0":"","pa-0":""}},t._l(t.StatusDetails.Submitted_Answers,(function(e,s){return i("v-col",{key:s,staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var l=a.hover;return[i("v-alert",{staticClass:"mb-1 pa-3",class:l?"grey lighten-2":"",staticStyle:{cursor:"pointer"},attrs:{outlined:"",icon:"pdf"==e.fileExte?"mdi-file-pdf":"docx"==e.fileExte?"mdi-file-word":"jpg"==e.fileExte||"png"==e.fileExte||"bmp"==e.fileExte?"mdi-folder-multiple-image":"",color:"pdf"==e.fileExte?"red":"docx"==e.fileExte?"blue":"jpg"==e.fileExte||"png"==e.fileExte||"bmp"==e.fileExte?"info":""}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"grow text-left"},[i("div",{class:l?"text-decoration-underline":""},[t._v(" "+t._s(e.name))])]),t._v(" "),i("v-col",{staticClass:"shrink d-flex"},[i("div",{staticClass:"black--text mt-1 mr-1"},[t._v(t._s(e.fileSize))]),t._v(" "),i("div",["Submitting"==t.StatusDetails.status||t.isResubmit?i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,l=e.attrs;return[i("v-btn",t._g(t._b({attrs:{rounded:"",small:"",icon:"",text:""},on:{click:function(e){return t.DeleteUpload(s)}}},"v-btn",l,!1),a),[i("v-icon",[t._v("mdi-close")])],1)]}}],null,!0)},[t._v(" "),i("span",[t._v("Delete")])]):t._e()],1)])],1)],1)]}}],null,!0)})],1)})),1)],1):t._e(),t._v(" "),i("v-col",{staticClass:"ma-0 pa-0 mb-4 ",attrs:{cols:"12"}},[t.isResubmit||"Submitting"==t.StatusDetails.status||null==t.StatusDetails.status?i("v-menu",{attrs:{"max-width":"250",transition:"scale-transition","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"pl-12 pr-12 pb-3 pt-3",staticStyle:{width:"100%"},attrs:{color:"primary",dark:"",outlined:""}},"v-btn",a,!1),s),[t._v("\n                                  "+t._s(a.expanded)+"\n                                    Attach "),i("v-icon",{attrs:{right:""}},[t._v("mdi-plus")])],1)]}}],null,!1,1406844773)},[t._v(" "),i("v-list",[i("v-list-item",{attrs:{link:""},on:{click:function(e){t.file[t.fileIndex-1]||t.isResubmit?t.UploadMoreFile():t.UploadFile()}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-cloud-upload-outline")]),t._v(" Upload File\n                                      \n                                  ")],1),t._v(" "),i("v-list-item",{attrs:{link:""},on:{click:function(e){t.AttachLink=!t.AttachLink}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-link-variant")]),t._v("Attach Link\n                                  ")],1)],1)],1):t._e()],1),t._v(" "),i("v-col",{staticClass:"ma-0 pa-0 mb-1 ",attrs:{cols:"12"}},[i("v-btn",{staticClass:"pl-12 pr-12 pb-3 pt-3",staticStyle:{width:"100%"},attrs:{flat:"",color:"Submitted"!=t.StatusDetails.status||t.isResubmit?"primary":"success"},on:{click:function(e){("Submitted"!=t.StatusDetails.status||t.isResubmit)&&t.SubmitClasswork()}}},["Submitted"!=t.StatusDetails.status||t.isResubmit?t._e():i("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v("\n                                "+t._s("Submitted"!=t.StatusDetails.status||t.isResubmit?"Submit Classwork":"Submitted"))],1)],1)],1)],1)],1),t._v(" "),i("v-card",{staticClass:"mt-2 pa-3",attrs:{elevation:"1",outlined:""}},[t._v("\n            Comment\n          ")])],1),t._v(" "),i("v-col",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"mt-2 pl-0 pt-2":"pt-0 pl-5",attrs:{cols:"12",md:"7",lg:"8"}},[i("v-card",{staticClass:"pa-5",attrs:{elevation:"1",outlined:""}},[i("v-row",{staticClass:"mb-0 pb-0"},[i("v-col",{staticClass:"ma-0",attrs:{cols:"12",md:"12"}},[i("v-row",[i("v-col",{staticClass:"pr-7",attrs:{cols:"12"}},[i("div",{staticClass:"d-flex flex-row justify-space-between"},[i("v-btn",{staticClass:"mt-3 ml-5",attrs:{fab:"",dark:"",small:"",color:"primary"}},[i("v-icon",[t._v("\n                                    mdi-book-open-variant\n                                    ")])],1),t._v(" "),i("div",{staticClass:"float-right mt-3",attrs:{fab:""}},[i("div",{staticClass:"text-md-h5"},[i("v-icon",{attrs:{large:"",color:"primary"}},[t._v("mdi-book-clock-outline")])],1),t._v(" "),i("div",{staticClass:"caption ml-2"},[t._v("Due "+t._s(t.format_date(t.classworkDetails.due_date)))])])],1)]),t._v(" "),i("v-col",{staticClass:"pl-7 pr-5",attrs:{cols:"12"}},[i("div",{staticClass:"font-weight-medium text-sm-body-2 text-md-h6 text-xl-h5"},[t._v(t._s(t.classworkDetails.title))]),t._v(" "),i("div",{staticClass:"pt-2 d-flex flex-row "},[i("div",{staticClass:"font-weight-bold"},[t._v(t._s(t.classworkDetails.points)+" Points")])]),t._v(" "),i("v-divider")],1),t._v(" "),i("v-col",{staticClass:"pl-7 pr-5",attrs:{cols:"12"}},[i("div",{staticClass:"text-sm-body-2"},[t._v(" "+t._s(t.classworkDetails.instruction))])]),t._v(" "),i("v-col",{staticClass:" pb-10 pl-4 pr-4",attrs:{cols:"12"}},[i("div",{staticClass:"overline"},[t._v("Attachments")]),t._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[i("v-alert",{class:s?"grey lighten-2":"",staticStyle:{cursor:"pointer"},attrs:{outlined:"",icon:"pdf"==t.Fileextension?"mdi-file-pdf":"docx"==t.Fileextension?"mdi-file-word":"",color:"pdf"==t.Fileextension?"red":"docx"==t.Fileextension?"blue":""}},[i("v-row",[i("v-col",{staticClass:" text-left",staticStyle:{overflow:"hidden"},attrs:{cols:"9"}},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,l=e.attrs;return[i("div",t._g(t._b({class:s?"text-decoration-underline ":"",staticStyle:{"line-height":"1.2",height:"20px",overflow:"hidden"},on:{click:function(e){return t.DownLoadFile(t.classworkDetails.attachment)}}},"div",l,!1),a),[t._v("\n                                                         "+t._s(t.classworkDetails.attachment_name))])]}}],null,!0)},[t._v(" "),i("span",[t._v(t._s(t.classworkDetails.attachment_name))])])],1),t._v(" "),i("v-col",{attrs:{cols:"3"}},[i("div",{staticClass:"black--text"},[t._v(t._s(t.classworkDetails.attachment_size))])])],1)],1)]}}])})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"03e75c02",null).exports},5305:(t,e,i)=>{var s=i(7254);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,i(5346).Z)("3d96a720",s,!0,{})}}]);