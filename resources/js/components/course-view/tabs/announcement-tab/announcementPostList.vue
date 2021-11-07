<template>
    <div>
        <v-row v-if="getclass_post.length != 0 && UserDetails.role != 'Student'">
            <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0 text-right">
                 <div :class="$vuetify.breakpoint.mdAndUp  ? 'd-inline-flex' : ''">
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
       
     
        <v-card v-show="post.class_id == class_id || class_id == $route.params.id" class="mb-10" v-for="(post, index) in getclass_post" :key="post.id">
           <!--Post Poser -->
              <vue-element-loading color="primary" :active="isdeleting && isdeleting_id == post.post_id" spinner="bar-fade-scale" />
            <v-row class="pl-4 pr-5 pt-2 mb-3 " >
                <v-col cols="8">
                    <div class="d-flex flex-row user-info">
                        <v-avatar color="grey" :size="!$vuetify.breakpoint.xs  && !$vuetify.breakpoint.sm ? 45 : 40">
                            <v-img class="rounded-circle"  
                            :src="post.profile_pic == null || post.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + post.name : post.profile_pic"></v-img> 
                        </v-avatar>
                        <div class="d-flex flex-column justify-content-start ml-2 mt-1">
                            <span class="d-block font-weight-bold name">{{post.name}}</span>
                            <small class="date text-black-50">{{format_date(post.created_at)}}</small>
                        </div>
                    </div>
                </v-col>
                 <v-col v-if="post.u_id == UserDetails.id || UserDetails.role == 'Teacher'" cols="4"  class="text-right">
                   <!--  <v-btn icon>
                        <v-icon >mdi-dots-vertical</v-icon>
                    </v-btn> -->

                     <v-menu  offset-y >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on">
                                <v-icon >mdi-dots-vertical</v-icon>
                            </v-btn> 
                        </template>
                        <v-list dense nav >
                            <v-list-item link>
                                <v-list-item-title>Edit</v-list-item-title>
                            </v-list-item>
                            <v-list-item link @click="deletePost(post.post_id, index)">
                                <v-list-item-title>Delete</v-list-item-title>
                            </v-list-item>
                            <!--   <v-list-item ma-0 pa-0>
                                <v-list-item-title><v-btn text>Hide</v-btn></v-list-item-title>
                            </v-list-item> -->
                        </v-list>
                    </v-menu>
                 </v-col>
            </v-row>
            <!--Post Content -->
            <v-container fluid class="pl-4 pr-4 pb-6" style="mx-width:100%">
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
            :postDetails="post" :UserDetails="UserDetails" ></commentList>
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
    import moment from 'moment/src/moment';
    const announcementList = () => import('./PostListType/AnnouncementList');
    const commentList = () => import('./actions/commentList');
     import {mapGetters, mapActions} from "vuex";
import axios from 'axios';
    export default {
        props:['UserDetails','classNames'],
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
            isdeleting: false,
            isdeleting_id: null
            }
        },
        computed: {
            ...mapGetters(['current_page','last_page','getclass_post']),
            icon () {
                return this.icons[this.iconIndex]
            },
            
        },
    
        methods: {
            ...mapActions(['deleteClassPost']),
           /*  test() {
                $('.img-fluid').click(function () {
                })
            }, */
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
            async deletePost(id, index){
                let data = {};
                data.id = id;
                data.index = index;

                this.isdeleting_id = id;
                this.isdeleting = true;
                /* axios.delete('/api/announcement/delete/'+id).then(res=>{
                    if(res.status == 200){
                        //this.$emit('SlicePost', index)
                        
                        this.getclass_post.splice(index, 1);
                    }
                }) */
                this.$store.dispatch('deleteClassPost', data).then(()=>{
                    this.isdeleting = false;
                })
            }
        },
        beforeMount() {
            $(".post-content p").replaceWith(function () {
                return "<span>" + this.innerHTML + "</span>";
            });              
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