<template>
    <div class="pt-4">
     

        <v-row style="margin-bottom: -35px;">
            <v-col>
                <h2>
                    Monitor Teachers
                </h2>
            </v-col>

            <v-spacer></v-spacer>

            <v-col lg="1" class="text-right mt-2">
                <v-btn hidden icon @click="getTeacherSummary(true);summarryLoading =true"
                    v-if="school_year_id != null || semester_id != null  ">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col lg="2" class="text-right">
                <v-select class="mr-2 my-1" dense :items="school_year" item-text="schoolyear" item-value="id"
                    label="School Year" v-model="school_year_id" outlined small @change=" getTeacherSummary()">
                </v-select>
            </v-col>
            <v-col class="text-right" lg="2">
                <v-select class="mr-2 my-1" dense :items="semester" item-text="semester" item-value="id"
                    :disabled="school_year_id == null" label="Semester" v-model="semester_id" outlined small
                    @change="getTeacherSummary()"></v-select>
            </v-col>
        </v-row>

        <v-row>


            <v-col>

                <v-card v-if="loading">
                    <v-skeleton-loader :loading="loading" type="table"></v-skeleton-loader>
                </v-card>

                <v-card elevation="2" v-if="!loading">
                    <v-card-title>
                        Teachers

                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details>
                        </v-text-field>
                    </v-card-title>

                    <v-data-table :headers="headers" :items="filteredItems" v-if="!loading" :items-per-page="10"
                        class="elevation-1">
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="item in items" :key="item.id">

                                    <td> {{item.user_id}} </td>
                                    <td> {{item.lastName + ', ' + item.firstName + ' ' + item.middleName }} </td>
                                    <td class="text-center"> {{item.course_count}}</td>
                                    <td class="text-center"> {{item.class_count}} </td>
                                    <td class="text-center"> {{item.sub_modules_count}} </td>
                                    <td class="text-center"> {{item.classwork_count}} </td>
                                    <td class="text-center">

                                        <v-btn icon color="success" link
                                            :to="{name: 'monitorTeacher_id', params: {id: item.user_id}}">
                                            <v-icon>
                                                mdi-eye
                                            </v-icon>
                                        </v-btn>
                                    </td>
                                </tr>
                                <tr v-if="items.length == 0">
                                    <td colspan="42" class="text-center"> No data available</td>
                                </tr>


                            </tbody>
                        </template>
                    </v-data-table>

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
    import axios from 'axios';
    export default {
        data: function () {
            return {
                semester_id: null,
                school_year: [],
                semester: [],
                school_year_id: null,
                semester_id: null,
                Deldialog: false,
                dialog: false,
                temp_id: '',
                IsDeleting: false,
                IsAddUpdating: false,
                IsResetting: false,
                type: '',
                search: "",
                valid: true,
                headers: [

                    {
                        text: 'ID',
                        value: 'user_id',
                        align: 'start',
                    },
                    {
                        text: 'Name',
                        value: 'firstName',
                        align: 'start',
                    },
                    {
                        text: 'Total Courses',
                        value: 'course_count',
                        align: 'center',
                    },
                    {
                        text: 'Total Classes',
                        value: 'total_classes',
                        align: 'center',
                    },

                    {
                        text: ' Total Modules Created',
                        value: 'sub_modules_count',
                        align: 'center',
                    },
                    {
                        text: 'Total Classwork Created',
                        value: 'classwork_count',
                        align: 'center',
                    },



                    {
                        text: 'Actions',
                        sortable: false
                    },
                ],
                teacherSummary: [],
                loading: true,
            }


        },
        computed: {

            filteredItems() {
                if (this.search) {
                    return this.teacherSummary.filter((item) => {
                        return this.search.toLowerCase().split(' ').every(v => item.firstName.toLowerCase()
                            .includes(v) || item.lastName.toLowerCase()
                            .includes(v) || item.middleName.toLowerCase()
                            .includes(v) || item.user_id.toString()
                            .includes(v))
                    })
                } else {
                    return this.teacherSummary;
                }

            },
            ...mapGetters(["get_UserRole", "get_CurrentUser"]),




        },

        methods: {
            fetchAllSchoolyear_semester() {
                axios.get('/api/admin/schoolyears_semesters/all')
                    .then((res) => {
                        this.school_year = res.data.school_year;
                        this.semester = res.data.semester;
                    })
            },
            getTeacherSummary(clear) {

                if (clear) {
                    this.school_year_id = null;
                    this.semester_id = null;
                }
                axios.get(`/api/admin/teachers/all/summarry`, {
                        params: {
                            school_year_id: this.school_year_id != 0 ? this.school_year_id : null,
                            semester_id: this.semester_id ? this.semester_id : null,
                            department_id: this.get_CurrentUser.department_id
                        }
                    })
                    .then((res) => {

                        if (res.status == 200) {

                            this.teacherSummary = res.data;
                            console.log(res.data);

                        } else {
                            this.toastError('Oops! Something went wrong, please reload the page')
                        }
                        this.loading = false;

                    })
            },
        },

        mounted() {
            this.fetchAllSchoolyear_semester();
            this.getTeacherSummary();
            // this.$store.dispatch('teacherSummarryData').then(() => {
            //     this.teacherSummary = this.getTeachersSumarry;
            //     this.loading = false;
            // });




        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
