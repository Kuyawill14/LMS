<template>
    <div>
        <teacherArchive v-if="role == 'Teacher'" />
    </div>
</template>

<script>
    const teacherArchive = () => import("./archiveCourseType/teacherArchive")
    export default {
        props: ['role'],
        components: {
            teacherArchive,
        },
    }

</script>
