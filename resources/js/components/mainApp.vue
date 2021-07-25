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
        computed:{
         
            getDrawer(){
                return this.drawer ;
        
            }
          
        },
        methods: {
           
        },

        mounted() {
            axios.get('/api/profile/details').then((res) => {
                this.role = res.data[0].role;
                this.UserDetails = res.data[0];
            }).catch((error) => {
                console.log(error)
            });
           
             
        },
    }

</script>


