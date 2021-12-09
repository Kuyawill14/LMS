<template>
<div>
    <studentDashboard v-if="role == 'Student'" :role="role" />
    <teacherDashboard v-if="role == 'Teacher'" :role="role" />
    <adminDashboard v-if="role == 'Admin'" :role="role" />
    <programChairDashboard v-if="role == 'ProgramChair'" :role="role" />
</div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    const studentDashboard = () => import('./student/student-dashboardComponent');
    const teacherDashboard = () => import('./teacher/teacher-dashboardComponent');
    const adminDashboard = () => import('./admin/admin-dashboardComponent');
    const programChairDashboard = () => import('../.program-chair/dashboard/programChair-dashboard');

 

    export default {
        props: ['role'],
        title: 'Dashboard',
        components: {
            teacherDashboard,
            studentDashboard,
            adminDashboard,
            programChairDashboard

        },
        provide: {

        },

        data() {
            return {
                class_count: 0,
              
            };
        },
        methods: {
            classCount() {
                axios.get('/api/class/count')
                    .then(res => {
                        this.class_count = res.data;
                    })

            }
        },
        computed: mapGetters(['allCourse']),
        mounted() {
            this.classCount();
        },
    };

</script>

<style scoped>
    .chart {
        height: 400px;
    }

</style>
