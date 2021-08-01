<template>
    <v-app id="inspire">


        <!-- <topHeader :UserDetails="UserDetails" v-on:toggleSidebar="toggle"></topHeader> -->

        
        <sidebar :UserDetails="UserDetails" :role='role' :drawer="drawer"></sidebar>

        <v-main>

            <v-container fluid>
                <router-view :UserDetails='UserDetails' :role='role'></router-view>
            </v-container>
            
        </v-main>

    </v-app>

</template>

<style lang="scss" scoped>
    .md-app {
        height: 100vh;
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }

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
            role: ''
        }),
        components: {
            topHeader,
            sidebar,
        },
        computed: mapGetters(["get_userRole"]),
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
            }
        },
        created() {
            this.getUserDetails();
           
             
        },
    }

</script>


