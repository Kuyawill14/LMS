<template>



      <div >

          <v-dialog v-model="dialog" persistent max-width="400">
            <resetConfirmation
            v-on:toggleCancelDialog="dialog = !dialog"
            v-on:toggleconfirm="ResetSubmission()"
            :ViewDetails="CheckData"
            v-if="dialog"></resetConfirmation>
        </v-dialog>
       <!--  <v-toolbar dense shaped class="fixed-bar" floating color="primary" app >
            <v-btn dark icon @click="$emit('closeDialog')" >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-toolbar> -->

            <v-row no-gutters align="center" justify="center">
                <v-col cols="12" class="mb-2 mt-0 pt-0">
                       <v-card elevation="2" outlined class="pl-2 pr-4 pb-2">
                           <v-list>
                               <v-list-item>
                                   <v-list-item-avatar size="52" color="primary">
                                       <v-icon color="white" size="30"> 
                                           mdi-book-open-variant
                                       </v-icon>
                                   </v-list-item-avatar>
                                   <v-list-item-content>
                                       <v-list-item-title style="font-size:22px" class="font-weight-bold">
                                           {{classworkDetails.title}}
                                       </v-list-item-title>
                                       <v-list-item-subtitle class="font-weight-medium">
                                           Due: {{ CheckData.availability == 1 ? format_date(CheckData.to_date) : 'No due date'}}
                                       </v-list-item-subtitle>
                                     
                                   </v-list-item-content>
                                     <v-list-item-action>
                                            <v-list-item-action-text>
                                                <v-btn  @click="$emit('closeDialog')" small text rounded >
                                                    <v-icon small>mdi-close</v-icon> Close
                                                </v-btn>  
                                            </v-list-item-action-text>
                                             <v-spacer></v-spacer>
                                          
                                       </v-list-item-action>
                               </v-list-item>
                           </v-list>
                       </v-card>
                   </v-col>
                    <v-col cols="12" md="12" lg="10">
                        <v-row no-gutters>
                            <v-col cols="12" md="4" lg="4" :class="!$vuetify.breakpoint.mdAndUp ? '' : 'pr-3'">
                                <v-container fluid ma-0 pa-0>
                                <v-card  v-show="$vuetify.breakpoint.mdAndUp || SelectedNav == 0" class="pa-5 pb-8 pt-3 mt-1" elevation="1" outlined>
                                    <v-row  no-gutters>
                                        <v-col class="ma-0 pa-0">
                                             <v-row class="mb-0 pb-0">
                                                    <v-col cols="12" class="mb-0 pb-0">
                                                        <div class="d-flex mb-2 ">
                                                            <v-btn :disabled="SubmittedLength == 1 || currentIndex == 0" icon @click="PrevStudent()">
                                                                <v-icon>mdi-chevron-left</v-icon>
                                                            </v-btn>
                                                            <v-spacer></v-spacer>
                                                               <div class="text-center">
                                                                    <div class="font-weight-medium">
                                                                   
                                                                        {{(currentIndex+1)+'/'+SubmittedLength}}
                                                                    </div>
                                                                    <div>
                                                                        <small class="mt-3">Switch Student</small>
                                                                    </div>
                                                                
                                                                </div>
                                                            <v-spacer></v-spacer>

                                                            <v-btn :disabled="currentIndex == SubmittedLength-1" icon @click="NextStudent()">
                                                                <v-icon>mdi-chevron-right</v-icon>
                                                            </v-btn>
                                                        </div>
                                                        <v-divider></v-divider>
                                                    </v-col>
                                                </v-row>
                                                <v-list class="ma-0 pa-0">
                                                    <v-list-item  class="ma-0 pa-0">
                                                        <v-list-item-avatar color="secondary">
                                                            <v-img alt="Profile"
                                                                :src="CheckData.profile_pic == null || CheckData.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + (CheckData.firstName+' '+CheckData.lastName) : CheckData.profile_pic">
                                                            </v-img>
                                                        </v-list-item-avatar>
                                                    
                                                        <v-list-item-content>
                                                            <v-list-item-title class="font-weight-medium">{{CheckData.firstName +' '+CheckData.lastName}}</v-list-item-title>
                                                            <v-list-item-subtitle v-if="CheckData.graded == 0" :class="CheckData.status == 'Submitted' ? 'success--text' : ''" > {{CheckData.status == 'Submitted' ? 'Submitted: '+format_date(CheckData.updated_at) : CheckData.status == 'Submitting' ? 'Submitting...' : ''}}</v-list-item-subtitle>
                                                             <v-list-item-subtitle v-else class="success--text" ><v-icon  small color="success">mdi-check</v-icon> Graded </v-list-item-subtitle>
                                                        </v-list-item-content>
                                                        <v-list-item-action v-if="CheckData.status == 'Submitted'" class="mt-8">
                                                            <v-text-field rounded hide-details :loading="isSavingScore" 
                                                        @keyup="SaveScore()" v-model="CheckData.points" 
                                                        dense outlined label="Score" type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points"  min="0"></v-text-field>
                                                        </v-list-item-action>
                                                    </v-list-item>
                                            </v-list>
                                        </v-col>
                                        <v-col  cols="12" class="ma-0 pa-0 pb-4 pt-3">
                                            <v-btn rounded text block v-if="CheckData.status != null && CheckData.status != '' && CheckData.status != 'Submitting'"
                                                @click="dialog = !dialog" color="primary" ><v-icon left>mdi-restart</v-icon> Reset Submission</v-btn>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-row>
                                                <v-col cols="12" v-if="CheckData.Submitted_Answers != null && CheckData.Submitted_Answers != ''" >                    
                                                    <v-list nav outlined>
                                                        <v-list-item class="rounded"  link v-for="(item, index) in CheckData.Submitted_Answers" :key="index">
                                                            <v-list-item-icon class="pr-0 mr-0 mr-1">
                                                                    <v-icon large :color="CheckFileIconColor(item.fileExte)" >
                                                                        {{CheckFileIcon(item.fileExte)}}
                                                                    </v-icon>
                                                            </v-list-item-icon>
                                                            <v-list-item-content @click="OpenFile(item.fileExte, item.link)">
                                                                <v-list-item-title>
                                                                    {{item.name}}
                                                                </v-list-item-title>
                                                            </v-list-item-content>
                                                            <v-list-item-action>
                                                                    <v-tooltip top>
                                                                        <template v-slot:activator="{ on, attrs }">
                                                                            <v-btn  v-bind="attrs" v-on="on" 
                                                                            rounded small icon text @click="DownloadFile(item.link)"> <v-icon color="blue">mdi-download</v-icon></v-btn>
                                                                        </template>
                                                                        <span>Download</span>
                                                                    </v-tooltip>
                                                            </v-list-item-action>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-col>
                                            </v-row>
                                        
                                        </v-col>
                                    </v-row>
                                    <div class="pt-5 pb-1">
                                            <v-divider></v-divider>
                                    </div>
                                        <div class="mt-12" v-if="isReloadRubrics">
                                            <vue-element-loading :active="isReloadRubrics" duration="0.7" spinner="line-scale" color="#EF6C00"  size="40" />
                                        </div>
                                        <v-list v-if="classworkDetails.rubrics.length != 0 && CheckData.status == 'Submitted' && !isReloadRubrics">
                                        <v-list-item v-for="(item, index) in classworkDetails.rubrics" :key="index" class="mb-0 pb-0">
                                            <v-list-item-avatar tile>
                                                <div class="font-weight-bold">{{item.points}}%</div>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="font-weight-medium">
                                                    {{item.criteria_name}}
                                                </v-list-item-title>
                                                <div>
                                                    <p>{{item.description}}</p>
                                                </div>
                                            </v-list-item-content>
                                                <v-list-item-action style="width:30%" >
                                                    <v-text-field rounded hide-details v-model="CheckData.rubrics_score[index].points" type="number" :suffix="'/' +item.points" class="ma-0 pa-0" dense outlined :label="item.criteria_name" >
                                                    </v-text-field>
                                                </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                    <div v-if="classworkDetails.rubrics.length != 0 && CheckData.status == 'Submitted'" class="text-right">
                                        <v-btn @click="SaveRubricsScore()" small class="primary" dark>
                                            Save
                                        </v-btn>
                                    </div>

                                </v-card>

                                    <v-card v-show="$vuetify.breakpoint.mdAndUp || SelectedNav == 2"   class="mt-2 scrollComment" elevation="1" outlined>
                                    <div class="pt-3 pl-4 pr-4 pb-2">
                                    <v-icon left>mdi-comment</v-icon>Private Comments
                                    </div>
                                    
                                    <v-divider></v-divider>
                                    <v-list max-height="350" style="overflow-y:scroll;scrollbar-width: thin;" class="mb-0 pb-0">
                            
                                        <v-list-item class="mb-0 pb-0" v-for="(item, i) in CheckData.comments" :key="i">
                                        <v-list-item-avatar>
                                            <v-img 
                                            :src="item.profile_pic == null || item.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' +  item.name : item.profile_pic">
                                            </v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                {{item.name}}
                                            </v-list-item-title>
                                        <!--  <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle> -->
                                            <div>
                                                <p>{{item.content}}</p>
                                            </div>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-btn icon>
                                            <v-icon small color="grey lighten-1">mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        </v-list-item-action>
                                        </v-list-item>
                                
                                    </v-list>
                                    <v-divider></v-divider>
                                    <v-list class="mb-0 pb-0 mt-0 pt-0">
                                        <v-list-item class="mb-0 pb-0">
                                        <v-list-item-avatar color="secondary">
                                            <v-img 
                                            :src="get_CurrentUser.profile_pic == null || get_CurrentUser.profile_pic == ''? 'https://ui-avatars.com/api/?background=random&color=fff&name=' +  get_CurrentUser.firstName+' '+get_CurrentUser.lastName : get_CurrentUser.profile_pic">
                                            </v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content class="ma-0 pa-0">
                                            <v-textarea
                                                :loading="isCommenting"
                                                v-model="comment"
                                                prepend-avatar="mdi-emoticon-dead"
                                                filled
                                                rounded
                                                dense
                                                auto-grow
                                                rows="1"
                                                clear-icon="mdi-close-circle"
                                                clearable
                                                placeholder="Comment"
                                                class="pa-0 mt-7"
                                                type="text"
                                                >
                                                </v-textarea>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-btn :loading="isCommenting" @click="addComment(CheckData)" icon>
                                            <v-icon  color="primary">mdi-send</v-icon>
                                            </v-btn>
                                        </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                            </v-container>
                        </v-col>
                            <v-col  cols="12" md="8" lg="8" class="pt-1">
                                <v-container class="pt-1" v-if="(CheckData.Submitted_Answers == null || CheckData.Submitted_Answers == '') && ($vuetify.breakpoint.mdAndUp || SelectedNav == 1)" fluid ma-0 pa-0>
                                <v-card style="height: 40rem" class="pa-2">
                                    <v-row   justify="center" align-content="center" >
                                        <v-col style="margin-top: 10rem" cols="12"   class="text-center">
                                            <v-icon style="font-size:8rem">
                                                mdi-notebook-remove-outline
                                            </v-icon>
                                            <h2> Empty Submission </h2>
                                            <p class="mb-0 pb-0"> This student did not submit yet!</p>
                                            <v-btn @click="alertStudent()" color="primary">Alert Student <v-icon right>mdi-account-alert</v-icon> </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                        
                                    
                                </v-container>
                            
                                <v-container v-if="(CheckData.Submitted_Answers != null && CheckData.Submitted_Answers != '') && ($vuetify.breakpoint.mdAndUp || SelectedNav == 1)" fluid ma-0 pa-0>
                                <v-card >
                                    <div class="pa-3"  :style="OpenFileType == 'document' ?
                                    
                                    $vuetify.breakpoint.mdAndUp ? 'height:90vh !important;' : 'height:85vh !important;' : $vuetify.breakpoint.mdAndUp ? 'height:90vh !important' : 'height:85vh !important'">
                                        <div class="pa-3 text-center" >
                                            <v-progress-circular
                                            style="margin-top:23rem"
                                            :size="50"
                                            color="primary"
                                            indeterminate
                                            v-if="isOpening">
                                            </v-progress-circular>
                                        </div>

                                        <div v-if="!isOpening && OpenFileType == 'document'">
                                            <iframe title="google pdf viewer" id="pdf-iframe" 
                                            :src="'https://docs.google.com/viewer?embedded=true&amp;url=' + path" 
                                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                            style="position: absolute; top: 0px; left: 0px; width: 100% !important; height: 100% !important;"></iframe>
                                           <!--   <iframe  style="position: absolute; top: 0px; left: 0px; width: 100% !important; height: 100% !important;" :src="`${path}`" ></iframe>   -->
                                        </div> 
                    
                                        <div v-if="!isOpening && OpenFileType == 'link'">
                                            <iframe title="Link" 
                                            :src="path" 
                                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                            style="position: absolute; top: 0px; left: 0px; width: 100% !important; height: 100% !important;"></iframe>
                                        </div> 

                                            <div v-if="!isOpening && OpenFileType == 'media'" >
                                            <v-img
                                                :src="path"
                                                max-width="100%"
                                                max-height="80vh"
                                                contain>
                                                <template v-slot:placeholder>
                                                <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center">
                                                    <v-progress-circular
                                                    indeterminate
                                                    color="grey lighten-5"
                                                    ></v-progress-circular>
                                                </v-row>
                                                </template>
                                            </v-img>
                                        </div>   

                                    </div>
                                </v-card>
                                </v-container>
                        </v-col>
                  </v-row>
                </v-col>
            </v-row>
   
        <div  class="pt-10">
              <v-bottom-navigation
       
            
            
            v-if="!$vuetify.breakpoint.mdAndUp"
            fixed
             grow :value="SelectedNav" color="primary">
                <v-btn @click="SelectedNav = 0">
                    <span>Submitted Files</span>
                    <v-icon>mdi-file</v-icon>
                </v-btn>

                <v-btn @click="SelectedNav = 1">
                    <span>Viewer</span>
                    <v-icon>mdi-file-eye</v-icon>
                </v-btn>

                <v-btn @click="SelectedNav = 2">
                    <span>Comments</span>
                    <v-icon>mdi-comment</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </div>
           
            
      </div>


</template>
<script>
import moment from 'moment-timezone';
import {mapGetters} from "vuex";
const resetConfirmation = () => import('../../dialogs/resetConfirmation')
  export default {
    props:['CheckData','classworkDetails','SubmittedLength', 'currentIndex'],
    components:{
        resetConfirmation
    },
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        Details:null,
        timeout: null,
        value: '',
        score: '',
        path: null,
        isSavingScore: false,
        isCommenting: false,
        comment: null,
        RubricsPoints:[],
        SaveRubricsData: [],
        OpenFileType: null,
        isOpening: true,
        SelectedNav: 0,
        isReloadRubrics: false,
      }
    },
    computed:{
        ...mapGetters(['get_CurrentUser']),
    },
    methods:{
          CheckFileIcon(ext){
                if(ext == 'jpg' ||  ext == 'jpeg' || ext == 'gif' ||  ext == 'svg' || ext == 'png' ||  ext == 'bmp'){
                return 'mdi-image';
                }
                else if(ext == 'pdf'){
                return 'mdi-file-pdf';
                }
                else if(ext == 'txt' ){
                return 'mdi-note-text-outline';
                }
                else if(ext == 'docx' || ext == 'doc'){
                return 'mdi-file-word';
                }
                else if(ext == 'link' ){
                return 'mdi-file-link';
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
        DownloadFile(link){
            //var host = window.location.protocol + "//" + window.location.host;
            //window.location = link
            window.open(link,'_blank');
        },
        SaveScore(){
            clearTimeout(this.timeout);
            var self = this;
            this.timeout = setTimeout(function () {
                self.score = self.CheckData.points;
                self.isSavingScore = !self.isSavingScore;
                self.UpdateScore();
            }, 1000);
        },
        SaveRubricsScore(){
            let TotalRubics = 0;
            let TotalPointsInRubrics = 0;
            let ctr = 0;
            
            this.classworkDetails.rubrics.forEach(item => {
                TotalRubics += item.points;
                TotalPointsInRubrics += parseInt(this.CheckData.rubrics_score[ctr].points);
                this.SaveRubricsData.push({
                    id: item.id,
                    points: this.RubricsPoints[ctr],
                })
                ctr++;
            });

            let score = (TotalPointsInRubrics / TotalRubics) * this.classworkDetails.points;
            this.CheckData.points = Math.round(score);
            this.score = Math.round(this.CheckData.points);
            this.isSavingScore = !this.isSavingScore;
            this.UpdateScore();
        },
        async UpdateScore(){
            if(this.score <= this.classworkDetails.points){
                axios.put('/api/submission/update-score/'+this.CheckData.id,{score: this.score, data: this.CheckData.rubrics_score})
                .then(res=>{
                    if(res.status == 200){
                        this.toastSuccess("Score Updated");
                        this.isSavingScore = !this.isSavingScore;
                        this.$emit('UpdateSubmission', this.CheckData.id);
                    }
                })
            }
            else{
                this.isSavingScore = !this.isSavingScore;
                 this.toastError('Score is higher than the set points!');
            }
            
        },
          async alertStudent(){
              let data = {};
              this.isAlerting = true;
              data.user_id = this.CheckData.user_id;
              data.classwork_name = this.classworkDetails.title;
              data.classwork_id = this.classworkDetails.id;
              data.course_id = this.classworkDetails.course_id;
              data.firstName = this.CheckData.firstName;
              axios.post('/api/teacher/alert-student',data)
              .then((res)=>{
                  if(res.data.success == true){
                      this.toastSuccess(res.data.message);
                      this.isAlerting = false;
                  }
              })
          },
          OpenFile(extension, link){
              this.SelectedNav = 1;
              this.isOpening = true;
              if(extension == 'png' || extension == 'jpg' || extension == 'jpeg' || extension == 'bmp'){
                          this.OpenFileType = 'media';
                  this.path = link;
                 setTimeout(() => (this.isOpening = false), 500);
              }
              else if(extension == 'link'){
                  this.OpenFileType = 'link';
                    let str = link;
                    if(str.includes('www.youtube.com') || str.includes('m.youtube.com' )){
                        let res = str.split("=");
                        let id = res[1].split("&");
                        let embeddedUrl = "https://www.youtube.com/embed/"+id[0];
                        this.path = embeddedUrl;
                    }
                    else if(str.includes('youtu.be')){
                        let newpath = str.replace('youtu.be/', 'www.youtube.com/embed/');
                        this.path = newpath;
                    }
                    else if(str.includes('drive.google.com')){
                        let d = str.replace(/.*\/d\//, '').replace(/\/.*/, '');
                        let path = "https://drive.google.com/file/d/" + d + "/preview";
                        
                        this.path = path;
                    }
                    else{
                        this.path = link;
                    }
                  setTimeout(() => (this.isOpening = false), 500);
              }
              else{
                  this.OpenFileType = 'document'
                  this.path = link;
                 setTimeout(() => (this.isOpening = false), 500);
              }
          },
         async addComment(details){
              let data = {};
              this.isCommenting = true;
              data.classwork_id = details.classwork_id;
              data.course_id = this.$route.params.id;
              data.to_user = details.user_id;
              data.comment = this.comment;
              axios.post('/api/post/classwork/comment/insert', data)
              .then((res)=>{
                  if(res.status == 200 ){
                    this.CheckData.comments.push({
                      content : res.data.comment,
                      id : res.data.id,
                      name : res.data.name,
                      profile_pic : res.data.profile_pic
                    })
                    this.comment = null;
                  }
                  
              })
               this.isCommenting = false;
          },
          checkRubrics(){
              if(this.classworkDetails.rubrics.length != 0){
                    if(this.CheckData.rubrics_score == false){
                        this.CheckData.rubrics_score = [];
                        this.classworkDetails.rubrics.forEach(item => {
                              this.CheckData.rubrics_score.push({ id: item.id , points : null})
                        });
                    }
              }
          },
        reRunRubrics(){
            //if(this.classworkDetails.rubrics.length != 0){
                if(this.CheckData.rubrics_score == null || this.CheckData.rubrics_score == false){
                        this.CheckData.rubrics_score = [];
                        this.classworkDetails.rubrics.forEach(item => {
                        this.CheckData.rubrics_score.push({ id: item.id , points : null})
                    });
                    this.isReloadRubrics = false;
                }
                else{
                    this.isReloadRubrics = false;
                }
               
            /* }
            else{
                this.isReloadRubrics = false;
            } */

             if(this.CheckData.Submitted_Answers != null && this.CheckData.Submitted_Answers != ''){
                 this.OpenFile(this.CheckData.Submitted_Answers[0].fileExte, this.CheckData.Submitted_Answers[0].link)
             }
        },
        async ResetSubmission(){
            axios.put('/api/teacher/reset-sbj/'+this.CheckData.id, {files : this.CheckData.Submitted_Answers})
            .then(()=>{
                this.$emit('SubmissionReset', this.CheckData.id);
            })
        },
         async NextStudent(){
             this.isReloadRubrics = true;
            this.path = null;
            this.$emit("nextStudent");

           setTimeout(() => (this.reRunRubrics()),300);
          },
          async PrevStudent(){
            this.isReloadRubrics = true;
            this.path = null;
            this.$emit("prevStudent");
            setTimeout(() => (this.reRunRubrics()),300);
          }
       
    },
    beforeDestroy(){
        this.$emit('closeDialog');
    },
    created(){
        if(this.CheckData.Submitted_Answers != null && this.CheckData.Submitted_Answers != ''){
            
            let path = this.CheckData.Submitted_Answers[0].link;
            let extension = this.CheckData.Submitted_Answers[0].fileExte;
             if(extension == 'png' || extension == 'jpg' || extension == 'jpeg' || extension == 'bmp'){
                this.OpenFileType = 'media';
                  this.path = path;
                  this.isOpening = false
              }
               else if(extension == 'link'){
                  this.OpenFileType = 'link';
                  let str = path;
                  if(str.includes('www.youtube.com')){
                    let res = str.split("=");
                    let id = res[1].split("&");
                    let embeddedUrl = "https://www.youtube.com/embed/"+id[0];
                    this.path = embeddedUrl;
                  }
                 else if(str.includes('drive.google.com')){
                        let d = str.replace(/.*\/d\//, '').replace(/\/.*/, '');
                        let pathLink = "https://drive.google.com/file/d/" + d + "/preview";
                        this.path = pathLink;
                    }
                  else{
                    this.path = path;
                  }
                  this.isOpening = false
              }
              else {
                this.OpenFileType = 'document'
                  this.path = path;
                  this.isOpening = false
              }
            //var host = window.location.protocol + "//" + window.location.host;
               //console.log(host)
            //let viewer ="https://docs.google.com/gview?url=https://path.com/to/your/pdf.pdf&embedded=true";
            //this.pdf_path = path;
        }
        this.checkRubrics();
        this.$emit('isMounted');
    }
  
  }
</script>
<style scoped>
    .doc {
    width: 100%;
    height: 70vh;
    }
    .fixed-bar {
    position: sticky;
    position: -webkit-sticky; /* for Safari */
    top: 0em;
    z-index: 2;
}
</style>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
