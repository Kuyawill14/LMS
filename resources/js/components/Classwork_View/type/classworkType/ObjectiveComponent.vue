<template>

<div class="pt-7">


     
    <v-row justify="center" no-gutters class="pa-2">
        <v-col cols="12" md="5" lg="4" class="mb-0 pb-0">
            <v-card class="pa-3" elevation="1" outlined>
                <v-row  >
                    <v-col cols="12" class="mb-0 pb-0">
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn rounded
                                    v-bind="attrs"
                                    v-on="on"
                                    icon 
                                    text 
                                    class=""
                                    @click="$router.push({name: 'classwork'})" >
                                <v-icon dark>mdi-arrow-left-thick</v-icon>
                                </v-btn>
                            </template>
                            <span>Back to classworks</span>
                        </v-tooltip>
                    </v-col>
                    <v-col class="ma-0 pa-0">
                        <div class="pt-2 pl-4 pr-4 pb-2">
                            <v-icon left>mdi-comment</v-icon>Private Comments
                        </div>
                        <v-divider></v-divider>
                        <v-list class="mb-0 pb-0">
                   
                        <v-list-item class="mb-0 pb-0" v-for="(item, i) in classworkDetails.comments" :key="i">
                            <v-list-item-avatar>
                                <v-img 
                                :src="item.profile_pic == null || item.profile_pic == ''? 

                                'https://ui-avatars.com/api/?background=random&color=fff&name=' +  item.name : '/storage/'+item.profile_pic">
                                </v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title v-html="item.name"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon>
                                <v-icon small color="grey lighten-1">mdi-dots-vertical</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
          
                    </v-list>
                    <v-divider></v-divider>
                        <v-list class="mb-0 pb-0 mt-0 pt-0">
                            <v-list-item class="mb-0 pb-0">
                            <v-list-item-avatar>
                                <v-img 
                                :src="get_CurrentUser.profile_pic == null || get_CurrentUser.profile_pic == ''? 'https://ui-avatars.com/api/?background=random&color=fff&name=' +  get_CurrentUser.firstName+' '+get_CurrentUser.lastName : '/storage/'+get_CurrentUser.profile_pic">
                                </v-img>
                            </v-list-item-avatar>
                            <v-list-item-content class="ma-0 pa-0">
                                <v-textarea
                                    :loading="isCommenting"
                                    v-model="comment"
                                    prepend-avatar="mdi-emoticon-dead"
                                    filled
                                    rounded
                                    dense
                                    auto-grow
                                    rows="1"
                                    clear-icon="mdi-close-circle"
                                    clearable
                                    placeholder="Comment"
                                    class="pa-0 mt-7"
                                    type="text"
                                    >
                                    </v-textarea>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn :loading="isCommenting" @click="addComment(classworkDetails)" icon>
                                <v-icon  color="primary">mdi-send</v-icon>
                                </v-btn>
                            </v-list-item-action>
                            </v-list-item>
                        </v-list>

                    </v-col>
                </v-row>
            </v-card>
        </v-col>
        <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'mt-2 pl-0 pt-2' : 'pt-0 pl-5'" cols="12" md="7" lg="8" >
            <vue-element-loading  :active="isLoaded" spinner="bar-fade-scale" />
            <v-card class="pa-3" elevation="1" outlined>
                <v-row >
                    
                    <v-col cols="12">
                        <div class="text-right pt-1">
                            <v-chip v-if="status == 'Submitted'" color="success"> <v-icon left>mdi-check</v-icon> Score: {{statusDetails.score+'/'+statusDetails.totalPoints}}</v-chip>
                        </div>
                        <v-row style="height:4vh"></v-row>
                        <v-divider v-if="status == 'Submitted'"></v-divider>
                    </v-col>
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
                        <div class="caption ml-2">Due {{ classworkDetails.availability ? format_date(classworkDetails.to_date) : 'always Available'}}</div>  
                        </div>
                    </v-container>
                    </v-col>

                <v-col cols="12" class="pl-7 pr-5">
                    <div class="text-sm-body-2 text-md-h5 text-lg-h6 text-xl-h6">{{classworkDetails.title}}</div>
                    
                        <div class="pt-2 d-flex flex-row ">
                            <div class="captions"><v-icon>mdi-circle-medium</v-icon>{{totalQuestion}} Question</div>
                            <div class="captions"><v-icon>mdi-circle-medium</v-icon>{{classworkDetails.points}} Points</div>
                        </div>
                    <v-divider></v-divider>
                </v-col>

                    <v-col cols="12" class="pl-10 pr-5 pb-10">
                    <div class="text-sm-body-2"> {{classworkDetails.instruction}}</div>
                </v-col>

                    <v-col cols="12" class="pl-10 pr-5 pb-10 text-right">
                         <v-btn
                         v-if="(status == null || status == '') && status != 'Submitted'"
                            rounded
                            color="primary"
                            :dark="totalQuestion != 0"
                            :disabled="totalQuestion == 0"
                            @click="(status == null || status == '') && status != 'Submitted' ? start(): ''">Take Quiz<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                        </v-btn>

                        <v-btn
                            v-else
                            rounded
                            color="primary">View Submission<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                        </v-btn>
                </v-col>
                </v-row>   
                <v-row style="height:5vh"></v-row> 
            </v-card> 
        </v-col>
    </v-row>

</div>

</template>

<script>

import moment from 'moment/src/moment';
import {mapGetters} from "vuex";
export default {
    props:['classworkDetails','totalPoints','totalQuestion'],
    data(){
        return{
            status: null,
            updateDetails:{},
            isCommenting: false,
            comment: null,
            isLoaded: true,
            statusDetails: [],
        }
        
    },
    computed:{
        ...mapGetters(['get_CurrentUser']),
    },
    methods:{
         format_date(value) {
            if (value) {
                return moment(String(value)).format('dddd, h:mm a')
            }
        },
        start(){
          
          if(this.totalQuestion != 0 && (this.status == null || this.status == '')){
              this.UpdateStatus( this.classworkDetails.id);
            localStorage.removeItem(btoa('timer_time'));
            localStorage.removeItem(btoa('CurrentAnswers'));
            this.$router.push({name: 'quizstart',params: {id: this.$route.params.id},query: {clwk: this.classworkDetails.id}})
          }
        },
        async checkStatus(){
            axios.get('/api/student/check-status/'+this.classworkDetails.id)
            .then(res=>{
                this.status = res.data.status;
                this.statusDetails = res.data;
                this.isLoaded = false
            })
        },
        async UpdateStatus(id){
          
            this.updateDetails.id = id;
            this.updateDetails.class_classwork_id = this.classworkDetails.class_classwork_id;
            this.updateDetails.type = this.classworkDetails.type;
            axios.post('/api/student/update-status',this.updateDetails)
            .then(res=>{

            })
        },
         async addComment(details){
              let data = {};
              this.isCommenting = true;
              data.classwork_id = details.id;
              data.to_user = details.user_id;
              data.type = 'Private';
              data.course_id = this.$route.params.id;
              data.comment = this.comment;
              axios.post('/api/post/classwork/comment/insert', data)
              .then((res)=>{
                //console.log(res.data);
                  if(res.status == 200 ){
                    this.classworkDetails.comments.push({
                      content : res.data.comment,
                      id : res.data.id,
                      name : res.data.name,
                      profile_pic : res.data.profile_pic
                    })
                    this.comment = null;
                  }
                  
              })
               this.isCommenting = false;
          },
    },
    mounted(){
        this.checkStatus();
      //window.history.forward(1)
    }
}
</script>