<template>
    <div>
        <v-row v-if="PostList.length != 0 && UserDetails.role != 'Student'">
            <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0 text-right">
                 <div class="d-inline-flex ">
                    <v-select
                        :items="classNames"
                        item-text="class_name"
                        item-value="class_id"
                        label="Class"
                        v-model="class_id"
                        solo
                        ></v-select> 
                </div>
            </v-col>
        </v-row>
       
     
        <v-card v-show="post.class_id == class_id || class_id == $route.params.id" class="mb-10" v-for="(post) in PostList" :key="post.id">
           <!--Post Poser -->
            <v-row class="pl-5 pr-5 pt-2 mb-3 " >
                <v-col cols="8">
                    <div class="d-flex flex-row user-info">
                        <v-avatar :size="!$vuetify.breakpoint.xs  && !$vuetify.breakpoint.sm ? 45 : 40">
                            <v-img class="rounded-circle"  
                            :src="post.profile_pic == null || post.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + post.name : '/storage/'+post.profile_pic"></v-img> 
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
                <v-row>
                    <v-col cols="12">
                        <div class="pa-5 " >
                            <span v-html="post.content" class="post-content"></span>
                        </div>
                        
                    </v-col>
                </v-row>
            
            </v-container>
          
            <!--Divider -->
            <v-row class="pl-5 pr-5">
                <v-divider></v-divider>
            </v-row>
            
              <!--Comment List -->
            <commentList 
            v-on:AddCount="post.comment_count++"
            v-on:MinusCount="post.comment_count--" 
            :commentCount="post.comment_count"
            :LikesCount="post.likes_count"
            :commentListData="post.comment"
            :postDetails="post"
            :PostId="post.post_id" :UserDetails="UserDetails" ></commentList>
        </v-card>

         <div v-if="isLoadingMore" class="text-center">
                <v-progress-circular
                indeterminate
                color="primary"
                ></v-progress-circular>
                loading
        </div>
    </div>

</template>


<script>
    import moment from 'moment';
    const announcementList = () => import('./PostListType/AnnouncementList');
    const commentList = () => import('./actions/commentList');
     import {mapGetters, mapActions} from "vuex";
    export default {
        props:['PostList','UserDetails','classNames'],
        components:{
            commentList,
            announcementList
        },
        data(){
            return{
            password: 'Password',
            show: false,
            comment: [],
            marker: true,
            iconIndex: 0,
            data:{},
            CommentList:[],
            showLess:true,
            class_id: this.$route.params.id,
            isLoadingMore: false,
            }
        },
        computed: {
            ...mapGetters(['current_page','last_page']),
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
                axios.post('/api/post/insert',this.data)
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
                axios.get('/api/post/allcomment/'+this.$route.params.id)
                .then((res)=>{
                    this.CommentList = res.data;
                })
            },
             getAnnouncementWhileScrolling() {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        if(this.isLoadingMore != true){
                            this.loadMore();
                        }
                       
                    }
                }
            },
              loadMore(){
                this.isLoadingMore = true;
                if(this.current_page != this.last_page){
                    this.$store.dispatch('loadMore',this.$route.params.id).then(res=>{
                        if(res == 200){
                             this.isLoadingMore = false;
                        }else{
                            this.isLoadingMore = false;
                        }
                    })
                }
                else{
                    this.isLoadingMore = false;
                    //setTimeout(() => (this.isLoadingMore = false), 1000);
                }
                
            },
        },
        beforeMount() {
            $(".post-content p").replaceWith(function () {
                return "<span>" + this.innerHTML + "</span>";
            });
             this.test();
            //this.getComments();

           
              
        },
        mounted(){
            this.getAnnouncementWhileScrolling();
        }
        
    }

</script>
<style>
    .post-content img {
        max-height: 23rem !important;
        max-width: 100%;
    }

    .post-content iframe{
        width: 100% !important;
        height: 25rem !important;
    }

   
    

</style>