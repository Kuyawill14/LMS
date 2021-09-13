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


        <v-container v-if="isGetting" style="height: 400px;">
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
        </v-container>

        <v-dialog v-model="dialog" width="400px">
            <v-card>
                <v-card-title class="">
                    Join Class
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">

                        <v-col cols="12" class="pa-0 ma-0">
                            <v-text-field v-model="form.class_code" filled color="primary" label="Class Code">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn text color="secondary" @click="dialog = false">Cancel</v-btn>
                    <v-btn text color="primary" :disabled="isJoining" @click="joinClass">{{isJoining ? 'Joining...': 'Join'}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <div v-if="coursesLength != 0 && isGetting == false">
        <!--     <v-col class="text-right">
                <v-btn bottom color="primary" dark fab fixed right @click="openJoinmodal">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-col> -->
            <v-row style="margin-bottom: -40px;">
                <v-col>
                    <h2>My Classes</h2>
                </v-col>
                <v-col lg="2" class="text-right">
                    <v-select class="mr-2 my-0" dense :items="school_year" item-text="schoolyear" item-value="id"
                        label="School Year" v-model="school_year_id" outlined small @change=" schoolYearFilter()">
                    </v-select>
                </v-col>
                <v-col class="text-right" lg="2">
                    <v-select class="mr-2 my-0" dense :items="semester" item-text="semester" item-value="id" label="Semester"
                        v-model="semester_id" outlined small @change="semesterFilter()"></v-select>


                </v-col>

            </v-row>

            <v-row class="mt-3">
                <v-col lg="3" md="6" v-for="(item, i) in allClassesData" :key="'class' + i">
                    <div class="card-expansion">
                        <v-card class="mx-auto">
                            <v-img :src="'../images/'+item.course_picture" height="200px"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" class="white--text align-end">
                                <v-card-subtitle>
                                    <v-progress-linear :value="item.progress" height="6" class="rounded-sm">
                                    </v-progress-linear>
                                    <span class="text-caption float-right"> {{ parseFloat(item.progress.toFixed(2))}}%
                                    </span>
                                    <span class="text-caption "> Completed </span>
                                </v-card-subtitle>
                            </v-img>
                            <v-card-subtitle>
                                <router-link
                                    :to="{name: 'coursePage', params: {id: item.course_id}, query:{class: item.class_id}}"
                                    style="text-decoration: none">
                                    <p style="font-size: 16px;">{{item.course_code }}
                                        <br> {{ item.course_name}}
                                    </p>
                                </router-link>
                                <hr>
                                {{ item.class_name}} <br>
                                Class code:{{ item.class_code}}
                            </v-card-subtitle>


                        </v-card>

                    </div>

                </v-col>
            </v-row>
        </div>
    </div>


</template>




<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {

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
                isJoining: false
            };
        },
        computed: mapGetters(["allClass"]),
        methods: {
            ...mapActions(["fetchClassList"]),
            openJoinmodal() {
                this.dialog = !this.dialog;
            },
            joinClass() {
                this.isJoining = true
                this.$store.dispatch("joinClass", this.form).then((res) => {
                    if (res.status == 200) {
                        this.toastSuccess(res.data.message);
                        this.dialog = false;
                        this.isLeaving = true
                        this.$router.push({
                            path: '/course/' + res.data.course_id + '/announcement'
                        })
                        
                        //this.fetchClasses();
                        this.form.class_code = '';
                    } else if (res.status == 202) {
                        this.toastError(res.data.message);
                        this.dialog = false;
                        this.isLeaving = true
                        this.$router.push({
                            path: '/course/' + res.data.course_id + '/announcement'
                        })
                    } else {
                        this.toastError('Something went wrong while joining the class!');
                    }
                });
            },
            Unenroll(id) {
                this.isloading = true;
                this.$store.dispatch("Unenroll", id);
                this.fetchClasses();
                setTimeout(() => (this.isloading = false), 1000);
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
                //console.log(this.semester_id.length);
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
                //console.log(data);
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
                //console.log(data);
                this.allClassesData = data;


            },
        },
        mounted() {
            this.fetchClasses();
            this.fetchAllSchoolyear_semester();
        }
    };

</script>

<style scoped>
    .text-caption {
        color: #fff !important;
    }

</style>
