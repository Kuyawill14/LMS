<template>
    <div>
        <div :class="$vuetify.breakpoint.mdAndUp ? 'pa-10' : 'p-3'">
            
            <v-row>
                <v-col cols="12" class="mb-0 pb-0">
                     <div :style="!$vuetify.breakpoint.mdAndUp ? 'line-height:1.1':'line-height:1.5'" class="d-flex justify-space-between">
                          <span v-html="question.question" class="post-content"></span>
                           <span >{{question.points}} point</span>
                     </div>
                </v-col>
                <v-col cols="12" v-if="question.type == 'Multiple Choice'">
                   <div>
                       <v-list class="pl-3" >
                            <v-list-item class="ma-0 pa-0"  v-for="Ans in answer.options" :key="Ans.id">
                                <v-list-item-icon class="ma-0 pa-0">
                                    <v-radio-group v-if="question.isNew" hide-details :name="'option'+question.id"  class="ma-0 pa-0 mt-1" v-model="question.answer">
                                        <v-radio
                                         :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                        readonly
                                        color="primary"
                                        :key="Ans.id"
                                        :value="Ans.id">
                                        </v-radio>
                                    </v-radio-group>

                                   <v-radio-group v-else hide-details :name="'option'+question.id"  class="ma-0 pa-0 mt-1" v-model="question.answer">
                                        <v-radio
                                         :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                        readonly
                                        color="primary"
                                        :key="Ans.id"
                                        :value="Ans.Choice">
                                        </v-radio>
                                    </v-radio-group>

                                </v-list-item-icon>
                                <v-list-item-content class="ma-0 pa-0">
                                    <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex">
                                        <span v-html="Ans.Choice" class="post-content"></span>
                                        <span class="caption primary--text ml-1" v-if="question.answer == Ans.Choice">(correct answer)</span>
                                    </div>
                                </v-list-item-content>  
                            </v-list-item>
                        </v-list>
                   </div>
                </v-col>

                <v-col cols="12" v-if="question.type == 'Identification'">
                   <div>
                       <v-list class="pl-3" >
                            <v-list-item class="ma-0 pa-0"  >
                                <v-list-item-content class="ma-0 pa-0 success--text">
                                    <div class="mb-3 black--text">
                                        Correct Answers:
                                    </div>
                                    <div v-if="answer.options.length == 0" style="line-height:1.4" class="d-flex Subtitle-1 ma-0 pa-0 pl-3">
                                        <span class="pr-2">&bull; </span>
                                        <span v-html="question.answer" class="post-content"></span>
                                    </div>
                                    <div v-else style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 pl-3">
                                        <div class="d-flex mb-0 pb-0 mt-0 pt-0" v-for="Answer in answer.options" :key="Answer.id">
                                            <span class="pr-2">&bull; </span>
                                            <span v-html="Answer.Choice" class="post-content"></span>
                                        </div>
                                        
                                    </div>
                                    
                                </v-list-item-content>  
                            </v-list-item>
                        </v-list>
                   </div>
                </v-col>

                <v-col cols="12" v-if="question.type == 'True or False'">
                   <div>
                        <v-list class="pl-3" >
                            <v-list-item class="ma-0 pa-0"  v-for="(x, n) in inputCheck" :key="n">
                                <v-list-item-icon class="ma-0 pa-0">
                                    <v-radio-group hide-details  v-model="question.answer">
                                        <v-radio
                                         :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                         readonly
                                        color="primary"
                                        :key="n"
                                        name="Answer" 
                                        :value="inputCheck[n]"
                                        ></v-radio>
                                    </v-radio-group>
                                </v-list-item-icon>
                                <v-list-item-content  class="ma-0 pa-0">
                                    <div  style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex">
                                        <span class="mt-4">{{inputCheck[n]}}</span>
                                    </div>
                                </v-list-item-content>  
                            </v-list-item>
                        </v-list>
                   </div>
                </v-col>

                <v-col cols="12" v-if="question.type == 'Matching type'">
                   <div>
                        <v-container>
                            <v-row>
                                <v-col class="font-weight-bold" cols="7">
                                    Column A<small>(question)</small>
                                </v-col>
                                <v-col class="font-weight-bold" cols="5">
                                    Column B<small>(answers)</small>
                                </v-col>
                            </v-row>
                        </v-container>
                        <div class="mb-5">
                                <v-divider></v-divider>
                        </div>
                        <v-container class="mb-0 pb-0 pt-2 pb-3" v-for="(List, i) in answer.SubQuestion" :key="List.id">
                            <v-row>
                                <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="7">
                                    <div class="d-flex"> 
                                        <span class="font-weight-medium mr-1">{{(i+1+'. ')}}</span>
                                        <span v-html="List.sub_question" class="subquestion-content"></span>
                                    </div>
                                </v-col>
                                <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="5">
                                    <div class="d-flex"> 
                                        <span class="font-weight-medium mr-1">{{(Alphabet[i]+'. ')}}</span>
                                        <span v-html="answer.SubAnswer[i].Choice" class="subchoices-content"></span>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                   </div>
                </v-col>

                <v-col cols="12" v-if="question.type == 'Essay'">
                   <div>
                        <v-list class="pl-3" >
                            <v-list-item class="ma-0 pa-0" >
                                <v-list-item-content  class="ma-0 pa-0">
                                        <quill-editor
                                        class="Essayeditor"
                                        ref="myTextEditor"
                                        :options="editorOption"/>
                                </v-list-item-content>  
                            </v-list-item>
                        </v-list>
                   </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
export default {
    props:['question','answer'],
    data(){
        return{
            inputCheck:['True','False'],
            Alphabet: [
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
        }
    }
    
}
</script>
<style >
    .post-content  img{
        max-height: 15rem !important;
    }
    .Essayeditor{
        height: 10rem !important;
     
    }
</style>