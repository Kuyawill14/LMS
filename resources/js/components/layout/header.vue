<template>
        <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
                <md-button @click="$emit('toggleSidebar')" class="md-icon-button">
                    <md-icon>menu</md-icon>
                </md-button>
            </div>

            <div class="md-toolbar-section-end">
                <notifications></notifications>
                <!-- <md-menu md-size="huge" md-align-trigger>
                    <md-button  class="md-icon-button" md-menu-trigger>
                        <md-badge md-content="1" md-dense>
                        <md-icon>notifications</md-icon>
                    </md-badge></md-button>

                    <md-menu-content>
                        <md-menu-item><a href="list-view-calendar.html"> <md-icon>account_circle</md-icon>My Proflie</a></md-menu-item>
                        <md-menu-item><a href="list-view-calendar.html">Activity</a></md-menu-item>
                        <md-menu-item><a href="list-view-calendar.html">Activity</a></md-menu-item>
                        <md-menu-item><a href="#" @click="logout">Logout</a></md-menu-item>
                    </md-menu-content>
                </md-menu> -->
                
                 <md-menu class="ml-2" md-size="medium" md-align-trigger>
                    <md-button  class="md-icon-button" md-menu-trigger>
                           <md-avatar class="md-raised">
                          
                                <img alt="avatar" :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=a0a0a0&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : '../../images/'+UserDetails.profile_pic" width="10" height="10">
                            </md-avatar>
                     </md-button>

                    <md-menu-content>
                        <md-menu-item><a href="list-view-calendar.html"> <md-icon>account_circle</md-icon>My Proflie</a></md-menu-item>
                        <md-menu-item><a href="list-view-calendar.html">Activity</a></md-menu-item>
                        <md-menu-item><a href="list-view-calendar.html">Activity</a></md-menu-item>
                        <md-menu-item><a href="#" @click="logout">Logout</a></md-menu-item>
                    </md-menu-content>
                </md-menu>
            </div>
      </div>
</template>


<script>
import notifications from './notification/notification'
export default {
    components:{
        notifications
    },
      data: () => ({
            menuVisible: false,
            UserDetails:[]
        }),
        methods:{
             getUserDetails(){
                axios.get('/api/GetDetails').then((res)=>{
                    this.UserDetails = res.data[0];
          
                  
                }).catch((e)=>{
                    console.log(e);
                })
            },
              logout(){
                axios.post('/api/logout')
                .then(()=>{
                    this.$router.push({path: "/login"})
                })
                .catch((e)=>{
                    console.log(e);
                })
            },
        },
        mounted(){
            this.getUserDetails();
        }
}
</script>