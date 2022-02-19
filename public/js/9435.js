"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9435],{59435:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var a=s(87757),r=s.n(a);function i(t,e,s,a,r,i,n){try{var o=t[i](n),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(a,r)}function n(t){return function(){var e=this,s=arguments;return new Promise((function(a,r){var n=t.apply(e,s);function o(t){i(n,a,r,o,l,"next",t)}function l(t){i(n,a,r,o,l,"throw",t)}o(void 0)}))}}const o={components:{loginRegisterImageConatiner:function(){return s.e(2927).then(s.bind(s,37347))},loginRegisterFooter:function(){return s.e(2927).then(s.bind(s,29065))}},data:function(){return{steps:1,isRegistering:!1,valid:!0,form:{firstName:"",middleName:"",lastName:"",suffix:"",birthday:new Date,email:"",password:"",password_confirmation:"",student_id:""},loginForm:new Form({email:"",password:""}),nameRules:[function(t){return!!t||"Field is required"},function(t){return t&&t.length<=20||"Name must be less than 20 characters"}],StudentIdRules:[function(t){return!!t||"Student ID is required"},function(t){return t&&t.length>=5||"min 5 characters"},function(t){return t&&t.length<=12||"Max 12 characters"}],emailRules:[function(t){return!!t||"Required"},function(t){return/.+@.+\..+/.test(t)||"Email must be valid"}],rules:{required:function(t){return!!t||"Field is required."},min:function(t){return t&&t.length>=6||"min 6 characters"}},showPass:!1,showConfirmPass:!1,isValid_id:!1,isValid_id_mesage:null,valid_type:null}},computed:{passwordMatch:function(){return this.form.password===this.form.password_confirmation||"Pasword does not match"}},methods:{preventNav:function(t){1!=this.steps&&(t.preventDefault(),t.returnValue="")},validate:function(){var t=this;return n(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$refs.Registerform.validate()&&t.nextStep();case 1:case"end":return e.stop()}}),e)})))()},nextStep:function(){var t=this;return n(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:1==t.steps?axios.get("/api/register/check_student_id/"+t.form.student_id).then((function(e){1==e.data.success?(t.steps+=1,t.$refs.Registerform.resetValidation()):(t.valid_type=e.data.type,t.isValid_id=!0,t.isValid_id_mesage=e.data.message,setTimeout((function(){return t.isValid_id=!1}),5e3))})):2==t.steps?axios.put("/api/register/check_student_details/"+t.form.student_id,t.form).then((function(e){1==e.data.success?(t.steps+=1,t.$refs.Registerform.resetValidation()):t.toastError(e.data.message)})):3==t.steps&&axios.put("/api/register/account/"+t.form.student_id,t.form).then((function(e){1==e.data.success?(t.isRegistering=!0,t.sendVerification(t.form.email),t.toastSuccess("Account Registerd: Please check your email for Verification!"),t.login(t.form.email,t.form.password)):t.toastError(e.data.message)})).catch((function(e){t.toastError(e.response.data.errors.email[0])}));case 1:case"end":return e.stop()}}),e)})))()},sendVerification:function(t){return n(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.post("/api/resend-verification",{email:t}).then((function(t){t.data.success})).catch((function(t){}));case 1:case"end":return e.stop()}}),e)})))()},login:function(t,e){var s=this;return n(r().mark((function a(){return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s.loginForm.email=t,s.loginForm.password=e,axios.get("/sanctum/csrf-cookie").then((function(t){s.loginForm.post("/api/login").then((function(t){1==t.data.success?(s.$store.dispatch("clear_current_user"),s.$router.push({path:"/"})):s.toastError(t.data.message)}))}));case 3:case"end":return a.stop()}}),a)})))()},beforeWindowUnload:function(t){1==this.steps&&(t.preventDefault(),t.returnValue="")}},beforeMount:function(){window.addEventListener("beforeunload",this.preventNav)}};const l=(0,s(51900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"fill-height",attrs:{fluid:""}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"ma-0 pa-0",attrs:{cols:"12",sm:"12",md:"12"}},[s("v-row",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"fill-height":"",attrs:{align:"center",justify:"center"}},[s("loginRegisterImageConatiner"),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"ma-0 pa-3 mb-10":"ma-0 pa-0",attrs:{cols:"12",md:"5"}},[s("vue-element-loading",{attrs:{active:t.isRegistering,spinner:"bar-fade-scale",color:"#EF6C00"}}),t._v(" "),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:" text-left",attrs:{cols:"12",md:"7"}},[s("div",{staticClass:"text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold"},[t._v("Sign\n                                        Up "),s("span",{staticClass:"font-weight-regular"},[t._v("Now")]),t._v(" "),s("span",{staticClass:"font-weight-regular text-subtitle-1"},[t._v(" (Step "+t._s(t.steps)+" of 3)")])]),t._v(" "),s("p",{staticClass:"mt-2"},[t._v("Login Your Account "),s("router-link",{staticClass:"blue--text",attrs:{to:{name:"login"}}},[t._v("Click here")])],1)])],1)],1),t._v(" "),s("v-col",{staticClass:"text-center mb-0 pb-0",attrs:{cols:"12"}},[s("v-form",{ref:"Registerform",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.validate.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[1==t.steps?s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"7"}},[s("v-alert",{staticClass:"text-left",attrs:{dismissible:"",dense:"",type:"Not_Valid"==t.valid_type?"error":"info"},model:{value:t.isValid_id,callback:function(e){t.isValid_id=e},expression:"isValid_id"}},[t._v(t._s(t.isValid_id_mesage))]),t._v(" "),s("v-text-field",{attrs:{rules:t.StudentIdRules,dense:"",placeholder:"e.g. 18****",label:"Student ID Number",outlined:""},model:{value:t.form.student_id,callback:function(e){t.$set(t.form,"student_id",e)},expression:"form.student_id"}})],1)],1):t._e(),t._v(" "),2==t.steps?s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-left",attrs:{cols:"12",md:"7"}},[s("v-alert",{staticClass:"text-left",attrs:{dismissible:"",dense:"",type:"info"}},[t._v("Please used your exact birthday you used in enrollment!")]),t._v(" "),s("div",{staticClass:"font-weight-bold"},[t._v("Personal Details")])],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12",md:"7"}},[s("v-text-field",{attrs:{dense:"",rules:t.nameRules,label:"First Name",outlined:""},model:{value:t.form.firstName,callback:function(e){t.$set(t.form,"firstName",e)},expression:"form.firstName"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12",md:"7"}},[s("v-text-field",{attrs:{dense:"",rules:t.nameRules,label:"Middle Initial",outlined:""},model:{value:t.form.middleName,callback:function(e){t.$set(t.form,"middleName",e)},expression:"form.middleName"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12",md:"7"}},[s("v-text-field",{attrs:{dense:"",rules:t.nameRules,label:"Last Name",outlined:""},model:{value:t.form.lastName,callback:function(e){t.$set(t.form,"lastName",e)},expression:"form.lastName"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12",md:"7"}},[s("v-text-field",{attrs:{dense:"",label:"Suffix",outlined:""},model:{value:t.form.suffix,callback:function(e){t.$set(t.form,"suffix",e)},expression:"form.suffix"}})],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0",attrs:{cols:"12",md:"7"}},[s("v-text-field",{attrs:{dense:"",type:"Date",label:"Birthday",outlined:""},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}})],1)],1):t._e(),t._v(" "),3==t.steps?s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12",md:"7"}},[s("v-text-field",{attrs:{dense:"",type:"email",rules:t.emailRules,label:"Email",outlined:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12",md:"7"}},[s("v-text-field",{attrs:{dense:"","append-icon":t.showPass?"mdi-eye":"mdi-eye-off",type:t.showPass?"text":"password",rules:[t.rules.required,t.rules.min],label:"Password",outlined:""},on:{"click:append":function(e){t.showPass=!t.showPass}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),s("v-col",{staticClass:" pt-0 mt-0",attrs:{cols:"12",md:"7"}},[s("v-text-field",{attrs:{dense:"","append-icon":t.showConfirmPass?"mdi-eye":"mdi-eye-off",type:t.showConfirmPass?"text":"password",rules:[t.rules.required,t.passwordMatch],label:"Confirm Password",outlined:""},on:{"click:append":function(e){t.showConfirmPass=!t.showConfirmPass}},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1)],1):t._e(),t._v(" "),s("v-row",{staticClass:"mt-0 pt-0 pb-5"},[s("v-col",{staticClass:"text-center  mt-0 pt-0",attrs:{cols:"12"}},[t.steps>1?s("v-btn",{attrs:{color:"secondary"},on:{click:function(e){t.steps=t.steps-1}}},[t._v("\n                                        Previus\n                                    ")]):t._e(),t._v(" "),s("v-btn",{attrs:{disabled:!t.valid,color:3==t.steps?"success":"primary"},on:{click:t.validate}},[t._v("\n                                        "+t._s(3==t.steps?"Register":"Next")+"\n                                    ")])],1)],1)],1)],1)],1)],1),t._v(" "),s("loginRegisterFooter")],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);