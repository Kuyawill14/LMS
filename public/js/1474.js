"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1474],{2041:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(1519),i=n.n(a)()((function(t){return t[1]}));i.push([t.id,".v-input__slot{margin-bottom:0!important}",""]);const r=i},1474:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var a=n(7757),i=n.n(a),r=n(9669),s=n.n(r);function o(t,e,n,a,i,r,s){try{var o=t[r](s),d=o.value}catch(t){return void n(t)}o.done?e(d):Promise.resolve(d).then(a,i)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function s(t){o(r,a,i,s,d,"next",t)}function d(t){o(r,a,i,s,d,"throw",t)}s(void 0)}))}}const l={data:function(){return{departmentsList:[],header:[{text:"Department Name",value:"name",align:"start"},{text:"Description",value:"description",align:"start"},{text:"Actions",sortable:!1}],type:null,valid:!0,dialog:!1,Deldialog:!1,Rules:[function(t){return!!t||"Field is required"}],form:new Form({name:"",description:""}),IsDeleting:!1,deleteIndex:null,deleteId:null,isUpdateId:null,isUpdateIndex:null,isAdding:!1}},methods:{fetchDeparmentList:function(){var t=this;s().get("/api/admin/department/all").then((function(e){t.departmentsList=e.data}))},addDepartment:function(){var t=this;return d(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s().post("/api/admin/department/add",t.form).then((function(e){201==e.status&&(t.departmentsList.push(e.data),t.dialog=!1,t.isAdding=!1,t.$refs.form.reset())}));case 1:case"end":return e.stop()}}),e)})))()},validate:function(){this.isAdding=!0,this.$refs.form.validate()?"add"==this.type?this.addDepartment():"edit"==this.type&&this.UpdateDepartmentDetails():this.isAdding=!1},deleteDepartment:function(){var t=this;return d(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s().delete("/api/admin/department/delete/"+t.deleteId).then((function(e){1==e.data.success&&(t.departmentsList.splice(t.deleteIndex,1),t.Deldialog=!1)}));case 1:case"end":return e.stop()}}),e)})))()},OpendepartmentDialog:function(t,e){this.form.name=t.name,this.form.description=t.description,this.isUpdateId=t.id,this.isUpdateIndex=e,this.type="edit",this.dialog=!0},UpdateDepartmentDetails:function(){var t=this;return d(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s().put("/api/admin/department/update/"+t.isUpdateId,t.form).then((function(e){1==e.data.success&&(t.departmentsList[t.isUpdateIndex].name=t.form.name,t.departmentsList[t.isUpdateIndex].description=t.form.description,t.isAdding=!1,t.dialog=!1,t.$refs.form.reset())}));case 1:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchDeparmentList()}};var c=n(2446),p=n.n(c),u=n(2041),v={insert:"head",singleton:!1};p()(u.Z,v);u.Z.locals;const m=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-2"},[n("h2",[t._v("\n        Manage Departments\n    ")]),t._v(" "),n("v-row",{staticClass:"pt-2"},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{elevation:"2"}},[n("v-card-title",[n("v-btn",{staticClass:"white--text ml-auto",attrs:{color:"primary",small:"",align:"right"},on:{click:function(e){t.dialog=!0,t.type="add"}}},[t._v("\n                        Department\n                        "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                            mdi-plus\n                        ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.header,items:t.departmentsList,"items-per-page":5},scopedSlots:t._u([{key:"body",fn:function(e){var a=e.items;return[n("tbody",t._l(a,(function(e,a){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.description))]),t._v(" "),n("td",{staticStyle:{width:"8%"}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(i){var r=i.on,s=i.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:""},on:{click:function(n){return t.OpendepartmentDialog(e,a)}}},"v-btn",s,!1),r),[n("v-icon",[t._v("mdi-pencil-box-multiple-outline")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Edit")])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(i){var r=i.on,s=i.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:""},on:{click:function(n){t.Deldialog=!0,t.deleteIndex=a,t.deleteId=e.id}}},"v-btn",s,!1),r),[n("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Delete")])])],1)])})),0)]}}])})],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{},[t._v("\n                "+t._s("add"==this.type?"Add Department":"Update Department")+"\n            ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-container",{staticClass:"mb-0 pb-0"},[n("v-form",{ref:"form",staticClass:"text-center ",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{staticClass:"pa-5"},[n("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[n("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"name"}}),t._v(" "),n("v-textarea",{staticClass:"mb-0 pb-0",attrs:{type:"text",rows:"1",name:"name",rules:t.Rules,label:"Department Name","auto-grow":"",outlined:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("v-col",{staticClass:"ma-0 pa-0 mb-1",attrs:{cols:"12",md:"12"}},[n("HasError",{staticClass:"error--text",attrs:{form:t.form,field:"middleName"}}),t._v(" "),n("v-textarea",{staticClass:"mb-0 pb-0",attrs:{type:"text",name:"description",rules:t.Rules,label:"Description","auto-grow":"",outlined:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1,t.$refs.form.reset()}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{loading:t.isAdding,text:"",color:"primary"},on:{click:function(e){return t.validate()}}},[t._v("\n                    "+t._s("add"==this.type?"Add":"Update"))])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.Deldialog,callback:function(e){t.Deldialog=e},expression:"Deldialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n                Are you sure you want to delete this?\n            ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.Deldialog=!1}}},[t._v("\n                    No\n                ")]),t._v(" "),n("v-btn",{attrs:{loading:t.IsDeleting,color:"primary",text:""},on:{click:function(e){return t.deleteDepartment()}}},[t._v("\n                    Yes\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);