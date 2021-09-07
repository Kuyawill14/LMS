<template>
    <div>

       <!--  <v-row align="center" justify="center" class="pt-10" >
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:8rem">
                    mdi-book-open-variant
                </v-icon>
                <h2> Empty Archive Classworks </h2>
            </v-col>
        </v-row> -->


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


        <div>
            <teacherClassworkArchive :ArchiveClasswork="ArchiveClasswork" v-if="role == 'Teacher'"></teacherClassworkArchive>
        </div>

  

    </div>
</template>
<script>
    //const confirmArchiveCourse = () => import("./dialog/confirmArchiveCourse")
     const teacherClassworkArchive = () => import("./archiveClassworkType/teacherClassworkArchive");
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props:['role'],
        components: {
            teacherClassworkArchive,
        },
        data() {
            return {
                isGetting: false,
                ArchiveClasswork:[]
            }
        },
        methods: {
            async GetArchiveClasswork(){
                axios.get('/api/archive/classwork/'+'all')
                .then((res)=>{
                    this.ArchiveClasswork = res.data;
                })
            }
        },
        beforeMount(){
            this.GetArchiveClasswork();
        }

    }

</script>


