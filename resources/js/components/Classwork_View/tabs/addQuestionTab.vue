<template>
<div>

<div class="pa-0 ma-0" v-if="isStudentView">
    <studentViewForTeacher v-on:closeDialog="CloseDialog()" :classworkDetails="classworkDetails"  :Question="studentViewData" v-if="isStudentView"></studentViewForTeacher>
</div>

<div class="pa-1" v-else>

<v-hover v-slot="{ hover }">
    <div>
        <v-app-bar
       v-if="!isloading && Qlength != 0 && $vuetify.breakpoint.mdAndUp && !isHaveSubmission"
        @click="AddNewQuestion"
        :elevation="hover ? '10' : '2'"
        :style="$vuetify.breakpoint.mdAndUp && !fab ? 
        'position: fixed !important;z-index: 2;width: 130px !important;top: 4.5em !important;margin-left: 1em !important;cursor:pointer;' : 
        $vuetify.breakpoint.mdAndUp && fab ?
        'position: fixed !important;width: 130px !important;z-index: 2;top: 4.5em !important;margin-left: 1em !important;cursor:pointer;' : ''"
        dense clipped-right shaped class="fixed-bar" floating  color="blue"  >
            <v-chip
            small
            style="cursor:pointer;"
            color="blue"
            text-color="white">
                <v-icon style="font-size:1.5rem" left>mdi-plus</v-icon>
            <span class="font-weight-bold pl-2">
                ADD
            </span>
            </v-chip>
        </v-app-bar>
    </div>
</v-hover>

<v-hover v-slot="{ hover }">
    <div>
    <v-app-bar  
    flat
    :light="!isNewChanges"
    :elevation="hover ? '10' : '2'"
    @click="isNewChanges ? SaveAllQuestion() : ''"
    v-if="!isloading && Qlength != 0 && $vuetify.breakpoint.mdAndUp"
    

    :style="$vuetify.breakpoint.mdAndUp && !fab  ? 
        'position: fixed !important;z-index: 2;width: 130px !important;top: 8.5em !important;margin-left: 1em !important;cursor:pointer;' : 
        $vuetify.breakpoint.mdAndUp && fab ?
        'position: fixed !important;width: 130px !important;z-index: 2;top: 8.5em !important;margin-left: 1em !important;cursor:pointer;' : ''"
    
    dense clipped-right shaped class="fixed-bar" floating  :color="isNewChanges ? 'primary' : '#EEEEEE'"  >
        <v-chip
  
        small
        style="cursor:pointer;"
        :color="isNewChanges ? 'primary' : '#EEEEEE'"
        text-color="white">
        <v-icon style="font-size:1.5rem" left>mdi-content-save-all-outline</v-icon>
        <span class="font-weight-bold pl-2">
            {{isSavingAllQuestion ? 'SAVING..' : 'SAVE'}}
        </span>
        </v-chip>
    </v-app-bar>
    </div>
</v-hover>


<v-hover v-slot="{ hover }">
    <div>
        <v-app-bar
       v-if="!isloading && Qlength != 0 && $vuetify.breakpoint.mdAndUp"
        @click="studenView()"
        :elevation="hover ? '10' : '2'"
        :style="$vuetify.breakpoint.mdAndUp && !fab  ? 
        'position: fixed !important;z-index: 2;width: 130px !important;top: 12.5em !important;margin-left: 1em !important;cursor:pointer;' : 
        $vuetify.breakpoint.mdAndUp && fab ?
        'position: fixed !important;width: 130px !important;z-index: 2;top:12.5em !important;margin-left: 1em !important;cursor:pointer;' : ''"
        dense clipped-right shaped class="fixed-bar" floating  color="success"  >
            <v-chip
            small
            style="cursor:pointer;"
            color="success"
            text-color="white">
            <v-icon style="font-size:1.5rem" left>mdi-eye</v-icon>
            <span class="font-weight-bold pl-2">
                PREVIEW
            </span>
            </v-chip>
        </v-app-bar>
    </div>
</v-hover>

<v-hover v-slot="{ hover }">
    <div>
        <v-app-bar
       v-if="!isloading && Qlength != 0 && $vuetify.breakpoint.mdAndUp"
        @click="$router.push({name: 'question-analytics',query: {clwk: $route.query.clwk} })"
        :elevation="hover ? '10' : '2'"
        :style="$vuetify.breakpoint.mdAndUp && !fab  ? 
        'position: fixed !important;z-index: 2;width: 130px !important;top: 18.5em !important;margin-left: 1em !important;cursor:pointer;' : 
        $vuetify.breakpoint.mdAndUp && fab ?
        'position: fixed !important;width: 130px !important;z-index: 2;top:16.5em !important;margin-left: 1em !important;cursor:pointer;' : ''"
        dense clipped-right shaped class="fixed-bar" floating  color="red"  >
            <v-chip
            small
            style="cursor:pointer;"
            color="red"
            text-color="white">
            <v-icon style="font-size:1.3rem" left>mdi-poll</v-icon>
            <span class="font-weight-bold pl-2">
                ANALYTICS
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
          <v-btn  @click="SaveAllQuestion" dark text v-if="!$vuetify.breakpoint.mdAndUp && isNewChanges">
           
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
    <!-- <v-row class="centered" v-if="isloading" align-content="center" justify="center">
        <v-col cols="12" class="text-center">
            <vue-element-loading :active="isloading" 
            text="Loading"
            duration="0.7"
            :textStyle="{fontSize: '20px'}"
            spinner="line-scale" color="#EF6C00"  size="60" />
        </v-col>
    </v-row>
 -->
    <!-- <v-row v-if="isAddingNewQuestion" align-content="center" justify="center">
        <v-col cols="12" class="text-center">
            <vue-element-loading :active="isAddingNewQuestion" 
            duration="0.7"
             :is-full-screen="true"
            :textStyle="{fontSize: '20px'}"
            spinner="line-scale" color="#EF6C00"  size="60" />
        </v-col>
    </v-row> -->
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

<v-row v-if="isloading" align="center" justify="center">
    <v-col cols="12" md="8" lg="9" xl="9" >
        <v-card v-for="i in 3" :key="i" class="mb-6 pl-4 pr-4 pb-10 pt-10" >
            <v-skeleton-loader class="mx-auto"  type="article"></v-skeleton-loader>
        </v-card>
    </v-col>
</v-row>


<v-container v-if="!isloading && Qlength != 0" pa-0 ma-0 class="pa-0 ma-0" fluid>


        <v-row align="center" justify="center">
        <!-- <v-col cols="12" md="8" lg="9" xl="9">
            <v-card color="pa-3 d-flex justify-space-between">
                <div class="font-weight-bold">
                        Total Question: {{Qlength}}
                </div>
                <div >
                    <v-select
                    v-model="selected_sort"
                    hide-details
                    :items="Question_type_all"
                    label="Question Type"
                    outlined
                    ></v-select>
                </div>
            </v-card>
        </v-col> -->

        
          <v-col cols="12" md="8" lg="9" xl="9" :class="mainIndex < 1 ? 'mb-0' : 'mb-0 pt-1'" v-for="(item, mainIndex) in getAll_questions.Question" :key="item.id">
            
           <!--  <transition-group name="fade-in" mode="out-in"> -->
            <v-card flat  outlined style="border-top: 3px solid #2196F3"   :class="mainIndex < 1 ?  'pa-3 mb-0 rounded' : 'pa-3 mb-0 rounded mt-0'" elevation="1" >
               <!--      <vue-element-loading :active="isAdding" text="Adding..." spinner="bar-fade-scale" /> -->
       <!--   justify-end  -->
                    <v-row>
                        <v-col cols="12" class="mb-0 pb-0 pt-0  mt-0 d-flex justify-space-between ">
                            <span class="ml-2 mt-3"><h4>#{{mainIndex+1}}</h4> </span>
                            <v-checkbox v-if="!isHaveSubmission" v-model="selectedData[mainIndex].selected" @click="CheckSelectedCount(selectedData[mainIndex].selected)" hide-details></v-checkbox>
                        </v-col>
                         <v-col cols="12" class="mb-0 pb-0 pt-0 pr-6 mt-3 text-right ">
                            <v-btn small @click="selectedData[mainIndex].isEditing = false,isEditing_id = null"
                            v-if="selectedData[mainIndex].isEditing" outlined color="primary" rounded>Preview</v-btn>
                        </v-col>
                    </v-row>

                    <div style="cursor:pointer" @click="selectedData[mainIndex].isEditing = true, isEditing_id = item.id" v-if="isEditing_id != item.id">
                        <viewQuestion  :question="item" :answer="getAll_questions.Answer[mainIndex]" v-if="isEditing_id != item.id"></viewQuestion>
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
                                         @change="isNewChanges = true,SaveAllQuestion()"
                                        :rules="PointsRule" outlined type="number" 
                                        v-model="item.points" class="centered-input pa-0 ma-0"
                                        label="Points"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col class="pa-0 ma-0 pl-2 pl-sm-0 text-right" cols="9" md="11" lg="11">
                                         <v-select
                                         dense
                                         :disabled="isHaveSubmission"
                                            v-model="item.type"
                                            class="pa-0 ma-0 float-right"
                                            :items="Question_type"
                                            @change="CheckType(item.id, item.type, mainIndex)"
                                            outlined
                                            label="Question Type"
                                            ></v-select> 
                                    </v-col>
                                </v-row>

                                <v-container fluid class="pa-0 ma-0" ma-0 pa-0> 
                                    <div class="font-weight-medium">{{item.type != 'Matching type' ? 'Question' : 'Instuction'}}</div>
                                    <v-row class="pa-0 ma-0">
                                        <v-col class="pa-0 ma-0 mt-2 mb-2" cols="12">
                                            <div style="width:100%" class="mb-3">
                                                    <editor
                                                    :disabled="quill_disabled"
                                                    class="editor"
                                                    @blur="isNewChanges == true ? SaveAllQuestion() : ''" 
                                                    @focus="onEditorFocus($event),item.question = item.question == '<p>New Question '+(mainIndex+1)+'</p>' ? '' : item.question"  @ready="onEditorReady($event)" 
                                                    @change="item.question != '' || item.question != null ? isNewChanges = true : isNewChanges = false"
                                                    ref="myTextEditor"
                                                    :placeholder="item.type != 'Matching type' ? 'Enter Question' : 'Enter Instuction'" 
                                                    v-model="item.question"
                                                    :options="editorOption"/>
                                                    <small v-if="!valid && item.question == ''" class="error--text">*This field is required</small>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                <v-container fluid v-if="item.type == 'Multiple Choice'"> 
                                    <v-row>
                                        <div class="font-weight-medium">Options</div>
                                        <v-col class="ma-0 pa-0 ml-2 mt-1" cols="12" lg="12" md="12" v-for="(Ans, i) in getAll_questions.Answer[mainIndex].options" :key="Ans.id">
                                                <v-row>
                                                    <v-col cols="12" lg="12" md="12" >
                                                        <v-container fluid  class="d-flex flex-row ma-0 pa-0">
                                                                 
                                                        <v-radio-group v-if="item.isNew" :key="Ans.id"  v-model="item.answer">
                                                            <v-radio
                                                            :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                                @click="item.answer == Ans.id"
                                                                color="primary"
                                                                class="pa-0 ma-0"
                                                                :disabled="Ans.Choice == ''"
                                                                 @change="isNewChanges = true,SaveAllQuestion()"
                                                                name="Answer"
                                                                :value="Ans.id">
                                                                </v-radio>
                                                        </v-radio-group>

                                                        <v-radio-group v-else :key="Ans.id"  v-model="item.answer">
                                                            <v-radio
                                                            :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                                @click="item.answer == Ans.Choice"
                                                                color="primary"
                                                                class="pa-0 ma-0"
                                                                :disabled="Ans.Choice == ''"
                                                                 @change="isNewChanges = true,SaveAllQuestion()"
                                                                name="Answer"
                                                                :value="Ans.Choice">
                                                                </v-radio>
                                                        </v-radio-group>

                                                          <div style="width:100%" class="mb-3">
                                                                <editor
                                                                :disabled="quill_disabled"
                                                                @change="isNewChanges = true"
                                                                class="editor"
                                                                placeholder="Enter Option"
                                                                ref="myTextEditor"
                                                                v-model="Ans.Choice"
                                                                :options="editorOption"/>
                                                            </div>`

                                                            <div class="d-flex">
                                                               <!--  <v-file-input :ref="'uploader'+mainIndex+''+i" accept="image/png, image/jpeg, image/bmp" class="d-none"></v-file-input>
                                                                  <v-btn
                                                                    @click="ImageUploader(mainIndex,i)"
                                                                    icon class="mt-3 pl-2 pr-2">
                                                                    <v-icon>mdi-image</v-icon>
                                                                </v-btn> -->

        
                                                            <v-tooltip top>
                                                                <template v-slot:activator="{ on, attrs }">
                                                                     <v-btn v-bind="attrs" v-on="on"
                                                                        v-if="!isHaveSubmission"  
                                                                        @click="RemoveOption(Ans.id,mainIndex,i,item.type)"
                                                                        icon class="mt-3 pl-2 pr-2">
                                                                        <v-icon>mdi-close</v-icon>
                                                                    </v-btn>
                                                                </template>
                                                                <span>Remove Option</span>
                                                            </v-tooltip>
                                                            </div>
                                                           
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
                                            v-if="!isHaveSubmission" 
                                            @click="AddNewOption(item.id, mainIndex, item.type)">
                                            <v-icon dark left large>mdi-plus</v-icon>
                                            Add Choice
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                <v-container fluid mb-0 pb-0 v-if="item.type == 'Identification'">
                                    <v-row ma-0 pa-0>
                                        <div class="font-weight-medium">Answer(s)</div>
                                        <v-col v-show="getAll_questions.Answer[mainIndex].options.length == 0" ma-0 pa-0 class="ma-0 pa-0 mt-2" cols="12">
                                             <v-container fluid  class="d-flex flex-row ma-0 pa-0">
                                                      <div style="width:100%" class="mb-3">
                                                        <editor
                                                        :disabled="quill_disabled"
                                                        @change="isNewChanges = true"
                                                        @blur="isNewChanges == true ? SaveAllQuestion() : ''"
                                                        class="editor"
                                                        @focus="item.answer = item.answer == '<p>Answer 1</p>' ? '' : item.answer"
                                                        placeholder="Enter Answer"
                                                        ref="myTextEditor"
                                                        v-model="item.answer"
                                                        :options="editorOption"/>
                                                      </div>

                                                     


                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                         <v-btn v-bind="attrs" v-on="on"
                                                            v-if="!isHaveSubmission" 
                                                            @click="RemoveOption(Ans.id,mainIndex,i,item.type)"
                                                            icon class="mt-3 pl-2 pr-2">
                                                            <v-icon>mdi-close</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Remove Answer</span>
                                                </v-tooltip>
                                            </v-container>
                                        </v-col>

                                        <v-col v-show="getAll_questions.Answer[mainIndex].options.length != 0" v-for="(Answer, i) in getAll_questions.Answer[mainIndex].options" :key="i"  ma-0 pa-0 class="ma-0 pa-0 mt-2" cols="12">
                                            <!--   <div style="width:100%" class="mb-3 d-flex flex-row"> -->
                                                  <v-container fluid class="d-flex flex-row ma-0 pa-0">
                                                      <div style="width:100%" class="mb-3">
                                                        <editor
                                                        @focus="Answer.Choice = Answer.Choice == '<p>Option '+(i+1)+'</p>' || Answer.Choice == '<p>Answer '+(i+1)+'</p>' ? '' : Answer.Choice"
                                                        :disabled="quill_disabled"
                                                        @change="isNewChanges = true"
                                                        @blur="isNewChanges == true ? SaveAllQuestion() : ''"
                                                        class="editor"
                                                        placeholder="Enter Answer"
                                                        ref="myTextEditor"
                                                        v-model="Answer.Choice"
                                                        :options="editorOption"/>
                                                      </div>

                                                    <div class="d-flex">
                                                         <!--  <v-btn
                                                            @click="RemoveOption(Answer.id,mainIndex,i,item.type)"
                                                            icon class="mt-3 pl-2 pr-2">
                                                            <v-icon>mdi-image</v-icon>
                                                        </v-btn> -->

                                                        <v-tooltip top>
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <v-btn  v-bind="attrs" v-on="on"
                                                                v-if="!isHaveSubmission" 
                                                                    @click="RemoveOption(Answer.id,mainIndex,i,item.type)"
                                                                    icon class="mt-3 pl-2 pr-2">
                                                                    <v-icon>mdi-close</v-icon>
                                                                </v-btn>
                                                            </template>
                                                            <span>Remove Answer</span>
                                                        </v-tooltip>


                                                    </div>
                                                     
                                                  </v-container>
                                      <!--       </div> -->
                                        </v-col>
                                          <v-col  v-if="!isHaveSubmission"  class="pa-0 ma-0 pt-5" cols="12" md="12" lg="12">
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
                                                    @change="isNewChanges = true,SaveAllQuestion()"
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

                                 <v-container fluid mb-0 pb-0 v-if="item.type == 'Matching type'">
                                    <v-row ma-0 pa-0>
                                        <v-col  v-for="(SubQues, sub_index) in getAll_questions.Answer[mainIndex].SubQuestion" :key="SubQues.id" ma-0 pa-0 class="ma-0 pa-0" cols="12">
                                           <v-row>
                                               <v-col  cols="12">
                                                    <!-- <div class="font-weight-medium">{{'Pair '}}{{sub_index+1}}</div> -->
                                                   <v-container fluid class="d-flex flex-row ma-0 pa-0">                                                                              
                                                    <div style="width:100%"  class="mb-3">
                                                          <editor
                                                            :disabled="quill_disabled"
                                                             @change="isNewChanges = true"
                                                             @blur="isNewChanges == true ? SaveAllQuestion() : ''"
                                                            class="editor"
                                                            placeholder="Enter Question" 
                                                            ref="myTextEditor"
                                                            v-model="SubQues.sub_question"
                                                            :options="editorOption"/>
                                                        </div>
                                                        <div style="height:1px;background-color:#E0E0E0" :class="$vuetify.breakpoint.mdAndUp ? 'pl-4 pr-4 mt-8' : 'pl-2 pr-2 mt-8'">
                                                            
                                                        </div>
                                                     <div style="width:100%" class="mb-3" >
                                                            <editor
                                                            @change="isNewChanges = true"
                                                            @blur="isNewChanges == true ? SaveAllQuestion() : ''"
                                                             :disabled="quill_disabled"
                                                            class="editor"
                                                            placeholder="Enter Answer" 
                                                            ref="myTextEditor"
                                                            v-model="getAll_questions.Answer[mainIndex].SubAnswer[sub_index].Choice"
                                                            :options="editorOption"/>
                                                      </div>

                                                    

                                                      <v-tooltip top>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn v-bind="attrs" v-on="on"
                                                                v-if="!isHaveSubmission" 
                                                                @click="RemoveMatch(item.id, SubQues.id, getAll_questions.Answer[mainIndex].SubAnswer[sub_index].id, mainIndex,  sub_index)"
                                                                icon class="mt-3 pl-2 pr-2">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <span>Remove Answer</span>
                                                     </v-tooltip>
                                                    </v-container>
                                               </v-col>
                                           </v-row>
                                        </v-col>
                                        <v-col cols="12" v-if="!isHaveSubmission"  class="ma-0 pa-0 text-right pb-6">
                                            <v-btn
                                            block 
                                            rounded
                                            outlined
                                            class="mt-2"
                                            color="primary"
                                            @click="AddNewMatch(item.id, mainIndex, item.type)"
                                            >
                                            <v-icon left>mdi-plus</v-icon>
                                             Add  Match
                                            </v-btn>
                                        </v-col>
                                        <v-col cols="12" class="ma-0 pa-0 text-left pb-5">
                                           <div>Additional Answers</div>
                                           <small>You can provide additional answers to increase the difficulty of matching question.</small>
                                        </v-col>

                                         
                                        <v-col lg="6" cols="12" class="ma-0 pa-0 text-left">
                                            <v-row>
                                                <v-col c v-for="(destruc, destruc_index) in getAll_questions.Answer[mainIndex].Destructors" :key="destruc_index" cols="12" class="mb-0 pb-0 pt-0 mt-0 d-flex flex-row" >
                                                    <div style="width:100%"  class="pb-3">
                                                        <editor
                                                        @blur="UpdateDestructor(destruc.id, destruc_index,mainIndex,destruc.Choice)"
                                                        
                                                        :disabled="quill_disabled"
                                                        class="editor"
                                                        placeholder="Enter Answer" 
                                                        v-model="destruc.Choice"
                                                        ref="myTextEditor"
                                                        :options="editorOption"/>
                                                    </div>
                                                    

                                                    <v-tooltip top>
                                                        <template v-slot:activator="{ on, attrs }">
                                                             <v-btn v-bind="attrs" v-on="on"
                                                                v-if="!isHaveSubmission"
                                                                @click="removeDestructor(destruc.id, destruc_index,mainIndex)"
                                                                icon class="mt-3 pl-2 pr-2">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <span>Remove Destructor</span>
                                                     </v-tooltip>
                                                </v-col>
                                            </v-row>
                                        </v-col>


                                        <v-col v-if="!isHaveSubmission" cols="12" class="ma-0 pa-0 text-left pb-2 pt-3">
                                            <v-btn  @click="AddDestructor(mainIndex,item.id )" small color="primary" rounded>
                                                <v-icon left>mdi-plus</v-icon>
                                               Add Additional Answer/Destructors
                                           </v-btn>
                                        </v-col>
                                       
                                    </v-row>
                                </v-container>

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
                                      <v-btn v-if="!isHaveSubmission"  @click="singleDuplicate(item, getAll_questions.Answer[mainIndex])" v-bind="attrs" v-on="on" icon>
                                        <v-icon>mdi-content-copy</v-icon>
                                    </v-btn>
                                </template>
                                <span style="font-size:10px">Duplicate Question</span>
                            </v-tooltip>
                            <v-tooltip  style="height:5px !important" eager  bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-if="!isHaveSubmission"  @click="openDeleteDialog(item, mainIndex)" v-bind="attrs" v-on="on" icon>
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


        <v-btn fab fixed bottom right color="primary"
             v-if="!$vuetify.breakpoint.mdAndUp"
            @click="AddNewQuestion">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-scale-transition>
<!-- 
    <div style="height: 100px; position: relative">
          <v-scale-transition>
        <v-btn fab absolute top right color="primary"
            @click="AddNewQuestion">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        </v-scale-transition>

         <v-scale-transition>
        <v-btn fab absolute top right color="primary"
            @click="AddNewQuestion">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        </v-scale-transition>
    </div> -->

 
   

   
     

    <!-- <v-speed-dial v-model="fab" bottom  right direction="top" fixed transition="slide-y-reverse-transition">
      <template v-slot:activator>
        <v-btn @click="fab ? SaveAllQuestion() : ''" color="primary" dark fab>
          <v-icon v-if="fab">
            mdi-content-save-all-outline
          </v-icon>
          <v-icon v-else>
            mdi-cog-outline
          </v-icon>
        </v-btn>
      </template>
      <v-btn @click="AddNewQuestion" fab dark  color="blue">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab dark  color="green">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial> -->
    

    <div>
    <v-snackbar  bottom left v-model="showSnackbar">
        <v-icon left>{{ isSavingAllQuestion ? 'mdi-content-save-move' : 'mdi-check'}}</v-icon>
      {{ isSavingAllQuestion ? 'Saving..' : 'Changes Save' }}
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

    <v-dialog v-model="isHaveSubmissionDialog"  max-width="550">
          <warningDialog v-if="isHaveSubmissionDialog"></warningDialog>
    </v-dialog>
</div>
    
</div>
</template>
<script>

import {mapGetters, mapActions} from "vuex";
const deleteDialog = () => import('./dialogs/deleteDialog')
const deleteDialogQuestion = () => import('./dialogs/deleteDialogQuestion')
const warningDialog = () => import('./dialogs/warningDialog')
const viewQuestion = () => import('./viewQuestion')
const studentViewForTeacher = () => import('./TeacherQuizPreview/StudentViewForTeacher')
export default {
    props:['classworkDetails'],
    components:{
        deleteDialog,
        viewQuestion,
        deleteDialogQuestion,
        studentViewForTeacher,
        warningDialog
    },
    data(){
        return{
            Question_type:['Multiple Choice', 'Identification', 'True or False', 'Matching type','Essay'],
            Question_type_all:['All','Multiple Choice', 'Identification', 'True or False', 'Matching type','Essay'],
            selected_sort: 'All',
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
                theme:'bubble',

                blur: true,
                editorData:null,
                modules: {
                     toolbar: {
                            container:[
                               ['bold', 'italic', 'underline'],
                               [{ 'color': [] }],
                               [{ 'list': 'bullet' }],
                               ['image']
                               
                            ],
                            /* handlers: {
                                image: this.imageHandler
                            } */
                        },
                    syntax: {
                        highlight: text => hljs.highlightAuto(text).value
                    },
                    
                }
            },
            fab: true,
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
            isStudentView: false,
            studentViewData:null,
            isHaveSubmissionDialog: null,
            isHaveSubmission: null,
            isEditing_id: null
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
        ImageUploader(main_index, sub_index){
            this.$refs['uploader'+main_index+''+sub_index][0].$refs.input.click()
        },
         onEditorBlur(editor) {
            this.editorData = editor;
        },
        onEditorFocus(editor) {
                this.editorData = editor;
        },
        onEditorReady(editor) {
            this.editorData = editor;
        },
        imageHandler() {
            const editor = this.editorData;
            const input = document.createElement('input');

            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();

      

            input.onchange = async () => {
                const file = input.files[0];

                const formData = new FormData();
                formData.append('file', file);
                formData.append('type', 'Announcement');


                const range = editor.getSelection(true);
                editor.setSelection(range.index + 1);
                await axios.post('/api/classwork/newAttachment', formData)
                    .then(async ({data}) => {
                        await editor.insertEmbed(range.index, 'image', data.link);
                    })
            }
        },
        async GetQuestion(){  
            this.$store.dispatch('fetchQuestions', this.$route.query.clwk)
            .then((res)=>{    
                if(res.status == 200){
                    this.selectedData = [];
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
        async ReloadQuestion(){
            this.$store.dispatch('fetchQuestions', this.$route.query.clwk)
            .then((res)=>{
                if(res.status == 200){
                    this.selectedData = [];
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
       async AddNewQuestion(){              
           this.isAddingNewQuestion = true;
           await axios.post('/api/question/add_new_question', {
               classwork_id: this.$route.query.clwk,
                new_number : (this.getAll_questions.Question.length+1),
                })
           .then((res)=>{
               if(res.data.success == true){
                   this.Qlength+=1;
                   this.getAll_questions.Question.push({
                   id: res.data.question_id,
                   question: '<p>'+'New Question '+ (this.getAll_questions.Question.length+1)+'</p>',
                   answer: res.data.choices_id[0],
                   points: 1,
                   type: 'Multiple Choice',
                   isNew: true,
                   sensitivity: 0,
               })
               this.isEditing_id = res.data.question_id;
               this.getAll_questions.Answer.push({options:
                   [
                       {
                            id : res.data.choices_id[0],
                            Choice : '',
                            question_id : res.data.question_id,
                       },
                       /*  {
                            id : res.data.choices_id[1],
                            Choice : '',
                            question_id : res.data.question_id,
                       },
                        {
                            id : res.data.choices_id[2],
                            Choice : '',
                            question_id : res.data.question_id,
                       },
                        {
                            id : res.data.choices_id[3],
                            Choice : '',
                            question_id : res.data.question_id,
                       } */
                   ],
                   SubQuestion:[],
                   SubAnswer:[],
                   Destructors:[]

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
                setTimeout(() => (window.scrollTo(0,document.body.scrollHeight)), 100);
           })
            


        },

        async AddAnswer(id, Mainindex){
            //this.isNewChanges = true;
            /* if(this.getAll_questions.Answer[Mainindex].options.length == 0){
                 this.getAll_questions.Answer[Mainindex].options.push({
                    id : '',
                    Choice : this.getAll_questions.Question[Mainindex].answer,
                    question_id : id,
                })
                 this.getAll_questions.Answer[Mainindex].options.push({
                    id : '',
                    Choice : '<p>'+'Answer '+(this.getAll_questions.Answer[Mainindex].options.length+1)+'</p>',
                    question_id : id,
                })
            }
            else{
                 this.getAll_questions.Answer[Mainindex].options.push({
                    id : '',
                    Choice : '<p>'+'Answer '+(this.getAll_questions.Answer[Mainindex].options.length+1)+'</p>',
                    question_id : id,
                })
            } */

             await axios.post('/api/question/addOption', {
                type: "Multiple Choice",
                question_id: id
            }).then((res)=>{
                this.isNewChanges = true;
                this.getAll_questions.Answer[Mainindex].options.push({
                    id : res.data.answer_id,
                    Choice : '',
                    question_id : id,
                })

                 this.$toasted.show('New answer has been added', {
                    theme: "toasted-primary",
                    position: "top-center",
                    duration: 4000,
                });
            })

        },

        async AddNewOption(id, Mainindex, type){
            await axios.post('/api/question/addOption', {
                type: type,
                question_id: id
            }).then((res)=>{
                this.isNewChanges = true;
                this.getAll_questions.Answer[Mainindex].options.push({
                    id : res.data.answer_id,
                    Choice : '',
                    question_id : id,
                })

                 this.$toasted.show('New option has been added', {
                    theme: "toasted-primary",
                    position: "top-center",
                    duration: 4000,
                });
            })
            
        },
        async AddNewMatch(id, mainIndex, type){
            await axios.post('/api/question/addOption', {
                type: type,
                question_id: id
            }).then((res)=>{
                this.getAll_questions.Answer[mainIndex].SubQuestion.push({
                    id: res.data.sub_question_id,
                    answer_id: null,
                    sub_question: ''
                })
                this.getAll_questions.Answer[mainIndex].SubAnswer.push({
                    id : res.data.answer_id, 
                    Choice : '',
                    question_id : id
                })

                this.$toasted.show('New match has been added', {
                    theme: "toasted-primary",
                    position: "top-center",
                    duration: 4000,
                });
                //this.SaveAllQuestion();
            })       
        },
        async RemoveOption(id,Mainindex , AnsIndex, type){
            if(id == null || id == ''){
                 this.getAll_questions.Answer[Mainindex].options.splice(AnsIndex,  1);
            }
            else{
                 await axios.put('/api/question/remove_question_option/'+id, {type: type})
                .then((res)=>{
                    this.getAll_questions.Answer[Mainindex].options.splice(AnsIndex,  1);
                })
            }
           
        },
        async RemoveMatch(main_id, sub_quesId, answer_id, main_index,match_index){             
            if(sub_quesId == '' || sub_quesId == null){
                this.getAll_questions.Answer[main_index].SubQuestion.splice(match_index,  1);
                this.getAll_questions.Answer[main_index].SubAnswer.splice(match_index,  1);
            }else{
                await axios.put('/api/question/remove_question_match/'+main_id, {sub_question_id: sub_quesId, answer_id:answer_id })
                .then((res)=>{
                    this.getAll_questions.Answer[main_index].SubQuestion.splice(match_index,  1);
                    this.getAll_questions.Answer[main_index].SubAnswer.splice(match_index,  1);
                })
            }
              
        },
        async UpdateQuestion(id, Mainindex){
            await axios.put('/api/question/update_question_details/'+id, {
                question: this.getAll_questions.Question[Mainindex],
                answer: this.getAll_questions.Answer[Mainindex],
            })
            .then((res)=>{
            })
        },
        async CheckType(id, type, mainIndex){
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

                      /*   if(this.getAll_questions.Answer[mainIndex].options.length != 0){
                            this.getAll_questions.Answer[mainIndex].options.forEach(item => {
                                 this.getAll_questions.Answer[mainIndex].SubQuestion.push({
                                    id: null,
                                    answer_id: null,
                                    sub_question: item.Choice
                                })

                                this.getAll_questions.Answer[mainIndex].SubAnswer.push({
                                    id : null, 
                                    Choice : item.Choice,
                                    question_id : id
                                })

                            });
                        }else{ */
                             /* this.getAll_questions.Answer[mainIndex].SubQuestion.push({
                                id: null,
                                answer_id: null,
                                sub_question: ''
                            })
                            this.getAll_questions.Answer[mainIndex].SubAnswer.push({
                                id : null, 
                                Choice : '',
                                question_id : id
                            }) */
                        //}

                         await axios.post('/api/question/addOption', {
                                type: type,
                                question_id: id
                            }).then((res)=>{
                                this.getAll_questions.Answer[mainIndex].SubQuestion.push({
                                    id: res.data.sub_question_id,
                                    answer_id: null,
                                    sub_question: ''
                                })
                                this.getAll_questions.Answer[mainIndex].SubAnswer.push({
                                    id : res.data.answer_id, 
                                    Choice : '',
                                    question_id : id
                                })

                               
                                //this.SaveAllQuestion();
                            })
                       

                    }
                }
        },
        async SaveAllQuestion(){
            this.isAddingNewQuestion = true;
            this.showSnackbar = true
            this.isSavingAllQuestion = true;
            await axios.put('/api/question/save_all_question/'+this.$route.query.clwk, this.getAll_questions)
            .then((res)=>{
                if(res.data.success == true){
                    this.isSavingAllQuestion = false;
                    this.isNewChanges = false;
                    //this.GetQuestion();
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
        async DeleteSelected(){
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

            await axios.put('/api/question/delete_selected_question/'+this.$route.query.clwk, {question: question_id_list})
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
            await axios.delete('/api/question/remove/'+this.DeleteDetails.id)
            .then(res=>{
                this.getAll_questions.Question.splice(this.DeleteIndex, 1);
                this.getAll_questions.Answer.splice(this.DeleteIndex, 1);
                this.selectedData.splice(this.DeleteIndex, 1);
                this.DeleteSingledialog = false
                this.DeleteDetails = null;
                this.Qlength = this.getAll_questions.Question.length;
                 this.$toasted.show('Question has been deleted', {
                        theme: "toasted-primary",
                        position: "top-center",
                        duration: 5000,
                    });
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
            await axios.put('/api/question/store_duplicate_question/'+this.$route.query.clwk, {
                question: this.DuplicateQuestion,
                answer: this.DuplicateAnswers
            })
            .then((res)=>{
                //this.isNewChanges = false;
                 this.$toasted.show('Question has been duplicated', {
                        theme: "toasted-primary",
                        position: "top-center",
                        duration: 5000,
                    });

                for (let i = 0; i < res.data.question_id.length; i++) {

                    if(this.DuplicateQuestion[i].isNew){
                         this.getAll_questions.Question.push({
                            id: res.data.question_id[i],
                            question: this.DuplicateQuestion[i].question,
                            answer:  res.data.question_answer_id[i],
                            points: this.DuplicateQuestion[i].points,
                            type: this.DuplicateQuestion[i].type,
                            sensitivity: this.DuplicateQuestion[i].sensitivity,
                            isNew: this.DuplicateQuestion[i].isNew,
                        })
                    }else{
                        this.getAll_questions.Question.push({
                            id: res.data.question_id[i],
                            question: this.DuplicateQuestion[i].question,
                            answer:  this.DuplicateQuestion[i].answer,
                            points: this.DuplicateQuestion[i].points,
                            type: this.DuplicateQuestion[i].type,
                            sensitivity: this.DuplicateQuestion[i].sensitivity,
                            isNew: this.DuplicateQuestion[i].isNew,
                        })
                    }
                   
                 
                    this.selectedData.push({
                        id: res.data.question_id[i],
                        selected: false,
                        isEditing: true
                    }) 
                    this.getAll_questions.Answer.push({options:[],SubQuestion:[], SubAnswer:[],Destructors:[]});

                     if(this.DuplicateQuestion[i].type == 'Multiple Choice' || this.DuplicateQuestion[i].type == 'Identification'){
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

                         for (let x = 0; x < res.data.answer_id[i].Destructors_id.length; x++) {
                             this.getAll_questions.Answer[this.getAll_questions.Answer.length-1].Destructors.push({
                                id : res.data.answer_id[i].Destructors_id[x],
                                Choice : this.DuplicateAnswers[i].Destructors[x].Choice,
                                question_id : res.data.question_id[i],
                            })
                             
                         }
                     }
                }
                this.isAddingNewQuestion = false;
                this.UnselectAll();
                setTimeout(() => (window.scrollTo(0,document.body.scrollHeight)), 100);
            })
        },
        studenView(){
            this.studentViewData = this.getAll_questions;
            this.isStudentView = true;
            this.$store.dispatch("isViewingSubmission");
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
    async AddDestructor(mainIndex, id){
        await axios.post('/api/question/add_new_destructor', {question_id: id})
        .then((res)=>{
            if(res.data.success == true){
                 this.getAll_questions.Answer[mainIndex].Destructors.push({
                    question_id: id,
                    id: res.data.newDestructor_id,
                    Choice: null
                })
                 this.$toasted.show('New Desctrutor has been added', {
                        theme: "toasted-primary",
                        position: "top-center",
                        duration: 5000,
                    });
            }else{
                this.toastError('Something went wrong while adding new destructor');
            }
        })
    }, 
    async removeDestructor(id, index, mainIndex){
        await axios.delete('/api/question/remove_destructor/'+id)
        .then(()=>{
             this.getAll_questions.Answer[mainIndex].Destructors.splice(index, 1);
        })
    },
    async UpdateDestructor(id,index, mainIndex, data){
        await axios.put('/api/question/update_destructor/'+id, {Choice: data})
        .then((res)=>{
          
        })
    },
     CloseDialog(){
            this.studentViewData = null,
            this.isStudentView = false, 
            this.$store.dispatch('isNotViewingSubmission')
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
   
      this.isHaveSubmission = this.classworkDetails.submitted_count == 0 ? false : true;
      this.isHaveSubmissionDialog = this.classworkDetails.submitted_count == 0 ? false : true;
       const top = window.pageYOffset || 0;
      this.GetQuestion();

       
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
.editor .ql-editor{
    min-height: 50px !important;
    max-height: 300px !important;
     
}

/* .editor .ql-editor input{
    color: black !important;
} */


 

</style>

