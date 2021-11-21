<template>
    <div>
        
        <v-row>
            <v-col v-for="(item, index) in cardheaders" :key="index" cols="12" lg="6" md="6" sm="12" xs="12"
               >

                <v-card>
                    <v-skeleton-loader v-if="summarryLoading" :loading="summarryLoading"
                        type="list-item-avatar-two-line"></v-skeleton-loader>
                    <v-row class="pa-3" v-if="!summarryLoading">

                        <v-col cols="4">
                            <v-icon class="text-h2" style="font-size:2.5 rem">{{item.icon}}</v-icon>
                        </v-col>

                        <v-col>
                            <v-row>
                                <v-col class="py-0 text-right">
                                    <span class="cardTitle">{{item.title}}</span>
                                </v-col>

                            </v-row>
                            <v-row>
                                <v-col class="text-h3 py-0 primary--text text-right">{{item.count}}</v-col>
                            </v-row>

                        </v-col>

                    </v-row>

                </v-card>
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

                    <v-data-table :headers="headers" :items="filteredItems"   v-if="!loading" :items-per-page="10" class="elevation-1">
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
                                            :to="{name: 'departmentMonitorTeacher_id', query: {id: item.user_id}}">
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


<script>
    export default {
        data() {
            return {
                summarryLoading: true,
                cardheaders: [{
                        title: 'Total student',
                        count: 250,
                        icon: ''
                    },
                    {
                        title: 'Total Teacher',
                        count: 24,
                        icon: ''
                    },
                ],
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



        },

        methods: {
            limitChar(title) {
                if (title.length > 40) {
                    return title.substring(0, 40) + '...';
                } else {
                    return title;
                }
            },
            getDeparmentsData() {
                axios.get('/api/department/data/all')
                    .then((res) => {
                        if (res.status == 200) {
                            this.departments = res.data;
                        }
                    })
            },
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
            setTimeout(() => {
                this.summarryLoading = false;
            }, 1000);
        }
    }

</script>


<style scoped>
    #department_logo>div.v-image.v-responsive.white--text.align-end.theme--light>div.v-image__image.v-image__image--cover {
        background-size: contain !important;
    }

</style>
