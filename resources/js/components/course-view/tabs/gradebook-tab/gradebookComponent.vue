<template>
    <div class="pt-4">

        <v-row>
            <v-col cols="6">

                <h2>
                   Student Grades
                </h2>
            </v-col>
            <v-col cols="6">
                <v-select :items="classList" @change="test(selectedClass)" v-model="selectedClass"
                    item-text='class_name' item-value='class_id' label="Select Class" class="float-right">


                </v-select>
            </v-col>

        </v-row>

        <v-card>
            <v-tabs color="deep-purple accent-4" right>
                <v-tab v-for="(gradingCriteria, index) in get_gradingCriteria" :key="index">
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
                    <v-data-table :headers="headers">

                    </v-data-table>

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

                headers: [

                ],
                classList: []
            }

        },
        computed: {
            ...mapGetters(["get_gradingCriteria", "allClass"])
        },

        methods: {
            getAllGradeCriteria() {
                this.$store.dispatch('fetchGradingCriteria', this.$route.params.id);
            },
            test(class_id) {

                axios.get('/api/grade-book/classworks/' + class_id).then(res => {
                    this.classworkList = res.data;
                    console.log(res.data);

                    // this.headers.assign(res.data, {
                    //     text: res.data.title
                    // })
                    for (var i = 0; i < this.classworkList.length; i++ ) {
                        this.headers[i] = {text: this.classworkList[0]['name'], value: this.classworkList[0]['name']};
                    }
                    console.log(  this.headers)
                   
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
                    console.log('class Liost: ', this.classList);
                });
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
