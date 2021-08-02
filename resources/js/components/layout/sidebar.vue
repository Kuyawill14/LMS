<template>
<div>
    <!--  ######### header ################ -->
       <v-app-bar  :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <router-link to="/">
         <v-toolbar-title style="width: 300px;color: #fff" class="ml-0 pl-4 " >
            <span class="4pointer" >CCSICT-LMS</span>
        </v-toolbar-title>
        </router-link>
       
        <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"
            class="hidden-sm-and-down"></v-text-field>
        <v-spacer></v-spacer>


        <notifications v-on:toggleSeeNotif="Notifdrawer = !Notifdrawer"></notifications>

        <div class="text-center">
            <v-menu bottom min-width="200px"  rounded offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn icon x-large v-on="on">
                        <v-avatar color="brown" size="40">
                            <v-img alt="Proflie"
                                :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                            </v-img>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                            <v-avatar color="brown" size="40">
                                <v-img alt="Proflie"
                                    :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                                </v-img>
                            </v-avatar>
                            <h3>{{ UserDetails.firstName+' '+UserDetails.lastName }}</h3>
                            <p class="text-caption mt-1">
                                {{ UserDetails.email }}
                            </p>
                            <v-divider class="my-3"></v-divider>
                            <v-btn @click="$router.push({name: 'profile_page'})"  rounded color="primary">
                                <v-icon left>mdi-account</v-icon> My Profile
                            </v-btn>
                            <v-divider class="my-3"></v-divider>
                            <v-btn depressed @click="$router.push({name:'archive-course'})" rounded text>
                                <v-icon left>mdi-package-down</v-icon> Archive
                            </v-btn>
                            <v-divider class="my-3"></v-divider>
                            <v-btn @click="logout" depressed rounded text>
                                <v-icon left>mdi-power</v-icon> Logout
                            </v-btn>
                        </div>
                    </v-list-item-content>
                </v-card>
            </v-menu>
        </div>
    </v-app-bar>
     <!--  ######### end header ################ -->

    <!-- :expand-on-hover="$vuetify.breakpoint.lgAndUp" -->
   <!--  ######### sidebar ################ -->
    <v-navigation-drawer  :expand-on-hover="$vuetify.breakpoint.lgAndUp"  v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" v-if="navBarType != 'selectedCourse' ||  getcourseInfo.completed == 1 " app>
        <mainNavbar :role="role" :drawer="drawer"  v-if="navBarType != 'selectedCourse' && (role == 'Student' || role == 'Teacher')" > </mainNavbar>
        <courseNavbar :role="role" v-if="navBarType == 'selectedCourse'&& (role == 'Student' || role == 'Teacher') "> </courseNavbar>
         <adminNavbar :role="role" v-if="role == 'Admin'"> </adminNavbar>
    </v-navigation-drawer>
    <!--  ######### end sidebar ################ -->
    
 <!--  ######### notifSiaebar ################ -->
  <!--   <v-navigation-drawer style="z-index:100" width="550" absolute right temporary v-model="Notifdrawer"  app>
        <seeAllNotification></seeAllNotification>
    </v-navigation-drawer> -->
</div>
</template>


<script>
    /* import mainNavbar from './navigation/main-navbar';
    import courseNavbar from './navigation/course-navbar';
     import adminNavbar from './navigation/admin/admin-navbar';
    import notifications from './notification/notification';
    import seeAllNotification from './notification/SeeAllNotification'; */
    const mainNavbar = () => import("./navigation/main-navbar")
    const courseNavbar = () => import("./navigation/course-navbar")
    const adminNavbar = () => import("./navigation/admin/admin-navbar")
    const notifications = () => import("./notification/notification")
    const seeAllNotification = () => import("./notification/SeeAllNotification")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default ({
        props: ['role','UserDetails'],
        components: {
            mainNavbar,
            courseNavbar,
            adminNavbar,
            notifications,
            seeAllNotification,
        },
        data() {
            return {

                logo: "../../images/logo.png",
                navBarType: '',
                completedSetup: '',
                drawer: null,
                Notifdrawer: null
            }
        },
        watch: {
            $route(to, from) {
                this.navBarType = this.$route.matched[1].name;
            }
        },
        computed: {
            ...mapGetters(["getcourseInfo"]),
        },
        methods: {
            ...mapActions(['fetchScourse','clear_current_user']),
             goHome() {
                this.$router.push({
                    path: ""
                })
            },
            logout() {
                axios.post('/api/logout')
                    .then(() => {
                        localStorage.removeItem(btoa('course-status'));
                        this.clear_current_user();
                        this.$router.push({
                            path: "/login"
                        })
                    })
                    .catch((e) => {
                        console.log(e);
                    })
            },
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
