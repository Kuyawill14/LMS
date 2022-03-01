<template>
    <div>
        <v-overlay :value="isLeaving">
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>
        <v-row align="center" justify="center" class="pt-10" v-if="coursesLength == 0 && !isGetting">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:14rem">
                    mdi-book-variant-multiple
                </v-icon>

                <h1> Join your first class </h1>
                  <p> Join class, to be able to view modules and activities.</p>
                <v-btn color="primary" @click="openJoinmodal"> Join Class </v-btn>
            </v-col>
        </v-row>


       <!--  <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-icon style="font-size:14rem">
                    mdi-google-contacts
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h2> Loading your Classes </h2>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container> -->

        

        <v-dialog v-model="dialog" width="400px">
            <v-card>
                <v-form @submit.prevent="validate" ref="form" v-model="valid" lazy-validation>
                    <v-card-title class="">
                        Join Class
                    </v-card-title>
                    <v-container>
                        <v-row class="mx-2">

                            <v-col cols="12" class="pa-0 ma-0">
                                <v-text-field @keydown.space.prevent :rules="rules" v-model="form.class_code" filled color="primary" label="Class Code">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>

                        <v-spacer></v-spacer>
                        <v-btn text color="secondary" @click="dialog = false,$refs.form.resetValidation()">Cancel</v-btn>
                        <v-btn type="submit" text color="primary" :disabled="isJoining" tyoe="submit">{{isJoining ? 'Joining...': 'Join'}}</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>

        
        <div v-if="isGetting" >
             <v-row  >
                <v-col :height="$vuetify.breakpoint.lgAndUp ? 200 : 140" v-for="n in 4" :key="n" cols="12" xl="3" lg="3" md="6">
                    <v-skeleton-loader  type="image, article"></v-skeleton-loader>
                </v-col>
            </v-row>
        </div>
        <div  v-if="coursesLength != 0 && isGetting == false">
            
            <v-row >
                <v-col class="mb-0 pb-0 d-flex" cols="12" md="12" lg="8">
                    <h2 :class="$vuetify.breakpoint.mdAndUp ? 'mr-4' : ''" >My Classes</h2> 
                    <v-spacer v-if="!$vuetify.breakpoint.mdAndUp && allClassesData.length > 6"></v-spacer>
                    <v-btn v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs && allClassesData.length > 6" @click="openJoinmodal" color="primary">Join Class</v-btn>
                </v-col>
                <v-col lg="2" class="text-right">
                    <v-select class="mr-2 my-0" hide-details dense :items="school_year" item-text="schoolyear" item-value="id"
                        label="School Year"  v-model="school_year_id" outlined small @change="schoolYearFilter()">
                    </v-select>
                </v-col>
                <v-col class="text-right" lg="2">
                    <v-select class="mr-2 my-0" hide-details dense :items="semester" item-text="semester" item-value="id" label="Semester"
                        v-model="semester_id" outlined small @change="semesterFilter()"></v-select>
                </v-col>

            </v-row>

        
            <v-row>
                <v-col style="cursor: pointer;" cols="12" xl="3" lg="3" md="6"  
               
                v-for="(item, i) in allClassesData" :key="'class' + i">

                    <v-hover v-slot="{ hover }">
                  
                    <div class="card-expansion">
                        <v-card class="mx-auto" :elevation="hover ? 16 : 2">
                             <v-img
                              @click="$router.push({name: 'coursePage', params: {id: item.course_id}, query:{class: item.class_id}})"
                               :src="CheckBackgroundPath(item.course_picture)"
                                 :height="$vuetify.breakpoint.lgAndUp ? 200 : 160"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" class="white--text d-flex flex-row justify-space-between grey lighten-2"
                                aspect-ratio="1" >
                            <v-app-bar flat color="rgba(0, 0, 0, 0)">
                                <v-spacer></v-spacer>
                                  <v-menu transition="slide-y-transition" bottom >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn icon :x-large="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" v-bind="attrs" v-on="on" class="float-right" color="white" >
                                                <v-icon :x-large="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
                                                    mdi-dots-vertical
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list class="pa-1">
                                            <v-list-item  @click="ArchiveDetails.name = item.course_name,
                                             ArchiveDetails.id = item.useClass_id,
                                            ArchiveDetails.index = i,
                                             Archivedialog = true">
                                                <v-list-item-title>Unenroll</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                               
                            </v-app-bar>
                            
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

                                  <v-card-subtitle class="mt-12">
                                      
                                    <v-progress-linear :value="item.progress" height="6" class="rounded-sm">
                                    </v-progress-linear>
                                    <span class="text-caption float-right"> {{ parseFloat(item.progress.toFixed(2))}}%
                                    </span>
                                    <span class="text-caption "> Completed </span>
                                </v-card-subtitle>
                            </v-img>
                             <v-hover v-slot="{ hover }">
                            <v-card-subtitle class="ml-0 pl-0 mt-0 pt-0">
                                <div>
                                
                                    <router-link
                                       
                                        :to="{name: 'coursePage', params: {id: item.course_id}, query:{class: item.class_id}}"
                                        style="text-decoration: none">
                                       <!--  <p  class="mb-0 pb-0 mb-2" :style="$vuetify.breakpoint.lgAndUp ? 'font-size: 16px' : 'font-size: 14px'">{{item.course_code }}
                                            <br> {{ item.course_name}}
                                        </p> -->

                                         <v-list class="ml-0 pl-0">
                                        <v-list-item :class="hover ? 'blue--text' : 'primary--text'">
                                            <v-list-item-content  >
                                                <v-list-item-title>
                                                    <p  class="mb-0 pb-0 mb-2 pr-4" :style="$vuetify.breakpoint.lgAndUp ? 'font-size: 16px;text-overflow: ellipsis;overflow: hidden; ' : 'font-size: 14px;text-overflow: ellipsis;overflow: hidden; '">{{item.course_code }}
                                                        <br> 
                                                        <span style="text-overflow: ellipsis;overflow: hidden; ">{{ item.course_name}}</span>
                                                    </p>
                                                 
                                                   
                                                </v-list-item-title>
                                            <!--    <v-list-item-subtitle :class="hover ? 'blue--text' : ''" >
                                                    <div class="text-body-1" style="text-overflow: ellipsis;overflow: hidden; ">{{ item.course_name}}</div>
                                                </v-list-item-subtitle> -->
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                    </router-link>
                                </div>
                                <v-divider></v-divider>
                                <div class="d-flex">
                                    <div class="mt-2 pl-4"  @click="$router.push({name: 'coursePage', params: {id: item.course_id}, query:{class: item.class_id}})" >
                                        <span  :style="$vuetify.breakpoint.lgAndUp ? 'font-size: 16px' : 'font-size: 14px'">{{ item.class_name}}</span> <br>
                                        <span :style="$vuetify.breakpoint.lgAndUp ? 'font-size: 16px' : 'font-size: 14px'"> Class code: {{ item.class_code}}</span>
                                    </div>
                                   <v-spacer></v-spacer>
                                     <div class="mt-4" v-if="item.unfinishClaswork != 0">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                 <v-badge overlap color="red" :value="item.unfinishClaswork" :content="item.unfinishClaswork" bordered top    offset-x="45" offset-y="17">
                                                    <v-btn  :to="{name: 'classwork', params:{id: item.course_id}}"  x-large v-bind="attrs" v-on="on" icon>
                                                        <v-icon large>mdi-book-open-variant</v-icon>
                                                    </v-btn>
                                                </v-badge>
                                            </template>
                                            <span>Unfinish Classwork</span>
                                        </v-tooltip>
                                    </div>
                                </div>
                            </v-card-subtitle>
                        </v-hover>

                        </v-card>

                    </div>

                      </v-hover>

                </v-col>

                <v-col v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs" class="mt-3" style="cursor: pointer;" cols="12" xl="3" lg="3" md="6"  >
                    <div>
                        <v-hover v-slot="{ hover }">
                            <v-tooltip>
                                <template v-slot:activator="{ on, attrs }">
                                    <div  class="card-expansion">
                                        <v-card v-bind="attrs" v-on="on"  @click="openJoinmodal" :height="!$vuetify.breakpoint.md ? '356' : '310'" :elevation="hover ? 16 : 2" class="mx-auto" color="#F5F5F5">
                                            <v-row >
                                                <v-col  cols="12" class="text-center">
                                                    <v-icon :style="!$vuetify.breakpoint.md ? 'font-size: 10rem; margin-top:5rem' : 'font-size: 10rem; margin-top:3.5rem'" x-large color="#E0E0E0">
                                                        mdi-plus-thick
                                                    </v-icon>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </div>
                                </template>
                                <span>Join Class</span>
                            </v-tooltip>
                         </v-hover>
                    </div>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.sm || $vuetify.breakpoint.xs" class="text-right">                
                 <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" bottom color="primary" dark fab fixed right @click="openJoinmodal">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <span>Join Class</span>
                </v-tooltip>
            </v-col>
            </v-row>
        </div>


         <v-dialog v-model="Archivedialog" persistent max-width="400">
            <confirmUnenroll v-on:toggleCancelDialog="Archivedialog = !Archivedialog"
                v-on:toggleconfirm="UnenrollInCourse()" :ArchiveDetails="ArchiveDetails" v-if="Archivedialog">
            </confirmUnenroll>
        </v-dialog>
    </div>


</template>




<script>
const confirmUnenroll = () => import("./dialog/confirmUnenroll")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            confirmUnenroll
        },
        data() {
            return {
                coursesLength: null,
                isGetting: false,
                dialog: false,
                isloading: true,
                isStudent: false,
                modalType: "",
                form: new Form({
                    class_code: ""
                }),
                allClassesData: [],
                school_year: [],
                semester: [],
                school_year_id: '',
                semester_id: '',
                isLeaving: false,
                isJoining: false,
                valid: true,
                rules: [
                    v => !!v || 'Class code is required',
                ],
                Archivedialog: false,
                ArchiveDetails:{}

            };
        },
        computed: mapGetters(["allClass"]),
        methods: {
            ...mapActions(["fetchClassList"]),
            validate(){
                if( this.$refs.form.validate()){
                    this.joinClass();
                }
            },
            openJoinmodal() {
                this.dialog = !this.dialog;
            },
            joinClass() {
                this.isJoining = true
                this.$store.dispatch("joinClass", this.form).then((res) => {
                    if (res.status == 200 && res.data.status == 1) {
                        this.toastSuccess(res.data.message);
                        this.dialog = false;
                        this.isLeaving = true
                        this.$router.push({
                            path: '/course/' + res.data.course_id + '/announcement'
                        })
                        
                        //this.fetchClasses();
                        this.form.class_code = '';
                    } else if (res.status == 202 && res.data.status == 1) {
                        this.toastError(res.data.message);
                        this.dialog = false;
                        this.isLeaving = true
                        this.$router.push({
                            path: '/course/' + res.data.course_id + '/announcement'
                        })
                    } else if (res.status == 200 && res.data.status == 2) {
                        this.toastSuccess(res.data.message);
                        this.dialog = false;
                        this.form.class_code = '';
                        this.isJoining = false
                        
                    }
                     else if (res.status == 200 && res.data.status == 3) {
                        this.toastInfo(res.data.message);
                        this.dialog = false;
                        this.form.class_code = '';
                        this.isJoining = false
                        
                    } else {
                        this.toastError(res.data);
                        this.isJoining = false
                    }
                });
            },
            connect(){
                let newVm = this;
                this.fetchClasses();
                window.Echo.private("newuserclass")
                .listen('NewUserCLass', e => {
                    newVm.fetchClassesAgain();
                }) 
            },
            Unenroll(id) {
                this.isloading = true;
                this.$store.dispatch("Unenroll", id);
                this.fetchClasses();
                setTimeout(() => (this.isloading = false), 1000);
            },
            fetchClassesAgain() {
                this.$store.dispatch('fetchClassList').then(() => {
                    this.allClassesData = this.allClass;
                    this.coursesLength = this.allClass.length;
                });
                this.$store.dispatch('fetchMyCoursesStatusAgain');
            },
            fetchClasses() {
                this.isGetting = true;
                this.$store.dispatch('fetchClassList').then(() => {
                    this.allClassesData = this.allClass;

                    this.coursesLength = this.allClass.length;
                    this.isGetting = false;
                });
            },
            fetchAllSchoolyear_semester() {
                axios.get('/api/admin/schoolyears_semesters/all')
                    .then((res) => {
                        this.school_year = res.data.school_year;
                        this.semester = res.data.semester;
                    })
            },
            schoolYearFilter() {
                var data = [];
                ////console.log(this.semester_id.length);
                for (var key in this.allClass) {
                    if (this.semester_id != '') {
                        if (this.allClass[key].school_year_id == this.school_year_id && this.allClass[key]
                            .semester_id == this.semester_id) {
                            data.push(this.allClass[key]);
                        }
                    } else {
                        if (this.allClass[key].school_year_id == this.school_year_id) {
                            data.push(this.allClass[key]);
                        }
                    }

                }
                ////console.log(data);
                this.allClassesData = data;


            },

            semesterFilter() {
                var data = [];
                for (var key in this.allClass) {
                    if (this.allClass[key].school_year_id == this.school_year_id && this.allClass[key].semester_id ==
                        this.semester_id) {
                        data.push(this.allClass[key]);
                    }
                }
                ////console.log(data);
                this.allClassesData = data;


            },
            CheckBackgroundPath(path){
                if(path != null){
                    if(path.includes('https://orangestr.sgp1.cdn.digitaloceanspaces.com')){
                        return path;
                        let str = path.replace('.cdn', '');
                        return str;
                    }
                    else{
                        return '../images/' + path;
                    }
                }
            },
            async UnenrollInCourse(){
                await axios.delete('/api/student/unenroll/'+this.ArchiveDetails.id)
                .then(()=>{
                    this.allClassesData.splice(this.ArchiveDetails.index, 1);
                    this.Archivedialog = false;
                    this.coursesLength--;
                })
            },
        },
        mounted() {
            this.connect();
            this.fetchAllSchoolyear_semester();
        },
        beforeDestroy(){
            window.Echo.leave('newuserclass');
        }
    };

</script>

<style scoped>
    .text-caption {
        color: #fff !important;
    }

</style>
