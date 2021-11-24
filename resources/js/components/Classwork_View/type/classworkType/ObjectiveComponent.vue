<template>

<div >

<div transition="slide-y-reverse-transition">
    <v-app-bar elevation="5" 
    
     v-if="!$vuetify.breakpoint.mdAndUp"
        app  color="primary"  >
         <v-btn dark rounded icon text 
            v-if="!$vuetify.breakpoint.mdAndUp"
            @click="$router.push({name: 'classwork'})" >
            <v-icon >mdi-arrow-left-thick</v-icon>
        </v-btn>
        <v-divider  vertical></v-divider>
        <v-spacer></v-spacer>
        <div v-if="classworkDetails.status == 'Submitted'" class="white--text Subtitle-1">
            <span class="font-weight-bold">Score: </span>
            <span class="">{{classworkDetails.score+' / '+classworkDetails.points}}</span> 
        </div>
    </v-app-bar>
</div>

 <vue-element-loading :active="isOpenQuiz" duration="0.7" spinner="line-scale" color="#EF6C00"  size="50" is-full-screen />
     
    <v-row  justify="center" align-content="center" no-gutters :class="$vuetify.breakpoint.mdAndUp ? 'pa-3' : 'pa-0'">
        <v-col v-if="$vuetify.breakpoint.mdAndUp || selected == 1"  cols="12" md="4" lg="4" xl="4" class="mb-0 pb-0 ">
            <v-card  :class="$vuetify.breakpoint.mdAndUp ? 'pa-3' : 'pa-1'" :elevation="$vuetify.breakpoint.mdAndUp ? 1 : 0" :outlined="$vuetify.breakpoint.mdAndUp">
                <v-row  >
                    <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" class="mb-0 pb-0">
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
                          <!--   <span>
                                <v-btn icon small><v-icon small>mdi-reload</v-icon></v-btn>
                            </span> -->
                        </div>
                        <v-divider></v-divider>
                        <v-list :max-height="$vuetify.breakpoint.mdAndUp ? '350' : '500'" style="overflow-y:scroll;scrollbar-width: thin;"  class="mb-0 pb-0">
                   
                        <v-list-item class="mb-0 pb-0" v-for="(item, i) in classworkDetails.comments" :key="i">
                            <v-list-item-avatar>
                                <v-img 
                                :src="item.profile_pic == null || item.profile_pic == ''? 
                                'https://ui-avatars.com/api/?background=random&color=fff&name=' +  item.name : item.profile_pic">
                                </v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title v-html="item.name"></v-list-item-title>
                                <div class="commentContent">
                                    <span v-html="item.content"></span>
                                </div>
                            </v-list-item-content>
                            <v-list-item-action>
    
                                  <v-menu offset-x >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon v-bind="attrs" v-on="on">
                                            <v-icon small color="grey lighten-1">mdi-dots-vertical</v-icon>
                                        </v-btn> 
                                    </template>
                                    <v-list dense nav>
                                     <!--    <v-list-item >
                                            <v-list-item-title><v-btn @click="UpdateComment = item.content,isEditing = true, idEditing_id = item.id" text>Edit</v-btn></v-list-item-title>
                                            </v-list-item> -->
                                        <v-list-item  @click="DeleteComment(item.id, i)">
                                            <v-list-item-title>Remove</v-list-item-title>
                                        </v-list-item>
                                         <!--    <v-list-item>
                                            <v-list-item-title><v-btn text>Hide</v-btn></v-list-item-title>
                                        </v-list-item> -->
                                    </v-list>
                                    </v-menu>
                            </v-list-item-action>
                        </v-list-item>
          
                    </v-list>
                    <v-divider></v-divider>
                        <v-list class="mb-0 pb-0 mt-0 pt-0">
                            <v-list-item class="mb-0 pb-0">
                            <v-list-item-avatar>
                                <v-img 
                                :src="get_CurrentUser.profile_pic == null || get_CurrentUser.profile_pic == ''? 'https://ui-avatars.com/api/?background=random&color=fff&name=' +  get_CurrentUser.firstName+' '+get_CurrentUser.lastName : get_CurrentUser.profile_pic">
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
        <v-col v-if="!isViewingSubmission" :class="!$vuetify.breakpoint.mdAndUp ? 'mt-1 pl-0 pt-1' : 'pt-0 pl-5'" cols="12" md="8" lg="8" xl="8">
            <div v-if="$vuetify.breakpoint.mdAndUp || selected == 0">
            <vue-element-loading  :active="isLoaded" spinner="bar-fade-scale" />
                <v-card :class="$vuetify.breakpoint.mdAndUp ? 'pa-3' : 'pa-1'" :elevation="$vuetify.breakpoint.mdAndUp ? 1 : 0" :outlined="$vuetify.breakpoint.mdAndUp">
                    <v-row >
                        
                        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12">
                            <div class="text-right pt-1">
                                <v-chip v-if="classworkDetails.status == 'Submitted'" color="success"> <v-icon left>mdi-check</v-icon> Score: {{classworkDetails.score+'/'+classworkDetails.points}}</v-chip>
                            </div>
                            <v-row style="height:4vh"></v-row>
                            <v-divider v-if="classworkDetails.status == 'Submitted'"></v-divider>
                        </v-col>
                        <v-col cols="12">
                            <v-container ma-0 pa-0 class="d-flex flex-row justify-space-between">
                                <v-btn
                                class="mx-2" fab dark
                                color="primary">
                                    <v-icon large>
                                    mdi-book-open-variant
                                    </v-icon>
                                </v-btn>
                                <div
                                class="float-right mt-3"
                                fab>
                                    <div class="text-md-h5"> <v-icon large color="primary">mdi-book-clock-outline</v-icon> {{classworkDetails.duration}} {{classworkDetails.duration > 1 ? 'mins' : 'min'}}</div>
                                    <div v-if="classworkDetails.status != 'Submitted'" class="caption ml-2">Due {{ classworkDetails.availability ? format_date(classworkDetails.to_date) : 'always Available'}}</div>
                                    <div v-else class="caption ml-2">Submitted: {{format_date(classworkDetails.Submitted_at)}}</div>    
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

                        <v-col cols="12" class="pl-10 pr-5 pb-5">
                <!--      <div class="text-body-1" style="max-width:98%"> {{classworkDetails.instruction}}</div> -->
                        <span class="text-sm-body-2 " style="max-width:98%" v-html="classworkDetails.instruction"></span>
                        </v-col>
                        <v-col v-if="classworkDetails.attachment != null" cols="12" class=" pb-5 pl-5 pr-5">
                            <div class="overline" v-if="classworkDetails.attachment != null">Attachments</div>
                            <v-list  class="ma-0 pa-0">
                                <v-list-item v-for="(item, i) in classworkDetails.attachment" :key="i" class="ma-0 pa-0">
                                    <v-list-item-avatar >
                                            <v-icon large
                                            :color="CheckFileIconColor(item.extension)">
                                            {{CheckFileIcon(item.extension)}}
                                            </v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content >
                                        <v-hover v-slot="{ hover }">
                                            <v-list-item-title :class="hover ? 'blue--text' : ''" style="cursor:pointer" @click="DownLoadFile(item.attachment)">{{item.name}}</v-list-item-title>
                                        </v-hover> 
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    
                        <v-col v-if="classworkDetails.availability == 0" cols="12" :class="$vuetify.breakpoint.mdAndUp ? 'pl-10 pr-5 pb-5 text-right' : 'pb-5'">
                            <v-btn
                                :block="!$vuetify.breakpoint.mdAndUp "
                                v-if="((classworkDetails.status == null || classworkDetails.status == '') && classworkDetails.status != 'Submitted') && classworkDetails.publish == null"
                                rounded
                                color="primary"
                                :loading="isOpenQuiz"
                                :dark="totalQuestion != 0"
                                :disabled="totalQuestion == 0"
                                @click="(classworkDetails.status == null || classworkDetails.status == '') && classworkDetails.status != 'Submitted' ? confirmStartDialog = !confirmStartDialog: ''">Take Quiz<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                            </v-btn>
                            
                            <v-btn
                                :block="!$vuetify.breakpoint.mdAndUp "
                                v-if="classworkDetails.status == 'Taking' && classworkDetails.publish == null"
                                rounded
                                color="primary"
                                 :loading="isOpenQuiz"
                                :dark="totalQuestion != 0"
                                :disabled="totalQuestion == 0"
                                @click="continueQuiz(classworkDetails.id)">Continue<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                            </v-btn>

                            <v-btn
                                :block="!$vuetify.breakpoint.mdAndUp "
                                v-if="classworkDetails.status == 'Submitted' && classworkDetails.reviewAnswer == 1"
                                @click="isViewingSubmission = !isViewingSubmission" rounded
                                color="primary">View Submission<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                            </v-btn>
                    </v-col>
                    
                    <v-col v-else-if="classworkDetails.availability == 1" cols="12" :class="$vuetify.breakpoint.mdAndUp ? 'pl-10 pr-5 pb-5 text-right' : 'pb-5'"> 
                        
                        <v-row>
                            <v-col cols="12" v-if="format_date1(classworkDetails.currentDate) >= format_date1(classworkDetails.from_date)">
                                    <v-btn
                                    :block="!$vuetify.breakpoint.mdAndUp "
                                        v-if="((classworkDetails.status == null || classworkDetails.status == '') && classworkDetails.status != 'Submitted') && classworkDetails.publish == null"
                                        rounded
                                        :loading="isOpenQuiz"
                                        color="primary"
                                        :dark="totalQuestion != 0"
                                        :disabled="totalQuestion == 0"
                                        @click="classworkDetails.status != 'Submitted' ? confirmStartDialog = !confirmStartDialog: ''">Take Quiz<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                                    </v-btn>

                                    <v-btn
                                    :block="!$vuetify.breakpoint.mdAndUp "
                                        v-if="classworkDetails.status == 'Taking' && classworkDetails.publish == null"
                                        rounded
                                        :loading="isOpenQuiz"
                                        color="primary"
                                        dark
                                        @click="continueQuiz(classworkDetails.id)">
                                        Continue<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                                    </v-btn>

                                    <v-btn
                                    :block="!$vuetify.breakpoint.mdAndUp "
                                    v-if="classworkDetails.status == 'Submitted' && classworkDetails.reviewAnswer == 1"
                                    @click="isViewingSubmission = !isViewingSubmission"
                                        rounded
                                        color="primary">View Submission<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                                    </v-btn>
                            </v-col>
                            <v-col v-else cols="12">
                                    <v-btn
                                    v-if="classworkDetails.publish == null"
                                    :block="!$vuetify.breakpoint.mdAndUp "
                                    rounded
                                    color="primary"
                                    disabled>
                                    Not Yet Available<v-icon right dark>mdi-book-arrow-right-outline</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                    </v-row>   
                    <v-row style="height:1vh"></v-row> 
                </v-card> 
             </div>
        </v-col>
        
        <v-col v-else :class="!$vuetify.breakpoint.mdAndUp ? 'mt-1 pl-0 pt-1' : 'pt-0 pl-5'" cols="12" md="10" lg="8" xl="8" >
            <vue-element-loading  :active="isLoaded" spinner="bar-fade-scale" />
            <v-card :class="$vuetify.breakpoint.mdAndUp ? 'pa-3' : 'pa-1'" :elevation="!$vuetify.breakpoint.mdAndUp ? '0' : '1'" :outlined="$vuetify.breakpoint.mdAndUp ">
                <viewSubmission v-on:closeViewing="isViewingSubmission = !isViewingSubmission" :classworkDetails="classworkDetails" :details="statusDetails"></viewSubmission>
            </v-card> 
        </v-col>
    </v-row>
 
   
    <v-bottom-navigation  app grow 
        v-if="!$vuetify.breakpoint.mdAndUp "
    :value="selected"
    color="primary" >
    <v-btn class="mb-12" @click="selected = 0">
        <span>Details</span>
        <v-icon>mdi-book-information-variant</v-icon>
    </v-btn>

    <v-btn @click="selected = 1, isViewingSubmission =  isViewingSubmission ? isViewingSubmission = false  : isViewingSubmission">
        <span>Comment</span>
        <v-icon>mdi-comment</v-icon>
    </v-btn>
    </v-bottom-navigation> 

     <v-dialog v-model="confirmStartDialog" width="320">
      <v-card>
        <v-card-title class="text-h6">
          Start Quiz?
        </v-card-title>

        <v-card-text>
          Are you sure to take this quiz?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn  text @click="confirmStartDialog = false">
            Cancel
          </v-btn>

          <v-btn color="primary" text @click="start()">
            Start
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  
</div>

</template>

<script>
const viewSubmission = () => import('./submissionView/viewSubmission')
import moment from 'moment-timezone';
import {mapGetters} from "vuex";
export default {
    props:['classworkDetails','totalPoints','totalQuestion',],
    components:{
        viewSubmission
    },
    data(){
        return{
            status: null,
            updateDetails:{},
            isCommenting: false,
            comment: '',
            isLoaded: true,
            selected: 0,
            //statusDetails: [],
            isViewingSubmission: false,
            DateToday: null,
            ScrollPosistion: 0,
            isOpenQuiz: false,
            confirmStartDialog:false,
        }
        
    },
 
    computed:{
        ...mapGetters(['get_CurrentUser','statusDetails']),
    },
    methods:{
         CheckFileIcon(ext){
            if(ext == 'jpg' ||  ext == 'jpeg' || ext == 'gif' ||  ext == 'svg' || ext == 'png' ||  ext == 'bmp'){
                return 'mdi-image';
            }
            else if(ext == 'pdf'){
                return 'mdi-file-pdf';
            }
            else if(ext == 'txt' ){
                return 'mdi-note-text-outline';
            }
            else if(ext == 'docx' || ext == 'doc'){
                return 'mdi-file-word';
            }
            else if(ext == 'link' ){
                return 'mdi-file-link';
            }
        },
       CheckFileIconColor(ext){
            if(ext == 'jpg' ||  ext == 'jpeg' || ext == 'gif' ||  ext == 'svg' || ext == 'png' ||  ext == 'bmp'){
            return 'info';
            }
            else if(ext == 'pdf'){
            return 'red';
            }
            else if(ext == 'txt' ){
            return 'primary';
            }
            else if(ext == 'docx' || ext == 'doc'){
            return 'blue';
            }
            else if(ext == 'link' ){
            return 'green';
            }
            else{
            return 'primary';
            }

        },
         format_date(value) {
            if (value) {
                //return moment(String(value)).format('dddd, h:mm a')
                return moment(String(value)).tz("Asia/Manila").format('dddd, h:mm a');
            
            }
        },

        format_date1(value) {
            if (value) {
                //return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
                return moment(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            }
        },
        start(){
        this.classworkDetails.status = "Taking";
          this.isOpenQuiz = true;
          if(this.totalQuestion != 0 && (this.status == null || this.status == '')){
              //this.UpdateStatus( this.classworkDetails.id);
             this.$router.push({name: 'quizstart',params: {id: this.$route.params.id},query: {clwk: this.classworkDetails.id}})
          }
          else{
              this.isOpenQuiz = false;
          }
        },
        continueQuiz(id){
            this.isOpenQuiz = true;
            this.$router.push({name: 'quizstart',params: {id: this.$route.params.id},query: {clwk: id}})
        },
        checkStatus(){
            axios.get('/api/student/check-status/'+this.classworkDetails.id)
            .then(res=>{
                this.status = res.data.status;
                this.statusDetails = res.data;
                this.isLoaded = false;
            })
        },
        async UpdateStatus(id){
          
            this.updateDetails.id = id;
            this.updateDetails.class_classwork_id = this.classworkDetails.class_classwork_id;
            this.updateDetails.type = this.classworkDetails.type;
            axios.post('/api/student/update-status',this.updateDetails)
            .then(res=>{
                if(res.data.success == true){
                    this.$router.push({name: 'quizstart',params: {id: this.$route.params.id},query: {clwk: this.classworkDetails.id}})
                }
                else{
                     this.toastError('Something went wrong while loading this classwork!');
                }
              
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
                ////console.log(res.data);
                  if(res.status == 200 ){
                    this.classworkDetails.comments.push({
                      content : res.data.comment,
                      id : res.data.id,
                      name : res.data.name,
                      profile_pic : res.data.profile_pic
                    })
                    this.comment = '';
                  }
                  
              })
               this.isCommenting = false;
          },
          async DeleteComment(id, index){
              axios.delete('/api/post/classwork/comment/delete/'+id)
              .then(res=>{
                  if(res.data.success == true){
                      this.classworkDetails.comments.splice(index, 1);
                  }
              })
          },
          DownLoadFile(file){
            window.open(file,'_blank');
        },
    },
   async created(){
       //this.checkStatus();
       //this.isLoaded = false;
    },
    mounted(){
        this.isLoaded = false;
        const newDate = new Date();
        this.DateToday = moment(newDate).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
    },
    
   /*   beforeRouteEnter(to, from, next) {
        next(vm => {
            //vm.isExamStart = true
            vm.checkStatus();
        });
    }, */
}
</script>
<style>
     span img{
        max-width: 100% !important;
        max-height: 50rem !important;
    }
    /* width */
    ::-webkit-scrollbar {
    width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }

    .commentContent  img{
        max-width: 100% !important;
        max-height: 20rem !important;
    }


</style>
