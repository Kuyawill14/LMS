<template>
<v-container ma-0 pa-0>
  <v-dialog v-model="AttachLink" persistent max-width="400">
            <attachlinkDiaglog 
            v-on:toggleCancelDialog="AttachLink = !AttachLink"
            v-on:ToggleRefresh="$emit('ToggleRefresh'), AttachLink = !AttachLink"
            v-if="AttachLink"></attachlinkDiaglog>
        </v-dialog>


    <v-row >
        <v-col cols="12" md="4" lg="4" class="mb-0 pb-0">
          <v-card  elevation="5">
                <v-row class="mb-0 pb-0">
                    <v-col cols="12" md="12" class="pt-5 ma-0">
                        
                            <v-row >
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
                                   <div class="overline">Attachments</div>
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
                                </v-col>
                            </v-row>   
                    </v-col>
                </v-row>
          </v-card>
               
           
        </v-col>

         <v-col :class="$vuetify.breakpoint.xs? 'mt-2' : 'pt-0'" cols="12" md="8" lg="8" >
             <v-card class="pl-5 pr-5 pb-5 pt-3"  elevation="5">
               <v-row >
                    <v-col v-if="!StatusDetails.graded" cols="12" class="pl-1 pr-1 pb-0 mb-0 d-flex justify-space-between">
                        <div class="font-weight-medium text-sm-body-2 text-md-h6 text-xl-h5">SUBMIT ANSWER</div>
                        <v-btn v-if="StatusDetails.status == 'Submitted'" @click="isResubmit = !isResubmit" rounded text class="blue--text">{{isResubmit ? 'Cancel': 'Resubmit'}}</v-btn>
                   </v-col>

                   <v-col v-if="StatusDetails.graded" cols="12" class="pl-1 pr-1 pb-0 mb-0 d-flex justify-space-between">
                        <div class="font-weight-medium text-sm-body-2 text-md-h6 text-xl-h5">SUBMIT ANSWER</div>
                        <v-btn  rounded text class="success--text"><v-icon left>mdi-check</v-icon> Graded: {{StatusDetails.score}}/{{StatusDetails.totalPoints}}</v-btn>
                   </v-col>
                   <v-col cols="12" class="pl-1 pr-1">
                       <v-divider></v-divider>
                   </v-col>

                   <v-col cols="12" v-if="isloading">
                      <v-container class="fill-height" v-if="isloading">
                        <v-row  align-content="center" justify="center">
                            <v-col class="text-subtitle-1 text-center" cols="12">
                                Loading
                            </v-col>
                            <v-col cols="6">
                                <v-progress-linear color="primary" indeterminate rounded height="3"></v-progress-linear>
                            </v-col>
                        </v-row>
                   </v-container>
                   </v-col>
                     <input ref="AttAchMoreFile" type="file" class="d-none" @change="onChange">
                   <v-col class="ma-0 pa-0" cols="12" v-if="!isloading">
                          <v-col class="ma-0 pa-0 mb-2" cols="12" v-if="!file[0] && StatusDetails.status == null">
                            <v-container ma-0 pa-0 >
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
                          </v-col>
                          <v-col cols="12" v-else-if="file[0] || (StatusDetails.status == 'Submitted' || StatusDetails.status == 'Submitting')">
                            <v-container v-if="StatusDetails.status != 'Submitting' && StatusDetails.status != 'Submitted' " ma-0 pa-0 class="mb-5">
                              <v-row>
                                <v-col v-for="(item, index) in file" :key="index" class="ma-0 pa-0" cols="12">
                                  <v-hover v-slot="{ hover }">
                                    <v-alert
                                        class="mb-1 pa-3"
                                        style="cursor:pointer"
                                          :class="hover ? 'grey lighten-2' :''"
                                          outlined
                                          :icon="item.fileExte == 'pdf' ? 'mdi-file-pdf': item.fileExte  == 'docx'? 'mdi-file-word': 
                                          item.fileExte  == 'jpg' ||  item.fileExte  == 'png' ||  item.fileExte  == 'bmp' ? 'mdi-folder-multiple-image' :''"
                                        :color="item.fileExte  == 'pdf' ? 'red' : item.fileExte  == 'docx'? 'blue':
                                          item.fileExte  == 'jpg' ||  item.fileExte  == 'png' ||  item.fileExte  == 'bmp' ? 'info': ''"
                                      >
                                        <v-row align="center" >
                                          <v-col :class="uploadPercentage != 100 ? 'grow text-left mb-0 pb-0':'grow text-left'">
                                            <div :class="hover ? 'text-decoration-underline':''"> {{item.fileName}}</div>
                                          </v-col>
                                          <v-col :class="uploadPercentage != 100 ? 'shrink d-flex mb-0 pb-0':'shrink d-flex'">
                                            <div class="black--text mt-1 mr-2">{{item.fileSize}}</div>
                                          
                                            <div>
                                                <v-tooltip v-if="!isUploading[index] || uploadPercentage == 100" top>
                                                  <template v-slot:activator="{ on, attrs }">
                                                      <v-btn v-bind="attrs" v-on="on" 
                                                      rounded small icon text @click="removeFile(index)"> <v-icon>mdi-close</v-icon></v-btn>
                                                  </template>
                                                  <span>Delete</span>
                                                </v-tooltip>
                                              </div>
                                            
                                          </v-col>
                                          <v-col class="pt-0 mt-0" v-if="isUploading[index] && uploadPercentage != 100" cols="12">
                                              <v-progress-linear v-if="isUpIndex == index" rounded :value="uploadPercentage"></v-progress-linear>
                                          </v-col>
                                        </v-row>
                                      </v-alert>
                                  </v-hover>
                                </v-col>

                              </v-row>
                            </v-container>

                              <v-container v-else ma-0 pa-0 class="mb-5">
                                <v-row>
                                  <v-col v-for="(item, index) in StatusDetails.Submitted_Answers" :key="index" class="ma-0 pa-0" cols="12">
                                    <v-hover  v-slot="{ hover }">
                                    <v-alert
                                        class="mb-1 pa-3"
                                        style="cursor:pointer"
                                          :class="hover ? 'grey lighten-2' :''"
                                          outlined
                                          :icon="item.fileExte == 'pdf' ? 'mdi-file-pdf': item.fileExte == 'docx'? 'mdi-file-word': 
                                          item.fileExte == 'jpg' ||  item.fileExte == 'png' ||  item.fileExte == 'bmp' ? 'mdi-folder-multiple-image' :''"
                                        :color="item.fileExte == 'pdf' ? 'red' : item.fileExte == 'docx'? 'blue':
                                          item.fileExte == 'jpg' ||  item.fileExte == 'png' ||  item.fileExte == 'bmp' ? 'info': ''"
                                      >
                                        <v-row align="center" >
                                          <v-col class="grow text-left">
                                            <div :class="hover ? 'text-decoration-underline':''"> {{item.name}}</div>
                                          </v-col>
                                          <v-col class="shrink d-flex">
                                            <div class="black--text mt-1 mr-1">{{item.fileSize}}</div>
                                            <div>
                                                <v-tooltip v-if="StatusDetails.status == 'Submitting' || isResubmit" top>
                                                  <template v-slot:activator="{ on, attrs }">
                                                      <v-btn  v-bind="attrs" v-on="on" 
                                                      rounded small icon text @click="DeleteUpload(index)"> <v-icon>mdi-close</v-icon></v-btn>
                                                  </template>
                                                  <span>Delete</span>
                                                </v-tooltip>
                                              </div>
                                          </v-col>
                                        </v-row>
                                      </v-alert>
                                    </v-hover>
                                  </v-col>
                                </v-row>
                            </v-container>
                          </v-col>
                          
                         <!--  <div>
                              <v-textarea
                                clearable
                                auto-grow
                                clear-icon="mdi-close-circle"
                                label="Description"
                                rows="1"
                                class="mb-0 pb-0"
                              ></v-textarea>
                          </div> -->

                            <div :class="StatusDetails.status == 'Submitted' && !isResubmit ?  'mb-3 d-flex justify-end' : 'mb-3 d-flex justify-space-between' ">
                                <v-menu v-if="isResubmit || (StatusDetails.status == 'Submitting' || StatusDetails.status == null)" offset-y>
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
                                          <v-btn @click="file[fileIndex-1] || isResubmit ? UploadMoreFile() : UploadFile()" block text rounded>
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
                                <v-btn
                                @click="StatusDetails.status == 'Submitted' && !isResubmit ? '' :SubmitClasswork()" rounded 
                                :color="StatusDetails.status == 'Submitted' && !isResubmit  ? '': 'primary'">
                                <v-icon color="success"  v-if="StatusDetails.status == 'Submitted' && !isResubmit ">mdi-check</v-icon>
                                {{StatusDetails.status == 'Submitted' && !isResubmit ? 'Submitted' :'Submit Classwork'}}</v-btn>
                            </div>
                          
                       <!--    <div class="uploadedFile-info">
                              <div>fileName: {{ file.name }}</div>
                              <div>fileZise(bytes): {{ file.size }}</div>
                              <div>extension：{{ extension }}</div>
                          </div> -->
                   </v-col>
                </v-row> 
          </v-card>
        </v-col>
    </v-row>
</v-container>          
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
            file: [],
            fileSize:null,
            dragging: false,
            link: "test12",
            StatusDetails:[],
            uploadPercentage: 0,
            isUploading: [],
            tempId: '',
            isResubmit: false,
            isloading: true,
            fileIndex:null,
            tempFile: null,
            isUpIndex: null,
        }
    },
     computed: {
        extension() {
            return (this.tempFile) ? this.tempFile.name.split('.').pop() : '';
        },
         Fileextension() {
             let attach = this.classworkDetails.attachment;
            return attach.split('.').pop();
        },
         SubmittedFilextension() {
             let attach = this.StatusDetails.Submitted_Answers[0].name;
            return attach.split('.').pop();
        }
    },
    methods:{
        UploadFile(){
          this.$refs.UploadAttachFile.click();
        },
         UploadMoreFile(){
           if(this.file.length <= 4){
               this.$refs.AttAchMoreFile.click();
           }
           else{

           }
        
        },
         format_date(value) {
            if (value) {
                return moment(String(value)).format('dddd, h:mm a')
            }
        },
          DownLoadFile(file){
            window.location = "/storage/"+file;
        },
        onChange(e) {
            var files = e.target.files || e.dataTransfer.files;
           /*  if (!files.length) {
                this.dragging = false;
                return;
            } */
            
              this.createFile(files[0]);
            },
        createFile(file) {
        
              let IndexFile = this.file.length;
              this.isUploading[IndexFile] = true;
              this.fileIndex = IndexFile;
              //console.log(this.file.length)
              this.tempFile = file;
             
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
              //this.dragging = false;
              //
              if(this.StatusDetails.length == 0){
                this.file.push({ fileName: this.tempFile.name, fileSize: this.fileSize, fileExte: this.extension, file: this.tempFile});
              }
              else{
                this.file.push({ fileName: this.tempFile.name, fileSize: this.fileSize, fileExte: this.extension, file: this.tempFile});
                 this.StatusDetails.Submitted_Answers.push({ name: this.tempFile.name, fileSize: this.fileSize, fileExte: this.extension});
              }
               this.fileIndex = this.file.length;
                this.isUpIndex = this.file.length-1
                //console.log(this.fileIndex);
                this.UpdateSubmission(this.file.length-1);
            },
            removeFile(index) {
               axios.put('/api/submission/file-remove/'+this.tempId,{Fileindex: index}).then(res=>{
                  this.uploadPercentage = 0;
                   this.file = ''; 
                   this.tempId = null;
                   this.isUploading[index] = false;
              })

            },
            test(){
              let data = '<iframe class="ql-video" frameborder="0" allowfullscreen="true" src="'+this.link+'"></iframe><div><br></div>'
              console.log(data);
            },
            async checkStatus(type){
              axios.get('/api/submission/check-sbj/'+this.classworkDetails.id)
              .then(res=>{
                  this.StatusDetails = res.data;
                  this.tempId = res.data.Sub_id;
                  if(type != 'submit'){
                     this.isloading = !this.isloading;
                  }
              })
          },
          UpdateSubmission(index){

              let sub_id = this.tempId == null ? 'empty' : this.tempId;
              let fd = new FormData;
              fd.append('Submission_id', sub_id);
              fd.append('id', this.classworkDetails.id);
              fd.append('type', this.classworkDetails.type);
              fd.append('fileName', this.file[index].fileName);
              fd.append('fileSize', this.file[index].fileSize);
              fd.append('fileExte', this.extension);
              fd.append('file', this.file[index].file);
               axios.post('/api/student/update-status', fd,{
                 onUploadProgress:(progressEvent)=>{
                   const total = progressEvent.total;
                   const totalLength = progressEvent.lengthComputable ? total : null;
                   if(totalLength != null){
                     this.uploadPercentage = Math.round((progressEvent.loaded*100)/totalLength);
                   }
                 }
               })
              .then(res=>{
                this.tempId = this.tempId == null ? res.data : this.tempId ;
              })
          },
          DeleteUpload(index){
              let type = 'submit';
              axios.put('/api/submission/file-remove/'+this.tempId,{Fileindex: index}).then(res=>{
                 this.checkStatus(type);
                  this.uploadPercentage = 0;
                   this.isUploading[index] = false;
              })
          },
          async SubmitClasswork(){
            let type = 'submit';
            axios.put('/api/student/submit-classwork/'+this.tempId).then(res=>{
              if(res.status == 200){
                this.checkStatus(type);
                this.isResubmit = false;
              }
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