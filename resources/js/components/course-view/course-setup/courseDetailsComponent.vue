<template>
    <v-container>

        <v-col cols="12" class="pa-0">
            <v-text-field v-model="getcourseInfo.course_code" outlined color="primary" label="Course Code">
            </v-text-field>
        </v-col>

        <v-col cols="12" class="pa-0 ">
            <v-text-field v-model="getcourseInfo.course_name" outlined color="primary" label="Course Name">
            </v-text-field>
        </v-col>

        <v-col cols="12" class="pa-0 ">
            <v-text-field v-model="getcourseInfo.v_classroom_link" outlined color="primary" label="Google Meet Link">
            </v-text-field>
        </v-col>


        <v-col cols="12" class="pa-0 ma-0">
            <v-card>
                <v-card-title class="pl-3 py-3" style="font-size: 1rem;color:grey">Course Description
                </v-card-title>
                <v-divider></v-divider>

                <editor v-model="getcourseInfo.course_description" theme="snow"></editor>
            </v-card>
        </v-col>



        <br> <br>
        <v-divider></v-divider>
        <br>
        <v-row>
            <v-col>
                <v-btn class="float-right" color="primary" @click="updateCourseDetails()" :loading="isUpdating">
                    Next
                </v-btn>
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
                el: 2,
                isUpdating: false,
                courseDetails: []
            }
        },

        computed: mapGetters(["getcourseInfo"]),
        methods: {
            ...mapActions(['fetchScourse']),
            updateCourseDetails() {
                if (this.getcourseInfo.course_description.trim() == '' || this.getcourseInfo.course_name == '' || this
                    .course_code == '') {
                    this.toastError('Please complete all the field to proceed to the next step');
                } else {
                    this.isUpdating = true;
                    this.$store.dispatch('updateCourse', this.getcourseInfo);

                    this.isUpdating = false;
                    this.$emit('changeStep', this.el);
                }

            }
        },
       /*  mounted() {
            this.courseDetails = this.fetchScourse(this.$route.params.id);

        } */
    }

</script>
