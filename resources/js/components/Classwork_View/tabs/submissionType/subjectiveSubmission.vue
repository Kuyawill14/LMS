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
         v-on:UpdateSubmission="MarkAsGraded" 
         :CheckData="CheckData" 
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
                    <v-col cols="6" sm="3"  md="2">
                         <div class="d-flex flex-column">
                              <h1>{{Class == $route.params.id && selectedStatus == "Submitted"   ? Submitted : Submitted_count}} / {{Class == $route.params.id ? ListData.length : Over_total}}</h1>
                            <small>Submitted</small>
                        </div>
                    </v-col>
                     <v-col  cols="6" sm="3" md="2">
                         <div class="d-flex flex-column">
                            <h1>{{GradedStudent}}</h1>
                            <small>Graded</small>
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
                <v-row>
                    <v-col  v-show="!isFiltered && (Class == $route.params.id || Class == item.class_id)" link  cols="12" md="6" lg="4" xl="3"  v-for="(item,i) in studentSubmissionList" :key="i">

                        <v-alert class="ma-0 pa-0"  outlined :color="item.status == 'Taking' ? 'blue': item.status == 'Submitted' ? 'success' : 'grey'">
                            <v-list-item   class="pt-1 pb-1"  link  >
                                    <v-list-item-avatar @click="ViewSubmission(item, i)">
                                        <v-avatar color="brown" size="40">
                                            <v-img alt="Profile"
                                                :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                                            </v-img>
                                        </v-avatar>
                                    </v-list-item-avatar>
                                    <v-list-item-content @click="ViewSubmission(item, i)">
                                        <v-list-item-title>
                                             {{item.firstName +' '+item.lastName}}
                                        </v-list-item-title>
                                         <v-list-item-subtitle class="success--text" ><v-icon v-if="item.graded == 1" small color="success">mdi-check</v-icon> 
                                            <span class="success--text"  v-if="item.status == 'Submitted' && item.graded == 0">Submitted</span>
                                              <span class="success--text" v-else-if="item.status == 'Submitted' && item.graded == 1">Graded</span>
                                              <span class="red--text"  v-else>No Submission</span>
                                         </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action v-if="item.status != null && item.status != 'Submitting'" style="max-width:150px !important">
                                        <v-form ref="pointsform" v-model="valid" lazy-validation>
                                            <v-text-field
                                                :hide-details="valid"
                                                class="ma-0 pa-0"
                                                label="Score"
                                                rounded
                                             
                                                :loading="isSavingScore" 
                                                @keyup="validate(item.id, item.points)"  v-model="item.points" 
                                                dense outlined  type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" >
                                            </v-text-field>
                                       </v-form>
                                </v-list-item-action>
                            </v-list-item>
                          </v-alert>
                     <!--  </v-card> -->
                    </v-col>

                    <v-col cols="12" v-if="isFiltered">
                        <v-container class="fill-height" style="height: 500px;">
                        <v-row  align-content="center" justify="center">
                                <v-col cols="12" class="text-center">
                                    <vue-element-loading :active="isFiltered" 
                                    duration="0.7"
                                  
                                    spinner="line-scale" color="#EF6C00"  size="40" />
                                </v-col>
                            </v-row>
                        </v-container>

                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</v-row>
<!-- </v-card> -->
<!-- v-if="!$vuetify.breakpoint.mdAndUp " -->

</div>
</template>
<script>
import moment from 'moment-timezone';
const checksubjective = () => import('./check-submission/check-subjective')
export default {
    props:["ListData","classworkDetails","Submitted", "Graded","ClassList"],
    components:{
        checksubjective,
    },
    data(){
        return{
            isloading:true,
             selectedTasks: [],
             CheckData: null,
             search: "",
             Class: this.$route.params.id,
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
            StatusType: ['All','Submitted', 'Graded', 'No Submission'],
            selectedStatus:'All',
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
            valid:true
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
                    //this.Submitted_count = Filterddata.length;
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
        validate(id, points) {
            if (this.$refs.pointsform.validate()) {
                this.SaveScore(id, points); 
            }
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
        async MarkAsGraded(id){
            this.studentSubmissionList.forEach(item => {
                    if(id == item.id){
                        item.graded = 1;
                    }
            });
        },
        ShowLoading(){
            this.isFiltered = true;
            setTimeout(() => (this.isFiltered = false), 400);
        },
        async FilteredClass(){
            this.Over_total = 0;
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
            //}
        },
        async ViewSubmission(data, index){
            this.AllData = this.studentSubmissionList;
            this.CheckData = data;
            this.selected_index = index;
            this.dialog = true;
            this.isStarting = true;
            this.$store.dispatch("isViewingSubmission");
        },
        isNotViewing(){
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
        },
        GotoPrevStudent(){
            this.CheckData = null;
            this.selected_index = this.selected_index - 1;;
            this.CheckData = this.AllData[this.selected_index];
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