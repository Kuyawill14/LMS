<template>
    <div style="width: 100%;">


        <md-field >
            <label>Class Name</label>
            <md-input  required v-model="form.class_name"></md-input>
            <span class="md-error">There is an error</span>
        </md-field>

        <div class="text-right">
            <md-button type="submit" class="md-primary" :disabled="sending" @click="createClass">Create user</md-button>

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
      
        name: 'ErrorsMessages',
        data: () => ({
            noError: null,
            required: null,
            textarea: null,
            hasMessages: false,
            sending: false,
            form: {
                class_name:'',
                course_id:null
            }
        }),
        computed: {
       
        },
        methods: {
            ...mapActions(['fetchSubjectCourseClassList']),
            createClass() {
                this.$emit('closeModal')
                this.sending = true;
                if (this.form.class_name != "") {
                  
                    this.form.course_id = this.$route.params.id;
                    console.log(this.form);
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
