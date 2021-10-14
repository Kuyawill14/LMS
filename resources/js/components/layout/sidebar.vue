<template>
<div>
    <!--  ######### header ################ -->
       <v-app-bar elevate-on-scroll :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
        <v-app-bar-nav-icon  @click.stop="navBarType != 'classwork-preview' || getcourseInfo.completed == 1 ? drawer = !drawer : ''"></v-app-bar-nav-icon>
        <router-link to="/">
         <v-toolbar-title class="ml-0 white--text" >
            <span class="pointer" >ISUE ORANGE</span>
        </v-toolbar-title>
        </router-link>
       
       <!--  <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"
            class="hidden-sm-and-down"></v-text-field> -->
        <v-spacer></v-spacer>


        <notifications v-on:toggleSeeNotif="Notifdrawer = !Notifdrawer"></notifications>
        <!-- <invites></invites> -->


        <div class="text-center">
            <v-menu bottom min-width="200px"  rounded offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn icon x-large v-on="on">
                      <!--   <v-badge :content="get_invite_count" :value="get_invite_count" offset-x="12" offset-y="12" color="red darken-4"> -->
                        <v-avatar style="border: 2px solid #FAFAFA" color="brown" size="40">
                            <v-img alt="Proflie"
                                :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                            </v-img>
                        </v-avatar>
                      <!--   </v-badge> -->
                    </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                            <v-avatar color="brown" size="40">
                                <v-img alt="Proflie"
                                    :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                                </v-img>
                            </v-avatar>

                            <h4>{{ UserDetails.firstName+' '+UserDetails.lastName }}</h4>
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
                          <!--   <v-divider class="my-3"></v-divider>
                            <v-badge :content="get_invite_count" :value="get_invite_count" offset-x="15" offset-y="15" color="red darken-4">
                            <v-btn depressed @click="$router.push({name: 'invites'})" rounded text>
                                <v-icon left>mdi-account-multiple-plus</v-icon> Class Invite
                            </v-btn>
                            </v-badge> -->
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
   <div v-if="navBarType != 'classwork-preview' ">
        <v-navigation-drawer  :expand-on-hover="$vuetify.breakpoint.lgAndUp"  v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" v-if="navBarType != 'selectedCourse' ||  getcourseInfo.completed == 1 " app>
            <mainNavbar :role="role" :drawer="drawer"  v-if="navBarType != 'selectedCourse'  && (role == 'Student' || role == 'Teacher')" > </mainNavbar>
            <courseNavbar :role="role" v-if="navBarType == 'selectedCourse'&& (role == 'Student' || role == 'Teacher') "> </courseNavbar>
            <adminNavbar :role="role" v-if="role == 'Admin'"> </adminNavbar>
        </v-navigation-drawer>
    </div>
    <!--  ######### end sidebar ################ -->
    
 <!--  ######### notifSiaebar ################ -->
<!--   <mainBottomNavigation v-if="!$vuetify.breakpoint.lgAndUp && navBarType == 'selectedCourse' && role == 'Student'"></mainBottomNavigation> -->  
</div>
</template>


<script>
    const mainNavbar = () => import(/* webpackChunkName: "layout" */"./navigation/main-navbar")
    const courseNavbar = () => import(/* webpackChunkName: "layout" */"./navigation/course-navbar")
    const mainBottomNavigation = () => import(/* webpackChunkName: "layout" */"./bottom-navigation/course-bottom-navigation")
    const adminNavbar = () => import(/* webpackChunkName: "layout" */"./navigation/admin/admin-navbar")
    const notifications = () => import(/* webpackChunkName: "layout" */"./notification/notification")

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
            mainBottomNavigation
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
            ...mapGetters(["getcourseInfo",'get_invite_count']),
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
                        this.clear_current_user();
                        this.$router.push({
                            path: "/login"
                        })
                    })
                    .catch((e) => {
                        //console.log(e);
                    })
            },
        },
        mounted() {
            this.navBarType = this.$route.matched[1].name;
        },
      

        // watch: {
        //     $route(to, from) {
        //         //console.log(this.$route.matched);
        //         this.navBarType = this.$route.matched[1].name;

        //     }
        // },
        // created() {
        //     this.navBarType = this.$route.matched[1].name;
        // }

    })

</script>
