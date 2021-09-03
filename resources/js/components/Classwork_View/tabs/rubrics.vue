<template>


    <v-card>

        <v-form ref="form" v-model="valid" lazy-validation>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="$emit('CLoseRubricModal')">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Rubcris</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-title>{{title}} ({{total_points}}pts)</v-toolbar-title>


                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="saveAllCriteria()">
                        Save
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>


            <v-container>

                <v-row align="center" class="pt-4">
                    <vue-element-loading :active="loading" spinner="bar-fade-scale" color="#FF6700" />
                    <v-col cols="3" v-for="(item, index) in criteria" :key="index">
                        <v-card class="pa-5">
                            <v-btn class="mx-2" fab dark x-small color="red"
                                @click="deleteDialog = true, rubrics_id = item.id,deleteIndex = index"
                                style="position: absolute;right: -20px;top: -11px;height:20px !important;width:20px !important;">
                                <v-icon dark style="font-size: 15px;">
                                    mdi-close
                                </v-icon>
                            </v-btn>
                            <v-row>
                                <v-col cols="12" style="margin-bottom: -20px;">
                                    <v-text-field outlined label="Points" class="text-field" v-model="item.points"
                                        type="number" :rules="pointsRules" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" class="py-0" style="margin-bottom: -20px;">
                                    <v-text-field outlined label="Cirterion name" v-model="item.criteria_name"
                                        :rules="nameRules" type="text" class="text-field" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" class="py-0" style="margin-bottom: -20px;">
                                    <v-textarea label="Description" class="text-field" v-model="item.description"
                                        outlined auto-grow>
                                    </v-textarea>
                                </v-col>
                            </v-row>
                        </v-card>


                    </v-col>

                    <v-col cols="3">
                        <v-card class="pa-5">

                            <v-row>
                                <v-col cols="12" style="margin-bottom: -20px;">
                                    <v-text-field outlined label="Points" v-model="criteria_form.points" type="text"
                                        :rules="pointsRules" class="text-field" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" class="py-0" style="margin-bottom: -20px;">
                                    <v-text-field outlined label="Cirterion name" v-model="criteria_form.criteria_name"
                                        :rules="nameRules" class="text-field" type="text" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" class="py-0" style="margin-bottom: -20px;">
                                    <v-textarea label="Description" class="text-field"
                                        v-model="criteria_form.description" outlined auto-grow>
                                    </v-textarea>
                                </v-col>
                            </v-row>
                        </v-card>

                    </v-col>


                    <v-btn color="primary" @click="addCriteria" class="ml-3">
                        <v-icon>
                            mdi-plus
                        </v-icon>

                    </v-btn>
                </v-row>




            </v-container>
        </v-form>





        <v-dialog v-model="deleteDialog" persistent max-width="600px">
            <v-card>

                <v-card-title>
                    <span class="headline">Confirmation</span>
                </v-card-title>
                <v-card-text>
                    Are you sure you want to delete this module?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="deleteDialog =false">
                        Cancel
                    </v-btn>
                    <v-btn color="red" text @click="deleteRubrics(rubrics_id)" :loading="loading">
                        Delete
                    </v-btn>
                </v-card-actions>

            </v-card>
        </v-dialog>


    </v-card>


</template>


<script>
    import axios from 'axios'
    export default {
        props: ['dialog', 'total_points', 'title', 'rubrics'],
        data() {
            return {
                isSaved: true,
                loading: false,
                deleteDialog: false,
                rubrics_id: '',
                deleteIndex: null,
                modal: this.dialog,
                criteria: this.rubrics,
                num: -999,
                criteria_form: {
                    id: '',
                    points: '',
                    criteria_name: '',
                    description: ''
                },
                valid: true,
                nameRules: [
                    v => !!v || ' required',

                ],
                pointsRules: [
                    v => !!v || 'Points is required'

                ],

            }

        },
        methods: {
            closeModal() {
                this.saveAllCriteria()
                .then(() => {
                    this.$emit('closeModal')
                });
            },

            resetForm() {
                this.criteria_form.points = '';
                this.criteria_form.criteria_name = '';
                this.criteria_form.description = '';
            },
            saveAllCriteria() {
                this.loading = true;
                this.criteria.push(this.criteria_form);
                axios.post(`/api/classwork/rubrics-save/${this.$route.query.clwk}`, {
                        rubrics: this.criteria
                    })
                    .then((res) => {
                        this.resetForm();
                        //this.fetchAllRubrics();
                        this.loading = false;
                        this.$emit('CriteriaSave');
                        //this.$refs.form.reset()
                    })
                    .catch((err) => {
                        console.log(err);
                        this.toastError('Something went wrong');
                        this.loading = false;
                    })
            },
            addCriteria() {
                this.isSaved = false;
                if (this.$refs.form.validate()) {
                    if (this.criteria_form.points == '') {
                        this.toastError('Please Complete the fields')
                    } else {
                        this.criteria.push({
                            id: this.num - 1,
                            points: this.criteria_form.points,
                            criteria_name: this.criteria_form.criteria_name,
                            description: this.criteria_form.description,
                        })

                        this.resetForm();
                    }


                }

            },
           /*  fetchAllRubrics() {
                this.loading = true;
                axios.get(`/api/classwork/rubric/all/${this.$route.query.clwk}`, this.criteria)
                    .then((res) => {
                        this.criteria = res.data;
                        this.loading = false;
                    }).catch((err) => {
                        console.log(err);
                        this.toastError('Something went wrong');
                        this.loading = false;
                    })
            }, */
            deleteRubrics(rubrics_id) {
                this.loading = true;
                axios.delete(`/api/classwork/rubric/delete/${this.$route.query.clwk}/${this.rubrics_id}`)
                    .then((res) => {
                        
                        this.loading = false;
                        this.deleteDialog = false;
                        //this.fetchAllRubrics();
                        this.criteria.splice(this.deleteIndex, 1);
                    }).catch((err) => {
                        console.log(err);
                        this.toastError('Something went wrong');
                        this.loading = false;
                    })
            }
        },
        mounted() {
            //this.fetchAllRubrics();
        }

    }

</script>

<style>
    .text-field>.v-input__control>.v-text-field__details>.error--text {
        margin-top: -55px !important;
        position: absolute !important;
        z-index: 9999999 !important;


    }

</style>
