
<template>
<v-app>

<v-dialog v-model="dialog" persistent max-width="550">
    <confirmDialog
    v-on:toggleCancelDialog="dialog = !dialog"
    v-on:toggleSubmit="StopTimer = true,SubmitAnswer()"
     v-if="dialog"></confirmDialog>
</v-dialog>

<v-dialog v-model="warningDialog" persistent max-width="500">
    <dialogWarning
    v-on:toggleCloaseDialog="warningDialog = !warningDialog"
    
     v-if="warningDialog"></dialogWarning>
</v-dialog>

<v-container class="fill-height" v-if="isLoading" style="height: 600px;">
    <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
            {{isSubmitting? 'Submitting Questions':'Loading Questions'}}
        </v-col>
        <v-col cols="6">
            <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
    </v-row>
</v-container>

<div :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'pa-2 mt-1' : 'pa-2 mt-10'" v-if="!isLoading" >
      <v-row justify="center" >
          <v-col cols="12" md="10" xl="7" lg="8">
               <v-card elevation="2" outlined class="pa-2">
               <v-row v-if="!isLoading">
                <v-col cols="8" style="overflow:hidden;white-space: nowrap;text-overflow: ellipsis;">
                    <div class="mt-3 d-flex">
                        <v-avatar :size="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? '50' : '40'" class="mr-2" color="primary">
                             <v-icon dark :large="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ">
                            mdi-book-open-variant
                            </v-icon>
                        </v-avatar>
                        
                        <div 
                        
                        :class="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'font-weight-bold mt-4': 'mt-2'">{{classworkDetails.title}}</div>
                        </div>
                </v-col>
                <v-col cols="4" class="d-flex justify-end">
                    <div>
                        <h4 class="ml-10">Time Remaining</h4>
                        <div class="d-flex">
                             <div class="text-center">
                                <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon
                                     v-bind="attrs"
                                    v-on="on"><v-icon>mdi-chevron-down</v-icon> </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(item, index) in getAll_questions.Question" :key="index">
                                    <v-list-item-title>  
                                        <v-btn v-if="item.type == 'Multiple Choice' || item.type == 'Indentification' || item.type == 'True or False'" 
                                        text rounded @click="questionIndex = index">
                                        <v-icon :color="FinalAnswers[index].Answer == null || FinalAnswers[index].Answer == ''  ? '' : 'primary'" left>{{FinalAnswers[index].Answer == null || FinalAnswers[index].Answer == '' ? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked'}}</v-icon>
                                        {{index+1}}
                                       </v-btn>
                                       <v-btn text rounded v-if="item.type == 'Matching type'">
                                            <v-icon :color="FinalAnswers[index].Answer[0].Ans_letter == null || FinalAnswers[index].Answer[0].Ans_letter == ''  ? '' : 'primary'" left>
                                                {{FinalAnswers[index].Answer[0].Ans_letter == null || FinalAnswers[index].Answer[0].Ans_letter == '' ? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked'}}</v-icon>
                                            {{index+1}}
                                       </v-btn>

                                       </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                </v-menu>
                            </div>
                             <quizTimer :StartTime="StartTime"  :StopTimer="StopTimer" v-on:TimerStop="SubmitAnswer()" v-on:TimesUp="TimesUpSubmit()" :duration="duration" v-if="!isLoading && !StopTimer"></quizTimer>
                        </div>
                       
                    </div>
                </v-col>
            </v-row>
            </v-card>
          </v-col>
      </v-row>
</div>

  <div v-if="!isLoading" class="mt-2 ma-2"  >
        <v-row  justify="center">
            <v-col cols="12" sm="12" md="10" lg="8" xl="7">
                <v-card class="pa-5" elevation="2" outlined >
                    <v-row>
                        <v-row>
                            <v-col cols="12" md="12" lg="12"  class="text-right pa-5" >
                                    <div class="mb-4">

                                  
                                    <v-btn rounded color="primary" class="mr-2" outlined="" @click="prev" 
                                    :disabled="questionIndex <= 0">
                                        <v-icon left>mdi-arrow-left</v-icon>
                                        {{$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'previous'}}
                                        </v-btn>

                                        <v-btn v-if="questionIndex != Qlength-1" 
                                        :loading="isSavingAnswer"
                                        rounded color="primary" @click="next">
                                        {{$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'Next'}}
                                        <v-icon right>mdi-arrow-right</v-icon>
                                        </v-btn>

                                        <v-btn 
                                        :loading="isSavingAnswer"
                                         v-if="questionIndex == Qlength-1"  rounded color="success" @click="SubmitPromp">
                                        Submit
                                        <v-icon right>mdi-lock</v-icon>
                                        </v-btn>
                                      </div>
                                <v-divider></v-divider>
                            </v-col>
                            <v-col  cols="12" md="12" lg="12" class="pa-9 pt-0 mt-0">
                            <v-container ma-0 pa-0 v-for="(item, index) in getAll_questions.Question" :key="index">
                                <div v-show="index === questionIndex">
                                        <v-row ma-0 pa-0>
                                            <v-col class="mb-0 pb-0" cols="12">
                                                <v-container class="pa-0 ma-0 d-flex flex-row justify-space-between">
                                                    <h3 >Question #{{index+1}}</h3>
                                                    <p class="mr-5 primary--text">({{item.points}} Points)</p>
                                                </v-container>
                                            </v-col>
                                    
                                
                                            <v-col class=" mt-0 pt-1" cols="12" md="11" lg="11">
                                                <v-container ma-0 pa-0 class="ma-0 pa-0">
                                                    <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1': ''" class="subtitle-1"><span v-html="item.question" class="post-content"></span><!-- {{item.question}} --></div>
                                                </v-container> 
                                            </v-col>
                                
                                        </v-row>
                                        
                                        <v-container v-if="item.type == 'Multiple Choice'">
                                            <v-row>
                                                <v-col cols="12" md="12">
                                                <v-container >
                                                    <v-container class="d-flex flex-row ma-0 pa-0 mb-1" v-for="(Ans,i) in getAll_questions.Answer[index]" :key="i">
                                                    <v-radio-group :name="'option'+index"  class="ma-0 pa-0" v-model="FinalAnswers[index].Answer">
                                                        <v-radio
                                                        color="primary"
                                                        :key="Ans.id"
                                                        @click="SelectAnswer()"
                                                        :value="Ans.Choice"
                                                        ></v-radio>
                                                        </v-radio-group>
                                                        <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0">
                                                            <!--   {{Ans.Choice}} -->
                                                            <span v-html="Ans.Choice" class="post-content"></span>
                                                        </div>
                                                        </v-container>
                                                        <v-container class="mb-0 pb-0 d-flex flex-row-reverse">
                                                            <v-btn @click="reset(index,item.type)" text rounded small>Reset selection</v-btn>
                                                        </v-container>
                                                    </v-container>
                                                </v-col>
                                            </v-row>
                                        </v-container>

                                        <v-container v-if="item.type == 'Identification'">
                                            <v-row ma-0 pa-0>
                                                <v-col  ma-0 pa-0 class="ma-0 pa-0 mt-5" cols="12">
                                                    <v-card style="width:100%" class="mb-3">
                                                        <editor 
                                                            @focus="SetWarning()"
                                                             @blur="SetWarning()"
                                                            @change="SelectAnswer()"
                                                            v-model="FinalAnswers[index].Answer" 
                                                            id="editor-container" placeholder="Answer" 
                                                            theme="snow" :options="options"></editor>
                                                    </v-card>
                                                        <v-container class="mb-0 pb-0 d-flex flex-row-reverse">
                                                        <v-btn @click="reset(index,item.type)" text rounded small>Clear Answer</v-btn>
                                                    </v-container>
                                                </v-col>
                                            </v-row>
                                        </v-container>

                                        <v-container v-if="item.type == 'True or False'">
                                            <v-container ma-0 pa-0>
                                                <v-container class="d-flex flex-row ma-0 pa-0" v-for="(x, n) in inputCheck" :key="n">
                                                <v-radio-group :name="'option'+index"   class="ma-0 pa-0"  v-model="FinalAnswers[index].Answer">
                                                    <v-radio
            
                                                    color="primary"
                                                    @click="SelectAnswer()"
                                                    :key="index"
                                                    :value="inputCheck[n]"
                                                    ></v-radio>
                                                    </v-radio-group>

                                                    <div class="Subtitle 1">
                                                        {{inputCheck[n]}}
                                                    </div>
                                                    </v-container>
                                                        <v-container class="mb-0 pb-0 d-flex flex-row-reverse">
                                                        <v-btn @click="reset(index,item.type)" text rounded small>Reset selection</v-btn>
                                                    </v-container>
                                            </v-container>
                                        </v-container>
                                    

                                        <v-container class="mb-4" v-if="item.type == 'Matching type'">
                                            <v-row >
                                                    <v-col ma-0 pa-0 class="ma-0 pa-0" cols="12" lg="12" md="12" >
                                                        <v-container class="pl-5 pr-5">
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
                                                            <v-container class="mb-0 pb-0" v-for="(List, i) in getAll_questions.Answer[index].SubQuestion" :key="List.id">
                                                                
                                                                <v-row>
                                                                    <v-col class="mb-1 pb-0 pt-0 mt-0" cols="2" md="1" lg="1">
                                                                        <v-text-field 
                                                                       
                                                                        v-model="FinalAnswers[index].Answer[i].Ans_letter"
                                                                        @change="SelectMatch(item.id, index, i)"
                                                                        class="centered-input"
                                                                            
                                                                        ></v-text-field>
                                                                    </v-col>
                                                                    <v-col class="mb-1 pb-0 pt-0 mt-0" cols="5" md="6" lg="6">
                                                                        <div class="d-flex mt-7">
                                                                            <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                                                            <span :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" v-html="List.sub_question" class="subquestion-content"></span>
                                                                        </div>
                                                                    </v-col>
                                                                    <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="5" md="5" lg="5">
                                                                        <div class="d-flex mt-7"> 
                                                                            <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                                                            
                                                                            <span :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" v-html="getAll_questions.Answer[index].SubAnswer[i].Choice" class="subchoices-content"></span>
                                                                        </div>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-container>
                                                            
                                                        </v-container>
                                                        <v-container class="mb-0 pb-0 d-flex flex-row-reverse">
                                                                <v-btn @click="reset(index, item.type)" text rounded small>Reset Answer</v-btn>
                                                            </v-container>
                                                        
                                                    </v-col>
                                                </v-row>
                                        </v-container>
                                </div>
                            </v-container>
                                
                            </v-col>
                        </v-row>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>

</v-app>

</template>
<script>
import confirmDialog from './confirmDialog'
import dialogWarning from './warningDialog'
import quizTimer from './QuizTimer'
 import {mapGetters, mapActions } from "vuex";
export default {
    components:{
        quizTimer,
        confirmDialog,
        dialogWarning
    },
    data(){
        return{
            StopTimer: false,
            valid: false,
            checker:[],
            dialog:false,
            warningDialog: false,
            inputCheck:['True','False'],
            isSubmitting:false,
            Qlength:'',
            isStart: false,
            isEditing_Id:'',
            isLoading: true,
            Show: true,
            DeleteDetails:{},
            IdentificationAns: [],
            PickAnswers: {},
            PickAnswers_id: {},
            FinalAnswers: [],
            SubAnswers: [],
            quesNumber: [],
            AnswerRadio:[],
            Questype: "",
            questionIndex: 0,
            duration:'',
            Alphabet: "",
            options:{
            modules: {
                    'toolbar': [
                        ['bold', 'italic', 'underline', 'strike'],
                
                        [{ 'list': 'bullet' }],
                        ['image'],
                    ],
                }
            },
            TimerCount:[],
            tempCounter:0,
            timeCount:null,
            classworkDetails:[],
            confirmLeave: false,
            leaveStrike: 0,
            preventWarning: false,
            isExamStart: false,
            StartTime: null,
            Submitted_Answers: null,
            submission_id: null,
            isSavingAnswer: false,
            oldAnswer: null,
            QuestionList:[]
        }
    },
    computed: 
    mapGetters(["getAll_questions"]),
    methods:{
        CountTime(){
            this.timeCount = setInterval(()=>{
                this.tempCounter = this.tempCounter +1
                /* console.log(this.tempCounter); */
            },1000)
        },
        SubmitPromp(){
            this.isRemoving = true;
            this.dialog = true;;
        },
        reset (index, type) {
            if(type == 'Multiple Choice' || type == 'Identification' || type == 'True or False'){
                 this.FinalAnswers[index].Answer = '';
            }
            else if(type == 'Matching type'){
                this.FinalAnswers[index].Answer.forEach(item => {
                    item.Ans_letter = '',
                    item.Answers = ''
                });
            }
        },
        removePropt(num, id){
            this.DeleteDetails.number = num;
            this.DeleteDetails.id = id;
            this.isRemoving = true;
            this.isRemoving_id = id;
            this.dialog = true;;
        },
        SelectAnswer(){
            let name = btoa('CurrentAnswers');
            localStorage.setItem(name, JSON.stringify(this.FinalAnswers));
            if(this.FinalAnswers[this.questionIndex].timeConsume != null || ''){
                this.FinalAnswers[this.questionIndex].timeConsume += this.tempCounter
            }
            else{
                this.FinalAnswers[this.questionIndex].timeConsume = this.tempCounter
            }
            clearInterval(this.timeCount);
            this.tempCounter = 0;
            this.CountTime();
        },
        SetWarning(){
            this.preventWarning = !this.preventWarning;
        },
        next: function() {
           /*  let name = btoa('CurrentAnswers');
             localStorage.setItem(name, JSON.stringify(this.FinalAnswers));
            if(this.FinalAnswers[this.questionIndex].timeConsume != null || ''){
                this.FinalAnswers[this.questionIndex].timeConsume += this.tempCounter
            }
            else{
                this.FinalAnswers[this.questionIndex].timeConsume = this.tempCounter
            }
            clearInterval(this.timeCount);
            this.tempCounter = 0;
            this.CountTime(); */
                this.isSavingAnswer = true;
               
                this.updateAnswer();


              console.log(this.FinalAnswers);

               this.Questype = "";
                this.PickAnswers.ans = "";
                this.PickAnswers_id.quesId = "";
                if(this.questionIndex != this.Qlength-1){
                    this.questionIndex++;
                }
            
        },
        async updateAnswer(){
             axios.put('/api/question/store-answer/'+ this.submission_id , {
                type: "multiple",
                data: this.FinalAnswers
            })
            //this.isSavingAnswer = false;
             setTimeout(() => (this.isSavingAnswer = false), 500);
        },
        // Go to previous question
        prev: function() {
            if(this.TimerCount[this.questionIndex] != null || ''){
                this.TimerCount[this.questionIndex] = this.TimerCount[this.questionIndex]+this.tempCounter;
            }
            else{
                this.TimerCount[this.questionIndex] = this.tempCounter;
            }
            clearInterval(this.timeCount);
            this.tempCounter = 0;
            this.CountTime();
            this.questionIndex--;
            
        },
         SubmitAnswer(){
            this.isExamStart = false;
            this.isLoading = !this.isLoading;
            this.isSubmitting = !this.isSubmitting;
            this.dialog = !this.dialog;
            this.isStart = !this.isStart;
            this.warningDialog = false;
            axios.post('/api/question/check/'+this.$route.query.clwk, {item: this.FinalAnswers, AnsLength:this.questionIndex, timerCount: this.TimerCount})
            .then(()=>{
                 setTimeout(() => {
                    this.isLoading = !this.isLoading;
                    this.isSubmitting = !this.isSubmitting;
                }, 2000);
                this.$router.push({name: 'result-page', params:{id: this.$route.query.clwk}})
                  
            })              
        },
        TimesUpSubmit(){
            this.isExamStart = false;
            this.isLoading = !this.isLoading;
            this.isSubmitting = !this.isSubmitting;
            this.isStart = !this.isStart;
            this.warningDialog = false;
             axios.post('/api/question/check/'+this.$route.query.clwk, {item: this.FinalAnswers, AnsLength:this.questionIndex,timerCount: this.TimerCount})
            .then(()=>{
                 setTimeout(() => {
                    this.isLoading = !this.isLoading;
                    this.isSubmitting = !this.isSubmitting;
                }, 2000);
                localStorage.removeItem(btoa('timer_time'));
                 localStorage.removeItem(btoa('CurrentAnswers'));
                 this.$router.push({name: 'result-page', params:{id: this.$route.query.clwk}})
                 
                  
            })
        },
        fetchQuestions(){
            this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(()=>{
                this.Qlength = this.getAll_questions.Question.length;
                this.isLoading = false;
               
                //let AnswersList = JSON.parse(localStorage.getItem(name));
                let AnswersList = this.Submitted_Answers;
                if(AnswersList == null){
                    for (let index = 0; index < this.getAll_questions.Question.length; index++) {
                        if(this.getAll_questions.Question[index].type == 'Identification' || this.getAll_questions.Question[index].type == 'Multiple Choice' || this.getAll_questions.Question[index].type == 'True or False' ){
                            this.FinalAnswers.push({
                                Answer: '',
                                Question_id: this.getAll_questions.Question[index].id,
                                type:this.getAll_questions.Question[index].type,
                                timeConsume: null
                            });
                        }
                         else if(this.getAll_questions.Question[index].type == 'Matching type'){
                            let Ans = new Array();
                            let Choices_id = new Array();
                             this.getAll_questions.Answer[index].SubAnswer.forEach(item => {
                                Choices_id.push({
                                   choice_id: item.id
                                })
                            });
                            
                            this.getAll_questions.Answer[index].SubQuestion.forEach(item => {
                                Ans.push({
                                    Ans_letter: '',
                                    Ans_id: null,
                                    subquestion_id: item.id,
                                    Answers: ''
                                })
                            });


                                this.FinalAnswers.push({
                                Answer: Ans,
                                Choices_id: Choices_id,
                                Question_id: this.getAll_questions.Question[index].id,
                                type: this.getAll_questions.Question[index].type,
                                timeConsume: null
                            });
                        }                      
                    }
                        axios.put('/api/question/store-answer/'+ this.submission_id , {
                        type: "multiple",
                        data: this.FinalAnswers
                    })
                   //localStorage.setItem(name, JSON.stringify(this.FinalAnswers));
                }else{

                    let Submitted_length = AnswersList.length;
                    let Question_length = this.getAll_questions.Question.length;
                    let diff = Question_length  - Submitted_length;
                    for (let i = 0; i < diff; i++) {
                        if(this.QuestionAndAnswer.Question[i].type == 'Multiple Choice' || this.QuestionAndAnswer.Question[i].type == 'Identification' || this.QuestionAndAnswer.Question[i].type == 'True or False'){
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
                    
                     for (let x = 0; x < this.getAll_questions.Question.length; x++) {
                         for (let j = 0; j < AnswersList.length; j++) {
                            if(this.getAll_questions.Question[x].id == AnswersList[j].Question_id){
                                if(this.getAll_questions.Question[x].type == 'Identification' || this.getAll_questions.Question[x].type == 'Multiple Choice' || this.getAll_questions.Question[x].type == 'True or False' ){
                                    this.FinalAnswers.push({
                                        Answer: AnswersList[j].Answer,
                                        Question_id: AnswersList[j].Question_id,
                                        type: AnswersList[j].type,
                                        timeConsume: AnswersList[j].timeConsume
                                    });
                                 }
                                 else if(this.getAll_questions.Question[x].type == 'Matching type'){
                                     let Ans = new Array();
                                    let Choices_id = new Array();

                                    this.getAll_questions.Answer[x].SubAnswer.forEach(item => {
                                        Choices_id.push({
                                            choice_id: item.id
                                        })
                                    });

                                     AnswersList[j].Answer.forEach(item => {
                                        Ans.push({
                                            //Ans_letter: item.Ans_letter,
                                            Ans_id: item.Ans_id,
                                            subquestion_id: item.subquestion_id,
                                            Answers: item.Answers
                                        })
                                     });
                                     this.FinalAnswers.push({
                                        Answer: Ans,
                                        Choices_id: Choices_id,
                                        Question_id: AnswersList[j].Question_id,
                                        type: AnswersList[j].type,
                                        timeConsume: AnswersList[j].timeConsume
                                    });
                                 }
                             }
                            
                         }
                    }
                }
                
            });

        },
         preventNav(event) {
            if (!this.isStart) return;
            //event.preventDefault();
            // Chrome requires returnValue to be set.
            event.returnValue = "";
        },
        async CheckStatus(){
            axios.get('/api/student/checking/'+this.$route.query.clwk)
            .then(res=>{
                this.Submitted_Answers = res.data.Submitted_Answers;
                this.StartTime = res.data.startTime;
                this.submission_id = res.data.submission_id;
                if(res.data.status == 'Taking' || res.data.status == ''){
                    this.StartQuiz();
                    this.preventNav = !this.preventNav;
                }
                else{
                     this.isLoading = false;
                    this.$router.push({name: 'result-page', params:{id: this.$route.query.clwk}})
                }
            })
        },
        SelectMatch(id, main_index, second_index){
            let Answer = this.FinalAnswers[main_index].Answer[second_index].Ans_letter;
           
             for (let i = 0; i < this.getAll_questions.Answer[this.questionIndex].SubAnswer.length; i++) {
                for (let x = 0; x < this.getAll_questions.Answer[this.questionIndex].SubAnswer.length; x++) {
                    if(this.Alphabet[x].toUpperCase() == Answer.toUpperCase()){
                        this.FinalAnswers[main_index].Answer[second_index].Answers = this.getAll_questions.Answer[this.questionIndex].SubAnswer[x].Choice;
                        this.FinalAnswers[main_index].Answer[second_index].Ans_id = this.getAll_questions.Answer[this.questionIndex].SubAnswer[x].id; 
                    }
                        
                }   
            }
            console.log(this.FinalAnswers[main_index])
        },
        StartQuiz(){
            this.isStart = true;
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
            axios.get('/api/classwork/showDetails/'+this.$route.query.clwk+'/'+this.$route.params.id)
            .then(res=>{
                this.duration = res.data.Details.duration;
                this.classworkDetails = res.data.Details;
                this.fetchQuestions();

            })
            this.CountTime();
        },
        triggerWarning(){
            //console.log("test 123");
            this.leaveStrike += 1;
          /*   if(this.leaveStrike == 3){
                this.SubmitAnswer();
            } */
            if(!this.preventWarning){
                this.warningDialog = true;
            }
            
        },
    },
    beforeMount() {
        window.addEventListener("beforeunload", this.preventNav);
        let self = this;
        $(window).blur(function(){
            self.triggerWarning()
        });

         window.addEventListener("beforeunload", this.preventNav)
           /*  this.$once("hook:beforeDestroy", () => {
            window.removeEventListener("beforeunload", this.preventNav);
        }) */
    },
     beforeRouteLeave(to, from, next) {
        if (this.isExamStart) {
            if (!window.confirm("Leave without saving?")) {
                return;
            }
        }
        next();
    },
    mounted(){
        this.isExamStart = true
        this.CheckStatus();

    },
   
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