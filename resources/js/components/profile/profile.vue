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
                         <v-badge bordered bottom  color="green" dot offset-x="23" offset-y="10">
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
                             </v-badge>
                            <input
                            :disabled="isUploading"
                            ref="fileInput"
                            class="d-none"
                            type="file"
                            id="image-input"
                            accept="image/jpeg"
                            @change="onFileChange">
                     </v-col>

                     <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0 d-flex justify-center">
                         <h3 class="font-weight-bold">{{UserDetails.firstName+' '+UserDetails.lastName}}</h3>
                         
                     </v-col>
                      <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0 d-flex justify-center">
                          <div class="grey--text font-italic">{{UserDetails.email}}</div>
                     </v-col>
                     <!--  <v-col cols="12" class="mb-0 pb-0 mt-1 pt-0 d-flex justify-center">
                        
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
                     </v-col> -->
                    </v-row>

                    <v-row>
                    <v-col cols="12" class="pl-5 pr-5 pb-0">
                        <v-divider></v-divider>
                    </v-col>
                     <v-col cols="12" class="pl-3">
                            <v-tabs :height="!$vuetify.breakpoint.mdAndUp ? '40' : ''" 
                            v-model="tab" show-arrows  :icons-and-text="!$vuetify.breakpoint.mdAndUp" 
                            :centered="!$vuetify.breakpoint.mdAndUp" :vertical="$vuetify.breakpoint.mdAndUp" class="mt-2">
                                 <v-tab   v-for="(item, index) in profile_tabs" :key="index"
                                 :to="{name: item.name}" @click="items[1].text = item.text" class="d-flex justify-start">
                                    <v-icon v-if="$vuetify.breakpoint.mdAndUp" left> {{item.icon}}</v-icon>
                                     {{item.text}}
                                     <v-icon small v-if="!$vuetify.breakpoint.mdAndUp"> {{item.icon}}</v-icon>
                                </v-tab>
                            </v-tabs>
                     </v-col>
                    </v-row>
                </v-card>

   
                 
            </v-col>
            <v-col cols="12" md="9" lg="9" xl="10" :class="!$vuetify.breakpoint.mdAndUp ? 'pt-5' : ''">
                <v-card :class="$vuetify.breakpoint.mdAndUp  ? 'pb-3 pl-5 pr-5' : 'pb-3'" elevation="0">
                    <v-row>
                        <v-col cols="12">
                            <v-tabs-items :value="tab">
                                    <router-view :UserDetails="UserDetails" :role="role"></router-view>
                            </v-tabs-items>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
<!-- 
          <v-bottom-navigation v-if="!$vuetify.breakpoint.lgAndUp" v-model="tab" color="primary" app grow>
            <v-btn v-for="(item, index) in profile_tabs" :key="index" :to="{name: item.name}" @click="items[1].text = item.text">
                <span>{{item.text}}</span>
               <v-icon> {{item.icon}}</v-icon>
            </v-btn>

        </v-bottom-navigation> -->
        <!-- <div>
            <img id="input-preview" alt="This is the preview of the image you are going to upload."/>
        </div>

          <div>
            <img id="output-preview" alt="This is the compressed result of the image you will upload."/>  
        </div> -->
    </div>
</template>

<script>
    const editProfile = () => import(/* webpackChunkName: "user_profile" */ './editprofile')
    const changePassword = () => import(/* webpackChunkName: "changge_password" */ './changePassword')
    const coursesProgress = () => import(/* webpackChunkName: "course_progress" */'./coursesProgress')
    const myCalendar = () => import(/* webpackChunkName: "my_calendar" */'./myCalendar')
    
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
                profile_tabs: [
                    { name: "profile_page", text: "Profile", icon:"mdi-account"},
                    { name: "courses_progress", text: "Courses", icon:"mdi-google-classroom"},
                    { name: "my_calendar", text: "My Calendar", icon:"mdi-calendar"},
                    { name: "change_password", text: "Change Password", icon:"mdi-lock"},
                ],
                tmpProfile: null,
                inputPreview: ''
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
                })
            },
            TestUpload(){
             this.$refs.fileInput.click();
            },
            onFileChange(element) {    
                
               
                this.imageFile = element.target.files[0];
                if( this.imageFile.size <= 1000000){
                    this.isUploading = true;
                    //this.UpdateProfile();
                    this.tmpProfile = this.UserDetails.profile_pic;
                    this.UserDetails.profile_pic =   URL.createObjectURL(this.imageFile)
                }
                else{
                    this.toastError('The File is more than 1mb');
                }

                    /* const uploadedImage = element.target.files[0];
                    if(!uploadedImage){ 
                        return;
                    }

       
                    const inputPreview = document.getElementById("input-preview"); 
                    inputPreview.src = URL.createObjectURL(uploadedImage);

                    
         
                    console.log(this.getImageDimensions(inputPreview));


                    const MAX_WIDTH = 200; 
                    const MAX_HEIGHT = 200; 

                    const widthRatioBlob =  this.compressImage(inputPreview, MAX_WIDTH / width, width, height); 
                    const heightRatioBlob =  this.compressImage(inputPreview, MAX_HEIGHT / height, width, height);
                
                
                    const compressedBlob = widthRatioBlob.size > heightRatioBlob.size ? heightRatioBlob : widthRatioBlob;
                    
                  
                    const outputPreview = document.getElementById("output-preview");
                  

                    console.log(compressedBlob);
                    this.UserDetails.profile_pic =   URL.createObjectURL(compressedBlob);
                
                    const myFile = new File([outputPreview.src], "profile.jpeg", {
                        type: "image/jpeg",
                        });

                    const optimalBlob = compressedBlob.size < uploadedImage.size ? compressedBlob : uploadedImage; 
                    console.log(`Inital Size: ${uploadedImage.size}. Compressed Size: ${optimalBlob.size}`);
                    
                    URL.revokeObjectURL(inputPreview);
                    URL.revokeObjectURL(outputPreview); */

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
                    this.UserDetails.profile_pic = this.tmpProfile;
                    this.toastError(e.response.data.errors.file[2]);
                    this.isUploading = false;
                })
            },
            OpenSocialAccount(link){
                window.location = link
            },
           getImageDimensions(image){
            return new Promise((resolve, reject) => {
                image.onload = function(e){
                    const width = this.width;
                    const height = this.height;
                    resolve({height, width});
                }
            });

            },
            compressImage(image, scale, initalWidth, initalHeight){
                return new Promise((resolve, reject) => {
                    const canvas = document.createElement("canvas");

                    canvas.width = scale * initalWidth;
                    canvas.height = scale * initalHeight;

                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                    
                    ctx.canvas.toBlob((blob) => {
                        resolve(blob);
                    }, "image/png"); 
                }); 
            }
            
        },
        mounted(){
            this.isloading = !this.isloading;
        }
    }
</script>
