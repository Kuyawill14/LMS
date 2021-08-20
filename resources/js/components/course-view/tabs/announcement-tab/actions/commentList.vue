<template>
<div>
    <v-container class="mt-3 text-right pl-5 pr-3 mb-2 d-inline-flex">
        <v-btn rounded text @click="LikePost(postDetails.post_id, postDetails.liked)">
        <v-badge 
        offset-x="40" offset-y="12"
         :content="postDetails.likes_count"
        :value="postDetails.likes_count"
        >
        <v-icon :color="postDetails.liked ? 'blue' : ''" class="mr-1">  {{postDetails.liked ? 'mdi-thumb-up' : 'mdi-thumb-up-outline'}} </v-icon>
        </v-badge>
            {{postDetails.liked ? '' :'like'}}
        </v-btn>
        
        <v-btn rounded text @click="postDetails.comment_count != 0 ?  showComment = !showComment : ''">
        <v-badge 
        offset-x="40" offset-y="12"
        :content="!showComment ? postDetails.comment_count : ''"
        :value="!showComment ? postDetails.comment_count : ''"
        >
        <v-icon class="mr-1">mdi-comment-outline</v-icon>
        </v-badge>
           
        </v-btn>
    </v-container>

    <v-row class="pl-5 pr-5">
        <v-divider></v-divider>
    </v-row>

  <div class="mt-6" v-if="showComment">
      <transition transition="v-expand-transition" >
        <v-container v-for="item in postDetails.comment" :key="item.id" class="d-inline-flex pl-7 pr-4 pb-3 shrink" pa-0>
            <v-avatar
            size="36"
            :class="isEditing && idEditing_id == item.id ? 'mt-1': ''">
            <v-img class="rounded-circle"  
                :src="item.profile_pic == null || item.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + item.name : item.profile_pic"></v-img> 
            </v-avatar>
            <v-container class="d-flex flex-row ml-1 mt-1" ma-0 pa-0>
                <v-container  class="d-flex flex-column ml-1 pr-10" ma-0 pa-0>
                <span v-if="!isEditing || idEditing_id != item.id" class="d-block name">{{item.name}}</span>
                <span v-if="!isEditing || idEditing_id != item.id" class="caption" style="line-height:1.5">{{item.content}}</span>
                
                <v-text-field
                v-if="isEditing && idEditing_id == item.id"
                v-model="UpdateComment"
                append-outer-icon="mdi-send"
                prepend-avatar="mdi-emoticon-dead"
                filled
                rounded
                dense
                clear-icon="mdi-close-circle"
                clearable
                placeholder="Comment"
                class="text-caption"
                type="text"
                @click:append-outer="UpdateCommentData()"
                @click:clear="UpdateComment=''"
                ></v-text-field>
                
                </v-container>
                 <v-menu offset-y >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon >mdi-dots-horizontal</v-icon>
                        </v-btn> 
                    </template>
                    <v-list pa-0 ma-0>
                        <v-list-item ma-0 pa-0>
                            <v-list-item-title><v-btn @click="UpdateComment = item.content,isEditing = true, idEditing_id = item.id" text>Edit</v-btn></v-list-item-title>
                         </v-list-item>
                        <v-list-item ma-0 pa-0>
                            <v-list-item-title><v-btn text @click="RemoveComment(item.id)">Remove</v-btn></v-list-item-title>
                        </v-list-item>
                          <v-list-item ma-0 pa-0>
                            <v-list-item-title><v-btn text>Hide</v-btn></v-list-item-title>
                        </v-list-item>
                    </v-list>
                    </v-menu>
            </v-container>
        </v-container>
        </transition>
     </div>

      <v-row nu class="pt-1 pr-7" >
        <v-col cols="2" sm="2" lg="1" md="1" class="pr-0 mr-0">
            <v-avatar
            :class="!$vuetify.breakpoint.xs  && !$vuetify.breakpoint.sm ? 'ml-7' : 'ml-6'"
            size="36"
            >
            <v-img 
            :src="UserDetails.profile_pic == null || UserDetails.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic"></v-img>
            </v-avatar>
        </v-col>
        <v-col class="pl-0 ml-0" cols="10" sm="10" lg="11" md="11" >
            <v-text-field
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
            </v-text-field>
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
            axios.get('/api/post/allcomment/'+this.PostId, {Check: this.showLess})
            .then((res)=>{
                this.CommentList = res.data;
                this.getCommentCount();
            })
        
        },
        async getCommentCount(){
            axios.get('/api/post/commentCount/'+this.PostId)
            .then((res)=>{
                this.commentLength = res.data;
                this.isLengthLoaded = true;
            })
        },
        async addComment () {
            this.data.content = this.comment;
            this.data.course_id = this.$route.params.id;
            this.data.post_id = this.PostId;
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
        UpdateCommentData(){

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