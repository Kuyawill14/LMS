"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4938],{59222:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c={data:function(){return{e1:1,classInfo:null,form:{id:"",course_name:"",course_id:"",class_description:"",course_picture:"",course_code:""}}},components:{gradingCriteria:function(){return n.e(9747).then(n.bind(n,99747))},courseDetailsComponent:function(){return n.e(6945).then(n.bind(n,46945))},classComponent:function(){return n.e(3264).then(n.bind(n,93264))}},methods:o(o({},(0,n(20629).nv)(["fetchScourse"])),{},{updateCourseDetails:function(){this.$store.dispatch("updateCourse",this.getcourseInfo)},step:function(e){this.e1=e},beforeWindowUnload:function(e){localStorage.setItem("step",this.e1)}}),mounted:function(){var e=localStorage.getItem("step");null!=e&&(this.e1=e)},beforeMount:function(){window.addEventListener("beforeunload",this.beforeWindowUnload)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.beforeWindowUnload),localStorage.removeItem("step")}};const i=(0,n(51900).Z)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"pa-0":""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",lg:"11"}},[n("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("\n                        Course Details\n                    ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v("\n                        Grading Criteria\n                    ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-stepper-step",{attrs:{step:"3"}},[e._v("\n                        Create Class\n                    ")])],1),e._v(" "),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[1==e.e1?n("courseDetailsComponent",{on:{changeStep:e.step}}):e._e()],1),e._v(" "),n("v-stepper-content",{attrs:{step:"2"}},[2==e.e1?n("gradingCriteria",{on:{changeStep:e.step}}):e._e()],1),e._v(" "),n("v-stepper-content",{attrs:{step:"3"}},[3==e.e1?n("classComponent",{on:{changeStep:e.step}}):e._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);