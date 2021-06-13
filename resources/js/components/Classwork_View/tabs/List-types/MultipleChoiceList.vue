
<template>
<v-app id="QuestionList">
<v-hover v-slot="{ hover }">
<v-expand-transition>
<v-card :style="preview || previewAll ? 'border-top:5px solid #EF6C00':''" :elevation="preview && hover ? 20 : 5" class="pl-3 pr-3 pt-8">
    <v-dialog v-model="dialog" persistent max-width="370">
            <deleteDialog 
            :DeleteDetails="DeleteDetails"
            v-on:toggleDialog="dialog = !dialog, isQuestionRemove = false"
            v-on:reloadList="$emit('reloadList'), dialog = !dialog, isQuestionRemove = false"
            v-if="isQuestionRemove"></deleteDialog>

            <optionRemoveDialog 
            :DeleteDetails="DeleteDetails"
            v-on:toggleOptionDialog="dialog = !dialog, isOptionRemove = !isOptionRemove"
            v-on:reloadOptionList="SliceOption(), dialog = !dialog, isOptionRemove = !isOptionRemove"
            v-if="isOptionRemove"
            >
            </optionRemoveDialog>
        </v-dialog>
        <v-row >
            <v-col v-if="!preview && !CheckPreview" cols="12" md="12" class="pl-4 pr-4 pt-2">
                <v-container class="mb-1">
                        <v-container ma-0 pa-0 class="mb-3 d-flex flex-row justify-space-between">
                            <v-container ma-0 pa-0 class="pa-0 ma-0">
                                 <v-btn class="mr-2 mb-xs-2" :color="isEditing  ? 'primary' : ''" rounded  
                                 @click="isEditing = !isEditing">
                              
                                {{$vuetify.breakpoint.xs ? isEditing ?'Update':'' : isEditing ?'Update':'Edit'}}
                                <v-icon>mdi-square-edit-outline</v-icon>
                                </v-btn>
                                <v-btn
                                    rounded
                                    :disabled="isQuestionRemove"
                                    :loading="isQuestionRemove"
                                    @click="removePropt((number), getQuestion.id)">
                                    {{$vuetify.breakpoint.xs ? '' : 'Delete'}}
                                    <v-icon>mdi-delete-outline</v-icon>
                                </v-btn>
                            </v-container>
                                  <v-btn
                                    rounded
                                    outlined
                                    color="primary"
                                    @click="CheckPreview ? (preview = true, CheckPreview = false) : preview = !preview">
                                    
                                    {{$vuetify.breakpoint.xs ? '' : 'Preview'}}
                                    <v-icon>mdi-eye</v-icon>
                                </v-btn>
                            </v-container>

                        <h2>Question #{{number}}</h2>
                        <v-row  class="pa-0 ma-0">
                            <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                   <v-text-field min="0" :readonly="!isEditing" outlined type="number" v-model="getQuestion.points" class="pa-0 ma-0"  label="Points"></v-text-field>
                            </v-col>
                            <v-col class="pa-0 ma-0 pl-2 pl-sm-0 text-right" cols="9" md="11" lg="11">
                                    <v-select
                                    :readonly="!isEditing"
                                    v-model="getQuestion.type"
                                    class="float-right pa-0 ma-0"
                                    :items="['Multiple Choice', 'Identification', 'True or False', 'Matching type']"
                                    outlined
                                    label="Type"
                                    ></v-select>
                            </v-col>
                        </v-row>
                        <v-container class="pa-0 ma-0" ma-0 pa-0> 
                            <v-row class="pa-0 ma-0">
                                <div class="font-weight-medium">Question</div>
                                <v-col class="pa-0 ma-0" cols="12" md="12" lg="12">
                                   <!--  <v-textarea
                                    rows="1"
                                   
                                    v-model="getQuestion.question"
                                    filled
                                    class="pa-0 ma-0"
                                    label="Question"
                                    auto-grow
                                    required
                                    ></v-textarea> -->
                                     <v-card style="width:100%" class="mb-3">
                                        <editor
                                            ref="Question"
                                            v-model="getQuestion.question"
                                            placeholder="Question" 
                                            theme="snow" :options="options"></editor>
                                    </v-card>
                                </v-col>
                              <!--   <v-col class="pa-0 ma-0 pl-md-3 pl-sm-0" cols="12" md="3" lg="3">
                                    <v-select
                                    :readonly="!isEditing"
                                    v-model="getQuestion.type"
                                    class="pa-0 ma-0"
                                    :items="['Multiple Choice', 'Identification', 'True or False', 'Matching type']"
                                    filled
                                    label="Type"
                                    ></v-select>
                                </v-col> -->
                            </v-row>
                        </v-container>
                        
                        <v-container>
                            <v-row ma-0 pa-0>
                                <div class="font-weight-medium">Options</div>
                                    <v-col ma-0 pa-0 class="ma-0 pa-0" cols="12" lg="12" md="12" v-for="(Ans, i) in getAnswerList" :key="Ans.id">
                                            <v-row>
                                                <v-col cols="12" lg="12" md="12" >
                                                    <v-container ma-0 pa-0 class="d-flex flex-row ma-0 pa-0">
                                                    <v-radio-group  v-model="getQuestion.answer">
                                                        <v-radio
                                                        :readonly="!isEditing"
                                                        @click="tempAnswer = getQuestion.answer"
                                                        color="primary"
                                                        :key="i"
                                                        name="Answer" 
                                                        :value="Ans.Choice"
                                                        ></v-radio>
                                                        </v-radio-group>

                                                       <!--  <v-textarea
                                                        :readonly="!isEditing"
                                                        rows="1"
                                                        v-model="Ans.Choice"
                                                        filled
                                                        class="pa-0 ma-0"
                                                        :label="'Choice '+(i+1)"
                                                        auto-grow
                                                        required
                                                        ></v-textarea> -->

                                                        <v-card style="width:100%" class="mb-3">
                                                            <editor
                                                                v-model="Ans.Choice"
                                                                id="editor-container"  :placeholder="'Option '+(i+1)" 
                                                                theme="snow" :options="options"></editor>
                                                        </v-card>

                                                        <v-btn
                                                        v-if="isEditing"
                                                        @click="removeOption(i,Ans.id, getAnswerList.length) "
                                                        icon class="mt-2 pl-2 pr-2">
                                                            <v-icon>mdi-delete</v-icon>
                                                        </v-btn>
                                                    </v-container>
                                                </v-col>
                                            </v-row>
                                    </v-col>
                                    <v-col  v-if="isEditing" ma-0 pa-0 class="pa-0 ma-0 text-right" cols="8">
                                        <v-btn
                                        rounded
                                        class="mt-2"
                                        color="primary"
                                        dark
                                        @click="add()"
                                        >
                                        <v-icon dark large>mdi-plus</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                        </v-container>
    
                </v-container>
            </v-col>

            <v-col @dblclick="CheckPreview ? preview = false: preview = !preview"  v-if="preview || CheckPreview" cols="12" md="12" class="pl-4 pr-4 pt-2">
                    <v-container class="d-flex flex-row justify-space-between">
                        <h2>Question #{{number}}</h2>
                            <v-btn
                            rounded
                            outlined
                            color="primary"
                            @click="CheckPreview ? (preview = true, CheckPreview = false) :preview = !preview">
                            {{$vuetify.breakpoint.xs ? '' : 'Preview'}}
                            <v-icon>mdi-{{preview ? 'eye-off' : 'eye-off'}}</v-icon>
                        </v-btn>
                    </v-container>
                    <v-container>
                        <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" class="subtitle-2"> <span v-html="getQuestion.question" class="post-content"></span></div>
                    </v-container>
                     <v-container class="pl-5 pr-5">
                        <v-container class="d-flex flex-row ma-0 pa-0" v-for="(Ans, i) in getAnswerList" :key="i">
                           <v-radio-group  class="ma-0 pa-0"  v-model="getQuestion.answer">
                            <v-radio
                            readonly
                          
                            color="primary"
                            :key="i"
                           
                            :value="Ans.Choice"
                            ></v-radio>
                            </v-radio-group>

                            <div class="Subtitle-1 d-flex">
                                <span v-html="Ans.Choice" class="post-content"></span>
                                <span class="caption primary--text ml-1 mt-1" v-if="getQuestion.answer == Ans.Choice">(correct answer)</span>
                            </div>
                             </v-container>
                    </v-container>
            </v-col>
        </v-row>
</v-card>
</v-expand-transition>
</v-hover>
</v-app>
</template>
<script>
const deleteDialog = () => import('../dialogs/deleteDialog')
const optionRemoveDialog = () => import('../dialogs/optionRemoveDialog')
 import {mapGetters, mapActions } from "vuex";
export default {
    props:['Question','Choices','number','previewAll'],
    components:{
        deleteDialog,
        optionRemoveDialog
    },
    data(){
        return{
            
            QuetionsList:{},
            AnswerList:{},
            preview: false,
            dialog:false,
            inputCheck:['True','False'],
            isRemoving:false,
            isRemoving_id:null,
            isQuestionRemove:false,
            isOptionRemove: false,
            Qlength:'',
            isEditing: false,
            isEditing_Id:'',
            isLoading: true,
            Show: true,
            DeleteDetails:{},
            message:'',
            isOptionIndex:null,
            options:{
            modules: {
                    'toolbar': [
                        ['bold', 'italic', 'underline', 'strike'],
                
                        [{ 'list': 'bullet' }],
                        ['image'],
                    ],
                }
            }
        }
    },
    computed:{
        getQuestion(){
            return this.QuetionsList;
        },
        getAnswerList(){
            return this.AnswerList;
        },
        CheckPreview(){
            
            return this.previewAll;
        }
       
    },
    methods:{
        removePropt(num, id){
            this.DeleteDetails.number = num;
            this.DeleteDetails.id = id;
            this.isQuestionRemove = true;
            this.isRemoving_id = id;
            this.dialog = true;
        },
        toastSuccess() {
            return this.$toasted.success("Question Successfully added", {
                theme: "toasted-primary",
                position: "top-center",
                icon: "done",
                duration: 3000
            });
        },
        SliceOption(){
            this.AnswerList.splice( this.isOptionIndex, 1);
        },
        removeOption(index,id, Anslength){
            if (Anslength <= 2) {
                return this.$toasted.error("You must leave atlest two options!", {
                theme: "toasted-primary",
                position: "top-center",
                icon: "error",
                duration: 2000
                });
            }else{
                this.DeleteDetails.number = index+1;
                this.DeleteDetails.id = id;
                this.isOptionIndex = index;
                this.isOptionRemove = true;
                this.dialog = true;
                

               /*  this.AnswerList.splice(index, 1);
                axios.delete('/api/question/'+id)
                .then(res=>{
                    this.$store.dispatch('fetchQuestions', this.$route.query.clwk)
                    .then(r=>{
                        this.Qlength = r[1];
                    });
                    
                }) */
            }
          
        },
        PreventScroll(){
           $(document).ready(function(){
               //$(this).scrollTop(0,5);
                $(this).scrollTop({top: 0, behavior: "smooth"});
                //window.scroll({top: 0, behavior: "smooth"})
            });
        }
        
    },
    mounted(){
        this.QuetionsList = this.Question;
        this.AnswerList =  this.Choices;
        this.PreventScroll();
    },
    
    
}
</script>

<style scoped>
  #QuestionList{
      scroll-behavior:smooth !important;
  }
        
</style>