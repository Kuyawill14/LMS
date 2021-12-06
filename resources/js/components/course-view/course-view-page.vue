<template>
    <div>
     
        <v-card v-if="showCard">

            <!-- <v-img :src="'../../images/' + getcourseInfo.course_picture " class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="150px">
                <v-app-bar v-if="role == 'Teacher'" flat color="rgba(0, 0, 0, 0)">
                    <v-spacer></v-spacer>
                    <v-menu transition="slide-y-transition" bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on" class="float-right mt-4" color="white">
                                <v-icon>
                                    mdi-dots-vertical
                                </v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item link @click="dialog = !dialog">
                                <v-list-item-title>Select Background</v-list-item-title>
                            </v-list-item>
                            <v-list-item link>
                                <v-list-item-title>Upload Photo</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-app-bar>

                <v-card-title class="text-lg-h5" v-text="getcourseInfo.course_code + ' - ' + getcourseInfo.course_name">
                </v-card-title>
                <v-card-subtitle class="white--text">Instructor: {{getcourseInfo.name}}

                    <br>
                    Google Meet: <a link :href="getcourseInfo.v_classroom_link"
                        target="_blank">{{getcourseInfo.v_classroom_link}}</a>

                </v-card-subtitle>
        
                    <v-btn depressed color="primary" small style="position: absolute; z-index: 999; bottom: 15px;right: 14px;" target="_blank" :disabled="getcourseInfo.course_guide == null" :href="path+getcourseInfo.course_guide ">
                        <v-icon left dark>
                            mdi-cloud-download
                        </v-icon>
                        Course Guide
                    </v-btn>
            
            </v-img> -->


            <v-img
            eager
                :src="!isChanging ? CheckBackgroundPath(getcourseInfo.course_picture) : filePreview" class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="150px"
                aspect-ratio="2"
            
            >
                <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                    ></v-progress-circular>
                </v-row>
                </template>

                <v-app-bar v-if="role == 'Teacher'" flat color="rgba(0, 0, 0, 0)">
                    <v-spacer></v-spacer>
                    <v-menu transition="slide-y-transition" bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on" class="float-right mt-4" color="white">
                                <v-icon>
                                    mdi-dots-vertical
                                </v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item link @click="dialog = !dialog">
                                <v-list-item-title>Select background</v-list-item-title>
                            </v-list-item>
                            <v-list-item link @click="$refs.UploadBackground.$refs.input.click()">
                                <v-list-item-title>Upload photo</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-app-bar>

                <v-card-title class="text-lg-h5" v-text="getcourseInfo.course_code + ' - ' + getcourseInfo.course_name">
                </v-card-title>
                <v-card-subtitle class="white--text">Instructor: {{getcourseInfo.name}}

                    <br>
                    Google Meet: <a link :href="getcourseInfo.v_classroom_link"
                        target="_blank">{{getcourseInfo.v_classroom_link}}</a>

                </v-card-subtitle>
        
                    <v-btn v-if="getcourseInfo.course_guide != null" depressed color="primary" small style="position: absolute; z-index: 999; bottom: 15px;right: 14px;" target="_blank"  :href="path+getcourseInfo.course_guide ">
                        <v-icon left dark>
                            mdi-cloud-download
                        </v-icon>
                        Course Guide
                    </v-btn>
                  
            </v-img>

        </v-card>
    <!--     <div v-if="this.$route.name == 'selectedCourse' && role == 'Teacher'" >
            <teachercoursedashboardComponent v-if="role == 'Teacher'" :role="role" :getcourseInfo="getcourseInfo" :UserDetails="UserDetails"></teachercoursedashboardComponent>
        </div> -->
        <router-view  :role="role" :getcourseInfo="getcourseInfo" :UserDetails="UserDetails"></router-view>

         <v-dialog scrollable v-model="dialog" persistent max-width="800" >
            <selectBackgroundDialog v-on:SaveSelected="UpdateImage" v-on:CloseDialog="dialog = !dialog" v-if="dialog">
            </selectBackgroundDialog>
        </v-dialog>
        <v-file-input class="d-none" @change="onfileChange" :rules="rules" ref="UploadBackground" accept="image/png, image/jpeg, image/bmp"></v-file-input>
    </div>
</template>
<script>
    const selectBackgroundDialog = () => import('./SelectBackgroundDialog')
    const teachercoursedashboardComponent = () => import('./tabs/dashboard-tab/teacher_course_dashboardComponent')
    import {
        mapGetters,
        mapActions
    } from "vuex";
    import axios from 'axios';
    export default {
        props: ['role', 'UserDetails'],
        components: {
            selectBackgroundDialog,
            teachercoursedashboardComponent
        },
        data() {
            return {
                courseInfo: [],
                isloading: true,
                course_id: '',
                fullPage: true,
                class_id: '',
                routeName: '',
                showCard: true,
                dialog: false,
                path: window.origin + '/storage/' ,
                rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
                ],
                previewUploaded: false,
                filePreview: null,
                file: null,
                isChanging: false,
                showDefault: false,
            }
        },
        computed: {
            ...mapGetters(["getcourseInfo"]),
            saveClassId: function (id) {

                if (this.role == "Student") {
                    axios.get("/api/class/selectedClass/" + id).then(res => {

                        return res.data;
                    });

                }
            }
        },
        watch: {
            $route(to, from) {
                this.hideCard();

            }
        },
        methods: {
            hideCard() {
    
                if(this.$route.name == 'selectedCourse'){
                    this.showDefault = true;
                    this.routeName = this.$route.matched[1].name;
                    if (this.routeName == 'student-modules' || this.routeName == 'modules-preview' || this.routeName ==
                    'courseSetup') {
                    this.showCard = false;
                    } else {
                        this.showCard = true;
                    } 
                }
                else{
                     this.showDefault = false;
                    this.routeName = this.$route.matched[2].name;
                    if (this.routeName == 'student-modules' || this.routeName == 'modules-preview' || this.routeName ==
                        'courseSetup') {
                        this.showCard = false;
                    } else {
                        this.showCard = true;
                    }
                }
               

            },
            ...mapActions(['fetchScourse']),
            disconnect() {
                window.Echo.leave("post." + this.$route.params.id)
            },
            GoBackToMycourse() {
                if (this.role == 'Student') {
                    this.$router.push({
                        path: "/c"
                    });
                } else if (this.role == 'Teacher') {
                    this.$router.push({
                        path: "/courses"
                    });
                }
                this.disconnect();
            },
            UpdateImage(data) {
                this.isChanging = false;
                this.dialog = !this.dialog;
                this.getcourseInfo.course_picture = data;
                let fd = new FormData;
                fd.append('type', "from_file");
                fd.append('course_id', this.getcourseInfo.id);
                fd.append('file_name', data);
                axios.post('/api/teacher/change_class_picture', fd)
                .then(()=>{
                    
                })
                
            },
            onfileChange(file){
                if(file){
                    this.file = file;
                    this.isChanging = true;
                    this.filePreview = URL.createObjectURL(file);
                    //this.previewUploaded = true;
                    let type = "Uploaded";
                    this.SaveImageAsBackground(file, type);
                }
            },
            SaveImageAsBackground(file){
    
                let fd = new FormData;
                fd.append('type', "uploaded");
                fd.append('course_id', this.getcourseInfo.id);
                fd.append('file_name', this.file.name);
                fd.append('file', this.file);
                axios.post('/api/teacher/change_class_picture', fd)
                .then(()=>{})
            },
            CheckBackgroundPath(path){
               if(path != null){
                     if(path.includes('https://orangestr.sgp1.cdn.digitaloceanspaces.com')){
                    return path;
                }
                else{
                    return '../../images/' + path;
                }
               }
              
            }

        },

        mounted() {
            this.hideCard();
            this.isloading = true;
            this.course_id = this.$route.params.id;
            if(this.$route.name != 'selectedCourse'){
                this.routeName = this.$route.matched[2].name;
            }
            this.$store.dispatch('fetchScourse', this.course_id);
            setInterval(() => this.isloading = false, 1000);

        },


    }

</script>

<style>
    .course-banner {
        /* background-image: url(https://gstatic.com/courseroom/themes/Honors.jpg); */
        color: #fff;

        /* background-color: #1E1E1C; */
        background-repeat: no-repeat;
        background-size: cover;

    }



    .top-container {
        padding-left: 0 !important;
        padding-right: 0 !important;
        position: relative;
    }

    .ttr-wrapper {
        min-height: 900px;
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 59px !important;
    }

    .transparent {
        background: transparent;
        border: none;
    }

    .card-top {
        color: #fff !important;
    }

    .btn_courseback {
        background-color: transparent !important;

        font-weight: bolder;
        min-width: 6rem;
        max-width: 50vw;
        border-radius: 2.7rem / 100%;

        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072);
        transition: 0.3s;
    }

    .btn_courseback:hover {
        background-color: #f7b205 !important;
    }

    .fullbleed-scoped-only {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #000;
    }

</style>
