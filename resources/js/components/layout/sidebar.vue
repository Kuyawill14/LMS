<template>
    <div>
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <mainNavbar :role="role" v-if="navBarType != 'selectedCourse'"> </mainNavbar>

        <courseNavbar :role="role" v-if="navBarType == 'selectedCourse'"> </courseNavbar>
    </div>
</template>


<script>
    import mainNavbar from './navigation/main-navbar'


    import courseNavbar from './navigation/course-navbar'

    export default ({
        props: ['role'],
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
                this.navBarType = this.$route.matched[1].name;

            }
        },
        created() {
            this.navBarType = this.$route.matched[1].name;
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
