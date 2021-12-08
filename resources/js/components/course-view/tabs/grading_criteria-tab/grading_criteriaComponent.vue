<template>
    <div >
    <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
        <template v-slot:item="{ item }">
        <v-breadcrumbs-item
            :to="{name: item.link}"
            :disabled="item.disabled"
        >
            {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
        </template>
    </v-breadcrumbs>
        <h2>
            Grading Criteria
        </h2>
        <v-btn v-if="_totalPercent(get_gradingCriteria) != 100" bottom color="primary" dark fab fixed right @click="openAdd()">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-row class="pt-2" align="center" justify="center">


            <v-col cols="12" md="10">
                <v-card elevation="2">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-center">
                                        Criteria name
                                    </th>
                                    <th class="text-center">
                                        Percentage (%)
                                    </th>
                                    <th class="text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(gradeCriteria, i) in get_gradingCriteria" :key="'get_gradingCriteria'+i">
                                    <td class="text-center">{{gradeCriteria.name}}</td>
                                    <td class="text-center">{{gradeCriteria.percentage}}%</td>
                                    <td class="text-center">
                                        <v-btn icon color="success"
                                            @click="openEdit(gradeCriteria.name,gradeCriteria.percentage,gradeCriteria.id)">
                                            <v-icon>
                                                mdi-pencil
                                            </v-icon>

                                        </v-btn>
                                        <v-btn icon color="red"  @click="openDelete(gradeCriteria.id)">
                                            <v-icon>
                                                mdi-delete
                                            </v-icon>

                                        </v-btn>
                                    </td>
                                </tr>
                                <tr v-if="get_gradingCriteria.length != 0">
                                    <td class="text-center"><strong>Total</strong></td>
                                    <td class="text-center"><strong>{{_totalPercent(get_gradingCriteria)}}%</strong>
                                    </td>
                                    <td> </td>
                                </tr>
                                <tr v-if="get_gradingCriteria.length == 0">
                                    <td class="text-center" colspan="3"> No data available</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" width="400px">
            <v-card>
                 <v-form ref="form" v-model="valid" lazy-validation>
                    <v-card-title class="">
                        Grading Criteria
                    </v-card-title>
                    <v-container>
                        <v-row class="mx-2">

                            <v-col cols="12" class="pa-0 ma-0">
                                <v-text-field :rules="rules"  v-model="grading_criteria_form.name" filled color="primary"
                                    label="Criteria Name"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="pa-0 ma-0">
                                <v-text-field :rules="rules" v-model="grading_criteria_form.percentage" filled color="primary"
                                    label="Percentage (%)"></v-text-field>
                            </v-col>

                        </v-row>
                    </v-container>
                    <v-card-actions>

                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
                        <v-btn :disabled="!valid" text @click="validate">
                            {{type  == 'add' ? 'Add' : 'Save'}}</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>



        <v-dialog v-model="Deldialog" persistent max-width="290">
           
            <v-card>
                <v-card-title class="headline">
                    Are you sure you want to delete this?
                </v-card-title>
                <v-card-text>{some message} </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  text  @click="Deldialog = false" >
                        No
                    </v-btn>
                    <v-btn color="primary" text  @click="removeGradeCriteria()">
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>



</template>
<style scoped>

</style>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data: function () {
            return {
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
                items: [
                    {
                    text: 'Course',
                    disabled: false,
                    link: 'courses',
                    },
                    {
                    text: 'Grading Criteria',
                    disabled: true,
                    link: 'gradingCriteria',
                    },
                ],
                valid: true,
                rules: [
                    v => !!v || 'Field is required',
                ],
            }

        },
        computed: {
            ...mapGetters(["get_gradingCriteria"])
        },

        methods: {
             validate () {
                if(this.$refs.form.validate()){
                    if(this.type  == 'add'){
                        this.addGradeCriteria();
                    }else{
                        this.updateGradeCriteria()
                    }
                }
            },
            getAllGradeCriteria() {
                this.$store.dispatch('fetchGradingCriteria', this.$route.params.id);
            },
            openAdd() {
                this.type = 'add'
                this.grading_criteria_form.name = '';
                this.grading_criteria_form.percentage = '';
                this.dialog = true;
            },
            openEdit(name, percentage, id) {
                this.type = 'edit'
                this.dialog = true;
                this.grading_criteria_form.name = name;
                this.grading_criteria_form.percentage = percentage;
                this.grading_criteria_form.id = id;
                this.grading_criteria_form.course_id = this.$route.params.id;;
            },
             openDelete(id) {
              this.delId = id;
                this.Deldialog = true;
            },
            addGradeCriteria() {

                if (this.grading_criteria_form.name.trim() != '' || this.grading_criteria_form.percentage.trim() !=
                    '') {
                    this.loading = true;
                    var errors = '';
                    this.grading_criteria_form.course_id = this.$route.params.id;
                    this.$store.dispatch('addGradingCriteria', this.grading_criteria_form).then((data) => {
                        this.dialog = false;

                    });
                } else {

                }

            },
            updateGradeCriteria() {
                var errors = '';
                this.$store.dispatch('updateGradingCriteria', this.grading_criteria_form).then((data) => {
                    if (data[0] == 'error') {
                        for (var i = 1; i < data.length; i++) {
                            errors = data[i] + "<br>" + errors;
                            ////console.log(data[i]);
                        }
                        this.loading = false;


                    } else {
                        this.loading = false;
                        this.dialog = false;
                    }

                });
                //} 

            },


            removeGradeCriteria() {
                this.loading = true;
                this.$store.dispatch('removeGradingCriteria', this.delId).then((message) => {
                    this.Deldialog = false;
                    this.loading = false;
                });
            },
            _totalPercent(percentage_data) {
                var total = 0;

                percentage_data.forEach(function (val) {
                    total += parseFloat(val.percentage);
                })
                return total;
            }
        },

        mounted() {
            this.loading = true;
            this.getAllGradeCriteria();
            this.loading = false;
        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
