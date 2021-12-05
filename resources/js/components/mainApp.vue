<template>
    <v-app >
            <div id="fb-root"></div>

    
        <div id="fb-customer-chat" class="fb-customerchat">
        </div>
        <!-- <topHeader :UserDetails="UserDetails" v-on:toggleSidebar="toggle"></topHeader> -->
        <sidebar  :UserDetails="get_CurrentUser" :role='get_UserRole' :drawer="drawer"></sidebar>
        <v-main>
            <v-container fluid width="100%">
                <router-view :UserDetails='get_CurrentUser' :role='get_UserRole'></router-view>
            </v-container>
        </v-main>
    </v-app>

</template>

<style lang="scss" scoped>
    .md-app {
        height: 100vh;
    }

    // Demo purposes only
    /* .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    } */

</style>

<script>

    import topHeader from "./layout/header";
    import sidebar from "./layout/sidebar";

    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data: () => ({
            UserDetails: [],
            drawer: null,
            menuVisible: false,
            role: '',
            ipAdd: null,
        }),
        components: {
            topHeader,
            sidebar,

        },
        computed: mapGetters(["get_UserRole", "get_CurrentUser"]),
        methods: {
            ...mapActions(['setUserRole','setAsOffline']),
            getUserDetails(){
                axios.get('/api/profile/details').then((res) => {
                    this.role = res.data.role;
                    localStorage.setItem(btoa('user_role'), btoa(res.data.role));
                    //this.$store.dispatch('setUserRole', res.data.role)
                    this.UserDetails = res.data;
                
                  
                }).catch((error) => {
                
                });
            },
            getIp(){
               /*  fetch('https://api.ipify.org?format=json')
                .then(x => x.json())
                .then(({ ip }) => {
                    this.ipAdd = ip;
                    //console.log(this.ipAdd);
                }); */


            },
             isOffline(event) {
        
                this.setAsOffline();
                location.reload();
            },
        },
        mounted(){
            this.getIp();
         
        },
        beforeMount(){
           //window.addEventListener("offline", this.isOffline);
           /*  window.addEventListener('online',  function(){

            });

            */
        },
        beforeDestroy(){
            window.removeEventListener('offline', this.isOffline)
        },
        created() {
                   var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "102514265611526");
            chatbox.setAttribute("attribution", "biz_inbox");



            window.fbAsyncInit = function () {
                FB.init({
                    xfbml: true,
                    version: 'v12.0'
                });
            };

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }
     
    }

</script>


