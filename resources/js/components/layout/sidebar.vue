<template>
    <div>
        <!--  ######### header ################ -->
        <v-app-bar v-if="navBarType != 'classwork-preview' && navBarType != 'classwork_overview'" elevate-on-scroll
            :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
            <v-app-bar-nav-icon
                @click.stop="navBarType != 'classwork-preview' || getcourseInfo.completed == 1 ? drawer = !drawer : '' ">
            </v-app-bar-nav-icon>
            <router-link :to="UserDetails.role == 'SecurityGuard' ? '/vaccination' : '/'">
                <v-toolbar-title class="ml-0 white--text">
                    <span class="pointer">ISUE ORANGE</span>
                  <!--   <v-img contain :height="$vuetify.breakpoint.mdAndUp ? '48' : '45'" width="140" 
            src="../images/Orange.png"></v-img> -->
                </v-toolbar-title>
            </router-link>

            <!--  <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"
            class="hidden-sm-and-down"></v-text-field> -->
            <v-spacer></v-spacer>
            <v-btn @click="fbChat()" id="help-btn" active-class="act-btn" depressed rounded :icon="!$vuetify.breakpoint.lgAndUp " :text="$vuetify.breakpoint.lgAndUp ">
                <v-icon :left="$vuetify.breakpoint.lgAndUp">mdi-account-question</v-icon> {{$vuetify.breakpoint.lgAndUp ? 'Help' : ''}}
            </v-btn>

            <notifications v-on:toggleSeeNotif="Notifdrawer = !Notifdrawer"></notifications>
            <!-- <invites></invites> -->


            <div class="text-center">
                <v-menu  bottom min-width="200px" rounded offset-y>
                    <template v-slot:activator="{ on }">
                        
                        <v-btn icon x-large v-on="on">
                            <!--   <v-badge :content="get_invite_count" :value="get_invite_count" offset-x="12" offset-y="12" color="red darken-4"> -->
                            <v-badge bordered bottom  color="green" dot offset-x="10" offset-y="10">
                                <v-avatar color="brown" size="40">
                                    <v-img alt="Proflie"
                                        :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                                    </v-img>
                                </v-avatar>
                            </v-badge>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-list-item-content class="justify-center">
                            <div class="mx-auto text-center">
                                 <v-badge bordered bottom  color="green" dot offset-x="10" offset-y="10">
                                    <v-avatar color="brown" size="40">
                                        <v-img alt="Proflie"
                                            :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                                        </v-img>
                                    </v-avatar>
                                 </v-badge>

                                <div style="max-width:200px" class="justify-center text-center">
                                    <h4 >{{ UserDetails.firstName+' '+UserDetails.lastName }}{{UserDetails.suffix != '' && UserDetails.suffix != null  ? ', '+UserDetails.suffix : ''}}</h4>
                                </div>
                                
                                <p class="text-caption mt-1">
                                    {{ UserDetails.email }}
                                </p>
                                <v-divider class="my-3"></v-divider>
                                <v-btn @click="$router.push({name: 'profile_page'})" rounded color="primary" v-if=" UserDetails.role != 'SecurityGuard'">
                                    <v-icon left>mdi-account</v-icon> My Profile
                                </v-btn>
                                <v-divider v-if="role == 'Student' || role == 'Teacher'" class="my-3"></v-divider>
                                <v-btn v-if="role == 'Student' || role == 'Teacher'" depressed @click="$router.push({name:'archive-course'})" rounded text>
                                    <v-icon left>mdi-package-down</v-icon> {{role == 'Teacher' ? 'Archives' : 'Archive Classes'}}
                                </v-btn>
                                <!--   <v-divider class="my-3"></v-divider>
                            <v-badge :content="get_invite_count" :value="get_invite_count" offset-x="15" offset-y="15" color="red darken-4">
                            <v-btn depressed @click="$router.push({name: 'invites'})" rounded text>
                                <v-icon left>mdi-account-multiple-plus</v-icon> Class Invite
                            </v-btn>
                            </v-badge> -->
                            <v-divider class="my-3"></v-divider>
                                <v-btn v-if="role == 'Student' || role == 'Teacher'" depressed @click="$router.push({name:'backpack'})" rounded text>
                                    <v-icon color="info" left>mdi-bag-personal</v-icon> Backpack
                                </v-btn>
                                <v-divider class="my-3"></v-divider>
                                <v-btn @click="logout" depressed rounded text>
                                    <v-icon color="red" left>mdi-power</v-icon> Logout
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
        <div v-if="navBarType != 'classwork-preview' && navBarType != 'classwork_overview'  && UserDetails.role != 'ProgramChair'  && UserDetails.role != 'SecurityGuard'">
            <v-navigation-drawer :width="role == 'Student' || role == 'Teacher' ? '233' : '240'" v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp"
                v-if="navBarType != 'selectedCourse' ||  getcourseInfo.completed == 1 " app>
                <mainNavbar :role="role" :drawer="drawer"
                    v-if="navBarType != 'selectedCourse'  && (role == 'Student' || role == 'Teacher')"> </mainNavbar>
                <courseNavbar :role="role"
                    v-if="navBarType == 'selectedCourse'&& (role == 'Student' || role == 'Teacher') "> </courseNavbar>
                <adminNavbar :role="role" v-if="role == 'Administrator'"> </adminNavbar>
                <programChairNavbar :role="role" v-if="role == 'ProgramChair'"></programChairNavbar>
                <campusDirectorNavbar :role="role" v-if="role == 'CampusDirector'"></campusDirectorNavbar>
            </v-navigation-drawer>
        </div>
        <!--  ######### end sidebar ################ -->

        <!--  ######### notifSiaebar ################ -->
        <!--   <mainBottomNavigation v-if="!$vuetify.breakpoint.lgAndUp && navBarType == 'selectedCourse' && role == 'Student'"></mainBottomNavigation> -->

        <v-row v-if="isLogout" align-content="center" justify="center">
            <v-col cols="12" class="text-center">
                <vue-element-loading :active="isLogout" duration="0.7" :is-full-screen="true" spinner="line-scale"
                    color="#EF6C00" size="60" />
            </v-col>
        </v-row>
    </div>
</template>


<script>
    const mainNavbar = () => import( /* webpackChunkName: "layout" */ "./navigation/main-navbar")
    const courseNavbar = () => import( /* webpackChunkName: "layout" */ "./navigation/course-navbar")
    const mainBottomNavigation = () => import( /* webpackChunkName: "layout" */
        "./bottom-navigation/course-bottom-navigation")
    const adminNavbar = () => import( /* webpackChunkName: "layout" */ "./navigation/admin/admin-navbar")
    const programChairNavbar = () => import( /* webpackChunkName: "layout" */
        "./navigation/programChair/programChair-navbar")
    const campusDirectorNavbar = () => import( /* webpackChunkName: "layout" */
        "./navigation/campusDirector/campusDirector-navbar")
    const notifications = () => import( /* webpackChunkName: "layout" */ "./notification/notification")

    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default ({
        props: ['role', 'UserDetails'],
        components: {
            mainNavbar,
            courseNavbar,
            adminNavbar,
            notifications,
            mainBottomNavigation,
            programChairNavbar,
            campusDirectorNavbar

        },
        data() {
            return {

                logo: "../../images/logo.png",
                navBarType: '',
                completedSetup: '',
                drawer: null,
                Notifdrawer: null,
                isLogout: false,
                showFBchat: false,
            }
        },
        watch: {
            $route(to, from) {
                this.navBarType = this.$route.matched[1].name;
            }
        },
        computed: {
            ...mapGetters(["getcourseInfo", 'get_invite_count']),
        },
        methods: {
            ...mapActions(['fetchScourse', 'clear_current_user']),
            fbChat() {
               
        window.open('https://www.messenger.com/t/102514265611526/', '_blank').focus();

            },
            goHome() {
                this.$router.push({
                    path: ""
                })
            },
            logout() {

                 this.$store.dispatch('clearClassesNames');
                    this.isLogout = true;
                    axios.post('/api/logout')
                        .then(() => {
                            this.clear_current_user();
                            this.$router.push({
                                name: "login"
                            })
                        })
                        .catch((e) => {
                        })
               /*  if(this.role == 'Administrator'){
                    this.isLogout = true;
                    axios.post('/api/logout')
                        .then(() => {
                            this.clear_current_user();
                            this.$router.push({
                                name: "admin_login"
                            })
                        })
                        .catch((e) => {
                        })
                }else{
                    this.$store.dispatch('clearClassesNames');
                    this.isLogout = true;
                    axios.post('/api/logout')
                        .then(() => {
                            this.clear_current_user();
                            this.$router.push({
                                name: "login"
                            })
                        })
                        .catch((e) => {
                        })
                } */

               
            },
        },
        mounted() {
            this.navBarType = this.$route.matched[1].name;
             if($('#fb-root').is(":visible")) {
            $('#fb-root').css('display', 'none');
            }

            if(Notification.permission === "granted"){
                this.isAlloweNotification = true;
            }else{
                this.isAlloweNotification = false;
            }
        },
        created() {

            if($('#fb-root').is(":visible")) {
            $('#fb-root').css('display', 'none');
            // $('#help-btn').css('background', '#ffffff7d' );
            // $('#fb-customer-chat > span > iframe').css('display', 'none');
            }

    

        }


        // watch: {
        //     $route(to, from) {
        //         ////console.log(this.$route.matched);
        //         this.navBarType = this.$route.matched[1].name;

        //     }
        // },
        // created() {
        //     this.navBarType = this.$route.matched[1].name;
        // }

    })

</script>

<style scope>
    .act-btn {
        background: #ffffff7d !important;
    }

</style>
