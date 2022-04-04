<template>
    <div>
        <v-container class="fill-height" v-if="isLoading" style="height: 500px;">
            <v-row  align-content="center" justify="center">
                <vue-element-loading :active="isLoading" 
                    text="Loading"
                    duration="0.7"
                    :textStyle="{fontSize: '18px'}"
                    spinner="line-scale" color="#EF6C00"  size="50"  />
            </v-row>
        </v-container>

           <div  v-if="!isLoading" class="pl-1 pr-1">
               <v-row class="mb-4">
                   <v-col cols="12">
                       <v-row>
                           <v-col cols="6" class="text-left pl-0">
                              <v-btn v-if="$vuetify.breakpoint.mdAndUp" @click="$emit('closeViewing')" text rounded>
                                  <v-icon left>mdi-close</v-icon> Close
                              </v-btn>
                           </v-col>
                           <v-col cols="6"  class="text-right">
                                <v-chip v-if="$vuetify.breakpoint.mdAndUp" color="success" class="ma-2">
                                    <div class="body-2">Score: {{classworkDetails.score}} /{{classworkDetails.points}}</div>
                                </v-chip>
                           </v-col>
                           <v-col cols="12">
                                <div class="d-flex">
                                    <v-btn
                                    :small="$vuetify.breakpoint.xs"
                                    :disabled="question_index == 0"
                                    @click="question_index--" 
                                    color="primary" 
                                    outlined rounded class="mr-2">
                                        Previous
                                    </v-btn>
                                    <v-spacer v-if="!$vuetify.breakpoint.mdAndUp"  ></v-spacer>
                                    <v-btn  
                                     :small="$vuetify.breakpoint.xs"
                                    :disabled="(question_index+1) == QuestionAndAnswer.Question.length"
                                    @click="question_index++" 
                                    class="pl-9 pr-9"
                                    color="primary" rounded>
                                        Next
                                    </v-btn>
                                </div>
                            
                           </v-col> 
                       </v-row>
                   </v-col>
               </v-row>

                <v-container ma-0 pa-0 v-for="(item, index) in QuestionAndAnswer.Question" :key="index">
                    <div v-if="question_index == index" class="ma-0 pa-0">
                    <v-container ma-0 pa-0>
                        <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1': ''" class="subtitle-1 d-flex"> 
                            <div v-if="classworkDetails.showAnswer == true && (item.type != 'Matching type' && item.type != 'Essay')">
                      <!--           <v-checkbox readonly class="mt-0 pt-0" color="success" v-model="Check[index]"></v-checkbox> -->
                                <v-icon class="mr-2" :color="Check[index] ? 'success' : 'red'"> {{Check[index] ? 'mdi-checkbox-marked' : 'mdi-close-box-outline'}}</v-icon>
                            </div>
                            <div v-if="classworkDetails.showAnswer == true && item.type == 'Essay'">
                                <v-chip outlined color="blue" class="mr-2 mb-2 mt-0 pt-0">
                                    <div class="body-2">Score: {{SubmittedAnswer[index].score}} /{{item.points}}</div>
                                </v-chip>
                            </div>
                            <div class="d-flex mt-1">
                                 <h3 class="font-weight-bold">{{index+1}}.</h3>
                                <span v-html="item.question" class="post-content ml-1 mb-0 pb-0"></span>
                                <small class="primary--text ml-1">({{item.points+' points'}})</small>
                            </div>
                            
                        </div>

                         <v-row v-if="item.attachments">
                            <v-col  v-for="(attach, num) in item.attachments" :key="num"  cols="12" md="4">
                                  <v-img alt="Image" class="white--text ma-0 pa-0 " contain style="border:1px solid black;max-width: 100%;max-height: 23rem !important;" :src="attach.link" >
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular
                                                indeterminate
                                                color="red">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-col>
                        </v-row>
                    </v-container> 
               
                 <v-container ml-0 pl-0 v-if="item.type == 'Multiple Choice'">
                     <v-container :class="!$vuetify.breakpoint.xs ? 'd-flex flex-row ma-0 pa-0 mb-1 ml-8': 'd-flex flex-row ma-0 pa-0 pl-2'" 
                     v-for="(Ans, i) in QuestionAndAnswer.Answer[index]" :key="i">
                        <v-radio-group v-if="item.isNew" :name="'option'+index"  class="ma-0 pa-0" v-model="SubmittedAnswer[index].Answer">
                            <v-radio
                            readonly
                            color="primary"
                            :key="index"
                            :value="Ans.id">
                            </v-radio>
                            </v-radio-group>

                            <v-radio-group v-else :name="'option'+index"  class="ma-0 pa-0" v-model="SubmittedAnswer[index].Answer">
                            <v-radio
                            readonly
                            color="primary"
                            :key="index"
                            :value="Ans.Choice">
                            </v-radio>
                            </v-radio-group>


                            <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex">
                                <span v-html="Ans.Choice" class="post-content"></span>
                                <span v-if="item.isNew">
                                    <span class="caption primary--text ml-1 mt-1" v-if="item.answer == Ans.id">(correct answer)</span>
                                </span>
                                <span>
                                    <span  class="caption primary--text ml-1 mt-1" v-if="item.answer == Ans.Choice">(correct answer)</span>
                                </span>
                                
                               
                                 
                            </div>
                        </v-container>
                 </v-container>

                  <v-container ma-0 pa-0 v-if="item.type == 'Identification'">
                      <v-container ntainer ma-0 pa-0 class="pl-3 mt-0 pt-0">
                          <div class="subtitle-2 font-weight-bold">Correct Answer(s)</div>
                            <div v-for="(Ans, i) in QuestionAndAnswer.Answer[index]"
                                :key="i"
                                class=" ma-0 pa-0 d-flex pl-3 success--text">
                                <span class="pr-2">&bull; </span>
                                <span v-html="Ans.Choice"
                                    class="post-content pa-0 ma-0"></span>
                            </div>

                        <div class="subtitle-2 font-weight-bold">Your Answer</div>
                        <div class="subtitle-1 d-flex item ml-4 mt-0 pt-0">
                            <span v-html="SubmittedAnswer[index].Answer" class="post-content"></span>
                            <span v-if="SubmittedAnswer[index].Answer == null"  class="post-content"> N/A</span>
                        </div>

                       
                    </v-container>
                 </v-container>


                  <v-container ma-0 pa-0  v-if="item.type == 'True or False'">
                       <v-container :class="!$vuetify.breakpoint.xs ? 'd-flex flex-row ma-0 pa-0 mb-1 ml-8': 'd-flex flex-row ma-0 pa-0 pl-2'" 
                        v-for="(x, n) in inputCheck" :key="n">
                        <v-radio-group :name="'option'+index"   class="ma-0 pa-0"  v-model="SubmittedAnswer[index].Answer">
                            <v-radio
                            readonly
                            color="primary"
                            :key="index"
                            :value="inputCheck[n]">
                            </v-radio>
                        </v-radio-group>
                        <div class="Subtitle 1">
                            {{inputCheck[n]}}
                             <span class="caption primary--text ml-1 mt-1" v-if="item.answer == inputCheck[n]">(correct answer)</span>
                        </div>
                    </v-container>
                 </v-container>

                 <v-container ma-0 pa-0  v-if="item.type == 'Matching type'">
                      <v-row no-gutters>
                            <v-col ma-0 pa-0 class="ma-0 pa-0" cols="12"  >
                                <v-container class="ma-0 pa-0">
                                    <v-container class="mb-0 pb-0">
                                        <v-row>
                                            <v-col cols="1"></v-col>
                                            <v-col class="font-weight-bold" cols="6" >
                                                Column A
                                            </v-col>
                                            <v-col class="font-weight-bold" cols="5">
                                                Column B
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <v-divider></v-divider>

                                     <v-container class="pl-0 mb-0 pb-0 mt-2" >
                                        <v-row class="mb-0 pb-0">
                                            <v-col cols="7" >
                                                <v-row>
                                                    <v-col :class="$vuetify.breakpoint.mdAndUp ? 'd-flex flex-row pa-0 pl-12' : 'd-flex flex-row pa-0 pl-5'" 
                                                    cols="12" v-for="(item, i) in SubmittedAnswer[index].SubQuestion" :key="item.id">
                                                        <div v-if="classworkDetails.showAnswer == true" class="mt-0 pt-0 mb-0 pb-0 pa-0">
                                                            <v-icon class="mt-2 mr-2"  :color="Check[index][i] ? 'success' : 'red'"> {{Check[index][i] ? 'mdi-checkbox-marked' : 'mdi-close-box-outline'}}</v-icon>
                                                        </div> 
                                            
                                                        <div class="mt-0 pt-0 mb-0 pb-0 pa-0">
                                                            <v-text-field 
                                                                :style="$vuetify.breakpoint.mdAndUp ? 'max-width:60px' : 'max-width:80px'"
                                                                hide-details
                                                                outlined
                                                                readonly
                                                                dense
                                                                v-model="item.Ans_Letter"
                                                                class="centered-input pt-0 mt-0">
                                                            </v-text-field>
                                                        </div>
                                                        <div :style="!$vuetify.breakpoint.mdAndUp ? 'width:100%;font-size:15px;' : 'width:100%;'" class="d-flex flex-row mt-2 pl-2"> 
                                                            <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                                            <span v-html="item.SubQuestion" class="subquestion-content"></span>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <v-col cols="5">
                                                <v-row>
                                                    <v-col cols="12" v-for="(pairList, i) in SubmittedAnswer[index].SubAnswer" :key="i" class="d-flex flex-row pa-0">
                                                        <div :style="!$vuetify.breakpoint.mdAndUp ? 'width:100%;font-size:15px;' : 'width:100%;'" class="d-flex flex-row mt-2 pl-4"> 
                                                            <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                                            <span v-html="pairList.SubChoice" class="subchoices-content"></span>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                   <!--  <v-container class="mb-0 pb-0 pt-2 pb-3" v-for="(item, i) in SubmittedAnswer[index]" :key="item.id">
                                        <v-row>
                                             <v-col v-if="classworkDetails.showAnswer == true" class="mb-1 pb-0 pt-0 mt-0 mr-0 pr-0" cols="2" md="1" lg="1">
                                               <v-checkbox
                                                    hide-details
                                                    class="mt-5 pr-0 mr-0"
                                                    v-model="Check[index][i]"
                                                    color="success">
                                                </v-checkbox>
                                            </v-col>
                                            <v-col class="mb-1 pb-0 pt-0 mt-0" cols="2" md="1" lg="1">
                                                <v-text-field readonly class="centered-input" v-model="item.Ans_Letter">
                                                </v-text-field>
                                            </v-col>
                                            <v-col class="mb-1 pb-0 pt-0 mt-0" cols="4" md="5" lg="5">
                                                <div class="d-flex mt-7">
                                                    <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                                    <span :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" v-html="item.SubQuestion" class="subquestion-content"></span>
                                                </div>
                                            </v-col>
                                            <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="4" md="5" lg="5">
                                                <div class="d-flex mt-7"> 
                                                    <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                                    <span :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" v-html="item.SubChoice" class="subchoices-content"></span>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-container> -->
                                </v-container>
                            </v-col>
                        </v-row>
                 </v-container>

                 <v-container ma-0 pa-0 v-if="item.type == 'Essay'">
                      <v-container ma-0 pa-0 class="pl-3 mt-1 pt-0">
                        <div class="subtitle-2 font-weight-bold">Answer</div>
                        <div class="subtitle-1 d-flex item ml-4 mt-0 pt-0">
                            <span v-html="SubmittedAnswer[index].Answer" class="post-content"></span>
                            <span v-if="SubmittedAnswer[index].Answer == null"  class="post-content"> N/A</span>
                        </div>
                    </v-container>
                 </v-container>

                </div>
            </v-container>
           
           </div>
       </div>

</template>
<script>
import moment from 'moment/src/moment';
 import {mapGetters, mapActions } from "vuex";
 
  export default {
      props:["classworkDetails", "details"],
      data(){
          return{
            Qlength: null,
            Details: [],
            Check: [],
            isLoading: true,
            inputCheck:['True','False'],
            SubmittedAnswer:[],
            UpdateDetails:{},
            ViewSubmiisionConditions:{},
            Alphabet: null,
            question_index: 0,
          }
      },
      computed:mapGetters(["getAll_questions"]),
      methods:{
           format_date(value) {
            if (value) {
                return moment(String(value)).format('MM/d/YYYY, hh:mm A')
            }
        },
          fetchQuestions(){
              this.ViewSubmiisionConditions.showAnswer = this.classworkDetails.showAnswer;
               this.ViewSubmiisionConditions.showAnswerType = this.classworkDetails.showAnswerType;
              axios.get('/api/question/question-answer/'+this.classworkDetails.id+'/'+this.classworkDetails.class_classwork_id)
              .then(res=>{
                   this.QuestionAndAnswer = res.data;

                    let Submitted_length = this.classworkDetails.Submitted_Answers.length;
                    let Question_length = this.QuestionAndAnswer.Question.length;
                    let diff = Question_length  - Submitted_length;

                    for (let i = 0; i < diff; i++) {
                        if(this.QuestionAndAnswer.Question[i].type == 'Multiple Choice' || this.QuestionAndAnswer.Question[i].type == 'Identification' || this.QuestionAndAnswer.Question[i].type == 'True or False' || this.QuestionAndAnswer.Question[i].type == 'Essay'){
                            this.classworkDetails.Submitted_Answers.push({
                                Answer: null,
                                Question_id: this.QuestionAndAnswer.Question[i].id,
                                timeConsume: null,
                                type: this.QuestionAndAnswer.Question[i].type
                            })
                        }
                        else if(this.QuestionAndAnswer.Question[i].type == 'Matching type'){

                        }
    
                    }
                    for (let i = 0; i < this.QuestionAndAnswer.Question.length; i++) {
                        for (let j = 0; j < this.classworkDetails.Submitted_Answers.length; j++) {
                            
                            if(this.QuestionAndAnswer.Question[i].id == this.classworkDetails.Submitted_Answers[j].Question_id){
                                if(this.QuestionAndAnswer.Question[i].type == 'Multiple Choice' || this.QuestionAndAnswer.Question[i].type == 'Identification' || this.QuestionAndAnswer.Question[i].type == 'True or False'){
                                    let student_ans;

                                    this.SubmittedAnswer[i] =  this.classworkDetails.Submitted_Answers[j];
                                     if(this.QuestionAndAnswer.Question[i].type == 'Identification'){

                                         const hasKey = 'check' in this.classworkDetails.Submitted_Answers[j];

                                         if(hasKey){
                                            if(this.classworkDetails.Submitted_Answers[j].check == true){
                                                this.Check[i] = true;
                                            }else{
                                                this.Check[i] = false;
                                            }
                                        }else{
                                            student_ans = this.QuestionAndAnswer.Question[i].sensitivity ? this.classworkDetails.Submitted_Answers[j].Answer : 
                                            this.classworkDetails.Submitted_Answers[j].Answer != null && this.classworkDetails.Submitted_Answers[j].Answer != '' ? 
                                            this.classworkDetails.Submitted_Answers[j].Answer.toLowerCase() : this.classworkDetails.Submitted_Answers[j].Answer;
                                           
                                           
                                            this.Check[i] = false;
                                            this.QuestionAndAnswer.Answer[i].forEach(item => {
                                                let Question_answer = this.QuestionAndAnswer.Question[i].sensitivity ? item.Choice : item.Choice != null && item.Choice != '' ? item.Choice.toLowerCase() : item.Choice;
                                                    if(Question_answer != null){
                                                            Question_answer = Question_answer.replace('<p>', '').trim();
                                                            Question_answer = Question_answer.replace('</p>', '').trim();
                                                            Question_answer = Question_answer.replace('&nbsp;', '').trim();
                                                            Question_answer = Question_answer.trim();
                                                        }
                                                        if(student_ans != null){
                                                            student_ans = student_ans.replace('<p>', '').trim();
                                                            student_ans = student_ans.replace('</p>', '').trim();
                                                            student_ans = student_ans.replace('&nbsp;', '').trim();
                                                            student_ans = student_ans.trim();
                                                        }
                                                    if(student_ans == Question_answer){
                                                        this.Check[i] = true;
                                                    }
                    
                                                });
                                        }

                                       
                                    }
                                    else if(this.QuestionAndAnswer.Question[i].type == 'Multiple Choice'){
                                        const hasKey = 'check' in this.classworkDetails.Submitted_Answers[j];
                                         if(hasKey) {
                                            this.Check[i] = this.classworkDetails.Submitted_Answers[j].check == true ? true :false;
                                        }else{
                                            if(this.QuestionAndAnswer.Question[i].isNew){
                                             student_ans = this.classworkDetails.Submitted_Answers[j].Answer;
                                                let Question_answer = this.QuestionAndAnswer.Question[i].answer;
                                                this.SubmittedAnswer[i] =  this.classworkDetails.Submitted_Answers[j];
                                                if(Question_answer == student_ans){
                                                    this.Check[i] = true;
                                                }
                                                else{
                                                    this.Check[i] = false;
                                                }
                                                
                                            }else{
                                                console.log(this.classworkDetails.Submitted_Answers[j].Answer );
                                                student_ans = this.QuestionAndAnswer.Question[i].sensitivity ? this.classworkDetails.Submitted_Answers[j].Answer : 
                                                this.classworkDetails.Submitted_Answers[j].Answer != null && this.classworkDetails.Submitted_Answers[j].Answer != '' ? this.classworkDetails.Submitted_Answers[j].Answer.toLowerCase() : this.classworkDetails.Submitted_Answers[j].Answer;
                                                this.SubmittedAnswer[i] =  this.classworkDetails.Submitted_Answers[j];

                                                let Question_answer = this.QuestionAndAnswer.Question[i].sensitivity ? this.QuestionAndAnswer.Question[i].answer : 
                                                this.QuestionAndAnswer.Question[i].answer != null && this.QuestionAndAnswer.Question[i].answer != ''  ? this.QuestionAndAnswer.Question[i].answer.toLowerCase() : this.QuestionAndAnswer.Question[i].answer;

                                                if(Question_answer == student_ans){
                                                    this.Check[i] = true;
                                                }
                                                else{
                                                    this.Check[i] = false;
                                                }
                                            }
                                        }
                                        
                                    }
                                    else if(this.QuestionAndAnswer.Question[i].type == 'True or False'){

                                        const hasKey = 'check' in this.classworkDetails.Submitted_Answers[j];
                                         if(hasKey) {
                                            this.Check[i] = this.classworkDetails.Submitted_Answers[j].check == true ? true :false;
                                        }else{
                                            this.Check[i] = false;
                                            student_ans = this.QuestionAndAnswer.Question[i].sensitivity ? this.classworkDetails.Submitted_Answers[j].Answer :
                                            this.classworkDetails.Submitted_Answers[j].Answer != null && this.classworkDetails.Submitted_Answers[j].Answer != '' ? 
                                            this.classworkDetails.Submitted_Answers[j].Answer.toLowerCase() : this.classworkDetails.Submitted_Answers[j].Answer;


                                            let Question_answer = this.QuestionAndAnswer.Question[i].sensitivity ?
                                                this.QuestionAndAnswer.Question[i].answer : this.QuestionAndAnswer.Question[i].answer != null && this.QuestionAndAnswer.Question[i].answer != '' 
                                                ? this.QuestionAndAnswer.Question[i].answer.toLowerCase() : this.QuestionAndAnswer.Question[i].answer;

                                            if (Question_answer == student_ans) {
                                                this.Check[i] = true;
                                            } 
                                        }
                                       
                                    }
                                }
                                else if(this.QuestionAndAnswer.Question[i].type == 'Essay'){
                                    const hasKey = 'score' in this.classworkDetails.Submitted_Answers[j];
                                    if(!hasKey) {
                                        this.classworkDetails.Submitted_Answers[j].score = 0;
                                        this.classworkDetails.Submitted_Answers[j].check = false;
                                    }
                                   
                                    this.SubmittedAnswer[i] =  this.classworkDetails.Submitted_Answers[j];
                                }
                                else if(this.QuestionAndAnswer.Question[i].type == 'Matching type'){
                                    let Ans = new Array();
                                    let match_check = new Array();
                                    let counter = 0;
                                     /* this.classworkDetails.Submitted_Answers[j].Answer.forEach(item => {
                                        for (let x = 0; x < this.QuestionAndAnswer.Answer[i].SubQuestion.length; x++) {

                                            if (this.QuestionAndAnswer.Answer[i].SubQuestion[x].id == item.subquestion_id) {
                                                match_check[counter] = true;
                                                if (this.QuestionAndAnswer.Answer[i].SubQuestion[x].answer_id == item.Ans_id) {
                                                    match_check[counter] = true;
                                                    //this.ViewDetails.points += matchpoints;

                                                } else {
                                                    match_check[counter] = false;
                                                }
                                            }
                                        }
                                        counter+=1;   
                                     });  */ 

                                    let Ans_list = {};
                                    Ans_list.SubQuestion = [];
                                    Ans_list.SubAnswer = [];
                                    let sub_ques_count = 0;


                                    this.classworkDetails.Submitted_Answers[j].question_pattern.SubQuestion.forEach(sub_ques => {
                                        this.QuestionAndAnswer.Answer[i].SubQuestion.forEach(subQuestion => {
                                            if(sub_ques.id == subQuestion.id){
                                                Ans_list.SubQuestion.push({
                                                    Ans_Letter: null,
                                                    Answer: null,
                                                    SubQuestion: subQuestion.sub_question,
                                                    SubQuestion_id: subQuestion.id,
                                                    is_correct: true,
                                                    Correct_Answer: subQuestion.answer_id,
                                                    correct_ans_letter: null,
                                                    isCheck: null
                                                });
                                            }
                                        });

                                        this.classworkDetails.Submitted_Answers[j].Answer.forEach(user_ans => {
                                            Ans_list.SubQuestion.forEach(ans => {
                                                if(user_ans.subquestion_id == ans.SubQuestion_id){
                                                    ans.Ans_Letter = user_ans.Ans_letter;
                                                    ans.Answer = user_ans.Answers;
                                                    ans.user_ans_id = user_ans.Ans_id;

                                                    const hasKey = 'isCheck' in user_ans;
                                                    if(hasKey) {
                                                        ans.isCheck =  user_ans.isCheck;
                                                    }else{
                                                        ans.isCheck = null;
                                                    }
                                                }
                                            });
                                        });
                                    });

                                    
                                    this.classworkDetails.Submitted_Answers[j].question_pattern.SubAnswer.forEach(sub_ans => {
                                        this.QuestionAndAnswer.Answer[i].SubAnswer.forEach(subAnswer => {
                                            if(sub_ans.id == subAnswer.id){
                                                Ans_list.SubAnswer.push({
                                                    SubChoice: subAnswer.Choice,
                                                    SubChoice_id: subAnswer.id,
                                                });
                                            }
                                        });
                                    });

                                    Ans_list.SubQuestion.forEach(sub_ques => {
                                        let c_count = 0;
                                        Ans_list.SubAnswer.forEach(sub_ans => {
                                            if(sub_ques.Correct_Answer == sub_ans.SubChoice_id){
                                                sub_ques.correct_ans_letter = this.Alphabet[c_count];
                                            }
                                            c_count++;
                                        });
                                    });

                                    Ans_list.SubQuestion.forEach(sub => {
                                        if(sub.isCheck == null){
                                            let string = sub.Ans_Letter != null ? sub.Ans_Letter.replace(/\./g,'') : sub.Ans_Letter;
                                            let letter = string != null ? string.trim() : null;

                                            if(letter != null ? letter.toUpperCase() == sub.correct_ans_letter.toUpperCase() : false){
                                                match_check[counter] = true;
                                                this.classworkDetails.Submitted_Answers.forEach(submi_ans => {
                                                    if(submi_ans.Question_id == this.QuestionAndAnswer.Question[i].id){
                                                        submi_ans.Answer.forEach(submitted_as => {
                                                            if(submitted_as.subquestion_id == sub.SubQuestion_id){
                                                                submitted_as.Ans_id = sub.Correct_Answer;
                                                                submitted_as.isCheck = true;
                                                                return;
                                                            }
                                                        });
                                                        return;
                                                    }
                                                });
                                            }else{
                                                this.classworkDetails.Submitted_Answers.forEach(submi_ans => {
                                                    if(submi_ans.Question_id == this.QuestionAndAnswer.Question[i].id){
                                                        submi_ans.Answer.forEach(submitted_as => {
                                                            if(submitted_as.subquestion_id == sub.SubQuestion_id){
                                                                submitted_as.isCheck = false;
                                                                return;
                                                            }
                                                        });
                                                        return;
                                                    }
                                                });
                                                match_check[counter] = false;
                                            }
                                        }else{
                                            match_check[counter] = sub.isCheck ? true : false;
                                        }
                                        counter += 1;
                                    });


                                    let tmpChoices = new Array();
                                    this.classworkDetails.Submitted_Answers[j].Choices_id.forEach(item => {
                                        this.QuestionAndAnswer.Answer[i].SubAnswer.forEach(choice => {
                                            if(item.choice_id == choice.id){
                                                tmpChoices.push({
                                                    id: choice.id,
                                                    choice: choice.Choice,
                                                })
                                            }
                                        })
                                    });

                                    this.SubmittedAnswer[i] = Ans_list;
                                    this.Check[i] = match_check;
                                }
                            }
                            
                        }
                        
                    }
                    this.isLoading = false;
              })
        },
       
     
      },
      mounted(){
          this.fetchQuestions();
           const alphabet = [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z"
            ];
            this.Alphabet = alphabet;
      }
  }
</script>
<style>
    .centered-input >>> input {
      text-align: center
    }
    .post-content img{
        
     max-height: 8rem !important;
}
 .centered-input input {
  text-align: center
 }

</style>

