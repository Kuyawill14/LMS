"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2556],{92556:(t,s,e)=>{e.r(s),e.d(s,{default:()=>r});var i=e(87757),n=e.n(i);function a(t,s,e,i,n,a,l){try{var r=t[a](l),c=r.value}catch(t){return void e(t)}r.done?s(c):Promise.resolve(c).then(i,n)}const l={props:["course_details"],data:function(){return{StudentList:[],isGetting:!0,class_id:null,class_name:[],isloading:!1}},computed:{filteredStudentList:function(){var t=this,s=this.StudentList;return s=s.filter((function(s){return t.class_id==s.class_id}))}},methods:{getStudentList:function(){var t,s=this;return(t=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:axios.get("/api/admin/teachers/studentList/"+s.course_details.course_id).then((function(t){s.StudentList=t.data.student_list,s.class_name=t.data.class_name,0!=s.class_name.length&&(s.class_id=s.class_name[0].id),setTimeout((function(){return s.isGetting=!1}),700)}));case 1:case"end":return t.stop()}}),t)})),function(){var s=this,e=arguments;return new Promise((function(i,n){var l=t.apply(s,e);function r(t){a(l,i,n,r,c,"next",t)}function c(t){a(l,i,n,r,c,"throw",t)}r(void 0)}))})()},showLoading:function(){var t=this;this.isloading=!0,setTimeout((function(){return t.isloading=!1}),500)}},mounted:function(){this.getStudentList()}};const r=(0,e(51900).Z)(l,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-row",{staticStyle:{"margin-bottom":"-50px"}},[e("v-col",{staticClass:"text-right",attrs:{cols:"12",md:"2"}},[e("v-select",{staticClass:"mr-2 my-1",attrs:{dense:"",label:"Class",items:t.class_name,"item-text":"class_name","item-value":"id",outlined:"",small:""},on:{change:function(s){return t.showLoading()}},model:{value:t.class_id,callback:function(s){t.class_id=s},expression:"class_id"}})],1)],1),t._v(" "),t.isGetting||t.isloading?e("v-row",t._l(16,(function(t){return e("v-col",{key:t,staticClass:"pa-1",attrs:{cols:"12",md:"3"}},[e("v-skeleton-loader",{attrs:{"max-width":"380",type:"list-item-avatar-two-line"}})],1)})),1):t._e(),t._v(" "),0!=t.StudentList.length||t.isGetting?t._e():e("v-row",{staticClass:"pt-10",staticStyle:{"margin-top":"7rem"},attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8",md:"4"}},[e("v-icon",{staticStyle:{"font-size":"7rem"}},[t._v("\n                mdi-account-group-outline\n            ")]),t._v(" "),e("h2",[t._v(" Empty Students ")])],1)],1),t._v(" "),0==t.StudentList.length||t.isGetting||t.isloading?t._e():e("v-row",t._l(t.filteredStudentList,(function(s,i){return e("v-col",{key:i,staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"3"}},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{alt:"Profile",src:null==s.profile_pic||""==s.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+s.firstName+" "+s.lastName:s.profile_pic}})],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v("\n                            "+t._s(s.firstName+" "+s.lastName)+"\n                        ")]),t._v(" "),e("v-list-item-subtitle",[e("small",[t._v("("+t._s(s.class_name)+")")])])],1)],1)],1)],1)})),1)],1)}),[],!1,null,null,null).exports}}]);