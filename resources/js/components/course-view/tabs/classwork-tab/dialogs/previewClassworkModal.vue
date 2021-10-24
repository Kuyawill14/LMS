<template>


 
    
    <v-card outlined >
            <v-card-title class="ma-0 pa-0 float-right mr-2 mt-1">
                <v-btn @click="$emit('toggleCloseDialog')" icon>
                    <v-icon>mdi-window-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="mt-12 ml-0 pl-0 pl-2">
                 <v-row style="height:2vh"></v-row>
                 <v-row   class="fill-height" align-content="center"
                 justify="center" v-if="isloading" style="height:30vh">
                      <vue-element-loading :active="isloading" 
                        duration="0.7"
                        :textStyle="{fontSize: '14px'}"
                        spinner="line-scale" color="#EF6C00"  size="50"  />
                     
                 </v-row>
                <v-row v-if="!isloading">
                      <v-col cols="12" >
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
                        <div class="text-md-h5 font-weight-medium"> <v-icon large color="primary">mdi-book-clock-outline</v-icon> <span v-if="Preview_details.type != 'Subjective Type'">{{Preview_details.duration}} mins</span></div>
                        <div class="caption ml-2 font-weight-medium"> {{ Preview_details.availability != 0 ? 'Due '+ format_date(Preview_details.to_date): 'No due date'}}</div>  
                        </div>
                    </v-container>
                    </v-col>

                      <v-col cols="12" class="pl-7 pr-5">
                            <div class="text-sm-body-2 font-weight-bold">{{Preview_details.title}}</div>
                            
                                <div class="pt-2 d-flex flex-row ">
                                    <div v-if="Preview_details.type == 'Objective Type'" class="captions font-weight-medium"><v-icon>mdi-circle-medium</v-icon>{{Preview_details.total_questions}} Question</div>
                                    <div class="captions font-weight-medium"><v-icon>mdi-circle-medium</v-icon>{{Preview_details.type == 'Objective Type' ? Preview_details.points : Preview_details.points}} Points</div>
                                </div>
                            <v-divider></v-divider>
                        </v-col>

                        <v-col cols="12" class="pl-8 pr-5 ">
                            <span class="text-sm-body-2 " v-html="Preview_details.instruction"></span>
                        </v-col>

                        <!-- <v-col v-if="Details.attachment != null" cols="12" class="pl-5 pr-5 pb-2">
                            <div class="text-caption font-weight-medium">Attachments</div>
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
                        </v-col> -->

                        <v-col cols="12" class="pl-10 pr-5 pb-5 text-right">
                            <v-btn
                                v-if="Preview_details.type == 'Objective Type'"
                                rounded
                                color="primary"
                                :dark="totalQuestion != 0"
                                @click="$emit('OpenClasswork')">
                                View Quiz<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                            </v-btn>
                            <v-btn
                                v-if="Preview_details.type == 'Subjective Type'"
                                    rounded
                                    color="primary"
                                    dark
                                    @click="$emit('OpenClasswork')" >
                                    Submit Work<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                 <v-row style="height:2vh"></v-row> 
            </v-card-text>
    </v-card>

</template>

<script>
 import moment from 'moment-timezone';
export default {
    props:["Preview_details"],
    data(){
        return{
            isloading:true,
            totalPoints:null,
            totalQuestion:null,
            Details:{},
        }
    },
    computed:{
        Fileextension() {
             let attach = this.Details.attachment;
            return attach.split('.').pop();
        }
    },
    methods:{
          format_date(value) {
            if (value) {
                return moment(String(value)).tz("Asia/Manila").format('dddd,  h:mm a');
            }
        },
        DownLoadFile(file){
            window.location = "/storage/"+file;
        },
    },
    mounted(){
         this.isloading = !this.isloading;
    },
    created(){
        this.$emit('isMounted');
    }
    
    
}
</script>

<style >
    span img{
        max-width: 100% !important;
        max-height: 15rem !important;
    }
</style>