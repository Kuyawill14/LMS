<template>

    <v-card>
        <v-card-title class="">
            Create Class
        </v-card-title>
        <v-container>
            <v-row class="mx-2">

                <v-col cols="12" class="pa-0 ma-0">
                    <v-text-field required v-model="form.class_name" filled color="primary" label="Class Name">
                    </v-text-field>
                </v-col>


            </v-row>
        </v-container>
        <v-card-actions>

            <v-spacer></v-spacer>
            <v-btn text @click="$emit('closeModal');">Cancel</v-btn>
            <v-btn text color="primary" :disabled="sending" @click="createClass">Create</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {
        validationMixin
    } from 'vuelidate'
    import {
        required,
        email,
        minLength,
        maxLength
    } from 'vuelidate/lib/validators'

    import {
        mapGetters,
        mapActions
    } from "vuex";

    export default {

        name: 'ErrorsMessages',
        data: () => ({
            noError: null,
            required: null,
            textarea: null,
            hasMessages: false,
            sending: false,
            form: {
                class_name: '',
                course_id: null
            },

        }),
        computed: {

        },
        methods: {
            ...mapActions(['fetchSubjectCourseClassList']),
            toastSuccess() {
                return this.$toasted.success("Class Successfully Created", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            createClass() {
                this.$emit('closeModal')
                this.$emit('createclass')
                this.sending = true;
                if (this.form.class_name != "") {
                    this.toastSuccess();

                    this.form.course_id = this.$route.params.id;
                    ////console.log(this.form);
                    this.$store.dispatch('createClass', this.form);
                    this.fetchSubjectCourseClassList(this.$route.params.id);

                    this.sending = false;
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
    .md-progress-bar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }

</style>
