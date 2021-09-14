<template>
    <v-card>

            <v-card-title>
                <span class="headline">Confirmation</span>
            </v-card-title>
            <v-card-text>
                 Are you sure you want to delete this module?
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="$emit('closeModal');" >
                    Cancel
                </v-btn>
                <v-btn color="red" text @click="deleteModule()" :loading="loading">
                    Delete
                </v-btn>
            </v-card-actions>
       
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
                        this.loading = false;
                        this.$emit('closeModal');
                        this.toastSuccess("Module Successfully Deleted");
                    //   this.$store.dispatch('fetchMainModule', this.$route.params.id)
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
