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

     

          <v-dialog v-model="Previewdialog"  persistent max-width="600">
            <previewClassworkModal v-if="Previewdialog" v-on:toggleCloseDialog="Previewdialog = !Previewdialog" :Preview_id="Preview_id"></previewClassworkModal>
         </v-dialog>

         <v-row class="pl-5 pr-5">
            <v-divider></v-divider>
        </v-row>

     
            <v-row class="pl-1 pr-1" ma-0 pa-0>
                <v-col cols="12" lg="6"  xl="3" md="6" v-for="(item, index) in classworks" :key="index">
                        <v-card :style="role == 'Teacher' ? '' :CheckFormatDue(item.due_date) > DateToday ? '' : item.status == 'Submitted' ? '':'border:1px  solid #B71C1C'">
                            <v-container class="pl-3 pr-3 pt-5 pb-5 d-flex flex-row justify-space-between">
                                <div class="d-flex flex-row">
                                    <v-icon class="pl-2 pr-3" :color="role != 'Teacher' ? CheckFormatDue(item.due_date) > DateToday ? '':item.status == 'Submitted' ? 'success': 'red darken-4':''" large>{{item.status == 'Submitted' ? 'mdi-check':'mdi-book-open-variant'}}</v-icon>
                                    <div>
                                        
                                        <div ma-0 pa-0 class="h1 ml-1"> <span class="font-weight-bold">{{item.title}}</span> <small class="primary--text" v-if="item.type == 'Subjective Type'">({{item.points}} points)</small></div> 
                                        <small v-if="role == 'Student' && (item.status == null || item.status == 'Submitting' )" :class="CheckFormatDue(item.due_date) > DateToday ? 'card-subtitle text-50': item.status == 'Submitted' ? 'card-subtitle text-50':'card-subtitle text-50 red--text'">
                                            <v-icon :color="CheckFormatDue(item.due_date) > DateToday ? '': item.status == 'Submitted' ? '':'red darken-4'" small>mdi-clock</v-icon> {{CheckFormatDue(item.due_date) > CheckFormatDue(DateToday) ? '' : "Late"}}
                                            Due Date: {{format_date(item.due_date)}} </small>
                                            

                                        <small v-if="role == 'Student' && item.status == 'Submitted' " class="card-subtitle text-50 success--text">
                                            <v-icon color="" small>mdi-clock</v-icon> 
                                            Submitted: {{format_date(item.Sub_date)}} </small>
                                        <div>
                                              <small v-if="role == 'Teacher'"  class="card-subtitle text-50 mb-0 pb-0">Created: {{format_date(item.created_at)}}<br></small>
                                             <small v-if="role == 'Teacher'"  class="card-subtitle text-50 font-weight-medium">Number of Student Submitted: {{item.submittion_count}}</small>
                                        </div>
                                      
                                    </div>
                                </div>
                                <v-menu v-if="role == 'Teacher'" bottom offset-y>
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
                                <!--         <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn rounded @click="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: item.id}})" text><v-icon class="mr-1">mdi-square-edit-outline</v-icon>Edit Classwork</v-btn></v-list-item-title>
                                        </v-list-item> -->
                                           <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn @click="RemoveCLasswork(item)" rounded text><v-icon class="mr-1">mdi-archive</v-icon>Archive Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn @click="RemoveCLasswork(item)" rounded text><v-icon class="mr-1">mdi-delete-outline</v-icon>Remove Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>

                                <v-tooltip v-if="role == 'Student'" top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <!--  @click="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: item.classwork_id}})" -->
                              
                                        <v-btn
                                        v-if="item.status == null || (item.status == 'Submitting'|| item.status == 'Taking')"
                                        @click="Previewdialog = !Previewdialog, Preview_id = item.classwork_id"
                                        class="mt-1 mr-5 pa-2 mx-1" icon
                                        v-bind="attrs"
                                        v-on="on"
                                        fab
                                        >
                                        <v-icon
                                        size="32"
                                        >
                                        mdi-book-open-page-variant
                                        </v-icon>
                                        </v-btn>

                                        <v-btn
                                        @click="item.type == 'Objective Type' ? $router.push({name:'result-page', params:{id: item.classwork_id}})
                                        : $router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: item.classwork_id}})"
                                        v-bind="attrs"
                                        v-on="on"
                                         class="mt-1 mr-5 pa-2 mx-1 success--text" text rounded
                                        v-if="((item.status != null) && (item.status == 'Taking' || item.status == 'Submitted')) && item.score != null">
                                            {{item.score}}/{{item.points}}
                                        </v-btn>
                                       
                                    </template>
                                    <span>{{item.status == null ? 'View Classwork' : 'View Submission'}}</span>
                                </v-tooltip>
                             </v-container>
                        </v-card >
                </v-col>
            </v-row>
    </div>
</template>

<script>

    const previewClassworkModal = () => import('./dialogs/previewClassworkModal')
    const deleteDialog = () => import('./dialogs/deleteDiaglog')
    
    import moment from 'moment';
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role','classworks'],
        components: {
            previewClassworkModal,
            deleteDialog
        },
        data() {
            return {
                Removedialog: false,
                DeleteDetails:[],
                Previewdialog:false,
                Preview_id:null,
                totalPoints:'',
                totalQuestion:'',
                isEditing:false,
                dialog:false,
                isLoaded:false,
                isLoading: true,
                counter: 0,
                classNames: [],
                temp_id: "",
                showClass: false,
                form: {
                    title: "",
                    type: "",
                    description: "",
                    due_date: ""
                },
                editData:{},
                DateToday:''
            }
        },
        computed: mapGetters(['allClass']),
        methods: {
            ...mapActions(['fetchClassList']),
            showShareClass(id) {
                if(!this.isLoaded){
                    this.fetchAll();
                }
                this.isLoaded = true;
                this.temp_id = id;
                this.showClass = true;
                
            },
            shareClasswork(item_id, class_id) {
                const fd = new FormData();
                fd.append("classwork_id", item_id);
                fd.append("class_id", class_id);
                axios.post('/api/classwork/share', fd)
                    .then(res => {
                        this.fetchClassnames();
                    }).catch(e => {
                        console.log(e);
                    })
            },
            fetchClassnames() {
                axios.get('/api/class/allnames/' + this.$route.params.id).then(res => {
                    this.classNames = res.data;
                }).catch(e => {
                    console.log(e)
                })
            },
            RevieQuiz(id) {
                this.$router.push({
                    name: 'clwk',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        clwk: id
                    }
                })
            },
            format_date(value) {
                if (value) {
                    return moment(String(value)).format('MMMM Do YYYY, hh:mm A')
                }
            },
            fetchAll() {
                this.fetchClassnames(); 
                this.fetchClassList();
            },
            editClasswork(data){
                this.dialog = !this.dialog;
                this.editData = data;
                this.isEditing = true;

            },
            CheckFormatDue(value){
                if (value) {
                    return moment(String(value)).format("YYYY-MM-DDTHH:mm:ss")
                }
            },
            async RemoveCLasswork(details){
                this.DeleteDetails = details;
                this.Removedialog = !this.Removedialog;
                
              /*   axios.delete('/api/classwork/remove/'+id)
                .then(res=>{
                    
                   this.$emit("ToggleRefresh");
                }) */
            }
        },
        mounted(){
            let newDate = new Date();
            this.DateToday = moment(newDate).format("YYYY-MM-DDTHH:mm:ss")
        }
       
    }
</script>
