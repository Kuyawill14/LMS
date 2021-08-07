<template>
    <div>

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


        
     <!--    <v-row v-if="!isloading">
            <v-col>
                <v-card
                    elevation="1"
                    outlined
                    class="pa-5"
                    >
                    <v-row>
                        <v-col cols="12" class="d-flex justify-center mb-0 pb-0">
                             <div class="display-2">Hi {{UserDetails.firstName}}! </div>
                        </v-col>
                         <v-col cols="12" class="d-flex justify-center mt-0 pt-0">
                             <small>What would you like to learn today?</small>
                        </v-col>
                    </v-row>
                   
                    
                </v-card>
            </v-col>
        </v-row> -->

        <h2 v-if="!isloading">TEACHER'S PROFILE</h2>
        <v-row v-if="!isloading" class="">
            <v-col cols="12" md="12" lg="3" xl="2" >
              <v-card
                elevation="1"
                outlined
                class="pt-5"
                >
                 <v-row >
                     <v-col cols="12" class="mb-0 pb-0 d-flex justify-center">
                  
                            <v-avatar
                            
                            size="80"
                            @click="TestUpload()"
                            >
                            <v-hover>
                                 <template v-slot:default="{ hover }">
                                     <div>
                                     <v-avatar
                                    size="80"
                                    style="cursor: pointer"
                                    >
                                     <v-img alt="Proflie" :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic"></v-img>
                                    </v-avatar>
                                      <v-fade-transition>
                                        <v-overlay
                                            v-if="hover"
                                            absolute
                                            color="#212121"
                                            style="cursor: pointer;"
                                            
                                        >
                                        <div class=""><v-icon small>mdi-camera</v-icon> Update</div>
                                          <!--   <v-btn rounded disabled class=" transition-fast-in-fast-out " text>Update</v-btn> -->
                                        </v-overlay>
                                        </v-fade-transition>
                                    </div>
                                </template>
                             </v-hover>
                            </v-avatar>
                            <input
                            ref="fileInput"
                            class="d-none"
                            type="file"
                            accept="image/jpeg"
                            @change="onFileChange">
                     </v-col>

                     <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0 d-flex justify-center">
                         <h3 class="font-weight-bold">{{UserDetails.firstName+' '+UserDetails.lastName}}</h3>
                         
                     </v-col>
                      <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0 d-flex justify-center">
                          <div class="grey--text font-italic">{{UserDetails.email}}</div>
                     </v-col>
                      <v-col cols="12" class="mb-0 pb-0 mt-1 pt-0 d-flex justify-center">
                        
                            <v-btn icon text @click="UserDetails.social_account != null ? OpenSocialAccount(UserDetails.social_account) : ''">
                            <v-icon color="blue"  >
                                mdi-facebook
                            </v-icon>
                            </v-btn>

                            <v-btn class="ml-2" icon text>
                            <v-icon color="red"  >
                                mdi-google-plus
                            </v-icon>
                            </v-btn>
                     </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" class="pl-5 pr-5 pb-0">
                            <v-divider></v-divider>
                        </v-col>
                     <v-col cols="12" class="pl-3">
                            
                           <!--  <v-btn text rounded class="primary--text"> 
                                <v-icon left>mdi-account-edit-outline</v-icon>
                                Edit Profile
                            </v-btn> -->
                            <v-tabs v-model="tab" vertical class="mt-2">
                                 <v-tab class="d-flex justify-start">
                                    <v-icon left>
                                    mdi-account
                                    </v-icon>
                                    Profile
                                </v-tab>
                                <v-tab class="d-flex justify-start">
                                    <v-icon left>
                                    mdi-google-classroom
                                    </v-icon>
                                    Courses
                                </v-tab>
                                <v-tab class="d-flex justify-start">
                                    <v-icon left>
                                    mdi-calendar
                                    </v-icon>
                                    My Calendar
                                </v-tab>
                               
                                 <v-tab class="d-flex justify-start">
                                    <v-icon left>
                                    mdi-lock
                                    </v-icon>
                                    Change Password
                                </v-tab>

                            </v-tabs>
                     </v-col>
                    </v-row>
                </v-card>

   
                 
            </v-col>
            <v-col cols="12" md="12" lg="9" xl="10">
                  <v-card
                  class="pt-3 pb-3 pl-5 pr-5"
                elevation="1" outlined>
               <v-row>
                   <v-col cols="12">
                       
                       <v-tabs-items :value="tab">
                            <v-tab-item>
                                <editProfile :UserDetails="UserDetails"></editProfile>
                            </v-tab-item>
                            <v-tab-item>
                                <coursesProgress :UserDetails="UserDetails"></coursesProgress>
                            </v-tab-item>
                            <v-tab-item>
                               <myCalendar :role="role"></myCalendar>
                            </v-tab-item>
                            <v-tab-item>
                                <changePassword ></changePassword>
                            </v-tab-item>
                       </v-tabs-items>
                   </v-col>
               </v-row>
            </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    const editProfile = () => import('./editprofile')
    const changePassword = () => import('./changePassword')
    const coursesProgress = () => import('./coursesProgress')
    const myCalendar = () => import('./myCalendar')
     import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props:['role'],
        components:{
            editProfile,
            changePassword,
            coursesProgress,
            myCalendar
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
                UserDetails:   null ,
            }
        },
         computed: mapGetters(['getTeacherDetails']),
        methods: {
            ...mapActions(['fetchTeacherDetails']),
             toastSuccess() {
                return this.$toasted.success("Profile Successfully Updated", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 3000
                });
            },
            getUserDetails() {
                axios.get('/api/admin/teachers/profile/' +this.$route.params.id).then((res) => {
                    this.UserDetails = res.data;
                    this.isloading = !this.isloading;

                }).catch((e) => {
                    console.log(e);
                })
            },
            TestUpload(){
             this.$refs.fileInput.click();
            },
            onFileChange(element) {
                const file = element.target.files[0];
                var reader = new FileReader()
                reader.readAsDataURL(file)
                let testFile;
                reader.onload = () => {
                    this.UserDetails.profile_pic = reader.result;
                    testFile = reader.result;
                    this.UpdateProfile();
                }
            },
            async UpdateProfile(){
                axios.post('/api/profile/profile_picture', {data:this.UserDetails.profile_pic})
                .then(res=>{
                   
                })
            },
            OpenSocialAccount(link){
                window.location = link
            }
            
        },
        mounted(){
       this.getUserDetails();
        // this.isloading = !this.isloading;
        }
    }
</script>