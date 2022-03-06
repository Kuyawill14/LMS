"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1525],{1525:(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});const i={props:["ListData","classworkDetails","Submitted","Graded","ClassList"],components:{checkobjective:function(){return s.e(447).then(s.bind(s,447))},resetConfirmation:function(){return s.e(969).then(s.bind(s,969))},resetStudentSubmissionDialog:function(){return s.e(9314).then(s.bind(s,49314))},multipleAlertStudent:function(){return s.e(2653).then(s.bind(s,52653))}},data:function(){return{isloading:!0,isLoadingData:!0,selectedTasks:[],isMounted:!1,headers:[{text:"Name",value:"name"},{text:"Status",value:"status",align:"center"},{text:"Points",value:"points"},{text:"Actions",sortable:!1}],dialog:!1,Viewdialog:!1,ResetDialog:!1,ViewDetails:null,resetId:null,resetName:null,selected_index:null,Details:[],Reload:!0,Class:this.ClassList[0].class_id,StatusType:["Submitted","Taking","No Submission"],selectedStatus:"Submitted",SortType:["Name","Highest Score","Lowest Score"],selectedShowNumber:24,ShowNumber:[24,36,48,"all"],selectedSort:"Name",isSavingScore:!1,search:"",isViewing:!1,isStarting:!1,resetdialog:!1,selected_user_id:null,isFiltered:!1,Submitted_count:0,Over_total:0,pageNo:1,pageSize:12,currentPage:1,totalPage:0,currentTotalData:0,alertDialog:!1,oldLimit:null,CheckDataSection:null}},computed:{indexStart:function(){return(this.currentPage-1)*this.pageSize},indexEnd:function(){return this.indexStart+this.pageSize},studentSubmissionList:function(){var t=this;if(this.search){var e=this.search;return this.ListData.filter((function(t){return e.toLowerCase().split(" ").every((function(e){return t.firstName.toLowerCase().includes(e)||t.lastName.toLowerCase().includes(e)}))}))}if("All"==this.selectedStatus){var s=this.ListData;if("Name"==this.selectedSort)return"all"!=this.selectedShowNumber?s.sort().splice(0,this.selectedShowNumber):s.sort()}else if("Submitted"==this.selectedStatus){var i=this.ListData;if(i=i.filter((function(e){return t.Class==t.$route.params.id?"Submitted"==e.status:"Submitted"==e.status&&e.class_id==t.Class})),this.Submitted_count=i.length,"Name"==this.selectedSort)return this.totalPage=Math.round((i.length-1)/this.pageSize),"all"!=this.selectedShowNumber?i.sort().splice(0,this.selectedShowNumber):i.sort();if("Lowest Score"==this.selectedSort){var a=i.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?a.splice(0,this.selectedShowNumber):a}if("Highest Score"==this.selectedSort){var l=i.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?l.reverse().splice(0,this.selectedShowNumber):l.reverse()}}else if("Taking"==this.selectedStatus){var o=this.ListData;if(o=o.filter((function(e){return t.Class==t.$route.params.id?"Taking"==e.status:"Taking"==e.status&&e.class_id==t.Class})),this.Submitted_count=o.length,"Name"==this.selectedSort)return"all"!=this.selectedShowNumber?o.sort().splice(0,this.selectedShowNumber):o.sort();if("Lowest Score"==this.selectedSort){var n=o.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?n.splice(0,this.selectedShowNumber):n}if("Highest Score"==this.selectedSort){var r=o.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?r.reverse().splice(0,this.selectedShowNumber):r.reverse()}}else if("No Submission"==this.selectedStatus){var c=this.ListData;if(c=c.filter((function(e){return t.Class==t.$route.params.id?null==e.status||""==e.status:(null==e.status||""==e.status)&&e.class_id==t.Class})),this.Submitted_count=c.length,"Name"==this.selectedSort)return"all"!=this.selectedShowNumber?c.sort().splice(0,this.selectedShowNumber):c.sort();if("Lowest Score"==this.selectedSort){var u=c.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?u.splice(0,this.selectedShowNumber):u}if("Highest Score"==this.selectedSort){var d=c.sort((function(t,e){return t.points-e.points}));return"all"!=this.selectedShowNumber?d.reverse().splice(0,this.selectedShowNumber):d.reverse()}}}},methods:{setPage:function(){this.currentPage=this.pageNo-1},ViewSubmision:function(t,e){var s=this;this.ViewDetails=null,this.oldLimit=this.selectedShowNumber,this.selectedShowNumber="all",this.dialog=!this.dialog,this.isStarting=!0,this.Viewdialog=!this.Viewdialog,this.ViewDetails=t,this.ClassList.forEach((function(t){t.class_id==s.ViewDetails.class_id&&(s.CheckDataSection=t.class_name)})),this.selected_index=e,this.selected_id=t.id,this.$store.dispatch("isViewingSubmission")},GotoNextStudent:function(){var t=this;this.ViewDetails=null,this.selected_index=this.selected_index+1,this.ViewDetails=this.studentSubmissionList[this.selected_index],this.ClassList.forEach((function(e){e.class_id==t.ViewDetails.class_id&&(t.CheckDataSection=e.class_name)}))},GotoPrevStudent:function(){var t=this;this.ViewDetails=null,this.selected_index=this.selected_index-1,this.ViewDetails=this.studentSubmissionList[this.selected_index],this.ClassList.forEach((function(e){e.class_id==t.ViewDetails.class_id&&(t.CheckDataSection=e.class_name)}))},isNotViewing:function(){this.selectedShowNumber=this.oldLimit,this.ViewDetails=null,this.selected_index=null,this.dialog=!1,this.Viewdialog=!1,this.$store.dispatch("isNotViewingSubmission")},ResetSubmission:function(){var t=this;this.studentSubmissionList.forEach((function(e){e.id==t.selected_id&&(e.status=null,e.points=0,e.Submitted_Answers=null)}))},MultipleResetSubmission:function(t){var e=this,s=0,i={};i.data=t,i.type="Objective_Type",axios.post("/api/teacher/resetStudentSubmissions",i).then((function(){t.forEach((function(t){e.studentSubmissionList.forEach((function(e){t.id==e.id&&(e.status=null,e.points=0,e.Submitted_Answers=null,s++)}))})),e.resetdialog=!e.resetdialog,e.$store.dispatch("setCurrectClassworkSubmission",s)}))},ShowLoading:function(){var t=this;this.isFiltered=!0,setTimeout((function(){return t.isFiltered=!1}),400)},FilteredClass:function(){this.ShowLoading()}}};const a=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-2"},[t.dialog?s("v-row",{attrs:{justify:"center"}},[s("v-overlay",{attrs:{value:t.isStarting}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1):t._e(),t._v(" "),t.dialog?s("v-row",[s("v-col",{attrs:{cols:"12"}},[t.dialog?s("checkobjective",{directives:[{name:"show",rawName:"v-show",value:!t.isStarting,expression:"!isStarting"}],attrs:{currentIndex:t.selected_index,CheckDataSection:t.CheckDataSection,SubmittedLength:t.studentSubmissionList.length,classworkDetails:t.classworkDetails,ViewDetails:t.ViewDetails},on:{isMounted:function(e){t.isStarting=!1},RestSubmission:function(e){return t.ResetSubmission()},UpdateSubmission:function(e){return t.$emit("UpdateSubmission")},closeDialog:function(e){return t.isNotViewing()},nextStudent:function(e){return t.GotoNextStudent()},prevStudent:function(e){return t.GotoPrevStudent()}}}):t._e()],1)],1):t._e(),t._v(" "),t.dialog?t._e():s("v-row",{staticClass:"pa-1"},[t.isViewing?t._e():s("v-col",{staticClass:"pl-6",attrs:{cols:"12",md:"12",lg:"12",xl:"12"}},[s("v-row",[s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[s("h3",[t._v(t._s(t.classworkDetails.title))])]),t._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-row",[s("v-col",{attrs:{cols:"6",sm:"3",md:"2"}},[s("div",{staticClass:"d-flex flex-column"},[s("h1",[t._v(t._s(t.Submitted_count)+" ")]),t._v(" "),s("small",[t._v(t._s(t.selectedStatus))])])]),t._v(" "),s("v-col",{staticClass:"text-right",attrs:{cols:"6",sm:"9",md:"10"}},[s("div",{staticClass:"pt-5"},[s("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[s("v-btn",t._g(t._b({attrs:{text:"",rounded:""}},"v-btn",a,!1),Object.assign({},l,i)),[t._v("\n                                            Settings\n                                            "),s("v-icon",{attrs:{right:""}},[t._v("mdi-cog-outline")])],1)]}}],null,!0)},[t._v(" "),s("span",[t._v("Menu")])])]}}],null,!1,3883216841)},[t._v(" "),s("v-list",{staticClass:"pa-2"},[s("v-list-item",{on:{click:function(e){t.resetdialog=!t.resetdialog}}},[s("v-list-item-title",[s("v-icon",{attrs:{left:""}},[t._v("mdi-restart")]),t._v(" Reset Submission")],1)],1),t._v(" "),s("v-list-item",{on:{click:function(e){t.alertDialog=!t.alertDialog}}},[s("v-list-item-title",[s("v-icon",{attrs:{left:""}},[t._v("mdi-account-alert")]),t._v(" Alert Students")],1)],1)],1)],1)],1)])],1),t._v(" "),s("v-divider")],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-1 pb-3",attrs:{cols:"6",sm:"6",md:"2",lg:"2",xl:"2"}},[s("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"","hide-details":"",dense:"",label:"Class",items:t.ClassList,"item-text":"class_name","item-value":"class_id"},on:{change:t.FilteredClass},model:{value:t.Class,callback:function(e){t.Class=e},expression:"Class"}})],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-1 pb-3",attrs:{cols:"6",sm:"6",md:"2",lg:"2",xl:"2"}},[s("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"","hide-details":"",dense:"",label:"Status",items:t.StatusType},on:{change:t.ShowLoading},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-1 pb-3",attrs:{cols:"12",md:"2",sm:"12",lg:"2",xl:"2"}},[s("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"",disabled:"All"==t.selectedStatus,"hide-details":"",dense:"",label:"Sort By",items:t.SortType},on:{change:t.ShowLoading},model:{value:t.selectedSort,callback:function(e){t.selectedSort=e},expression:"selectedSort"}})],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-1 pb-3",attrs:{cols:"12",md:"1",sm:"6",lg:"1",xl:"1"}},[s("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"","hide-details":"",dense:"",label:"Limit",items:t.ShowNumber},on:{change:t.ShowLoading},model:{value:t.selectedShowNumber,callback:function(e){t.selectedShowNumber=e},expression:"selectedShowNumber"}})],1),t._v(" "),s("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-1 pb-3",attrs:{cols:"12",sm:"6",md:"5",lg:"5",xl:"5"}},[s("v-text-field",{staticClass:"mb-0 pb-0 mt-0 pt-0",attrs:{"hide-details":"","prepend-inner-icon":"mdi-magnify",outlined:"",dense:"",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),s("v-col",{staticClass:"mt-0 pt-0",attrs:{cols:"12"}},[t.isFiltered||0!=t.studentSubmissionList.length?s("v-row",[t._l(t.studentSubmissionList,(function(e,i){return s("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.isFiltered&&(t.Class==t.$route.params.id||t.Class==e.class_id),expression:"!isFiltered && (Class == $route.params.id || Class == item.class_id)"}],key:i,attrs:{cols:"12",md:"6",lg:"4",xl:"3"}},[s("v-alert",{staticClass:"ma-0 pa-0",attrs:{outlined:"",color:"Taking"==e.status?"blue":"Submitted"==e.status?"success":"grey"}},[s("v-list-item",{staticClass:"pt-1 pb-1",attrs:{link:""}},[s("v-list-item-avatar",{on:{click:function(s){return t.ViewSubmision(e,i)}}},[s("v-avatar",{attrs:{color:"brown",size:"40"}},[s("v-img",{attrs:{alt:"Profile",src:null==e.profile_pic||""==e.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+e.firstName+" "+e.lastName:e.profile_pic}})],1)],1),t._v(" "),s("v-list-item-content",{on:{click:function(s){return t.ViewSubmision(e,i)}}},[s("v-list-item-title",[t._v("\n                                                "+t._s(e.firstName+" "+e.lastName)+"\n                                            ")]),t._v(" "),s("v-list-item-subtitle",["Submitted"==e.status?s("v-icon",{attrs:{left:"",small:"",color:"success"}},[t._v("\n                                                    mdi-check")]):t._e(),t._v(" "),"Submitted"==e.status?s("span",{staticClass:"success--text"},[t._v("Submitted")]):"Taking"==e.status?s("span",{staticClass:"blue--text"}):s("span",{staticClass:"red--text"},[t._v("No Submission")])],1)],1),t._v(" "),s("v-list-item-action",{staticStyle:{"max-width":"150px !important"}},["Submitted"==e.status?s("v-text-field",{staticClass:"ma-0 pa-0",attrs:{"hide-details":"",label:"Score",rounded:"",loading:t.isSavingScore,dense:"",outlined:"",type:"number",suffix:"/"+t.classworkDetails.points,max:t.classworkDetails.points,maxlength:t.classworkDetails.points.toString().length,min:"0"},on:{keyup:function(s){return t.SaveScore(e.id,e.points)}},model:{value:e.points,callback:function(s){t.$set(e,"points",s)},expression:"item.points"}}):t._e(),t._v(" "),"Taking"==e.status?s("v-chip",{staticClass:"ma-2",attrs:{color:"blue","text-color":"white"}},[t._v("\n                                                Taking...\n                                            ")]):t._e(),t._v(" "),""==e.status||null==e.status?s("v-chip",{staticClass:"ma-2",attrs:{color:"transparent"}}):t._e()],1)],1)],1)],1)})),t._v(" "),t.isFiltered?s("v-col",{attrs:{cols:"12"}},[s("v-row",t._l(20,(function(e){return s("v-col",{key:e,attrs:{cols:"12",md:"6",lg:"3",xl:"3"}},[t.isFiltered?s("v-card",{staticClass:"pl-2 pr-2 pt-3 pb-3",attrs:{elevation:"0"}},[s("v-list",[s("v-list-item",[s("v-list-item-content",[s("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"list-item-avatar-two-line"}})],1),t._v(" "),s("v-list-item-action",[s("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"chip"}})],1)],1)],1)],1):t._e()],1)})),1)],1):t._e()],2):s("v-row",{staticClass:"mt-12 pt-12",attrs:{justify:"center","align-content":"center"}},[s("v-col",{staticClass:"text-center pb-12 mb-12",attrs:{cols:"12",sm:"8",md:"4"}},[s("v-icon",{staticStyle:{"font-size":"6rem"}},[t._v("\n                                    mdi-notebook-remove-outline\n                                ")]),t._v(" "),s("h1",[t._v(t._s("Submitted"==t.selectedStatus?"No Submission":"Taking"==t.selectedStatus?"No Student Taking":"No Submission")+" ")])],1)],1)],1)],1)],1),t._v(" "),t.resetdialog?s("v-row",[s("v-dialog",{attrs:{persistent:"","max-width":"650"},model:{value:t.resetdialog,callback:function(e){t.resetdialog=e},expression:"resetdialog"}},[t.resetdialog?s("resetStudentSubmissionDialog",{attrs:{scrollable:"",ListData:t.ListData,ClassList:t.ClassList},on:{toggleDialog:function(e){t.resetdialog=!t.resetdialog},StartReset:t.MultipleResetSubmission}}):t._e()],1)],1):t._e(),t._v(" "),t.alertDialog?s("v-row",[s("v-dialog",{attrs:{persistent:"","max-width":"650"},model:{value:t.alertDialog,callback:function(e){t.alertDialog=e},expression:"alertDialog"}},[t.alertDialog?s("multipleAlertStudent",{attrs:{scrollable:"",ListData:t.ListData,ClassList:t.ClassList,classworkDetails:t.classworkDetails},on:{toggleDialog:function(e){t.alertDialog=!t.alertDialog},StartReset:t.MultipleResetSubmission}}):t._e()],1)],1):t._e()],1)],1)}),[],!1,null,null,null).exports}}]);