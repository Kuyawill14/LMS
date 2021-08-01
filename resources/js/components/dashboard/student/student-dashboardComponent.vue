<template>
    <div>

        <v-row>
            <v-col lg="8" class="pt-0">
                <v-row>
                    <v-col lg="6" class="pt-0">
                        <v-card>
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                {{class_count}}
                            </div>
                            <div class="text-center">
                                Course Enrolled
                            </div>
                        </v-card>
                    </v-col>

                    <v-col lg="6" class="pt-0">
                        <v-card>
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                {{unfinishCount}}
                            </div>
                            <div class="text-center">
                                Unfinished Classworks
                            </div>
                        </v-card>
                    </v-col>
                </v-row>

               <!--  <v-row>
                    <v-col cols="12">
                        <studentGradeChart> </studentGradeChart>
                    </v-col>
                    <v-col>
                       
                    </v-col>
                </v-row> -->


                 <v-row class="mt-0">
            <v-col>
                <studentClasses />
            </v-col>
        </v-row>

            </v-col>

            <v-col lg="4">
                <v-row>
                    <v-col class="pt-0">
                        <v-card>
                            <myCalendar :role="role" v-on:RecieveTotalClasswork="TotalClasswork"></myCalendar>
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
    import {
        mapGetters,
        mapActions
    } from "vuex";
    const myCalendar = () => import('../myCalendar')
    const myNotification = () => import('../notificationComponent')
    const studentClasses = () => import('./student-classes')
    const studentGradeChart = () => import('./student-grades-radarChart')

    import axios from 'axios';


    export default {
        props: ['role'],
        name: "HelloWorld",
        components: {

            myCalendar,
            myNotification,
            studentClasses,
            studentGradeChart
        },
        provide: {

        },

        data() {
            return {
                class_count: 0,
                unfinishCount: 0,


            };
        },
        methods: {
            classCount() {

                axios.get('/api/class/count')
                    .then(res => {
                        this.class_count = res.data;
                    })

            },
            TotalClasswork(data) {
                console.log(data);
                this.unfinishCount = data;
            }
        },
        mounted() {
            //this.fetchCourseList();
            this.classCount();
        },
    };

</script>

<style scoped>
    .chart {
        height: 400px;
    }

</style>
