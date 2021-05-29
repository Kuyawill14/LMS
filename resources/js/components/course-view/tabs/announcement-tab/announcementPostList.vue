<template>
    <div>
        <div class="d-flex flex-column comment-section mb-3 widget-box border-0 rounded" v-for="post in PostList"
            v-bind:key="post.id">

            <div class="bg-white p-2" style="border-bottom: 1px solid #eee">
                <div class="d-flex flex-row user-info">
                    <img class="rounded-circle"
                        :src="post.profile_pic == null || post.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + post.name : '../../images/'+post.profile_pic" width="40">
                  

                        
                    <div class="d-flex flex-column justify-content-start ml-2"><span
                            class="d-block font-weight-bold name">{{post.name}}</span><span
                            class="date text-black-50">{{format_date(post.created_at)}}</span></div>
                </div>
            </div>
            <div class="mt-2 pl-4 pr-4 pb-1">

                <span v-html="post.content" class="comment-text post-content"></span>

            </div>

            <div class="bg-white" style="border-top: 1px solid #eee">
                <div class="d-flex flex-row fs-12">
                    <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span>
                    </div>
                    <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span>
                    </div>
                    <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span>
                    </div>
                </div>
            </div>
            <div class="bg-white p-2">
                <textarea class="form-control ml-1 shadow-none textarea"></textarea>
            </div>
        </div>


   
    </div>

</template>


<script>
    import moment from 'moment'

    var currentTime = new Date();

    export default {
        props:['PostList'],
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
        height: 250px !important;
    }
    .ql-video {
        width: 100%;
        height: 400px;
    }
    

</style>