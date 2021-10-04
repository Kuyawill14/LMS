"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8584],{3433:(t,s,a)=>{a.d(s,{Z:()=>r});var i=a(1519),e=a.n(i)()((function(t){return t[1]}));e.push([t.id,"span img{max-height:50rem!important;max-width:100%!important}",""]);const r=e},8584:(t,s,a)=>{a.r(s),a.d(s,{default:()=>f});var i=a(7757),e=a.n(i),r=a(8),o=a.n(r);function n(t,s,a,i,e,r,o){try{var n=t[r](o),l=n.value}catch(t){return void a(t)}n.done?s(l):Promise.resolve(l).then(i,e)}function l(t){return function(){var s=this,a=arguments;return new Promise((function(i,e){var r=t.apply(s,a);function o(t){n(r,i,e,o,l,"next",t)}function l(t){n(r,i,e,o,l,"throw",t)}o(void 0)}))}}function c(t,s){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),a.push.apply(a,i)}return a}function u(t,s,a){return s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}const v={props:["classworkDetails","totalPoints","totalQuestion"],components:{viewSubmission:function(){return a.e(2904).then(a.bind(a,2904))}},data:function(){return{status:null,updateDetails:{},isCommenting:!1,comment:null,isLoaded:!0,isViewingSubmission:!1,DateToday:null}},computed:function(t){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?c(Object(a),!0).forEach((function(s){u(t,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))}))}return t}({},(0,a(629).Se)(["get_CurrentUser","statusDetails"])),methods:{format_date:function(t){if(t)return o()(String(t)).tz("Asia/Manila").format("dddd, h:mm a")},format_date1:function(t){if(t)return o()(String(t)).tz("Asia/Manila").format("YYYY-MM-DD HH:mm:ss")},start:function(){0==this.totalQuestion||null!=this.status&&""!=this.status||this.UpdateStatus(this.classworkDetails.id)},checkStatus:function(){var t=this;axios.get("/api/student/check-status/"+this.classworkDetails.id).then((function(s){t.status=s.data.status,t.statusDetails=s.data,t.isLoaded=!1}))},UpdateStatus:function(t){var s=this;return l(e().mark((function a(){return e().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s.updateDetails.id=t,s.updateDetails.class_classwork_id=s.classworkDetails.class_classwork_id,s.updateDetails.type=s.classworkDetails.type,axios.post("/api/student/update-status",s.updateDetails).then((function(t){1==t.data.success?s.$router.push({name:"quizstart",params:{id:s.$route.params.id},query:{clwk:s.classworkDetails.id}}):s.toastError("Something went wrong while loading this classwork!")}));case 4:case"end":return a.stop()}}),a)})))()},addComment:function(t){var s=this;return l(e().mark((function a(){var i;return e().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i={},s.isCommenting=!0,i.classwork_id=t.id,i.to_user=t.user_id,i.type="Private",i.course_id=s.$route.params.id,i.comment=s.comment,axios.post("/api/post/classwork/comment/insert",i).then((function(t){200==t.status&&(s.classworkDetails.comments.push({content:t.data.comment,id:t.data.id,name:t.data.name,profile_pic:t.data.profile_pic}),s.comment=null)})),s.isCommenting=!1;case 9:case"end":return a.stop()}}),a)})))()},DeleteComment:function(t,s){var a=this;return l(e().mark((function i(){return e().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:axios.delete("/api/post/classwork/comment/delete/"+t).then((function(t){1==t.data.success&&a.classworkDetails.comments.splice(s,1)}));case 1:case"end":return i.stop()}}),i)})))()},DownLoadFile:function(t){window.open(t,"_blank")}},created:function(){var t=this;return l(e().mark((function s(){return e().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:t.isLoaded=!1;case 1:case"end":return s.stop()}}),s)})))()},mounted:function(){var t=new Date;this.DateToday=o()(t).tz("Asia/Manila").format("YYYY-MM-DD HH:mm:ss")}};var d=a(2446),m=a.n(d),p=a(3433),_={insert:"head",singleton:!1};m()(p.Z,_);p.Z.locals;const f=(0,a(1900).Z)(v,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pt-3 pt-3 pl-1 pr-1"},[a("v-row",{staticClass:"pa-2",attrs:{justify:"center","no-gutters":""}},[a("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12",md:"5",lg:"4"}},[a("v-card",{staticClass:"pa-3",attrs:{elevation:"1",outlined:""}},[a("v-row",[a("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var i=s.on,e=s.attrs;return[a("v-btn",t._g(t._b({attrs:{rounded:"",icon:"",text:""},on:{click:function(s){return t.$router.push({name:"classwork"})}}},"v-btn",e,!1),i),[a("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-left-thick")])],1)]}}])},[t._v(" "),a("span",[t._v("Back to classworks")])])],1),t._v(" "),a("v-col",{staticClass:"ma-0 pa-0"},[a("div",{staticClass:"pt-2 pl-4 pr-4 pb-2"},[a("v-icon",{attrs:{left:""}},[t._v("mdi-comment")]),t._v("Private Comments\r\n                        ")],1),t._v(" "),a("v-divider"),t._v(" "),a("v-list",{staticClass:"mb-0 pb-0"},t._l(t.classworkDetails.comments,(function(s,i){return a("v-list-item",{key:i,staticClass:"mb-0 pb-0"},[a("v-list-item-avatar",[a("v-img",{attrs:{src:null==s.profile_pic||""==s.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+s.name:s.profile_pic}})],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(s.name)}}),t._v(" "),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(s.content)}})],1),t._v(" "),a("v-list-item-action",[a("v-menu",{attrs:{"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(s){var i=s.on,e=s.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",e,!1),i),[a("v-icon",{attrs:{small:"",color:"grey lighten-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),a("v-list",{attrs:{dense:"",nav:""}},[a("v-list-item",{on:{click:function(a){return t.DeleteComment(s.id,i)}}},[a("v-list-item-title",[t._v("Remove")])],1)],1)],1)],1)],1)})),1),t._v(" "),a("v-divider"),t._v(" "),a("v-list",{staticClass:"mb-0 pb-0 mt-0 pt-0"},[a("v-list-item",{staticClass:"mb-0 pb-0"},[a("v-list-item-avatar",[a("v-img",{attrs:{src:null==t.get_CurrentUser.profile_pic||""==t.get_CurrentUser.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+t.get_CurrentUser.firstName+" "+t.get_CurrentUser.lastName:t.get_CurrentUser.profile_pic}})],1),t._v(" "),a("v-list-item-content",{staticClass:"ma-0 pa-0"},[a("v-textarea",{staticClass:"pa-0 mt-7",attrs:{loading:t.isCommenting,"prepend-avatar":"mdi-emoticon-dead",filled:"",rounded:"",dense:"","auto-grow":"",rows:"1","clear-icon":"mdi-close-circle",clearable:"",placeholder:"Comment",type:"text"},model:{value:t.comment,callback:function(s){t.comment=s},expression:"comment"}})],1),t._v(" "),a("v-list-item-action",[a("v-btn",{attrs:{loading:t.isCommenting,icon:""},on:{click:function(s){return t.addComment(t.classworkDetails)}}},[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-send")])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.isViewingSubmission?a("v-col",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"mt-2 pl-0 pt-2":"pt-0 pl-5",attrs:{cols:"12",md:"7",lg:"8"}},[a("vue-element-loading",{attrs:{active:t.isLoaded,spinner:"bar-fade-scale"}}),t._v(" "),a("v-card",{staticClass:"pa-3",attrs:{elevation:"1",outlined:""}},[a("viewSubmission",{attrs:{classworkDetails:t.classworkDetails,details:t.statusDetails},on:{closeViewing:function(s){t.isViewingSubmission=!t.isViewingSubmission}}})],1)],1):a("v-col",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"mt-2 pl-0 pt-2":"pt-0 pl-5",attrs:{cols:"12",md:"7",lg:"8"}},[a("vue-element-loading",{attrs:{active:t.isLoaded,spinner:"bar-fade-scale"}}),t._v(" "),a("v-card",{staticClass:"pa-3",attrs:{elevation:"1",outlined:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-right pt-1"},["Submitted"==t.statusDetails.status?a("v-chip",{attrs:{color:"success"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" Score: "+t._s(t.statusDetails.score+"/"+t.statusDetails.totalPoints))],1):t._e()],1),t._v(" "),a("v-row",{staticStyle:{height:"4vh"}}),t._v(" "),"Submitted"==t.statusDetails.status?a("v-divider"):t._e()],1),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-container",{staticClass:"d-flex flex-row justify-space-between",attrs:{"ma-0":"","pa-0":""}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"Submitted"==t.statusDetails.status?"success":"primary"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("\r\n                                "+t._s("Submitted"==t.statusDetails.status?"mdi-check":"mdi-book-open-variant")+"\r\n                                ")])],1),t._v(" "),a("div",{staticClass:"float-right mt-3",attrs:{fab:""}},[a("div",{staticClass:"text-md-h5"},[a("v-icon",{attrs:{large:"",color:"primary"}},[t._v("mdi-book-clock-outline")]),t._v(" "+t._s(t.classworkDetails.duration)+" mins")],1),t._v(" "),a("div",{staticClass:"caption ml-2"},[t._v("Due "+t._s(t.classworkDetails.availability?t.format_date(t.classworkDetails.to_date):"always Available"))])])],1)],1),t._v(" "),a("v-col",{staticClass:"pl-7 pr-5",attrs:{cols:"12"}},[a("div",{staticClass:"text-sm-body-2 text-md-h5 text-lg-h6 text-xl-h6"},[t._v(t._s(t.classworkDetails.title))]),t._v(" "),a("div",{staticClass:"pt-2 d-flex flex-row "},[a("div",{staticClass:"captions"},[a("v-icon",[t._v("mdi-circle-medium")]),t._v(t._s(t.totalQuestion)+" Question")],1),t._v(" "),a("div",{staticClass:"captions"},[a("v-icon",[t._v("mdi-circle-medium")]),t._v(t._s(t.classworkDetails.points)+" Points")],1)]),t._v(" "),a("v-divider")],1),t._v(" "),a("v-col",{staticClass:"pl-10 pr-5 pb-5",attrs:{cols:"12"}},[a("span",{staticClass:"text-sm-body-2 ",staticStyle:{"max-width":"98%"},domProps:{innerHTML:t._s(t.classworkDetails.instruction)}})]),t._v(" "),a("v-col",{staticClass:" pb-5 pl-5 pr-5",attrs:{cols:"12"}},[null!=t.classworkDetails.attachment?a("div",{staticClass:"overline"},[t._v("Attachments")]):t._e(),t._v(" "),a("v-list",{staticClass:"ma-0 pa-0"},t._l(t.classworkDetails.attachment,(function(s,i){return a("v-list-item",{key:i,staticClass:"ma-0 pa-0"},[a("v-list-item-avatar",[a("v-icon",{attrs:{large:"",color:"docx"==s.extension?"blue":"red"}},[t._v("\r\n                                        "+t._s("docx"==s.extension?"mdi-file-word":"mdi-file-pdf")+"\r\n                                        ")])],1),t._v(" "),a("v-list-item-content",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var e=i.hover;return[a("v-list-item-title",{class:e?"blue--text":"",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.DownLoadFile(s.attachment)}}},[t._v(t._s(s.name))])]}}],null,!0)})],1)],1)})),1)],1),t._v(" "),0==t.classworkDetails.availability?a("v-col",{staticClass:"pl-10 pr-5 pb-10 text-right",attrs:{cols:"12"}},[null!=t.statusDetails.status&&""!=t.statusDetails.status||"Submitted"==t.statusDetails.status?t._e():a("v-btn",{attrs:{rounded:"",color:"primary",dark:0!=t.totalQuestion,disabled:0==t.totalQuestion},on:{click:function(s){(null==t.statusDetails.status||""==t.statusDetails.status)&&"Submitted"!=t.statusDetails.status&&t.start()}}},[t._v("Take Quiz"),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1),t._v(" "),"Submitted"==t.statusDetails.status&&1==t.statusDetails.reviewAnswer?a("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:function(s){t.isViewingSubmission=!t.isViewingSubmission}}},[t._v("View Submission"),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e()],1):1==t.classworkDetails.availability?a("v-col",{staticClass:"pl-10 pr-5 pb-10 text-right",attrs:{cols:"12"}},[a("v-row",[t.DateToday>=t.format_date1(t.classworkDetails.from_date)?a("v-col",{attrs:{cols:"12"}},[null!=t.statusDetails.status&&""!=t.statusDetails.status||"Submitted"==t.statusDetails.status?t._e():a("v-btn",{attrs:{rounded:"",color:"primary",dark:0!=t.totalQuestion,disabled:0==t.totalQuestion},on:{click:function(s){(null==t.statusDetails.status||""==t.statusDetails.status)&&"Submitted"!=t.statusDetails.status&&t.start()}}},[t._v("Take Quiz"),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1),t._v(" "),"Taking"==t.statusDetails.status?a("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(s){return t.$router.push({name:"quizstart",params:{id:t.$route.params.id},query:{clwk:t.classworkDetails.id}})}}},[t._v("\r\n                                    Continue"),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e(),t._v(" "),"Submitted"==t.statusDetails.status&&1==t.statusDetails.reviewAnswer?a("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:function(s){t.isViewingSubmission=!t.isViewingSubmission}}},[t._v("View Submission"),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1):t._e()],1):a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{rounded:"",color:"primary",disabled:""}},[t._v("\r\n                                Not Yet Available"),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-book-arrow-right-outline")])],1)],1)],1)],1):t._e()],1),t._v(" "),a("v-row",{staticStyle:{height:"1vh"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);