<template>
    <div>

        <v-overlay :value="isloading">
            <v-progress-circular
                indeterminate
                size="80">Generating
            </v-progress-circular>
        </v-overlay>
        <div>
            
            <v-card v-if="!isloading" class="pa-3">
                 <div>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="success" :loading="isloading && isDownloadType == 'answer_key'" v-bind="attrs" v-on="on" dark large block @click="dowloadCopy('answer_key')">
                                Download Answer Key
                            </v-btn>
                        </template>
                        <span>Download all question with the correct answers</span>
                    </v-tooltip>
                    <div class="text-center mt-2 mb-2">
                        <span class="font-weight-medium ">Or</span>
                    </div>
                   

                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn :loading="isloading && isDownloadType == 'questioner'" color="red" v-bind="attrs" v-on="on" dark large block @click="dowloadCopy('questioner')">
                                Download Questioner
                            </v-btn>
                        </template>
                        <span>Download all question without the correct answers</span>
                    </v-tooltip>
                </div>
            </v-card>
            
         <!--    v-show="isDownloading"
            @hasDownloaded="closeDialog()"  -->
            <div v-show="isDownloading">
            
                  <VueHtml2pdf :show-layout="false"  :enable-download="true" :preview-modal="false"
                    :paginate-elements-by-height="1000" :filename="classworkDetails.title" :pdf-quality="2" :manual-pagination="false"
                    pdf-format="a4" pdf-orientation="portrait" pdf-content-width="780px" :html-to-pdf-options="pdfOptions" 
                    @hasDownloaded="closeDialog()" 
                    ref="html2Pdf">
                    
                    <section slot="pdf-content">

                        <div>
                        
                        <section style="width:90%" class="pdf-item" >
                            <div  style="text-align:center;">
                                
                                <div style="text-align:center;font-weight:bold;font-size:20px;">{{classworkDetails.title}} </div>
                                 <small> {{'('+classworkDetails.course_code+' - '+classworkDetails.course_name+')'}} </small>
                            </div>
                           
                            <br><br>
                            <div>
                                <span style="display:flex"><b style="margin-right:1%">Instruction: </b> <span v-html="classworkDetails.instruction"></span></span>
                            </div>
                            <br>
                            <hr>
                            <div v-if="isDownloadType == 'answer_key'" style="display:flex;justify-content: space-between;">
                                <div><b>Date created: </b>  {{formatDate(classworkDetails.created_at)}}</div>
                                <div><b>Total points: </b>  {{classworkDetails.points}}</div>
                            
                            </div>
                            <br>
                        </section>
                            
                        <section style="width:90%" v-for="(question, mainIndex) in Question.Question" :key="mainIndex" class="pdf-item">
                    
                            <v-row >
                                <v-col cols="12" >
                                    <div :style="isDownloadType == 'answer_key' ? 'display:flex;justify-content: space-between' : 'display:flex'">
                                        <span style="display:flex;padding-right:1%">
                                            <span style="padding-right:5px;font-weight:600">Q{{mainIndex+1}}. </span>
                                            <span v-html="question.question"  class="post-content"></span>
                                        </span>
                                        
                                        <div style="font-size: 12px">
                                        <span v-if="isDownloadType == 'answer_key'" style="font-weight:bold">{{question.type}}</span>
                                            <span >{{'('+question.points+' points)'}}</span>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12" v-if="question.type == 'Multiple Choice'">
                                    <div v-if="isDownloadType == 'answer_key'" style="margin-left:15px">
                                        <div v-if="question.isNew">
                                            <div v-for="(Ans, i) in Question.Answer[mainIndex].options" :key="i"  >
                                                <div :style="question.answer == Ans.id ? 'color:red;display:flex;font-weight:600' : 'display:flex'">
                                                    <span style="margin-right:4px" >{{Alphabet[i]}}.</span>
                                                    <span v-html="Ans.Choice" class="post-content"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div v-else>
                                            <div v-for="(Ans, i) in Question.Answer[mainIndex].options" :key="i"  >
                                                <div :style="question.answer == Ans.Choice ? 'color:red;display:flex;font-weight:600' : 'display:flex'">
                                                    <span style="margin-right:4px" >{{Alphabet[i]}}.</span>
                                                    <span v-html="Ans.Choice" class="post-content"></span>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>

                                    <div v-else style="margin-left:15px">
                                        <div v-if="question.isNew">
                                            <div v-for="(Ans, i) in Question.Answer[mainIndex].options" :key="i"  >
                                                <div style="display:flex">
                                                    <span style="margin-right:4px" >{{Alphabet[i]}}.</span>
                                                    <span v-html="Ans.Choice" class="post-content"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div v-else>
                                            <div v-for="(Ans, i) in Question.Answer[mainIndex].options" :key="i"  >
                                                <div style="display:flex">
                                                    <span style="margin-right:4px" >{{Alphabet[i]}}.</span>
                                                    <span v-html="Ans.Choice" class="post-content"></span>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </v-col>

                                <v-col cols="12" v-if="question.type == 'Identification'">
                                    <div v-if="isDownloadType == 'answer_key'" style="margin-left:15px">
                                        <div class="mb-3 black--text">
                                            Correct Answers:
                                        </div>
                                        <div v-if=" Question.Answer[mainIndex].options.length == 0" style="line-height:1.4;display:flex" sclass="ma-0 pa-0 pl-3">
                                            <span style="padding-right:4px">&bull; </span>
                                            <span v-html="question.answer" class="post-content"></span>
                                        </div>
                                        <div v-else style="line-height:1.4" class="Subtitle-1 ma-0 pa-0 pl-3">
                                            <div style="display:flex" v-for="Answer in  Question.Answer[mainIndex].options" :key="Answer.id">
                                                <span style="padding-right:4px">&bull; </span>
                                                <span v-html="Answer.Choice" class="post-content"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else style="margin-top:25px"></div>
                                </v-col>

                                <v-col cols="12" v-if="question.type == 'True or False'">
                                
                                    <div v-if="isDownloadType == 'answer_key'" style="margin-left:15px">
                                        <div v-for="(x, n) in inputCheck" :key="n"  >
                                            <div :style="question.answer == inputCheck[n] ? 'color:red;display:flex;font-weight:600' : 'display:flex'">
                                                
                                                <span>{{inputCheck[n]}}</span>
                                            </div>
                                        </div>
                                    </div>  

                                    <div v-else style="margin-left:15px">
                                        <div v-for="(x, n) in inputCheck" :key="n"  >
                                            <div style="display:flex">
                                                
                                                <span>{{inputCheck[n]}}</span>
                                            </div>
                                        </div>
                                    </div>  
                                </v-col>

                                <v-col cols="12" v-if="question.type == 'Matching type'">
                                    <div>
                                        <v-container>
                                            <v-row>
                                                <v-col class="font-weight-bold" cols="7">
                                                    Column A<!-- <small style="font-weight:600">(question)</small> -->
                                                </v-col>
                                                <v-col class="font-weight-bold" cols="5">
                                                    Column B<!-- <small style="font-weight:600">(answers)</small> -->
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <div class="mb-5">
                                                <v-divider></v-divider>
                                        </div>
                                        <v-container class="mb-0 pb-0 pt-2 pb-3" v-for="(List, i) in Question.Answer[mainIndex].SubQuestion" :key="List.id">
                                            <v-row>
                                                <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="7">
                                                    <div style="display:flex"> 
                                                    

                                                        <div   style="text-align:center;">
                                                            <span style="font-size:12px">
                                                                <span  style="margin-right:2%;font-weight:600;color:red">{{ isDownloadType == 'answer_key' ? Alphabet[i] : ' '}}</span>
                                                                <div style="width:50px;border-bottom: 1px solid black"></div>
                                                            
                                                            </span>
                                                        </div>
                                                        <span style="margin-right:2%;">{{(i+1+'. ')}}</span>
                                                        <span style="font-weight:600" v-html="List.sub_question" class="subquestion-content"></span>
                                                    </div>
                                                </v-col>
                                                <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="5">
                                                    <div style="display:flex"> 
                                                        <span style="margin-right:2%;">{{(Alphabet[i]+'. ')}}</span>
                                                        <span style="font-weight:600" v-html="Question.Answer[mainIndex].SubAnswer[i].Choice" class="subchoices-content"></span>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                </div>
                                </v-col>

                                <v-col cols="12" v-if="question.type == 'Essay'">
                                    <div style="margin-top:20%"> </div>  
                                </v-col>
                            </v-row>
                        
                        </section>
                        <br>
                        <br>
                        <hr>
                            <br>
                        <div  >
                            <v-row>
                                <v-col cols="6">
                                    <div style="text-align:center;margin-top:25%">
                                        <span style="font-size:18px">
                                        
                                            <div style="margin:auto;width:300px;border-bottom: 1px solid black"></div>
                                            <span>Faculty</span>
                                        </span>
                                    </div>
                                </v-col>

                                  <v-col cols="6">
                                       <div style="text-align:center;margin-top:25%">
                                        <span style="font-size:18px">
                                        
                                            <div style="margin:auto;width:300px;border-bottom: 1px solid black"></div>
                                            <span>Program Chair</span>
                                        </span>
                                    </div>
                                    </v-col>
                                     <v-col cols="12">
                                       <div style="text-align:center;margin-top:15%">
                                        <span style="font-size:18px">
                                        
                                            <div style="margin:auto;width:300px;border-bottom: 1px solid black"></div>
                                            <span>Dean</span>
                                        </span>
                                    </div>
                                </v-col>
                            </v-row>
                              

                            
                        </div>
                        
                        </div>
                        
                    </section>
                </VueHtml2pdf>
             </div>
             
        </div>
      
    </div>
</template>
<script>
import VueHtml2pdf from 'vue-html2pdf';
 import moment from 'moment-timezone';
   import { mapGetters} from "vuex";
export default {
    computed: mapGetters(["get_CurrentUser"]),
    props:['classworkDetails','Question'],
    data(){
        return{
            pdfOptions:{
                margin: 0.4,
                filename: this.classworkDetails.title,
                jsPDF:{
                    orientation: 'p',
                    unit: 'in',
                    format: 'a4',
                    putOnlyUsedFonts:true,
                    floatPrecision: 16, // or "smart", default is 16
                },
                pagebreak: { mode: ['avoid-all']}
          
            },
            isDownloadType: null,
            isDownloading: false,
            isloading: false,
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
        }
    },
    methods:{
         dowloadCopy(type){
            this.isloading = true;
            this.isDownloadType = type;
            this.generateReport();
        },
        closeDialog(){
            this.$emit('CloseDialog');
            
            setTimeout(() => (this.isloading = false), 1000);
        },
        formatDate(value){
            if(value)return moment(String(value)).tz("Asia/Manila").format('MM/d/YYYY, hh:mm A');
        },
        generateReport() {
            this.$refs.html2Pdf.generatePdf();
        },
    },
  

   
}
</script>