
<template>
<v-app>

<v-dialog v-model="dialog" persistent max-width="550">
    <confirmDialog
    v-on:toggleCancelDialog="dialog = !dialog"
    v-on:toggleSubmit="SubmitAnswer()"
     v-if="dialog"></confirmDialog>
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

<div>
    <quizTimer :duration="duration" v-if="!isLoading"></quizTimer>
</div>


<v-hover v-if="!isLoading">
  <v-container  fluid>
        <v-row align="center" justify="center">
           
            <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                <v-container class="d-flex flex-row justify-center">
                    <v-card style="border-top:5px solid #EF6C00" :class="$vuetify.breakpoint.xs? 'd-none mr-0':'mr-2'" >
                      <v-window >
                          <v-window-item >
                               <v-container align="center" ma-0 pa-0 v-for="(item, index) in getAll_questions.Question" :key="index">
                                   <v-container class="pa-0 ma-0 pl-sm-4 pr-3 pt-2 pb-2 d-flex flex-row">
                                       <v-btn text rounded
                                       @click="questionIndex = index"
                                       >
                                        
                                        <v-icon :color="checker[index] != null || checker[index] != ''? 'primary': ''" left>{{checker[index] == null || checker[index] == ''? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked'}}</v-icon>
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
                                                                <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1': ''" class="subtitle-1">{{item.question}}</div>
                                                            </v-container> 
                                                        </v-col>
                                            
                                                    </v-row>
                                                    
                                                    <v-container v-if="item.type == 'Multiple Choice'">
                                                      <v-row>
                                                          <v-col cols="12" md="12">
                                                            <v-container>
                                                                <v-container class="d-flex flex-row ma-0 pa-0 mb-1" v-for="(Ans, i) in getAll_questions.Answer[index]" :key="i">
                                                                <v-radio-group :name="'option'+index"  class="ma-0 pa-0" v-model="AnswerRadio[index]">
                                                                    <v-radio
                                                                    
                                                                    @click="PickAnswers.ans = AnswerRadio[index],
                                                                    PickAnswers_id.quesId = item.id, 
                                                                    Questype = item.type, checker[index] = AnswerRadio[index]"
                                                                    color="primary"
                                                                    :key="index"
                                                                    @mouseup="reset(index,index)"
                                                                    :value="Ans.Choice"
                                                                    ></v-radio>
                                                                    </v-radio-group>
                                                                    <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0">
                                                                        {{Ans.Choice}}
                                                                    </div>
                                                                    </v-container>

                                                                    <v-container class="mb-0 pb-0 d-flex flex-row-reverse">
                                                                        <v-btn @click="reset(index,index)" text rounded small>Reset selection</v-btn>
                                                                    </v-container>
                                                                </v-container>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>

                                                    <v-container v-if="item.type == 'Identification'">
                                                        <v-row ma-0 pa-0>
                                                            <v-col  ma-0 pa-0 class="ma-0 pa-0 mt-5" cols="12">
                                                                <v-textarea
                                                                @change="PickAnswers_id.quesId = item.id, 
                                                                Questype = item.type, checker[index] = IdentificationAns[index]" 
                                                                v-model="IdentificationAns[index]"
                                                                filled
                                                            
                                                                class="pa-0 ma-0"
                                                                label="Answer"
                                                                auto-grow
                                                                ></v-textarea>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>

                                                    <v-container v-if="item.type == 'True or False'">
                                                        <v-container ma-0 pa-0>
                                                            <v-container class="d-flex flex-row ma-0 pa-0" v-for="(x, n) in inputCheck" :key="n">
                                                            <v-radio-group :name="'option'+index"   class="ma-0 pa-0"  v-model="AnswerRadio[index]">
                                                                <v-radio
                                                            
                                                                @click="PickAnswers.ans = AnswerRadio[index], PickAnswers_id.quesId = item.id, 
                                                                Questype = item.type,checker[index] = AnswerRadio[index]"
                                                                color="primary"
                                                                :key="index"
                                                                
                                                                :value="inputCheck[n]"
                                                                ></v-radio>
                                                                </v-radio-group>

                                                                <div class="Subtitle 1">
                                                                    {{inputCheck[n]}}
                                                                </div>
                                                                </v-container>
                                                        </v-container>
                                                    </v-container>
                                                

                                                

                                                    <v-container class="mb-4" v-if="item.type == 'Two Colums Multiple Choice'">
                                                        <v-row ma-0 pa-0>
                                                                <v-col  ma-0 pa-0 class="ma-0 pa-0 mb-3" cols="12" lg="12" md="12">
                                                                <v-row>
                                                                    <v-col cols="8">
                                                                        <div class="mt-1 text-sm-h3 text-md-h5 text-xl-h3">
                                                                            Column A 
                                                                            </div>
                                                                    </v-col>
                                                                    <v-col>
                                                                            <div class="mt-1 text-sm-h3 text-md-h5 text-xl-h3">
                                                                            Column B
                                                                            </div>
                                                                    </v-col>
                                                                </v-row>
                                                                </v-col>
                                                                <v-col ma-0 pa-0 class="ma-0 pa-0" cols="12" lg="12" md="12" v-for="(Ans, i) in getAll_questions.Answer[index].SubQuestion" :key="i">
                                                                    <v-row>
                                                                        <v-col class="mb-0 pb-0"  cols="2" sm="2" md="1" lg="1" xl="1">
                                                                            <v-text-field class="centered-input" 
                                                                             @onkeyup="SubAnswers[i] = SubAnswers[i].toUpperCase()" v-model="SubAnswers[i]" 
                                                                             @change="quesNumber[i] = Ans.id,  PickAnswers_id.quesId = item.id, Questype = item.type"
                                                                            single-line ></v-text-field>
                                                                        </v-col>

                                                                         <v-col class="mb-0 pb-0"  cols="6" sm="6" md="7" lg="7" xl="7">
                                                                            <div :style="$vuetify.breakpoint.xs ? 'line-height:1.2': 'line-height:1.3'" 
                                                                            :class="$vuetify.breakpoint.xs ? 'OVERLINE mt-4' : 'subtitle-1 mt-4'">
                                                                                {{Ans.sub_question}}</div>
                                                                        </v-col>
                                                                           <v-col class="mb-0 pb-0" cols="4" sm="4" md="4" lg="4" xl="4">
                                                                            <div :style="$vuetify.breakpoint.xs ? 'line-height:1.2': 'line-height:1.3'" 
                                                                            :class="$vuetify.breakpoint.xs ? 'OVERLINE mt-4' : 'subtitle-1 mt-4'">
                                                                                <span class="font-weight-medium">{{Alphabet[i]}}</span>. {{getAll_questions.Answer[index].SubAnswer[i].Choice}}</div>
                                                                        </v-col>
                                                                        
                                                                    </v-row>
                                                                   <!--  <v-row>
                                                                        <v-col cols="6" class="pt-0 pb-0 mt-0 mb-0">
                                                                            <v-textarea
                                                                                rows="1"
                                                                          
                                                                                v-model="Ans.sub_question"
                                                                                filled
                                                                                class="pa-0 ma-0"
                                                                                :label="'Question '+(i+1)"
                                                                                auto-grow
                                                                                required
                                                                                >
                                                                                </v-textarea>
                                                                        </v-col>

                                                                    <v-col cols="5" class="pt-0 pb-0 mt-0 mb-0">
                                                                            <v-textarea
                                                                                rows="1"
                                                                               
                                                                                v-model="getAll_questions.Answer[index].SubAnswer[i].Choice"
                                                                                filled
                                                                                class="pa-0 ma-0"
                                                                                :label="'Answer '+(i+1)"
                                                                                auto-grow
                                                                                required
                                                                                >
                                                                                </v-textarea>
                                                                        </v-col>
                                                                </v-row> -->
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
import quizTimer from './QuizTimer'
 import {mapGetters, mapActions } from "vuex";
export default {
    components:{
        quizTimer,
        confirmDialog
    },
    data(){
        return{
            valid: false,
            checker:[],
            dialog:false,
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
            Alphabet: ""
        }
    },
    computed: 
    mapGetters(["getAll_questions"]),
    methods:{
        SubmitPromp(){
            this.isRemoving = true;
            this.dialog = true;;
        },
        reset (value,index) {
        if (this.AnswerRadio[index] === value) {
            this.$nextTick(() => {
            this.AnswerRadio[index] = null
            })
        }
        },
        removePropt(num, id){
            this.DeleteDetails.number = num;
            this.DeleteDetails.id = id;
            this.isRemoving = true;
            this.isRemoving_id = id;
            this.dialog = true;;
        },
          next: function() {
            if (this.Questype == 'Multiple Choice' || this.Questype == 'True or False') {
               
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
                        this.FinalAnswers[index] = {
                            Answer: this.PickAnswers.ans,
                            Question_id: this.PickAnswers_id.quesId,
                            type:this.Questype
                        };
                        console.log(this.FinalAnswers);
                    } else {
                        this.FinalAnswers.push({
                            Answer: this.PickAnswers.ans,
                            Question_id: this.PickAnswers_id.quesId,
                            type:this.Questype
                        });
                        console.log(this.FinalAnswers);
                    }
                } else {
                    this.FinalAnswers.push({
                        Answer: this.PickAnswers.ans,
                        Question_id: this.PickAnswers_id.quesId,
                        type:this.Questype
                    });
                    console.log(this.FinalAnswers);
                }
            }

            if (this.Questype == 'Identification') {
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
                        this.FinalAnswers[index] = {
                            Answer: this.IdentificationAns[this.questionIndex],
                            Question_id: this.PickAnswers_id.quesId,
                            type:this.Questype
                        };
                        console.log(this.FinalAnswers);
                    } else {
                        this.FinalAnswers.push({
                            Answer: this.IdentificationAns[this.questionIndex],
                            Question_id: this.PickAnswers_id.quesId,
                            type:this.Questype
                        });
                        console.log(this.FinalAnswers);
                    }
                } else {
                    this.FinalAnswers.push({
                        Answer: this.IdentificationAns[this.questionIndex],
                        Question_id: this.PickAnswers_id.quesId,
                        type:this.Questype
                    });
                    console.log(this.FinalAnswers);
                }
            }

            if (this.Questype == 'Two Colums Multiple Choice') {
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
                            type:this.Questype
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
                            type:this.Questype
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
                        type:this.Questype
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
            this.questionIndex--;
        },
         SubmitAnswer(){
            this.isLoading = !this.isLoading;
            this.isSubmitting = !this.isSubmitting;
            this.dialog = !this.dialog;
            this.next();
            axios.post('/api/question/check/'+this.$route.query.clwk, {item: this.FinalAnswers, AnsLength:this.questionIndex})
            .then(()=>{
                 setTimeout(() => {
                    this.isLoading = !this.isLoading;
                    this.isSubmitting = !this.isSubmitting;
                }, 2000);
            })
        },
        fetchQuestions(){
          
            this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(res=>{
                this.Qlength = res[1];
                this.isLoading = false;
                
            });

        },
         preventNav(event) {
            if (!this.isStart) return;
            event.preventDefault();
            // Chrome requires returnValue to be set.
            event.returnValue = "";
        },
    },
/*     beforeMount() {
        window.addEventListener("beforeunload", this.preventNav);
        this.$once("hook:beforeDestroy", () => {
        window.removeEventListener("beforeunload", this.preventNav);
        });

       
    }, */
    mounted(){
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
         axios.get('/api/classwork/showDetails/'+ this.$route.query.clwk)
        .then(res=>{
            this.duration = res.data.Details[0].duration;
            this.fetchQuestions();
        })
        

    }
  
}
</script>

<style scoped>
    .centered-input >>> input {
      text-align: center
    }    
</style>