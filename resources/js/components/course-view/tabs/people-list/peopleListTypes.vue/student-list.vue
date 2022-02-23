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

            <v-dialog v-model="AddStudent" persistent max-width="450">
                <addStudentDialog
                v-on:toggleCancelDialog="AddStudent = !AddStudent"
                v-on:toggleconfirm="AddStudent = !AddStudent"
                :classList="classList"
                :course_name="course_name"
                v-if="AddStudent"></addStudentDialog>
            </v-dialog>

               <v-dialog v-model="MoveStudent" persistent max-width="400">
                <moveStudentDialog
                v-on:toggleCancelDialog="MoveStudent = !MoveStudent"
                v-on:toggleconfirm="MoveStudent = !MoveStudent, getStudents()"
                :MoveDetails="MoveDetails"
                v-if="MoveStudent"></moveStudentDialog>
            </v-dialog>


            
        </div> 
       
           <!--  <v-container v-if="isGetting" style="height: 400px;">
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
                
            </v-container> -->

          
              
      

            <div fluid  class="mt-3">
            <v-row class="mb-0 pb-0">
                <v-col cols="12"  >
                    <v-row>
                        <v-col class=" text-right d-flex" cols="7"  md="10" lg="10">
                            <div>
                                <v-select
                                    @change="isGetting  = true,getStudents()"
                                    v-model="Class_id"
                                    :items="classNames"
                                    :loading="isloading"
                                    :disabled="isloading"
                                    item-text="class_name"
                                    item-value="class_id"
                                    class="float-left"
                                    dense
                                    hide-details
                                    outlined>
                                </v-select>
                            </div>
                        </v-col>
                        <v-col class="mb-0 pb-0 text-right" cols="5"  md="2" lg="2">
                              <v-btn rounded @click="OpenaddStudentDialog(), course_name = getcourseInfo.course_name"  color="primary"> <v-icon left>mdi-plus</v-icon>Student</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

              

             <v-row class="mt-0 pt-0">
                
                <v-col   cols="12" >
                    <v-row>
                         <v-col cols="6" class=" pl-5 mb-0 pb-0 mt-0 pt-0 d-flex justify-start">
                              

                              <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-badge offset-x="13" offset-y="25" :color="getcourseInfo.join_request_count != 0 && $route.query.view == 'list' ? 'red' : ''" 
                                        :content="getcourseInfo.join_request_count != 0 ? getcourseInfo.join_request_count : ''">
                                        <v-btn v-bind="attrs" v-on="on" @click="$route.query.view == 'list' ? $router.replace({query:{view: 'join_request'}}) : $router.replace({query:{view: 'list'}})" x-large icon><v-icon large>
                                            {{$route.query.view == 'list' ? 'mdi-account-arrow-right-outline' : 'mdi-close'}}</v-icon></v-btn>
                                    </v-badge>
                                </template>
                                <span>{{$route.query.view == 'list' ? 'Join Request' : 'Close'}}</span>
                            </v-tooltip>
                            
                        </v-col>
                        <v-col cols="6" class=" mb-0 pb-0 mt-0 pt-0 d-flex justify-end">
                            <div class="d-flex justify-end pr-3"  :style="$vuetify.breakpoint.mdAndUp ? 'width: 35%' : 'width: 100%'">
                                <v-text-field
                                    dense
                                    hide-details
                                    transition="slide-x-transition"
                                    label="Search"
                                    v-model="search"
                                    placeholder="Name"
                                    outlined
                                    prepend-inner-icon="mdi-magnify"
                                    class="mb-0 pb-0">
                                </v-text-field>
                            </div>
                        </v-col>
                    </v-row>

                </v-col>

                <v-col v-if="isGetting"  class="mb-0 pb-0 mt-0 pt-0" cols="12" >
                     <v-row >
                        <v-col class="mb-0 pb-0 mt-0 pt-0" v-for="n in 12" :key="n" cols="12" md="4" lg="3">
                            <v-skeleton-loader
                            max-width="300"
                            type="list-item-avatar-two-line"
                            ></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </v-col>
                

               
                <v-col v-if="!isGetting && $route.query.view == 'list'"  class="mb-0 pb-0 mt-0 pt-0" cols="12" >
                    <v-row>
                        <v-col class="mb-0 pb-0 mt-0 pt-0" cols="12" md="4" lg="3"  v-for="item in getAllStudents" v-bind:key="item.user_id">
                              <v-list class="mb-0 pb-0">
                                <v-list-item class="mb-0 pb-0" >
                                    <v-list-item-avatar color="secondary" >
                                        <v-img 
                                            :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (item.firstName+' '+item.lastName) : trimProfile(item.profile_pic)">
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
                                                <v-list nav>
                                                        <v-list-item @click="OpenmoveStudentDialog(item)" link>
                                                        <v-list-item-title>Move Student</v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item link @click="RemoveConfirm(item.firstName, item.lastName, item.class_name,item.class_id, item.user_id)" >
                                                        <v-list-item-title>Remove student</v-list-item-title>
                                                    </v-list-item>
                                                  <!--   <v-list-item link>
                                                        <v-list-item-title>View Student</v-list-item-title>
                                                    </v-list-item> -->
                                                    
                                                </v-list>
                                            </v-menu>
                                        </v-app-bar>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                      
                </v-col>
                 <v-col v-if="!isGetting && $route.query.view == 'join_request'"  class="mb-0 pb-0 mt-0 pt-0" cols="12" >
                     <classJoinRequest :Class_id="Class_id"></classJoinRequest>
                 </v-col>
                
            </v-row>
        </div>
    </div>
</template>
<script>
const removeConfirmDialog = () => import('../dialog/removeConfirmDialog')
const addStudentDialog = () => import('../dialog/addStudentDialog')
const moveStudentDialog = () => import('../dialog/moveStudentDialog')
const classJoinRequest = () => import('./class_join_request')

import { mapGetters } from 'vuex'
    export default {
        components:{
            removeConfirmDialog,
            addStudentDialog,
            moveStudentDialog,
            classJoinRequest
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
                isSearching: false,
                MoveStudent: false,
                MoveDetails: null,
                isShowJoinRequest: false,
                timeout: null,             
            }

        },
        computed: {
            getAllStudents() {
                if(this.search) {
                    return this.getStudentList.filter((item) => {
                        return this.search.toLowerCase().split(' ').every(v => item.firstName.toLowerCase()
                        .includes(v) || item.lastName.toLowerCase()
                        .includes(v))
                    })
                }else {
                    return this.getStudentList;
                }
            },
            ...mapGetters(["getcourseInfo","getcourseInfo","getStudentList","getClassesNames"])
        },
        methods:{
            RemoveConfirm(fname, lname, class_name,class_id,user_id){
                this.RemoveDetails.name = fname+' '+lname;
                this.RemoveDetails.class_name = class_name;
                this.RemoveDetails.class_id = class_id;
                this.RemoveDetails.user_id = user_id;
                this.dialog = !this.dialog;
            },
            async startSearch(){
                this.isSearching = true;
                clearTimeout(this.timeout);
                let self = this;
                this.timeout = setTimeout(function () {
                    self.isSearching = false;
                }, 1000);
            },
            async removeStudent(){
                axios.delete('/api/student/removeFromClass/'+this.RemoveDetails.class_id+'/'+this.RemoveDetails.user_id)
                .then(res=>{
                    this.getStudents();
                     this.dialog = !this.dialog;
                })
            },
            async getStudents(){
               /*  axios.get('/api/student/all/'+this.$route.params.id)
                .then((res)=>{
                    this.students = res.data.StudentList;
                     this.isGetting = false;
                }).catch((error)=>{
                }) */

                this.$store.dispatch('fetchAllStudents',{course_id: this.$route.params.id, class_id: this.Class_id })
                .then(()=>{
                    this.isGetting = false;
                })
            },
            async fetchClassnames() {
               /*  axios.get('/api/class/class_list/' + this.$route.params.id).then(res => {
                    this.Class_id = res.data[0].class_id;
                    this.getStudents();
                    this.classNames = res.data;
                    this.classNames.push({ class_id: this.$route.params.id, class_name: 'All Class', id: this.$route.params.id});
                    res.data.forEach(item => {
                        this.classNames.push(item);
                    });
                    this.isloading = false;
                     
                }) */

                if(this.getClassesNames.length == 0){
                     this.$store.dispatch('fetchClassesNames', this.$route.params.id)
                    .then(()=>{
                        this.Class_id = this.getClassesNames[0].class_id;
                        this.classNames= this.getClassesNames.filter((item) => {
                            return item.class_name != 'All Class';
                            
                        })
                        this.getStudents();
                        this.isloading = false;
                    })
                }else{
                    this.Class_id = this.getClassesNames[0].class_id;
                    this.classNames= this.getClassesNames.filter((item) => {
                        return item.class_name != 'All Class';
                    })
                    this.getStudents();
                    this.isloading = false;
                }
               
            },
          
            OpenaddStudentDialog(){
                this.AddStudent = !this.AddStudent;
            },
            OpenmoveStudentDialog(data){
                this.MoveStudent = !this.MoveStudent;
                this.MoveDetails = data;
            },
            trimProfile(path){
                let str = path.replace('.cdn', '');
                return str;
            }
        },
        
        mounted() {
            this.fetchClassnames();

        }
    }

</script>
