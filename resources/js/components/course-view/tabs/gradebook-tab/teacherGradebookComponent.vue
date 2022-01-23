<template>
    <div>
        <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :to="{name: item.link}" :disabled="item.disabled">
                    {{ item.text.toUpperCase() }}
                </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
        <v-row>
            <v-col cols="12">
                <div class="downloads float-right">

                    <v-btn @click="test('testTable')">
                        <v-icon color="grey lighten-1" left>
                            download
                        </v-icon>
                        Download Grades
                    </v-btn>


                </div>
            </v-col>

        </v-row>
        <v-row class="pt-2">

            <v-col cols="6">

                <h2>
                    Student Grades
                </h2>
            </v-col>
            <v-col cols="6">
                <v-select :items="classList" v-model="selectedClass" @change="getClassworkList(true); "
                    item-text='class_name' item-value='class_id' label="Select Class" class="float-right">
                </v-select>
            </v-col>
        </v-row>
        <v-card>
            <v-tabs color="orange accent-4" right :disabled="loading">
                <v-tab href="#final_grades" @click="_getFInalGradestTab()" active>
                    Final Grades
                </v-tab>
                <v-tab v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index"
                    @click="_getClassworkListbyTab(gradingCriteria.id);click_id =gradingCriteria.id"
                    :disabled=" loading == true">
                    {{gradingCriteria.name}}
                </v-tab>
                <v-tab-item id="final_grades">

                    <!-- students -->
                    <finalGradesGrades :floader="loading" :grading_criteria="get_gradingCriteria"
                        :students="students" />

                </v-tab-item>

                <v-tab-item v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index">

                    <v-card-title>
                        {{gradingCriteria.name}} - {{gradingCriteria.percentage}}%



                        <v-spacer></v-spacer>
                        <div width="50%">
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                hide-details>
                            </v-text-field>
                        </div>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="filteredItems" :sort-desc.sync="sortDesc" :sortBy="'points'"
                        :loading="loading">
                        <!-- <template v-for="h in headers" v-slot:[`header.${h.value}`]="{  }">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on">{{h.text}}</span>
                                </template>
                                <span>{{h.text}}</span>
                            </v-tooltip>
                        </template> -->
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="student in items" :key="student.id">
                                     <td class="text-left">{{student.student_id}} </td>
                                    <td>{{student.lastName + ', ' + student.firstName }} </td>

                                    <td class="text-center"
                                        v-for="(classworkGrades, index) in AllStudentClassworkGrades(student.id,gradingCriteria.id)"
                                        :key="index">

                                        {{student['points'+classworkGrades.classwork_id] = classworkGrades.points}}

                                        <span class="text-caption" color="grey" v-if="classworkGrades.points != null"> /
                                            {{classworkGrades.hp_points}}
                                        </span>

                                        <v-tooltip v-model="shown" top v-if="classworkGrades.points == null">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon v-bind="attrs" v-on="on">
                                                    <v-icon color="grey lighten-1">
                                                        mdi-close
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                            <span>No Submission</span>
                                        </v-tooltip>


                                    </td>

                                    <td class="text-center">
                                        {{student['total'] = totalPoints(AllStudentClassworkGrades(student.id,gradingCriteria.id))}}
                                    </td>
                                    <td class="text-center">
                                        {{student['Initial Percentage'] = totalPercentage(AllStudentClassworkGrades(student.id,gradingCriteria.id),gradingCriteria.percentage)}}%
                                    </td>

                                    <!-- <td class="text-center">
                                        {{student['Transmuted Percentage'] = transmutedGrade(totalPoints(AllStudentClassworkGrades(student.id,gradingCriteria.id)),gradingCriteria.percentage)}}%
                                    </td> -->


                                </tr>
                                <tr v-if="students.length == 0">
                                    <td class="text-center" colspan="100">
                                        No data available, please add or invite students.
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-data-table>
                    <!-- {{headers}} -->
                </v-tab-item>
            </v-tabs>
        </v-card>





        <table id="testTable" v-if="loading == false" class="tableExp" border="1" style="display:none">

            <tr>
                <th colspan="30" style="font-size: 35px;background: #e76a02;color: #fff;text-align:left">
                    {{getcourseInfo.course_code +'-'+ getcourseInfo.course_name}} ({{selectedClassName}})
                    </th>
            </tr>
            <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th class="text-center" :colspan="classworkData(allclasswork,gradingCriteria.id).length"
                    v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index">
                    {{ gradingCriteria.name}} ({{gradingCriteria.percentage}}%)

                    <table class="tableExp">
                        <tr>
                            <th v-for="(classwork, index) in classworkData(allclasswork,gradingCriteria.id) "
                                :key="index">
                                {{classwork.title}}
                            </th>
                            <th>
                                Total Points
                            </th>
                            <th>
                                Percent
                            </th>


                        </tr>

                        <tr>
                            <th v-for="(classwork, index) in classworkData(allclasswork,gradingCriteria.id) "
                                :key="index">
                                {{classwork.points}}
                            </th>
                            <th>
                                {{ gettableTotalPoints( allclasswork, gradingCriteria.id)}}
                            </th>
                            <th>
                                {{gradingCriteria.percentage}}%
                            </th>


                        </tr>
                    </table>
                </th>
                <th rowspan="1" class="text-center">
                    Raw Grade</th>
                <th rowspan="1" class="text-center">
                    Transmuted Grade</th>
                <th rowspan="1" class="text-center">
                    Final Grade</th>
            </tr>

            <tr v-for="student in students" :key="student.id">
                <td class="text-left">{{student.student_id}} </td>
                <td class="text-left">{{student.lastName + ', ' + student.firstName }} </td>


                <td class="text-center" :colspan="classworkData(allclasswork,gradingCriteria.id).length"
                    v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index">
                    <table class="tableExp">
                        <tr>
                            <td v-for="(classwork, index) in AllStudentClassworkGrades(student.id,gradingCriteria.id)"
                                :key="index">
                                {{classwork.points == null ? 0 : classwork.points}}
                            </td>

                            <th>
                                {{totalPoints(AllStudentClassworkGrades(student.id,gradingCriteria.id),gettableTotalPoints( allclasswork, gradingCriteria.id))}}

                            </th>
                            <th>
                                {{totalPercentage(AllStudentClassworkGrades(student.id,gradingCriteria.id),gradingCriteria.percentage,gettableTotalPoints( allclasswork, gradingCriteria.id))}}%
                            </th>
                        </tr>



                    </table>


                </td>

                <td class="text-center">
                    {{sumPercentage(allStudentFinalGrades(student.id))}}
                </td>

                <td class="text-center">
                    {{sumTransmutedGrade(allStudentFinalGrades(student.id))}}

                </td>


                <td class="text-center">
                    {{ transmuteFinalGrade(sumTransmutedGrade(allStudentFinalGrades(student.id)))}}

                </td>


            </tr>
            <tr v-if="students.length == 0">
                <td class="text-center" colspan="100">
                    No data available, please add or invite students.
                </td>
            </tr>
        </table>



    </div>
</template>


<script>
    import excel from 'vue-excel-export'
    const finalGradesGrades = () => import('./final-grades-teacherGradebook.vue')
    Vue.use(excel)
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data: function () {
            return {

                tab_id: null,
                grading_criteria_data: [],
                allclasswork: null,
                activeTab: null,
                shown: false,
                selectedClassName: '',
                selectedClass: null,
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
                classworkList: [],
                headers: [],
                classList: [],
                students: [],
                classworkTotalPoints: 0,
                classworkTotalPointsTable: null,
                final_grades: [],
                final_grades_headers: [],
                items: [{
                        text: 'Course',
                        disabled: false,
                        link: 'courses',
                    },
                    {
                        text: 'Grade Book',
                        disabled: true,
                        link: 'gradebook',
                    },
                ],
                sortDesc: false,

            }

        },
        computed: {
            ...mapGetters(["getcourseInfo"]),
            ...mapGetters(["get_gradingCriteria", "allClass", "AllStudentClassworkGrades", "allStudentFinalGrades",
                "AllStudentClassworkGradesFortable","getClassesNames"
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
        components: {
            finalGradesGrades
        },

        methods: {
            f_grades_headers() {

            },
            sortPoints() {
                this.sortDesc = !this.sortDesc;
            },
            transmuteFinalGrade(grade) {


                let eq = "5.0";
                if (grade >= 98) {
                    eq = "1.0";
                } else if (grade >= 95) {
                    eq = "1.25";
                } else if (grade >= 92) {
                    eq = "1.5";
                } else if (grade >= 89) {
                    eq = "1.75";
                } else if (grade >= 86) {
                    eq = "2.0";
                } else if (grade >= 83) {
                    eq = "2.25";
                } else if (grade >= 80) {
                    eq = "2.5";
                } else if (grade >= 77) {
                    eq = " 2.75";
                } else if (grade >= 75) {
                    eq = "3.0";
                } else {
                    eq = "5.0";
                }
                return eq.toString();

            },
            classworkData(arr, id) {
                var tmp_arr = [];
                if (arr) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].grading_criteria_id == id) {
                            tmp_arr.push(arr[i]);
                        }
                    }

                }

                return tmp_arr;

            },
            gettableTotalPoints(classworkList, grading_id) {
                var total = 0;
                if (classworkList != null) {

                    for (var i = 0; i < classworkList.length; i++) {
                        if (classworkList[i].grading_criteria_id == grading_id) {
                            total += classworkList[i]['points'];
                        }

                    }

                }
                return total;
            },
            transmutedGrade(total_score, percentage) {
                if (this.classworkTotalPoints) {
                    return (((((total_score / this.classworkTotalPoints) * 100) / 2) + 50) * percentage / 100).toFixed(
                        2);
                } else {
                    return 0;
                }

            },
            sumTransmutedGrade(arr) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['transmuted_grade_percentage'];
                }
                return total.toFixed(2);
            },
            sumPercentage(arr) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['grade_percentage'];
                }
                return total.toFixed(2);
            },
            totalPercentHeader() {
                this.headers.push({
                        text: 'Total Points' + ' (' + this.classworkTotalPoints + 'pts)',
                        align: 'center',
                        value: 'total',

                    }, {
                        text: 'Percentage',
                        align: 'center',
                        value: 'Initial Percentage',


                    },
                    //  {
                    //     text: 'T. Percentage',
                    //     align: 'center',
                    //     value: 'Transmuted Percentage',

                    // }

                );
            },
            classworkTotalPoins() {

            },
            totalPoints(arr) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['points'];
                }
                return total;
            },
            totalPercentage(arr, grading_percentage, totalPoints) {
                // ////console.log(totalPoints, 'this.classworkTotalPointsthis.classworkTotalPoints')
                var total = 0;
                let result;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['points'];
                }
                if (totalPoints == null) {
                    result = (total / this.classworkTotalPoints) * grading_percentage;
                } else {
                    result = (total / totalPoints) * grading_percentage;
                }

                return isNaN(result) == true ? 0 : result.toFixed(2);
            },
            getStudentList() {
                axios.get('/api/student/all_by_class/' + this.selectedClass)
                    .then((res) => {
                        this.students = res.data

                    }).catch((error) => {
                        ////console.log(error)
                    })
            },

            getClassworkList(isSelected) {
                this.headers = [];
                this.loading = true;
                var total = 0;
                if (isSelected) {
                    this.getStudentList();

            
                    for(var i = 0; i < this.classList.length; i++)  {
                        if(this.classList[i].class_id == this.selectedClass) {
                            this.selectedClassName =this.classList[i].class_name;
                            break;
                        }
                    }
                }



                this.headers.push(   {
                        text: 'ID',
                        value: 'student_id',
                        align: 'start',
                    },{
                    text: 'Name',
                    value: 'lastName'
                });

                axios.get('/api/grade-book/classworks/' + this.selectedClass).then(res => {
                    this.classworkList = res.data;
                    if (this.allclasswork == null) {
                        this.allclasswork = res.data;
                    }

                    ////console.log(this.allclasswork, 'sadfasdfasdfasdfasd fallclasswork');
                    for (var i = 0; i < this.classworkList.length; i++) {

                        // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
                        if (this.classworkList[i]['grading_criteria_id'] == this.get_gradingCriteria[0].id) {
                            this.headers.push({
                                text: this.classworkList[i]['title'] + ' (' + this.classworkList[i][
                                    'points'
                                ] + 'pts)',
                                align: 'center',
                                value: 'points' + this.classworkList[i]['classwork_id']
                            });
                            total += this.classworkList[i]['points'];
                        }

                    }

                    //    ////console.log(grading_criteria_id)



                    // this.totalPercentHeader();
                })

                var data = {
                    course_id: this.$route.params.id,
                    class_id: this.selectedClass
                };
                this.$store.dispatch('fetchAllStudentClassworkGrades', this.selectedClass);
                this.$store.dispatch('fetchAllStudentFinalGrades', data).then(() => {
                    this.loading = false;``
                });

            },
            _getFInalGradestTab() {
                this.activeTab = 'finalgrades';
            },
            _getClassworkListbyTab(grading_criteria_id, index) {


                if (this.activeTab != grading_criteria_id) {
                    this.headers = [];
                    this.activeTab = grading_criteria_id;
                    this.$store.dispatch("fetchNotification", this.notificationType)
                    var total = 0;

                    this.headers.push(   {
                        text: 'ID',
                        value: 'student_id',
                        align: 'start',
                    },{
                        text: 'Name',
                        value: 'lastName'
                    });

                    this.loading = true;
                    axios.get('/api/grade-book/classworks/' + this.selectedClass).then(res => {
                        this.classworkList = res.data;


                        for (var i = 0; i < this.classworkList.length; i++) {
                            // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
                            if (this.classworkList[i]['grading_criteria_id'] == grading_criteria_id) {
                                this.headers.push({
                                    text: this.classworkList[i]['title'] + ' (' + this.classworkList[i][
                                        'points'
                                    ] + 'pts)',
                                    align: 'center',
                                    value: 'points' + this.classworkList[i]['classwork_id']
                                });
                                total += this.classworkList[i]['points'];
                            }

                        }
                        this.classworkTotalPoints = total;
                        this.totalPercentHeader();
                        this.loading = false;

                    })
                }

            },
            getStudentClassworksGrades(grading_criteria_id) {
                axios.get('/api/grade-book/classworkGrades/' + this.selectedClass).then(res => {
                    this.classworkList = res.data;


                    for (var i = 0; i < this.classworkList.length; i++) {

                        if (this.classworkList[i]['grading_criteria_id'] == grading_criteria_id) {

                        }

                    }
                })
            },

            _totalPercent(percentage_data) {
                var total = 0;

                percentage_data.forEach(function (val) {

                    total += parseFloat(val.percentage);


                })
                return total;
            },
            getClassList() {
                /* this.$store.dispatch('fetchSubjectCourseClassList', this.$route.params.id).then(() => {
                    this.classList = this.allClass;

                    this.selectedClass = this.classList[0].class_id;
                    this.selectedClassName = this.classList[0].class_name;
                    this.getClassworkList();
                    this.getStudentList();
                    var data = {
                        course_id: this.$route.params.id,
                        class_id: this.selectedClass
                    };
                    this.$store.dispatch('fetchAllStudentFinalGrades', data).then(() => {
                        this.loading = false;
                    });
                }); */

                if(this.getClassesNames.length == 0){
                     this.$store.dispatch('fetchClassesNames', this.$route.params.id)
                    .then(()=>{
                        this.classList= this.getClassesNames.filter((item) => {
                            return item.class_id != this.$route.params.id;
                        })
                        this.selectedClass = this.classList[0].class_id;
                        this.selectedClassName = this.classList[0].class_name;

                        this.getClassworkList();
                        this.getStudentList();
                        var data = {
                            course_id: this.$route.params.id,
                            class_id: this.selectedClass
                        };
                        this.$store.dispatch('fetchAllStudentFinalGrades', data).then(() => {
                            this.loading = false;
                        });

                    })
                }else{
                    this.classList = this.getClassesNames.filter((item) => {
                        return item.class_id != this.$route.params.id;
                    })
                    this.selectedClass = this.classList[0].class_id;
                    this.selectedClassName = this.classList[0].class_name;

                    this.getClassworkList();
                    this.getStudentList();
                    var data = {
                        course_id: this.$route.params.id,
                        class_id: this.selectedClass
                    };
                    this.$store.dispatch('fetchAllStudentFinalGrades', data).then(() => {
                        this.loading = false;
                    });

                }


            },

            test(table) {
                (function () {
                    var uri = 'data:application/vnd.ms-excel;base64,',
                        template =
                        `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
                        <head>
                        <!--[if gte mso 9]><xml>
                        <x:ExcelWorkbook><x:ExcelWorksheets>
                        <x:ExcelWorksheet><x:Name>{worksheet}</x:Name>
                        <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
                        </x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook>
                        </xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/>
                        </head><body><table>{table}</table></body></html>`,
                        base64 = function (s) {
                            return window.btoa(unescape(encodeURIComponent(s)))
                        },
                        format = function (s, c) {
                            return s.replace(/{(\w+)}/g, function (m, p) {
                                return c[p];
                            })
                        }

                    if (!table.nodeType) table = document.getElementById(table)
                    var ctx = {
                        worksheet: name || 'Worksheet',
                        table: table.innerHTML,
                        table: table.innerHTML,
                    }
                    window.location.href = uri + base64(format(template, ctx))

                })()
            }
        },

        mounted() {
            this.loading = true;
            this.$store.dispatch('fetchGradingCriteria', this.$route.params.id).then(() => {
                this.grading_criteria_data = this.get_gradingCriteria;
            });

            this.getClassList();



            var students = this.students;
            this.loading = false;
              $('head > title').text('Gradebook');

        },




    }

</script>

<style scoped>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

    .v-tab--disabled {
        color: #000 !important;
    }

    #tableExp td {
        text-align: center !important;
        vertical-align: middle !important;
    }

    #tableExp th {
        text-align: center !important;
        vertical-align: middle !important;
    }

</style>
