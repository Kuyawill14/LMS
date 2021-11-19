<template>
    <div>

        <v-row v-if="!isGetting && classLength == 0" align="center" justify="center" class="pt-10" >
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:8rem">
                    mdi-google-classroom
                </v-icon>
                <h2> Empty Archive Classes </h2>
            </v-col>
        </v-row>


        <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-icon style="font-size:14rem">
                    mdi-google-contacts
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h2> Loading archive classes </h2>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>

         <div v-if="!isGetting && classLength > 0" >
            <teacherClassArchive v-on:RestoreConfirm="restoreClass"  :ArchiveClasses="ArchiveClasses" v-if="role == 'Teacher'" />
            <studentClassArchive :ArchiveClasses="ArchiveClasses" v-if="role == 'Student'" />
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapActions} from "vuex";
    const teacherClassArchive = () => import("./archiveClassType/teacherClassArchive");
    const studentClassArchive = () => import("./archiveClassType/studentClassArchive");
    
    export default {
        props: ['role'],
        components: {
            teacherClassArchive,
            studentClassArchive
        },
        data() {
            return {
                classLength: null,
                isGetting: false,
                ArchiveClasses:[]
            }
        },
        methods: {
             async restoreClass(data){
                await axios.put('/api/archive/restore-class/'+data.id)
                .then(res=>{
                    this.ArchiveClasses.splice(data.index, 1);
                })
            },
            async fetchClass() {
                this.isGetting = true;
                await axios.get('/api/archive/classes')
                .then(res=>{
                    this.ArchiveClasses = res.data;
                    this.classLength = res.data.length;
                    ////console.log(res.data);
                    //////console.log( this.$store.state.CurrentUser.MyCourses)
                    res.data.forEach(item => {
                         this.$store.state.CurrentUser.MyCourses.push({
                        id: item.course_id,
                        status: item.status
                    })
                    });
                   ////console.log( this.$store.state.CurrentUser.MyCourses)
                    this.isGetting = false;
                })
                
            },
        },
        mounted(){
            this.fetchClass();
        }
    }

</script>


