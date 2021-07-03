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
                            Course Description
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 3" step="3">
                            Grading Criteria
                        </v-stepper-step>
                        <v-divider></v-divider>

                        <v-stepper-step step="4">
                            Class
                        </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">

                            <v-container>
                                <v-row class="mx-2">
                                    <v-col cols="12" class="pa-0 ma-0">
                                        <v-text-field v-model="getcourseInfo.course_code" filled color="primary"
                                            label="Course Code">
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" class="pa-0 ma-0">
                                        <v-text-field v-model="getcourseInfo.course_name" filled color="primary"
                                            label="Course Name">
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>

                            <v-divider></v-divider>
                            <br>
                            <v-btn color="primary" @click="e1 = 2; updateCourseDetails()">
                                Continue
                            </v-btn>

                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-card class="mb-12" >
                                <editor placeholder="Announce something in your class!" class="border"
                                    v-model="getcourseInfo.course_description" theme="snow"></editor>

                            </v-card>

                            <v-btn color="primary" @click="e1 = 3;updateCourseDetails();">
                                Continue
                            </v-btn>

                            <v-btn text @click="e1--;">
                                back
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                            <v-btn color="primary" @click="e1 = 1">
                                Continue
                            </v-btn>

                         
                            <v-btn text @click="e1--;">
                                back
                            </v-btn>
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
                computed: mapGetters(["getcourseInfo"]),
        methods: {
                     ...mapActions(['fetchScourse']),
            updateCourseDetails(){
                this.$store.dispatch('updateCourse', this.getcourseInfo);
            }
        },
         created() {
            const course_id = this.$route.params.id;
            this.classInfo = this.fetchScourse(course_id);
        },
    }

</script>
