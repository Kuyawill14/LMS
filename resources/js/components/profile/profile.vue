<template>
    <div>

         <v-breadcrumbs class="ma-0 pa-0 mt-1 mb-2" :items="items">
            <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                :to="{name: item.link}"
                :disabled="item.disabled"
            >
                {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>


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

        
        <v-row no-gutters v-if="!isloading" class="">
            <v-col cols="12" md="3" lg="3" xl="2" >
              <v-card
                :elevation="!$vuetify.breakpoint.lgAndUp ?  0 : 1"
                :outlined="$vuetify.breakpoint.lgAndUp"
                class="pt-5"
                >
                 <v-row >
                     <v-col cols="12" class="mb-0 pb-0 d-flex justify-center">
                            <v-avatar
                            size="80"
                            @click="TestUpload()"
                            >

                            <v-hover >
                                 <template v-slot:default="{ hover }">
                                     <div>
                                     <v-avatar
                                    size="80"
                                    style="cursor: pointer"
                                    >
                                     <v-img alt="Proflie" 
                                     :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                                     <v-row
                                        v-if="isUploading"
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>

                                     </v-img>
                                    </v-avatar>
                                      <v-fade-transition>
                                        <v-overlay
                                            v-if="hover"
                                            absolute
                                            color="#212121"
                                            style="cursor: pointer;"
                                            
                                        >
                                        <div class=""><v-icon small>mdi-camera</v-icon> {{!isUploading ? 'Update' : 'Uploading'}} </div>
                                          <!--   <v-btn rounded disabled class=" transition-fast-in-fast-out " text>Update</v-btn> -->
                                        </v-overlay>
                                        </v-fade-transition>
                                    </div>
                                </template>
                             </v-hover>
                            </v-avatar>
                            <input
                            :disabled="isUploading"
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
                     <v-col cols="12" class="pl-3"  v-if="$vuetify.breakpoint.lgAndUp" >
                            
                           <!--  <v-btn text rounded class="primary--text"> 
                                <v-icon left>mdi-account-edit-outline</v-icon>
                                Edit Profile
                            </v-btn> -->
                            <v-tabs @click="items[1].text = 'Profile Details'" v-model="tab" vertical class="mt-2">
                                 <v-tab class="d-flex justify-start">
                                    <v-icon left>
                                    mdi-account
                                    </v-icon>
                                    Profile
                                </v-tab>
                                <v-tab @click="items[1].text = 'Courses'" class="d-flex justify-start">
                                    <v-icon left>
                                    mdi-google-classroom
                                    </v-icon>
                                    Courses
                                </v-tab>
                                <v-tab @click="items[1].text = 'My Calendar'" class="d-flex justify-start">
                                    <v-icon left>
                                    mdi-calendar
                                    </v-icon>
                                    My Calendar
                                </v-tab>
                               
                                 <v-tab  @click="items[1].text = 'Change Password'" class="d-flex justify-start">
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
            <v-col cols="12" md="9" lg="9" xl="10" :class="!$vuetify.breakpoint.mdAndUp ? 'pt-5' : ''">
                <v-card
                  :class="$vuetify.breakpoint.mdAndUp  ? 'pb-3 pl-5 pr-5' : 'pb-3'"
                elevation="0"  >
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

          <v-bottom-navigation v-if="!$vuetify.breakpoint.lgAndUp" v-model="tab" color="primary" app grow>
            <v-btn>
                <span>Profile</span>
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <v-btn>
                <span>Courses</span>
                <v-icon> mdi-google-classroom</v-icon>
            </v-btn>

            <v-btn>
                <span>Calendar</span>
                <v-icon>mdi-calendar</v-icon>
            </v-btn>

             <v-btn>
                <span>Security</span>
                <v-icon>mdi-lock</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
    const editProfile = () => import('./editprofile')
    const changePassword = () => import('./changePassword')
    const coursesProgress = () => import('./coursesProgress')
    const myCalendar = () => import('./myCalendar')
    
    export default {
        props:['role','UserDetails'],
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
                items: [
                    {
                    text: 'Dashboard',
                    disabled: false,
                    link: 'courses',
                    },
                    {
                    text: 'profile Details',
                    disabled: true,
                    link: 'profile_page',
                    },
                ],
                isUploading: false,
            }
        },
        methods: {
             toastSuccess() {
                return this.$toasted.success("Profile Successfully Updated", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 3000
                });
            },
            getUserDetails() {
                axios.get('/api/profile/details').then((res) => {
                    this.UserDetails = res.data[0];
                    this.UserDetails.profile_pic = '/storage/'+this.UserDetails.profile_pic;
                    this.isloading = !this.isloading;

                }).catch((e) => {
                    ////console.log(e);
                })
                ////console.log(this.UserDetails.profile_pic);
            },
            TestUpload(){
             this.$refs.fileInput.click();
            },
            onFileChange(element) {
                /* const file = element.target.files[0];
                var reader = new FileReader()
                reader.readAsDataURL(file)
                let testFile;
                reader.onload = () => {
                    this.UserDetails.profile_pic = reader.result;
                    testFile = reader.result;
                    this.UpdateProfile();
                } */
              
          
                this.imageFile = element.target.files[0];
                ////console.log(this.imageFile);
                //this.file_name = element.target.files[0].name;
                if( this.imageFile.size <= 5000000){
                    this.isUploading = true;
                    this.UpdateProfile();
                    this.UserDetails.profile_pic =   URL.createObjectURL(this.imageFile)
                }
                else{
                    this.toastError('The File is more than 5mb');
                }
            },
            async UpdateProfile(){
                let fd = new FormData;
                fd.append('file', this.imageFile);

                axios.post('/api/profile/profile_picture', fd)
                .then(res=>{
                 this.toastSuccess('Profile picture successfully updated');     
                   this.isUploading = false;
                })
                .catch(e=>{
                    this.toastError(e.response.data.message);
                })
            },
            OpenSocialAccount(link){
                window.location = link
            }
            
        },
        mounted(){
            this.isloading = !this.isloading;
        }
    }
</script>