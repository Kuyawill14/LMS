"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4008],{4008:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var i=s(629);function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function r(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const n={components:{resendAndChangeEmail:function(){return s.e(1306).then(s.bind(s,8738))}},data:function(){return{isResending:!1}},computed:(0,i.Se)(["get_CurrentUser"]),methods:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){r(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},(0,i.nv)(["fetchCurrentUser"])),mounted:function(){this.fetchCurrentUser()}};const c=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"fill-height",attrs:{fluid:""}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"ma-0 pa-0",attrs:{cols:"12",sm:"12",md:"12"}},[s("v-row",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"fill-height":"",attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"primary ma-0 pa-0 d-flex flex-column",style:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"height:35vh;":"height:100vh",attrs:{cols:"12",md:"4"}},[t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?s("v-container",{staticClass:"pb-0 mb-0 pl-5 d-flex justify-space-between"},[s("v-img",{attrs:{height:"70",width:"70","max-height":"70","max-width":"70",src:"../images/isu_logo1.png"}}),t._v(" "),s("v-img",{attrs:{height:"70",width:"70","max-height":"70","max-width":"70",src:"../images/ccsict_logo_2.png"}})],1):t._e(),t._v(" "),s("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[s("v-card-text",[s("v-form",{staticClass:"text-center"},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"display-2 white--text font-weight-bold"},[t._v("ORANGE")]),t._v(" "),s("div",{staticClass:"white--text"},[s("b",{staticClass:"text-h6"},[t._v("O")]),t._v("nline "),s("b",{staticClass:"text-h6"},[t._v("R")]),t._v("esources "),s("b",{staticClass:"text-h6"},[t._v("A")]),t._v("pp for a "),s("b",{staticClass:"text-h6"},[t._v("N")]),t._v("ew "),s("b",{staticClass:"text-h6"},[t._v("G")]),t._v("uild of "),s("b",{staticClass:"text-h6"},[t._v("E")]),t._v("ducation")])])],1)],1)],1)],1),t._v(" "),t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?t._e():s("v-container",{staticClass:"pb-0 mb-0 pl-5 d-flex justify-center"},[s("v-img",{attrs:{height:"70",width:"70","max-height":"70","max-width":"70",src:"../images/isu_logo1.png"}}),t._v(" "),s("v-img",{attrs:{height:"70",width:"70","max-height":"70","max-width":"70",src:"../images/ccsict_logo_2.png"}})],1)],1),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.xs?"ma-0 pa-3":"ma-0 pa-0",attrs:{cols:"12",md:"8"}},[s("v-container",{staticClass:"d-flex align-start",attrs:{"ma-0":"","pa-0":"",fluid:""}},[s("v-card-text",[s("v-form",{staticClass:"text-center"},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("v-row",{attrs:{align:"center",justify:"center"}},[t.isResending?t._e():s("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"8",xl:"5",lg:"5"}},[s("v-avatar",{attrs:{size:"100",color:"primary"}},[s("v-icon",{staticStyle:{"font-size":"3.5rem"},attrs:{color:"white"}},[t._v("\n                                                            mdi-email\n                                                        ")])],1),t._v(" "),s("div",{staticClass:"text-h5"},[t._v("Verification Pending")]),t._v(" "),s("p",[t._v("We've sent and email to "),s("a",{attrs:{href:""}},[t._v(t._s(t.get_CurrentUser.email))]),t._v(" \n                                                        to verify your email address and active your account. If you cannot find the mail, please also check the Junk/Spam folder.\n                                                    ")]),t._v(" "),s("p",{staticClass:"pl-5 pr-5"},[s("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.isResending=!0}}},[t._v(" Click here ")]),t._v("\n                                                      if you did not receive an email or would like to change the email address you signup up with.\n                                                    ")])],1),t._v(" "),t.isResending?s("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"8",xl:"5",lg:"5"}},[s("v-avatar",{attrs:{size:"100",color:"primary"}},[s("v-icon",{staticStyle:{"font-size":"3.5rem"},attrs:{color:"white"}},[t._v("\n                                                            mdi-email\n                                                        ")])],1),t._v(" "),s("div",{staticClass:"text-h5"},[t._v("Resend Verification")]),t._v(" "),s("resendAndChangeEmail",{attrs:{get_CurrentUser:t.get_CurrentUser}})],1):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);