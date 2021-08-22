<template>
    <div class="pt-2">
        <h2>
            Manage Departments
        </h2>
        <v-row class="pt-2" >


            <v-col cols="12" >
                <v-card elevation="2">
                    <v-card-title>
                        

                        <v-btn color="primary" small class="white--text ml-auto" align="right"
                            @click="syModal = true, modalType='add'">
                            Department
                            <v-icon right dark>
                                mdi-plus
                            </v-icon>
                        </v-btn>

                    </v-card-title>
                    <v-divider></v-divider>
                    <v-data-table dense :headers="header" :items="departmentsList" :items-per-page="5"
                        class="elevation-1">
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="item in items" :key="item.id">


                                    <td>{{item.name}}</td>

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


        </v-row>
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
                departmentsList:[],
                header: [
                    {
                        text: 'Department Name',
                        value: 'name',
                        align: 'start',
                    },
                    {
                        text: 'Actions',
                        sortable: false
                    },
                ],
              
            }
        },

        methods: {
            fetchDeparmentList() {
                axios.get('/api/admin/department/all')
                    .then((res) => {
                        this.departmentsList = res.data;
                    })
            },
            
        },

        mounted() {
            this.fetchDeparmentList();
        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
