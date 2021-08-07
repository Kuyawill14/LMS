<template>
    <div class="pt-4">
        <h2>
            Manage Schoolyear / Semester
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
                                        School Year
                                    </th>


                                    <th class="text-center">
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2021-2022 </td>
                                    <td>Edit </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2021-2022 </td>
                                    <td>Edit </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>2021-2022 </td>
                                    <td>Edit </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>2021-2022 </td>
                                    <td>Edit </td>
                                </tr>


                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>


            <v-col cols="3">
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
