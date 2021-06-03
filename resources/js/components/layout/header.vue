<template>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="$emit('toggleSidebar')"></v-app-bar-nav-icon>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <span class="hidden-sm-and-down">CCSICT-LMS</span>
        </v-toolbar-title>
        <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"
            class="hidden-sm-and-down"></v-text-field>
        <v-spacer></v-spacer>


        <notifications></notifications>
 
        <div class="text-center">
            <v-menu :nudge-width="200" offset-y :max-width="200">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon large v-bind="attrs" v-on="on">
                        <v-avatar size="40px" item>

                            <!--   <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify"></v-img> -->
                            <v-img alt="Proflie"
                                :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : '../../images/'+UserDetails.profile_pic">
                            </v-img>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item :to="{name: 'profile_page'}">
                        <v-list-item-title>My Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>Activity</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>Message</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title link @click="logout">Logout</v-list-item-title>

                    </v-list-item>

                </v-list>
            </v-menu>
        </div>
          
    </v-app-bar>
</template>


<script>
    import notifications from './notification/notification'
    export default {

        components: {
            notifications
        },
        data: () => ({
            dialog: false,
            drawer: null,
            menuVisible: false,
            UserDetails: []
        }),
        methods: {
            getUserDetails() {
                axios.get('/api/GetDetails').then((res) => {
                    this.UserDetails = res.data[0];


                }).catch((e) => {
                    console.log(e);
                })
            },
            logout() {
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
        mounted() {
            this.getUserDetails();
        }
    }

</script>
