
<template>
<v-hover v-slot="{ hover }">
<v-card :elevation="preview && hover ? 20 : 5" class="pl-3 pr-3 pt-8">
    <v-dialog v-model="dialog" persistent max-width="370">
            <deleteDialog 
            :DeleteDetails="DeleteDetails"
            v-on:toggleDialog="dialog = !dialog, isRemoving = false"
            v-on:reloadList="$emit('reloadList'), dialog = !dialog, isRemoving = false"
            
            v-if="dialog"></deleteDialog>
        </v-dialog>
        <v-row>
            <v-col cols="12" md="12" class="pl-4 pr-4 pt-2">
                
                <v-container class="mb-1">
                        <v-container ma-0 pa-0 class="mb-3 d-flex flex-row justify-space-between">
                            <v-container ma-0 pa-0 class="pa-0 ma-0">
                                 <v-btn class="mr-2 mb-xs-2" :color="isEditing  ? 'primary' : ''" rounded  @click="isEditing = !isEditing">
                              
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
                                    :disabled="isRemoving"
                                    outlined
                                    :loading="isRemoving"
                                    color="primary"
                                    @click="removePropt((number), QuetionsList.id)">
                                    
                                    {{$vuetify.breakpoint.xs ? '' : 'Preview'}}
                                    <v-icon>mdi-eye</v-icon>
                                </v-btn>
                            </v-container>
                        <h2>Question #{{number}}</h2>
                        <v-row class="pa-0 ma-0">
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
                                <v-col  ma-0 pa-0 class="ma-0 pa-0" cols="12">
                                    <v-textarea
                                    :readonly="!isEditing"
                        
                                    v-model="QuetionsList.answer"
                                    filled
                                    class="pa-0 ma-0"
                                    label="Answer"
                                    auto-grow
                                    ></v-textarea>
                                </v-col>
                            </v-row>
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
    props:['Question','number'],
    components:{
        deleteDialog,
    },
    data(){
        return{
            QuetionsList:{},
            preview:false,
            dialog:false,
            isRemoving:false,
            isEditing: false,
            DeleteDetails:{}
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
    },
    mounted(){
        this.QuetionsList = this.Question;
    }
    
}
</script>

<style scoped>
  
        
</style>