<template>
    <v-card>

        <v-card-title>
            <span class="headline">Confirmation</span>
        </v-card-title>
        <v-card-text>
            Are you sure you want to delete this class?
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('closeModal')">
                Cancel
            </v-btn>
            <v-btn color="red" text @click="deleteClass()" :loading="loading">
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
    import axios from 'axios';
    export default {
        props: ['class_id'],

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
            deleteClass() {
                this.loading = true;
                axios.delete('/api/class/delete/' + this.class_id)
                    .then((res) => {

                        // this.toastSuccess("Module Successfully Deleted");

                        this.$store.dispatch('fetchSubjectCourseClassList',this.$route.params.id);

                        this.$emit('closeModal');
                        this.loading = false;

                    })
                    .catch((err) => {
                        this.loading = false;
                        this.toastSuccess("Something went wrong");
                    })
            },
        },


    }

</script>
