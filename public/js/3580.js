"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3580],{7604:(t,s,e)=>{e.d(s,{Z:()=>l});var a=e(1519),i=e.n(a)()((function(t){return t[1]}));i.push([t.id,".text-caption[data-v-1d2c1f46]{color:#fff!important}",""]);const l=i},3580:(t,s,e)=>{e.r(s),e.d(s,{default:()=>u});var a=e(629);function i(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?i(Object(e),!0).forEach((function(s){o(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function o(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}const r={components:{},data:function(){return{coursesLength:null,isGetting:!1,dialog:!1,isloading:!0,isStudent:!1,modalType:"",form:new Form({class_code:""}),allClassesData:[],school_year:[],semester:[],school_year_id:"",semester_id:"",isLeaving:!1,isJoining:!1}},computed:(0,a.Se)(["allClass"]),methods:l(l({},(0,a.nv)(["fetchClassList"])),{},{openJoinmodal:function(){this.dialog=!this.dialog},joinClass:function(){var t=this;this.isJoining=!0,this.$store.dispatch("joinClass",this.form).then((function(s){200==s.status?(t.toastSuccess(s.data.message),t.dialog=!1,t.isLeaving=!0,t.$router.push({path:"/course/"+s.data.course_id+"/announcement"}),t.form.class_code=""):202==s.status?(t.toastError(s.data.message),t.dialog=!1,t.isLeaving=!0,t.$router.push({path:"/course/"+s.data.course_id+"/announcement"})):t.toastError("Something went wrong while joining the class!")}))},Unenroll:function(t){var s=this;this.isloading=!0,this.$store.dispatch("Unenroll",t),this.fetchClasses(),setTimeout((function(){return s.isloading=!1}),1e3)},fetchClasses:function(){var t=this;this.isGetting=!0,this.$store.dispatch("fetchClassList").then((function(){t.allClassesData=t.allClass,t.coursesLength=t.allClass.length,t.isGetting=!1}))},fetchAllSchoolyear_semester:function(){var t=this;axios.get("/api/admin/schoolyears_semesters/all").then((function(s){t.school_year=s.data.school_year,t.semester=s.data.semester}))},schoolYearFilter:function(){var t=[];for(var s in this.allClass)""!=this.semester_id?this.allClass[s].school_year_id==this.school_year_id&&this.allClass[s].semester_id==this.semester_id&&t.push(this.allClass[s]):this.allClass[s].school_year_id==this.school_year_id&&t.push(this.allClass[s]);this.allClassesData=t},semesterFilter:function(){var t=[];for(var s in this.allClass)this.allClass[s].school_year_id==this.school_year_id&&this.allClass[s].semester_id==this.semester_id&&t.push(this.allClass[s]);this.allClassesData=t},CheckBackgroundPath:function(t){if(null!=t)return t.includes("https://orangestr.sgp1.cdn.digitaloceanspaces.com")?t:"../images/"+t}}),mounted:function(){this.fetchClasses(),this.fetchAllSchoolyear_semester()}};var n=e(2446),c=e.n(n),d=e(7604),v={insert:"head",singleton:!1};c()(d.Z,v);d.Z.locals;const u=(0,e(1900).Z)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-overlay",{attrs:{value:t.isLeaving}},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),0!=t.coursesLength||t.isGetting?t._e():e("v-row",{staticClass:"pt-10",attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8",md:"4"}},[e("v-icon",{staticStyle:{"font-size":"14rem"}},[t._v("\n                   mdi-book-variant-multiple\n               ")]),t._v(" "),e("h1",[t._v(" Join your first class ")]),t._v(" "),e("p",[t._v(" Join class, to be able to view modules and activities.")]),t._v(" "),e("v-btn",{attrs:{color:"primary"},on:{click:t.openJoinmodal}},[t._v(" Join Class ")])],1)],1),t._v(" "),t.isGetting?e("v-container",{staticStyle:{height:"400px"}},[e("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[e("v-icon",{staticStyle:{"font-size":"14rem"}},[t._v("\n                   mdi-google-contacts\n               ")]),t._v(" "),e("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[e("h2",[t._v(" Loading your Classes ")])]),t._v(" "),e("v-col",{attrs:{cols:"6"}},[e("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):t._e(),t._v(" "),e("v-dialog",{attrs:{width:"400px"},model:{value:t.dialog,callback:function(s){t.dialog=s},expression:"dialog"}},[e("v-card",[e("v-card-title",{},[t._v("\n                   Join Class\n               ")]),t._v(" "),e("v-container",[e("v-row",{staticClass:"mx-2"},[e("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12"}},[e("v-text-field",{attrs:{filled:"",color:"primary",label:"Class Code"},model:{value:t.form.class_code,callback:function(s){t.$set(t.form,"class_code",s)},expression:"form.class_code"}})],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(s){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),e("v-btn",{attrs:{text:"",color:"primary",disabled:t.isJoining},on:{click:t.joinClass}},[t._v(t._s(t.isJoining?"Joining...":"Join"))])],1)],1)],1),t._v(" "),0!=t.coursesLength&&0==t.isGetting?e("div",[e("v-row",{staticStyle:{"margin-bottom":"-40px"}},[e("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12",md:"12",lg:"8"}},[e("h2",[t._v("My Classes")])]),t._v(" "),e("v-col",{staticClass:"text-right",attrs:{lg:"2"}},[e("v-select",{staticClass:"mr-2 my-0",attrs:{dense:"",items:t.school_year,"item-text":"schoolyear","item-value":"id",label:"School Year",outlined:"",small:""},on:{change:function(s){return t.schoolYearFilter()}},model:{value:t.school_year_id,callback:function(s){t.school_year_id=s},expression:"school_year_id"}})],1),t._v(" "),e("v-col",{staticClass:"text-right",attrs:{lg:"2"}},[e("v-select",{staticClass:"mr-2 my-0",attrs:{dense:"",items:t.semester,"item-text":"semester","item-value":"id",label:"Semester",outlined:"",small:""},on:{change:function(s){return t.semesterFilter()}},model:{value:t.semester_id,callback:function(s){t.semester_id=s},expression:"semester_id"}})],1)],1),t._v(" "),e("v-row",{staticClass:"mt-3"},[t._l(t.allClassesData,(function(s,a){return e("v-col",{key:"class"+a,attrs:{cols:"12",xl:"3",lg:"3",md:"6"}},[e("div",{staticClass:"card-expansion"},[e("v-card",{staticClass:"mx-auto"},[e("v-img",{staticClass:"white--text align-end grey lighten-2",attrs:{src:t.CheckBackgroundPath(s.course_picture),height:t.$vuetify.breakpoint.lgAndUp?200:140,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[t._v(" "),e("v-card-subtitle",[e("v-progress-linear",{staticClass:"rounded-sm",attrs:{value:s.progress,height:"6"}}),t._v(" "),e("span",{staticClass:"text-caption float-right"},[t._v(" "+t._s(parseFloat(s.progress.toFixed(2)))+"%\n                                   ")]),t._v(" "),e("span",{staticClass:"text-caption "},[t._v(" Completed ")])],1)],1),t._v(" "),e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var i=a.hover;return[e("v-card-subtitle",{staticClass:"ml-0 pl-0 mt-0 pt-0"},[e("div",[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"coursePage",params:{id:s.course_id},query:{class:s.class_id}}}},[e("v-list",{staticClass:"ml-0 pl-0"},[e("v-list-item",{class:i?"blue--text":"primary--text"},[e("v-list-item-content",[e("v-list-item-title",[e("p",{staticClass:"mb-0 pb-0 mb-2",style:t.$vuetify.breakpoint.lgAndUp?"font-size: 16px;text-overflow: ellipsis;overflow: hidden; ":"font-size: 14px;text-overflow: ellipsis;overflow: hidden; "},[t._v(t._s(s.course_code)+"\n                                                       "),e("br"),t._v(" "),e("span",{staticStyle:{"text-overflow":"ellipsis",overflow:"hidden"}},[t._v(t._s(s.course_name))])])])],1)],1)],1)],1)],1),t._v(" "),e("v-divider"),t._v(" "),e("div",{staticClass:"mt-2 pl-4"},[e("span",{style:t.$vuetify.breakpoint.lgAndUp?"font-size: 16px":"font-size: 14px"},[t._v(t._s(s.class_name))]),t._v(" "),e("br"),t._v(" "),e("span",{style:t.$vuetify.breakpoint.lgAndUp?"font-size: 16px":"font-size: 14px"},[t._v(" Class code: "+t._s(s.class_code))])])],1)]}}],null,!0)})],1)],1)])})),t._v(" "),e("v-col",{staticClass:"text-right"},[e("v-btn",{attrs:{bottom:"",color:"primary",dark:"",fab:"",fixed:"",right:""},on:{click:t.openJoinmodal}},[e("v-icon",[t._v("mdi-plus")])],1)],1)],2)],1):t._e()],1)}),[],!1,null,"1d2c1f46",null).exports}}]);