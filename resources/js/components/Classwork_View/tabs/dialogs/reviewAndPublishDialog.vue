<template>
    <div>
        <v-row v-if="isloaded" class="ma-0 pa-0">
            <v-col cols="12" class="mb-2 ">
                <v-card elevation="2" outlined class="pl-2 pr-4">
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar size="52" color="primary">
                                <v-icon color="white" size="30"> 
                                    mdi-book-open-variant
                                </v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title style="font-size:22px" class="font-weight-bold">
                                    {{classworkDetails.title}}
                                </v-list-item-title>
                                <v-list-item-subtitle class="font-weight-medium">
                                    Total Points: {{classworkDetails.points}}
                                </v-list-item-subtitle>
                                
                            </v-list-item-content>
                                <v-list-item-action>
                                    <v-list-item-action-text>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn v-bind="attrs"  v-on="on"  @click="CloseDialog()" small color="red" dark rounded >
                                                    <v-icon small>mdi-close</v-icon> Cancel
                                                </v-btn> 
                                            </template>
                                            <span>Cancel Publish</span>
                                        </v-tooltip>
                                    </v-list-item-action-text>
                                        <v-spacer></v-spacer>
                                   
                                </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="12" class="mb-0 mt-0">
                <v-row align="center" justify="center">
                    <v-col cols="12"  class="d-flex mb-0 pb-0" md="8">
                        <v-btn @click="$router.push({name: 'add-question', query: {clwk: $route.query.clwk}})" dark color="red">
                           <v-icon left>mdi-pencil</v-icon> Edit Question
                        </v-btn>
                            <span class="pl-3 pr-3"></span>
                            <v-btn @click="$emit('continuePublish')" dark color="green">
                            <v-icon left>mdi-share</v-icon>Continue Publishing 
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12" class="mt-1">
                <v-row align="center" justify="center">
                    <v-col cols="12" class="pb-10"  md="8">
                         <v-card min-height="400"  class="pa-3 pt-8" elevation="5" outlined>
                            <div class="d-flex mb-2">
                                <div class="d-flex">
                                    <v-menu offset-y max-height="600" style="overflow-y:scroll;">
                                      <template v-slot:activator="{ on : menu, attrs }">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on: tooltip }">
                                                <v-btn icon v-bind="attrs" v-on="{...tooltip, ...menu}" >
                                                <v-icon color="primary">mdi-format-list-numbered</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Question List</span>
                                        </v-tooltip>
                                    </template>
                                    <v-list  >
                                        <v-list-item class="ma-0 pa-0" v-for="(item, index) in getAll_questions.Question" :key="index">
                                        <v-list-item-title>  
                                            <v-btn  
                                            text rounded @click="questionIndex = index">
                                         <v-icon  left>mdi-checkbox-blank-outline</v-icon>
                                            {{index+1}}
                                            </v-btn>
                                            
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>

                                <div class="pl-1 mt-2">Question {{questionIndex+1}}</div>
                                </div>
                                <v-spacer></v-spacer>
                                <div>
                                    <v-btn :disabled="questionIndex == 0" @click="questionIndex--" color="primary" class="mr-1" outlined rounded>
                                        Previous
                                    </v-btn>
                                    <v-btn class="pl-9 pr-9" v-if="questionIndex != getAll_questions.Question.length-1"  @click="questionIndex++" color="primary" rounded>
                                        Next
                                    </v-btn>
                                      <v-btn class="pl-9 pr-9" dark v-else  @click="$emit('continuePublish')" color="green" rounded>
                                        <v-icon left>mdi-share</v-icon>Continue Publishing
                                    </v-btn>
                                </div>
                                
                            </div>
                            <div>
                                <v-row ma-0 pa-0 v-for="(item, index) in getAll_questions.Question" :key="index">
                                    <v-col v-if="index == questionIndex" cols="12" class="pa-7">
                                        <v-row>
                                            <v-col cols="12" class="mb-0 pb-0">
                                                <div :style="!$vuetify.breakpoint.mdAndUp ? 'line-height:1.1':'line-height:1.5'" class="d-flex justify-space-between">
                                                    <span v-html="item.question" class="post-content"></span>
                                                    <span >{{item.points}} point</span>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" v-if="item.type == 'Multiple Choice'">
                                                <div>
                                                    <v-list class="pl-8" >
                                                        <v-list-item class="ma-0 pa-0"  v-for="(Ans, i) in getAll_questions.Answer[index].options" :key="i">
                                                            <v-list-item-icon class="ma-0 pa-0">
                                                                <v-radio-group v-if="item.isNew" hide-details :name="'option'+item.id" v-model="item.answer"  class="ma-0 pa-0 mt-1" >
                                                                    <v-radio
                                                                    :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                            
                                                                    color="primary"
                                                                    :key="Ans.id"
                                                                    :value="Ans.id">
                                                                    </v-radio>
                                                                </v-radio-group>

                                                                <v-radio-group v-else hide-details :name="'option'+item.id" v-model="item.answer"  class="ma-0 pa-0 mt-1" >
                                                                    <v-radio
                                                                    :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                            
                                                                    color="primary"
                                                                    :key="Ans.id"
                                                                    :value="Ans.Choice">
                                                                    </v-radio>
                                                                </v-radio-group>
                                                            </v-list-item-icon>
                                                            <v-list-item-content class="ma-0 pa-0">
                                                                <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex">
                                                                    <span v-html="Ans.Choice" class="post-content"></span>
                                                                </div>
                                                            </v-list-item-content>  
                                                        </v-list-item>
                                                    </v-list>
                                                </div>
                                            </v-col>

                                             <v-col cols="12" class="mt-0 pt-0" v-if="item.type == 'Identification'">
                                                    <div>
                                                        <span class="font-weight-bold">Answers: </span>
                                                        
                                                        <v-list>
                                                            <v-list-item class="mb-0 pb-0" >
                                                                <v-list-item-content class="d-flex mb-0 pb-0">
                                                                    <div class="d-flex mb-0 pb-0" v-for="(Ans, i) in getAll_questions.Answer[index].options" :key="i">
                                                                         <span class="pr-2 green--text">&bull; </span>
                                                                        <span class="post-content" v-html="Ans.Choice"></span>
                                                                    </div>
                                                                    
                                                                  
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-list>
                                                    </div>
                                                </v-col>

                                                <v-col cols="12" v-if="item.type == 'True or False'">
                                                    <div>
                                                        <v-list class="pl-8" >
                                                            <v-list-item class="ma-0 pa-0"  v-for="(x, n) in inputCheck" :key="n">
                                                                <v-list-item-icon class="ma-0 pa-0">
                                                                    <v-radio-group hide-details  v-model="item.answer">
                                                                        <v-radio
                                                                        :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                                        readonly
                                                                        color="primary"
                                                                        :key="n"
                                                                        name="Answer" 
                                                                        :value="inputCheck[n]"
                                                                        ></v-radio>
                                                                    </v-radio-group>
                                                                </v-list-item-icon>
                                                                <v-list-item-content  class="ma-0 pa-0">
                                                                    <div  style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex">
                                                                        <span class="mt-4">{{inputCheck[n]}}</span>
                                                                    </div>
                                                                </v-list-item-content>  
                                                            </v-list-item>
                                                        </v-list>
                                                    </div>
                                                </v-col>
                                                <v-col cols="12" v-if="item.type == 'Matching type'">
                                                    <div>
                                                        <v-container>
                                                            <v-row>
                                                                 <v-col class="font-weight-bold" cols="2" md="1">
                                                                   
                                                                </v-col>
                                                                <v-col class="font-weight-bold" cols="5">
                                                                    Column A<small>(question)</small>
                                                                </v-col>
                                                                <v-col class="font-weight-bold" cols="5">
                                                                    Column B<small>(answers)</small>
                                                                </v-col>
                                                            </v-row>
                                                        </v-container>
                                                        <div class="mb-5">
                                                                <v-divider></v-divider>
                                                        </div>
                                                        <v-container class="mb-0 pb-0 " >

                                                            <v-row class="mb-0 pb-0">
                                                                <v-col cols="6" >
                                                                    <v-row>
                                                                        <v-col class="d-flex flex-row pa-0" cols="12" v-for="(List, i) in getAll_questions.Answer[index].SubQuestion" :key="List.id" >
                                                                            <div class="mt-0 pt-0 mb-0 pb-0 pa-0">
                                                                                <v-text-field 
                                                                                outlined
                                                                                dense
                                                                                :style="$vuetify.breakpoint.mdAndUp ? 'max-width:80px' : 'max-width:60px'"
                                                                                hide-details
                                                                                class="centered-input pt-0 mt-0">
                                                                                </v-text-field>
                                                                            </div>
                                                                            <div class="d-flex flex-row mt-3 pl-2"> 
                                                                                <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                                                                <span v-html="List.sub_question" class="subquestion-content"></span>
                                                                            </div>
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <v-row>
                                                                        <v-col cols="12" v-for="(pairList, i) in getAll_questions.Answer[index].SubAnswer" :key="i" class="d-flex flex-row pa-0">
                                                                            <div class="d-flex flex-row mt-3"> 
                                                                                <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                                                                <span v-html="pairList.Choice" class="subchoices-content"></span>
                                                                            </div>
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-col>
                                                            </v-row>
                                                           <!--  <v-row>
                                                                <v-col class="mb-0 pb-0 pt-0 mt-0"  cols="2" md="1">
                                                                    <div class="d-flex">
                                                                         <v-text-field 
                                                                        hide-details
                                                                        class="centered-input">
                                                                        </v-text-field>
                                                                    </div>
                                                                   
                                                                </v-col>

                                                                <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="5">
                                                                    <div class="d-flex mt-7"> 
                                                                        <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                                                        <span v-html="List.sub_question" class="subquestion-content"></span>
                                                                    </div>
                                                                </v-col>
                                                                <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="5">
                                                                    <div class="d-flex mt-7"> 
                                                                        <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                                                        <span v-html="Question.Answer[index].SubAnswer[i].Choice" class="subchoices-content"></span>
                                                                    </div>
                                                                </v-col>
                                                            </v-row> -->
                                                        </v-container>
                                                    </div>
                                                </v-col>
                                                 <v-col cols="12" v-if="item.type == 'Essay'">
                                                    <div>
                                                        <v-list class="pl-3" >
                                                            <v-list-item class="ma-0 pa-0" >
                                                                <v-list-item-content  class="ma-0 pa-0">
                                                                        <quill-editor
                                                                        v-model="TempAnswers[index].answer" 
                                                                        class="Essayeditor"
                                                                        ref="myTextEditor"
                                                                        :options="editorOption"/>
                                                                </v-list-item-content>  
                                                            </v-list-item>
                                                        </v-list>
                                                    </div>
                                                </v-col>
                                          </v-row>
                                    </v-col>
                                </v-row>
                            </div>

                            
                        </v-card>


                        
                    </v-col>
                </v-row>
               
            </v-col>
        </v-row>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
    props:['classworkDetails'],
    computed: mapGetters(["getAll_questions"]),
    data(){
        return{
            questionIndex: 0,
            TempAnswers:[],
            isloaded: false,
              editorOption: {
                placeholder: 'type here ...',
                blur: true,
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [{ 'list': 'bullet' }],
                        ['image']
                    ],
                    syntax: {
                        highlight: text => hljs.highlightAuto(text).value
                    }
                }
            },
            inputCheck:['True','False'],
            Alphabet: [
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
            ],
            QuestionList:[],
            AnswerList:[],

        }
    },
    methods:{
        CloseDialog(){
            let counter = 0;



            this.getAll_questions.Question.forEach(item => {
                if(item.type == 'Matching type'){
                    this.getAll_questions.Answer[counter].Destructors.forEach(des => {
                        let tmp = 0;
                        this.getAll_questions.Answer[counter].SubAnswer.forEach(sub => {
                            if(des.id == sub.id){
                                this.getAll_questions.Answer[counter].SubAnswer.splice(tmp, 1)
                            }
                            tmp++;
                        });
                    });
                }
              counter++;
          });
/* 
          if(counter == this.Question.Question.length){
              
          } */

        this.$emit('closeDialog');
         
        
        },
      MakeTempAnswer(){


          this.getAll_questions.Question.forEach(item => {
                this.TempAnswers.push({answer: null})
          });
         
      },
      SuffleQuestion(){
          let tmpquestion = this.getAll_questions.Question;

        this.QuestionList = this.Shuffle(tmpquestion);

        this.QuestionList.forEach(item => {
            if(item.type == 'Multiple Choice' || item.type == 'Matching type'){
                this.getAll_questions.Answer.forEach(element => {
                    if(item.type == 'Multiple Choice'){
                        if(element.options.length != 0){
                            if(element.options[0].question_id == item.id){
                                this.AnswerList.push(element);
                            }
                        }
                        
                    }
                    else if(item.type == 'Matching type'){
                        if(element.SubAnswer.length != 0){
                            if(element.SubAnswer[0].question_id == item.id){
                                this.AnswerList.push(element);
                            }
                        }
                         
                    }
                });     
            }
            else{
                this.AnswerList.push({options:[], SubQuestion:[], SubAnswer:[]});
            }

            
           
        });
          
         
      },
      LoadDestructor(){
          let counter = 0;
           this.getAll_questions.Question.forEach(item => {
              if(item.type == 'Matching type'){
                  this.getAll_questions.Answer[counter].Destructors.forEach(des => {
                        this.getAll_questions.Answer[counter].SubAnswer.push(des)
                  });
              }
              counter++;
          });
      },
      Shuffle(array){
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
      },
      async loadQuestionAll(){
          if(this.getAll_questions.length == 0){
              this.$store.dispatch('fetchQuestions', this.$route.query.clwk)
                .then((res)=>{
                    this.LoadDestructor();
                    this.isloaded = true;
                }) 
          }else{
            this.LoadDestructor();
             this.isloaded = true;
          }
           
      }
    },
    mounted(){
        this.loadQuestionAll();
    },
    beforeDestroy(){
          this.$emit('closeDialog');
      },
}
</script>
<style scoped>
.centered-input>>>input{
        text-align: center !important;
    }
.post-content  img{
        max-height: 15rem !important;
    }
.Essayeditor{
        height: 10rem !important;
     
    }
</style>