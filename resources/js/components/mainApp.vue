<template>
    <v-app >


        <!-- <topHeader :UserDetails="UserDetails" v-on:toggleSidebar="toggle"></topHeader> -->

        
        <sidebar  :UserDetails="get_CurrentUser" :role='get_UserRole' :drawer="drawer"></sidebar>

        <v-main >

            <v-container fluid width="100%">
               
                <router-view :UserDetails='get_CurrentUser' :role='get_UserRole'></router-view>
                
              
            </v-container>
    
        </v-main>

  <!--     <courseNavigation></courseNavigation> -->
    <!--  <bottomNavigation v-if="($vuetify.breakpoint.sm || $vuetify.breakpoint.xs || $vuetify.breakpoint.md) && get_UserRole == 'Student'"></bottomNavigation> -->
  
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
    /* import bottomNavigation from "./layout/bottom-navigation/main-bottom-navigation";
    import courseNavigation from "./layout/bottom-navigation/course-bottom-navigation"; */
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
            //bottomNavigation,
            //courseNavigation
        },
        computed: mapGetters(["get_UserRole", "get_CurrentUser"]),
        methods: {
            ...mapActions(['setUserRole']),
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
                    console.log(this.ipAdd);
                }); */

                  

                   
                    
         
            }
        },
        mounted(){
            this.getIp();
        }
    }

</script>


