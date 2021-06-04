<template>
    <div>


   

        <teacherCoursePage v-if="role == 'Teacher'" />
        <studentClassPage v-if="role == 'Student'" />
    </div>
</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    const teacherCoursePage = () => import("./class-type/teacher-coursePage")
    const studentClassPage = () => import("./class-type/student-classPage")
    export default {
        props: ['role'],
        components: {
            teacherCoursePage,
            studentClassPage
        },
        date() {
            return {
                coursesLength: 0,
            }
        },
        computed: mapGetters(['allCourse']),
        methods: {
            fetchCourses() {
                this.$store.dispatch('fetchCourseList').then(() => {
                    this.coursesLength = this.allCourse.length;
                });
            },
        },
        mounted() {
            this.fetchCourses();
        }
    }

</script>
