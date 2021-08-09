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

        <v-row class="pt-2">
            <v-col cols="6">

                <h2>
                    Student Grades
                </h2>
            </v-col>

        </v-row>
        <v-card>
            <v-tabs color="orange accent-4" right>
                <v-tab href="#final_grades">
                    Final Grades
                </v-tab>
                <v-tab v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index"
                    @click="_getClassworkListbyTab(gradingCriteria.id)">
                    {{gradingCriteria.name}}
                </v-tab>
                <v-tab-item id="final_grades">

                    <v-card-title>
                        Final Grades
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details>
                        </v-text-field>
                    </v-card-title>

                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-center" v-for="(gradingCriteria, index) in get_gradingCriteria"
                                        :key="index">
                                        {{ gradingCriteria.name}} ({{gradingCriteria.percentage}}%)</th>
                                    <th class="text-center">
                                        Final Grades</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center" v-for="(final, index) in  finalGrades" :key="index">
                                        {{final.grade_percentage.toFixed(2)}}% </td>
                                    <td class="text-center"> {{    totalFinalPercentage(finalGrades) }}% </td>
                                </tr>

                            </tbody>
                        </template>
                    </v-simple-table>

                </v-tab-item>
                <v-tab-item v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index">

                    <v-card-title>
                        {{gradingCriteria.name}} - {{gradingCriteria.percentage}}%
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details>
                        </v-text-field>
                    </v-card-title>

                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-center" v-for="(header, index) in headers" :key="index">
                                        {{ header.text }}</th>

                                </tr>
                                
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center"
                                        v-for="(classworkGrades, index) in StudentClassworkGrades(gradingCriteria.id)"
                                        :key="index">
                                        {{classworkGrades.points}}
                                        <v-tooltip v-model="shown" top v-if="classworkGrades.points == null">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon v-bind="attrs" v-on="on">
                                                    <v-icon color="red">
                                                        mdi-close
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                            <span>No Submission</span>
                                        </v-tooltip>
                                    </td>


                                    <td class="text-center">
                                        {{totalPoints(StudentClassworkGrades(gradingCriteria.id))}}
                                    </td>
                                    <!-- <td class="text-center">
                                        {{totalPercentage(StudentClassworkGrades(gradingCriteria.id),gradingCriteria.percentage)}}%
                                    </td> -->
                                     <td class="text-center">
                                        {{transmutedGrade(totalPoints(StudentClassworkGrades(gradingCriteria.id)),gradingCriteria.percentage)}}%
                                    </td>
                                </tr>

                            </tbody>
                        </template>
                    </v-simple-table>

                </v-tab-item>


            </v-tabs>
        </v-card>
    </div>
</template>


<script>
    import VueElementLoading from 'vue-element-loading'

    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            VueElementLoading
        },
        data: function () {
            return {
                shown: false,
                selectedClass: null,
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
                classworkList: [],
                headers: [],
                classList: [],
                students: [],
                classworkTotalPoints: 0,
                finalGrades: [],
                 items: [
                    {
                    text: 'Course',
                    disabled: false,
                    link: 'courses',
                    },
                    {
                    text: 'My grades',
                    disabled: true,
                    link: 'breadcrumbs_link_2',
                    },
                ],
            }

        },
        computed: {
            ...mapGetters(["get_gradingCriteria", "allClass", "StudentClassworkGrades"])
        },

        methods: {
               transmutedGrade(total_score, percentage) {
                if (this.classworkTotalPoints) {
                    return (((((total_score / this.classworkTotalPoints) * 100) / 2) + 50) * percentage / 100).toFixed(
                        2);
                } else {
                    return 0;
                }

            },
            totalPercentHeader() {
                this.headers.push({
                    text: 'Total Points' + ' (' + this.classworkTotalPoints + 'pts)',
                    align: 'center',
                    value: 'total'
                }, {
                    text: 'Total Percentage',
                    align: 'center',
                    value: 'Percentage'
                });
            },
            totalFinalPercentage(arr) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['transmuted_grade_percentage'];
                }
                return total.toFixed(2);

            },
            totalPoints(arr) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['points'];
                }
                return total;
            },
            totalPercentage(arr, total_percent) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['points'];
                }
                console.log('tota;', total);
                console.log('classworktoal', this.classworkTotalPoints)
                let result = (total / this.classworkTotalPoints) * total_percent;
                return isNaN(result) == true ? 0 : result.toFixed(2);
            },
            getStudentList() {
                axios.get('/api/student/all_by_class/' + this.selectedClass)
                    .then((res) => {
                        this.students = res.data

                    }).catch((error) => {
                        console.log(error)
                    })
            },
            getAllGradeCriteria() {
                this.$store.dispatch('fetchGradingCriteria', this.$route.params.id);
            },
            getClassworkList() {
                var total = 0;
                this.getStudentList();
                this.headers = [];


                axios.get('/api/grade-book/classworks/' + this.selectedClass).then(res => {
                    this.classworkList = res.data;
                    console.log(res.data);

                    for (var i = 0; i < this.classworkList.length; i++) {
                        // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
                        if (this.classworkList[i]['grading_criteria_id'] == this.get_gradingCriteria[0].id) {
                            this.headers.push({
                                text: this.classworkList[i]['title'] + ' (' + this.classworkList[i][
                                    'points'
                                ] + 'pts)',
                                align: 'center',
                                value: this.classworkList[i]['title']
                            });
                            total += this.classworkList[i]['points'];
                        }

                    }

                    //    console.log(grading_criteria_id)
                    this.classworkTotalPoints = total;
                    this.totalPercentHeader();
                })

                this.$store.dispatch('fetchStudentClassworkGrades', this.selectedClass);
            },
            _getClassworkListbyTab(grading_criteria_id) {
                var total = 0;
                this.headers = [];


                axios.get('/api/grade-book/classworks/' + this.selectedClass).then(res => {
                    this.classworkList = res.data;
                    console.log(res.data);

                    for (var i = 0; i < this.classworkList.length; i++) {
                        // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
                        if (this.classworkList[i]['grading_criteria_id'] == grading_criteria_id) {
                            this.headers.push({
                                text: this.classworkList[i]['title'] + ' (' + this.classworkList[i][
                                    'points'
                                ] + 'pts)',
                                align: 'center',
                                value: this.classworkList[i]['title']
                            });
                            total += this.classworkList[i]['points'];
                        }

                    }
                    this.classworkTotalPoints = total;
                    this.totalPercentHeader();

                })
            },
            getStudentClassworksGrades(grading_criteria_id) {
                axios.get('/api/grade-book/classworkGrades/' + this.selectedClass).then(res => {
                    this.classworkList = res.data;
                    console.log(res.data);

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
                    console.log(total);

                })
                return total;
            },
            getClassList() {
                this.$store.dispatch('fetchSubjectCourseClassList', this.$route.params.id).then(() => {
                    this.classList = this.allClass;

                    this.selectedClass = this.classList[0].class_id;
                    this.getClassworkList();
                    this.getStudentList();
    this.getfinalGrades();
                    console.log('class Liost: ', this.classList);
                });
            },
            getfinalGrades() {
                axios.get('/api/grade-book/student-finalgrade/' + this.selectedClass + '/' + this.$route.params.id).then(res => {
                    this.finalGrades = res.data;

                })
            }
        },

        mounted() {
            this.loading = true;
            this.getAllGradeCriteria();

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
