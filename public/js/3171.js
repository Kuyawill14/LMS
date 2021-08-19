(self.webpackChunk=self.webpackChunk||[]).push([[3171],{3171:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>a});const i={props:["ListData","classworkDetails","Submitted","Graded","ClassList"],components:{checkobjective:function(){return e.e(722).then(e.bind(e,722))},resetConfirmation:function(){return e.e(2768).then(e.bind(e,2768))}},data:function(){return{isloading:!0,isLoadingData:!0,selectedTasks:[],isMounted:!1,headers:[{text:"Name",value:"name"},{text:"Status",value:"status",align:"center"},{text:"Points",value:"points"},{text:"Actions",sortable:!1}],dialog:!1,Viewdialog:!1,ResetDialog:!1,ViewDetails:null,resetId:null,resetName:null,selected_index:null,Details:[],Reload:!0,Class:this.$route.params.id,StatusType:["All","Submitted","Taking","No Submission"],selectedStatus:"All",isSavingScore:!1,search:"",isViewing:!1}},computed:{studentSubmissionList:function(){var t=this;return this.search?this.ListData.filter((function(s){return t.search.toLowerCase().split(" ").every((function(t){return s.firstName.toLowerCase().includes(t)||s.lastName.toLowerCase().includes(t)}))})):this.ListData}},methods:{ViewSubmision:function(t,s){this.ViewDetails=null,this.isLoadingData=!0,this.isViewing=!0,this.ViewDetails=t,this.selected_index=s},ResetSubmission:function(){this.ListData[this.selected_index].status=null,this.ListData[this.selected_index].points=0,this.ListData[this.selected_index].Submitted_Answers=null,this.isViewing=!this.isViewing}}};const a=(0,e(1900).Z)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pa-2"},[t.dialog?e("v-row",{attrs:{justify:"center"}},[e("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(s){t.dialog=s},expression:"dialog"}},[e("checkobjective",{attrs:{classworkDetails:t.classworkDetails,ViewDetails:t.ViewDetails},on:{RestSubmission:function(s){return t.ResetSubmission()},UpdateSubmission:function(s){return t.$emit("UpdateSubmission")},closeDialog:function(s){t.dialog=!t.dialog,t.Viewdialog=!t.Viewdialog}}})],1)],1):t._e(),t._v(" "),e("v-row",{staticClass:"pa-1"},[e("v-col",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"pl-5 d-none":"pl-5",attrs:{cols:"12",md:"12",lg:"4",xl:"4"}},[e("v-row",[e("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[e("h3",[t._v("Students")])]),t._v(" "),e("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[e("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"",dense:"",label:"Class",items:t.ClassList,"item-text":"class_name","item-value":"class_id"},model:{value:t.Class,callback:function(s){t.Class=s},expression:"Class"}})],1),t._v(" "),t._l(t.ListData,(function(s,i){return e("v-col",{directives:[{name:"show",rawName:"v-show",value:t.Class==t.$route.params.id||t.Class==s.class_id,expression:"Class == $route.params.id || Class == item.class_id"}],key:i,attrs:{cols:"12"}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var l=a.hover;return[e("v-row",{class:l?"grey lighten-4":"",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.ViewSubmision(s,i)}}},[e("v-col",{staticClass:"pa-5",attrs:{cols:"9"}},[e("div",{staticClass:" d-flex justify-start"},[e("v-avatar",{attrs:{color:"brown",size:"40"}},[e("v-img",{attrs:{alt:"Profile",src:null==s.profile_pic||""==s.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+s.firstname+" "+s.lastName:s.profile_pic}})],1),t._v(" "),e("div",{staticClass:"mt-2 ml-2"},[e("div",{staticClass:"font-weight-medium"},[t._v("\n                                "+t._s(s.firstname+" "+s.lastName)+"\n                                "),e("br")])])],1)]),t._v(" "),"Submitted"==s.status?e("v-col",{staticClass:"text-left",attrs:{cols:"3"}},[e("v-text-field",{staticClass:"mb-0 pb-0",style:t.$vuetify.breakpoint.xs?"width:100%":"width:80%",attrs:{"append-icon":s.graded&&"Submitted"==s.status?"mdi-check":"",loading:t.isSavingScore,dense:"",outlined:"",type:"number",suffix:"/"+t.classworkDetails.points,max:t.classworkDetails.points,maxlength:t.classworkDetails.points.toString().length,min:"0"},on:{keyup:function(e){return t.SaveScore(s.id,s.points)}},model:{value:s.points,callback:function(e){t.$set(s,"points",e)},expression:"item.points"}})],1):t._e()],1)]}}],null,!0)}),t._v(" "),e("v-divider")],1)}))],2)],1),t._v(" "),t.isViewing?t._e():e("v-col",{staticClass:"pl-6",attrs:{cols:"12",md:"12",lg:"8",xl:"8"}},[e("v-row",[e("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12"}},[e("h3",[t._v(t._s(t.classworkDetails.title))])]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-row",[e("v-col",{attrs:{cols:"2",sm:"2",md:"1"}},[e("div",{staticClass:"d-flex flex-column"},[e("h1",[t._v(t._s(t.Submitted))]),t._v(" "),e("small",[t._v("Submitted")])])])],1),t._v(" "),e("v-divider")],1),t._v(" "),e("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-1",attrs:{cols:"12",md:"12",lg:"3",xl:"3"}},[e("v-select",{staticClass:"mb-0 pb-0",attrs:{outlined:"",dense:"",label:"Status",items:t.StatusType},model:{value:t.selectedStatus,callback:function(s){t.selectedStatus=s},expression:"selectedStatus"}})],1),t._v(" "),e("v-col",{staticClass:"pt-0 mt-0 pb-0 mb-0 pt-1",attrs:{cols:"12",md:"12",lg:"9",xl:"9"}},[e("v-text-field",{staticClass:"mb-0 pb-0",attrs:{"prepend-inner-icon":"mdi-magnify",outlined:"",dense:"",label:"Search"},model:{value:t.search,callback:function(s){t.search=s},expression:"search"}})],1),t._v(" "),e("v-col",{staticClass:"mt-0 pt-0",attrs:{cols:"12"}},[e("v-row",t._l(t.studentSubmissionList,(function(s,i){return e("v-col",{directives:[{name:"show",rawName:"v-show",value:"All"==t.selectedStatus||t.selectedStatus==s.status||"No Submission"==t.selectedStatus&&(null==s.status||""==s.status),expression:"selectedStatus == 'All' || selectedStatus == item.status || (selectedStatus == 'No Submission' && (item.status == null || item.status == ''))"}],key:i,staticClass:"text-center ma-0 pa-0 pl-2 pr-3 pb-3",attrs:{cols:"6",md:"6",lg:"4",xl:"3"}},[e("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[e("v-alert",{staticClass:"ma-0 pa-0",attrs:{outlined:"Taking"==s.status,color:"Taking"==s.status?"blue":""}},[e("v-list-item",{attrs:{link:""},on:{click:function(e){return t.ViewSubmision(s,i)}}},[e("v-list-item-content",[e("div",{staticClass:" d-flex justify-start"},[e("v-avatar",{attrs:{color:"brown",size:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"25":"40"}},[e("v-img",{attrs:{alt:"Profile",src:null==s.profile_pic||""==s.profile_pic?"https://ui-avatars.com/api/?background=random&color=fff&name="+s.firstname+" "+s.lastName:s.profile_pic}})],1),t._v(" "),e("div",{staticClass:"d-flex flex-column"},[e("div",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"mt-0 ml-1 caption":"mt-2 ml-3"},[t._v("\n                                                    "+t._s(s.firstname+" "+s.lastName)+"\n                                                ")]),t._v(" "),e("div",{staticClass:"d-flex ml-3"},["Submitted"==s.status?e("small",[t._v("Submitted\n                                                        "),e("v-icon",{attrs:{left:"",small:"",color:"success"}},[t._v("mdi-check")])],1):t._e()])])],1)])],1)],1)],1)],1)})),1)],1)],1)],1),t._v(" "),t.isViewing?e("v-col",{staticClass:"pl-6",staticStyle:{"max-height":"85vh","overflow-y":"scroll","overflow-x":"hidden"},attrs:{cols:"12",md:"12",lg:"8",xl:"8"}},[t.isLoadingData&&!t.isMounted?e("v-container",{staticClass:"fill-height",staticStyle:{height:"400px"}},[e("v-row",{attrs:{"align-content":"center",justify:"center"}},[e("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[t._v("\n                        Loading\n                    ")]),t._v(" "),e("v-col",{attrs:{cols:"6"}},[e("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):t._e(),t._v(" "),t.isLoadingData?e("checkobjective",{directives:[{name:"show",rawName:"v-show",value:t.isMounted,expression:"isMounted"}],attrs:{classworkDetails:t.classworkDetails,ViewDetails:t.ViewDetails},on:{isMounted:function(s){t.isMounted=!0},RestSubmission:function(s){return t.ResetSubmission()},UpdateSubmission:function(s){return t.$emit("UpdateSubmission")},closeDialog:function(s){t.isViewing=!1}}}):t._e()],1):t._e()],1)],1)}),[],!1,null,null,null).exports}}]);