"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4553],{99213:(t,e,s)=>{s.d(e,{Z:()=>a});var i=s(1519),r=s.n(i)()((function(t){return t[1]}));r.push([t.id,".v-input__control[data-v-3a772e25]{margin:0;padding:0}",""]);const a=r},84553:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});var i=s(87757),r=s.n(i),a=s(80008),n=s.n(a);function o(t,e,s,i,r,a,n){try{var o=t[a](n),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(i,r)}function l(t){return function(){var e=this,s=arguments;return new Promise((function(i,r){var a=t.apply(e,s);function n(t){o(a,i,r,n,l,"next",t)}function l(t){o(a,i,r,n,l,"throw",t)}n(void 0)}))}}const c={props:["ListData","classworkDetails","Submitted","Graded","ClassList","class_id"],components:{checksubjective:function(){return s.e(1989).then(s.bind(s,1989))}},data:function(){return{isloading:!0,selectedTasks:[],CheckData:null,search:"",Class:this.class_id,dialog:!1,headers:[{text:"id",align:"start",value:"id"},{text:"Name",value:"name"},{text:"Status",value:"status",align:"center"},{text:"Graded",value:"graded",align:"center"},{text:"Points",value:"points"},{text:"Actions",sortable:!1}],isSavingScore:!1,score:null,StatusType:["All","Submitted","Graded","No Submission"],selectedStatus:"Submitted",SortType:["Name","Highest Score","Lowest Score"],selectedShowNumber:24,ShowNumber:[24,36,48,"all"],selectedSort:"Name",isStarting:!1,isFiltered:!1,Over_total:0,Submitted_count:0,selected_index:null}},watch:{class_id:function(t,e){this.Class=this.class_id}},computed:{studentSubmissionList:function(){var t=this;if(this.search){this.search;return this.ListData.filter((function(e){return e.firstName.toLowerCase().includes(t.search.toLowerCase())||e.lastName.toLowerCase().includes(t.search.toLowerCase())}))}if("All"==this.selectedStatus){var e=this.ListData;if("Name"==this.selectedSort)return"all"!=this.selectedShowNumber?e.sort().splice(0,this.selectedShowNumber):e.sort();if("Lowest Score"==this.selectedSort){var s=e.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?s.splice(0,this.selectedShowNumber):s}if("Highest Score"==this.selectedSort){var i=e.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?i.reverse().splice(0,this.selectedShowNumber):i.reverse()}}else if("Submitted"==this.selectedStatus){var r=this.ListData;if(r=r.filter((function(e){return t.Class==t.$route.params.id?"Submitted"==e.status&&0==e.graded:"Submitted"==e.status&&0==e.graded&&e.class_id==t.Class})),"Name"==this.selectedSort)return"all"!=this.selectedShowNumber?r.sort().splice(0,this.selectedShowNumber):r.sort();if("Lowest Score"==this.selectedSort){var a=r.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?a.splice(0,this.selectedShowNumber):a}if("Highest Score"==this.selectedSort){var n=r.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?n.reverse().splice(0,this.selectedShowNumber):n.reverse()}}else if("Graded"==this.selectedStatus){var o=this.ListData;if(o=o.filter((function(e){return t.Class==t.$route.params.id?1==e.graded:1==e.graded&&e.class_id==t.Class})),this.Submitted_count=o.length,"Name"==this.selectedSort)return"all"!=this.selectedShowNumber?o.sort().splice(0,this.selectedShowNumber):o.sort();if("Lowest Score"==this.selectedSort){var l=o.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?l.splice(0,this.selectedShowNumber):l}if("Highest Score"==this.selectedSort){var c=o.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?c.reverse().splice(0,this.selectedShowNumber):c.reverse()}}else if("No Submission"==this.selectedStatus){var u=this.ListData;if(u=u.filter((function(e){return t.Class==t.$route.params.id?"Submitted"!=e.status:"Submitted"!=e.status&&e.class_id==t.Class})),this.Submitted_count=u.length,"Name"==this.selectedSort)return"all"!=this.selectedShowNumber?u.sort().splice(0,this.selectedShowNumber):u.sort();if("Lowest Score"==this.selectedSort){var d=u.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?d.splice(0,this.selectedShowNumber):d}if("Highest Score"==this.selectedSort){var h=u.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?h.reverse().splice(0,this.selectedShowNumber):h.reverse()}}}},methods:{CheckFileIcon:function(t){return"jpg"==t||"jpeg"==t||"gif"==t||"svg"==t||"png"==t||"bmp"==t?["mdi-image","info"]:"pdf"==t?["mdi-file-pdf","red"]:"txt"==t?["mdi-note-text-outline","primary"]:"docx"==t||"doc"==t?["mdi-file-word","blue"]:"link"==t?["mdi-file-link","green"]:void 0},CheckFileIconColor:function(t){return"jpg"==t||"jpeg"==t||"gif"==t||"svg"==t||"png"==t||"bmp"==t?"info":"pdf"==t?"red":"txt"==t?"primary":"docx"==t||"doc"==t?"blue":"link"==t?"green":"primary"},format_date:function(t){if(t)return n()(String(t)).tz("Asia/Manila").format("MM/d/YYYY, hh:mm A")},SaveScore:function(t,e){clearTimeout(this.timeout);var s=this;this.timeout=setTimeout((function(){s.score=e,s.isSavingScore=!s.isSavingScore,s.UpdateScore(t)}),1e3)},UpdateScore:function(t){var e=this;return l(r().mark((function s(){var i;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:i=[],e.score<=e.classworkDetails.points?axios.put("/api/submission/update-score/"+t,{score:e.score,data:i}).then((function(s){200==s.status&&(e.toastSuccess("Score Updated"),e.isSavingScore=!e.isSavingScore,e.$emit("UpdateSubmission"),e.ListData.forEach((function(e){e.id==t&&(e.graded=1)})))})):(e.isSavingScore=!e.isSavingScore,e.toastError("Score is higher than the set points!"));case 2:case"end":return s.stop()}}),s)})))()},ResetSubmission:function(t){var e=this;return l(r().mark((function s(){return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:e.studentSubmissionList.forEach((function(e){if(e.id==t)return e.id=null,e.Submitted_Answers=null,e.status=null,e.points=null,e.updated_at=null,e.rubrics_score=null,e.graded=0,!1}));case 1:case"end":return s.stop()}}),s)})))()},MarkAsGraded:function(t){var e=this;return l(r().mark((function s(){return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:e.studentSubmissionList.forEach((function(e){t==e.id&&(e.graded=1)}));case 1:case"end":return s.stop()}}),s)})))()},ShowLoading:function(){var t=this;this.isFiltered=!0,setTimeout((function(){return t.isFiltered=!1}),400)},FilteredClass:function(){var t=this;return l(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.Over_total=0,t.Submitted_count=0,t.ShowLoading(),t.ListData.forEach((function(e){e.class_id==t.Class&&(t.Over_total++,"Submitted"==e.status&&t.Submitted_count++)}));case 4:case"end":return e.stop()}}),e)})))()},ViewSubmission:function(t,e){var s=this;return l(r().mark((function i(){return r().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:s.CheckData=t,s.selected_index=e,s.dialog=!0,s.isStarting=!0,s.$store.dispatch("isViewingSubmission");case 5:case"end":return i.stop()}}),i)})))()},isNotViewing:function(){this.CheckData=[],this.selected_index=null,this.dialog=!1,this.isStarting=!1,this.$store.dispatch("isNotViewingSubmission")},GotoNextStudent:function(){this.CheckData=null,this.selected_index=this.selected_index+1,this.CheckData=this.studentSubmissionList[this.selected_index]},GotoPrevStudent:function(){this.CheckData=null,this.selected_index=this.selected_index-1,this.CheckData=this.studentSubmissionList[this.selected_index]}}};var u=s(72446),d=s.n(u),h=s(99213),m={insert:"head",singleton:!1};d()(h.Z,m);h.Z.locals;const p=(0,s(51900).Z)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-2"},[t.dialog?s("v-row",{attrs:{justify:"center"}},[s("v-overlay",{attrs:{value:t.isStarting}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1):t._e(),t._v(" "),t.dialog?s("v-row",[s("v-col",{attrs:{cols:"12"}},[t.dialog?s("checksubjective",{directives:[{name:"show",rawName:"v-show",value:!t.isStarting,expression:"!isStarting"}],attrs:{currentIndex:t.selected_index,SubmittedLength:t.studentSubmissionList.length,classworkDetails:t.classworkDetails,CheckData:t.CheckData},on:{SubmissionReset:t.ResetSubmission,isMounted:function(e){t.isStarting=!1},UpdateSubmission:t.MarkAsGraded,closeDialog:function(e){return t.isNotViewing()},nextStudent:function(e){return t.GotoNextStudent()},prevStudent:function(e){return t.GotoPrevStudent()}}}):t._e()],1)],1):t._e(),t._v(" "),t.dialog?t._e():s("v-row",[s("v-col",{staticClass:"pa-3 pl-6",attrs:{cols:"12"}},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3",attrs:{cols:"6",md:"6",lg:"2",xl:"2"}},[s("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"",dense:"","hide-details":"",label:"Status",items:t.StatusType},on:{change:t.ShowLoading},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3",attrs:{cols:"12",md:"4",lg:"2",xl:"2"}},[s("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"",dense:"","hide-details":"",label:"Sort By",items:t.SortType},on:{change:t.ShowLoading},model:{value:t.selectedSort,callback:function(e){t.selectedSort=e},expression:"selectedSort"}})],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3",attrs:{cols:"12",md:"1",sm:"6",lg:"1",xl:"1"}},[s("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"","hide-details":"",dense:"",label:"Limit",items:t.ShowNumber},on:{change:t.ShowLoading},model:{value:t.selectedShowNumber,callback:function(e){t.selectedShowNumber=e},expression:"selectedShowNumber"}})],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-3 pb-3",attrs:{cols:"12",sm:"6",md:"7",lg:"7",xl:"7"}},[s("v-text-field",{staticClass:"mb-0 pb-0 mt-0 pt-0",attrs:{"hide-details":"","prepend-inner-icon":"mdi-magnify",outlined:"",dense:"",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),s("v-col",{staticClass:"mt-0 pt-0",attrs:{cols:"12"}},[s("v-row",[t._l(t.studentSubmissionList,(function(e,i){return s("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.isFiltered&&(t.Class==t.$route.params.id||t.Class==e.class_id),expression:"!isFiltered && (Class == $route.params.id || Class == item.class_id)"}],key:i,attrs:{link:"",cols:"12",md:"6",lg:"3",xl:"3"}},[s("v-alert",{staticClass:"ma-0 pa-0",attrs:{outlined:"",color:"Taking"==e.status?"blue":"Submitted"==e.status?"success":"grey"}},[s("v-list-item",{staticClass:"pt-1 pb-1",attrs:{link:""}},[s("v-list-item-avatar",{on:{click:function(s){return t.ViewSubmission(e,i)}}},[s("v-avatar",{attrs:{color:"brown",size:"40"}},[s("v-img",{attrs:{alt:"Profile",src:null==e.profile_pic||""==e.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+e.firstName+" "+e.lastName:e.profile_pic}})],1)],1),t._v(" "),s("v-list-item-content",{on:{click:function(s){return t.ViewSubmission(e,i)}}},[s("v-list-item-title",[t._v("\r\n                                             "+t._s(e.firstName+" "+e.lastName)+"\r\n                                        ")]),t._v(" "),s("v-list-item-subtitle",{staticClass:"success--text"},[1==e.graded?s("v-icon",{attrs:{small:"",color:"success"}},[t._v("mdi-check")]):t._e(),t._v(" "),"Submitted"==e.status&&0==e.graded?s("span",{staticClass:"success--text"},[t._v("Submitted")]):"Submitted"==e.status&&1==e.graded?s("span",{staticClass:"success--text"},[t._v("Graded")]):s("span",{staticClass:"red--text"},[t._v("No Submission")])],1)],1),t._v(" "),s("v-list-item-action",[s("v-text-field",{staticClass:"ma-0 pa-0",attrs:{"hide-details":"",label:"Score",rounded:"",loading:t.isSavingScore,dense:"",outlined:"",type:"number",suffix:"/"+t.classworkDetails.points,max:t.classworkDetails.points,maxlength:t.classworkDetails.points.toString().length,min:"0"},on:{keyup:function(s){return t.SaveScore(e.id,e.points)}},model:{value:e.points,callback:function(s){t.$set(e,"points",s)},expression:"item.points"}})],1)],1)],1)],1)})),t._v(" "),t.isFiltered?s("v-col",{attrs:{cols:"12"}},[s("v-container",{staticClass:"fill-height",staticStyle:{height:"500px"}},[s("v-row",{attrs:{"align-content":"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("vue-element-loading",{attrs:{active:t.isFiltered,duration:"0.7",spinner:"line-scale",color:"#EF6C00",size:"40"}})],1)],1)],1)],1):t._e()],2)],1)],1)],1)],1)],1)}),[],!1,null,"3a772e25",null).exports}}]);