<template>
    <div>

        <v-row>
            <v-col cols="12" md="12">
                <v-card elevation="1" outlined class="pt-5">
                    <v-row>


                        <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0 d-flex justify-center">
                            <h2 class="font-weight-bold">{{UserDetails.firstName+' '+UserDetails.lastName}}</h2>

                        </v-col>
                        <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0 d-flex justify-center">
                            <div class="grey--text font-italic">{{UserDetails.email}}</div>
                        </v-col>
                        <v-col cols="12" class="mb-0 pb-0 mt-1 pt-0 d-flex justify-center">

                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" class="pl-5 pr-5 pb-0">
                            <!-- <v-divider></v-divider> -->
                        </v-col>

                    </v-row>
                </v-card>



            </v-col>


        </v-row>

        <v-row style="margin-bottom: -40px;">
            <v-spacer></v-spacer>
            <v-col lg="1" class="text-right mt-2">
                <v-btn hidden icon @click="getTeacherSummary(true);summarryLoading =true"
                    v-if="school_year_id != null || semester_id != null  ">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col lg="2" class="text-right">
                <v-select class="mr-2 my-1" dense :items="school_year" item-text="schoolyear" item-value="id"
                    label="School Year" v-model="school_year_id" outlined small
                    @change=" getTeacherSummary();summarryLoading =true">
                </v-select>
            </v-col>
            <v-col class="text-right" lg="2">
                <v-select class="mr-2 my-1" dense :items="semester" item-text="semester" item-value="id"
                    :disabled="school_year_id == null" label="Semester" v-model="semester_id" outlined small
                    @change="getTeacherSummary();summarryLoading =true"></v-select>


            </v-col>
        </v-row>

        <v-container v-if="isloading" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-icon style="font-size:10rem">
                    mdi-account
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h3> Loading Profile </h3>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>




        <v-row class="custom-five-row">

            
            <v-col v-for="i in 5" :key="i" cols="12" lg="3" md="6" sm="12" xs="12"
                class="my-1" v-if="summarryLoading">

                <v-card>
                    <v-skeleton-loader  :loading="summarryLoading"
                        type="list-item-avatar-three-line"></v-skeleton-loader>
                </v-card>
            </v-col>



            <v-col v-for="(item, index) in cardheaders" :key="index" cols="12" lg="3" md="6" sm="12" xs="12"
                class="my-1">

                <v-card>
                    <v-skeleton-loader v-if="summarryLoading" :loading="summarryLoading"
                        type="list-item-avatar-three-line"></v-skeleton-loader>
                    <v-row class="pa-3" v-if="!summarryLoading">

                        <v-col cols="4">
                            <v-icon class="text-h2" style="font-size:2.5 rem">{{item.icon}}</v-icon>
                        </v-col>

                        <v-col>
                            <v-row>
                                <v-col class="py-0 text-right">
                                    <span class="cardTitle">{{item.title}}</span>
                                </v-col>

                            </v-row>
                            <v-row>
                                <v-col class="text-h3 py-0 primary--text text-right">{{item.count}}</v-col>
                            </v-row>

                        </v-col>



                    </v-row>

                </v-card>
            </v-col>

        </v-row>




        <v-row>

            <v-col cols="12">
                <v-card v-if="summarryLoading">
                    <v-skeleton-loader :loading="summarryLoading" type="table"></v-skeleton-loader>
                </v-card>

                <coursesProgress v-if="!summarryLoading" :courses="courses" :key="componentKey"></coursesProgress>
            </v-col>

        </v-row>
    </div>
</template>

<script>
    const coursesProgress = () => import('./coursesProgress')

    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {

            coursesProgress,

        },
        data() {
            return {
                firstLoad: true,
                classwork_list: [],
                course_sumarry: [],
                modules_list: [],
                cardheaders: [{
                        title: "Total Courses",
                        icon: 'mdi-book-variant-multiple',
                        count: 0,
                        routName: ''
                    },
                    {
                        title: "Total Students",
                        icon: 'mdi-account-group',
                        count: 0,
                        routName: ''
                    },
                    {
                        title: "Total Classes",
                        icon: 'mdi-google-classroom',
                        count: 0,
                        routName: ''
                    },
                    {
                        title: "Total Classwork",
                        icon: 'mdi-book-open-variant',
                        count: 0,
                        routName: ''
                    },
                    {
                        title: "Total Modules",
                        icon: 'mdi-book-variant-multiple',
                        count: 0,
                        routName: ''
                    },

                ],

                tab: null,
                imageFile: '',
                Details: null,
                loading: false,
                isloading: true,
                message: null,
                type: null,
                UserDetails: null,
                school_year_id: null,
                semester_id: null,
                school_year: [],
                semester: [],
                school_year_id: null,
                semester_id: null,
                courses: [],
                summarryLoading: true,
                componentKey: 0,
                teacher_id: this.get_UserRole == "ProgramChair" ? this.$route.params.id : this.$route.query.id

            }
        },
        
        computed: mapGetters(['getTeacherDetails','get_UserRole']),
        methods: {
            
            forceRerender() {
                this.componentKey += 1;
            },
            fetchAllSchoolyear_semester() {
                axios.get('/api/admin/schoolyears_semesters/all')
                    .then((res) => {
                        this.school_year = res.data.school_year;
                        this.semester = res.data.semester;
                    })
            },
            getTeacherSummary(clear) {

                if (clear) {
                    this.school_year_id = null;
                    this.semester_id = null;
                }
                axios.get(`/api/admin/teacher/summarry`, {
                        params: {
                            teacher_id: this.teacher_id,
                            school_year_id: this.school_year_id != 0 ? this.school_year_id : null,
                            semester_id: this.semester_id ? this.semester_id : null,
                        }
                    })
                    .then((res) => {

                        if (res.status == 200) {

                            this.courseSummaryheader(res.data.overview);
                            this.modules_list = res.data.modules_list;
                            this.courses = res.data.courses;


                        } else {
                            this.toastError('Oops! Something went wrong, please reload the page')
                        }

                        
                            this.summarryLoading = false;
                            this.firstLoad = false;
                       

                        // this.forceRerender();
                    })
            },

            courseSummaryheader(course_summary) {
                this.cardheaders[0].count = course_summary.total_courses;
                this.cardheaders[1].count = course_summary.total_students;
                this.cardheaders[2].count = course_summary.total_classes;
                this.cardheaders[3].count = course_summary.total_classwork;
                this.cardheaders[4].count = course_summary.total_modules;
            },
            ...mapActions(['fetchTeacherDetails']),
            toastSuccess() {
                return this.$toasted.success("Profile Successfully Updated", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 3000
                });
            },
            getUserDetails() {
                axios.get('/api/admin/teachers/profile/' + this.teacher_id).then((res) => {
                    this.UserDetails = res.data;
                    this.isloading = !this.isloading;
                    ////console.log(res.data);

                }).catch((e) => {
                    ////console.log(e);
                })
            },



        },
        mounted() {
            this.teacher_id = this.get_UserRole == "ProgramChair" ? this.$route.params.id : this.$route.query.id
            console.log(this.$route)
            this.getTeacherSummary();
            this.getUserDetails();
            this.fetchAllSchoolyear_semester();

            console.log(this.get_UserRole);
            // this.isloading = !this.isloading;
        }
    }

</script>


<style scoped>
    @media (min-width: 1264px) {
        .custom-five-row>.col-lg-3 {
            flex: 0 0 20% !important;
            max-width: 20% !important;
        }
    }

    .cardTitle {
        font-size: 1rem;
        font-weight: 500;
    }

</style>
