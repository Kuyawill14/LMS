<template>
  
      <v-card>
        <!-- <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            fixed
            
            dark
            @click="$emit('closeDialog')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar> -->
         <v-app-bar
        color="primary">
            <v-btn dark @click="$emit('closeDialog')" icon>
                <v-icon>mdi-close</v-icon>
            </v-btn>
    </v-app-bar>

        <v-card-text class="ma-0 pa-0 pa-2">
                
                <v-row no-gutters>
                    <v-col cols="12" md="4" lg="4" :class="$vuetify.breakpoint.xs ? 'pt-2' : 'pt-2 pr-3'">
                         <v-container fluid ma-0 pa-0>
                            <v-card class="pa-5 pb-8">
                                <v-row  no-gutters>
                                    <v-col >
                                        <div class="d-flex justify-space-between">
                                            <div class="d-flex">
                                                <v-avatar color="brown" size="40">
                                                    <v-img alt="Profile"
                                                        :src="CheckData.profile_pic == null || CheckData.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + CheckData.name : CheckData.profile_pic">
                                                    </v-img>
                                                </v-avatar>
                                                <div>
                                                    <h4 style="line-height:1.0" class="font-weight-medium ml-2 mt-1 mb-0 pb-0">{{CheckData.name}}</h4>
                                                    <div class="ml-2 caption">Submitted: {{format_date(CheckData.updated_at)}}</div>
                                                </div>
                                            </div>
                                            <div>
                                            
                                                <v-text-field :loading="isSavingScore"  :style="$vuetify.breakpoint.xs ? 'width:100%' :'width:90%'" 
                                                @keyup="SaveScore()" class="mt-2 float-right" v-model="CheckData.points" 
                                                dense outlined label="Score" type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" min="0"></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-row>
                                            <v-col cols="12">
                                                <h2>{{classworkDetails.title}}</h2>
                                                <!-- (<span class="primary--text">{{classworkDetails.points}} <small>points</small> </span>) -->
                                            </v-col>
                                            <v-col v-for="(item, index) in CheckData.Submitted_Answers" :key="index" class="ma-0 pa-0 " cols="12" md="11" lg="11" xl="11">
                                            <div class="d-flex">
                                                <div class="body-1 pr-2 mt-2">
                                                    {{index+1}}.
                                                </div>

                                                    <div style="width:100%">
                                                        <v-hover  v-slot="{ hover }">
                                                        <v-alert
                                                            class="mb-2 pa-3"
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
                                                                <div  :class="hover ? 'text-decoration-underline':''"> {{item.name}}</div>
                                                                </v-col>
                                                                <v-col class="shrink d-flex">
                                                                <div class="black--text mt-1 mr-1">{{item.fileSize}}</div>
                                                                <div class="pt-1">
                                                                    <v-tooltip top>
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-btn  v-bind="attrs" v-on="on" 
                                                                        rounded small icon text @click="DownloadFile(item.link)"> <v-icon color="blue">mdi-download-circle-outline</v-icon></v-btn>
                                                                    </template>
                                                                    <span>Download</span>
                                                                    </v-tooltip>
                                                                </div>
                                                                </v-col>
                                                            </v-row>
                                                            </v-alert>
                                                        </v-hover>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>

                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-container>
                    </v-col>
                     <v-col cols="12" md="8" lg="8" class="pt-2">
                         <v-container fluid ma-0 pa-0>
                            <v-card>
                                <div class="pa-3">
                                     <h3 class="font-weight-bold">Document Preview</h3>
                                     <v-divider></v-divider>
                                </div>
                              
                                <div style="height:100vh;">
                                   <!--  <iframe :src="'https://view.officeapps.live.com/op/embed.aspx?src=http://127.0.0.1:8000/storage/'+CheckData.Submitted_Answers[0].link" width='100%' height='570' frameborder='0'>
                                    This is an embedded <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='http://office.com/webapps'>Office Online</a>.</iframe>  -->
                                    <!-- <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=http%3A%2F%2Fieee802%2Eorg%3A80%2Fsecmail%2FdocIZSEwEqHFr%2Edoc' width='100%' height='570' frameborder='0'>This is an embedded <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='http://office.com/webapps'>Office Online</a>.</iframe> --> 
                                   <!--  <vue-pdf-app :pdf="pdf_path"  
                                        style="height:80vh">
                                    </vue-pdf-app>  -->

                                    <iframe title="google pdf viewer" id="pdf-iframe" 
                                    :src="'https://docs.google.com/viewer?embedded=true&amp;url=' + pdf_path" 
                                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                    style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"></iframe>             
                                </div>
                            </v-card>
                         </v-container>
                    </v-col>
                </v-row>
        
        </v-card-text>
            
      </v-card>
  

</template>
<script>
/* import VuePdfApp from "vue-pdf-app";
import "vue-pdf-app/dist/icons/main.css"; */
import moment from 'moment';
  export default {
    props:['CheckData','classworkDetails'],
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        Details:null,
        timeout: null,
        value: '',
        score: '',
        pdf_path: null,
        isSavingScore: false,
      }
    },
    methods:{
         format_date(value) {
            if (value) {
                return moment(String(value)).format('MM/d/YYYY, hh:mm A')
            }
        },
        DownloadFile(link){
            var host = window.location.protocol + "//" + window.location.host;
            window.location = host+"/storage/"+link;

        },
        SaveScore(){
            clearTimeout(this.timeout);
            var self = this;
            this.timeout = setTimeout(function () {
                self.score = self.CheckData.points;
                self.isSavingScore = !self.isSavingScore;
                self.UpdateScore();
            }, 1000);
        },
        async UpdateScore(){
            if(this.score <= this.classworkDetails.points){
                axios.put('/api/submission/update-score/'+this.CheckData.id,{score: this.score})
                .then(res=>{
                    if(res.status == 200){
                        this.toastSuccess();
                        this.isSavingScore = !this.isSavingScore;
                        this.$emit('UpdateSubmission')
                    }
                })
            }
            else{
                this.isSavingScore = !this.isSavingScore;
                this.toastError();
            }
            
        },
         toastSuccess() {
            return this.$toasted.success("Score Updated", {
                theme: "toasted-primary",
                position: "top-center",
                icon: "done",
                duration: 3000
            });
        },
         toastError() {
            return this.$toasted.error("Score is higher than the set points", {
                theme: "toasted-primary",
                position: "top-center",
                icon: "error",
                duration: 3000
            });
        },
    },
    created(){
        let path = '/storage/'+this.CheckData.Submitted_Answers[0].link;
        var host = window.location.protocol + "//" + window.location.host;
        this.pdf_path = host+ path;
        //this.pdf_path  = path;
    }
  
  }
</script>
<style scoped>
    .doc {
    width: 100%;
    height: 70vh;
}
</style>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
</style>
