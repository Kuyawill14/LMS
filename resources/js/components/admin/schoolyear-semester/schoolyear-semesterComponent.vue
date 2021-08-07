<template>
    <div class="pt-4">
        <h2>
            Manage School Year / Semester
        </h2>
        <v-row class="pt-2">


            <v-col cols="12" md="12" lg="9" xl="9">
                <v-card elevation="2">
                   <v-data-table
                        dense
                        :headers="headers"
                        :items="schoolyearList" 
                        :items-per-page="5"
                        class="elevation-1" >
                        <template v-slot:body="{ items }">
                        <tbody>
                            <tr v-for="item in items" :key="item.id">
                           
                                <td style="width:10%">{{ item.id }}</td>
                                <td>{{item.schoolyear}}</td>
                               
                                <td >
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                            v-bind="attrs"
                                            v-on="on"
                                            text icon
                                            >
                                                <v-icon color="primary">mdi-pencil-box-multiple-outline</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Edit</span>
                                    </v-tooltip>  
                                </td>
                            </tr>
                        </tbody>
                        </template>
                        </v-data-table>
                </v-card>
            </v-col>


            <v-col cols="12" md="12" lg="3" xl="3">
                <v-card elevation="2">
                    <v-card-title>
                        Semester
                 
                        <v-btn color="primary" small class="white--text ml-auto" align="right" @click="semesterModal = true">
                             Semester
                            <v-icon right dark>
                                mdi-plus
                            </v-icon>
                        </v-btn>

                    </v-card-title>
                    <v-divider></v-divider>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Semester
                                    </th>

                                    <th class="text-center">
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1st semester </td>
                                    <td>Edit </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2nd semester</td>
                                    <td>Edit </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Midyear </td>
                                    <td>Edit </td>
                                </tr>



                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
        </v-row>




    <v-dialog v-model="syModal" persistent max-width="450px">

        <template v-slot:activator="{ on, attrs }">

            <v-btn bottom color="primary" dark fab fixed right @click="syModal = !syModal" v-bind="attrs" v-on="on">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-form ref="registerForm">
                <v-card-title>
                    <span class="headline">Add School Year</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="School Year" placeholder="Eg. 2021-2022" filled required v-model="school_year">
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
                    <v-btn color="secondary" text :loading="isSubmitting" @click="upsertSchoolyear_semester(school_year,id,'school_year')">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>



    <v-dialog v-model="semesterModal" persistent max-width="450px">

        <template v-slot:activator="{ on, attrs }">

            <v-btn bottom color="primary" dark fab fixed right @click="semesterModal = !semesterModal" v-bind="attrs" v-on="on">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-form ref="registerForm">
                <v-card-title>
                    <span class="headline">Add Semester</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="School Year" filled placeholder="Eg. 2021-2022" required v-model="semester">
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
                    <v-btn color="secondary" text  :loading="isSubmitting" @click="upsertSchoolyear_semester(semester,id,'semester')">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>

    </div>



</template>
<style scoped>

</style>

<script>
    import VueElementLoading from 'vue-element-loading'

    import {
        mapGetters,
        mapActions
    } from "vuex";
    import axios from 'axios';
    export default {
        components: {
            VueElementLoading,
        },
        data: function () {
            return {
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
                headers: [
                    { text: 'ID', value: 'id' },
                    { text: 'School Year', value: 'schoolyear',align: 'start',},
                    { text: 'Actions',sortable: false},
                ],
                schoolyearList:[
                    {
                        id: 1,
                        schoolyear: '2021-2022'
                    },
                     {
                        id: 2,
                        schoolyear: '2022-2023'
                    }
                ]
            }


        },
        computed: {
            ...mapGetters(["getTeachersSumarry"])
        },

        methods: {
            fetchAllSchoolyear_semester() {
                axios.get('/api/admin/schoolyears_semesters/all')
                .then((res)=> {
                    this.semester_data = res.data.semester;
                    this.school_year = res.data.schoolyear;
                })
            },
            upsertSchoolyear_semester(name, id, type) {
               
                let data =  {
                    id: id,
                    name: name,
                    type: type
                };
                axios.post('/api/admin/schoolyears_semesters/upsert', data).then((res) => {
                    console.log(res.data);
                })
            }
        },

        mounted() {

            this.$store.dispatch('teacherSummarryData');



        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
