"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5874],{23545:(s,e,t)=>{t.d(e,{Z:()=>r});var n=t(1519),i=t.n(n)()((function(s){return s[1]}));i.push([s.id,".centered-input>>>input{text-align:center}.post-content img{max-height:8rem!important}.centered-input input{text-align:center}",""]);const r=i},35874:(s,e,t)=>{t.r(e),t.d(e,{default:()=>c});var n=t(52239);const i={props:["classworkDetails","details"],data:function(){return{Qlength:null,Details:[],Check:[],isLoading:!0,inputCheck:["True","False"],SubmittedAnswer:[],UpdateDetails:{},ViewSubmiisionConditions:{},Alphabet:null,question_index:0}},computed:(0,t(20629).Se)(["getAll_questions"]),methods:{format_date:function(s){if(s)return(0,n.Z)(String(s)).format("MM/d/YYYY, hh:mm A")},fetchQuestions:function(){var s=this;this.ViewSubmiisionConditions.showAnswer=this.classworkDetails.showAnswer,this.ViewSubmiisionConditions.showAnswerType=this.classworkDetails.showAnswerType,axios.get("/api/question/question-answer/"+this.classworkDetails.id+"/"+this.classworkDetails.class_classwork_id).then((function(e){s.QuestionAndAnswer=e.data;for(var t=s.classworkDetails.Submitted_Answers.length,n=s.QuestionAndAnswer.Question.length-t,i=0;i<n;i++)"Multiple Choice"==s.QuestionAndAnswer.Question[i].type||"Identification"==s.QuestionAndAnswer.Question[i].type||"True or False"==s.QuestionAndAnswer.Question[i].type||"Essay"==s.QuestionAndAnswer.Question[i].type?s.classworkDetails.Submitted_Answers.push({Answer:null,Question_id:s.QuestionAndAnswer.Question[i].id,timeConsume:null,type:s.QuestionAndAnswer.Question[i].type}):s.QuestionAndAnswer.Question[i].type;for(var r=function(e){for(var t=function(t){var n;if(s.QuestionAndAnswer.Question[e].id==s.classworkDetails.Submitted_Answers[t].Question_id)if("Multiple Choice"==s.QuestionAndAnswer.Question[e].type||"Identification"==s.QuestionAndAnswer.Question[e].type||"True or False"==s.QuestionAndAnswer.Question[e].type){if(s.SubmittedAnswer[e]=s.classworkDetails.Submitted_Answers[t],"Identification"==s.QuestionAndAnswer.Question[e].type)"check"in s.classworkDetails.Submitted_Answers[t]?1==s.classworkDetails.Submitted_Answers[t].check?s.Check[e]=!0:s.Check[e]=!1:(n=s.QuestionAndAnswer.Question[e].sensitivity?s.classworkDetails.Submitted_Answers[t].Answer:null!=s.classworkDetails.Submitted_Answers[t].Answer&&""!=s.classworkDetails.Submitted_Answers[t].Answer?s.classworkDetails.Submitted_Answers[t].Answer.toLowerCase():s.classworkDetails.Submitted_Answers[t].Answer,s.Check[e]=!1,s.QuestionAndAnswer.Answer[e].forEach((function(t){var i=s.QuestionAndAnswer.Question[e].sensitivity?t.Choice:null!=t.Choice&&""!=t.Choice?t.Choice.toLowerCase():t.Choice;null!=i&&(i=(i=(i=(i=i.replace("<p>","").trim()).replace("</p>","").trim()).replace("&nbsp;","").trim()).trim()),null!=n&&(n=(n=(n=(n=n.replace("<p>","").trim()).replace("</p>","").trim()).replace("&nbsp;","").trim()).trim()),n==i&&(s.Check[e]=!0)})));else if("Multiple Choice"==s.QuestionAndAnswer.Question[e].type){if("check"in s.classworkDetails.Submitted_Answers[t])s.Check[e]=1==s.classworkDetails.Submitted_Answers[t].check;else if(s.QuestionAndAnswer.Question[e].isNew){n=s.classworkDetails.Submitted_Answers[t].Answer;var i=s.QuestionAndAnswer.Question[e].answer;s.SubmittedAnswer[e]=s.classworkDetails.Submitted_Answers[t],s.Check[e]=i==n}else{console.log(s.classworkDetails.Submitted_Answers[t].Answer),n=s.QuestionAndAnswer.Question[e].sensitivity?s.classworkDetails.Submitted_Answers[t].Answer:null!=s.classworkDetails.Submitted_Answers[t].Answer&&""!=s.classworkDetails.Submitted_Answers[t].Answer?s.classworkDetails.Submitted_Answers[t].Answer.toLowerCase():s.classworkDetails.Submitted_Answers[t].Answer,s.SubmittedAnswer[e]=s.classworkDetails.Submitted_Answers[t];var r=s.QuestionAndAnswer.Question[e].sensitivity?s.QuestionAndAnswer.Question[e].answer:null!=s.QuestionAndAnswer.Question[e].answer&&""!=s.QuestionAndAnswer.Question[e].answer?s.QuestionAndAnswer.Question[e].answer.toLowerCase():s.QuestionAndAnswer.Question[e].answer;s.Check[e]=r==n}}else if("True or False"==s.QuestionAndAnswer.Question[e].type){if("check"in s.classworkDetails.Submitted_Answers[t])s.Check[e]=1==s.classworkDetails.Submitted_Answers[t].check;else s.Check[e]=!1,n=s.QuestionAndAnswer.Question[e].sensitivity?s.classworkDetails.Submitted_Answers[t].Answer:null!=s.classworkDetails.Submitted_Answers[t].Answer&&""!=s.classworkDetails.Submitted_Answers[t].Answer?s.classworkDetails.Submitted_Answers[t].Answer.toLowerCase():s.classworkDetails.Submitted_Answers[t].Answer,(s.QuestionAndAnswer.Question[e].sensitivity?s.QuestionAndAnswer.Question[e].answer:null!=s.QuestionAndAnswer.Question[e].answer&&""!=s.QuestionAndAnswer.Question[e].answer?s.QuestionAndAnswer.Question[e].answer.toLowerCase():s.QuestionAndAnswer.Question[e].answer)==n&&(s.Check[e]=!0)}}else if("Essay"==s.QuestionAndAnswer.Question[e].type){"score"in s.classworkDetails.Submitted_Answers[t]||(s.classworkDetails.Submitted_Answers[t].score=0,s.classworkDetails.Submitted_Answers[t].check=!1),s.SubmittedAnswer[e]=s.classworkDetails.Submitted_Answers[t]}else if("Matching type"==s.QuestionAndAnswer.Question[e].type){new Array;var a=new Array,o=0,l={SubQuestion:[],SubAnswer:[]};s.classworkDetails.Submitted_Answers[t].question_pattern.SubQuestion.forEach((function(n){s.QuestionAndAnswer.Answer[e].SubQuestion.forEach((function(s){n.id==s.id&&l.SubQuestion.push({Ans_Letter:null,Answer:null,SubQuestion:s.sub_question,SubQuestion_id:s.id,is_correct:!0,Correct_Answer:s.answer_id,correct_ans_letter:null,isCheck:null})})),s.classworkDetails.Submitted_Answers[t].Answer.forEach((function(s){l.SubQuestion.forEach((function(e){if(s.subquestion_id==e.SubQuestion_id){e.Ans_Letter=s.Ans_letter,e.Answer=s.Answers,e.user_ans_id=s.Ans_id;var t="isCheck"in s;e.isCheck=t?s.isCheck:null}}))}))})),s.classworkDetails.Submitted_Answers[t].question_pattern.SubAnswer.forEach((function(t){s.QuestionAndAnswer.Answer[e].SubAnswer.forEach((function(s){t.id==s.id&&l.SubAnswer.push({SubChoice:s.Choice,SubChoice_id:s.id})}))})),l.SubQuestion.forEach((function(e){var t=0;l.SubAnswer.forEach((function(n){e.Correct_Answer==n.SubChoice_id&&(e.correct_ans_letter=s.Alphabet[t]),t++}))})),l.SubQuestion.forEach((function(t){if(null==t.isCheck){var n=null!=t.Ans_Letter?t.Ans_Letter.replace(/\./g,""):t.Ans_Letter,i=null!=n?n.trim():null;null!=i&&i.toUpperCase()==t.correct_ans_letter.toUpperCase()?(a[o]=!0,s.classworkDetails.Submitted_Answers.forEach((function(n){n.Question_id!=s.QuestionAndAnswer.Question[e].id||n.Answer.forEach((function(s){if(s.subquestion_id==t.SubQuestion_id)return s.Ans_id=t.Correct_Answer,void(s.isCheck=!0)}))}))):(s.classworkDetails.Submitted_Answers.forEach((function(n){n.Question_id!=s.QuestionAndAnswer.Question[e].id||n.Answer.forEach((function(s){s.subquestion_id!=t.SubQuestion_id||(s.isCheck=!1)}))})),a[o]=!1)}else a[o]=!!t.isCheck;o+=1}));var c=new Array;s.classworkDetails.Submitted_Answers[t].Choices_id.forEach((function(t){s.QuestionAndAnswer.Answer[e].SubAnswer.forEach((function(s){t.choice_id==s.id&&c.push({id:s.id,choice:s.Choice})}))})),s.SubmittedAnswer[e]=l,s.Check[e]=a}},n=0;n<s.classworkDetails.Submitted_Answers.length;n++)t(n)},a=0;a<s.QuestionAndAnswer.Question.length;a++)r(a);s.isLoading=!1}))}},mounted:function(){this.fetchQuestions();this.Alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","q","r","s","t","u","v","w","x","y","z"]}};var r=t(72446),a=t.n(r),o=t(23545),l={insert:"head",singleton:!1};a()(o.Z,l);o.Z.locals;const c=(0,t(51900).Z)(i,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[s.isLoading?t("v-container",{staticClass:"fill-height",staticStyle:{height:"500px"}},[t("v-row",{attrs:{"align-content":"center",justify:"center"}},[t("vue-element-loading",{attrs:{active:s.isLoading,text:"Loading",duration:"0.7",textStyle:{fontSize:"18px"},spinner:"line-scale",color:"#EF6C00",size:"50"}})],1)],1):s._e(),s._v(" "),s.isLoading?s._e():t("div",{staticClass:"pl-1 pr-1"},[t("v-row",{staticClass:"mb-4"},[t("v-col",{attrs:{cols:"12"}},[t("v-row",[t("v-col",{staticClass:"text-left pl-0",attrs:{cols:"6"}},[s.$vuetify.breakpoint.mdAndUp?t("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){return s.$emit("closeViewing")}}},[t("v-icon",{attrs:{left:""}},[s._v("mdi-close")]),s._v(" Close\n                          ")],1):s._e()],1),s._v(" "),t("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[s.$vuetify.breakpoint.mdAndUp?t("v-chip",{staticClass:"ma-2",attrs:{color:"success"}},[t("div",{staticClass:"body-2"},[s._v("Score: "+s._s(s.classworkDetails.score)+" /"+s._s(s.classworkDetails.points))])]):s._e()],1),s._v(" "),t("v-col",{attrs:{cols:"12"}},[t("div",{staticClass:"d-flex"},[t("v-btn",{staticClass:"mr-2",attrs:{small:s.$vuetify.breakpoint.xs,disabled:0==s.question_index,color:"primary",outlined:"",rounded:""},on:{click:function(e){s.question_index--}}},[s._v("\n                                    Previous\n                                ")]),s._v(" "),s.$vuetify.breakpoint.mdAndUp?s._e():t("v-spacer"),s._v(" "),t("v-btn",{staticClass:"pl-9 pr-9",attrs:{small:s.$vuetify.breakpoint.xs,disabled:s.question_index+1==s.QuestionAndAnswer.Question.length,color:"primary",rounded:""},on:{click:function(e){s.question_index++}}},[s._v("\n                                    Next\n                                ")])],1)])],1)],1)],1),s._v(" "),s._l(s.QuestionAndAnswer.Question,(function(e,n){return t("v-container",{key:n,attrs:{"ma-0":"","pa-0":""}},[s.question_index==n?t("div",{staticClass:"ma-0 pa-0"},[t("v-container",{attrs:{"ma-0":"","pa-0":""}},[t("div",{staticClass:"subtitle-1 d-flex",style:s.$vuetify.breakpoint.xs?"line-height:1.1":""},[1==s.classworkDetails.showAnswer&&"Matching type"!=e.type&&"Essay"!=e.type?t("div",[t("v-icon",{staticClass:"mr-2",attrs:{color:s.Check[n]?"success":"red"}},[s._v(" "+s._s(s.Check[n]?"mdi-checkbox-marked":"mdi-close-box-outline"))])],1):s._e(),s._v(" "),1==s.classworkDetails.showAnswer&&"Essay"==e.type?t("div",[t("v-chip",{staticClass:"mr-2 mb-2 mt-0 pt-0",attrs:{outlined:"",color:"blue"}},[t("div",{staticClass:"body-2"},[s._v("Score: "+s._s(s.SubmittedAnswer[n].score)+" /"+s._s(e.points))])])],1):s._e(),s._v(" "),t("div",{staticClass:"d-flex mt-1"},[t("h3",{staticClass:"font-weight-bold"},[s._v(s._s(n+1)+".")]),s._v(" "),t("span",{staticClass:"post-content ml-1 mb-0 pb-0",domProps:{innerHTML:s._s(e.question)}}),s._v(" "),t("small",{staticClass:"primary--text ml-1"},[s._v("("+s._s(e.points+" points")+")")])])]),s._v(" "),e.attachments?t("v-row",s._l(e.attachments,(function(e,n){return t("v-col",{key:n,attrs:{cols:"12",md:"4"}},[t("v-img",{staticClass:"white--text ma-0 pa-0 ",staticStyle:{border:"1px solid black","max-width":"100%","max-height":"23rem !important"},attrs:{alt:"Image",contain:"",src:e.link},scopedSlots:s._u([{key:"placeholder",fn:function(){return[t("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t("v-progress-circular",{attrs:{indeterminate:"",color:"red"}})],1)]},proxy:!0}],null,!0)})],1)})),1):s._e()],1),s._v(" "),"Multiple Choice"==e.type?t("v-container",{attrs:{"ml-0":"","pl-0":""}},s._l(s.QuestionAndAnswer.Answer[n],(function(i,r){return t("v-container",{key:r,class:s.$vuetify.breakpoint.xs?"d-flex flex-row ma-0 pa-0 pl-2":"d-flex flex-row ma-0 pa-0 mb-1 ml-8"},[e.isNew?t("v-radio-group",{staticClass:"ma-0 pa-0",attrs:{name:"option"+n},model:{value:s.SubmittedAnswer[n].Answer,callback:function(e){s.$set(s.SubmittedAnswer[n],"Answer",e)},expression:"SubmittedAnswer[index].Answer"}},[t("v-radio",{key:n,attrs:{readonly:"",color:"primary",value:i.id}})],1):t("v-radio-group",{staticClass:"ma-0 pa-0",attrs:{name:"option"+n},model:{value:s.SubmittedAnswer[n].Answer,callback:function(e){s.$set(s.SubmittedAnswer[n],"Answer",e)},expression:"SubmittedAnswer[index].Answer"}},[t("v-radio",{key:n,attrs:{readonly:"",color:"primary",value:i.Choice}})],1),s._v(" "),t("div",{staticClass:"Subtitle-1 ma-0 pa-0 d-flex",staticStyle:{"line-height":"1.4"}},[t("span",{staticClass:"post-content",domProps:{innerHTML:s._s(i.Choice)}}),s._v(" "),e.isNew?t("span",[e.answer==i.id?t("span",{staticClass:"caption primary--text ml-1 mt-1"},[s._v("(correct answer)")]):s._e()]):s._e(),s._v(" "),t("span",[e.answer==i.Choice?t("span",{staticClass:"caption primary--text ml-1 mt-1"},[s._v("(correct answer)")]):s._e()])])],1)})),1):s._e(),s._v(" "),"Identification"==e.type?t("v-container",{attrs:{"ma-0":"","pa-0":""}},[t("v-container",{staticClass:"pl-3 mt-0 pt-0",attrs:{ntainer:"","ma-0":"","pa-0":""}},[t("div",{staticClass:"subtitle-2 font-weight-bold"},[s._v("Correct Answer(s)")]),s._v(" "),s._l(s.QuestionAndAnswer.Answer[n],(function(e,n){return t("div",{key:n,staticClass:" ma-0 pa-0 d-flex pl-3 success--text"},[t("span",{staticClass:"pr-2"},[s._v("• ")]),s._v(" "),t("span",{staticClass:"post-content pa-0 ma-0",domProps:{innerHTML:s._s(e.Choice)}})])})),s._v(" "),t("div",{staticClass:"subtitle-2 font-weight-bold"},[s._v("Your Answer")]),s._v(" "),t("div",{staticClass:"subtitle-1 d-flex item ml-4 mt-0 pt-0"},[t("span",{staticClass:"post-content",domProps:{innerHTML:s._s(s.SubmittedAnswer[n].Answer)}}),s._v(" "),null==s.SubmittedAnswer[n].Answer?t("span",{staticClass:"post-content"},[s._v(" N/A")]):s._e()])],2)],1):s._e(),s._v(" "),"True or False"==e.type?t("v-container",{attrs:{"ma-0":"","pa-0":""}},s._l(s.inputCheck,(function(i,r){return t("v-container",{key:r,class:s.$vuetify.breakpoint.xs?"d-flex flex-row ma-0 pa-0 pl-2":"d-flex flex-row ma-0 pa-0 mb-1 ml-8"},[t("v-radio-group",{staticClass:"ma-0 pa-0",attrs:{name:"option"+n},model:{value:s.SubmittedAnswer[n].Answer,callback:function(e){s.$set(s.SubmittedAnswer[n],"Answer",e)},expression:"SubmittedAnswer[index].Answer"}},[t("v-radio",{key:n,attrs:{readonly:"",color:"primary",value:s.inputCheck[r]}})],1),s._v(" "),t("div",{staticClass:"Subtitle 1"},[s._v("\n                        "+s._s(s.inputCheck[r])+"\n                         "),e.answer==s.inputCheck[r]?t("span",{staticClass:"caption primary--text ml-1 mt-1"},[s._v("(correct answer)")]):s._e()])],1)})),1):s._e(),s._v(" "),"Matching type"==e.type?t("v-container",{attrs:{"ma-0":"","pa-0":""}},[t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{staticClass:"ma-0 pa-0",attrs:{"ma-0":"","pa-0":"",cols:"12"}},[t("v-container",{staticClass:"ma-0 pa-0"},[t("v-container",{staticClass:"mb-0 pb-0"},[t("v-row",[t("v-col",{attrs:{cols:"1"}}),s._v(" "),t("v-col",{staticClass:"font-weight-bold",attrs:{cols:"6"}},[s._v("\n                                            Column A\n                                        ")]),s._v(" "),t("v-col",{staticClass:"font-weight-bold",attrs:{cols:"5"}},[s._v("\n                                            Column B\n                                        ")])],1)],1),s._v(" "),t("v-divider"),s._v(" "),t("v-container",{staticClass:"pl-0 mb-0 pb-0 mt-2"},[t("v-row",{staticClass:"mb-0 pb-0"},[t("v-col",{attrs:{cols:"7"}},[t("v-row",s._l(s.SubmittedAnswer[n].SubQuestion,(function(e,i){return t("v-col",{key:e.id,class:s.$vuetify.breakpoint.mdAndUp?"d-flex flex-row pa-0 pl-12":"d-flex flex-row pa-0 pl-5",attrs:{cols:"12"}},[1==s.classworkDetails.showAnswer?t("div",{staticClass:"mt-0 pt-0 mb-0 pb-0 pa-0"},[t("v-icon",{staticClass:"mt-2 mr-2",attrs:{color:s.Check[n][i]?"success":"red"}},[s._v(" "+s._s(s.Check[n][i]?"mdi-checkbox-marked":"mdi-close-box-outline"))])],1):s._e(),s._v(" "),t("div",{staticClass:"mt-0 pt-0 mb-0 pb-0 pa-0"},[t("v-text-field",{staticClass:"centered-input pt-0 mt-0",style:s.$vuetify.breakpoint.mdAndUp?"max-width:60px":"max-width:80px",attrs:{"hide-details":"",outlined:"",readonly:"",dense:""},model:{value:e.Ans_Letter,callback:function(t){s.$set(e,"Ans_Letter",t)},expression:"item.Ans_Letter"}})],1),s._v(" "),t("div",{staticClass:"d-flex flex-row mt-2 pl-2",style:s.$vuetify.breakpoint.mdAndUp?"width:100%;":"width:100%;font-size:15px;"},[t("span",{staticClass:"font-weight-medium mr-1"},[s._v(s._s(i+1+". "))]),s._v(" "),t("span",{staticClass:"subquestion-content",domProps:{innerHTML:s._s(e.SubQuestion)}})])])})),1)],1),s._v(" "),t("v-col",{attrs:{cols:"5"}},[t("v-row",s._l(s.SubmittedAnswer[n].SubAnswer,(function(e,n){return t("v-col",{key:n,staticClass:"d-flex flex-row pa-0",attrs:{cols:"12"}},[t("div",{staticClass:"d-flex flex-row mt-2 pl-4",style:s.$vuetify.breakpoint.mdAndUp?"width:100%;":"width:100%;font-size:15px;"},[t("span",{staticClass:"font-weight-medium mr-1"},[s._v(s._s(s.Alphabet[n]+". "))]),s._v(" "),t("span",{staticClass:"subchoices-content",domProps:{innerHTML:s._s(e.SubChoice)}})])])})),1)],1)],1)],1)],1)],1)],1)],1):s._e(),s._v(" "),"Essay"==e.type?t("v-container",{attrs:{"ma-0":"","pa-0":""}},[t("v-container",{staticClass:"pl-3 mt-1 pt-0",attrs:{"ma-0":"","pa-0":""}},[t("div",{staticClass:"subtitle-2 font-weight-bold"},[s._v("Answer")]),s._v(" "),t("div",{staticClass:"subtitle-1 d-flex item ml-4 mt-0 pt-0"},[t("span",{staticClass:"post-content",domProps:{innerHTML:s._s(s.SubmittedAnswer[n].Answer)}}),s._v(" "),null==s.SubmittedAnswer[n].Answer?t("span",{staticClass:"post-content"},[s._v(" N/A")]):s._e()])])],1):s._e()],1):s._e()])}))],2)],1)}),[],!1,null,null,null).exports}}]);