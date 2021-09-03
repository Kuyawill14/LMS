
<template>
<div>
    <v-hover v-slot="{ hover }">
    <v-card style="cursor:pointer" :color="preview && hover ? 'grey lighten-5' : ''" outlined  class="pl-3 pr-3 pt-4">
        <v-dialog v-model="dialog" persistent max-width="370">
                <deleteDialog 
                :DeleteDetails="DeleteDetails"
                v-on:toggleDialog="dialog = !dialog, isRemoving = false"
                v-on:reloadList="$emit('reloadList'), dialog = !dialog, isRemoving = false"
                
                v-if="dialog"></deleteDialog>

                


            </v-dialog>

            <v-dialog v-model="OptionRemovedialog" persistent max-width="370">
             <optionRemoveDialog 
                :DeleteDetails="DeleteDetails"
                v-on:toggleOptionDialog="OptionRemovedialog = !OptionRemovedialog"
                v-on:reloadOptionList="SliceOption(), OptionRemovedialog = !OptionRemovedialog"
                v-if="OptionRemovedialog"
                >
                </optionRemoveDialog>

            </v-dialog>
            <v-row >
                  <v-col cols="12" classs="ma-0 pa-0">
                     <v-container ma-0 pa-0 class="mb-3 d-flex flex-row ">
                        <v-container mb-0 pb-0 class="d-flex">  <h3>Question #{{number}}</h3><small class="primary--text mt-1 ml-1">({{QuetionsList.type+' '}} {{QuetionsList.points}}points)</small> </v-container>
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
                <v-col v-if="!preview" cols="12" md="12" class="pa-5 mt-0 pt-0">
                     <vue-element-loading :active="isUpdating" spinner="bar-fade-scale" />
                    <v-container class="mb-1">
                            <v-row  class="pa-0 ma-0">
                            <!--  <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                    <v-text-field :readonly="!isEditing" filled type="number" v-model="QuetionsList.points" class="pa-0 ma-0"  label="Points"></v-text-field>
                                </v-col> -->
                                <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                        <v-text-field min="0" :readonly="!isEditing" outlined type="number" v-model="QuetionsList.points" class="pa-0 ma-0"  label="Points"></v-text-field>
                                </v-col>
                                <v-col class="pa-0 ma-0 pl-2 pl-sm-0 text-right" cols="9" md="11" lg="11">
                                     <!--    <v-select
                                        :readonly="!isEditing"
                                        v-model="QuetionsList.type"
                                        class="float-right pa-0 ma-0"
                                        :items="['Multiple Choice', 'Identification', 'True or False', 'Matching type','Essay']"
                                        outlined
                                        label="Type"
                                        ></v-select> -->
                                </v-col>
                            </v-row>
                            <v-container class="pa-0 ma-0" ma-0 pa-0> 
                                <v-row >
                                    <div class="font-weight-medium">Insructions</div>
                                    <v-col  class="mb-5" cols="12" md="12" lg="12">
                                    <!--    <v-textarea
                                        rows="1"
                                        :readonly="!isEditing"
                                        v-model="QuetionsList.question"
                                        filled
                                        class="pa-0 ma-0"
                                        label="Question"
                                        auto-grow
                                        required
                                        ></v-textarea> -->
                            
                                        <v-card style="width:100%" class="mb-3">
                                            <editor
                                                ref="Question"
                                                :readonly="!isEditing"
                                                v-model="QuetionsList.question"
                                                id="editor-container"  placeholder="Question" 
                                                theme="snow" :options="options"></editor>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                            
                            <v-container>
                                <v-row>
                            
                                    <v-col class="ma-0 pa-0" cols="12" lg="12" md="12" v-for="(Ans, i) in SubQuestionList" :key="i">
                                            <v-row>
                                                
                                            <v-col cols="12" >
                                                
                                                <v-container class="d-flex flex-row ma-0 pa-0">
                                                    <div style="width:100%" class="pr-2">
                                                        <div class="font-weight-medium">{{'Question '}}{{i+1}}</div>
                                                            <v-card style="width:100%" class="mb-3" elevation="0" outlined>
                                                            <editor
                                                                v-model="Ans.sub_question" 
                                                                id="editor-container"  :placeholder="'Question '+(i+1)" 
                                                                theme="snow" :options="options">
                                                            </editor>
                                                            </v-card>
                                                        </div>

                                                        <div style="width:100%">
                                                             <div class="font-weight-medium">{{'Answer '}}{{i+1}}</div>
                                                            <v-card style="width:100%" class="mb-3" elevation="0" outlined>
                                                                
                                                            <editor 
                                                                v-model="AnswerList[i].Choice"
                                                                id="editor-container"  :placeholder="'Answer '+(i+1)" 
                                                                theme="snow" :options="options">
                                                            </editor>
                                                            </v-card>
                                                         </div>

                                                        <v-btn v-if="isEditing"
                                                        @click="removeAnswer(i,Ans.id, SubQuestionList.length)"
                                                            icon class="mt-12 pl-2 pr-2">
                                                            <v-icon>mdi-delete</v-icon>
                                                    </v-btn>
                                                </v-container>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                        <v-col v-if="isEditing" class="ma-0 pa-0 pb-5 text-right">
                                            <v-btn       
                                            rounded
                                            class="mt-2"
                                            color="primary"
                                            @click="AddNewMatch()"
                                            >
                                            <v-icon dark large>mdi-plus</v-icon>
                                            </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                    </v-container>
                </v-col>

                <v-col @dblclick="preview = !preview, isEditing = true"  v-if="preview" cols="12" md="12" class="pl-4 pr-4 pt-2">
                        <v-container>
                        <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" class="subtitle-2"> <span v-html="QuetionsList.question" class="post-content"></span><!-- {{QuetionsList.question}} --></div>
                        </v-container>
                        <v-container class="pl-5 pr-5">
                            <v-container>
                                <v-row>
                                    <v-col class="font-weight-bold" cols="7">
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
                           
                            <v-container class="mb-0 pb-0 pt-2" v-for="(List, i) in SubQuestionList" :key="List.id">
                                
                                <v-row>
                                    <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="7">
                                        <div class="d-flex"> 
                                            <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                            <span v-html="List.sub_question" class="subquestion-content"></span>
                                        </div>
                                    </v-col>
                                    <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="5">
                                        <div class="d-flex"> 
                                            <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                            <span v-html="AnswerList[i].Choice" class="subchoices-content"></span>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-container>
                </v-col>
            </v-row>
    </v-card>
    </v-hover>
</div>
</template>
<script>
const deleteDialog = () => import('../dialogs/deleteDialog')
const optionRemoveDialog = () => import('../dialogs/optionRemoveDialog')
 import {mapGetters, mapActions } from "vuex";
export default {
    props:['number', 'Question','SubQuestion','Answers'],
    components:{
        deleteDialog,
        optionRemoveDialog,
    },
    data(){
        return{
            isUpdating: false,
            OptionRemovedialog: false,
            isOptionIndex: null,
            Alphabet: "",
            QuetionsList:{},
            SubQuestionList:{},
            AnswerList:{},
            preview: true,
            dialog:false,
            isRemoving:false,
            isRemoving_id:null,
            Qlength:'',
            isEditing: true,
            isEditing_Id:'',
            isLoading: true,
            Show: true,
            DeleteDetails:{},
            message:'',
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
    methods:{
        removePropt(num, id){
            this.DeleteDetails.number = num;
            this.DeleteDetails.id = id;
            this.isRemoving = true;
            this.isRemoving_id = id;
            this.dialog = true;;
        },
        toastSuccess() {
           this.toastSuccess("Question Successfully added");
        },
         SliceOption(){
            this.SubQuestionList.splice( this.isOptionIndex, 1);
            this.AnswerList.splice( this.isOptionIndex, 1);
            
        },
        AddNewMatch(){
             this.QuetionsList.points +=1;
             this.SubQuestionList.push({ sub_question: '' , id:'', question_id: this.QuetionsList.id });
             this.AnswerList.push({ Choice: '' , id:'', question_id: this.QuetionsList.id });
            axios.post('/api/question/addOption', 
            {
                type: 'Matching Type',
                SubQuestion: this.SubQuestionList[this.SubQuestionList.length-1],
                answer: this.AnswerList[this.AnswerList.length-1],
            })
            .then(res=>{
                if(res.status == 200){
                    this.SubQuestionList[this.SubQuestionList.length-1].id = res.data.main_id;
                    this.AnswerList[this.AnswerList.length-1].id = res.data.answer_id;
                }
            })
        },
        removeAnswer(index,id, subQuestionLength){
            if (subQuestionLength <= 2) {
                this.toastError('You must leave atleast two choices');
            }else{
                this.DeleteDetails.number = index+1;
                this.DeleteDetails.id = id;
                this.DeleteDetails.type = 'Matching Type';
                this.isOptionIndex = index;
              
                this.OptionRemovedialog = true;
            }
        },

          async updateQuestion(){
            axios.put('/api/question/update/'+this.QuetionsList.id, {
                    type: 'Matching Type',
                    details: this.QuetionsList,
                    question: this.SubQuestionList, 
                    options: this.AnswerList
                })
            .then(res=>{
                if(res.status == 200){
                    this.isUpdating = true;
              
                    this.isEditing = false;
                    this.isEditing = false;
                    setTimeout(() => (this.isUpdating = false, this.preview = !this.preview), 1000);
                    //this.toastSuccess("Question Successfully updated");
                }
            })
        }
        
    },
    mounted(){
        this.QuetionsList = this.Question;
        this.AnswerList =  this.Answers;
        this.SubQuestionList = this.SubQuestion
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
        
    }
    
}
</script>

