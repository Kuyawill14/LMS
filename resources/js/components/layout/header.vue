<template>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
        <v-app-bar-nav-icon @click="$emit('toggleSidebar', $vuetify.breakpoint.lgAndUp)"></v-app-bar-nav-icon>
        <router-link to="/">
         <!-- <v-toolbar-title style="width: 300px;color: #fff" class="ml-0 pl-4 " >
            <span class="hidden-sm-and-down pointer" >CCSICT-LMS</span>
        </v-toolbar-title> -->
        </router-link>
       
        <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"
            class="hidden-sm-and-down"></v-text-field>
        <v-spacer></v-spacer>


        <notifications></notifications>

        <div class="text-center">
            <v-menu bottom min-width="200px" rounded offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn class="ma-0" icon x-large v-on="on">
                        <v-avatar color="brown" size="35">
                            <v-img alt="Proflie"
                                :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                            </v-img>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card >
                    <v-list-item-content class="justify-center pa-1">
                        <div class="mx-auto text-center ">
                            <v-avatar color="brown" size="35">
                                <v-img alt="Proflie"
                                    :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : UserDetails.profile_pic">
                                </v-img>
                            </v-avatar>
                            <div>
                            <h3>{{ UserDetails.firstName+' '+UserDetails.lastName }}</h3>
                            <p class="text-caption mt-1 pl-2 pr-2">
                                {{ UserDetails.email }}
                            </p>
                            </div>
                            <v-divider class="my-3"></v-divider>
                            <v-btn @click="$router.push({name: 'profile_page'})"  rounded color="primary">
                                <v-icon left>mdi-account</v-icon> My Profile
                            </v-btn>
                            <v-divider class="my-3"></v-divider>
                            <v-btn depressed @click="$router.push({name:'archive-course'})" rounded text>
                                <v-icon left>mdi-package-down</v-icon> Archive
                            </v-btn>
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
</template>


<script>
    import notifications from './notification/notification'
    export default {
        props:['UserDetails'],
        components: {
            notifications
        },
        data: () => ({
            dialog: false,
            drawer: null,
            menuVisible: false,
            
        }),
        methods: {
            goHome() {
                this.$router.push({
                    path: ""
                })
            },
            logout() {
                window.Echo.leave('notification');
                axios.post('/api/logout')
                    .then(() => {
                        this.$router.push({
                            path: "/login"
                        })
                    })
                    .catch((e) => {
                        console.log(e);
                    })
            },
        },
        
    }

</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }

</style>
