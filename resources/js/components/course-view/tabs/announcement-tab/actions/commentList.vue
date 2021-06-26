<template>
<div>
    <v-container class="mt-3 text-right pl-3 pr-3 mb-2 d-inline-flex">
        <v-btn rounded text>
        <v-badge 
         :content="LikesCount"
        :value="LikesCount"
        >
        <v-icon class="mr-1">mdi-thumb-up-outline</v-icon>
        </v-badge>
            Like
        </v-btn>
        
        <v-btn rounded text @click="commentCount != 0 ? (CheckCommentLoad(), showComment = !showComment) : ''">
        <v-badge 
        :content="commentCount"
        :value="commentCount"
        >
        <v-icon class="mr-1">mdi-comment-outline</v-icon>
        </v-badge>
            Comment
        </v-btn>
    </v-container>

    <v-row class="pl-5 pr-5">
        <v-divider></v-divider>
    </v-row>

  <v-container class="mt-2" v-if="showComment">
      <transition-group transition="v-expand-transition" >
        <v-container v-for="item in CommentList" :key="item.id" class="d-inline-flex pl-2 pr-4 pb-3 shrink" pa-0>
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
        </transition-group>
     </v-container>

      <v-row class="pt-1 pr-7" >
        <v-col cols="2" sm="2" lg="1" md="1">
            <v-avatar
            class="ml-5"
            size="36"
            >
            <v-img 
            :src="UserDetails.profile_pic == null || UserDetails.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic"></v-img>
            </v-avatar>
        </v-col>
            <v-col cols="10" sm="10" lg="11" md="11" class="pr-5" >
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
                class="text-caption"
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
    props:['PostId', 'UserDetails','commentCount','LikesCount'],
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
    computed:{
        CommentCountAll(){
            return this.commentCount;
        }
    },
    methods:{
        async CheckCommentLoad(){
                if(!this.showComment){
                    this.getComments();
                }
             

        },
        async getComments(){ 
            axios.get('/api/comment/allcomment/'+this.PostId, {Check: this.showLess})
            .then((res)=>{
                this.CommentList = res.data;
                this.getCommentCount();
            })
        
        },
        async getCommentCount(){
            axios.get('/api/comment/commentCount/'+this.PostId)
            .then((res)=>{
                this.commentLength = res.data;
                this.isLengthLoaded = true;
            })
        },
        async addComment () {
            this.data.content = this.comment;
            this.data.course_id = this.$route.params.id;
            this.data.post_id = this.PostId;
            axios.post('/api/comment/insert',this.data)
            .then(res=>{
                this.showComment = true;
                this.$emit("AddCount");
                //this.getCommentCount();
                this.clearComment();
                this.getComments();

                //this.CommentList.push({...res.data})
            })
        },
        clearComment () {
            this.comment = ''
        },
        async RemoveComment(id){
            axios.delete('/api/comment/remove/'+id)
            .then(()=>{
                this.$emit("MinusCount");
                //this.getCommentCount();
                this.getComments();
            })
        },
        UpdateCommentData(){

        }
    },  
}
</script>