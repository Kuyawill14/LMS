"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4415],{60712:(t,e,s)=>{s.d(e,{Z:()=>n});var i=s(1519),a=s.n(i)()((function(t){return t[1]}));a.push([t.id,".centered[data-v-27c3547e]{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%)}",""]);const n=a},24415:(t,e,s)=>{s.r(e),s.d(e,{default:()=>v});var i=s(87757),a=s.n(i);function n(t,e,s,i,a,n,r){try{var o=t[n](r),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(i,a)}function r(t){return function(){var e=this,s=arguments;return new Promise((function(i,a){var r=t.apply(e,s);function o(t){n(r,i,a,o,c,"next",t)}function c(t){n(r,i,a,o,c,"throw",t)}o(void 0)}))}}const o={props:["classworkDetails","List","class_id"],components:{objectiveSubmission:function(){return s.e(6596).then(s.bind(s,56596))},subjectiveSubmission:function(){return s.e(4553).then(s.bind(s,84553))}},data:function(){return{isloading:!0,Graded:0,Submitted:0,ClassList:[],isLeaving:!1}},watch:{class_id:function(t,e){this.class_id=t}},methods:{GetList:function(){var t=this;return r(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isloading=!t.isloading;case 1:case"end":return e.stop()}}),e)})))()},GetListAfterEmit:function(){var t=this;return r(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.Graded+=1;case 1:case"end":return e.stop()}}),e)})))()},FetchCLassNames:function(){var t=this;return r(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/class/allnames/"+t.$route.params.id+"/0").then((function(e){t.ClassList=e.data,t.ClassList.push({class_id:t.$route.params.id,class_name:"All Class",id:t.$route.params.id})}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.GetList(),this.FetchCLassNames()},beforeRouteLeave:function(t,e,s){this.isLeaving=!0,s()}};var c=s(72446),l=s.n(c),u=s(60712),d={insert:"head",singleton:!1};l()(u.Z,d);u.Z.locals;const v=(0,s(51900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-1"},[s("div",{attrs:{transition:"slide-y-reverse-transition"}},[t.$vuetify.breakpoint.mdAndUp?t._e():s("v-app-bar",{attrs:{elevation:"5",app:"",dense:t.$vuetify.breakpoint.mdAndUp,color:"primary"}},[t.$vuetify.breakpoint.mdAndUp?t._e():s("v-btn",{attrs:{dark:"",rounded:"",icon:"",text:""},on:{click:function(e){return t.$router.push({name:"classwork"})}}},[s("v-icon",[t._v("mdi-arrow-left-thick")])],1),t._v(" "),s("v-divider",{attrs:{vertical:""}})],1)],1),t._v(" "),s("v-overlay",{attrs:{value:t.isLeaving}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),t.isloading?s("v-container",{staticClass:"fill-height",staticStyle:{height:"570px"}},[s("v-row",{attrs:{"align-content":"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("vue-element-loading",{attrs:{active:t.isloading,text:"Loading",duration:"0.7",textStyle:{fontSize:"20px"},spinner:"line-scale",color:"#EF6C00",size:"60"}})],1)],1)],1):t._e(),t._v(" "),0!=t.List.length||t.isloading?t._e():s("v-row",{staticClass:"centered",style:t.$vuetify.breakpoint.mdAndUp?"":"width:330px !important",attrs:{justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("v-icon",{staticStyle:{"font-size":"10rem"}},[t._v("\r\n            mdi-notebook-check-outline\r\n        ")]),t._v(" "),t.$vuetify.breakpoint.mdAndUp?s("h1",[t._v(" Empty Submission ")]):s("h2",[t._v(" Empty Submission ")]),t._v(" "),s("p",[t._v(" Your classwork is not publish to any class yet!")]),t._v(" "),s("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$router.push({name:"publish-to",query:{clwk:t.$route.query.clwk}})}}},[t._v(" Publish classwork ")])],1)],1),t._v(" "),t.isloading||0==t.List.length?t._e():s("div",[s("v-row",{attrs:{align:"center",justify:"center"}},["Objective Type"==t.classworkDetails.type?s("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},["Objective Type"==t.classworkDetails.type?s("objectiveSubmission",{attrs:{class_id:t.class_id,ClassList:t.ClassList,Submitted:t.Submitted,Graded:t.Graded,classworkDetails:t.classworkDetails,ListData:t.List}}):t._e()],1):t._e(),t._v(" "),"Subjective Type"==t.classworkDetails.type?s("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},["Subjective Type"==t.classworkDetails.type?s("subjectiveSubmission",{attrs:{class_id:t.class_id,ClassList:t.ClassList,Submitted:t.Submitted,Graded:t.Graded,classworkDetails:t.classworkDetails,ListData:t.List},on:{UpdateSubmission:t.GetListAfterEmit}}):t._e()],1):t._e()],1)],1)],1)}),[],!1,null,"27c3547e",null).exports}}]);