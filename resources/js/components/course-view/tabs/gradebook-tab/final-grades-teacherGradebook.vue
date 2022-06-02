<template>
    <div>
        <v-card-title>
            Final Grades
           <v-spacer></v-spacer>
            <div width="50%">
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                hide-details>
                            </v-text-field>
                        </div>
        </v-card-title>
        <v-data-table :headers="headers" :items="filteredItems" :items-per-page="10" class="elevation-1"
            :loading="loader">
            <template v-slot:body="{ items }">
                <tbody>
                    <tr v-for="student in items" :key="student.id">
                        <td class="text-left">{{student.student_id}} </td>
                        <td class="text-left">{{student.lastName + ', ' + student.firstName }} </td>
                        <td class="text-center" v-for="(student_final, index) in allStudentFinalGrades(student.id)"
                            :key="index">
                            {{student['percent'+student_final.grade_category_id] =student_final.grade_percentage.toFixed(2) }}

                        </td>
                        <td class="text-center">
                            {{student['raw_grade'] = sumPercentage(allStudentFinalGrades(student.id))}}

                        </td>
                        <td class="text-center">
                            {{student['transmuted_grade'] =sumTransmutedGrade(allStudentFinalGrades(student.id))}}

                        </td>
                        <td class="text-center">
                            {{student['final_grade'] =transmuteFinalGrade(sumTransmutedGrade(allStudentFinalGrades(student.id)))}}

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

    </div>
</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['students', 'grading_criteria', 'floader'],
        data() {
            return {
                loader: this.floader,
                search: '',
                loading: false,
                headers: [

                    {
                        text: 'ID',
                        value: 'student_id',
                        align: 'start',
                    },
                    {
                        text: 'Name',
                        value: 'lastName',
                        align: 'start',
                    },

                ],
                studentList: [],
            }
        },
        computed: {
            ...mapGetters(["allStudentFinalGrades", "get_gradingCriteria"]),

            grading_criteria_data() {
                return this.grading_criteria;
            },

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
            gradingCategoryHeader() {
                if (this.loader) {}
                this.headers = [];

                this.headers.push({
                    text: 'ID',
                    value: 'student_id',
                    align: 'start',
                }, {
                    text: 'Name',
                    value: 'lastName',
                    align: 'start',
                }, );
                for (let i = 0; i < this.grading_criteria.length; i++) {
                    this.headers.push({
                        text: this.grading_criteria[i].name + ` (${this.grading_criteria[i].percentage})%`,
                        value: 'percent' + this.grading_criteria[i].id,
                        align: 'center'
                    });
                }

                this.headers.push({
                    text: 'Total Raw Grade',
                    value: 'raw_grade',
                    align: 'center',
                }, {
                    text: 'Transmuted Grade',
                    value: 'transmuted_grade',
                    align: 'center',
                }, {
                    text: 'Final Grade',
                    value: 'final_grade',
                    align: 'center',
                }, );
            },
            sumPercentage(arr) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['grade_percentage'];
                }
                return total.toFixed(2);
            },
            sumTransmutedGrade(arr) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['transmuted_grade_percentage'];
                }
                return total.toFixed(2);
            },
        },
        mounted() {
    this.loader = true;
            this.$store.dispatch('fetchGradingCriteria', this.$route.params.id).then(() => {
            
                this.gradingCategoryHeader();
                this.loader = false;
            });


            this.studentList = this.students;

        }

    }

</script>
