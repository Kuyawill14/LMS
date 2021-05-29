<template>
    <div class="page-container">
        <md-app md-mode="reveal">
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">My Title</span>
            </md-app-toolbar>

          

            <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
                <sidebar></sidebar>
            
            </md-app-drawer>

            <md-app-content>
                <router-view role:></router-view>
            </md-app-content>
        </md-app>
    </div>
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
        name: 'Reveal',
         data: () => ({
             UserDetails:[],
            menuVisible: false,
            role:''
        }),
        components: {
            topHeader,
            sidebar,
        },
      mounted(){
        axios.get('/api/user').then((res)=>{
            this.role = res.data.role;
            this.UserDetails = res.data;
            console.log(res.data);
        }).catch((error)=>{
            console.log(error)
        })
        
      }
    }

</script>
