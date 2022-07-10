<template>

    <v-app>

        <v-container fluid>


            <v-dialog v-model="dialog" persistent max-width="550">
                <confirmDialog :unAnsweredQuestion="unAnsweredQuestion" v-on:toggleCancelDialog="dialog = !dialog"
                    v-on:toggleSubmit="StopTimer = true" v-if="dialog"></confirmDialog>
            </v-dialog>

            <v-dialog v-model="warningDialog" persistent max-width="500">
                <dialogWarning :Count="leaveTimerCount" v-on:toggleSaveLog="stopLeaveTimer()" v-on:toggleCloaseDialog="warningDialog = !warningDialog,ReloadTime()"
                    v-if="warningDialog"></dialogWarning>
            </v-dialog>

            <v-dialog v-model="TimesUpDialog" persistent max-width="500">
                <timesUpDialog
                    v-on:SubmitAnswer="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: $route.query.clwk}})"
                    v-if="TimesUpDialog"></timesUpDialog>
            </v-dialog>


            <vue-element-loading :active="isLoading" :text="!isSubmitting ? 'Loading Questions' : 'Submitting..'" duration="0.7"
                :textStyle="{fontSize: '18px'}" spinner="line-scale" color="#EF6C00" size="50" is-full-screen />



            <vue-element-loading :active="isLeavingPage" duration="0.7" spinner="line-scale" color="#EF6C00" size="50"
                is-full-screen />

            <v-container class="ma-0 pa-0" fluid :class="!$vuetify.breakpoint.mdAndUp ? '' : ''"
                v-if="!isLoading || !isSubmitting">
                <v-row justify="center">
                    <v-col cols="12">
                        <v-card class="pr-4 pt-3" elevation="2" outlined>
                            <v-row v-if="!isLoading">
                                <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="8">
                                    <v-list>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-avatar color="blue">
                                                    <v-icon dark>
                                                        mdi-book-open-variant
                                                    </v-icon>
                                                </v-avatar>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="font-weight-bold">{{classworkDetails.title}}
                                                </v-list-item-title>
                                                <v-list-item-subtitle>Total Points: {{classworkDetails.points}}
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                                <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="4"
                                    :class="$vuetify.breakpoint.mdAndUp ? 'd-flex justify-end' : ''">
                                    <div>

                                        <div class="d-flex justify-space-between ">

                                            <div class="text-center mt-5">
                                                <v-menu offset-y max-height="600" style="overflow-y:scroll;">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn icon color="primary" v-bind="attrs" v-on="on">
                                                            <v-icon>
                                                                {{ !$vuetify.breakpoint.mdAndUp  ? 'mdi-format-list-numbered' : 'mdi-chevron-down'}}
                                                            </v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-list>
                                                        <v-list-item class="ma-0 pa-0"
                                                            v-for="(item, index) in Question_id_list"
                                                            :key="index">
                                                            <v-list-item-title>
                                                                <v-btn
                                                                    v-if="item.type == 'Multiple Choice' || item.type == 'Identification' || item.type == 'True or False'|| item.type == 'Essay'"
                                                                    text rounded
                                                                    @click="updateAnswer(), questionIndex = index">
                                                                     <v-icon
                                                                        :color="FinalAnswers[index].Answer == null || FinalAnswers[index].Answer == ''  ? '' : 'primary'"
                                                                        left>
                                                                        {{FinalAnswers[index].Answer == null || FinalAnswers[index].Answer == '' ? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked'}}
                                                                    </v-icon>
                                                                    {{index+1}}
                                                                </v-btn>
                                                                <v-btn @click="updateAnswer(), questionIndex = index"
                                                                    text rounded v-if="item.type == 'Matching type'">
                                                                   <v-icon color="primary" left>
                                                                        mdi-checkbox-blank-outline
                                                                    </v-icon>
                                                                    {{index+1}}
                                                                </v-btn>
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-menu>
                                            </div>
                                            <div v-if="isReloadTime" style="margin-right:3rem">
                                                <vue-element-loading :active="isReloadTime" duration="0.7"
                                                    spinner="line-scale" color="#EF6C00" size="25" />
                                            </div>
                                            <div v-else>
                                                <h4 @click="Answersheet = true" class="ml-1">Time Remaining</h4>
                                                <quizTimer :bus="bus" :CurrentTime="CurrentTime" :StartTime="StartTime"
                                                    :StopTimer="StopTimer" v-on:TimerStop="SubmitAnswer"
                                                    v-on:TimesUp="TimesUpSubmit" :duration="duration"
                                                    v-if="!isLoading && questionIsLoaded && duration != null">
                                                </quizTimer>
                                            </div>

                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col v-if="!$vuetify.breakpoint.mdAndUp" cols="12">
                        <div transition="slide-y-reverse-transition">
                            <v-app-bar flat v-if="!$vuetify.breakpoint.mdAndUp" app color="primary">
                                <v-menu offset-y max-height="600" style="overflow-y:scroll;">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon dark v-bind="attrs" v-on="on">
                                            <v-icon>mdi-format-list-numbered</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item class="ma-0 pa-0"
                                            v-for="(item, index) in Question_List.Question" :key="index">
                                            <v-list-item-title>
                                                <v-btn
                                                    v-if="item.type == 'Multiple Choice' || item.type == 'Identification' || item.type == 'True or False'|| item.type == 'Essay'"
                                                    text rounded @click="updateAnswer(), questionIndex = index">
                                                    <v-icon
                                                        :color="FinalAnswers[index].Answer == null || FinalAnswers[index].Answer == ''  ? '' : 'primary'"
                                                        left>
                                                        {{FinalAnswers[index].Answer == null || FinalAnswers[index].Answer == '' ? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked'}}
                                                    </v-icon>
                                                    {{index+1}}
                                                </v-btn>
                                                <v-btn @click="updateAnswer(), questionIndex = index" text rounded
                                                    v-if="item.type == 'Matching type'">
                                                    <v-icon
                                                        :color="FinalAnswers[index].Answer[0].Ans_letter == null || FinalAnswers[index].Answer[0].Ans_letter == ''  ? '' : 'primary'"
                                                        left>
                                                        {{FinalAnswers[index].Answer[0].Ans_letter == null || FinalAnswers[index].Answer[0].Ans_letter == '' ? 'mdi-checkbox-blank-outline':'mdi-checkbox-marked'}}
                                                    </v-icon>
                                                    {{index+1}}
                                                </v-btn>
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>

                                <v-divider vertical></v-divider>
                                <div  class="pl-2 mt-1 white--text"> <span v-for="(ques, i) in Question_List.Question" :key="i">
                                    <span v-if="i == questionIndex">{{ques.points}}</span>
                                    </span> 
                                    points</div>

                                <v-spacer></v-spacer>
                                <div v-if="isReloadTime" style="margin-right:1.2rem">
                                    <vue-element-loading :active="isReloadTime" duration="0.7" spinner="line-scale"
                                        color="white" size="25" />
                                </div>
                                <div v-else class="white--text mt-5 ml-0 font-weight-bold">
                                    <quizTimer :bus="bus" :CurrentTime="CurrentTime" :StartTime="StartTime"
                                        :StopTimer="StopTimer" v-on:TimerStop="SubmitAnswer"
                                        v-on:TimesUp="TimesUpSubmit" :duration="duration"
                                        v-if="!isLoading && questionIsLoaded && duration != null"></quizTimer>
                                </div>

                            </v-app-bar>
                        </div>
                    </v-col>
                </v-row>
                <!--      <btn @click="TimesUpDialog =!TimesUpDialog" class="primary">Click ME</btn> -->
            </v-container>

            <div v-if="!isLoading" :class="!$vuetify.breakpoint.mdAndUp ? 'mt-10' : 'mt-5'">
                <v-row justify="center">
                    <v-col cols="12" sm="12" md="10" lg="8" xl="7">
                        <v-card :class="$vuetify.breakpoint.mdAndUp ? 'pa-5' : 'pa-0'"
                            :elevation="$vuetify.breakpoint.mdAndUp ? 2 : 0" :outlined="$vuetify.breakpoint.mdAndUp ">

                            <v-row>
                                <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="12" lg="12"
                                    :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center'">


                                    <div class="d-flex pt-2 pb-2">

                                        <div class="mt-2">
                                            <h3 v-if="$vuetify.breakpoint.mdAndUp">Question #{{questionIndex+1}}</h3>
                                            <h4 v-else>Question #{{questionIndex+1}}</h4>
                                        </div>
                                        <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
                                        <div
                                            :class="$vuetify.breakpoint.mdAndUp  ? 'mb-3 mt-0 pt-0' : 'd-flex mb-3 mt-0 pt-0'">
                                            <!-- <v-btn :class="!$vuetify.breakpoint.mdAndUp ? 'pl-5' : ''" rounded
                                                color="primary" outlined="" @click="prev"
                                                :disabled="questionIndex <= 0">
                                                <v-icon left>mdi-arrow-left</v-icon>
                                                Previous
                                            </v-btn> -->

                                            <v-btn :class="!$vuetify.breakpoint.mdAndUp ? 'pl-5' : ''" rounded
                                                color="primary" outlined="" @click="previousQuestion(Question_id_list[questionIndex-1].id)"
                                                :disabled="questionIndex <= 0">
                                                <v-icon left>mdi-arrow-left</v-icon>
                                                Previous
                                            </v-btn>

                                            <v-spacer v-if="!$vuetify.breakpoint.mdAndUp"></v-spacer>
                                            <!-- <v-btn v-if="questionIndex != Qlength-1"
                                                :class="!$vuetify.breakpoint.mdAndUp ? 'pr-5' : ''"
                                                :loading="isSavingAnswer" rounded color="primary"
                                                @click="next(questionIndex)">
                                                Next
                                                <v-icon right>mdi-arrow-right</v-icon>
                                            </v-btn> -->
                                            
                                            <v-btn v-if="questionIndex != this.Question_id_list.length-1"
                                                :class="!$vuetify.breakpoint.mdAndUp ? 'pr-5' : ''"
                                                :loading="isSavingAnswer" rounded color="primary"
                                                @click="nextQuestion(Question_id_list[questionIndex+1].id)">
                                                Next
                                                <v-icon right>mdi-arrow-right</v-icon>
                                            </v-btn>

                                            

                                            <v-btn :loading="isSavingAnswer"
                                                :class="!$vuetify.breakpoint.mdAndUp ? 'pr-5' : ''"
                                                v-if="questionIndex == this.Question_id_list.length-1" rounded color="success"
                                                @click="SubmitPromp">
                                                Submit
                                                <v-icon right>mdi-lock</v-icon>
                                            </v-btn>
                                        </div>
                                    </div>
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col cols="12"
                                    :class="$vuetify.breakpoint.mdAndUp ? 'pa-9 pt-0 mt-0' : 'pa-4 pt-0 mt-0'">
                                  
                                    <vue-element-loading :active="isSavingAnswer" duration="0.7" spinner="line-scale" color="#EF6C00" size="50" />
                                
                                    <v-container ma-0 pa-0 >
                                        <div >
                                            <v-row v-if="$vuetify.breakpoint.mdAndUp" ma-0 pa-0>
                                                <v-col class="mb-0 pb-0" cols="12">
                                                    <v-container class="pa-0 ma-0 d-flex flex-row justify-end">
                                                        <p class="mr-5 primary--text">({{CurrentQuestion.points}} Points)</p>
                                                    </v-container>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col class="mt-0 pt-1 pl-3 mb-0 pb-0" cols="12" md="11" lg="11">
                                                    <div :style="!$vuetify.breakpoint.mdAndUp ? 'line-height:1.1;user-select: none': 'user-select: none'"
                                                        class="font-weight-medium">
                                                        <span v-html="CurrentQuestion.question" class="post-content"></span>
                                                    </div>
                                                    <v-row v-if="CurrentQuestion.attachments">
                                                        <v-col  v-for="(attach, num) in CurrentQuestion.attachments" :key="num"  cols="12" md="4">
                                                            <v-img contain style="border:1px solid black;max-width: 100%;max-height: 25rem !important;" class="white--text ma-0 pa-0 " :src="attach.link">
                                                            </v-img>
                                                        </v-col>
                                                    </v-row>

                                                </v-col>
                                                <v-col class="ma-0 pa-0" cols="12" v-if="CurrentQuestion.type == 'Multiple Choice'">
                                                    <div>
                        
                                                        <v-list :class="$vuetify.breakpoint.mdAndUp ? 'pl-8' : 'pl-5'">
                                                            <v-list-item class="ma-0 pa-0"
                                                                v-for="(Ans,i) in CurrentQuestion.Choices.options"
                                                                :key="i">
                                                                <v-list-item-icon class="ma-0 pa-0">
                                                                    <v-radio-group  @change="isNewChanges = true" v-if="CurrentQuestion.isNew" hide-details :name="'option'+questionIndex"
                                                                        class="ma-0 pa-0 mt-1"
                                                                        v-model="FinalAnswers[questionIndex].Answer">
                                                                        <v-radio
                                                                            :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                                            :name="'option'+questionIndex"
                                                                            @click="FinalAnswers[questionIndex].answer_id = Ans.id"
                                                                            :value="Ans.id">
                                                                        </v-radio>
                                                                    </v-radio-group>
                                                                     <v-radio-group  @change="isNewChanges = true" v-else hide-details :name="'option'+questionIndex"
                                                                        class="ma-0 pa-0 mt-1"
                                                                        v-model="FinalAnswers[questionIndex].Answer">
                                                                        <v-radio
                                                                            :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                                            :name="'option'+questionIndex"
                                                                            @click="FinalAnswers[questionIndex].answer_id = Ans.id"
                                                                            :value="Ans.Choice">
                                                                        </v-radio>
                                                                    </v-radio-group>


                                                                </v-list-item-icon>
                                                                <v-list-item-content class="ma-0 pa-0">
                                                                    <div style="line-height:1.4"
                                                                        class="Subtitle-1 ma-0 pa-0 d-flex mt-1">
                                                                        <span v-html="Ans.Choice"
                                                                            class="post-content"></span>
                                                                    </div>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-list>
                                                    </div>
                                                    <div  class="ma-0 pa-0 text-right">
                                                        <v-btn @click="reset(questionIndex, CurrentQuestion.type)" text rounded small>Reset
                                                            selection</v-btn>
                                                    </div>
                                                </v-col>

                                                 <v-col class="ma-0 pa-0" cols="12" v-if="CurrentQuestion.type == 'Identification'">
                                                    <div>
                                                        <v-list class="pl-3">
                                                            <v-list-item class="ma-0 pa-0">
                                                                <v-list-item-content class="ma-0 pa-0">
                                                                    <editor 
                                                                        class="Identificationeditor"
                                                                        @change="SelectAnswer()"
                                                                        v-model="FinalAnswers[questionIndex].Answer"
                                                                        id="editor-container" placeholder="Answer"
                                                                         :options="options"></editor>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-list>
                                                    </div>
                                                   <!--  <div class="ma-0 pa-0 text-right">
                                                        <v-btn @click="reset(index,item.type)" text rounded small>Clear
                                                            Answer</v-btn>
                                                    </div> -->
                                                </v-col>

                                                <v-col cols="12" class="ma-0 pa-0" v-if="CurrentQuestion.type == 'Matching type'">
                                                    <v-row>
                                                        <v-col ma-0 pa-0 class="ma-0 pa-0" cols="12" lg="12" md="12">
                                                            <v-container
                                                                :class="$vuetify.breakpoint.mdAndUp  ? 'pl-5 pr-5' : 'ma-0 pa-0'">
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
                                                                                 <!-- -->
                                                                                <v-col class="d-flex flex-row pa-0" cols="12" v-for="(List, i) in CurrentQuestion.Choices.SubQuestion" :key="List.id" >
                                                                                    <div  class="mt-0 pt-0 mb-0 pb-0 pa-0">
                                                                                        <v-text-field 
                                                                                        :style="$vuetify.breakpoint.mdAndUp ? 'max-width:110px' : 'max-width:65px'"
                                                                                        hide-details
                                                                                        outlined
                                                                                        dense
                                                                                        v-model="FinalAnswers[index].Answer[i].Ans_letter" 
                                                                                        @change="SelectMatch(CurrentQuestion.id, questionIndex, i)"
                                                                                        class="centered-input pt-0 mt-0">
                                                                                        </v-text-field>
                                                                                    </div>
                                                                                    <div style="width:100%" class="d-flex flex-row mt-2 pl-2"> 
                                                                                        <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                                                                        <span v-html="List.sub_question" class="subquestion-content"></span>
                                                                                    </div>
                                                                                </v-col>
                                                                            </v-row>
                                                                        </v-col>
                                                                        <v-col cols="5">
                                                                            <v-row>
                                                                                <v-col cols="12" v-for="(pairList, i) in CurrentQuestion.Choices.SubAnswer" :key="i" class="d-flex flex-row pa-0">
                                                                                    <div style="width:100%" class="d-flex flex-row mt-2 pl-4"> 
                                                                                        <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                                                                        <span v-html="pairList.Choice" class="subchoices-content"></span>
                                                                                    </div>
                                                                                </v-col>
                                                                            </v-row>
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-container>
                                                            </v-container>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>


                                             
                                            </v-row>

                                      

                                         
                                        </div>
                                    </v-container>
                                </v-col>
                                
                            </v-row>

                        </v-card>
                    </v-col>
                </v-row>
            </div>

            <div>
                <v-app-bar class="pl-0 pr-0" color="white" outlined elevation="0" v-if="!$vuetify.breakpoint.mdAndUp" app
                    :dense="$vuetify.breakpoint.mdAndUp" bottom flat>
                    <v-btn rounded text @click="prev" :disabled="questionIndex <= 0">
                        <v-icon left>mdi-arrow-left</v-icon>
                        <small>Previous</small>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <div class="d-flex justify-center">
                        <small>{{questionIndex+1 }} of {{TotalQuestion}}</small>
                    </div>

                    <v-spacer></v-spacer>
                    <v-btn rounded text v-if="questionIndex != Qlength-1" :loading="isSavingAnswer" color="primary"
                        @click="next(questionIndex)">
                        <small>Next</small>
                        <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                    <v-btn text :loading="isSavingAnswer" v-if="questionIndex == Qlength-1" rounded color="success"
                        @click="SubmitPromp">
                        
                        <small>Submit</small>
                        <v-icon right>mdi-lock</v-icon>
                    </v-btn>
                </v-app-bar>
            </div>

        </v-container>
    </v-app>

</template>
<script>
    import confirmDialog from './confirmDialog';
    import dialogWarning from './warningDialog';
    import timesUpDialog from './TimesUpDialog';
    import quizTimer from './QuizTimer';

    import moment from 'moment-timezone';
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            quizTimer,
            confirmDialog,
            dialogWarning,
            timesUpDialog
        },
        data() {
            return {
                Answersheet: false,
                StopTimer: false,
                dialog: false,
                warningDialog: false,
                inputCheck: ['True', 'False'],
                TrueOrFalse: ['<p>True</p>', '<p>False</p>'],
                isSubmitting: false,
                Qlength: '',
                isStart: false,
                isLoading: true,
                PickAnswers: {},
                PickAnswers_id: {},
                FinalAnswers: [],
                Questype: "",
                questionIndex: 0,
                questionIsLoaded: false,
                duration: null,
                Alphabet: "",
                options: {
                    modules: {
                        'toolbar': [
                            ['bold', 'italic', 'underline', 'strike'],

                            [{
                                'list': 'bullet'
                            }],
                        ],
                    }
                },
                Essayoptions: {
                    modules: {
                        'toolbar': [
                            ['bold', 'italic', 'underline', 'strike'],
                            [{
                                'list': 'bullet'
                            }],
                        ],
                    }
                },
                TimerCount: [],
                tempCounter: 0,
                timeCount: null,
                classworkDetails: {},
                leaveStrike: 0,
                preventWarning: false,
                isExamStart: false,
                StartTime: null,
                Submitted_Answers: null,
                submission_id: null,
                isSavingAnswer: false,
                bus: "testing",
                TimesUpDialog: false,
                windowHeight: window.innerHeight - 100,
                isLeavingPage: false,
                CurrentTime: null,
                isReloadTime: false,
                unAnsweredQuestion: 0,
                saveIndex: 2,
                leaveTimer: null,
                leaveTimerCount: 5,
                Question_List: [],
                TotalQuestion: 0,
                isNewChanges: false,
                CurrentQuestion: [],
                Question_id_list:[],

            }
        },
        computed: mapGetters(["getAll_questions", "get_classwork_show_details"]),
        methods: {
            ...mapActions(['fetchClassworkShowDetails', 'setAsOffline']),
            CountTime() {
                this.timeCount = setInterval(() => {
                    this.tempCounter = this.tempCounter + 1
                }, 1000)
            },
            SubmitPromp() {
                this.unAnsweredQuestion = 0;
                this.FinalAnswers.forEach(item => {
                    if (item.type != "Matching type") {
                        if (item.Answer == null || item.Answer == '') {
                            this.unAnsweredQuestion++;
                        }
                    } else {

                    }
                });
                this.isRemoving = true;
                this.dialog = true;;
            },
            reset(index, type) {
                if (type == 'Multiple Choice' || type == 'Identification' || type == 'True or False' || type ==
                    'Essay') {
                    this.FinalAnswers[index].Answer = '';
                } else if (type == 'Matching type') {
                    this.FinalAnswers[index].Answer.forEach(item => {
                        item.Ans_letter = '',
                            item.Answers = ''
                    });
                }
            },
            SelectAnswer() {
                this.isNewChanges = true;
                if (this.FinalAnswers[this.questionIndex].timeConsume != null || '') {
                    this.FinalAnswers[this.questionIndex].timeConsume += this.tempCounter
                } else {
                    this.FinalAnswers[this.questionIndex].timeConsume = this.tempCounter
                }
                this.tempCounter = 0;
            },
            setAnswer(index, Choices) {

            },
            SetWarning() {
                this.isExamStart = !this.isExamStart;
            },
            next(index) {
                this.isExamStart = true;
                this.isSavingAnswer = true;
                if (this.isNewChanges == true) {
                    this.updateAnswer();
                    this.isNewChanges = false
                }
                this.Questype = "";
                this.PickAnswers.ans = "";
                this.PickAnswers_id.quesId = "";
                if (this.questionIndex != this.Qlength - 1) {
                    setTimeout(() => (this.isSavingAnswer = false, this.questionIndex++), 500);
                }
                //this.updateAnswer();
                
            },
           
            async updateAnswer() {

                let c_ques = this.questionIndex + 1;
                await axios.put('/api/question/store-answer/' + this.submission_id, {
                    type: "multiple",
                    current_question: c_ques,
                    data: this.FinalAnswers
                })
            },
            async LeaveSaveAnswer(){
                let c_ques = this.questionIndex == this.Qlength-1 ? this.questionIndex : this.questionIndex + 1;
                await axios.put('/api/question/store-answer/' + this.submission_id, {
                    type: "multiple",
                    current_question: c_ques,
                    data: this.FinalAnswers
                })
            },
            prev() {
                 this.isExamStart
                if (this.TimerCount[this.questionIndex] != null || '') {
                    this.TimerCount[this.questionIndex] = this.TimerCount[this.questionIndex] + this.tempCounter;
                } else {
                    this.TimerCount[this.questionIndex] = this.tempCounter;
                }
                this.tempCounter = 0;
                this.questionIndex--;

            },
            async SubmitAnswer(data) {
                if (data.istime == false) {
                    this.isExamStart = false;
                    this.isLoading = true;
                    this.isSubmitting = !this.isSubmitting;
                    this.dialog = !this.dialog;
                    this.isStart = !this.isStart;
                    this.warningDialog = false;
                    await axios.post('/api/question/check/' + this.$route.query.clwk, {
                            item: this.FinalAnswers,
                            AnsLength: this.questionIndex,
                            timerCount: this.TimerCount,
                            timeSpent: data.time
                        })
                        .then((res) => {
                            //this.isLoading = !this.isLoading;
                            // this.isSubmitting = !this.isSubmitting;

                            //self.opener.location.reload();
                            this.saveActivityLog(
                                    `Student submitted the exam`)
                                .then(() => {
                                    setTimeout(() => {
                                        this.isLoading = false;
                                        //window.close();
                                        
                                    }, 300)
                                });

                                this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: this.$route.query.clwk}});
                        })
                }

            },
            async TimesUpSubmit(data) {

                this.isExamStart = false;
                //this.isLoading = !this.isLoading;
                this.isSubmitting = !this.isSubmitting;
                this.isStart = !this.isStart;
                this.warningDialog = false;
                await axios.post('/api/question/check/' + this.$route.query.clwk, {
                        item: this.FinalAnswers,
                        AnsLength: this.questionIndex,
                        timerCount: this.TimerCount,
                        timeSpent: data.time
                    })
                    .then((res) => {
                        this.TimesUpDialog = !this.TimesUpDialog;
                        setTimeout(() => {
                            //this.isLoading = !this.isLoading;
                            //this.isSubmitting = !this.isSubmitting;
                        }, 2000);
                        //this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: this.$route.query.clwk}}) 
                    })
            },
            fetchQuestions() {
                this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(() => {
                    this.Qlength = this.getAll_questions.Question.length;
                    
                    let AnswersList = this.Submitted_Answers;

                    if (AnswersList == null || AnswersList.length == 0) {
                       
                        this.Question_List = this.getAll_questions;

                        for (let index = 0; index < this.getAll_questions.Question.length; index++) {
                            if (this.getAll_questions.Question[index].type == 'Identification' || this
                                .getAll_questions.Question[index].type == 'Multiple Choice' || this
                                .getAll_questions.Question[index].type == 'True or False') {
                                this.FinalAnswers.push({
                                    Answer: '',
                                    Question_id: this.getAll_questions.Question[index].id,
                                    answer_id: null,
                                    type: this.getAll_questions.Question[index].type,
                                    timeConsume: null,
                                });
                            } else if (this.getAll_questions.Question[index].type == 'Essay') {
                                this.FinalAnswers.push({
                                    Answer: '',
                                    Question_id: this.getAll_questions.Question[index].id,
                                    answer_id: null,
                                    type: this.getAll_questions.Question[index].type,
                                    check: false,
                                    score: 0,
                                    timeConsume: null
                                });
                            } else if (this.getAll_questions.Question[index].type == 'Matching type') {
                                let Ans = new Array();
                                let Choices_id = new Array();
                                let Quest_Pattern = {};
                                Quest_Pattern.SubQuestion = [];
                                Quest_Pattern.SubAnswer = [];


                                this.getAll_questions.Answer[index].SubAnswer.forEach(item => {
                                    Choices_id.push({
                                        choice_id: item.id
                                    })
                                    Quest_Pattern.SubAnswer.push({
                                        id: item.id
                                    })
                                });

                                this.getAll_questions.Answer[index].SubQuestion.forEach(item => {
                                    Ans.push({
                                        Ans_letter: '',
                                        Ans_id: null,
                                        subquestion_id: item.id,
                                        Answers: ''
                                    })
                                    Quest_Pattern.SubQuestion.push({
                                        id: item.id
                                    })
                                });

                                this.FinalAnswers.push({
                                    Answer: Ans,
                                    Choices_id: Choices_id,
                                    question_pattern: Quest_Pattern,
                                    Question_id: this.getAll_questions.Question[index].id,
                                    type: this.getAll_questions.Question[index].type,
                                    timeConsume: null
                                });
                            }
                        }
                        this.TotalQuestion = 0;
                        this.TotalQuestion = this.getAll_questions.Question.length;
                        this.questionIndex = this.questionIndex > (this.TotalQuestion-1) ? 0 : this.questionIndex;
                        axios.put('/api/question/store-answer/' + this.submission_id, {
                            type: "multiple",
                            current_question: this.questionIndex,
                            data: this.FinalAnswers
                        })

                        
                    } else {
                        let details = {};
                        details.Question = [];
                        details.Answer = [];
                        this.TotalQuestion = 0;
                       
                        for (let j = 0; j < AnswersList.length; j++) {
                            
                            for (let x = 0; x < this.getAll_questions.Question.length; x++) {
                                if(AnswersList[j].Question_id == this.getAll_questions.Question[x].id){
                                    

                                    //this.getAll_questions.Question[x].isdisabled = AnswersList[j].Answer == null ? false : true;
                                    details.Question.push(this.getAll_questions.Question[x]);
                                    details.Answer.push(this.getAll_questions.Answer[x]);
                                    

                                    if (this.getAll_questions.Question[x].type == 'Identification' || this
                                        .getAll_questions.Question[x].type == 'Multiple Choice' || this
                                        .getAll_questions.Question[x].type == 'True or False' || this
                                        .getAll_questions.Question[x].type == 'Essay') {

                                        this.FinalAnswers.push({
                                            Answer: AnswersList[j].Answer,
                                            Question_id: AnswersList[j].Question_id,
                                            answer_id: null,
                                            type: AnswersList[j].type,
                                            timeConsume: AnswersList[j].timeConsume,
                                        });

                                    } else if (this.getAll_questions.Question[x].type == 'Matching type') {
                                        let Ans = new Array();
                                        let Choices_id = new Array();
                                        let Quest_Pattern = {};
                                        Quest_Pattern.SubQuestion = [];
                                        Quest_Pattern.SubAnswer = [];


                                        this.getAll_questions.Answer[x].SubAnswer.forEach(item => {
                                            Choices_id.push({
                                                choice_id: item.id
                                            })
                                            Quest_Pattern.SubAnswer.push({
                                                id: item.id
                                            })
                                        });

                                        let counter = 0;
                                        this.getAll_questions.Answer[x].SubQuestion.forEach(item => {
                                            Ans.push({
                                                Ans_letter: AnswersList[j].Answer[counter].Ans_letter,
                                                Ans_id: AnswersList[j].Answer[counter].Ans_id,
                                                subquestion_id: item.id,
                                                Answers: AnswersList[j].Answer[counter].Answers,
                                            })

                                            Quest_Pattern.SubQuestion.push({
                                                id: item.id
                                            })
                                            counter++;


                                        });
                                        this.FinalAnswers.push({
                                            Answer: Ans,
                                            Choices_id: Choices_id,
                                            question_pattern: Quest_Pattern,
                                            Question_id: AnswersList[j].Question_id,
                                            type: AnswersList[j].type,
                                            timeConsume: AnswersList[j].timeConsume
                                        });
                                    }

                                }
                            }
                            this.TotalQuestion++;

                        }
                        this.questionIndex = this.questionIndex > (this.TotalQuestion-1) ? 0 : this.questionIndex;
                        this.Question_List = details;
                    }
                    /* this.isLoading = false; */
                    setTimeout(() => {this.isLoading = false}, 100);
                    this.questionIsLoaded = true;
                });

            },
            preventNav(event) {
                if (!this.isStart) return;
                event.returnValue = "";
            },
            async ReloadStatus() {
                await axios.get('/api/student/checking/' + this.$route.query.clwk)
                    .then(res => {
                        if (res.data.success == true) {
                            if (res.data.status != 'Submitted') {
                                this.CurrentTime = res.data.currentTime;
                                this.StartTime = res.data.startTime;
                            }
                        }
                        this.isReloadTime = false;
                    })
                    .catch(e => {
                        this.CurrentTime = Date.now();
                        this.isReloadTime = false;
                    })
            },
            async CheckStatus() {
                await axios.get('/api/student/checking/' + this.$route.query.clwk+'/'+this.$route.params.id)
                    .then(res => {
                        if (res.data.success == true) {
                            if (res.data.status != 'Submitted') {
                                this.isExamStart = true
                                this.Submitted_Answers = res.data.Submitted_Answers;
                                this.CurrentTime = res.data.currentTime;
                                this.StartTime = res.data.startTime;
                                this.questionIndex =  res.data.current_question == null ? 0 : res.data.current_question;
                                this.submission_id = res.data.submission_id;
                                this.duration = res.data.duration;
                                this.classworkDetails.title = res.data.title;
                                this.classworkDetails.points = res.data.points;
                                $('head > title').text(this.classworkDetails.title);
                                this.preventNav = !this.preventNav;
                                this.StartQuiz();

                               
                            } else {
                                this.isLoading = false;
                                //this.$router.push({name: 'result-page', params:{id: this.$route.query.clwk}})
                                //this.toastError('You already Submitted to this Quiz!, Please Contact your Instructor for retake');
                                this.$toasted.error(
                                    'You already Submitted to this Quiz, Please Contact your Instructor for quiz retake!', {
                                        theme: "toasted-primary",
                                        position: "top-center",
                                        icon: "warning",
                                        duration: 7000
                                    });
                                this.$router.push({
                                    name: 'clwk',
                                    params: {
                                        id: this.$route.params.id
                                    },
                                    query: {
                                        clwk: this.$route.query.clwk
                                    }
                                });
                            }
                        } else {
                            this.toastError(res.data.message);
                            this.$router.push({
                                name: 'clwk',
                                params: {
                                    id: this.$route.params.id
                                },
                                query: {
                                    clwk: this.$route.query.clwk
                                }
                            })
                        }
                    })
                    .catch(e => {
                        this.toastError('Something went wrong while loading Questions!');
                        this.$router.push({
                            name: 'clwk',
                            params: {
                                id: this.$route.params.id
                            },
                            query: {
                                clwk: this.$route.query.clwk
                            }
                        })
                    })
            },
            SelectMatch(id, main_index, second_index) {
                this.isNewChanges = true;
                let stringAns = this.FinalAnswers[main_index].Answer[second_index].Ans_letter != null ? 
                this.FinalAnswers[main_index].Answer[second_index].Ans_letter.replace(/\./g,'') : this.FinalAnswers[main_index].Answer[second_index].Ans_letter;
                let letter = stringAns != null ? stringAns.trim() : stringAns;
                let Answer = letter;
                this.FinalAnswers[main_index].Answer[second_index].Ans_letter = Answer;
                for (let i = 0; i < this.getAll_questions.Answer[main_index].SubAnswer.length; i++) {
                    for (let x = 0; x < this.getAll_questions.Answer[main_index].SubAnswer.length; x++) {
                        if (this.Alphabet[x].toUpperCase() == Answer.toUpperCase()) {
                            this.FinalAnswers[main_index].Answer[second_index].Answers = this.getAll_questions.Answer[
                                main_index].SubAnswer[x].Choice;
                            this.FinalAnswers[main_index].Answer[second_index].Ans_id = this.getAll_questions.Answer[
                                main_index].SubAnswer[x].id;
                        }
                    }
                }
            },
            StartQuiz() {
                this.isStart = true;
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
                //this.fetchQuestions();
                this.fetchQuestions_Id();
            },
            async saveActivityLog(description) {
                await axios.post('/api/objective-logs/logs', {
                    classwork_id: this.$route.query.clwk,
                    description: description,

                }).then((res) => {

                })
            },
            stopLeaveTimer(){
                 clearInterval(this.leaveTimer);
                 this.leaveTimerCount = 5;
                 this.triggerWarning();
            },
            starLeaveTimer(){
                this.warningDialog = true;
               /*  this.leaveTimer = setInterval(()=>{
                    this.leaveTimerCount--;
                    if(this.leaveTimerCount == 0){
                        this.triggerWarning()
                        clearInterval(this.leaveTimer);
                        this.leaveTimerCount = 5;
                    }
                },1000) */
            },
            triggerWarning() {
                if (this.isExamStart) {
                    this.leaveStrike += 1;


                    this.saveActivityLog('Switched tabs or applications / lost focus on the page.')

                    if (this.leaveStrike == 5) {
                        this.isExamStart = false;
                        //self.opener.location.reload();
                        
                        this.toastError('You are lossing focus to examination page many times!, Logs saved');

                        this.saveActivityLog(
                            `Student got ${this.leaveStrike} warnings, Student have been forced to leave the exam`)
                        .then(() => {
                            setTimeout(() => {
                                this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: this.$route.query.clwk}});
                            }, 300)
                                
                        });
                    }
                    if (!this.preventWarning) {
                        this.warningDialog = true;
                    }
                }
            },
            ReloadTime() {
               /*  this.ReloadStatus();
                this.isReloadTime = true; */
                //setTimeout(() => (this.isReloadTime = false), 300);
            },
            isOffline(event) {
                //this.setAsOffline();
                location.reload();
            },
            openFullscreen(elem) {

                if (document.body.requestFullscreen) {
                    document.body.requestFullscreen();
                } else if (document.body.webkitRequestFullscreen) {
                    
                    document.body.webkitRequestFullscreen();
                } else if (document.body.msRequestFullscreen) {
                   
                    document.body.msRequestFullscreen();
                }
            },
            toggleFullScreen() {
                var el = document.documentElement,
                    rfs = // for newer Webkit and Firefox
                    el.requestFullScreen ||
                    el.webkitRequestFullScreen ||
                    el.mozRequestFullScreen ||
                    el.msRequestFullScreen;
                if (typeof rfs != "undefined" && rfs) {
                    rfs.call(el);
                } else if (typeof window.ActiveXObject != "undefined") {
                    // for Internet Explorer
                    var wscript = new ActiveXObject("WScript.Shell");
                    if (wscript != null) {
                        wscript.SendKeys("{F11}");
                    }
                }
            },
            fetchQuestions_Id(){
                axios.get('/api/quiz/question_id/'+this.$route.query.clwk)
                .then((res)=>{
                   

                    let AnswersList = this.Submitted_Answers;
                    if (AnswersList == null || AnswersList.length == 0) {
                    this.Question_id_list = res.data;
                    this.Question_id_list.forEach(item => {

                        if(item.type == 'Identification' || item.type == 'Multiple Choice' 
                        || item.type == 'True or False' || item.type == 'Essay'){
                           this.FinalAnswers.push({
                                Answer: '',
                                Question_id: item.id,
                                answer_id: null,
                                type: item.type,
                                check: false,
                                score: 0,
                                timeConsume: null,
                            });  
                        }
                        else if (item.type == 'Matching type') {
                            let Ans = new Array();
                            let Choices_id = new Array();
                            let Quest_Pattern = {};
                            Quest_Pattern.SubQuestion = [];
                            Quest_Pattern.SubAnswer = [];

                            /* this.getAll_questions.Answer[index].SubAnswer.forEach(item => {
                                Choices_id.push({
                                    choice_id: item.id
                                })
                                Quest_Pattern.SubAnswer.push({
                                    id: item.id
                                })
                            });

                            this.getAll_questions.Answer[index].SubQuestion.forEach(item => {
                                Ans.push({
                                    Ans_letter: '',
                                    Ans_id: null,
                                    subquestion_id: item.id,
                                    Answers: ''
                                })
                                Quest_Pattern.SubQuestion.push({
                                    id: item.id
                                })
                            }); */

                            this.FinalAnswers.push({
                                Answer: [],
                                Choices_id: [],
                                question_pattern: [],
                                Question_id: item.id,
                                type: item.type,
                                timeConsume: null
                            });
                        }

                        item.isAnswered = false;   
                        });

                        this.TotalQuestion = 0;
                        this.TotalQuestion = this.Question_id_list.length;
                        this.questionIndex = this.questionIndex > (this.TotalQuestion-1) ? 0 : this.questionIndex;
                        axios.put('/api/question/store-answer/' + this.submission_id, {
                            type: "multiple",
                            current_question: this.questionIndex,
                            data: this.FinalAnswers
                        })

                 
                        this.getCurrentQuestion(res.data[0].id, 'new');
                        
                    } else {
                        let details = {};

            
                        for (let j = 0; j < AnswersList.length; j++) {
                             let count = 0;
                             res.data.forEach(item => {
                                if(AnswersList[j].Question_id == item.id){

                                    if (item.type == 'Identification' || item.type == 'Multiple Choice' || 
                                    item.type == 'True or False' || item.type == 'Essay') {
                                         this.FinalAnswers.push({
                                                Answer: AnswersList[j].Answer,
                                                Question_id: AnswersList[j].Question_id,
                                                answer_id: null,
                                                type: AnswersList[j].type,
                                                timeConsume: AnswersList[j].timeConsume,
                                        });
                                    }
                                    else if (item.type == 'Matching type') {
                                        let Ans = new Array();
                                        let Choices_id = new Array();
                                        let Quest_Pattern = {};
                                        Quest_Pattern.SubQuestion = [];
                                        Quest_Pattern.SubAnswer = [];


                                        /* res.data.Answer.SubAnswer.forEach(item => {
                                            Choices_id.push({
                                                choice_id: item.id
                                            })
                                            Quest_Pattern.SubAnswer.push({
                                                id: item.id
                                            })
                                        });

                                        let counter = 0;
                                        res.data.Answer.SubQuestion.forEach(item => {
                                            Ans.push({
                                                Ans_letter: AnswersList[j].Answer[counter].Ans_letter,
                                                Ans_id: AnswersList[j].Answer[counter].Ans_id,
                                                subquestion_id: item.id,
                                                Answers: AnswersList[j].Answer[counter].Answers,
                                            })

                                            Quest_Pattern.SubQuestion.push({
                                                id: item.id
                                            })
                                            counter++;

                                        }); */
                                        this.FinalAnswers.push({
                                            Answer: [],
                                            Choices_id: [],
                                            question_pattern: [],
                                            Question_id: AnswersList[j].Question_id,
                                            type: AnswersList[j].type,
                                            timeConsume: AnswersList[j].timeConsume
                                        });
                                    }
                                    this.Question_id_list.push(res.data[count]);
                                    
                                }
                                count++;

                             });

                        }
                        this.TotalQuestion = 0;
                        this.TotalQuestion = this.Question_id_list.length;
                        this.questionIndex = this.questionIndex > (this.TotalQuestion-1) ? 0 : this.questionIndex;
                        
                         this.Question_id_list.forEach(item => {
                            let check = false;
                            AnswersList.forEach(element => {
                                if(element.Question_id == item.id){
                                    if(element.Answer != null && element.Answer != ''){
                                        check = true;
                                    }
                                }
                            });

                            if(check){
                                item.isAnswered = true;
                            }
                        });

                        this.getCurrentQuestion(this.Question_id_list[this.questionIndex].id, 'current');
                    }
                    
                })
            },
            getCurrentQuestion(id, check){
                axios.get('/api/quiz/question/'+id)
                .then((res)=>{

                    if(check == 'new'){
                        this.Question_List.push(res.data);
                        this.CurrentQuestion = res.data;

                        if(res.data.type == "Matching type"){
                            let Ans = new Array();
                            let Choices_id = new Array();
                            let Quest_Pattern = {};
                            Quest_Pattern.SubQuestion = [];
                            Quest_Pattern.SubAnswer = [];


                            res.data.Choices.SubAnswer.forEach(item => {
                                Choices_id.push({
                                    choice_id: item.id
                                })
                                Quest_Pattern.SubAnswer.push({
                                    id: item.id
                                })
                            });


                            let counter = 0;
                            res.data.Choices.SubQuestion.forEach(item => {
                                Ans.push({
                                    Ans_letter: this.Submitted_Answers != null ? this.Submitted_Answers[this.questionIndex].Answer[counter].Ans_letter : null,
                                    Ans_id: this.Submitted_Answers != null ? this.Submitted_Answers[this.questionIndex].Answer[counter].Ans_id : null,
                                    subquestion_id: item.id,
                                    Answers: this.Submitted_Answers != null ? this.Submitted_Answers[this.questionIndex].Answer[counter].Answers : null,
                                })

                                Quest_Pattern.SubQuestion.push({
                                    id: item.id
                                })
                                counter++;

                            })

                            this.FinalAnswers[this.questionIndex].Answer = Ans;
                            this.FinalAnswers[this.questionIndex].Choices_id = Choices_id;
                            this.FinalAnswers[this.questionIndex].question_pattern = Quest_Pattern;                            
                        }   
                    }
                    else {
                        this.CurrentQuestion = res.data;
                    }  
                    
                    setTimeout(() => {this.isLoading = false}, 100);
                    this.questionIsLoaded = true;
                })

                
            },

            async nextQuestion(id){
                let check = false;
                this.isExamStart = true;
                this.isSavingAnswer = true;
                if (this.isNewChanges == true) {
                    this.updateAnswer();
                    this.isNewChanges = false
                }

                for (let index = 0; index < this.Question_List.length; index++) {
                        if(this.Question_List[index].id == id){
                        check = true;
                         this.CurrentQuestion = this.Question_List[index];
                        break;
                    }
                }
                
                if(!check){
                     await axios.get('/api/quiz/question/'+id)
                    .then((res)=>{
                        this.Question_List.push(res.data);
                        this.CurrentQuestion = res.data;
                        if (this.questionIndex != this.Question_id_list.length - 1) {
                            setTimeout(() => (this.isSavingAnswer = false, this.questionIndex++), 500);
                        }
                    })
                }else{
                    if (this.questionIndex != this.Question_id_list.length - 1) {
                            setTimeout(() => (this.isSavingAnswer = false, this.questionIndex++), 500);
                        }
                }
                

            },

            async previousQuestion(id){
               /*  if (this.isNewChanges == true) {
                    this.updateAnswer();
                    this.isNewChanges = false
                } */
                //this.questionIndex--;
                let check = false;

                for (let index = 0; index < this.Question_List.length; index++) {
                    if(this.Question_List[index].id == id){
                        this.CurrentQuestion = this.Question_List[index];
                        check = true;
                        this.questionIndex--;
                        break;
                    }
                }

                if(!check){
                    await axios.get('/api/quiz/question/'+id)
                    .then((res)=>{
                        this.Question_List.push(res.data);
                        this.CurrentQuestion = res.data;
                        this.questionIndex--;
                    })
                }              
            }
           
        },
        beforeMount() {

            /* window.addEventListener("offline", this.isOffline);
            window.addEventListener("onbeforeunload", this.preventNav);
            let self = this;
            $(window).blur(function () {
                self.triggerWarning();


            }); */

        },
        beforeRouteLeave(to, from, next) {
            if (this.isExamStart) {
                if (!window.confirm("Leave without saving?")) {

                    return;
                }
            }
            this.isLeavingPage = true;

            if(!this.isSubmitting){
                this.LeaveSaveAnswer();
            }
            
            next();
        },
        async mounted() {
            //this.toggleFullScreen();
            //this.openFullscreen(document.body);
            this.CheckStatus();
        },
        beforeDestroy() {

            if(!this.isSubmitting){
                this.LeaveSaveAnswer();
            }
            window.removeEventListener('onbeforeunload', this.preventNav)
        },

    }

</script>

<style>
    .centered-input>>>input {
        text-align: center
    }

    .post-content img {
        max-width: 100%;
        max-height: 23rem !important;
    }

 

    .ql-editor img {
        max-height: 20rem !important;
        max-width: 80%;
    }

    .centered-input input {
        text-align: center
    }

    .Essayeditor .ql-editor{
        min-height: 250px !important;
        max-height: 35rem !important;
    }

    .Identificationeditor .ql-editor{
        min-height: 80px !important;
        max-height: 25rem !important;
    }

</style>
