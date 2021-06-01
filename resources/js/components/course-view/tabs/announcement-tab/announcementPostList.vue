<template>
    <div>
        <v-card class="mb-10" v-for="(post, i) in PostList" v-bind:key="i">
            
           <!--Post Poser -->
            <v-row  class="pl-5 pr-5 pt-2 mb-3 " >
                <v-col cols="8">
                    <div class="d-flex flex-row user-info">
                        <v-avatar size="45">
                            <v-img class="rounded-circle"  
                            :src="post.profile_pic == null || post.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + post.name : '../../images/'+post.profile_pic" width="40"></v-img> 
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
             <v-row class="pl-5 pr-5">
                  <v-divider></v-divider>
            </v-row>

            <!--Post Actions Like, Comment -->
            <v-container class="mt-3 text-right pl-3 pr-3 mb-1">
                <v-row>
                    <v-col cols="2" >
                         <v-btn text>
                        <v-badge content="1">
                          <v-icon class="mr-1">mdi-thumb-up-outline</v-icon>
                        </v-badge>
                         Like
                        </v-btn>
                    </v-col>
                    <v-col cols="1" >
                        <v-btn text>
                        <v-badge content="1">
                         <v-icon class="mr-1">mdi-comment-outline</v-icon>
                        </v-badge>
                         Comment
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>

            <!--Divider -->
            <v-row class="pl-5 pr-5">
                  <v-divider></v-divider>
            </v-row>

            <!--Comment List -->
            <v-container class="pl-4 pr-4 pb-6 mt-2">
                <v-avatar
                    color="primary"
                    size="35"
                    ></v-avatar>
                <p>Test Comment</p>
            </v-container>

             <!--Post Actions Write Comment -->
            <v-row class="mt-3 pr-7">
                <v-col cols="2" sm="2" lg="1" md="1">
                    <v-avatar
                    class="ml-5"
                    size="37"
                    >
                    <v-img 
                    :src="post.profile_pic == null || post.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + post.name : '../../images/'+post.profile_pic"></v-img>
                    </v-avatar>
                </v-col>
                    <v-col cols="10" sm="10" lg="11" md="11" class="pr-5" >
                    <v-text-field
                        v-model="message[i]"
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
                        @click:append-outer="sendMessage"
                        @click:clear="clearMessage"
                        >
                    </v-text-field>
                </v-col>
            </v-row>
     
        </v-card>
    </div>

</template>


<script>
    import moment from 'moment'


    export default {
        props:['PostList','UserDetails'],
         data: () => ({
            password: 'Password',
            show: false,
            message: [],
            marker: true,
            iconIndex: 0,
           
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
             toggleMarker () {
                this.marker = !this.marker
            },
            sendMessage () {
                this.resetIcon()
                this.clearMessage()
            },
            clearMessage () {
                this.message = ''
            },
        },
        created() {
            $(".post-content p").replaceWith(function () {
                return "<span>" + this.innerHTML + "</span>";
            });
              
        },
        mounted() {
            this.test();
        }
    }

</script>
<style>
    .post-content img {
        max-height: 20rem !important;
    }

    .post-content iframe{
        width: 100% !important;
        height: 20rem !important;
    }

   
    

</style>