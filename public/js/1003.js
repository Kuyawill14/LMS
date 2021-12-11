"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1003],{67607:(t,e,s)=>{s.d(e,{Z:()=>o});var n=s(1519),a=s.n(n)()((function(t){return t[1]}));a.push([t.id,".dp-menu[data-v-7b0dfb24]:hover{background:#f6f6f6}.row[data-v-7b0dfb24]{align-items:center}.card-group-row__col .fullbleed[data-v-7b0dfb24]{transition:all .4s ease-in-out!important}.card-group-row__col:hover .fullbleed[data-v-7b0dfb24]{opacity:.4!important;transition:all .4s ease-in-out}#gedf-drop1[data-v-7b0dfb24]:hover{color:#efbb20!important}#gedf-drop1[data-v-7b0dfb24]{color:#000}.clas_icon[data-v-7b0dfb24]{font-size:80px}",""]);const o=a},41003:(t,e,s)=>{s.r(e),s.d(e,{default:()=>_});var n=s(87757),a=s.n(n),o=s(20629);function i(t,e,s,n,a,o,i){try{var l=t[o](i),r=l.value}catch(t){return void s(t)}l.done?e(r):Promise.resolve(r).then(n,a)}function l(t){return function(){var e=this,s=arguments;return new Promise((function(n,a){var o=t.apply(e,s);function l(t){i(o,n,a,l,r,"next",t)}function r(t){i(o,n,a,l,r,"throw",t)}l(void 0)}))}}function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){d(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function d(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const u={components:{createClassForm:function(){return s.e(9220).then(s.bind(s,19220))},editClassForm:function(){return s.e(5517).then(s.bind(s,15517))},archiveClass:function(){return s.e(1439).then(s.bind(s,71439))},deleteClass:function(){return s.e(8991).then(s.bind(s,38991))}},data:function(){return{isGetting:!1,showModal:!1,isloading:!0,modalType:"",class_code:null,classLength:null,form:{id:"",class_name:"",course_id:null},ArchiveDetails:null,removeIndex:null,copied:!1,items:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],start_time:null,end_time:null,menu:!1,menu1:!1,addScheduleDialog:!1,day:null,class_details:[],removeDetails:{},removeDialog:!1}},methods:c(c({},(0,o.nv)(["fetchSubjectCourseClassList"])),{},{closeModal:function(){this.fetchSubjectCourseClassList(this.$route.params.id),this.showModal=!1},openAddmodal:function(){this.form.class_name="",this.modalType="add",this.showModal=!0},openEditmodal:function(t,e,s){this.showModal=!0,this.modalType="edit",this.form.class_id=s,this.form.class_name=e,this.class_details=t},getTeacherClasses:function(){var t=this;return l(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isGetting=!0,t.fetchSubjectCourseClassList(t.$route.params.id).then((function(){t.isGetting=!1,t.classLength=t.allClass.length}));case 2:case"end":return e.stop()}}),e)})))()},archiveClass:function(t,e){var s=this;return l(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.removeIndex=e,s.ArchiveDetails=t,s.showModal=!0,s.modalType="archive";case 4:case"end":return n.stop()}}),n)})))()},SuccessArchive:function(){var t=this;return l(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.showModal=!1,t.allClass.splice(t.removeIndex,1);case 2:case"end":return e.stop()}}),e)})))()},CopyClassCode:function(t){var e=this;return l(a().mark((function s(){var n;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:n=t,navigator.clipboard.writeText(n),e.toastNormal("Class code copied");case 3:case"end":return s.stop()}}),s)})))()},removeClass:function(){var t=this;return l(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=t.removeDetails.student_count){e.next=3;break}return e.next=3,axios.delete("/api/class/delete/"+t.removeDetails.class_id).then((function(){t.allClass.splice(t.removeDetails.index,1),t.removeDialog=!1}));case 3:case"end":return e.stop()}}),e)})))()}}),computed:(0,o.Se)(["allClass"]),mounted:function(){this.getTeacherClasses()}};var v=s(72446),m=s.n(v),f=s(67607),p={insert:"head",singleton:!1};m()(f.Z,p);f.Z.locals;const _=(0,s(51900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pt-1"},[0==t.classLength?s("v-row",{staticClass:"pt-10",attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8",md:"4"}},[s("v-icon",{staticStyle:{"font-size":"10rem"}},[t._v("\n                mdi-google-classroom\n            ")]),t._v(" "),s("h1",[t._v(" Empty Class ")]),t._v(" "),s("p",[t._v(" Creating Class, you'll be able to share class code to your students and let them join. ")]),t._v(" "),s("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.openAddmodal()}}},[t._v(" CREATE CLASS ")])],1)],1):t._e(),t._v(" "),t.isGetting?s("div",[s("v-row",t._l(3,(function(e){return s("v-col",{key:e,attrs:{cols:"12"}},[s("v-card",[s("v-list",[s("v-list-item",[s("v-list-item-avatar",[s("v-skeleton-loader",{staticClass:"mx-auto",attrs:{tile:"",type:"avatar"}})],1),t._v(" "),s("v-list-item-content",[s("v-skeleton-loader",{attrs:{"max-width":"500",tile:"",type:"list-item-three-line"}})],1)],1)],1)],1)],1)})),1)],1):t._e(),t._v(" "),s("v-dialog",{attrs:{width:"400"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},["add"==t.modalType?s("createClassForm",{on:{OpenNewSched:function(e){t.addScheduleDialog=!t.addScheduleDialog},closeModal:function(e){return t.closeModal()},createclass:function(e){t.classLength++}}}):t._e(),t._v(" "),"edit"==t.modalType?s("editClassForm",{attrs:{class_details:t.class_details,class_name:t.form.class_name,class_id:t.form.class_id},on:{closeModal:function(e){return t.closeModal()}}}):t._e(),t._v(" "),"archive"==t.modalType?s("archiveClass",{attrs:{ArchiveDetails:t.ArchiveDetails},on:{toggleconfirm:function(e){return t.SuccessArchive()},toggleCancelDialog:function(e){return t.closeModal()}}}):t._e()],1),t._v(" "),s("v-dialog",{attrs:{width:"400"},model:{value:t.removeDialog,callback:function(e){t.removeDialog=e},expression:"removeDialog"}},[t.removeDialog?s("deleteClass",{on:{toggleCancelDialog:function(e){t.removeDialog=!1},toggleConfirm:function(e){return t.removeClass()}}}):t._e()],1),t._v(" "),!t.isGetting&&t.classLength>0?s("div",[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("h2",[t._v("My Class")])]),t._v(" "),s("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[s("v-btn",{attrs:{color:"rounded primary"},on:{click:function(e){return t.openAddmodal()}}},[t._v("\n                Create Class\n            ")])],1)],1),t._v(" "),t._l(t.allClass,(function(e,n){return s("v-card",{key:n,staticClass:"mt-3"},[s("v-list-item",[s("v-list-item-avatar",[s("v-icon",[t._v("mdi-account-multiple")])],1),t._v(" "),s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[t._v(t._s(e.class_name)+" ")]),t._v(" "),s("v-list-item-subtitle",{staticClass:"mb-0 pb-0"},[s("span",{staticClass:"font-weight-medium"},[t._v("Class code: ")]),t._v(" "+t._s(e.class_code)+"  \n                            "),s("v-tooltip",{attrs:{top:"",small:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on,o=n.attrs;return[s("v-btn",t._g(t._b({attrs:{small:"",icon:""},on:{click:function(s){return t.CopyClassCode(e.class_code)}}},"v-btn",o,!1),a),[s("v-icon",{attrs:{color:"blue",small:""}},[t._v("mdi-content-copy")])],1)]}}],null,!0)},[t._v(" "),s("small",[t._v("Copy class code")])])],1),t._v(" "),0!=e.schedule&&null!=e.schedule?s("v-list-item-subtitle",[s("span",{staticClass:"font-weight-medium"},[t._v("Schedule: ")]),t._v(" "),t._l(e.schedule,(function(e,n){return s("div",{key:n,staticClass:"pl-1"},[s("span",{staticClass:"pr-1"},[t._v("• ")]),t._v("\n                                    "+t._s(e.day+" - "+e.display_start)+" "),s("span",{staticClass:"font-weight-medium"},[t._v("to")]),t._v(" "+t._s(e.display_end))])}))],2):s("v-list-item-subtitle",[s("span",{staticClass:"font-weight-medium"},[t._v("Schedule: ")]),t._v(" N/A\n                            ")]),t._v(" "),s("v-list-item-subtitle",[s("span",{staticClass:"font-weight-medium"},[t._v("Students Enrolled: ")]),t._v(" "+t._s(e.student_count))])],1),t._v(" "),s("v-list-item-action",[s("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[s("v-icon",t._g(t._b({attrs:{color:"secondary "}},"v-icon",a,!1),n),[t._v("mdi-dots-vertical")])]}}],null,!0)},[t._v(" "),s("v-list",{attrs:{nav:""}},[s("v-list-item",{attrs:{link:""},on:{click:function(s){return t.openEditmodal(e,e.class_name,e.class_id)}}},[s("v-list-item-title",[t._v("Edit")])],1),t._v(" "),s("v-list-item",{attrs:{link:""},on:{click:function(s){return t.archiveClass(e,n)}}},[s("v-list-item-title",[t._v("Archive")])],1),t._v(" "),0==e.student_count?s("v-list-item",{attrs:{link:""},on:{click:function(s){t.removeDetails.class_id=e.class_id,t.removeDialog=!0,t.removeDetails.index=n,t.removeDetails.student_count=e.student_count}}},[s("v-list-item-title",[t._v("Remove")])],1):t._e()],1)],1)],1)],1)],1)}))],2):t._e(),t._v(" "),s("v-snackbar",{attrs:{absolute:"",bottom:"",width:t.$vuetify.breakpoint.sm?"100%":"",right:t.$vuetify.breakpoint.lgAndUp,centered:t.$vuetify.breakpoint.sm},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[s("v-btn",t._b({attrs:{color:"pink",text:"",bottom:"",left:""},on:{click:function(e){t.copied=!1}}},"v-btn",n,!1),[s("v-icon",[t._v("mdi-close")])],1)]}}]),model:{value:t.copied,callback:function(e){t.copied=e},expression:"copied"}},[t._v("\n    Class code copied to clipboard\n\n    ")])],1)}),[],!1,null,"7b0dfb24",null).exports}}]);