<template>
<v-app>
  <v-dialog v-model="AttachLink" persistent max-width="400">
            <attachlinkDiaglog 
            v-on:toggleCancelDialog="AttachLink = !AttachLink"
            v-on:ToggleRefresh="$emit('ToggleRefresh'), AttachLink = !AttachLink"
            v-if="AttachLink"></attachlinkDiaglog>
        </v-dialog>


    <v-row>
        <v-col cols="12" md="4" lg="4" >
          <v-card  elevation="5">
                <v-row>
                    <v-col cols="12" md="12" class="pt-5">
                        
                            <v-row>
                                <v-col cols="12" class="pr-7">
                                    <v-container ma-0 pa-0 class="d-flex flex-row justify-space-between">
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
                                    <div class="caption ml-2">Due {{ format_date(classworkDetails.due_date)}}</div>  
                                    </div>
                                </v-container>
                                </v-col>

                            <v-col cols="12" class="pl-7 pr-5">
                                <div class="font-weight-medium text-sm-body-2 text-md-h6 text-xl-h5">{{classworkDetails.title}}</div>
                                
                                    <div class="pt-2 d-flex flex-row ">
                                       
                                        <div class="font-weight-bold">{{classworkDetails.points}} Points</div>
                                    </div>
                                <v-divider></v-divider>
                            </v-col>

                                <v-col cols="12" class="pl-7 pr-5">
                                    <div class="text-sm-body-2"> {{classworkDetails.instruction}}</div>
                                </v-col>

                                 <v-col  cols="12" class=" pb-10 pl-4 pr-4">
                                   <v-row>
                                     <v-col cols="12" >
                                       <v-hover v-slot="{ hover }">
                                          <v-alert
                                          
                                           style="cursor:pointer"
                                            :class="hover ? 'grey lighten-2' :''"
                                              outlined
                                              :icon="Fileextension == 'pdf' ? 'mdi-file-pdf': Fileextension == 'docx'? 'mdi-file-word':''"
                                            :color="Fileextension == 'pdf' ? 'red' : Fileextension == 'docx'? 'blue':''"
                                          >
                                            <v-row >
                                              <v-col style="overflow:hidden" cols="9" class=" text-left">
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                     
                                                        <div  v-bind="attrs"  v-on="on"  
                                                        style="line-height:1.2;height:20px;overflow:hidden" 
                                                        :class="hover ? 'text-decoration-underline ':''"
                                                        @click="DownLoadFile(classworkDetails.attachment)" >
                                                         {{classworkDetails.attachment_name}}</div>
                                                    </template>
                                                    <span>{{classworkDetails.attachment_name}}</span>
                                                  </v-tooltip>
                                              </v-col>
                                              <v-col cols="3" class="">
                                                <div class="black--text">{{classworkDetails.attachment_size}}</div>
                                              </v-col>
                                            </v-row>
                                          </v-alert>
                                       </v-hover>
                                     </v-col>
                                    
                                   </v-row>

                                   <!--  <v-btn block text x-large @click="DownLoadFile(classworkDetails.attachment)" class="text-sm-body-2 font-weight-regular blue--text text-left"> 
                                        <v-icon v-if="Fileextension == 'docx'">mdi-file-word</v-icon>
                                         <v-icon v-if="Fileextension == 'pdf'">mdi-file-pdf</v-icon>
                                        {{classworkDetails.attachment_name}}</v-btn> -->
                                </v-col>

                               
                            </v-row>   
                            
                    </v-col>
                </v-row>
          </v-card>
               
           
        </v-col>

         <v-col cols="12" md="8" lg="8" >
             <v-card class="pl-5 pr-5 pb-5 pt-3"  elevation="5">
               <v-row >
                    <v-col cols="12" class="pl-1 pr-1 pb-0 mb-0">
                        <div class="font-weight-medium text-sm-body-2 text-md-h6 text-xl-h5">SUBMIT ANSWER</div> 
                   </v-col>
                   <v-col cols="12" class="pl-1 pr-1">
                       <v-divider></v-divider>
                   </v-col>

                   <v-col cols="12">
                     
                            <v-container ma-0 pa-0 v-if="!file && StatusDetails.status == null">
                                <div :class="['dropZone', dragging ? 'dropZone-over' : '']" @dragenter="dragging = true" @dragleave="dragging = false">
                                <v-container class="dropZone-info" @drag="onChange">
                                      <div > 
                                      <v-icon class="dropZone-title" style="font-size:4rem">mdi-cloud-upload-outline</v-icon>
                                      </div>
                                    <span class="dropZone-title">Your work is empty.</span>
                                </v-container>
                                <input ref="UploadAttachFile" type="file" @change="onChange">
                                </div>
                            </v-container>


                            <v-container v-else-if="file || StatusDetails.status == 'Submitted'" pl-0 pb-0 class="dropZone-uploaded">
                                <v-container v-if="StatusDetails.status != 'Submitted'" ma-0 pa-0  class="dropZone-uploaded-info">
                                  <div class="filePreview ">
                                    <v-hover v-slot="{ hover }">
                                      <v-alert
                                      
                                          style="cursor:pointer"
                                            :class="hover ? 'grey lighten-2' :''"
                                            outlined
                                            :icon="extension == 'pdf' ? 'mdi-file-pdf': extension == 'docx'? 'mdi-file-word': 
                                            extension == 'jpg' ||  extension == 'png' ||  extension == 'bmp' ? 'mdi-folder-multiple-image' :''"
                                          :color="extension == 'pdf' ? 'red' : extension == 'docx'? 'blue':
                                           extension == 'jpg' ||  extension == 'png' ||  extension == 'bmp' ? 'info': ''"
                                        >
                                          <v-row align="center" >
                                            <v-col class="grow text-left">
                                              <div :class="hover ? 'text-decoration-underline':''"> {{file.name}}</div>
                                            </v-col>
                                            <v-col class="shrink d-flex">
                                              <div class="black--text mt-1 mr-2">{{fileSize}}</div>
                                              <div>
                                                 <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn v-bind="attrs" v-on="on" 
                                                        rounded small icon text @click="removeFile"> <v-icon>mdi-close</v-icon></v-btn>
                                                    </template>
                                                    <span>Delete</span>
                                                  </v-tooltip>
                                                </div>
                                             
                                            </v-col>
                                          </v-row>
                                        </v-alert>
                                    </v-hover>
                                  </div>
                                </v-container>
                                 <v-container v-else ma-0 pa-0  class="dropZone-uploaded-info">
                                  <div class="filePreview ">
                                    <v-hover v-slot="{ hover }">
                                      <v-alert
                                      
                                          style="cursor:pointer"
                                            :class="hover ? 'grey lighten-2' :''"
                                            outlined
                                            :icon="SubmittedFilextension == 'pdf' ? 'mdi-file-pdf': SubmittedFilextension == 'docx'? 'mdi-file-word': 
                                            SubmittedFilextension == 'jpg' ||  SubmittedFilextension == 'png' ||  SubmittedFilextension == 'bmp' ? 'mdi-folder-multiple-image' :''"
                                          :color="SubmittedFilextension == 'pdf' ? 'red' : SubmittedFilextension == 'docx'? 'blue':
                                           SubmittedFilextension == 'jpg' ||  SubmittedFilextension == 'png' ||  SubmittedFilextension == 'bmp' ? 'info': ''"
                                        >
                                          <v-row align="center" >
                                            <v-col class="grow text-left">
                                              <div :class="hover ? 'text-decoration-underline':''"> {{StatusDetails.Submitted_Answers.name}}</div>
                                            </v-col>
                                            <v-col class="shrink d-flex">
                                              <div class="black--text mt-1 mr-2">{{StatusDetails.Submitted_Answers.fileSize}}</div>
                                              <div>
                                                 <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn v-bind="attrs" v-on="on" 
                                                        rounded small icon text @click="removeFile"> <v-icon>mdi-close</v-icon></v-btn>
                                                    </template>
                                                    <span>Delete</span>
                                                  </v-tooltip>
                                                </div>
                                             
                                            </v-col>
                                          </v-row>
                                        </v-alert>
                                    </v-hover>
                                  </div>
                                </v-container>
                            </v-container>
                            

                               <div class="mt-4 d-flex justify-space-between">
                                    <v-menu offset-y>
                                      <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                          rounded
                                          color="primary"
                                          dark
                                          outlined
                                          v-bind="attrs"
                                          v-on="on"
                                        >
                                        {{attrs.expanded}}
                                          Attach <v-icon right>mdi-chevron-down</v-icon>
                                        </v-btn>
                                      </template>
                                      <v-list>
                                        <v-list-item>
                                             <v-btn @click="UploadFile()" block text rounded>
                                              <v-icon left>mdi-cloud-upload-outline</v-icon> Upload File
                                             </v-btn>
                                        </v-list-item>
                                         <v-list-item>
                                             <v-btn @click="AttachLink = !AttachLink"  block text rounded>
                                                  <v-icon left>mdi-link-variant</v-icon>Attach Link
                                             </v-btn>
                                        </v-list-item>
                                      </v-list>
                                    </v-menu>
                                    <v-btn @click="StatusDetails.status == 'Submitted' ? '' :UpdateSubmission()" rounded color="primary">{{StatusDetails.status == 'Submitted'? 'Submitted' :'Submit Classwork'}}</v-btn>
                                </div>
                            
                            <div class="uploadedFile-info">
                                <div>fileName: {{ file.name }}</div>
                                <div>fileZise(bytes): {{ file.size }}</div>
                                <div>extension：{{ extension }}</div>
                            </div>
                   </v-col>
                </v-row> 
          </v-card>
        </v-col>
    </v-row>
</v-app>          
</template>

<script>
const attachlinkDiaglog = () => import('./attachLinkDialog')
import moment from 'moment';
import axios from 'axios';
export default {
    props:['classworkDetails'],
    components:{
      attachlinkDiaglog
    },
    data(){
        return{
            AttachLink: false,
            file: '',
            fileSize:null,
            dragging: false,
            link: "test12",
            StatusDetails:[],
            uploadPercentage: 0
        }
    },
     computed: {
        extension() {
            return (this.file) ? this.file.name.split('.').pop() : '';
        },
         Fileextension() {
             let attach = this.classworkDetails.attachment;
            return attach.split('.').pop();
        },
         SubmittedFilextension() {
             let attach = this.StatusDetails.Submitted_Answers.name;
            return attach.split('.').pop();
        }
    },
    methods:{
        UploadFile(){
          this.$refs.UploadAttachFile.click();
        },
         format_date(value) {
            if (value) {
                return moment(String(value)).format('dddd, h:mm a')
            }
        },
        start(){
       
          if(this.totalQuestion != 0){
            localStorage.removeItem('time_remaining');
            this.$router.push({name: 'quizstart',params: {id: this.$route.params.id},query: {clwk: this.classworkDetails.id}})
          }
        },
          DownLoadFile(file){
            window.location = "/storage/"+file;
        },
        onChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                this.dragging = false;
                return;
            }
            this.createFile(files[0]);
            },
        createFile(file) {
              this.file = file;
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
              this.dragging = false;
              //this.UpdateSubmission(file);
            },
        removeFile() {
            this.file = '';
            },
            test(){
              let data = '<iframe class="ql-video" frameborder="0" allowfullscreen="true" src="'+this.link+'"></iframe><div><br></div>'
              console.log(data);
            },
            async checkStatus(){
              axios.get('/api/submission/check-sbj/'+this.classworkDetails.id)
              .then(res=>{
                  this.StatusDetails = res.data;
              })
          },
          UpdateSubmission(){
              let fd = new FormData;
              fd.append('id', this.classworkDetails.id);
              fd.append('type', this.classworkDetails.type);
              fd.append('fileName', this.file.name);
              fd.append('fileSize', this.fileSize);
              fd.append('file', this.file);
              axios.post('/api/student/update-status', fd)
              .then(res=>{

              })
          }

    },
    created(){
      this.checkStatus();
    }
    
}
</script>

<style scoped>
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
</style>