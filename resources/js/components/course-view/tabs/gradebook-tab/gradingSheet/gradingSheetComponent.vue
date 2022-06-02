<template>
    <div class="d-flex">







        <table border="1" class='table table-bordered'>
            <tr>
                <th colspan="8">
                    <img src="https://isu-orange.com/images/isu_logo1.png" height="100" alt="">
                    <h3>GRADE SHEET </h3>

                </th>
            </tr>
            <tr>
                <th colspan="2" class="pa-3">Name of Students</th>
                <th class="pa-3">Final Grade</th>
                <th class="pa-3">Remarks</th>
                <th colspan="2" class="pa-3">Name of Students</th>
                <th class="pa-3">Final Grade</th>
                <th class="pa-3">Remarks</th>

            </tr>
            <tr v-for=" index in 24" :key="index">

                <td v-if="index <= 24">{{index}}</td>
                <td v-if="index <= 24">
                    {{index <= 24 ? students[index ].lastName + ', ' + students[index].firstName : ""}}</td>

                <td v-if="index <= 24">
                    {{index <= 24 ? sumTransmutedGrade(allStudentFinalGrades(students[index ].id)) : ''}}</td>
                <td v-if="index <= 24">
                    {{index <= 24? transmuteFinalGrade(sumTransmutedGrade(allStudentFinalGrades(students[index].id))) : ''}}
                </td>


                <td v-if="students.length != index+23">
                    {{students.length > index+23 ? index+24 : ''}}</td>
                <td v-if="students.length != index+23 ">
                    {{students.length-1 >= index+23 ? students[index+23 ].lastName + ', ' + students[index+23 ].firstName : ""}}
                </td>
                <td v-if="students.length != index+23">
                    {{students.length-1 >= index+23 ? sumTransmutedGrade(allStudentFinalGrades(students[index+23 ].id)) : ''}}
                </td>
                <td v-if="students.length != index+23 ">
                    {{students.length-1 >= index+23 ? transmuteFinalGrade(sumTransmutedGrade(allStudentFinalGrades(students[index+23 ].id))) : ''}}
                </td>
                <td colspan="4" v-if="students.length == index+23" style="text-align:center">***NOTHING FOLLOWS***</td>

            </tr>
        </table>

    </div>
</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data() {
            return {
                table_1: 24,
            }
        },

        props: ['students', 'grading_criteria'],
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
        computed: {
            ...mapGetters(["allStudentFinalGrades", "get_gradingCriteria"]),
            filteredItems: function () {
                if (this.students.length > 24) {
                    return this.students.slice(0, 24);
                }
            }
        }
    }

</script>
