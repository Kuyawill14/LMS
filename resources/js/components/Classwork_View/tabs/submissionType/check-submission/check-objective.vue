<template>
<div >
        <v-dialog v-model="dialog" persistent max-width="400">
            <resetConfirmation
            v-on:toggleCancelDialog="dialog = !dialog"
            v-on:toggleconfirm="ResetSubmission()"
            :ViewDetails="ViewDetails"
            v-if="dialog"></resetConfirmation>
        </v-dialog>

       <!--  <v-toolbar
          dark
          dense
          color="primary"
        >
          <v-btn
             text
            rounded
            @click="$emit('closeDialog')">
            <v-icon left>mdi-close</v-icon>
            Close
          </v-btn>
        </v-toolbar> -->

        

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

           <v-container fluid v-if="!isLoading" ma-0 pa-0>
               <v-row class="pl-5 mb-0 pb-0"> 
                   <v-col cols="12" class="text-right ma-0 pa-0 pr-2">
                        <v-btn
                            icon

                        
                            @click="$emit('closeDialog')">
                            <v-icon >mdi-close</v-icon>
                            
                        </v-btn>
                   </v-col>
                   <v-col cols="12" >
                       <v-row>
                           <v-col cols="12" md="10" lg="10" class="mb-0 pb-0">
                               <div class="d-flex">
                                        <v-avatar color="brown" size="40">
                                            <v-img alt="Profile"
                                                :src="ViewDetails.profile_pic == null || ViewDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + ViewDetails.firstname +' '+ViewDetails.lastName : ViewDetails.profile_pic">
                                            </v-img>
                                        </v-avatar>
                                        <div>
                                            <h4 style="line-height:1.0" class="font-weight-medium ml-2 mt-1 mb-0 pb-0">{{ViewDetails.firstname +' '+ViewDetails.lastName }}</h4>
                                        <div class="ml-2 caption" v-if="ViewDetails.Submitted_Answers != null && ViewDetails.Submitted_Answers != ''"> Submitted: {{format_date(ViewDetails.updated_at)}}</div>
                                        <div class="ml-2 caption" v-else> No Submission</div>
                                    </div>
                                </div>
                           </v-col>
                           <v-col cols="4" md="2" lg="2" class="mb-0 pb-0">
                             
                                <!--   @keyup="SaveScore()" :loading="isSavingScore"  -->
                                  <!--   <v-text-field  :style="$vuetify.breakpoint.xs ? 'width:20%' :'width:10%'" 
                                    class="mt-1 float-right" v-model="ViewDetails.points" 
                                    dense outlined label="Score"></v-text-field>
                                    <div class="display-1 font-weight-thin mt-1 ml-1">/ </div>
                                    <div style="font-size:25px" class="  ml-1 mt-1">
                                        {{classworkDetails.points}}
                                    </div> -->

                                      <v-text-field  :style="$vuetify.breakpoint.xs ? 'width:100%' :'width:50%'" 
                                        class="mt-2 float-right" v-model="ViewDetails.points" 
                                        dense outlined label="Score" type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" min="0"></v-text-field>
                              
                           </v-col>
                       </v-row>
                      
                   </v-col>
                   <v-col v-if="ViewDetails.Submitted_Answers == null && ViewDetails.Submitted_Answers == ''" cols="12" class="ma-0 pa-0 mb-2">
                       <v-btn @click="dialog = !dialog" color="primary" ><v-icon left>mdi-restart</v-icon> Reset Submission</v-btn>
                       
                   </v-col>

                  
               </v-row>
                 <v-divider></v-divider>

             <v-row class="mt-12"  justify="center" align-content="center" v-if="ViewDetails.Submitted_Answers == null || ViewDetails.Submitted_Answers == ''">
                <v-col cols="12" sm="8" md="4" class="text-center">
                    <v-icon style="font-size:8rem">
                        mdi-notebook-remove-outline
                    </v-icon>
                    <h1> Empty Submission </h1>
                    <p> This student did not take the classwork yet!</p>
                </v-col>
            </v-row>

        <div v-if="ViewDetails.Submitted_Answers != null && ViewDetails.Submitted_Answers != ''">
        <v-container class="pl-5 pt-5" ma-0 pa-0 v-for="(item, index) in getAll_questions.Question" :key="index">
            <v-container ma-0 pa-0 class="ma-0 pa-0">
                <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1': ''" class="subtitle-1 d-flex"> 
                    <v-checkbox
                    @click="UpdateScore(item.id, Check[index], item.points, index,item.answer)"
                    class="mt-0 pt-0"
                    color="success"
                    v-model="Check[index]"
                    ></v-checkbox>
                    
                    <!--  <v-btn class="mt-0 pt-0" v-if="Check[index] == true" icon text>
                        <v-icon  color="success">mdi-checkbox-marked</v-icon>
                    </v-btn>
                    <v-btn  class="mt-0 pt-0" v-else icon text>
                        <v-icon color="red">mdi-close-box</v-icon>
                    </v-btn> -->
                    
                    <h3 class="font-weight-bold">{{index+1}}.</h3>
                        <span style="width:90%" v-html="item.question" class="post-content ml-1"></span>
                        <small class="primary--text ml-1">({{item.points+' points'}})</small>
                        </div>
            </v-container> 
        
            <v-container ml-0 pl-0 v-if="item.type == 'Multiple Choice'">
                <v-container :class="!$vuetify.breakpoint.xs ? 'd-flex flex-row ma-0 pa-0 mb-1 ml-8': 'd-flex flex-row ma-0 pa-0'" 
                v-for="(Ans, i) in getAll_questions.Answer[index]" :key="i">
                <v-radio-group :name="'option'+index"  class="ma-0 pa-0" v-model="SubmittedAnswer[index].Answer">
                    <v-radio
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

            <v-container v-if="item.type == 'Identification'">
                <v-container ma-0 pa-0 class="ml-7">
                <div class="subtitle-2 font-weight-bold">Answer</div>
                <div class="subtitle-1 d-flex item ml-4">
                    <span v-html="SubmittedAnswer[index].Answer" class="post-content"></span>
                </div>
            </v-container>
            </v-container>


            <v-container v-if="item.type == 'True or False'">
                <v-container :class="!$vuetify.breakpoint.xs ? 'd-flex flex-row ma-0 pa-0 mb-1 ml-8': 'd-flex flex-row ma-0 pa-0'" 
                v-for="(x, n) in inputCheck" :key="n">
                <v-radio-group :name="'option'+index"   class="ma-0 pa-0"  v-model="SubmittedAnswer[index].Answer">
                    <v-radio
                    color="primary"
                    :key="index"
                    :value="inputCheck[n]">
                    </v-radio>
                </v-radio-group>
                <div class="Subtitle 1">
                    {{inputCheck[n]}}
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
        </v-container>
        </div>
    </v-container>
</div>
</template>
<script>
import moment from 'moment';
const resetConfirmation = () => import('../../dialogs/resetConfirmation')
 import {mapGetters, mapActions } from "vuex";
 
  export default {
      props:["classworkDetails", "ViewDetails"],
      components:{
          resetConfirmation
      },
      data(){
          return{
            Qlength: null,
            Details: [],
            Check: [],
            isLoading: true,
            inputCheck:['True','False'],
            SubmittedAnswer:[],
            UpdateDetails:{},
            dialog: false,
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
            this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(res=>{
                //console.log(res);
                this.Details = res[0];
                let Submitted_length = this.ViewDetails.Submitted_Answers.length;
                let Question_length = this.Details.Question.length;
                let diff = Question_length  - Submitted_length;
                for (let i = 0; i < diff; i++) {
                    if(this.Details.Question[i].type == 'Multiple Choice' || this.Details.Question[i].type == 'Identification' || this.Details.Question[i].type == 'True or False'){
                        this.ViewDetails.Submitted_Answers.push({
                            Answer: null,
                            Question_id: this.Details.Question[i].id,
                            timeConsume: null,
                            type: this.Details.Question[i].type
                        })
                    }
                    else if(this.Details.Question[i].type == 'Matching type'){

                    }
 
                }
              
                for (let i = 0; i < this.Details.Question.length; i++) {
                    for (let j = 0; j < this.ViewDetails.Submitted_Answers.length; j++) {
                        if(this.Details.Question[i].id == this.ViewDetails.Submitted_Answers[j].Question_id){
                            if(this.Details.Question[i].type == 'Multiple Choice' || this.Details.Question[i].type == 'Identification' || this.Details.Question[i].type == 'True or False'){
                                this.SubmittedAnswer[i] =  this.ViewDetails.Submitted_Answers[j];
                                if(this.Details.Question[i].answer == this.ViewDetails.Submitted_Answers[j].Answer){
                                    this.Check[i] = true;
                                }
                                else{
                                    this.Check[i] = false;
                                }
                            }
                            else if(this.Details.Question[i].type == 'Matching type'){
                                    let Ans = new Array();
                                    let match_check = new Array();
                                    this.ViewDetails.Submitted_Answers[j].Answer.forEach(item => {
                                        for (let x = 0; x < this.Details.Answer[i].SubQuestion.length; x++) {
                                            if(this.Details.Answer[i].SubQuestion[x].id == item.subquestion_id){
                                                Ans.push({
                                                    Ans_Letter: item.Ans_letter,
                                                    Answer: item.Answers,
                                                    SubQuestion: this.Details.Answer[i].SubQuestion[x].sub_question,
                                                    SubChoice: null
                                                })


                                            }                           
                                        }
                                    });  
                                    let tmpChoices = new Array();
                                    this.ViewDetails.Submitted_Answers[j].Choices_id.forEach(item => {
                                        this.Details.Answer[i].SubAnswer.forEach(choice => {
                                            if(item.choice_id == choice.id){
                                                tmpChoices.push({
                                                    id: choice.id,
                                                    choice: choice.Choice,
                                                })
                                            }
                                        })
                                    });

                                    for (let a = 0; a < Ans.length; a++) {
                                        Ans[a].SubChoice = tmpChoices[a].choice;
                                    }
                                    this.SubmittedAnswer[i] = Ans;
                                }
                        }
                        
                    }
                    
                }
                 
                 
                //console.log(this.ViewDetails.Submitted_Answers);
                this.isLoading = false;
            });

        },
        async UpdateScore(id, data, points,index,answer){
            this.UpdateDetails.check = data;
            this.UpdateDetails.points = points;
            this.UpdateDetails.question_id = id;
            this.UpdateDetails.answer = answer;
            axios.put('/api/teacher/update-score/'+this.ViewDetails.id, this.UpdateDetails)
            .then(res=>{
                if(res.status == 200){
                    if(data == true){
                        this.SubmittedAnswer[index] = answer;
                        this.ViewDetails.points = this.ViewDetails.points + points;
                    }else{
                        this.SubmittedAnswer[index] = "";
                        this.ViewDetails.points = this.ViewDetails.points - points;
                    }
                }
            })
        },
         async ResetSubmission(){
            //console.log(this.ListData[this.resetIndex].points)
            axios.put('/api/teacher/reset-obj/'+this.ViewDetails.id)
            .then(res=>{
                if(res.status == 200){
                    this.dialog = !this.dialog;
                    this.$emit('RestSubmission')
                }
               

            })
        }
     
      },
      mounted(){
          //this.fetchQuestions();
        
        if(this.ViewDetails.Submitted_Answers != null){
            this.fetchQuestions();
        }
        else{
             this.isLoading = false;
        }

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
         
          //console.log(this.classworkDetails);
          //console.log(this.ViewDetails)
      }
  }
</script>
<style scoped>
    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
   border-radius: 3px
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
