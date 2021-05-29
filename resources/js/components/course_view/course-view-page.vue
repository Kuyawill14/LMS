<template>
    <div>
        <div class="container-fluid" v-if="$route.matched[1].name != 'selectedCourse'">
           <!--  <vue-element-loading :active="isloading" spinner="bar-fade-scale" /> -->

            <div class="row top-container class-banner"
                v-bind:style="{ 'background-image': 'url('+'../../images/' + getcourseInfo.course_picture + ')' }">
                <div class="fullbleed-scoped-only" style="opacity: 0.7 !important"></div>
                <div class="col-12">
                    <div class="card_header mt-2">
                        <button @click="GoBackToMycourse" class="btn btn_classback" type="button"><i
                                class="fa fa-arrow-left" style="padding-right:10px "></i>Back</button>
                    </div>
                    <div class="card transparent" v-if="!isloading">

                        <div class="card-body">
                            <h3 class="card-text card-top " style="margin-top: 0">
                                {{getcourseInfo.course_code + ' - ' + getcourseInfo.course_name}}
                            </h3>
                            <h5 class="card-text card-top ">{Teacher Name}</h5>

                        </div>
                    </div>
                </div>
            </div>

        </div>

      

        <router-view :role="role"></router-view>

      

    </div>
</template>
<script>
/*     import VueElementLoading from 'vue-element-loading' */


    import {
        mapGetters,
        mapActions
    } from "vuex";
    import axios from 'axios';
    export default {
        props: ['role'],
        data() {
            return {
                courseInfo: [],
                isloading: true,
                course_id: '',
                fullPage: true,
                class_id: ''

            }
        },
        components: {
            VueElementLoading

        },
        computed: {
            ...mapGetters(["getcourseInfo"]),
            saveClassId: function (id) {

                if (this.role == "Student") {
                    axios.get("/api/class/selectedClass/" + id).then(res => {

                        return res.data;
                    });

                }
            }
        },
        methods: {
            ...mapActions(['fetchScourse']),
            disconnect() {
                window.Echo.leave("post." + this.$route.params.id)
            },
            GoBackToMycourse() {
                if (this.role == 'Student') {
                    this.$router.push({
                        path: "/c"
                    });
                } else if (this.role == 'Teacher') {
                    this.$router.push({
                        path: "/courses"
                    });
                }

                this.disconnect();
            },

        },

        created() {
            this.isloading = true;
            this.course_id = this.$route.params.id;

            this.$store.dispatch('fetchScourse', this.course_id);
            setInterval(() => this.isloading = false, 1000);

            console.log(this.$route.params.id);
        },


    }

</script>

<style>
    .course-banner {
        /* background-image: url(https://gstatic.com/courseroom/themes/Honors.jpg); */
        color: #fff;

        /* background-color: #1E1E1C; */
        background-repeat: no-repeat;
        background-size: cover;

    }



    .top-container {
        padding-left: 0 !important;
        padding-right: 0 !important;
        height: 100%;
    }

    .ttr-wrapper {
        min-height: 900px;
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 59px !important;
    }

    .transparent {
        background: transparent;
        border: none;
    }

    .card-top {
        color: #fff !important;
    }

    .btn_courseback {
        background-color: transparent !important;

        font-weight: bolder;
        min-width: 6rem;
        max-width: 50vw;
        border-radius: 2.7rem / 100%;

        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072);
        transition: 0.3s;
    }

    .btn_courseback:hover {
        background-color: #f7b205 !important;
    }

    .fullbleed-scoped-only {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #000;
    }

</style>
