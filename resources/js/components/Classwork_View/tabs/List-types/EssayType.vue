
<template>
<div>
    <v-hover v-slot="{ hover }">
    <v-expand-transition>
    <v-card style="cursor:pointer" :color="preview && hover ? 'grey lighten-5' : ''" outlined class="pl-3 pr-3 pt-4">
        <v-dialog v-model="dialog" persistent max-width="370">
                <deleteDialog 
                :DeleteDetails="DeleteDetails"
                v-on:toggleDialog="dialog = !dialog, isRemoving = false"
                v-on:reloadList="$emit('reloadList'), dialog = !dialog, isRemoving = false"
                
                v-if="dialog"></deleteDialog>
            </v-dialog>
            <v-row>
                <v-col cols="12" classs="ma-0 pa-0">
                     <v-container ma-0 pa-0 class="mb-3 d-flex flex-row ">
                        <v-container mb-0 pb-0 class="d-flex"> <h3>Question #{{number}}</h3> <small class="primary--text mt-1 ml-1">({{QuetionsList.type+' '}} {{QuetionsList.points}}points)</small> </v-container>
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
                                    @click="preview = !preview, isEditing = !isEditing">
                                    {{$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '' : 'Cancel'}}
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-container>
                             <v-container v-if="preview" ma-0 pa-0 class="pa-0 ma-0 d-flex justify-end">
                                  <v-btn
                                rounded
                                @click="preview = !preview, isEditing = !isEditing">
                                {{$vuetify.breakpoint.xs ? '' : 'Edit'}}
                                <v-icon right>mdi-square-edit-outline</v-icon>
                            </v-btn>
                            </v-container> 
                        </v-container>
                        <v-divider></v-divider>
                </v-col>
                <v-col v-if="!preview" cols="12" md="12" class="pa-5 mt-0 pt-0">
                    <vue-element-loading :active="isUpdating" spinner="bar-fade-scale" />
                    <v-container class="mb-0 pb-0">
                           
                                 
                            <v-row class="pa-0 ma-0">
                            <!--   <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                    <v-text-field :readonly="!isEditing" filled type="number" v-model="QuetionsList.points" class="pa-0 ma-0"  label="Points"></v-text-field>
                                </v-col> -->

                                <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                        <v-text-field min="0" :readonly="!isEditing" outlined type="number" v-model="QuetionsList.points" class="pa-0 ma-0"  label="Points"></v-text-field>
                                </v-col>
                                <v-col class="pa-0 ma-0 pl-2 pl-sm-0 text-right" cols="9" md="11" lg="11">
                                      <!--   <v-select
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
                                <v-row class="pa-0 ma-0">
                                    
                                    <div class="font-weight-medium">Question</div>
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
                                                ref="Question"
                                                
                                                :readonly="!isEditing"
                                                v-model="QuetionsList.question"
                                                id="editor-container"  placeholder="Question" 
                                                theme="snow" :options="options"></editor>
                                        </v-card>
                                    </v-col>
                                <!--   <v-col class="pa-0 ma-0 pl-md-3 pl-sm-0" cols="12" md="3" lg="3">
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
                            
                    </v-container>
                </v-col>

                <v-col @dblclick="preview = !preview, isEditing = true"  v-if="preview || previewAll" cols="12" md="12" class="pl-4 pr-4 pt-2">
                    <v-container>
                        <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1':'line-height:1.5'" class="subtitle-2"> <span v-html="QuetionsList.question" class="post-content"></span><!-- {{QuetionsList.question}} --></div>
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
import {mapGetters, mapActions } from "vuex";
export default {
    props:['Question','number','previewAll'],
    components:{
        deleteDialog,
    },
    data(){
        return{
            QuetionsList:{},
            isUpdating: null,
            preview:true,
            dialog:false,
            isRemoving:false,
            isEditing: false,
            DeleteDetails:{},
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
            this.DeleteDetails.type = 'Question';
            this.DeleteDetails.message = "This will permanently remove the question."
            this.DeleteDetails.number = num;
            this.DeleteDetails.id = id;
            this.isRemoving = true;
            this.isRemoving_id = id;
            this.dialog = true;;
        },
        async updateQuestion(){
            this.$emit('updateQuestion', this.QuetionsList)
            this.isUpdating = true;
            this.isEditing = !this.isEditing;
            setTimeout(() => (this.isUpdating = false, this.preview = !this.preview), 1000);
         
        }
        
    },
    created(){
        this.QuetionsList = this.Question;
    },
   
    
    
}
</script>

