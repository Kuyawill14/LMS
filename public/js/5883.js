"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5883],{85265:(e,t,s)=>{s.d(t,{Z:()=>o});var i=s(1519),r=s.n(i)()((function(e){return e[1]}));r.push([e.id,".card-group-row__col .fullbleed[data-v-12212580]{transition:all .4s ease-in-out!important}.card-group-row__col:hover .fullbleed[data-v-12212580]{opacity:.4!important;transition:all .4s ease-in-out}.md-card[data-v-12212580]{display:inline-block;margin:4px;vertical-align:top;width:320px}",""]);const o=r},15883:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var i=s(20629);function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const l={components:{confirmArchiveCourse:function(){return s.e(8498).then(s.bind(s,58498))}},data:function(){return{school_year:[],semester:[],school_year_id:0,semester_id:0,coursesLength:null,isGetting:!1,dialog:!1,isloading:!1,modalType:"",isPageLoading:!1,class_code:null,form:{id:"",course_name:"",course_id:"",class_description:"",course_picture:"",course_code:""},Archivedialog:!1,ArchiveDetails:{},allCoursesData:[],isLeaving:!1}},computed:(0,i.Se)(["allCourse"]),methods:o(o({},(0,i.nv)(["fetchCourseList"])),{},{toastSuccess:function(e,t){return this.$toasted.success(e,{theme:"toasted-primary",position:"top-center",icon:"done",duration:5e3})},archiveConfirm:function(e,t){this.ArchiveDetails.course_id=t,this.ArchiveDetails.name=e,this.Archivedialog=!this.Archivedialog},archiveCourse:function(){var e=this;axios.delete("/api/course/archiveCourse/"+this.ArchiveDetails.course_id).then((function(t){e.fetchCourses(),e.Archivedialog=!e.Archivedialog}))},openAddmodal:function(){this.dialog=!this.dialog,this.form.course_name="",this.form.course_code="",this.modalType="add"},openEditmodal:function(e){this.dialog=!this.dialog,this.modalType="update";var t=this.allCourse.find((function(t){return t.id===e}));this.form.id=e,this.form.course_name=t.course_name,this.form.course_code=t.course_code,this.form.course_id=t.course_id},createCourse:function(){var e=this;this.isloading=!0,""!=this.form.course_name&&""!=this.form.course_code&&this.$store.dispatch("createCourse",this.form).then((function(t){e.dialog=!1;var s=t.id;e.toastSuccess("Your course has been Added","done"),e.isLeaving=!0,e.$router.push({name:"courseSetup",params:{id:s}})}))},fetchCourses:function(){var e=this;this.school_year_id=0,this.semester_id=0,this.isGetting=!0,this.$store.dispatch("fetchCourseList").then((function(){e.allCoursesData=e.allCourse,e.coursesLength=e.allCourse.length,e.isGetting=!1}))},fetchAllSchoolyear_semester:function(){var e=this;axios.get("/api/admin/schoolyears_semesters/all").then((function(t){e.school_year=t.data.school_year,e.semester=t.data.semester}))},schoolYearFilter:function(){var e=[];for(var t in this.allCourse)""!=this.semester_id?this.allCourse[t].school_year_id==this.school_year_id&&this.allCourse[t].semester_id==this.semester_id&&e.push(this.allCourse[t]):this.allCourse[t].school_year_id==this.school_year_id&&e.push(this.allCourse[t]);this.allCoursesData=e},semesterFilter:function(){var e=[];for(var t in this.allCourse)this.allCourse[t].school_year_id==this.school_year_id&&this.allCourse[t].semester_id==this.semester_id&&e.push(this.allCourse[t]);this.allCoursesData=e},CheckBackgroundPath:function(e){if(null!=e)return e.includes("https://orangestr.sgp1.cdn.digitaloceanspaces.com")?e:"../images/"+e}}),mounted:function(){this.fetchCourses(),this.fetchAllSchoolyear_semester()}};var n=s(72446),c=s.n(n),u=s(85265),d={insert:"head",singleton:!1};c()(u.Z,d);u.Z.locals;const v=(0,s(51900).Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-overlay",{attrs:{value:e.isLeaving}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),e._v(" "),s("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:e.Archivedialog,callback:function(t){e.Archivedialog=t},expression:"Archivedialog"}},[e.Archivedialog?s("confirmArchiveCourse",{attrs:{ArchiveDetails:e.ArchiveDetails},on:{toggleCancelDialog:function(t){e.Archivedialog=!e.Archivedialog},toggleconfirm:function(t){return e.archiveCourse()}}}):e._e()],1),e._v(" "),0==e.coursesLength?s("v-row",{staticClass:"pt-10",attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8",md:"4"}},[s("v-icon",{staticStyle:{"font-size":"14rem"}},[e._v("\n                mdi-book-variant-multiple\n            ")]),e._v(" "),s("h1",[e._v(" Create your first Course ")]),e._v(" "),s("p",[e._v(" Creating Course, you'll be able to Create Classes, manage Learning Materials, Create Quiz and\n                Assignment and etc. ")]),e._v(" "),s("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.openAddmodal()}}},[e._v(" CREATE COURSE ")])],1)],1):e._e(),e._v(" "),e.isGetting?s("v-container",{staticStyle:{height:"400px"}},[s("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[s("v-icon",{staticStyle:{"font-size":"14rem"}},[e._v("\n                mdi-google-contacts\n            ")]),e._v(" "),s("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[s("h2",[e._v(" Loading your Courses ")])]),e._v(" "),s("v-col",{attrs:{cols:"6"}},[s("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):e._e(),e._v(" "),s("v-dialog",{attrs:{width:"400px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("vue-element-loading",{attrs:{active:e.isloading,spinner:"bar-fade-scale"}}),e._v(" "),s("v-card-title",{},[e._v("\n                "+e._s("add"==e.modalType?"Create Course":"Edit Course")+"\n            ")]),e._v(" "),s("v-container",[s("v-row",{staticClass:"mx-2"},[s("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{filled:"",color:"primary",label:"Course Code"},model:{value:e.form.course_code,callback:function(t){e.$set(e.form,"course_code",t)},expression:"form.course_code"}})],1),e._v(" "),s("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{filled:"",color:"primary",label:"Course Name"},model:{value:e.form.course_name,callback:function(t){e.$set(e.form,"course_name",t)},expression:"form.course_name"}})],1)],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),e._v(" "),s("v-btn",{attrs:{text:"",disabled:e.isloading,color:"primary"},on:{click:function(t){"add"==e.modalType?e.createCourse():e.updateCourse()}}},[e._v("\n                    "+e._s(e.isloading?"Saving...":"Save"))])],1)],1)],1),e._v(" "),0!=e.coursesLength&&0==e.isGetting?s("div",[s("v-btn",{attrs:{bottom:"",color:"primary",dark:"",fab:"",fixed:"",right:""},on:{click:function(t){return e.openAddmodal()}}},[s("v-icon",[e._v("mdi-plus")])],1),e._v(" "),s("v-row",{staticStyle:{"margin-bottom":"-40px"}},[s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12",md:"12",lg:"8"}},[s("h2",[e._v("My Courses")])]),e._v(" "),s("v-col",{staticClass:"text-right",attrs:{lg:"2"}},[s("v-select",{staticClass:"mr-2 my-0",attrs:{dense:"",items:e.school_year,"item-text":"schoolyear","item-value":"id",label:"School Year",outlined:"",small:""},on:{change:function(t){return e.schoolYearFilter()}},model:{value:e.school_year_id,callback:function(t){e.school_year_id=t},expression:"school_year_id"}})],1),e._v(" "),s("v-col",{staticClass:"text-right",attrs:{lg:"2"}},[s("v-select",{staticClass:"mr-2 my-0",attrs:{dense:"",items:e.semester,"item-text":"semester","item-value":"id",label:"Semester",outlined:"",small:"",disabled:0==e.school_year_id},on:{change:function(t){return e.semesterFilter()}},model:{value:e.semester_id,callback:function(t){e.semester_id=t},expression:"semester_id"}})],1)],1),e._v(" "),s("v-row",{staticClass:"mt-3"},e._l(e.allCoursesData,(function(t,i){return s("v-col",{key:"course"+i,attrs:{cols:"12",xl:"3",lg:"3",md:"6"}},[s("div",{staticClass:"card-expansion"},[s("v-card",{staticClass:"mx-auto"},[s("v-img",{staticClass:"white--text grey lighten-2",attrs:{src:e.CheckBackgroundPath(t.course_picture),height:"200px",link:"",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[s("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[s("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[s("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,r=t.attrs;return[s("v-btn",e._g(e._b({staticClass:"float-right",attrs:{icon:"",color:"white"}},"v-btn",r,!1),i),[s("v-icon",[e._v("\n                                                mdi-dots-vertical\n                                            ")])],1)]}}],null,!0)},[e._v(" "),s("v-list",[s("v-list-item",{attrs:{link:"",to:{name:"settings",params:{id:t.id}}}},[s("v-list-item-title",[e._v("Edit")])],1),e._v(" "),s("v-list-item",{attrs:{link:""},on:{click:function(s){return e.archiveConfirm(t.course_name,t.id)}}},[s("v-list-item-title",[e._v("Archive")])],1),e._v(" "),0==t.student_count?s("v-list-item",{attrs:{link:""}},[s("v-list-item-title",[e._v("Delete")])],1):e._e()],1)],1),e._v(" "),s("v-spacer")],1),e._v(" "),s("v-hover",{scopedSlots:e._u([{key:"default",fn:function(i){var r=i.hover;return[s("v-card-subtitle",{staticClass:"mt-0 pt-0 pl-0 ml-0"},[s("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"coursePage",params:{id:t.id}}}},[s("v-list",{staticClass:"ml-0 pl-0"},[s("v-list-item",{class:r?"blue--text":"primary--text"},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"primary--text"},[s("p",{staticClass:"mb-0 pb-0 mb-2",style:e.$vuetify.breakpoint.lgAndUp?"font-size: 16px;text-overflow: ellipsis;overflow: hidden; ":"font-size: 14px;text-overflow: ellipsis;overflow: hidden; "},[e._v(e._s(t.course_code)+"\n                                                    "),s("br"),e._v(" "),s("span",{staticStyle:{"text-overflow":"ellipsis",overflow:"hidden"}},[e._v(e._s(t.course_name))])])])],1)],1)],1)],1),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"pl-4"},[e._v("\n                                    "+e._s(t.student_count+" students")+" "),s("br"),e._v("\n                                    "+e._s(t.class_count+" class")+"\n                                ")])],1)]}}],null,!0)})],1)],1)])})),1)],1):e._e()],1)}),[],!1,null,"12212580",null).exports}}]);