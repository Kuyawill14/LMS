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
    <checksubjective v-show="!isStarting" v-if="dialog" v-on:SubmissionReset="ResetSubmission" v-on:isMounted="isStarting = false" :classworkDetails="classworkDetails" v-on:UpdateSubmission="MarkAsGraded" :CheckData="CheckData" v-on:closeDialog="dialog = !dialog"></checksubjective>
    </v-dialog>
 </v-row> 

<!-- <v-card elevation="2" class="pa-3"> -->


<v-row >
    <!-- <v-col cols="12" :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'pl-5 d-none' : 'pl-5'" md="12" lg="4" xl="4" >
        <v-row>
            <v-col cols="12" class="mb-0 pb-0">
                <h3>Students</h3>
            </v-col>
            <v-col cols="12" class="mb-0 pb-0">
                <v-select
                outlined
                dense
                @change="ShowLoading"
                label="Class"
                v-model="Class"
                class="mb-0 pb-0"
                :items="ClassList"
                item-text="class_name"
                item-value="class_id"
                >
                </v-select>
            </v-col>
            <v-col cols="12" >
                  <v-list >
                    <v-list-item-group >
                        <template  v-for="(item,i) in studentSubmissionList" >
                            <v-list-item v-if="((Class == $route.params.id || Class == item.class_id) &&  (selectedStatus == 'All' || (selectedStatus == 'Submitted' && item.graded == 0) || (selectedStatus == 'Graded' && item.graded == 1) || (selectedStatus == 'No Submission' && (item.status == null || item.status == ''))))" :key="item.id">
                                <v-list-item-avatar @click="CheckData = item ,dialog = !dialog, isStarting = true"  color="secondary">
                                    <v-img alt="Profile"
                                        :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                                    </v-img>
                                </v-list-item-avatar>

                                <v-list-item-content @click="CheckData = item ,dialog = !dialog, isStarting = true" >
                                    <v-list-item-title class="font-weight-medium">{{item.firstName +' '+item.lastName}}</v-list-item-title>
                                    <v-list-item-subtitle class="success--text" ><v-icon v-if="item.graded == 1" small color="success">mdi-check</v-icon> {{item.graded == 1 ? 'Graded' : item.status == 'Submitted' ? 'Submitted' : ''}}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action v-if="item.status == 'Submitted'" class="mt-7">
                                    <v-text-field 
                                        class="ma-0 pa-0"
                                        :loading="isSavingScore" 
                                        @keyup="SaveScore(item.id, item.points)"  v-model="item.points" 
                                        dense outlined  type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" min="0">
                                </v-text-field>
                                </v-list-item-action>
                                </v-list-item>
                                  <v-divider
                                    v-if="i < ListData.length && ((Class == $route.params.id || Class == item.class_id) &&  (selectedStatus == 'All' || (selectedStatus == 'Submitted' && item.graded == 0) || (selectedStatus == 'Graded' && item.graded == 1) || (selectedStatus == 'No Submission' && (item.status == null || item.status == ''))))"
                                    :key="i">
                                </v-divider>
                            </template>
                    </v-list-item-group>
                    </v-list>
            </v-col>
        </v-row>
    </v-col> -->
    <v-col cols="12" class="pa-3 pl-6">
        <v-row>
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
                            <h1>{{Graded}}</h1>
                            <small>Graded</small>
                        </div>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-col>
             <v-col cols="6"  sm="6" lg="2" xl="2" class="pt-0 mt-0 pb-0 mb-0 pt-1 pb-3">
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
            <v-col cols="6" md="6" lg="2" xl="2" class="pt-0 mt-0 pb-0 mb-0 pt-1 pb-3">
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
            <v-col cols="12"  md="4" lg="2" xl="2" class="pt-0 mt-0 pb-0 mb-0 pt-1 pb-3">
                 <v-select
                    outlined
                    dense
                    @change="ShowLoading"
                    hide-details
                    label="Sort By"
                    v-model="selectedSort"
                    class="mb-0 pb-0"
                    :items="SortType">
                </v-select>
            </v-col>

            <v-col cols="12" md="8" lg="6" xl="6" class="pt-0 mt-0 pb-0 mb-0 pt-1 pb-3">
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
                    <v-col  v-show="!isFiltered && (Class == $route.params.id || Class == item.class_id)" link cols="12" md="6" lg="3" xl="3" v-for="(item,i) in studentSubmissionList" :key="i">
                         <!--  <v-card
                          style="cursor:pointer" 
                          class="mx-auto"
                        outlined> -->
                      <!--   <v-alert class="ma-0 pa-0"  outlined :color="item.status == 'Submitting' ? 'blue': item.status == 'Submitted' ? 'success' : 'grey'">
                        <v-list-item link @click="CheckData = item ,dialog = !dialog, isStarting = true" >
                                <v-list-item-content>
                                    <v-list-item-title  class="d-flex flex-column align-self-center">
                                        <div class="d-flex justify-space-between">
                                             <div class="mt-4 font-weight-medium" style="max-height:30px;overflow:hidden">{{item.firstName +' '+item.lastName}}</div>
                                             <div style="margin-bottom: 0px">
                                                <v-text-field 
                                                    class="ma-0 pa-0"
                                                    :loading="isSavingScore" 
                                                    @keyup="SaveScore(item.id, item.points)"  v-model="item.points" 
                                                    dense outlined  type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" min="0">
                                                </v-text-field>
                                             </div>
                                        </div>
                                       
                                        <v-divider></v-divider>
                                        <v-icon 
                                        class="mt-1"
                                        :color="item.status == 'Submitted' ? CheckFileIcon(item.Submitted_Answers[0].fileExte)[1] : ''"
                                         x-large>
                                           {{item.status == 'Submitted' ? CheckFileIcon(item.Submitted_Answers[0].fileExte)[0] : 'mdi-file-question-outline'}}
                                         </v-icon>
                                        <small style="max-height:12px;overflow:hidden;"> {{ item.Submitted_Answers != null ? item.Submitted_Answers[0].name : 'No Submission'}}</small>
                                    </v-list-item-title>
                                   
                                </v-list-item-content>
                        </v-list-item>
                        </v-alert> -->

                        <v-alert class="ma-0 pa-0"  outlined :color="item.status == 'Taking' ? 'blue': item.status == 'Submitted' ? 'success' : 'grey'">
                            <v-list-item   class="pt-1 pb-1"  link  >
                                    <v-list-item-avatar @click="CheckData = item ,dialog = !dialog, isStarting = true">
                                        <v-avatar color="brown" size="40">
                                            <v-img alt="Profile"
                                                :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                                            </v-img>
                                        </v-avatar>
                                    </v-list-item-avatar>
                                    <v-list-item-content @click="CheckData = item ,dialog = !dialog, isStarting = true" >
                                        <v-list-item-title>
                                             {{item.firstName +' '+item.lastName}}
                                        </v-list-item-title>
                                         <v-list-item-subtitle class="success--text" ><v-icon v-if="item.graded == 1" small color="success">mdi-check</v-icon> 
                                            <span class="success--text"  v-if="item.status == 'Submitted' && item.graded == 0">Submitted</span>
                                              <span class="success--text" v-else-if="item.status == 'Submitted' && item.graded == 1">Graded</span>
                                              <span class="red--text"  v-else>No Submission</span>
                                         </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action >
                                        <v-text-field 
                                            hide-details
                                            class="ma-0 pa-0"
                                            label="Score"
                                            rounded
                                            :loading="isSavingScore" 
                                            @keyup="SaveScore(item.id, item.points)"  v-model="item.points" 
                                            dense outlined  type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" min="0">
                                        </v-text-field>
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
            selectedStatus:'Submitted',
            SortType: ['Name', 'Highest Score', 'Lowest Score'],
            selectedSort: 'Name',
            isStarting: false,
            isFiltered: false,
            Over_total : 0,
            Submitted_count : 0,
        }
    },
     computed: {
        studentSubmissionList() {
           if (this.search) {
                let data = this.search;
                    return this.ListData.filter((item) => {
                    return item.firstName.toLowerCase().includes(this.search.toLowerCase()) || item.lastName.toLowerCase().includes(this.search.toLowerCase());
                })
            } else {
                if(this.selectedStatus == "All"){
                    let Filterddata = this.ListData;
                    //this.Submitted_count = Filterddata.length;
                    if(this.selectedSort == "Name"){
                        return Filterddata
                    }
                    else if(this.selectedSort == "Lowest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        return data;
                    }
                    else if(this.selectedSort == "Highest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        return data.reverse();
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
                        return Filterddata.sort();
                    }
                    else if(this.selectedSort == "Lowest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        return data;
                    }
                    else if(this.selectedSort == "Highest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        return data.reverse();
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
                        return Filterddata.sort();
                    }
                    else if(this.selectedSort == "Lowest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        return data;
                    }
                    else if(this.selectedSort == "Highest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        return data.reverse();
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
                        return Filterddata.sort();
                    }
                    else if(this.selectedSort == "Lowest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        return data;
                    }
                    else if(this.selectedSort == "Highest Score"){
                        let data = Filterddata.sort((a, b) => {
                            return a.points - b.points; 
                        })
                        return data.reverse();
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
            if(this.score <= this.classworkDetails.points){
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
                this.toastError('Score is higher than the set points!');
            }
            
        },
        ResetSubmission(id){
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
        MarkAsGraded(id){
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
        FilteredClass(){
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
        }
       
       
    },
   
}
</script>
<style scoped>
.v-input__control{
    padding: 0px;
    margin: 0px;
}
</style>