<template>
<div class="pa-1">

<v-hover v-slot="{ hover }">
    <div>
        <v-app-bar
       v-if="!isloading && Qlength != 0 && $vuetify.breakpoint.mdAndUp"
        @click="AddNewQuestion"
        :elevation="hover ? '10' : '2'"
        :style="$vuetify.breakpoint.mdAndUp && !fab  ? 
        'position: fixed !important;z-index: 2;width: 130px !important;top: 8em !important;margin-left: 0.5em !important;cursor:pointer;' : 
        $vuetify.breakpoint.mdAndUp && fab ?
        'position: fixed !important;width: 130px !important;z-index: 2;top: 5.5em !important;margin-left: 0.5em !important;cursor:pointer;' : ''"
        dense clipped-right shaped class="fixed-bar" floating  color="blue"  >
            <v-chip
            style="cursor:pointer;"
            class="ma-4"
            color="blue"
            text-color="white">
            <v-avatar left size="50" tile>
                <v-icon style="font-size:1.5rem" left>mdi-plus</v-icon>
            </v-avatar>
            <span class="font-weight-bold">
                ADD
            </span>
            </v-chip>
        </v-app-bar>
    </div>
</v-hover>


<v-hover v-slot="{ hover }">
    <div>
    <v-app-bar  
    :elevation="hover ? '10' : '2'"
    @click="SaveAllQuestion()"
    v-if="!isloading && Qlength != 0 && $vuetify.breakpoint.mdAndUp"
    :style="$vuetify.breakpoint.mdAndUp && !fab ? 
    'position: fixed !important;z-index: 2;width: 130px !important;top: 4em !important;margin-left: 0.5em !important;cursor:pointer;' : 
    $vuetify.breakpoint.mdAndUp && fab ?
    'position: fixed !important;width: 130px !important;z-index: 2;top: 1.5em !important;margin-left: 0.5em !important;cursor:pointer;' : ''"
    
    dense clipped-right shaped class="fixed-bar" floating  color="primary"  >
        <v-chip
        style="cursor:pointer;"
        class="ma-2"
        color="primary"
        text-color="white">
        <v-avatar left size="50" tile>
            <v-icon style="font-size:1.5rem" left>mdi-content-save-all-outline</v-icon>
        </v-avatar>
        <span class="font-weight-bold">

            {{isSavingAllQuestion ? 'SAVING..' : 'SAVE'}}
        </span>
        </v-chip>
    </v-app-bar>
    </div>
</v-hover>


<div transition="slide-y-reverse-transition">
    <v-app-bar elevation="5" 
    v-if="selectedDataCount != 0 || !$vuetify.breakpoint.mdAndUp"
    :style="$vuetify.breakpoint.lgAndUp ? 'margin-left:25rem !important;margin-right:25rem !important' 
    : $vuetify.breakpoint.md ? 'margin-left:10rem !important;margin-right:10rem !important' :
    $vuetify.breakpoint.sm ||  $vuetify.breakpoint.xs ? '' :''
    
    "  :bottom="$vuetify.breakpoint.mdAndUp " app :dense="$vuetify.breakpoint.mdAndUp"  color="primary"  >
     <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
         <v-btn dark rounded icon text 
            v-if="!$vuetify.breakpoint.mdAndUp"
            @click="$router.push({name: 'classwork'})" >
            <v-icon >mdi-arrow-left-thick</v-icon>
        </v-btn>

        <v-divider  v-if="!$vuetify.breakpoint.mdAndUp" vertical></v-divider>
        <div v-if="selectedDataCount != 0"  :class="$vuetify.breakpoint.mdAndUp ? 'white--text' : 'white--text pl-2'">
            {{selectedDataCount}} Question Selected
        </div>
         <v-spacer></v-spacer>
        <v-btn v-if="selectedDataCount != 0" @click="SelectAll" dark text>
            <v-icon :left="$vuetify.breakpoint.mdAndUp">
                {{selectedDataCount != getAll_questions.Question.length ? 'mdi-checkbox-blank-outline' : 'mdi-checkbox-marked'}}
            </v-icon>
            
            {{$vuetify.breakpoint.mdAndUp ? 'Select All': ''}}
        </v-btn>
        <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
        <v-btn v-if="selectedDataCount != 0" @click="Deletedialog = !Deletedialog" dark text>
            <v-icon :left="$vuetify.breakpoint.mdAndUp">
                mdi-delete
            </v-icon>
            {{$vuetify.breakpoint.mdAndUp ? 'Delete': ''}}
        </v-btn>
        <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
        <v-btn @click="mulipleDuplicate" v-if="selectedDataCount != 0" dark text>
            <v-icon :left="$vuetify.breakpoint.mdAndUp">
                mdi-content-copy
            </v-icon>
            {{$vuetify.breakpoint.mdAndUp ? 'Duplicate': ''}}
        </v-btn>
        <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
        <v-btn v-if="$vuetify.breakpoint.mdAndUp" @click="UnselectAll" dark icon>
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
          <v-btn @click="SaveAllQuestion" dark text v-if="!$vuetify.breakpoint.mdAndUp">
           
            Save
        </v-btn>

</v-app-bar>
</div>


<v-overlay :value="isLeaving">
    <v-progress-circular
        indeterminate
        size="64"
    ></v-progress-circular>
</v-overlay>

<!-- <v-container class="fill-height" v-if="isloading" style="height: 570px;"> -->
    <v-row class="centered" v-if="isloading" align-content="center" justify="center">
        <v-col cols="12" class="text-center">
            <vue-element-loading :active="isloading" 
            text="Loading"
            duration="0.7"
            :textStyle="{fontSize: '20px'}"
            spinner="line-scale" color="#EF6C00"  size="60" />
        </v-col>
    </v-row>

    <v-row v-if="isAddingNewQuestion" align-content="center" justify="center">
        <v-col cols="12" class="text-center">
            <vue-element-loading :active="isAddingNewQuestion" 
            duration="0.7"
             :is-full-screen="true"
            :textStyle="{fontSize: '20px'}"
            spinner="line-scale" color="#EF6C00"  size="60" />
        </v-col>
    </v-row>
<!-- </v-container> -->

<v-row class="centered" :style="$vuetify.breakpoint.mdAndUp ? '' : 'width:330px !important'" justify="center" v-if="Qlength== 0 && !isloading">
    <v-col cols="12"  class="text-center">
        <v-icon style="font-size:8rem">
            mdi-book-open-variant
        </v-icon>
        <h1 v-if="$vuetify.breakpoint.mdAndUp"> Empty Question </h1>
        <h2 v-else> Empty Question </h2>
        <p> Start adding question for this classwork.</p>
        <v-btn color="primary" @click="AddNewQuestion"> Add Question </v-btn>
    </v-col>
</v-row>


<v-container v-if="!isloading && Qlength != 0" pa-0 ma-0 class="pa-0 ma-0" fluid>
        <v-row align="center" justify="center">

        
          <v-col cols="12" md="8" lg="9" xl="9" :class="mainIndex < 1 ? 'mb-0' : 'mb-0 pt-1'" v-for="(item, mainIndex) in getAll_questions.Question" :key="item.id">
            
           <!--  <transition-group name="fade-in" mode="out-in"> -->
            <v-card flat  outlined style="border-top: 3px solid #2196F3"   :class="mainIndex < 1 ?  'pa-3 mb-0 rounded' : 'pa-3 mb-0 rounded mt-0'" elevation="1" >
               <!--      <vue-element-loading :active="isAdding" text="Adding..." spinner="bar-fade-scale" /> -->
       <!--   justify-end  -->
                    <v-row>
                        <v-col cols="12" class="mb-0 pb-0 pt-0  mt-0 d-flex justify-space-between ">
                            <span class="ml-2 mt-3"><h4>{{mainIndex+1}}</h4> </span>
                            <v-checkbox v-model="selectedData[mainIndex].selected" @click="CheckSelectedCount(selectedData[mainIndex].selected)" hide-details></v-checkbox>
                        </v-col>
                         <v-col cols="12" class="mb-0 pb-0 pt-0 pr-6 mt-3 text-right ">
                            <v-btn small @click="selectedData[mainIndex].isEditing = false"
                            v-if="selectedData[mainIndex].isEditing" outlined color="primary" rounded>Preview</v-btn>
                        </v-col>
                    </v-row>

                    <div style="cursor:pointer" @click="selectedData[mainIndex].isEditing = true" v-if="!selectedData[mainIndex].isEditing">
                        <viewQuestion  :question="item" :answer="getAll_questions.Answer[mainIndex]" v-if="!selectedData[mainIndex].isEditing"></viewQuestion>
                    </div>
                       
                    <div v-else>
                    <v-form class="mt-0 pt-0" ref="form" v-model="valid" lazy-validation>
                        <v-row >
                            <v-col   cols="12" md="12" class="pl-7 pr-9 pt-8">
                                <v-row mb-0 pb-0 class="pa-0 ma-0">
                                    <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                        <v-text-field 
                                        min="0"
                                        dense
                                         @change="isNewChanges = true"
                                        :rules="PointsRule" outlined type="number" 
                                        v-model="item.points" class="centered-input pa-0 ma-0"
                                        label="Points"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col class="pa-0 ma-0 pl-2 pl-sm-0 text-right" cols="9" md="11" lg="11">
                                         <v-select
                                         dense
                                            v-model="item.type"
                                            class="pa-0 ma-0 float-right"
                                            :items="Question_type"
                                            @change="CheckType(item.id, item.type, mainIndex)"
                                            outlined
                                            label="Question Type"
                                            ></v-select> 
                                    </v-col>
                                </v-row>

                                <v-container class="pa-0 ma-0" ma-0 pa-0> 
                                    <div class="font-weight-medium">{{item.type != 'Matching type' ? 'Question' : 'Instuction'}}</div>
                                    <v-row class="pa-0 ma-0">
                                        <v-col class="pa-0 ma-0 mt-2 mb-2" cols="12">
                                            <div style="width:100%" class="mb-3">
                                                    <quill-editor
                                                    :disabled="quill_disabled"
                                                    class="editor"
                                                     @change="isNewChanges = true"
                                                    ref="myTextEditor"
                                                    placeholder="Question" 
                                                    v-model="item.question"
                                                    :options="editorOption"/>
                                                    <small v-if="!valid && item.question == ''" class="error--text">*This field is required</small>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                <v-container  v-if="item.type == 'Multiple Choice'"> 
                                    <v-row>
                                        <div class="font-weight-medium">Options</div>
                                        <v-col class="ma-0 pa-0 ml-2 mt-1" cols="12" lg="12" md="12" v-for="(Ans, i) in getAll_questions.Answer[mainIndex].options" :key="Ans.id">
                                                <v-row>
                                                    <v-col cols="12" lg="12" md="12" >
                                                        <v-container  class="d-flex flex-row ma-0 pa-0">
                                                        <v-radio-group  v-model="item.answer">
                                                            <v-radio
                                                            :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                                @click="Ans.Choice == item.answer"
                                                                color="primary"
                                                                class="pa-0 ma-0"
                                                                :disabled="Ans.Choice == null"
                                                                 @change="isNewChanges = true"
                                                                :key="Ans.id"
                                                                name="Answer" 
                                                                :value="Ans.Choice">
                                                                </v-radio>
                                                        </v-radio-group>
                                                              <div style="width:100%" class="mb-3">
                                                                 <quill-editor
                                                                :disabled="quill_disabled"
                                                                 @change="isNewChanges = true"
                                                                class="editor"
                                                                ref="myTextEditor"
                                                                v-model="Ans.Choice"
                                                                :options="editorOption"/>
                                                            </div>
                                                    
                                                            <v-btn
                                                                @click="RemoveOption(Ans.id,mainIndex,i,item.type)"
                                                                icon class="mt-2 pl-2 pr-2">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-container>
                                                    </v-col>
                                                </v-row>
                                        </v-col>
                                        <v-col  class="pa-0 ma-0 pt-5" cols="12" md="12" lg="12">
                                            <v-btn
                                            rounded
                                            outlined
                                            block
                                            class="mb-0 pb-0"
                                            color="primary"
                                            @click="AddNewOption(item.id, mainIndex)">
                                            <v-icon dark left large>mdi-plus</v-icon>
                                            Add Choice
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                <v-container mb-0 pb-0 v-if="item.type == 'Identification'">
                                    <v-row ma-0 pa-0>
                                        <div class="font-weight-medium">Answer(s)</div>
                                        <v-col v-for="(Answer, i) in getAll_questions.Answer[mainIndex].options" :key="i"  ma-0 pa-0 class="ma-0 pa-0 mt-2" cols="12">
                                            <!--   <div style="width:100%" class="mb-3 d-flex flex-row"> -->
                                                  <v-container  class="d-flex flex-row ma-0 pa-0">
                                                      <div style="width:100%" class="mb-3">
                                                        <quill-editor
                                                        :disabled="quill_disabled"
                                                        @change="isNewChanges = true"
                                                        class="editor"
                                                        placeholder="Answer"
                                                        ref="myTextEditor"
                                                        v-model="Answer.Choice"
                                                        :options="editorOption"/>
                                                      </div>

                                                      <v-btn
                                                    @click="RemoveOption(Ans.id,mainIndex,i,item.type)"
                                                    icon class="mt-2 pl-2 pr-2">
                                                    <v-icon>mdi-close</v-icon>
                                                </v-btn>
                                                  </v-container>
                                      <!--       </div> -->
                                        </v-col>
                                          <v-col  class="pa-0 ma-0 pt-5" cols="12" md="12" lg="12">
                                            <v-btn
                                            rounded
                                            outlined
                                            block
                                            class="mb-0 pb-0"
                                            color="primary"
                                            @click="AddAnswer(item.id, mainIndex)">
                                            <v-icon dark left large>mdi-plus</v-icon>
                                            Add Answer
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                <v-container class="ma-0 pa-0 mt-2 pl-3 pr-4"  v-if="item.type == 'True or False'">
                                    <v-row >
                                        <v-col cols="12" class="pl-0 ml-0">
                                             <div class="font-weight-medium">Options</div>
                                        </v-col>
                                       
                                        <v-col v-for="(x, n) in inputCheck" :key="n" class="ma-0 pa-0" cols="11">
                                            <v-container class="d-flex flex-row ma-0 pa-0">
                                                <v-radio-group :rules="rules" v-model="item.answer">
                                                    <v-radio
                                                    :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                    @click="isNewChanges = true"
                                                    color="primary"
                                                    :key="n"
                                                    name="Answer" 
                                                    :value="inputCheck[n]"
                                                    ></v-radio>
                                                </v-radio-group>

                                                    <v-textarea
                                                    readonly
                                                    rows="1"
                                                    outlined
                                                    class="pa-0 ma-0"
                                                    :value="inputCheck[n]"
                                                    auto-grow
                                                    required
                                                    ></v-textarea>
                                                </v-container>
                                        </v-col>
                                         
                                    </v-row>
                                </v-container>

                                 <v-container mb-0 pb-0 v-if="item.type == 'Matching type'">
                                    <v-row ma-0 pa-0>
                                        <v-col  v-for="(SubQues, sub_index) in getAll_questions.Answer[mainIndex].SubQuestion" :key="SubQues.id" ma-0 pa-0 class="ma-0 pa-0" cols="12">
                                           <v-row>
                                               <v-col  cols="12">
                                                    <div class="font-weight-medium">{{'Pair '}}{{sub_index+1}}</div>
                                                   <v-container  class="d-flex flex-row ma-0 pa-0">                                                                              
                                                    <div style="width:100%"  class=" pr-2 mb-3">
                                                          <quill-editor
                                                            :disabled="quill_disabled"
                                                             @change="isNewChanges = true"
                                                            class="editor"
                                                            :placeholder="'Question '+(sub_index+1)" 
                                                            ref="myTextEditor"
                                                            v-model="SubQues.sub_question"
                                                            :options="editorOption"/>
                                                        </div>
                                                     <div style="width:100%" class="mb-3" >
                                                            <quill-editor
                                                            @change="isNewChanges = true"
                                                             :disabled="quill_disabled"
                                                            class="editor"
                                                            :placeholder="'Answer '+(sub_index+1)" 
                                                            ref="myTextEditor"
                                                            v-model="getAll_questions.Answer[mainIndex].SubAnswer[sub_index].Choice"
                                                            :options="editorOption"/>
                                                      </div>

                                                     <v-btn
                                                        @click="RemoveMatch(item.id, SubQues.id, getAll_questions.Answer[mainIndex].SubAnswer[sub_index][0].id, mainIndex,  sub_index)"
                                                        icon class="mt-12 pl-2 pr-2">
                                                        <v-icon>mdi-close</v-icon>
                                                    </v-btn>
                                                    </v-container>
                                               </v-col>
                                           </v-row>
                                        </v-col>
                                        <v-col class="ma-0 pa-0 text-right pb-2">
                                            <v-btn
                                            block 
                                            rounded
                                            outlined
                                            class="mt-2"
                                            color="primary"
                                            @click="AddNewMatch(item.id, mainIndex)"
                                            >
                                            <v-icon left>mdi-plus</v-icon>
                                             Add  Match
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                 <!-- <v-container mb-0 pb-0  v-if="item.type == 'Essay'">
                                    <v-row ma-0 pa-0>
                                    </v-row>
                                </v-container> -->
                                <v-container class="pt-0 mt-0">
                                     <v-switch
                                     v-if="item.type == 'Identification'"
                                        v-model="item.sensitivity"
                                        hide-details
                                        class="float-right"
                                        label="Case Sensitive">
                                    </v-switch>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-form> 

                    <v-row>
                        <v-col cols="12" class="mb-0 pb-5 pt-0 pr-2  mt-0 text-right pr-3">
                            <v-tooltip  style="height:5px !important" eager  bottom>
                                <template v-slot:activator="{ on, attrs }">
                                      <v-btn @click="singleDuplicate(item, getAll_questions.Answer[mainIndex])" v-bind="attrs" v-on="on" icon>
                                        <v-icon>mdi-content-copy</v-icon>
                                    </v-btn>
                                </template>
                                <span style="font-size:10px">Duplicate Question</span>
                            </v-tooltip>
                            <v-tooltip  style="height:5px !important" eager  bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn @click="openDeleteDialog(item, mainIndex)" v-bind="attrs" v-on="on" icon>
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                 </template>
                                <span style="font-size:10px">Delete Question</span>
                            </v-tooltip>
                        
                        </v-col>
                        
                    </v-row>
                   </div>            
            </v-card>
           <!--  </transition-group> -->
          </v-col>
           
        </v-row>
      </v-container>

       <v-scale-transition>
       <!--  <v-btn
            fab
            v-show="fab"
            v-scroll="onScroll"
            fixed
            bottom
            right
            color="primary"
            @click="toTop"
        >
            <v-icon>mdi-arrow-up</v-icon>
        </v-btn> -->

        <v-btn fab fixed bottom right color="primary"
             v-if="!$vuetify.breakpoint.mdAndUp"
            @click="AddNewQuestion">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-scale-transition>

    <div>
    <v-snackbar  bottom left v-model="showSnackbar">
        <v-icon left>{{ isSavingAllQuestion ? 'mdi-content-save-move' : 'mdi-check'}}</v-icon>
      {{ isSavingAllQuestion ? 'Saving..' : 'Success' }}
    </v-snackbar>
    </div>


     <v-dialog v-model="Deletedialog" persistent max-width="430">
            <deleteDialog 
            v-on:toggleDialog="Deletedialog = !Deletedialog"
            v-on:confirmRemove="DeleteSelected"
            v-if="Deletedialog"></deleteDialog>
    </v-dialog>

     <v-dialog v-model="DeleteSingledialog" persistent max-width="430">
            <deleteDialogQuestion 
            :DeleteDetails='DeleteDetails'
            v-on:toggleDialog="DeleteSingledialog = !DeleteSingledialog"
            v-on:confirmRemove="deleteSingleQuestion"
            v-if="DeleteSingledialog">
            </deleteDialogQuestion>
    </v-dialog>

    
</div>
</template>
<script>

import {mapGetters, mapActions} from "vuex";
const deleteDialog = () => import('./dialogs/deleteDialog')
const deleteDialogQuestion = () => import('./dialogs/deleteDialogQuestion')
const viewQuestion = () => import('./viewQuestion')


export default {
    components:{
        deleteDialog,
        viewQuestion,
        deleteDialogQuestion
    },
    data(){
        return{
            Question_type:['Multiple Choice', 'Identification', 'True or False', 'Matching type','Essay'],
            isloading: true,
            isLeaving: false,
            valid: false,
            inputCheck:['True','False'],
            rules: [
                v => !!v || 'required'
            ],
             PointsRule: [
                v => !!v || 'required',
                v => (v && v != 0) || 'Must assign atleast 1 points',
            ],
            editorOption: {
                placeholder: 'type here ...',
                blur: true,
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [{ 'list': 'bullet' }],
                        ['image']
                    ],
                    syntax: {
                        highlight: text => hljs.highlightAuto(text).value
                    }
                }
            },
            fab: null,
            quill_disabled: true,
            Qlength: null,
            selectedData: [],
            selectedDataCount: 0,
            isSavingAllQuestion: false,
            showSnackbar: false,
            Deletedialog: false,
            DeleteSingledialog: false,
            isNewChanges: false,
            DeleteDetails: null,
            DeleteIndex: null,
            DuplicateQuestion:[],
            DuplicateAnswers:[],
            isAddingNewQuestion: false,
        }
    },
    watch: {
        fab(value) {
        if (value) {
            this.color = "white";
            this.flat = false;
        } else {
            this.color = "transparent";
            this.flat = true;
        }
        },
    },
    computed: mapGetters(["getAll_questions"]),
    methods:{
       async AddNewQuestion(){
           this.isAddingNewQuestion = true;
           axios.post('/api/question/add_new_question', {
               classwork_id: this.$route.query.clwk,
                new_number : (this.getAll_questions.Question.length+1),
                })
           .then((res)=>{
               if(res.data.success == true){
                   this.Qlength+=1;
                   this.getAll_questions.Question.push({
                   id: res.data.question_id,
                   question: '<p>'+'New Question '+ (this.getAll_questions.Question.length+1)+'</p>',
                   answer: '<p>'+'Option 1'+'</p>',
                   points: 0,
                   type: 'Multiple Choice',
                   sensitivity: 0,
               })
               this.getAll_questions.Answer.push({options:
                   [
                       {
                            id : res.data.choice1_id,
                            Choice : '<p>'+'Option 1'+'</p>',
                            question_id : res.data.question_id,
                       }
                   ],
                   SubQuestion:[],
                   SubAnswer:[]

               });

               //this.getAll_questions.Question.forEach(item => {
                    this.selectedData.push({
                        id: res.data.question_id,
                        selected: false,
                        isEditing: true
                    })  
                //});

               this.$toasted.show('New Question Added', {
                    theme: "toasted-primary",
                    position: "top-center",
                    duration: 3000,
                });
               }

               this.isAddingNewQuestion = false;
               
           })
            


        },

        async AddAnswer(id, Mainindex){
            this.isNewChanges = true;
            this.getAll_questions.Answer[Mainindex].options.push({
                id : '',
                Choice : '<p>'+'Answer '+(this.getAll_questions.Answer[Mainindex].options.length+1)+'</p>',
                question_id : id,
            })
        },

        async AddNewOption(id, Mainindex){
            this.isNewChanges = true;
            this.getAll_questions.Answer[Mainindex].options.push({
                id : '',
                Choice : '<p>'+'Option '+(this.getAll_questions.Answer[Mainindex].options.length+1)+'</p>',
                question_id : id,
            })
        },
        async AddNewMatch(id, mainIndex){
            
             this.isNewChanges = true;
            /* if(this.getAll_questions.Answer[mainIndex].SubQuestion == null){
                
                this.getAll_questions.Answer[mainIndex].SubQuestion = [{
                        id: null,
                        answer_id: null,
                        sub_question: ''
                    }
                ]
                this.getAll_questions.Answer[mainIndex].SubAnswer = [{
                        id : null, 
                        Choice : '',
                        question_id : id
                    }
                ]
            }
            else{ */
                this.getAll_questions.Answer[mainIndex].SubQuestion.push({
                    id: null,
                    answer_id: null,
                    sub_question: ''
                })
                this.getAll_questions.Answer[mainIndex].SubAnswer.push({
                    id : null, 
                    Choice : '',
                    question_id : id
                })
            //}
            
        },
        async RemoveOption(id,Mainindex , AnsIndex, type){
            if(id == null || id == ''){
                 this.getAll_questions.Answer[Mainindex].options.splice(AnsIndex,  1);
            }
            else{
                 axios.put('/api/question/remove_question_option/'+id, {type: type})
                .then((res)=>{
                    this.getAll_questions.Answer[Mainindex].options.splice(AnsIndex,  1);
                })
            }
           
        },
        async RemoveMatch(main_id, sub_quesId, answer_id, main_index,match_index){
              axios.put('/api/question/remove_question_match/'+main_id, {sub_question_id: sub_quesId, answer_id:answer_id })
            .then((res)=>{
                this.getAll_questions.Answer[main_index].SubQuestion.splice(match_index,  1);
                this.getAll_questions.Answer[main_index].SubAnswer.splice(match_index,  1);
            })
        },
        async UpdateQuestion(id, Mainindex){
            axios.put('/api/question/update_question_details/'+id, {
                question: this.getAll_questions.Question[Mainindex],
                answer: this.getAll_questions.Answer[Mainindex],
            })
            .then((res)=>{
            })
        },
        CheckType(id, type, mainIndex){
                this.isNewChanges = true;
                if(type == 'Multiple Choice'){
                    if(this.getAll_questions.Answer[mainIndex].options.length == 0){
                        this.getAll_questions.Answer[mainIndex].options.push({
                            id : '',
                            Choice : '',
                            question_id : id,
                        })
                    }
                }
                else if(type == 'Matching type'){
                    let tmp = this.getAll_questions.Answer[mainIndex].SubQuestion;
                    if(tmp.length == 0){
                        this.getAll_questions.Answer[mainIndex].SubQuestion.push({
                            id: null,
                            answer_id: null,
                            sub_question: ''
                        })
                        this.getAll_questions.Answer[mainIndex].SubAnswer.push({
                            id : null, 
                            Choice : '',
                            question_id : id
                        })
                    }
                }
        },
        async SaveAllQuestion(){
            this.isAddingNewQuestion = true;
            this.showSnackbar = true
            this.isSavingAllQuestion = true;
            axios.put('/api/question/save_all_question/'+this.$route.query.clwk, this.getAll_questions)
            .then((res)=>{
                if(res.data.success == true){
                    this.isSavingAllQuestion = false;
                    this.isNewChanges = false;
                     setTimeout(() => {
                          this.showSnackbar = false;
                    }, 3000);
                }
                this.isAddingNewQuestion = false;
            })
        },
        CheckSelectedCount(check){
            if(check == true){
                this.selectedDataCount+=1;
            }
            else{
                this.selectedDataCount = this.selectedDataCount == 0 ? this.selectedDataCount = 0 : this.selectedDataCount-=1;
            }
        },
        SelectAll(){
            if(this.selectedDataCount == this.getAll_questions.Question.length){
                  this.selectedData.forEach(item => {
                    item.selected = false;
                });
                this.selectedDataCount = 0;
            }
            else{
                 this.selectedDataCount = 0;
                 this.selectedData.forEach(item => {
                    item.selected = true;
                    this.selectedDataCount++;
                });
            }
        },
        UnselectAll(){
            this.selectedData.forEach(item => {
                item.selected = false;
            });
            this.selectedDataCount = 0;
        },
        DeleteSelected(){
            this.isAddingNewQuestion = true;
            let question_id_list = [];
            let question_index = 0;
            this.selectedData.forEach(item => {
                if(item.selected == true){
                    question_id_list.push({
                        question_id: item.id,
                    })
                }
                question_index++;
            });

            axios.put('/api/question/delete_selected_question/'+this.$route.query.clwk, {question: question_id_list})
            .then((res)=>{
                if(res.data.success == true){
                    this.Deletedialog = !this.Deletedialog;
                    question_id_list.forEach(item => {
                        let tmp_question = this.getAll_questions.Question;
                        for (let index = 0; index <  tmp_question.length; index++) {
                            if(item.question_id == tmp_question[index].id){
                                this.getAll_questions.Question.splice(index, 1);
                                this.getAll_questions.Answer.splice(index, 1);
                                this.selectedData.splice(index, 1);
                            }
                        }
                    });

                     this.$toasted.show('Question has been deleted', {
                        theme: "toasted-primary",
                        position: "top-center",
                        duration: 5000,
                    });

                    this.selectedDataCount = 0;
                    if(this.getAll_questions.Question.length == 0){
                        this.Qlength = 0;
                    }
                    this.isAddingNewQuestion = false;
                }
            })
        },
        openDeleteDialog(data, index){
            this.DeleteIndex = index;
            this.DeleteDetails = data;
            this.DeleteSingledialog = true;
        },
        async deleteSingleQuestion(){
            axios.delete('/api/question/remove/'+this.DeleteDetails.id)
            .then(res=>{
                this.getAll_questions.Question.splice(this.DeleteIndex, 1);
                this.getAll_questions.Answer.splice(this.DeleteIndex, 1);
                this.selectedData.splice(this.DeleteIndex, 1);
                this.DeleteSingledialog = false
                this.DeleteDetails = null;
            })
        },
        singleDuplicate(question, answer){
            this.isAddingNewQuestion = true;
            this.DuplicateQuestion = [];
            this.DuplicateAnswers = [];
            this.DuplicateQuestion.push(question);
            this.DuplicateAnswers.push(answer);
            this.DuplicateQuestionAction();
        },
        mulipleDuplicate(){
            this.isAddingNewQuestion = true;
            this.DuplicateQuestion = [];
            this.DuplicateAnswers = [];
            for (let i = 0; i < this.selectedData.length; i++) {
                if(this.selectedData[i].selected == true){
                    this.DuplicateQuestion.push(this.getAll_questions.Question[i]);
                    this.DuplicateAnswers.push(this.getAll_questions.Answer[i]);
                }
            }
            this.DuplicateQuestionAction();

        },
        async DuplicateQuestionAction(){
            axios.put('/api/question/store_duplicate_question/'+this.$route.query.clwk, {
                question: this.DuplicateQuestion,
                answer: this.DuplicateAnswers
            })
            .then((res)=>{
                this.isNewChanges = false;
                for (let i = 0; i < res.data.question_id.length; i++) {
                    this.getAll_questions.Question.push({
                        id: res.data.question_id[i],
                        question: this.DuplicateQuestion[i].question,
                        answer:  this.DuplicateQuestion[i].answer,
                        points: this.DuplicateQuestion[i].points,
                        type: this.DuplicateQuestion[i].type,
                        sensitivity: this.DuplicateQuestion[i].sensitivity,
                    })
                    this.selectedData.push({
                        id: res.data.question_id,
                        selected: false,
                        isEditing: true
                    }) 
                    this.getAll_questions.Answer.push({options:[],SubQuestion:[], SubAnswer:[]});

                     if(this.DuplicateQuestion[i].type == 'Multiple Choice'){
                         for (let j = 0; j < res.data.answer_id[i].options_id.length; j++) {
                             this.getAll_questions.Answer[this.getAll_questions.Answer.length-1].options.push({
                                id : res.data.answer_id[i].options_id[j],
                                Choice : this.DuplicateAnswers[i].options[j].Choice,
                                question_id : res.data.question_id[i],
                            })
                         }
                     }
                     else if(this.DuplicateQuestion[i].type == 'Matching type'){
                         for (let j = 0; j < res.data.answer_id[i].SubQuestion_id.length; j++) {
                             this.getAll_questions.Answer[this.getAll_questions.Answer.length-1].SubQuestion.push({
                                id : res.data.answer_id[i].SubQuestion_id[j],
                                sub_question : this.DuplicateAnswers[i].SubQuestion[j].sub_question,
                                answer_id : res.data.answer_id[i].SubAnswer_id[j],
                            })

                             this.getAll_questions.Answer[this.getAll_questions.Answer.length-1].SubAnswer.push({
                                id : res.data.answer_id[i].SubAnswer_id[j],
                                Choice : this.DuplicateAnswers[i].SubAnswer[j].Choice,
                                question_id : res.data.question_id[i],
                            })
                         }
                     }
                    
                }
                this.isAddingNewQuestion = false;
                this.UnselectAll();
                
            })
        },
        onScroll(e) {
        if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top;
        },
        toTop() {
            this.$vuetify.goTo(0);
        },
         confirmLeave() {
            return window.confirm('Do you really want to leave? you have unsaved changes!')
        },
        beforeWindowUnload(e) {
        if (this.isNewChanges == true) {
            // Cancel the event
            e.preventDefault()
            // Chrome requires returnValue to be set
            e.returnValue = ''
        }   
    },
          
    },
    created(){
         this.$nextTick(()=>{
            this.quill_disabled=false;
        })
    },
    beforeRouteLeave (to, from, next) {
        this.isLeaving = true;
        if (this.isNewChanges == true){
             if (!window.confirm("You have new changes! Do you want to save?")) {
             
               next()
            }
            else{
                this.SaveAllQuestion();
                 next()
            }
            
        } else {
           next()
        }
    },
    beforeDestroy(){
         window.removeEventListener('beforeunload', this.beforeWindowUnload)
    },

    mounted(){
     const top = window.pageYOffset || 0;
      this.$store.dispatch('fetchQuestions', this.$route.query.clwk)
      .then((res)=>{
    
          if(res.status == 200){
                let tmp = this.getAll_questions.Question;
                tmp.forEach(item => {
                        this.selectedData.push({
                            id: item.id,
                            selected: false,
                            isEditing: false
                        })  
                });
                this.isloading = false;
                this.Qlength = tmp.length;
                
          }
          
      })  
       
    },
    beforeMount(){
        window.addEventListener('beforeunload', this.beforeWindowUnload)
    }
}
</script>

<style >
.fade-in-enter-active {
  transition: all 0.5s ease;
}

.fade-in-leave-active {
  transition: all 0.5s ease;
}

.fade-in-enter, .fade-in-leave-to {
  position: absolute; /* add for smooth transition between elements */
  opacity: 0;
}

.centered{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}



 /* .ql-toolbar.ql-snow {
        background: #f2f2f2;
        border: none;
 }
 .ql-bold,.ql-italic,.ql-underline, .ql-strike
    ,.ql-picker-label,.ql-align,.ql-list,.ql-link
    ,.ql-image,.ql-video
    {
        outline: none !important;
        border:none !important;
    }  */
    .centered-input >>> input {
    text-align: center
}
.editor .ql-editor img{

    max-height: 10rem !important;
}
.editor .ql-container{
    max-height: 50rem;
}
</style>

