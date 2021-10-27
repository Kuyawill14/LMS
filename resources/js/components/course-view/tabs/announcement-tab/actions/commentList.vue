<template>
<div>
    <v-container :class="!$vuetify.breakpoint.xs ? 'mt-3 text-right pl-5 pr-3 mb-2 d-inline-flex' : 'mt-3 text-center pl-5 pr-3 mb-2 d-inline-flex justify-space-between'">
        <v-btn rounded text @click="LikePost(postDetails.post_id, postDetails.liked)">
            <v-icon :color="postDetails.liked ? 'blue' : ''" class="mr-1">  {{postDetails.liked ? 'mdi-thumb-up' : 'mdi-thumb-up-outline'}} </v-icon>
            {{postDetails.likes_count+' like'}}
        </v-btn>
        
        <v-btn rounded text @click="CheckCommentLoad">
            <v-icon :color="postDetails.isCommented ? 'blue' : ''" class="mr-1">mdi-comment</v-icon>
           {{postDetails.comment_count+' Comments'}}
        </v-btn>
    </v-container>

    <v-row class="pl-5 pr-5">
        <v-divider></v-divider>
    </v-row>
     <transition transition="v-expand-transition" >
  <div class="mt-6 mb-0 pb-0" v-if="showComment">
      <div v-if="isloading" class="mt-10">
          <vue-element-loading v-if="isloading" :active="isloading" duration="0.7" color="#EF6C00"  spinner="line-scale" />
      </div>
       
        <div class="pl-5 pr-5">
        <v-row class="mt-0 mb-0" v-if="postDetails.comment_count != 0" >
            <v-col cols="8" class="text-left">
                <a v-if="current_count < postDetails.comment_count && this.last_page != this.current_page " href="" @click.prevent="loadMoreComment()" style="text-decoration:none;font-size:0.8rem">View previous comments</a>
                 <a v-if="this.last_page == this.current_page" href="" @click.prevent="LoadLessComment()" style="text-decoration:none;font-size:0.8rem">Show less comments</a>
            </v-col>
            <v-col cols="4" class="text-right">
                <small>
                    {{current_count}} of {{postDetails.comment_count}}
                </small>
            </v-col>
        </v-row>
        </div>
        <div v-if="!isloading">
        <v-container fluid v-for="(item, index) in CommentList" :key="item.id" :class="$vuetify.breakpoint.mdAndUp ? 'd-inline-flex ml-1 pr-4 pb-2 shrink rounded-lg' : 'd-inline-flex pl-6 pr-4 pb-2 shrink rounded-lg'" >
            <v-avatar v-if="idEditing_id != item.id" color="grey" :size="$vuetify.breakpoint.mdAndUp ? '40' : '30'" :class="isEditing && idEditing_id == item.id ? 'mt-1': ''">
            <v-img class="rounded-circle"  
                :src="item.profile_pic == null || item.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + item.name : item.profile_pic"></v-img> 
            </v-avatar>
            <v-btn class="mt-2" v-if="isEditing && idEditing_id == item.id" @click="isEditing = false , idEditing_id = null" icon small>
                <v-icon>
                    mdi-close
                </v-icon>
            </v-btn>
            <v-alert width="100%"  :color="!isEditing || idEditing_id != item.id ? '#F5F5F5' : ''" class="ma-0 pa-0 ml-2 rounded-xl">
                <p>
                <v-row class="ma-0">
                    <v-col cols="12" class="mb-0 pb-0">
                        <v-row>
                            <v-col cols="8" class="text-left mb-0 pb-0">
                                <div class="font-weight-medium mb-0 pb-0">{{item.name}}</div>
                                 <div class="mt-0 pt-0 mb-2" style="font-size:12px">{{format_date(item.created_at)}}</div>
                                 
                            </v-col>
                            <v-col cols="4" class="text-right mb-0 pb-0">
                                 <div >
                                    <v-menu  v-if="(item.u_id == UserDetails.id || UserDetails.role == 'Teacher') && idEditing_id != item.id" offset-y >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon v-bind="attrs" v-on="on">
                                            <v-icon >mdi-dots-vertical</v-icon>
                                        </v-btn> 
                                    </template>
                                    <v-list pa-0 ma-0>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn @click="UpdateComment = item.content,isEditing = true, idEditing_id = item.id" text>Edit</v-btn></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item ma-0 pa-0>
                                            <v-list-item-title><v-btn text @click="RemoveComment(item.id, index)">Remove</v-btn></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                    </v-menu>
                                </div>
                            </v-col>
                  
                            <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0 pl-0 pr-0">
                                <v-lazy class="ml-0 pl-0" transition>
                                    <v-textarea 
                                
                                    class="mt-0 pt-0 ml-0 pl-0 area-text text-field-transparent"
                                    :style="!$vuetify.breakpoint.mdAndUp  ? 'line-height:1.5;font-size:0.9rem;background-color:transparent' : 'line-height:1.5;font-size:0.95rem'"
                                    v-if="!isEditing || idEditing_id != item.id"

                                    rounded
                                    readonly
                                    hide-details
                                    
                                    flat
                                    rows="1"
                                    auto-grow
                                    type="text"
                                    v-model="item.content">
                                    </v-textarea>
                                </v-lazy>
                                <v-lazy transition>
                                    <v-textarea
                                    v-if="isEditing && idEditing_id == item.id"
                                    v-model="UpdateComment"
                                    append-outer-icon="mdi-send"
                                    prepend-avatar="mdi-emoticon-dead"
                                    filled
                                    rounded
                                        hide-details
                                    dense
                                    rows="1"
                                    auto-grow
                                    clear-icon="mdi-close-circle"
                                    clearable
                                    placeholder="Comment"
                                    :class="!$vuetify.breakpoint.mdAndUp ? 'text-caption' : ''"
                                    type="text"
                                    @click:append-outer="UpdateCommentData(index)"
                                    @click:clear="UpdateComment=''"
                                    ></v-textarea>
                                </v-lazy>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                </p>




           <!--  <v-container fluid class="d-flex flex-row pa-1" ma-0 pa-0>
                <v-container fluid  class="d-flex flex-column" ma-0 pa-0>
                    

                  
                <span v-if="!isEditing || idEditing_id != item.id" class="d-block name mb-0 pb-0 ml-4 font-weight-medium">{{item.name}}</span>
                <small class="ml-4 mt-0 pt-0 mb-2" style="font-size:12px">{{format_date(item.created_at)}}</small>
                 <v-lazy class="ml-0 pl-0" transition>
                    <v-textarea 
                   
                    class="mt-0 pt-0 ml-0 pl-0 area-text text-field-transparent"
                    :style="!$vuetify.breakpoint.mdAndUp  ? 'line-height:1.5;font-size:0.8rem;background-color:transparent' : 'line-height:1.5;font-size:0.9rem'"
                    v-if="!isEditing || idEditing_id != item.id"

                    rounded
                    readonly
                    hide-details
                    
                    flat
                    rows="1"
                    auto-grow
                    type="text"
                    v-model="item.content">
                    </v-textarea>
                </v-lazy>
                <v-lazy transition>
                    <v-textarea
                    v-if="isEditing && idEditing_id == item.id"
                    v-model="UpdateComment"
                    append-outer-icon="mdi-send"
                    prepend-avatar="mdi-emoticon-dead"
                    filled
                    rounded
                        hide-details
                    dense
                    rows="1"
                    auto-grow
                    clear-icon="mdi-close-circle"
                    clearable
                    placeholder="Comment"
                    :class="!$vuetify.breakpoint.mdAndUp ? 'text-caption' : ''"
                    type="text"
                    @click:append-outer="UpdateCommentData(index)"
                    @click:clear="UpdateComment=''"
                    ></v-textarea>
                </v-lazy>
                 
                </v-container>
                 
                <div class="pr-1">
                     <v-menu  v-if="(item.u_id == UserDetails.id || UserDetails.role == 'Teacher') && idEditing_id != item.id" offset-y >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon >mdi-dots-vertical</v-icon>
                        </v-btn> 
                    </template>
                    <v-list pa-0 ma-0>
                        <v-list-item ma-0 pa-0>
                            <v-list-item-title><v-btn @click="UpdateComment = item.content,isEditing = true, idEditing_id = item.id" text>Edit</v-btn></v-list-item-title>
                         </v-list-item>
                        <v-list-item ma-0 pa-0>
                            <v-list-item-title><v-btn text @click="RemoveComment(item.id, index)">Remove</v-btn></v-list-item-title>
                        </v-list-item>
                    </v-list>
                    </v-menu>
                </div>
                
            </v-container> -->
             </v-alert >
        </v-container>
      </div>
     </div>
      </transition>
      <v-row  class="pa-3 pt-0 mt-0 mb-0 pb-0" v-if="showComment">
         <v-col  cols="12" class="ma-0 pa-0" >
            <v-list class="mb-0 pb-0 mt-0 pt-0 ">
                <v-list-item class="mb-0 pb-0" >
                    <v-list-item-avatar class="mt-0 pt-0" v-if="$vuetify.breakpoint.mdAndUp" color="secondary" >
                        <v-img :src="UserDetails.profile_pic == null || UserDetails.profile_pic == ''? 
                        'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                        </v-img>
                    </v-list-item-avatar>
                    <v-list-item-content class="ma-0 pa-0">
                        <v-list-item-title>
                             <v-textarea
                                    v-model="comment"
                                    append-outer-icon="mdi-send"
                                    prepend-avatar="mdi-emoticon-dead"
                                    filled
                                    rows="1"
                                    auto-grow
                                    hid-details
                                    rounded
                                    dense
                                    clear-icon="mdi-close-circle"
                                    clearable
                                    placeholder="Comment"
                                    class="text-caption pl-0 mt-5"
                                    type="text"
                                    @click:append-outer="addComment"
                                    @click:clear="clearComment"
                                    >
                                </v-textarea>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</div>
</template>
<script>
import moment from 'moment/src/moment';
export default {
    props:['UserDetails','postDetails'],
    data(){
        return{
            CommentList:[],
            comment:'',
            data:{},
            showComment:false,
            isEditing:false,
            idEditing_id:null,
            UpdateComment:'',
            current_count: 0,
            current_page: null,
            last_page: null,
            isloading: false,
        
        }
    },
    methods:{
         format_date(value){
            if (value) {
               //return moment(String(value)).startOf('hour').fromNow();
                return moment(String(value)).format("dddd,  h:mm a")
            }
        },
        async CheckCommentLoad(){
            if(!this.showComment){
                this.getComments();
                 this.showComment = !this.showComment
            }
            else{
                this.CommentList = [];
                this.showComment = !this.showComment
            }
             

        },

        async getCount(){ 
            axios.get('/api/post/allcomment/'+this.postDetails.post_id)
            .then((res)=>{
                 this.postDetails.comment_count = res.data.total;
            })
        },
        async getComments(){ 
            this.isloading = true;
            axios.get('/api/post/allcomment/'+this.postDetails.post_id)
            .then((res)=>{
                this.CommentList = res.data.data;
                this.last_page = res.data.last_page;
                this.current_count =  this.CommentList.length;
                this.current_page = 1;
                this.CommentList.sort(function(a, b){return a.id - b.id});
                 this.isloading = false;
                 this.postDetails.comment_count = res.data.total;
            })
        },
        async loadMoreComment(){
            if(this.current_page !=  this.last_page){
                this.current_page++;
                axios.get('/api/post/allcomment/'+this.postDetails.post_id+'?page='+this.current_page)
            .then((res)=>{
                    res.data.data.forEach(item => {
                        this.CommentList.push(item);
                    });
                    this.last_page = res.data.last_page;
                    this.current_count =  this.CommentList.length;
                    console.log(this.current_page);
                    this.CommentList.sort(function(a, b){return a.id - b.id});
                     this.postDetails.comment_count = res.data.total;
            
                })
            }
              
        },
       async LoadLessComment(){
           this.getComments();
        },
       
        async addComment () {
            this.postDetails.isCommented =  true;
            this.data.content = this.comment;
            this.data.course_id = this.$route.params.id;
            this.data.post_id = this.postDetails.post_id;
            axios.post('/api/post/comment/insert',this.data)
            .then(res=>{
                this.clearComment();
                this.CommentList.push({
                    id: res.data.id,
                    content: res.data.content,
                    name: this.UserDetails.firstName+' '+this.UserDetails.lastName,
                    post_id: this.postDetails.post_id,
                    profile_pic: this.UserDetails.profile_pic,
                    created_at: res.data.created_at,
                    u_id: this.UserDetails.id
                })

                this.getCount();
                //this.postDetails.comment_count +=1;
            })
        },
        clearComment () {
            this.comment = ''
        },
        async RemoveComment(id, index){
            axios.delete('/api/post/comment/remove/'+id)
            .then(()=>{
               
               this.CommentList.splice(index, 1);
               this.postDetails.comment_count = this.postDetails.comment_count != 0 ? this.postDetails.comment_count-1 : 0;

               this.current_count = this.current_count != 0 ? this.current_count-1 : 0;
            })
        },
        async UpdateCommentData(Dataindex){
            axios.put('/api/post/comment/update/'+this.idEditing_id, {comment : this.UpdateComment})
            .then(()=>{
                this.postDetails.comment[Dataindex].content = this.UpdateComment;
                this.UpdateComment = '';
                this.idEditing_id = null;
            })
        },
        async LikePost(id, liked){
            if(!liked){
                axios.post('/api/post/like',{post_id : id}).then(()=>{
                    this.postDetails.liked = true;
                    this.postDetails.likes_count += 1;
                })
            }else{
                axios.delete('/api/post/like/delete/'+id).then(()=>{
                    this.postDetails.liked = false;
                    this.postDetails.likes_count =  this.postDetails.likes_count != 0 ? this.postDetails.likes_count-=1 : 0;
                })
            }
        }
    }, 
}
</script>
<style scoped>
     .area-text { 
    border-style: none; 
    border-color: Transparent; 
    overflow: auto;        
  }
  .text-field-transparent  .v-input__slot {
  background: transparent !important;
}
</style>