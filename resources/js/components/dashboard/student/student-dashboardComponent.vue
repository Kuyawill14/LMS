<template>
    <div>
        <v-row>
            <v-col>
                <h2>Dashboard</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" lg="8" class="pt-0">
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

                <v-row v-if="$vuetify.breakpoint.mdAndUp || selected == 0"  class="mb-0" :class="!$vuetify.breakpoint.lgAndUp ? 'pt-0 mt-0' :''">
                    <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? 'pt-0 mt-0 mb-0 pb-0' :'t-0 mt-0 mb-0 pb-0'">
                        <studentGradeChart :allClass="allClass"> </studentGradeChart>
                    </v-col>
                   
                </v-row>


                <v-row v-if="$vuetify.breakpoint.mdAndUp || selected == 0"  class="mt-0">
                    <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? 'pt-0 mt-0' :'pt-0 mt-0'">
                        <studentClasses />
                    </v-col>
                </v-row>

            </v-col>

            <v-col cols="12" lg="4" :class="$vuetify.breakpoint.mdAndUp ? 'pt-0' : 'pt-0 mt-0'" >
                <v-row v-if="$vuetify.breakpoint.mdAndUp || selected == 1">
                    <v-col cols="12" :class="$vuetify.breakpoint.mdAndUp ? 'mt-0 pt-0 ' :''">
                        <v-card outlined elevation="2">
                            <myTask :mytaskData="mytaskData" v-on:RecieveTotalClasswork="TotalClasswork"> </myTask>
                         </v-card>
                    </v-col>
                </v-row>


                <v-row v-if="$vuetify.breakpoint.mdAndUp || selected == 2">
                    <v-col cols="12" :class="$vuetify.breakpoint.mdAndUp ? 'pt-2 mt-2' :'pt-3 mt-3'">
                         <v-card @click="$vuetify.breakpoint.mdAndUp ? calendarDialog = true : ''" elevation="2">
                                <v-dialog transition="dialog-bottom-transition" max-width="1000"  v-model="calendarDialog" id="calendar_modal">
                                    <v-card  class="pa-3">
                                        <myCalendar  :role="role"></myCalendar>
                                         <br> 
                                    </v-card>
                                </v-dialog>
                            <myCalendar :role="role" ></myCalendar>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-bottom-navigation
            v-if="role == 'Student' && !$vuetify.breakpoint.mdAndUp"
            :value="selected" color="primary" app grow>
            <v-btn @click="selected = 0">
                <span style="font-size:10px">Progress/Classes</span>
                <v-icon>mdi-chart-box-outline</v-icon>
            </v-btn>
            <v-btn @click="selected = 1">
                <span style="font-size:10px">My Task</span>
                <v-badge offset-x="8" offset-y="8" color="red" :value="unfinishCount" :content="unfinishCount">
                     <v-icon>mdi-clipboard-edit-outline</v-icon>
                </v-badge>
               
            </v-btn>
            <v-btn @click="selected = 2">
                <span style="font-size:10px">My Calendar</span>
                <v-icon>mdi-calendar</v-icon>
            </v-btn>
          
        </v-bottom-navigation>
       
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    const myCalendar = () => import('../myCalendar')
    const studentClasses = () => import('./student-classes')
    const studentGradeChart = () => import('./ProgressChart')
    const myTask = () => import('./myTask')
    export default {
        props: ['role'],
        components: {
            myCalendar,
            studentClasses,
            studentGradeChart,
            myTask
        },
        data() {
            return {
                class_count: 0,
                unfinishCount: 0,
                selected: 0,
                calendarDialog: false,
                mytaskData: []
            };
        },
        computed: mapGetters(["allClass"]),
        methods: {
            classCount() {
                axios.get('/api/class/count')
                    .then(res => {
                        this.class_count = res.data.classCount;
                    })
            },
            TotalClasswork(data) {
                this.unfinishCount = data;
                console.log(unfinishCount);
            },
            async fetchClasses() {
                this.$store.dispatch('fetchClassList');
            },
            async fetchTodayTask(){
                await axios.get('/api/profile/taskToday')
                    .then(res => {
                        this.mytaskData = res.data;
                        this.unfinishCount = this.mytaskData.length;
                        //this.$emit('RecieveTotalClasswork',this.mytask.length)
                    })
            }
        },
        mounted() {
            this.classCount();
            this.fetchClasses();
            this.fetchTodayTask();
        },
    };

</script>

<style scoped>
    .chart {
        height: 400px;
    }

</style>
