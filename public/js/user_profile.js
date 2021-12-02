"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2932],{25130:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var a=s(87757),l=s.n(a);function i(t,e,s,a,l,i,n){try{var o=t[i](n),r=o.value}catch(t){return void s(t)}o.done?e(r):Promise.resolve(r).then(a,l)}function n(t){return function(){var e=this,s=arguments;return new Promise((function(a,l){var n=t.apply(e,s);function o(t){i(n,a,l,o,r,"next",t)}function r(t){i(n,a,l,o,r,"throw",t)}o(void 0)}))}}const o={props:["UserDetails"],data:function(){return{valid:!1,editEmail:!0,editPhone:!0,isSaving:!1,Details:[],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],FieldRules:[function(t){return!!t||"Field is required"}],phoneNumberRules:[function(t){return t&&t.length>=11||"min 11 characters"},function(t){return t&&t.length<=15||"Max 15 characters"}],StudentIdRules:[function(t){return!!t||"Student ID is required"},function(t){return t&&t.length>=6||"min 6 characters"},function(t){return t&&t.length<=8||"Max 8 characters"}],isloading:!0,departmentsList:[]}},methods:{isNumber:function(t){if(isNaN(Number(t.key)))return t.preventDefault()},validate:function(){this.$refs.form.validate()&&this.UpdateDetails()},UpdateDetails:function(){var t=this;return n(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isSaving=!t.isSaving,btoa("test123"),axios.post("/api/profile/updateDetails",t.UserDetails).then((function(e){t.toastSuccess("Profile Successfully Updated"),t.isSaving=!t.isSaving})).catch((function(e){t.toastError("Something went wrong in updating your profile!"),t.isSaving=!t.isSaving}));case 3:case"end":return e.stop()}}),e)})))()},fetchDeparmentList:function(){var t=this;return n(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.get("/api/admin/department/all").then((function(e){t.departmentsList=e.data}));case 1:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){var t=this;this.fetchDeparmentList(),setTimeout((function(){t.isloading=!t.isloading}),1e3)}};const r=(0,s(51900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-row",{staticClass:"pb-5"},[s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[s("div",{class:t.$vuetify.breakpoint.lgAndUp?"text-h6 font-weight-bold":"font-weight-bold"},[t._v("EDIT PROFILE")])]),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[s("v-divider")],1),t._v(" "),t.isloading?s("v-col",{staticStyle:{height:"550px"},attrs:{cols:"12"}},[t.isloading?s("v-container",{staticClass:"fill-height"},[s("vue-element-loading",{attrs:{active:t.isloading,text:"Loading",duration:"0.7",textStyle:{fontSize:"20px"},spinner:"line-scale",color:"#EF6C00",size:t.$vuetify.breakpoint.lgAndUp?"60":"40"}})],1):t._e()],1):t._e(),t._v(" "),t.isloading?t._e():s("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[s("vue-element-loading",{attrs:{active:t.isSaving,spinner:"bar-fade-scale",color:"#EF6C00"}}),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"":"mt-0 pt-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{attrs:{cols:"12",md:"2"}}),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"mb-0 pb-0":"mt-0 pt-0 mb-0 pb-0",attrs:{cols:"12",md:"10"}},[s("h4",{staticClass:"mt-5"},[t._v("1. Personal Details")])])],1)],1),t._v(" "),"Student"==t.UserDetails.role?s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"mt-2":"mb-0 pb-0",attrs:{cols:"12",md:"2"}},[t._v("\n                       Student ID\n                   ")]),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pb-0 mb-0":"pb-0 mb-0 mt-0 pt-0",attrs:{cols:"12",md:"2"}},[s("v-text-field",{class:t.$vuetify.breakpoint.lgAndUp?"":"ma-0 pa-0",attrs:{dense:"",rules:t.StudentIdRules,outlined:""},on:{keypress:t.isNumber},model:{value:t.UserDetails.student_id,callback:function(e){t.$set(t.UserDetails,"student_id",e)},expression:"UserDetails.student_id"}})],1)],1)],1):t._e(),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pb-0 mb-0":"pb-0 mb-0 mt-0 pt-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.xs?"mb-0 pb-0":"mt-2",attrs:{cols:"12",md:"2"}},[t._v("\n                       First Name\n                   ")]),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pb-0 mb-0":"pb-0 mb-0 mt-0 pt-0",attrs:{cols:"12",md:"6"}},[s("v-text-field",{class:t.$vuetify.breakpoint.lgAndUp?"":"ma-0 pa-0",attrs:{dense:"",rules:t.FieldRules,outlined:""},model:{value:t.UserDetails.firstName,callback:function(e){t.$set(t.UserDetails,"firstName",e)},expression:"UserDetails.firstName"}})],1)],1)],1),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pb-0 mb-0":"pb-0 mb-0 mt-0 pt-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.xs?"mb-0 pb-0":"mt-2",attrs:{cols:"12",md:"2"}},[t._v("\n                       Middle Name\n                   ")]),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pb-0 mb-0":"pb-0 mb-0 mt-0 pt-0",attrs:{cols:"12",md:"6"}},[s("v-text-field",{class:t.$vuetify.breakpoint.lgAndUp?"":"ma-0 pa-0",attrs:{dense:"",outlined:"",rules:t.FieldRules},model:{value:t.UserDetails.middleName,callback:function(e){t.$set(t.UserDetails,"middleName",e)},expression:"UserDetails.middleName"}})],1)],1)],1),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pb-0 mb-0":"pb-0 mb-0 mt-0 pt-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.xs?"mb-0 pb-0":"mt-2",attrs:{cols:"12",md:"2"}},[t._v("\n                       Last Name\n                   ")]),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pb-0 mb-0":"pb-0 mb-0 mt-0 pt-0",attrs:{cols:"12",md:"6"}},[s("v-text-field",{staticClass:"mb-0 pb-0",class:t.$vuetify.breakpoint.lgAndUp?"":"ma-0 pa-0",attrs:{dense:"",type:"text",outlined:"",rules:t.FieldRules},model:{value:t.UserDetails.lastName,callback:function(e){t.$set(t.UserDetails,"lastName",e)},expression:"UserDetails.lastName"}})],1)],1)],1),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.xs?"mb-0 pb-0":"mt-2",attrs:{cols:"12",md:"2"}},[t._v("\n                       Department\n                   ")]),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pb-0 mb-0":"pb-0 mb-0 mt-0 pt-0",attrs:{cols:"12",md:"6"}},[s("v-select",{staticClass:"mr-2",class:t.$vuetify.breakpoint.lgAndUp?"":"ma-0 pa-0",attrs:{items:t.departmentsList,"item-text":"name","item-value":"id",dense:"",outlined:""},model:{value:t.UserDetails.department,callback:function(e){t.$set(t.UserDetails,"department",e)},expression:"UserDetails.department"}})],1)],1)],1),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"":"mt-0 pt-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"":"mt-0 pt-0",attrs:{cols:"12",md:"2"}}),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"":"mt-0 pt-0",attrs:{cols:"12",md:"10"}},[s("h4",{staticClass:"mt-2"},[t._v("2. Contact")])])],1)],1),t._v(" "),s("v-col",{staticClass:"mt-0 pt-0 mb-0 pb-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"mt-2 mr-0 pr-0":"mb-0 pb-0 mr-0 pr-0",attrs:{cols:"12",md:"2"}},[t._v("\n                       Email Address.\n                   ")]),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pb-0 mb-0":"b-0 mb-0 mt-0 pt-0",attrs:{cols:"10",md:"6"}},[s("v-text-field",{class:t.$vuetify.breakpoint.lgAndUp?"":"ma-0 pa-0",attrs:{disabled:t.editEmail,rules:t.emailRules,dense:"",outlined:"",hint:t.editEmail?"":"Please use an active email address!"},model:{value:t.UserDetails.email,callback:function(e){t.$set(t.UserDetails,"email",e)},expression:"UserDetails.email"}})],1),t._v(" "),s("v-col",{staticClass:"ml-0 pl-0 mt-1 mr-4",attrs:{cols:"1"}},[s("v-btn",{attrs:{text:"",icon:""},on:{click:function(e){t.editEmail=!t.editEmail}}},[s("v-icon",{attrs:{color:t.editEmail?"":"primary"}},[t._v("mdi-"+t._s(t.editEmail?"pencil-off-outline":"pencil-outline"))])],1)],1)],1)],1),t._v(" "),s("v-col",{staticClass:"mt-0 pt-0 mb-0 pb-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"mt-2":"mb-0 pb-0 mt-0 pt-0",attrs:{cols:"12",md:"2"}},[t._v("\n                       Phone No.\n                   ")]),t._v(" "),s("v-col",{staticClass:"pb-0 mb-0",attrs:{cols:"10",md:"6"}},[s("v-text-field",{attrs:{"max-length":"11",dense:"",outlined:"",disabled:t.editPhone,hint:t.editPhone?"":"Please use an active phone number"},on:{keypress:t.isNumber},model:{value:t.UserDetails.cp_no,callback:function(e){t.$set(t.UserDetails,"cp_no",e)},expression:"UserDetails.cp_no"}})],1),t._v(" "),s("v-col",{staticClass:"ml-0 pl-0 mt-1 mr-4",attrs:{cols:"1"}},[s("v-btn",{attrs:{text:"",icon:""},on:{click:function(e){t.editPhone=!t.editPhone}}},[s("v-icon",{attrs:{color:t.editPhone?"":"primary"}},[t._v("mdi-"+t._s(t.editPhone?"pencil-off-outline":"pencil-outline"))])],1)],1)],1)],1),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"":"mt-0 pt-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"":"mt-0 pt-0",attrs:{cols:"12",md:"2"}}),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"":"mt-0 pt-0",attrs:{cols:"12",md:"10"}},[s("h4",{staticClass:"mt-5"},[t._v("3. Social Link")])])],1)],1),t._v(" "),s("v-col",{staticClass:"mt-0 pt-0 mb-0 pb-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.xs?"mb-0 pb-0":"mt-2",attrs:{cols:"12",md:"2"}},[t._v("\n                       Facebook\n                   ")]),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pb-0 mb-0":"pb-0 mb-0 mt-0 pt-0",attrs:{cols:"12",md:"6"}},[s("v-text-field",{class:t.$vuetify.breakpoint.lgAndUp?"blue--text":"ma-0 pa-0 blue--text",attrs:{dense:"",outlined:""},model:{value:t.UserDetails.social_account,callback:function(e){t.$set(t.UserDetails,"social_account",e)},expression:"UserDetails.social_account"}})],1)],1)],1),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"mb-0 pb-5 ":"mb-o pb-3 mt-0 pt-0",attrs:{cols:"12"}},[s("v-row",[s("v-col",{class:t.$vuetify.breakpoint.xs?"mb-0 pb-0":"mt-0",attrs:{cols:"12",md:"2"}}),t._v(" "),s("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"":"mt-0 pt-0",attrs:{cols:"12",md:"6"}},[s("v-btn",{attrs:{block:!t.$vuetify.breakpoint.mdAndUp,color:"primary",rounded:"",loading:t.isSaving,dark:""},on:{click:function(e){return t.validate()}}},[t._v(t._s(t.isSaving?"Saving...":"Save Changes"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);