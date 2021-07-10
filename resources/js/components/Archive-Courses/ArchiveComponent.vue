<template>
    <div>
        <teacherArchive v-if="role == 'Teacher'" />
        <studentArchive v-if="role == 'Student'" />
    </div>
</template>

<script>
    const teacherArchive = () => import("./ArchiveType/teacherArchive")
    const studentArchive = () => import("./ArchiveType/studentArchive")
    export default {
        props: ['role'],
        components: {
            teacherArchive,
            studentArchive
        },
    }

</script>
