<template>
    <div>
        <v-card class="mb-10" v-for="(post, i) in PostList" v-bind:key="i">
           <!--Post Poser -->
            <v-row  class="pl-5 pr-5 pt-2 mb-3 " >
                <v-col cols="8">
                    <div class="d-flex flex-row user-info">
                        <v-avatar size="45">
                            <v-img class="rounded-circle"  
                            :src="post.profile_pic == null || post.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + post.name : '../../images/'+post.profile_pic"></v-img> 
                        </v-avatar>
                        <div class="d-flex flex-column justify-content-start ml-2 mt-1">
                            <span class="d-block font-weight-bold name">{{post.name}}</span>
                            <span class="date text-black-50">{{format_date(post.created_at)}}</span>
                        </div>
                    </div>
                </v-col>
                 <v-col cols="4" class="text-right">
                    <v-btn icon="">
                        <v-icon >mdi-dots-vertical</v-icon>
                    </v-btn>
                 </v-col>
            </v-row>
            <!--Post Content -->
            <v-container class="pl-4 pr-4 pb-6">
                <span v-html="post.content" class="post-content"></span>
            </v-container>
             <!--Divider -->
           <!--   <v-row class="pl-5 pr-5">
                  <v-divider></v-divider>
            </v-row> -->
            <!--Post Actions Like, Comment -->
           <!--  <v-container class="mt-3 text-right pl-3 pr-3 mb-2 d-inline-flex">
                <v-btn text>
                <v-badge content="1">
                    <v-icon class="mr-1">mdi-thumb-up-outline</v-icon>
                </v-badge>
                    Like
                </v-btn>
            
                <v-btn text>
                <v-badge content="1">
                    <v-icon class="mr-1">mdi-comment-outline</v-icon>
                </v-badge>
                    Comment
                </v-btn>
            </v-container> -->



            
            <!--Divider -->
            <v-row class="pl-5 pr-5">
                <v-divider></v-divider>
            </v-row>

            <commentList :PostId="post.post_id" :UserDetails="UserDetails" ></commentList>

            <!--Comment List -->
            <!-- <v-container class="mt-2"> -->
                 <!-- <v-btn text @click="showLess = !showLess">
                    Show all Comments 
                </v-btn>
                <div v-for="(item,x) in CommentList" :key="x">
                <v-container v-if="item.post_id == post.post_id"   class="d-inline-flex pl-2 pr-4 " >
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
                            <v-btn icon class="align-end">
                                <v-icon class="mr-1">mdi-dots-horizontal</v-icon>
                            </v-btn>
                        </v-container>
                </v-container>
                </div> -->
           <!--  </v-container> -->

             <!--Post Actions Write Comment -->
           <!--  <v-row class="pt-1 pr-7" >
                <v-col cols="2" sm="2" lg="1" md="1">
                    <v-avatar
                    class="ml-5"
                    size="36"
                    >
                    <v-img 
                    :src="post.profile_pic == null || post.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + post.name : '../../images/'+post.profile_pic"></v-img>
                    </v-avatar>
                </v-col>
                    <v-col cols="10" sm="10" lg="11" md="11" class="pr-5" >
                    <v-text-field
                        v-model="comment[i]"
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
                        @click:append-outer="addComment(i,post.post_id)"
                        @click:clear="clearComment(i)"
                        >
                    </v-text-field>
                </v-col>
            </v-row> -->
     
        </v-card>
    </div>

</template>


<script>
    import moment from 'moment';
    import commentList from './actions/commentList'
    export default {
        
        props:['PostList','UserDetails'],
        components:{
            commentList
        },
         data: () => ({
            password: 'Password',
            show: false,
            comment: [],
            marker: true,
            iconIndex: 0,
            data:{},
            CommentList:[],
            showLess:true
        }),
        computed: {
            icon () {
                return this.icons[this.iconIndex]
            },
        },
        methods: {
            test() {
                $('.img-fluid').click(function () {
                    console.log($('.img-fluid').attr('src'))
                })
            },
            format_date(value){
                if (value) {
                return moment(String(value)).format("ddd, MMMM DD, YYYY h:mm a")
                }
            },
            addComment (i, post_id) {
                this.data.content = this.comment[i];
                this.data.course_id = this.$route.params.id;
                this.data.post_id = post_id;
                
                axios.post('/api/comment/insert',this.data)
                .then(res=>{
                    res.data;
                    this.getComments();
                    this.clearComment(i);
                })
            },
            clearComment (i) {
                this.comment[i] = ''
            },

            getComments(){
                axios.get('/api/comment/allcomment/'+this.$route.params.id)
                .then((res)=>{
                    console.log(res.data.length);
                    this.CommentList = res.data;
                })
            }


        },
        created() {
            $(".post-content p").replaceWith(function () {
                return "<span>" + this.innerHTML + "</span>";
            });
              
        },
        mounted() {
            this.test();
            this.getComments();
        }
    }

</script>
<style>
    .post-content img {
        max-height: 23rem !important;
    }

    .post-content iframe{
        width: 100% !important;
        height: 25rem !important;
    }

   
    

</style>