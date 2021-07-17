<template>
    <div>

       <!--  <v-dialog v-model="Archivedialog" persistent max-width="400">
            <confirmArchiveCourse
            v-on:toggleCancelDialog="Archivedialog = !Archivedialog"
            v-on:toggleconfirm="archiveCourse()"
            :ArchiveDetails="ArchiveDetails"
            v-if="Archivedialog"></confirmArchiveCourse>
        </v-dialog> -->
        <v-row align="center" justify="center" class="pt-10" v-if="coursesLength == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:8rem">
                    mdi-book-variant-multiple
                </v-icon>

                <h2> Empty Archive Courses </h2>
             <!--    <p> There is no archive courses. </p> -->
                
            </v-col>
        </v-row>


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
        </v-container>



        <div v-if="coursesLength != 0 && isGetting == false" class="pa-1">
            <v-row class="mt-3">
                <v-col lg="3" md="6" v-for="(item, i) in ArchiveCourses" :key="'course'+i">
                    <div class="card-expansion">
                        <v-card class="mx-auto">
                            <v-img :src="'../images/'+item.course_picture" height="200px">
                                <v-spacer></v-spacer>
                                <v-menu transition="slide-y-transition" bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon v-bind="attrs" v-on="on" class="float-right" color="white">
                                            <v-icon>
                                                mdi-dots-vertical
                                            </v-icon>

                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item link @click="restoreArchive(item.id)">
                                            <v-list-item-title>Restore</v-list-item-title>

                                        </v-list-item>

                                        <v-list-item link >
                                            <v-list-item-title>Delete</v-list-item-title>

                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-img>

                            <v-card-subtitle>
                               <router-link :to="{name: 'coursePage', params: {id: item.id}}" style="text-decoration: none">
                                    <p style="font-size: 16px;">{{item.course_code }} 
                                    <br> {{ item.course_name}}
                                    </p>
                                </router-link>
                                 <hr>
                                  {{item.student_count+' students'}} <br>
                                {{item.class_count+' class'}}
                            </v-card-subtitle>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </div>

    </div>
</template>
<script>
    //const confirmArchiveCourse = () => import("./dialog/confirmArchiveCourse")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            //    VueElementLoading,
            //confirmArchiveCourse
        },
        data() {
            return {
                coursesLength: null,
                isGetting: false,
                dialog: false,
                isloading: true,
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
                Archivedialog: false,
                ArchiveDetails:{},
                ArchiveCourses:[]
            }
        },
        methods: {
               toastSuccess(message,icon) {
                return this.$toasted.success(message, {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            archiveConfirm(name,id){
                this.ArchiveDetails.course_id = id;
                this.ArchiveDetails.name = name;
                this.Archivedialog = !this.Archivedialog
            },
             async restoreArchive(id){
                axios.put('/api/archive/restore/'+id)
                .then(res=>{
                    this.fetchCourses();
                    ///this.Archivedialog = !this.Archivedialog;
                })
            },
            fetchCourses() {
                this.isGetting = true;
                axios.get('/api/archive/courses')
                .then(res=>{
                    this.ArchiveCourses = res.data;
                    this.coursesLength = res.data.length;
                    this.isGetting = false;
                })
                
            },
        },
        mounted() {
          this.fetchCourses();
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
