<template>
    <div>
        <div >
            <v-dialog v-model="dialog" persistent max-width="400">
                <removeConfirmDialog
                v-on:toggleCancelDialog="dialog = !dialog"
                v-on:toggleconfirm="removeStudent()"
                :RemoveDetails="RemoveDetails"
                v-if="dialog"></removeConfirmDialog>
            </v-dialog>

            <v-dialog v-model="AddStudent" persistent max-width="600">
                <addStudentDialog
                v-on:toggleCancelDialog="AddStudent = !AddStudent"
                v-on:toggleconfirm="AddStudent = !AddStudent"
                :classList="classList"
                :course_name="course_name"
                v-if="AddStudent"></addStudentDialog>
            </v-dialog>
        </div> 
            <v-container fluid>
            <v-container v-if="isGetting" style="height: 400px;">
                <v-row class="fill-height" align-content="center" justify="center">
                        <v-icon style="font-size:10rem">
                        mdi-account-group
                    </v-icon>
                    <v-col class="text-subtitle-1 text-center" cols="12">
                        <h3> Getting Student List </h3>
                    </v-col>
                    <v-col cols="6">
                        <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                    </v-col>
                </v-row>
            </v-container>

            <v-container fluid v-if="!isGetting" class="mt-0">
            <v-row>
                
                <v-col cols="12" class="mt-0 pt-0" >
                    <v-row>
                        <v-col class="mb-0 pb-0" cols="7"  md="10" lg="10">
                            <v-btn rounded @click="OpenaddStudentDialog(), course_name = getcourseInfo.course_name"  color="primary"> <v-icon left>mdi-plus</v-icon>Student</v-btn>
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
                 <v-col cols="12" class=" mb-0 pb-0 mt-0 pt-0 d-flex justify-end">
                     <div class="d-flex justify-end pr-3"  style="width: 30%">
                     <v-text-field
                        dense
                        transition="slide-x-transition"
                        v-if="isSearching"
                        label="Search"
                        v-model="search"
                        placeholder="Name"
                        outlined
                        class="mb-0 pb-0"
                    ></v-text-field>
                     <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon @click="isSearching = !isSearching" v-bind="attrs" v-on="on">
                                <v-icon>
                                {{!isSearching ? 'mdi-magnify' : 'mdi-close'}}
                                </v-icon>
                            </v-btn>
                        </template>
                         <span>{{!isSearching ? 'Search' : 'Close'}}</span>
                     </v-tooltip>
                     </div>
                </v-col>
                <v-col class="ma-0 pa-0" cols="12" >
                         <v-list class="mb-0 pb-0">
                            <v-list-item class="mb-0 pb-0" v-show="item.class_id == Class_id || Class_id == $route.params.id" v-for="item in getAllStudents" v-bind:key="item.user_id">
                                <v-list-item-avatar color="secondary" >
                                    <v-img 
                                        :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=white&name=' + (item.firstName+' '+item.lastName) : item.profile_pic">
                                    </v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>{{item.firstName}} {{item.lastName}}</v-list-item-title>
                                    <v-list-item-subtitle>{{item.email}}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action class="pa-0 ma-0">
                                    <v-app-bar  flat color="rgba(0, 0, 0, 0)">
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
                                    </v-app-bar>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                </v-col>
            </v-row>
        </v-container>
        </v-container>
    </div>
</template>
<script>
const removeConfirmDialog = () => import('../dialog/removeConfirmDialog')
const addStudentDialog = () => import('../dialog/addStudentDialog')
    export default {
         props:['getcourseInfo'],
        components:{
            removeConfirmDialog,
            addStudentDialog
        },
        data: function () {
            return {
                dialog: false,
                AddStudent: false,
                isloading:true,
                isGetting: true,
                isClassNameLoaded:false,
                classNames:[],
                Class_id: this.$route.params.id,
                RemoveDetails: {},
                students: null,
                classList: [],
                course_name: null,
                search: "",
                isSearching: false
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
                    this.students = res.data.StudentList;
                }).catch((error)=>{
                    console.log(error)
                })
            },
            async fetchClassnames() {
                axios.get('/api/class/allnames/' + this.$route.params.id+'/'+0).then(res => {
                    
                    this.getStudentList();
                    this.classNames = res.data;
                    this.isloading = false;
                    this.isGetting = false;
                    this.classNames.push({ class_id: this.$route.params.id, class_name: 'All Class', id: this.$route.params.id});

                   
                })
            },

             
            OpenaddStudentDialog(){
                this.AddStudent = !this.AddStudent;
            }
        },
        
        mounted() {
            this.fetchClassnames();
        }
    }

</script>
