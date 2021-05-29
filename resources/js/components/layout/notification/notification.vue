<template>
     <md-menu md-size="medium" md-align-trigger>
        <md-button  class="md-icon-button" md-menu-trigger>
            <md-badge md-content="1" md-dense>
            <md-icon>notifications</md-icon>
        </md-badge></md-button>

        <md-menu-content>
            <md-list class="md-double-line">
                <md-subheader>Phone</md-subheader>

                <md-list-item>
                <md-icon class="md-primary">phone</md-icon>

                <div class="md-list-item-text">
                    <span>(650) 555-1234</span>
                    <span>Mobile</span>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>sms</md-icon>
                </md-button>
                </md-list-item>

                <md-list-item class="md-inset">
                <div class="md-list-item-text">
                    <span>(650) 555-1234</span>
                    <span>Mobile</span>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>sms</md-icon>
                </md-button>
                </md-list-item>

                <md-divider></md-divider>
                <md-subheader>Email</md-subheader>

                <md-list-item>
                <md-icon class="md-primary">email</md-icon>

                <div class="md-list-item-text">
                    <span>aliconnors@example.com</span>
                    <span>Personal</span>
                </div>
                </md-list-item>

                <md-list-item class="md-inset">
                <div class="md-list-item-text">
                    <span>ali_connors@example.com</span>
                    <span>Work</span>
                </div>
                </md-list-item>
            </md-list>
        
                <!--  <span style="cursor:pointer" @click="alert(item.message)" :class="item.status == 0 ? 'notification-icon dashbg-red notif_list': 'notification-icon dashbg-gray notif_list'">
                        <md-icon v-if="item.status == 0 && item.event_type == 1">campaign</md-icon>
                         <md-icon v-else-if="item.status == 0 && item.event_type == 2">person_outline</md-icon>
                          <md-icon v-else>done</md-icon>
                    </span>
                    <span class="notification-text">
                        <p style="line-height:1.2">{{item.firstName+" "+item.lastName }}</p> 
                        {{item.message}}.
                    </span>
                    <span class="notification-time ml-5 mt-4">
                        <a v-if="item.status == 0"  @click="UnreadNotification(item.n_id)" class="fa fa-check" style="cursor:pointer"></a>
                        <a v-if="item.status == 1"  @click="DeleteNotification(item.n_id)" class="fa fa-close" style="cursor:pointer"></a>
                        <span> {{format_date(item.created_at)}}</span>
                    </span>
             -->
        
           
        </md-menu-content>
    </md-menu>
</template>

<script>
    // Enable pusher logging - don't include this in production
    import moment from 'moment'
    
    import {
        mapGetters,
        mapActions
    } from "vuex";

    export default {
        computed: mapGetters(["get_notification", "get_notification_count"]),
        data() {
            return {
                messages: [],
                Notification:[],
                notifCount: 0
            }
        },
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
           
            //this.fetchClassPost();
            
        }
    }

</script>
<style  scoped>
    .notif_list:hover{
        background-color: gainsboro !important;
    }
</style>