"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3876],{62811:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(1519),o=s.n(r)()((function(e){return e[1]}));o.push([e.id,".text-caption[data-v-66788330],.text-white[data-v-66788330]{color:#fff!important}",""]);const a=o},53876:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var r=s(20629);function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const l={components:{},data:function(){return{school_year:[],semester:[],school_year_id:"",semester_id:"",isGetting:!1,isloading:!0,isPageLoading:!1,class_code:null,form:{id:"",course_name:"",course_id:"",class_description:"",course_picture:"",course_code:""},model:!0}},computed:(0,r.Se)(["allCourse"]),methods:a(a({},(0,r.nv)(["fetchCourseList"])),{},{fetchCourses:function(){this.isGetting=!1},fetchAllSchoolyear_semester:function(){var e=this;axios.get("/api/admin/schoolyears_semesters/all").then((function(t){e.school_year=t.data.school_year,e.semester=t.data.semester}))},schoolYearFilter:function(){var e=[];for(var t in this.allCourse)""!=this.semester_id?this.allCourse[t].school_year_id==this.school_year_id&&this.allCourse[t].semester_id==this.semester_id&&e.push(this.allCourse[t]):this.allCourse[t].school_year_id==this.school_year_id&&e.push(this.allCourse[t]);this.allCourse=e},semesterFilter:function(){var e=[];for(var t in this.allCourse)this.allCourse[t].school_year_id==this.school_year_id&&this.allCourse[t].semester_id==this.semester_id&&e.push(this.allCourse[t]);this.allCourse=e},goToclass:function(e,t){this.$router.to({name:"coursePage",params:{id:e},query:{class:t}})},CheckBackgroundPath:function(e){if(null!=e)return e.includes("https://orangestr.sgp1.cdn.digitaloceanspaces.com")?e:"../images/"+e}}),mounted:function(){this.isGetting=!0,this.fetchCourses(),this.fetchAllSchoolyear_semester()}};var c=s(72446),n=s.n(c),u=s(62811),h={insert:"head",singleton:!1};n()(u.Z,h);u.Z.locals;const d=(0,s(51900).Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[0!=e.allCourse.length&&0==e.isGetting?s("div",[s("v-row",{staticStyle:{"margin-top":"-40px"}},[s("v-col",[s("v-card",{staticClass:"mx-auto pa-2"},[s("v-row",{staticClass:"mt-0"},[s("v-col",{staticClass:"text-left"},[s("h3",[e._v("My Courses")])]),e._v(" "),s("v-col",{staticClass:"text-right",attrs:{lg:"3"}},[s("v-select",{staticClass:"mr-2 my-0",attrs:{dense:"",items:e.school_year,"item-text":"schoolyear","item-value":"id",label:"School Year",outlined:"",small:""},on:{change:function(t){return e.schoolYearFilter()}},model:{value:e.school_year_id,callback:function(t){e.school_year_id=t},expression:"school_year_id"}})],1),e._v(" "),s("v-col",{staticClass:"text-right",attrs:{lg:"3"}},[s("v-select",{staticClass:"mr-2 my-0",attrs:{dense:"",items:e.semester,"item-text":"semester","item-value":"id",label:"Semester",outlined:"",small:""},on:{change:function(t){return e.semesterFilter()}},model:{value:e.semester_id,callback:function(t){e.semester_id=t},expression:"semester_id"}})],1)],1),e._v(" "),s("v-slide-group",{staticClass:"px-1",attrs:{"active-class":"success","show-arrows":"","mobile-breakpoint":"1000","center-active":""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.allCourse,(function(t,r){return s("v-slide-item",{key:"class"+r,scopedSlots:e._u([{key:"default",fn:function(r){var o=r.active;return[s("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"coursePage",params:{id:t.course_id},query:{class:t.class_id}}}},[s("v-card",{staticClass:"my-4 mx-3",attrs:{color:o?void 0:"grey lighten-1",height:"200",width:"250"}},[s("v-card",{staticClass:"mx-auto"},[s("v-img",{staticClass:"white--text align-end",attrs:{src:e.CheckBackgroundPath(t.course_picture),height:"200px",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[s("div",{staticClass:"px-2"}),e._v(" "),s("v-card-subtitle",{staticClass:"text-white"},[e._v("\n                                                "+e._s(t.course_code)+"\n                                                "),s("br"),e._v(" "+e._s(t.course_name)+"\n                                            ")])],1)],1)],1)],1)]}}],null,!0)})})),1)],1)],1)],1)],1):e._e()])}),[],!1,null,"66788330",null).exports}}]);