<template>
    <div>
        <teacherCoursePage/>
    </div>
</template>


<script>
    const teacherCoursePage = () => import("./class-type/teacher-coursePage")
export default {
    components: {
       teacherCoursePage
    }
}
</script>