(self.webpackChunk=self.webpackChunk||[]).push([[570],{570:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>l});var a=e(7757),i=e.n(a);function n(t,s,e,a,i,n,r){try{var o=t[n](r),l=o.value}catch(t){return void e(t)}o.done?s(l):Promise.resolve(l).then(a,i)}function r(t){return function(){var s=this,e=arguments;return new Promise((function(a,i){var r=t.apply(s,e);function o(t){n(r,a,i,o,l,"next",t)}function l(t){n(r,a,i,o,l,"throw",t)}o(void 0)}))}}const o={components:{},data:function(){return{dialog:!1,isloading:!0,isGetting:!0,search:"",isClassNameLoaded:!1,classNames:[],Class_id:this.$route.params.id,RemoveDetails:{}}},computed:{getAllStudents:function(){var t=this;return this.search?this.students.filter((function(s){return t.search.toLowerCase().split(" ").every((function(t){return s.firstName.toLowerCase().includes(t)||s.lastName.toLowerCase().includes(t)}))})):this.students}},methods:{RemoveConfirm:function(t,s,e,a,i){this.RemoveDetails.name=t+" "+s,this.RemoveDetails.class_name=e,this.RemoveDetails.class_id=a,this.RemoveDetails.user_id=i,this.dialog=!this.dialog},removeStudent:function(){var t=this;return r(i().mark((function s(){return i().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:axios.delete("/api/student/removeFromClass/"+t.RemoveDetails.class_id+"/"+t.RemoveDetails.user_id).then((function(s){t.getStudentList(),t.dialog=!t.dialog}));case 1:case"end":return s.stop()}}),s)})))()},getStudentList:function(){var t=this;return r(i().mark((function s(){return i().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:axios.get("/api/student/all/"+t.$route.params.id).then((function(s){t.fetchClassnames(),t.instructor=s.data.InstructorList,t.students=s.data.StudentList,t.isGetting=!1})).catch((function(t){console.log(t)}));case 1:case"end":return s.stop()}}),s)})))()},fetchClassnames:function(){var t=this;axios.get("/api/class/allnames/"+this.$route.params.id+"/0").then((function(s){t.classNames=s.data,t.isloading=!1,t.classNames.push({class_id:t.$route.params.id,class_name:"All Class",id:t.$route.params.id})}))}},mounted:function(){this.getStudentList(),this.isloading=!1}};const l=(0,e(1900).Z)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-container",{attrs:{fluid:""}},[t.isGetting?e("v-container",{staticStyle:{height:"400px"}},[e("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[e("v-icon",{staticStyle:{"font-size":"14rem"}},[t._v("\n                    mdi-account-group\n                ")]),t._v(" "),e("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[e("h2",[t._v(" Getting people List ")])]),t._v(" "),e("v-col",{attrs:{cols:"6"}},[e("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):t._e(),t._v(" "),t.isGetting?t._e():e("v-container",{staticClass:"mt-0",attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"mb-0 pb-0 mt-2 pt-0",attrs:{cols:"12"}},[e("div",[e("h3",{staticClass:"font-weight-regular"},[t._v("Intructor")])])]),t._v(" "),t._l(t.instructor,(function(s){return e("v-col",{key:s.user_id,staticClass:"pl-0 ml-0 pb-0 mb-0 pt-0 mt-0",attrs:{cols:"12"}},[e("v-container",{staticStyle:{cursor:"pointer"}},[e("v-container",{staticClass:"pb-0 mb-0 pt-0 mt-0 d-flex flex-sm-row"},[e("v-avatar",{attrs:{size:"40"}},[e("v-img",{attrs:{src:null==s.profile_pic||""==s.profile_pic?"https://ui-avatars.com/api/?background=random&color=white&name="+s.firstName+" "+s.lastName:s.profile_pic}})],1),t._v(" "),e("v-container",{staticClass:"pb-0 mb-0 pt-0 mt-0 d-flex flex-column ml-5 pb-5",attrs:{"ma-0":"","pa-0":""}},[e("div",{staticClass:"text-left  mt-1"},[t._v(t._s(s.firstName)+" "+t._s(s.lastName))])])],1)],1)],1)})),t._v(" "),e("v-col",{staticClass:"mt-0 mb-0",attrs:{cols:"12"}},[e("v-divider")],1),t._v(" "),e("v-col",{staticClass:"mb-0 pb-0 mt-3 pt-0",attrs:{cols:"12"}},[e("div",[e("h3",{staticClass:"font-weight-regular"},[t._v("Classmates")])])]),t._v(" "),t._l(t.students,(function(s){return e("v-col",{key:s.user_id,staticClass:"pl-0 ml-0 pb-0 mb-0 pt-0 mt-0",attrs:{cols:"12"}},[e("v-container",{staticStyle:{cursor:"pointer"}},[e("v-container",{staticClass:"pb-0 mb-0 pt-0 mt-0 d-flex flex-sm-row"},[e("v-avatar",{attrs:{size:"40"}},[e("v-img",{attrs:{src:null==s.profile_pic||""==s.profile_pic?"https://ui-avatars.com/api/?background=random&color=white&name="+s.firstName+" "+s.lastName:s.profile_pic}})],1),t._v(" "),e("v-container",{staticClass:"pb-0 mb-0 pt-0 mt-0 d-flex flex-column ml-5 pb-5",attrs:{"ma-0":"","pa-0":""}},[e("div",{staticClass:"text-left  mt-1"},[t._v(t._s(s.firstName)+" "+t._s(s.lastName))])])],1)],1)],1)}))],2)],1)],1)],1)}),[],!1,null,null,null).exports}}]);