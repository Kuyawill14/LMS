"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4187],{7671:(t,s,e)=>{e.d(s,{Z:()=>a});var n=e(1519),i=e.n(n)()((function(t){return t[1]}));i.push([t.id,".centered-input>>>input{text-align:center}.post-content img{max-height:8rem!important}.centered-input input{text-align:center}",""]);const a=i},4187:(t,s,e)=>{e.r(s),e.d(s,{default:()=>l});const n={props:["classworkDetails","details"],data:function(){return{Qlength:null,Details:[],Check:[],isLoading:!0,inputCheck:["True","False"],SubmittedAnswer:[],UpdateDetails:{},ViewSubmiisionConditions:{},Alphabet:null}},computed:(0,e(629).Se)(["getAll_questions"]),methods:{fetchQuestions:function(){var t=this;this.ViewSubmiisionConditions.showAnswer=this.details.showAnswer,this.ViewSubmiisionConditions.showAnswerType=this.details.showAnswerType,axios.get("/api/question/question-answer/"+this.$route.params.id+"/"+this.details.class_classwork_id).then((function(s){t.QuestionAndAnswer=s.data;for(var e=t.details.Submitted_Answers.length,n=t.QuestionAndAnswer.Question.length-e,i=0;i<n;i++)"Multiple Choice"==t.QuestionAndAnswer.Question[i].type||"Identification"==t.QuestionAndAnswer.Question[i].type||"True or False"==t.QuestionAndAnswer.Question[i].type||"Essay"==t.QuestionAndAnswer.Question[i].type?t.details.Submitted_Answers.push({Answer:null,Question_id:t.QuestionAndAnswer.Question[i].id,timeConsume:null,type:t.QuestionAndAnswer.Question[i].type}):t.QuestionAndAnswer.Question[i].type;for(var a=function(s){for(var e=0;e<t.details.Submitted_Answers.length;e++)t.QuestionAndAnswer.Question[s].id==t.details.Submitted_Answers[e].Question_id&&("Multiple Choice"==t.QuestionAndAnswer.Question[s].type||"Identification"==t.QuestionAndAnswer.Question[s].type||"True or False"==t.QuestionAndAnswer.Question[s].type||"Essay"==t.QuestionAndAnswer.Question[s].type?(t.SubmittedAnswer[s]=t.details.Submitted_Answers[e],t.QuestionAndAnswer.Question[s].answer==t.details.Submitted_Answers[e].Answer?t.Check[s]=!0:t.Check[s]=!1):"Matching type"==t.QuestionAndAnswer.Question[s].type&&function(){var n=new Array;new Array;t.details.Submitted_Answers[e].Answer.forEach((function(e){for(var i=0;i<t.QuestionAndAnswer.Answer[s].SubQuestion.length;i++)t.QuestionAndAnswer.Answer[s].SubQuestion[i].id==e.subquestion_id&&n.push({Ans_Letter:e.Ans_letter,Answer:e.Answers,SubQuestion:t.QuestionAndAnswer.Answer[s].SubQuestion[i].sub_question,SubChoice:null})}));var i=new Array;t.details.Submitted_Answers[e].Choices_id.forEach((function(e){t.QuestionAndAnswer.Answer[s].SubAnswer.forEach((function(t){e.choice_id==t.id&&i.push({id:t.id,choice:t.Choice})}))}));for(var a=0;a<n.length;a++)n[a].SubChoice=i[a].choice;t.SubmittedAnswer[s]=n}())},o=0;o<t.QuestionAndAnswer.Question.length;o++)a(o);t.isLoading=!1}))}},mounted:function(){this.fetchQuestions();this.Alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","q","r","s","t","u","v","w","x","y","z"]}};var i=e(2446),a=e.n(i),o=e(7671),r={insert:"head",singleton:!1};a()(o.Z,r);o.Z.locals;const l=(0,e(1900).Z)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-card",[e("v-toolbar",{attrs:{dark:"",dense:"",color:"primary"}},[e("v-btn",{attrs:{icon:"",rounded:""},on:{click:function(s){return t.$emit("closeDialog")}}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-close")])],1)],1),t._v(" "),t.isLoading?e("v-container",{staticClass:"fill-height",staticStyle:{height:"400px"}},[e("v-row",{attrs:{"align-content":"center",justify:"center"}},[e("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[t._v("\n              Loading\n          ")]),t._v(" "),e("v-col",{attrs:{cols:"6"}},[e("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):t._e(),t._v(" "),t.isLoading?t._e():e("v-container",{staticClass:"mt-5"},[e("v-row",{staticClass:"mb-2"},[e("v-col",{staticClass:"12",attrs:{md:"9",lg:"9"}},[e("v-row",[e("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[e("h3",[t._v(t._s(t.details.title))])]),t._v(" "),e("v-col",{staticClass:"text-right",attrs:{cols:"6",md:"4"}},[e("v-chip",{staticClass:"ma-2",attrs:{color:"success"}},[e("div",{staticClass:"body-2"},[t._v("Score: "+t._s(t.details.score)+" /"+t._s(t.details.totalPoints))])])],1)],1)],1)],1),t._v(" "),t._l(t.QuestionAndAnswer.Question,(function(s,n){return e("v-container",{key:n,attrs:{"ma-0":"","pa-0":""}},[e("v-container",{attrs:{"ma-0":"","pa-0":""}},[e("div",{staticClass:"subtitle-1 d-flex",style:t.$vuetify.breakpoint.xs?"line-height:1.1":""},[1==t.details.showAnswer?e("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{readonly:"",color:"success"},model:{value:t.Check[n],callback:function(s){t.$set(t.Check,n,s)},expression:"Check[index]"}}):t._e(),t._v(" "),e("h3",{staticClass:"font-weight-bold"},[t._v(t._s(n+1)+".")]),t._v(" "),e("span",{staticClass:"post-content ml-1 mb-0 pb-0",domProps:{innerHTML:t._s(s.question)}}),t._v(" "),e("small",{staticClass:"primary--text ml-1"},[t._v("("+t._s(s.points+" points")+")")])],1)]),t._v(" "),"Multiple Choice"==s.type?e("v-container",{attrs:{"ml-0":"","pl-0":""}},t._l(t.QuestionAndAnswer.Answer[n],(function(i,a){return e("v-container",{key:a,class:t.$vuetify.breakpoint.xs?"d-flex flex-row ma-0 pa-0 pl-2":"d-flex flex-row ma-0 pa-0 mb-1 ml-8"},[e("v-radio-group",{staticClass:"ma-0 pa-0",attrs:{name:"option"+n},model:{value:t.SubmittedAnswer[n].Answer,callback:function(s){t.$set(t.SubmittedAnswer[n],"Answer",s)},expression:"SubmittedAnswer[index].Answer"}},[e("v-radio",{key:n,attrs:{readonly:"",color:"primary",value:i.Choice}})],1),t._v(" "),e("div",{staticClass:"Subtitle-1 ma-0 pa-0 d-flex",staticStyle:{"line-height":"1.4"}},[e("span",{staticClass:"post-content",domProps:{innerHTML:t._s(i.Choice)}}),t._v(" "),s.answer==i.Choice?e("span",{staticClass:"caption primary--text ml-1 mt-1"},[t._v("(correct answer)")]):t._e()])],1)})),1):t._e(),t._v(" "),"Identification"==s.type?e("v-container",{attrs:{"ma-0":"","pa-0":""}},[e("v-container",{staticClass:"ml-7 mt-0 pt-0",attrs:{"ma-0":"","pa-0":""}},[e("div",{staticClass:"subtitle-2 font-weight-bold"},[t._v("Answer")]),t._v(" "),e("div",{staticClass:"subtitle-1 d-flex item ml-4 mt-0 pt-0"},[e("span",{staticClass:"post-content",domProps:{innerHTML:t._s(t.SubmittedAnswer[n].Answer)}}),t._v(" "),null==t.SubmittedAnswer[n].Answer?e("span",{staticClass:"post-content"},[t._v(" N/A")]):t._e()])])],1):t._e(),t._v(" "),"True or False"==s.type?e("v-container",{attrs:{"ma-0":"","pa-0":""}},t._l(t.inputCheck,(function(i,a){return e("v-container",{key:a,class:t.$vuetify.breakpoint.xs?"d-flex flex-row ma-0 pa-0 pl-2":"d-flex flex-row ma-0 pa-0 mb-1 ml-8"},[e("v-radio-group",{staticClass:"ma-0 pa-0",attrs:{name:"option"+n},model:{value:t.SubmittedAnswer[n].Answer,callback:function(s){t.$set(t.SubmittedAnswer[n],"Answer",s)},expression:"SubmittedAnswer[index].Answer"}},[e("v-radio",{key:n,attrs:{readonly:"",color:"primary",value:t.inputCheck[a]}})],1),t._v(" "),e("div",{staticClass:"Subtitle 1"},[t._v("\n                      "+t._s(t.inputCheck[a])+"\n                       "),s.answer==t.inputCheck[a]?e("span",{staticClass:"caption primary--text ml-1 mt-1"},[t._v("(correct answer)")]):t._e()])],1)})),1):t._e(),t._v(" "),"Matching type"==s.type?e("v-container",{attrs:{"ma-0":"","pa-0":""}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"ma-0 pa-0",attrs:{"ma-0":"","pa-0":"",cols:"12",lg:"7",md:"12"}},[e("v-container",{staticClass:"ma-0 pa-0"},[e("v-container",[e("v-row",[e("v-col",{staticClass:"font-weight-bold",attrs:{cols:"1",md:"1",lg:"1"}}),t._v(" "),e("v-col",{staticClass:"font-weight-bold",attrs:{cols:"5",md:"6",lg:"6"}},[t._v("\n                                          Column A\n                                      ")]),t._v(" "),e("v-col",{staticClass:"font-weight-bold",attrs:{cols:"5"}},[t._v("\n                                          Column B\n                                      ")])],1)],1),t._v(" "),e("v-divider"),t._v(" "),t._l(t.SubmittedAnswer[n],(function(s,n){return e("v-container",{key:s.id,staticClass:"mb-0 pb-0"},[e("v-row",[e("v-col",{staticClass:"mb-1 pb-0 pt-0 mt-0",attrs:{cols:"2",md:"1",lg:"1"}},[e("v-text-field",{staticClass:"centered-input",attrs:{readonly:""},model:{value:s.Ans_Letter,callback:function(e){t.$set(s,"Ans_Letter",e)},expression:"item.Ans_Letter"}})],1),t._v(" "),e("v-col",{staticClass:"mb-1 pb-0 pt-0 mt-0",attrs:{cols:"5",md:"6",lg:"6"}},[e("div",{staticClass:"d-flex mt-7"},[e("span",{staticClass:"font-weight-medium mr-1"},[t._v(t._s(n+1+". "))]),t._v(" "),e("span",{staticClass:"subquestion-content",style:t.$vuetify.breakpoint.xs?"line-height:1.1":"line-height:1.5",domProps:{innerHTML:t._s(s.SubQuestion)}})])]),t._v(" "),e("v-col",{staticClass:"mb-1 pb-0 pt-0 mt-0",attrs:{cols:"5",md:"5",lg:"5"}},[e("div",{staticClass:"d-flex mt-7"},[e("span",{staticClass:"font-weight-medium mr-1"},[t._v(t._s(t.Alphabet[n]+". "))]),t._v(" "),e("span",{staticClass:"subchoices-content",style:t.$vuetify.breakpoint.xs?"line-height:1.1":"line-height:1.5",domProps:{innerHTML:t._s(s.SubChoice)}})])])],1)],1)}))],2)],1)],1)],1):t._e(),t._v(" "),"Essay"==s.type?e("v-container",{attrs:{"ma-0":"","pa-0":""}},[e("v-container",{staticClass:"ml-7 mt-0 pt-0",attrs:{"ma-0":"","pa-0":""}},[e("div",{staticClass:"subtitle-2 font-weight-bold"},[t._v("Answer")]),t._v(" "),e("div",{staticClass:"subtitle-1 d-flex item ml-4 mt-0 pt-0"},[e("span",{staticClass:"post-content",domProps:{innerHTML:t._s(t.SubmittedAnswer[n].Answer)}}),t._v(" "),null==t.SubmittedAnswer[n].Answer?e("span",{staticClass:"post-content"},[t._v(" N/A")]):t._e()])])],1):t._e()],1)}))],2)],1)}),[],!1,null,null,null).exports}}]);