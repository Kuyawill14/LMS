"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[417],{89888:(t,i,e)=>{e.d(i,{Z:()=>r});var a=e(1519),n=e.n(a)()((function(t){return t[1]}));n.push([t.id,"",""]);const r=n},80417:(t,i,e)=>{e.r(i),e.d(i,{default:()=>d});var a=e(9669),n=e.n(a);const r={props:["dialog","total_points","title","rubricsDetails"],data:function(){return{isSaved:!0,loading:!1,deleteDialog:!1,rubrics_id:"",deleteIndex:null,modal:this.dialog,criteria:[],num:-999,criteria_form:{id:"",points:"",criteria_name:"",description:""},valid:!0,nameRules:[function(t){return!!t||"Field is required"}],pointsRules:[function(t){return t&&t>=1||"Points should be above or equal to 1"},function(t){return t&&t<=100||"Points should not be above 100"},function(t){return!!t||"Points is required"}],closeDialog:!1,newChanges:!1,tmpCriteria:[],totalPoints:0}},methods:{SaveAndclose:function(t){t?this.$emit("CloseAndSave",this.criteria):this.$emit("CLoseRubricModal")},CheckChanges:function(){this.newChanges?this.closeDialog=!0:this.$emit("CLoseRubricModal")},closeModal:function(){var t=this;this.saveAllCriteria().then((function(){t.$emit("closeModal")}))},resetForm:function(){this.criteria_form.points="",this.criteria_form.criteria_name="",this.criteria_form.description=""},saveAllCriteria:function(){var t=this;0!=this.criteria.length&&(this.totalPoints=0,this.criteria.forEach((function(i){t.totalPoints+=i.points}))),this.totalPoints>100?this.toastError("The total points for the rubrics is above 100!"):(this.loading=!0,n().post("/api/classwork/rubrics-save/".concat(this.$route.query.clwk),{rubrics:this.criteria}).then((function(i){t.loading=!1,t.$emit("CloseAndSave",t.criteria)})).catch((function(i){t.toastError("Something went wrong"),t.loading=!1})))},validate:function(){this.$refs.form.validate()&&this.saveAllCriteria()},addCriteria:function(){var t=this;0!=this.criteria.length&&(this.totalPoints=0,this.criteria.forEach((function(i){t.totalPoints+=i.points}))),this.totalPoints>100?this.toastError("The total points is already 100"):(this.newChanges=!0,this.isSaved=!1,this.$refs.form.validate()?this.criteria.push({id:null,points:null,criteria_name:null,description:null}):this.toastError("Please Complete the fields"))},deleteRubrics:function(t){var i=this;this.loading=!0,n().delete("/api/classwork/rubric/delete/".concat(this.$route.query.clwk,"/").concat(t)).then((function(e){i.loading=!1,i.deleteDialog=!1,i.criteria.splice(i.deleteIndex,1),i.$emit("deleteRubrics",t)})).catch((function(t){i.toastError("Something went wrong"),i.loading=!1}))},CheckCriteria:function(){var t=this;0==this.rubricsDetails.length?this.criteria.push({id:null,points:null,criteria_name:null,description:null}):this.rubricsDetails.forEach((function(i){t.criteria.push({id:i.id,points:i.points,criteria_name:i.criteria_name,description:i.description}),t.totalPoints+=i.points}))}},mounted:function(){this.tmpCriteria=this.rubricsDetails,this.CheckCriteria()}};var s=e(72446),o=e.n(s),l=e(89888),c={insert:"head",singleton:!1};o()(l.Z,c);l.Z.locals;const d=(0,e(51900).Z)(r,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card",[e("v-dialog",{attrs:{width:"350"},model:{value:t.closeDialog,callback:function(i){t.closeDialog=i},expression:"closeDialog"}},[e("v-card",{staticClass:"pa-2"},[e("v-card-text",{staticClass:"font-weight-bold"},[e("div",{staticClass:"subtitle-1 ",staticStyle:{"line-height":"1.1"}},[t._v("\n                    You have new changes you want to save?\n                  ")])]),t._v(" "),e("v-card-actions",{staticClass:"pb-5"},[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"primary",rounded:"",outlined:""},on:{click:function(i){return t.SaveAndclose(!1)}}},[t._v("\n                Cancel\n            ")]),t._v(" "),e("v-btn",{attrs:{color:"primary",rounded:""},on:{click:function(i){return t.SaveAndclose(!0)}}},[t._v("\n                Confirm\n            ")])],1)],1)],1),t._v(" "),e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(i){t.valid=i},expression:"valid"}},[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:"",dark:""},on:{click:function(i){return t.CheckChanges()}}},[e("v-icon",[t._v("mdi-close")])],1),t._v(" "),e("v-toolbar-title",[t._v("Rubrics")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-toolbar-title",[t._v(t._s(t.title)+" ("+t._s(t.total_points)+"pts)")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-toolbar-items",[e("v-btn",{attrs:{dark:"",text:""},on:{click:function(i){return t.validate()}}},[t._v("\n                    Save\n                ")])],1)],1),t._v(" "),e("v-container",[e("v-row",{staticClass:"pt-4",attrs:{align:"center"}},[e("vue-element-loading",{attrs:{active:t.loading,spinner:"bar-fade-scale",color:"#FF6700"}}),t._v(" "),t._l(t.criteria,(function(i,a){return e("v-col",{key:a,attrs:{cols:"3"}},[e("v-card",{staticClass:"pa-5"},[e("v-btn",{staticClass:"mx-2",staticStyle:{position:"absolute",right:"-20px",top:"-11px",height:"20px !important",width:"20px !important"},attrs:{fab:"",dark:"","x-small":"",color:"red"},on:{click:function(e){t.deleteDialog=!0,t.rubrics_id=i.id,t.deleteIndex=a}}},[e("v-icon",{staticStyle:{"font-size":"15px"},attrs:{dark:""}},[t._v("\n                                mdi-close\n                            ")])],1),t._v(" "),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{staticClass:"text-field",attrs:{outlined:"",label:"Criteria name",rules:t.nameRules,type:"text",required:""},model:{value:i.criteria_name,callback:function(e){t.$set(i,"criteria_name",e)},expression:"item.criteria_name"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{staticClass:"text-field",attrs:{outlined:"",label:"Points",type:"number",rules:t.pointsRules,required:""},model:{value:i.points,callback:function(e){t.$set(i,"points",e)},expression:"item.points"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-textarea",{staticClass:"text-field",attrs:{label:"Description",outlined:"","auto-grow":""},model:{value:i.description,callback:function(e){t.$set(i,"description",e)},expression:"item.description"}})],1)],1)],1)],1)})),t._v(" "),e("v-btn",{staticClass:"ml-3",attrs:{color:"primary"},on:{click:t.addCriteria}},[e("v-icon",[t._v("\n                        mdi-plus\n                    ")])],1)],2)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.deleteDialog,callback:function(i){t.deleteDialog=i},expression:"deleteDialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Confirmation")])]),t._v(" "),e("v-card-text",[t._v("\n                Are you sure you want to delete this Item?\n            ")]),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{text:""},on:{click:function(i){t.deleteDialog=!1}}},[t._v("\n                    Cancel\n                ")]),t._v(" "),e("v-btn",{attrs:{color:"red",text:"",loading:t.loading},on:{click:function(i){return t.deleteRubrics(t.rubrics_id)}}},[t._v("\n                    Delete\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);