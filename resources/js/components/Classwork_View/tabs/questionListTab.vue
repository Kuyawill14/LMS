<template>
<div class="pa-1">
    <v-overlay :value="isLeaving">
        <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular>
    </v-overlay>


    <v-dialog v-model="dialog" persistent max-width="370">
            <deleteDialog 
            :DeleteDetails="DeleteDetails"
            v-on:toggleDialog="dialog = !dialog, isRemoving = false"
            v-on:reloadList="fetchQuestions(), dialog = !dialog, isRemoving = false"
            
            v-if="dialog"></deleteDialog>
        </v-dialog>

    <v-container class="fill-height" v-if="isloading" style="height: 500px;">
       <v-row  align-content="center" justify="center">
            <v-col cols="12" class="text-center">
                <v-progress-circular
                :size="40"
                color="primary"
                indeterminate
                ></v-progress-circular>
            </v-col>
        </v-row>
    </v-container>


  <v-row  justify="center" v-if="Qlength == 0 && !isFetching">
    <v-col cols="12" sm="8" md="4" class="text-center">
        <v-icon style="font-size:10rem">
            mdi-book-open-variant
        </v-icon>
        <h1> Empty Question </h1>
        <p> Start adding question for this classwork.</p>
        <v-btn color="primary" @click="$router.push({name: 'add-question',query: {clwk: $route.query.clwk} })"> Add Question </v-btn>
    </v-col>
</v-row>

  <v-container v-if="!isloading && Qlength != 0" pa-0 ma-0  fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" md="8" lg="9" xl="9">
                <v-card  class="pa-3" elevation="1" outlined>
             
                    <v-row>
                        <!--  <v-col cols="12" md="12" class="primary">
                            <v-container class="d-flex flex-row justify-space-between">
                                <div class="mt-1 text-sm-h3 text-md-h5 text-xl-h3 white--text">
                                Question List  ({{Qlength}})</div>
                                <v-btn icon  @click="Show = !Show" >
                                    <v-icon color="white">mdi-{{Show ? 'eye':'eye-off'}}</v-icon>
                                </v-btn>
                            </v-container>
                        </v-col> -->
                      
                        <v-col v-if="Show && Qlength != 0" class="pl-8 pr-8 pt-10  mb-0" cols="12" md="12">
                            <v-row>
                                <v-col cols="6" md="8" lg="8" class="text-left pb-0 mb-0">
                                        <v-text-field
                                        outlined
                                        prepend-icon-inner="mdi-magnify"
                                        label="Search"
                                    ></v-text-field>
                                    
                                </v-col>
                                <v-col cols="6" md="4" lg="4" class="text-right pb-0 mb-0">
                                    <v-select
                                            v-model="ListType"
                                        :items="['All','Multiple Choice', 'Identification', 'True or False', 'Matching type']"
                                        class=""
                                        label="Type"
                                        outlined
                                        ></v-select>
                                </v-col>
                            </v-row>
                            
                            
                        </v-col>

                        <v-col cols="12" class="pl-8 pr-8">
                          
                            <div class="text--body-1 ">Total Points: <span class="primary--text">{{totalPoints}}<small class=" font-weight-regular"> points</small></span> </div>
                            <div class="text--body-1">Total Question: <span class="primary--text">{{totalQuestion}}</span></div>
                              <v-divider></v-divider>
                        </v-col>
                      
                        
                        <v-col v-if="Show && Qlength != 0" cols="12" md="12"  class="pl-5 pr-5 pt-1">
                            <v-container v-show="ListType == 'All' || ListType == item.type" class="mb-1 pt-0 mt-0" v-for="(item, index) in getAll_questions.Question" :key="item.id">
                                    <div v-if="item.type == 'Multiple Choice'" class="mb-2">
                                            <multipleChoiceList v-on:updateQuestion="updateQuestion" :previewAll="previewAll" v-on:reloadList="fetchQuestionsList()" v-if="item.type == 'Multiple Choice'" :number="index+1" :Question="item" :Choices="getAll_questions.Answer[index]"></multipleChoiceList>
                                    </div>
                                        <div v-if="item.type == 'Identification'" class="mb-2">
                                            <indentificationList v-on:updateQuestion="updateQuestion" :previewAll="previewAll" v-on:reloadList="fetchQuestionsList()" v-if="item.type == 'Identification'" :number="index+1" :Question="item"></indentificationList>
                                    </div>
                                        <div v-if="item.type == 'True or False'" class="mb-2">
                                            <trueOrfalseList v-on:updateQuestion="updateQuestion" :previewAll="previewAll" v-on:reloadList="fetchQuestionsList()" v-if="item.type == 'True or False'" :number="index+1" :Question="item"></trueOrfalseList>
                                    </div>
                                    <div v-if="item.type == 'Matching type'" class="mb-2">
                                            <matchingType v-on:reloadList="fetchQuestionsList()" v-if="item.type == 'Matching type'" 
                                            :number="index+1" 
                                            :Question="item" 
                                            :SubQuestion="getAll_questions.Answer[index].SubQuestion"
                                            :Answers="getAll_questions.Answer[index].SubAnswer"
                                            ></matchingType>
                                    </div>
                            </v-container>
                        </v-col>
                    </v-row>
               
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>
<script>
import indentificationList from './List-types/IndentificationList'
import multipleChoiceList from './List-types/MultipleChoiceList'
import trueOrfalseList from './List-types/trueOrfalseList'
import matchingType from './List-types/matchingType'
import deleteDialog from './dialogs/deleteDialog';
 import {mapGetters, mapActions } from "vuex";
export default {
    props:['classworkDetails','totalQuestion','totalPoints'],
    components:{
        deleteDialog,
        multipleChoiceList,
        indentificationList,
        trueOrfalseList,
        matchingType
    },
    data(){
        return{
            ListType:'All',
            previewAll:false,
            dialog:false,
            isRemoving:false,
            isRemoving_id:null,
            Qlength:'',
            isEditing: false,
            isEditing_Id:'',
            isloading: true,
            Show: true,
            DeleteDetails:{},
            QuestionsList:[],
            isFetching: true,
            isLeaving: false
          
        }
    },
    computed: mapGetters(["getAll_questions"]),
    methods:{
        removePropt(num, id){
        
            this.DeleteDetails.number = num;
            this.DeleteDetails.id = id;
            this.isRemoving = true;
            this.isRemoving_id = id;
            this.dialog = true;;
        },
        toastSuccess() {
            return this.$toasted.success("Question Successfully added", {
                theme: "toasted-primary",
                position: "top-center",
                icon: "done",
                duration: 3000
            });
        },
        removeAnswer(id, index){
            if (index <= 2) {
                Swal.fire({
                    icon: 'info',
                    title: 'Oops...',
                    text: 'You must leave atleast two choices',
                })
            }else{
                axios.delete('/api/question/'+id)
                .then(res=>{
                   this.fetchQuestionsList();
                })
            }
        },
        fetchQuestionsList(){
            this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(res=>{
                console.log(res);
                this.Qlength = res.data.Question.length;
                this.QuestionsList = res[0];
                this.isloading = false;
                this.isFetching = false;
            });
        },

         async updateQuestion(data){
            await axios.put('/api/question/update/'+data.id, {type: data.type, question: data})
            .then(res=>{
                if(res.status == 200){
                     this.toastSuccess("Question Successfully updated");
                }
            })
        }
       
        
    },
    beforeMount(){
        //this.getAllQuestion();
        this.isLoading = true;
        this.Show = false
        this.fetchQuestionsList();
         this.Show = true
        this.isLoading = false;
      
    },
    beforeRouteLeave(to, from, next) {
        this.isLeaving = true;
        next();
    },
  
  
}
</script>

<style>
  

        
</style>