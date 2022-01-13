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
  <div class="mt-6 mb-0 pb-0" v-if="showComment && postDetails.comment_count != 0">


      <div v-if="isloading"  class="mt-10">
         <!--  <vue-element-loading v-if="isloading" :active="isloading" duration="0.7" color="#EF6C00"  spinner="line-scale" /> -->
          
           <v-list>
               <v-list-item v-for="n in 2" :key="n">
                   <v-list-item-avatar>
                        <v-skeleton-loader  type="avatar"></v-skeleton-loader>
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-skeleton-loader  type="list-item-three-line"></v-skeleton-loader>
                   </v-list-item-content>
               </v-list-item>
           </v-list>
      </div>
       
        <div class="pl-5 pr-5">
        <v-row class="mt-0 mb-0" v-if="postDetails.comment_count != 0" >
            <v-col cols="8" class="text-left">
                <a v-if="current_count < postDetails.comment_count && this.last_page != this.current_page " href="" @click.prevent="loadMoreComment()" style="text-decoration:none;font-size:0.8rem">View previous comments</a>
                 <a v-if="this.last_page == this.current_page && postDetails.comment_count > 5" href="" @click.prevent="LoadLessComment()" style="text-decoration:none;font-size:0.8rem">Show less comments</a>
            </v-col>
            <v-col cols="4" class="text-right">
                <small>
                    {{current_count}} of {{postDetails.comment_count}}
                </small>
            </v-col>
        </v-row>
        </div>
        <div v-show="!isloading">
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
          

           <div class="ma-0 pa-0"  @mouseover="singleCheck(postDetails.id+'commentContainer'+index, index)" :ref="postDetails.id+'commentContainer'+index"  style="width:100%">

         
            <v-alert  :color="!isEditing || idEditing_id != item.id ? '#F5F5F5' : ''" class="ma-0 pa-0 ml-2 rounded-xl">
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
                                        <v-btn small icon v-bind="attrs" v-on="on">
                                            <v-icon small>mdi-dots-vertical</v-icon>
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
                                    <div 
                                     :style="!$vuetify.breakpoint.mdAndUp  ? readMore[index].isLongText ? 'line-height:1.5;font-size:0.9rem;background-color:transparent' : 'line-height:1.5;font-size:0.9rem;background-color:transparent;max-height:120px;overflow:hidden' : 
                                    readMore[index].isLongText ? 'line-height:1.5;font-size:0.95rem;' : 'line-height:1.5;font-size:0.95rem;max-height:160px;overflow:hidden'"
                                    v-if="((!isEditing || idEditing_id != item.id) && checkComment(item.content) == true)"  class="pl-5">
                                         <span  v-html="item.content"></span>  
                                    </div>
                                   
                                    <v-textarea    
                                    
                                    class="mt-0 pt-0 ml-0 pl-0 area-text text-field-transparent"
                                    :style="!$vuetify.breakpoint.mdAndUp  ? readMore[index].isLongText ? 'line-height:1.5;font-size:0.9rem;background-color:transparent' : 'line-height:1.5;font-size:0.9rem;background-color:transparent;max-height:120px' : 
                                    readMore[index].isLongText ? 'line-height:1.5;font-size:0.95rem;' : 'line-height:1.5;font-size:0.95rem;max-height:160px;overflow:hidden'"
                                    v-if="((!isEditing || idEditing_id != item.id) && checkComment(item.content) == false)"

                                    rounded
                                    readonly
                                    hide-details
                                    
                                    flat
                                    rows="1"
                                    auto-grow
                                    type="text"
                                    v-model="item.content">
                                    </v-textarea>
                                    <div v-if="readMore[index].IsreadMore" class="text-right">
                                         <a href="" class="mr-5" v-if="!readMore[index].isLongText" style="text-decoration:none;font-size:12px" @click.prevent="readMore[index].isLongText = true">Read more..</a>
                                         <a href="" class="mr-5" v-if="readMore[index].isLongText" style="text-decoration:none;font-size:12px" @click.prevent="readMore[index].isLongText = false">Read less..</a>
                                    </div>
                                       
                                </v-lazy>
                                <v-lazy transition>
                                    <v-textarea
                                    v-if="((isEditing && idEditing_id == item.id) && checkComment(item.content) == false)"
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

                                    <div   v-if="((isEditing && idEditing_id == item.id) && checkComment(item.content) == true)" class="d-flex">
                                        <div style="width:100%"  class="pl-5 pr-3">
                                             <editor :options="options" class="CommentEditor"   placeholder="Comment" v-model="UpdateComment"  theme="bubble" ></editor>
                                        </div>
                                       
                                         <v-btn class="ml-2" @click="UpdateCommentData(index)" icon><v-icon>mdi-send</v-icon></v-btn>
                                    </div>
                                </v-lazy>

                            
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                </p>
             </v-alert >
     </div>
        </v-container>
      </div>
     </div>
     
      </transition>
      <v-row  class="pa-3 pt-0 mt-0 mb-0 pb-0 mt-6" >
         <v-col  cols="12" class="ma-0 pa-0" >
            <v-row class="pl-5 pr-5 pb-2">
                <v-divider></v-divider>
            </v-row>
            <v-list class="mb-0 pb-0 mt-0 pt-0 ">
                <v-list-item class="mb-0 pb-0" >
                    <v-list-item-avatar class="mt-0 pt-0" v-if="$vuetify.breakpoint.mdAndUp" color="secondary" >
                        <v-img :src="UserDetails.profile_pic == null || UserDetails.profile_pic == ''? 
                        'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                        </v-img>
                    </v-list-item-avatar>
                    <v-list-item-content class="ma-0 pa-0 mb-4 mt-4">
                        <v-list-item-title>
                            <!--  <v-textarea
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
                                </v-textarea> -->

                                <editor :options="options" class="CommentEditor"   placeholder="Comment" v-model="comment"  theme="bubble" ></editor>
                        </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                            <v-btn @click="addComment" icon><v-icon>mdi-send</v-icon></v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
  
</div>
</template>
<script>
import moment from 'moment-timezone';
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
            isLoaded: false,
            readMore: [],
            readMore_id: null,
            AreaHeight:[],
             options:{
                modules: {
                    'toolbar': [
                        ['bold', 'italic', 'underline', 'strike'],
                
                        [{ 'list': 'bullet' }],
                        ['image'],
                    ],
                }
            },
        
        }
    },
    methods:{
         format_date(value){
            if (value) {
                return moment(String(value)).tz('Asia/Manila').format("ddd, MMMM DD, YYYY h:mm a")
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
                 this.getComments();
            })
        },
        async getComments(){ 
            
            if(this.postDetails.comment_count != 0){
                this.isloading = true;
                axios.get('/api/post/allcomment/'+this.postDetails.post_id)
                .then((res)=>{
                    this.CommentList = res.data.data;
                    this.last_page = res.data.last_page;
                    this.current_count =  this.CommentList.length;
                    this.current_page = 1;
                    this.CommentList.sort(function(a, b){return a.id - b.id});
                    this.CommentList.forEach(item => {
                        this.readMore.push({id: item.id , isLongText: false, IsreadMore: false})
                    });
                
                    this.isloading = false;
                    this.postDetails.comment_count = res.data.total;
                    
                    setTimeout(() => (this.checkContainerHeight()), 1000);
            })
        }
           
        },
        singleCheck(ref, mainindex){
            let element = this.$refs[ref][0].clientHeight; 
            if(this.$vuetify.breakpoint.mdAndUp){
                 if(element > 215){
                        this.readMore[mainindex].IsreadMore = true;
                }
                else{
                    this.readMore[mainindex].IsreadMore = false;
                }
            }
            else{
                 if(element > 160){
                        this.readMore[mainindex].IsreadMore = true;
                }
                else{
                    this.readMore[mainindex].IsreadMore = false;
                }
            }
             
        },
        checkContainerHeight(){
            let current_index = 0;
            this.readMore.forEach(item => {
                 let testData = this.postDetails.id+'commentContainer'+current_index;
                let element = this.$refs[testData][0].clientHeight;

                 if(this.$vuetify.breakpoint.mdAndUp){
                        if(element > 215){
                            item.IsreadMore = true;
                    }
                    else{
                        item.IsreadMore = false;
                    }
                 }
                 else{
                      if(element > 160){
                            item.IsreadMore = true;
                    }
                    else{
                        item.IsreadMore = false;
                    }
                 }
                
                current_index++;
            });
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
                    //console.log(this.current_page);
                    this.CommentList.sort(function(a, b){return a.id - b.id});
                     this.CommentList.forEach(item => {
                        this.readMore.push({id: item.id , isLongText: false, IsreadMore: false})
                    });
                    this.postDetails.comment_count = res.data.total;
                    setTimeout(() => (this.checkContainerHeight()), 1000);
            
                })
            }
              
        },
        checkComment(comment){

            let str = comment;
            if(str.includes('<p>')){
                    return true
            }else{
                return false;
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
               /*  this.CommentList.push({
                    id: res.data.id,
                    content: res.data.content,
                    name: this.UserDetails.firstName+' '+this.UserDetails.lastName,
                    post_id: this.postDetails.post_id,
                    profile_pic: this.UserDetails.profile_pic,
                    created_at: res.data.created_at,
                    u_id: this.UserDetails.id
                }) */
                this.getCount();
                
                //this.readMore.push({id: res.data.id , isLongText: false, IsreadMore: false})
                
                this.showComment = true;
                //setTimeout(() => (this.checkContainerHeight()), 1000);
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
                this.CommentList[Dataindex].content = this.UpdateComment;
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
<style>
    .commentContent  img{
        max-width: 100% !important;
        max-height: 20rem !important;
    }


    .post-content  img{
            max-height: 15rem !important;
        }
    .CommentEditor >  iframe{
        width: 100% !important;
    height: 20rem !important;
    }
    .CommentEditor >  .ql-editor img{

        max-height: 25rem !important;
    }
    .CommentEditor >  .ql-container{
        max-height: 70rem;
    }
     div.ql-tooltip{
        left: 0px !important;
        top: -8px !important;
    }
    div>.ql-tooltip-arrow{
        display: none !important;
    }
</style>