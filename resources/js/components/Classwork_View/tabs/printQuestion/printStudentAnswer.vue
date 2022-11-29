<template>
    <div v-show="isDownloading">

        <!-- <v-overlay :value="isloading">
            <v-progress-circular
                indeterminate
                size="80">Generating
            </v-progress-circular>
        </v-overlay> -->
        <div>
            
         <!--    v-show="isDownloading"
            @hasDownloaded="closeDialog()"  -->
            <div >
            
                  <VueHtml2pdf :show-layout="false"  :enable-download="true" :preview-modal="false"
                    :paginate-elements-by-height="1000" :filename="this.classworkDetails.title+' - '+Details.firstName+' '+Details.lastName" :pdf-quality="2" :manual-pagination="false"
                    pdf-format="a4" pdf-orientation="portrait" pdf-content-width="780px" :html-to-pdf-options="pdfOptions" 
                    @hasDownloaded="closeDialog()" ref="html2Pdf">
                    
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
                            <br>                         
                                <span style="display:flex"><b style="margin-right:1%">Name: </b> <span>{{Details.firstName+' '+Details.lastName}}</span></span>
                                 <span style="display:flex"><b style="margin-right:1%">Score: </b> <span>{{Details.points}}</span></span>   
                            <hr>
                            
                            <br>
                        </section>
                           <!--  v-for="(item, index) in getAll_questions.Question" -->
                        <section style="width:90%"  v-for="(question, mainIndex) in Question.Question" :key="mainIndex" class="pdf-item">
                    
                            <v-row >
                                <v-col cols="12" >
                                    <div :style="isDownloadType == 'answer_key' ? 'display:flex;justify-content: space-between' : 'display:flex'">
                                        <span style="display:flex;padding-right:1%">
                                           
                                            <v-icon v-if="CheckAnswer[mainIndex] && question.type != 'Matching type'" style="padding-right:2px" color="success">mdi-checkbox-marked</v-icon> 
                                        
                                           
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
                                    <div style="margin-left:15px">
                                        <div v-if="question.isNew">
                                            <div v-for="(Ans, i) in Question.Answer[mainIndex].options" :key="i"  >
                                                <div :style="Answers[mainIndex].Answer == Ans.id ? 'color:red;display:flex;font-weight:600' : 'display:flex'">
                                                    <span style="margin-right:4px" >{{Alphabet[i]}}.</span>
                                                    <span v-html="Ans.Choice" class="post-content"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div v-else>
                                            <div v-for="(Ans, i) in Question.Answer[mainIndex].options" :key="i"  >
                                                <div :style="Answers[mainIndex].Answer == Ans.Choice ? 'color:red;display:flex;font-weight:600' : 'display:flex'">
                                                    <span style="margin-right:4px" >{{Alphabet[i]}}.</span>
                                                    <span v-html="Ans.Choice" class="post-content"></span>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </v-col>

                                <v-col cols="12" v-if="question.type == 'Identification'">
                                    <div  style="margin-left:15px">

                                        
                                        <div style="color:green" class="mb-3">
                                            Correct Answers:
                                        </div>
                                        <div v-if="Question.Answer[mainIndex].options.length == 0" style="line-height:1.4;display:flex"
                                            class=" ma-0 pa-0 d-flex pl-3 success--text">
                                            <span style="padding-right:4px">&bull; </span>
                                            <span v-html="item.answer"
                                                class="post-content pa-0 ma-0"></span>
                                        </div>
                                        <div>
                                            <div v-for="(Ans, i) in Question.Answer[mainIndex].options" style="line-height:1.4;display:flex"
                                                :key="i"
                                                class=" ma-0 pa-0 pl-3 d-flex success--text">
                                                <span style="padding-right:4px;padding-left:10px">&bull; </span>
                                                <span v-html="Ans.Choice"
                                                    class="post-content pa-0 ma-0"></span>
                                            </div>
                                        </div>

                                        <div style="margin-top:10px" class=" mb-3 primary--text">
                                            Student Answer:
                                        </div>
                                        <div style="line-height:1.4;display:flex"
                                            class="Subtitle-1 ma-0 pa-0 d-flex pl-3 primary--text">
                                            <span style="padding-right:4px;padding-left:10px">&bull; </span>
                                            <span v-html="Answers[mainIndex].Answer"
                                                class="post-content"></span>
                                            <span v-if="Answers[mainIndex].Answer == null"
                                                class="post-content"> N/A</span>
                                        </div>
                                    </div>
                                   
                                </v-col>

                                <v-col cols="12" v-if="question.type == 'True or False'">
                                
                                    <div  style="margin-left:15px">
                                        <div v-for="(x, n) in inputCheck" :key="n"  >
                                            <div :style="Answers[mainIndex].Answer == inputCheck[n] ? 'color:red;display:flex;font-weight:600' : 'display:flex'">
                                                
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
                                                    Column A
                                                </v-col>
                                                <v-col class="font-weight-bold" cols="5">
                                                    Column B
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <div class="mb-5">
                                                <v-divider></v-divider>
                                        </div>
                                        <v-container class="mb-0 pb-0 pt-2 pb-3" >
                                            <v-row>
                                            <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="7">
                                                <v-row>
                                                    <v-col class="d-flex flex-row pa-0" cols="12" v-for="(Ans_match, i) in Answers[mainIndex].SubQuestion" :key="Ans_match.id">
                                                        <div class="mt-0 pt-0 mb-0 pb-0 pa-0">
                                                        <!--   <v-checkbox  hide-details
                                                            class="ma-0 pa-0 mt-2" color="success"
                                                            @click="MarkAsCorrect(index, i, item.id, Ans_match.SubQuestion_id, item.points)"
                                                            v-model="Check[index][i]">
                                                        </v-checkbox> -->
                                                        </div> 
                                                    <div style="display:flex"> 
                                                        <div  style="text-align:center;">
                                                        <span style="font-size:12px">
                                                            <span  style="margin-right:2%;font-weight:600;color:red">{{ Ans_match.Ans_Letter}}</span>
                                                            <div style="width:50px;border-bottom: 1px solid black"></div>
                                                        </span>
                                                        </div>

                                                        <span style="margin-right:2%;">{{(i+1+'. ')}}</span>
                                                        <span style="font-weight:600" v-html="Ans_match.SubQuestion" class="subquestion-content"></span>
                                                    </div>
                                                
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <v-col class="mb-1 pb-0 pt-0 mt-0"  cols="5">
                                                    <v-row>
                                                    <v-col cols="12" v-for="(pairList, i) in Answers[mainIndex].SubAnswer" :key="i" class="d-flex flex-row pa-0">
                                                        <div  style="width:100%;display:flex"  class="d-flex flex-row mt-2 pl-4"> 
                                                            <span tyle="margin-right:2%;">{{(Alphabet[i]+'. ')}}</span>
                                                            <span style="font-weight:600" v-html="pairList.SubChoice" class="subchoices-content"></span>
                                                        </div>
                                                        
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </div>
                                </v-col>

                                <v-col cols="12" v-if="question.type == 'Essay'">
                                    <div style="margin-left:15px">
                                         <div class="primary--text">
                                            Student Answer:
                                        </div>
                                        <div style="line-height:1.4;display:flex"
                                            class="Subtitle-1 ma-0 pa-0 d-flex pl-3">
                                                <span style="padding-right:4px;padding-left:10px">&bull; </span>
                                            <span v-html="Answers[mainIndex].Answer" class="post-content"></span>
                                            <span v-if="Answers[mainIndex].Answer == null" class="post-content"> N/A</span>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </section>
                        <br>
                        <br>
                        <hr>
                            <br>
                        <div  >
                        <!--     <v-row>
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
                            </v-row> -->
                              

                            
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
export default {
    props:['classworkDetails','Question','Answers','CheckAnswer','Details'],
    data(){
        return{
            pdfOptions:{
                margin: 0.4,
                filename: this.classworkDetails.title+' - '+this.Details.firstName+' '+this.Details.lastName,
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
    mounted(){
        //this.generateReport();
    }
  

   
}
</script>