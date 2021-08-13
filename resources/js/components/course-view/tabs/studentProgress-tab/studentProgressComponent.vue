          <template>


    <div >

    <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
        <template v-slot:item="{ item }">
        <v-breadcrumbs-item
            :to="{name: item.link}"
            :disabled="item.disabled"
        >
            {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
        </template>
    </v-breadcrumbs>

        <v-row class="pt-1">
            <v-col cols="6">

                <h2>
                    {{role == 'Teacher' ? 'Student Progress' : 'My Progress'}}
                </h2>
            </v-col>
            <v-col cols="6" v-if="role == 'Teacher' ">
                <v-select :items="classList" v-model="selectedClass" @change="getStudentList()" item-text='class_name'
                    item-value='class_id' label="Select Class" class="float-right">
                </v-select>
            </v-col>
        </v-row>
        <v-row class="pt-2">


            <v-col>
                <v-card>
                    <v-tabs color="deep-purple accent-4" right>
                        <v-tab href="#all" v-if="role=='Teacher'">
                            All
                        </v-tab>
                        <v-tab v-for="(main_module, index) in getmain_module" :key="index">
                            {{main_module.module_name}}
                        </v-tab>
                        <v-tab-item id="all" v-if="role=='Teacher'">
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-center" v-if="role=='Teacher'">
                                                Student Name
                                            </th>


                                            <th class="text-center" v-for="(main_module, index) in getmain_module"
                                                :key="index">
                                                {{main_module.module_name}} <br>
                                                Completed
                                            </th>
                                            <th class="text-center">
                                                Total Completed
                                            </th>

                                            <th class="text-center">
                                                Percentage
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody v-if="loading == false">
                                        <tr v-for="(student, i) in students" :key="''+i">
                                            <td class="text-center" v-if="role=='Teacher'">{{student.firstName}}
                                                {{student.lastName}}

                                            </td>

                                            <td class="text-center"
                                                v-for="(main, i) in getStudentMainModuleProgress(student.id)"
                                                :key="''+i">
                                                {{main.completed}} / {{main.sub_module_length}}
                                            </td>
                                            <td class="text-center">
                                                {{getTotalCompleted(getStudentMainModuleProgress(student.id))}}</td>


                                            <td class="text-center">
                                                {{getTotalPercent(getStudentMainModuleProgress(student.id))}}%</td>





                                        </tr>
                                        <tr v-if="students.length == 0">
                                            <td class="text-center" colspan="100">
                                                No data available, please add or invite students.
                                            </td>
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
                                            <th class="text-center" v-if="role=='Teacher'">
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

                                            <td class="text-center" v-if="role=='Teacher'">
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
                loading: true,
                type: '',
                search: "",
                grading_criteria_form: {},
                grading_criteria: {},
                course_id: '',
                delId: '',
                studentSubModuleProgress: [],
                totalTimeSpent: 0,
                students: [],
                classList: [],
                selectedClass: [],
                items: [
                    {
                    text: 'Course',
                    disabled: false,
                    link: 'courses',
                    },
                    {
                    text: this.role == "Teacher" ? 'Student Progress' : 'My Progress ',
                    disabled: true,
                    link: 'studentProgress',
                    },
                ],

            }

        },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module", "getStudentMainModuleProgress",
                "SubModuleProgress", 'allClass'
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
            getTotalCompleted(arr) {
                var total_complete = 0,
                    length = 0,
                    result = 0;

                for (var i = 0; i < arr.length; i++) {
                    total_complete += arr[i].completed;

                    length += arr[i].sub_module_length;
                }

                return total_complete + '/' + length;
            },
            getTotalPercent(arr) {
                var total_complete = 0,
                    length = 0,
                    result = 0;

                for (var i = 0; i < arr.length; i++) {
                    total_complete += arr[i].completed;

                    length += arr[i].sub_module_length;
                }
                result = (total_complete / length) * 100;
                if(isNaN(result)) {
                    result = 0;
                }
                console.log('NAN bf' , result)
                return parseFloat(result.toFixed(2));
            },
            _mainTotalRequiredTimeSeconds() {
                var total = 0;
                var allsubmodules = this.getAll_sub_module;
                for (var i = 0; i < allsubmodules.length; i++) {
                    total += parseFloat(allsubmodules[i].required_time);
                }
                //   console.log('time', allsubmodules)
                return total;

            },
            _mainTotalRequiredTime() {
                var total = 0;
                var allsubmodules = this.getAll_sub_module;
                for (var i = 0; i < allsubmodules.length; i++) {
                    total += parseFloat(allsubmodules[i].required_time);
                }
                // console.log('time', allsubmodules)
                return this.convertTime(total);

            },
            _totalRequiredTime(mainModule_id) {


                var total = 0;
                var subModules_arr = this.getSub_module(mainModule_id);
                //   console.log(subModules_arr);
                for (var i = 0; i < subModules_arr.length; i++) {
                    total += parseFloat(subModules_arr[i].required_time);
                }
                //  console.log('time', subModules_arr)
                return this.convertTime(total);
            },
            _totalTimeSpent(data) {
                var total = 0;

                data.forEach(function (val) {

                    total += parseFloat(val.time_spent);
                    //    console.log(total);

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

                this.$store.dispatch('studentSubProgress', this.$route.params.id);

            },
            getStudentList() {
                this.loading = true;
                axios.get('/api/student/all_by_class/' + this.selectedClass)
                    .then((res) => {
                        this.students = res.data


                    }).catch((error) => {
                        console.log(error)
                    })
                this.$store.dispatch('studentMainProgress', this.selectedClass).then(() => {
                    this.loading = false;
                });

            },
            getClassList() {
                this.$store.dispatch('fetchSubjectCourseClassList', this.$route.params.id).then(() => {
                    this.classList = this.allClass;
                    this.selectedClass = this.classList[0].class_id;
                    this.getStudentList();
                    this.loading = false;
                });


            },
        },

        mounted() {
            this.loading = true;
            this.fetchStudentModuleProgress();
            this.getClassList();
            this.loading = false;



        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
