<template>
    <div class="pt-4">
        <h2>
            Monitor Teachers
        </h2>

        <v-row class="pt-2">


            <v-col>

                 <v-card v-if="loading">
                    <v-skeleton-loader :loading="loading" type="table"></v-skeleton-loader>
                </v-card>

                <v-card elevation="2"  v-if="!loading">
                    <v-card-title>
                        Teachers

                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details>
                        </v-text-field>
                    </v-card-title>

                    <v-data-table :headers="headers" :items="filteredItems" :items-per-page="10" class="elevation-1">
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
                                            :to="{name: 'teacherProfile', params: {id: item.user_id}}">
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
                loading:true,
            }


        },
        computed: {
            ...mapGetters(["getTeachersSumarry"]),
            filteredItems() {
                if (this.search) {
                  return this.teacherSummary.filter((item) => {
                        return this.search.toLowerCase().split(' ').every(v => item.firstName.toLowerCase()
                            .includes(v) || item.lastName.toLowerCase()
                            .includes(v)|| item.middleName.toLowerCase()
                            .includes(v)|| item.user_id.toString()
                            .includes(v))
                    })
                } else {
                    return this.teacherSummary;
                }

            }

        },

        methods: {

        },

        mounted() {

            this.$store.dispatch('teacherSummarryData').then(() => {
                this.teacherSummary = this.getTeachersSumarry;
                this.loading = false;
            });




        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
