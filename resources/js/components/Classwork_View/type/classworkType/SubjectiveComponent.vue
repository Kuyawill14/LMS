<template>
<div >


<div transition="slide-y-reverse-transition">
    <v-app-bar elevation="5" 
    
     v-if="!$vuetify.breakpoint.mdAndUp"
        app  color="primary"  >
         <v-btn dark rounded icon text 
            v-if="!$vuetify.breakpoint.mdAndUp"
            @click="$router.push({name: 'classwork'})" >
            <v-icon >mdi-arrow-left-thick</v-icon>
        </v-btn>
        <v-divider   vertical></v-divider>
        <v-spacer></v-spacer>
          <div v-if="classworkDetails.graded" class="white--text Subtitle-1">
            <span class="font-weight-bold">Score: </span>
            <span class="">{{classworkDetails.score+' /'+classworkDetails.points}}</span> 
        </div>
    </v-app-bar>
</div>
  <v-dialog v-model="AttachLink" persistent max-width="400">
         <!--    <attachlinkDiaglog 
            v-on:toggleCancelDialog="AttachLink = !AttachLink"
            v-on:ToggleRefresh="$emit('ToggleRefresh'), AttachLink = !AttachLink"
            v-if="AttachLink"></attachlinkDiaglog> -->
            <v-form @submit.prevent="validate()" ref="form" v-model="valid" lazy-validation>
            <v-card >
                <v-card-title >
                  <v-btn icon  @click="AttachLink = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <span class="text-h6"> Attach Link 
                    
                     <v-tooltip top>
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              color="primary"
                              dark
                              v-bind="attrs"
                              v-on="on"
                            >
                              mdi-information
                            </v-icon>
                          </template>
                           <span>
                                Supported Links:
                                <ul>
                                    <li>https://docs.google.com/presentation/d/[document-id]</li>
                                    <li>https://docs.google.com/document/d/[document-id]</li>
                                    <li>https://www.youtube.com/watch?v=[video-id]</li>
                                </ul>
                            </span>
                        </v-tooltip>
                     </span>
              
                </v-card-title>
                <v-card-text >
                  <v-row>
                      <v-col cols="12" class="mb-0 pb-0">
                          <v-textarea
                          v-model="linkName"
                          :rules="linkNameRule"
                          class="mb-0 pb-0"
                          outlined
                          dense
                          rows="1"
                          label="Title"
                          auto-grow
                        ></v-textarea>
                        </v-col>

                      <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0">
                          <v-textarea
                          v-model="linkFile"
                          :rules="linkRules"
                          class="mb-0 pb-0"
                          outlined
                          dense
                          rows="1"
                          label="Link"
                          auto-grow
                        ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="pb-2 pl-5 pr-5">
                  <v-btn
                    color="primary"
                    block
                    rounded
                    type="submit"
                    :disabled="!valid"
                  >
                    Confirm
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
      </v-dialog>


    <v-row ref="ContainerSize" justify="center" no-gutters :class="$vuetify.breakpoint.mdAndUp ? 'pa-3' : 'pa-0'">
      <!--   <v-col cols="12" md="10"  class="mb-2 mt-0 pt-0" v-if="!$vuetify.breakpoint.mdAndUp ">
            <v-card class="pa-1" elevation="1" outlined>
                <v-row>
                    <v-col cols="12" >
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn rounded
                                    v-bind="attrs"
                                    v-on="on"
                                    icon 
                                    text 
                                    class=""
                                    @click="$router.push({name: 'classwork'})" >
                                <v-icon dark>mdi-arrow-left-thick</v-icon>
                                </v-btn>
                            </template>
                            <span>Back to classworks</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-card>
        </v-col> -->
         <v-col v-if="$vuetify.breakpoint.mdAndUp ? true : selected == 1 || selected == 2"  cols="12" md="4" lg="4" xl="4" class="mb-0 pb-0">
             <v-card  v-if="$vuetify.breakpoint.mdAndUp || selected == 1" :class="$vuetify.breakpoint.mdAndUp ? 'pa-7' : 'pa-4'" 
             :outlined="$vuetify.breakpoint.mdAndUp"  :elevation="$vuetify.breakpoint.mdAndUp ? '1' : '0'">
               <v-row  >
                 <v-col v-if="$vuetify.breakpoint.mdAndUp"  cols="12" class="ma-0 pa-0">
                   <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                          <v-btn rounded
                            v-bind="attrs"
                            v-on="on"
                            icon 
                            text 
                            class=""
                            @click="$router.push({name: 'classwork'})" >
                          <v-icon dark>mdi-arrow-left-thick</v-icon>
                        </v-btn>
                    </template>
                    <span>Back to classworks</span>
                   </v-tooltip>
                    </v-col>
                    <v-col  cols="12" class="pt-0 mt-0 pl-1 pr-1 pb-0 mb-0 d-flex justify-space-between">
                        <div class="font-weight-medium text-body-2 mt-3">Your Work</div>
                        <div v-if="classworkDetails.publish == null">
                            <v-btn v-if="classworkDetails.status == 'Submitted' && !classworkDetails.graded &&  (classworkDetails.availability == 1 ? format_date1(DateToday) <= format_date1(classworkDetails.to_date): true)" @click="clickResubmit()" rounded text class="blue--text">{{isResubmit ? 'Cancel': 'Resubmit'}}</v-btn>
                            <v-chip v-if="classworkDetails.graded && $vuetify.breakpoint.mdAndUp"
                              class="ma-2" color="green" outlined>
                            Graded: {{classworkDetails.score}} /{{classworkDetails.points}}
                            </v-chip>
                        </div>
                      
                   </v-col>

                   <!-- <v-col v-if="myClasssworkStatus.graded" cols="12" class="pl-1 pr-1 pb-0 mb-0 d-flex justify-space-between">
                        <div class="font-weight-medium text-body-2 mt-3">Your Work</div>
                        <v-btn  rounded text class="success--text"><v-icon left>mdi-check</v-icon> Graded: {{myClasssworkStatus.score}}/{{myClasssworkStatus.totalPoints}}</v-btn>
                   </v-col> -->
                   <v-col cols="12" class="pl-1 pr-1">
                       <v-divider></v-divider>
                   </v-col>
                   <v-col cols="12" v-if="isloading">
                      <v-container class="fill-height" v-if="isloading">
                        <v-row  align-content="center" justify="center">
                            <v-col class="text-subtitle-1 text-center" cols="12">
                                Loading
                            </v-col>
                            <v-col cols="6">
                                <v-progress-linear color="primary" indeterminate rounded height="3"></v-progress-linear>
                            </v-col>
                        </v-row>
                   </v-container>
                   </v-col>
                   
                     <!-- <input ref="AttAchMoreFile" accept=".xlsx,.xls,image/*,.doc,.docx,.ppt, .pptx,.txt,.pdf,text/plain"
                     type="file" class="d-none" @change="onChange"> -->
                      <v-file-input
                        multiple
                   
                        v-model="FileList"
                        @change="onChange" accept=".xlsx,.xls,image/*,.doc,.docx,.ppt, .pptx,.txt,.pdf,text/plain" ref="UploadAttachFile"
                        class="d-none">
                      </v-file-input>
                    <!--   <input ref="UploadAttachFile" accept=".xlsx,.xls,image/*,.doc,.docx,.ppt, .pptx,.txt,.pdf,text/plain" class="d-none" type="file" @change="onChange">
                    -->
                   <v-col class="ma-0 pa-0" cols="12" v-if="!isloading">
                          <v-col cols="12" class="mb-0 pb-0" >
                                <v-row ma-0 pa-0 class="mb-2">
                                  <v-col v-for="(item, index) in classworkDetails.Submitted_Answers" :key="index" class="ma-0 pa-0" cols="12">
                                      <v-list dense nav outlined>
                                         <v-list-item link :disabled="isUpIndex == index && isUploadSaving" >
                                           <v-list-item-avatar>
                                              <v-icon  :color="CheckFileIconColor(item.fileExte)">
                                                {{CheckFileIcon(item.fileExte)}}
                                              </v-icon>
                                           </v-list-item-avatar>
                                            <v-list-item-content @click="OpenFile(item.link)">
                                                <v-list-item-title>
                                                    {{item.name}}
                                                </v-list-item-title>
                                                 <v-list-item-subtitle v-if="isUploading[index] && isUploadSaving">
                                                 <!--    <v-progress-linear
                                                        v-if="isUpIndex == index" rounded
                                                        :value="uploadPercentage"></v-progress-linear> -->
                                                        <v-progress-linear
                                                            v-if="isUpIndex == index"
                                                              color="primary"
                                                              indeterminate
                                                              rounded
                                                              height="5">
                                                      </v-progress-linear>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                 <v-tooltip v-if="(classworkDetails.status == 'Submitting' || isResubmit) && classworkDetails.publish == null" top>
                                                  <template v-slot:activator="{ on, attrs }">
                                                      
                                                      <v-btn
                                                      v-show="isUpIndex != index"
                                                      :loading="isDeleting && isDeleting_id == index"
                                                      v-bind="attrs" v-on="on" 
                                                      rounded small icon text @click="DeleteUpload(index)"> <v-icon>mdi-close</v-icon></v-btn>
                                                  </template>
                                                  <span>Delete</span>
                                                </v-tooltip>
                                            </v-list-item-action>
                                         </v-list-item>
                                      </v-list>
                                  </v-col>
                                </v-row>
                     
                          </v-col>
                        
                           <v-col v-if="classworkDetails.publish == null" class="ma-0 pa-0 mb-4 " cols="12" >
                            <v-menu max-width="250" v-if="isResubmit || (classworkDetails.status == 'Submitting' || classworkDetails.status == null)" transition="scale-transition" offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    block
                                    class="pl-12 pr-12 pb-3 pt-3"
                                    color="primary"
                                    dark
                                    :disabled="classworkDetails.availability == 1 && (format_date1(DateToday) < format_date1(classworkDetails.from_date))"
                                    outlined
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                  {{attrs.expanded}}
                                    Add <v-icon right>mdi-plus</v-icon>
                                  </v-btn>
                                </template>
                                <v-list nav dense>
                                  <v-list-item link  @click="UploadFile()">
                                        <v-icon left>mdi-cloud-upload-outline</v-icon> Upload File
                                  </v-list-item>
                                    <v-list-item link @click="AttachLink = !AttachLink" >
                                          <v-icon left>mdi-link-variant</v-icon>Attach Link
                                  </v-list-item>
                                </v-list>
                              </v-menu>
                          </v-col>

                           <v-col v-if="classworkDetails.availability == 0" class="ma-0 pa-0 mb-1 " cols="12" >
                              <v-btn
                              :disabled="classworkDetails.Submitted_Answers.length == 0 || classworkDetails.publish != null"
                              block
                               class="pl-12 pr-12 pb-3 pt-3"
                               :loading="IsSaving"
                                @click="classworkDetails.status == 'Submitted' && !isResubmit ? '' :SubmitClasswork()"  
                                :color="classworkDetails.status == 'Submitted' && !isResubmit  ? 'success': 'primary'">
                                <v-icon left v-if="classworkDetails.status == 'Submitted' && !isResubmit ">mdi-check</v-icon>
                                {{classworkDetails.status == 'Submitted' && !isResubmit ? 'Submitted' :'Submit Classwork'}}</v-btn>
                           
                          </v-col>

                           <v-col v-else class="ma-0 pa-0 mb-1 " cols="12" >

                             <v-row>
                                <v-col cols="12" v-if="format_date1(DateToday) >= format_date1(classworkDetails.from_date)">
                                    <v-btn
                                    :disabled="classworkDetails.Submitted_Answers.length == 0"
                                    block
                                    class="pl-12 pr-12 pb-3 pt-3"
                                    :loading="IsSaving"
                                      @click="classworkDetails.status == 'Submitted' && !isResubmit ? '' :SubmitClasswork()"  
                                      :color="classworkDetails.status == 'Submitted' && !isResubmit  ? 'success': 'primary'">
                                      <v-icon left v-if="classworkDetails.status == 'Submitted' && !isResubmit ">mdi-check</v-icon>
                                    {{classworkDetails.status == 'Submitted' && !isResubmit ? 'Submitted' :'Submit Classwork'}}</v-btn>
                               </v-col>

                               <v-col cols="12" v-else>
                                 <v-btn
                                    block
                         
                                    color="primary"
                                    disabled>
                                    Not Yet Available<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                                </v-btn>
                               </v-col>
                             </v-row>
                          </v-col>
                   </v-col>
                </v-row> 
          </v-card>
          <v-card v-if="$vuetify.breakpoint.mdAndUp || selected == 2" :class="$vuetify.breakpoint.mdAndUp ? 'mt-4' :''" outlined  :elevation="$vuetify.breakpoint.mdAndUp ? 1 : 0">
            <div class="pt-3 pl-4 pr-4 pb-2">
               <v-icon left>mdi-comment</v-icon>Private Comments
            </div>
            
            <v-divider></v-divider>
            <v-list :max-height="$vuetify.breakpoint.mdAndUp ? '350' : '450'" style="overflow-y:scroll;scrollbar-width: thin;"  class="mb-0 pb-0">
      
                <v-list-item class="mb-0 pb-0" v-for="(item, i) in classworkDetails.comments" :key="i">
                  <v-list-item-avatar>
                      <v-img 
                      :src="item.profile_pic == null || item.profile_pic == ''? 'https://ui-avatars.com/api/?background=random&color=fff&name=' +  item.name : item.profile_pic">
                      </v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                      <v-list-item-title v-html="item.name"></v-list-item-title>
                      <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle>
                  </v-list-item-content>
                   <v-list-item-action>
                     <!-- v-if="get_CurrentUser.id == item.u_id" -->
                      <v-menu offset-x >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on">
                                <v-icon small color="grey lighten-1">mdi-dots-vertical</v-icon>
                            </v-btn> 
                        </template>
                        <v-list dense nav>
                          <!--    <v-list-item >
                                <v-list-item-title><v-btn @click="UpdateComment = item.content,isEditing = true, idEditing_id = item.id" text>Edit</v-btn></v-list-item-title>
                                </v-list-item> -->
                            <v-list-item  @click="DeleteComment(item.id, i)">
                                <v-list-item-title>Remove</v-list-item-title>
                            </v-list-item>
                              <!--    <v-list-item>
                                <v-list-item-title><v-btn text>Hide</v-btn></v-list-item-title>
                            </v-list-item> -->
                        </v-list>
                        </v-menu>
                  </v-list-item-action>
                </v-list-item>
          
            </v-list>
             <v-divider></v-divider>
                  <v-list class="mb-0 pb-0 mt-0 pt-0">
                    <v-list-item class="mb-0 pb-0">
                      <v-list-item-avatar>
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
                        <v-btn :loading="isCommenting" @click="addComment(classworkDetails)" icon>
                          <v-icon  color="primary">mdi-send</v-icon>
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                </v-list>
          </v-card>
        </v-col>
         <v-col v-if="$vuetify.breakpoint.mdAndUp || selected == 0" :class="!$vuetify.breakpoint.mdAndUp ? 'mt-0 pl-0 pt-0' : 'pt-0 pl-5'" cols="12" md="8" lg="8" xl="8" >
          <v-card :outlined="$vuetify.breakpoint.mdAndUp" :elevation="$vuetify.breakpoint.mdAndUp ? 1 : 0" :class="$vuetify.breakpoint.mdAndUp ? 'pa-5' : 'pa-1'">
                <v-row class="mb-0 pb-0">
                    <v-col cols="12" md="12" class="ma-0">
                            <v-row >
                                <v-col cols="12" class="pr-7">
                                    <div class="d-flex flex-row justify-space-between">
                                    <v-btn
                                    class="mt-3 ml-5"
                                    fab
                                    dark
                                    small
                                    color="primary"
                                    >
                                    <v-icon>
                                    mdi-book-open-variant
                                    </v-icon>
                                    </v-btn>
                                    <div
                                    class="float-right mt-3"
                                    fab
                                    >
                                    <div class="text-md-h5"> <v-icon large color="primary">mdi-book-clock-outline</v-icon></div>
                                    <div class="caption ml-2">Due {{ classworkDetails.availability ? format_date(classworkDetails.to_date) : 'always Available'}}</div>  
                                    </div>
                                </div>
                                </v-col>

                            <v-col cols="12" class="pl-7 pr-5">
                                <div class="font-weight-medium text-sm-body-2 text-md-h6 text-xl-h5">{{classworkDetails.title}}</div>
                                
                                    <div class="pt-2 d-flex flex-row ">
                                       
                                        <div class="font-weight-bold">{{classworkDetails.points}} Points</div>
                                    </div>
                                <v-divider></v-divider>
                            </v-col>

                                <v-col cols="12" class="pl-7 pr-5">
                                    <span class="text-sm-body-2 " v-html="classworkDetails.instruction"></span>
                                </v-col>
                                <v-col v-if="classworkDetails.rubrics.length != 0" cols="12" class=" pb-5 pl-4 pr-4">
                                  <div  class="overline">Rubrics</div>
                                  <v-list>
                                      <v-list-item v-for="(item, index) in classworkDetails.rubrics" :key="index">
                                          <v-list-item-avatar tile>
                                              <div class="font-weight-bold">{{item.points}}%</div>
                                          </v-list-item-avatar>
                                          <v-list-item-content>
                                            <v-list-item-title class="font-weight-medium">{{item.criteria_name}}</v-list-item-title>
                                            <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
                                          </v-list-item-content>
                                      </v-list-item>

                                  </v-list>
                                </v-col>
                                 <v-col v-if="classworkDetails.attachment != null" cols="12" class=" pb-5 pl-4 pr-4">
                                   <div class="overline">Attachments</div>
                                   <v-list dense class="ma-0 pa-0">
                                        <v-list-item v-for="(item, i) in classworkDetails.attachment" :key="i" class="ma-0 pa-0">
                                            <v-list-item-avatar >
                                                    <v-icon large
                                                    :color="CheckFileIconColor(item.extension)">
                                                    {{CheckFileIcon(item.extension)}}
                                                    </v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content >
                                                <v-hover v-slot="{ hover }">
                                                <v-list-item-title :class="hover ? 'blue--text' : ''" style="cursor:pointer" @click="DownLoadFile(item.attachment, item.extension)">{{item.name}}</v-list-item-title>
                                                </v-hover>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>   
                    </v-col>
                </v-row>
          </v-card>
               
           
        </v-col>
      
    </v-row>

    <v-bottom-navigation app grow
      v-if="!$vuetify.breakpoint.mdAndUp "
        :value="selected"
        color="primary" >
        <v-btn @click="selected = 0">
            <span>Details</span>
            <v-icon>mdi-book-information-variant</v-icon>
        </v-btn>
         <v-btn @click="selected = 1">
            <span>Submission</span>
            <v-icon>mdi-playlist-edit</v-icon>
        </v-btn>
        <v-btn @click="selected = 2">
            <span>Comment</span>
            <v-icon>mdi-comment</v-icon>
        </v-btn>
  </v-bottom-navigation>
</div>          
</template>

<script>
const attachlinkDiaglog = () => import('./attachLinkDialog')

import moment from 'moment-timezone';

import {mapGetters, mapActions } from "vuex";
export default {
    props:['classworkDetails'],
    components:{
      attachlinkDiaglog,
  
    },
    data(){
        return{
            AttachLink: false,
            FileList:[],
            file: [],
            fileSize:null,
            dragging: false,
            link: "test12",
            myClasssworkStatus:[],
            uploadPercentage: 0,
            isUploading: [],
            tempId: this.classworkDetails.Sub_id,
            isResubmit: false,
            isloading: true,
            fileIndex:null,
            tempFile: null,
            isUpIndex: null,
            comment: null,
            isCommenting: false,
            linkName: null,
            linkFile:null,
            IsSaving: false,
            isDeleting: false,
            isDeleting_id: null,
            isUploadSaving: false,
            isUploaded: false,
            valid: true,
            linkRules: [
                (value) => !!value || "Required.",
                (value) => this.isURL(value) || "URL is not valid",
              ],
            linkNameRule: [
                (value) => !!value || "Required.",
              ],
            DateToday: new Date(),
            CheckeFileExtention: null,
            fileType:['pdf', 'txt', 'docx', 'doc', 'jpg', 'jpeg' ,'gif','svg','png', 'bmp', 'link'],
            extensionIcon:['mdi-file-pdf', 'mdi-note-text-outline', 'mdi-file-word', 'mdi-file-link',  'mdi-image'],
            acceptedFileType:['xlsx', 'xls','jpg','jpeg','gif','svg','png','bmp','doc','docx','ppt', 'pptx','pdf','text'],
            selected: 0,
            ScrollPosistion: 0,
            TempFile: "",
        }
    },
     computed: {
       ...mapGetters(['get_CurrentUser','statusDetails']),
        extension() {
            return (this.tempFile) ? this.tempFile.name.split('.').pop() : '';
        },
        Checkextension() {
            return (this.CheckeFileExtention) ? this.CheckeFileExtention.name.split('.').pop() : '';
        },
         Fileextension() {
             let attach = this.classworkDetails.attachment;
            return attach.split('.').pop();
        },
         SubmittedFilextension() {
             let attach = this.classworkDetails.Submitted_Answers[0].name;
            return attach.split('.').pop();
        }
    },
    methods:{
      ...mapActions(['checkClassworkStatus']),
       handleScroll(event) {
          this.ScrollPosistion = window.scrollY;
      },
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
      format_date1(value) {
            if (value) {
                //return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
                return moment(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            }
        },
      validate () {
        if(this.$refs.form.validate()){
          this.scrapeDocID();
        }
        
      },

      isURL(str) {
        let url;

        try {
          url = new URL(str);
        } catch (_) {
          return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
      },
      OpenFile(file){
        window.open(file,'_blank');
      },
      scrapeDocID() {
              let path = this.linkFile;
              this.classworkDetails.Submitted_Answers.push({ name: this.linkName, fileSize: '', fileExte: 'link', link: path});
              this.isUpIndex = this.classworkDetails.Submitted_Answers.length;
              this.AttachLink = !this.AttachLink;
              this.AddLinkInSubmittedAnswer();

          },
          AddLinkInSubmittedAnswer(){
              
              let index = this.classworkDetails.Submitted_Answers.length-1;
              let sub_id = this.tempId == null ? 'empty' : this.tempId;
              let fd = new FormData;
              fd.append('Submission_id', sub_id);
              fd.append('id', this.classworkDetails.id);
              fd.append('class_classwork_id', this.classworkDetails.class_classwork_id);
              fd.append('type', this.classworkDetails.type);
              fd.append('fileName', this.classworkDetails.Submitted_Answers[index].name);
              fd.append('fileSize', this.classworkDetails.Submitted_Answers[index].fileSize);
              fd.append('fileExte', this.classworkDetails.Submitted_Answers[index].fileExte);
              fd.append('file', this.classworkDetails.Submitted_Answers[index].link);
              axios.post('/api/student/linkAndstatus', fd)
              .then(res=>{
                    
                    this.AttachLink = false;
                    this.linkName = null;
                    this.linkFile = null;
                    this.tempId = res.data;
                    this.classworkDetails.status = "Submitting";
              })
          },
        UploadFile(){
          ////console.log('test123');
          //this.$refs.UploadAttachFile.click();
          this.$refs.UploadAttachFile.$refs.input.click()
        },
         UploadMoreFile(){
           //console.log('test');
           if(this.file.length <= 4){
               this.$refs.AttAchMoreFile.click();
           }
           else{

           }

        },
         format_date(value) {
            if (value) {
                /* return moment(String(value)).format('dddd, h:mm a') */
                return moment(String(value)).tz("Asia/Manila").format('dddd, h:mm a');
            }
        },
        DownLoadFile(file, extension){
            let link ;
          if(extension == 'docx'){
            link = 'https://view.officeapps.live.com/op/view.aspx?src='+file;
          }
          else{
              link = file;
          }
          window.open(link,'_blank');
        },
        onChange(file) {
        
            /* //console.log(this.FileList.length);
            if(this.FileList.length > 1){
              let count = 0;
               this.FileList.forEach(item => {
                  if(this.FileList[this.FileList.length-1].name == item.name){
                    count++;
                  }
              });
              this.FileList[this.FileList.length-1].name = count != 0 ? this.FileList[this.FileList.length-1].name+'('+count+')' : this.FileList[this.FileList.length-1].name;
            } */
            let fileData = this.FileList[this.FileList.length-1];
            this.CheckeFileExtention = fileData;

            /* b */
            let Checker = false;
            this.acceptedFileType.forEach(item => {
                if(this.Checkextension == item){
                  Checker = true;
                  return;
                }
            });
            if(Checker == true){
               if(fileData.size <= 10000000){
                    this.createFile(fileData);
                }else{
                  this.toastError('Your file is to big, maximum file size is 10mb only!');
                }
            }
            else{
              this.toastError('This file format is not yet supported for upload!');
            }
              
        },
        createFile(file) {
              
              let IndexFile;
              IndexFile = this.classworkDetails.Submitted_Answers.length;
              this.isUploading[IndexFile] = true;
              this.fileIndex = IndexFile;
              this.tempFile = file;
             
              let tempSize = file.size;
              if(tempSize > 1000000){
                  let kbsize = tempSize * 0.001;
                  let mbsize = kbsize * 0.001;
                  let finalSize = parseInt(mbsize);
                  this.fileSize = finalSize+'mb';
              }
              else{
                  let sizeFile = tempSize* 0.001;
                  let finalSize = parseInt(sizeFile);
                  this.fileSize =finalSize+'kb';
              }
             
               
                this.isUpIndex = this.classworkDetails.Submitted_Answers.length;
                this.classworkDetails.Submitted_Answers.push({ name: this.tempFile.name, fileSize: this.fileSize, fileExte: this.extension, link: '', file: this.tempFile});
                this.fileIndex = this.file.length;
                this.isUploadSaving = true;
                this.UpdateSubmission(this.classworkDetails.Submitted_Answers.length-1);
            },
            removeFile(index) {
              this.isDeleting_id = index;
              this.isDeleting = true;
               axios.put('/api/submission/file-remove/'+this.tempId,{Fileindex: index}).then(res=>{
                  this.uploadPercentage = 0;
                   this.file.splice(index, 1); 
                   this.tempId = null;
                   this.isUploading[index] = false;
                   this.isDeleting = false;
                  this.isDeleting_id = null;
              })

            },
            test(){
              let data = '<iframe class="ql-video" frameborder="0" allowfullscreen="true" src="'+this.link+'"></iframe><div><br></div>'
              ////console.log(data);
            },
           /*  async checkStatus(type){
              axios.get('/api/submission/check-sbj/'+this.classworkDetails.id)
              .then(res=>{
                  this.myClasssworkStatus = res.data;
                  this.tempId = res.data.Sub_id;
                  if(type != 'submit'){
                     this.isloading = !this.isloading;
                  }
              })
          }, */
           checkStatus(type){
            let data = {};
            data.id = this.$route.query.clwk;
            data.type = this.classworkDetails.type;
            this.$store.dispatch('checkClassworkStatus', data)
            .then(()=>{
                this.myClasssworkStatus = this.statusDetails;
                this.tempId = this.statusDetails.Sub_id;
                if(type != 'submit'){
                  this.isloading = !this.isloading;
                
                }
            })

           

        },
          UpdateSubmission(index){

              let sub_id = this.tempId == null ? 'empty' : this.tempId;
              let fd = new FormData;
              fd.append('Submission_id', sub_id);
              fd.append('id', this.classworkDetails.id);
              fd.append('class_classwork_id', this.classworkDetails.class_classwork_id);
              fd.append('type', this.classworkDetails.type);
              fd.append('fileName', this.classworkDetails.Submitted_Answers[index].name);
              fd.append('fileSize', this.classworkDetails.Submitted_Answers[index].fileSize);
              fd.append('fileExte', this.classworkDetails.Submitted_Answers[index].fileExte);
              fd.append('file', this.classworkDetails.Submitted_Answers[index].file);
               axios.post('/api/student/update-status', fd,{
                 onUploadProgress: (progressEvent)=>{
                   const total = progressEvent.total;
                   const totalLength = progressEvent.lengthComputable ? total : null;
                   if(totalLength != null){
                     this.uploadPercentage = Math.round((progressEvent.loaded*100)/totalLength);
                   }
                 }
               })
              .then(res=>{
                 /* if(this.classworkDetails.Submitted_Answers.length == 0){
                    this.file[this.isUpIndex].link = res.data.link;
                }
                else{ */
                    this.classworkDetails.Submitted_Answers[this.isUpIndex].link = res.data.link;
                //}
                this.tempId = this.tempId == null ? res.data.id : this.tempId ;
                this.isUploadSaving = false;
                this.isUpIndex = null;
                 this.classworkDetails.status = "Submitting";
              })
          },
          DeleteUpload(index){
              this.isDeleting_id = index;
              this.isDeleting = true;
              let type = 'submit';
              axios.put('/api/submission/file-remove/'+this.tempId,{Fileindex: index}).then(res=>{
                  this.classworkDetails.Submitted_Answers.splice(index, 1);
                  if(this.FileList.length != 0){
                    this.FileList.splice(index, 1);
                  }
                  this.uploadPercentage = 0;
                  this.isUploading[index] = false;
                  this.isDeleting = false;
                  this.isDeleting_id = null;
              })
          },
          async SubmitClasswork(){
            this.IsSaving = true;
            let type = 'submit';
            axios.put('/api/student/submit-classwork/'+this.tempId).then(res=>{
              if(res.status == 200){
                //this.checkStatus(type);
                this.classworkDetails.status = 'Submitted';
                this.IsSaving = false;
                this.isResubmit = false;
              }
            })
          },
          async addComment(details){
              let data = {};
              this.isCommenting = true;
              data.classwork_id = details.id;
              data.to_user = details.user_id;
              data.type = 'Private';
              data.course_id = this.$route.params.id;
              data.comment = this.comment;
              axios.post('/api/post/classwork/comment/insert', data)
              .then((res)=>{
                ////console.log(res.data);
                  if(res.status == 200 ){
                    this.classworkDetails.comments.push({
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
          async DeleteComment(id, index){
              axios.delete('/api/post/classwork/comment/delete/'+id)
              .then(res=>{
                  if(res.data.success == true){
                      this.classworkDetails.comments.splice(index, 1);
                      
                  }
              })
          },

         async MarkAsSubmitting(id){
           axios.put('/api/student/markAsSubmitting/'+id)
           .then(()=>{

           })
         },
         clickResubmit(){
           if(!this.isResubmit){
             this.MarkAsSubmitting(this.classworkDetails.Sub_id)
             this.isResubmit = !this.isResubmit;
           }
           else{
             this.SubmitClasswork()
           }
           
         }
    },
    async created(){
      //this.checkStatus();
     


    },
    mounted(){
      this.isloading = !this.isloading;
       window.addEventListener('scroll', this.handleScroll);
    },
  
     destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
 
    
}
</script>

<style >
  span img{
        max-width: 100% !important;
        max-height: 20rem !important;
    }
    .dropZone {
  width: 100%;
  height: 7rem;
  position: relative;
  border: 2px dashed #eee;
  border-radius: .3rem;
}

/* .dropZone:hover {
  border: 1px dashed #2196F3;
} */

/* .dropZone:hover .dropZone-title {
  color: #2196F3;
} */

.dropZone-info {
  color: #A8A8A8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.dropZone-title {
  color: #787878;
}

.dropZone input {
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.dropZone-upload-limit-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.dropZone-over {
  background: #E0E0E0;
  opacity: 0.8;
}

.dropZone-uploaded {
  padding-top: 4rem;
  height: auto;
  position: relative;
 
 
}

.dropZone-uploaded-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #A8A8A8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}
.filePreview{
  width: 100%;
}
.removeFile {
  width: 200px;
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