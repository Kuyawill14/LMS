<template>
    <div>
        <v-overlay :value="isLeaving">
            <v-progress-circular indeterminate size="64"></v-progress-circular>

        </v-overlay>
        <v-dialog v-model="Archivedialog" persistent max-width="400">
            <confirmArchiveCourse v-on:toggleCancelDialog="Archivedialog = !Archivedialog"
                v-on:toggleconfirm="archiveCourse()" :ArchiveDetails="ArchiveDetails" v-if="Archivedialog">
            </confirmArchiveCourse>
        </v-dialog>

        <v-dialog v-model="deleteDiaglog" persistent max-width="400">
            <confirmDeleteCourse v-on:toggleCancelDialog="deleteDiaglog = !deleteDiaglog"
                v-on:toggleconfirm="deleteCourse()" :ArchiveDetails="ArchiveDetails" v-if="deleteDiaglog">
            </confirmDeleteCourse>
        </v-dialog>


        <v-dialog v-model="cloneDialog" persistent max-width="500">
            <confirmCloneCourse v-on:toggleCancelDialog="cloneDialog = !cloneDialog"
                v-on:toggleconfirm="cloneCourse(cloneDetails)" :course="cloneDetails">
            </confirmCloneCourse>
        </v-dialog>




        <v-row align="center" justify="center" class="pt-10" v-if="coursesLength == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:14rem">
                    mdi-book-variant-multiple
                </v-icon>

                <h1> Create your first Course </h1>
                <p> Creating Course, you'll be able to Create Classes, manage Learning Materials, Create Quiz and
                    Assignment and etc. </p>
                <v-btn color="primary" @click="openAddmodal()"> CREATE COURSE </v-btn>
            </v-col>
        </v-row>

        <!-- 
        <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-icon style="font-size:14rem">
                    mdi-google-contacts
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h2> Loading your Courses </h2>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container> -->


        <v-dialog persistent v-model="dialog" width="400px">
            <v-card>
                <v-form @submit.prevent="validate()" ref="form" v-model="valid" lazy-validation>


                    <vue-element-loading :active="isloading" spinner="bar-fade-scale" />
                    <v-card-title>
                        Create Course
                    </v-card-title>
                    <v-container>
                        <v-row class="mx-2">
                            <v-col cols="12" class="pa-0 ma-0">
                                <v-text-field :rules="Coderules" v-model="form.course_code" filled color="primary"
                                    label="Course Code">
                                </v-text-field>
                            </v-col>

                            <v-col cols="12" class="pa-0 ma-0">
                                <v-text-field :rules="Namerules" v-model="form.course_name" filled color="primary"
                                    label="Course Name">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text color="secondary" @click="dialog = false,$refs.form.resetValidation()">Cancel
                        </v-btn>
                        <v-btn text :disabled="isloading" color="primary" type="submit">
                            {{isloading ? 'Saving...' : 'Save'}}</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>

        <div v-if="isGetting">
            <v-row v-if="isGetting">
                <v-col :height="$vuetify.breakpoint.lgAndUp ? 200 : 140" v-for="n in 4" :key="n" cols="12" xl="3" lg="3"
                    md="6">
                    <v-skeleton-loader type="image, article"></v-skeleton-loader>
                </v-col>
            </v-row>
        </div>
        <div v-if="coursesLength != 0 && isGetting == false">


            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" bottom color="primary" dark fab fixed right @click="openAddmodal()">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <span>Add New Course</span>
            </v-tooltip>
            <v-row style="margin-bottom: -40px;">
                <v-col class="mb-0 pb-0" cols="12" md="12" lg="8">
                    <h2>My Courses</h2>
                </v-col>
                <!--  <v-col lg="2" class="text-right">
                    <v-btn icon @click="fetchCourses" v-if="school_year_id != 0 || semester_id !=0 ">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-col> -->
                <v-col lg="2" class="text-right">
                    <v-select class="mr-2 my-0" dense :items="school_year" item-text="schoolyear" item-value="id"
                        label="School Year" v-model="school_year_id" outlined small @change=" schoolYearFilter()">
                    </v-select>
                </v-col>
                <v-col class="text-right" lg="2">
                    <v-select class="mr-2 my-0" dense :items="semester" item-text="semester" item-value="id"
                        label="Semester" v-model="semester_id" outlined small @change="semesterFilter()"
                        :disabled="school_year_id == 0"></v-select>
                </v-col>
            </v-row>


            <v-row class="mt-3">
                <v-col style="cursor: pointer;" cols="12" xl="3" lg="3" md="6" v-for="(item, i) in allCoursesData"
                    :key="'course'+i">
                    <v-hover v-slot="{ hover }">

                        <div class="card-expansion">
                            <v-card class="mx-auto" :elevation="hover ? 16 : 2">
                                <v-img
                                    @click="$store.dispatch('clearClassesNames'), 
                                 item.completed == 1 ? $router.push({name: 'coursePage', params: {id: item.id}}) : $router.push({name: 'courseSetup', params: {id: item.id}})"
                                    :src="CheckBackgroundPath(item.course_picture)" height="200px" link
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    class="white--text grey lighten-2" aspect-ratio="1">

                                    <v-menu transition="slide-y-transition" bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn :x-large="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" icon
                                                v-bind="attrs" v-on="on" class="float-right" color="white">
                                                <v-icon :x-large="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
                                                    mdi-dots-vertical
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list class="pa-1">
                                            <v-list-item link :to="{name: 'settings', params: {id: item.id}}">
                                                <v-list-item-title>Edit</v-list-item-title>

                                            </v-list-item>
                                            <v-list-item link @click="archiveConfirm(item.course_name,item.id)">
                                                <v-list-item-title>Archive</v-list-item-title>

                                            </v-list-item>
                                            <!-- <v-list-item @click="DeleteConfirm(item.course_name, item.id)"
                                                v-if="item.student_count == 0" link>
                                                <v-list-item-title>Delete</v-list-item-title>

                                            </v-list-item> -->


                                            <!-- <v-list-item @click="cloneCourseConfirm(item)" link>
                                                <v-list-item-title>Duplicate Course</v-list-item-title>

                                            </v-list-item> -->
                                        </v-list>
                                    </v-menu>
                                    <v-spacer></v-spacer>

                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="grey lighten-5">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>

                                </v-img>
                                <v-hover v-slot="{ hover }">
                                    <v-card-subtitle class="mt-0 pt-0 pl-0 ml-0">
                                        <router-link @click="$store.dispatch('clearClassesNames')"
                                            :to="item.completed == 1 ? {name: 'coursePage', params: {id: item.id}} : {name: 'courseSetup', params: {id: item.id}}"
                                            style="text-decoration: none">
                                            <!--  <p style="font-size: 16px;">{{item.course_code }}
                                            <br> {{ item.course_name}}
                                        </p> -->

                                            <v-list class="ml-0 pl-0">
                                                <v-list-item :class="hover ? 'blue--text' : 'primary--text'">
                                                    <v-list-item-content>
                                                        <v-list-item-title class="primary--text">
                                                            <p class="mb-0 pb-0 mb-2"
                                                                :style="$vuetify.breakpoint.lgAndUp ? 'font-size: 16px;text-overflow: ellipsis;overflow: hidden; ' : 'font-size: 14px;text-overflow: ellipsis;overflow: hidden; '">
                                                                {{item.course_code }}
                                                                <br>
                                                                <span
                                                                    style="text-overflow: ellipsis;overflow: hidden; ">{{ item.course_name}}</span>
                                                            </p>
                                                        </v-list-item-title>
                                                        <!--  <v-list-item-subtitle >
                                                    <div class="text-body-1" style="text-overflow: ellipsis;overflow: hidden; ">{{ item.course_name}}</div>
                                                </v-list-item-subtitle> -->
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </router-link>
                                        <hr>
                                        <!-- <div class="pl-4">
                                        {{item.student_count+' students'}} <br>
                                        {{item.class_count+' class'}}
                                    </div> -->
                                        <div class="d-flex">
                                            <div class="mt-2 pl-4" @click="$store.dispatch('clearClassesNames'), 
                                 item.completed == 1 ? $router.push({name: 'coursePage', params: {id: item.id}}) : $router.push({name: 'courseSetup', params: {id: item.id}})">
                                                {{item.student_count+' students'}} <br>
                                                {{item.class_count+' class'}}
                                            </div>
                                            <v-spacer></v-spacer>
                                            <div class="mt-4" v-if="item.join_request_count != 0">
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-badge overlap color="red" :value="item.join_request_count"
                                                            :content="item.join_request_count" bordered top
                                                            offset-x="45" offset-y="17">
                                                            <v-btn  
                                                                @click="item.completed == 1 ? $router.push({name: 'Student-list', params: {id: item.id},query:{view: 'join_request'} }) : ''"
                                                                icon v-bind="attrs" v-on="on">
                                                                <v-icon large>mdi-account-arrow-right-outline</v-icon>
                                                            </v-btn>
                                                        </v-badge>
                                                    </template>
                                                    <span>Course join request</span>
                                                </v-tooltip>
                                            </div>
                                        </div>

                                    </v-card-subtitle>
                                </v-hover>

                            </v-card>

                        </div>
                    </v-hover>

                </v-col>
            </v-row>
        </div>



    </div>


</template>



<script>
    const confirmArchiveCourse = () => import("./dialog/confirmArchiveCourse")
    const confirmDeleteCourse = () => import("./dialog/confirmDeleteCourse")
    const confirmCloneCourse = () => import("./dialog/confirmCloneCourse")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            confirmArchiveCourse,
            confirmDeleteCourse,
            confirmCloneCourse
        },
        data() {
            return {
                school_year: [],
                semester: [],
                school_year_id: 0,
                semester_id: 0,
                coursesLength: null,
                isGetting: false,
                dialog: false,
                isloading: false,
                modalType: '',
                isPageLoading: false,
                class_code: null,
                form: {
                    id: '',
                    course_name: '',
                    course_id: '',
                    class_description: '',
                    course_picture: '',
                    course_code: '',
                },
                cloneDetails: {},
                cloneDialog: false,
                Archivedialog: false,
                ArchiveDetails: {},
                allCoursesData: [],
                isLeaving: false,
                Coderules: [
                    v => !!v || 'Course code is required',
                ],
                Namerules: [
                    v => !!v || 'Course name is required',
                ],
                valid: true,
                deleteDiaglog: false,

            }
        },
        computed: mapGetters(['allCourse']),
        methods: {
            ...mapActions(['fetchCourseList']),

            cloneCourseConfirm(course_data) {

                this.cloneDetails = course_data;
                this.cloneDialog = !this.cloneDialog
            },
            cloneCourse(course_data) {



                axios.post('/api/course/duplicate', {
                        course_data: course_data
                    })
                    .then((res) => {
                        this.$store.dispatch('fetchCourseList').then(() => {
                    this.allCoursesData = this.allCourse;
                    this.coursesLength = this.allCourse.length;
                    this.isGetting = false;
                    
                         this.toastSuccess(course_data.name + ' have been successfully cloned')
                        this.cloneDialog = !this.cloneDialog


                });

                    })
                    .catch((err) => {
                        console.log(err)
                        this.toastError('Something went wrong. Please refresh the page and please try again.')
                        this.cloneDialog = !this.cloneDialog
                    })
            },

            validate() {

                if (this.$refs.form.validate()) {
                    this.createCourse();
                }
            },
            toastSuccess(message, icon) {
                return this.$toasted.success(message, {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            archiveConfirm(name, id) {
                this.ArchiveDetails.course_id = id;
                this.ArchiveDetails.name = name;
                this.Archivedialog = !this.Archivedialog
            },
            DeleteConfirm(name, id) {
                this.ArchiveDetails.course_id = id;
                this.ArchiveDetails.name = name;
                this.deleteDiaglog = !this.deleteDiaglog
            },
            archiveCourse() {
                axios.delete('/api/course/archiveCourse/' + this.ArchiveDetails.course_id)
                    .then(res => {
                        this.fetchCourses();
                        this.Archivedialog = !this.Archivedialog;
                    })
            },
            deleteCourse() {
                axios.delete('/api/course/delete/' + this.ArchiveDetails.course_id)
                    .then(res => {
                        if (res.data.success == true) {
                            this.deleteDiaglog = !this.deleteDiaglog
                            this.fetchCourses();
                            this.toastSuccess("Successfully deleted!");
                        } else {
                            this.deleteDiaglog = !this.deleteDiaglog
                            this.toastInfo(res.data.message);
                        }
                    }).catch((e) => {
                        this.toastError('Something went wrong while deleting the course!');
                        this.deleteDiaglog = !this.deleteDiaglog;
                    })

            },
            openAddmodal() {
                this.dialog = !this.dialog;
                this.form.course_name = "";
                this.form.course_code = "";
                this.modalType = "add";
            },
            openEditmodal(course_id) {
                this.dialog = !this.dialog;
                this.modalType = "update";
                var selectedCourse = this.allCourse.find(x => x.id === course_id);
                this.form.id = course_id;
                this.form.course_name = selectedCourse.course_name;
                this.form.course_code = selectedCourse.course_code;
                this.form.course_id = selectedCourse.course_id;
            },

            createCourse() {
                this.isloading = true;
                if (this.form.course_name != "" && this.form.course_code != "") {
                    this.$store.dispatch('createCourse', this.form).then((res) => {
                        this.dialog = false;
                        let id = res.id;
                        this.toastSuccess("Your course has been Added", 'done');
                        this.isLeaving = true;
                        this.$router.push({
                            name: 'courseSetup',
                            params: {
                                id: id
                            }
                        })

                    });
                }

            },

            connect() {
                let newVm = this;
                this.fetchCourses();
                window.Echo.private("newuserclass")
                    .listen('newuserclass', e => {
                        newVm.fetchCourses();
                    })
            },
            fetchCourses() {
                this.school_year_id = 0;
                this.semester_id = 0;
                this.isGetting = true;
                this.$store.dispatch('fetchCourseList').then(() => {
                    this.allCoursesData = this.allCourse;
                    this.coursesLength = this.allCourse.length;
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
                for (var key in this.allCourse) {
                    if (this.semester_id != '') {
                        if (this.allCourse[key].school_year_id == this.school_year_id && this.allCourse[key]
                            .semester_id == this.semester_id) {
                            data.push(this.allCourse[key]);
                        }
                    } else {
                        if (this.allCourse[key].school_year_id == this.school_year_id) {
                            data.push(this.allCourse[key]);
                        }
                    }

                }
                ////console.log(data);
                this.allCoursesData = data;


            },

            semesterFilter() {
                var data = [];
                for (var key in this.allCourse) {
                    if (this.allCourse[key].school_year_id == this.school_year_id && this.allCourse[key].semester_id ==
                        this.semester_id) {
                        data.push(this.allCourse[key]);
                    }
                }
                ////console.log(data);
                this.allCoursesData = data;


            },
            CheckBackgroundPath(path) {
                if (path != null) {
                    if (path.includes('https://orangestr.sgp1.cdn.digitaloceanspaces.com')) {
                        return path;
                        let str = path.replace('.cdn', '');
                        return str;
                    } else {
                        return '../images/' + path;
                    }
                }
            }

        },
        mounted() {
            this.$store.dispatch('clearClassesNames');
            this.fetchCourses();
            this.fetchAllSchoolyear_semester();

        },
    }

</script>

<style scoped>
    .card-group-row__col .fullbleed {
        transition: all ease-in-out 0.4s !important;
    }

    .card-group-row__col:hover .fullbleed {
        opacity: 0.4 !important;
        transition: all ease-in-out 0.4s;
    }

    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

</style>
