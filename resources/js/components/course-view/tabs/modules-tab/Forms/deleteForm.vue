<template>
    <v-card>
        <v-form ref="registerForm">
            <v-card-title>
                <span class="headline">Confirmation</span>
            </v-card-title>
            <v-card-text>
                <v-container>

                    <v-col cols="12">
                        Are you sure you want to delete this item?
                    </v-col>


                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$emit('closeModal');" :disabled="loading">
                    Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleteModule()" :disabled="loading">
                    Delete
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
        props: ['type', 'moduleId'],

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
                id: ''
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
            deleteModule() {


                this.$store.dispatch('deleteMainModule', this.id)
                    .then((res) => {
                        console.log(res);


                        this.loading = false;
                        this.$emit('closeModal');

                        this.toastSuccess("Module Successfully Deleted");



                    })
            },


        },
        mounted() {


            if (this.type == 'delete_module') {
                this.id = this.moduleId;
            }
        }

    }

</script>
