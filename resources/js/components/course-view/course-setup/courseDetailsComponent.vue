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


        <v-col cols="12" class="pa-0 ma-0">
            <v-card>
                <v-card-title class="pl-3 py-3" style="font-size: 1rem;color:grey">Course Description
                </v-card-title>
                <v-divider></v-divider>

                <editor v-model="getcourseInfo.course_description" theme="snow"></editor>


            </v-card>
        </v-col>


        <br>
        <v-row>
            <v-col>
                <v-btn color="primary" @click="updateCourseDetails()">
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
                courseDetails: []
            }
        },

        computed: mapGetters(["getcourseInfo"]),
        methods: {
              ...mapActions(['fetchScourse']),
            updateCourseDetails() {
                this.$store.dispatch('updateCourse', this.getcourseInfo);
                this.$emit('changeStep', this.el)
            }
        },
        created() {
            const course_id = this.$route.params.id;
            this.courseDetails = this.fetchScourse(course_id);
    
        }
    }

</script>
