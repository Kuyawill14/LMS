
<template>
<div>
    <v-hover v-slot="{ hover }">
    <v-expand-transition>
    <v-card style="cursor:pointer" :color="preview && hover ? 'grey lighten-5' : ''" outlined  class="pl-3 pr-3 pt-4">
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
                  <v-col cols="12" classs="ma-0 pa-0">
                     <v-container ma-0 pa-0 class="mb-3 d-flex flex-row ">
                        <v-container mb-0 pb-0 class="d-flex">  <h3>Question #{{number}} </h3> <small class="primary--text mt-1 ml-1">({{QuetionsList.type+' '}} {{QuetionsList.points}}points)</small></v-container>
                            <v-container v-if="!preview" ma-0 pa-0 class="pa-0 ma-0 d-flex justify-end">
                                <v-btn
                                class="mr-2"
                                color="error"
                                    rounded
                                    :disabled="isRemoving"
                                    :loading="isRemoving"
                                    @click="removePropt((number), QuetionsList.id)">
                                    {{$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'Delete'}}
                                    <v-icon>mdi-delete-outline</v-icon>
                                </v-btn>
                                <v-btn
                                class="mr-2"
                                    rounded
                                    color="primary"
                                    @click="updateQuestion()">
                                    
                                    {{$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'Update'}}
                                    <v-icon>mdi-check</v-icon>
                                </v-btn>
                                    <v-btn
                                    rounded
                                    text
                                    @click="preview = !preview, isEditing = false">
                                    {{$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '' : 'Cancel'}}
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-container>
                             <v-container v-if="preview" ma-0 pa-0 class="pa-0 ma-0 d-flex justify-end">
                                  <v-btn
                                rounded
                                @click="preview = !preview, isEditing = true">
                                {{$vuetify.breakpoint.xs ? '' : 'Edit'}}
                                <v-icon right>mdi-square-edit-outline</v-icon>
                            </v-btn>
                            </v-container> 
                        </v-container>
                        <v-divider></v-divider>
                </v-col>
                <v-col v-if="!preview && !CheckPreview" cols="12" md="12" class="pa-5 mt-0 pt-0">
                    <vue-element-loading :active="isUpdating" spinner="bar-fade-scale" />
                    <v-container class="mb-1">
                            
                            <v-row  class="pa-0 ma-0">
                                <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                    <v-text-field min="0" :readonly="!isEditing" outlined type="number" v-model="getQuestion.points" class="pa-0 ma-0"  label="Points"></v-text-field>
                                </v-col>
                                <v-col class="pa-0 ma-0 pl-2 pl-sm-0 text-right" cols="9" md="11" lg="11">
                                      <!--   <v-select
                                        :readonly="!isEditing"
                                        v-model="getQuestion.type"
                                        class="float-right pa-0 ma-0"
                                        :items="['Multiple Choice', 'Identification', 'True or False', 'Matching type','Essay']"
                                        outlined
                                        label="Type"
                                        ></v-select> -->
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
                                        <v-col ma-0 pa-0 class="ma-0 pa-0" cols="12" lg="12" md="12" v-for="(Ans, i) in getAnswerList.options" :key="Ans.id">
                                                <v-row>
                                                    <v-col cols="12" lg="12" md="12" >
                                                        <v-container ma-0 pa-0 class="d-flex flex-row ma-0 pa-0">
                                                        <v-radio-group  v-model="getQuestion.answer">
                                                            <v-radio
                                                            :readonly="!isEditing"
                                                            @click="tempAnswer = getQuestion.answer"
                                                            color="primary"
                                                            :key="Ans.id"
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
                                        <v-col  v-if="isEditing" ma-0 pa-0 class="pa-0 ma-0 text-right" cols="10">
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
                                    <!--  <v-col class="ma-0 pa-0">
                                            <v-container class="mb-2">
                                                    <v-btn
                                                    rounded
                                                
                                                    color="primary"
                                                    dark
                                                    @click="validate"
                                                    >
                                                    Add Question<v-icon right dark>mdi-note-plus-outline</v-icon>
                                                </v-btn>
                                            </v-container>
                                        </v-col> -->
                                    </v-row>
                            </v-container>
        
                    </v-container>
                </v-col>

                <v-col @dblclick="preview = !preview, isEditing = true" cols="12" md="12" class="pl-4 pr-4 pt-2">
                       
                        <v-container>
                            <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" class="subtitle-2"> <span v-html="getQuestion.question" class="post-content"></span></div>
                        </v-container>
                        <v-container class="pl-5 pr-5">
                            <v-container class="d-flex flex-row ma-0 pa-0" v-for="Ans in getAnswerList.options" :key="Ans.id">
                            <v-radio-group  class="ma-0 pa-0"  v-model="getQuestion.answer">
                                <v-radio
                                readonly
                            
                                color="primary"
                                :key="Ans.id"
                            
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
</div>
</template>
<script>
const deleteDialog = () => import('../dialogs/deleteDialog')
const optionRemoveDialog = () => import('../dialogs/optionRemoveDialog');
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
            isUpdating: null,
            AnswerList:{},
            preview: true,
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
                        ['bold', 'italic', 'underline'],
                
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
                this.DeleteDetails.type = 'Multiple Choice';
                this.isOptionIndex = index;
                this.isOptionRemove = true;
                this.dialog = true;
            }
          
        },
        add() {
            this.getAnswerList.push({ Choice: '' , id:'', question_id: this.QuetionsList.id });
            axios.post('/api/question/addOption',
            {
                type: 'Multiple Choice',
                answers: this.getAnswerList[this.getAnswerList.length-1],
            })
            .then(res=>{
                if(res.status == 200){
                    this.getAnswerList[this.getAnswerList.length-1].id = res.data.answer_id;
                }
            })
        },
        async updateQuestion(){
            axios.put('/api/question/update/'+this.QuetionsList.id, {type: 'Multiple Choice', question: this.QuetionsList, options: this.AnswerList})
            .then(res=>{
                if(res.status == 200){
                    this.isUpdating = true;
                    this.isEditing = !this.isEditing;
                    this.isEditing = !this.isEditing;
                    setTimeout(() => (this.isUpdating = false, this.preview = !this.preview), 1000);
                    this.toastSuccess("Question Successfully updated");
                }
            })
        }

    },
    created(){
        this.QuetionsList = this.Question;
        this.AnswerList =  this.Choices;
        
    },
    
    
}
</script>

<style scoped>
  #QuestionList{
      scroll-behavior:smooth !important;
  }
        
</style>