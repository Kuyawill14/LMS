<template>
    <v-container fluid>

        <v-container v-if="isloading" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                 <v-icon style="font-size:10rem">
                    mdi-account
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h3> Loading Profile </h3>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>


        <h2 v-if="!isloading">Archives</h2>
        <v-row v-if="!isloading" class="mt-2">
            <v-col cols="12" >
                <v-row>
                    <v-col cols="12" class="pl-3">
                        <v-tabs :centered="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" :icons-and-text="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                        v-model="tab"  class="mt-2">
                            <v-tab v-if="role == 'Teacher'"  class="d-flex justify-start">
                               Courses
                                <v-icon :right="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ">
                                    mdi-contacts
                                </v-icon>
                            </v-tab>
                             <v-tab v-if="role == 'Teacher' || role == 'Student'" class="d-flex justify-start">
                                Classes
                                <v-icon :right="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ">
                                mdi-google-classroom
                                </v-icon>
                            </v-tab>
                            <v-tab v-if="role == 'Teacher' || role == 'Student'" class="d-flex justify-start">
                                Classwork
                                <v-icon :right="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ">
                                mdi-book-open-variant
                                </v-icon>
                            </v-tab>
                        </v-tabs>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" >
               <v-row>
                   <v-col cols="12">
                       <v-tabs-items :value="tab">
                             <v-tab-item v-if="role == 'Teacher'">
                                <archiveCourses :role="role"></archiveCourses>
                            </v-tab-item>
                            <v-tab-item v-if="role == 'Teacher' || role == 'Student'">
                                <archiveClasses :role="role"></archiveClasses>
                            </v-tab-item>
                            <v-tab-item v-if="role == 'Teacher' || role == 'Student'">
                                <archiveClasswork :role="role"></archiveClasswork>
                            </v-tab-item>
                       </v-tabs-items>
                   </v-col>
               </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    const archiveCourses = () => import('./ArchiveType/courses-archive')
    const archiveClasswork = () => import('./ArchiveType/classwork-archive')
    const archiveClasses = () => import('./ArchiveType/classes-archive')
  /*   const changePassword = () => import('./changePassword')
    const coursesProgress = () => import('./coursesProgress')
    const aboutTab = () => import('./aboutTab')
    const myCalendar = () => import('./myCalendar') */
    
    export default {
        props:['role','UserDetails'],
        components:{
            archiveCourses,
            archiveClasswork,
            archiveClasses

        },
        data () {
            return {
                tab: null,
                imageFile:'',
                Details:null,
                loading: false,
                isloading: true,
                message:null,
                type:null,
                classLength: null,
                isGetting: false,
                ArchiveClasses:[]
            }
        },
        methods: {

        },
        mounted(){
            this.isloading = !this.isloading;
        }
    }
</script>