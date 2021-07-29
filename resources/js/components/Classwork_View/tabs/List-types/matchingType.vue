
<template>
<div>
    <v-hover v-slot="{ hover }">
    <v-card style="cursor:pointer" :color="preview && hover ? 'grey lighten-5' : ''" outlined  class="pa-7 pt-8">
        <v-dialog v-model="dialog" persistent max-width="370">
                <deleteDialog 
                :DeleteDetails="DeleteDetails"
                v-on:toggleDialog="dialog = !dialog, isRemoving = false"
                v-on:reloadList="$emit('reloadList'), dialog = !dialog, isRemoving = false"
                
                v-if="dialog"></deleteDialog>
            </v-dialog>
            <v-row >
                <v-col v-if="!preview" cols="12" md="12" class="pa-5">
                    <v-container class="mb-1">
                            <v-container ma-0 pa-0 class="mb-3 d-flex flex-row justify-space-between">
                                    <v-container ma-0 pa-0 class="pa-0 ma-0 d-flex justify-end">
                                    <v-btn
                                    class="mr-2"
                                    color="error"
                                        rounded
                                        :disabled="isRemoving"
                                        :loading="isRemoving"
                                        @click="removePropt((number), QuetionsList.id)">
                                        {{$vuetify.breakpoint.xs ? '' : 'Delete'}}
                                        <v-icon>mdi-delete-outline</v-icon>
                                    </v-btn>
                                    <v-btn
                                        rounded
                                        color="primary"
                                        @click="preview = !preview">
                                        
                                        {{$vuetify.breakpoint.xs ? '' : 'Update'}}
                                        <v-icon>mdi-check</v-icon>
                                    </v-btn>

                                     <v-btn
                                            rounded
                                            text
                                            @click="preview = !preview, isEditing = !isEditing">
                                            {{$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '' : 'Cancel'}}
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                            </v-container>
                                    
                        </v-container>
                    
                            <h2>Question #{{number}}</h2>
                            <v-row  class="pa-0 ma-0">
                            <!--  <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                    <v-text-field :readonly="!isEditing" filled type="number" v-model="QuetionsList.points" class="pa-0 ma-0"  label="Points"></v-text-field>
                                </v-col> -->
                                <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                        <v-text-field min="0" :readonly="!isEditing" outlined type="number" v-model="QuetionsList.points" class="pa-0 ma-0"  label="Points"></v-text-field>
                                </v-col>
                                <v-col class="pa-0 ma-0 pl-2 pl-sm-0 text-right" cols="9" md="11" lg="11">
                                        <v-select
                                        :readonly="!isEditing"
                                        v-model="QuetionsList.type"
                                        class="float-right pa-0 ma-0"
                                        :items="['Multiple Choice', 'Identification', 'True or False', 'Matching type']"
                                        outlined
                                        label="Type"
                                        ></v-select>
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
                                                    <v-card style="width:100%" outlined class="pa-3 mb-2">
                                                        <div class="font-weight-medium">{{'Question '}}{{i+1}}</div>
                                                
                                                        <v-card style="width:100%" class="mb-3">
                                                        
                                                        <editor :rules="rules"
                                                            v-model="Ans.sub_question" 
                                                        id="editor-container"  :placeholder="'Question '+(i+1)" 
                                                            theme="snow" :options="options"></editor>
                                                        </v-card>
                                                        <div class="font-weight-medium">{{'Answer '}}{{i+1}}</div>
                                                            <v-card style="width:100%" class="mb-3">
                                                                
                                                        <editor 
                                                        
                                                            v-model="AnswerList[i].Choice"
                                                        id="editor-container"  :placeholder="'Answer '+(i+1)" 
                                                            theme="snow" :options="options"></editor>
                                                        </v-card>
                                                    </v-card>

                                                        <v-btn v-if="isEditing"
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
                                            @click="addNewMatch()"
                                            >
                                            <v-icon dark large>mdi-plus</v-icon>
                                            </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                    </v-container>
                </v-col>

                <v-col @dblclick="preview =  !preview"  v-if="preview" cols="12" md="12" class="pl-4 pr-4 pt-2">
                        <v-container class="d-flex flex-row justify-space-between">
                            <h2>Question #{{number}}</h2>
                                <v-btn
                                rounded
                                @click="previewAll ? preview = false :preview = !preview">
                                {{$vuetify.breakpoint.xs ? '' : 'Edit'}}
                                <v-icon right>mdi-square-edit-outline</v-icon>
                            </v-btn>
                        </v-container>
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
                            <v-divider></v-divider>
                            <v-container class="mb-0 pb-0" v-for="(List, i) in SubQuestionList" :key="List.id">
                                
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
 import {mapGetters, mapActions } from "vuex";
export default {
    props:['number', 'Question','SubQuestion','Answers'],
    components:{
        deleteDialog,
    },
    data(){
        return{
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
                        ['bold', 'italic', 'underline', 'strike'],
                
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
                    this.$store.dispatch('fetchQuestions', this.$route.query.clwk)
                    .then(r=>{
                        this.Qlength = r[1];
                    });
                    
                })
            }
          
        },
        
    },
    created(){
        this.QuetionsList = this.Question;
        this.AnswerList =  this.Answers;
        this.SubQuestionList = this.SubQuestion
    },
    mounted(){
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

