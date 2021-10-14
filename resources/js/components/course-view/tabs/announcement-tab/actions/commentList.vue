<template>
<div>
    <v-container :class="!$vuetify.breakpoint.xs ? 'mt-3 text-right pl-5 pr-3 mb-2 d-inline-flex' : 'mt-3 text-center pl-5 pr-3 mb-2 d-inline-flex justify-space-between'">
        <v-btn rounded text @click="LikePost(postDetails.post_id, postDetails.liked)">
            <v-icon :color="postDetails.liked ? 'blue' : ''" class="mr-1">  {{postDetails.liked ? 'mdi-thumb-up' : 'mdi-thumb-up-outline'}} </v-icon>
            {{postDetails.likes_count+' like'}}
        </v-btn>
        
        <v-btn rounded text @click="postDetails.comment_count != 0 ?  showComment = !showComment : ''">
            <v-icon :color="postDetails.isCommented ? 'blue' : ''" class="mr-1">mdi-comment</v-icon>
           {{postDetails.comment_count+' Comments'}}
        </v-btn>
    </v-container>

    <v-row class="pl-5 pr-5">
        <v-divider></v-divider>
    </v-row>
     <transition transition="v-expand-transition" >
  <div class="mt-6 mb-0 pb-0" v-if="showComment">
     
        <v-container v-for="(item, index) in postDetails.comment" :key="item.id" :class="$vuetify.breakpoint.mdAndUp ? 'd-inline-flex ml-1 pr-4 pb-2 shrink rounded-lg' : 'd-inline-flex pl-6 pr-4 pb-2 shrink rounded-lg'" >
            <v-avatar v-if="idEditing_id != item.id" color="grey" :size="$vuetify.breakpoint.mdAndUp ? '40' : '30'" :class="isEditing && idEditing_id == item.id ? 'mt-1': ''">
            <v-img class="rounded-circle"  
                :src="item.profile_pic == null || item.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + item.name : item.profile_pic"></v-img> 
            </v-avatar>
            <v-btn class="mt-2" v-if="isEditing && idEditing_id == item.id" @click="isEditing = false , idEditing_id = null" icon small>
                <v-icon>
                    mdi-close
                </v-icon>
            </v-btn>

            <v-container class="d-flex flex-row ml-1 mt-1" ma-0 pa-0>
                <v-container  class="d-flex flex-column ml-1" ma-0 pa-0>
                <span v-if="!isEditing || idEditing_id != item.id" class="d-block name">{{item.name}}</span>
                <span v-if="!isEditing || idEditing_id != item.id" class="caption" style="line-height:1.5">{{item.content}}</span>
                
                <v-textarea
                v-if="isEditing && idEditing_id == item.id"
                v-model="UpdateComment"
                append-outer-icon="mdi-send"
                prepend-avatar="mdi-emoticon-dead"
                filled
                rounded
                dense
                rows="1"
                auto-grow
                clear-icon="mdi-close-circle"
                clearable
                placeholder="Comment"
                class="text-caption"
                type="text"
                @click:append-outer="UpdateCommentData(index)"
                @click:clear="UpdateComment=''"
                ></v-textarea>
                
                </v-container>
                 <v-menu v-if="(item.u_id == UserDetails.id || UserDetails.role == 'Teacher') && idEditing_id != item.id" offset-y >
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
                            <v-list-item-title><v-btn text @click="RemoveComment(item.id)">Remove</v-btn></v-list-item-title>
                        </v-list-item>
                        <!--   <v-list-item ma-0 pa-0>
                            <v-list-item-title><v-btn text>Hide</v-btn></v-list-item-title>
                        </v-list-item> -->
                    </v-list>
                    </v-menu>
            </v-container>
        </v-container>
      
     </div>
      </transition>
      <v-row  class="pa-3 pt-0 mt-0 mb-0 pb-0" >
        <!-- <v-col cols="2" sm="2" lg="1" md="1" class="pr-0 mr-0">
            <v-avatar
            :class="!$vuetify.breakpoint.xs  && !$vuetify.breakpoint.sm ? 'ml-7' : 'ml-6'"
            size="36"
            >
            <v-img 
            :src="UserDetails.profile_pic == null || UserDetails.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic"></v-img>
            </v-avatar>
        </v-col> -->
         <v-col  cols="12" class="ma-0 pa-0 pt-3" >
            <!-- <v-text-field
                v-model="comment"
                append-outer-icon="mdi-send"
                prepend-avatar="mdi-emoticon-dead"
                filled
                rounded
                dense
                clear-icon="mdi-close-circle"
                clearable
                placeholder="Comment"
                class="text-caption pl-0"
                type="text"
                @click:append-outer="addComment"
                @click:clear="clearComment"
                >
            </v-text-field> -->

            <v-list class="mb-0 pb-0 mt-0 pt-0 ">
                <v-list-item class="mb-0 pb-0" >
                    <v-list-item-avatar v-if="$vuetify.breakpoint.mdAndUp" color="secondary" >
                        <v-img :src="UserDetails.profile_pic == null || UserDetails.profile_pic == ''? 
                        'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                        </v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                             <v-textarea
                                    v-model="comment"
                                    append-outer-icon="mdi-send"
                                    prepend-avatar="mdi-emoticon-dead"
                                    filled
                                    rows="1"
                                    auto-grow
                                    rounded
                                    dense
                                    clear-icon="mdi-close-circle"
                                    clearable
                                    placeholder="Comment"
                                    class="text-caption pl-0 mt-7"
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
export default {
    props:['UserDetails','postDetails'],
    data(){
        return{
            totalComment: null,
            isLengthLoaded:false,
            CommentList:[],
            password: 'Password',
            showLess: true,
            comment:'',
            marker: true,
            iconIndex: 0,
            data:{},
            showComment:false,
            commentLength:null,
            isRemoving: false,
            isEditing:false,
            idEditing_id:null,
            UpdateComment:''
        }
    },
    methods:{
        async CheckCommentLoad(){
            if(!this.showComment){
                this.getComments();
            }
             

        },
        async getComments(){ 
            axios.get('/api/post/allcomment/'+this.postDetails.post_id, {Check: this.showLess})
            .then((res)=>{
                this.CommentList = res.data;
                this.postDetails.comment = res.data;
                this.postDetails.comment_count = res.data.length;

            })
        },
       
        async addComment () {
            this.postDetails.isCommented =  true;
            this.data.content = this.comment;
            this.data.course_id = this.$route.params.id;
            this.data.post_id = this.postDetails.post_id;
            axios.post('/api/post/comment/insert',this.data)
            .then(res=>{
                this.showComment = true;
                this.$emit("AddCount");
                this.clearComment();
                this.getComments();
            })
        },
        clearComment () {
            this.comment = ''
        },
        async RemoveComment(id){
            axios.delete('/api/post/comment/remove/'+id)
            .then(()=>{
                this.$emit("MinusCount");
                //this.getCommentCount();
                this.getComments();
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