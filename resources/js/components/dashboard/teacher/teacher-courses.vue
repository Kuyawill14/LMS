<template>
    <div>


        <div v-if="coursesLength != 0 && isGetting == false">
            <v-row class="mt-0">
                <v-col>
                    <h2>My Courses</h2>
                </v-col>

                  <v-col lg="3" class="text-right">
                    <v-select class="mr-2 my-0" :items="school_year" item-text="schoolyear" item-value="id"
                        label="School Year" v-model="school_year_id" outlined small @change=" schoolYearFilter()">
                    </v-select>
                </v-col>
                <v-col class="text-right" lg="3">
                    <v-select class="mr-2 my-0" :items="semester" item-text="semester" item-value="id" label="Semester"
                        v-model="semester_id" outlined small @change="semesterFilter()"></v-select>


                </v-col>

            </v-row>

            <v-row style="margin-top: -40px">
                <v-col>
                    <v-card class="mx-auto">
                        <v-slide-group v-model="model" class="px-2" active-class="success" show-arrows
                            mobile-breakpoint="1000" center-active>
                            <v-slide-item v-for="(item, i) in allCoursesData" :key="'class' + i" v-slot:default="{ active }">
                                <router-link
                                    :to="{name: 'coursePage', params: {id: item.course_id}, query:{class: item.class_id}}"
                                    style="text-decoration: none">
                                    <v-card :color="active ? undefined : 'grey lighten-1'" class="my-4 mx-3"
                                        height="200" width="250">
                                        <v-card class="mx-auto">
                                            <v-img :src="'../images/'+item.course_picture" height="200px"
                                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                                class="white--text align-end">
                                                <div class="px-2">
                                               
                                                 
                                                </div>

                                                <v-card-subtitle class="text-white">
                                                    {{item.course_code }}
                                                    <br> {{ item.course_name}}
                                                </v-card-subtitle>

                                            </v-img>


                                        </v-card>

                                    </v-card>
                                </router-link>
                            </v-slide-item>
                        </v-slide-group>
                    </v-card>
                </v-col>
                <!-- <v-col lg="3" md="6" v-for="(item, i) in allClass" :key="'class' + i">
                    <div class="card-expansion">
                        <v-card class="mx-auto">
                            <v-img :src="'../images/'+item.course_picture" height="200px"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" class="white--text align-end">
                                <v-card-subtitle>
                                    <v-progress-linear :value="item.progress" height="6" class="rounded-sm">
                                    </v-progress-linear>
                                    <span class="text-caption float-right"> {{ parseFloat(item.progress.toFixed(2))}}%
                                    </span>
                                    <span class="text-caption "> Completed </span>
                                </v-card-subtitle>
                            </v-img>
                            <v-card-subtitle>
                                <router-link
                                    :to="{name: 'coursePage', params: {id: item.course_id}, query:{class: item.class_id}}"
                                    style="text-decoration: none">
                                    <p style="font-size: 16px;">{{item.course_code }}
                                        <br> {{ item.course_name}}
                                    </p>
                                </router-link>
                                <hr>
                                {{ item.class_name}} <br>
                                Class code:{{ item.class_code}}
                            </v-card-subtitle>


                        </v-card>

                    </div>

                </v-col> -->
            </v-row>
        </div>
    </div>


</template>




<script>

    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {

        },
        data() {
            return {
                school_year: [],
                semester: [],
                school_year_id: '',
                semester_id: '',
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
                },
                Archivedialog: false,
                ArchiveDetails: {},
                allCoursesData: [],
            };
        },
            computed: mapGetters(['allCourse']),
        methods: {
              ...mapActions(['fetchCourseList']),
             fetchCourses() {
                this.isGetting = true;
                this.$store.dispatch('fetchCourseList').then(() => {
                    this.allCoursesData = this.allCourse;
                    this.coursesLength = this.allCourse.length;
                    this.isGetting = false;
                });
            },
              fetchAllSchoolyear_semester() {
                axios.get('/api/admin/schoolyears_semesters/all')
                    .then((res) => {
                        this.school_year = res.data.school_year;
                        this.semester = res.data.semester;
                    })
            },
            schoolYearFilter() {
                var data = [];
                console.log(this.semester_id.length);
                for (var key in this.allCourse) {
                    if (this.semester_id != '') {
                        if (this.allCourse[key].school_year_id == this.school_year_id && this.allCourse[key]
                            .semester_id == this.semester_id) {
                            data.push(this.allCourse[key]);
                        }
                    } else {
                         if (this.allCourse[key].school_year_id == this.school_year_id ) {
                            data.push(this.allCourse[key]);
                        } 
                    }

                }
                console.log(data);
                this.allCoursesData = data;


            },

            semesterFilter() {
                var data = [];
                for (var key in this.allCourse) {
                    if (this.allCourse[key].school_year_id == this.school_year_id && this.allCourse[key].semester_id ==
                        this.semester_id) {
                        data.push(this.allCourse[key]);
                    }
                }
                console.log(data);
                this.allCoursesData = data;


            },
            goToclass(course_id, class_id) {
                this.$router.to({
                    name: 'coursePage',
                    params: {
                        id: course_id
                    },
                    query: {
                        class: class_id
                    }
                });
            },
        },
        mounted() {
            this.fetchCourses();
            this. fetchAllSchoolyear_semester();
        }
    };

</script>

<style scoped>
    .text-caption {
        color: #fff !important;
    }

    .text-white {
        color: #fff !important;
    }

</style>
