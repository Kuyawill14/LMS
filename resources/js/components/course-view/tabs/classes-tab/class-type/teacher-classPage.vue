<template>
    <div class="pt-1">
        <v-row align="center" justify="center" class="pt-10" v-if="allClass.length == 0 && !isGetting">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:10rem">
                    mdi-google-classroom
                </v-icon>
                <h1> Empty Class </h1>
                <p> Creating Class, you'll be able to share class code to your students and let them join. </p>
                <v-btn color="primary" @click="openAddmodal()"> CREATE CLASS </v-btn>
            </v-col>
        </v-row>
        <div v-if="isGetting">
            <v-row>
                <v-col cols="12" v-for="n in 3" :key="n">
                    <v-card>
                        <v-list>
                            <v-list-item >
                                <v-list-item-avatar >
                                        <v-skeleton-loader
                                        class="mx-auto"
                                        tile
                                        type="avatar"
                                        ></v-skeleton-loader>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                        <v-skeleton-loader
                                        
                                        max-width="500"
                                        tile
                                        type="list-item-three-line"
                                        ></v-skeleton-loader>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
       </div>

        <v-dialog v-model="showModal" width="400">
            <createClassForm v-on:newClassAdded="reloadClass()" v-on:OpenNewSched="addScheduleDialog = !addScheduleDialog" v-on:closeModal="closeModal()" v-if="modalType == 'add'"
                v-on:createclass="classLength++" />
            <editClassForm v-on:closeModal="closeModal()" :class_details="class_details" :class_name="form.class_name" :class_id="form.class_id"
                v-if="modalType == 'edit'" />

            <archiveClass v-on:toggleconfirm="SuccessArchive()"
            v-on:toggleCancelDialog="closeModal()" :ArchiveDetails="ArchiveDetails" v-if="modalType == 'archive'"></archiveClass>
        </v-dialog>

        <v-dialog v-model="removeDialog" width="400">
            <deleteClass v-if="removeDialog" v-on:toggleCancelDialog="removeDialog = false" v-on:toggleConfirm="removeClass()"></deleteClass>
        </v-dialog>
        <div v-if="!isGetting && allClass.length != 0">


        <v-row>
            <v-col cols="6">
                <h2>My Class</h2>
            </v-col>

            <v-col cols="6" class="text-right">
                <v-btn color="rounded primary" @click="openAddmodal()">
                    Create Class
                </v-btn>
            </v-col>
        </v-row>



        <v-card v-for="(item, index) in allClass" :key="index" class="mt-3">
            <v-list-item>
                    <v-list-item-avatar>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title">{{item.class_name}} </v-list-item-title>
                            <v-list-item-subtitle class="mb-0 pb-0"><span class="font-weight-medium">Class code: </span> {{item.class_code}}  
                                <v-tooltip top small>
                                    <template v-slot:activator="{ on, attrs }">
                                    
                                        <v-btn  v-on="on" v-bind="attrs" @click="CopyClassCode(item.class_code)" small icon><v-icon color="blue" small>mdi-content-copy</v-icon></v-btn>
                                    </template>
                                    <small>Copy class code</small>
                                </v-tooltip>
                            
                                </v-list-item-subtitle >

                                <v-list-item-subtitle v-if="item.schedule != false && item.schedule != null">
                                    <span class="font-weight-medium">Schedule: </span>
                                    <div class="pl-1" v-for="(data, index) in item.schedule" :key="index">
                                        <span class="pr-1">&bull; </span>
                                        {{data.day+' - '+data.display_start}} <span class="font-weight-medium">to</span> {{data.display_end}}</div>
                                </v-list-item-subtitle>
                                
                                <v-list-item-subtitle v-else>
                                    <span class="font-weight-medium">Schedule: </span> N/A
                                </v-list-item-subtitle>
                            
                            
                        <v-list-item-subtitle><span class="font-weight-medium">Students Enrolled: </span> {{item.student_count}}</v-list-item-subtitle>
                    </v-list-item-content>
                <v-list-item-action>
                    <v-menu transition="slide-y-transition" bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon color="secondary " v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
                        </template>
                        <v-list nav>
                            
                            <v-list-item link @click="openEditmodal(item, item.class_name, item.class_id)">
                                <v-list-item-title>Edit</v-list-item-title>

                            </v-list-item>
                                <v-list-item link @click="archiveClass(item, index)">
                                <v-list-item-title>Archive</v-list-item-title>

                            </v-list-item>
                            <v-list-item link @click="removeDetails.class_id = item.class_id,  removeDialog = true,
                                removeDetails.index = index,
                                removeDetails.student_count = item.student_count" v-if="item.student_count == 0">
                                <v-list-item-title>Remove</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item-action>
            </v-list-item>
        </v-card>
    </div>

      <v-snackbar
       absolute
        bottom
        :width="$vuetify.breakpoint.sm ? '100%' : ''"
        :right="$vuetify.breakpoint.lgAndUp"
        :centered="$vuetify.breakpoint.sm"
        v-model="copied">
        Class code copied to clipboard

        <template v-slot:action="{ attrs }">
            <v-btn
            color="pink"
            text
            bottom
            left
            v-bind="attrs"
            @click="copied = false"
            >
            <v-icon>mdi-close</v-icon>
            </v-btn>
        </template>
        </v-snackbar>

    
    </div>
</template>


<script>
    const createClassForm = () => import("./createClass")
    const editClassForm = () => import("./editClass")
    const archiveClass = () => import("./archiveClass")
     const deleteClass = () => import("./deleteClass")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            createClassForm,
            editClassForm,
            archiveClass,
            deleteClass
        },
        computed: mapGetters(['allClass']),
        data: () => ({

            isGetting: false,
            showModal: false,
            isloading: true,
            modalType: '',
            class_code: null,
            classLength: null,
            form: {
                id: '',
                class_name: '',
                course_id: null,
               
            },
            ArchiveDetails:null,
            removeIndex: null,
            copied: false,
            items: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
            start_time: null,
            end_time: null,
            menu: false,
            menu1: false,
            addScheduleDialog: false,
            day: null,
            class_details:[],
            removeDetails:{},
            removeDialog: false
        }),


        methods: {
            ...mapActions(['fetchSubjectCourseClassList']),
            closeModal() {
                this.showModal = false
            },
           reloadClass() {
                this.fetchSubjectCourseClassList(this.$route.params.id)
                 .then(() => {
                        this.classLength = this.allClass.length;
                    })
                this.showModal = false
            },
            openAddmodal() {
                this.form.class_name = "";
                this.modalType = "add";
                this.showModal = true;
            },
            openEditmodal(details,class_name, class_id) {
                this.showModal = true;
                this.modalType = "edit";
                this.form.class_id = class_id;
                this.form.class_name = class_name;
                this.class_details = details;
            },
            async getTeacherClasses() {
                this.isGetting = true;
                this.fetchSubjectCourseClassList(this.$route.params.id)
                    .then(() => {
                        //setTimeout(() => {
                            this.isGetting = false;
                            this.classLength = this.allClass.length;
                        //}, 1000);
                    })
            },
            async archiveClass(data,index){
                this.removeIndex = index;
                this.ArchiveDetails = data;
                this.showModal = true;
                this.modalType = "archive";
            },
            async SuccessArchive(){
                this.showModal = false;
                this.allClass.splice(this.removeIndex, 1);
            },
           async CopyClassCode(code){
                let CodeText = code;
                navigator.clipboard.writeText(CodeText);
                //this.copied = true;
                this.toastNormal('Class code copied');
            },
           async removeClass(){
               if(this.removeDetails.student_count == 0){
                    await axios.delete('/api/class/delete/'+this.removeDetails.class_id)
                    .then(()=>{
                        this.allClass.splice(this.removeDetails.index, 1);
                        this.removeDialog = false;
                    })
               }
            }   
        },
        
        mounted() {
            this.getTeacherClasses();
        },


    }

</script>

<style scoped>
    .dp-menu:hover {
        background: #F6F6F6;
    }

    .row {
        align-items: center;
    }

    .card-group-row__col .fullbleed {
        transition: all ease-in-out 0.4s !important;
    }

    .card-group-row__col:hover .fullbleed {
        opacity: 0.4 !important;
        transition: all ease-in-out 0.4s;
    }

    #gedf-drop1:hover {
        color: #EFBB20 !important;
    }

    #gedf-drop1 {
        color: #000;
    }

    .clas_icon {
        font-size: 80px;
    }

</style>
