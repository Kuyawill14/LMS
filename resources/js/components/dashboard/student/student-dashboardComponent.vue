<template>
    <div>

        <v-row>
            <v-col lg="8" class="pt-0">
                <v-row>
                    <v-col lg="6" class="pt-0">
                        <v-card>
                            <div class="text-center" :style="$vuetify.breakpoint.lgAndUp ? 'font-size: 3rem;color:#FF5400' : 'font-size: 2rem;color:#FF5400'">
                                {{class_count}}
                            </div>
                            <div :class=" $vuetify.breakpoint.lgAndUp ? 'text-center' : 'text-center text-caption'">
                                Course Enrolled
                            </div>
                        </v-card>
                    </v-col>

                    <v-col lg="6" class="pt-0">
                        <v-card>
                            <div class="text-center" :style="$vuetify.breakpoint.lgAndUp ? 'font-size: 3rem;color:#FF5400' : 'font-size: 2rem;color:#FF5400'">
                                {{unfinishCount}}
                            </div>
                            <div :class=" $vuetify.breakpoint.lgAndUp ? 'text-center' : 'text-center text-caption'">
                                Unfinished Classworks
                            </div>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="mb-0" :class="!$vuetify.breakpoint.lgAndUp ? 'pt-0 mt-0' :''">
                    <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? 'pt-0 mt-0 mb-0 pb-0' :'t-0 mt-0 mb-0 pb-0'">
                        <studentGradeChart :allClass="allClass"> </studentGradeChart>
                    </v-col>
                   
                </v-row>


                <v-row class="mt-0">
                    <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? 'pt-0 mt-0' :'pt-0 mt-0'">
                        <studentClasses />
                    </v-col>
                </v-row>

            </v-col>

            <v-col lg="4"  >
                <v-row>
                    <v-col :class="$vuetify.breakpoint.lgAndUp ? 'pt-0 mt-0' :''">
                        <v-card>
                            <myCalendar :role="role" v-on:RecieveTotalClasswork="TotalClasswork"></myCalendar>
                        </v-card>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12">
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
    const studentGradeChart = () => import('./ProgressChart')
     const myTask = () => import('./myTask')
    export default {
        props: ['role'],
        components: {
            myCalendar,
            myNotification,
            studentClasses,
            studentGradeChart,
            myTask
        },
        data() {
            return {
                class_count: 0,
                unfinishCount: 0,
            };
        },
        computed: mapGetters(["allClass"]),
        methods: {
            classCount() {
                axios.get('/api/class/count')
                    .then(res => {
                        this.class_count = res.data;
                    })
            },
            TotalClasswork(data) {
                this.unfinishCount = data;
            },
            async fetchClasses() {
                this.$store.dispatch('fetchClassList');
            },
        },
        mounted() {
            this.classCount();
            this.fetchClasses();
        },
    };

</script>

<style scoped>
    .chart {
        height: 400px;
    }

</style>
