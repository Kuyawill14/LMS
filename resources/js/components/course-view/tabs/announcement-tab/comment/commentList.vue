<template>
<div>
    <v-btn text @click="showLess = !showLess, getComments()">
      Show all Comments 
    </v-btn>
    <div v-if="CommentList.length != 0">
    <v-container v-for="(item,i) in CommentList" :key="i" class="d-inline-flex pl-2 pr-4 " > 
        <v-avatar
        color="primary"
        size="36"
        >
        <v-img class="rounded-circle"  
            :src="item.profile_pic == null || item.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + item.name : '../../images/'+item.profile_pic"></v-img> 
        </v-avatar>
        <v-container  class="d-flex flex-row ml-1" ma-0 pa-0>
            <v-container  class="d-flex flex-column ml-1 pr-10" ma-0 pa-0>
            <span class="d-block name">{{item.name}}</span>
            <span class="caption" style="line-height:1.5">{{item.content}}</span>
            </v-container>
            <v-btn icon >
                <v-icon >mdi-dots-horizontal</v-icon>
            </v-btn>
        </v-container>
    </v-container>
    </div>

     <v-row class="mt-3 pr-7">
        <v-col cols="2" sm="2" lg="1" md="1">
            <v-avatar
            class="ml-2"
            size="36"
            >
            <v-img 
            :src="UserDetails.profile_pic == null || UserDetails.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName + ' '+UserDetails.lastName ) : '../../images/'+UserDetails.profile_pic"></v-img>
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
    props:['PostId', 'UserDetails'],
    data(){
        return{
            CommentList:[],
            password: 'Password',
            showLess: true,
            comment:'',
            marker: true,
            iconIndex: 0,
            data:{},
            addCommentId:''
        }
    },
    methods:{
        async getComments(){
            axios.get('/api/comment/allcomment/'+this.PostId, {Check: this.showLess})
            .then((res)=>{
                this.CommentList = res.data;
            })
            
        },
        async addComment () {
            this.data.content = this.comment;
            this.data.course_id = this.$route.params.id;
            this.data.post_id = this.PostId;
            
            axios.post('/api/comment/insert',this.data)
            .then(res=>{
                this.clearComment();
                this.getComments();
            })
        },
        clearComment () {
            this.comment = ''
        },

    },
    created(){
        this.getComments();
    }
    
   
}
</script>