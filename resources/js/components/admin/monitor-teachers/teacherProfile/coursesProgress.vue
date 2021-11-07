<template>
    <div>

        <div>
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <coursesummarypreview :course_details="course_details" v-on:closeDialog="dialog = false" v-if="dialog">
                </coursesummarypreview>
            </v-dialog>
        </div>

        <v-row>
            <v-col cols="12" lg="5" class="mb-0 pb-0">
                <h2>Courses</h2>

            </v-col>

            <v-col lg="1" class="text-right mt-2">
                <v-btn icon @click="fetchCourses" v-if="school_year_id != 0 || semester_id !=0 ">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col lg="3" class="text-right">
                <v-select class="mr-2 my-1" dense :items="school_year" item-text="schoolyear" item-value="id"
                    label="School Year" v-model="school_year_id" outlined small @change=" schoolYearFilter()">
                </v-select>
            </v-col>
            <v-col class="text-right" lg="3">
                <v-select class="mr-2 my-1" dense :items="semester" item-text="semester" item-value="id" :disabled="school_year_id == 0"
                    label="Semester" v-model="semester_id" outlined small @change="semesterFilter()"></v-select>


            </v-col>
        </v-row>

        <v-col cols="12" v-if="isloading">
            <v-container class="fill-height" v-if="isloading">
                <v-row align-content="center" justify="center">
                    <v-col class="text-subtitle-1 text-center" cols="12">
                        Loading
                    </v-col>
                    <v-col cols="6">
                        <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
        <v-divider></v-divider>

        <br>
        <v-row>
            <v-col v-if="!isloading" cols="12">

                <v-row>
                    <v-col cols="6" md="3" lg="3" v-for="(item) in allCoursesData" :key="item.course_id">
                        <v-card link style="cursor:pointer" elevation="2" class="mx-auto"
                            @click="dialog = true, course_details = item" max-width="344" outlined>
                            <v-toolbar dense
                                :class="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'd-flex justify-center' : ''"
                                dark color="primary">
                                <v-toolbar-title>
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on, attrs }">
                                            <div v-bind="attrs" v-on="on" style="overflow:hidden" class="text-left pl-2 pr-2">
                                                {{item.course_code +' - '+item.course_name}}
                                            </div>
                                        </template>
                                        <span>{{item.course_code +' - '+item.course_name}}</span>
                                    </v-tooltip>
                                </v-toolbar-title>
                            </v-toolbar>


                            <v-list-item>
                                <v-list-item-content>
                                    <div class="pa-2">
                                        <v-row>
                                            <v-col>
                                                <div class="text-center">
                                                    {{item.total_students}}
                                                </div>

                                                <div class="text-center text-subtitle-2">
                                                    Total Students
                                                </div>
                                            </v-col>


                                            <v-col>
                                                <div class="text-center">
                                                    {{item.total_classes}}
                                                </div>
                                                <div class="text-center text-subtitle-2">
                                                    Total Classes
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </div>

                                </v-list-item-content>
                            </v-list-item>


                            <div class="text-center pl-4 pr-4">
                                <v-divider></v-divider>
                            </div>

                            <v-list-item>
                                <v-list-item-content @click="dialog = true;course_id = course_details = item">
                                    <div class="text-center ">
                                        Modules Published: {{item.sub_modules_count}}
                                    </div>
                                </v-list-item-content>
                            </v-list-item>


                            <!--  <v-card-actions>
                        <v-btn outlined rounded text>
                            View
                        </v-btn>
                        </v-card-actions> -->
                        </v-card>
                    </v-col>

                </v-row>
            </v-col>


        </v-row>
    </div>
</template>
<script>
    //const modulesPublished = () => import('./courses/modules_publish')
    const coursesummarypreview = () => import('./courses/course_summary_preview')

    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['UserDetails'],
        data() {
            return {
                school_year: [],
                semester: [],
                school_year_id: 0,
                semester_id:0,
                allCoursesData: [],
                dialog: false,
                moduledialog: false,
                Coursedialog: false,
                isloading: true,
                coursesLength: null,
                details: [],
                course_id: null,
                allCourse: [],
                course_details: null,
                items: ['2020-2021', '2021-2022', '2022-2023', '2023-2024'],
            }
        },
        components: {
            //modulesPublished,
            coursesummarypreview
        },
        computed: mapGetters(['allClass']),
        methods: {
            ...mapActions(['fetchCourseList']),
            // async fetchCourses() {
            //     axios.get('/api/admin/teachers/profile/ClassesList/' + this.UserDetails.user_id)
            //         .then(res => {
            //             this.allCourse = res.data;
            //             this.isloading = false;
            //         })
            // },
            fetchAllSchoolyear_semester() {
                axios.get('/api/admin/schoolyears_semesters/all')
                    .then((res) => {
                        this.school_year = res.data.school_year;
                        this.semester = res.data.semester;
                    })
            },
            semesterFilter() {
                var data = [];
                for (var key in this.allCourse) {
                    if (this.allCourse[key].school_year_id == this.school_year_id && this.allCourse[key].semester_id ==
                        this.semester_id) {
                        data.push(this.allCourse[key]);
                    }
                }
                //console.log(data);
                this.allCoursesData = data;


            },
            schoolYearFilter() {
                var data = [];
                //console.log(this.semester_id.length);
                for (var key in this.allCourse) {
                    if (this.semester_id != '') {
                        if (this.allCourse[key].school_year_id == this.school_year_id && this.allCourse[key]
                            .semester_id == this.semester_id) {
                            data.push(this.allCourse[key]);
                        }
                    } else {
                        if (this.allCourse[key].school_year_id == this.school_year_id) {
                            data.push(this.allCourse[key]);
                        }
                    }

                }
                console.log(data);
                this.allCoursesData = data;


            },
            fetchCourses() {
                this.isloading = true;
                this.school_year_id = 0;
                 this.semester_id = 0;
                axios.get('/api/admin/teachers/profile/ClassesList/' + this.UserDetails.user_id)
                    .then(res => {
                        this.allCourse = res.data;
                        this.allCoursesData = res.data;
                        this.coursesLength = this.allCourse.length;
                        this.isloading = false;
                    })

            },
        },

        mounted() {
            this.fetchCourses();
            this.fetchAllSchoolyear_semester();
        }

    }

</script>
