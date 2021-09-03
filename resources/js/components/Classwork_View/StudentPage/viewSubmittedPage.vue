<template>
  
      <v-card>
          <!-- <div class="pa-3"> -->
           <!--  <v-btn
             text
            rounded
            @click="$emit('closeDialog')">
                <v-icon left>mdi-close</v-icon>
            Close
          </v-btn> -->
        
            <v-toolbar
            dark
            dense
            color="primary"
            >
           <v-btn
             icon
            rounded
            @click="$emit('closeDialog')">
            <v-icon left>mdi-close</v-icon>
            
          </v-btn>
        </v-toolbar>
          
         <!--  </div> -->
        <v-container class="fill-height" v-if="isLoading" style="height: 400px;">
            <v-row  align-content="center" justify="center">
                <v-col class="text-subtitle-1 text-center" cols="12">
                    Loading
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>

           <v-container  v-if="!isLoading" class="mt-5">
               <v-row class="mb-2">
                   <v-col class="12" md="9" lg="9">
                       <v-row>
                           <v-col cols="6" class="text-left">
                               <h3>{{details.title}}</h3>
                           </v-col>
                           <v-col cols="6" md="4" class="text-right">
                                <v-chip color="success" class="ma-2">
                                    <div class="body-2">Score: {{details.score}} /{{details.totalPoints}}</div>
                                </v-chip>
                           </v-col>
                       </v-row>
                   </v-col>
               </v-row>

                <v-container ma-0 pa-0 v-for="(item, index) in QuestionAndAnswer.Question" :key="index">
                    <v-container ma-0 pa-0>
                        <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1': ''" class="subtitle-1 d-flex"> 
                            <v-checkbox
                            readonly
                            v-if="details.showAnswer == true"
                            class="mt-0 pt-0"
                            color="success"
                            v-model="Check[index]"
                            ></v-checkbox>
                            
                            <h3 class="font-weight-bold">{{index+1}}.</h3>
                            <span v-html="item.question" class="post-content ml-1 mb-0 pb-0"></span>
                            <small class="primary--text ml-1">({{item.points+' points'}})</small>
                        </div>
                    </v-container> 
               
                 <v-container ml-0 pl-0 v-if="item.type == 'Multiple Choice'">
                     <v-container :class="!$vuetify.breakpoint.xs ? 'd-flex flex-row ma-0 pa-0 mb-1 ml-8': 'd-flex flex-row ma-0 pa-0 pl-2'" 
                     v-for="(Ans, i) in QuestionAndAnswer.Answer[index]" :key="i">
                        <v-radio-group :name="'option'+index"  class="ma-0 pa-0" v-model="SubmittedAnswer[index].Answer">
                            <v-radio
                            readonly
                            color="primary"
                            :key="index"
                            :value="Ans.Choice">
                            </v-radio>
                            </v-radio-group>
                            <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex">
                                <span v-html="Ans.Choice" class="post-content"></span>
                                <span class="caption primary--text ml-1 mt-1" v-if="item.answer == Ans.Choice">(correct answer)</span>
                            </div>
                        </v-container>
                 </v-container>

                  <v-container ma-0 pa-0 v-if="item.type == 'Identification'">
                      <v-container ma-0 pa-0 class="ml-7 mt-0 pt-0">
                        <div class="subtitle-2 font-weight-bold">Answer</div>
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
                            <v-col ma-0 pa-0 class="ma-0 pa-0" cols="12" lg="7" md="12" >
                                <v-container class="ma-0 pa-0">
                                    <v-container>
                                        <v-row>
                                            <v-col class="font-weight-bold" cols="1" md="1" lg="1">
                                                
                                            </v-col>
                                            <v-col class="font-weight-bold" cols="5" md="6" lg="6">
                                                Column A
                                            </v-col>
                                            <v-col class="font-weight-bold" cols="5">
                                                Column B
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <v-divider></v-divider>
                                    <v-container class="mb-0 pb-0" v-for="(item, i) in SubmittedAnswer[index]" :key="item.id">
                                        
                                        <v-row>
                                            <v-col class="mb-1 pb-0 pt-0 mt-0" cols="2" md="1" lg="1">
                                                <v-text-field readonly class="centered-input" v-model="item.Ans_Letter">
                                                </v-text-field>
                                            </v-col>
                                            <v-col class="mb-1 pb-0 pt-0 mt-0" cols="5" md="6" lg="6">
                                                <div class="d-flex mt-7">
                                                    <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                                    <span :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" v-html="item.SubQuestion" class="subquestion-content"></span>
                                                </div>
                                            </v-col>
                                            <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="5" md="5" lg="5">
                                                <div class="d-flex mt-7"> 
                                                    <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                                    <span :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" v-html="item.SubChoice" class="subchoices-content"></span>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-container>
                            </v-col>
                        </v-row>
                 </v-container>

                 <v-container ma-0 pa-0 v-if="item.type == 'Essay'">
                      <v-container ma-0 pa-0 class="ml-7 mt-0 pt-0">
                        <div class="subtitle-2 font-weight-bold">Answer</div>
                        <div class="subtitle-1 d-flex item ml-4 mt-0 pt-0">
                            <span v-html="SubmittedAnswer[index].Answer" class="post-content"></span>
                            <span v-if="SubmittedAnswer[index].Answer == null"  class="post-content"> N/A</span>
                        </div>
                    </v-container>
                 </v-container>


                </v-container>
           </v-container>
      </v-card>
  

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
            Alphabet: null
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
              this.ViewSubmiisionConditions.showAnswer = this.details.showAnswer;
               this.ViewSubmiisionConditions.showAnswerType = this.details.showAnswerType;
              axios.get('/api/question/question-answer/'+this.$route.params.id+'/'+this.details.class_classwork_id)
              .then(res=>{
                  ////console.log(res.data)
                   this.QuestionAndAnswer = res.data;

                    let Submitted_length = this.details.Submitted_Answers.length;
                    let Question_length = this.QuestionAndAnswer.Question.length;
                    let diff = Question_length  - Submitted_length;
                    for (let i = 0; i < diff; i++) {
                        if(this.QuestionAndAnswer.Question[i].type == 'Multiple Choice' || this.QuestionAndAnswer.Question[i].type == 'Identification' || this.QuestionAndAnswer.Question[i].type == 'True or False' || this.QuestionAndAnswer.Question[i].type == 'Essay'){
                            this.details.Submitted_Answers.push({
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
                        for (let j = 0; j < this.details.Submitted_Answers.length; j++) {
                            if(this.QuestionAndAnswer.Question[i].id == this.details.Submitted_Answers[j].Question_id){
                                if(this.QuestionAndAnswer.Question[i].type == 'Multiple Choice' || this.QuestionAndAnswer.Question[i].type == 'Identification' || this.QuestionAndAnswer.Question[i].type == 'True or False' || this.QuestionAndAnswer.Question[i].type == 'Essay'){
                                     this.SubmittedAnswer[i] =  this.details.Submitted_Answers[j];
                                    if(this.QuestionAndAnswer.Question[i].answer == this.details.Submitted_Answers[j].Answer){
                                        this.Check[i] = true;
                                    }
                                    else{
                                        this.Check[i] = false;
                                    }
                                }
                                else if(this.QuestionAndAnswer.Question[i].type == 'Matching type'){
                                    let Ans = new Array();
                                    let match_check = new Array();
                                     this.details.Submitted_Answers[j].Answer.forEach(item => {
                                        for (let x = 0; x < this.QuestionAndAnswer.Answer[i].SubQuestion.length; x++) {
                                            if(this.QuestionAndAnswer.Answer[i].SubQuestion[x].id == item.subquestion_id){
                                                Ans.push({
                                                    Ans_Letter: item.Ans_letter,
                                                    Answer: item.Answers,
                                                    SubQuestion: this.QuestionAndAnswer.Answer[i].SubQuestion[x].sub_question,
                                                    SubChoice: null
                                                })


                                            }                           
                                        }
                                     });  
                                    let tmpChoices = new Array();
                                    this.details.Submitted_Answers[j].Choices_id.forEach(item => {
                                        this.QuestionAndAnswer.Answer[i].SubAnswer.forEach(choice => {
                                            if(item.choice_id == choice.id){
                                                tmpChoices.push({
                                                    id: choice.id,
                                                    choice: choice.Choice,
                                                })
                                            }
                                        })
                                    });

                                    for (let a = 0; a < Ans.length; a++) {
                                        Ans[a].SubChoice = tmpChoices[a].choice
                                        //console.log(tmpChoices[a].choice);
                                    }
                                    this.SubmittedAnswer[i] = Ans;
                                }
                            }
                            
                        }
                        
                    }
                    this.isLoading = false;
              })

            /* this.$store.dispatch('fetchQuestions', this.$route.params.id).then(res=>{
                ////console.log(res);
                this.Details = res[0];
                for (let i = 0; i < this.Details.Question.length; i++) {
                    for (let j = 0; j < this.details.Submitted_Answers.length; j++) {
                        if(this.Details.Question[i].id == this.details.Submitted_Answers[j].Question_id){
                            this.SubmittedAnswer[i] =  this.details.Submitted_Answers[j];
                            if(this.Details.Question[i].answer == this.details.Submitted_Answers[j].Answer){
                                this.Check[i] = true;
                            }
                            else{
                                this.Check[i] = false;
                            }
                            
                        }
                        
                    }
                    
                }
                ////console.log(this.details.Submitted_Answers);
                this.isLoading = false;
            });
 */
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
          ////console.log(this.details);
          ////console.log(this.classworkDetails);
          ////console.log(this.details)
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

