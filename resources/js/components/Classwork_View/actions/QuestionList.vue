
<template>
<div>
    <v-dialog v-model="dialog" persistent max-width="370">
            <deleteDialog 
            :DeleteDetails="DeleteDetails"
            v-on:toggleDialog="dialog = !dialog, isRemoving = false"
            v-on:reloadList="fetchQuestions(), dialog = !dialog, isRemoving = false"
            
            v-if="dialog"></deleteDialog>
        </v-dialog>

  <v-container pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="12">
                <v-card  class="elevation-5">
                    <v-window>
                        <v-window-item >
                                <v-row>
                                    <v-col cols="12" md="12" class="primary">
                                        <v-container class="d-flex flex-row justify-space-between">
                                            <div class="mt-1 text-sm-h3 text-md-h5 text-xl-h3 white--text">
                                            Question List  ({{Qlength}})</div>
                                            <v-btn icon  @click="Show = !Show" >
                                                <v-icon color="white">mdi-{{Show ? 'eye':'eye-off'}}</v-icon>
                                            </v-btn>
                                        </v-container>
                                    </v-col>

                                    <v-col class="pl-8 pr-7 pt-3 pb-4 mb-0" cols="12" md="12">
                                        <v-row>
                                            <v-col cols="9" class="text-left pb-0 mb-0">
                                                <v-btn
                                                class="ml-2 mt-2"
                                                rounded
                                                outlined
                                                color="primary"
                                                @click="previewAll = !previewAll">
                                                Preview All
                                                <v-icon>mdi-{{previewAll ? 'eye-off' : 'eye'}}</v-icon>
                                            </v-btn>
                                            </v-col>
                                            <v-col cols="3" class="text-right pb-0 mb-0">
                                            <v-row class="ml-3 mt-1 ">
                                                 <v-col class="ma-0 pa-0" cols="10">
                                                     <v-select
                                                     v-model="ListType"
                                                    :items="['All','Multiple Choice', 'Identification', 'True or False', 'Matching type']"
                                                    class=""
                                                    label="Type"
                                                    dense
                                                    solo
                                                    ></v-select>
                                                 </v-col>
                                             </v-row>
                                            </v-col>
                                        </v-row>
                                     
                                        
                                    </v-col>
                                  
                                    <v-col v-if="Show" cols="12" md="12" class="pl-5 pr-5 pt-1">
                                        <v-container class="mb-1 pt-0 mt-0" v-for="(item, index) in getAll_questions.Question" :key="index">
                                                <div v-if="(item.type == 'Multiple Choice' && ListType == 'All' || ListType == 'Multiple Choice')" class="mb-2">
                                                     <multipleChoiceList :previewAll="previewAll" v-on:reloadList="fetchQuestionsList()" v-if="item.type == 'Multiple Choice'" :number="index+1" :Question="item" :Choices="getAll_questions.Answer[index]"></multipleChoiceList>
                                                </div>
                                                 <div v-if="(item.type == 'Identification' && ListType == 'All' || ListType == 'Identification')" class="mb-2">
                                                     <indentificationList :previewAll="previewAll" v-on:reloadList="fetchQuestionsList()" v-if="item.type == 'Identification'" :number="index+1" :Question="item"></indentificationList>
                                                </div>
                                                 <div v-if="(item.type == 'True or False' && ListType == 'All' || ListType == 'True or False')" class="mb-2">
                                                     <trueOrfalseList :previewAll="previewAll" v-on:reloadList="fetchQuestionsList()" v-if="item.type == 'True or False'" :number="index+1" :Question="item"></trueOrfalseList>
                                                </div>
                                                 <div v-if="(item.type == 'Matching type' && ListType == 'All' || ListType == 'Matching type')" class="mb-2">
                                                     <twoColumnsList v-on:reloadList="fetchQuestionsList()" v-if="item.type == 'Matching type'" 
                                                     :number="index+1" 
                                                     :Question="item" 
                                                     :SubQuestion="getAll_questions.Answer[index].SubQuestion"
                                                     :Answers="getAll_questions.Answer[index].SubAnswer"
                                                     ></twoColumnsList>
                                                </div>
                                        </v-container>
                                    </v-col>
                                </v-row>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>
<script>
import indentificationList from './questionListTypes/IndentificationList'
import multipleChoiceList from './questionListTypes/MultipleChoiceList'
import trueOrfalseList from './questionListTypes/trueOrfalseList'
import twoColumnsList from './questionListTypes/twoColumnsList'
import deleteDialog from './dialog/deleteDialog';
 import {mapGetters, mapActions } from "vuex";
export default {
    components:{
        deleteDialog,
        multipleChoiceList,
        indentificationList,
        trueOrfalseList,
        twoColumnsList
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
            isLoading: true,
            Show: true,
            DeleteDetails:{},
          
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
                this.Qlength = res[1];
            });

        }
    },
    mounted(){
        //this.getAllQuestion();
        this.isLoading = true;
        this.Show = false
        this.fetchQuestionsList();
         this.Show = true
        this.isLoading = false;
    }
  
}
</script>

<style scoped>
  
        
</style>