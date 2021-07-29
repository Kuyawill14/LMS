<template>
    <div>

        <v-row align="center" justify="center" class="pt-10" >
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:8rem">
                    mdi-book-open-variant
                </v-icon>
                <h2> Empty Archive Classworks </h2>
            </v-col>
        </v-row>


    <!--     <v-container v-if="isGetting" style="height: 400px;">
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

    }

</script>


