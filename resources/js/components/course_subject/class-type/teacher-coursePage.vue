<template>
    <div>

        <v-row align="center" justify="center" class="pt-10" v-if="coursesLength == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:14rem">
                    mdi-book-variant-multiple
                </v-icon>

                <h1> Create your first Course </h1>
                <p> Creating Module, you'll be able to upload and share it with your class. </p>
                <v-btn color="primary" @click="openAddmodal()"> CREATE COURSE </v-btn>
            </v-col>
        </v-row>


        <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-icon style="font-size:14rem">
                    mdi-google-contacts
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h2> Loading your Courses </h2>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>



        <v-dialog v-model="dialog" width="400px">
            <v-card>
                <v-card-title class="">
                    {{modalType == 'add' ? 'Create Course' : 'Edit Course'}}
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col cols="12" class="pa-0 ma-0">
                            <v-text-field v-model="form.course_code" filled color="primary" label="Course Code">
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" class="pa-0 ma-0">
                            <v-text-field v-model="form.course_name" filled color="primary" label="Course Name">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="secondary" @click="dialog = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="modalType == 'add' ? createCourse() : updateCourse()">
                        {{modalType == 'add' ? 'Save' : 'Update'}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <div v-if="coursesLength != 0 && isGetting == false">

            <v-row>
                <v-col>
                    <h2>My Courses</h2>
                </v-col>
                <v-col class="text-right">
                    <v-btn bottom color="primary" dark fab fixed right @click="openAddmodal()">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="mt-3">
                <v-col lg="3" md="6" v-for="(item, i) in allCourse" :key="'course'+i">
                    <div class="card-expansion">
                        <v-card class="mx-auto">
                            <v-img :src="'../images/'+item.course_picture" height="200px">
                                <v-spacer></v-spacer>
                                <v-menu transition="slide-y-transition" bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon v-bind="attrs" v-on="on" class="float-right" color="white">
                                            <v-icon>
                                                mdi-dots-vertical
                                            </v-icon>

                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item link :to="{name: 'settings', params: {id: item.id}}">
                                            <v-list-item-title>Edit</v-list-item-title>

                                        </v-list-item>
                                        <v-list-item link>
                                            <v-list-item-title>Archive</v-list-item-title>

                                        </v-list-item>
                                        <v-list-item link>
                                            <v-list-item-title>Delete</v-list-item-title>

                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-img>

                            <v-card-subtitle>
                               <router-link :to="{name: 'coursePage', params: {id: item.id}}" style="text-decoration: none">
                                    <p style="font-size: 16px;">{{item.course_code }} 
                                    <br> {{ item.course_name}}
                                    </p>
                                </router-link>
                                 <hr>
                                  {{item.student_count+' students'}} <br>
                                {{item.class_count+' class'}}
                            </v-card-subtitle>


                        </v-card>

                    </div>

                </v-col>
            </v-row>
        </div>



    </div>


</template>



<script>
    // const VueElementLoading = () => import("vue-element-loading")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            //    VueElementLoading,
        },
        data() {
            return {
                coursesLength: null,
                isGetting: false,
                dialog: false,
                isloading: true,
                modalType: '',
                isPageLoading: false,
                class_code: null,
                form: {
                    id: '',
                    course_name: '',
                    course_id: '',
                    class_description: '',
                    course_picture: '',
                    course_code: '',
                }
            }
        },
        computed: mapGetters(['allCourse']),
        methods: {
            ...mapActions(['fetchCourseList']),
               toastSuccess(message,icon) {
                return this.$toasted.success(message, {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            openAddmodal() {
                this.dialog = !this.dialog;
                this.form.course_name = "";
                this.form.course_code = "";
                this.modalType = "add";
            },
            openEditmodal(course_id) {
                   this.dialog = !this.dialog;
                this.modalType = "update";
                var selectedCourse = this.allCourse.find(x => x.id === course_id);
                this.form.id = course_id;
                this.form.course_name = selectedCourse.course_name;
                this.form.course_code = selectedCourse.course_code;
                this.form.course_id = selectedCourse.course_id;
            },
        
            createCourse() {
                if (this.form.course_name != "" && this.form.course_code != "") {
                    this.isloading = true;
                    this.$store.dispatch('createCourse', this.form).then((res) => {
                             this. fetchCourses();
                     this.dialog = false;
                  this.toastSuccess("Your course has been Added", 'done')
                  this.$router.push({name: 'courseSetup' , params: {id: res.id }})
                    });
                

                }
            },
            fetchCourses() {
                this.isGetting = true;
                this.$store.dispatch('fetchCourseList').then(() => {
                    this.coursesLength = this.allCourse.length;
                    this.isGetting = false;
                });
            },
        },
        mounted() {
          this.fetchCourses();
        },
    }

</script>

<style scoped>
    .card-group-row__col .fullbleed {
        transition: all ease-in-out 0.4s !important;
    }

    .card-group-row__col:hover .fullbleed {
        opacity: 0.4 !important;
        transition: all ease-in-out 0.4s;
    }

    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

</style>
