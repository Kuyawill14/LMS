<template>

    <div class="container pt-4">
     <!--    <vue-element-loading :active="!isLoading">
            <img :src="loadingImg" width="55px" height="55px" />
        </vue-element-loading> -->
        <div class="row">

            <div class="col-lg-8 col-md-12" style="margin:auto">
                <announcementCreate v-on:ReloadData="fetchData"> </announcementCreate>
            </div>

            <div class="col-lg-8 col-md-12  pt-4" style="margin: auto;">
                <announcementPostList :PostList="getclass_post"> </announcementPostList>
            </div>



        </div>W
    </div>
</template>
<script>
    import announcementCreate from './announcementCreate.vue'
    import announcementPostList from './announcementPostList.vue'
    //import VueElementLoading from 'vue-element-loading'
    import moment from 'moment'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {

        components: {
            announcementCreate,
            //VueElementLoading,
            announcementPostList
        },
        computed: mapGetters(["getclass_post"]),
        data () {
            return {
                content: '',
                isLoading: false,
                loadingImg: '../../images/loading.gif'
            }
        },
        methods:{
            ...mapActions(['fetchClassPost']),
             connect(){
                let vm = this;
                 this.fetchClassPost(this.$route.params.id);
               /*   window.Echo.private("post."+ this.$route.params.id)
                 .listen('NewPost', e =>{
                     vm.fetchClassPost(this.$route.params.id);
                 }) */
            },
            fetchData(){
                this.fetchClassPost(this.$route.params.id);
            }
        },
        mounted() {
            this.connect();
            setTimeout(() => {
                this.isLoading = true
            }, 1000);
        }

    }

</script>
<style>
    .quill-editor {
        position: relative;
        background: #d0cece;

    }

    .ql-container.ql-snow {
        border: none !important;
    }

    .ql-toolbar.ql-snow {
        background: #f2f2f2;
        border: none;

    }



    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
        border-radius: 5px;
    }

    .comment-section {
        border: 1px solid #EAEAEA;
    }

    .date {
        font-size: 11px
    }

    .comment-text {
        font-size: 12px
    }

    .fs-12 {
        font-size: 12px
    }

    .shadow-none {
        box-shadow: none
    }

    .name {
        color: #007bff
    }

    .cursor:hover {
        color: blue
    }

    .cursor {
        cursor: pointer
    }

    .textarea {
        resize: none;
        height: 40px !important;
    }

</style>
