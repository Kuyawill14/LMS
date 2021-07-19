<template>
    <div>
        <v-row>
            <v-col>
                <h2>Dashboard</h2>
            </v-col>
        </v-row>
        <div class="mt-4">
            <studentDashboard v-if="role == 'Student'" :role="role" />
            <teacherDashboard v-if="role == 'Teacher'" :role="role" />
              <adminDashboard v-if="role == 'Admin'" :role="role" />
        </div>
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

 

    export default {
        props: ['role'],
        name: "HelloWorld",
        components: {
            teacherDashboard,
            studentDashboard,
            adminDashboard

        },
        provide: {

        },

        data() {
            return {
                class_count: 0,
              
            };
        },
        methods: {
            ...mapActions(['fetchCourseList']),
            classCount() {

                axios.get('/api/class/count')
                    .then(res => {
                        console.log('12312  ', res);
                        this.class_count = res.data;
                    })

            }
        },
        computed: mapGetters(['allCourse']),
        mounted() {
            this.fetchCourseList();
            this.classCount();
        },
    };

</script>

<style scoped>
    .chart {
        height: 400px;
    }

</style>
