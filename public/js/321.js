"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[321],{336:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(1519),a=i.n(s)()((function(t){return t[1]}));a.push([t.id,".doc[data-v-d14880ec]{height:70vh;width:100%}.fixed-bar[data-v-d14880ec]{position:sticky;position:-webkit-sticky;top:0;z-index:2}",""]);const n=a},9153:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(1519),a=i.n(s)()((function(t){return t[1]}));a.push([t.id,"input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}",""]);const n=a},3136:(t,e,i)=>{i.r(e),i.d(e,{default:()=>_});var s=i(7757),a=i.n(s),n=i(8),r=i.n(n);function o(t,e,i,s,a,n,r){try{var o=t[n](r),c=o.value}catch(t){return void i(t)}o.done?e(c):Promise.resolve(c).then(s,a)}function c(t){return function(){var e=this,i=arguments;return new Promise((function(s,a){var n=t.apply(e,i);function r(t){o(n,s,a,r,c,"next",t)}function c(t){o(n,s,a,r,c,"throw",t)}r(void 0)}))}}function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const p={props:["CheckData","classworkDetails"],data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1,Details:null,timeout:null,value:"",score:"",path:null,isSavingScore:!1,isCommenting:!1,comment:null,RubricsPoints:[],SaveRubricsData:[],OpenFileType:null,isOpening:!0,SelectedNav:0}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},(0,i(629).Se)(["get_CurrentUser"])),methods:{CheckFileIcon:function(t){return"jpg"==t||"jpeg"==t||"gif"==t||"svg"==t||"png"==t||"bmp"==t?"mdi-image":"pdf"==t?"mdi-file-pdf":"txt"==t?"mdi-note-text-outline":"docx"==t||"doc"==t?"mdi-file-word":"link"==t?"mdi-file-link":void 0},CheckFileIconColor:function(t){return"jpg"==t||"jpeg"==t||"gif"==t||"svg"==t||"png"==t||"bmp"==t?"info":"pdf"==t?"red":"txt"==t?"primary":"docx"==t||"doc"==t?"blue":"link"==t?"green":"primary"},format_date:function(t){if(t)return r()(String(t)).tz("Asia/Manila").format("MM/d/YYYY, hh:mm A")},DownloadFile:function(t){window.open(t,"_blank")},SaveScore:function(){clearTimeout(this.timeout);var t=this;this.timeout=setTimeout((function(){t.score=t.CheckData.points,t.isSavingScore=!t.isSavingScore,t.UpdateScore()}),1e3)},SaveRubricsScore:function(){var t=this,e=0,i=0,s=0;this.classworkDetails.rubrics.forEach((function(a){e+=a.points,i+=parseInt(t.CheckData.rubrics_score[s].points),t.SaveRubricsData.push({id:a.id,points:t.RubricsPoints[s]}),s++}));var a=i/e*this.classworkDetails.points;this.CheckData.points=Math.round(a),this.score=Math.round(this.CheckData.points),this.isSavingScore=!this.isSavingScore,this.UpdateScore()},UpdateScore:function(){var t=this;return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.score<=t.classworkDetails.points?axios.put("/api/submission/update-score/"+t.CheckData.id,{score:t.score,data:t.CheckData.rubrics_score}).then((function(e){200==e.status&&(t.toastSuccess("Score Updated"),t.isSavingScore=!t.isSavingScore,t.$emit("UpdateSubmission",t.CheckData.id))})):(t.isSavingScore=!t.isSavingScore,t.toastError("Score is higher than the set points!"));case 1:case"end":return e.stop()}}),e)})))()},alertStudent:function(){var t=this;return c(a().mark((function e(){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={},t.isAlerting=!0,i.user_id=t.CheckData.user_id,i.classwork_name=t.classworkDetails.title,i.classwork_id=t.classworkDetails.id,i.course_id=t.classworkDetails.course_id,i.firstName=t.CheckData.firstName,axios.post("/api/teacher/alert-student",i).then((function(e){1==e.data.success&&(t.toastSuccess(e.data.message),t.isAlerting=!1)}));case 8:case"end":return e.stop()}}),e)})))()},OpenFile:function(t,e){var i=this;if(this.SelectedNav=1,this.isOpening=!0,"png"==t||"jpg"==t||"jpeg"==t||"bmp"==t)this.OpenFileType="media",this.path=e,setTimeout((function(){return i.isOpening=!1}),500);else if("link"==t){this.OpenFileType="link";var s=e;if(s.includes("www.youtube.com")||s.includes("m.youtube.com")){var a="https://www.youtube.com/embed/"+s.split("=")[1].split("&")[0];this.path=a}else if(s.includes("youtu.be")){var n=s.replace("youtu.be/","www.youtube.com/embed/");this.path=n}else if(s.includes("drive.google.com")){var r="https://drive.google.com/file/d/"+s.replace(/.*\/d\//,"").replace(/\/.*/,"")+"/preview";this.path=r}else this.path=e;setTimeout((function(){return i.isOpening=!1}),500)}else this.OpenFileType="document",this.path=e,setTimeout((function(){return i.isOpening=!1}),500)},addComment:function(t){var e=this;return c(a().mark((function i(){var s;return a().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:s={},e.isCommenting=!0,s.classwork_id=t.classwork_id,s.course_id=e.$route.params.id,s.to_user=t.user_id,s.comment=e.comment,axios.post("/api/post/classwork/comment/insert",s).then((function(t){200==t.status&&(e.CheckData.comments.push({content:t.data.comment,id:t.data.id,name:t.data.name,profile_pic:t.data.profile_pic}),e.comment=null)})),e.isCommenting=!1;case 8:case"end":return i.stop()}}),i)})))()},checkRubrics:function(){var t=this;0!=this.classworkDetails.rubrics.length&&0==this.CheckData.rubrics_score&&(this.CheckData.rubrics_score=[],this.classworkDetails.rubrics.forEach((function(e){t.CheckData.rubrics_score.push({id:e.id,points:null})})))},ResetSubmission:function(t){var e=this;return c(a().mark((function i(){return a().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:console.log(t),axios.put("/api/teacher/reset-sbj/"+t.id,{files:t.Submitted_Answers}).then((function(){e.$emit("SubmissionReset",t.id)}));case 2:case"end":return i.stop()}}),i)})))()}},created:function(){if(null!=this.CheckData.Submitted_Answers&&""!=this.CheckData.Submitted_Answers){var t=this.CheckData.Submitted_Answers[0].link,e=this.CheckData.Submitted_Answers[0].fileExte;if("png"==e||"jpg"==e||"jpeg"==e||"bmp"==e)this.OpenFileType="media",this.path=t,this.isOpening=!1;else if("link"==e){this.OpenFileType="link";var i=t;if(i.includes("www.youtube.com")){var s="https://www.youtube.com/embed/"+i.split("=")[1].split("&")[0];this.path=s}else if(i.includes("drive.google.com")){var a="https://drive.google.com/file/d/"+i.replace(/.*\/d\//,"").replace(/\/.*/,"")+"/preview";this.path=a}else this.path=t;this.isOpening=!1}else this.OpenFileType="document",this.path=t,this.isOpening=!1}this.checkRubrics(),this.$emit("isMounted")}};var d=i(2446),m=i.n(d),v=i(336),h={insert:"head",singleton:!1};m()(v.Z,h);v.Z.locals;var f=i(9153),b={insert:"head",singleton:!1};m()(f.Z,b);f.Z.locals;const _=(0,i(1900).Z)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-toolbar",{staticClass:"fixed-bar",attrs:{dense:"",shaped:"",floating:"",color:"primary",app:""}},[i("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){return t.$emit("closeDialog")}}},[i("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),i("v-card-text",{staticClass:"ma-0 pa-0 pl-1 pr-1 ",staticStyle:{"margin-bottom":"10rem"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pr-3":"",attrs:{cols:"12",md:"4",lg:"4"}},[i("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[i("v-card",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp||0==t.SelectedNav,expression:"$vuetify.breakpoint.mdAndUp || SelectedNav == 0"}],staticClass:"pa-5 pb-8 pt-0",attrs:{elevation:"1",outlined:""}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"ma-0 pa-0"},[i("v-list",{staticClass:"ma-0 pa-0"},[i("v-list-item",{staticClass:"ma-0 pa-0"},[i("v-list-item-avatar",{attrs:{color:"secondary"}},[i("v-img",{attrs:{alt:"Profile",src:null==t.CheckData.profile_pic||""==t.CheckData.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+t.CheckData.firstName+" "+t.CheckData.lastName:t.CheckData.profile_pic}})],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{staticClass:"font-weight-medium"},[t._v(t._s(t.CheckData.firstName+" "+t.CheckData.lastName))]),t._v(" "),i("v-list-item-subtitle",{class:"Submitted"==t.CheckData.status?"success--text":""},[t._v(" "+t._s("Submitted"==t.CheckData.status?"Submitted: "+t.format_date(t.CheckData.updated_at):"Submitting"==t.CheckData.status?"Submitting...":""))])],1),t._v(" "),"Submitted"==t.CheckData.status?i("v-list-item-action",{staticClass:"mt-8"},[i("v-text-field",{attrs:{rounded:"","hide-details":"",loading:t.isSavingScore,dense:"",outlined:"",label:"Score",type:"number",suffix:"/"+t.classworkDetails.points,max:t.classworkDetails.points,min:"0"},on:{keyup:function(e){return t.SaveScore()}},model:{value:t.CheckData.points,callback:function(e){t.$set(t.CheckData,"points",e)},expression:"CheckData.points"}})],1):t._e()],1)],1)],1),t._v(" "),i("v-col",{staticClass:"ma-0 pa-0 pb-4",attrs:{cols:"12"}},[null!=t.CheckData.status&&""!=t.CheckData.status&&"Submitting"!=t.CheckData.status?i("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:function(e){return t.ResetSubmission(t.CheckData)}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-restart")]),t._v(" Reset Submission")],1):t._e()],1),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("h2",[t._v(t._s(t.classworkDetails.title))])]),t._v(" "),null!=t.CheckData.Submitted_Answers&&""!=t.CheckData.Submitted_Answers?i("v-col",{attrs:{cols:"12"}},[i("v-list",{attrs:{nav:"",outlined:""}},t._l(t.CheckData.Submitted_Answers,(function(e,s){return i("v-list-item",{key:s,staticClass:"rounded",attrs:{link:""}},[i("v-list-item-icon",{staticClass:"pr-0 mr-0 mr-1"},[i("v-icon",{attrs:{large:"",color:t.CheckFileIconColor(e.fileExte)}},[t._v("\n                                                                              "+t._s(t.CheckFileIcon(e.fileExte))+"\n                                                                          ")])],1),t._v(" "),i("v-list-item-content",{on:{click:function(i){return t.OpenFile(e.fileExte,e.link)}}},[i("v-list-item-title",[t._v("\n                                                                          "+t._s(e.name)+"\n                                                                      ")])],1),t._v(" "),i("v-list-item-action",[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,n=s.attrs;return[i("v-btn",t._g(t._b({attrs:{rounded:"",small:"",icon:"",text:""},on:{click:function(i){return t.DownloadFile(e.link)}}},"v-btn",n,!1),a),[i("v-icon",{attrs:{color:"blue"}},[t._v("mdi-download")])],1)]}}],null,!0)},[t._v(" "),i("span",[t._v("Download")])])],1)],1)})),1)],1):t._e()],1)],1)],1),t._v(" "),i("div",{staticClass:"pt-5 pb-1"},[i("v-divider")],1),t._v(" "),0!=t.classworkDetails.rubrics.length&&"Submitted"==t.CheckData.status?i("v-list",t._l(t.classworkDetails.rubrics,(function(e,s){return i("v-list-item",{key:s,staticClass:"mb-0 pb-0"},[i("v-list-item-avatar",{attrs:{tile:""}},[i("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.points)+"%")])]),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{staticClass:"font-weight-medium"},[t._v("\n                                      "+t._s(e.criteria_name)+"\n                                  ")]),t._v(" "),i("div",[i("p",[t._v(t._s(e.description))])])],1),t._v(" "),i("v-list-item-action",{staticStyle:{width:"30%"}},[i("v-text-field",{staticClass:"ma-0 pa-0",attrs:{rounded:"","hide-details":"",type:"number",suffix:"/"+e.points,dense:"",outlined:"",label:e.criteria_name},model:{value:t.CheckData.rubrics_score[s].points,callback:function(e){t.$set(t.CheckData.rubrics_score[s],"points",e)},expression:"CheckData.rubrics_score[index].points"}})],1)],1)})),1):t._e(),t._v(" "),0!=t.classworkDetails.rubrics.length&&"Submitted"==t.CheckData.status?i("div",{staticClass:"text-right"},[i("v-btn",{staticClass:"primary",attrs:{small:"",dark:""},on:{click:function(e){return t.SaveRubricsScore()}}},[t._v("\n                              Save\n                          ")])],1):t._e()],1),t._v(" "),i("v-card",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp||2==t.SelectedNav,expression:"$vuetify.breakpoint.mdAndUp || SelectedNav == 2"}],staticClass:"mt-2 scrollComment",attrs:{elevation:"1",outlined:""}},[i("div",{staticClass:"pt-3 pl-4 pr-4 pb-2"},[i("v-icon",{attrs:{left:""}},[t._v("mdi-comment")]),t._v("Private Comments\n                      ")],1),t._v(" "),i("v-divider"),t._v(" "),i("v-list",{staticClass:"mb-0 pb-0",staticStyle:{"overflow-y":"scroll","scrollbar-width":"thin"},attrs:{"max-height":"350"}},t._l(t.CheckData.comments,(function(e,s){return i("v-list-item",{key:s,staticClass:"mb-0 pb-0"},[i("v-list-item-avatar",[i("v-img",{attrs:{src:null==e.profile_pic||""==e.profile_pic?"https://ui-avatars.com/api/?background=0D8ABC&color=fff&name="+e.name:e.profile_pic}})],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v("\n                                  "+t._s(e.name)+"\n                              ")]),t._v(" "),i("div",[i("p",[t._v(t._s(e.content))])])],1),t._v(" "),i("v-list-item-action",[i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{small:"",color:"grey lighten-1"}},[t._v("mdi-dots-vertical")])],1)],1)],1)})),1),t._v(" "),i("v-divider"),t._v(" "),i("v-list",{staticClass:"mb-0 pb-0 mt-0 pt-0"},[i("v-list-item",{staticClass:"mb-0 pb-0"},[i("v-list-item-avatar",{attrs:{color:"secondary"}},[i("v-img",{attrs:{src:null==t.get_CurrentUser.profile_pic||""==t.get_CurrentUser.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+t.get_CurrentUser.firstName+" "+t.get_CurrentUser.lastName:t.get_CurrentUser.profile_pic}})],1),t._v(" "),i("v-list-item-content",{staticClass:"ma-0 pa-0"},[i("v-textarea",{staticClass:"pa-0 mt-7",attrs:{loading:t.isCommenting,"prepend-avatar":"mdi-emoticon-dead",filled:"",rounded:"",dense:"","auto-grow":"",rows:"1","clear-icon":"mdi-close-circle",clearable:"",placeholder:"Comment",type:"text"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),t._v(" "),i("v-list-item-action",[i("v-btn",{attrs:{loading:t.isCommenting,icon:""},on:{click:function(e){return t.addComment(t.CheckData)}}},[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-send")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),i("v-col",{staticClass:"pt-1",attrs:{cols:"12",md:"8",lg:"8"}},[null!=t.CheckData.Submitted_Answers&&""!=t.CheckData.Submitted_Answers||!t.$vuetify.breakpoint.mdAndUp&&1!=t.SelectedNav?t._e():i("v-container",{staticClass:"pt-1",attrs:{fluid:"","ma-0":"","pa-0":""}},[i("v-card",{staticClass:"pa-2",staticStyle:{height:"40rem"}},[i("v-row",{attrs:{justify:"center","align-content":"center"}},[i("v-col",{staticClass:"text-center",staticStyle:{"margin-top":"10rem"},attrs:{cols:"12"}},[i("v-icon",{staticStyle:{"font-size":"8rem"}},[t._v("\n                                  mdi-notebook-remove-outline\n                              ")]),t._v(" "),i("h2",[t._v(" Empty Submission ")]),t._v(" "),i("p",{staticClass:"mb-0 pb-0"},[t._v(" This student did not submit yet!")]),t._v(" "),i("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.alertStudent()}}},[t._v("Alert Student "),i("v-icon",{attrs:{right:""}},[t._v("mdi-account-alert")])],1)],1)],1)],1)],1),t._v(" "),null==t.CheckData.Submitted_Answers||""==t.CheckData.Submitted_Answers||!t.$vuetify.breakpoint.mdAndUp&&1!=t.SelectedNav?t._e():i("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[i("v-card",[i("div",{staticClass:"pa-3",style:"document"==t.OpenFileType?t.$vuetify.breakpoint.mdAndUp?"height:90vh !important;":"height:85vh !important;":t.$vuetify.breakpoint.mdAndUp?"height:90vh !important":"height:85vh !important"},[i("div",{staticClass:"pa-3 text-center"},[t.isOpening?i("v-progress-circular",{staticStyle:{"margin-top":"23rem"},attrs:{size:50,color:"primary",indeterminate:""}}):t._e()],1),t._v(" "),t.isOpening||"document"!=t.OpenFileType?t._e():i("div",[i("iframe",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100% !important",height:"100% !important"},attrs:{title:"google pdf viewer",id:"pdf-iframe",src:"https://docs.google.com/viewer?embedded=true&url="+t.path,sandbox:"allow-same-origin allow-scripts allow-popups allow-forms"}})]),t._v(" "),t.isOpening||"link"!=t.OpenFileType?t._e():i("div",[i("iframe",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100% !important",height:"100% !important"},attrs:{title:"Link",src:t.path,sandbox:"allow-same-origin allow-scripts allow-popups allow-forms"}})]),t._v(" "),t.isOpening||"media"!=t.OpenFileType?t._e():i("div",[i("v-img",{attrs:{src:t.path,"max-width":"100%","max-height":"80vh",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,4034393411)})],1)])])],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"pt-10"},[t.$vuetify.breakpoint.mdAndUp?t._e():i("v-bottom-navigation",{attrs:{fixed:"",grow:"",value:t.SelectedNav,color:"primary"}},[i("v-btn",{on:{click:function(e){t.SelectedNav=0}}},[i("span",[t._v("Submitted Files")]),t._v(" "),i("v-icon",[t._v("mdi-file")])],1),t._v(" "),i("v-btn",{on:{click:function(e){t.SelectedNav=1}}},[i("span",[t._v("Viewer")]),t._v(" "),i("v-icon",[t._v("mdi-file-eye")])],1),t._v(" "),i("v-btn",{on:{click:function(e){t.SelectedNav=2}}},[i("span",[t._v("Comments")]),t._v(" "),i("v-icon",[t._v("mdi-comment")])],1)],1)],1)],1)}),[],!1,null,"d14880ec",null).exports}}]);