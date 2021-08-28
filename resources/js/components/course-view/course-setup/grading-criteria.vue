<template>
    <div>
        <v-container>
            <v-row class="mx-2">
                <v-col lg="9">
                    <v-text-field v-model="new_grading_criteria_form.name" outlined color="primary"
                        label="Criteria Name">
                    </v-text-field>
                </v-col>
                <v-col lg="3" class="float-right">
                    <v-text-field type="number" v-model="new_grading_criteria_form.percentage" class="centered-input" outlined
                        color="primary" label="Percentage" suffix="%"></v-text-field>
                </v-col>


            </v-row>

            <v-row class="ma-0 pa-0">
                <v-col class="float-right mx-2 pt-0">
                    <v-btn class="float-right" color="primary" :disabled="isAdding" outlined @click="addGradeCriteria()">
                        <v-icon left>
                            mdi-plus
                        </v-icon>
                        {{isAdding ? 'Adding...' : 'Add Criteria'}}
                        

                    </v-btn>
                </v-col>
            </v-row>

            <v-divider></v-divider>
            <div>
                <VueElementLoading :active="loading" spinner="bar-fade-scale" />
                <v-row class="mx-2 mt-0" v-for="(gradeCriteria, i) in get_gradingCriteria"
                    :key="'get_gradingCriteria'+i">

                    <v-col lg="9">
                        <v-text-field v-model="gradeCriteria.name" outlined color="primary"
                            @change="updateGradeCriteria(gradeCriteria.name, gradeCriteria.percentage, gradeCriteria.id)">
                        </v-text-field>
                    </v-col>
                    <v-col lg="2">
                        <v-text-field type="number" v-model="gradeCriteria.percentage" outlined color="primary" suffix="%"
                            class="text-center centered-input" style="text-align:center !important"
                            @change="updateGradeCriteria(gradeCriteria.name, gradeCriteria.percentage, gradeCriteria.id)">
                        </v-text-field>
                    </v-col>

                    <v-col lg="1">
                        <v-btn color="grey lighten-1" class="mt-2" icon @click="openDelete( gradeCriteria.id)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-col>


                </v-row>

                <br>
                <v-row class="mx-2">
                    <v-col class="text-right">
                        <p>Total: <strong>{{_totalPercent(get_gradingCriteria)}} % </strong></p>
                    </v-col>



                </v-row>
            </div>

        </v-container>



        <v-dialog v-model="Deldialog" persistent max-width="290">

            <v-card>
                <v-card-title class="headline">
                    Are you sure you want to delete this?
                </v-card-title>
                <!-- <v-card-text>{some message} </v-card-text> -->
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="Deldialog = false">
                        No
                    </v-btn>
                    <v-btn color="primary" text @click="removeGradeCriteria()">
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>



        <v-divider></v-divider>
        <br>
        <v-row>
            <v-col>
                <v-btn class="float-right" color="primary" @click="next()" :disabled="get_gradingCriteria.length == 0 || _totalPercent(get_gradingCriteria)  != 100">
                    Next
                </v-btn>

                <v-btn class="float-left" text @click="back()">
                    back
                </v-btn>
            </v-col>

        </v-row>

    </div>



</template>
<style scoped>
    .centered-input>>>input {
        text-align: right;
    }

</style>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data: function () {
            return {
                e1: 3,
                Deldialog: false,
                dialog: false,
                temp_id: '',
                loading: false,
                type: '',
                search: "",
                grading_criteria_form: {},
                new_grading_criteria_form: {
                    name: '',
                    percentage: ''
                },
                grading_criteria: {},
                course_id: '',
                delId: '',
                time: '',
                isAdding: false
            }

        },
        computed: {
            ...mapGetters(["get_gradingCriteria"])
        },

        methods: {
             _totalPercent(percentage_data) {
                var total = 0;

                percentage_data.forEach(function (val) {

                    total += parseFloat(val.percentage);
          

                })
                return total;
            },
            back() {
                this.$emit('changeStep', this.e1 - 2)
            },
            next() {
                if (this.get_gradingCriteria.length == 0) {
                    this.toastError('Please add atleast one grading criteria to proceed to next step');
                    
                } else {
                    if(this._totalPercent(this.get_gradingCriteria) < 100) {
                            this.toastError('Total percentage is not equal to 100%');
                    } else {
 this.$emit('changeStep', this.e1)
                    }
                   
                }


            },
            openDelete(id) {
                this.delId = id;
                this.Deldialog = true;
            },
            getAllGradeCriteria() {
                this.$store.dispatch('fetchGradingCriteria', this.$route.params.id);
            },

            addGradeCriteria() {
                this.isAdding = true;
                if (this.new_grading_criteria_form.name.trim() != '' || this.new_grading_criteria_form.percentage
                    .trim() !=
                    '') {
                    this.loading = true;
                    var errors = '';
                    this.new_grading_criteria_form.course_id = this.$route.params.id;
                    this.$store.dispatch('addGradingCriteria', this.new_grading_criteria_form).then((data) => {

                        if (data[0] == 'error') {
                            for (var i = 1; i < data.length; i++) {
                                errors = data[i] + "<br>" + errors;
                            }
                            this.toastError(errors);

                        } else {
                            this.new_grading_criteria_form.name = '';
                            this.new_grading_criteria_form.percentage = '';
                            this.toastSuccess("Criteria Successfully added");

                        }
                        this.isAdding = false;
                    });
                    setTimeout(() => {
                        this.loading = false;
                    }, 1000)




                } else {
                    this.toastError('Please fill up all the field to add criteria');
                      this.isAdding = false;
                }

            },
            updateGradeCriteria(name, percentage, id) {
                this.loading = true;
                this.grading_criteria_form.name = name;
                this.grading_criteria_form.percentage = percentage;
                this.grading_criteria_form.id = id;
                this.grading_criteria_form.course_id = this.$route.params.id;;
                var errors = '';
                this.$store.dispatch('updateGradingCriteria', this.grading_criteria_form).then((data) => {
                    if (data[0] == 'error') {
                        for (var i = 1; i < data.length; i++) {
                            errors = data[i] + "<br>" + errors;

                        }
                        this.toastError(errors);

                        var index = this.get_gradingCriteria.findIndex(function (item, i) {
                            return item.id == id;
                        });

                        this.get_gradingCriteria[index].percentage = 0;


                    } else {
                        this.toastSuccess("Changes have been saved");
                    }

                });
                //} 

                setTimeout(() => {
                    this.loading = false;
                }, 1000)




            },


            removeGradeCriteria() {
                this.loading = true;
                this.$store.dispatch('removeGradingCriteria', this.delId).then((message) => {
                    this.Deldialog = false;
                    setTimeout(() => {
                        this.loading = false;
                    }, 1000)

                    this.toastSuccess("Criteria successfully deleted ");
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
            //  this.loading = true;
            this.getAllGradeCriteria();
            // setTimeout(() => {
            //     this.loading = false;
            // }, 1000)

        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
