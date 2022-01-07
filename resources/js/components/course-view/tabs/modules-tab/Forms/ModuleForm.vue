<template>
    <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-title>
                <span class="headline">{{type == 'edit' ?  'Edit Module' : 'Add Module' }}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" class="py-0 my-0">
                            <v-text-field :rules="rules" label="Module Name*" outlined v-model="moduleForm.module_name"
                                required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12 " class="py-0 my-0">
                            <v-textarea :rules="rules" outlined v-model="moduleForm.description" label="Description"
                                auto-grow>
                            </v-textarea>
                        </v-col>
                    </v-row>


                    <v-col ma-0 pa-0 class="text-left py-0 my-0 px-0 mx-0" cols="12">
                        <div class="subtitle-1">Availability:</div>
                    </v-col>

                    <v-col ma-0 pa-0 class="text-left pb-0 mb-0" cols="12">
                        <!--  <v-container ma-0 pa-0 class="d-flex">
                                <v-checkbox
                                class="pa-0 ma-0"
                                v-model="EnableDue"
                                label="Always Available"
                                ></v-checkbox>
                                </v-container> -->

                        <v-radio-group hide-details class="ml-2 mt-0 pt-0 mb-0 pb-0" v-model="availability">
                            <v-radio v-for="(n, index) in radioAvailability" :key="index"
                                :label="radioAvailability[index]" :value="radioAvailability[index]"></v-radio>
                        </v-radio-group>
                    </v-col>


                    <v-row v-if="availability == 'Set date & time'">
                        <v-col>
                            <v-datetime-picker label="From" v-model="publishFrom" class="mt-0 pt-0" time-format="HH:mm"
                                :text-field-props="textFieldProps" :date-picker-props="dateProps"
                                :time-picker-props="timeProps" color="primary">
                                <template slot="dateIcon">
                                    <v-icon>mdi-calendar</v-icon>
                                </template>
                                <template slot="timeIcon">
                                    <v-icon>mdi-clock</v-icon>
                                </template>
                            </v-datetime-picker>
                        </v-col>

                        <v-col>
                            <v-datetime-picker label="To" v-model="publishTo" class="mt-0 pt-0" time-format="HH:mm"
                                :text-field-props="textFieldProps" :date-picker-props="dateProps"
                                :time-picker-props="timeProps" color="primary">
                                <template slot="dateIcon">
                                    <v-icon>mdi-calendar</v-icon>
                                </template>
                                <template slot="timeIcon">
                                    <v-icon>mdi-clock</v-icon>
                                </template>
                            </v-datetime-picker>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="$emit('closeModal');">
                    Close
                </v-btn>
                <v-btn color="primary" text @click="validate" :loading="isSubmitting">
                    Save
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>



<script>
import moment from 'moment-timezone';
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['propModule', 'type'],

        data() {
            return {
                textFieldProps: {
                    appendIcon: 'event'
                },
                dateProps: {
                    headerColor: 'primary',
                    min: moment(Date.now()).format('YYYY-MM-DD')
                },
                timeProps: {
                    useSeconds: false,
                    ampmInTitle: true
                },
                publishTo: null,
                publishFrom: null,
                availability: null,
                radioAvailability: ['Always available', 'Set date & time', 'Unavailable'],
                isSubmitting: false,
                dialog: false,
                moduleForm: new Form({
                    module_name: '',
                    description: '',
                    course_id: ''
                }),
                class_details: '',
                valid: true,
                rules: [
                    v => !!v || 'Field is required',
                ],
                options: {
                    modules: {
                        'toolbar': [
                            ['bold', 'italic', 'underline', 'strike'],
                            [{
                                'header': [1, 2, 3, 4, 5, false]
                            }],
                            [{
                                'align': []
                            }],
                            [{
                                'color': []
                            }],
                            [{
                                'list': 'ordered'
                            }, {
                                'list': 'bullet'
                            }],
                            ['link', 'image', 'video'],
                        ],
                    },
                }
            }
        },
        methods: {
            toastSuccess(message) {
                return this.$toasted.success(message, {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            validate() {
                if (this.$refs.form.validate()) {
                    if (this.type == 'edit') {
                        this.updateModule();
                    } else {
                        this.createModule();
                    }
                } else {
                    this.toastError('Please Fill up all the fields!.')
                }
            },
            createModule() {

                this.isSubmitting = true;
                this.moduleForm.course_id = this.$route.params.id;
                if (this.moduleForm.module_name.trim().length > 0 && this.moduleForm.description.trim().length > 0) {
                    this.$store.dispatch('createMainModule', this.moduleForm)
                        .then((res) => {
                            this.$emit('createdModule');
                            this.moduleForm.reset();
                            this.$refs.form.resetValidation();

                            this.isSubmitting = false;
                            this.toastSuccess("Module Successfully Created");
                        })
                } else {
                    this.toastError('Please Fill up all the fields!.')
                    this.isSubmitting = false;
                }
            },
            updateModule() {
                this.isSubmitting = true;
                this.moduleForm.course_id = this.$route.params.id;
                if (this.moduleForm.module_name.trim().length > 0 && this.moduleForm.description.trim().length > 0) {
                    this.$store.dispatch('updateMainModule', this.moduleForm)
                        .then((res) => {
                            this.$emit('closeModal');
                            this.isSubmitting = false;
                            this.toastSuccess("Module Successfully updated");
                        })
                } else {
                    this.toastError('Please Fill up all the fields!.')
                    this.isSubmitting = false;
                }
            },
        },
        mounted() {
            if (this.type == 'edit') {
                this.moduleForm = this.propModule;
            }
        }

    }

</script>
