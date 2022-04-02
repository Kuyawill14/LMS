<template>
    <div>



        <!-- <v-toolbar  dense shaped class="fixed-bar" floating color="primary"  >
        <v-btn dark @click="$emit('closeDialog')" icon>
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-toolbar> -->


        <v-dialog v-model="dialog" persistent max-width="400">
            <resetConfirmation v-on:toggleCancelDialog="dialog = !dialog" v-on:toggleconfirm="ResetSubmission()"
                :ViewDetails="ViewDetails" v-if="dialog"></resetConfirmation>
        </v-dialog>

        <v-dialog v-model="AllowResubmitDialog" persistent max-width="400">
            <v-card class="pa-2">
                <v-card-title class="text-h5 mb-3">
                Allow Resubmit
                </v-card-title>
                <v-card-text class="font-weight-bold">
                    <div class="subtitle-1 " style="line-height:1.1">
                        Clicking confirm will allow <span class="font-weight-bold">{{ViewDetails.firstName+' '+ViewDetails.lastName}}</span> to make new submission for this classwork?</div>
                    </v-card-text>
                <v-card-actions >
                <v-spacer></v-spacer>
                <v-btn text @click="AllowResubmitDialog = false">
                    Cancel
                </v-btn>
                <v-btn color="primary"  text @click="MarkAsSubmitting(ViewDetails.id)">
                    Confirm
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>



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
                                    Due:
                                    {{ ViewDetails.availability == 1 ? format_date(ViewDetails.to_date) : 'No due date'}}
                                </v-list-item-subtitle>

                            </v-list-item-content>
                            <v-list-item-action>
                                <v-list-item-action-text>
                                    <v-btn @click="$emit('closeDialog')" small dark color="red" rounded>
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
                            <v-card elevation="2" outlined class="pt-1 mt-1 pl-4 pr-4 pb-2">
                                <v-row class="mb-0 pb-0">
                                    <v-col cols="12" class="text-center pl-5 pr-5 mb-0 pb-0 mt-1" >
                                        <v-list-item-subtitle style="font-size: 15px">
                                            {{CheckDataSection}}
                                        </v-list-item-subtitle>
                                    </v-col>
                                    <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0">
                                        <div class="d-flex mb-2 ">

                                            

                                            <v-tooltip top>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn v-bind="attrs" v-on="on" :disabled="SubmittedLength == 1 || currentIndex == 0" icon
                                                        @click="PrevStudent()">
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
                                                     <v-btn v-bind="attrs" v-on="on" :disabled="currentIndex == SubmittedLength-1" icon
                                                        @click="NextStudent()">
                                                        <v-icon>mdi-chevron-right</v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Next Student</span>
                                            </v-tooltip>
                                        </div>
                                        <v-divider></v-divider>
                                    </v-col>
                                </v-row>

                                <v-list class="pa-0 ma-0">
                                    <v-list-item class="ma-0 pa-0">
                                        <v-list-item-avatar color="secondary">
                                            <v-img alt="Profile"
                                                :src="ViewDetails.profile_pic == null || ViewDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + ViewDetails.firstName +' '+ViewDetails.lastName : ViewDetails.profile_pic">
                                            </v-img>
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title class="font-weight-medium">
                                                {{ViewDetails.firstName +' '+ViewDetails.lastName }}</v-list-item-title>
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-list-item-subtitle v-bind="attrs" v-on="on"
                                                            v-if="ViewDetails.status != null && ViewDetails.status != ''&&  ViewDetails.status != 'Taking'">
                                                            Submitted: {{format_date(ViewDetails.updated_at)}}
                                                        </v-list-item-subtitle>
                                                    </template>
                                                    <span>Submitted: {{format_date(ViewDetails.updated_at)}}</span>
                                                </v-tooltip>
                                        </v-list-item-content>
                                        <v-list-item-action class="mt-8">
                                            <v-text-field readonly hide-details rounded :rules="pointsRules"
                                                v-if="ViewDetails.status == 'Submitted'" v-model="this.ViewDetails.points"
                                                dense outlined label="Score" type="number"
                                                :suffix="'/' +classworkDetails.points" :max="classworkDetails.points"
                                                min="0"></v-text-field>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>
                               <!--  <v-col cols="12" class="ma-0 pa-0 pb-4">

                                    <span class="font-weight-bold">Time Spent:
                                    </span><span>{{ViewDetails.timeSpent != null ? ViewDetails.timeSpent+' minutes': ''}}</span>
                                </v-col> -->
                               <!--  <v-col cols="12" class="ma-0 pa-0 pb-2 mt-1">
                                    <v-btn block text rounded v-if="ViewDetails.status != null"
                                        :loading="isReseting" @click="dialog = !dialog" color="primary">
                                        <v-icon left>mdi-restart</v-icon> Reset Submission
                                    </v-btn>
                                </v-col> -->

                                 <v-col  cols="12" class="ma-0 pa-0 pb-2 mt-1 d-flex">                   
                                    <v-tooltip color="green" max-width="350" bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" rounded dark small  v-if="ViewDetails.status == 'Submitted'"
                                                @click="AllowResubmitDialog = true" color="green" ><v-icon left>mdi-file-document-edit-outline</v-icon> Allow Retake
                                            </v-btn>
                                        </template>
                                        <span>Allow Retake<br>
                                            This student will able to take the quiz again.
                                        </span>
                                    </v-tooltip>

    
                                    <v-tooltip color="info" max-width="350" bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn block v-bind="attrs" v-on="on" rounded dark small  v-if="ViewDetails.status == null && ViewDetails.availability == 1 
                                            && (CheckFormatDue(DateToday) > CheckFormatDue(ViewDetails.to_date)) && (ViewDetails.allow_resubmit == 0 || ViewDetails.allow_resubmit == null)"
                                                @click="AllowResubmitDialog = true" color="info" ><v-icon left>mdi-file-document-edit-outline</v-icon> Allow to make Submission
                                            </v-btn>
                                        </template>
                                        <span>Allow Submission<br>
                                            This student will able to take the quiz even if the classwork is already due.
                                        </span>
                                    </v-tooltip>

                                    <v-tooltip color="success" max-width="350" bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn disabled style="cursor: crosshair" block v-bind="attrs" v-on="on" rounded  small  v-if="ViewDetails.allow_resubmit == 1"
                                                color="success" ><v-icon left>mdi-file-document-edit-outline</v-icon> Allowed for retake
                                            </v-btn>
                                        </template>
                                        <span>Allowed for retake<br>
                                            This student is allowed to retake the quiz.
                                        </span>
                                    </v-tooltip>
                                   
                                    <v-spacer></v-spacer>
                                    <v-tooltip color="red"  max-width="350" bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on"  rounded dark small v-if="ViewDetails.status != null"
                                                :loading="isReseting" @click="dialog = !dialog" color="red">
                                                <v-icon >mdi-restart</v-icon> Reset Submission
                                            </v-btn>
                                        </template>
                                        <span>Reset Submission<br>
                                            Note: You can't undo this once you've reset the student submission,
                                            the submitted answer of this student will be remove.
                                        </span>
                                    </v-tooltip>
                                </v-col>
                            </v-card>

                            <v-card class="mt-2 mb-1" elevation="2" outlined>
                                <div class="d-flex pt-3 pl-4 pr-6 pb-2">
                                    
                                    <span><v-icon left>mdi-comment</v-icon>Private Comments</span>
                                    <v-spacer></v-spacer>
                                   <!--  <span>
                                        <v-tooltip top>
                                        <template v-slot:activator="{ on, attrs }">
                                             <v-btn icon v-bind="attrs" v-on="on"  small>
                                                <v-icon>mdi-refresh</v-icon> 
                                            </v-btn>
                                        </template>
                                        <span>Refresh Comment</span>
                                        </v-tooltip>
                                    </span> -->
                                </div>
                                <v-divider></v-divider>
                                <v-list v-if="isLoaded" max-height="350" style="overflow-y:scroll;scrollbar-width: thin;"
                                    class="mb-0 pb-0">

                                    <v-list-item class="mb-0 pb-0" v-for="(item, i) in ViewDetails.comments" :key="i">
                                        <v-list-item-avatar color="secondary">
                                            <v-img
                                                :src="item.profile_pic == null || item.profile_pic == ''? 'https://ui-avatars.com/api/?background=random&color=fff&name=' +  item.name : item.profile_pic">
                                            </v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <div v-if="isUpdatingComment && isUpdatingComment_id == item.id">
                                                <v-list-item-title class="mb-2" v-html="item.name"></v-list-item-title>
                                                <editor :options="options" class="CommentEditor" placeholder="Comment"
                                                    v-model="item.content" theme="bubble"></editor>
                                                <div class="d-flex justify-end mt-2">

                                                    <v-btn small @click="UpdateComment(item.content, item.id)" dark
                                                        color="success" class="mr-2">update</v-btn>
                                                    <v-btn small dark
                                                        @click="isUpdatingComment = false, isUpdatingComment_id = null, item.content = isUpdatingComment_old_data"
                                                        color="red">Cancel</v-btn>
                                                </div>
                                            </div>

                                            <v-alert v-else color="#F5F5F5" class="rounded-xl mt-0 mb-0 pb-0">
                                                <v-list-item-title>
                                                    <div class="d-flex justify-space-between">
                                                        <div :class="item.u_id == get_CurrentUser.id ? 'mb-0 pb-0 pt-2' : 'pt-2 pb-2'"
                                                            style="max-width:90%">{{item.name}}</div>
                                                        <div >
                                                            <v-menu offset-x>
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-btn icon v-bind="attrs" v-on="on">
                                                                        <v-icon dark small>mdi-dots-vertical</v-icon>
                                                                    </v-btn>
                                                                </template>
                                                                <v-list dense nav>
                                                                    <v-list-item
                                                                        @click="isUpdatingComment = true, isUpdatingComment_id = item.id, isUpdatingComment_old_data = item.content">
                                                                        <v-list-item-title>Edit</v-list-item-title>
                                                                    </v-list-item>
                                                                    <v-list-item @click="DeleteComment(item.id, i)">
                                                                        <v-list-item-title>Remove</v-list-item-title>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-menu>
                                                        </div>
                                                    </div>

                                                </v-list-item-title>
                                                <v-list-item-subtitle class="mb-3">{{format_date(item.comment_date)}}
                                                </v-list-item-subtitle>
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
                                            <editor :options="options" class="CommentEditor" placeholder="Comment"
                                                v-model="comment" theme="bubble"></editor>
                                        </v-list-item-content>
                                        <v-list-item-action>

                                            <v-btn :loading="isCommenting" @click="addComment(ViewDetails)" icon>
                                                <v-icon color="primary">mdi-send</v-icon>
                                            </v-btn>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-container>
                    </v-col>
                    <v-col cols="12" md="8" lg="8" class="">

                        


                        <v-card outlined elevation="2" class=" pa-4 "
                            v-if="(ViewDetails.Submitted_Answers == null || ViewDetails.Submitted_Answers == '') && isLoaded">
                            <v-row class="mt-12 pt-12" justify="center" align-content="center">
                                <v-col cols="12" sm="8" md="4" class="text-center pb-12 mb-12">
                                    <v-icon style="font-size:7rem">
                                        mdi-notebook-remove-outline
                                    </v-icon>
                                    <h1> Empty Submission </h1>
                                    <p> This student did not take the classwork yet!</p>
                                    <v-btn @click="alertStudent()" :loading="isAlerting" color="primary">Alert Student
                                        <v-icon right>mdi-account-alert</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>

                        <v-card v-if="ViewDetails.status != null">
                            <v-tabs background-color="" center-active centered v-model="tab">
                                <v-tab>Answers</v-tab>
                                <v-tab @click="fetchStudentActivity">Activities</v-tab>

                            </v-tabs>
                        </v-card>
                        <v-tabs-items v-model="tab" class="mt-2">
                            <v-tab-item>
                                <v-card elevation="2" outlined class="pa-5 "
                                    v-if="ViewDetails.Submitted_Answers != null && ViewDetails.Submitted_Answers != '' && isLoaded">

                                   <!--  <div class="mt-0 pt-0 mb-3">
                                       <v-select hide-details v-model="selected_type" :items="Question_Type" label="Question Tyoe" outlined dense ></v-select> 
                                    </div> -->
                                    <div class="d-flex mb-2">
                                        <div class="d-flex">
                                            <v-menu offset-y max-height="600" style="overflow-y:scroll;">
                                               <!--  <template v-slot:activator="{ on, attrs }">
                                                    <v-btn icon dark v-bind="attrs" v-on="on">
                                                        <v-icon color="primary">mdi-format-list-numbered</v-icon>
                                                    </v-btn>
                                                </template> -->
                                                <template v-slot:activator="{ on : menu, attrs }">
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on: tooltip }">
                                                        <v-btn icon v-bind="attrs" v-on="{...tooltip, ...menu}" class="mb-2">
                                                        <v-icon color="primary">mdi-format-list-numbered</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Question List</span>
                                                </v-tooltip>
                                                </template>
                                                <v-list>
                                                    <v-list-item class="ma-0 pa-0"
                                                       
                                                        v-for="(item, index) in getAll_questions.Question" :key="index">
                                                        <v-list-item-title>
                                                            <v-btn
                                                                text rounded @click="questionIndex = index">
                                                                <v-icon :color="!Check[index]  ? '' : 'success'" left>
                                                                {{item.type != 'Matching type' ? !Check[index] ? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'}}
                                                                </v-icon>
                                                                {{index+1}}{{item.type == 'Matching type' ? ' Matching Type' : ' '+item.type}}
                                                            </v-btn>
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                            <div class="pl-1 mt-2">Question {{questionIndex+1}}</div>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <div>
                                           

                                             <v-tooltip top>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn v-bind="attrs" v-on="on"
                                                     :icon="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" :disabled="questionIndex == 0" @click="questionIndex--"
                                                        color="primary" 
                                                        :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'mr-3': 'mr-1'" outlined rounded>
                                                        <v-icon v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">mdi-chevron-left</v-icon>
                                                        <span v-else>Previous</span>
                                                    </v-btn>

                                                </template>
                                                <span>Previous Question</span>
                                            </v-tooltip>


                                          

                                            <v-tooltip top>
                                                <template v-slot:activator="{ on, attrs }">
                                                      <v-btn v-bind="attrs" v-on="on"
                                                      :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '' : 'pl-9 pr-9'"
                                                        :outlined="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                                                        :icon="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                                                            :disabled="questionIndex == getAll_questions.Question.length-1"
                                                            @click="questionIndex++" color="primary" rounded>
                                                            <v-icon v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">mdi-chevron-right</v-icon>
                                                            <span v-else>Next</span>
                                                        </v-btn>

                                                </template>
                                                <span>Next Question</span>
                                            </v-tooltip>
                                        </div>

                                    </div>

                                    <v-container ma-0 pa-0 v-for="(item, index) in getAll_questions.Question"  v-show="selected_type == 'All Type' || selected_type == item.type"
                                        :key="index">
                                        <v-row v-if="index === questionIndex">
                                            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                                                <v-list>
                                                    <v-list-item class="ma-0 pa-0">
                                                        <v-list-item-icon class="ma-0 pa-0">
                                                          <!--   <v-checkbox v-if="item.type != 'Matching type' && item.type != 'Essay'" hide-details
                                                                
                                                                class="mt-0 pt-0" color="success"
                                                                v-model="Check[index]">
                                                            </v-checkbox> -->

                                                            <div v-if="item.type != 'Matching type' && item.type != 'Essay'">
                                                                

                                                                <v-tooltip v-if="Check[index]"  top>
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                       <v-btn  icon v-bind="attrs" v-on="on"
                                                                        @click="Check[index] = false, UpdateScore(item.type ,item.id, Check[index], item.points, index,item.answer)">
                                                                            <v-icon color="success">mdi-checkbox-marked</v-icon> 
                                                                        </v-btn>
                                                                    </template>
                                                                    <span>Mark as Incorrect</span>
                                                                </v-tooltip>

                                                                <v-tooltip v-else top>
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                         <v-btn  icon v-bind="attrs" v-on="on"
                                                                            @click="Check[index] = true, UpdateScore(item.type ,item.id, Check[index], item.points, index,item.answer)">
                                                                                <v-icon color="red">mdi-close-box-outline</v-icon> 
                                                                            </v-btn>
                                                                    </template>
                                                                    <span>Mark as correct</span>
                                                                </v-tooltip>

                                                                
                                                            </div>

                                                            <div v-if="item.type == 'Essay'" class="mt-0 pt-0 pr-2 mb-0 pb-0">
                                                                <v-text-field 
                                                                @change="UpdateEssayScore(item.type ,item.id, Check[index], item.points, index,item.answer)"
                                                                style="width:120px !important" hide-details rounded :rules="pointsRules"
                                                                v-model="SubmittedAnswer[index].score"
                                                                    dense outlined label="Score" type="number"
                                                                    :suffix="'/' +item.points" 
                                                                    :max="item.points"
                                                                    min="0"></v-text-field>
                                                            </div>


                                                        </v-list-item-icon>
                                                        <v-list-item-content class="subtitle-1 ">
                                                            <div class="d-flex">
                                                                <div style="width:90%" v-html="item.question"
                                                                    class="post-content pl-1"></div>
                                                            </div>

                                                              <v-row v-if="item.attachments">
                                                                <v-col v-for="(attach, num) in item.attachments" :key="num"  cols="6" md="3">
                                                                    <v-img alt="Image" contain style="border:1px solid black" :src="attach.link" :height="$vuetify.breakpoint.mdAndUp ? '200' : '120'">
                                                                        <template v-slot:placeholder>
                                                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                                                <v-progress-circular
                                                                                    indeterminate
                                                                                    color="red">
                                                                                </v-progress-circular>
                                                                            </v-row>
                                                                        </template>
                                                                    </v-img>
                                                                </v-col>
                                                            </v-row>

                                                            

                                                        </v-list-item-content>
                                                        <v-list-item-action class="ma-0 pa-0">
                                                            <small
                                                                class="primary--text ">({{item.points+' points'}})</small>
                                                        </v-list-item-action>
                                                    </v-list-item>
                                                </v-list>
                                            </v-col>
                                            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0"
                                                v-if="item.type == 'Multiple Choice'">
                                                <div>
                                                    <v-list class="pl-6">
                                                        <v-list-item class="ma-0 pa-0"
                                                            v-for="(Ans, i) in getAll_questions.Answer[index].options"
                                                            :key="i">
                                                            <v-list-item-icon class="ma-0 pa-0 ">
                                                                <v-radio-group readonly v-if="item.isNew" hide-details :name="'option'+index"
                                                                    class="ma-0 pa-0 mt-1"
                                                                    v-model="SubmittedAnswer[index].Answer">
                                                                    <v-radio
                                                                        :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                                        hide-details color="primary" :key="index"
                                                                        :value="Ans.id">
                                                                    </v-radio>
                                                                </v-radio-group>

                                                                 <v-radio-group readonly v-else hide-details :name="'option'+index"
                                                                    class="ma-0 pa-0 mt-1"
                                                                    v-model="SubmittedAnswer[index].Answer">
                                                                    <v-radio
                                                                        :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                                        hide-details color="primary" :key="index"
                                                                        :value="Ans.Choice">
                                                                    </v-radio>
                                                                </v-radio-group>


                                                            </v-list-item-icon>
                                                            <v-list-item-content class="ma-0 pa-0">
                                                                <div style="line-height:1.4"
                                                                    class="Subtitle-1 ma-0 pa-0 d-flex">
                                                                    <span v-html="Ans.Choice"
                                                                        class="post-content"></span>
                                                                        <span v-if="item.isNew">
                                                                              <span class="caption primary--text ml-1"
                                                                                v-if="item.answer == Ans.id">(correct
                                                                                answer)</span>
                                                                        </span>
                                                                        <span v-else>
                                                                            <span class="caption primary--text ml-1"
                                                                            v-if="item.answer == Ans.Choice">(correct
                                                                            answer)</span>
                                                                        </span>
                                                                  
                                                                </div>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-list>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0"
                                                v-if="item.type == 'Identification'">
                                                <div>
                                                    <v-list class="pl-6">
                                                        <v-list-item class="ma-0 pa-0">
                                                            <v-list-item-content class="ma-0 pa-0 ">
                                                                <div>
                                                                    Correct Answer(s):
                                                                </div>
                                                                <div v-if="getAll_questions.Answer[index].options.length == 0"
                                                                    class=" ma-0 pa-0 d-flex pl-3 success--text">
                                                                    <span class="pr-2">&bull; </span>
                                                                    <span v-html="item.answer"
                                                                        class="post-content pa-0 ma-0"></span>
                                                                </div>
                                                                <div>
                                                                    <div v-for="(Ans, i) in getAll_questions.Answer[index].options"
                                                                        :key="i"
                                                                        class=" ma-0 pa-0 d-flex pl-3 success--text">
                                                                        <span class="pr-2">&bull; </span>
                                                                        <span v-html="Ans.Choice"
                                                                            class="post-content pa-0 ma-0"></span>
                                                                    </div>
                                                                </div>


                                                                <div class="primary--text">
                                                                    Student Answer:
                                                                </div>
                                                                <div style="line-height:1.4"
                                                                    class="Subtitle-1 ma-0 pa-0 d-flex pl-3 primary--text">
                                                                    <span class="pr-2">&bull; </span>
                                                                    <span v-html="SubmittedAnswer[index].Answer"
                                                                        class="post-content"></span>
                                                                    <span v-if="SubmittedAnswer[index].Answer == null"
                                                                        class="post-content"> N/A</span>
                                                                </div>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-list>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0"
                                                v-if="item.type == 'True or False'">
                                                <div>
                                                    <v-list class="pl-6">
                                                        <v-list-item class="ma-0 pa-0" v-for="(x, n) in inputCheck"
                                                            :key="n">
                                                            <v-list-item-icon class="ma-0 pa-0">
                                                                <v-radio-group hide-details :name="'option'+index"
                                                                    class="ma-0 pa-0 mt-1"
                                                                    v-model="SubmittedAnswer[index].Answer">
                                                                    <v-radio
                                                                        :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                                        color="primary" :key="index" name="Answer"
                                                                        :value="inputCheck[n]">
                                                                        ></v-radio>
                                                                </v-radio-group>
                                                            </v-list-item-icon>
                                                            <v-list-item-content class="ma-0 pa-0">
                                                                <div style="line-height:1.4"
                                                                    class="Subtitle-1 ma-0 pa-0 d-flex">

                                                                    <span v-html="TrueOrFalse[n]"></span>
                                                                    <span class="caption primary--text ml-1 "
                                                                        v-if="inputCheck[n] == item.answer">(correct
                                                                        answer)</span>
                                                                </div>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-list>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" class="mt-0 pt-0 mb-5 pb-0"
                                                v-if="item.type == 'Matching type'">
                                                <div class="pl-5">
                                                    <v-row no-gutters>
                                                        <v-col ma-0 pa-0 class="ma-0 pa-0" cols="12">
                                                            <v-container class="ma-0 pa-0">
                                                                <v-container class="mb-0 pb-0">
                                                                    <v-row>
                                                                    <v-col cols="1"></v-col>
                                                                        <v-col class="font-weight-bold pl-10" cols="6" >
                                                                            Column A
                                                                        </v-col>
                                                                        <v-col class="font-weight-bold" cols="5">
                                                                            Column B
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-container>
                                                            <v-divider></v-divider>

                                                             <v-container class="mb-0 pb-0 mt-2" >
                                                                <v-row class="mb-0 pb-0">
                                                                    <v-col cols="7" >
                                                                        <v-row>
                                                                            <v-col class="d-flex flex-row pa-0" cols="12" v-for="(Ans_match, i) in SubmittedAnswer[index].SubQuestion" :key="Ans_match.id">
                                                                                <div class="mt-0 pt-0 mb-0 pb-0 pa-0">
                                                                                <v-checkbox  hide-details
                                                                                    class="ma-0 pa-0 mt-2" color="success"
                                                                                    @click="MarkAsCorrect(index, i, item.id, Ans_match.SubQuestion_id, item.points)"
                                                                                    v-model="Check[index][i]">
                                                                                </v-checkbox>

                                                                                <!--  <v-btn v-if="!Check[index][i]" icon >
                                                                                    <v-icon v-if="Check[index][i]" color="success" >
                                                                                        mdi-checkbox-marked
                                                                                    </v-icon>
                                                                                    <v-icon v-else color="red" >
                                                                                        mdi-close-box-outline
                                                                                    </v-icon>
                                                                                </v-btn> -->
                                                                                </div> 
                                                                    
                                                                                <div class="mt-0 pt-0 mb-0 pb-0 pa-0">
                                                    
                                                                                    <v-text-field 
                                                                                    :style="$vuetify.breakpoint.mdAndUp ? 'max-width:60px' : 'max-width:50px'"
                                                                                    hide-details
                                                                                    outlined
                                                                                    readonly
                                                                                    dense
                                                                                    v-model="Ans_match.Ans_Letter"
                                                                                    class="centered-input pt-0 mt-0">
                                                                                    </v-text-field>
                                                                                </div>
                                                                                <div style="width:100%" class="d-flex flex-row mt-2 pl-2"> 
                                                                                    <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                                                                    <span v-html="Ans_match.SubQuestion" class="subquestion-content"></span>
                                                                                </div>
                                                                            </v-col>
                                                                        </v-row>
                                                                    </v-col>
                                                                    <v-col cols="5">
                                                                        <v-row>
                                                                            <v-col cols="12" v-for="(pairList, i) in SubmittedAnswer[index].SubAnswer" :key="i" class="d-flex flex-row pa-0">
                                                                                <div  style="width:100%"  class="d-flex flex-row mt-2 pl-4"> 
                                                                                    <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                                                                    <span v-html="pairList.SubChoice" class="subchoices-content"></span>
                                                                                </div>
                                                                            </v-col>
                                                                        </v-row>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-container>                                                                
                                                            </v-container>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0" v-if="item.type == 'Essay'">
                                                <div class="mt-0 pt-0">
                                                    <v-list class="pl-6">
                                                        <v-list-item class="ma-0 pa-0">
                                                            <v-list-item-content class="ma-0 pa-0 ">

                                                                <div class="primary--text">
                                                                    Student Answer:
                                                                </div>
                                                                <div style="line-height:1.4"
                                                                    class="Subtitle-1 ma-0 pa-0 d-flex pl-3">
                                                                    <span class="pr-2">&bull; </span>
                                                                    <span v-html="SubmittedAnswer[index].Answer"
                                                                        class="post-content"></span>
                                                                    <span v-if="SubmittedAnswer[index].Answer == null"
                                                                        class="post-content"> N/A</span>
                                                                </div>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-list>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card>
                            </v-tab-item>



                            <v-tab-item>
                                <v-card elevation="5" v-if="isLoaded">
                                    <v-simple-table :loading="loading_activity">
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        Date
                                                    </th>
                                                    <th class="text-left">
                                                        Activity
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, i) in student_activity_logs " :key="i">
                                                    <td>{{ format_date_log(item.created_at) }}</td>
                                                    <td>{{ item.description }}</td>
                                                </tr>
                                                <tr v-if="student_activity_logs.length == 0">
                                                    <td class="text-cemter" colspan="2">No data available</td>
                                                
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>


                        <v-card style="height:50vh" outlined elevation="1" class=" pa-4 mt-1" v-if="!isLoaded">
                            <v-row class="mt-12 pt-12" justify="center" align-content="center">
                                <v-col cols="12" sm="8" md="4" class="text-center pb-12 mb-12">
                                    <div style="margin-top:8rem">
                                        <vue-element-loading :active="!isLoaded" text="Loading" duration="0.7"
                                            :textStyle="{fontSize: '20px'}" spinner="line-scale" color="#EF6C00"
                                            size="60" />
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>

                    </v-col>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>
<script>
    import moment from 'moment-timezone';
    const resetConfirmation = () => import('../../dialogs/resetConfirmation')
    import {
        mapGetters,
        mapActions
    } from "vuex";
import axios from 'axios';

    export default {
        props: ["classworkDetails", "ViewDetails", "SubmittedLength", "currentIndex","CheckDataSection", 'Class_id'],
        components: {
            resetConfirmation
        },
        data() {
            return {
                DateToday: new Date(),
                loading_activity : false,
                student_activity_logs: [],
                tab: null,
                isUpdatingComment: false,
                isUpdatingComment_id: null,
                isUpdatingComment_old_data: null,
                Qlength: null,
                Check: [],
                isLoading: true,
                inputCheck: ['True', 'False'],
                TrueOrFalse: ['<p>True</p>', '<p>False</p>'],
                SubmittedAnswer: [],
                UpdateDetails: {},
                dialog: false,
                Alphabet: null,
                isCommenting: false,
                comment: '',
                isAlerting: false,
                isReseting: false,
                isScrolling: false,
                isLoaded: false,
                questionIndex: 0,
                options: {
                    modules: {
                        'toolbar': [
                            ['bold', 'italic', 'underline', 'strike'],

                            [{
                                'list': 'bullet'
                            }],
                            ['image'],
                        ],
                    }
                },
                pointsRules: [
                    v => !!v || 'Points is required',
                    v => (v && v >= 0) || "Points should be above or equal to 0",
                ],
                StudentScore: 0,
                EssayOldPoints: [],
                Question_Type:['All Type', 'Multiple Choice', 'Identification', 'True or False', 'Matching Type', 'Essay'],
                selected_type: 'All Type',
                AllowResubmitDialog: false
                
            }
        },
        computed: mapGetters(['get_CurrentUser', 'getAll_questions']),
        methods: {
            CheckFormatDue(value){
                if (value) {
                    return moment(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
                }
            },
              format_date_log(value) {
                if (value) {
                    return moment(String(value)).tz("Asia/Manila").format('MMMM DD YYYY, h:mm:ss a');

                }
            },
            format_date(value) {
                if (value) {
                    return moment(String(value)).tz("Asia/Manila").format('MMMM DD YYYY, h:mm a');

                }
            },
            fetchQuestions() {
                //this.ViewDetails.points = 0;
                this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then((res) => {

                    let Submitted_length = this.ViewDetails.Submitted_Answers.length;
                    let Question_length = this.getAll_questions.Question.length;
                    let diff = Question_length - Submitted_length;

                    let counter;
                    for (let j = 0; j < Question_length; j++) {
                        counter = 0;
                        for (let k = 0; k < Submitted_length; k++) {
                            if (this.getAll_questions.Question[j].id != this.ViewDetails.Submitted_Answers[k]
                                .Question_id) {
                                counter++;
                            }
                        }
                        if (counter == Submitted_length) {
                            if (this.getAll_questions.Question[j].type == 'Multiple Choice' || this
                                .getAll_questions.Question[j].type == 'Identification' || this.getAll_questions
                                .Question[j].type == 'True or False') {
                                this.ViewDetails.Submitted_Answers.push({
                                    Answer: null,
                                    Question_id: this.getAll_questions.Question[j].id,
                                    timeConsume: null,
                                    type: this.getAll_questions.Question[j].type,
                                })
                            } else if (this.getAll_questions.Question[j].type == 'Essay') {
                                this.ViewDetails.Submitted_Answers.push({
                                    Answer: null,
                                    Question_id: this.getAll_questions.Question[j].id,
                                    timeConsume: null,
                                    type: this.getAll_questions.Question[j].type,
                                    score: 0,
                                    check: false
                                })
                            } else if (this.getAll_questions.Question[j].type == 'Matching type') {
                                this.ViewDetails.Submitted_Answers.push({
                                    Answer: [],
                                    type: 'Matching type',
                                    Question_id: this.getAll_questions.Question[j].id,
                                    Choices_id: [],
                                })
                                let counter = 0;
                                this.getAll_questions.Answer[j].SubQuestion.forEach(item => {
                                    this.ViewDetails.Submitted_Answers[this.ViewDetails
                                        .Submitted_Answers.length - 1].Choices_id.push({
                                        choice_id: this.getAll_questions.Answer[j].SubAnswer[
                                            counter].id,
                                    })
                                    this.ViewDetails.Submitted_Answers[this.ViewDetails
                                        .Submitted_Answers.length - 1].Answer.push({
                                        Ans_id: null,
                                        Ans_letter: null,
                                        Answers: null,
                                        subquestion_id: item.id,
                                    })
                                    counter++;
                                });
                            }
                        }

                    }

                    for (let i = 0; i < this.getAll_questions.Question.length; i++) {

                        for (let j = 0; j < this.ViewDetails.Submitted_Answers.length; j++) {
                            if (this.getAll_questions.Question[i].id == this.ViewDetails.Submitted_Answers[j]
                                .Question_id) {



                                if (this.getAll_questions.Question[i].type == 'Multiple Choice' || this
                                    .getAll_questions.Question[i].type == 'Identification' || this
                                    .getAll_questions.Question[i].type == 'True or False') {
                                    
                                    let student_ans;
                                    this.SubmittedAnswer[i] = this.ViewDetails.Submitted_Answers[j];

                                    if (this.getAll_questions.Question[i].type == 'Identification') {
                                        
                                        const hasKey = 'check' in this.ViewDetails.Submitted_Answers[j];
                                        if(hasKey){
                                            
                                            if(this.ViewDetails.Submitted_Answers[j].check == true){
                                                this.Check[i] = true;
                                            }else{
                                                this.Check[i] = false;
                                            }
                                        }else{

                                            student_ans = this.getAll_questions.Question[i].sensitivity ? this
                                            .ViewDetails.Submitted_Answers[j].Answer :
                                            this.ViewDetails.Submitted_Answers[j].Answer != null && this.ViewDetails
                                            .Submitted_Answers[j].Answer != '' ? this.ViewDetails.Submitted_Answers[
                                                j].Answer.toLowerCase() : this.ViewDetails.Submitted_Answers[j]
                                            .Answer;
                                            

                                            if (this.getAll_questions.Answer[i].options.length == 0) {
                                                let Question_answer = this.getAll_questions.Question[i]
                                                    .sensitivity ? this.getAll_questions.Question[i].answer :
                                                    this.getAll_questions.Question[i].answer != null && this
                                                    .getAll_questions.Question[i].answer != '' ? this
                                                    .getAll_questions.Question[i].answer.toLowerCase() : this
                                                    .getAll_questions.Question[i].answer;


                                                    if(Question_answer != null){
                                                        Question_answer = Question_answer.replace('<p>', '').trim();
                                                        Question_answer = Question_answer.replace('</p>', '').trim();
                                                        Question_answer = Question_answer.replace('&nbsp;', '').trim();
                                                        Question_answer = Question_answer.trim();
                                                    }
                                                
                                                    if(student_ans != null){
                                                        student_ans = student_ans.replace('<p>', '').trim();
                                                        student_ans = student_ans.replace('</p>', '').trim();
                                                        student_ans = student_ans.replace('&nbsp;', '').trim();
                                                        student_ans = student_ans.trim();
                                                    }
                                                
                                                if (Question_answer == student_ans) {
                                                    this.Check[i] = true;
                                                } else {
                                                    this.Check[i] = false;
                                                }
                                            } 
                                            else {
                                                
                                                this.Check[i] = false;
                                                this.getAll_questions.Answer[i].options.forEach(item => {
                                                    let Question_answer = this.getAll_questions.Question[i]
                                                        .sensitivity ? item.Choice :
                                                        item.Choice != null && item.Choice != '' ? item
                                                        .Choice.toLowerCase() : item.Choice;

                                                    if(Question_answer != null){
                                                        Question_answer = Question_answer.replace('<p>', '').trim();
                                                        Question_answer = Question_answer.replace('</p>', '').trim();
                                                        Question_answer = Question_answer.replace('&nbsp;', '').trim();
                                                        Question_answer = Question_answer.trim();
                                                    }
                                                    
                                                    if(student_ans != null){
                                                        student_ans = student_ans.replace('<p>', '').trim();
                                                        student_ans = student_ans.replace('</p>', '').trim();
                                                        student_ans = student_ans.replace('&nbsp;', '').trim();
                                                        student_ans = student_ans.trim();
                                                    }
                                                    if (student_ans == Question_answer) {
                                                        this.Check[i] = true;
                                                    }

                                                });
                                            }
                                        }

                                    }
                                    else if(this.getAll_questions.Question[i].type == 'Multiple Choice'){

                                        const hasKey = 'check' in this.ViewDetails.Submitted_Answers[j];
                                        if(hasKey) {
                                            this.Check[i] = this.ViewDetails.Submitted_Answers[j].check == true ? true :false;
                                        }else{
                                             if(this.getAll_questions.Question[i].isNew){
                                            student_ans = this.ViewDetails.Submitted_Answers[j].Answer;
                                            let Question_answer = this.getAll_questions.Question[i].answer;
                                            if (Question_answer == student_ans) {
                                                this.Check[i] = true;
                                                //this.ViewDetails.points += this.getAll_questions.Question[i].points;
                                            } else {
                                                this.Check[i] = false;
                                            }
                                                
                                            }else{
                                            student_ans = this.getAll_questions.Question[i].sensitivity ? this
                                                .ViewDetails.Submitted_Answers[j].Answer :
                                                this.ViewDetails.Submitted_Answers[j].Answer != null && this.ViewDetails
                                                .Submitted_Answers[j].Answer != '' ? this.ViewDetails.Submitted_Answers[
                                                    j].Answer.toLowerCase() : this.ViewDetails.Submitted_Answers[j]
                                                .Answer;
                                                let Question_answer = this.getAll_questions.Question[i].sensitivity ?
                                                    this.getAll_questions.Question[i].answer :
                                                    this.getAll_questions.Question[i].answer != null && this
                                                    .getAll_questions.Question[i].answer != '' ? this.getAll_questions
                                                    .Question[i].answer.toLowerCase() : this.getAll_questions.Question[
                                                        i].answer;
                                                if (Question_answer == student_ans) {
                                                    this.Check[i] = true;
                                                    //this.ViewDetails.points += this.getAll_questions.Question[i].points;
                                                } else {
                                                    this.Check[i] = false;
                                                }
                                            }
                                        }
                                       
                                    }
                                    else if(this.getAll_questions.Question[i].type == 'True or False'){
                                        const hasKey = 'check' in this.ViewDetails.Submitted_Answers[j];
                                        if(hasKey) {
                                            this.Check[i] = this.ViewDetails.Submitted_Answers[j].check == true ? true :false;
                                        }else{
                                             student_ans = this.getAll_questions.Question[i].sensitivity ? this
                                            .ViewDetails.Submitted_Answers[j].Answer :
                                            this.ViewDetails.Submitted_Answers[j].Answer != null && this.ViewDetails
                                            .Submitted_Answers[j].Answer != '' ? this.ViewDetails.Submitted_Answers[
                                                j].Answer.toLowerCase() : this.ViewDetails.Submitted_Answers[j]
                                            .Answer;
                                            let Question_answer = this.getAll_questions.Question[i].sensitivity ?
                                                this.getAll_questions.Question[i].answer :
                                                this.getAll_questions.Question[i].answer != null && this
                                                .getAll_questions.Question[i].answer != '' ? this.getAll_questions
                                                .Question[i].answer.toLowerCase() : this.getAll_questions.Question[
                                                    i].answer;
                                            if (Question_answer == student_ans) {
                                                this.Check[i] = true;
                                                //this.ViewDetails.points += this.getAll_questions.Question[i].points;
                                            } else {
                                                this.Check[i] = false;
                                            }
                                        }
                                      
                                    }
                                } else if (this.getAll_questions.Question[i].type == 'Essay') {
                                   
                                    this.Check[i] = this.ViewDetails.Submitted_Answers[j].check;
                                    let score;
                                    const hasKey = 'score' in this.ViewDetails.Submitted_Answers[j];
                                    if(hasKey) {
                                        score = parseInt(this.ViewDetails.Submitted_Answers[j].score);
                                    }
                                    else {
                                        this.ViewDetails.Submitted_Answers[j].score = "";
                                        this.ViewDetails.Submitted_Answers[j].check = false;
                                        score = 0;
                                    }
                                    this.SubmittedAnswer[i] = this.ViewDetails.Submitted_Answers[j];
                                    this.EssayOldPoints[i] = score;
                                    //this.ViewDetails.points += score;
                                } else if (this.getAll_questions.Question[i].type == 'Matching type') {
                                    
                                    let Ans = new Array();
                                    let match_check = new Array();
                                    let counter = 0;
                                    let matchpoints = Math.round((this.getAll_questions.Question[i].points / this.getAll_questions.Answer[i].SubQuestion.length));

                                   /*  this.ViewDetails.Submitted_Answers[j].Answer.forEach(item => {
                                        for (let x = 0; x < this.getAll_questions.Answer[i].SubQuestion
                                            .length; x++) {
                                            if (this.getAll_questions.Answer[i].SubQuestion[x].id == item.subquestion_id) {
                                                match_check[counter] = true;
                                                if (this.getAll_questions.Answer[i].SubQuestion[x].answer_id == item.Ans_id) {
                                                    match_check[counter] = true;
                                                } else {
                                                    match_check[counter] = false;
                                                }
                                            }

                                        }
                                        counter += 1;
                                    }); */


                                    let Ans_list = {};
                                    Ans_list.SubQuestion = [];
                                    let subAndDes =  this.getAll_questions.Answer[i].SubAnswer.length + this.getAll_questions.Answer[i].Destructors.length;
                                    Ans_list.SubAnswer = [];
                                    let sub_ques_count = 0;

                                
                                    this.ViewDetails.Submitted_Answers[j].question_pattern.SubQuestion.forEach(sub_ques => {
                                        this.getAll_questions.Answer[i].SubQuestion.forEach(subQuestion => {
                                            if(sub_ques.id == subQuestion.id){
                                                Ans_list.SubQuestion.push({
                                                    Ans_Letter: null,
                                                    Answer: null,
                                                    SubQuestion: subQuestion.sub_question,
                                                    SubQuestion_id: subQuestion.id,
                                                    Correct_Answer: subQuestion.answer_id,
                                                    correct_ans_letter: null,
                                                    isCheck: null
                                                });
                                            }
                                        });

                                        this.ViewDetails.Submitted_Answers[j].Answer.forEach(user_ans => {
                                            Ans_list.SubQuestion.forEach(ans => {
                                                if(user_ans.subquestion_id == ans.SubQuestion_id){
                                                    ans.Ans_Letter = user_ans.Ans_letter;
                                                    ans.Answer = user_ans.Answers;
                                                    ans.user_ans_id = user_ans.Ans_id;

                                                    const hasKey = 'isCheck' in user_ans;
                                                    if(hasKey) {
                                                        ans.isCheck =  user_ans.isCheck;
                                                    }else{
                                                        ans.isCheck = null;
                                                    }
                                                }
                                            });
                                        });

                                    });


                                    this.getAll_questions.Answer[i].Destructors.forEach(destruc => {
                                        this.getAll_questions.Answer[i].SubAnswer.push(destruc);
                                    });
                                    
                                    this.ViewDetails.Submitted_Answers[j].question_pattern.SubAnswer.forEach(sub_ans => {
                                        this.getAll_questions.Answer[i].SubAnswer.forEach(subAnswer => {
                                            if(sub_ans.id == subAnswer.id){
                                                Ans_list.SubAnswer.push({
                                                    SubChoice: subAnswer.Choice,
                                                    SubChoice_id: subAnswer.id,
                                                });
                                            }
                                        });
                                    });

                                    Ans_list.SubQuestion.forEach(sub_ques => {
                                        let c_count = 0;
                                        Ans_list.SubAnswer.forEach(sub_ans => {
                                            if(sub_ques.Correct_Answer == sub_ans.SubChoice_id){
                                                sub_ques.correct_ans_letter = this.Alphabet[c_count];
                                            }
                                            c_count++;
                                        });
                                    });


                                    Ans_list.SubQuestion.forEach(sub => {
                                        if(sub.isCheck == null){
                                            let string = sub.Ans_Letter != null ? sub.Ans_Letter.replace(/\./g,'') : sub.Ans_Letter;
                                            let letter = string != null ? string.trim() : null;
                                            if(letter != null ? letter.toUpperCase() == sub.correct_ans_letter.toUpperCase() : false){
                                                match_check[counter] = true;
                                                this.ViewDetails.Submitted_Answers.forEach(submi_ans => {
                                                    if(submi_ans.Question_id == this.getAll_questions.Question[i].id){
                                                        submi_ans.Answer.forEach(submitted_as => {
                                                            if(submitted_as.subquestion_id == sub.SubQuestion_id){
                                                                submitted_as.Ans_id = sub.Correct_Answer;
                                                                submitted_as.isCheck = true;
                                                                return;
                                                            }
                                                        });
                                                        return;
                                                    }
                                                });
                                            }else{
                                                this.ViewDetails.Submitted_Answers.forEach(submi_ans => {
                                                    if(submi_ans.Question_id == this.getAll_questions.Question[i].id){
                                                        submi_ans.Answer.forEach(submitted_as => {
                                                            if(submitted_as.subquestion_id == sub.SubQuestion_id){
                                                                submitted_as.isCheck = false;
                                                                return;
                                                            }
                                                        });
                                                        return;
                                                    }
                                                });
                                                match_check[counter] = false;
                                            }
                                        }else{
                                            match_check[counter] = sub.isCheck ? true : false;
                                        }
                                        counter += 1;
                                    });

                                    let tmpChoices = new Array();
                                    this.ViewDetails.Submitted_Answers[j].Choices_id.forEach(item => {
                                        this.getAll_questions.Answer[i].SubAnswer.forEach(choice => {
                                            if (item.choice_id == choice.id) {
                                                tmpChoices.push({
                                                    id: choice.id,
                                                    choice: choice.Choice,
                                                })
                                            }
                                        })
                                    });

                                    this.SubmittedAnswer[i] = Ans_list;
                                    this.Check[i] = match_check;
                                }
                            }

                        }

                    }
                    let details = {};
                    details.answer = this.ViewDetails.Submitted_Answers;
                    details.score = this.ViewDetails.points;
                    axios.put('/api/teacher/markAnswer/'+this.ViewDetails.id, details)
                    .then((res)=>{
                        this.CheckScore(this.ViewDetails.id)  
                    })
                    //this.ReSaveScore();
                    this.isLoaded = true;
                    this.$emit('isMounted');
                    
                });

            },
            ReMatchQuestions() {
                //this.ViewDetails.points = 0;
                let Submitted_length = this.ViewDetails.Submitted_Answers.length;
                let Question_length = this.getAll_questions.Question.length;
                let diff = Question_length - Submitted_length;

                let counter;
                for (let j = 0; j < Question_length; j++) {
                    counter = 0;
                    for (let k = 0; k < Submitted_length; k++) {
                        if (this.getAll_questions.Question[j].id != this.ViewDetails.Submitted_Answers[k].Question_id) {
                            counter++;
                        }
                    }
                    if (counter == Submitted_length) {
                        if (this.getAll_questions.Question[j].type == 'Multiple Choice' || this.getAll_questions
                            .Question[j].type == 'Identification' || this.getAll_questions.Question[j].type ==
                            'True or False') {
                            this.ViewDetails.Submitted_Answers.push({
                                Answer: null,
                                Question_id: this.getAll_questions.Question[j].id,
                                timeConsume: null,
                                type: this.getAll_questions.Question[j].type
                            })
                        } else if (this.getAll_questions.Question[j].type == 'Essay') {
                            this.ViewDetails.Submitted_Answers.push({
                                Answer: null,
                                Question_id: this.getAll_questions.Question[j].id,
                                timeConsume: null,
                                type: this.getAll_questions.Question[j].type,
                                score: 0,
                                check: false
                            })
                        } else if (this.getAll_questions.Question[j].type == 'Matching type') {
                            this.ViewDetails.Submitted_Answers.push({
                                Answer: [],
                                type: 'Matching type',
                                Question_id: this.getAll_questions.Question[j].id,
                                Choices_id: [],
                            })
                            let counter = 0;
                            this.getAll_questions.Answer[j].SubQuestion.forEach(item => {
                                this.ViewDetails.Submitted_Answers[this.ViewDetails.Submitted_Answers.length -
                                    1].Choices_id.push({
                                    choice_id: this.getAll_questions.Answer[j].SubAnswer[counter].id,
                                })
                                this.ViewDetails.Submitted_Answers[this.ViewDetails.Submitted_Answers.length -
                                    1].Answer.push({
                                    Ans_id: null,
                                    Ans_letter: null,
                                    Answers: null,
                                    subquestion_id: item.id,
                                })
                                counter++;
                            });
                        }
                    }

                }

                for (let i = 0; i < this.getAll_questions.Question.length; i++) {

                        for (let j = 0; j < this.ViewDetails.Submitted_Answers.length; j++) {
                            if (this.getAll_questions.Question[i].id == this.ViewDetails.Submitted_Answers[j]
                                .Question_id) {

                                if (this.getAll_questions.Question[i].type == 'Multiple Choice' || this
                                    .getAll_questions.Question[i].type == 'Identification' || this
                                    .getAll_questions.Question[i].type == 'True or False') {
                                    
                                    let student_ans;
                                    this.SubmittedAnswer[i] = this.ViewDetails.Submitted_Answers[j];

                                    if (this.getAll_questions.Question[i].type == 'Identification') {

                                        const hasKey = 'check' in this.ViewDetails.Submitted_Answers[j];
                                        if(hasKey){
                                            
                                            if(this.ViewDetails.Submitted_Answers[j].check == true){
                                                this.Check[i] = true;
                                            }else{
                                                this.Check[i] = false;
                                            }
                                        }else{
                                            student_ans = this.getAll_questions.Question[i].sensitivity ? this
                                            .ViewDetails.Submitted_Answers[j].Answer :
                                            this.ViewDetails.Submitted_Answers[j].Answer != null && this.ViewDetails
                                            .Submitted_Answers[j].Answer != '' ? this.ViewDetails.Submitted_Answers[
                                                j].Answer.toLowerCase() : this.ViewDetails.Submitted_Answers[j]
                                            .Answer;
                                            

                                            if (this.getAll_questions.Answer[i].options.length == 0) {
                                                let Question_answer = this.getAll_questions.Question[i]
                                                    .sensitivity ? this.getAll_questions.Question[i].answer :
                                                    this.getAll_questions.Question[i].answer != null && this
                                                    .getAll_questions.Question[i].answer != '' ? this
                                                    .getAll_questions.Question[i].answer.toLowerCase() : this
                                                    .getAll_questions.Question[i].answer;


                                                    if(Question_answer != null){
                                                        Question_answer = Question_answer.replace('<p>', '').trim();
                                                        Question_answer = Question_answer.replace('</p>', '').trim();
                                                        Question_answer = Question_answer.replace('&nbsp;', '').trim();
                                                        Question_answer = Question_answer.trim();
                                                    }
                                                
                                                    if(student_ans != null){
                                                        student_ans = student_ans.replace('<p>', '').trim();
                                                        student_ans = student_ans.replace('</p>', '').trim();
                                                        student_ans = student_ans.replace('&nbsp;', '').trim();
                                                        student_ans = student_ans.trim();
                                                    }
                                                
                                                if (Question_answer == student_ans) {
                                                    this.Check[i] = true;
                                                } else {
                                                    this.Check[i] = false;
                                                }
                                            } 
                                            else {
                                                
                                                this.Check[i] = false;
                                                this.getAll_questions.Answer[i].options.forEach(item => {
                                                    let Question_answer = this.getAll_questions.Question[i]
                                                        .sensitivity ? item.Choice :
                                                        item.Choice != null && item.Choice != '' ? item
                                                        .Choice.toLowerCase() : item.Choice;

                                                    if(Question_answer != null){
                                                        Question_answer = Question_answer.replace('<p>', '').trim();
                                                        Question_answer = Question_answer.replace('</p>', '').trim();
                                                        Question_answer = Question_answer.replace('&nbsp;', '').trim();
                                                        Question_answer = Question_answer.trim();
                                                    }
                                                    
                                                    if(student_ans != null){
                                                        student_ans = student_ans.replace('<p>', '').trim();
                                                        student_ans = student_ans.replace('</p>', '').trim();
                                                        student_ans = student_ans.replace('&nbsp;', '').trim();
                                                        student_ans = student_ans.trim();
                                                    }
                                                    if (student_ans == Question_answer) {
                                                        this.Check[i] = true;
                                                    }

                                                });
                                            }
                                        }

                                    }
                                    else if(this.getAll_questions.Question[i].type == 'Multiple Choice'){
                                        const hasKey = 'check' in this.ViewDetails.Submitted_Answers[j];
                                        if(hasKey) {
                                            this.Check[i] = this.ViewDetails.Submitted_Answers[j].check == true ? true :false;
                                        }else{
                                             if(this.getAll_questions.Question[i].isNew){
                                            student_ans = this.ViewDetails.Submitted_Answers[j].Answer;
                                            let Question_answer = this.getAll_questions.Question[i].answer;
                                            if (Question_answer == student_ans) {
                                                this.Check[i] = true;
                                                //this.ViewDetails.points += this.getAll_questions.Question[i].points;
                                            } else {
                                                this.Check[i] = false;
                                            }
                                                
                                            }else{
                                            student_ans = this.getAll_questions.Question[i].sensitivity ? this
                                                .ViewDetails.Submitted_Answers[j].Answer :
                                                this.ViewDetails.Submitted_Answers[j].Answer != null && this.ViewDetails
                                                .Submitted_Answers[j].Answer != '' ? this.ViewDetails.Submitted_Answers[
                                                    j].Answer.toLowerCase() : this.ViewDetails.Submitted_Answers[j]
                                                .Answer;
                                                let Question_answer = this.getAll_questions.Question[i].sensitivity ?
                                                    this.getAll_questions.Question[i].answer :
                                                    this.getAll_questions.Question[i].answer != null && this
                                                    .getAll_questions.Question[i].answer != '' ? this.getAll_questions
                                                    .Question[i].answer.toLowerCase() : this.getAll_questions.Question[
                                                        i].answer;
                                                if (Question_answer == student_ans) {
                                                    this.Check[i] = true;
                                                    //this.ViewDetails.points += this.getAll_questions.Question[i].points;
                                                } else {
                                                    this.Check[i] = false;
                                                }
                                            }
                                        }
                                    }
                                    else if(this.getAll_questions.Question[i].type == 'True or False'){
                                       const hasKey = 'check' in this.ViewDetails.Submitted_Answers[j];
                                        if(hasKey) {
                                            this.Check[i] = this.ViewDetails.Submitted_Answers[j].check == true ? true :false;
                                        }else{
                                             student_ans = this.getAll_questions.Question[i].sensitivity ? this
                                            .ViewDetails.Submitted_Answers[j].Answer :
                                            this.ViewDetails.Submitted_Answers[j].Answer != null && this.ViewDetails
                                            .Submitted_Answers[j].Answer != '' ? this.ViewDetails.Submitted_Answers[
                                                j].Answer.toLowerCase() : this.ViewDetails.Submitted_Answers[j]
                                            .Answer;
                                            let Question_answer = this.getAll_questions.Question[i].sensitivity ?
                                                this.getAll_questions.Question[i].answer :
                                                this.getAll_questions.Question[i].answer != null && this
                                                .getAll_questions.Question[i].answer != '' ? this.getAll_questions
                                                .Question[i].answer.toLowerCase() : this.getAll_questions.Question[
                                                    i].answer;
                                            if (Question_answer == student_ans) {
                                                this.Check[i] = true;
                                                //this.ViewDetails.points += this.getAll_questions.Question[i].points;
                                            } else {
                                                this.Check[i] = false;
                                            }
                                        }
                                    }
                                } else if (this.getAll_questions.Question[i].type == 'Essay') {
                                    //this.SubmittedAnswer[i] = this.ViewDetails.Submitted_Answers[j];
                                    this.Check[i] = this.ViewDetails.Submitted_Answers[j].check;
                                    //let score = parseInt(this.ViewDetails.Submitted_Answers[j].score);
                                    let score;
                                    const hasKey = 'score' in this.ViewDetails.Submitted_Answers[j];
                                    if(hasKey) {
                                        score = parseInt(this.ViewDetails.Submitted_Answers[j].score);
                                    }
                                    else {
                                        this.ViewDetails.Submitted_Answers[j].score = "";
                                        this.ViewDetails.Submitted_Answers[j].check = false;
                                        score = 0;
                                    }
                                    this.SubmittedAnswer[i] = this.ViewDetails.Submitted_Answers[j];
                                    this.EssayOldPoints[i] = score;
                                    //this.ViewDetails.points += score;
                                } else if (this.getAll_questions.Question[i].type == 'Matching type') {
                                    
                                    let Ans = new Array();
                                    let match_check = new Array();
                                    let counter = 0;
                                    let matchpoints = Math.round((this.getAll_questions.Question[i].points / this.getAll_questions.Answer[i].SubQuestion.length));
                                    
                                   /*  this.ViewDetails.Submitted_Answers[j].Answer.forEach(item => {
                                        for (let x = 0; x < this.getAll_questions.Answer[i].SubQuestion
                                            .length; x++) {
                                             if (this.getAll_questions.Answer[i].SubQuestion[x].id == item.subquestion_id) {
                                                match_check[counter] = true;
                                                if (this.getAll_questions.Answer[i].SubQuestion[x].answer_id == item.Ans_id) {
                                                    match_check[counter] = true;
                                                    //this.ViewDetails.points += matchpoints;

                                                } else {
                                                    match_check[counter] = false;
                                                }
                                            }

                                        }
                                        counter += 1;
                                    }); */


                                    let Ans_list = {};
                                    Ans_list.SubQuestion = [];
                                    let subAndDes =  this.getAll_questions.Answer[i].SubAnswer.length + this.getAll_questions.Answer[i].Destructors.length;
                                    Ans_list.SubAnswer = [];
                                    let sub_ques_count = 0;

                            
                                    
                                    this.ViewDetails.Submitted_Answers[j].question_pattern.SubQuestion.forEach(sub_ques => {
                                        this.getAll_questions.Answer[i].SubQuestion.forEach(subQuestion => {
                                            if(sub_ques.id == subQuestion.id){
                                                Ans_list.SubQuestion.push({
                                                    Ans_Letter: null,
                                                    Answer: null,
                                                    SubQuestion: subQuestion.sub_question,
                                                    SubQuestion_id: subQuestion.id,
                                                    Correct_Answer: subQuestion.answer_id,
                                                    correct_ans_letter: null,
                                                    isCheck: null
                                                });
                                            }
                                        });

                                        this.ViewDetails.Submitted_Answers[j].Answer.forEach(user_ans => {
                                            Ans_list.SubQuestion.forEach(ans => {
                                                if(user_ans.subquestion_id == ans.SubQuestion_id){
                                                    ans.Ans_Letter = user_ans.Ans_letter;
                                                    ans.Answer = user_ans.Answers;
                                                     ans.user_ans_id = user_ans.Ans_id;

                                                    const hasKey = 'isCheck' in user_ans;
                                                    if(hasKey) {
                                                        ans.isCheck =  user_ans.isCheck;
                                                    }else{
                                                        ans.isCheck = null;
                                                    }
                                                }
                                            });
                                        });

                                    });


                                    /* this.getAll_questions.Answer[i].Destructors.forEach(destruc => {
                                        this.getAll_questions.Answer[i].SubAnswer.push(destruc);
                                    }); */
                                    
                                    this.ViewDetails.Submitted_Answers[j].question_pattern.SubAnswer.forEach(sub_ans => {
                                        this.getAll_questions.Answer[i].SubAnswer.forEach(subAnswer => {
                                            if(sub_ans.id == subAnswer.id){
                                                Ans_list.SubAnswer.push({
                                                    SubChoice: subAnswer.Choice,
                                                    SubChoice_id: subAnswer.id,
                                                });
                                            }
                                        });
                                    });

                                     Ans_list.SubQuestion.forEach(sub_ques => {
                                        let c_count = 0;
                                        Ans_list.SubAnswer.forEach(sub_ans => {
                                            if(sub_ques.Correct_Answer == sub_ans.SubChoice_id){
                                                sub_ques.correct_ans_letter = this.Alphabet[c_count];
                                            }
                                            c_count++;
                                        });
                                    });

                                    Ans_list.SubQuestion.forEach(sub => {
                                        if(sub.isCheck == null){
                                            let string = sub.Ans_Letter != null ? sub.Ans_Letter.replace(/\./g,'') : sub.Ans_Letter;
                                            let letter = string != null ? string.trim() : string;
                                            if(letter != null ? letter.toUpperCase() == sub.correct_ans_letter.toUpperCase() : false){
                                                match_check[counter] = true;
                                                this.ViewDetails.Submitted_Answers.forEach(submi_ans => {
                                                    if(submi_ans.Question_id == this.getAll_questions.Question[i].id){
                                                        submi_ans.Answer.forEach(submitted_as => {
                                                            if(submitted_as.subquestion_id == sub.SubQuestion_id){
                                                                submitted_as.Ans_id = sub.Correct_Answer;
                                                                submitted_as.isCheck = true;
                                                                return;
                                                            }
                                                        });
                                                        return;
                                                    }
                                                });
                                            }else{
                                                this.ViewDetails.Submitted_Answers.forEach(submi_ans => {
                                                    if(submi_ans.Question_id == this.getAll_questions.Question[i].id){
                                                        submi_ans.Answer.forEach(submitted_as => {
                                                            if(submitted_as.subquestion_id == sub.SubQuestion_id){
                                                                submitted_as.isCheck = false;
                                                                return;
                                                            }
                                                        });
                                                        return;
                                                    }
                                                });
                                                match_check[counter] = false;
                                            }
                                        }else{
                                            match_check[counter] = sub.isCheck ? true : false;
                                        }
                                        counter += 1;
                                    });
                                    

                                
                                    let tmpChoices = new Array();
                                    this.ViewDetails.Submitted_Answers[j].Choices_id.forEach(item => {
                                        this.getAll_questions.Answer[i].SubAnswer.forEach(choice => {
                                            if (item.choice_id == choice.id) {
                                                tmpChoices.push({
                                                    id: choice.id,
                                                    choice: choice.Choice,
                                                })
                                            }
                                        })
                                    });

                                    this.SubmittedAnswer[i] = Ans_list;
                                    this.Check[i] = match_check;
                                }
                            }

                        }

                    }

                let details = {};
                details.answer = this.ViewDetails.Submitted_Answers;
                details.score = this.ViewDetails.points;
                axios.put('/api/teacher/markAnswer/'+this.ViewDetails.id, details)
                .then((res)=>{
                    
                })
                this.CheckScore(this.ViewDetails.id)
                this.isLoaded = true;
                //this.ReSaveScore();
                
                


            },
            async UpdateEssayScore(type, id, data, points, index, answer){
                let Scorepoints = parseInt(this.SubmittedAnswer[index].score);
                if(Scorepoints > points){
                    
                   this.toastError('Points must be less than or equal to the points of the question');
                }else{
                    this.UpdateScore(type, id, data, points, index, answer);
                }
            },

            async UpdateScore(type, id, data, points, index, answer) {
                this.UpdateDetails.type = type;
                this.UpdateDetails.check = type == 'Essay' ? true : data;
                this.UpdateDetails.points =  points;
                this.UpdateDetails.question_id = id;
                this.UpdateDetails.answer =  type == 'Identification' ? this.getAll_questions.Answer[index].options[Math.floor(Math.random() * this.getAll_questions.Answer[index].options.length)].Choice : answer;
                this.UpdateDetails.user_id = this.ViewDetails.user_id;
                if(type == 'Essay'){
                    this.UpdateDetails.essay_points = this.SubmittedAnswer[index].score;
                    this.UpdateDetails.old_essay_points = this.EssayOldPoints[index];
                }
                axios.put('/api/teacher/update-score/' + this.ViewDetails.id, this.UpdateDetails)
                    .then(res => {
                        if (res.status == 200) {
                            if (type == 'Essay') {
                                
                                if(this.EssayOldPoints[index] == 0){
                                    this.ViewDetails.points = parseInt(this.ViewDetails.points) + parseInt(this.SubmittedAnswer[index].score);
                                }else{
                                    this.ViewDetails.points = parseInt(this.ViewDetails.points) - this.EssayOldPoints[index];
                                    this.ViewDetails.points = parseInt(this.ViewDetails.points) + parseInt(this.SubmittedAnswer[index].score);
                                    this.EssayOldPoints[index] = parseInt(this.SubmittedAnswer[index].score);
                                }
                            } else if(type == 'Identification'){
                                 if (data == true) {
                                    this.ViewDetails.points = parseInt(this.ViewDetails.points) + parseInt(points);
                                    this.SubmittedAnswer[index].check = true;

                                } else {
                                    this.SubmittedAnswer[index].Answer = "Wrong answer";
                                    this.ViewDetails.points = parseInt(this.ViewDetails.points) - parseInt(points);
                                    this.SubmittedAnswer[index].check = false;
                                }
                            }
                            else {
                                if (data == true) {
                                    this.SubmittedAnswer[index].check = true;
                                    this.ViewDetails.points = parseInt(this.ViewDetails.points) + parseInt(points);
                                } else {
                                    this.SubmittedAnswer[index].check = false;
                                    this.ViewDetails.points = parseInt(this.ViewDetails.points) - parseInt(points);
                                }
                            }
                            this.toastSuccess('Score successfully updated!');
                        }
                    })
            },
            async ReSaveScore(){
                axios.put('/api/teacher/re_update-score/' + this.ViewDetails.id, {points : this.ViewDetails.points})
                    .then(res => {
                       
                    })
            },
            async ResetSubmission() {
                this.isReseting = true;
                if (this.ViewDetails.status != null && this.ViewDetails.status != '') {
                    axios.put('/api/teacher/reset-obj/' + this.ViewDetails.id)
                        .then(res => {
                            if (res.status == 200) {
                                this.dialog = !this.dialog;
                                this.isReseting = false;
                                this.student_activity_logs = [];
                                this.ViewDetails.allow_resubmit = null;
                                this.$emit('RestSubmission');
                                this.$store.dispatch('setCurrectClassworkSubmission',1);
                                this.toastSuccess('Submission successfully reset!');
                            }

                        })
                }

            },
            async addComment(details) {
                let data = {};
                this.isCommenting = true;
                data.classwork_id = details.classwork_id;
                data.course_id = this.$route.params.id;
                data.to_user = details.user_id;
                data.type = 'Private';
                data.comment = this.comment;
                axios.post('/api/post/classwork/comment/insert', data)
                    .then((res) => {
                        if (res.status == 200) {
                            this.ViewDetails.comments.push({
                                content: res.data.comment,
                                id: res.data.id,
                                name: this.get_CurrentUser.firstName + ' ' + this.get_CurrentUser
                                    .lastName,
                                profile_pic: this.get_CurrentUser.profile_pic,
                                u_id: this.get_CurrentUser.user_id,
                                comment_date: new Date()
                            })
                            this.comment = '';
                        }

                    })
                this.isCommenting = false;
            },
            async DeleteComment(id, index) {
                axios.delete('/api/post/classwork/comment/delete/' + id)
                    .then(res => {
                        if (res.data.success == true) {
                            this.ViewDetails.comments.splice(index, 1);
                        }
                    })
            },
            async UpdateComment(content, id) {
                axios.put('/api/post/comment/update/' + id, {
                        comment: content
                    })
                    .then(res => {
                        this.isUpdatingComment = false;
                        this.isUpdatingComment_id = null;
                        this.isUpdatingComment_old_data = null;
                    })
            },

            async alertStudent() {
                let data = {};
                this.isAlerting = true;
                data.user_id = this.ViewDetails.user_id;
                data.classwork_name = this.classworkDetails.title;
                data.classwork_id = this.classworkDetails.id;
                data.course_id = this.classworkDetails.course_id;
                data.firstName = this.ViewDetails.firstName;
                axios.post('/api/teacher/alert-student', data)
                    .then((res) => {
                        if (res.data.success == true) {
                            this.toastSuccess(res.data.message);
                            this.isAlerting = false;
                        }
                    })
            },
            async NextStudent() {
                this.tab = 0;
                this.questionIndex = 0;
                this.SubmittedAnswer = [];
                this.Check = [];
                this.isLoaded = false;
                this.$emit("nextStudent");
                //this.RegetSubmittedAnswer();
                setTimeout(() => (this.RegetSubmittedAnswer()) , 200);
                //setTimeout(() => (this.ReMatchQuestions()) , 300);
                //this.fetchStudentActivity();
            },
            async PrevStudent() {
                this.tab = 0;
                this.questionIndex = 0;
                this.SubmittedAnswer = [];
                this.Check = [];
                this.isLoaded = false;
                this.$emit("prevStudent");
                //this.RegetSubmittedAnswer();
                setTimeout(() => (this.RegetSubmittedAnswer()) , 200);
                //setTimeout(() => (this.getSubmittedAnswer(), this.ReMatchQuestions()), 300);
                //this.fetchStudentActivity();
            },
            fetchStudentActivity() {
                this.loading_activity = true;
                axios.get('/api/objective-logs/get_logs', {
                    params: {
                        classwork_id: this.classworkDetails.id,
                        student_id: this.ViewDetails.user_id
                    }
                }).then((res) => {
                  this.student_activity_logs =  res.data;
                  this.loading_activity = false;
                }).catch((err) => {
                     this.loading_activity = false;
                    this.toastError('Something went wrong');
                })
            },
             CheckScore(sub_id){
                 if(sub_id != null){
                    if(this.ViewDetails.status == 'Submitted'){
                        axios.get('/api/question/StudentScore/'+sub_id)
                        .then(res=>{
                            this.ViewDetails.points = res.data.toFixed();
                            //this.ReSaveScore(res.data);
                        })  
                    }
                 }
                
            },
            async getSubmittedAnswer(){
                 await axios.get('/api/submission/submitted_answer/'+this.ViewDetails.id)
                .then((res)=>{
                    this.ViewDetails.Submitted_Answers = res.data.submitted_answer.Submitted_Answers;
                    this.ViewDetails.rubrics_score = res.data.submitted_answer.rubrics_score;
                    this.ViewDetails.comments = res.data.comment;
                    this.fetchQuestions();
                })
            },
            async RegetSubmittedAnswer(){
                this.ViewDetails.Submitted_Answers = [];
                this.ViewDetails.rubrics_score = [];
                this.ViewDetails.comments = [];
                
                if(this.ViewDetails.status != null && this.ViewDetails.status != ''){
                     axios.get('/api/submission/submitted_answer/'+this.ViewDetails.id)
                    .then((res)=>{
                        this.ViewDetails.Submitted_Answers = res.data.submitted_answer.Submitted_Answers;
                        this.ViewDetails.rubrics_score = res.data.submitted_answer.rubrics_score;
                        this.ViewDetails.comments = res.data.comment;
                        this.ReMatchQuestions()
                    })
                }else{
                    this.isLoaded = true;
                }
            },
            async MarkAsSubmitting(id){               
                let details = {};
                details.type = this.classworkDetails.type;
                details.classwork_id = this.classworkDetails.id;
                details.course_id = this.classworkDetails.course_id;
                details.user_id = this.ViewDetails.user_id;
                details.class_id = this.Class_id;

                await axios.put('/api/teacher/allow_resubmit/'+id, details)
                .then((res)=>{
                    this.AllowResubmitDialog = false;
                    if(id != null){
                        this.ViewDetails.allow_resubmit = 1;
                        this.$emit('RestSubmission')
                        this.$store.dispatch('setCurrectClassworkSubmission',1)
                        this.toastSuccess('Student allowed retake classwork!');
                    }else{
                        this.ViewDetails.status = null;
                        this.ViewDetails.points = 0;
                        this.ViewDetails.allow_resubmit = 1;
                        this.toastSuccess('Student allowed make submission!');
                    }

                    this.ViewDetails.id = res.data.sub_id;
                })
            },
            async MarkAsCorrect(main_index,second_index, ques_id ,subquestion_id, points){
                let matchpoints = Math.round((points / this.getAll_questions.Answer[main_index].SubQuestion.length));
                this.getAll_questions.Answer[main_index].SubQuestion.forEach( item => {
                    if(item.id == subquestion_id){
                        this.ViewDetails.points  = this.Check[main_index][second_index] ?  
                        parseInt(this.ViewDetails.points) + parseInt(matchpoints) : parseInt(this.ViewDetails.points) - parseInt(matchpoints);
                        this.ViewDetails.Submitted_Answers.forEach(sub => {
                            if(sub.Question_id == ques_id){
                                sub.Answer.forEach(ans => {
                                    if(ans.subquestion_id == subquestion_id){
                                        ans.Ans_id = this.Check[main_index][second_index] ? item.answer_id : 0;
                                        ans.isCheck = this.Check[main_index][second_index] ? true : false;
                                        let details = {};
                                        details.answer = this.ViewDetails.Submitted_Answers;
                                        details.score = this.ViewDetails.points;
                                        axios.put('/api/teacher/markAnswer/'+this.ViewDetails.id, details)
                                        .then((res)=>{
                                            item.user_ans_id = item.answer_id;
                                        })
                                        return;
                                    }
                                });
                            }
                        });
                    }
                });
            
            }
        },
        beforeDestroy() {
            this.$emit('closeDialog');
        },

        mounted() {
            
            if (this.ViewDetails.status != null && this.ViewDetails.status != '') {
                this.getSubmittedAnswer();
               
            } else {
                this.isLoaded = true;
                this.$emit('isMounted');
            }
            const alphabet = [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z"
            ];
            this.Alphabet = alphabet;
        },
        created() {
            this.$emit('isMounted');
        }
    }

</script>
<style scoped>


    .fixed-bar {
        position: sticky;
        position: -webkit-sticky;
        /* for Safari */
        top: 0em;
        z-index: 2;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 3px
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .centered-input>>>input {
        text-align: center
    }

    .post-content img {

        max-height: 8rem !important;
    }

    .centered-input input {
        text-align: center
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

    .CommentEditor>iframe {
        width: 100% !important;
        height: 20rem !important;
    }

    .CommentEditor>.ql-editor img {

        max-height: 25rem !important;
    }

    .CommentEditor>.ql-container {
        max-height: 70rem;
    }

</style>
<style>
    .commentContent img {
        max-width: 100% !important;
        max-height: 10rem !important;

    }

    div.ql-tooltip {
        left: 0px !important;
        top: -10px !important;
    }

    div>.ql-tooltip-arrow {
        display: none !important;
    }


    .post-content  img{
        max-height: 15rem !important;
    }
    .Essayeditor{
        height: 10rem !important;
     
    }

</style>
