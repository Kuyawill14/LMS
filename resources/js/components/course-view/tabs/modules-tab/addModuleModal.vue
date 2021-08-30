<template>



    <v-dialog v-model="openModal" persistent max-width="600px">

        <template v-slot:activator="{ on, attrs }">

            <v-btn bottom color="primary" dark fab fixed right @click="openModal = !openModal" v-bind="attrs" v-on="on">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-form ref="registerForm">
                <v-card-title>
                    <span class="headline">Add Module</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                 outlined label="Module Name*" v-model="moduleForm.module_name" required>
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
                    <v-btn color="orange darken-1" text @click="openModal = false">
                        Close
                    </v-btn>
                    <v-btn color="secondary" text @click="createModule()" :loading="isSubmitting">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>


</template>

<script>
    import Form from 'vform'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['openModal'],
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
            }
        },
        methods: {
            toastSuccess() {
                return this.$toasted.success("Module Successfully Created", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            createModule() {
                this.isSubmitting = true;
                this.moduleForm.course_id = this.$route.params.id;
                if (this.moduleForm.module_name.trim().length > 0 && this.moduleForm.description.trim().length > 0) {
                    this.$store.dispatch('createMainModule', this.moduleForm)
                        .then((res) => {
                            //console.log(res);
                            if (res.status == 201) {
                                this.moduleForm.reset()
                                this.isSubmitting = false;
                                this.$emit('createdModal');
                                this.openModal = false;
                                this.toastSuccess();

                            }


                        })
                } else {
                    this.toastError('Please Fill up all the fields!.')
                       this.isSubmitting = false;
                }

            },

        },
        created() {
            this.class_details = localStorage.getItem('class_details')

        }
    }

</script>
