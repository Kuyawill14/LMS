<template>
  
      <v-card>
          <div class="pa-3">
            <v-btn
             text
            rounded
            @click="$emit('closeDialog')">
                <v-icon left>mdi-close</v-icon>
            Close
          </v-btn>
          </div>
      

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
           <v-container  v-if="!isLoading" class="mt-5 pl-6">
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
               
                 <v-container v-if="item.type == 'Multiple Choice'">
                     <v-container class="d-flex flex-row ma-0 pa-0 mb-1 ml-8" v-for="(Ans, i) in QuestionAndAnswer.Answer[index]" :key="i">
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


                  <v-container v-if="item.type == 'True or False'">
                       <v-container class="d-flex flex-row ma-0 pa-0 ml-8" v-for="(x, n) in inputCheck" :key="n">
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
                </v-container>
           </v-container>
      </v-card>
  

</template>
<script>
import moment from 'moment';
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
            ViewSubmiisionConditions:{}
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
                  //console.log(res.data.Question)
                   this.QuestionAndAnswer = res.data;
                    for (let i = 0; i < this.QuestionAndAnswer.Question.length; i++) {
                        for (let j = 0; j < this.details.Submitted_Answers.length; j++) {
                            if(this.QuestionAndAnswer.Question[i].id == this.details.Submitted_Answers[j].Question_id){
                                this.SubmittedAnswer[i] =  this.details.Submitted_Answers[j];
                                if(this.QuestionAndAnswer.Question[i].answer == this.details.Submitted_Answers[j].Answer){
                                    this.Check[i] = true;
                                }
                                else{
                                    this.Check[i] = false;
                                }
                                
                            }
                            
                        }
                        
                    }
                    //console.log(this.details.Submitted_Answers);
                    this.isLoading = false;
              })

            /* this.$store.dispatch('fetchQuestions', this.$route.params.id).then(res=>{
                //console.log(res);
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
                //console.log(this.details.Submitted_Answers);
                this.isLoading = false;
            });
 */
        },
       
     
      },
      mounted(){
          this.fetchQuestions();
          //console.log(this.classworkDetails);
          //console.log(this.details)
      }
  }
</script>

