
<template>
<v-app>

<v-dialog v-model="dialog" persistent max-width="550">
    <confirmDialog
    v-on:toggleCancelDialog="dialog = !dialog"
    v-on:toggleSubmit="StopTimer = true"
     v-if="dialog"></confirmDialog>
</v-dialog>

<v-dialog v-model="warningDialog" persistent max-width="480">
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

<v-container class="mt-5">
    <v-card class="pl-3 pr-3">

    
        <v-row v-if="!isLoading">
            <v-col>
                <div class="mt-3 d-flex">
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        color="primary"
                        >
                        <v-icon x-large>
                        mdi-book-open-variant
                        </v-icon>
                    </v-btn>
                    <div class="font-weight-bold mt-4">{{classworkDetails.title}}</div>
               </div>
            </v-col>
              <v-col cols="6" class="d-flex justify-end">
                <div>
                    <h4 class="ml-4">Time Remaining</h4>
                     <quizTimer  :StopTimer="StopTimer" v-on:TimerStop="StopTimer = false, SubmitAnswer()" v-on:TimesUp="TimesUpSubmit()" :duration="duration" v-if="!isLoading"></quizTimer>
                </div>
            </v-col>
        </v-row>

   </v-card>
</v-container>


<v-hover v-if="!isLoading">
  <v-container class="mt-0 pt-0"  fluid>
        <v-row  justify="center">
            <v-col cols="12" sm="12" md="8" lg="8" class="mt-4 pt-0"  xl="8">
                <v-container class="d-flex flex-row justify-center">
                    <v-card  style="border-top:5px solid #EF6C00;max-height:50vh;overflow: scroll;overflow-x: hidden;" :class="$vuetify.breakpoint.xs? 'd-none mr-0':'mr-2'" >
                      <v-window >
                          <v-window-item >
                               <v-container align="center" ma-0 pa-0 v-for="(item, index) in getAll_questions.Question" :key="index">
                                   <v-container class="pa-0 ma-0 pl-sm-4 pr-3 pt-2 pb-2 d-flex flex-row">
                                       <v-btn text rounded
                                       @click="questionIndex = index"
                                       >
                                        <v-icon :color="FinalAnswers[index].Answer == '' ? '' : 'primary'" left>{{FinalAnswers[index].Answer == '' ? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked'}}</v-icon>
                                         {{index+1}}
                                       </v-btn>
                                   </v-container>
                                   
                               </v-container>
                          </v-window-item>
                      </v-window>
                    </v-card>

                      <v-card style="border-top:5px solid #EF6C00;width:100%">
                        <v-window>
                            <v-window-item >
                                <v-row>
                                    <v-row>
                                        <v-col cols="12" md="12" lg="12" class="primary">
                                            
                                        </v-col>
                                        <v-col  cols="12" md="12" lg="12" class="pa-10">
                                        <v-container ma-0 pa-0 v-for="(item, index) in getAll_questions.Question" :key="index">
                                            <div v-show="index === questionIndex">
                                                    <v-row ma-0 pa-0>
                                                        <v-col class="mb-0 pb-0" cols="12">
                                                            <v-container class="pa-0 ma-0 d-flex flex-row justify-space-between">
                                                                <h3 >Question #{{index+1}}</h3>
                                                                <p class="mr-5">{{item.points}} Points</p>
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
                                                                <v-container class="d-flex flex-row ma-0 pa-0 mb-1" v-for="(Ans, i) in getAll_questions.Answer[index]" :key="i">
                                                                <v-radio-group :name="'option'+index"  class="ma-0 pa-0" v-model="FinalAnswers[index].Answer">
                                                                    <v-radio
                                                                    color="primary"
                                                                    :key="index"
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
                                                                        <v-btn @click="reset(index)" text rounded small>Reset selection</v-btn>
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
                                                                    @change="SelectAnswer()"
                                                                        v-model="FinalAnswers[index].Answer" 
                                                                        id="editor-container" placeholder="Answer" 
                                                                        theme="snow" :options="options"></editor>
                                                                </v-card>
                                                                  <v-container class="mb-0 pb-0 d-flex flex-row-reverse">
                                                                    <v-btn @click="reset(index)" text rounded small>Clear Answer</v-btn>
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
                                                                    <v-btn @click="reset(index)" text rounded small>Reset selection</v-btn>
                                                                </v-container>
                                                        </v-container>
                                                    </v-container>
                                                

                                                

                                                    <v-container class="mb-4" v-if="item.type == 'Matching type'">
                                                        <v-row >
                                                                <v-col ma-0 pa-0 class="ma-0 pa-0" cols="12" lg="12" md="12" >
                                                                    <v-container class="pl-5 pr-5">
                                                                        <v-container>
                                                                            <v-row>
                                                                                <v-col class="font-weight-bold" cols="2" md="1" lg="1">
                                                                                   
                                                                                </v-col>
                                                                                <v-col class="font-weight-bold" cols="6">
                                                                                    Column A
                                                                                </v-col>
                                                                                <v-col class="font-weight-bold" cols="4">
                                                                                    Column B
                                                                                </v-col>
                                                                            </v-row>
                                                                        </v-container>
                                                                        <v-divider></v-divider>
                                                                        <v-container class="mb-0 pb-0" v-for="(List, i) in getAll_questions.Answer[index].SubQuestion" :key="List.id">
                                                                            
                                                                            <v-row>
                                                                                <v-col class="mb-1 pb-0 pt-0 mt-0" cols="2" md="1" lg="1">
                                                                                    <v-text-field 
                                                                                    @onkeyup="SubAnswers[i] = SubAnswers[i].toUpperCase()"
                                                                                    v-model="SubAnswers[i]"
                                                                                      @change="(quesNumber[i] = List.id),(PickAnswers_id.quesId =item.id),(Questype = item.type),PickAnswers.ans = 'Matching Type'"
                                                                                    class="centered-input"
                                                                                        
                                                                                    ></v-text-field>
                                                                                </v-col>
                                                                                <v-col class="mb-1 pb-0 pt-0 mt-0" cols="5" md="7" lg="7">
                                                                                    <div class="d-flex mt-7">
                                                                                        <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                                                                        <span :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" v-html="List.sub_question" class="subquestion-content"></span>
                                                                                    </div>
                                                                                </v-col>
                                                                                <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="5" md="4" lg="4">
                                                                                    <div class="d-flex mt-7"> 
                                                                                        <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                                                                       
                                                                                        <span :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" v-html="getAll_questions.Answer[index].SubAnswer[i].Choice" class="subchoices-content"></span>
                                                                                    </div>
                                                                                </v-col>
                                                                            </v-row>
                                                                        </v-container>
                                                                    </v-container>
                                                                  
                                                                </v-col>
                                                            </v-row>
                                                    </v-container>

                                            </div>
                                            </v-container>
                                            <v-container>
                                                <v-btn rounded color="primary" outlined="" @click="prev" 
                                                :disabled="questionIndex <= 0">
                                                    <v-icon>mdi-arrow-left</v-icon>
                                                    {{$vuetify.breakpoint.xs ? '' : 'previous'}}
                                                    
                                                    </v-btn>

                                                    <v-btn v-if="questionIndex != Qlength-1"   rounded color="primary" @click="next">
                                                    {{$vuetify.breakpoint.xs ? '' : 'Next'}}
                                                    <v-icon>mdi-arrow-right</v-icon>
                                                    </v-btn>


                                                    <v-btn v-if="questionIndex == Qlength-1"  rounded color="success" @click="SubmitPromp">
                                                    Submit
                                                    <v-icon>mdi-lock</v-icon>
                                                    </v-btn>



                                                <!--  <div v-if="questionIndex > 0" class="col-7 mt-2 text-right">
                                                    <button type="button" class="btn btn-secondry" v-if="questionIndex > 0"  @click="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i> previous</button>  
                                                </div>
                                                <div class="col-1 mt-2 ml-2">
                                                    <button v-if="questionIndex == Qlength-1" class="btn btn-finish" @click="SubmitAnswer">Finish <i class="fa fa-lock" aria-hidden="true"></i></button>
                                                    <button v-else class="btn btn-primary" @click="next">Next <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                                                </div> -->
                                            </v-container>
                                        </v-col>
                                    </v-row>
                                </v-row>
                            </v-window-item>
                        </v-window>
                     </v-card>
                </v-container>
              
            </v-col>
        </v-row>
    </v-container>
</v-hover>
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
            confirmLeave: false
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
        reset (index) {
            this.FinalAnswers[index].Answer = '';
            let name = btoa('CurrentAnswers');
            localStorage.setItem(name, JSON.stringify(this.FinalAnswers));
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
                if (this.Questype == 'Matching type') {
                  
                    if (this.FinalAnswers.length != 0) {
                        let check = false;
                        let index = 0;
                        for (let i = 0; i < this.FinalAnswers.length; i++) {
                            if (
                                this.FinalAnswers[i].Question_id ==
                                this.PickAnswers_id.quesId
                            ) {
                                check = true;
                                index = i;
                            }
                        }
                        if (check == true) {
                            let Ans = new Array();
                            for (let i = 0; i < this.getAll_questions.Answer[this.questionIndex].SubAnswer.length; i++) {
                                for (let x = 0; x < this.getAll_questions.Answer[this.questionIndex].SubAnswer.length; x++) {
                                    if(this.Alphabet[x].toUpperCase() == this.SubAnswers[i].toUpperCase()){
                                            Ans[i] = this.getAll_questions.Answer[this.questionIndex].SubAnswer[x].Choice;
                                        } 
                                    }     
                            }
                            this.FinalAnswers[index] = {
                                Answer: this.SubAnswers,
                                Question_id: this.PickAnswers_id.quesId,
                                SubQuestion_id: this.quesNumber,
                                type:this.Questype,
                                timeConsume: this.TimerCount[this.questionIndex]
                            };
                            console.log(this.FinalAnswers);
                        } else {
                            let Ans = new Array();
                            for (let i = 0; i < this.getAll_questions.Answer[this.questionIndex].SubAnswer.length; i++) {
                                for (let x = 0; x < this.getAll_questions.Answer[this.questionIndex].SubAnswer.length; x++) {
                                    if(this.Alphabet[x].toUpperCase() == this.SubAnswers[i].toUpperCase()){
                                            Ans[i] = this.getAll_questions.Answer[this.questionIndex].SubAnswer[x].Choice;
                                        }
                                        
                                }   
                            }
                            this.FinalAnswers.push({
                                Answer: Ans,
                                Question_id: this.PickAnswers_id.quesId,
                                SubQuestion_id: this.quesNumber,
                                type:this.Questype,
                                timeConsume: this.TimerCount[this.questionIndex]
                            });
                            console.log(this.FinalAnswers);
                        
                        }
                    } else {
                        let Ans = new Array();
                            for (let i = 0; i < this.getAll_questions.Answer[this.questionIndex].SubAnswer.length; i++) {
                            for (let x = 0; x < this.getAll_questions.Answer[this.questionIndex].SubAnswer.length; x++) {
                                if(this.Alphabet[x].toUpperCase() == this.SubAnswers[i].toUpperCase()){
                                    Ans[i] = this.getAll_questions.Answer[this.questionIndex].SubAnswer[x].Choice;
                                }
                                    
                            }   
                        }
                        this.FinalAnswers.push({
                            Answer: Ans,
                            Question_id: this.PickAnswers_id.quesId,
                            SubQuestion_id: this.quesNumber,
                            type:this.Questype,
                            timeConsume: this.TimerCount[this.questionIndex]
                        });
                        console.log(this.FinalAnswers);
                    }
                }

               this.Questype = "";
                this.PickAnswers.ans = "";
                this.PickAnswers_id.quesId = "";
                if(this.questionIndex != this.Qlength-1){
                    this.questionIndex++;
                }
            
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
                 localStorage.removeItem(btoa('timer_time'));
                 localStorage.removeItem(btoa('CurrentAnswers'));
                 this.$router.push({name: 'result-page', params:{id: this.$route.query.clwk}})
                  
            })              
        },
        TimesUpSubmit(){
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
            this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(res=>{
                this.Qlength = res[1];
                this.isLoading = false;
                let name = btoa('CurrentAnswers');
                let AnswersList = JSON.parse(localStorage.getItem(name));
                if(AnswersList == null){
                    for (let index = 0; index < res[0].Question.length; index++) {
                        this.FinalAnswers.push({
                            Answer: '',
                            Question_id: res[0].Question[index].id,
                            type:res[0].Question[index].type,
                            timeConsume: null
                        });
                    }
                    localStorage.setItem(name, JSON.stringify(this.FinalAnswers));
                }else{
                     for (let x = 0; x < res[0].Question.length; x++) {
                         for (let j = 0; j < AnswersList.length; j++) {
                             if(res[0].Question[x].id == AnswersList[j].Question_id){
                                  this.FinalAnswers.push({
                                    Answer: AnswersList[j].Answer,
                                    Question_id: AnswersList[j].Question_id,
                                    type: AnswersList[j].type,
                                    timeConsume: AnswersList[j].timeConsume
                                });
                             }
                         }
                    }
                }
                
            });

        },
         preventNav(event) {
            if (!this.isStart) return;
            event.preventDefault();
            // Chrome requires returnValue to be set.
            event.returnValue = "";
        },
        async CheckStatus(){
            axios.get('/api/student/checking/'+this.$route.query.clwk)
            .then(res=>{
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
            this.warningDialog = true;
        },
    },
    beforeMount() {
        window.addEventListener("beforeunload", this.preventNav);
        let self = this;
        $(window).blur(function(){
            self.triggerWarning()
        });
    },
    mounted(){
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