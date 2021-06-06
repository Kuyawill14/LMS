<template>
    <v-app id="inspire">


        <topHeader v-on:toggleSidebar="toggle"></topHeader>


        <sidebar :role='role' :drawer="drawer"></sidebar>

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
            drawer: true,
            menuVisible: false,
            role: ''
        }),
        components: {
            topHeader,
            sidebar,
        },
        methods: {
            toggle() {
                this.drawer = !this.drawer;
                console.log(this.drawer);
                  setInterval(() => {
                if ($('.v-overlay__scrim').length > 0 && this.drawer ==true) {
                    $('.v-overlay__scrim').click(function () {
                         this.drawer =false;
                       console.log(this.drawer)
                    })
                }
            }, 100)
            }
        },
        mounted() {
            axios.get('/api/user').then((res) => {
                this.role = res.data.role;
                this.UserDetails = res.data;
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            });
              
        },
        created() {
          
        }

    }

</script>
