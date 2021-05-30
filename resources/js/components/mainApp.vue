<template>
    <v-app id="inspire">
        <v-app id="inspire">

            <topHeader v-on:toggleSidebar="toggle"></topHeader>


            <sidebar :role='role' :drawer="drawer"></sidebar>
            <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-main>
                <v-container class="fill-height" fluid>
                    <router-view :role='role'></router-view>
                </v-container>
            </v-main>

        </v-app>
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
            drawer:true,
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
            }
        },
        mounted() {
            axios.get('/api/user').then((res) => {
                this.role = res.data.role;
                this.UserDetails = res.data;
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            })

        }

    }

</script>
