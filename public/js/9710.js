(self.webpackChunk=self.webpackChunk||[]).push([[9710],{6779:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(3645),r=s.n(i)()((function(t){return t[1]}));r.push([t.id,".card-group-row__col .fullbleed[data-v-2e2d1d61]{transition:all .4s ease-in-out!important}.card-group-row__col:hover .fullbleed[data-v-2e2d1d61]{opacity:.4!important;transition:all .4s ease-in-out}.md-card[data-v-2e2d1d61]{width:320px;margin:4px;display:inline-block;vertical-align:top}",""]);const n=r},9710:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});var i=s(7757),r=s.n(i);function n(t,e,s,i,r,n,o){try{var a=t[n](o),c=a.value}catch(t){return void s(t)}a.done?e(c):Promise.resolve(c).then(i,r)}const o={components:{},data:function(){return{coursesLength:null,isGetting:!1,dialog:!1,isloading:!0,modalType:"",isPageLoading:!1,class_code:null,form:{id:"",course_name:"",course_id:"",class_description:"",course_picture:"",course_code:""},Archivedialog:!1,ArchiveDetails:{},ArchiveCourses:[]}},methods:{toastSuccess:function(t,e){return this.$toasted.success(t,{theme:"toasted-primary",position:"top-center",icon:"done",duration:5e3})},archiveConfirm:function(t,e){this.ArchiveDetails.course_id=e,this.ArchiveDetails.name=t,this.Archivedialog=!this.Archivedialog},restoreArchive:function(t){var e,s=this;return(e=r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.put("/api/archive/restore/"+t).then((function(t){s.fetchCourses()}));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(i,r){var o=e.apply(t,s);function a(t){n(o,i,r,a,c,"next",t)}function c(t){n(o,i,r,a,c,"throw",t)}a(void 0)}))})()},fetchCourses:function(){var t=this;this.isGetting=!0,axios.get("/api/archive/courses").then((function(e){t.ArchiveCourses=e.data,t.coursesLength=e.data.length,t.isGetting=!1}))}},mounted:function(){this.fetchCourses()}};s(9738);const a=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0==t.coursesLength?s("v-row",{staticClass:"pt-10",attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8",md:"4"}},[s("v-icon",{staticStyle:{"font-size":"8rem"}},[t._v("\n                mdi-contacts\n            ")]),t._v(" "),s("h2",[t._v(" Empty Archive Courses ")])],1)],1):t._e(),t._v(" "),t.isGetting?s("v-container",{staticStyle:{height:"400px"}},[s("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[s("v-icon",{staticStyle:{"font-size":"14rem"}},[t._v("\n                mdi-google-contacts\n            ")]),t._v(" "),s("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[s("h2",[t._v(" Loading your Courses ")])]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[s("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):t._e(),t._v(" "),0!=t.coursesLength&&0==t.isGetting?s("div",{staticClass:"pa-1"},[s("v-row",{staticClass:"mt-3"},t._l(t.ArchiveCourses,(function(e,i){return s("v-col",{key:"course"+i,attrs:{lg:"3",md:"6"}},[s("div",{staticClass:"card-expansion"},[s("v-card",{staticClass:"mx-auto"},[s("v-img",{attrs:{src:"../images/"+e.course_picture,height:"200px"}},[s("v-spacer"),t._v(" "),s("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"float-right",attrs:{icon:"",color:"white"}},"v-btn",r,!1),i),[s("v-icon",[t._v("\n                                            mdi-dots-vertical\n                                        ")])],1)]}}],null,!0)},[t._v(" "),s("v-list",[s("v-list-item",{attrs:{link:""},on:{click:function(s){return t.restoreArchive(e.id)}}},[s("v-list-item-title",[t._v("Restore")])],1),t._v(" "),s("v-list-item",{attrs:{link:""}},[s("v-list-item-title",[t._v("Delete")])],1)],1)],1)],1),t._v(" "),s("v-card-subtitle",[s("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"coursePage",params:{id:e.id}}}},[s("p",{staticStyle:{"font-size":"16px"}},[t._v(t._s(e.course_code)+" \n                                "),s("br"),t._v(" "+t._s(e.course_name)+"\n                                ")])]),t._v(" "),s("hr"),t._v("\n                              "+t._s(e.student_count+" students")+" "),s("br"),t._v("\n                            "+t._s(e.class_count+" class")+"\n                        ")],1)],1)],1)])})),1)],1):t._e()],1)}),[],!1,null,"2e2d1d61",null).exports},9738:(t,e,s)=>{var i=s(6779);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,s(5346).Z)("799dfaca",i,!0,{})}}]);