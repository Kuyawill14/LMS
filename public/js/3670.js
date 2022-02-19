"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3670],{88849:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const a={props:["classworkDetails","totalPoints","totalQuestion"],data:function(){return{activeTab:"",ObjectIveTabs:[{name:"clwk",text:"DETAILS",icon:"mdi-file-cog"},{name:"add-question",text:"QUESTION",icon:"mdi-text-box-plus-outline"},{name:"publish-to",text:"PUBLISH",icon:"mdi-publish"},{name:"submission-list",text:"SUBMISSIONS",icon:"mdi-notebook-check-outline"},{name:"question-analytics",text:"ANALYTICS",icon:"mdi-google-analytics"}],SubjectiveTabs:[{name:"clwk",text:"DETAILS",icon:"mdi-file-cog"},{name:"publish-to",text:"PUBLISH",icon:"mdi-publish"},{name:"submission-list",text:"SUBMISSIONS",icon:"mdi-notebook-check-outline"}],tabs:null}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},(0,i(20629).Se)(["get_Viewing"])),methods:{GotoRoute:function(t){this.$router.push({name:t,query:{clwk:this.$route.query.clwk}})}},created:function(){this.$emit("isMounted")}};const r=(0,i(51900).Z)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[i("v-row",{attrs:{"no-gutters":""}},[t.get_Viewing?t._e():i("v-col",{class:(t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm,"mt-0 pt-0"),attrs:{cols:"12"}},[i("v-card",{staticClass:"d-flex pa-1",attrs:{elevation:"2",outlined:""}},[t.$vuetify.breakpoint.mdAndUp?i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[t.$vuetify.breakpoint.mdAndUp?i("v-btn",t._g(t._b({class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"mb-0 pb-0":" mt-1 ml-2",attrs:{rounded:"",icon:"",text:""},on:{click:function(e){return t.$router.push({name:"classwork"})}}},"v-btn",n,!1),o),[i("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-left-thick")])],1):t._e()]}}],null,!1,1943810809)},[t._v(" "),i("span",[t._v("Back to classworks")])]):t._e(),t._v(" "),"Objective Type"==t.classworkDetails.type?i("v-tabs",{attrs:{rounded:"","next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":"","icons-and-text":t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm,centered:"","fixed-tabs":""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[i("v-tabs-slider",{attrs:{color:"primary"}}),t._v(" "),t._l(t.ObjectIveTabs,(function(e,o){return i("v-tab",{key:o,staticClass:"d-flex justify-center",attrs:{to:{name:e.name,query:{clwk:t.$route.query.clwk}}}},[i("div",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"text-caption":"",style:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"line-height: 1.2":""},[t._v(t._s(e.text))]),t._v(" "),i("v-icon",{attrs:{right:!t.$vuetify.breakpoint.xs||!t.$vuetify.breakpoint.sm}},[t._v("\n                              "+t._s(e.icon)+"\n                          ")])],1)}))],2):t._e(),t._v(" "),"Subjective Type"==t.classworkDetails.type&&t.$vuetify.breakpoint.mdAndUp?i("v-tabs",{attrs:{rounded:"","next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":"","icons-and-text":t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm,"fixed-tabs":"",centered:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[i("v-tabs-slider",{attrs:{color:"primary"}}),t._v(" "),t._l(t.SubjectiveTabs,(function(e,o){return i("v-tab",{key:o,staticClass:"d-flex justify-center",attrs:{to:{name:e.name,query:{clwk:t.$route.query.clwk}}}},[i("div",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"text-caption":"",style:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"line-height: 1.2":""},[t._v(t._s(e.text))]),t._v(" "),i("v-icon",{attrs:{right:!t.$vuetify.breakpoint.xs||!t.$vuetify.breakpoint.sm}},[t._v("\n                                  "+t._s(e.icon)+"\n                              ")])],1)}))],2):t._e()],1)],1),t._v(" "),i("v-col",{staticClass:"ml-0 mr-0 mb-0 mt-1",attrs:{cols:"12"}},[i("v-tabs-items",{attrs:{value:t.activeTab}},[i("div",{class:t.get_Viewing?"mt-0 pt-0":"mt-3"},[i("router-view",{attrs:{totalPoints:t.totalPoints,totalQuestion:t.totalQuestion,classworkDetails:t.classworkDetails}})],1)])],1)],1)],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp||"Subjective Type"!=t.classworkDetails.type?t._e():i("v-bottom-navigation",{attrs:{app:"",grow:"",color:"primary"}},t._l(t.SubjectiveTabs,(function(e,o){return i("v-btn",{key:o,attrs:{small:"",to:{name:e.name,query:{clwk:t.$route.query.clwk}}}},[i("span",[t._v("\n              "+t._s("CLASSWORK DETAILS"==e.text?"DETAILS":"SUBMISSION LIST"==e.text?"SUBMISSION":e.text)+"\n          ")]),t._v(" "),i("v-icon",{attrs:{small:""}},[t._v(t._s(e.icon))])],1)})),1)],1)}),[],!1,null,null,null).exports}}]);