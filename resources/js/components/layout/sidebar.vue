<template>
    <v-navigation-drawer v-model="newDrawer" :clipped="$vuetify.breakpoint.lgAndUp" v-if="navBarType != 'selectedCourse' ||  getcourseInfo.completed ==1" app>

        <mainNavbar :role="role" :drawer="newDrawer" v-if="navBarType != 'selectedCourse'"> </mainNavbar>

        <courseNavbar :role="role" v-if="navBarType == 'selectedCourse' "> </courseNavbar>
    </v-navigation-drawer>
</template>


<script>
    import mainNavbar from './navigation/main-navbar'


    import courseNavbar from './navigation/course-navbar'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default ({
        props: ['role', 'drawer'],
        components: {
            mainNavbar,
            courseNavbar
        },
        data() {
            return {

                logo: "../../images/logo.png",
                navBarType: '',
                completedSetup: '',
            }
        },
        watch: {
            $route(to, from) {
                console.log(this.$route.matched);
                this.navBarType = this.$route.matched[1].name;

            }
        },
        computed: {
            ...mapGetters(["getcourseInfo"]),
            newDrawer: {
                get() {
                    return this.drawer;
                },
                set(newName) {
                    return newName;
                }
            }
        },
        methods: {
            ...mapActions(['fetchScourse']),
        },
        mounted() {
            this.navBarType = this.$route.matched[1].name;



        },
      

        // watch: {
        //     $route(to, from) {
        //         console.log(this.$route.matched);
        //         this.navBarType = this.$route.matched[1].name;

        //     }
        // },
        // created() {
        //     this.navBarType = this.$route.matched[1].name;
        // }

    })

</script>
