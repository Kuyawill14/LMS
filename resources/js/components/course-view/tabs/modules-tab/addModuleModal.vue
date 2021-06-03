<template>


 
        <v-dialog v-model="openModal" persistent max-width="600px">

            <template v-slot:activator="{ on, attrs }">
           
                    <v-btn bottom color="primary" dark fab fixed right @click="openModal = !openModal"  v-bind="attrs" v-on="on">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
            </template>
            <v-card>
                <v-form ref="registerForm" >
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
                        <v-btn color="blue darken-1" text @click="openModal = false" :disabled="loading">
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click=" createModule()" :disabled="loading">
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
            toastSuccess() {
                return this.$toasted.success("Module Successfully Created", {
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
                        if (res.status == 201) {
                            this.moduleForm.reset()
                       
                            this.$emit('createdModal');
                            this.openModal = false;
                                 this.toastSuccess();
                          
                        }


                    })
            },

        },
        created() {
            this.class_details = localStorage.getItem('class_details')

        }
    }

</script>