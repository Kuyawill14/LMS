<template>
    <div class="container-fluid p-top-class">
        <!-- <studentClassPage v-if="role == 'Student'"></studentClassPage> -->
        <teacherClassPage></teacherClassPage>
    </div>
</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";

    /* import studentClassPage from './class-type/student-classPage'
    import teacherClassPage from './class-type/teacher-classPage'
    import VueElementLoading from 'vue-element-loading' */

    // const studentClassPage = () => import("./class-type/student-classPage")
    const teacherClassPage = () => import("./class-type/teacher-classPage")
    import VueElementLoading from 'vue-element-loading'
    /*  const VueElementLoading = () => import("vue-element-loading") */

    export default {
        props: ['role'],
        components: {
            VueElementLoading,
            // studentClassPage,
            teacherClassPage
        },
        data() {
            return {
                isloading: true,
                isStudent: false,
                isTeacher: false,
                modalType: '',
                class_code: null,
                form: {
                    id: '',
                    class_name: '',
                    subject_name: '',
                    class_description: '',
                    class_picture: '',
                }
            }
        },

        methods: {
            ...mapActions(['fetchClassList']),
            openAddmodal() {
                this.form.reset;
                this.modalType = "add";

                console.log(this.modalType);
            },
            openEditmodal(class_id) {
                var selectedClass = this.allClass.find(x => x.id === class_id);
                this.form.id = class_id;
                this.form.class_name = selectedClass.class_name;
                this.form.subject_name = selectedClass.subject_name;
            },
            updateClass() {
                this.isloading = true;
                console.log(this.form);
                this.$store.dispatch('updateClass', this.form);
                this.fetchClassList();
                setTimeout(() => this.isloading = false, 1000);

            },
            createClass() {
                this.isloading = true;
                this.$store.dispatch('createClass', this.form);
                this.fetchClassList();
                setTimeout(() => this.isloading = false, 1000);

            }

        },
     
        computed: mapGetters(['allClass']),

        created() {
            this.isloading = true;
            this.fetchClassList();
            setTimeout(() => this.isloading = false, 1000);
            this.isloading = false;
        },

    }

</script>

<style>
    .pointer {
        cursor: pointer;
    }

    .p-top-class {
        padding-top: 20px;
    }

    [dir] .card,
    [dir] .card-nav .tab-content {
        box-shadow: 0 3px 3px -2px rgb(39 44 51 / 10%), 0 3px 4px 0 rgb(39 44 51 / 4%), 0 1px 8px 0 rgb(39 44 51 / 2%);
    }

    [dir] .card,
    [dir] .card-group,
    [dir] .card-nav .tab-content {
        margin-bottom: 1.5rem;
    }

    [dir] .card,
    [dir] .card-nav .tab-content {
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid #dfe2e6;
        border-radius: .5rem;
    }

    .posts-card-popular {
        /* position: relative; */
        overflow: hidden;
    }

    .card-group-row__card {
        flex: 1 0 0;
    }

    .card,
    .card-nav .tab-content {
        transition: box-shadow .28s cubic-bezier(.4, 0, .2, 1);
        will-change: box-shadow;
    }

    .card,
    .card-nav .tab-content {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
    }

    .posts-card-popular .card-img {
        height: 196px;
        -o-object-fit: cover;
        object-fit: cover;
    }

    [dir=ltr] .card-img,
    [dir=ltr] .card-img-bottom,
    [dir=rtl] .card-img,
    [dir=rtl] .card-img-bottom {
        border-bottom-right-radius: .5rem;
        border-bottom-left-radius: .5rem;
    }

    [dir=ltr] .card-img,
    [dir=ltr] .card-img-top,
    [dir=rtl] .card-img,
    [dir=rtl] .card-img-top {
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
    }

    [dir] img {
        border-style: none;
    }

    .card-img,
    .card-img-bottom,
    .card-img-top {
        flex-shrink: 0;
        width: 100%;
    }

    img {
        vertical-align: middle;
    }

    *,
    :after,
    :before {
        box-sizing: border-box;
    }

    [dir=ltr] .posts-card-popular__content {
        left: 0;
    }

    .posts-card-popular__content {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }

    [dir] .posts-card-popular .card-body {
        border: none;
    }

    [dir] .card-body {
        padding: 1rem;
    }

    .align-items-center {
        align-items: center !important;
    }

    .d-flex {
        display: flex !important;
    }

    .card-body {
        flex: 1 1 auto;
        min-height: 1px;
    }

    [dir] .posts-card-popular .card-body {
        border: none;
    }

    [dir] .card-body+.card-body {
        border-top: 1px solid #dfe2e6;
    }

    [dir=ltr] .posts-card-popular__title,
    [dir=rtl] .posts-card-popular__title {
        left: 0;
        right: 0;
    }

    [dir] .card-body {
        padding: 1rem;
    }

    .posts-card-popular__title {
        position: absolute;
        bottom: 0;
    }

    .card-body {
        flex: 1 1 auto;
        min-height: 1px;
        width: 100%;
    }

    .card-title {
        margin-bottom: 0 !important;
    }

    .card-title {
        color: #fff !important;
    }

    .card-title[href],
    .card-title a {
        color: inherit;
        display: flex;
        text-decoration: none;
    }

    .fullbleed {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #000;
    }

</style>
