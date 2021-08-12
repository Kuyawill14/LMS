<template>
    <div class="pt-4">
        <h2>
            Manage users
        </h2>
        <v-btn bottom color="primary" dark fab fixed right @click="openAdd()">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-row class="pt-2">


            <v-col>
                <v-card elevation="2">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th class="text-center">
                                        Total Courses
                                    </th >
                                    <th class="text-center">
                                        Total Classes
                                    </th>
                                    <th class="text-center">
                                        Total Modules Created
                                    </th>
                                    <th class="text-center">
                                        Total Lesson Created
                                    </th>

                                    <th class="text-center">
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in getTeachersSumarry" :key="index">
                                    <td> {{item.user_id}} </td>
                                    <td> {{item.lastName + ', ' + item.firstName + ' ' + item.middleName }} </td>
                                    <td class="text-center"> {{item.course_count}}</td>
                                    <td class="text-center"> {{item.class_count}} </td>
                                    <td class="text-center"> {{item.classwork_count}} </td>
                                    <td class="text-center"> {{item.sub_modules_count}} </td>
                                    <td class="text-center">
                                        <v-btn icon color="success" link  :to="{name: 'teacherProfile', params: {id: item.user_id}}">
                                            <v-icon>
                                                mdi-eye
                                            </v-icon>
                                        </v-btn>
                                    </td>
                                </tr>
                                <tr v-if="getTeachersSumarry.length == 0">
                                    <td colspan="42" class="text-center"> No data available</td>
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
