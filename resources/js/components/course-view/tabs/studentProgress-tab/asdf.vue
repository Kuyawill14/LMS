<template>


    <div class="pt-4">
        <h2>
            Student Progress
        </h2>
        <v-btn bottom color="primary" dark fab fixed right @click="openAdd()">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-row class="pt-2">


            <v-col>
                <v-card>
                    <v-tabs color="deep-purple accent-4" right>
                        <v-tab href="#all">
                            All
                        </v-tab>
                        <v-tab v-for="(main_module, index) in getmain_module" :key="index">
                            {{main_module.module_name}}
                        </v-tab>
                        <v-tab-item id="all">
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-center">
                                                Student Name
                                            </th>

                                            <th class="text-center">
                                                Total Time Spent
                                            </th>
                                            <th class="text-center">
                                                Total Time Required Time
                                            </th>
                                            <th class="text-center">
                                                Completed
                                            </th>
                                            <th class="text-center">
                                                Percentage
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(main, i) in getStudentMainModuleProgress"
                                            :key="'get_gradingCriteria'+i">
                                            <td class="text-center">{{main.firstName}} {{main.lastName}}</td>

                                            <td class="text-center">{{ convertTime(main.total_time_spent)}}</td>
                                            <td class="text-center">{{ convertTime(main.total_required_time)}}</td>
                                            <td class="text-center">{{main.completed}} / {{getAll_sub_module.length}}
                                            </td>
                                            <td class="text-center">
                                                {{(main.completed /getAll_sub_module.length) * 100 }}% </td>
                                        </tr>


                                    </tbody>
                                </template>
                            </v-simple-table>


                        </v-tab-item>
                        <v-tab-item v-for="(main_module, index) in getmain_module" :key="index">

                            <v-card-title>
                                {{main_module.module_name}}

                                <v-spacer></v-spacer>
                                <!-- <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                    hide-details>
                                </v-text-field> -->
                            </v-card-title>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-center">
                                                Student Name
                                            </th>

                                            <th class="text-center"
                                                v-for="(sub_module, index) in  getSub_module(main_module.id)"
                                                :key="index">
                                                {{sub_module.sub_module_name}} ({{sub_module.required_time}})
                                            </th>

                                            <th class="text-center">
                                                Total Time Spent
                                            </th>
                                            <th class="text-center">
                                                Total Required Time
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(student, i) in students"
                                            :key="'get_gradingCriteria'+i">

                                            <td class="text-center">{{student.firstName}} {{student.lastName}}
                                                {{SubModuleProgress(main_module.id ,student.id).length}}</td>

                                            <td class="text-center"
                                                v-for="(subModule, index) in SubModuleProgress(main_module.id ,student.id)"
                                                :key="index">
                                                {{ convertTime(subModule.time_spent)}}
                                            </td>

                                            <!-- <td> {{ SubModuleProgress(main_module.id ,main.student_id)}} </td>
                                            <td class="text-center"
                                                v-for="(subModule, index) in  getSub_module(main_module.id)"
                                                :key="index"
                                                v-if="SubModuleProgress(main_module.id ,main.student_id).length == 0">
                                                -
                                            </td>


                                            <td class="text-center">
                                                {{ convertTime(_totalTimeSpent(SubModuleProgress(main_module.id ,student.id)))}}
                                            </td>
                                            <td class="text-center">
                                                {{convertTime(_totalRequiredTime(SubModuleProgress(main_module.id ,student.id)))}}
                                            </td> -->

                                        </tr>


                                    </tbody>
                                </template>
                            </v-simple-table>

                        </v-tab-item>
                    </v-tabs>
                </v-card>

            </v-col>
        </v-row>

    </div>



</template>
<style scoped>

</style>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data: function () {
            return {
                Deldialog: false,
                dialog: false,
                temp_id: '',
                loading: false,
                type: '',
                search: "",
                grading_criteria_form: {},
                grading_criteria: {},
                course_id: '',
                delId: '',
                studentSubModuleProgress: [],
                totalTimeSpent: 0,
                students: [],
                    studentsProgressData: []
            }

        },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module", "getStudentMainModuleProgress",
                "SubModuleProgress"
            ])
        },

        methods: {
            convertTime(time) {
                return new Date(parseInt(time) * 1000).toISOString().substr(11, 8);
            },

            getCount(arr, mainModule_id) {

                var count = 0;
                var subModules_arr = this.getSub_module(mainModule_id);
                ////console.log(subModules_arr);
                for (var i = 0; i < subModules_arr.length; i++) {
                    for (var j = 0; j < arr.length; j++) {

                        if (arr[j] !== undefined && subModules_arr[i] !== undefined) {
                            if (arr[j].sub_module_id == subModules_arr[i].id) {
                                if (arr[j].time_spent >= subModules_arr[i].required_time) {

                                    count++;
                                }
                            }
                        }


                    }


                }
                return count;
            },
            _totalTimeSpent(data) {
                var total = 0;

                data.forEach(function (val) {

                    total += parseFloat(val.time_spent);
                    ////console.log(total);

                })
                return total;
            },
            _totalRequiredTime(data) {
                var total = 0;

                data.forEach(function (val) {

                    total += parseFloat(val.required_time);
                    ////console.log(total);

                })
                return total;
            },
            getProgress(id, user_id) {
                SubModuleProgress(main_module.id, main.student_id)[0];

            },

            async fetchStudentModuleProgress() {
                axios.get(
                    `/api/student_sub_module/all/${this.$route.params.id}`
                ).then((res) => {
                    this.studentSubModuleProgress = res.data;
                    
                });
                await this.$store.dispatch('fetchMainModule', this.$route.params.id);
               await this.$store.dispatch('fetchSubModule', this.$route.params.id);
               await  this.$store.dispatch('studentMainProgress', this.$route.params.id);
                await this.$store.dispatch('studentSubProgress', this.$route.params.id);
          

            },
             getStudentList(){
                axios.get('/api/student/all/'+this.$route.params.id)
                .then((res)=>{
                    this.students = res.data
                     setTimeout(() => {
                        this.isGetting = false;
                    }, 1000);

                }).catch((error)=>{
                    ////console.log(error)
                })
            },
        },

        async mounted () {
            this.getStudentList();
            await this.fetchStudentModuleProgress();
            //       ////console.log('sub', this.getSub_module(2));
            // ////console.log('prog', this.SubModuleProgress(2 ,1));
        
            // for(var i = 0; i < this.students.length; i++) {
             
            //    for(var j =0; j < this.getSub_module(2).length; j++){
            //        ////console.log(i);
            //            var  tmp = this.students[i].id;
            //             this.getSub_module(2)[j].student_id = tmp;
            //                ////console.log('studet',   this.getSub_module(2)[j].student_id);
            //            this.studentsProgressData.push(this.getSub_module(2)[j])
                   
            //    }
            //      ////console.log(this.studentsProgressData);
            // }
          
        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
