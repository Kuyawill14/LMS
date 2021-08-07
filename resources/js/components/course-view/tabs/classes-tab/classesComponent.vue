<template>
    <div class="container-fluid p-top-class">
        <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
            <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                :to="{name: item.link}"
                :disabled="item.disabled"
            >
                {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
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
        data(){
            return{
                 items: [
                    {
                    text: 'Course',
                    disabled: false,
                    link: 'courses',
                    },
                    {
                    text: 'My Class',
                    disabled: true,
                    link: 'breadcrumbs_link_2',
                    },
                ],
            }
        }
     }

      

</script>
