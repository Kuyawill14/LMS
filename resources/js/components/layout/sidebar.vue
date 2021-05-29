<template>
    <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

  <mainNavbar > </mainNavbar>
    </md-app-drawer>
</template>


<script>
    import mainNavbar from './navigation/main-navbar'

    // import courseNavbar from './navigation/course-navbar'

    export default ({
      
        components: {
            mainNavbar,
            // courseNavbar
        },
        data() {
            return {
                logo: "../../images/logo.png",
                navBarType: ''
            }
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
