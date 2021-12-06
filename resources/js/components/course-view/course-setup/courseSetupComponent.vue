<template>
    <v-container  pa-0>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="11">
                <v-stepper  v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">
                            Course Details
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">
                            Grading Criteria
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">
                            Create Class
                        </v-stepper-step>
                    </v-stepper-header>

                <v-stepper-items>
                        <v-stepper-content step="1">

                            <courseDetailsComponent v-if="e1 == 1" v-on:changeStep="step" />
                        </v-stepper-content>

                        <v-stepper-content step="2">

                            <gradingCriteria v-if="e1 == 2" v-on:changeStep="step" />

                        </v-stepper-content>


                        <v-stepper-content step="3">
                            <classComponent v-if="e1 == 3" v-on:changeStep="step" />
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>


            </v-col>
        </v-row>
    </v-container>
</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    const gradingCriteria = () => import('./grading-criteria')
    const courseDetailsComponent = () => import('./courseDetailsComponent')
    const classComponent = () => import('./classComponent')
    export default {

        data() {
            return {
                e1: 1,
                classInfo: null,
                form: {
                    id: '',
                    course_name: '',
                    course_id: '',
                    class_description: '',
                    course_picture: '',
                    course_code: '',
                }
            }
        },
        components: {
            gradingCriteria,
            courseDetailsComponent,
            classComponent
        },

        methods: {
            ...mapActions(['fetchScourse']),
            updateCourseDetails() {
                
                this.$store.dispatch('updateCourse', this.getcourseInfo);
            },
            step(step) {
                this.e1 = step;
                
            },
            beforeWindowUnload(e) {
                localStorage.setItem("step", this.e1);
            }
        },
    
       
        mounted(){
            let step = localStorage.getItem("step");
            if(step != null){
                this.e1 = step;
            }
        },
        beforeMount(){
            window.addEventListener('beforeunload', this.beforeWindowUnload)
        },
        beforeDestroy(){
            window.removeEventListener('beforeunload', this.beforeWindowUnload)
        },

    }

</script>
