<template>
   <div>
       <v-row>
           <v-col cols="12" v-if="role == 'Teacher'">
               <teacherArchive v-if="role == 'Teacher'" :role="role" :UserDetails="UserDetails"></teacherArchive>
           </v-col>
            <v-col cols="12" v-if="role == 'Student'">
                <studentArchive v-if="role == 'Student'" :role="role" :UserDetails="UserDetails"></studentArchive>
           </v-col>
       </v-row>
   </div>
</template>

<script>
    const archiveCourses = () => import('./ArchiveType/courses-archive')
    const archiveClasswork = () => import('./ArchiveType/classwork-archive')
    const archiveClasses = () => import('./ArchiveType/classes-archive')
    const teacherArchive = () => import('./teacherArchive')
    const studentArchive = () => import('./studentArchive')
    
    export default {
        title: 'Archives',
        props:['role','UserDetails'],
        components:{
            teacherArchive,
            studentArchive

        },
        data () {
            return {
                tab: null,
                imageFile:'',
                Details:null,
                loading: false,
                isloading: true,
                message:null,
                type:null
            }
        },
        methods: {

        },
        mounted(){
            this.isloading = !this.isloading;
        }
    }
</script>