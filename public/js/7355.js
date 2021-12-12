"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7355],{7355:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var r=s(87757),n=s.n(r);function a(t,e,s,r,n,a,i){try{var o=t[a](i),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(r,n)}function i(t){return function(){var e=this,s=arguments;return new Promise((function(r,n){var i=t.apply(e,s);function o(t){a(i,r,n,o,l,"next",t)}function l(t){a(i,r,n,o,l,"throw",t)}o(void 0)}))}}const o={props:["role","UserDetails"],components:{confirmRestore:function(){return s.e(1458).then(s.bind(s,21458))}},data:function(){return{tab:null,imageFile:"",Details:null,loading:!1,isloading:!0,message:null,type:null,ArchiveClasses:[],restoreDialog:!1,restoreDetails:{}}},methods:{restoreClass:function(){var t=this;return i(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.put("/api/archive/student-restore-class/"+t.restoreDetails.id).then((function(){t.ArchiveClasses.splice(t.restoreDetails.index,1),t.restoreDialog=!1}));case 2:case"end":return e.stop()}}),e)})))()},fetchClass:function(){var t=this;return i(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isGetting=!0,e.next=3,axios.get("/api/archive/classes").then((function(e){t.ArchiveClasses=e.data,t.classLength=e.data.length,t.isloading=!1}));case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchClass()}};const l=(0,s(51900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Archive Courses")]),t._v(" "),t.isloading?s("v-row",t._l(4,(function(e){return s("v-col",{key:e,attrs:{height:t.$vuetify.breakpoint.lgAndUp?200:140,cols:"12",xl:"3",lg:"3",md:"6"}},[s("v-skeleton-loader",{attrs:{type:"image, article"}})],1)})),1):s("v-row",{staticClass:"mt-1"},t._l(t.ArchiveClasses,(function(e,r){return s("v-col",{key:"class"+r,attrs:{lg:"3",md:"6"}},[s("div",{staticClass:"card-expansion"},[s("v-card",{staticClass:"mx-auto"},[s("v-img",{staticClass:"white--text align-end",attrs:{src:"../images/"+e.course_picture,height:"200px",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[s("v-card-subtitle",[s("v-progress-linear",{staticClass:"rounded-sm",attrs:{value:e.progress,height:"6"}}),t._v(" "),s("span",{staticClass:"text-caption float-right white--text"},[t._v(" "+t._s(parseFloat(e.progress.toFixed(2)))+"%\n                            ")]),t._v(" "),s("span",{staticClass:"text-caption white--text"},[t._v(" Completed ")])],1)],1),t._v(" "),s("v-card-subtitle",[s("div",{staticClass:"primary--text",staticStyle:{"text-decoration":"none"}},[s("p",{staticStyle:{"font-size":"16px"}},[t._v(t._s(e.course_code)+" \n                            "),s("br"),t._v(" "+t._s(e.course_name)+"\n                            ")])]),t._v(" "),s("hr"),t._v("\n                            "+t._s(e.class_name)+" "),s("br"),t._v("\n                        Class code:"+t._s(e.class_code)+" \n                    ")]),t._v(" "),s("v-card-subtitle",{staticClass:"mt-0 pt-0"},[s("div",[s("v-btn",{attrs:{color:"secondary"},on:{click:function(s){t.restoreDetails.id=e.useClass_id,t.restoreDetails.index=r,t.restoreDialog=!0}}},[t._v("\n                                Restore\n                            ")])],1)])],1)],1)])})),1),t._v(" "),s("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.restoreDialog,callback:function(e){t.restoreDialog=e},expression:"restoreDialog"}},[t.restoreDialog?s("confirmRestore",{on:{toggleCancelDialog:function(e){t.restoreDialog=!1},toggleconfirm:function(e){return t.restoreClass()}}}):t._e()],1)],1)}),[],!1,null,null,null).exports}}]);