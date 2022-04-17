"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6848],{26848:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});var i=s(87757),a=s.n(i);function r(t,e,s,i,a,r,n){try{var o=t[r](n),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(i,a)}function n(t){return function(){var e=this,s=arguments;return new Promise((function(i,a){var n=t.apply(e,s);function o(t){r(n,i,a,o,c,"next",t)}function c(t){r(n,i,a,o,c,"throw",t)}o(void 0)}))}}function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){l(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const u={components:{},data:function(){return{dialog:!1,isloading:!0,isGetting:!0,search:"",isClassNameLoaded:!1,classNames:[],Class_id:this.$route.params.id,RemoveDetails:{}}},computed:c(c({},(0,s(20629).Se)(["get_CurrentUser"])),{},{getAllStudents:function(){var t=this;return this.search?this.students.filter((function(e){return t.search.toLowerCase().split(" ").every((function(t){return e.firstName.toLowerCase().includes(t)||e.lastName.toLowerCase().includes(t)}))})):this.students}}),methods:{RemoveConfirm:function(t,e,s,i,a){this.RemoveDetails.name=t+" "+e,this.RemoveDetails.class_name=s,this.RemoveDetails.class_id=i,this.RemoveDetails.user_id=a,this.dialog=!this.dialog},removeStudent:function(){var t=this;return n(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.delete("/api/student/removeFromClass/"+t.RemoveDetails.class_id+"/"+t.RemoveDetails.user_id).then((function(e){t.getStudentList(),t.dialog=!t.dialog}));case 1:case"end":return e.stop()}}),e)})))()},getStudentList:function(){var t=this;return n(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.get("/api/student/all/"+t.$route.params.id+"/classmates").then((function(e){t.instructor=e.data.InstructorList,t.students=e.data.StudentList,t.isGetting=!1})).catch((function(t){}));case 1:case"end":return e.stop()}}),e)})))()},fetchClassnames:function(){var t=this;axios.get("/api/class/allnames/"+this.$route.params.id+"/0").then((function(e){t.classNames=e.data,t.isloading=!1,t.classNames.push({class_id:t.$route.params.id,class_name:"All Class",id:t.$route.params.id})}))}},mounted:function(){this.getStudentList(),this.isloading=!1,$("head > title").text("People")}};const m=(0,s(51900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",{attrs:{fluid:""}},[t.isGetting?s("v-container",{staticStyle:{height:"400px"}},[s("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[s("v-icon",{staticStyle:{"font-size":"14rem"}},[t._v("\n                    mdi-account-group\n                ")]),t._v(" "),s("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[s("h2",[t._v(" Getting people List ")])]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[s("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):t._e(),t._v(" "),t.isGetting?t._e():s("v-container",{staticClass:"mt-0 pl-0 ml-0",attrs:{fluid:""}},[s("v-row",[s("v-col",{staticClass:"mb-0 pb-0 mt-2 pt-0",attrs:{cols:"12"}},[s("div",[s("h3",{staticClass:"font-weight-medium"},[t._v("Instructor")])])]),t._v(" "),t._l(t.instructor,(function(e){return s("v-col",{key:e.user_id,staticClass:"ma-0 pa-0",attrs:{cols:"12",md:"4",lg:"3"}},[s("v-list",{staticClass:"mb-0 pb-0"},[s("v-list-item",{staticClass:"mb-0 pb-0"},[s("v-list-item-avatar",{attrs:{color:"secondary"}},[s("v-img",{attrs:{src:null==e.profile_pic||""==e.profile_pic?"https://ui-avatars.com/api/?background=0D8ABC&color=fff&name="+e.firstName+" "+e.lastName:e.profile_pic}})],1),t._v(" "),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.firstName)+" "+t._s(e.lastName)+" ")])],1)],1)],1)],1)})),t._v(" "),s("v-col",{staticClass:"mt-0 mb-0",attrs:{cols:"12"}},[s("v-divider")],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 mt-3 pt-0",attrs:{cols:"12"}},[s("div",[s("h3",{staticClass:"font-weight-medium"},[t._v("Classmates")])])]),t._v(" "),t._l(t.students,(function(e){return s("v-col",{key:e.user_id,staticClass:"ma-0 pa-0",attrs:{cols:"12",md:"4",lg:"3"}},[s("v-list",{staticClass:"mb-0 pb-0"},[s("v-list-item",{staticClass:"mb-0 pb-0"},[s("v-list-item-avatar",{attrs:{color:"secondary"}},[s("v-img",{attrs:{src:null==e.profile_pic||""==e.profile_pic?"https://ui-avatars.com/api/?background=0D8ABC&color=fff&name="+e.firstName+" "+e.lastName:e.profile_pic}})],1),t._v(" "),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.firstName)+" "+t._s(e.lastName)),t.get_CurrentUser.student_id==e.student_id?s("span",{staticClass:"primary--text"},[t._v("(Me)")]):t._e()])],1)],1)],1)],1)}))],2)],1)],1)],1)}),[],!1,null,null,null).exports}}]);