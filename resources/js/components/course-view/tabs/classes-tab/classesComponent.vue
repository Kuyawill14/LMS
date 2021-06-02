<template>
    <div class="container-fluid p-top-class">
        <!-- <studentClassPage v-if="role == 'Student'"></studentClassPage> -->
        <teacherClassPage></teacherClassPage>
    </div>
</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";

    /* import studentClassPage from './class-type/student-classPage'
    import teacherClassPage from './class-type/teacher-classPage'
    import VueElementLoading from 'vue-element-loading' */

    // const studentClassPage = () => import("./class-type/student-classPage")
    const teacherClassPage = () => import("./class-type/teacher-classPage")
    import VueElementLoading from 'vue-element-loading'
    /*  const VueElementLoading = () => import("vue-element-loading") */

    export default {
        props: ['role'],
        components: {
            VueElementLoading,
            // studentClassPage,
            teacherClassPage
        },
     }

      

</script>
