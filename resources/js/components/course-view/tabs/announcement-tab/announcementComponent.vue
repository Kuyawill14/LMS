<template>
    <div>
        <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
            <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                :to="{name: item.link}"
                :disabled="item.disabled"
            >
                {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>

        <v-row class="mt-3 mb-5" >
            <v-col md="12" lg="8" class="ma-auto">
                <v-card>
                    <announcementCreate :classNames="classNames" :UserDetails='UserDetails' v-on:ReloadData="connect"> </announcementCreate>
                </v-card>
            </v-col>
        </v-row>

            <v-row class="mt-3">
            <v-col md="12" lg="8" class="ma-auto">
                <announcementPostList :classNames="classNames" :UserDetails="UserDetails" :PostList="getclass_post"> </announcementPostList>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    const announcementCreate = () => import('./announcementCreate')
    const announcementPostList = () => import('./announcementPostList')
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
                loadingImg: '../../images/loading.gif',
                classNames: [],
                 items: [
                    {
                    text: 'Course',
                    disabled: false,
                    link: 'courses',
                    },
                    {
                    text: 'Announcement',
                    disabled: true,
                    link: 'breadcrumbs_link_2',
                    },
                ],
            }
        },
        methods:{
            ...mapActions(['fetchClassPost']),
             connect(){
                let vm = this;
                 this.fetchClassPost(this.$route.params.id)
                 .then(res=>{
                     if(res == 200){
                         this.isLoading = false;
                     }
                 })
                 window.Echo.private("post."+ this.$route.params.id)
                 .listen('NewPost', e =>{
                     vm.fetchClassPost(this.$route.params.id);
                 })
            },
            SetClassname(data){
                this.ClassName = data;
            },
            fetchClassnames() {
                if(this.UserDetails.role == 'Teacher'){
                    axios.get('/api/class/allnames/' + this.$route.params.id+'/'+0).then(res => {
                        this.classNames = res.data;
                        this.classNames.push({ class_id: this.$route.params.id, class_name: 'All Class', id: this.$route.params.id});
                    })
                }
            },
          
        },
        mounted() {
            this.connect();
            this.fetchClassnames();
           
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
