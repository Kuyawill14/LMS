<template>
    <v-app >
        <!-- <topHeader :UserDetails="UserDetails" v-on:toggleSidebar="toggle"></topHeader> -->
        <sidebar  :UserDetails="get_CurrentUser" :role='get_UserRole' :drawer="drawer"></sidebar>
        <v-main>
            <v-container fluid width="100%">
                <router-view :UserDetails='get_CurrentUser' :role='get_UserRole'></router-view>
            </v-container>

         <!--    <v-dialog persistent v-if="get_UserRole == 'Student'" width="570" v-model="get_evaluation_dialog">
                  <evaluation v-on:closeDialog="setEvaluationDialog()"> </evaluation>
            </v-dialog> -->
          
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
    import evaluation from "./evaluation_modal/evaluation_dialog";
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
            evaluation_dialog: true,
        }),
        components: {
            topHeader,
            sidebar,
            evaluation
        },
        computed: mapGetters(["get_UserRole", "get_CurrentUser","get_evaluation_dialog"]),
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
            setEvaluationDialog(){
                this.$store.dispatch('setEvaulationDialog');
            }
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
       
     
    }

</script>


