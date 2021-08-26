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

                    <export-excel class="btn btn-default" :data="json_data" :fields="json_fields"
                        worksheet="My Worksheet"
                        :name="getcourseInfo.course_code + ' - ' + getcourseInfo.course_name + '-' + selectedClassName">
                        <v-btn @click="get_AllFinalGrades_s()">
                            <v-icon color="grey lighten-1" left>
                                download
                            </v-icon>
                            ALl Grades
                        </v-btn>

                    </export-excel>

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
                <v-select :items="classList" v-model="selectedClass" @change="getClassworkList()" item-text='class_name'
                    item-value='class_id' label="Select Class" class="float-right">
                </v-select>
            </v-col>
        </v-row>
        <v-card>
            <v-tabs color="orange accent-4" right>
                <v-tab href="#final_grades" @click="_getFInalGradestTab()" active>
                    Final Grades
                </v-tab>
                <v-tab v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index"
                    @click="_getClassworkListbyTab(gradingCriteria.id)">
                    {{gradingCriteria.name}}
                </v-tab>
                <v-tab-item id="final_grades">

                    <v-card-title>
                        Final Grades

                        <export-excel class="btn btn-default ml-2" :data="json_data" :fields="json_fields"
                            worksheet="My Worksheet"
                            :name="getcourseInfo.course_code + ' - ' + getcourseInfo.course_name + '-' + selectedClassName">
                            <v-btn @click="getFinalGrades()" small>
                                <v-icon color="grey lighten-1">
                                    download
                                </v-icon>
                                <!-- Final Grades -->
                            </v-btn>

                        </export-excel>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details>
                        </v-text-field>
                    </v-card-title>

                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        Name</th>
                                    <th class="text-center" v-for="(gradingCriteria, index) in get_gradingCriteria"
                                        :key="index">
                                        {{ gradingCriteria.name}} ({{gradingCriteria.percentage}}%)</th>
                                    <th class="text-center">
                                        Final Grades</th>
                                    <!-- <th class="text-center">
                                        Transmuted <br> Grades</th> -->
                                </tr>
                            </thead>
                            <tbody v-if="loading == false">
                                <tr v-for="student in students" :key="student.id">
                                    <td class="text-left">{{student.lastName + ', ' + student.firstName }} </td>
                                    <td class="text-center"
                                        v-for="(student_final, index) in allStudentFinalGrades(student.id)"
                                        :key="index">

                                        {{student_final.transmuted_grade_percentage.toFixed(2)}}
                                        <!-- {{student_final.grade_percentage.toFixed(2)}} -->
                                    </td>
                                    <!-- <td class="text-center">
                                        {{sumPercentage(allStudentFinalGrades(student.id))}}

                                    </td> -->
                                    <td class="text-center">
                                        {{sumTransmutedGrade(allStudentFinalGrades(student.id))}}

                                    </td>

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

                <v-tab-item v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index">

                    <v-card-title>
                        {{gradingCriteria.name}} - {{gradingCriteria.percentage}}%

                        <export-excel class="btn btn-default ml-2" :data="json_data" :fields="json_fields"
                            worksheet="My Worksheet"
                            :name="getcourseInfo.course_code + ' - ' + getcourseInfo.course_name + '-' + gradingCriteria.name">
                            <v-btn @click="getFinalGrades()" small>
                                <v-icon color="grey lighten-1">
                                    download
                                </v-icon>
                                <!-- Final Grades -->
                            </v-btn>

                        </export-excel>


                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details>
                        </v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="students" v-if="headers.length != 0">
                        <template v-for="h in headers" v-slot:[`header.${h.value}`]="{  }">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on">{{h.text}}</span>
                                </template>
                                <span>{{h.value}}</span>
                            </v-tooltip>
                        </template>
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="student in items" :key="student.id">
                                    <td>{{student.lastName + ', ' + student.firstName }} </td>

                                    <td class="text-center"
                                        v-for="(classworkGrades, index) in AllStudentClassworkGrades(student.id,gradingCriteria.id)"
                                        :key="index">

                                        {{classworkGrades.points}} <span class="text-caption" color="grey"
                                            v-if="classworkGrades.points != null"> / {{classworkGrades.hp_points}}
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
                                        {{totalPoints(AllStudentClassworkGrades(student.id,gradingCriteria.id))}}
                                    </td>
                                    <td class="text-center">
                                        {{totalPercentage(AllStudentClassworkGrades(student.id,gradingCriteria.id),gradingCriteria.percentage)}}%
                                    </td>

                                    <td class="text-center">
                                        {{transmutedGrade(totalPoints(AllStudentClassworkGrades(student.id,gradingCriteria.id)),gradingCriteria.percentage)}}%
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
                    <!-- {{headers}} -->
                </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</template>


<script>
    import excel from 'vue-excel-export'

    Vue.use(excel)
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data: function () {
            return {
                json_fields: {
                    'Full Name': 'name',
                    // 'Raw Grade': 'raw_grade',
                    // 'Transmuted': 'transmuted_grade',
                },
                json_data: [],
                json_meta: [
                    [{
                        'key': 'charset',
                        'value': 'utf-8'
                    }]
                ],
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
                final_grades: [],
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

            }

        },
        computed: {
            ...mapGetters(["getcourseInfo"]),
            ...mapGetters(["get_gradingCriteria", "allClass", "AllStudentClassworkGrades", "allStudentFinalGrades"])
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
                    text: 'I. Percentage',
                    align: 'center',
                    value: 'Initial Percentage',


                }, {
                    text: 'T. Percentage',
                    align: 'center',
                    value: 'Transmuted Percentage',

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
            totalPercentage(arr, grading_percentage) {
                var total = 0;
                for (var i = 0; i < arr.length; i++) {
                    total += arr[i]['points'];
                }
                /*  console.log('tota;', total);
                 console.log('classworktoal', this.classworkTotalPoints) */
                let result = (total / this.classworkTotalPoints) * grading_percentage;
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
                this.headers = [];
                this.loading = true;
                var total = 0;
                this.getStudentList();

                this.headers.push({
                    text: 'Name',
                    value: 'name'
                });

                axios.get('/api/grade-book/classworks/' + this.selectedClass).then(res => {
                    this.classworkList = res.data;
                 
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

                var data = {
                    course_id: this.$route.params.id,
                    class_id: this.selectedClass
                };
                this.$store.dispatch('fetchAllStudentClassworkGrades', this.selectedClass);
                this.$store.dispatch('fetchAllStudentFinalGrades', data).then(() => {
                    this.loading = false;
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

                    this.headers.push({
                        text: 'Name',
                        value: 'name'
                    });

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
                                    value: this.classworkList[i]['title']
                                });
                                total += this.classworkList[i]['points'];
                            }

                        }
                        this.classworkTotalPoints = total;
                        this.totalPercentHeader();

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
                this.$store.dispatch('fetchSubjectCourseClassList', this.$route.params.id).then(() => {
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
                });


            },
            getFinalGrades() {

                var grade = null;
                var header = [];
                this.students.sort();
                for (var i = 0; i < this.get_gradingCriteria.length; i++) {

                    this.json_fields[this.get_gradingCriteria[i].name] = this.get_gradingCriteria[i].name;
                }
                this.json_fields['Raw Grade'] = 'raw_grade';
                this.json_fields['Transmuted Grade'] = 'transmuted_grade';



                var dataFields = {};
                for (var i = 0; i < this.students.length; i++) {

                    var student_final = this.allStudentFinalGrades(this.students[i].id);
                 
                 

                    dataFields['name'] = this.students[i].lastName + ', ' + this.students[i].firstName;

                    for (var j = 0; j < student_final.length; j++) {
                        dataFields[student_final[j].name] = student_final[j].grade_percentage;
                    }


                    var raw_grade = this.sumPercentage(this.allStudentFinalGrades(this.students[i].id));
                    var transmuted_grade = this.sumTransmutedGrade(this.allStudentFinalGrades(this.students[i].id));
                    dataFields['raw_grade'] = raw_grade;
                    dataFields['transmuted_grade'] = transmuted_grade;
                  
                  
                    this.json_data.push(dataFields);



                }


                console.log('json_data ', this.json_data);
            },
            get_AllFinalGrades_s() {

                var grade = null;
                var header = [];
                var classworks ={};
                this.students.sort();
                for (var i = 0; i < this.get_gradingCriteria.length; i++) {
                    // var classworkGrades =  this.AllStudentClassworkGrades(this.students[i].id, student_final[i].grade_category_id);
                     this.json_fields['|'+(i+1) +'|'] =''  ;
                    this.json_fields[this.get_gradingCriteria[i].name] = this.get_gradingCriteria[i].name;
     
                   for (var x = 0; x < this.classworkList.length; x++) {

                            if( this.get_gradingCriteria[i].id ==this.classworkList[x].grading_criteria_id) {
                                    this.json_fields[this.classworkList[x].title] = this.classworkList[x].title;
                            }
                        
                    }
                  
                }
                this.json_fields['Raw Grade'] = 'raw_grade';
                this.json_fields['Transmuted Grade'] = 'transmuted_grade';
                console.log('json_fields    ' , this.json_fields);


                var dataFields = {};
                for (var i = 0; i < this.students.length; i++) {

                    var student_final = this.allStudentFinalGrades(this.students[i].id);
                    console.log(student_final);
                    dataFields['name'] = this.students[i].lastName + ', ' + this.students[i].firstName;

                    for (var j = 0; j < student_final.length; j++) {
                        for (var x = 0; x < student_final.length; x++) {
                            this.AllStudentClassworkGrades(this.students[i].id, student_final[i].grade_category_id)
                        }
                        dataFields[student_final[j].name] = student_final[j].grade_percentage;
                    }




                    var raw_grade = this.sumPercentage(this.allStudentFinalGrades(this.students[i].id));
                    var transmuted_grade = this.sumTransmutedGrade(this.allStudentFinalGrades(this.students[i].id));
                    dataFields['raw_grade'] = raw_grade;
                    dataFields['transmuted_grade'] = transmuted_grade;
                    console.log(dataFields, 'dataFields')
                    this.json_data.push(dataFields); 



                    console.log(i)

                }


                console.log('json_data ', this.json_data);
            }
        },

        mounted() {
            this.loading = true;
            this.getAllGradeCriteria();

            this.getClassList();

            this.loading = false;

            var students = this.students;
            this.loading = false;

        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

    .v-tab--disabled {
        color: #000 !important;
    }

</style>
