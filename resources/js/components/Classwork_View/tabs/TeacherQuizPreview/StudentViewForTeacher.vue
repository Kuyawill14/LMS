<template>
    <div>
        <v-row no-gutters v-if="isloaded">
            <v-col cols="12" class="mb-2 ">
                <v-card elevation="2" outlined class="pl-2 pr-4">
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
                                    Total Points: {{classworkDetails.points}}
                                </v-list-item-subtitle>
                                
                            </v-list-item-content>
                                <v-list-item-action>
                                    <v-list-item-action-text>
                                        <v-btn  @click="$emit('closeDialog')" small text rounded >
                                            <v-icon small>mdi-close</v-icon> Close
                                        </v-btn>  
                                    </v-list-item-action-text>
                                        <v-spacer></v-spacer>
                                     <previewTimer  :duration="classworkDetails.duration" ></previewTimer>
                                </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>

            <v-col cols="12" class="mt-2">
                <v-row align="center" justify="center">
                    <v-col cols="12" class="pb-10"  md="8">
                         <v-card min-height="400"  class="pa-2 pt-5" elevation="5" outlined>
                            <div class="d-flex mb-2">
                                <div class="d-flex">
                                    <v-menu offset-y max-height="600" style="overflow-y:scroll;">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon
                                            dark
                                            v-bind="attrs"
                                            v-on="on">
                                        <v-icon color="primary">mdi-format-list-numbered</v-icon> </v-btn>
                                    </template>
                                    <v-list  >
                                        <v-list-item class="ma-0 pa-0" v-for="(item, index) in Question.Question" :key="index">
                                        <v-list-item-title>  
                                            <v-btn v-if="item.type == 'Multiple Choice' || item.type == 'Identification' || item.type == 'True or False'|| item.type == 'Essay'" 
                                            text rounded @click="questionIndex = index">
                                         <v-icon  left>mdi-checkbox-blank-outline</v-icon>
                                            {{index+1}}
                                            </v-btn>
                                            
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>

                                <div class="pl-1 mt-2">Question {{questionIndex+1}}</div>
                                </div>
                                <v-spacer></v-spacer>
                                <div>
                                    <v-btn :disabled="questionIndex == 0" @click="questionIndex--" color="primary" class="mr-1" outlined rounded>
                                        Previous
                                    </v-btn>
                                    <v-btn class="pl-9 pr-9" :disabled="questionIndex == Question.Question.length-1" @click="questionIndex++" color="primary" rounded>
                                        Next
                                    </v-btn>
                                </div>
                                
                            </div>
                            <div>
                                <v-row ma-0 pa-0 v-for="(item, index) in Question.Question" :key="index">
                                    <v-col v-if="index == questionIndex" cols="12" class="pa-7">
                                        <v-row>
                                            <v-col cols="12" class="mb-0 pb-0">
                                                <div :style="!$vuetify.breakpoint.mdAndUp ? 'line-height:1.1':'line-height:1.5'" class="d-flex justify-space-between">
                                                    <span v-html="item.question" class="post-content"></span>
                                                    <span >{{item.points}} point</span>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" v-if="item.type == 'Multiple Choice'">
                                                <div>
                                                    <v-list class="pl-3" >
                                                        <v-list-item class="ma-0 pa-0"  v-for="(Ans, i) in Question.Answer[index].options" :key="i">
                                                            <v-list-item-icon class="ma-0 pa-0">
                                                                <v-radio-group hide-details :name="'option'+item.id" v-model="TempAnswers[index].answer"  class="ma-0 pa-0 mt-1" >
                                                                    <v-radio
                                                                    :style="$vuetify.breakpoint.mdAndUp ? 'transform: scale(1.3)' : 'transform: scale(1.35)' "
                                                            
                                                                    color="primary"
                                                                    :key="Ans.id"
                                                                    :value="Ans.Choice">
                                                                    </v-radio>
                                                                </v-radio-group>
                                                            </v-list-item-icon>
                                                            <v-list-item-content class="ma-0 pa-0">
                                                                <div style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 d-flex">
                                                                    <span v-html="Ans.Choice" class="post-content"></span>
                                                                </div>
                                                            </v-list-item-content>  
                                                        </v-list-item>
                                                    </v-list>
                                                </div>
                                            </v-col>

                                             <v-col cols="12" class="mt-0 pt-0" v-if="item.type == 'Identification'">
                                                    <div>
                                                        <v-list>
                                                            <v-list-item>
                                                                <v-list-item-content>
                                                                     <quill-editor
                                                                    v-model="TempAnswers[index].answer" 
                                                                    ref="myTextEditor"
                                                                    :options="editorOption"/>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-list>
                                                       <!--  <v-list class="pl-3" >
                                                            <v-list-item class="ma-0 pa-0"  >
                                                                <v-list-item-content class="ma-0 pa-0 success--text">
                                                                  <v-list class="pl-3" >
                                                             
                                                                </v-list-item-content>  
                                                            </v-list-item>
                                                        </v-list> -->
                                                    </div>
                                                </v-col>
                                          </v-row>
                                    </v-col>
                                </v-row>
                            </div>

                            
                        </v-card>


                        
                    </v-col>
                </v-row>
               
            </v-col>
        </v-row>
    </div>
</template>
<script>
const previewTimer= () => import('./previewTimer')
export default {
    props:['classworkDetails','Question'],
    components:{
        previewTimer
    },
    data(){
        return{
            questionIndex: 0,
            TempAnswers:[],
            isloaded: false,
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
    },
    methods:{
      MakeTempAnswer(){


          this.Question.Question.forEach(item => {
                this.TempAnswers.push({answer: null})
          });
         
      }
    },
    created(){
        //this.MakeTempAnswer();
        
          this.Question.Question.forEach(item => {
                this.TempAnswers.push({answer: null})
          });
           this.isloaded = true;
    },
    beforeDestroy(){
          this.$emit('closeDialog');
      },
}
</script>