<template>


    <div>

        <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :to="{name: item.link}" :disabled="item.disabled">
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
                    <v-tabs color="primary accent-4" right>
                        <v-tab href="#all">
                            All
                        </v-tab>
                        <v-tab v-for="(main_module, index) in getmain_module" :key="index"
                            @click="changedTab(main_module.id);">
                            {{main_module.module_name}}
                        </v-tab>
                        <v-tab-item id="all">

                            <v-card-title>
                                Summary

                                <v-spacer></v-spacer>
                                <div width="50%">
                                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                        hide-details>
                                    </v-text-field>
                                </div>

                            </v-card-title>

                            <v-data-table :headers="headers" :items="filteredItems" v-if="headers.length != 0"  :loading="loading">

                                <template v-slot:body="{ items }"   v-if="students.length != 0">
                                    <tbody>
                                        <tr v-for="(student, i) in items" :key="''+i">
                                            <td class="text-left">
                                                {{student.student_id}}
                                            </td>
                                            <td class="text-left">
                                                {{student.lastName + ', ' + student.firstName + ' ' + student.middleName}}

                                            </td>

                                            <td class="text-center"
                                                v-for="(main, i) in getStudentMainModuleProgress(student.id)"
                                                :key="''+i">
                                                {{  student['id' + main.main_module_id] = main.completed }} /
                                                {{main.sub_module_length}}
                                             
                                            </td>
                                            <td class="text-center">
                                                {{student['total_completed'] = getTotalCompleted(getStudentMainModuleProgress(student.id))}}
                                            </td>


                                            <td class="text-center">
                                                {{student['total_percentage'] = getTotalPercent(getStudentMainModuleProgress(student.id))}}%
                                            </td>


                                        </tr>
                                      


                                    </tbody>
                                      <tr v-if="students.length == 0">
                                            <td class="text-center" colspan="100">
                                                No data available, please add or invite students.
                                            </td>
                                        </tr>
                                </template>
                            </v-data-table>



                        </v-tab-item>







                        <v-tab-item v-for="(main_module, index) in getmain_module" :key="index">

                            <v-card-title>
                                {{main_module.sub_module_name}}

                                <v-spacer></v-spacer>
                                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                    hide-details>
                                </v-text-field>
                            </v-card-title>

                            <v-data-table :headers="subModuleheaders" :items="filteredItems" v-if="headers.length != 0"
                                :id="'changeThis' + main_module.id" :loading="loading">

                                <template v-slot:body="{ items }">

                                    <tbody>
                                        <tr v-for="(student, index) in items" :key="index">

                                            <td class="text-left">
                                                {{student.student_id}}
                                            </td>
                                            <td class="text-left">
                                                {{student.lastName + ', ' + student.firstName + ' ' + student.middleName}}

                                            </td>

                                            <td class="text-center"
                                                v-for="(subModule, index) in SubModuleProgress(main_module.id,student.id )"
                                                :key="index">
                                      
                                                <v-chip
                                                    :color="checkTimeSpent(subModule.time_spent,subModule.required_time)"
                                                    text-color="white">
                                                    {{  student['id11'+ subModule.sub_module_id]  = convertTime(subModule.time_spent)}}
                                                </v-chip>
                                             
                                            </td>

                                            <td class="text-center">
                                                {{ student['total_completed'] = convertTime(_totalTimeSpent(SubModuleProgress(main_module.id ,student.id)))}}
                                            </td>

                                        </tr>
                                        <tr v-if="students.length == 0">
                                            <td class="text-center" colspan="100">
                                                No data available, please add or invite students.
                                            </td>
                                        </tr>

                                    </tbody>
                                </template>
                            </v-data-table>

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
        props: ['role'],
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
                items: [{
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
                headers: [

                    {
                        text: 'ID',
                        value: 'student_id',
                        align: 'start',
                    },
                    {
                        text: 'Student Name',
                        value: 'lastName',
                        align: 'start',
                    },

                ],
                subModuleheaders: [



                ],
                timerChange: null,

            }

        },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module", "getStudentMainModuleProgress",
                "SubModuleProgress", 'allClass'
            ]),
            filteredItems() {
                if (this.search) {
                    return this.students.filter((item) => {
                         return this.search.toLowerCase().split(' ').every(v => item.firstName.toLowerCase()
                            .includes(v) || item.lastName.toLowerCase()
                            .includes(v) || item.middleName.toLowerCase()
                            .includes(v) || item.student_id == null ? item.lastName.toLowerCase()
                            .includes(v) :item.student_id.toString().includes(v))
                    })
                } else {
                    return this.students;
                }

            }
        },

        methods: {
            fixedHeader(main_module_id, sub_headers) {
                clearInterval(this.timerChange);
                this.timerChange = setInterval(() => {
                
                    let _headerNode = document.querySelectorAll(
                        '#changeThis' + main_module_id + '> div >table > thead > tr> th > span')


                    for (let i = 2; i < sub_headers.length; i++) {
                        document.querySelectorAll('#changeThis' + main_module_id +
                                ' > div >table > thead > tr> th ')[i].innerHTML =
                            sub_headers[i].text;

                    }
                }, 100)

            },
            changedTab(main_module_id) {
                this.subModuleHeaders(main_module_id);




            },
            subModuleHeaders(main_module_id) {
                let submodule_header = [];
                submodule_header.push({
                    text: 'ID',
                    value: 'student_id',
                    align: 'start',
                }, {
                    text: 'Student Name',
                    value: 'lastName',
                    align: 'start',
                }, )
                let subModule = this.getSub_module(main_module_id);
                //console.log(subModule);
                for (let i = 0; i < subModule.length; i++) {
                    submodule_header.push({
                        text: subModule[i].sub_module_name + '<br>(' + this.convertTime(subModule[i]
                            .required_time * 60) + ')',
                        value: 'id11' + subModule[i].id,
                        align: 'center',
                    })


                }
                submodule_header.push({
                    text: 'Total  Completed',
                    value: 'total_completed',
                    align: 'center',
                })

                this.subModuleheaders = submodule_header;
                this.fixedHeader(main_module_id, submodule_header);


            },
            allHeaders() {

                for (let i = 0; i < this.getmain_module.length; i++) {
                    this.headers.push({
                        text: this.getmain_module[i].module_name,
                        value: 'id' + this.getmain_module[i].id,
                        align: 'center',
                    })


                   

                }
                this.headers.push({
                    text: 'Total  Completed',
                    value: 'total_completed',
                    align: 'center',
                }, {
                    text: 'Percentage',
                    value: 'total_percentage',
                    align: 'center',
                }, )


            },
            
            convertTime(time) {
             

                var d = Number(time);
                var h = Math.floor(d / 3600);
                var m = Math.floor(d % 3600 / 60);
                var s = Math.floor(d % 3600 % 60);


                if (h < 10) {
                    h = "0" + h;
                }
                if (m < 10) {
                    m = "0" + m;
                }
                if (s < 10) {
                    s = "0" + s;
                }
                var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
                var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
                var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
                return h + ':' + m + ':' + s;
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
                if (isNaN(result)) {
                    result = 0;
                }
                ////console.log('NAN bf' , result)
                return parseFloat(result.toFixed(2));
            },
            _mainTotalRequiredTimeSeconds() {
                var total = 0;
                var allsubmodules = this.getAll_sub_module;
                for (var i = 0; i < allsubmodules.length; i++) {
                    total += parseFloat(allsubmodules[i].required_time);
                }
                //   ////console.log('time', allsubmodules)
                return total;

            },
            _mainTotalRequiredTime() {
                var total = 0;
                var allsubmodules = this.getAll_sub_module;
                for (var i = 0; i < allsubmodules.length; i++) {
                    total += parseFloat(allsubmodules[i].required_time);
                }
                // ////console.log('time', allsubmodules)
                return this.convertTime(total);

            },
            _totalRequiredTime(mainModule_id) {


                var total = 0;
                var subModules_arr = this.getSub_module(mainModule_id);
                //   ////console.log(subModules_arr);
                for (var i = 0; i < subModules_arr.length; i++) {
                    total += parseFloat(subModules_arr[i].required_time);
                }
                //  ////console.log('time', subModules_arr)
                return this.convertTime(total);
            },
            _totalTimeSpent(data) {
                var total = 0;

                data.forEach(function (val) {

                    total += parseFloat(val.time_spent);
                    //    ////console.log(total);

                })
                return total;
            },

            getProgress(id, user_id) {
                SubModuleProgress(main_module.id, main.student_id)[0];

            },

            fetchStudentModuleProgress() {
                this.loading = true;
                axios.get(
                    `/api/student_sub_module/all/${this.$route.params.id}`
                ).then((res) => {
                    this.studentSubModuleProgress = res.data;

                });
                this.$store.dispatch('fetchMainModule', this.$route.params.id).then(() => {
                    this.allHeaders();
                });
                this.$store.dispatch('fetchSubModule', this.$route.params.id);

                this.$store.dispatch('studentSubProgress', this.$route.params.id);


            },
            getStudentList() {
                this.loading = true;
                axios.get('/api/student/all_by_class/' + this.selectedClass)
                    .then((res) => {
                        this.students = res.data


                    }).catch((error) => {
                        ////console.log(error)
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
        beforeDestroy() {
clearInterval( this.timerChange);
        },

        mounted() {
            this.loading = true;
            this.fetchStudentModuleProgress();
            this.getClassList();
            this.loading = false;
             $('head > title').text('Students Progress');





        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
