<template>


    <div class="pt-4">
        <h2>
          {{role == 'Teacher' ? 'Student Progress' : 'My Progress'}}
        </h2>
      
        <v-row class="pt-2">


            <v-col>
                <v-card>
                    <v-tabs color="deep-purple accent-4" right>
                        <v-tab href="#all"  v-if="role=='Teacher'">
                            All
                        </v-tab>
                        <v-tab v-for="(main_module, index) in getmain_module" :key="index">
                            {{main_module.module_name}}
                        </v-tab>
                        <v-tab-item id="all"  v-if="role=='Teacher'">
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-center"  v-if="role=='Teacher'">
                                                Student Name
                                            </th>


                                            <th class="text-center">
                                                Total Time Spent <br>
                                                {{_mainTotalRequiredTime()}}
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
                                            <td class="text-center" v-if="role=='Teacher'">{{main.firstName}} {{main.lastName}}</td>

                                            <td class="text-center">
                                                <v-chip
                                                    :color="checkTimeSpent(main.total_time_spent,_mainTotalRequiredTimeSeconds)"
                                                    text-color="white">
                                                    {{ convertTime(main.total_time_spent)}}
                                                </v-chip>
                                            </td>
                                            <td class="text-center">
                                                {{main.completed}} / {{getAll_sub_module.length}}
                                            </td>
                                            <td class="text-center">
                                                {{(parseInt(main.completed /getAll_sub_module.length) * 100 )}}% </td>
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
                                            <th class="text-center"  v-if="role=='Teacher'">
                                                Student Name
                                            </th>

                                            <th class="text-center"
                                                v-for="(sub_module, index) in  getSub_module(main_module.id)"
                                                :key="index">
                                                {{sub_module.sub_module_name}}
                                                <br>({{ convertTime(sub_module.required_time)}})
                                            </th>

                                            <th class="text-center">
                                                Total Time Spent <br>
                                                ({{_totalRequiredTime(main_module.id)}})
                                            </th>



                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(student, index) in students" :key="index">

                                            <td class="text-center"  v-if="role=='Teacher'">
                                                {{student.firstName}} {{student.lastName}}
                                            </td>

                                            <td class="text-center"
                                                v-for="(subModule, index) in SubModuleProgress(main_module.id,student.id )"
                                                :key="index">
                                                <v-chip
                                                    :color="checkTimeSpent(subModule.time_spent,subModule.required_time)"
                                                    text-color="white">
                                                    {{  convertTime(subModule.time_spent)}}
                                                </v-chip>
                                            </td>

                                            <td class="text-center">

                                                {{ convertTime(_totalTimeSpent(SubModuleProgress(main_module.id ,student.id)))}}
                                            </td>

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
    import VueElementLoading from 'vue-element-loading'

    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {
            VueElementLoading
        },
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
                students: []
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
            checkTimeSpent(time_spent, required_time) {
                var color = time_spent >= required_time ? "green" : "red";

                return color;
            },
            _mainTotalRequiredTimeSeconds() {
                var total = 0;
                var allsubmodules = this.getAll_sub_module;
                for (var i = 0; i < allsubmodules.length; i++) {
                    total += parseFloat(allsubmodules[i].required_time);
                }
                console.log('time', allsubmodules)
                return total;

            },
            _mainTotalRequiredTime() {
                var total = 0;
                var allsubmodules = this.getAll_sub_module;
                for (var i = 0; i < allsubmodules.length; i++) {
                    total += parseFloat(allsubmodules[i].required_time);
                }
                console.log('time', allsubmodules)
                return this.convertTime(total);

            },
            _totalRequiredTime(mainModule_id) {


                var total = 0;
                var subModules_arr = this.getSub_module(mainModule_id);
                console.log(subModules_arr);
                for (var i = 0; i < subModules_arr.length; i++) {
                    total += parseFloat(subModules_arr[i].required_time);
                }
                console.log('time', subModules_arr)
                return this.convertTime(total);
            },
            _totalTimeSpent(data) {
                var total = 0;

                data.forEach(function (val) {

                    total += parseFloat(val.time_spent);
                    console.log(total);

                })
                return total;
            },

            getProgress(id, user_id) {
                SubModuleProgress(main_module.id, main.student_id)[0];

            },

            fetchStudentModuleProgress() {
                axios.get(
                    `/api/student_sub_module/all/${this.$route.params.id}`
                ).then((res) => {
                    this.studentSubModuleProgress = res.data;

                });
                this.$store.dispatch('fetchMainModule', this.$route.params.id);
                this.$store.dispatch('fetchSubModule', this.$route.params.id);
                this.$store.dispatch('studentMainProgress', this.$route.params.id);
                this.$store.dispatch('studentSubProgress', this.$route.params.id);
             
            },
            getStudentList() {
                axios.get('/api/student/all/' + this.$route.params.id)
                    .then((res) => {
                        this.students = res.data
                        setTimeout(() => {
                            this.isGetting = false;
                        }, 1000);

                    }).catch((error) => {
                        console.log(error)
                    })
            },
        },

        async mounted() {
         
            this.fetchStudentModuleProgress();
            this.getStudentList();
            for (var i = 0; i < this.students.length; i++) {

            }
        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
