
<template>
<v-app>
<v-container class="fill-height" v-if="isLoading" style="height: 600px;">
    <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
            Loading Questions
        </v-col>
        <v-col cols="6">
            <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
    </v-row>
</v-container>

<v-hover v-if="!isLoading" v-slot="{ hover }">
  <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
             <v-col  cols="2" sm="3" lg="1" md="1">
                 <v-card  >
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
             </v-col>
            <v-col cols="10" sm="19" md="7">
                <v-card :elevation="hover ? 12 : 5" >
                    <v-window>
                        <v-window-item >
                            <v-row>
                                <v-row>
                                    <v-col cols="12" md="12" class="primary">
                                        
                                    </v-col>
                                    <v-col cols="12" md="12" class="pa-10">
                                        
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
                                                            <div :style="$vuetify.breakpoint.xs ? 'line-height:1.2': ''" class="subtitle-1">{{item.question}}</div>
                                                        </v-container> 
                                                    </v-col>
                                         
                                                   </v-row>
                                                
                                                <v-container v-if="item.type == 'Multiple Choice'">
                                                    <v-form ref="form" v-model="valid" lazy-validation>
                                                    <v-container ma-0 pa-0>
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
                                                    </v-form>
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
                                               <!--  

                                              

                                                 <v-container v-if="item.type == 'Two Colums Multiple Choice'">
                                                    <v-row ma-0 pa-0>
                                                            <v-col  ma-0 pa-0 class="ma-0 pa-0 mb-3" cols="12" lg="12" md="12">
                                                               <v-row>
                                                                   <v-col cols="7">
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
                                                                    <v-col cols="6" class="pt-0 pb-0 mt-0 mb-0">
                                                                         <v-textarea
                                                                            rows="1"
                                                                            :readonly="!isEditing || isEditing_Id != item.id"
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
                                                                            :readonly="!isEditing || isEditing_Id != item.id"
                                                                            v-model="getAll_questions.Answer[index].SubAnswer[i].Choice"
                                                                            filled
                                                                            class="pa-0 ma-0"
                                                                            :label="'Answer '+(i+1)"
                                                                            auto-grow
                                                                            required
                                                                            >
                                                                            </v-textarea>
                                                                    </v-col>
                                                               </v-row>
                                                            </v-col>
                                                        </v-row>
                                                </v-container> -->

                                          </div>
                                        </v-container>
                                        <v-container>
                                            <v-btn rounded color="primary" outlined="" @click="prev" 
                                            :disabled="questionIndex <= 0">
                                                <v-icon>mdi-arrow-left</v-icon>
                                                {{$vuetify.breakpoint.xs ? '' : 'previous'}}
                                                
                                                </v-btn>

                                             <v-btn rounded color="primary" @click="next">
                                                  {{$vuetify.breakpoint.xs ? '' : 'Next'}}
                                                 <v-icon>mdi-arrow-right</v-icon>
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
            </v-col>
        </v-row>
    </v-container>
</v-hover>
</v-app>

</template>
<script>

 import {mapGetters, mapActions } from "vuex";
export default {
    components:{
        
    },
    data(){
        return{
            valid: false,
            checker:[],
            dialog:false,
            inputCheck:['True','False'],
            isRemoving:false,
            isRemoving_id:null,
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
            AnswerRadio:[],
            Questype: "",
            questionIndex: 0,
        }
    },
    computed: 
    mapGetters(["getAll_questions"]),
    methods:{
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

            if (this.Questype == 4) {
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
                         for (let i = 0; i < this.Questions.Answer[this.questionIndex].SubAnswer.length; i++) {
                            for (let x = 0; x < this.Questions.Answer[this.questionIndex].SubAnswer.length; x++) {
                                if(this.Alphabet[x].toUpperCase() == this.SubAnswers[i].toUpperCase()){
                                        Ans[i] = this.Questions.Answer[this.questionIndex].SubAnswer[x].Choice;
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
                         for (let i = 0; i < this.Questions.Answer[this.questionIndex].SubAnswer.length; i++) {
                            for (let x = 0; x < this.Questions.Answer[this.questionIndex].SubAnswer.length; x++) {
                                if(this.Alphabet[x].toUpperCase() == this.SubAnswers[i].toUpperCase()){
                                        Ans[i] = this.Questions.Answer[this.questionIndex].SubAnswer[x].Choice;
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
                        for (let i = 0; i < this.Questions.Answer[this.questionIndex].SubAnswer.length; i++) {
                        for (let x = 0; x < this.Questions.Answer[this.questionIndex].SubAnswer.length; x++) {
                            if(this.Alphabet[x].toUpperCase() == this.SubAnswers[i].toUpperCase()){
                                Ans[i] = this.Questions.Answer[this.questionIndex].SubAnswer[x].Choice;
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
        //this.getAllQuestion();
  
        this.Show = false
        this.fetchQuestions();
         this.Show = true
        
    }
  
}
</script>

<style scoped>
    a{
        cursor: pointer !important;
    }
    input,select{
        border-left: none;
        border-right: none;
        border-top: none;
    }
     textarea{
    box-shadow: none;
    height: 39px;
    font-size: 13px;
    line-height: 20px;
    padding: 9px 12px;
    display: block;
    width: 100%;
    overflow: hidden;
    resize: none;
    min-height: 38px;
    max-height: 150px;
    border: 1px solid #e1e6eb ;
    border-left: none;
    border-right: none;
    border-top: none;
    outline: none;

   
  }
   

    select {
        font-family: 'FontAwesome', Arial;
    }
    .addInput{
        text-align: left !important;
        margin-right: 0 ;
    }
  @media only screen and (max-width: 600px) {
      .form-check-input{
          margin-left: 8px !important;
      }
    }
    .row{
        transition: height 2s !important;
    }
        
</style>