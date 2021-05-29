<template>

    <div class="container pt-4">
        <vue-element-loading :active="!isLoading">
            <img :src="loadingImg" width="55px" height="55px" />
        </vue-element-loading>
        <div class="row">

            <div class="col-lg-8 col-md-12" style="margin:auto">

                <announcementCreate> </announcementCreate>


            </div>

            <div class="col-lg-8 col-md-12  pt-4" style="margin: auto;">

                <announcementPostList> </announcementPostList>

            </div>



        </div>
    </div>
</template>
<script>
    import announcementCreate from './announcementCreate.vue'
    import announcementPostList from './announcementPostList.vue'
    import VueElementLoading from 'vue-element-loading'

    export default {

        components: {
            announcementCreate,
            VueElementLoading,
            announcementPostList
        },
        data () {
            return {
                content: '',
                isLoading: false,
                loadingImg: '../../images/loading.gif'
            }
        },
        mounted() {

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
