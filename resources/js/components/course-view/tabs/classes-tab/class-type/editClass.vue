<template>
    <v-card>
        <v-card-title class="">
            Edit Class
        </v-card-title>
        <v-container>
            <v-row class="mx-2">

                <v-col cols="12" class="pa-0 ma-0">
                    <v-text-field required v-model="className" ref="_classname" filled color="primary" label="Class Name">
                    </v-text-field>

                </v-col>


            </v-row>
        </v-container>
        <v-card-actions>

            <v-spacer></v-spacer>
            <v-btn text color="secondary" @click="$emit('closeModal');">Cancel</v-btn>
            <v-btn text color="primary" :disabled="sending" @click="updateClass">Save</v-btn>
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
        props: ['class_id', 'class_name'],
        name: 'ErrorsMessages',
        data: () => ({
            noError: null,
            required: null,
            textarea: null,
            hasMessages: false,
            sending: false,
            className: '',
            form: {
                class_name: '',
                class_id: null
            }
        }),
        computed: {
            getClassName() {
                return this.class_name;
            }

        },
        methods: {
            ...mapActions(['fetchSubjectCourseClassList']),
            toastSuccess() {
                return this.$toasted.success("Class Successfully updated", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },

            updateClass() {
                this.sending = true;
                this.$emit('closeModal');
                this.isloading = true;
                this.form.class_id = this.class_id;
                this.form.course_id = this.$route.params.id;
                this.form.class_name = this.$refs._classname.value;
                this.$store.dispatch('updateClass', this.form).then(()=>{
  this.fetchSubjectCourseClassList(this.$route.params.id);
                this.toastSuccess()
        
                    this.isloading = false;
                    this.sending = false;




                });
              

            },
        },
        mounted() {
            this.className = this.class_name;


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
