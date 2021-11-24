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
        <v-row v-if="!isloading" >
            <!-- <v-col cols="12" class="ma-0 pa-0">
                <v-row>
                    <v-col cols="12" class="pl-3">
                        <v-tabs v-model="tab"  class="mt-2">
                                <v-tab class="d-flex justify-start font-weight-bold">
                                Student
                            </v-tab>
                                <v-tab class="d-flex justify-start font-weight-bold">
                                Instructor
                            </v-tab>
                        </v-tabs>
                    </v-col>
                </v-row>
            </v-col> -->

            <v-col cols="12" class="ma-0 pa-0">
               <v-row>
                   <v-col cols="12">
                      <!--  <v-tabs-items :value="tab">
                             <v-tab-item> -->
                                <studentList :getcourseInfo="getcourseInfo" :role="role"></studentList>
                   <!--          </v-tab-item>
                            <v-tab-item>
                                <instructorList :getcourseInfo="getcourseInfo"  :UserDetails="UserDetails"></instructorList>
                            </v-tab-item>
                       </v-tabs-items> -->
                   </v-col>
               </v-row>
      
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    const studentList = () => import('./peopleListTypes.vue/student-list')
     const instructorList = () => import('./peopleListTypes.vue/instructor-list')
    export default {
        props:['role','UserDetails','getcourseInfo'],
        components:{
          studentList,
          instructorList

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