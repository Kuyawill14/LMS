"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9398],{9398:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var o=s(629);function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){l(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const n={data:function(){return{el:2,isUpdating:!1,courseDetails:[],school_year:[],semester:[],departmentsList:[],isInvalidFileType:!1,isInvalidFileSize:!1,isFileSize:null,uploadPercentage:0,isDeleting:!1}},computed:(0,o.Se)(["getcourseInfo"]),methods:r(r({},(0,o.nv)(["fetchScourse"])),{},{getFileName:function(e){var t=e.split("/");return t[t.length-1]},getFileExt:function(e){var t=e.split(".");return t[t.length-1]},onFileChange:function(e){console.log("selected file",e),null!=e&&(this.ext=this.getFileExt(e.name),console.log(this.ext),this.isInvalidFileSize=!1,this.isInvalidFileType=!1,e.size>=1e7&&(this.isInvalidFileSize=!0,this.$refs.inputFile.value=null,this.toastError("File size must be less than 10MB")),"pdf"==this.ext||"docx"==this.ext||"doc"==this.ext||"pptx"==this.ext||"ppt"==this.ext||(this.isInvalidFileType=!0,this.toastError("Invalid File Type, (.pdf , .doc and  .docx  are allowed)"),this.$refs.inputFile.value=null)),this.file=e},removeFile:function(){var e=this;this.isDeleting=!0,axios.put("/api/course/file-remove/"+this.$route.params.id,{course_guide:this.getcourseInfo.course_guide}).then((function(t){e.oldFileInput=!1,console.log(t),e.isDeleting=!1,e.isRemove=!0,e.getcourseInfo.course_guide=null})).catch((function(t){e.toastError("Something went wrong")}))},fetchAllSchoolyear_semester:function(){var e=this;axios.get("/api/admin/schoolyears_semesters/all").then((function(t){e.school_year=t.data.school_year,e.semester=t.data.semester}))},updateCourseDetails:function(){var e=this;if(""==this.getcourseInfo.course_description.trim()||""==this.getcourseInfo.course_name||""==this.course_code||void 0===this.getcourseInfo.semester_id||void 0===this.getcourseInfo.school_year_id)this.toastError("Please complete all the field to proceed to the next step");else{var t=new FormData;t.append("file",this.file),t.append("courseItem",JSON.stringify(this.getcourseInfo)),this.isUpdating=!0,axios.post("/api/course/update/".concat(this.$route.params.id),t,{onUploadProgress:function(t){var s=t.total,o=t.lengthComputable?s:null;null!=o&&null!=e.$refs.inputFile&&(e.uploadPercentage=Math.round(100*t.loaded/o))}}).then((function(t){e.getcourseInfo.course_guide=t.data.course_guide,null!=e.$refs.inputFile&&e.$refs.inputFile.reset(),e.isUpdating=!1,e.$emit("changeStep",e.el)})).catch((function(t){e.toastError("Something went wrong!"),e.isUpdating=!1}))}},fetchDeparmentList:function(){var e=this;axios.get("/api/admin/department/all").then((function(t){e.departmentsList=t.data}))}}),mounted:function(){this.fetchAllSchoolyear_semester(),this.fetchDeparmentList()}};const a=(0,s(1900).Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{outlined:"",color:"primary",label:"Course Code"},model:{value:e.getcourseInfo.course_code,callback:function(t){e.$set(e.getcourseInfo,"course_code",t)},expression:"getcourseInfo.course_code"}})],1),e._v(" "),s("v-col",{staticClass:"pa-0 ",attrs:{cols:"12"}},[s("v-text-field",{attrs:{outlined:"",color:"primary",label:"Course Title"},model:{value:e.getcourseInfo.course_name,callback:function(t){e.$set(e.getcourseInfo,"course_name",t)},expression:"getcourseInfo.course_name"}})],1),e._v(" "),s("v-col",{staticClass:"pa-0 ",attrs:{cols:"12"}},[s("small",{staticClass:"text-caption"},[e._v("Generate google meet here: "),s("a",{attrs:{href:"https://meet.google.com/",target:"_blank"}},[e._v("meet.google.com ")])]),e._v(" "),s("v-text-field",{attrs:{outlined:"",color:"primary",label:"Video Conference Link"},model:{value:e.getcourseInfo.v_classroom_link,callback:function(t){e.$set(e.getcourseInfo,"v_classroom_link",t)},expression:"getcourseInfo.v_classroom_link"}})],1),e._v(" "),s("v-col",{staticClass:"pa-0 ",attrs:{cols:"12"}},[s("v-select",{staticClass:"mr-2",attrs:{items:e.school_year,"item-text":"schoolyear","item-value":"id",label:"School Year",outlined:""},model:{value:e.getcourseInfo.school_year_id,callback:function(t){e.$set(e.getcourseInfo,"school_year_id",t)},expression:"getcourseInfo.school_year_id"}})],1),e._v(" "),s("v-col",{staticClass:"pa-0 ",attrs:{cols:"12"}},[s("v-select",{staticClass:"mr-2",attrs:{items:e.semester,"item-text":"semester","item-value":"id",label:"Semester",outlined:""},model:{value:e.getcourseInfo.semester_id,callback:function(t){e.$set(e.getcourseInfo,"semester_id",t)},expression:"getcourseInfo.semester_id"}})],1),e._v(" "),null==e.getcourseInfo.course_guide?s("v-col",{staticClass:"pa-0 ",attrs:{cols:"12"}},[s("v-file-input",{ref:"inputFile",attrs:{"show-size":"",outlined:"",label:"Course Guide","prepend-inner-icon":"mdi-file","prepend-icon":""},on:{change:e.onFileChange}})],1):e._e(),e._v(" "),s("v-col",{attrs:{cols:"12 py-0 my-0"}},[0!=e.uploadPercentage?s("v-progress-linear",{attrs:{rounded:"",value:e.uploadPercentage,height:"14px"}},[s("span",{staticStyle:{color:"#fff"}},[e._v(e._s(e.uploadPercentage+"%")+" ")])]):e._e()],1),e._v(" "),null!=e.getcourseInfo.course_guide?s("v-row",{staticClass:"mb-5",staticStyle:{height:"55px",border:"1px solid","border-radius":"4px",width:"100%",margin:"auto"},attrs:{align:"center",justify:"center"}},[s("vue-element-loading",{attrs:{active:e.isDeleting,spinner:"bar-fade-scale"}}),e._v(" "),s("v-col",{staticClass:"grow text-left py-0 pr-0 col-1"},[s("v-icon",[e._v("mdi-file")])],1),e._v(" "),s("v-col",{staticStyle:{"margin-left":"-40px"}},[s("div",{staticClass:"text-decoration-underline':''"},[e._v(" "+e._s(e.getFileName(e.getcourseInfo.course_guide)))])]),e._v(" "),s("v-col",{staticClass:"shrink d-flex py-0 shrink d-flex"},[s("div",{staticClass:"black--text mt-1 mr-2"}),e._v(" "),s("div",{staticClass:"py-0"},[s("v-btn",{attrs:{rounded:"",small:"",icon:"",text:""},on:{click:function(t){return e.removeFile()}}},[s("v-icon",[e._v("mdi-close")])],1)],1)])],1):e._e(),e._v(" "),s("v-col",{staticClass:"pa-0 mx-0",attrs:{cols:"12"}},[s("v-card",[s("v-card-title",{staticClass:"pl-3 py-3",staticStyle:{"font-size":"1rem",color:"grey"}},[e._v("Course Description\n            ")]),e._v(" "),s("v-divider"),e._v(" "),s("editor",{attrs:{theme:"snow"},model:{value:e.getcourseInfo.course_description,callback:function(t){e.$set(e.getcourseInfo,"course_description",t)},expression:"getcourseInfo.course_description"}})],1)],1),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("v-divider"),e._v(" "),s("br"),e._v(" "),s("v-row",[s("v-col",[s("v-btn",{staticClass:"float-right",attrs:{color:"primary",disabled:e.isUpdating},on:{click:function(t){return e.updateCourseDetails()}}},[e._v("\n                "+e._s(e.isUpdating?"Saving..":"Next")+"\n            ")])],1)],1)],1)}),[],!1,null,null,null).exports}}]);