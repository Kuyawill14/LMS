<template>
    <div class="pt-4">

        <v-row>
            <v-col cols="6">

                <h2>
                    Student Grades
                </h2>
            </v-col>
            <v-col cols="6">
                <v-select :items="classList" v-model="selectedClass" @change="getClassworkList()" item-text='class_name'
                    item-value='class_id' label="Select Class" class="float-right">
                </v-select>
            </v-col>
        </v-row>
        <v-card>
            <v-tabs color="deep-purple accent-4" right>
                <v-tab v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index"
                    @click="_getClassworkListbyTab(gradingCriteria.id)">
                    {{gradingCriteria.name}}
                </v-tab>
                <v-tab-item v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index">

                    <v-card-title>
                        {{gradingCriteria.name}}
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details>
                        </v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="students" v-if="headers.length != 0">
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="student in items" :key="student.id">
                                    <td>{{student.lastName + ', ' + student.firstName }} </td>

                                    <td class="text-center" v-for="(classworkGrades, index) in StudentClassworkGrades(student.id,gradingCriteria.id)"
                                        :key="index">
                                        {{classworkGrades.points}}

                                        <v-tooltip v-model="show" top v-if="classworkGrades.points == null">
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
                                        {{totalPoints(StudentClassworkGrades(student.id,gradingCriteria.id))}}
                                    </td>
                                    <td class="text-center">
                                        {{totalPercentage(StudentClassworkGrades(student.id,gradingCriteria.id))}}%
                                    </td>

                                </tr>
                            </tbody>
                        </template>
                    </v-data-table>
                    <!-- {{headers}} -->
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
            }

        },
        computed: {
            ...mapGetters(["get_gradingCriteria", "allClass", "StudentClassworkGrades"])
        },

        methods: {
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
            classworkTotalPoins() {

            },
            totalPoints(arr) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['points'];
                }
                return total;
            },
            totalPercentage(arr) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['points'];
                }
                console.log('tota;', total);
                console.log('classworktoal', this.classworkTotalPoints)
                let result = (total / this.classworkTotalPoints) * 100;
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
                this.headers.push({
                    text: 'Name',
                    value: 'name'
                });

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
                this.headers.push({
                    text: 'Name',
                    value: 'name'
                });

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

                    console.log('class Liost: ', this.classList);
                });
            }
        },

        created() {
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
