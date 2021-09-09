<template>
    <div>

        <v-row>

            <v-col lg="6" class="pt-0">
                <v-card>
                    <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                       {{Count.teacher}}
                    </div>
                    <div class="text-center">
                        Total Instructor
                    </div>
                </v-card>
            </v-col>


            <v-col lg="6" class="pt-0">
                <v-card>
                    <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                        {{Count.student}}
                    </div>
                    <div class="text-center">
                        Total Students
                    </div>
                </v-card>
            </v-col>
            

        </v-row>
        
        <v-row>
            <v-col lg="6" class="pt-0">
                <v-card class="pa-2">
                    <v-row>
                        <v-col cols="12">
                          <!--   <v-card class="pa-2"> -->
                               <activeOfline v-if="isLoaded" :AO_teacher="AO_teacher"></activeOfline>
                            <!-- </v-card> -->
                        </v-col>
                        <v-col lg="6" class="pt-0">
                            <!-- <v-card> -->
                                <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                {{Count.ActiveTeacher}}
                                </div>
                                <div class="text-center">
                                Online Instructor
                                </div>
                          <!--   </v-card> -->
                        </v-col>

                        <v-col lg="6" class="pt-0">
                         <!--    <v-card> -->
                                <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                    {{Count.OfflineTeacher}}
                                </div>
                                <div class="text-center">
                                    Offline Instructor
                                </div>
                          <!--   </v-card> -->
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

             <v-col lg="6" class="pt-0" >
                <v-card class="pa-2">
                    <v-row>
                        <v-col cols="12">
                            <activeOfline v-if="isLoaded" :AO_teacher="AO_Student"></activeOfline>
                        </v-col>
                        <v-col lg="6" class="pt-0">
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                            {{Count.ActiveStudent}}
                            </div>
                            <div class="text-center">
                            Online Instructor
                            </div>
                        </v-col>

                        <v-col lg="6" class="pt-0">
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                {{Count.OfflineStudent}}
                            </div>
                            <div class="text-center">
                                Offline Instructor
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>


        <!--     <v-col lg="3" class="pt-0">
                <v-card>
                    <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                        {{Count.OfflineTeacher}}
                    </div>
                    <div class="text-center">
                        Offline Instructor
                    </div>
                </v-card>
            </v-col> -->
            

            
           <!--  <v-col lg="3" class="pt-0">
                <v-card>
                    <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                       {{Count.ActiveStudent}}
                    </div>
                    <div class="text-center">
                       Online Students
                    </div>
                </v-card>
            </v-col> -->


           <!--  <v-col lg="3" class="pt-0">
                <v-card>
                    <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                        {{Count.OfflineStudent}}
                    </div>
                    <div class="text-center">
                        Offline Students
                    </div>
                </v-card>
            </v-col> -->
            

        </v-row>

    </div>
</template>

<script>
//const activeOfline = () => import('./ActiveOfflineView/ActiveOfline');
import activeOfline from './ActiveOfflineView/ActiveOfline'
    import {
        mapGetters,
        mapActions
    } from "vuex";


    import axios from 'axios';


    export default {
        props: ['role'],
        components: {
            activeOfline,
        },
        provide: {

        },

        data() {
            return {
                class_count: 0,
                unfinishCount: 0,
                Count:[],
                AO_teacher:[],
                AO_Student:[],
                isLoaded: false,

            };
        },
        methods: {
           async FetchStudentAndTeacherCount(){
               await axios.get('/api/admin/studentAndteacher/count')
                .then(res=>{
                    this.Count = res.data;
                    this.AO_teacher[0] =  res.data.ActiveTeacher;
                    this.AO_teacher[1] =  res.data.OfflineTeacher;
                    this.AO_Student[0] =  res.data.ActiveStudent;
                    this.AO_Student[1] =  res.data.OfflineStudent;
                    this.isLoaded = true;
                })
            }
        },
        mounted() {
            this.FetchStudentAndTeacherCount();
        }

    };

</script>

<style scoped>
    .chart {
        height: 400px;
    }

</style>
