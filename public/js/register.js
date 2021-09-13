"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[685],{5373:(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const a={data:function(){return{isRegistering:!1,valid:!0,role:["Teacher","Student"],invalid_classcode_message:null,form:new Form({firstName:"",middleName:"",lastName:"",email:"",password:"",password_confirmation:"",student_id:""}),loginForm:new Form({email:"",password:""}),nameRules:[function(t){return!!t||"Field is required"},function(t){return t&&t.length<=20||"Name must be less than 20 characters"}],loginEmailRules:[function(t){return!!t||"Field is required"},function(t){return/.+@.+\..+/.test(t)||"Email must be valid"}],RoleRules:[function(t){return!!t||"Field is required"}],StudentIdRules:[function(t){return!!t||"Student ID is required"},function(t){return t&&t.length>=6||"min 6 characters"},function(t){return t&&t.length<=8||"Max 8 characters"}],show:!1,show1:!1,rules:{required:function(t){return!!t||"Field is required."},min:function(t){return t&&t.length>=6||"min 6 characters"}}}},computed:{passwordMatch:function(){return this.form.password===this.form.password_confirmation||"Pasword does not match"}},methods:{isNumber:function(t){if(isNaN(Number(t.key)))return t.preventDefault()},validate:function(){var t=this;this.$refs.RegisterForm.validate()&&(this.isRegistering=!0,this.form.post("/api/register").then((function(e){1==e.data.success?(t.toastSuccess(e.data.message),t.login(t.form.email,t.form.password),t.valid=!0,t.isRegistering=!1,t.$refs.RegisterForm.reset()):(t.toastError(e.data.message),t.invalid_classcode_message=e.data.message,t.isRegistering=!1)})).catch((function(e){t.toastError(e.response.data.message),t.isRegistering=!1})))},login:function(t,e){var s=this;this.loginForm.email=t,this.loginForm.password=e,axios.get("/sanctum/csrf-cookie").then((function(t){s.loginForm.post("/api/login").then((function(t){1==t.data.success?(s.$store.dispatch("clear_current_user"),s.$router.push({path:"/"})):s.toastError(t.data.message)}))}))}}};const i=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"fill-height",attrs:{fluid:""}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12",sm:"12",md:"12"}},[s("v-row",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"fill-height":"",attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"primary ma-0 pa-0 d-flex flex-column",style:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"height:35vh;":"height:100vh",attrs:{cols:"12",md:"4"}},[t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?s("v-container",{staticClass:"pb-0 mb-0 pl-5 d-flex justify-space-between"},[s("v-img",{attrs:{height:"70",width:"70","max-height":"70","max-width":"70",src:"../images/isu_logo1.png"}}),t._v(" "),s("v-img",{attrs:{height:"70",width:"70","max-height":"70","max-width":"70",src:"../images/ccsict_logo_2.png"}})],1):t._e(),t._v(" "),t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?t._e():s("v-container",{staticClass:"pt-10 mb-0 pl-5 d-flex justify-center"},[s("div",{staticStyle:{width:"250px"}},[s("v-img",{staticClass:"float-right",attrs:{height:"100",width:"100","max-height":"100","max-width":"100",src:"../images/isu_logo1.png"}}),t._v(" "),s("v-img",{attrs:{height:"100",width:"100","max-height":"100","max-width":"100",src:"../images/ccsict_logo_2.png"}})],1)]),t._v(" "),s("v-container",{staticClass:"fill-height ",staticStyle:{"padding-top":"35px"},attrs:{fluid:""}},[s("v-card-text",[s("v-form",{staticClass:"text-center"},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"display-2 white--text font-weight-bold"},[t._v("ORANGE")]),t._v(" "),s("div",{staticClass:"white--text"},[s("b",{staticClass:"text-h6"},[t._v("O")]),t._v("nline "),s("b",{staticClass:"text-h6"},[t._v("R")]),t._v("esources "),s("b",{staticClass:"text-h6"},[t._v("A")]),t._v("pp for a\n                                                "),s("b",{staticClass:"text-h6"},[t._v("N")]),t._v("ew "),s("b",{staticClass:"text-h6"},[t._v("G")]),t._v("uild of "),s("b",{staticClass:"text-h6"},[t._v("E")]),t._v("ducation")])])],1)],1)],1)],1),t._v(" "),s("v-container",{staticClass:"fill-height",class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"d-none":"",attrs:{fluid:""}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("iframe",{attrs:{src:"https://player.vimeo.com/video/597374601?h=d67ddce656&muted=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=0&#t=150s",width:"440",height:"250",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""}})])],1)],1)],1),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.xs?"ma-0 pa-3":"ma-0 pa-0",attrs:{cols:"12",md:"8"}},[s("vue-element-loading",{attrs:{active:t.isRegistering,spinner:"bar-fade-scale",color:"#EF6C00"}}),t._v(" "),s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-left ",attrs:{cols:"12",md:"8",lg:"6",sm:"7"}},[s("v-card-text",[s("v-form",{ref:"RegisterForm",staticClass:"text-center ",attrs:{autocomplete:"off","lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:" text-left mt-5",attrs:{cols:"12",md:"8"}},[s("div",{staticClass:"text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold"},[t._v("Sign\n                                                    Up "),s("span",{staticClass:"font-weight-regular"},[t._v("Now")])]),t._v(" "),s("p",{staticClass:"mt-2"},[t._v("Login Your Account "),s("router-link",{staticClass:"blue--text",attrs:{to:{name:"login"}}},[t._v("Click here")])],1)]),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-2 ",attrs:{cols:"12",md:"8"}},[s("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"student_id"}}),t._v(" "),s("v-text-field",{attrs:{outlined:"",dense:"",rules:t.StudentIdRules,label:"Student ID Number",name:"student_id",type:"number",color:"primary",maxlength:"6"},on:{keypress:t.isNumber},model:{value:t.form.student_id,callback:function(e){t.$set(t.form,"student_id",e)},expression:"form.student_id"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12",md:"8"}},[s("v-text-field",{attrs:{outlined:"",dense:"",rules:t.nameRules,label:"First Name",name:"firstName",type:"text",color:"primary"},model:{value:t.form.firstName,callback:function(e){t.$set(t.form,"firstName",e)},expression:"form.firstName"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0 ",attrs:{cols:"12",md:"8"}},[s("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"middleName"}}),t._v(" "),s("v-text-field",{attrs:{outlined:"",dense:"",label:"Middle Name",rules:t.nameRules,name:"middleName",type:"text",color:"primary"},model:{value:t.form.middleName,callback:function(e){t.$set(t.form,"middleName",e)},expression:"form.middleName"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12",md:"8"}},[s("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"lastName"}}),t._v(" "),s("v-text-field",{attrs:{outlined:"",dense:"",label:"Last Name",rules:t.nameRules,name:"lastname",type:"text",color:"primary"},model:{value:t.form.lastName,callback:function(e){t.$set(t.form,"lastName",e)},expression:"form.lastName"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0 ",attrs:{cols:"12",md:"8"}},[s("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"email"}}),t._v(" "),s("v-text-field",{attrs:{outlined:"",dense:"",label:"Email",name:"Email",rules:t.loginEmailRules,type:"email",color:"primary"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0",attrs:{cols:"12",md:"8"}},[s("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"password"}}),t._v(" "),s("v-text-field",{attrs:{outlined:"",dense:"","append-icon":t.show?"mdi-eye":"mdi-eye-off",id:"password",label:"Password",name:"password",type:t.show?"text":"password",color:"primary",rules:[t.rules.required,t.rules.min],counter:""},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0 mt-0 ",attrs:{cols:"12",md:"8"}},[s("v-text-field",{attrs:{outlined:"",dense:"","append-icon":t.show1?"mdi-eye":"mdi-eye-off",id:"passwordConfirmation",label:"Confirm Password",name:"password",type:t.show1?"text":"password",color:"primary",rules:[t.rules.required,t.passwordMatch],counter:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0 pt-0  text-left mt-2",attrs:{cols:"12",md:"8"}},[s("v-btn",{staticClass:"mb-5",attrs:{loading:t.isRegistering,disabled:!t.valid,color:"primary"},on:{click:t.validate}},[s("v-icon",{staticClass:"mr-3"},[t._v("mdi-login")]),t._v("\n                                                    Sign Up\n                                                ")],1)],1)],1)],1)],1)],1)],1),t._v(" "),s("v-container",{staticClass:"pb-5 pl-5 pr-5",attrs:{"ma-0":"","pa-0":""}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);