"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8504],{88504:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(20629);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o={components:{resendAndChangeEmail:function(){return r.e(1306).then(r.bind(r,82055))},loginRegisterImageConatiner:function(){return r.e(2927).then(r.bind(r,83385))},loginRegisterFooter:function(){return r.e(2927).then(r.bind(r,29065))}},data:function(){return{isResending:!1}},computed:(0,n.Se)(["get_CurrentUser"]),methods:s(s({},(0,n.nv)(["fetchCurrentUser","clear_current_user"])),{},{logout:function(){var e=this;this.$store.dispatch("clearClassesNames"),this.isLogout=!0,axios.post("/api/logout").then((function(){e.clear_current_user(),e.$router.push({path:"/login"})})).catch((function(e){}))}}),mounted:function(){}};const c=(0,r(51900).Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-container",{class:e.$vuetify.breakpoint.xs||e.$vuetify.breakpoint.sm?"":"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{class:e.$vuetify.breakpoint.xs||e.$vuetify.breakpoint.sm?"":"ma-0 pa-0",attrs:{cols:"12",sm:"12",md:"12"}},[r("v-row",{class:e.$vuetify.breakpoint.xs||e.$vuetify.breakpoint.sm?"fill-height":"",attrs:{align:"center",justify:"center"}},[r("loginRegisterImageConatiner"),e._v(" "),r("v-col",{class:e.$vuetify.breakpoint.xs?"ma-0 pa-3":"ma-0 pa-0",attrs:{cols:"12",md:"5"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-left",attrs:{cols:"12",md:"12",lg:"12",sm:"7"}},[r("v-card-text",[r("v-form",{staticClass:"text-center"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[e.isResending?e._e():r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"8",xl:"8",lg:"8"}},[r("v-avatar",{attrs:{size:"100",color:"primary"}},[r("v-icon",{staticStyle:{"font-size":"3.5rem"},attrs:{color:"white"}},[e._v("\r\n                                                              mdi-email\r\n                                                          ")])],1),e._v(" "),r("div",{staticClass:"text-h5"},[e._v("Verification Pending")]),e._v(" "),r("p",[e._v("We've sent an email to "),r("a",{attrs:{href:""}},[e._v(e._s(e.get_CurrentUser.email))]),e._v(" \r\n                                                          to verify your email address and active your account. If you cannot find the e-mail, please also check the Junk/Spam folder.\r\n                                                      ")]),e._v(" "),r("p",{staticClass:"pl-5 pr-5"},[r("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.isResending=!0}}},[e._v(" Click here ")]),e._v("\r\n                                                        if you did not receive an email or would like to change the email address you signup up with.\r\n                                                      ")]),e._v(" "),r("div",[r("v-btn",{attrs:{dark:"",rounded:"",color:"red"},on:{click:function(t){return e.logout()}}},[e._v("Log Out")])],1)],1),e._v(" "),e.isResending?r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"10",xl:"8",lg:"8"}},[r("v-avatar",{attrs:{size:"100",color:"primary"}},[r("v-icon",{staticStyle:{"font-size":"3.5rem"},attrs:{color:"white"}},[e._v("\r\n                                                                mdi-email\r\n                                                            ")])],1),e._v(" "),r("div",{staticClass:"text-h5"},[e._v("Resend Verification")]),e._v(" "),r("resendAndChangeEmail",{attrs:{get_CurrentUser:e.get_CurrentUser},on:{CancelResend:function(t){e.isResending=!1}}})],1):e._e()],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),r("loginRegisterFooter")],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);