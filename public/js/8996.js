(self.webpackChunk=self.webpackChunk||[]).push([[8996],{8996:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(7757),i=s.n(a);function n(t,e,s,a,i,n,o){try{var l=t[n](o),r=l.value}catch(t){return void s(t)}l.done?e(r):Promise.resolve(r).then(a,i)}function o(t){return function(){var e=this,s=arguments;return new Promise((function(a,i){var o=t.apply(e,s);function l(t){n(o,a,i,l,r,"next",t)}function r(t){n(o,a,i,l,r,"throw",t)}l(void 0)}))}}const l={props:["getcourseInfo"],components:{removeConfirmDialog:function(){return s.e(8543).then(s.bind(s,8543))},addStudentDialog:function(){return s.e(2600).then(s.bind(s,2600))}},data:function(){return{dialog:!1,AddStudent:!1,isloading:!0,isGetting:!0,isClassNameLoaded:!1,classNames:[],Class_id:this.$route.params.id,RemoveDetails:{},students:null,classList:[],course_name:null,search:"",isSearching:!1}},computed:{getAllStudents:function(){var t=this;return this.search?this.students.filter((function(e){return t.search.toLowerCase().split(" ").every((function(t){return e.firstName.toLowerCase().includes(t)||e.lastName.toLowerCase().includes(t)}))})):this.students}},methods:{RemoveConfirm:function(t,e,s,a,i){this.RemoveDetails.name=t+" "+e,this.RemoveDetails.class_name=s,this.RemoveDetails.class_id=a,this.RemoveDetails.user_id=i,this.dialog=!this.dialog},removeStudent:function(){var t=this;return o(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.delete("/api/student/removeFromClass/"+t.RemoveDetails.class_id+"/"+t.RemoveDetails.user_id).then((function(e){t.getStudentList(),t.dialog=!t.dialog}));case 1:case"end":return e.stop()}}),e)})))()},getStudentList:function(){var t=this;return o(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.get("/api/student/all/"+t.$route.params.id).then((function(e){t.students=e.data.StudentList})).catch((function(t){console.log(t)}));case 1:case"end":return e.stop()}}),e)})))()},fetchClassnames:function(){var t=this;return o(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.get("/api/class/allnames/"+t.$route.params.id+"/0").then((function(e){t.getStudentList(),t.classNames=e.data,t.isloading=!1,t.isGetting=!1,t.classNames.push({class_id:t.$route.params.id,class_name:"All Class",id:t.$route.params.id})}));case 1:case"end":return e.stop()}}),e)})))()},OpenaddStudentDialog:function(){this.AddStudent=!this.AddStudent}},mounted:function(){this.fetchClassnames()}};const r=(0,s(1900).Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.dialog?s("removeConfirmDialog",{attrs:{RemoveDetails:t.RemoveDetails},on:{toggleCancelDialog:function(e){t.dialog=!t.dialog},toggleconfirm:function(e){return t.removeStudent()}}}):t._e()],1),t._v(" "),s("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.AddStudent,callback:function(e){t.AddStudent=e},expression:"AddStudent"}},[t.AddStudent?s("addStudentDialog",{attrs:{classList:t.classList,course_name:t.course_name},on:{toggleCancelDialog:function(e){t.AddStudent=!t.AddStudent},toggleconfirm:function(e){t.AddStudent=!t.AddStudent}}}):t._e()],1)],1),t._v(" "),s("v-container",{attrs:{fluid:""}},[t.isGetting?s("v-container",{staticStyle:{height:"400px"}},[s("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[s("v-icon",{staticStyle:{"font-size":"10rem"}},[t._v("\n                    mdi-account-group\n                ")]),t._v(" "),s("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[s("h3",[t._v(" Getting Student List ")])]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[s("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):t._e(),t._v(" "),t.isGetting?t._e():s("v-container",{staticClass:"mt-0",attrs:{fluid:""}},[s("v-row",[s("v-col",{staticClass:"mt-0 pt-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"7",md:"10",lg:"10"}},[s("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:function(e){t.OpenaddStudentDialog(),t.course_name=t.getcourseInfo.course_name}}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("Student")],1)],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"5",md:"2",lg:"2"}},[s("v-select",{staticClass:"float-right",attrs:{items:t.classNames,loading:t.isloading,disabled:t.isloading,"item-text":"class_name","item-value":"class_id",dense:"",outlined:""},model:{value:t.Class_id,callback:function(e){t.Class_id=e},expression:"Class_id"}})],1)],1)],1)],1),t._v(" "),s("v-row",[s("v-col",{staticClass:" mb-0 pb-0 mt-0 pt-0 d-flex justify-end",attrs:{cols:"12"}},[s("div",{staticClass:"d-flex justify-end",staticStyle:{width:"30%"}},[t.isSearching?s("v-text-field",{staticClass:"mb-0 pb-0",attrs:{dense:"",transition:"slide-x-transition",label:"Search",placeholder:"Name",outlined:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e(),t._v(" "),s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){t.isSearching=!t.isSearching}}},"v-btn",i,!1),a),[s("v-icon",[t._v("\n                            "+t._s(t.isSearching?"mdi-close":"mdi-magnify")+"\n                            ")])],1)]}}],null,!1,1561607876)},[t._v(" "),s("span",[t._v(t._s(t.isSearching?"Close":"Search"))])])],1)]),t._v(" "),t._l(t.getAllStudents,(function(e){return s("v-col",{directives:[{name:"show",rawName:"v-show",value:e.class_id==t.Class_id||t.Class_id==t.$route.params.id,expression:"item.class_id == Class_id || Class_id == $route.params.id"}],key:e.user_id,staticClass:"pl-0 ml-0 pb-0 mb-0 pt-0 mt-0",attrs:{cols:"12"}},[s("v-container",{staticStyle:{cursor:"pointer"}},[s("v-container",{staticClass:"pb-0 mb-0 pt-0 mt-0 d-flex flex-sm-row"},[s("v-avatar",{staticClass:"mt-1",attrs:{size:"40"}},[s("v-img",{attrs:{src:null==e.profile_pic||""==e.profile_pic?"https://ui-avatars.com/api/?background=random&color=white&name="+e.firstName+" "+e.lastName:e.profile_pic}})],1),t._v(" "),s("v-container",{staticClass:"pb-0 mb-0 pt-0 mt-0 d-flex flex-column ml-5",attrs:{"ma-0":"","pa-0":""}},[s("h3",{staticClass:"text-left font-weight-light"},[t._v(t._s(e.firstName)+" "+t._s(e.lastName)),s("small",{staticClass:"ml-1"},[t._v("("+t._s(e.class_name)+")")])]),t._v(" "),s("div",[t._v(t._s(e.email))])]),t._v(" "),s("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[s("v-spacer"),t._v(" "),s("v-menu",{attrs:{transition:"slide-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"float-right",attrs:{icon:"",color:"black"}},"v-btn",i,!1),a),[s("v-icon",[t._v("\n                                            mdi-dots-vertical\n                                        ")])],1)]}}],null,!0)},[t._v(" "),s("v-list",[s("v-list-item",{attrs:{link:""},on:{click:function(s){return t.RemoveConfirm(e.firstName,e.lastName,e.class_name,e.class_id,e.user_id)}}},[s("v-list-item-title",[t._v("Remove student")])],1),t._v(" "),s("v-list-item",{attrs:{link:""}},[s("v-list-item-title",[t._v("View Student")])],1)],1)],1)],1)],1),t._v(" "),s("v-divider")],1)],1)}))],2)],1)],1)],1)}),[],!1,null,null,null).exports}}]);