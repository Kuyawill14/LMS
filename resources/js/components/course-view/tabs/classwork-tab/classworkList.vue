<template>
    <div class="container pt-4">
        <!-- Modal -->
        <v-dialog v-model="dialog" persistent max-width="600">
            <editModal v-if="isEditing" v-on:closeEditModal="dialog = !dialog, isEditing = !isEditing" :editData="editData"></editModal>
         </v-dialog>

          <v-dialog v-model="Previewdialog"  persistent max-width="600">
            <previewClassworkModal v-if="Previewdialog" v-on:toggleCloseDialog="Previewdialog = !Previewdialog" :Preview_id="Preview_id"></previewClassworkModal>
         </v-dialog>

         <v-row class="pl-5 pr-5">
            <v-divider></v-divider>
        </v-row>

     
            <v-row class="pl-1 pr-1" ma-0 pa-0>
                <v-col cols="12" lg="6" v-for="(item, index) in classworks" :key="index">
                        <v-card :style="role == 'Teacher' ? '' :CheckFormatDue(item.due_date) > DateToday ? '' : 'border:1px  solid #B71C1C'">
                            <v-container class="pl-3 pr-3 pt-5 pb-5 d-flex flex-row justify-space-between">
                                <div class="d-flex flex-row">
                                    <v-icon class="pl-2 pr-3" :color="role != 'Teacher' ? CheckFormatDue(item.due_date) > DateToday ? '':'red darken-4':''" large>mdi-book-open-variant</v-icon>
                                    <div>
                                        
                                        <div ma-0 pa-0 class="h1 ml-1"> <span class="font-weight-bold">{{item.title}}</span> <small class="primary--text" v-if="item.type == 'Subjective Type'">({{item.points}} points)</small></div> 
                                        <small v-if="role == 'Student'" :class="CheckFormatDue(item.due_date) > DateToday ? 'card-subtitle text-50': 'card-subtitle text-50 red--text'">
                                            <v-icon :color="CheckFormatDue(item.due_date) > DateToday ? '':'red darken-4'" small>mdi-clock</v-icon> {{CheckFormatDue(item.due_date) > CheckFormatDue(DateToday) ? '' : "Late"}}
                                            Due Date: {{format_date(item.due_date)}} </small>
                                        <small v-if="role == 'Teacher'"  class="card-subtitle text-50">Created: {{format_date(item.created_at)}}</small>
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
                                            <v-list-item-title><v-btn rounded @click="showShareClass(item.id)" text><v-icon class="mr-1">mdi-file-upload-outline</v-icon>Publish Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                         <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn rounded text><v-icon class="mr-1">mdi-file-eye-outline</v-icon>View Submission</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn rounded text @click="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: item.id}})"
                                            ><v-icon class="mr-1">mdi-notebook-edit-outline</v-icon>Review Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item ma-0 pa-0>
                                            <!-- editClasswork(item) -->
                                            <v-list-item-title><v-btn rounded @click="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: item.id}})" text><v-icon class="mr-1">mdi-square-edit-outline</v-icon>Edit Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn rounded text><v-icon class="mr-1">mdi-delete-outline</v-icon>Remove Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>

                                <v-tooltip v-if="role == 'Student'" top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <!--  @click="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: item.classwork_id}})" -->
                              
                                        <v-btn
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
                                       
                                    </template>
                                    <span>View Classwork</span>
                                </v-tooltip>
                             </v-container>
                            
                            <v-expand-transition>
                             <v-container ma-0 pa-0 v-if="showClass && item.id == temp_id"> 
                                    <v-row class="pr-3">
                                        <v-col class="text-right">
                                             <v-btn
                                                icon
                                                @click="showClass = false && temp_id == ''"
                                                >
                                                <v-icon >mdi-close</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>

                                    <v-container class="d-flex flex-row justify-space-between">
                                        <div class="title">Class names</div>
                                        <div class="title">Status</div>
                                    </v-container>
                                
                                    <v-row class="pl-5 pr-5 pt-1 p-1">
                                        <v-divider></v-divider>
                                    </v-row>

                                    <div class="pl-5 pr-5 mt-2">
                                        <v-row ma-0 pa-0 class="mt-1" v-for="(details, i) in classNames.allClass" :key="i">
                                            <v-col ma-0 pa-0>
                                                <div class="overline"> {{details.class_name}} - </div>
                                                <span>{{details.subject_name}}</span>
                                            </v-col>
                                            <v-col align="right">
                                                <div class="">
                                                    <div v-for="(data, x) in classNames.check" :key="x">
                                                        <v-checkbox ma-0 pa-0
                                                          v-if="data.uc_id == details.id && data.cl_id == item.id"
                                                           v-model="data.status"
                                                           hide-details
                                                           class="ma-0 pa-0 float-right" 
                                                           @change="shareClasswork(item.id, details.class_id)" id="check"
                                                            ></v-checkbox>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </v-container >
                            </v-expand-transition>
                        </v-card >
                </v-col>
            </v-row>

 
    </div>
</template>

<script>
   
    const editModal = () => import('./editClassworkModal')
    const previewClassworkModal = () => import('./previewClassworkModal')
    import moment from 'moment';
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role','classworks'],
        components: {
            editModal,
            previewClassworkModal
        },
        data() {
            return {
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
                    return moment(String(value)).format("MMMM DD, YYYY, h:mm a")
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
            }
        },
        mounted(){
            let newDate = new Date();
            this.DateToday = moment(newDate).format("YYYY-MM-DDTHH:mm:ss")
        }
       
    }
</script>
