"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5055],{50702:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(1519),a=s.n(r)()((function(e){return e[1]}));a.push([e.id,".v-input__slot{margin-bottom:0!important}",""]);const i=a},5055:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var r=s(87757),a=s.n(r),i=s(20629),n=s(9669),l=s.n(n);function o(e,t,s,r,a,i,n){try{var l=e[i](n),o=l.value}catch(e){return void s(e)}l.done?t(o):Promise.resolve(o).then(r,a)}function d(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?d(Object(s),!0).forEach((function(t){u(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function u(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const m={data:function(){return{IsBulkadding:!1,department:[],user_type:"Teacher",Deldialog:!1,dialog:!1,dialog_multi_user:!1,temp_id:"",IsDeleting:!1,IsAddUpdating:!1,IsResetting:!1,IsResetting_id:null,deleteIndex:null,type:"",search:"",valid:!0,role:["Teacher","Student"],form:new Form({firstName:"",middleName:"",lastName:"",email:"",password:"",password_confirmation:"",verified:null,department:null}),nameRules:[function(e){return!!e||"Field is required"},function(e){return e&&e.length<=20||"Name must be less than 20 characters"}],loginEmailRules:[function(e){return!!e||"Field is required"},function(e){return/.+@.+\..+/.test(e)||"Email must be valid"}],RoleRules:[function(e){return!!e||"Field is required"}],show:!1,show1:!1,rules:{required:function(e){return!!e||"Field is required."},min:function(e){return e&&e.length>=6||"min 6 characters"}},headers:[{sortable:!0},{text:"ID",value:"user_id",align:"start"},{text:"Last Name",value:"lastName",align:"start"},{text:"First Name",value:"firstName",align:"start"},{text:"Middle Name",value:"middleName",align:"start"},{text:"Email",value:"email",align:"start"},{text:"Deparment",value:"department_short_name",align:"start"},{text:"Verified",value:"verified",align:"start"},{text:"Password Reset",sortable:!1},{text:"Actions",sortable:!1}],teacherList:[],loading:!0,direction:"top",fab:!1,fling:!1,hover:!1,tabs:null,top:!1,right:!0,bottom:!0,left:!1,transition:"slide-y-reverse-transition",json_users_file:null,json_users_text_area:null,department_id:null}},watch:{top:function(e){this.bottom=!e},right:function(e){this.left=!e},bottom:function(e){this.top=!e},left:function(e){this.right=!e}},computed:c(c({},(0,i.Se)(["getTeachers","filterTeacher"])),{},{filteredItems:function(){var e=this;return this.search?this.teacherList.filter((function(t){return e.search.toLowerCase().split(" ").every((function(e){return t.firstName.toLowerCase().includes(e)||t.lastName.toLowerCase().includes(e)||t.middleName.toLowerCase().includes(e)||t.user_id.toString().includes(e)}))})):this.teacherList}}),methods:{addBulk:function(){var e=this;if(null!=this.department&&(null!=this.json_users_file||null!=this.json_users_text_area)){var t=null!=this.json_users_file?this.json_users_file:JSON.parse(this.json_users_text_area);this.IsBulkadding=!0,l().post("/api/admin/users/bulk_add",{user_type:this.user_type,users_data:t,department:this.department_id}).then((function(t){200==t.status?(e.$refs.RegisterForm.reset(),e.$store.dispatch("fetchAllTeachers").then((function(){e.teacherList=e.getTeachers,e.valid=!0,e.dialog_multi_user=!1,e.toastSuccess("User successfully Added!"),e.IsBulkadding=!1,e.json_users_text_area=null,e.json_users_file=null}))):(e.IsBulkadding=!1,e.toastError("Something went wrong!"),e.$refs.RegisterForm.reset(),e.json_users_text_area=null,e.json_users_file=null)})).catch((function(t){e.IsBulkadding=!1,e.toastError("Something went wrong!"),e.$refs.RegisterForm.reset(),e.json_users_text_area=null,e.json_users_file=null}))}},onFileChange:function(e){null!=e?this.readFile(e):this.json_users_file=null},readFile:function(e){var t=this,s=new FileReader;s.onload=function(e){var s=e.target.result.replaceAll("\r","").split("\n"),r=s[0].split(","),a=s.slice(1).map((function(e){var t=e.split(",");return Object.fromEntries(r.map((function(e,s){return[e,t[s]]})))}));t.json_users_file=a},s.readAsText(e)},SetPassword:function(e){var t=e.replace(/\s+/g,"-").toLowerCase();this.form.password="ISU-"+t,this.show=!0},openAdd:function(){this.type="add",this.dialog=!0},openAdd_multiple_user:function(){this.dialog_multi_user=!0},openEdit:function(e){this.type="edit",this.dialog=!0;var t=this.filterTeacher(e);this.form.user_id=t.user_id,this.form.firstName=t.firstName,this.form.middleName=t.middleName,this.form.lastName=t.lastName,this.form.email=t.email,this.form.verified=t.isVerified,this.form.department=t.department_id},openDelete:function(e,t){this.deleteIndex=t,this.delId=e,this.Deldialog=!0},updatePass:function(e){var t=this;this.IsResetting_id=e,this.IsResetting=!0,l().post("/api/admin/users/reset-password/"+e).then((function(e){t.toastSuccess(e.data),t.IsResetting=!1}))},deleteUser:function(){var e=this;this.IsDeleting=!0,l().delete("/api/admin/users/remove/"+this.delId).then((function(t){200==t.status?(e.teacherList.splice(e.deleteIndex,1),e.toastSuccess("User successfully removed!"),e.IsDeleting=!1,e.deleteIndex=null):(e.toastError("Something went wrong!"),e.IsDeleting=!1),e.Deldialog=!1,e.$store.dispatch("fetchAllTeachers")}))},updateTeacherDetails:function(){this.$store.dispatch("updateTeacher",this.form)},VerifyUser:function(e){return(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l().put("/api/admin/verifyUser/"+e).then((function(e){}));case 1:case"end":return t.stop()}}),t)})),function(){var e=this,s=arguments;return new Promise((function(r,a){var i=t.apply(e,s);function n(e){o(i,r,a,n,l,"next",e)}function l(e){o(i,r,a,n,l,"throw",e)}n(void 0)}))})();var t},validate:function(){var e=this;this.$refs.RegisterForm.validate()?(this.IsAddUpdating=!0,"add"==this.type?(this.form.password_confirmation=this.form.password,l().post("/api/admin/users/add/".concat(this.user_type),this.form).then((function(t){200==t.status?(e.$refs.RegisterForm.reset(),e.valid=!0,e.dialog=!1,e.teacherList.unshift(t.data),e.toastSuccess("User successfully Added!"),e.IsAddUpdating=!1):(e.IsAddUpdating=!1,e.toastError("Something went wrong!"))})).catch((function(t){e.IsAddUpdating=!1,e.toastError("Something went wrong!")}))):"edit"==this.type&&this.form.post("/api/admin/users/update/"+this.form.user_id).then((function(t){200==t.status?(e.$refs.RegisterForm.reset(),e.valid=!0,e.dialog=!1,e.IsAddUpdating=!1,e.$store.dispatch("fetchAllTeachers").then((function(){e.teacherList=e.getTeachers})),e.toastSuccess("User Successfully Updated!")):(e.IsAddUpdating=!1,e.toastError("Something went wrong!"))})).catch((function(t){e.IsAddUpdating=!1,e.toastError("Something went wrong!")}))):(this.IsAddUpdating=!1,this.valid=!1)},fetchDeparmentList:function(){var e=this;l().get("/api/admin/department/all").then((function(t){e.department=t.data}))}},mounted:function(){var e=this;this.fetchDeparmentList(),this.$store.dispatch("fetchAllTeachers").then((function(){e.teacherList=e.getTeachers,e.loading=!1}))}};var f=s(72446),v=s.n(f),p=s(50702),_={insert:"head",singleton:!1};v()(p.Z,_);p.Z.locals;const h=(0,s(51900).Z)(m,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pt-4"},[s("v-row",[s("v-col",{attrs:{cols:"12",lg:"9"}},[s("h2",[e._v("\n                Manage Instructors\n            ")])]),e._v(" "),s("v-col",{staticStyle:{display:"flex","justify-content":"end"},attrs:{cols:"12",lg:"3"}},[s("v-btn",{staticClass:"mr-3",attrs:{dark:"",color:"blue"},on:{click:function(t){return e.openAdd_multiple_user()}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-upload")]),e._v("\n                Import CSV\n            ")],1),e._v(" "),s("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){return e.openAdd()}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-account-plus-outline")]),e._v("\n                Add Teacher\n            ")],1)],1)],1),e._v(" "),s("v-row",{staticClass:"pt-2"},[s("v-col",[e.loading?s("v-card",[s("v-skeleton-loader",{attrs:{loading:e.loading,type:"table"}})],1):e._e(),e._v(" "),e.loading?e._e():s("v-card",{attrs:{elevation:"2"}},[s("v-card-title",[e._v("\n                    Teacher\n\n                    "),s("v-spacer"),e._v(" "),s("div",{attrs:{width:"30%"}},[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),s("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.filteredItems,"items-per-page":10},scopedSlots:e._u([{key:"body",fn:function(t){var r=t.items;return[s("tbody",[e._l(r,(function(t,r){return s("tr",{key:r},[s("td",{staticStyle:{width:"1%"}},[s("v-icon",{attrs:{color:0!=t.isActive?"success":""}},[e._v("mdi-circle-medium")])],1),e._v(" "),s("td",[e._v(" "+e._s(t.user_id)+" ")]),e._v(" "),s("td",[e._v(" "+e._s(t.lastName)+" ")]),e._v(" "),s("td",[e._v(" "+e._s(t.firstName)+" ")]),e._v(" "),s("td",[e._v(" "+e._s(t.middleName)+" ")]),e._v(" "),s("td",[e._v(" "+e._s(t.email)+" ")]),e._v(" "),s("td",[e._v(" "+e._s(t.department_short_name)+" ")]),e._v(" "),s("td",[s("v-icon",{attrs:{color:null!=t.isVerified?"success":""}},[e._v("\n                                        "+e._s(t.isVerified?"mdi-check":""))])],1),e._v(" "),s("td",[s("v-btn",{attrs:{color:"primary",disabled:e.IsResetting&&e.IsResetting_id==t.user_id},on:{click:function(s){return e.updatePass(t.user_id)}}},[e._v("\n                                        "+e._s(e.IsResetting&&e.IsResetting_id==t.user_id?"Reseting...":" Reset Password")+"\n                                    ")])],1),e._v(" "),s("td",[s("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(s){return e.openEdit(t.user_id)}}},[s("v-icon",[e._v("\n                                            mdi-pencil\n                                        ")])],1),e._v(" "),s("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(s){return e.openDelete(t.user_id,r)}}},[s("v-icon",[e._v("\n                                            mdi-delete\n                                        ")])],1)],1)])})),e._v(" "),0==r.length?s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"42"}},[e._v(" No data available")])]):e._e()],2)]}}],null,!1,1751047877)})],1)],1)],1),e._v(" "),s("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",{},[e._v("\n                "+e._s("add"==this.type?"Add Teacher":"Update Teacher")+"\n            ")]),e._v(" "),s("v-divider"),e._v(" "),s("v-container",[s("v-form",{ref:"RegisterForm",staticClass:"text-center ",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-row",{staticClass:"pa-5"},[s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:e.form,field:"firstName"}}),e._v(" "),s("v-text-field",{attrs:{rules:e.nameRules,label:"First Name",name:"firstName",type:"text",color:"primary",outlined:""},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})],1),e._v(" "),s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:e.form,field:"middleName"}}),e._v(" "),s("v-text-field",{attrs:{label:"Middle Name",rules:e.nameRules,name:"middleName",type:"text",color:"primary",outlined:""},model:{value:e.form.middleName,callback:function(t){e.$set(e.form,"middleName",t)},expression:"form.middleName"}})],1),e._v(" "),s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:e.form,field:"lastName"}}),e._v(" "),s("v-text-field",{attrs:{label:"Last Name",rules:e.nameRules,name:"lastname",type:"text",color:"primary",outlined:""},on:{keyup:function(t){return e.SetPassword(e.form.lastName)}},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})],1),e._v(" "),s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:e.form,field:"email"}}),e._v(" "),s("v-text-field",{attrs:{autocomplete:"false",label:"Email",name:"Email",rules:e.loginEmailRules,type:"email",color:"primary",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),null==e.form.verified&&"edit"==e.type?s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("v-btn",{attrs:{block:"",rounded:"",large:"",color:"primary"},on:{click:function(t){return e.VerifyUser(e.form.user_id)}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-account-check-outline")]),e._v("\n                                Verify user\n                            ")],1)],1):e._e(),e._v(" "),"add"==e.type?s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:e.form,field:"password"}}),e._v(" "),s("v-text-field",{attrs:{autocomplete:"off","append-icon":e.show?"mdi-eye":"mdi-eye-off",label:"Password",name:"password",type:e.show?"text":"password",color:"primary",rules:[e.rules.required,e.rules.min],counter:"",outlined:""},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),e._v(" "),s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("HasError",{staticClass:"error--text",attrs:{form:e.form,field:"department"}}),e._v(" "),s("v-select",{attrs:{items:e.department,"item-value":"id","item-text":"name","return-object":"",label:"Department",dense:"",outlined:""},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1)],1)],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dialog=!1,e.$refs.RegisterForm.reset()}}},[e._v("Cancel")]),e._v(" "),s("v-btn",{attrs:{text:"",loading:e.IsAddUpdating,disabled:e.IsAddUpdating},on:{click:function(t){return e.validate()}}},[e._v("\n                    "+e._s("add"==this.type?"Add":"Update"))])],1)],1)],1),e._v(" "),s("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.Deldialog,callback:function(t){e.Deldialog=t},expression:"Deldialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[e._v("\n                Are you sure you want to delete this?\n            ")]),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{text:""},on:{click:function(t){e.Deldialog=!1,e.$refs.RegisterForm.reset()}}},[e._v("\n                    No\n                ")]),e._v(" "),s("v-btn",{attrs:{loading:e.IsDeleting,color:"primary",text:""},on:{click:function(t){return e.deleteUser()}}},[e._v("\n                    Yes\n                ")])],1)],1)],1),e._v(" "),s("v-dialog",{attrs:{width:"500",persistent:""},model:{value:e.dialog_multi_user,callback:function(t){e.dialog_multi_user=t},expression:"dialog_multi_user"}},[s("v-card",[s("v-card-title",{},[e._v("\n                Bulk Add Teachers\n            ")]),e._v(" "),s("v-divider"),e._v(" "),s("v-container",[s("v-form",{ref:"RegisterForm",staticClass:"text-center ",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-row",{staticClass:"pa-5"},[s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("v-select",{attrs:{items:e.department,"item-value":"id","item-text":"name","return-object":"",label:"Department",dense:"",outlined:""},model:{value:e.department_id,callback:function(t){e.department_id=t},expression:"department_id"}})],1),e._v(" "),s("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[s("v-file-input",{attrs:{accept:".csv","prepend-inner-icon":"mdi-file-outline","prepend-icon":"",chips:"",outlined:"",label:"Upload CSV File",disabled:null!=e.json_users_text_area},on:{change:e.onFileChange}})],1)],1)],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dialog_multi_user=!1,e.json_users_text_area="",e.json_users_file=null}}},[e._v("Cancel\n                ")]),e._v(" "),s("v-btn",{attrs:{text:"",loading:e.IsBulkadding,disabled:e.IsBulkadding},on:{click:function(t){return e.addBulk()}}},[e._v("\n                    Add Bulk")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);