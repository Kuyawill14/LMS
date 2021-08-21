<template>



    <div>

        <v-row>
            <v-col lg="8" class="pt-0">
                <v-row>
                    <v-col lg="6" class="pt-0">
                        <v-card>
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                {{allCourse.length}}
                            </div>
                            <div class="text-center">
                                Total Courses
                            </div>
                        </v-card>
                    </v-col>

                    <v-col lg="6" class="pt-0">
                        <v-card>
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                {{class_count}}
                            </div>
                            <div class="text-center">
                                Total Classes
                            </div>
                        </v-card>
                    </v-col>
                </v-row>

                 <v-row>
                    <v-col cols="12">
                        <progressChart :allCourse="allCourse"> </progressChart>
                    </v-col>
                    <v-col>
                       
                    </v-col>
                </v-row>


                <v-row class="mt-0">
                    <v-col>
                        <teacherCourses></teacherCourses>
                    </v-col>
                </v-row>

            </v-col>

            <v-col lg="4">
                <v-row>
                    <v-col class="pt-0">
                        <v-card>
                            <myCalendar :role="role"></myCalendar>
                        </v-card>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col>
                        <v-card>
                            <myNotification> </myNotification>
                        </v-card>
                    </v-col>
                </v-row>


            </v-col>



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
             
            };
        },
        computed: mapGetters(['allCourse']),
        methods: {
            ...mapActions(['fetchCourseList']),
            classCount() {

                axios.get('/api/class/count')
                    .then(res => {
                        this.class_count = res.data;
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
