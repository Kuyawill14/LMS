"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5711],{95711:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var s=n(9669),o=n.n(s);const a={props:["class_id"],data:function(){return{loading:!1,dialog:!1,moduleForm:new Form({module_name:"",description:"",course_id:""}),class_details:"",id:""}},methods:{toastSuccess:function(t){return this.$toasted.success(t,{theme:"toasted-primary",position:"top-center",icon:"done",duration:5e3})},deleteClass:function(){var t=this;this.loading=!0,o().delete("/api/class/delete/"+this.class_id).then((function(e){t.$store.dispatch("fetchSubjectCourseClassList",t.$route.params.id),t.$emit("closeModal"),t.loading=!1})).catch((function(e){t.loading=!1,t.toastSuccess("Something went wrong")}))}}};const c=(0,n(51900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Confirmation")])]),t._v(" "),n("v-card-text",[t._v("\n        Are you sure you want to delete this class?\n    ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("closeModal")}}},[t._v("\n            Cancel\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"red",text:"",loading:t.loading},on:{click:function(e){return t.deleteClass()}}},[t._v("\n            Delete\n        ")])],1)],1)}),[],!1,null,null,null).exports}}]);