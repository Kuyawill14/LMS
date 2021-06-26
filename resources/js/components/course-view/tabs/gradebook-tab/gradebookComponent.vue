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

                    <v-card-title>{{get_gradingCriteria[0].id}}
                        {{gradingCriteria.name}}
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details>
                        </v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="students" v-if="headers.length != 0">
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="item in items" :key="item.id">
                                    <td>{{item.firstName}} </td>
                                 
                                    <td v-for="(classworkGrades, index) in StudentClassworkGrades(item.id,gradingCriteria.id)" :key="index">
                                    {{classworkGrades.points}}
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
                students: null
            }

        },
        computed: {
            ...mapGetters(["get_gradingCriteria", "allClass", "StudentClassworkGrades"])
        },

        methods: {
            getStudentList() {
                axios.get('/api/student/all/' + this.$route.params.id)
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
                
                this.headers = [];
                this.headers.push({
                    text: 'name',
                    value: 'name'
                });

                axios.get('/api/grade-book/classworks/' + this.selectedClass).then(res => {
                    this.classworkList = res.data;
                    console.log(res.data);

                    for (var i = 0; i < this.classworkList.length; i++) {
                        // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
                        if (this.classworkList[i]['grading_criteria_id'] == this.get_gradingCriteria[0].id)
                            this.headers.push({
                                text: this.classworkList[i]['title'],
                                value: this.classworkList[i]['title']
                            });
                    }
                    //    console.log(grading_criteria_id)

                })
                  this.$store.dispatch('fetchStudentClassworkGrades', this.selectedClass);
            },
            _getClassworkListbyTab(grading_criteria_id) {
                this.headers = [];
                this.headers.push({
                    text: 'name',
                    value: 'name'
                });

                axios.get('/api/grade-book/classworks/' + this.selectedClass).then(res => {
                    this.classworkList = res.data;
                    console.log(res.data);

                    for (var i = 0; i < this.classworkList.length; i++) {
                        // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
                        if (this.classworkList[i]['grading_criteria_id'] == grading_criteria_id) {
                            this.headers.push({
                                text: this.classworkList[i]['title'],
                                value: this.classworkList[i]['title']
                            });
                        }

                    }


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
                   
                    console.log('class Liost: ', this.classList);
                });
            }
        },

        created() {
            this.loading = true;
            this.getAllGradeCriteria();
            this.getStudentList();
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
