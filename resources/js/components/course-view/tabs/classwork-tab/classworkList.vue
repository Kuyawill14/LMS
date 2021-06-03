<template>
    <div class="container pt-4">
        <!-- Modal -->
        <v-dialog v-model="dialog" persistent max-width="600px">
            <editModal v-if="isEditing" v-on:closeEditModal="dialog = !dialog, isEditing = !isEditing" :editData="editData"></editModal>
         </v-dialog>
    
         <v-row class="pl-5 pr-5">
            <v-divider></v-divider>
        </v-row>

     
            <v-row class="pl-1 pr-1" ma-0 pa-0>
            <!--  <vue-element-loading :active="isLoading" spinner="bar-fade-scale" /> -->
                <v-col cols="12" lg="6" v-for="(item, index) in classworks" :key="index">
                        <v-card >
                            <v-container class="pl-3 pr-3 pt-5 pb-5 d-flex flex-row justify-space-between">
                                <div class="d-flex flex-row">
                                    <v-icon class="pl-2 pr-3" large>mdi-book-open-variant</v-icon>
                                    <div>
                                        <h2 ma-0 pa-0> {{item.title}}</h2>
                                        <small class="card-subtitle text-50">{{role == 'Teacher' ? 'Created: ' + format_date(item.created_at) + ' | Due Date: '+format_date(item.due_date): 'Due Date: '+format_date(item.due_date)}}</small>
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
                                            <v-list-item-title><v-btn @click="showShareClass(item.id)" text><v-icon class="mr-1">mdi-file-upload-outline</v-icon>Publish Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                         <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn text><v-icon class="mr-1">mdi-file-eye-outline</v-icon>View Submission</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn text @click="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: item.id}})"
                                            ><v-icon class="mr-1">mdi-notebook-edit-outline</v-icon>Review Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn @click="editClasswork(item)" text><v-icon class="mr-1">mdi-square-edit-outline</v-icon>Edit Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn text><v-icon class="mr-1">mdi-delete-outline</v-icon>Remove Classwork</v-btn></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>

                                <v-tooltip v-if="role == 'Student'" top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn class="mt-1 mr-5 pa-2 mx-1" icon
                                        v-bind="attrs"
                                        v-on="on"
                                        fab
                                        >
                                        <v-icon
                                        color="primary"
                                        size="32"
                                        
                                        >
                                        mdi-book-open-outline
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
    import editModal from './editClassworkModal';
    import VueElementLoading from 'vue-element-loading';
    import moment from 'moment';
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role','classworks'],
        components: {
            VueElementLoading,
            editModal
        },
        data() {
            return {
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
                editData:{}
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
                    return moment(String(value)).format("MMMM DD, YYYY")
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

            }
        },
       
    }
</script>
