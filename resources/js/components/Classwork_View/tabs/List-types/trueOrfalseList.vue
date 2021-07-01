
<template>
<div>
    <v-hover v-slot="{ hover }">
    <v-card :style="preview || previewAll ? 'border-top:5px solid #EF6C00':''" :elevation="preview && hover ? 20 : 5" class="pl-3 pr-3 pt-8">
        <v-dialog v-model="dialog" persistent max-width="370">
                <deleteDialog 
                :DeleteDetails="DeleteDetails"
                v-on:toggleDialog="dialog = !dialog, isRemoving = false"
                v-on:reloadList="$emit('reloadList'), dialog = !dialog, isRemoving = false"
                
                v-if="dialog"></deleteDialog>
            </v-dialog>
            <v-row>
                <v-col v-if="!preview && !previewAll" cols="12" md="12" class="pl-4 pr-4 pt-2">
                    <v-container class="mb-1">
                            <v-container ma-0 pa-0 class="mb-3 d-flex flex-row">
                                    <v-container ma-0 pa-0 class="pa-0 ma-0 d-flex justify-end">
                                            <v-btn
                                            class="mr-2"
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
                                                @click="updateQuestion()">
                                                
                                                {{$vuetify.breakpoint.xs ? '' : 'Update'}}
                                                <v-icon>mdi-square-edit-outline</v-icon>
                                            </v-btn>
                                    </v-container>
                                
                                </v-container>
                            <h2>Question #{{number}}</h2>
                            <v-row class="pa-0 ma-0">
                                <v-col class="pa-0 ma-0" cols="12"  md="12" lg="12">
                                
                                </v-col>
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
                                <v-row class="pa-0 ma-0">
                                    <v-col class="pa-0 ma-0" cols="12" md="12" lg="12">
                                    <!--  <v-textarea
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
                                                v-model="QuetionsList.question"
                                                id="editor-container" placeholder="Question" 
                                                theme="snow" :options="options"></editor>
                                        </v-card>
                                    </v-col>
                                <!--  <v-col class="pa-0 ma-0 pl-md-3 pl-sm-0" cols="12" md="3" lg="3">
                                        <v-select
                                        :readonly="!isEditing"
                                        v-model="QuetionsList.type"
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
                                        <v-col v-for="(x, n) in inputCheck" :key="n"  ma-0 pa-0 class="ma-0 pa-0" cols="8">
                                            <v-container ma-0 pa-0 class="d-flex flex-row ma-0 pa-0">
                                                <v-radio-group v-model="QuetionsList.answer">
                                                    <v-radio
                                                    :readonly="!isEditing"
                                                    color="primary"
                                                    :key="n"
                                                    name="Answer" 
                                                    :value="inputCheck[n]"
                                                    ></v-radio>
                                                    </v-radio-group>

                                                    <v-textarea
                                                    readonly
                                                    rows="1"
                                                    outlined
                                                    class="pa-0 ma-0"
                                                    :value="inputCheck[n]"
                                                    auto-grow
                                                    required
                                                    ></v-textarea>
                                                </v-container>
                                        </v-col>
                                    </v-row>
                            </v-container>
                    </v-container>
                </v-col>
                <v-col @dblclick="previewAll ? preview = false: preview = !preview"  v-if="preview || previewAll" cols="12" md="12" class="pl-4 pr-4 pt-2">
                    <v-container class="d-flex flex-row justify-space-between">
                            <h2>Question #{{number}}</h2>
                            <v-btn
                                rounded
                                @click="previewAll ? preview = false :preview = !preview, isEditing = !isEditing">
                                {{$vuetify.breakpoint.xs ? '' : 'Edit'}}
                                <v-icon right>mdi-square-edit-outline</v-icon>
                            </v-btn>
                        </v-container>
                        <v-container>
                            <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" class="subtitle-2"> <span v-html="QuetionsList.question" class="post-content"></span><!-- {{QuetionsList.question}} --></div>
                        </v-container>
                        <v-container class="pl-5 pr-5">
                            <v-container class="d-flex flex-row ma-0 pa-0" v-for="(x, n) in inputCheck" :key="n">
                            <v-radio-group  class="ma-0 pa-0"  v-model="QuetionsList.answer">
                                <v-radio
                                :readonly="!isEditing"
                                @click="tempAnswer = QuetionsList.answer"
                                color="primary"
                                :key="n"
                                :value="inputCheck[n]"
                                ></v-radio>
                                </v-radio-group>

                                <div class="Subtitle 1">
                                    {{inputCheck[n]}}<span class="caption primary--text ml-1" v-if="QuetionsList.answer == inputCheck[n]">(correct answer)</span>
                                </div>
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
    props:['Question','number','previewAll'],
    components:{
        deleteDialog,
    },
    data(){
        return{
            inputCheck:['True','False'],
            QuetionsList:{},
            preview:true,
            dialog:false,
            isRemoving:false,
            isEditing: false,
            DeleteDetails:{},
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

         async updateQuestion(){
            axios.put('/api/question/update/'+this.QuetionsList.id, {question: this.QuetionsList})
            .then(res=>{
                if(res.status == 200){
                    this.preview = !this.preview
                }
            })
        }
    },
    created(){
        this.QuetionsList = this.Question;
    }
    
}
</script>

<style scoped>
  
        
</style>