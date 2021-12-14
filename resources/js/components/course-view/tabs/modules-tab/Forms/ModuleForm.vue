<template>
    <v-card>
        <v-form ref="form"  v-model="valid" lazy-validation>
            <v-card-title>
                <span class="headline">{{type == 'edit' ?  'Edit Module' : 'Add Module' }}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" class="py-0 my-0">
                            <v-text-field 
                            :rules="rules"
                            label="Module Name*" outlined v-model="moduleForm.module_name" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12 " class="py-0 my-0">
                            <v-textarea 
                            :rules="rules"
                            outlined v-model="moduleForm.description" label="Description" auto-grow>
                            </v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="$emit('closeModal');">
                    Close
                </v-btn>
                <v-btn color="primary" text @click="validate"
                    :loading="isSubmitting">
                    Save
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>



<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['propModule', 'type'],

        data() {
            return {
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
                if(this.$refs.form.validate()){
                    if(this.type == 'edit'){
                        this.updateModule();
                    }else{
                        this.createModule();
                    }
                }else{
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
