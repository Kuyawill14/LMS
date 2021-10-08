<template>
<div class="pa-2">

<v-row justify="center" v-if="dialog">
     <v-overlay :value="isStarting">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <v-dialog v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition">
    <checkobjective v-show="!isStarting" v-if="dialog" v-on:isMounted="isStarting = false" v-on:RestSubmission="ResetSubmission()" :classworkDetails="classworkDetails" :ViewDetails="ViewDetails"  v-on:UpdateSubmission="$emit('UpdateSubmission')" v-on:closeDialog="dialog = !dialog, Viewdialog = !Viewdialog "></checkobjective>
</v-dialog>

   
 </v-row> 


<v-row class="pa-1">
    
    <v-col cols="12" :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'pl-5 d-none' : 'pl-5'" md="12" lg="3" xl="3" >
        <v-row>
            <v-col cols="12" class="mb-0 pb-0">
                <h3>Students</h3>
            </v-col>
            <v-col cols="12" class="mb-0 pb-0">
                <v-select
                outlined
                dense
                label="Class"
                v-model="Class"
                class="mb-0 pb-0"
                :items="ClassList"
                item-text="class_name"
                item-value="class_id">
                </v-select>
            </v-col>
            <v-col cols="12" >
               <!--   <v-hover v-slot="{ hover }">
                <v-row @click="ViewSubmision(item, i)"  style="cursor:pointer" :class="hover ? 'grey lighten-4' : ''">
                    <v-col cols="9" class="pa-5">
                         <div class=" d-flex justify-start">
                            <v-avatar color="brown" size="40">
                                <v-img alt="Profile"
                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                                </v-img>
                            </v-avatar>
                            <div class="mt-2 ml-2">
                            <div class="font-weight-medium">
                                {{item.firstName +' '+item.lastName}}
                                <br>
                            </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col v-if="item.status == 'Submitted'" cols="3" class="text-left">
                        <v-text-field 
                        class="mb-0 pb-0"
                        :append-icon="item.graded && item.status == 'Submitted' ? 'mdi-check' : ''"
                         :loading="isSavingScore" :style="$vuetify.breakpoint.xs ? 'width:100%' :'width:80%'" 
                                 @keyup="SaveScore(item.id, item.points)"  v-model="item.points" 
                                dense outlined  type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" min="0">
                        </v-text-field>
                       
                    </v-col>
                </v-row>
                 </v-hover>
                 <v-divider ></v-divider> -->

                 <v-list >
                    <v-list-item-group >
                        <template v-for="(item,i) in studentSubmissionList" >
                            <v-list-item v-if="Class == $route.params.id || Class == item.class_id" :key="item.id">
                                <v-list-item-avatar @click="ViewSubmision(item, i)"   color="secondary">
                                    <v-img alt="Profile"
                                        :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                                    </v-img>
                                </v-list-item-avatar>

                                <v-list-item-content @click="ViewSubmision(item, i)" >
                                    <v-list-item-title class="font-weight-medium">{{item.firstName +' '+item.lastName}}</v-list-item-title>
                                    <v-list-item-subtitle class="success--text" v-if="item.status == 'Submitted'" ><v-icon small color="success">mdi-check</v-icon> Submitted</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action v-if="item.status == 'Submitted'">
                                    <v-text-field 
                                        class="ma-0 pa-0"
                                        
                                        :loading="isSavingScore" 
                                        @keyup="SaveScore(item.id, item.points)"  v-model="item.points" 
                                        dense outlined  type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" min="0">
                                </v-text-field>
                                </v-list-item-action>
                                </v-list-item>
                                  <v-divider
                                    v-if="i < ListData.length && Class == $route.params.id || Class == item.class_id"
                                    :key="i">
                                </v-divider>
                            </template>
                    </v-list-item-group>
                    </v-list>
            </v-col>
        </v-row>


             
    </v-col>
    <v-col v-if="!isViewing" cols="12" md="12" lg="9" xl="9" class="pl-6">
        <v-row>
            <v-col cols="12" class="mb-0 pb-0" >
                <h3>{{classworkDetails.title}}</h3>
            </v-col>
            <v-col cols="12">
                <v-row>
                    <v-col cols="2" sm="2"  md="1">
                         <div class="d-flex flex-column">
                            <h1>{{Submitted}}</h1>
                            <small>Submitted</small>
                        </div>
                    </v-col>
                     <v-col class="text-right" cols="10" sm="10"  md="11">
                         <div class="pt-7">
                             <v-btn @click="resetdialog = !resetdialog" small text rounded>
                                 <v-icon left>mdi-restart</v-icon>
                                 Reset Submission
                             </v-btn>
                         </div>
                    </v-col>

                </v-row>
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12" md="12" lg="3" xl="3" class="pt-0 mt-0 pb-0 mb-0 pt-1">
                 <v-select
                    outlined
                    dense
                    label="Status"
                    v-model="selectedStatus"
                    class="mb-0 pb-0"
                    :items="StatusType"
                    >
                </v-select>
         
            </v-col>

            <v-col cols="12" md="12" lg="9" xl="9" class="pt-0 mt-0 pb-0 mb-0 pt-1">
                
                <v-text-field 
                 class="mb-0 pb-0"
                 v-model="search"
                prepend-inner-icon="mdi-magnify"
                outlined dense label="Search">
                
                </v-text-field>
            </v-col>

            <v-col cols="12" class="mt-0 pt-0">
                <v-row>
                    <v-col v-show="(Class == $route.params.id || Class == item.class_id) && (selectedStatus == 'All' || selectedStatus == item.status || (selectedStatus == 'No Submission' && (item.status == null || item.status == '')))"  class="text-center ma-0 pa-0 pl-2 pr-3 pb-3" cols="6" md="6" lg="4" xl="3" v-for="(item,i) in studentSubmissionList" :key="i">
                        <v-card 
                        outlined
                        
                        class="mx-auto">
                        <v-alert class="ma-0 pa-0"  :outlined="item.status == 'Taking'" :color="item.status == 'Taking' ? 'blue': ''">
                            <v-list-item link @click="ViewSubmision(item, i)" >
                                    <v-list-item-content>
                                    
                                        <div class=" d-flex justify-start">
                                            <v-avatar color="brown" :size="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '25' :'40'">
                                                <v-img alt="Profile"
                                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                                                </v-img>
                                            </v-avatar>
                                            <div class="d-flex flex-column">
                                                <div :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'mt-0 ml-1 caption' : 'mt-2 ml-3'">
                                                    {{item.firstName +' '+item.lastName}}
                                                </div>
                                                <div class="d-flex ml-3">
                                                    <small v-if="item.status == 'Submitted'">Submitted
                                                        <v-icon left small  color="success">mdi-check</v-icon>
                                                    </small>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </v-list-item-content>
                            </v-list-item>
                          </v-alert>
                      </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col >
   <!--  <v-col v-if="isViewing" style="max-height:85vh;overflow-y:scroll;overflow-x: hidden;" cols="12" md="12" lg="8" xl="8" class="pl-6">
         
            <v-container class="fill-height" v-if="isLoadingData && !isMounted" style="height: 400px;">
                <v-row  align-content="center" justify="center">
                    <v-col class="text-subtitle-1 text-center" cols="12">
                        Loading
                    </v-col>
                    <v-col cols="6">
                        <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                    </v-col>
                </v-row>
            </v-container>
         <checkobjective v-if="isLoadingData" v-show="isMounted" v-on:isMounted="isMounted = true" v-on:RestSubmission="ResetSubmission()" :classworkDetails="classworkDetails" :ViewDetails="ViewDetails"  v-on:UpdateSubmission="$emit('UpdateSubmission')" v-on:closeDialog="isViewing = false"></checkobjective>
    </v-col> -->
    <v-row>
         <v-dialog v-model="resetdialog" persistent max-width="550">
            <resetStudentSubmissionDialog
            scrollable
            v-on:toggleDialog="resetdialog = !resetdialog"
            v-on:StartReset="MultipleResetSubmission"
            :ListData="ListData"
            :ClassList="ClassList"
            v-if="resetdialog"></resetStudentSubmissionDialog>
        </v-dialog>
    </v-row>

    
</v-row>
</div>
</template>
<script>
const resetConfirmation = () => import('../dialogs/resetConfirmation')
const checkobjective = () => import('./check-submission/check-objective')
const resetStudentSubmissionDialog = () => import('./resetAllSubmission/resetStudentSubmissionDialog')

export default {
    props:["ListData","classworkDetails","Submitted", "Graded","ClassList"],
    components:{
        checkobjective,
        resetConfirmation,
        resetStudentSubmissionDialog
    },
    data(){
        return{
            isloading:true,
            isLoadingData: true,
             selectedTasks: [],
             isMounted: false,
             headers: [

                { text: 'Name', value: 'name' },
                { text: 'Status', value: 'status',align: 'center',},
                { text: 'Points', value: 'points' },
                { text: 'Actions',sortable: false},
                
            ],
            dialog: false,
            Viewdialog:false,
            ResetDialog: false,
            ViewDetails: null,
            resetId: null,
            resetName: null,
            selected_index:null,
            Details:[],
            Reload: true,
            Class: this.$route.params.id,
            StatusType: ['All', 'Submitted', 'Taking', 'No Submission'],
            selectedStatus:'All',
            isSavingScore: false,
            search: "",
            isViewing: false,
            isStarting: false,
            resetdialog: false,
            selected_user_id: null,
            
        }
    },
     computed: {
            studentSubmissionList() {
                if (this.search) {
                    let data = this.search;
                    return this.ListData.filter((element) => {
                        return data.toLowerCase().split(' ').every(v => element.firstName.toLowerCase()
                            .includes(v) || element.lastName.toLowerCase()
                            .includes(v))
                    })
                } else {
                    return this.ListData;
                }
            }
        },
    methods:{
        ViewSubmision(data, index){
             this.ViewDetails = null;
             //this.isLoadingData = true;
            //if(data.status == 'Submitted'){
                //this.isViewing = true;
                this.dialog = !this.dialog;
                this.isStarting = true;
                this.Viewdialog = !this.Viewdialog;
                this.ViewDetails = data;
                this.selected_index = index;
                this.selected_id = data.id;
            //}
       
        },
        ResetSubmission(){

            this.studentSubmissionList.forEach(item => {
                if(item.id == this.selected_id){
                   item.status = null;
                   item.points = 0;
                   item.Submitted_Answers = null;
                }
            });

        /*   this.studentSubmissionList[this.selected_index].status = null;
            this.studentSubmissionList[this.selected_index].points = 0;
            this.studentSubmissionList[this.selected_index].Submitted_Answers = null; */
           //this.dialog = !this.dialog;
        },
        MultipleResetSubmission(data){
            axios.post('/api/teacher/resetStudentSubmissions',data)
            .then(()=>{
                 data.forEach(item => {
                    this.studentSubmissionList.forEach(sb => {
                        if(item.id == sb.id){
                            sb.status = null;
                            sb.points = 0;
                            sb.Submitted_Answers = null;
                        }
                    });   
                });
                 this.resetdialog = !this.resetdialog
            })
        },
       
    },
   /*  created(){
        this.Details = this.ListData;
    } */
}
</script>