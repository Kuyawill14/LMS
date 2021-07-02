<template>
    <div class="container pt-4">
        <!-- Modal -->

        <v-dialog v-model="Removedialog" persistent max-width="400">
            <deleteDialog 
            :DeleteDetails="DeleteDetails"
            v-on:toggleDialog="Removedialog = !Removedialog"
            v-on:ToggleRefresh="$emit('ToggleRefresh'), Removedialog = !Removedialog"
            v-if="Removedialog"></deleteDialog>
        </v-dialog>
         <v-row class="pl-5 pr-5">
            <v-divider></v-divider>
        </v-row>

     
            <v-row class="pl-1 pr-1" ma-0 pa-0>
                <v-col cols="12" lg="6"  xl="3" md="6" v-for="(item, index) in classworks" :key="index">
                        <v-card>
                            <v-container class="pl-3 pr-3 pt-5 pb-5 d-flex flex-row justify-space-between">
                                <div class="d-flex flex-row">
                                    <v-icon  class="pl-2 pr-3" large>mdi-book-open-variant</v-icon>
                                    
                                    <div>
                                        
                                        <div ma-0 pa-0 class="h1 ml-1"> <span class="font-weight-bold">{{item.title}}</span> <small class="primary--text" v-if="item.type == 'Subjective Type'">({{item.points}} points)</small></div> 
                                        <div>
                                              <small class="card-subtitle text-50 mb-0 pb-0">Created: {{format_date(item.created_at)}}<br></small>
                                             <small class="card-subtitle text-50 font-weight-medium">Number of Student Submitted: {{item.submittion_count}}</small>
                                        </div>
                                      
                                    </div>
                                </div>
                                <v-menu  bottom offset-y>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        >
                                        <v-icon >mdi-dots-vertical</v-icon>
                                    </v-btn>
                                    </template>
                                    <v-list pa-0 ma-0>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn rounded text @click="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: item.id}})"
                                            ><v-icon class="mr-1">mdi-notebook-edit-outline</v-icon>Review Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn rounded @click="$router.push({name: 'publish-to',params: {id: $route.params.id},query: {clwk: item.id}})" text><v-icon class="mr-1">mdi-file-upload-outline</v-icon>Publish Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                         <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn rounded @click="$router.push({name: 'submission-list',params: {id: $route.params.id},query: {clwk: item.id}})" text><v-icon class="mr-1">mdi-file-eye-outline</v-icon>View Submission</v-btn></v-list-item-title>
                                        </v-list-item>
                                           <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn @click="RemoveCLasswork(item)" rounded text><v-icon class="mr-1">mdi-archive</v-icon>Archive Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn @click="RemoveCLasswork(item)" rounded text><v-icon class="mr-1">mdi-delete-outline</v-icon>Remove Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                             </v-container>
                        </v-card >
                </v-col>
            </v-row>
    </div>
</template>

<script>
    const deleteDialog = () => import('../dialogs/deleteDiaglog');
    import moment from 'moment';
    export default {
        props: ['classworks'],
        components: {
            deleteDialog
        },
        data() {
            return {
                Removedialog: false,
                DeleteDetails:[],
                DateToday:''
            }
        },
        methods: {
            format_date(value) {
                if (value) {
                    return moment(String(value)).format('MMMM Do YYYY, hh:mm A')
                }
            },
            CheckFormatDue(value){
                if (value) {
                    return moment(String(value)).format("YYYY-MM-DDTHH:mm:ss")
                }
            },
            async RemoveCLasswork(details){
                this.DeleteDetails = details;
                this.Removedialog = !this.Removedialog;
            }
        },
        mounted(){
            let newDate = new Date();
            this.DateToday = moment(newDate).format("YYYY-MM-DDTHH:mm:ss");

        }
       
    }
</script>
