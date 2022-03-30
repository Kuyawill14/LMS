<template>
    <div>
        <v-row no-gutters v-if="isloaded">
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
                                                    <v-icon small>mdi-close</v-icon> Close
                                                </v-btn> 
                                            </template>
                                            <span>Close Preview</span>
                                        </v-tooltip>
                                    </v-list-item-action-text>
                                        <v-spacer></v-spacer>
                                     <previewTimer  :duration="classworkDetails.duration" ></previewTimer>
                                </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>

            <v-col cols="12" class="mt-2">
                <v-row align="center" justify="center">
                    <v-col cols="12" class="pb-10"  md="8">
                         <v-card min-height="400"  class="pa-3 pt-8" elevation="5" outlined>
                            <div class="d-flex mb-2">
                                <div class="d-flex">
                                    <v-menu offset-y max-height="600" style="overflow-y:scroll;">
                                <!--     <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon
                                            dark
                                            v-bind="attrs"
                                            v-on="on">
                                        <v-icon color="primary">mdi-format-list-numbered</v-icon> </v-btn>
                                    </template> -->
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
                                        <v-list-item class="ma-0 pa-0" v-for="(item, index) in Question.Question" :key="index">
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
                                    <v-btn class="pl-9 pr-9" :disabled="questionIndex == Question.Question.length-1" @click="questionIndex++" color="primary" rounded>
                                        Next
                                    </v-btn>
                                </div>
                                
                            </div>
                            <div>
                                <v-row ma-0 pa-0 v-for="(item, index) in Question.Question" :key="index">
                                    <v-col v-if="index == questionIndex" cols="12" class="pa-7">
                                        <v-row>
                                            <v-col cols="12" class="mb-0 pb-0">
                                                <div :style="!$vuetify.breakpoint.mdAndUp ? 'line-height:1.1':'line-height:1.5'" class="d-flex justify-space-between">
                                                    <span v-html="item.question" class="post-content"></span>
                                                    <span >{{item.points}} point</span>
                                                </div>

                                                 <v-row v-if="item.attachments">
                                                    <v-col v-for="(attach, num) in item.attachments" :key="num"  cols="6" md="3">
                                                        <v-img alt="Image" contain style="border:1px solid black" class="white--text ma-0 pa-0" 
                                                         :src="attach.link" :height="$vuetify.breakpoint.mdAndUp ? '200' : '120'">
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
                                            </v-col>
                                            <v-col cols="12" v-if="item.type == 'Multiple Choice'">
                                                <div>
                                                    <v-list class="pl-8" >
                                                        <v-list-item class="ma-0 pa-0"  v-for="(Ans, i) in Question.Answer[index].options" :key="i">
                                                            <v-list-item-icon class="ma-0 pa-0">
                                                                <v-radio-group hide-details :name="'option'+item.id" v-model="TempAnswers[index].answer"  class="ma-0 pa-0 mt-1" >
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
                                                        <v-list>
                                                            <v-list-item>
                                                                <v-list-item-content>
                                                                     <quill-editor
                                                                    v-model="TempAnswers[index].answer" 
                                                                    ref="myTextEditor"
                                                                    :options="editorOption"/>
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
                                                                    <v-radio-group hide-details  v-model="TempAnswers[index].answer">
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
                                                                        <v-col class="d-flex flex-row pa-0" cols="12" v-for="(List, i) in Question.Answer[index].SubQuestion" :key="List.id" >
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
                                                                        <v-col cols="12" v-for="(pairList, i) in Question.Answer[index].SubAnswer" :key="i" class="d-flex flex-row pa-0">
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
const previewTimer= () => import('./previewTimer')
export default {
    props:['classworkDetails','Question'],
    components:{
        previewTimer
    },
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



            this.Question.Question.forEach(item => {
                if(item.type == 'Matching type'){
                    this.Question.Answer[counter].Destructors.forEach(des => {
                        let tmp = 0;
                        this.Question.Answer[counter].SubAnswer.forEach(sub => {
                            if(des.id == sub.id){
                                this.Question.Answer[counter].SubAnswer.splice(tmp, 1)
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


          this.Question.Question.forEach(item => {
                this.TempAnswers.push({answer: null})
          });
         
      },
      SuffleQuestion(){
          let tmpquestion = this.Question.Question;

        this.QuestionList = this.Shuffle(tmpquestion);

        this.QuestionList.forEach(item => {
            if(item.type == 'Multiple Choice' || item.type == 'Matching type'){
                this.Question.Answer.forEach(element => {
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
          
        console.log(this.Shuffle(this.Question.Question));
         
      },
      LoadDestructor(){
          let counter = 0;
           this.Question.Question.forEach(item => {
              if(item.type == 'Matching type'){
                  this.Question.Answer[counter].Destructors.forEach(des => {
                        this.Question.Answer[counter].SubAnswer.push(des)
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
      }
    },
    created(){
        //this.MakeTempAnswer();
        
          this.Question.Question.forEach(item => {
                this.TempAnswers.push({answer: null})
          });
           this.isloaded = true;
    },
    mounted(){
        //this.SuffleQuestion();
        this.LoadDestructor();
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

<style >
  
</style>