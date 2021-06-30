<template>
  
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="$emit('closeDialog')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        
        <v-container class="pa-5">
            <v-row>
                <v-col cols="12" md="8" lg="8" xl="8">
                    <div class="d-flex justify-space-between">
                        <div class="d-flex">
                            <v-avatar color="brown" size="60">
                                <v-img alt="Profile"
                                    :src="CheckData.profile_pic == null || CheckData.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + CheckData.name : CheckData.profile_pic">
                                </v-img>
                            </v-avatar>
                            <div>
                                <h3 style="line-height:1.0" class="font-weight-medium ml-2 mt-1 mb-0 pb-0">{{CheckData.name}}</h3>
                                <div class="ml-2 caption">Submitted: {{format_date(CheckData.updated_at)}}</div>
                            </div>
                        </div>
                        <div>
                        
                            <v-text-field  :style="$vuetify.breakpoint.xs ? 'width:40%' :'width:30%'" 
                            @keyup="SaveScore()" class="mt-3 float-right" v-model="CheckData.points" 
                            dense outlined label="Score"></v-text-field>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12">
                    <v-row>
                        <v-col cols="12">
                          
                                <h2>{{classworkDetails.title}}</h2>
                                (<span class="primary--text">{{classworkDetails.points}} <small>points</small> </span>)
                            
                            
                        </v-col>
                        <v-col v-for="(item, index) in CheckData.Submitted_Answers" :key="index" class="ma-0 pa-0 " cols="12" md="8" lg="8" xl="8">
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
           </v-container>
      </v-card>
  

</template>
<script>
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
      }
    },
    methods:{
         format_date(value) {
            if (value) {
                return moment(String(value)).format('MM/d/YYYY, hh:mm A')
            }
        },
        DownloadFile(link){
            window.location = "/storage/"+link;
        },
        SaveScore(){
            clearTimeout(this.timeout);
            var self = this;
            this.timeout = setTimeout(function () {
                self.score = self.CheckData.points;
                self.UpdateScore();
            }, 1000);
        },
        async UpdateScore(){
            if(this.score <= 50){
                axios.put('/api/submission/update-score/'+this.CheckData.id,{score: this.score})
                .then(res=>{
                    if(res.status == 200){
                        this.toastSuccess();
                        this.$$emit('UpdateSubmission')
                    }
                })
            }
            else{
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
  
  }
</script>