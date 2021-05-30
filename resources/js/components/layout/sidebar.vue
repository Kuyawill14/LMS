<template>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
        <mainNavbar :role="role" :drawer="drawer" v-if="navBarType != 'selectedCourse'"> </mainNavbar>

        <courseNavbar :role="role" v-if="navBarType == 'selectedCourse'"> </courseNavbar>
    </v-navigation-drawer>
</template>


<script>
    import mainNavbar from './navigation/main-navbar'


    import courseNavbar from './navigation/course-navbar'

    export default ({
        props: ['role', 'drawer'],
        components: {
            mainNavbar,
            courseNavbar
        },
        data() {
            return {
                logo: "../../images/logo.png",
                navBarType: ''
            }
        },
        watch: {
            $route(to, from) {
                console.log(this.$route.matched);
                //  this.navBarType = this.$route.matched[1].name;

            }
        },
        created() {
            //this.navBarType = this.$route.matched[1].name;
        }

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
