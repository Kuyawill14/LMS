<template>
<div>


    
    <!-- <v-toolbar  dense shaped class="fixed-bar" floating color="primary"  >
        <v-btn dark @click="$emit('closeDialog')" icon>
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-toolbar> -->


    <v-dialog v-model="dialog" persistent max-width="400">
            <resetConfirmation
            v-on:toggleCancelDialog="dialog = !dialog"
            v-on:toggleconfirm="ResetSubmission()"
            :ViewDetails="ViewDetails"
            v-if="dialog"></resetConfirmation>
        </v-dialog>
 
        
          
               <v-row no-gutters align="center" justify="center"> 
                   <v-col cols="12" class="mb-2 mt-0 pt-0">
                       <v-card elevation="2" outlined class="pl-2 pr-4 pb-2">
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
                                           Due: {{ ViewDetails.availability == 1 ? format_date(ViewDetails.to_date) : 'No due date'}}
                                       </v-list-item-subtitle>
                                     
                                   </v-list-item-content>
                                     <v-list-item-action>
                                            <v-list-item-action-text>
                                                <v-btn  @click="$emit('closeDialog')" small text rounded >
                                                    <v-icon small>mdi-close</v-icon> Close
                                                </v-btn>  
                                            </v-list-item-action-text>
                                             <v-spacer></v-spacer>
                                          
                                       </v-list-item-action>
                               </v-list-item>
                           </v-list>
                       </v-card>
                   </v-col>
                   <v-col  cols="12" md="12" lg="10">
                    <v-row  no-gutters>

                    
                   <v-col cols="12" md="4" lg="4" :class="!$vuetify.breakpoint.mdAndUp ? '' : 'pr-3'">
                       <v-container fluid ma-0 pa-0>
                            <v-card elevation="2" outlined class="pt-1 mt-1 pl-4 pr-4 pb-2">
                                    <v-row class="mb-0 pb-0">
                                        <v-col cols="12" class="text-center">
                                            
                                        </v-col>
                                        <v-col cols="12" class="mb-0 pb-0">
                                            <div class="d-flex mb-2 ">
                                                  
                                                <v-btn :disabled="SubmittedLength == 1 || currentIndex == 0" icon @click="PrevStudent()">
                                                   <v-icon>mdi-chevron-left</v-icon>
                                                </v-btn>
                                                <v-spacer></v-spacer>
                                                <div class="text-center">
                                                    <div class="font-weight-medium">
                                                        {{(currentIndex+1)+'/'+SubmittedLength}}
                                                    </div>
                                                     <div>
                                                        <small class="mt-3">Switch Student</small>
                                                    </div>
                                                  
                                                </div>
                                                   
                                                <v-spacer></v-spacer>

                                                <v-btn :disabled="currentIndex == SubmittedLength-1" icon @click="NextStudent()">
                                                    <v-icon>mdi-chevron-right</v-icon>
                                                </v-btn>
                                                  
                                            </div>
                                            <v-divider></v-divider>
                                        </v-col>
                                    </v-row>

                                    <v-list class="pa-0 ma-0">
                                        <v-list-item class="ma-0 pa-0">
                                            <v-list-item-avatar color="secondary">
                                                <v-img alt="Profile"
                                                    :src="ViewDetails.profile_pic == null || ViewDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + ViewDetails.firstName +' '+ViewDetails.lastName : ViewDetails.profile_pic">
                                                </v-img>
                                            </v-list-item-avatar>
                                        
                                            <v-list-item-content>
                                                <v-list-item-title class="font-weight-medium">{{ViewDetails.firstName +' '+ViewDetails.lastName }}</v-list-item-title>
                                                <v-list-item-subtitle v-if="ViewDetails.status != null && ViewDetails.status != ''&&  ViewDetails.status != 'Taking'">Submitted: {{format_date(ViewDetails.updated_at)}}</v-list-item-subtitle>
                                        </v-list-item-content>
                                            <v-list-item-action class="mt-8">
                                                    <v-text-field
                                                    hide-details
                                                    rounded
                                                    v-if="ViewDetails.status == 'Submitted'"
                                                    v-model="ViewDetails.points" 
                                                    dense outlined label="Score" type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points"  min="0"></v-text-field>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                     <v-col  cols="12" class="ma-0 pa-0 pb-4">
                                     
                                         <span class="font-weight-bold">Time Spent: </span><span>{{ViewDetails.timeSpent != null ? ViewDetails.timeSpent+' minutes': ''}}</span>
                                    </v-col>
                                    <v-col  cols="12" class="ma-0 pa-0 pb-2 mt-1">
                                    <v-btn block text rounded v-if="ViewDetails.status == 'Submitted'"
                                     :loading="isReseting" @click="dialog = !dialog" color="primary" ><v-icon left>mdi-restart</v-icon> Reset Submission</v-btn>
                                    </v-col>
                                </v-card>

                            <v-card class="mt-2 mb-1" elevation="2" outlined>
                                    <div class="pt-3 pl-4 pr-4 pb-2">
                                        <v-icon left>mdi-comment</v-icon>Private Comments
                                    </div>
                                    <v-divider></v-divider>
                                    <v-list max-height="350" style="overflow-y:scroll;scrollbar-width: thin;" class="mb-0 pb-0">
                                
                                            <v-list-item class="mb-0 pb-0" v-for="(item, i) in ViewDetails.comments" :key="i">
                                            <v-list-item-avatar color="secondary">
                                                <v-img 
                                                :src="item.profile_pic == null || item.profile_pic == ''? 'https://ui-avatars.com/api/?background=random&color=fff&name=' +  item.name : item.profile_pic">
                                                </v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title v-html="item.name"></v-list-item-title>
                                                <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-btn icon>
                                                <v-icon small color="grey lighten-1">mdi-dots-vertical</v-icon>
                                                </v-btn>
                                            </v-list-item-action>
                                            </v-list-item>
                                    
                                        </v-list>
                                    <v-divider></v-divider>
                                        <v-list class="mb-0 pb-0 mt-0 pt-0">
                                            <v-list-item class="mb-0 pb-0">
                                            <v-list-item-avatar color="secondary">
                                                <v-img 
                                                :src="get_CurrentUser.profile_pic == null || get_CurrentUser.profile_pic == ''? 'https://ui-avatars.com/api/?background=random&color=fff&name=' +  get_CurrentUser.firstName+' '+get_CurrentUser.lastName : get_CurrentUser.profile_pic">
                                                </v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content class="ma-0 pa-0">
                                                <v-textarea
                                                    :loading="isCommenting"
                                                    v-model="comment"
                                                    prepend-avatar="mdi-emoticon-dead"
                                                    filled
                                                    rounded
                                                    dense
                                                    auto-grow
                                                    rows="1"
                                                    clear-icon="mdi-close-circle"
                                                    clearable
                                                    placeholder="Comment"
                                                    class="pa-0 mt-7"
                                                    type="text"
                                                    >
                                                    </v-textarea>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                             
                                                <v-btn :loading="isCommenting" @click="addComment(ViewDetails)" icon>
                                                <v-icon  color="primary">mdi-send</v-icon>
                                                </v-btn>
                                            </v-list-item-action>
                                            </v-list-item>
                                        </v-list>
                            </v-card>
                        </v-container>
                   </v-col>
                <v-col cols="12" md="8" lg="8" class="">

                <v-card style="height:50vh" outlined elevation="1" class=" pa-4 mt-1" v-if="!isLoaded">
                <v-row class="mt-12 pt-12"  justify="center" align-content="center" >
                    <v-col cols="12" sm="8" md="4" class="text-center pb-12 mb-12">
                        <div style="margin-top:8rem">
                             <vue-element-loading :active="!isLoaded" 
                        text="Loading"
                        duration="0.7"
                        :textStyle="{fontSize: '20px'}"
                        spinner="line-scale" color="#EF6C00"  size="60" />
                        </div>
                      
                    </v-col>
                </v-row>
                </v-card>
        

                <v-card outlined elevation="2" class=" pa-4 " v-if="ViewDetails.Submitted_Answers == null || ViewDetails.Submitted_Answers == '' && isLoaded">
                <v-row class="mt-12 pt-12"  justify="center" align-content="center" >
                    <v-col cols="12" sm="8" md="4" class="text-center pb-12 mb-12">
                        <v-icon style="font-size:7rem">
                            mdi-notebook-remove-outline
                        </v-icon>
                        <h1> Empty Submission </h1>
                        <p> This student did not take the classwork yet!</p>
                        <v-btn @click="alertStudent()" :loading="isAlerting" color="primary">Alert Student <v-icon right>mdi-account-alert</v-icon> </v-btn>
                    </v-col>
                </v-row>
                </v-card>
                <v-card elevation="2" outlined class="pa-5 mt-1" v-if="ViewDetails.Submitted_Answers != null && ViewDetails.Submitted_Answers != '' && isLoaded">

                    <div class="d-flex mb-2">
                        <div class="d-flex">
                            <v-menu offset-y max-height="600" style="overflow-y:scroll;">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon
                                    dark
                                    v-bind="attrs"
                                    v-on="on">
                                <v-icon color="primary">mdi-format-list-numbered</v-icon> </v-btn>
                            </template>
                            <v-list  >
                                <v-list-item class="ma-0 pa-0" v-for="(item, index) in getAll_questions.Question" :key="index">
                                <v-list-item-title>  
                                    <v-btn v-if="item.type == 'Multiple Choice' || item.type == 'Identification' || item.type == 'True or False'|| item.type == 'Essay'" 
                                    text rounded @click="questionIndex = index">
                                    <v-icon :color="!Check[index]  ? '' : 'success'" left>{{!Check[index] ? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked'}}</v-icon>
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
                            <v-btn class="pl-9 pr-9" :disabled="questionIndex == getAll_questions.Question.length-1" @click="questionIndex++" color="primary" rounded>
                                Next
                            </v-btn>
                        </div>
                        
                    </div>
                   
                    <v-container ma-0 pa-0 v-for="(item, index) in getAll_questions.Question" :key="index">
                        <v-row v-if="index === questionIndex">
                            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0" >
                                    <v-list>
                                    <v-list-item class="ma-0 pa-0">
                                        <v-list-item-icon class="ma-0 pa-0 mt-2">
                                                <v-checkbox
                                                v-if="item.type != 'Matching type'"
                                            hide-details
                                            @click="UpdateScore(item.type ,item.id, Check[index], item.points, index,item.answer)"
                                            class="mt-0 pt-0"
                                            color="success"
                                            v-model="Check[index]"
                                            ></v-checkbox>
                                        </v-list-item-icon>
                                        <v-list-item-content class="subtitle-1 ">
                                            <div class="d-flex">
                                                    <div style="width:90%" v-html="item.question" class="post-content pl-1"></div>
                                            </div>
                                            
                                        </v-list-item-content>
                                        <v-list-item-action class="ma-0 pa-0">
                                            <small class="primary--text ">({{item.points+' points'}})</small>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0" v-if="item.type == 'Multiple Choice'">
                                <div>
                                    <v-list class="pl-6" >
                                        <v-list-item class="ma-0 pa-0"  v-for="(Ans, i) in getAll_questions.Answer[index].options" :key="i">
                                            <v-list-item-icon class="ma-0 pa-0 ">
                                                <v-radio-group hide-details :name="'option'+index"  class="ma-0 pa-0 mt-1" v-model="SubmittedAnswer[index].Answer">
                                                    <v-radio
                                                     :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                    hide-details
                                                    color="primary"
                                                    :key="index"
                                                    :value="Ans.Choice">
                                                    </v-radio>
                                                </v-radio-group>
                                            </v-list-item-icon>
                                            <v-list-item-content class="ma-0 pa-0">
                                                <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex">
                                                    <span v-html="Ans.Choice" class="post-content"></span>
                                                    <span class="caption primary--text ml-1" v-if="item.answer == Ans.Choice">(correct answer)</span>
                                                </div>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </v-col>
                            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0" v-if="item.type == 'Identification'">
                                    <div>
                                    <v-list class="pl-6" >
                                        <v-list-item class="ma-0 pa-0"  >
                                            <v-list-item-content class="ma-0 pa-0 ">
                                                <div>
                                                    Correct Answer(s):
                                                </div>
                                                <div v-if="getAll_questions.Answer[index].options.length == 0" class=" ma-0 pa-0 d-flex pl-3 success--text">
                                                    <span class="pr-2">&bull; </span>
                                                    <span v-html="item.answer" class="post-content pa-0 ma-0"></span>
                                                </div>
                                                <div>
                                                    <div v-for="(Ans, i) in getAll_questions.Answer[index].options" :key="i"  class=" ma-0 pa-0 d-flex pl-3 success--text">
                                                        <span class="pr-2">&bull; </span>
                                                        <span v-html="Ans.Choice" class="post-content pa-0 ma-0"></span>
                                                    </div>
                                                </div>
                                               

                                                <div class="primary--text">
                                                    Student Answer:
                                                </div>
                                                <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex pl-3 primary--text">
                                                    <span class="pr-2">&bull; </span>
                                                        <span v-html="SubmittedAnswer[index].Answer" class="post-content"></span>
                                                        <span v-if="SubmittedAnswer[index].Answer == null"  class="post-content"> N/A</span>
                                                </div>
                                            </v-list-item-content>  
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </v-col>
                            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0" v-if="item.type == 'True or False'">
                                    <div>
                                    <v-list class="pl-6" >
                                        <v-list-item class="ma-0 pa-0"  v-for="(x, n) in inputCheck" :key="n">
                                            <v-list-item-icon class="ma-0 pa-0">
                                                <v-radio-group hide-details  :name="'option'+index"   class="ma-0 pa-0 mt-1"  v-model="SubmittedAnswer[index].Answer">
                                                    <v-radio
                                                     :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                    color="primary"
                                                    :key="index"
                                                    name="Answer" 
                                                    :value="inputCheck[n]">
                                                    ></v-radio>
                                                </v-radio-group>
                                            </v-list-item-icon>
                                            <v-list-item-content  class="ma-0 pa-0">
                                                <div  style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex">
                                                    
                                                    <span v-html="TrueOrFalse[n]"></span>
                                                        <span class="caption primary--text ml-1 " v-if="inputCheck[n] == SubmittedAnswer[index].Answer">(correct answer)</span>
                                                </div>
                                            </v-list-item-content>  
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </v-col>
                            <v-col cols="12" class="mt-0 pt-0 mb-5 pb-0" v-if="item.type == 'Matching type'">
                                <div class="pl-5">
                                    <v-row no-gutters>
                                        <v-col ma-0 pa-0 class="ma-0 pa-0" cols="12"  >
                                            <v-container class="ma-0 pa-0">
                                                <v-container>
                                                    <v-row>
                                                        <v-col class="font-weight-bold" cols="2" md="2" lg="2">
                                                            
                                                        </v-col>
                                                        <v-col class="font-weight-bold" cols="5" md="5" lg="5">
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
                                                        <v-col class="mb-1 pb-0 pt-0 mt-0 mr-0 pr-0  text-center" cols="2" md="1" lg="1">
                                                            <v-checkbox
                                                                hide-details
                                                                class="mt-4 pr-0 mr-0"
                                                                color="success"
                                                                v-model="Check[index][i]"
                                                                ></v-checkbox>
                                                        </v-col>
                                                        <v-col class="ml-0 pl-0 mb-1 pb-0 pt-0 mt-0" cols="2" md="1" lg="1">
                                                            <v-text-field hide-details readonly class="ml-0 pl-0 centered-input" v-model="item.Ans_Letter">
                                                            </v-text-field>
                                                        </v-col>
                                                        <v-col class="mb-1 pb-0 pt-0 mt-0" cols="4" md="5" lg="5">
                                                            <div class="d-flex mt-7">
                                                                <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                                                <span :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" v-html="item.SubQuestion" class="subquestion-content"></span>
                                                                <small v-if="!Check[index][i]" class="primary--text">(correct answer: {{item.Correct_Answer}})</small>
                                                            </div>
                                                        </v-col>
                                                        <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="4" md="4" lg="5">
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
                                </div>
                            </v-col>
                            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0" v-if="item.type == 'Essay'">
                                <div class="mt-0 pt-0">
                                    <v-list class="pl-6" >
                                        <v-list-item class="ma-0 pa-0"  >
                                            <v-list-item-content class="ma-0 pa-0 ">

                                                <div class="primary--text">
                                                    Student Answer:
                                                </div>
                                                <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex pl-3">
                                                    <span class="pr-2">&bull; </span>
                                                    <span v-html="SubmittedAnswer[index].Answer" class="post-content"></span>
                                                    <span v-if="SubmittedAnswer[index].Answer == null"  class="post-content"> N/A</span>
                                                </div>
                                            </v-list-item-content>  
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </v-col>
                        </v-row>
                </v-container>
            </v-card>
        </v-col>
        </v-row>
    </v-col>
        
    </v-row>

</div>
</template>
<script>
import moment from 'moment-timezone';
const resetConfirmation = () => import('../../dialogs/resetConfirmation')
 import {mapGetters, mapActions } from "vuex";
 
  export default {
      props:["classworkDetails", "ViewDetails","SubmittedLength", "currentIndex"],
      components:{
          resetConfirmation
      },
      data(){
          return{
            Qlength: null,
            Check: [],
            isLoading: true,
            inputCheck:['True','False'],
            TrueOrFalse:['<p>True</p>','<p>False</p>'],
            SubmittedAnswer:[],
            UpdateDetails:{},
            dialog: false,
            Alphabet: null,
            isCommenting:false,
            comment: null,
            isAlerting: false,
            isReseting: false,
            isScrolling: false,
            isLoaded: false,
            questionIndex: 0,
          }
      },
      computed:mapGetters(['get_CurrentUser','getAll_questions']),
      methods:{
           format_date(value) {
            if (value) {
                //return moment(String(value)).format('MM/d/YYYY, hh:mm A');
                return moment(String(value)).tz("Asia/Manila").format('MM/d/YYYY, hh:mm A');
                
            }
        },
          fetchQuestions(){
            this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then((res)=>{

                let Submitted_length = this.ViewDetails.Submitted_Answers.length;
                let Question_length = this.getAll_questions.Question.length;
                let diff = Question_length  - Submitted_length;
                
                 let counter;
                for (let j = 0; j < Question_length; j++) {
                    counter = 0;
                   for (let k = 0; k < Submitted_length; k++) {
                        if(this.getAll_questions.Question[j].id != this.ViewDetails.Submitted_Answers[k].Question_id){
                            counter++;
                        }
                   }
                   if(counter == Submitted_length){
                        if(this.getAll_questions.Question[j].type == 'Multiple Choice' || this.getAll_questions.Question[j].type == 'Identification' || this.getAll_questions.Question[j].type == 'True or False'){
                            this.ViewDetails.Submitted_Answers.push({
                                Answer: null,
                                Question_id: this.getAll_questions.Question[j].id,
                                timeConsume: null,
                                type: this.getAll_questions.Question[j].type
                            })
                        }
                        else if(this.getAll_questions.Question[j].type == 'Essay'){
                            this.ViewDetails.Submitted_Answers.push({
                                Answer: null,
                                Question_id: this.getAll_questions.Question[j].id,
                                timeConsume: null,
                                type: this.getAll_questions.Question[j].type,
                                check: false
                            })
                        }
                        else if(this.getAll_questions.Question[j].type == 'Matching type'){
                             this.ViewDetails.Submitted_Answers.push({
                                Answer:[], 
                                type: 'Matching type',
                                Question_id: this.getAll_questions.Question[j].id,
                                Choices_id:[], 
                            })
                            let counter = 0;
                             this.getAll_questions.Answer[j].SubQuestion.forEach(item => {
                                 this.ViewDetails.Submitted_Answers[this.ViewDetails.Submitted_Answers.length-1].Choices_id.push({
                                   choice_id: this.getAll_questions.Answer[j].SubAnswer[counter].id,
                                })
                                 this.ViewDetails.Submitted_Answers[this.ViewDetails.Submitted_Answers.length-1].Answer.push({
                                    Ans_id: null,
                                    Ans_letter: null,
                                    Answers: null,
                                    subquestion_id: item.id,
                                })
                                counter++;
                            });
                        }
                   }
                    
                }
               
                for (let i = 0; i < this.getAll_questions.Question.length; i++) {

                    for (let j = 0; j < this.ViewDetails.Submitted_Answers.length; j++) {
                        if(this.getAll_questions.Question[i].id == this.ViewDetails.Submitted_Answers[j].Question_id){

                            

                            if(this.getAll_questions.Question[i].type == 'Multiple Choice' || this.getAll_questions.Question[i].type == 'Identification' || this.getAll_questions.Question[i].type == 'True or False'){
                                let student_ans = this.getAll_questions.Question[i].sensitivity ? this.ViewDetails.Submitted_Answers[j].Answer : 
                            this.ViewDetails.Submitted_Answers[j].Answer != null && this.ViewDetails.Submitted_Answers[j].Answer != '' ? this.ViewDetails.Submitted_Answers[j].Answer.toLowerCase() : this.ViewDetails.Submitted_Answers[j].Answer;
                                this.SubmittedAnswer[i] =  this.ViewDetails.Submitted_Answers[j];
                               
                                if(this.getAll_questions.Question[i].type == 'Identification'){
                                    if(this.getAll_questions.Answer[i].options.length == 0){
                                        let Question_answer = this.getAll_questions.Question[i].sensitivity ? this.getAll_questions.Question[i].answer : 
                                        this.getAll_questions.Question[i].answer != null && this.getAll_questions.Question[i].answer != '' ? this.getAll_questions.Question[i].answer.toLowerCase() : this.getAll_questions.Question[i].answer;
                                        if(Question_answer == student_ans){
                                            this.Check[i] = true;
                                        }
                                        else{
                                            this.Check[i] = false;
                                        }
                                    }
                                    else{
                                        this.Check[i] = false;
                                        this.getAll_questions.Answer[i].options.forEach(item => {
                                            let Question_answer = this.getAll_questions.Question[i].sensitivity ? item.Choice : 
                                            item.Choice != null && item.Choice != '' ? item.Choice.toLowerCase() :  item.Choice;
                                            if(student_ans == Question_answer){
                                                this.Check[i] = true;
                                            }
            
                                        });
                                    }
                                    
                                }
                                else{
                                    let Question_answer = this.getAll_questions.Question[i].sensitivity ? this.getAll_questions.Question[i].answer : 
                                    this.getAll_questions.Question[i].answer != null && this.getAll_questions.Question[i].answer != '' ? this.getAll_questions.Question[i].answer.toLowerCase() : this.getAll_questions.Question[i].answer;
                                     if(Question_answer == student_ans){
                                        this.Check[i] = true;
                                    }
                                    else{
                                        this.Check[i] = false;
                                    }
                                }
                            }
                            else if(this.getAll_questions.Question[i].type == 'Essay'){
                                this.SubmittedAnswer[i] =  this.ViewDetails.Submitted_Answers[j];
                                this.Check[i] = this.ViewDetails.Submitted_Answers[j].check;
                            }
                            else if(this.getAll_questions.Question[i].type == 'Matching type'){
                                    let Ans = new Array();
                                    let match_check = new Array();
                                    let counter = 0;
                                    this.ViewDetails.Submitted_Answers[j].Answer.forEach(item => {
                                        for (let x = 0; x < this.getAll_questions.Answer[i].SubQuestion.length; x++) {
                                            if(this.getAll_questions.Answer[i].SubQuestion[x].id == item.subquestion_id){
                                                Ans.push({
                                                    Ans_Letter: item.Ans_letter,
                                                    Answer: item.Answers,
                                                    SubQuestion: this.getAll_questions.Answer[i].SubQuestion[x].sub_question,
                                                    SubChoice: this.getAll_questions.Answer[i].SubAnswer[x].Choice,
                                                    Correct_Answer: null
                                                })

                                                if(this.getAll_questions.Answer[i].SubAnswer[x].Choice == item.Answers){
                                                    match_check[counter] = true;
                                                   
                                                }
                                                else{
                                                    match_check[counter] = false;
                                                    //Ans[x].Correct_Answer = this.Alphabet[x]
                                                }
                                            }
                                                                
                                        }
                                        counter+=1;   
                                       
                                    });  
                                    let tmpChoices = new Array();
                                    this.ViewDetails.Submitted_Answers[j].Choices_id.forEach(item => {
                                        this.getAll_questions.Answer[i].SubAnswer.forEach(choice => {
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
                                    this.Check[i] = match_check;
                                }
                        }
                        
                    }
                    
                }
    
                this.isLoaded = true;
                this.$emit('isMounted');
            });

        },
        ReMatchQuestions(){
               
                let Submitted_length = this.ViewDetails.Submitted_Answers.length;
                let Question_length = this.getAll_questions.Question.length;
                let diff = Question_length  - Submitted_length;
                
                 let counter;
                for (let j = 0; j < Question_length; j++) {
                    counter = 0;
                   for (let k = 0; k < Submitted_length; k++) {
                        if(this.getAll_questions.Question[j].id != this.ViewDetails.Submitted_Answers[k].Question_id){
                            counter++;
                        }
                   }
                   if(counter == Submitted_length){
                        if(this.getAll_questions.Question[j].type == 'Multiple Choice' || this.getAll_questions.Question[j].type == 'Identification' || this.getAll_questions.Question[j].type == 'True or False'){
                            this.ViewDetails.Submitted_Answers.push({
                                Answer: null,
                                Question_id: this.getAll_questions.Question[j].id,
                                timeConsume: null,
                                type: this.getAll_questions.Question[j].type
                            })
                        }
                        else if(this.getAll_questions.Question[j].type == 'Essay'){
                            this.ViewDetails.Submitted_Answers.push({
                                Answer: null,
                                Question_id: this.getAll_questions.Question[j].id,
                                timeConsume: null,
                                type: this.getAll_questions.Question[j].type,
                                check: false
                            })
                        }
                        else if(this.getAll_questions.Question[j].type == 'Matching type'){
                             this.ViewDetails.Submitted_Answers.push({
                                Answer:[], 
                                type: 'Matching type',
                                Question_id: this.getAll_questions.Question[j].id,
                                Choices_id:[], 
                            })
                            let counter = 0;
                             this.getAll_questions.Answer[j].SubQuestion.forEach(item => {
                                 this.ViewDetails.Submitted_Answers[this.ViewDetails.Submitted_Answers.length-1].Choices_id.push({
                                   choice_id: this.getAll_questions.Answer[j].SubAnswer[counter].id,
                                })
                                 this.ViewDetails.Submitted_Answers[this.ViewDetails.Submitted_Answers.length-1].Answer.push({
                                    Ans_id: null,
                                    Ans_letter: null,
                                    Answers: null,
                                    subquestion_id: item.id,
                                })
                                counter++;
                            });
                        }
                   }
                    
                }
               
                for (let i = 0; i < this.getAll_questions.Question.length; i++) {

                    for (let j = 0; j < this.ViewDetails.Submitted_Answers.length; j++) {
                        if(this.getAll_questions.Question[i].id == this.ViewDetails.Submitted_Answers[j].Question_id){
                            let student_ans = this.getAll_questions.Question[i].sensitivity ? this.ViewDetails.Submitted_Answers[j].Answer : 
                            this.ViewDetails.Submitted_Answers[j].Answer != null && this.ViewDetails.Submitted_Answers[j].Answer != '' ? this.ViewDetails.Submitted_Answers[j].Answer.toLowerCase() : this.ViewDetails.Submitted_Answers[j].Answer;
                            if(this.getAll_questions.Question[i].type == 'Multiple Choice' || this.getAll_questions.Question[i].type == 'Identification' || this.getAll_questions.Question[i].type == 'True or False'){
                                this.SubmittedAnswer[i] =  this.ViewDetails.Submitted_Answers[j];

                                if(this.getAll_questions.Question[i].type == 'Identification'){
                                    if(this.getAll_questions.Answer[i].options.length == 0){
                                        let Question_answer = this.getAll_questions.Question[i].sensitivity ? this.getAll_questions.Question[i].answer : 
                                        this.getAll_questions.Question[i].answer != null && this.getAll_questions.Question[i].answer != '' ? this.getAll_questions.Question[i].answer.toLowerCase() : this.getAll_questions.Question[i].answer;
                                        if(Question_answer == student_ans){
                                            this.Check[i] = true;
                                        }
                                        else{
                                            this.Check[i] = false;
                                        }
                                    }
                                    else{
                                        this.Check[i] = false;
                                        this.getAll_questions.Answer[i].options.forEach(item => {
                                            let Question_answer = this.getAll_questions.Question[i].sensitivity ? item.Choice : 
                                            item.Choice != null && item.Choice != '' ? item.Choice.toLowerCase() :  item.Choice;
                                            if(student_ans == Question_answer){
                                                this.Check[i] = true;
                                            }
            
                                        });
                                    }
                                    
                                }
                                else{
                                    let Question_answer = this.getAll_questions.Question[i].sensitivity ? this.getAll_questions.Question[i].answer : 
                                    this.getAll_questions.Question[i].answer != null && this.getAll_questions.Question[i].answer != '' ? this.getAll_questions.Question[i].answer.toLowerCase() : this.getAll_questions.Question[i].answer;
                                     if(Question_answer == student_ans){
                                        this.Check[i] = true;
                                    }
                                    else{
                                        this.Check[i] = false;
                                    }
                                }
                               
                            }
                            else if(this.getAll_questions.Question[i].type == 'Essay'){
                                this.SubmittedAnswer[i] =  this.ViewDetails.Submitted_Answers[j];
                                this.Check[i] = this.ViewDetails.Submitted_Answers[j].check;
                            }
                            else if(this.getAll_questions.Question[i].type == 'Matching type'){
                                    let Ans = new Array();
                                    let match_check = new Array();
                                    let counter = 0;
                                    this.ViewDetails.Submitted_Answers[j].Answer.forEach(item => {
                                        for (let x = 0; x < this.getAll_questions.Answer[i].SubQuestion.length; x++) {
                                            if(this.getAll_questions.Answer[i].SubQuestion[x].id == item.subquestion_id){
                                                Ans.push({
                                                    Ans_Letter: item.Ans_letter,
                                                    Answer: item.Answers,
                                                    SubQuestion: this.getAll_questions.Answer[i].SubQuestion[x].sub_question,
                                                    SubChoice: this.getAll_questions.Answer[i].SubAnswer[x].Choice,
                                                    Correct_Answer: null
                                                })

                                                if(this.getAll_questions.Answer[i].SubAnswer[x].Choice == item.Answers){
                                                    match_check[counter] = true;
                                                   
                                                }
                                                else{
                                                    match_check[counter] = false;
                                                    //Ans[x].Correct_Answer = this.Alphabet[x]
                                                }
                                            }
                                                                
                                        }
                                        counter+=1;   
                                       
                                    });  
                                    let tmpChoices = new Array();
                                    this.ViewDetails.Submitted_Answers[j].Choices_id.forEach(item => {
                                        this.getAll_questions.Answer[i].SubAnswer.forEach(choice => {
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
                                    this.Check[i] = match_check;
                                }
                        }
                        
                    }
                    
                }
                
                this.isLoaded = true;
            
       

        },
        async UpdateScore(type, id, data, points,index,answer){
            this.UpdateDetails.check = data;
            this.UpdateDetails.points = points;
            this.UpdateDetails.question_id = id;
            this.UpdateDetails.answer = answer;
            this.UpdateDetails.user_id = this.ViewDetails.user_id;
            
            //this.UpdateDetails.type = type;
            axios.put('/api/teacher/update-score/'+this.ViewDetails.id, this.UpdateDetails)
            .then(res=>{
                if(res.status == 200){
                    if(type == 'Essay'){
                         if(data == true){
                            this.ViewDetails.points = this.ViewDetails.points + points;
                        }else{
                            this.ViewDetails.points = this.ViewDetails.points - points;
                        }
                    }
                    else{
                         if(data == true){
                            this.SubmittedAnswer[index] = answer;
                            this.ViewDetails.points = this.ViewDetails.points + points;
                        }else{
                            this.SubmittedAnswer[index] = "";
                            this.ViewDetails.points = this.ViewDetails.points - points;
                        }
                    }
                   
                }
            })
        },
         async ResetSubmission(){
            //////console.log(this.ListData[this.resetIndex].points)
            this.isReseting = true;
            if(this.ViewDetails.status != null && this.ViewDetails.status != ''){
                axios.put('/api/teacher/reset-obj/'+this.ViewDetails.id)
                .then(res=>{
                    if(res.status == 200){
                        this.dialog = !this.dialog;
                        this.isReseting = false;
                        this.$emit('RestSubmission')
                    }
            
                })
            }
            
        },
           async addComment(details){
              let data = {};
              this.isCommenting = true;
              data.classwork_id = details.classwork_id;
              data.course_id = this.$route.params.id;
              data.to_user = details.user_id;
              data.type = 'Private';
              data.comment = this.comment;
              axios.post('/api/post/classwork/comment/insert', data)
              .then((res)=>{
                  if(res.status == 200 ){
                    this.ViewDetails.comments.push({
                        content : res.data.comment,
                        id : res.data.id,
                        name : this.get_CurrentUser.firstName+' '+this.get_CurrentUser.lastName,
                        profile_pic : this.get_CurrentUser.profile_pic
                        })
                    this.comment = null;
                  }
                  
              })
               this.isCommenting = false;
          },

          async alertStudent(){
              let data = {};
              this.isAlerting = true;
              data.user_id = this.ViewDetails.user_id;
              data.classwork_name = this.classworkDetails.title;
              data.classwork_id = this.classworkDetails.id;
              data.course_id = this.classworkDetails.course_id;
              data.firstName = this.ViewDetails.firstName;
              axios.post('/api/teacher/alert-student',data)
              .then((res)=>{
                  if(res.data.success == true){
                      this.toastSuccess(res.data.message);
                      this.isAlerting = false;
                  }
              })
          },
          async NextStudent(){
            this.questionIndex = 0;
            this.SubmittedAnswer = [];
            this.Check = [];
            this.isLoaded = false;
            this.$emit("nextStudent");
            setTimeout(() => (this.ReMatchQuestions()),300);
          },
          async PrevStudent(){
            this.questionIndex = 0;
            this.SubmittedAnswer = [];
            this.Check = [];
            this.isLoaded = false;
            this.$emit("prevStudent");
            setTimeout(() => (this.ReMatchQuestions()),300);
          }
          
     
      },
      beforeDestroy(){
          this.$emit('closeDialog');
      },
    
      mounted(){
            if(this.ViewDetails.Submitted_Answers != null && this.ViewDetails.Submitted_Answers != ''){
                this.fetchQuestions();
            }
            else{
                this.isLoaded = true;
                this.$emit('isMounted');
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
        },
        created(){
            this.$emit('isMounted');
        }
  }
</script>
<style scoped>
.post-content  img{
        max-height: 15rem !important;
    }
 .fixed-bar {
    position: sticky;
    position: -webkit-sticky; /* for Safari */
    top: 0em;
    z-index: 2;
 }
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
  .centered-input >>> input {
      text-align: center
    }
    .post-content img{
        
     max-height: 8rem !important;
}
 .centered-input input {
  text-align: center
 }
 /* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>

