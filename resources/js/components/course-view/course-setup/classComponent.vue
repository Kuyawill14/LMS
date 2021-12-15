<template>
    <div>
        <v-row align="center" justify="center" class="pt-10" v-if="allClass.length == 0 && !this.isGetting">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:8rem">
                    mdi-google-classroom
                </v-icon>
                <h1> Create Class </h1>
                <p> Creating Class, you'll be able to share class code to your students and let them join. </p>
                <v-btn color="primary" @click="openAddmodal()">
                    <v-icon left>
                        mdi-plus
                    </v-icon> Create Class
                </v-btn>
            </v-col>
        </v-row>

        <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-icon style="font-size:8rem">
                    mdi-google-classroom
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h2> Loading your Classes </h2>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>

        <v-dialog persistent v-model="showModal" width="400px">
            <createClassForm v-on:newClassAdded="reloadClass()" v-on:closeModal="closeModal()" v-on:cancelCreate="showModal = !showModal" v-if="modalType == 'add'"
                v-on:createclass="classLength++" />
            <editClassForm :class_details="class_details" v-on:cancelUpdate="showModal = !showModal" v-on:closeModal="closeModal()" :class_name="class_name" :class_id="class_id"
                v-if="modalType == 'edit'" />

            <deleteClass :class_id="class_id" v-on:closeModal="closeModal()" v-if="modalType == 'delete'" />
        </v-dialog>
        <div v-if="!isGetting && allClass.length != 0">
            <v-row>
                <v-col>
                    <h2>Class</h2>
                </v-col>
                <v-col class="text-right">
                    <v-btn color="primary" class="ma-2" outlined @click="openAddmodal()">
                        <v-icon left>
                            mdi-plus
                        </v-icon>
                        Add Class

                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="pl-5 pr-5">
                    <v-card elevation="2" v-for="(item, index) in allClass" :key="index" class="mt-3">
                        
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon>mdi-account-multiple</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{item.class_name}} </v-list-item-title>
                                <v-list-item-subtitle>Class code: {{item.class_code}} </v-list-item-subtitle>
                                <v-list-item-subtitle v-if="item.schedule != false && item.schedule != null">
                                    <span class="font-weight-medium">Schedule: </span>
                                    <div  v-for="(data, index) in item.schedule" :key="index">
                                        <span class="pr-1">&bull; </span>
                                        {{data.day+' - '+formatDisplay(data.day, data.start_time)}} <span class="font-weight-medium">to</span> {{formatDisplay(data.day, data.end_time)}}</div>
                                </v-list-item-subtitle>
                                
                                <v-list-item-subtitle v-else>
                                    <span class="font-weight-medium">Schedule: </span> N/A
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>Students: {{item.student_count}}</v-list-item-subtitle>
                                
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-menu transition="slide-y-transition" bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="secondary " v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
                                    </template>
                                    <v-list>
                                    
                                        <v-list-item link @click="openEditmodal(item,item.class_name, item.class_id)">
                                            <v-list-item-title>Edit</v-list-item-title>

                                        </v-list-item>
                                        <v-list-item link  @click="openDeleteModal( item.class_id)">
                                            <v-list-item-title>Remove
                                            </v-list-item-title>

                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-list-item-action>
                        </v-list-item>
                    </v-card>

                </v-col>
            </v-row>
        </div>

        <br> <br>
        <v-divider></v-divider>
        <br>
        <v-row>
            <v-col>
                <v-btn class="float-right" color="primary" @click="completed()" :disabled="allClass.length == 0">
                    Complete
                </v-btn>

                <v-btn class="float-left" text @click="back()">
                    back
                </v-btn>
            </v-col>
        </v-row>
    </div>

</template>


<script>
    import moment from 'moment-timezone';
    const VueElementLoading = () => import("vue-element-loading")
    const createClassForm = () => import('./class/createClass');
    const editClassForm = () => import('./class/editClass');
    const deleteClass = () => import('./class/deleteClass');


    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            VueElementLoading,
            createClassForm,
            editClassForm,
            deleteClass

        },
        data: () => ({

            isGetting: false,
            showModal: false,
            isloading: true,
            modalType: '',
            class_code: null,
            classLength: null,
            class_id: '',
            class_name: '',
            form: {
                id: '',
                class_name: '',
                course_id: null,
            },
            class_details:[]
        }),
        computed: mapGetters(['allClass']),
        methods: {
             formatDisplay(day,time){
                let tmp = Date.parse('next '+day).at(time);
                let finalTime = moment(tmp).format('LT');
                return finalTime;
            },
            back() {
                this.$emit('changeStep', 2)
            },
            ...mapActions(['fetchSubjectCourseClassList', 'setCourseStatus']),
            async reloadClass() {
                this.showModal = false;
            },
            closeModal() {
                this.reloadClasses();
                this.showModal = false;
            },
            completed() {
                localStorage.removeItem("step");
                if (this.allClass.length == 0) {
                    this.toastError('Please add atleast one class to complete the course setup');

                } else {
                    axios.post('/api/course/completed/' + this.$route.params.id)
                        .then(res => {
                            this.toastSuccess('Course setup completed!');
                            this.$store.dispatch('setCourseStatus', this.$route.params.id);
                            this.$store.dispatch('fetchMyCoursesStatusAgain');
                            this.$router.push({
                                name: 'coursePage'
                            })
                            //location.reload();
                            this.$store.dispatch('fetchScourse', this.$route.params.id);
                        })
                }

            },
            openAddmodal() {
                this.form.class_name = "";
                this.modalType = "add";
                this.showModal = true;
            },
            openEditmodal(details, class_name, class_id) {
                this.showModal = true;
                this.modalType = "edit";
                this.class_id = class_id;
                this.class_name = class_name;
                this.class_details = details;

            },
            openDeleteModal(class_id) {
                this.showModal = true;
                this.modalType = "delete";
                this.class_id = class_id;


            },
            getTeacherClasses() {
                this.isGetting = true;
                this.fetchSubjectCourseClassList(this.$route.params.id)
                    .then(() => {
                        setTimeout(() => {
                            this.isGetting = false;
                        }, 500);


                    })
            },
            async reloadClasses() {
                this.fetchSubjectCourseClassList(this.$route.params.id);
            },


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
