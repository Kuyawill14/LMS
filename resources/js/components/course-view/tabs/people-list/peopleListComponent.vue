<template>
    <div>
        <v-row>
            <v-col v-if="role == 'Teacher'" cols="12">
                <instructorView :getcourseInfo="getcourseInfo" v-if="role == 'Teacher'" :role="role" :UserDetails="UserDetails"></instructorView>
            </v-col>

             <v-col v-if="role == 'Student'" cols="12">
                <studentView v-if="role == 'Student'" :role="role" :UserDetails="UserDetails"></studentView>
            </v-col>
        </v-row>
    </div>
</template>
<script>
const instructorView = () => import('./InstructorListView')
 const studentView = () => import('./studentListView')
export default {
    props:['role','UserDetails','getcourseInfo'],
    components:{
        instructorView,
        studentView
        
    }
}
</script>