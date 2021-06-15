<template>
    <v-row>
        <v-col cols="12" md="4" lg="4" >
          <v-card outlined elevation="0">
                <v-row>
                    <v-col cols="12" md="12" class="pl-3 pr-9 pt-5">
                        
                            <v-row>
                                <v-col cols="12">
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
                                       
                                        <div class="captions">{{classworkDetails.points}} Points</div>
                                    </div>
                                <v-divider></v-divider>
                            </v-col>

                                <v-col cols="12" class="pl-7 pr-5">
                                    <div class="text-sm-body-2"> {{classworkDetails.instruction}}</div>
                                </v-col>

                                 <v-col cols="8" class=" pb-10">
                                    <v-btn text x-large @click="DownLoadFile(classworkDetails.attachment)" class="text-sm-body-2 font-weight-regular blue--text"> <v-icon>mdi-file-word</v-icon> {{classworkDetails.attachment_name}}</v-btn>
                                </v-col>

                               
                            </v-row>   
                            
                    </v-col>
                </v-row>
          </v-card>
               
           
        </v-col>

         <v-col cols="12" md="8" lg="8" >
             <v-card outlined elevation="0">
               <v-row style="height:50vh"></v-row> 
          </v-card>
        </v-col>
    </v-row>
               
</template>

<script>

import moment from 'moment';
export default {
    props:['classworkDetails'],
    methods:{
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
        }
    },
    beforeMount(){
      window.history.forward(1)
    }
}
</script>