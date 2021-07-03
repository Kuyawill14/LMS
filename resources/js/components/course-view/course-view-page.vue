<template>
    <div>

        <v-card v-if="showCard">
            <v-img :src="'../../images/' + getcourseInfo.course_picture " class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="150px">
                <v-card-title class="text-h5" v-text="getcourseInfo.course_code + ' - ' + getcourseInfo.course_name">
                </v-card-title>
                <v-card-subtitle class="white--text">Instructor: {{getcourseInfo.name}}</v-card-subtitle>
            </v-img>

        </v-card>

        <router-view :role="role" :UserDetails="UserDetails"></router-view>
    </div>
</template>
<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    import axios from 'axios';
    export default {
        props: ['role', 'UserDetails'],
        data() {
            return {
                courseInfo: [],
                isloading: true,
                course_id: '',
                fullPage: true,
                class_id: '',
                routeName: '',
                showCard: true,


            }
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
        watch: {
            $route(to, from) {
                this.hideCard();

            }
        },
        methods: {
            hideCard() {
                this.routeName = this.$route.matched[2].name;

                if (this.routeName == 'student-modules' || this.routeName == 'modules-preview'|| this.routeName == 'courseSetup') {
                    this.showCard = false;
                } else {
                      this.showCard = true;
                }

            },
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




        mounted() {
            this.hideCard();
            this.isloading = true;
            this.course_id = this.$route.params.id;
            this.routeName = this.$route.matched[2].name;
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
        position: relative;
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
