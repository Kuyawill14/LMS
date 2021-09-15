"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2495],{2495:(t,e,s)=>{s.r(e),s.d(e,{default:()=>o});var i=s(7757),a=s.n(i),l=s(2239);function n(t,e,s,i,a,l,n){try{var r=t[l](n),o=r.value}catch(t){return void s(t)}r.done?e(o):Promise.resolve(o).then(i,a)}const r={props:["ListData","classworkDetails","Submitted","Graded","ClassList"],components:{checksubjective:function(){return s.e(4053).then(s.bind(s,4053))}},data:function(){return{isloading:!0,selectedTasks:[],CheckData:null,search:"",Class:this.$route.params.id,dialog:!1,headers:[{text:"id",align:"start",value:"id"},{text:"Name",value:"name"},{text:"Status",value:"status",align:"center"},{text:"Graded",value:"graded",align:"center"},{text:"Points",value:"points"},{text:"Actions",sortable:!1}],isSavingScore:!1,score:null,StatusType:["All","Submitted","Graded","No Submission"],selectedStatus:"All",isStarting:!1}},computed:{studentSubmissionList:function(){var t=this;return this.search?this.ListData.filter((function(e){return t.search.toLowerCase().split(" ").every((function(t){return e.firstName.toLowerCase().includes(t)||e.lastName.toLowerCase().includes(t)}))})):this.ListData}},methods:{format_date:function(t){if(t)return(0,l.Z)(String(t)).format("MM/d/YYYY, hh:mm A")},SaveScore:function(t,e){clearTimeout(this.timeout);var s=this;this.timeout=setTimeout((function(){s.score=e,s.isSavingScore=!s.isSavingScore,s.UpdateScore(t)}),1e3)},UpdateScore:function(t){var e,s=this;return(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.score<=s.classworkDetails.points?axios.put("/api/submission/update-score/"+t,{score:s.score}).then((function(e){200==e.status&&(s.toastSuccess("Score Updated"),s.isSavingScore=!s.isSavingScore,s.$emit("UpdateSubmission"),s.ListData.forEach((function(e){e.id==t&&(e.graded=1)})))})):(s.isSavingScore=!s.isSavingScore,s.toastError("Score is higher than the set points!"));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(i,a){var l=e.apply(t,s);function r(t){n(l,i,a,r,o,"next",t)}function o(t){n(l,i,a,r,o,"throw",t)}r(void 0)}))})()}},mounted:function(){}};const o=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-2"},[t.dialog?s("v-row",{attrs:{justify:"center"}},[s("v-overlay",{attrs:{value:t.isStarting}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.dialog?s("checksubjective",{directives:[{name:"show",rawName:"v-show",value:!t.isStarting,expression:"!isStarting"}],attrs:{classworkDetails:t.classworkDetails,CheckData:t.CheckData},on:{isMounted:function(e){t.isStarting=!1},UpdateSubmission:function(e){return t.$emit("UpdateSubmission")},closeDialog:function(e){t.dialog=!t.dialog}}}):t._e()],1)],1):t._e(),t._v(" "),s("v-row",{staticClass:"pa-1"},[s("v-col",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"pl-5 d-none":"pl-5",attrs:{cols:"12",md:"12",lg:"4",xl:"4"}},[s("v-row",[s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[s("h3",[t._v("Students")])]),t._v(" "),s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[s("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"",dense:"",label:"Class",items:t.ClassList,"item-text":"class_name","item-value":"class_id"},model:{value:t.Class,callback:function(e){t.Class=e},expression:"Class"}})],1),t._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-list",[s("v-list-item-group",t._l(t.ListData,(function(e,i){return s("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.Class==t.$route.params.id||t.Class==e.class_id,expression:"Class == $route.params.id || Class == item.class_id"}],key:i,on:{click:function(s){t.CheckData=e,t.dialog=!t.dialog,t.isStarting=!0}}},[s("v-list-item-avatar",{attrs:{color:"secondary"}},[s("v-img",{attrs:{alt:"Profile",src:null==e.profile_pic||""==e.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+e.firstName+" "+e.lastName:e.profile_pic}})],1),t._v(" "),s("v-list-item-content",[s("v-list-item-title",{staticClass:"font-weight-medium"},[t._v(t._s(e.firstName+" "+e.lastName))]),t._v(" "),1==e.graded?s("v-list-item-subtitle",[s("v-icon",{attrs:{small:"",color:"success"}},[t._v("mdi-check")]),t._v(" Graded")],1):t._e()],1),t._v(" "),s("v-list-item-action",[s("v-text-field",{staticClass:"ma-0 pa-0",attrs:{loading:t.isSavingScore,dense:"",outlined:"",type:"number",suffix:"/"+t.classworkDetails.points,max:t.classworkDetails.points,maxlength:t.classworkDetails.points.toString().length,min:"0"},on:{keyup:function(s){return t.SaveScore(e.id,e.points)}},model:{value:e.points,callback:function(s){t.$set(e,"points",s)},expression:"item.points"}})],1)],1)})),1)],1)],1)],1)],1),t._v(" "),s("v-col",{staticClass:"pa-3 pl-6",attrs:{cols:"12",md:"12",lg:"8",xl:"8"}},[s("v-row",[s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[s("h3",[t._v(t._s(t.classworkDetails.title))])]),t._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-row",[s("v-col",{attrs:{cols:"2",sm:"2",md:"1"}},[s("div",{staticClass:"d-flex flex-column"},[s("h1",[t._v(t._s(t.Submitted))]),t._v(" "),s("small",[t._v("Submitted")])])]),t._v(" "),s("v-col",{attrs:{cols:"2",sm:"2",md:"1"}},[s("div",{staticClass:"d-flex flex-column"},[s("h1",[t._v(t._s(t.Graded))]),t._v(" "),s("small",[t._v("Graded")])])])],1),t._v(" "),s("v-divider")],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-1",attrs:{cols:"12",md:"12",lg:"3",xl:"3"}},[s("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"",dense:"",label:"Status",items:t.StatusType},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-1",attrs:{cols:"12",md:"12",lg:"9",xl:"9"}},[s("v-text-field",{staticClass:"mb-0 pb-0",attrs:{"prepend-inner-icon":"mdi-magnify",outlined:"",dense:"",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-row",t._l(t.studentSubmissionList,(function(e,i){return s("v-col",{directives:[{name:"show",rawName:"v-show",value:"Submitted"==e.status,expression:"item.status == 'Submitted'"}],key:i,staticClass:"text-center",attrs:{link:"",cols:"6",md:"3",lg:"3"}},["All"==t.selectedStatus||t.selectedStatus==e.status||"Graded"==t.selectedStatus&&1==e.graded||"No Submission"==t.selectedStatus&&(null==e.status||""==e.status)?s("v-card",{staticClass:"mx-auto",staticStyle:{cursor:"pointer"},attrs:{outlined:""}},[s("v-list-item",{attrs:{link:""},on:{click:function(s){t.CheckData=e,t.dialog=!t.dialog,t.isStarting=!0}}},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"d-flex flex-column align-self-center"},[s("div",{staticClass:"mb-2",staticStyle:{"max-height":"30px",overflow:"hidden"}},[t._v(t._s(e.firstName+" "+e.lastName))]),t._v(" "),s("v-divider"),t._v(" "),s("v-icon",{attrs:{color:null!=e.Submitted_Answers?"pdf"==e.Submitted_Answers[0].fileExte?"red":"docx"==e.Submitted_Answers[0].fileExte||"doc"==e.Submitted_Answers[0].fileExte?"blue":"link"==e.Submitted_Answers[0].fileExte?"green":"jpg"==e.Submitted_Answers[0].fileExte||"jpeg"==e.Submitted_Answers[0].fileExte||"gif"==e.Submitted_Answers[0].fileExte||"svg"==e.Submitted_Answers[0].fileExte||"png"==e.Submitted_Answers[0].fileExte||"bmp"==e.Submitted_Answers[0].fileExte?"info":"":"primary","x-large":""}},[t._v("\r\n                                           "+t._s(null!=e.Submitted_Answers?"pdf"==e.Submitted_Answers[0].fileExte?"mdi-file-pdf":"txt"==e.Submitted_Answers[0].fileExte?"mdi-note-text-outline":"docx"==e.Submitted_Answers[0].fileExte||"doc"==e.Submitted_Answers[0].fileExte?"mdi-file-word":"link"==e.Submitted_Answers[0].fileExte?"mdi-file-link":"jpg"==e.Submitted_Answers[0].fileExte||"jpeg"==e.Submitted_Answers[0].fileExte||"gif"==e.Submitted_Answers[0].fileExte||"svg"==e.Submitted_Answers[0].fileExte||"png"==e.Submitted_Answers[0].fileExte||"bmp"==e.Submitted_Answers[0].fileExte?"mdi-image":"":"")+"\r\n                                         ")]),t._v(" "),s("small",{staticStyle:{"max-height":"12px",overflow:"hidden"}},[t._v(" "+t._s(null!=e.Submitted_Answers?e.Submitted_Answers[0].name:""))])],1)],1)],1)],1):t._e()],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);