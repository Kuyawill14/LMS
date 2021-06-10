<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="5">
            <v-card  class="elevation-12">
              <v-window>
                <v-window-item >
                    <v-row>
                        <v-col cols="12" md="12" class="primary">
                          
                        </v-col>
                          <v-col cols="12" md="12" class="pl-7 pr-9 pt-5">
                            <v-row style="height:5vh"></v-row>
                              <v-row>
                                  <v-col cols="12">
                                        <v-container ma-0 pa-0 class="d-flex flex-row justify-space-between">
                                        <v-btn
                                        class="mx-2"
                                        fab
                                        dark
                                        
                                        color="primary"
                                        >
                                        <v-icon x-large>
                                        mdi-book-open-variant
                                        </v-icon>
                                        </v-btn>
                                        <div
                                        class="float-right mt-3"
                                        fab
                                        >
                                        <div class="text-md-h5"> <v-icon large color="primary">mdi-book-clock-outline</v-icon> {{classworkDetails.duration}} mins</div>
                                        <div class="caption ml-2">Due {{ format_date(classworkDetails.due_date)}}</div>  
                                        </div>
                                    </v-container>
                                  </v-col>

                                <v-col cols="12" class="pl-7 pr-5">
                                    <div class="text-sm-body-2 text-md-h5 text-xl-h3">{{classworkDetails.title}}</div>
                                   
                                     <div class="pt-2 d-flex flex-row ">
                                         <div class="captions"><v-icon>mdi-circle-medium</v-icon>{{totalQuestion}} Question</div>
                                         <div class="captions"><v-icon>mdi-circle-medium</v-icon>{{totalPoints}} Points</div>
                                     </div>
                                    <v-divider></v-divider>
                                </v-col>

                                 <v-col cols="12" class="pl-10 pr-5 pb-10">
                                    <div class="text-sm-body-2"> {{classworkDetails.instruction}}</div>
                                </v-col>

                                 <v-col cols="12" class="pl-10 pr-5 pb-10 text-right">
                                      <v-btn
                                      rounded
                                      color="primary"
                                      :dark="totalQuestion != 0"
                                      :disabled="totalQuestion == 0"
                                      @click="start()"
                                    >
                                      Take Quiz<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                                    </v-btn>
                                </v-col>
                              </v-row>   
                              <v-row style="height:5vh"></v-row> 
                        </v-col>
                    </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>

import moment from 'moment';
export default {
    props:['classworkDetails','totalPoints','totalQuestion'],
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
        }
    },
    beforeMount(){
      window.history.forward(1)
    }
}
</script>