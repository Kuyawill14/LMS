<template>
<div>

 
    
    <v-card style="border-top:3px solid #EF6C00">

        
 
            <v-card-title class="ma-0 pa-0 float-right mr-3 mt-2">
                <v-btn @click="$emit('toggleCloseDialog')" icon>
                    <v-icon>mdi-window-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="mt-12 ml-0 pl-0 pl-2">
                 <v-row style="height:2vh"></v-row>
                 <v-row   class="fill-height" align-content="center"
                 justify="center" v-if="isloading" style="height:30vh">
                     <v-col cols="6">
                        <v-progress-linear
                            w
                            color="primary"
                            indeterminate
                            rounded
                            height="4"
                        ></v-progress-linear>
                     </v-col>
                     
                 </v-row>
                <v-row v-if="!isloading">
                      <v-col cols="12" v-if="Details.type != 'Subjective Type'">
                        <v-container ma-0 pa-0 class="d-flex flex-row justify-space-between">
                        <v-btn
                        
                        class="mx-2 mt-2"
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
                        <div class="text-md-h5 font-weight-medium"> <v-icon large color="primary">mdi-book-clock-outline</v-icon> {{Details.duration}} mins</div>
                        <div class="caption ml-2 font-weight-medium">Due {{ format_date(Details.due_date)}}</div>  
                        </div>
                    </v-container>
                    </v-col>

                      <v-col cols="12" class="pl-7 pr-5">
                            <div class="text-sm-body-2 text-md-h5 text-xl-h3 font-weight-medium">{{Details.title}}</div>
                            
                                <div class="pt-2 d-flex flex-row ">
                                    <div v-if="Details.type == 'Objective Type'" class="captions font-weight-medium"><v-icon>mdi-circle-medium</v-icon>{{totalQuestion}} Question</div>
                                    <div class="captions font-weight-medium"><v-icon>mdi-circle-medium</v-icon>{{Details.type == 'Objective Type' ? totalPoints : Details.points}} Points</div>
                                </div>
                            <v-divider></v-divider>
                        </v-col>

                        <v-col cols="12" class="pl-8 pr-5 ">
                            <div class="text-sm-body-2 font-weight-regular"> {{Details.instruction}}</div>
                        </v-col>

                        <v-col v-if="Details.type == 'Subjective Type'" cols="12" class="pl-5 pr-5 pb-2">
                            <v-hover v-slot="{ hover }">
                                <v-alert
                                @click="DownLoadFile(Details.attachment)"
                                style="cursor:pointer"
                                :class="hover ? 'grey lighten-2' :''"
                                    outlined
                                    :icon="Fileextension == 'pdf' ? 'mdi-file-pdf': Fileextension == 'docx'? 'mdi-file-word':''"
                                :color="Fileextension == 'pdf' ? 'red' : Fileextension == 'docx'? 'blue':''"
                                >
                                <v-row align="center">
                                    <v-col class="grow">
                                    <div :class="hover ? 'text-decoration-underline':''"> {{Details.attachment_name}}</div>
                                    </v-col>
                                    <v-col class="shrink">
                                    <div class="black--text font-weight-medium">{{Details.attachment_size}}</div>
                                    </v-col>
                                </v-row>
                                </v-alert>
                            </v-hover>
                        </v-col>

                        <v-col cols="12" class="pl-10 pr-5 pb-5 text-right">
                            <v-btn
                            v-if="Details.type == 'Objective Type'"
                            rounded
                            color="primary"
                            :dark="totalQuestion != 0"
                            :disabled="totalQuestion == 0"
                             @click="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: Preview_id}})"
                        >
                            Take Quiz<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                        </v-btn>

                          <v-btn
                          v-if="Details.type == 'Subjective Type'"
                            rounded
                            color="primary"
                            dark
                
                             @click="$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: Preview_id}})"
                        >
                            Submit Work<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                        </v-btn>
                        
                          

                        
                        </v-col>
                    </v-row>
                 <v-row style="height:2vh"></v-row> 
            </v-card-text>
    
    </v-card>
  
</div> 
</template>

<script>
import moment from 'moment';
export default {
    props:['Preview_id'],
    data(){
        return{
            isloading:true,
            totalPoints:null,
            totalQuestion:null,
            Details:{}
        }
    },
    computed:{
        Fileextension() {
             let attach = this.Details.attachment;
            return attach.split('.').pop();
        }
    },
    methods:{
          getClassworkDetails(){
            axios.get('/api/classwork/showDetails/'+ this.Preview_id)
            .then(res=>{
                this.Details = res.data.Details[0];
                this.isloading = !this.isloading;
                this.totalPoints = res.data.totalpoints;
                this.totalQuestion = res.data.ItemsCount;
            })
        },
          format_date(value) {
            if (value) {
                return moment(String(value)).format('dddd, h:mm a')
            }
        },
        DownLoadFile(file){
            window.location = "/storage/"+file;
        }
    },
    beforeMount(){
        this.getClassworkDetails();
        //this.Details = this.Preview_Details;
    }
    
    
}
</script>

<style>
 
</style>