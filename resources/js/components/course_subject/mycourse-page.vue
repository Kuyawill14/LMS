<template>
    <div>
        <teacherCoursePage v-if="role == 'Teacher'" />
        <studentClassPage v-if="role == 'Student'" />
    </div>
</template>

<script>
    const teacherCoursePage = () => import("./class-type/teacher-coursePage")
    const studentClassPage = () => import("./class-type/student-classPage")
    export default {
        props: ['role'],
        components: {
            teacherCoursePage,
            studentClassPage
        },
    }

</script>
