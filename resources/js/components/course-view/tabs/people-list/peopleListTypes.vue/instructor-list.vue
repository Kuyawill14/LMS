<template>
    <div>
        <div v-if="dialog">
        <v-dialog v-model="dialog" persistent max-width="400">
            <removeConfirmDialog
            v-on:toggleCancelDialog="dialog = !dialog"
            v-on:toggleconfirm="removeStudent()"
            :RemoveDetails="RemoveDetails"
            v-if="dialog"></removeConfirmDialog>
        </v-dialog>
    </div> 
            <v-container fluid>
            <v-container v-if="isGetting" style="height: 400px;">
                <v-row class="fill-height" align-content="center" justify="center">
                        <v-icon style="font-size:14rem">
                        mdi-account-group
                    </v-icon>
                    <v-col class="text-subtitle-1 text-center" cols="12">
                        <h2> Getting Student List </h2>
                    </v-col>
                    <v-col cols="6">
                        <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                    </v-col>
                </v-row>
            </v-container>

            <v-container fluid v-if="!isGetting" class="mt-0">
            <v-row>
               
                <v-col cols="12" >
                    <v-row>
                        <v-col class="mb-0 pb-0" cols="7"  md="10" lg="10">
                            <v-btn rounded  color="primary"> <v-icon left>mdi-plus</v-icon>Instructor</v-btn>
                        </v-col>
                        <v-col class="mb-0 pb-0" cols="5"  md="2" lg="2">
                             <v-select
                             v-model="Class_id"
                             :items="classNames"
                             :loading="isloading"
                             :disabled="isloading"
                             item-text="class_name"
                             item-value="class_id"
                            class="float-right"
                            dense
                            outlined
                            ></v-select>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

             <v-row>
                <v-col class="pl-0 ml-0 pb-0 mb-0 pt-0 mt-0" cols="12"
                v-show="item.class_id == Class_id || Class_id == $route.params.id"
                 v-for="item in students" v-bind:key="item.user_id">
                    <v-container style="cursor:pointer">
    
                        <v-container class="pb-0 mb-0 pt-0 mt-0 d-flex flex-sm-row">
                            <v-avatar class="mt-1"  size="40">
                                <v-img 
                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=white&name=' + (item.firstName+' '+item.lastName) : item.profile_pic">
                                </v-img>
                            </v-avatar>
                            <v-container  class="pb-0 mb-0 pt-0 mt-0 d-flex flex-column ml-5" ma-0 pa-0>
                                <h3 class="text-left font-weight-light">{{item.firstName}} {{item.lastName}}<small class="ml-1">({{item.class_name}})</small></h3>
                                <div>{{item.email}}</div>
                            </v-container>


                            <!--  <v-app-bar  flat color="rgba(0, 0, 0, 0)">
                                <v-spacer></v-spacer>
                                <v-menu transition="slide-y-transition" bottom left>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon v-bind="attrs" v-on="on" class="float-right" color="black">
                                            <v-icon>
                                                mdi-dots-vertical
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item link @click="RemoveConfirm(item.firstName, item.lastName, item.class_name,item.class_id, item.user_id)" >
                                            <v-list-item-title>Remove student</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item link>
                                            <v-list-item-title>View Student</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-app-bar> -->
                        </v-container>
                        <v-divider></v-divider>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
        </v-container>
    </div>
</template>
<script>
const removeConfirmDialog = () => import('../dialog/removeConfirmDialog')
    export default {
        components:{
            removeConfirmDialog
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
                RemoveDetails: {}
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
            getStudentList(){
                axios.get('/api/student/all/'+this.$route.params.id)
                .then((res)=>{
                    this.fetchClassnames();
                    this.students = res.data.InstructorList
                     //setTimeout(() => {
                        this.isGetting = false;
                    //}, 1000);

                }).catch((error)=>{
                    console.log(error)
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
