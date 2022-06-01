"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8421],{63433:(t,i,s)=>{s.d(i,{Z:()=>n});var e=s(1519),a=s.n(e)()((function(t){return t[1]}));a.push([t.id,"span img{max-height:50rem!important;max-width:100%!important}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}.commentContent img{max-height:20rem!important;max-height:10rem!important;max-width:100%!important}.CommentEditor>iframe{height:20rem!important;width:100%!important}.CommentEditor>.ql-editor img{max-height:25rem!important}.CommentEditor>.ql-container{max-height:70rem}div.ql-tooltip{left:0!important;top:-8px!important}div>.ql-tooltip-arrow{display:none!important}",""]);const n=a},68421:(t,i,s)=>{s.r(i),s.d(i,{default:()=>_});var e=s(87757),a=s.n(e),n=s(80008),o=s.n(n);function r(t,i,s,e,a,n,o){try{var r=t[n](o),l=r.value}catch(t){return void s(t)}r.done?i(l):Promise.resolve(l).then(e,a)}function l(t){return function(){var i=this,s=arguments;return new Promise((function(e,a){var n=t.apply(i,s);function o(t){r(n,e,a,o,l,"next",t)}function l(t){r(n,e,a,o,l,"throw",t)}o(void 0)}))}}function c(t,i){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),s.push.apply(s,e)}return s}function u(t,i,s){return i in t?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s,t}const d={props:["classworkDetails","totalPoints","totalQuestion"],components:{viewSubmission:function(){return s.e(5874).then(s.bind(s,35874))}},data:function(){return{isUpdatingComment:!1,isUpdatingComment_id:null,isUpdatingComment_old_data:null,status:null,updateDetails:{},isCommenting:!1,comment:"",isLoaded:!0,selected:0,isViewingSubmission:!1,DateToday:null,ScrollPosistion:0,isOpenQuiz:!1,confirmStartDialog:!1,options:{modules:{toolbar:[["bold","italic","underline","strike"],[{list:"bullet"}],["image"]]}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?c(Object(s),!0).forEach((function(i){u(t,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))}))}return t}({},(0,s(20629).Se)(["get_CurrentUser","statusDetails"])),methods:{checkifSubmitted:function(){"Submitted"==this.classworkDetails.status&&(this.selected=1,this.isViewingSubmission=!0)},CheckFileIcon:function(t){return"jpg"==t||"jpeg"==t||"gif"==t||"svg"==t||"png"==t||"bmp"==t?"mdi-image":"pdf"==t?"mdi-file-pdf":"txt"==t?"mdi-note-text-outline":"docx"==t||"doc"==t?"mdi-file-word":"link"==t?"mdi-file-link":void 0},CheckFileIconColor:function(t){return"jpg"==t||"jpeg"==t||"gif"==t||"svg"==t||"png"==t||"bmp"==t?"info":"pdf"==t?"red":"txt"==t?"primary":"docx"==t||"doc"==t?"blue":"link"==t?"green":"primary"},format_date:function(t){if(t)return o()(String(t)).tz("Asia/Manila").format("MMMM, D YYYY, h:mm a")},comment_date:function(t){if(t)return o()(String(t)).tz("Asia/Manila").format("MMMM, DD YYYY, h:mm a")},format_date1:function(t){if(t)return o()(String(t)).tz("Asia/Manila").format("YYYY-MM-DD HH:mm:ss")},saveActivityLog:function(t){var i=this;return l(a().mark((function s(){return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,axios.post("/api/objective-logs/logs",{classwork_id:i.$route.query.clwk,description:t}).then((function(t){console.log("saved activity")}));case 2:case"end":return s.stop()}}),s)})))()},start:function(){this.classworkDetails.status="Taking",this.isOpenQuiz=!0,0==this.totalQuestion||null!=this.status&&""!=this.status?this.isOpenQuiz=!1:(this.confirmStartDialog=!1,this.saveActivityLog("Student started taking the exam").then((function(){})),this.$router.push({name:"quizstart",params:{id:this.$route.params.id},query:{clwk:this.classworkDetails.id}}))},continueQuiz:function(t){this.isOpenQuiz=!0,this.$router.push({name:"quizstart",params:{id:this.$route.params.id},query:{clwk:t}})},checkStatus:function(){var t=this;axios.get("/api/student/check-status/"+this.classworkDetails.id).then((function(i){t.status=i.data.status,t.statusDetails=i.data,t.isLoaded=!1}))},UpdateStatus:function(t){var i=this;return l(a().mark((function s(){return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:i.updateDetails.id=t,i.updateDetails.class_classwork_id=i.classworkDetails.class_classwork_id,i.updateDetails.type=i.classworkDetails.type,axios.post("/api/student/update-status",i.updateDetails).then((function(t){1==t.data.success?i.$router.push({name:"quizstart",params:{id:i.$route.params.id},query:{clwk:i.classworkDetails.id}}):i.toastError("Something went wrong while loading this classwork!")}));case 4:case"end":return s.stop()}}),s)})))()},addComment:function(t){var i=this;return l(a().mark((function s(){var e;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:e={},i.isCommenting=!0,e.classwork_id=t.id,e.to_user=t.user_id,e.type="Private",e.course_id=i.$route.params.id,e.comment=i.comment,axios.post("/api/post/classwork/comment/insert",e).then((function(t){200==t.status&&(i.classworkDetails.comments.push({content:t.data.comment,id:t.data.id,name:t.data.name,profile_pic:t.data.profile_pic,u_id:i.get_CurrentUser.user_id,comment_date:new Date}),i.comment="")})),i.isCommenting=!1;case 9:case"end":return s.stop()}}),s)})))()},DeleteComment:function(t,i){var s=this;return l(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.delete("/api/post/classwork/comment/delete/"+t).then((function(t){1==t.data.success&&s.classworkDetails.comments.splice(i,1)}));case 1:case"end":return e.stop()}}),e)})))()},UpdateComment:function(t,i){var s=this;return l(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.put("/api/post/comment/update/"+i,{comment:t}).then((function(t){s.isUpdatingComment=!1,s.isUpdatingComment_id=null,s.isUpdatingComment_old_data=null}));case 1:case"end":return e.stop()}}),e)})))()},DownLoadFile:function(t){window.open(t,"_blank")},CheckScore:function(){var t=this;null!=this.classworkDetails.Sub_id&&"Submitted"==this.classworkDetails.status&&axios.get("/api/question/StudentScore/"+this.classworkDetails.Sub_id).then((function(i){t.classworkDetails.score=i.data}))}},created:function(){return l(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){this.isLoaded=!1;var t=new Date;this.DateToday=o()(t).tz("Asia/Manila").format("YYYY-MM-DD HH:mm:ss"),this.CheckScore()}};var m=s(72446),v=s.n(m),p=s(63433),k={insert:"head",singleton:!1};v()(p.Z,k);p.Z.locals;const _=(0,s(51900).Z)(d,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{attrs:{transition:"slide-y-reverse-transition"}},[t.$vuetify.breakpoint.mdAndUp?t._e():s("v-app-bar",{attrs:{flat:"",app:"",color:"primary"}},[t.$vuetify.breakpoint.mdAndUp?t._e():s("v-btn",{attrs:{dark:"",rounded:"",icon:"",text:""},on:{click:function(i){return t.$router.push({name:"classwork"})}}},[s("v-icon",[t._v("mdi-arrow-left-thick")])],1),t._v(" "),s("v-divider",{attrs:{vertical:""}}),t._v(" "),s("v-spacer"),t._v(" "),"Submitted"==t.classworkDetails.status?s("div",{staticClass:"white--text Subtitle-1"},[s("span",{staticClass:"font-weight-bold"},[t._v("Score: ")]),t._v(" "),s("span",{},[t._v(t._s(t.classworkDetails.score.toFixed()+" / "+t.classworkDetails.points))])]):t._e()],1)],1),t._v(" "),s("vue-element-loading",{attrs:{active:t.isOpenQuiz,duration:"0.7",text:"Loading Quiz",spinner:"line-scale",color:"#EF6C00",size:"50","is-full-screen":""}}),t._v(" "),s("v-row",{class:t.$vuetify.breakpoint.mdAndUp?"pa-3":"pa-0",attrs:{justify:"center","align-content":"center","no-gutters":""}},[t.$vuetify.breakpoint.mdAndUp||2==t.selected?s("v-col",{staticClass:"mb-0 pb-0 ",attrs:{cols:"12",md:"4",lg:"4",xl:"4"}},[s("v-card",{class:t.$vuetify.breakpoint.mdAndUp?"pa-3":"pa-1",attrs:{elevation:t.$vuetify.breakpoint.mdAndUp?1:0,outlined:t.$vuetify.breakpoint.mdAndUp}},[s("v-row",[t.$vuetify.breakpoint.mdAndUp?s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on,a=i.attrs;return[s("v-btn",t._g(t._b({attrs:{rounded:"",icon:"",text:""},on:{click:function(i){return t.$router.push({name:"classwork"})}}},"v-btn",a,!1),e),[s("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-left-thick")])],1)]}}],null,!1,1749575868)},[t._v(" "),s("span",[t._v("Back to classworks")])])],1):t._e(),t._v(" "),s("v-col",{staticClass:"ma-0 pa-0"},[s("div",{staticClass:"pt-2 pl-4 pr-4 pb-2"},[s("v-icon",{attrs:{left:""}},[t._v("mdi-comment")]),t._v("Private Comments\n                            ")],1),t._v(" "),s("v-divider"),t._v(" "),s("v-list",{staticClass:"mb-0 pb-0",staticStyle:{"overflow-y":"scroll","scrollbar-width":"thin"},attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"550":"500"}},t._l(t.classworkDetails.comments,(function(i,e){return s("v-list-item",{key:e,staticClass:"mb-0 pb-0 mt-0 pt-0"},[s("v-list-item-avatar",[s("v-img",{attrs:{src:null==i.profile_pic||""==i.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+i.name:i.profile_pic}})],1),t._v(" "),s("v-list-item-content",[t.isUpdatingComment&&t.isUpdatingComment_id==i.id?s("div",[s("v-list-item-title",{staticClass:"mb-2",domProps:{innerHTML:t._s(i.name)}}),t._v(" "),s("editor",{staticClass:"CommentEditor",attrs:{options:t.options,placeholder:"Comment",theme:"bubble"},model:{value:i.content,callback:function(s){t.$set(i,"content",s)},expression:"item.content"}}),t._v(" "),s("div",{staticClass:"d-flex justify-end mt-2"},[s("v-btn",{staticClass:"mr-2",attrs:{small:"",dark:"",color:"success"},on:{click:function(s){return t.UpdateComment(i.content,i.id)}}},[t._v("update")]),t._v(" "),s("v-btn",{attrs:{small:"",dark:"",color:"red"},on:{click:function(s){t.isUpdatingComment=!1,t.isUpdatingComment_id=null,i.content=t.isUpdatingComment_old_data}}},[t._v("Cancel")])],1)],1):s("v-alert",{staticClass:"rounded-xl mt-0 mb-0",attrs:{color:"#F5F5F5"}},[s("v-list-item-title",[s("div",{staticClass:"d-flex justify-space-between"},[s("div",{class:i.u_id==t.get_CurrentUser.id?"mb-0 pb-0 pt-2":"pt-2 pb-2",staticStyle:{"max-width":"90%"}},[t._v(t._s(i.name))]),t._v(" "),i.u_id==t.get_CurrentUser.id?s("div",{staticClass:"mb-0 pb-0 mt-0"},[s("v-menu",{attrs:{"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on,a=i.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),e),[s("v-icon",{attrs:{small:"",color:"grey lighten-1"}},[t._v("\n                                                                    mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),s("v-list",{attrs:{dense:"",nav:""}},[s("v-list-item",{on:{click:function(s){t.isUpdatingComment=!0,t.isUpdatingComment_id=i.id,t.isUpdatingComment_old_data=i.content}}},[s("v-list-item-title",[t._v("Edit")])],1),t._v(" "),s("v-list-item",{on:{click:function(s){return t.DeleteComment(i.id,e)}}},[s("v-list-item-title",[t._v("Remove")])],1)],1)],1)],1):t._e()])]),t._v(" "),s("v-list-item-subtitle",{staticClass:"mb-3"},[t._v(t._s(t.comment_date(i.comment_date))+"\n                                        ")]),t._v(" "),s("div",[s("span",{staticClass:"commentContent",domProps:{innerHTML:t._s(i.content)}})])],1)],1)],1)})),1),t._v(" "),s("v-divider"),t._v(" "),s("v-list",{staticClass:"mb-0 pb-0 mt-0 pt-0"},[s("v-list-item",{staticClass:"mb-0 pb-0"},[s("v-list-item-avatar",[s("v-img",{attrs:{src:null==t.get_CurrentUser.profile_pic||""==t.get_CurrentUser.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+t.get_CurrentUser.firstName+" "+t.get_CurrentUser.lastName:t.get_CurrentUser.profile_pic}})],1),t._v(" "),s("v-list-item-content",{staticClass:"ma-0 pa-0"},[s("editor",{staticClass:"CommentEditor",attrs:{options:t.options,placeholder:"Comment",theme:"bubble"},model:{value:t.comment,callback:function(i){t.comment=i},expression:"comment"}})],1),t._v(" "),s("v-list-item-action",[s("v-btn",{attrs:{loading:t.isCommenting,icon:""},on:{click:function(i){return t.addComment(t.classworkDetails)}}},[s("v-icon",{attrs:{color:"primary"}},[t._v("mdi-send")])],1)],1)],1)],1)],1)],1)],1)],1):t._e(),t._v(" "),t.isViewingSubmission?s("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pt-0 pl-5":"mt-1 pl-0 pt-1",attrs:{cols:"12",md:"10",lg:"8",xl:"8"}},[s("vue-element-loading",{attrs:{active:t.isLoaded,spinner:"bar-fade-scale"}}),t._v(" "),s("v-card",{class:t.$vuetify.breakpoint.mdAndUp?"pa-3":"pa-1",attrs:{elevation:t.$vuetify.breakpoint.mdAndUp?"1":"0",outlined:t.$vuetify.breakpoint.mdAndUp}},["Submitted"==t.classworkDetails.status&&1==t.classworkDetails.reviewAnswer?s("viewSubmission",{attrs:{classworkDetails:t.classworkDetails,details:t.statusDetails},on:{closeViewing:function(i){t.isViewingSubmission=!t.isViewingSubmission}}}):s("div",[s("v-row",{attrs:{justify:"center"}},[t.$vuetify.breakpoint.mdAndUp?s("v-col",{attrs:{cols:"12"}},[s("v-btn",{attrs:{text:"",rounded:""},on:{click:function(i){t.isViewingSubmission=!1}}},[t._v("Close "),s("v-icon",{attrs:{right:""}},[t._v("mdi-close")])],1)],1):t._e(),t._v(" "),s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("div",[t._v("\n                                Score:\n                                "),s("span",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.classworkDetails.score.toFixed()+" / "+t.classworkDetails.points))]),s("br"),t._v("\n                                Viewing submission is not enabled\n                            ")])])],1)],1)],1)],1):s("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pt-0 pl-5":"mt-1 pl-0 pt-1",attrs:{cols:"12",md:"8",lg:"8",xl:"8"}},[t.$vuetify.breakpoint.mdAndUp||0==t.selected?s("div",[s("vue-element-loading",{attrs:{active:t.isLoaded,spinner:"bar-fade-scale"}}),t._v(" "),s("v-card",{class:t.$vuetify.breakpoint.mdAndUp?"pa-3":"pa-1",attrs:{elevation:t.$vuetify.breakpoint.mdAndUp?1:0,outlined:t.$vuetify.breakpoint.mdAndUp}},[s("v-row",[t.$vuetify.breakpoint.mdAndUp?s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"text-right pt-1"},["Submitted"==t.classworkDetails.status?s("v-chip",{attrs:{color:"success"}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" Score:\n                                    "+t._s(t.classworkDetails.score.toFixed()+"/"+t.classworkDetails.points)+"\n                                ")],1):t._e()],1),t._v(" "),s("v-row",{staticStyle:{height:"4vh"}}),t._v(" "),"Submitted"==t.classworkDetails.status?s("v-divider"):t._e()],1):t._e(),t._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-container",{staticClass:"d-flex flex-row justify-space-between",attrs:{"ma-0":"","pa-0":""}},[t.$vuetify.breakpoint.mdAndUp?s("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"primary"}},[s("v-icon",{attrs:{large:""}},[t._v("\n                                        mdi-book-open-variant\n                                    ")])],1):t._e(),t._v(" "),s("div",{staticClass:"float-right mt-3",attrs:{fab:""}},[s("div",{staticClass:"text-md-h5"},[s("v-icon",{attrs:{large:"",color:"primary"}},[t._v("mdi-book-clock-outline")]),t._v("\n                                        "+t._s(t.classworkDetails.duration)+"\n                                        "+t._s(t.classworkDetails.duration>1?"mins":"min")+"\n                                    ")],1),t._v(" "),"Submitted"!=t.classworkDetails.status?s("div",{staticClass:"caption ml-2"},[t._v("Due\n                                        "+t._s(t.classworkDetails.availability?t.format_date(t.classworkDetails.to_date):"always Available")+"\n                                    ")]):s("div",{staticClass:"caption ml-2 pr-1"},[s("span",{staticClass:"font-weight-medium"},[t._v("Submitted:")]),t._v(" \n                                        "+t._s(null!=t.classworkDetails.Submitted_at?t.format_date(t.classworkDetails.Submitted_at):t.format_date(t.classworkDetails.updated_at))+"\n                                    ")])])],1)],1),t._v(" "),s("v-col",{staticClass:"pl-7 pr-5",attrs:{cols:"12"}},[s("div",{staticClass:"text-sm-body-2 text-md-h5 text-lg-h6 text-xl-h6"},[t._v(t._s(t.classworkDetails.title)+"\n                            ")]),t._v(" "),s("div",{staticClass:"pt-2 d-flex flex-row "},[s("div",{staticClass:"captions"},[s("v-icon",[t._v("mdi-circle-medium")]),t._v(t._s(t.totalQuestion)+" Question\n                                ")],1),t._v(" "),s("div",{staticClass:"captions"},[s("v-icon",[t._v("mdi-circle-medium")]),t._v(t._s(t.classworkDetails.points)+" Points\n                                ")],1)]),t._v(" "),s("v-divider")],1),t._v(" "),s("v-col",{staticClass:"pl-10 pr-5 pb-5",attrs:{cols:"12"}},[s("span",{staticClass:"text-sm-body-2 ",staticStyle:{"max-width":"98%"},domProps:{innerHTML:t._s(t.classworkDetails.instruction)}})]),t._v(" "),null!=t.classworkDetails.attachment?s("v-col",{staticClass:" pb-5 pl-5 pr-5",attrs:{cols:"12"}},[null!=t.classworkDetails.attachment?s("div",{staticClass:"overline"},[t._v("Attachments")]):t._e(),t._v(" "),s("v-list",{staticClass:"ma-0 pa-0"},t._l(t.classworkDetails.attachment,(function(i,e){return s("v-list-item",{key:e,staticClass:"ma-0 pa-0"},[s("v-list-item-avatar",[s("v-icon",{attrs:{large:"",color:t.CheckFileIconColor(i.extension)}},[t._v("\n                                            "+t._s(t.CheckFileIcon(i.extension))+"\n                                        ")])],1),t._v(" "),s("v-list-item-content",[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[s("v-list-item-title",{class:a?"blue--text":"",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.DownLoadFile(i.attachment)}}},[t._v("\n                                                "+t._s(i.name))])]}}],null,!0)})],1)],1)})),1)],1):t._e(),t._v(" "),0==t.classworkDetails.availability?s("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pl-10 pr-5 pb-5 text-right":"pb-5",attrs:{cols:"12"}},[null!=t.classworkDetails.status&&""!=t.classworkDetails.status||"Submitted"==t.classworkDetails.status||null!=t.classworkDetails.publish?t._e():s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",color:"primary",loading:t.isOpenQuiz,dark:0!=t.totalQuestion,disabled:0==t.totalQuestion},on:{click:function(i){(null==t.classworkDetails.status||""==t.classworkDetails.status)&&"Submitted"!=t.classworkDetails.status&&(t.confirmStartDialog=!t.confirmStartDialog)}}},[t._v("\n                                Take Quiz"),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1),t._v(" "),"Taking"==t.classworkDetails.status&&null==t.classworkDetails.publish?s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",color:"primary",loading:t.isOpenQuiz,dark:0!=t.totalQuestion,disabled:0==t.totalQuestion},on:{click:function(i){return t.continueQuiz(t.classworkDetails.id)}}},[t._v("Continue\n                                "),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e(),t._v(" "),"Submitted"==t.classworkDetails.status&&1==t.classworkDetails.reviewAnswer&&t.$vuetify.breakpoint.mdAndUp?s("div",[null==t.classworkDetails.showAnswerType?s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",color:"primary"},on:{click:function(i){t.isViewingSubmission=!t.isViewingSubmission}}},[t._v("View\n                                    Submission"),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e(),t._v(" "),0==t.classworkDetails.showAnswerType?s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",color:"primary"},on:{click:function(i){t.isViewingSubmission=!t.isViewingSubmission}}},[t._v("View\n                                    Submission"),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e(),t._v(" "),1==t.classworkDetails.showAnswerType&&t.format_date1(t.classworkDetails.currentDate)>=t.format_date1(t.classworkDetails.showDateFrom)&&t.format_date1(t.classworkDetails.currentDate)<=t.format_date1(t.classworkDetails.showDateTo)?s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",color:"primary"},on:{click:function(i){t.isViewingSubmission=!t.isViewingSubmission}}},[t._v("\n                                    View Submission"),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e()],1):t._e()],1):1==t.classworkDetails.availability?s("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pl-10 pr-5 pb-5 text-right":"pb-5",attrs:{cols:"12"}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[t.format_date1(t.classworkDetails.currentDate)>=t.format_date1(t.classworkDetails.from_date)&&t.format_date1(t.classworkDetails.currentDate)<=t.format_date1(t.classworkDetails.to_date)||1==t.classworkDetails.allow_resubmit?s("div",[null!=t.classworkDetails.status&&""!=t.classworkDetails.status||"Submitted"==t.classworkDetails.status||null!=t.classworkDetails.publish?t._e():s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",loading:t.isOpenQuiz,color:"primary",dark:0!=t.totalQuestion,disabled:0==t.totalQuestion},on:{click:function(i){"Submitted"!=t.classworkDetails.status&&(t.confirmStartDialog=!t.confirmStartDialog)}}},[t._v("\n                                            Take Quiz"),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1),t._v(" "),"Taking"==t.classworkDetails.status&&null==t.classworkDetails.publish?s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",loading:t.isOpenQuiz,color:"primary",dark:""},on:{click:function(i){return t.continueQuiz(t.classworkDetails.id)}}},[t._v("\n                                            Continue"),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e()],1):s("div",[s("div",[null!=t.classworkDetails.status&&""!=t.classworkDetails.status||null!=t.classworkDetails.publish?t._e():s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",loading:t.isOpenQuiz,color:"primary",dark:0!=t.totalQuestion,disabled:0==t.totalQuestion},on:{click:function(i){"Submitted"!=t.classworkDetails.status&&(t.confirmStartDialog=!t.confirmStartDialog)}}},[t._v("\n                                                Take Quiz"),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1),t._v(" "),"Taking"==t.classworkDetails.status&&null==t.classworkDetails.publish?s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",loading:t.isOpenQuiz,color:"primary",dark:""},on:{click:function(i){return t.continueQuiz(t.classworkDetails.id)}}},[t._v("\n                                                Continue"),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e()],1)]),t._v(" "),"Submitted"==t.classworkDetails.status&&1==t.classworkDetails.reviewAnswer&&t.$vuetify.breakpoint.mdAndUp?s("div",[0==t.classworkDetails.showAnswerType?s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",color:"primary"},on:{click:function(i){t.isViewingSubmission=!t.isViewingSubmission}}},[t._v("View\n                                            Submission"),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e(),t._v(" "),1==t.classworkDetails.showAnswerType&&t.format_date1(t.classworkDetails.currentDate)>=t.format_date1(t.classworkDetails.showDateFrom)&&t.format_date1(t.classworkDetails.currentDate)<=t.format_date1(t.classworkDetails.showDateTo)?s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,rounded:"",color:"primary"},on:{click:function(i){t.isViewingSubmission=!t.isViewingSubmission}}},[t._v("\n                                            View Submission"),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e()],1):t._e()])],1)],1):t._e()],1),t._v(" "),s("v-row",{staticStyle:{height:"1vh"}})],1)],1):t._e()])],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?t._e():s("v-bottom-navigation",{attrs:{height:"53",flat:"",app:"",grow:"",value:t.selected,color:"primary"}},[s("v-btn",{staticClass:"mb-12",on:{click:function(i){t.selected=0,t.isViewingSubmission=!1}}},[s("span",[t._v("Details")]),t._v(" "),s("v-icon",[t._v("mdi-text-box-outline")])],1),t._v(" "),0==t.classworkDetails.showAnswerType?s("v-btn",{attrs:{disabled:"Submitted"!=t.classworkDetails.status},on:{click:function(i){return t.checkifSubmitted()}}},[s("span",[t._v("Submission")]),t._v(" "),s("v-icon",[t._v("mdi-file-check")])],1):t._e(),t._v(" "),1==t.classworkDetails.showAnswerType&&t.format_date1(t.classworkDetails.currentDate)>=t.format_date1(t.classworkDetails.showDateFrom)&&t.format_date1(t.classworkDetails.currentDate)<=t.format_date1(t.classworkDetails.showDateTo)?s("v-btn",{attrs:{disabled:"Submitted"!=t.classworkDetails.status},on:{click:function(i){return t.checkifSubmitted()}}},[s("span",[t._v("Submission")]),t._v(" "),s("v-icon",[t._v("mdi-file-check")])],1):t._e(),t._v(" "),s("v-btn",{on:{click:function(i){t.selected=2,t.isViewingSubmission=!1}}},[s("span",[t._v("Comment")]),t._v(" "),s("v-icon",[t._v("mdi-comment")])],1)],1),t._v(" "),s("v-dialog",{attrs:{width:"320"},model:{value:t.confirmStartDialog,callback:function(i){t.confirmStartDialog=i},expression:"confirmStartDialog"}},[s("v-card",[s("v-card-title",{staticClass:"text-h6"},[t._v("\n                Start Quiz?\n            ")]),t._v(" "),s("v-card-text",[t._v("\n                Are you sure to take this quiz?\n            ")]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{text:""},on:{click:function(i){t.confirmStartDialog=!1}}},[t._v("\n                    Cancel\n                ")]),t._v(" "),s("v-btn",{attrs:{color:"primary",text:""},on:{click:function(i){return t.start()}}},[t._v("\n                    Start\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);