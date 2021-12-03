"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3952],{60347:(t,e,s)=>{s.d(e,{Z:()=>i});var r=s(1519),a=s.n(r)()((function(t){return t[1]}));a.push([t.id,".v-input__slot{margin-bottom:0!important}",""]);const i=a},73952:(t,e,s)=>{s.r(e),s.d(e,{default:()=>f});var r=s(20629),a=s(9669),i=s.n(a);function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const l={data:function(){return{user_type:"CampusDirector",Deldialog:!1,dialog:!1,temp_id:"",IsDeleting:!1,IsAddUpdating:!1,IsResetting:!1,IsResetting_id:null,deleteIndex:null,type:"",search:"",valid:!0,role:["CampusDirector","Student"],form:new Form({firstName:"",middleName:"",lastName:"",email:"",password:"",password_confirmation:"",verified:null,department:null}),nameRules:[function(t){return!!t||"Field is required"},function(t){return t&&t.length<=20||"Name must be less than 20 characters"}],loginEmailRules:[function(t){return!!t||"Field is required"},function(t){return/.+@.+\..+/.test(t)||"Email must be valid"}],RoleRules:[function(t){return!!t||"Field is required"}],show:!1,show1:!1,rules:{required:function(t){return!!t||"Field is required."},min:function(t){return t&&t.length>=6||"min 6 characters"}},headers:[{sortable:!1},{text:"ID",value:"user_id",align:"start"},{text:"Last Name",value:"lastName",align:"start"},{text:"First Name",value:"firstName",align:"start"},{text:"Middle Name",value:"middleName",align:"start"},{text:"Email",value:"email",align:"start"},{text:"Password Reset",sortable:!1},{text:"Actions",sortable:!1}],CampusDirectorList:[],loading:!0,department:[]}},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},(0,r.Se)(["getCampusDirector","filterCampusDirector"])),methods:{fetchDeparmentList:function(){var t=this;i().get("/api/admin/department/all").then((function(e){t.department=e.data}))},SetPassword:function(t){var e=t.replace(/\s+/g,"-").toLowerCase();this.form.password="ISU-"+e,this.show=!0},openAdd:function(){this.type="add",this.dialog=!0},openEdit:function(t){this.type="edit",this.dialog=!0;var e=this.filterCampusDirector(t);this.form.user_id=e.user_id,this.form.firstName=e.firstName,this.form.middleName=e.middleName,this.form.lastName=e.lastName,this.form.email=e.email,this.form.verified=e.isVerified,this.form.department=e.department_id},openDelete:function(t,e){this.deleteIndex=e,this.delId=t,this.Deldialog=!0},updatePass:function(t){var e=this;this.IsResetting_id=t,this.IsResetting=!0,i().post("/api/admin/users/reset-password/"+t).then((function(t){e.toastSuccess(t.data),e.IsResetting=!1}))},deleteUser:function(){var t=this;this.IsDeleting=!0,i().delete("/api/admin/users/remove/"+this.delId).then((function(e){200==e.status?(t.getCampusDirector.splice(t.deleteIndex,1),t.toastSuccess("User successfully removed!"),t.IsDeleting=!1,t.deleteIndex=null):(t.toastError("Something went wrong!"),t.IsDeleting=!1),t.Deldialog=!1,t.$store.dispatch("fetchAllCampusDirector")}))},validate:function(){var t=this;this.$refs.RegisterForm.validate()?(this.IsAddUpdating=!0,"add"==this.type?(this.form.password_confirmation=this.form.password,i().post("/api/admin/users/add/".concat(this.user_type),this.form).then((function(e){200==e.status?(t.$refs.RegisterForm.reset(),t.valid=!0,t.dialog=!1,t.CampusDirectorList.unshift(e.data),t.toastSuccess("User successfully Added!"),t.IsAddUpdating=!1):(t.IsAddUpdating=!1,t.toastError("Something went wrong!"))})).catch((function(e){t.IsAddUpdating=!1,t.toastError("Something went wrong!")}))):"edit"==this.type&&this.form.post("/api/admin/users/update/"+this.form.user_id).then((function(e){200==e.status?(t.$refs.RegisterForm.reset(),t.valid=!0,t.dialog=!1,t.IsAddUpdating=!1,t.$store.dispatch("fetchAllCampusDirector").then((function(){t.CampusDirectorList=t.getCampusDirector})),t.toastSuccess("User Successfully Updated!")):(t.IsAddUpdating=!1,t.toastError("Something went wrong!"))})).catch((function(e){t.IsAddUpdating=!1,t.toastError("Something went wrong!")}))):(this.IsAddUpdating=!1,this.valid=!1)}},mounted:function(){var t=this;this.$store.dispatch("fetchAllCampusDirector").then((function(){t.CampusDirectorList=t.getCampusDirector,t.loading=!1}))}};var d=s(72446),c=s.n(d),m=s(60347),u={insert:"head",singleton:!1};c()(m.Z,u);m.Z.locals;const f=(0,s(51900).Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pt-4"},[s("h2",[t._v("\n            Manage Campus Director\n        ")]),t._v(" "),s("v-btn",{attrs:{bottom:"",color:"primary",dark:"",fab:"",fixed:"",right:""},on:{click:function(e){return t.openAdd()}}},[s("v-icon",[t._v("mdi-plus")])],1),t._v(" "),s("v-row",{staticClass:"pt-2"},[s("v-col",[t.loading?s("v-card",[s("v-skeleton-loader",{attrs:{loading:t.loading,type:"table"}})],1):t._e(),t._v(" "),t.loading?t._e():s("v-card",{attrs:{elevation:"2"}},[s("v-card-title",[t._v("\n                        Instructors\n\n                        "),s("v-spacer"),t._v(" "),s("div",{attrs:{width:"30%"}},[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.getCampusDirector,"items-per-page":10},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[s("tbody",[t._l(r,(function(e,r){return s("tr",{key:r},[s("td",{staticStyle:{width:"1%"}},[s("v-icon",{attrs:{color:0!=e.isActive?"success":""}},[t._v("mdi-circle-medium")])],1),t._v(" "),s("td",[t._v(" "+t._s(e.user_id)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.lastName)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.firstName)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.middleName)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.email)+" ")]),t._v(" "),s("td",[s("v-btn",{attrs:{color:"primary",disabled:t.IsResetting&&t.IsResetting_id==e.user_id},on:{click:function(s){return t.updatePass(e.user_id)}}},[t._v("\n                                            "+t._s(t.IsResetting&&t.IsResetting_id==e.user_id?"Reseting...":" Reset Password")+"\n                                        ")])],1),t._v(" "),s("td",[s("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(s){return t.openEdit(e.user_id)}}},[s("v-icon",[t._v("\n                                                mdi-pencil\n                                            ")])],1),t._v(" "),s("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(s){return t.openDelete(e.user_id,r)}}},[s("v-icon",[t._v("\n                                                mdi-delete\n                                            ")])],1)],1)])})),t._v(" "),0==r.length?s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"42"}},[t._v(" No data available")])]):t._e()],2)]}}],null,!1,187215090)})],1)],1)],1),t._v(" "),s("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{},[t._v("\n                    "+t._s("add"==this.type?"Add CampusDirector":"Update CampusDirector")+"\n                ")]),t._v(" "),s("v-divider"),t._v(" "),s("v-container",[s("v-form",{ref:"RegisterForm",staticClass:"text-center ",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-row",{staticClass:"pa-5"},[s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"firstName"}}),t._v(" "),s("v-text-field",{attrs:{rules:t.nameRules,label:"First Name",name:"firstName",type:"text",color:"primary",outlined:""},model:{value:t.form.firstName,callback:function(e){t.$set(t.form,"firstName",e)},expression:"form.firstName"}})],1),t._v(" "),s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"middleName"}}),t._v(" "),s("v-text-field",{attrs:{label:"Middle Name",rules:t.nameRules,name:"middleName",type:"text",color:"primary",outlined:""},model:{value:t.form.middleName,callback:function(e){t.$set(t.form,"middleName",e)},expression:"form.middleName"}})],1),t._v(" "),s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"lastName"}}),t._v(" "),s("v-text-field",{attrs:{label:"Last Name",rules:t.nameRules,name:"lastname",type:"text",color:"primary",outlined:""},on:{keyup:function(e){return t.SetPassword(t.form.lastName)}},model:{value:t.form.lastName,callback:function(e){t.$set(t.form,"lastName",e)},expression:"form.lastName"}})],1),t._v(" "),s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"email"}}),t._v(" "),s("v-text-field",{attrs:{autocomplete:"false",label:"Email",name:"Email",rules:t.loginEmailRules,type:"email",color:"primary",outlined:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),"add"==t.type?s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"password"}}),t._v(" "),s("v-text-field",{attrs:{autocomplete:"off","append-icon":t.show?"mdi-eye":"mdi-eye-off",label:"Password",name:"password",type:t.show?"text":"password",color:"primary",rules:[t.rules.required,t.rules.min],counter:"",outlined:""},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e()],1)],1)],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!1,t.$refs.RegisterForm.reset()}}},[t._v("Cancel")]),t._v(" "),s("v-btn",{attrs:{text:"",loading:t.IsAddUpdating,disabled:t.IsAddUpdating},on:{click:function(e){return t.validate()}}},[t._v("\n                        "+t._s("add"==this.type?"Add":"Update"))])],1)],1)],1),t._v(" "),s("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.Deldialog,callback:function(e){t.Deldialog=e},expression:"Deldialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v("\n                    Are you sure you want to delete this?\n                ")]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{text:""},on:{click:function(e){t.Deldialog=!1,t.$refs.RegisterForm.reset()}}},[t._v("\n                        No\n                    ")]),t._v(" "),s("v-btn",{attrs:{loading:t.IsDeleting,color:"primary",text:""},on:{click:function(e){return t.deleteUser()}}},[t._v("\n                        Yes\n                    ")])],1)],1)],1)],1)}),[],!1,null,"4cfb9a86",null).exports}}]);