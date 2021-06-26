<template>
    <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="250"
      offset-y
      :max-width="400"
      
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon
          v-bind="attrs"
          v-on="on"
        >
          <v-badge
            :content="get_notification_count"
            :value="get_notification_count"
            color="red darken-2"
            overlap
            >
            <v-icon>
            mdi-bell
            </v-icon>
        </v-badge>
        </v-btn>
      </template>

      <v-card :style="$vuetify.breakpoint.xs ? 'height:65vh':'height:80vh'">
        <v-list>
          <v-list-item>
           <v-list-item-content>
              <v-list-item-title>Notification</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
            

             
                  <v-btn
                    class="white--text caption"
                    color="blue"
                    text
                    depressed
                    rounded
                  >
                    See all
                  </v-btn>
                
            </v-list-item-action>
            </v-list-item>

          <v-divider></v-divider>
          <v-list-item v-for="(item, index) in get_notification" :key="index">
           
            <v-list-item-avatar>
             <v-img alt="Proflie" :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + item.name : item.profile_pic"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-medium">{{item.name}}</v-list-item-title>
              <div class="caption">{{item.message}}</div>
              <small>{{format_date(item.created_at)}}</small>
             
            </v-list-item-content>

            <v-list-item-action>
                <v-btn  icon v-if="item.status == 0"  @click="UnreadNotification(item.n_id)"> <v-icon>mdi-check</v-icon></v-btn>
                <v-btn icon  v-if="item.status == 1"  @click="DeleteNotification(item.n_id)"> <v-icon>mdi-close</v-icon></v-btn>
            </v-list-item-action>
            
          </v-list-item>

        </v-list>

      </v-card>
    </v-menu>
  </div>
</template>

<script>
import moment from 'moment'
    import {
        mapGetters,
        mapActions
    } from "vuex";
  export default {
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }),
    computed: mapGetters(["get_notification", "get_notification_count"]),
      methods:{
            ...mapActions(['fetchNotification']),
            ...mapActions(['UnreadMessage']),
            connect(){
                 let newVm = this;
                 this.fetchNotification();
                 window.Echo.private("notification")
                 .listen('NewNotification', e =>{
                     newVm.fetchNotification();
                 })
            },
            UnreadNotification(id){
                axios.post('/api/notification/'+id).then((res)=>{
                    this.fetchNotification();
                    this.$emit('reloadnotif');
                })
            },
            DeleteNotification(id){
                axios.delete('/api/notification/'+id).then((res)=>{
                    this.fetchNotification();
                    
                })
            },

            format_date(value){
                if (value) {
                return moment(String(value)).format("MMMM DD, h:mm a")
                }
            },
            alert(message){
                alert(message);
            }
          
        },
        mounted() {
            this.connect();
        }
  }
</script>
