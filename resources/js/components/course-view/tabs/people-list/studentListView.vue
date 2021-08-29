<template>
    <div>

            <v-container fluid>
            <v-container v-if="isGetting" style="height: 400px;">
                <v-row class="fill-height" align-content="center" justify="center">
                        <v-icon style="font-size:14rem">
                        mdi-account-group
                    </v-icon>
                    <v-col class="text-subtitle-1 text-center" cols="12">
                        <h2> Getting people List </h2>
                    </v-col>
                    <v-col cols="6">
                        <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                    </v-col>
                </v-row>
            </v-container>

            

            <v-container fluid v-if="!isGetting" class="mt-0">
            

             <v-row>
                 <!-- Intructor -->
                 <v-col cols="12" class="mb-0 pb-0 mt-2 pt-0">
                     <div><h3 class="font-weight-regular">Intructor</h3></div>
                 </v-col>
                <v-col cols="12" class="ma-0 pa-0">
                     <v-list class="mb-0 pb-0">
                        <v-list-item class="mb-0 pb-0" v-for="item in instructor" :key="item.user_id">
                            <v-list-item-avatar color="secondary" >
                                 <v-img 
                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=white&name=' + (item.firstName+' '+item.lastName) : '/storage/'+item.profile_pic">
                                </v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{item.firstName}} {{item.lastName}}</v-list-item-title>
                            </v-list-item-content>
                           
                        </v-list-item>
                    </v-list>
                        
                </v-col>
                <v-col cols="12" class="mt-0 mb-0">
                    <v-divider></v-divider>
                </v-col>

                <!-- Students -->
                <v-col cols="12" class="mb-0 pb-0 mt-3 pt-0">
                    <div><h3 class="font-weight-regular">Classmates</h3></div>
                 </v-col>
                <v-col class="ma-0 pa-0" cols="12">
                    <v-list class="mb-0 pb-0">
                        <v-list-item class="mb-0 pb-0" v-for="item in students" :key="item.user_id">
                            <v-list-item-avatar color="secondary" >
                                 <v-img 
                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=white&name=' + (item.firstName+' '+item.lastName) : '/storage/'+item.profile_pic">
                                </v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{item.firstName}} {{item.lastName}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
        </v-container>
    </div>
</template>
<script>
//const removeConfirmDialog = () => import('../dialog/removeConfirmDialog')
    export default {
      
        components:{
            //removeConfirmDialog
        },
        data: function () {
            return {
                dialog: false,
                isloading:true,
                isGetting: true,
                search: "",
                isClassNameLoaded:false,
                classNames:[],
                Class_id: this.$route.params.id,
                RemoveDetails: {},
            }

        },
        computed: {
            getAllStudents() {
                if (this.search) {
                    return this.students.filter((item) => {
                        return this.search.toLowerCase().split(' ').every(v => item.firstName.toLowerCase()
                        .includes(v) || item.lastName.toLowerCase()
                        .includes(v))
                    })
                } else {
                    return this.students;
                }
            }
        },
        methods:{
            RemoveConfirm(fname, lname, class_name,class_id,user_id){
                this.RemoveDetails.name = fname+' '+lname;
                this.RemoveDetails.class_name = class_name;
                this.RemoveDetails.class_id = class_id;
                this.RemoveDetails.user_id = user_id;
                this.dialog = !this.dialog;
            },
            async removeStudent(){
                axios.delete('/api/student/removeFromClass/'+this.RemoveDetails.class_id+'/'+this.RemoveDetails.user_id)
                .then(res=>{
                    this.getStudentList();
                     this.dialog = !this.dialog;
                })
            },
            async getStudentList(){
                axios.get('/api/student/all/'+this.$route.params.id)
                .then((res)=>{
                    this.fetchClassnames();
                    this.instructor = res.data.InstructorList
                    this.students = res.data.StudentList
                    this.isGetting = false;
              

                }).catch((error)=>{
                    //console.log(error)
                })
            },
              fetchClassnames() {
                axios.get('/api/class/allnames/' + this.$route.params.id+'/'+0).then(res => {
                    this.classNames = res.data;
                    this.isloading = false;
                    this.classNames.push({ class_id: this.$route.params.id, class_name: 'All Class', id: this.$route.params.id});
                })
            },
        },
        
        mounted() {
          this.getStudentList();
            this.isloading = false;
        }
    }

</script>
