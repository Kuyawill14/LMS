<template>
    <div>
        <teacherArchive v-if="role == 'Teacher'" />
        <studentArchive v-if="role == 'Student'" />
    </div>
</template>

<script>
    const teacherArchive = () => import("./archiveCourseType/teacherArchive")
    const studentArchive = () => import("./archiveCourseType/studentArchive")
    export default {
        props: ['role'],
        components: {
            teacherArchive,
            studentArchive
        },
    }

</script>
