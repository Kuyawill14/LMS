<template>
<div class="pa-2">

<v-row justify="center" v-if="dialog">
    <v-overlay :value="isStarting">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

   <!--  <v-dialog v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition">
    <checksubjective v-show="!isStarting" v-if="dialog" v-on:SubmissionReset="ResetSubmission" v-on:isMounted="isStarting = false" :classworkDetails="classworkDetails" v-on:UpdateSubmission="MarkAsGraded" :CheckData="CheckData" v-on:closeDialog="dialog = !dialog"></checksubjective>
    </v-dialog> -->
 </v-row> 

<!-- <v-card elevation="2" class="pa-3"> -->
<v-row v-if="dialog">
     <v-col cols="12">
         <checksubjective 
         :currentIndex="selected_index"
         :SubmittedLength="AllData.length" 
         v-show="!isStarting" 
         v-if="dialog" 
         v-on:SubmissionReset="ResetSubmission" 
         v-on:isMounted="isStarting = false" 
         :classworkDetails="classworkDetails"
         :ClassList="ClassList"
         :CheckDataSection="CheckDataSection"
         v-on:UpdateSubmission="MarkAsGraded"
         v-on:markAsResubmit="MarkAsResubmitting"
         :CheckData="CheckData"
         :Class_id="Class"
         v-on:closeDialog="isNotViewing()"
         v-on:nextStudent="GotoNextStudent()"
         v-on:prevStudent="GotoPrevStudent()"
         >
         </checksubjective>
     </v-col>
 </v-row>

<v-row v-if="!dialog">
    <v-col cols="12" class="pa-3 pl-6">
        <v-row no-gutters>
            <v-col cols="12" class="mb-0 pb-0" >
                <h3>{{classworkDetails.title}}</h3>
            </v-col>
            <v-col cols="12">
                <v-row class="pb-1">
                    <v-col cols="3" sm="3"  md="2">
                         <div class="d-flex flex-column">
                              <h1>{{Submitted_count}} <!-- {{Class == $route.params.id && selectedStatus == "Submitted"   ? Submitted : Submitted_count}} / {{Class == $route.params.id ? ListData.length : Over_total}} --></h1>
                            <small>{{selectedStatus}}</small>
                        </div>
                    </v-col>
                     <v-col  cols="3" sm="3" md="2">
                         <div class="d-flex flex-column">
                            <h1>{{GradedStudent}}</h1>
                            <small>Graded</small>
                        </div>
                    </v-col>

                    <v-col class="text-right" cols="6" sm="6" md="8">
                                <div class="pt-5">
                                    <!-- <v-btn @click="resetdialog = !resetdialog" small text rounded>
                                        <v-icon left>mdi-restart</v-icon>
                                        Reset Submission
                                    </v-btn> -->
                             

                                <v-menu offset-y>
                                    <template v-slot:activator="{ on: menu, attrs }">
                                        <v-tooltip top>
                                        <template v-slot:activator="{ on: tooltip }">
                                            <v-btn text rounded   v-bind="attrs" 
                                            v-on="{ ...tooltip, ...menu }"
                                            >
                                            Settings
                                            <v-icon  right>mdi-cog-outline</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Menu</span>
                                        </v-tooltip>
                                    </template>
                                    <v-list class="pa-2">
                                        <v-list-item :disabled="selectedStatus == 'No Submission'" @click="resetdialog = !resetdialog">
                                            <v-list-item-title><v-icon left>mdi-restart</v-icon> Reset Submission</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click="alertDialog = !alertDialog">
                                            <v-list-item-title><v-icon left>mdi-account-alert</v-icon> Alert Students</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                        </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-col>
             <v-col cols="6"  sm="6" lg="2" xl="2" class="pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3">
                  <v-select
                outlined
                dense
                @change="FilteredClass"
                label="Class"
                v-model="Class"
                class="mb-0 pb-0"
                :items="ClassList"
                hide-details
                item-text="class_name"
                item-value="class_id">
                </v-select>
            </v-col>
            <v-col cols="6" md="6" lg="2" xl="2" class="pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3">
                 <v-select
                    outlined
                    dense
                    @change="ShowLoading"
                    hide-details
                    label="Status"
                    v-model="selectedStatus"
                    class="mb-0 pb-0"
                    :items="StatusType">
                </v-select>
            </v-col>
            <v-col cols="12"  md="4" lg="2" xl="2" class="pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3">
                 <v-select
                    outlined
                    dense
                    @change="ShowLoading"
                    hide-details
                    label="Sort By"
                    :disabled="selectedStatus == 'All'"
                    v-model="selectedSort"
                    class="mb-0 pb-0"
                    :items="SortType">
                </v-select>
            </v-col>

             <v-col cols="12" md="1" sm="6" lg="1" xl="1" class="pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3">
                 <v-select
                    outlined
                    hide-details
                    dense
                    @change="ShowLoading"
                    label="Limit"
                    v-model="selectedShowNumber"
                    class="mb-0 pb-0"
                    :items="ShowNumber">
                </v-select>
            </v-col>

            <v-col cols="12" sm="6"  md="5" lg="5" xl="5" class="pt-0 mt-0 pb-0 mb-0 pt-3 pb-3">
                <v-text-field 
                    class="mb-0 pb-0 mt-0 pt-0"
                    v-model="search"
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    outlined dense label="Search">
                </v-text-field>
            </v-col>
        
            <v-col cols="12" class="mt-0 pt-0">
                <v-row v-if="!isFiltered && studentSubmissionList.length == 0" class="mt-12 pt-12" justify="center" align-content="center">
                    <v-col cols="12" sm="8" md="4" class="text-center pb-12 mb-12">
                        <v-icon style="font-size:6rem">
                            mdi-notebook-remove-outline
                        </v-icon>
                        <h1>{{selectedStatus == 'Submitted' ? 'No Student Submitted' : 
                            selectedStatus == 'Graded' ? 'No Student Graded' : 'No Submission'
                            }} </h1>
                    </v-col>
                </v-row>
                <v-row v-else>
                    <v-col  v-show="!isFiltered && (Class == $route.params.id || Class == item.class_id)" link  cols="12" md="6" lg="4" xl="3"  v-for="(item,i) in studentSubmissionList" :key="i">

                        <v-alert class="ma-0 pa-0"  outlined
                        :color="item.availability == 1 ? item.status == 'Taking' ? 'blue' : item.status == 'Submitted' &&  item.submitted_at > item.to_date ? 'red' : 
                        item.status == 'Submitted' && item.submitted_at <= item.to_date ? 'success' : 'grey' : 
                        item.availability != 1 ? item.status == 'Taking' ? 'blue' : item.status == 'Submitted' ? 'success' : 'grey' : 'grey'">

                         
                            <v-list-item   class="pt-1 pb-1"  link  >
                                    <v-list-item-avatar @click="ViewSubmission(item, i)">
                                        <v-avatar color="brown" size="40">
                                            <v-img alt="Profile"
                                                :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                                            </v-img>
                                        </v-avatar>
                                    </v-list-item-avatar>
                                     <v-tooltip :color="item.status == 'Submitted' ? 'green' : ''" top>
                                            <template v-slot:activator="{ on, attrs }">
                                            <v-list-item-content v-bind="attrs" v-on="on" @click="ViewSubmission(item, i)">
                                                <v-list-item-title>
                                                    {{item.firstName +' '+item.lastName}}
                                                </v-list-item-title>
                                                <v-list-item-subtitle class="success--text" ><v-icon v-if="item.graded == 1" small color="success">mdi-check</v-icon> 
                                                        <span class="success--text"  v-if="item.availability == 1 && item.status == 'Submitted' && item.graded == 0 && (item.submitted_at != null ? checkDate(item.submitted_at) <= checkDate(item.to_date) : false)">Submitted: {{format_date(item.submitted_at)}}</span>
                                                        <span class="red--text"  v-else-if="item.availability == 1 && item.status == 'Submitted' && item.graded == 0 && (item.submitted_at != null ? checkDate(item.submitted_at) > checkDate(item.to_date) : false)">Submitted Late: {{format_date(item.submitted_at)}}</span>
                                                        <span class="success--text"  v-else-if="item.availability == 0 && item.status == 'Submitted' && item.graded == 0">Submitted</span>
                                                        <span class="success--text" v-else-if="item.graded">Graded</span>
                                                        <span class="blue--text" v-else-if="item.status == 'Submitting'">Submitting...</span>
                                                    <span class="red--text" v-else-if="item.status == '' || item.status == null">No Submission</span>
                                                </v-list-item-subtitle>
                                            
                                            </v-list-item-content>
                                        </template>
                                        <span >
                                            <span v-if="item.status == 'Submitted'">
                                                <span>{{item.firstName +' '+item.lastName}}</span><br>
                                                 Submitted: {{format_date(item.updated_at)}}
                                            </span>
                                             <span v-else-if="item.status == '' || item.status == null">
                                                <span>{{item.firstName +' '+item.lastName}}</span><br>
                                                 No Submission
                                            </span>
                                           
                                        </span>
                                    </v-tooltip>
                                    <v-list-item-action v-if="item.status != null && item.status != 'Submitting'" style="max-width:150px !important">
                                        <v-form @submit.prevent="validate(item.id, item.points)" ref="pointsform" v-model="valid" lazy-validation>
                                            <v-text-field
                                                :hide-details="valid"
                                                class="ma-0 pa-0"
                                                label="Score"
                                                rounded
                                                :loading="isSavingScore" 
                                                v-model="item.points" 
                                                dense outlined  type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" >
                                            </v-text-field>
                                       </v-form>
                                </v-list-item-action>
                            </v-list-item>
                          </v-alert>
                     <!--  </v-card> -->
                    </v-col>

                    <!-- <v-col cols="12" v-if="isFiltered">
                        <v-container class="fill-height" style="height: 500px;">
                        <v-row  align-content="center" justify="center">
                                <v-col cols="12" class="text-center">
                                    <vue-element-loading :active="isFiltered" 
                                    duration="0.7"
                                  
                                    spinner="line-scale" color="#EF6C00"  size="40" />
                                </v-col>
                            </v-row>
                        </v-container>

                    </v-col> -->
                     <v-col cols="12" v-if="isFiltered">
                        <v-row>
                            <v-col v-for="i in 20" :key="i" cols="12" md="6" lg="3" xl="3">
                                <v-card class="pl-2 pr-2 pt-3 pb-3" elevation="0" v-if="isFiltered">
                                    <v-list>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-skeleton-loader class="mx-auto"
                                                    type="list-item-avatar-two-line"></v-skeleton-loader>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-skeleton-loader class="mx-auto" type="chip">
                                                </v-skeleton-loader>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</v-row>
<!-- </v-card> -->
<!-- v-if="!$vuetify.breakpoint.mdAndUp " -->

    <v-row v-if="resetdialog">
        <v-dialog v-model="resetdialog" persistent max-width="650">
                <resetStudentSubjectiveSubmission scrollable v-on:toggleDialog="resetdialog = !resetdialog"
                v-on:StartReset="MultipleResetSubmission" :ListData="ListData" :ClassList="ClassList" :class_id="Class"
                v-if="resetdialog"></resetStudentSubjectiveSubmission>
        </v-dialog>
    </v-row>

    <v-row v-if="alertDialog">
        <v-dialog v-model="alertDialog" persistent max-width="650">
                <multipleAlertStudent scrollable v-on:toggleDialog="alertDialog = !alertDialog" :class_id="Class"
                v-on:StartReset="MultipleResetSubmission" :ListData="ListData" :ClassList="ClassList" :classworkDetails="classworkDetails"
                v-if="alertDialog"></multipleAlertStudent>
        </v-dialog>
    </v-row>

</div>
</template>
<script>
import moment from 'moment-timezone';
const checksubjective = () => import('./check-submission/check-subjective')
const resetStudentSubjectiveSubmission = () => import('./resetAllSubmission/resetStudentSubjectiveSubmission')
const multipleAlertStudent = () => import('./AlertSudent/MultipleAlertStudent')
export default {
    props:["ListData","classworkDetails","Submitted", "Graded","ClassList"],
    components:{
        checksubjective,
        resetStudentSubjectiveSubmission,
        multipleAlertStudent
    },
    data(){
        return{
            isloading:true,
             selectedTasks: [],
             CheckData: null,
             search: "",
             Class: this.ClassList[0].class_id,
             dialog: false,
             headers: [
                {
                    text: 'id',
                    align: 'start',
                    value: 'id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Status', value: 'status',align: 'center',},
                { text: 'Graded', value: 'graded',align: 'center',},
                { text: 'Points', value: 'points' },
                { text: 'Actions',sortable: false},
                
            ],
            isSavingScore: false,
            score: null,
            StatusType: ['Submitted', 'Graded','Late Submission' ,'No Submission'],
            selectedStatus:'Submitted',
            SortType: ['Name', 'Highest Score', 'Lowest Score'],
            selectedShowNumber: 24,
            ShowNumber:[24, 36, 48, 'all'],
            selectedSort: 'Name',
            isStarting: false,
            isFiltered: false,
            Over_total : 0,
            Submitted_count : 0,
            selected_index: null,
            AllData: null,
            pointsRules:[
                v => ( v && v > 0 ) || "Points should be above or equal to 0",
            ],
            valid:true,
            resetdialog: false,
            alertDialog:false,
            oldLimit: null,
            CheckDataSection: null
        }
    },
     computed: {
         GradedStudent() {
              let Filterddata = this.ListData;
                Filterddata =  Filterddata.filter((item) => {
                    if(this.Class == this.$route.params.id){
                        return (item.graded == 1)
                    }
                    else{
                        return (item.graded == 1 && item.class_id == this.Class)
                    }
            })
            return Filterddata.length;
         },
        studentSubmissionList() {
           if (this.search) {
                let data = this.search;
                    return this.ListData.filter((item) => {
                    return item.firstName.toLowerCase().includes(this.search.toLowerCase()) || item.lastName.toLowerCase().includes(this.search.toLowerCase());
                })
            } else {
                if(this.selectedStatus == "All"){
                    let Filterddata = this.ListData;
                    if(this.selectedSort == "Name"){
                        if(this.selectedShowNumber != 'all'){
                            let data2 = Filterddata.sort();
                            return data2.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return Filterddata.sort();
                        }
                    }
                }
                else if(this.selectedStatus == 'Late Submission'){
                    let Filterddata = this.ListData;
                     Filterddata =  Filterddata.filter((item) => {
                         if(item.availability != 0){
                            if(this.Class == this.$route.params.id){
                                return (item.status == "Submitted"  && item.submitted_at > item.to_date)
                            }
                            else{
                                return (item.status == "Submitted" && item.class_id == this.Class && item.submitted_at > item.to_date)
                            }
                         }
                    })
                     this.Submitted_count = Filterddata.length;
                    if(this.selectedSort == "Name"){
                        if(this.selectedShowNumber != 'all'){
                            let data2 = Filterddata.sort();
                            return data2.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return Filterddata.sort();
                        }
                    }
                    else if(this.selectedSort == "Lowest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        if(this.selectedShowNumber != 'all'){
                            return data.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return data;
                        }
                    }
                    else if(this.selectedSort == "Highest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        if(this.selectedShowNumber != 'all'){
                            let data2 = data.reverse();
                            return data2.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return data.reverse();
                        }
                    }
                }
                else if(this.selectedStatus == "Submitted"){
                    let Filterddata = this.ListData;
                     Filterddata =  Filterddata.filter((item) => {
                         if(this.Class == this.$route.params.id){
                             return (item.status == "Submitted" && item.graded == 0)
                         }
                         else{
                              return (item.status == "Submitted" && item.graded == 0&& item.class_id == this.Class)
                         }
                    })
                     this.Submitted_count = Filterddata.length;
                    if(this.selectedSort == "Name"){
                        if(this.selectedShowNumber != 'all'){
                            let data2 = Filterddata.sort();
                            return data2.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return Filterddata.sort();
                        }
                    }
                    else if(this.selectedSort == "Lowest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        if(this.selectedShowNumber != 'all'){
                            return data.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return data;
                        }
                    }
                    else if(this.selectedSort == "Highest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        if(this.selectedShowNumber != 'all'){
                            let data2 = data.reverse();
                            return data2.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return data.reverse();
                        }
                    }
                    
                }
                else if(this.selectedStatus == "Graded") {
                    let Filterddata = this.ListData;
                     Filterddata =  Filterddata.filter((item) => {
                         if(this.Class == this.$route.params.id){
                             return (item.graded == 1)
                         }
                         else{
                              return (item.graded == 1 && item.class_id == this.Class)
                         }
                    })
                    
                    this.Submitted_count = Filterddata.length;
                    if(this.selectedSort == "Name"){
                        if(this.selectedShowNumber != 'all'){
                            let data2 = Filterddata.sort();
                            return data2.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return Filterddata.sort();
                        }
                    }
                    else if(this.selectedSort == "Lowest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                         if(this.selectedShowNumber != 'all'){
                            return data.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return data;
                        }
                    }
                    else if(this.selectedSort == "Highest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        if(this.selectedShowNumber != 'all'){
                            let data2 = data.reverse();
                            return data2.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return data.reverse();
                        }
                    }
                }
                else if(this.selectedStatus == "No Submission"){
                    let Filterddata = this.ListData;
                     Filterddata =  Filterddata.filter((item) => {
                         if(this.Class == this.$route.params.id){
                             return (item.status != 'Submitted')
                         }
                         else{
                            return (item.status != 'Submitted' && item.class_id == this.Class)
                         }
                    })
                    this.Submitted_count = Filterddata.length;
                    if(this.selectedSort == "Name"){
                        if(this.selectedShowNumber != 'all'){
                            let data2 = Filterddata.sort();
                            return data2.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return Filterddata.sort();
                        }
                    }
                    else if(this.selectedSort == "Lowest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        if(this.selectedShowNumber != 'all'){
                            return data.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return data;
                        }
                    }
                    else if(this.selectedSort == "Highest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        if(this.selectedShowNumber != 'all'){
                            let data2 = data.reverse();
                            return data2.splice(0, this.selectedShowNumber)
                        }
                        else{
                            return data.reverse();
                        }
                    }
                }
                
            } 
        }
    },
    methods:{
         CheckFileIcon(ext){
            if(ext == 'jpg' ||  ext == 'jpeg' || ext == 'gif' ||  ext == 'svg' || ext == 'png' ||  ext == 'bmp'){
                return ['mdi-image','info']
            }
            else if(ext == 'pdf'){
                 return ['mdi-file-pdf','red']
            }
            else if(ext == 'txt' ){
                return ['mdi-note-text-outline','primary']
            }
            else if(ext == 'docx' || ext == 'doc'){
                return ['mdi-file-word','blue']
            }
            else if(ext == 'link' ){
                return ['mdi-file-link','green']
            }
      },
       CheckFileIconColor(ext){
        if(ext == 'jpg' ||  ext == 'jpeg' || ext == 'gif' ||  ext == 'svg' || ext == 'png' ||  ext == 'bmp'){
                return 'info';
            }
            else if(ext == 'pdf'){
                return 'red';
            }
            else if(ext == 'txt' ){
                return 'primary';
            }
            else if(ext == 'docx' || ext == 'doc'){
                return 'blue';
            }
            else if(ext == 'link' ){
                return 'green';
            }
            else{
                return 'primary';
            }

        },
        format_date(value) {
            if (value) {
                //return moment(String(value)).format('MM/d/YYYY, hh:mm A')
                return moment(String(value)).tz("Asia/Manila").format('MM/d/YYYY, hh:mm A');
            }
        },
        checkDate(value) {
            if (value) {
                return moment(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            }
        },
        validate(id, points) {
             this.SaveScore(id, points); 
           /*  if (this.$refs.pointsform.validate()) {
               
            } */
        },
         SaveScore(id, points){
            clearTimeout(this.timeout);
            var self = this;
            this.timeout = setTimeout(function () {
                self.score = points;
                self.isSavingScore = !self.isSavingScore;
                self.UpdateScore(id);
            }, 1000);
        },
        async UpdateScore(id){
            let rubrics_score = [];
            if(this.score <= this.classworkDetails.points && this.score >= 0){
                axios.put('/api/submission/update-score/'+id,{score: this.score, data: rubrics_score})
                .then(res=>{
                    if(res.status == 200){
                        this.toastSuccess("Score Updated");
                        this.isSavingScore = !this.isSavingScore;
                        this.$emit('UpdateSubmission')

                        this.ListData.forEach(data => {
                            if(data.id == id){
                                data.graded = 1;
                            }
                        });
                    }
                })
            }
            else{
                this.isSavingScore = !this.isSavingScore;
                this.toastError('The set points is invalid!');
            }
            
        },
        async ResetSubmission(id){
            this.studentSubmissionList.forEach(item => {
                if(item.id == id){
                    item.id = null;
                    item.Submitted_Answers = null;
                    item.status = null;
                    item.points = null;
                    item.updated_at = null;
                    item.rubrics_score = null;
                    item.graded = 0;
                    //this.dialog = !this.dialog;
                    return false;
                }
            });
        },
        async MultipleResetSubmission(data) {
            let ResetData = {};
            ResetData.data = data;
            ResetData.type = 'Subjective_Type';
            axios.post('/api/teacher/resetStudentSubmissions', ResetData)
                .then(() => {
                    data.forEach(item => {
                        this.studentSubmissionList.forEach(sb => {
                            if (item.id == sb.id) {
                                sb.status = null;
                                sb.points = 0;
                                sb.Submitted_Answers = null;
                            }
                        });
                    });
                    this.resetdialog = !this.resetdialog
                })
        },
        async MarkAsGraded(id){
            this.studentSubmissionList.forEach(item => {
                if(id == item.user_id){
                    item.graded = 1;
                    item.status = "Submitted";
                }
            });
        },
        MarkAsResubmitting(id){
            this.studentSubmissionList.forEach(item => {
                if(id == item.user_id){
                    item.graded = 0;
                    item.allow_resubmit = 1
                    item.status = "Submitting";
                }
            });
        },
        ShowLoading(){
            this.isFiltered = true;
            setTimeout(() => (this.isFiltered = false), 400);
        },
        async FilteredClass(){
            this.ShowLoading();

            this.$emit('reloadSubmission', this.Class);
            /* this.Over_total = 0;
            this.Submitted_count = 0;
            this.ShowLoading();
            //if(this.Class != this.$route.params.id){
                 this.ListData.forEach(item => {
                    if(item.class_id == this.Class){
                        this.Over_total++;
                        if(item.status == 'Submitted'){
                            this.Submitted_count++;
                        }
                    }
                });
            //} */
        },
        async ViewSubmission(data, index){
            this.oldLimit = this.selectedShowNumber;
            this.selectedShowNumber = 'all';
            this.AllData = this.studentSubmissionList;
            this.CheckData = data;
             this.ClassList.forEach(item => {
                if(item.class_id == this.CheckData.class_id){
                    this.CheckDataSection = item.class_name
                }
            });
            this.selected_index = index;
            this.dialog = true;
            this.isStarting = true;
            this.$store.dispatch("isViewingSubmission");
        },
        isNotViewing(){
            this.selectedShowNumber = this.oldLimit;
            this.CheckData = [];
            this.selected_index = null;
            this.dialog = false;
            this.isStarting = false;
            this.$store.dispatch("isNotViewingSubmission");
        },
           GotoNextStudent(){
            this.CheckData = null;
            this.selected_index = this.selected_index + 1;
            this.CheckData = this.AllData[this.selected_index];
            this.ClassList.forEach(item => {
                if(item.class_id == this.CheckData.class_id){
                    this.CheckDataSection = item.class_name
                }
            });

        },
        GotoPrevStudent(){
            this.CheckData = null;
            this.selected_index = this.selected_index - 1;;
            this.CheckData = this.AllData[this.selected_index];
             this.ClassList.forEach(item => {
                if(item.class_id == this.CheckData.class_id){
                    this.CheckDataSection = item.class_name
                }
            });
        },
       
       
    },
   
}
</script>
<style scoped>
.v-input__control{
    padding: 0px;
    margin: 0px;
}
</style>