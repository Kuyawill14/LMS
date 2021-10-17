
<template>
<v-app >
<v-dialog v-model="dialog" persistent max-width="550">
    <confirmDialog
    v-on:toggleCancelDialog="dialog = !dialog"
    v-on:toggleSubmit="StopTimer = true"
     v-if="dialog"></confirmDialog>
</v-dialog>

<v-dialog v-model="warningDialog" persistent max-width="500">
    <dialogWarning
    v-on:toggleCloaseDialog="warningDialog = !warningDialog,ReloadTime()"
    
     v-if="warningDialog"></dialogWarning>
</v-dialog>

<v-dialog v-model="TimesUpDialog" persistent max-width="500">
    <timesUpDialog
    v-on:SubmitAnswer="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: $route.query.clwk}})"
     v-if="TimesUpDialog"></timesUpDialog>
</v-dialog>

<!-- <v-container class="fill-height" v-if="isLoading" style="height: 600px;">
    <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
            {{isSubmitting? 'Submitting Questions':'Loading Questions'}}
        </v-col>
        <v-col cols="6">
            <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
    </v-row>
</v-container> -->
    
    <vue-element-loading :active="isLoading" 
    text="Loading Questions"
    duration="0.7"
    :textStyle="{fontSize: '18px'}"
    spinner="line-scale" color="#EF6C00"  size="50" is-full-screen />

    <!--  <vue-element-loading :active="isSubmitting" 
    text="Submitting..."
    duration="0.7"
    :textStyle="{fontSize: '18px'}"
    spinner="line-scale" color="#EF6C00"  size="50" is-full-screen /> -->

    <vue-element-loading :active="isLeavingPage" 
    duration="0.7"
    spinner="line-scale" color="#EF6C00"  size="50" is-full-screen />
    
   


<v-container  fluid :class="!$vuetify.breakpoint.mdAndUp ? 'pa-2 ' : ''" v-if="!isLoading || !isSubmitting" >
      <v-row justify="center" >
          <v-col cols="12" >
               <v-card elevation="2" outlined class="pa-2">
               <v-row v-if="!isLoading">
                <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="8"  >
                    <v-list>
                        <v-list-item>
                        <v-list-item-avatar>
                             <v-avatar color="blue">
                                <v-icon dark >
                                mdi-book-open-variant
                                </v-icon>
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="font-weight-bold">{{classworkDetails.title}}</v-list-item-title>
                            <v-list-item-subtitle>Total Points: {{classworkDetails.points}}</v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="12" md="4" :class="$vuetify.breakpoint.mdAndUp ? 'd-flex justify-end' : ''">
                    <div >
                       
                        <div class="d-flex justify-space-between ">
                            
                             <div class="text-center mt-5">
                                 
                                <v-menu offset-y max-height="600" style="overflow-y:scroll;">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon
                                    color="primary"
                                     v-bind="attrs"
                                    v-on="on"><v-icon> {{ !$vuetify.breakpoint.mdAndUp  ? 'mdi-format-list-numbered' : 'mdi-chevron-down'}}</v-icon> </v-btn>
                                </template>
                                <v-list  >
                                    <v-list-item class="ma-0 pa-0" v-for="(item, index) in getAll_questions.Question" :key="index">
                                    <v-list-item-title>  
                                        <v-btn v-if="item.type == 'Multiple Choice' || item.type == 'Identification' || item.type == 'True or False'|| item.type == 'Essay'" 
                                        text rounded @click="updateAnswer(), questionIndex = index">
                                        <v-icon :color="FinalAnswers[index].Answer == null || FinalAnswers[index].Answer == ''  ? '' : 'primary'" left>{{FinalAnswers[index].Answer == null || FinalAnswers[index].Answer == '' ? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked'}}</v-icon>
                                        {{index+1}}
                                       </v-btn>
                                       <v-btn @click="updateAnswer(), questionIndex = index" text rounded v-if="item.type == 'Matching type'">
                                            <v-icon :color="FinalAnswers[index].Answer[0].Ans_letter == null || FinalAnswers[index].Answer[0].Ans_letter == ''  ? '' : 'primary'" left>
                                                {{FinalAnswers[index].Answer[0].Ans_letter == null || FinalAnswers[index].Answer[0].Ans_letter == '' ? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked'}}</v-icon>
                                            {{index+1}}
                                       </v-btn>
                                       </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                </v-menu>
                            </div>
                              <div v-if="isReloadTime" style="margin-right:3rem">
                                  
                                 <vue-element-loading :active="isReloadTime" 
                                    duration="0.7"
                                    spinner="line-scale" color="#EF6C00"  size="25"  />
                            </div>
                            <div v-else>
                                 <h4 @click="Answersheet = true" class="ml-1" >Time Remaining</h4>
                                 <quizTimer :bus="bus" :CurrentTime="CurrentTime" :StartTime="StartTime"  :StopTimer="StopTimer" v-on:TimerStop="SubmitAnswer" v-on:TimesUp="TimesUpSubmit" :duration="duration" v-if="!isLoading && questionIsLoaded && duration != null"></quizTimer>
                            </div>
                            
                        </div>
                    </div>
                </v-col>
            </v-row>
            </v-card>
          </v-col>
      </v-row>
 <!--      <btn @click="TimesUpDialog =!TimesUpDialog" class="primary">Click ME</btn> -->
</v-container>

  <div v-if="!isLoading" class="mt-2 ma-2"  >
        <v-row  justify="center">
            <v-col cols="12" sm="12" md="10" lg="8" xl="7">
                <v-card :class="$vuetify.breakpoint.mdAndUp ? 'pa-5' : 'pa-1'" :elevation="$vuetify.breakpoint.mdAndUp ? 2 : 0" :outlined="$vuetify.breakpoint.mdAndUp " >
               
                        <v-row>
                            <v-col cols="12" md="12" lg="12"  :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center'" >
                                <div :class="$vuetify.breakpoint.mdAndUp  ? 'mb-3 mt-1' : 'd-flex mb-3 mt-1'">
                                    <v-btn :class="!$vuetify.breakpoint.mdAndUp ? 'pl-5' : ''" rounded color="primary" outlined="" @click="prev" 
                                    :disabled="questionIndex <= 0">
                                        <v-icon left>mdi-arrow-left</v-icon>
                                        Previous
                                        </v-btn>
                                       
                                        <v-spacer v-if="!$vuetify.breakpoint.mdAndUp"></v-spacer>
                                        <v-btn v-if="questionIndex != Qlength-1" 
                                        :class="!$vuetify.breakpoint.mdAndUp ? 'pr-5' : ''"
                                        :loading="isSavingAnswer"
                                        rounded color="primary" @click="next">
                                        Next
                                        <v-icon right>mdi-arrow-right</v-icon>
                                        </v-btn>

                                        <v-btn 
                                        :loading="isSavingAnswer"
                                        :class="!$vuetify.breakpoint.mdAndUp ? 'pr-5' : ''"
                                         v-if="questionIndex == Qlength-1"  rounded color="success" @click="SubmitPromp">
                                        Submit
                                        <v-icon right>mdi-lock</v-icon>
                                        </v-btn>
                                    </div>
                                <v-divider></v-divider>
                            </v-col>
                            <v-col cols="12" :class="$vuetify.breakpoint.mdAndUp ? 'pa-9 pt-0 mt-0' : 'pa-4 pt-0 mt-0'">
                            <v-container ma-0 pa-0 v-for="(item, index) in getAll_questions.Question" :key="index">
                                <div v-show="index === questionIndex">
                                        <v-row ma-0 pa-0>
                                            <v-col class="mb-0 pb-0" cols="12">
                                                <v-container class="pa-0 ma-0 d-flex flex-row justify-space-between">
                                                    <h3 v-if="$vuetify.breakpoint.mdAndUp" >Question #{{index+1}}</h3>
                                                    <h4 v-else >Question #{{index+1}}</h4>
                                                    <p class="mr-5 primary--text">({{item.points}} Points)</p>
                                                </v-container>
                                            </v-col>
                                            <v-col class=" mt-0 pt-1" cols="12" md="11" lg="11">
                                                <v-container ma-0 pa-0 class="ma-0 pa-0">
                                                 
                                                    <div :style="!$vuetify.breakpoint.mdAndUp ? 'line-height:1.1;user-select: none': 'user-select: none'" class="subtitle-1"><span v-html="item.question" class="post-content"></span><!-- {{item.question}} --></div>
                                                </v-container> 
                                            </v-col>
                                        </v-row>
                                        
                                        <v-container  v-if="item.type == 'Multiple Choice'">
                                            <v-row >
                                                <v-col class="ma-0 pa-0" cols="12" >
                                                <v-container >
                                                    <v-container class="d-flex flex-row ma-0 pa-0 mb-1" v-for="(Ans,i) in getAll_questions.Answer[index]" :key="i">
                                                    <v-radio-group    :max="1" :name="'option'+index"  class="ma-0 pa-0" v-model="FinalAnswers[index].Answer">
                                                        <v-radio
                                                        color="primary"
                                                        :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                        :name="'option'+index"
                                                        @click="SelectAnswer()"
                                                        
                                                        :value="Ans.Choice"
                                                        ></v-radio>
                                                        </v-radio-group>
                                                        <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0">
                                                            <span style="user-select: none" v-html="Ans.Choice" class="post-content"></span>
                                                        </div>
                                                        </v-container>
                                                       
                                                    </v-container>
                                                     <div class="ma-0 pa-0 text-right">
                                                            <v-btn @click="reset(index,item.type)" text rounded small>Reset selection</v-btn>
                                                     </div>
                                                </v-col>
                                            </v-row>
                                        </v-container>

                                        <v-container v-if="item.type == 'Identification'">
                                            <v-row >
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
                                                        <v-container class="mb-0 pb-0 pl-0 ml-0 mr-0 d-flex flex-row-reverse">
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
                                                    :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                    @click="SelectAnswer()"
                                                    :key="index"
                                                    :value="inputCheck[n]"
                                                    ></v-radio>
                                                    </v-radio-group>

                                                    <div class="Subtitle 1">
                                                        {{inputCheck[n]}}
                                                    </div>
                                                    </v-container>
                                                    <div class="ma-0 pa-0 text-right">
                                                        <v-btn @click="reset(index,item.type)" text rounded small>Reset selection</v-btn>
                                                    </div>
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
                                                                            <span :style="!$vuetify.breakpoint.mdAndUp ? 'line-height:1.1;user-select: none':'line-height:1.5;user-select: none'" v-html="List.sub_question" class="subquestion-content"></span>
                                                                        </div>
                                                                    </v-col>
                                                                    <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="5" md="5" lg="5">
                                                                        <div class="d-flex mt-7"> 
                                                                            <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                                                            <span :style="!$vuetify.breakpoint.mdAndUp ? 'line-height:1.1;user-select: none':'line-height:1.5;user-select: none'" v-html="getAll_questions.Answer[index].SubAnswer[i].Choice" class="subchoices-content"></span>
                                                                        </div>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-container>
                                                        </v-container>
                                                        <div class="ma-0 pa-0 text-right">
                                                            <v-btn @click="reset(index, item.type)" text rounded small>Reset Answer</v-btn>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                        </v-container>

                                        <v-container v-if="item.type == 'Essay'">
                                            <v-row ma-0 pa-0>
                                                <v-col  ma-0 pa-0 class="ma-0 pa-0 mt-5" cols="12">
                                                 <!--    <v-card style="width:100%;min-height:200px" class="mb-3"> -->
                                                        <editor
                                                            style="height:220px" 
                                                            @focus="SetWarning()"
                                                             @blur="SetWarning()"
                                                            @change="SelectAnswer()"
                                                            v-model="FinalAnswers[index].Answer" 
                                                            id="editor-container" placeholder="Essay" 
                                                            theme="snow" :options="Essayoptions"></editor>
                                                      <!--   </v-card> -->
                                                 <!--    <v-container class="mb-0 pb-0 pl-0 ml-0 mr-0 pr-0 d-flex flex-row-reverse mt-10">
                                                        <v-btn @click="reset(index,item.type)" text rounded small>Clear Answer</v-btn>
                                                    </v-container> -->
                                                      <div class="ma-0 pa-0 text-right">
                                                            <v-btn @click="reset(index,item.type)" text rounded small>Clear Answer</v-btn>
                                                        </div>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </div>
                                </v-container>
                            </v-col>
                        </v-row>
                  
                </v-card>
            </v-col>
        </v-row>
    </div>
</v-app>

</template>
<script>
import confirmDialog from './confirmDialog';
import dialogWarning from './warningDialog';
import timesUpDialog from './TimesUpDialog';
import quizTimer from './QuizTimer';

import moment from 'moment-timezone';
 import {mapGetters, mapActions } from "vuex";
export default {
    components:{
        quizTimer,
        confirmDialog,
        dialogWarning,
        timesUpDialog
    },
    data(){
        return{
            Answersheet: false,
            StopTimer: false,
            dialog:false,
            warningDialog: false,
            inputCheck:['True','False'],
            isSubmitting:false,
            Qlength:'',
            isStart: false,
            isLoading: true,
            PickAnswers: {},
            PickAnswers_id: {},
            FinalAnswers: [],
            Questype: "",
            questionIndex: 0,
            questionIsLoaded: false,
            duration: null,
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
            Essayoptions:{
            modules: {
                    'toolbar': [
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'bullet' }],
                    ],
                }
            },
            TimerCount:[],
            tempCounter:0,
            timeCount:null,
            classworkDetails:[],
            leaveStrike: 0,
            preventWarning: false,
            isExamStart: false,
            StartTime: null,
            Submitted_Answers: null,
            submission_id: null,
            isSavingAnswer: false,
            bus: "testing",
            TimesUpDialog: false,
            windowHeight: window.innerHeight - 100,
            isLeavingPage: false,
            CurrentTime: null,
            testDate: null,
            isReloadTime: false,
        }
    },
    computed: 
    mapGetters(["getAll_questions", "get_classwork_show_details"]),
    methods:{
        ...mapActions(['fetchClassworkShowDetails']),
        CountTime(){
            this.timeCount = setInterval(()=>{
                this.tempCounter = this.tempCounter +1
            },1000)
        },
        SubmitPromp(){
            this.isRemoving = true;
            this.dialog = true;;
        },
        reset (index, type) {
            if(type == 'Multiple Choice' || type == 'Identification' || type == 'True or False' || type == 'Essay'){
                 this.FinalAnswers[index].Answer = '';
            }
            else if(type == 'Matching type'){
                this.FinalAnswers[index].Answer.forEach(item => {
                    item.Ans_letter = '',
                    item.Answers = ''
                });
            }
        },
        SelectAnswer(){
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
        setAnswer(index, Choices){

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


              //console.log(this.FinalAnswers);

               this.Questype = "";
                this.PickAnswers.ans = "";
                this.PickAnswers_id.quesId = "";
                if(this.questionIndex != this.Qlength-1){
                    this.questionIndex++;
                }
                setTimeout(() => (this.isSavingAnswer = false), 700);
            
        },
        async updateAnswer(){
             axios.put('/api/question/store-answer/'+ this.submission_id , {
                type: "multiple",
                data: this.FinalAnswers
            })
            //this.isSavingAnswer = false;
             //setTimeout(() => (this.isSavingAnswer = false), 500);
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
         SubmitAnswer(data){
             if(data.istime == false){
                  this.isExamStart = false;
                    //this.isLoading = !this.isLoading;
                    this.isSubmitting = !this.isSubmitting;
                    this.dialog = !this.dialog;
                    this.isStart = !this.isStart;
                    this.warningDialog = false;
                    axios.post('/api/question/check/'+this.$route.query.clwk, {item: this.FinalAnswers, AnsLength:this.questionIndex, timerCount: this.TimerCount, timeSpent: data.time})
                    .then((res)=>{
                        //this.isLoading = !this.isLoading;
                        //this.isSubmitting = !this.isSubmitting;
                        this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: this.$route.query.clwk}});
                    })       
             }
                  
        },
        TimesUpSubmit(data){
            
            this.isExamStart = false;
            //this.isLoading = !this.isLoading;
            this.isSubmitting = !this.isSubmitting;
            this.isStart = !this.isStart;
            this.warningDialog = false;
             axios.post('/api/question/check/'+this.$route.query.clwk, {item: this.FinalAnswers, AnsLength:this.questionIndex,timerCount: this.TimerCount, timeSpent: data.time})
            .then((res)=>{
                this.TimesUpDialog = !this.TimesUpDialog;
                 setTimeout(() => {
                    //this.isLoading = !this.isLoading;
                    //this.isSubmitting = !this.isSubmitting;
                }, 2000);
               //this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: this.$route.query.clwk}}) 
            })
        },
        fetchQuestions(){
            this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(()=>{
                this.Qlength = this.getAll_questions.Question.length;
                let AnswersList = this.Submitted_Answers;
        
                if(AnswersList == null || AnswersList.length == 0){
                    for (let index = 0; index < this.getAll_questions.Question.length; index++) {
                        if(this.getAll_questions.Question[index].type == 'Identification' || this.getAll_questions.Question[index].type == 'Multiple Choice' || this.getAll_questions.Question[index].type == 'True or False'){
                            this.FinalAnswers.push({
                                Answer: '',
                                Question_id: this.getAll_questions.Question[index].id,
                                type:this.getAll_questions.Question[index].type,
                                timeConsume: null
                            });
                        }
                        else if(this.getAll_questions.Question[index].type == 'Essay'){
                             this.FinalAnswers.push({
                                Answer: '',
                                Question_id: this.getAll_questions.Question[index].id,
                                type:this.getAll_questions.Question[index].type,
                                check: false,
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
                }
                else if(this.Qlength != AnswersList.length){
                     for (let index = 0; index < this.getAll_questions.Question.length; index++) {
                        if(this.getAll_questions.Question[index].type == 'Identification' || this.getAll_questions.Question[index].type == 'Multiple Choice' || this.getAll_questions.Question[index].type == 'True or False'){
                            this.FinalAnswers.push({
                                Answer: '',
                                Question_id: this.getAll_questions.Question[index].id,
                                type:this.getAll_questions.Question[index].type,
                                timeConsume: null
                            });
                        }
                        else if(this.getAll_questions.Question[index].type == 'Essay'){
                             this.FinalAnswers.push({
                                Answer: '',
                                Question_id: this.getAll_questions.Question[index].id,
                                type:this.getAll_questions.Question[index].type,
                                check: false,
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
                }
                else if(this.Qlength == AnswersList.length){

                     for (let x = 0; x < this.getAll_questions.Question.length; x++) {
                         for (let j = 0; j < AnswersList.length; j++) {
                            if(this.getAll_questions.Question[x].id == AnswersList[j].Question_id){
                                if(this.getAll_questions.Question[x].type == 'Identification' || this.getAll_questions.Question[x].type == 'Multiple Choice' || this.getAll_questions.Question[x].type == 'True or False' || this.getAll_questions.Question[x].type == 'Essay'  ){
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
                                            Ans_letter: item.Ans_letter,
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
                this.isLoading = false;
                this.questionIsLoaded = true;
            });

        },
         preventNav(event) {
            if (!this.isStart) return;
            event.returnValue = "";
        },
        ReloadStatus(){
            axios.get('/api/student/checking/'+this.$route.query.clwk)
            .then(res=>{
               if(res.data.success == true){
                    if(res.data.status != 'Submitted'){
                        this.CurrentTime = res.data.currentTime;
                        this.StartTime = res.data.startTime;
                    }
                }
                this.isReloadTime = false;
            })
            .catch(e=>{
                this.toastError('Something went wrong while loading Questions!');
                this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: this.$route.query.clwk}})
            })
        },
         CheckStatus(){
            axios.get('/api/student/checking/'+this.$route.query.clwk)
            .then(res=>{
               if(res.data.success == true){
                    if(res.data.status != 'Submitted'){
                        this.isExamStart = true
                        this.Submitted_Answers = res.data.Submitted_Answers;
                        this.CurrentTime = res.data.currentTime;
                        this.testDate = res.data.testDate;
                        this.StartTime = res.data.startTime;
                        this.submission_id = res.data.submission_id;
                        this.preventNav = !this.preventNav;
                        this.StartQuiz();
                    }
                    else{
                        this.isLoading = false;
                        //this.$router.push({name: 'result-page', params:{id: this.$route.query.clwk}})
                        //this.toastError('You already Submitted to this Quiz!, Please Contact your Instructor for retake');
                        this.$toasted.error('You already Submitted to this Quiz, Please Contact your Instructor for quiz retake!', {
                            theme: "toasted-primary",
                            position: "top-center",
                            icon: "warning",
                            duration: 7000
                        });
                        this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: this.$route.query.clwk}});
                    }
               }
               else{
                   this.toastError('Something went wrong while loading Questions!');
                  this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: this.$route.query.clwk}}) 
               }
            })
            .catch(e=>{
                this.toastError('Something went wrong while loading Questions!');
                this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: this.$route.query.clwk}})
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
            let data = {classwork_id : this.$route.query.clwk, course_id : this.$route.params.id}
            this.$store.dispatch('fetchClassworkShowDetails',  data)
            .then(()=>{
               this.duration = this.get_classwork_show_details.Details.duration;
                this.classworkDetails = this.get_classwork_show_details.Details;
                this.fetchQuestions();
            })
            //this.CountTime();
        },
        triggerWarning(){
            if(this.isExamStart){
                this.leaveStrike += 1;
                if(this.leaveStrike == 5){
                    this.isExamStart = false;
                 
                    this.toastError('You are lossing focus to examination page many times!');
                    this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: this.$route.query.clwk}})
                }
                if(!this.preventWarning){
                    this.warningDialog = true;
                }
              }
        },
        ReloadTime(){
            this.ReloadStatus();
            this.isReloadTime = true;
            //setTimeout(() => (this.isReloadTime = false), 300);
        }
    },
    beforeMount() {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        window.addEventListener("onbeforeunload", this.preventNav);
        let self = this;
        $(window).blur(function(){
            self.triggerWarning()
        });
    },
     beforeRouteLeave(to, from, next) {
   
        if (this.isExamStart) {
            if (!window.confirm("Leave without saving?")) {
           
                return;
            }
        }
        this.isLeavingPage = true;
        next();
    },
    async mounted() {
        this.CheckStatus();
    },
    
}
</script>

<style>
    .centered-input >>> input {
      text-align: center
    }
    .post-content img{
        border:  1px solid lightgray;
        max-width: 80%;
        max-height: 13rem !important;
    }
    .ql-editor img{
        max-height: 20rem !important;
        max-width: 80%;
    }
    .centered-input input {
        text-align: center
    }

 

</style>