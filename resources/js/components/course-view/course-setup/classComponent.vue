<template>
    <v-container>
        <v-row align="center" justify="center" class="pt-10" v-if="classLength == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:14rem">
                    mdi-google-classroom
                </v-icon>
                <h1> Create Class </h1>
                <p> Creating Class, you'll be able to share class code to your students and let them join. </p>
                <v-btn color="primary" @click="openAddmodal()" >   <v-icon left>
                            mdi-plus
                        </v-icon> Add CLASS </v-btn>
            </v-col>
        </v-row>

        <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-icon style="font-size:14rem">
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

        <v-dialog v-model="showModal" width="400px">
            <createClassForm v-on:closeModal="closeModal()" v-if="modalType == 'add'"
                v-on:createclass="classLength++" />
            <editClassForm v-on:closeModal="closeModal()" :class_name="class_name" :class_id="class_id"
                v-if="modalType == 'edit'" />
        </v-dialog>
        <div v-if="!isGetting && classLength > 0">


            <v-row>
                <v-col>
                    <h2>Class</h2>
                </v-col>

                <v-col class="text-right">
                    <v-btn color="primary"  class="ma-2" outlined @click="openAddmodal()">
                        <v-icon left>
                            mdi-plus
                        </v-icon>
                        Add Class
                        
                    </v-btn>
                </v-col>
            </v-row>



            <v-card v-for="(item, index) in allClass" :key="index" class="mt-3">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{item.class_name}} </v-list-item-title>
                        <v-list-item-subtitle>Class code: {{item.class_code}} </v-list-item-subtitle>
                        <v-list-item-subtitle>Students: {{item.student_count}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-menu transition="slide-y-transition" bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon color="secondary " v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
                            </template>
                            <v-list>
                                <v-list-item link>
                                    <v-list-item-title>Archive</v-list-item-title>

                                </v-list-item>
                                <v-list-item link @click="openEditmodal(item.class_name, item.class_id)">
                                    <v-list-item-title>Edit</v-list-item-title>

                                </v-list-item>
                                <v-list-item link>
                                    <v-list-item-title>Remove</v-list-item-title>

                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list-item-action>
                </v-list-item>
            </v-card>
        </div>

        <br> <br>
        <v-divider></v-divider>
        <br>
        <v-row >
            <v-col>

                <v-btn class="float-right" color="primary" @click="completed()" :disabled="allClass.length == 0">
                    Complete
                </v-btn>

                <v-btn class="float-left" text @click="back()">
                    back
                </v-btn>
            </v-col>

        </v-row>

    </v-container>
</template>


<script>
    const VueElementLoading = () => import("vue-element-loading")
    import createClassForm from './class/createClass';

    import editClassForm from './class/editClass'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            VueElementLoading,
            createClassForm,
            editClassForm

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
            }
        }),


        methods: {
            back() {
                this.$emit('changeStep', 2)
            },
            ...mapActions(['fetchSubjectCourseClassList']),
            closeModal() {
                this.showModal = false
            },
            completed() {
                if (this.allClass.length == 0) {
                    this.toastError('Please add atleast one class to complete the course setup');

                } else {
                    axios.post('/api/course/completed/' + this.$route.params.id)
                    .then(res => {
                        this.toastSuccess('Course setup completed!');
                       this.$router.push({name: "coursePage"})
                       this.$store.dispatch('fetchScourse', this.$route.params.id);
                    })
                }

            },
            openAddmodal() {
                this.form.class_name = "";
                this.modalType = "add";
                this.showModal = true;

                console.log(this.modalType);
            },
            openEditmodal(class_name, class_id) {
                this.showModal = true;
                this.modalType = "edit";
                this.class_id = class_id;
                this.class_name = class_name;
                console.log(this.modalType);

            },
            getTeacherClasses() {
                this.isGetting = true;
                this.fetchSubjectCourseClassList(this.$route.params.id)
                    .then(() => {
                        setTimeout(() => {
                            this.isGetting = false;
                            this.classLength = this.allClass.length;
                        }, 1000);


                    })
            },




        },
        computed: mapGetters(['allClass']),
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
