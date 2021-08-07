<template>
    <div class="pt-4">
        <h2>
            Manage Schoolyear / Semester
        </h2>
        <v-btn bottom color="primary" dark fab fixed right @click="openAdd()">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
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
