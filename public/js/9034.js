(self.webpackChunk=self.webpackChunk||[]).push([[9034],{9034:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>a});const n={props:["role","UserDetails","getcourseInfo"],components:{studentList:function(){return e.e(8996).then(e.bind(e,8996))},instructorList:function(){return e.e(1382).then(e.bind(e,1382))}},data:function(){return{tab:null,imageFile:"",Details:null,loading:!1,isloading:!0,message:null,type:null}},methods:{},mounted:function(){this.isloading=!this.isloading}};const a=(0,e(1900).Z)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",{attrs:{fluid:""}},[t.isloading?e("v-container",{staticStyle:{height:"400px"}},[e("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[e("v-icon",{staticStyle:{"font-size":"10rem"}},[t._v("\n                mdi-account\n            ")]),t._v(" "),e("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[e("h3",[t._v(" Loading Profile ")])]),t._v(" "),e("v-col",{attrs:{cols:"6"}},[e("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):t._e(),t._v(" "),t.isloading?t._e():e("v-row",[e("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[e("v-row",[e("v-col",{staticClass:"pl-3",attrs:{cols:"12"}},[e("v-tabs",{staticClass:"mt-2",model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[e("v-tab",{staticClass:"d-flex justify-start font-weight-bold"},[t._v("\n                            Student\n                        ")]),t._v(" "),e("v-tab",{staticClass:"d-flex justify-start font-weight-bold"},[t._v("\n                            Instructor\n                        ")])],1)],1)],1)],1),t._v(" "),e("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-tabs-items",{attrs:{value:t.tab}},[e("v-tab-item",[e("studentList",{attrs:{getcourseInfo:t.getcourseInfo,role:t.role}})],1),t._v(" "),e("v-tab-item",[e("instructorList",{attrs:{getcourseInfo:t.getcourseInfo,UserDetails:t.UserDetails}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);