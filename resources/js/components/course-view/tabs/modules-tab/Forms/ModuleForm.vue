<template>
    <v-card>
        <v-form ref="registerForm">
            <v-card-title>
                <span class="headline">Add Module</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Module Name*" v-model="moduleForm.module_name" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea clearable clear-icon="mdi-close-circle" label="Description"
                                v-model="moduleForm.description"></v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$emit('closeModal');" :disabled="loading">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="type == 'edit' ? updateModule() : createModule()"
                    :disabled="loading">
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
                loading: false,
                dialog: false,
                moduleForm: new Form({
                    module_name: '',
                    description: '',
                    course_id: ''
                }),
                class_details: '',
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
            createModule() {

                this.loading = true;
                this.moduleForm.course_id = this.$route.params.id;
                this.$store.dispatch('createMainModule', this.moduleForm)
                    .then((res) => {
                        console.log(res);


                        this.loading = false;
                        this.$emit('closeModal');
this.$emit('createdModule');
                        this.toastSuccess("Module Successfully Created");
                        this.$store.dispatch('fetchSubModule', this.$route.params.id);



                    })
            },
            updateModule() {

                this.loading = true;
                this.moduleForm.course_id = this.$route.params.id;
                this.$store.dispatch('updateMainModule', this.moduleForm)
                    .then((res) => {
                        console.log(res);


                        this.loading = false;
                        this.$emit('closeModal');

                        this.toastSuccess("Module Successfully updated");




                    })
            },

        },
        mounted() {

            if (this.type == 'edit') {
                this.moduleForm = this.propModule;
            }
        }

    }

</script>
