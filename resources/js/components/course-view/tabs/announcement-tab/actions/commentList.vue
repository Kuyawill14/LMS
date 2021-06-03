<template>
<div>
    <v-container class="mt-3 text-right pl-3 pr-3 mb-2 d-inline-flex">
        <v-btn text>
        <v-badge content="1">
            <v-icon class="mr-1">mdi-thumb-up-outline</v-icon>
        </v-badge>
            Like
        </v-btn>
        <v-btn text @click="CommentCountAll != 0 ? (getComments(), showComment = !showComment) : ''">
        <v-badge 
        :content="!isLengthLoaded ? CommentCountAll : commentLength"
        :value="!isLengthLoaded ? CommentCountAll : commentLength"
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
            >
            <v-img class="rounded-circle"  
                :src="item.profile_pic == null || item.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + item.name : '../../images/'+item.profile_pic"></v-img> 
            </v-avatar>
            <v-container  class="d-flex flex-row ml-1 mt-1" ma-0 pa-0>
                <v-container  class="d-flex flex-column ml-1 pr-10" ma-0 pa-0>
                <span class="d-block name">{{item.name}}</span>
                <span class="caption" style="line-height:1.5">{{item.content}}</span>
                </v-container>
                 <v-menu offset-y >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        >
                        <v-icon >mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <v-list pa-0 ma-0>
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
            :src="UserDetails.profile_pic == null || UserDetails.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : '../../images/'+UserDetails.profile_pic"></v-img>
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
    props:['PostId', 'UserDetails','commentCount'],
    data(){
        return{
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
            isRemoving: false
        }
    },
    computed:{
        CommentCountAll(){
            return this.commentCount;
        }
    },
    methods:{
        async getComments(){
            if(!this.showComment){
                axios.get('/api/comment/allcomment/'+this.PostId, {Check: this.showLess})
                .then((res)=>{
                    this.CommentList = res.data;
                    this.getCommentCount();
                })
               
            }
             setTimeout(() => {
                    this.showComment = false;
                }, 5000);

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
                this.getCommentCount();
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
                this.getCommentCount();
                this.getComments();
            })
        }

    },
 
 
    
   
}
</script>