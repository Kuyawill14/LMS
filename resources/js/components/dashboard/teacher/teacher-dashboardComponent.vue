<template>



    <div>
         <v-row>
            <v-col>
                <h2>Dashboard</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" >
                <v-row>
                    <v-col cols="12" md="4" class="pt-0">
                        <v-card>
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                {{allCourse.length}}
                            </div>
                            <div class="text-center">
                                Total Courses
                            </div>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4" class="pt-0">
                        <v-card>
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                {{class_count}}
                            </div>
                            <div class="text-center">
                                Total Classes
                            </div>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4" class="pt-0">
                        <v-card>
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                {{student_count}}
                            </div>
                            <div class="text-center">
                                My Total Student
                            </div>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row  >
                    <v-col cols="12" md="8">
                        <progressChart :allCourse="allCourse"> </progressChart>
                    </v-col>
                    <v-col cols="12" md="4">
                         <v-card @click="calendarDialog = true">
                                <v-dialog transition="dialog-bottom-transition" max-width="1000px"  v-model="calendarDialog" id="calendar_modal">
                                    <v-card class="pt-3">
                                        <myCalendar :role="role"></myCalendar>
                                        <br> 
                                    </v-card>
                                </v-dialog>
                            <myCalendar :role="role"></myCalendar>
                        </v-card>
                    </v-col>
                </v-row>


                <v-row >
                    <v-col class="12" >
                        <teacherCourses></teacherCourses>
                    </v-col>
                   
                </v-row>

            </v-col>

           <!--  <v-col lg="4" >
                <v-row>
                    <v-col class="pt-0">
                        
                    </v-col>
                </v-row>


                <v-row>
                    <v-col>
                        <v-card>
                            <myNotification> </myNotification>
                        </v-card>
                    </v-col>
                </v-row>


            </v-col> -->



        </v-row>

    </div>

</template>

<script>
    const myNotification = () => import('../notificationComponent')
    const teacherCourses = () => import('./teacher-courses')
    const myCalendar = () => import('../myCalendar')
    const progressChart = () => import('./ProgressChart')

    import {
        mapGetters,
        mapActions
    } from "vuex";


    export default {
        props: ['role'],
        components: {
            myCalendar,
            progressChart,
            teacherCourses,
            myNotification
        },
        data() {
            return {
                class_count: 0,
                student_count: 0,
                calendarDialog: false,
            };
        },
        computed: mapGetters(['allCourse']),
        methods: {
            ...mapActions(['fetchCourseList']),
            classCount() {

                axios.get('/api/class/count')
                    .then(res => {
                        this.class_count = res.data.classCount;
                        this.student_count = res.data.studentCount;
                    })

            },
        },
        mounted() {
            this.fetchCourseList();
            this.classCount();
        },
    };

</script>

<style scoped>
    .chart {
        height: 355px;
    }

</style>
<style>

    .v-dialog--active {
        overflow-x: hidden;
    }

</style>