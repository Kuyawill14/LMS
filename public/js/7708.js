"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7708],{13783:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(1519),s=r.n(n)()((function(t){return t[1]}));s.push([t.id,".chart[data-v-3efcb199]{height:355px}",""]);const o=s},5478:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(1519),s=r.n(n)()((function(t){return t[1]}));s.push([t.id,".v-dialog--active{overflow-x:hidden}",""]);const o=s},7708:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var n=r(20629);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const c={props:["role"],components:{myCalendar:function(){return r.e(6453).then(r.bind(r,36453))},progressChart:function(){return r.e(4264).then(r.bind(r,34264))},teacherCourses:function(){return r.e(1510).then(r.bind(r,51510))}},data:function(){return{class_count:0,student_count:0,calendarDialog:!1}},computed:(0,n.Se)(["allCourse"]),methods:o(o({},(0,n.nv)(["fetchCourseList"])),{},{classCount:function(){var t=this;this.allCourse.forEach((function(e){t.student_count+=e.student_count,t.class_count+=e.class_count}))}}),mounted:function(){var t=this;this.fetchCourseList().then((function(){t.classCount()}))}};var l=r(72446),i=r.n(l),u=r(13783),v={insert:"head",singleton:!1};i()(u.Z,v);u.Z.locals;var d=r(5478),f={insert:"head",singleton:!1};i()(d.Z,f);d.Z.locals;const h=(0,r(51900).Z)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-col",[r("h2",[t._v("Dashboard")])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-row",[r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"4"}},[r("v-card",[r("div",{staticClass:"text-center",staticStyle:{"font-size":"3rem",color:"#FF5400"}},[t._v("\n                            "+t._s(t.allCourse.length)+"\n                        ")]),t._v(" "),r("div",{staticClass:"text-center"},[t._v("\n                            Total Courses\n                        ")])])],1),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"4"}},[r("v-card",[r("div",{staticClass:"text-center",staticStyle:{"font-size":"3rem",color:"#FF5400"}},[t._v("\n                            "+t._s(t.class_count)+"\n                        ")]),t._v(" "),r("div",{staticClass:"text-center"},[t._v("\n                            Total Classes\n                        ")])])],1),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"4"}},[r("v-card",[r("div",{staticClass:"text-center",staticStyle:{"font-size":"3rem",color:"#FF5400"}},[t._v("\n                            "+t._s(t.student_count)+"\n                        ")]),t._v(" "),r("div",{staticClass:"text-center"},[t._v("\n                            My Total Student\n                        ")])])],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("progressChart",{attrs:{allCourse:t.allCourse}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-card",{on:{click:function(e){t.calendarDialog=!0}}},[r("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"1000px",id:"calendar_modal"},model:{value:t.calendarDialog,callback:function(e){t.calendarDialog=e},expression:"calendarDialog"}},[r("v-card",{staticClass:"pt-3"},[r("myCalendar",{attrs:{role:t.role}}),t._v(" "),r("br")],1)],1),t._v(" "),r("myCalendar",{attrs:{role:t.role}})],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"12"},[r("teacherCourses")],1)],1)],1)],1)],1)}),[],!1,null,"3efcb199",null).exports}}]);