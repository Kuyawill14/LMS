<template>
    <v-container>
        <v-row class="mt-3 mb-5" >
            <v-col md="12" lg="8" class="ma-auto">
                <v-card>
                    <announcementCreate v-on:ReloadData="fetchData"> </announcementCreate>
                </v-card>
            </v-col>
        </v-row>

            <v-row class="mt-3">
            <v-col md="12" lg="8" class="ma-auto">
                <announcementPostList :UserDetails="UserDetails" :PostList="getclass_post"> </announcementPostList>
            </v-col>
        </v-row>
    </v-container>
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
        props:['UserDetails'],
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
