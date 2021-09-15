"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1650],{1650:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var o=s(629);function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const a={props:["UserDetails"],data:function(){return{school_year:[],semester:[],school_year_id:0,semester_id:0,allCoursesData:[],dialog:!1,moduledialog:!1,Coursedialog:!1,isloading:!0,coursesLength:null,details:[],course_id:null,allCourse:[],course_details:null,items:["2020-2021","2021-2022","2022-2023","2023-2024"]}},components:{coursesummarypreview:function(){return s.e(4300).then(s.bind(s,4300))}},computed:(0,o.Se)(["allClass"]),methods:l(l({},(0,o.nv)(["fetchCourseList"])),{},{fetchAllSchoolyear_semester:function(){var e=this;axios.get("/api/admin/schoolyears_semesters/all").then((function(t){e.school_year=t.data.school_year,e.semester=t.data.semester}))},semesterFilter:function(){var e=[];for(var t in this.allCourse)this.allCourse[t].school_year_id==this.school_year_id&&this.allCourse[t].semester_id==this.semester_id&&e.push(this.allCourse[t]);this.allCoursesData=e},schoolYearFilter:function(){var e=[];for(var t in this.allCourse)""!=this.semester_id?this.allCourse[t].school_year_id==this.school_year_id&&this.allCourse[t].semester_id==this.semester_id&&e.push(this.allCourse[t]):this.allCourse[t].school_year_id==this.school_year_id&&e.push(this.allCourse[t]);console.log(e),this.allCoursesData=e},fetchCourses:function(){var e=this;this.isloading=!0,this.school_year_id=0,this.semester_id=0,axios.get("/api/admin/teachers/profile/ClassesList/"+this.UserDetails.user_id).then((function(t){e.allCourse=t.data,e.allCoursesData=t.data,e.coursesLength=e.allCourse.length,e.isloading=!1}))}}),mounted:function(){this.fetchCourses(),this.fetchAllSchoolyear_semester()}};const n=(0,s(1900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.dialog?s("coursesummarypreview",{attrs:{course_details:e.course_details},on:{closeDialog:function(t){e.dialog=!1}}}):e._e()],1)],1),e._v(" "),s("v-row",[s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12",lg:"5"}},[s("h2",[e._v("Courses")])]),e._v(" "),s("v-col",{staticClass:"text-right mt-2",attrs:{lg:"1"}},[0!=e.school_year_id||0!=e.semester_id?s("v-btn",{attrs:{icon:""},on:{click:e.fetchCourses}},[s("v-icon",[e._v("\n                    mdi-close\n                ")])],1):e._e()],1),e._v(" "),s("v-col",{staticClass:"text-right",attrs:{lg:"3"}},[s("v-select",{staticClass:"mr-2 my-1",attrs:{dense:"",items:e.school_year,"item-text":"schoolyear","item-value":"id",label:"School Year",outlined:"",small:""},on:{change:function(t){return e.schoolYearFilter()}},model:{value:e.school_year_id,callback:function(t){e.school_year_id=t},expression:"school_year_id"}})],1),e._v(" "),s("v-col",{staticClass:"text-right",attrs:{lg:"3"}},[s("v-select",{staticClass:"mr-2 my-1",attrs:{dense:"",items:e.semester,"item-text":"semester","item-value":"id",disabled:0==e.school_year_id,label:"Semester",outlined:"",small:""},on:{change:function(t){return e.semesterFilter()}},model:{value:e.semester_id,callback:function(t){e.semester_id=t},expression:"semester_id"}})],1)],1),e._v(" "),e.isloading?s("v-col",{attrs:{cols:"12"}},[e.isloading?s("v-container",{staticClass:"fill-height"},[s("v-row",{attrs:{"align-content":"center",justify:"center"}},[s("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[e._v("\n                    Loading\n                ")]),e._v(" "),s("v-col",{attrs:{cols:"6"}},[s("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):e._e()],1):e._e(),e._v(" "),s("v-divider"),e._v(" "),s("br"),e._v(" "),s("v-row",[e.isloading?e._e():s("v-col",{attrs:{cols:"12"}},[s("v-row",e._l(e.allCoursesData,(function(t){return s("v-col",{key:t.course_id,attrs:{cols:"6",md:"3",lg:"3"}},[s("v-card",{staticClass:"mx-auto",staticStyle:{cursor:"pointer"},attrs:{link:"",elevation:"2","max-width":"344",outlined:""},on:{click:function(s){e.dialog=!0,e.course_details=t}}},[s("v-toolbar",{class:e.$vuetify.breakpoint.xs||e.$vuetify.breakpoint.sm?"":"d-flex justify-center",attrs:{dense:"",dark:"",color:"primary"}},[s("v-toolbar-title",[s("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[s("div",e._g(e._b({staticClass:"text-center pl-2 pr-2",staticStyle:{overflow:"hidden"}},"div",l,!1),r),[e._v("\n                                            "+e._s(t.course_code+" - "+t.course_name)+"\n                                        ")])]}}],null,!0)},[e._v(" "),s("span",[e._v(e._s(t.course_code+" - "+t.course_name))])])],1)],1),e._v(" "),s("v-list-item",[s("v-list-item-content",[s("div",{staticClass:"pa-2"},[s("v-row",[s("v-col",[s("div",{staticClass:"text-center"},[e._v("\n                                                "+e._s(t.total_students)+"\n                                            ")]),e._v(" "),s("div",{staticClass:"text-center text-subtitle-2"},[e._v("\n                                                Total Students\n                                            ")])]),e._v(" "),s("v-col",[s("div",{staticClass:"text-center"},[e._v("\n                                                "+e._s(t.total_classes)+"\n                                            ")]),e._v(" "),s("div",{staticClass:"text-center text-subtitle-2"},[e._v("\n                                                Total Classes\n                                            ")])])],1)],1)])],1),e._v(" "),s("div",{staticClass:"text-center pl-4 pr-4"},[s("v-divider")],1),e._v(" "),s("v-list-item",[s("v-list-item-content",{on:{click:function(s){e.dialog=!0,e.course_id=e.course_details=t}}},[s("div",{staticClass:"text-center "},[e._v("\n                                    Modules Published: "+e._s(t.sub_modules_count)+"\n                                ")])])],1)],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);