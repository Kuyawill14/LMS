<template>
    <div class="pt-4">
        <h2>
            Manage School Year / Semester
        </h2>
        <v-row class="pt-2">


            <v-col>
                <v-card elevation="2">
                    <v-card-title>
                        School Year

                        <v-btn color="primary" small class="white--text ml-auto" align="right"
                            @click="syModal = true, modalType='add'">
                            School Year
                            <v-icon right dark>
                                mdi-plus
                            </v-icon>
                        </v-btn>

                    </v-card-title>
                    <v-divider></v-divider>
                    <v-data-table dense :headers="headers_schoolyear" :items="schoolyearList" :items-per-page="5"
                        class="elevation-1">
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="item in items" :key="item.id">


                                    <td>{{item.schoolyear}}</td>

                                    <td>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn v-bind="attrs" v-on="on" text icon
                                                    @click="syModal = true,editSchoolyear(item.id,item.schoolyear)">
                                                    <v-icon color="primary">mdi-pencil-box-multiple-outline</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Edit</span>
                                        </v-tooltip>


                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn v-bind="attrs" v-on="on" text icon
                                                    @click="deleteModal = true,id = item.id,type='school_year'">
                                                    <v-icon color="primary">mdi-delete</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Delete</span>
                                        </v-tooltip>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>


            <v-col cols="4">
                <v-card elevation="2">
                    <v-card-title>
                        Semester

                        <v-btn color="primary" small class="white--text ml-auto" align="right"
                            @click="semesterModal = true, modalType='add'">
                            Semester
                            <v-icon right dark>
                                mdi-plus
                            </v-icon>
                        </v-btn>

                    </v-card-title>
                    <v-divider></v-divider>
                    <v-data-table dense :headers="headers_semester" :items="semesterList" :items-per-page="5"
                        class="elevation-1">
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="item in items" :key="item.id">


                                    <td>{{item.semester}}</td>

                                    <td>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn v-bind="attrs" v-on="on" text icon
                                                    @click="semesterModal = true,editSemester(item.id,item.semester)">
                                                    <v-icon color="primary">mdi-pencil-box-multiple-outline</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Edit</span>
                                        </v-tooltip>

                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn v-bind="attrs" v-on="on" text icon
                                                    @click="deleteModal = true,id = item.id,type='semester'">
                                                    <v-icon color="primary">mdi-delete</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Delete</span>
                                        </v-tooltip>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>




        <v-dialog v-model="syModal" persistent max-width="450px">

            <v-card>
                <v-form ref="registerForm">
                    <v-card-title>
                        <span class="headline">{{modalType == 'edit' ? 'Edit': 'Add'}} School Year</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="School Year" placeholder="Eg. 2021-2022" filled required
                                        v-model="school_year">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="orange darken-1" text @click="syModal = false">
                            Close
                        </v-btn>
                        <v-btn color="secondary" text :loading="isSubmitting"
                            @click="upsertSchoolyear_semester(school_year,'school_year')">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>



        <v-dialog v-model="semesterModal" persistent max-width="450px">

            <template v-slot:activator="{ on, attrs }">

                <v-btn bottom color="primary" dark fab fixed right @click="semesterModal = !semesterModal"
                    v-bind="attrs" v-on="on">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-form ref="registerForm">
                    <v-card-title>
                        <span class="headline">{{modalType == 'edit' ? 'Edit': 'Add'}} Semester</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Semester" filled placeholder="Eg. 1st Semester, 2nd Semester"
                                        required v-model="semester">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="orange darken-1" text @click="semesterModal = false">
                            Close
                        </v-btn>
                        <v-btn color="secondary" text :loading="isSubmitting"
                            @click="upsertSchoolyear_semester(semester,'semester')">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>

        <!-- Delete -->
        <v-dialog v-model="deleteModal" persistent max-width="450px">

            <template v-slot:activator="{ on, attrs }">

                <v-btn bottom color="primary" dark fab fixed right @click="deleteModal = !deleteModal" v-bind="attrs"
                    v-on="on">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-form ref="registerForm">
                    <v-card-title>
                        <span class="headline">Are you sure?</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    Do you really want to delte tehse record? This process cannot be undone.
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="orange darken-1" text @click="semesterModal = false">
                            Cancel
                        </v-btn>
                        <v-btn color="secondary" text :loading="isSubmitting" @click="deleteSchoolyear_semester()">
                            Delete
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>

    </div>



</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    import axios from 'axios';
    export default {
        data: function () {
            return {
                deleteModal: false,
                modalType: '',
                school_year: '',
                semester: '',
                syModal: false,
                semesterModal: false,
                isSubmitting: false,
                Deldialog: false,
                dialog: false,
                id: null,
                IsDeleting: false,
                IsAddUpdating: false,
                IsResetting: false,
                type: '',
                search: "",
                valid: true,
                headers_schoolyear: [

                    {
                        text: 'School Year',
                        value: 'schoolyear',
                        align: 'start',
                    },
                    {
                        text: 'Actions',
                        sortable: false
                    },
                ],
                headers_semester: [

                    {
                        text: 'Semester',
                        value: 'semester',
                        align: 'start',
                    },
                    {
                        text: 'Actions',
                        sortable: false
                    },
                ],
                schoolyearList: [],
                semesterList: [],
            }
        },
        computed: {
            ...mapGetters(["getTeachersSumarry"])
        },

        methods: {



            editSemester(id, semester) {
                this.modalType = 'edit';
                this.id = id;
                this.semester = semester;
            },
            editSchoolyear(id, school_year) {
                this.modalType = 'edit';
                this.id = id;
                this.school_year = school_year;
            },


            fetchAllSchoolyear_semester() {
                axios.get('/api/admin/schoolyears_semesters/all')
                    .then((res) => {
                        this.schoolyearList = res.data.school_year;
                        this.semesterList = res.data.semester;
                    })
            },
            upsertSchoolyear_semester(name, type) {
                this.isSubmitting = true;
                let data = {
                    id: this.id,
                    name: name,
                    type: type
                };
                axios.post('/api/admin/schoolyears_semesters/upsert', data)
                    .then((res) => {
                        ////console.log(res.data);
                        this.fetchAllSchoolyear_semester();
                        this.semesterModal = false;
                        this.syModal = false;
                        this.isSubmitting = false;
                        this.id = null;
                        this.school_year = '';
                        this.semester = '';
                    }).catch((e) => {
                        alert(e.message);
                        this.isSubmitting = false;
                    })
            },
            deleteSchoolyear_semester(type) {
         this.isSubmitting = true;
                let data = {
                    id: this.id,
                    type: this.type
                };
                axios.post('/api/admin/schoolyears_semesters/delete', data)
                    .then((res) => {
                        ////console.log(res.data);
                        this.fetchAllSchoolyear_semester();
                        this.deleteModal = false;
                      
                        this.isSubmitting = false;
                    }).catch((e) => {
                        alert(e.message);
                        this.isSubmitting = false;
                    })
            },
        },

        mounted() {
            this.fetchAllSchoolyear_semester();
        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
