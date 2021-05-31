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

      <v-card>
        <v-list>
          <v-list-item>
           <v-list-item-content>
              <v-list-item-title>Notification</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
            

               <v-badge
                  bordered
                  color="red darken-1"
                  :content="get_notification_count"
                  :value="get_notification_count"
                  overlap
                >
                  <v-btn
                    class="white--text"
                    color="red darken-"
                    text="white"
                    depressed
                  >
                    new
                  </v-btn>
                </v-badge>
            </v-list-item-action>
            </v-list-item>

          <v-divider></v-divider>
          <v-list-item v-for="(item, index) in get_notification" :key="index">
            <v-list-item-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{item.firstName+" "+item.lastName }}</v-list-item-title>
              <span>{{item.message}}</span>
             
            </v-list-item-content>

            <v-list-item-action>
                 <span> {{format_date(item.created_at)}}</span>
             <!--  <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn> -->

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
           /*  connect(){
                 let newVm = this;
                 this.fetchNotification();
                 window.Echo.private("notification")
                 .listen('NewNotification', e =>{
                     newVm.fetchNotification();
                 })

            }, */
            fetchNotificationData(){
                this.fetchNotification();
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
            this.fetchNotificationData();
        }
  }
</script>
