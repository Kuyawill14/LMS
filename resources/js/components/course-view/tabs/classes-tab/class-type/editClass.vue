<template>
    <div style="width: 100%;">


        <md-field>
            <label>Class Name</label>
            <md-input required v-model="form.class_name"></md-input>
            <span class="md-error">There is an error</span>
        </md-field>

        <div class="text-right">
            <md-button type="submit" class="md-primary" :disabled="sending" @click="updateClass">Save Changes
            </md-button>

        </div>

        <!-- 
        <md-switch v-model="hasMessages">{{ !hasMessages ? 'Show' : 'Hide' }} Errors</md-switch> -->

    </div>
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
                this.$store.dispatch('updateClass', this.form);
                this.fetchSubjectCourseClassList(this.$route.params.id);
                this.toastSuccess()
                setTimeout(() => {
                    this.isloading = false;
                    this.sending = false;

                }, 1000);



            },
        },
        mounted() {

            this.form.class_name = this.getClassName;
            console.log(this.class_id);
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
