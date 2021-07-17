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
                            
                           <!--  <v-btn text rounded class="primary--text"> 
                                <v-icon left>mdi-account-edit-outline</v-icon>
                                Edit Profile
                            </v-btn> -->
                            <v-tabs v-model="tab"  class="mt-2">
                                 <v-tab class="d-flex justify-start">
                                    <v-icon left>
                                    mdi-alert-circle-outline
                                    </v-icon>
                                    Courses
                                </v-tab>
                                 <v-tab class="d-flex justify-start">
                                    <v-icon left>
                                    mdi-account
                                    </v-icon>
                                    Classwork
                                </v-tab>
                                <v-tab class="d-flex justify-start">
                                    <v-icon left>
                                    mdi-google-classroom
                                    </v-icon>
                                    Classes
                                </v-tab>
                
                            </v-tabs>
                     </v-col>
                    </v-row>
              

   
                 
            </v-col>
            <v-col cols="12" >

               <v-row>
                   <v-col cols="12">
                       <v-tabs-items :value="tab">
                             <v-tab-item>
                                <archiveCourses :role="role"></archiveCourses>
                            </v-tab-item>
                            <v-tab-item>
                                <archiveClasswork :UserDetails="UserDetails"></archiveClasswork>
                            </v-tab-item>
                            <v-tab-item>
                                <archiveClasses :UserDetails="UserDetails"></archiveClasses>
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