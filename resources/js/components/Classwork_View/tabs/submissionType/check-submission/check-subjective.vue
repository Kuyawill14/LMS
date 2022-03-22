<template>



      <div >

          <v-dialog v-model="dialog" persistent max-width="400">
            <resetConfirmation
            v-on:toggleCancelDialog="dialog = !dialog"
            v-on:toggleconfirm="ResetSubmission()"
            :ViewDetails="CheckData"
            v-if="dialog"></resetConfirmation>
        </v-dialog>

        <v-dialog v-model="AllowResubmitDialog" persistent max-width="400">
            <v-card class="pa-2">
                <v-card-title class="text-h5 mb-3">
                Allow Resubmit
                </v-card-title>
                <v-card-text class="font-weight-bold">
                    <div class="subtitle-1 " style="line-height:1.1">
                        Clicking confirm will allow <span class="font-weight-bold">{{CheckData.firstName+' '+CheckData.lastName}}</span> to make new submission for this classwork?</div>
                    </v-card-text>
                <v-card-actions >
                <v-spacer></v-spacer>
                <v-btn text @click="AllowResubmitDialog = false">
                    Cancel
                </v-btn>
                <v-btn color="primary"  text @click="MarkAsSubmitting(CheckData.id)">
                    Confirm
                </v-btn>
                </v-card-actions>
            </v-card>
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
                                                <v-btn  @click="CheckBeforeClose()" small dark color="red" rounded >
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
                                        <v-col cols="12" class="text-center pl-5 pr-5" >
                                            <v-list-item-subtitle style="font-size: 15px">
                                                {{CheckDataSection}}
                                            </v-list-item-subtitle>
                                        </v-col>
                                        <v-col class="ma-0 pa-0">
                                             <v-row class="mb-0 pb-0">
                                                    <v-col cols="12" class="mb-0 pb-0">
                                                        <div class="d-flex mb-2 ">
                                                    
                                                             <v-tooltip top>
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-btn v-bind="attrs" v-on="on" :disabled="SubmittedLength == 1 || currentIndex == 0" icon @click="PrevStudent()">
                                                                        <v-icon>mdi-chevron-left</v-icon>
                                                                    </v-btn>
                                                                </template>
                                                                <span>Previous Student</span>
                                                            </v-tooltip>
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

                                                           

                                                             <v-tooltip top>
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <v-btn v-bind="attrs" v-on="on" :disabled="currentIndex == SubmittedLength-1" icon @click="NextStudent()">
                                                                    <v-icon>mdi-chevron-right</v-icon>
                                                                </v-btn>
                                                            </template>
                                                            <span>Next Student</span>
                                                        </v-tooltip>
                                                        </div>
                                                        <v-divider></v-divider>
                                                    </v-col>
                                                </v-row>
                                                <div>
                                                    <v-alert v-model="info" type="info" class="mb-0 mt-0" dense  dismissible>
                                                       To grade students, just enter the score and press the <span style="font-size: 20px" class="font-weight-bold">Enter</span> key to save and proceed to the next student.
                                                    </v-alert>
                                                </div>
                                                <v-list class="ma-0 pa-0">
                                                    <v-list-item  class="ma-0 pa-0">
                                                        <v-list-item-avatar color="secondary">
                                                            <v-img alt="Profile"
                                                                :src="CheckData.profile_pic == null || CheckData.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + (CheckData.firstName+' '+CheckData.lastName) : CheckData.profile_pic">
                                                            </v-img>
                                                        </v-list-item-avatar>
                                                    
                                                        <v-list-item-content>
                                                            <v-list-item-title class="font-weight-medium">{{CheckData.firstName +' '+CheckData.lastName}}</v-list-item-title>
                                                            <v-list-item-subtitle v-if="CheckData.Submitted_Answers != null && CheckData.graded == 0" :class="CheckData.status == 'Submitted' ? 'success--text' : ''" > {{CheckData.status == 'Submitted' ? 'Submitted: '+format_date(CheckData.submitted_at) : CheckData.status == 'Submitting' ? 'Submitting...' : ''}}</v-list-item-subtitle>
                                                             <v-list-item-subtitle v-if="CheckData.Submitted_Answers != null && CheckData.graded == 1" class="success--text" ><v-icon  small color="success">mdi-check</v-icon> Graded </v-list-item-subtitle>
                                                        </v-list-item-content>
                                                       <!--  @keyup="validate" -->
                                                        <v-list-item-action style="max-width:250px !important"  class="mt-4">
                                                            <v-form style="width:160px !important" @submit.prevent="validate()" ref="pointsform" v-model="valid" lazy-validation>
                                                                <v-text-field rounded
                                                                @keyup="isPointChange = true"
                                                                @focus="CheckData.points = CheckData.graded == 1 ? CheckData.points  : CheckData.points == null"
                                                                :hide-details="valid"
                                                                :loading="isSavingScore" 
                                                                :rules="pointsRules"
                                                                v-model="CheckData.points" 
                                                                dense outlined label="Score" type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points"  min="0"></v-text-field>
                                                            </v-form>
                                                        </v-list-item-action>
                                                    </v-list-item>
                                            </v-list>
                                            <v-divider></v-divider>
                                        </v-col>
                                        <v-col   cols="12" class="ma-0 pa-0 pb-4 pt-3 d-flex">                   
                                            <v-tooltip color="green" max-width="350" bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn v-bind="attrs" v-on="on" rounded dark small  v-if="CheckData.status == 'Submitted'"
                                                        @click="AllowResubmitDialog = true" color="green" ><v-icon left>mdi-file-document-edit-outline</v-icon> Allow Resubmit
                                                    </v-btn>
                                                </template>
                                                <span>Allow Resubmit<br>
                                                    Student will be mark as submitting and will able to add and change attachment to his/her submission.
                                                </span>
                                            </v-tooltip>

                                             <v-tooltip color="info" max-width="350" bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn block v-bind="attrs" v-on="on" rounded dark small  v-if="CheckData.status == null && CheckData.availability == 1 
                                                        && (CheckFormatDue(DateToday) > CheckFormatDue(CheckData.to_date)) && (CheckData.allow_resubmit == 0 || CheckData.allow_resubmit == null)"
                                                            @click="AllowResubmitDialog = true" color="info" ><v-icon left>mdi-file-document-edit-outline</v-icon> Allow to make Submission
                                                        </v-btn>
                                                    </template>
                                                    <span>Allow Submission<br>
                                                        This student will able to make submission even if the due of classwork is already past.
                                                    </span>
                                                </v-tooltip>

                                            <v-spacer></v-spacer>
                                            <v-tooltip color="red"  max-width="350" bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn v-bind="attrs" v-on="on" rounded dark small  v-if="CheckData.status != null && CheckData.status != '' && CheckData.status != 'Submitting'"
                                                    @click="dialog = !dialog" color="red" ><v-icon left>mdi-restart</v-icon> Reset Submission</v-btn>
                                                </template>
                                                <span>Reset Submission<br>
                                                    Note: You can't undo this once you've reset the student submission
                                                    all submitted answer of this student will be remove.
                                                </span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-row v-if="isLoaded" >
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
                                                            <v-list-item-action v-if="item.fileExte != 'type_answer'">
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
                                            <v-list-item-icon tile>
                                                <div class="font-weight-bold">{{item.points}}%</div>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title class="font-weight-medium">
                                                    {{item.criteria_name}}
                                                </v-list-item-title>
                                                <div>
                                                    <p>{{item.description}}</p>
                                                </div>
                                            </v-list-item-content>
                                                <v-list-item-action style="width:40% !important" >
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
                                    <v-list v-if="isLoaded" max-height="350" style="overflow-y:scroll;scrollbar-width: thin;" class="mb-0 pb-0">
                            
                                        <v-list-item class="mb-0 pb-0" v-for="(item, i) in CheckData.comments" :key="i">
                                        <v-list-item-avatar>
                                            <v-img 
                                            :src="item.profile_pic == null || item.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' +  item.name : item.profile_pic">
                                            </v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                           <div v-if="isUpdatingComment && isUpdatingComment_id == item.id">
                                                <v-list-item-title class="mb-2" v-html="item.name"></v-list-item-title>
                                                <editor :options="options" class="CommentEditor"  placeholder="Comment" v-model="item.content"  theme="bubble" ></editor>
                                                <div class="d-flex justify-end mt-2">
                                                
                                                    <v-btn small @click="UpdateComment(item.content, item.id)" dark color="success" class="mr-2">update</v-btn>
                                                    <v-btn small dark @click="isUpdatingComment = false, isUpdatingComment_id = null, item.content = isUpdatingComment_old_data" color="red">Cancel</v-btn>
                                                </div>
                                            </div>

                                            <v-alert v-else  color="#F5F5F5" class="rounded-xl mt-0 mb-0 pb-0">
                                                <v-list-item-title> 
                                                    <div class="d-flex justify-space-between">
                                                        <div :class="item.u_id == get_CurrentUser.id ? 'mb-0 pb-0 pt-2' : 'pt-2 pb-2'" style="max-width:90%">{{item.name}}</div>
                                                        <div >
                                                            <v-menu offset-x >
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-btn icon v-bind="attrs" v-on="on">
                                                                        <v-icon dark small >mdi-dots-vertical</v-icon>
                                                                    </v-btn> 
                                                                </template>
                                                                <v-list dense nav>
                                                                    <v-list-item  @click="isUpdatingComment = true, isUpdatingComment_id = item.id, isUpdatingComment_old_data = item.content" >
                                                                        <v-list-item-title>Edit</v-list-item-title>
                                                                    </v-list-item>
                                                                    <v-list-item  @click="DeleteComment(item.id, i)">
                                                                        <v-list-item-title>Remove</v-list-item-title>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-menu>
                                                        </div>
                                                    </div>
                                                    
                                                </v-list-item-title>
                                                <v-list-item-subtitle class="mb-3">{{format_date(item.comment_date)}}</v-list-item-subtitle>
                                                <div class="ml-2">
                                                    <span class="commentContent" v-html="item.content"></span>
                                                </div>
                                            </v-alert>
                                        </v-list-item-content>
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
                                                <editor :options="options" class="CommentEditor"   placeholder="Comment" 
                                                    v-model="comment"  theme="bubble" ></editor>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                         

                                             <v-tooltip  max-width="350" top>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn v-bind="attrs" v-on="on" :loading="isCommenting" @click="addComment(CheckData)" icon>
                                                        <v-icon  color="primary">mdi-send</v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Add Comment
                                                </span>
                                            </v-tooltip>
                                        </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                            </v-container>
                        </v-col>
                            <v-col v-if="isLoaded" cols="12" md="8" lg="8" class="pt-1">
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
                                        

                                            <iframe v-if="OpenFileExtension == 'docx' || OpenFileExtension == 'doc'" title="google drive viewer" id="pdf-iframe" class="holds-the-iframe"
                                            :src="'https://view.officeapps.live.com/op/embed.aspx?src='+path"
                                         
                                            style="position: absolute; top: 0px; left: 0px; width: 100% !important; height: 100% !important;"></iframe>


                                            <pdfviewer  style="position: absolute; top: 0px; left: 0px; width: 100% !important; height: 100% !important;"
                                            v-else-if="OpenFileExtension == 'pdf'" 
                                            :pdf_file="path"/>

                                            <iframe v-else title="google pdf viewer" 
                                            :src="'https://docs.google.com/viewer?embedded=true&amp;url=' + path" 
                                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                            style="position: absolute; top: 0px; left: 0px; width: 100% !important; height: 100% !important;"></iframe>
                                        </div> 
                    
                                        <div v-if="!isOpening && OpenFileType == 'link'">
                                            <iframe title="Link" 
                                            :src="path" 
                                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                            style="position: absolute; top: 0px; left: 0px; width: 100% !important; height: 100% !important;"></iframe>
                                        </div> 
                                        
                                        <div class="pa-2" style="max-width:100%;max-height:80vh;overflow-y:scroll" v-if="!isOpening && OpenFileType == 'type_answer'">
                                            <span v-html="path"></span>
                                        </div>

                                        <div v-if="!isOpening && OpenFileType == 'media'" >
                                                
                
                                            <div  style="height:85vh" class="images" v-viewer="{movable: true,inline: true, 
                                            navbar: false, title: false}">
                                                <img style="max-width:100%;max-height:70vh" v-for="src in images" :src="src" :key="src">
                                            </div>
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
           

                <v-dialog v-model="nextConfirmDialog" persistent max-width="350">
                    <v-card>
                        <v-card-title class="text-h5">
                        Save Score
                        </v-card-title>
                        <v-card-text>You have change's the score of the student, do you want to go to next studet and save the score?</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                        <v-btn  color="secondary" dark @click="CheckData.points = checkDataOldPoints, isPointChange = false,  nextConfirmDialog = false, NextStudent()">
                            No
                        </v-btn>
                        <v-btn color="green darken-1" dark  @click="validate()">
                            Yes
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                 <v-dialog v-model="CloseConfirmDialog" persistent max-width="350">
                    <v-card>
                        <v-card-title class="text-h5">
                        Save Score
                        </v-card-title>
                        <v-card-text>You have change's the score of the student, do you want save before close?</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                        <v-btn  color="secondary" dark @click="CheckData.points = checkDataOldPoints, $emit('closeDialog'), isPointChange = false,  CloseConfirmDialog = false">
                            No
                        </v-btn>
                        <v-btn color="green darken-1" dark  @click="validate()">
                            Yes
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            
      </div>


</template>
<script>
import moment from 'moment-timezone';
import {mapGetters} from "vuex";
const resetConfirmation = () => import('../../dialogs/resetConfirmation')
const pdfviewer = () => import('./pdfviewer');
 

  export default {
    props:['CheckData','classworkDetails','SubmittedLength', 'currentIndex','CheckDataSection','Class_id'],
    components:{
        resetConfirmation,
        pdfviewer,
    },
    data () {
      return {
        isUpdatingComment: false,
        isUpdatingComment_id: null,
        isUpdatingComment_old_data: null,
        dialog: false,
        AllowResubmitDialog: false,
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
        OpenFileExtension: null,
        isOpening: true,
        SelectedNav: 0,
        isReloadRubrics: false,
         options:{
            modules: {
                'toolbar': [
                    ['bold', 'italic', 'underline', 'strike'],
            
                    [{ 'list': 'bullet' }],
                    ['image'],
                ],
            }
        },
        images: [],
         pointsRules:[
            v => !!v || 'Points is required',
            v => ( v && v >= 0 ) || "Points should be above or equal to 0",
        ],
        valid: true,
        info: true,
        rotation: 0,
        scale: 1,
        isLoaded: false,
        isPointChange: false,
        nextConfirmDialog: false,
        CloseConfirmDialog: false,
        checkDataOldPoints: null,
        DateToday: new Date()

      }
    },
    computed:{
        ...mapGetters(['get_CurrentUser']),
    },
    methods:{
        CheckFormatDue(value){
            if (value) {
                return moment(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            }
        },
        CheckBeforeClose(){
            if(this.isPointChange){
                this.CloseConfirmDialog = true;
            }else{
                this.$emit('closeDialog');
                this.CheckData.points = this.checkDataOldPoints;
            }
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
                else if(ext == 'type_answer'){
                    return 'mdi-format-text';
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
            else if(ext == 'type_answer'){
            return 'success';
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

            let path = link.replace('.cdn', '');
            window.open(path,'_blank');

            
        },
        validate() {
            if (this.$refs.pointsform.validate()) {
                //this.SaveScore(); 
                this.score = this.CheckData.points;
                this.isSavingScore = !this.isSavingScore;
                this.UpdateScore();
            }
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
            let studentDetails = {};
            studentDetails.user_id = this.CheckData.user_id;
            studentDetails.classwork_id = this.CheckData.classwork_id;
            studentDetails.class_id = this.CheckData.class_id;
            if(this.score <= this.classworkDetails.points && this.score >= 0){
                await axios.put('/api/submission/update-score/'+this.CheckData.id,{score: this.score, 
                data: this.CheckData.rubrics_score,
                details: studentDetails,
                })
                .then(res=>{
                    if(res.status == 200){
                        this.toastSuccess("Score Updated");
                        this.isSavingScore = !this.isSavingScore;
                        this.CheckData.id = res.data.submission_id;
                        this.$emit('UpdateSubmission', this.CheckData.user_id);
                        this.isPointChange = false;
                        
                        if(this.CloseConfirmDialog){
                            this.$emit('closeDialog');
                            this.CloseConfirmDialog = false;
                        }else{
                             if(this.currentIndex != this.SubmittedLength-1){
                                //this.validate();
                                this.nextConfirmDialog = false;
                                this.NextStudent();
                            }
                        }

                       
                    }
                })
            }
            else{
                this.isSavingScore = !this.isSavingScore;
                 this.toastError('The set points is invalid!');
            }
            
        },
        async MarkAsSubmitting(id){
          /* await axios.put('/api/teacher/allow_resubmit/'+id)
           .then(()=>{
               this.AllowResubmitDialog = false;
               this.$emit('markAsResubmit', this.CheckData.user_id);
           }) */

            let details = {};
                details.type = this.classworkDetails.type;
                details.classwork_id = this.classworkDetails.id;
                details.course_id = this.classworkDetails.course_id;
                details.user_id = this.CheckData.user_id;
                details.class_id = this.Class_id;

                await axios.put('/api/teacher/allow_resubmit/'+id, details)
                .then(()=>{
                    this.AllowResubmitDialog = false;
                    if(id != null){
                        this.CheckData.allow_resubmit = 1;
                        this.$emit('markAsResubmit', this.CheckData.user_id);
                        this.toastSuccess('Student allowed to resubmit');
                    }else{
                        this.CheckData.allow_resubmit = 1;
                        this.$emit('SubmissionReset', this.CheckData.id);
                        this.$store.dispatch('setCurrectClassworkSubmission',1)
                        this.toastSuccess('Student allowed to make submission');
                    }
                })
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
        show () {
            const viewer = this.$el.querySelector('.images').$viewer
            viewer.show()
        },
          OpenFile(extension, link){
              this.SelectedNav = 1;
              this.isOpening = true;
              if(extension == 'png' || extension == 'jpg' || extension == 'jpeg' || extension == 'bmp'){
                  this.OpenFileType = 'media';
                  this.OpenFileExtension = extension;
                  this.path = link.replace('.cdn', '');
                  this.images[0] = this.path;
                  //this.show();
                 setTimeout(() => (this.isOpening = false), 500);
              }
              else if(extension == 'link'){
                  this.OpenFileExtension = extension;
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
              else if(extension == 'type_answer'){
                  this.OpenFileType = 'type_answer';
                  this.path = link;
                  setTimeout(() => (this.isOpening = false), 500);
              }
              else{
                  this.OpenFileExtension = extension;
                  this.OpenFileType = 'document'
                  this.path = link.replace('.cdn', '');
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
                      profile_pic : res.data.profile_pic,
                      u_id : this.get_CurrentUser.user_id,
                    comment_date : new Date()

                    })
                    this.comment = '';
                  }
                  
              })
               this.isCommenting = false;
          },
          async DeleteComment(id, index){
              axios.delete('/api/post/classwork/comment/delete/'+id)
              .then(res=>{
                  if(res.data.success == true){
                      this.CheckData.comments.splice(index, 1);
                  }
              })
          },
           async UpdateComment(content, id){
              await axios.put('/api/post/comment/update/'+id,  {comment: content})
              .then(res=>{
                 this.isUpdatingComment = false;
                 this.isUpdatingComment_id = null;
                 this.isUpdatingComment_old_data = null;
              })
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
            await axios.put('/api/teacher/reset-sbj/'+this.CheckData.id, {files : this.CheckData.Submitted_Answers})
            .then(()=>{
                this.$emit('SubmissionReset', this.CheckData.id);
                this.$store.dispatch('setCurrectClassworkSubmission',1)
                this.dialog = false;
            })
        },
         async NextStudent(){

             if(!this.isPointChange){
                this.isLoaded = false;
                this.isReloadRubrics = true;
                this.path = null;
                this.$emit("nextStudent");
                setTimeout(() => (this.RegetSubmittedAnswer()),300);
             }else{
                 this.nextConfirmDialog = true;
                 //this.validate();
             }
            

           
          },
          async PrevStudent(){
              this.isLoaded = false;
            this.isReloadRubrics = true;
            this.path = null;
            this.$emit("prevStudent");
            setTimeout(() => (this.RegetSubmittedAnswer()),300);
          },
          rotateRight() {
                this.rotation += 90
                if (this.rotation % 180 == 0)this.scale = 1;
                else this.scale = 0.6;
                
            },
        rotateLeft() {
            this.rotation += 90
        },
        async getSubmittedAnswer(){
            await axios.get('/api/submission/submitted_answer/'+this.CheckData.id)
            .then((res)=>{
                this.CheckData.Submitted_Answers = res.data.submitted_answer.Submitted_Answers;
                this.CheckData.rubrics_score = res.data.submitted_answer.rubrics_score;
                this.CheckData.comments = res.data.comment;
                this.checkDataOldPoints = this.CheckData.points;
                this.isLoaded = true;
                this.checkRubrics();
                this.getFileExtension();
            })
        },
        async RegetSubmittedAnswer(){
            this.CheckData.Submitted_Answers = [];
            this.CheckData.rubrics_score = [];
            this.CheckData.comments = [];
            
            if(this.CheckData.status != null && this.CheckData.status != ''){
                await axios.get('/api/submission/submitted_answer/'+this.CheckData.id)
                .then((res)=>{
                    this.CheckData.Submitted_Answers = res.data.submitted_answer.Submitted_Answers;
                    this.CheckData.rubrics_score = res.data.submitted_answer.rubrics_score;
                    this.CheckData.comments = res.data.comment;
                    this.checkDataOldPoints = this.CheckData.points;
                    this.reRunRubrics();
                    this.isLoaded = true;
                    this.getFileExtension();
                })
            }else{
                this.reRunRubrics();
                this.isLoaded = true;
            }
        },
        async getFileExtension(){
            

            let path = this.CheckData.Submitted_Answers[0].link;
            let extension = this.CheckData.Submitted_Answers[0].fileExte;
             if(extension == 'png' || extension == 'jpg' || extension == 'jpeg' || extension == 'bmp'){
                 this.OpenFileExtension = extension;
                this.OpenFileType = 'media';
                  this.path = path;
                  this.isOpening = false
              }
               else if(extension == 'link'){
                  this.OpenFileType = 'link';
                  this.OpenFileExtension = extension;
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
              }else if(extension == 'type_answer'){
                 
                  this.OpenFileExtension = extension;
                  this.OpenFileType = 'type_answer';
                  this.path = path;
                setTimeout(() => (this.isOpening = false), 500);
              }
              else {
                this.OpenFileExtension = extension;
                this.OpenFileType = 'document'
                this.path = path;
                this.isOpening = false
              }
        }
       
    },
    beforeDestroy(){
        this.$emit('closeDialog');
    },
    created(){
        if(this.CheckData.status != null && this.CheckData.status != ''){
            this.getSubmittedAnswer();
            
        }
        
        this.$emit('isMounted');
        //setTimeout(() => (this.info = false), 5000);
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
.post-content  img{
        max-height: 15rem !important;
    }
.CommentEditor >  iframe{
    width: 100% !important;
height: 20rem !important;
}
.CommentEditor >  .ql-editor img{

    max-height: 25rem !important;
}
.CommentEditor >  .ql-container{
    max-height: 70rem;
}
</style>
<style>
    div.ql-tooltip{
        left: 0px !important;
        top: -10px !important;
    }
    div>.ql-tooltip-arrow{
        display: none !important;
    }
</style>

