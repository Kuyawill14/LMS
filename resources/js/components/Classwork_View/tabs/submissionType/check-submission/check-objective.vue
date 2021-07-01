<template>
  
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="$emit('closeDialog')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

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
           <v-container v-if="!isLoading" class="mt-5">
               <v-row>
                   <v-col class="12" md="9" lg="9">
                       <div class="d-flex justify-space-between">
                        <div class="d-flex">
                            <v-avatar color="brown" size="40">
                                <v-img alt="Profile"
                                    :src="ViewDetails.profile_pic == null || ViewDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + ViewDetails.name : ViewDetails.profile_pic">
                                </v-img>
                            </v-avatar>
                            <div>
                                <h4 style="line-height:1.0" class="font-weight-medium ml-2 mt-1 mb-0 pb-0">{{ViewDetails.name}}</h4>
                               <div class="ml-2 caption">Submitted: {{format_date(ViewDetails.updated_at)}}</div>
                            </div>
                        </div>
                        <div>
                          <!--   @keyup="SaveScore()" :loading="isSavingScore"  -->
                            <v-text-field  :style="$vuetify.breakpoint.xs ? 'width:50%' :'width:40%'" 
                            class="mt-1 float-right" v-model="ViewDetails.points" 
                            dense outlined label="Score"></v-text-field>
                        </div>
                    </div>
                   </v-col>
               </v-row>

                <v-container ma-0 pa-0 v-for="(item, index) in getAll_questions.Question" :key="index">
                    <v-container ma-0 pa-0 class="ma-0 pa-0">
                        <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1': ''" class="subtitle-1 d-flex"> 
                            <v-checkbox
                          
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
                              <span v-html="item.question" class="post-content ml-1"></span>
                             <small class="primary--text ml-1">({{item.points+' points'}})</small>
                             </div>
                    </v-container> 
               
                 <v-container v-if="item.type == 'Multiple Choice'">
                     <v-container class="d-flex flex-row ma-0 pa-0 mb-1 ml-8" v-for="(Ans, i) in getAll_questions.Answer[index]" :key="i">
                        <v-radio-group :name="'option'+index"  class="ma-0 pa-0" v-model="SubmittedAnswer[index].Answer">
                            <v-radio
                            color="primary"
                            :key="index"
                            :value="Ans.Choice"
                            ></v-radio>
                            </v-radio-group>
                            <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex">
                                <span v-html="Ans.Choice" class="post-content"></span>
                                <span class="caption primary--text ml-1 mt-1" v-if="item.answer == Ans.Choice">(correct answer)</span>
                            </div>
                           <!--   <div class="Subtitle-1 ">
                                    <span v-html="Ans.Choice" class="post-content"></span>
                                    <span class="caption primary--text ml-1 mt-1" v-if="getQuestion.answer == Ans.Choice">(correct answer)</span>
                                </div> -->
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
                       <v-container class="d-flex flex-row ma-0 pa-0 ml-8" v-for="(x, n) in inputCheck" :key="n">
                        <v-radio-group :name="'option'+index"   class="ma-0 pa-0"  v-model="SubmittedAnswer[index].Answer">
                            <v-radio
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
           </v-container>
        
        
            
      </v-card>
  

</template>
<script>
import moment from 'moment';
 import {mapGetters, mapActions } from "vuex";
 
  export default {
      props:["classworkDetails", "ViewDetails"],
      data(){
          return{
            Qlength: null,
            Details: [],
            Check: [],
            isLoading: true,
            inputCheck:['True','False'],
            SubmittedAnswer:[]
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
                console.log(res);
                this.Details = res[0];
                for (let i = 0; i < this.Details.Question.length; i++) {
                    for (let j = 0; j < this.ViewDetails.Submitted_Answers.length; j++) {
                        if(this.Details.Question[i].id == this.ViewDetails.Submitted_Answers[j].Question_id){
                            this.SubmittedAnswer[i] =  this.ViewDetails.Submitted_Answers[j];
                            if(this.Details.Question[i].answer == this.ViewDetails.Submitted_Answers[j].Answer){
                                this.Check[i] = true;
                            }
                            else{
                                this.Check[i] = false;
                            }
                            
                        }
                        
                    }
                    
                }
                console.log(this.ViewDetails.Submitted_Answers);
              
                this.isLoading = false;
                
            });

        },
      },
      mounted(){
          this.fetchQuestions();
          //console.log(this.ViewDetails)
      }
  }
</script>
