(self.webpackChunk=self.webpackChunk||[]).push([[8534],{53091:function(t){t.exports=function(){"use strict";function t(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){var r,i,o;r=t,o=n[i=e],i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o}))}return t}var e="en_us";function n(n){return new Promise((function(r){window.FB?r(window.FB):function(t){var n=t.locale?t.locale:e;return new Promise((function(t,e){!function(r,i,o){var a=r.getElementsByTagName(i)[0];if(!r.getElementById(o)){var s=r.createElement(i);s.id=o,s.src="https://connect.facebook.net/"+n+"/sdk/xfbml.customerchat.js",a.parentNode.insertBefore(s,a),s.onload=function(){t()},s.onerror=function(){e()}}}(document,"script","facebook-jssdk")}))}(n).then((function(){(function(e){return new Promise((function(n){window.fbAsyncInit=function(){e=t({},{cookie:!0,xfbml:!0,version:"v5.0"},e),window.FB.init(e),n()}}))})(n).then((function(){r(window.FB)}))}))}))}var r={install:function(e,r){e.fbCustomerChat={setOptions:function(e){r=t({},r,e)}},Object.defineProperties(e.prototype,{$fbCustomerChat:{get:function(){return e.fbCustomerChat}}}),e.mixin({mounted:function(){this.$parent||n(r).then((function(){r.page_id&&function(t){var e=document.createElement("div");e.setAttribute("class","fb-customerchat"),e.setAttribute("attribution","setup_tool"),Object.entries(t).forEach((function(t){e.setAttribute(t[0],t[1])})),document.body.appendChild(e)}(r)}))}})}};return"undefined"!=typeof window&&window.Vue&&(window.VueFbCustomerChat=r),r}()},38534:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var r=n(87757),i=n.n(r),o=n(53091),a=n.n(o);function s(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}Vue.use(a(),{page_id:0x5d3c7662dd06,theme_color:"#333333",locale:"en_US"});const c={title:"Orange",components:{loginRegisterFooter:function(){return n.e(2927).then(n.bind(n,44661))},loginRegisterImageConatiner:function(){return n.e(2927).then(n.bind(n,35876))}},data:function(){return{isLoggin:!1,dialog:!0,valid:!0,form:new Form({email:"",password:"",remember:!1}),loginEmailRules:[function(t){return!!t||"Required"},function(t){return/.+@.+\..+/.test(t)||"Email must be valid"},function(t){return t&&!!t.trim()||"Field cannot be blank"}],emailRules:[function(t){return!!t||"Required"},function(t){return/.+@.+\..+/.test(t)||"Email must be valid"},function(t){return t&&!!t.trim()||"Field cannot be blank"}],show:!1,rules:{required:function(t){return!!t||"Required."},min:function(t){return t&&t.length>=6||"Min 6 characters"},blank:function(t){return t&&!!t.trim()||"Field cannot be blank"}},ToManyAttepmtError:null,isForgotPassword:!1,IsloadingComponent:!1}},computed:{passwordMatch:function(){var t=this;return function(){return t.password===t.verify||"Password must match"}}},methods:{validate:function(){this.$refs.loginForm.validate()&&this.login()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},login:function(){var t=this;this.isLoggin=!0,axios.get("/sanctum/csrf-cookie").then((function(e){t.form.post("/api/admin_Login").then((function(e){1==e.data.success?(t.$store.dispatch("clear_current_user"),t.$router.push({path:"/"})):(t.isLoggin=!1,t.toastError(e.data.message))})).catch((function(e){t.isLoggin=!1,t.toastError("Incorrect Email or Password. Please try again")}))}))},StartFireBasePushNotification:function(){return(t=i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e={apiKey:"AIzaSyDWhE_gfbOrfbU88UwTZNDKYg0_ND0QQsQ",authDomain:"isue-orange-pushnotification.firebaseapp.com",projectId:"isue-orange-pushnotification",storageBucket:"isue-orange-pushnotification.appspot.com",messagingSenderId:"914599704994",appId:"1:914599704994:web:5e7e272dd3fb83013f5afb"},firebase.apps.length?firebase.app():firebase.initializeApp(e),(n=firebase.messaging()).requestPermission().then((function(){return n.getToken()})).then((function(t){axios.post("/api/store_token",{token:t}).then((function(t){}))})).catch((function(t){})),n.onMessage((function(t){var e=t.data,n=e.body,r=e.title;new Notification(r,{body:n})}));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)}))})();var t}},beforeRouteEnter:function(t,e,n){if(window.localStorage.getItem("isConfirmedPassword"))n();else{if("123123"!=prompt("This page is secure enter password"))return n({path:"/"});n()}}};const l=(0,n(51900).Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"ma-0 pa-0",attrs:{cols:"12",sm:"12",md:"12"}},[n("v-row",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"fill-height":"",attrs:{align:"center",justify:"center"}},[n("loginRegisterImageConatiner"),t._v(" "),n("v-col",{class:t.$vuetify.breakpoint.xs?"ma-0 pa-3 PB-0":"ma-0 pa-0",attrs:{cols:"12",md:"5"}},[n("vue-element-loading",{attrs:{active:t.isLoggin,spinner:"bar-fade-scale",color:"#EF6C00"}}),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-left",attrs:{cols:"12",md:"12",lg:"12",sm:"7"}},[t.isForgotPassword?t._e():n("v-card-text",[n("v-form",{ref:"loginForm",staticClass:"text-center",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.validate.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"ma-0 pa-0 text-left",attrs:{cols:"12",md:"8"}},[n("div",{staticClass:" text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold"},[t._v("\n                                                    Administrator Login"),n("span",{staticClass:"font-weight-regular"})])]),t._v(" "),n("v-col",{staticClass:"ma-0 pa-0 mt-4",attrs:{cols:"12",md:"8"}},[n("v-text-field",{attrs:{outlined:"",label:"Email",rules:t.loginEmailRules,name:"Email","prepend-inner-icon":"email",dense:t.$vuetify.breakpoint.mdAndUp,type:"email",color:"primary",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),n("v-col",{staticClass:"ma-0 pa-0 mt-2 mb-0",attrs:{cols:"12",md:"8"}},[n("v-text-field",{staticClass:"mb-0 pb-0",attrs:{dense:t.$vuetify.breakpoint.mdAndUp,outlined:"","append-icon":t.show?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min,t.rules.blank],type:t.show?"text":"password",name:"password",label:"Password","prepend-inner-icon":"lock",hint:"At least 6 characters",color:"primary",counter:""},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),n("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"password"}})],1),t._v(" "),n("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"ma-0 pa-0 text-left":"ml-0 pl-0 pr-0 mr-0 mt-1",attrs:{cols:"12",md:"8"}},[n("v-btn",{staticClass:"mb-5",attrs:{color:"primary",type:"submit",disabled:!t.valid,block:!t.$vuetify.breakpoint.mdAndUp,large:!t.$vuetify.breakpoint.mdAndUp,rounded:!t.$vuetify.breakpoint.mdAndUp,loading:t.isLoggin}},[n("v-icon",{staticClass:"mr-3"},[t._v("mdi-login")]),t._v("\n                                                    Login\n                                                ")],1)],1)],1)],1)],1),t._v(" "),t.isForgotPassword?n("v-card-text",[n("div",{staticClass:"text-center"},[t.IsloadingComponent?n("v-progress-circular",{attrs:{color:"primary",indeterminate:""}}):t._e()],1)]):t._e()],1)],1)],1),t._v(" "),n("loginRegisterFooter")],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);