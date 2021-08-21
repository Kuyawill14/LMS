<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="10">
                <v-stepper v-model="e1">
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
                            Class
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
            }
        },
        /* created() {
            const course_id = this.$route.params.id;
            this.fetchScourse(course_id);
        }, */
    }

</script>
