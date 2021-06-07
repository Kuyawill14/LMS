
<template>
<v-hover v-slot="{ hover }">
<v-card :style="preview ? 'border-top:5px solid #EF6C00':''" :elevation="preview && hover ? 20 : 5" class="pl-3 pr-3 pt-8">
    <v-dialog v-model="dialog" persistent max-width="370">
            <deleteDialog 
            :DeleteDetails="DeleteDetails"
            v-on:toggleDialog="dialog = !dialog, isRemoving = false"
            v-on:reloadList="$emit('reloadList'), dialog = !dialog, isRemoving = false"
            
            v-if="dialog"></deleteDialog>
        </v-dialog>
        <v-row >
            
            <v-col v-if="!preview" cols="12" md="12" class="pl-4 pr-4 pt-2">
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
                                    :disabled="isRemoving"
                                    :loading="isRemoving"
                                    @click="removePropt((number), QuetionsList.id)">
                                    {{$vuetify.breakpoint.xs ? '' : 'Delete'}}
                                    <v-icon>mdi-delete-outline</v-icon>
                                </v-btn>
                            </v-container>
                                  <v-btn
                                    rounded
                                    outlined
                                    color="primary"
                                    @click="preview = !preview">
                                    
                                    {{$vuetify.breakpoint.xs ? '' : 'Preview'}}
                                    <v-icon>mdi-eye</v-icon>
                                </v-btn>
                            </v-container>
                  
                        <h2>Question #{{number}}</h2>
                        <v-row  class="pa-0 ma-0">
                            <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                <v-text-field :readonly="!isEditing" filled type="number" v-model="QuetionsList.points" class="pa-0 ma-0"  label="Points"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-container class="pa-0 ma-0" ma-0 pa-0> 
                            <v-row class="pa-0 ma-0">
                                <v-col class="pa-0 ma-0" cols="12" md="9" lg="9">
                                    <v-textarea
                                    rows="1"
                                    :readonly="!isEditing"
                                    v-model="QuetionsList.question"
                                    filled
                                    class="pa-0 ma-0"
                                    label="Question"
                                    auto-grow
                                    required
                                    ></v-textarea>
                                </v-col>
                                <v-col class="pa-0 ma-0 pl-md-3 pl-sm-0" cols="12" md="3" lg="3">
                                    <v-select
                                    :readonly="!isEditing"
                                    v-model="QuetionsList.type"
                                    class="pa-0 ma-0"
                                    :items="['Multiple Choice', 'Identification', 'True or False', 'Two Colums Multiple Choice']"
                                    filled
                                    label="Type"
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-container>
                        
                        <v-container>
                            <v-row ma-0 pa-0>
                                    <v-col ma-0 pa-0 class="ma-0 pa-0" cols="10" lg="12" md="12" v-for="(Ans, i) in AnswerList" :key="i">
                                            <v-row>
                                                <v-col cols="12" lg="8" md="8" class="pa-0 ma-0">
                                                    <v-container ma-0 pa-0 class="d-flex flex-row ma-0 pa-0">
                                                    <v-radio-group  v-model="QuetionsList.answer">
                                                        <v-radio
                                                        :readonly="!isEditing"
                                                        @click="tempAnswer = QuetionsList.answer"
                                                        color="primary"
                                                        :key="i"
                                                        name="Answer" 
                                                        :value="Ans.Choice"
                                                        ></v-radio>
                                                        </v-radio-group>

                                                        <v-textarea
                                                        :readonly="!isEditing"
                                                        rows="1"
                                                        v-model="Ans.Choice"
                                                        filled
                                                        class="pa-0 ma-0"
                                                        :label="'Choice '+(i+1)"
                                                        auto-grow
                                                        required
                                                        ></v-textarea>

                                                        <v-btn
                                                        v-if="isEditing"
                                                        
                                                        icon class="mt-2 pl-2 pr-2">
                                                            <v-icon>mdi-window-close</v-icon>

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

            <v-col @dblclick="preview =  !preview"  v-if="preview" cols="12" md="12" class="pl-4 pr-4 pt-2">
                
                
                    <h2>Question #{{number}}</h2>
                    <v-container>
                        <div style="line-height:1.2" class="title">{{QuetionsList.question}}</div>
                    </v-container>
                     <v-container class="pl-5 pr-5">
                        <v-container class="d-flex flex-row ma-0 pa-0" v-for="(Ans, i) in AnswerList" :key="i">
                           <v-radio-group  class="ma-0 pa-0"  v-model="QuetionsList.answer">
                            <v-radio
                            :readonly="!isEditing"
                            @click="tempAnswer = QuetionsList.answer, test()"
                            color="primary"
                            :key="index"
                           
                            :value="Ans.Choice"
                            ></v-radio>
                            </v-radio-group>

                            <div class="Subtitle 1">
                                {{Ans.Choice}}<span class="caption primary--text ml-1" v-if="QuetionsList.answer == Ans.Choice">correct answer</span>
                            </div>
                             </v-container>
                    </v-container>
            </v-col>
        </v-row>
</v-card>
</v-hover>
</template>
<script>
const deleteDialog = () => import('../dialog/deleteDialog')
 import {mapGetters, mapActions } from "vuex";
export default {
    props:['Question','Choices','number'],
    components:{
        deleteDialog,
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
            Qlength:'',
            isEditing: false,
            isEditing_Id:'',
            isLoading: true,
            Show: true,
            DeleteDetails:{},
            message:'',
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
    mounted(){
        this.QuetionsList = this.Question;
        this.AnswerList =  this.Choices;
    }
    
}
</script>

<style scoped>
  
        
</style>