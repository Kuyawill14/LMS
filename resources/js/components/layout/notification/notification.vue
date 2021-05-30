<template>
     <md-menu md-size="huge" :md-offset-x="127" :md-offset-y="5">
        <md-button  class="md-icon-button" md-menu-trigger>
            <md-badge md-content="1" md-dense>
            <md-icon>notifications</md-icon>
        </md-badge></md-button>

        <md-menu-content>
          
            <md-list-item v-for="(item, index) in get_notification" :key="index">
            <md-icon>send</md-icon>
                <span class="" style="font-size:13px">{{item.firstName+" "+item.lastName }}</span>
                 {{item.message}}
            </md-list-item>

            <md-list-item>
                <md-icon>delete</md-icon>
                <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
                <md-icon>error</md-icon>
                <span class="md-list-item-text">Spam</span>
            </md-list-item>
              
      
              

              

        
        
                
        
           
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
<style lang="scss" scoped>
    .notif_list:hover{
        background-color: gainsboro !important;
    }
  .md-ripple{
      overflow: auto !important;
  }
</style>