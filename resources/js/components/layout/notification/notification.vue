<template>
    <div class="text-center" style="z-index:100">
    
        <v-dialog v-model="dialog" width="800">
            <seeAllNotification ></seeAllNotification>
        </v-dialog>
        <v-menu 
        :max-height="$vuetify.breakpoint.xs ? 500 : 650"
        v-model="menu" rounded="0" :close-on-content-click="closing" :nudge-width="400" offset-y :max-width="400">
            <template v-slot:activator="{ on, attrs }">
                <v-btn @click="fetchNotificationall(attrs)" icon v-bind="attrs" v-on="on">
                    <v-badge :content="get_notification_count" :value="get_notification_count" color="red darken-2"
                        overlap>
                        <v-icon>
                            mdi-bell
                        </v-icon>
                    </v-badge>
                </v-btn>
            </template>

            <!-- <v-card :style="$vuetify.breakpoint.xs ? 'max-height:65vh':'max-height:80vh'"> -->
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Notification</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>

                            <v-btn @click="closing = true, $router.push({name: 'notifications'})" class="white--text caption" color="blue" text depressed rounded>
                                See all
                            </v-btn>

                        </v-list-item-action>
                    </v-list-item>

                    <v-divider></v-divider>
                       <v-list-item v-if="isGetting">
                        <v-list-item-content>
                             <v-row  align-content="center" justify="center">
                                <v-col class="text-subtitle-1 text-center mb-0 pb-0" cols="12">
                                    Loading
                                </v-col>
                                <v-col cols="6" class="mt-0 pt-0">
                                    <v-progress-linear color="primary" indeterminate rounded height="4"></v-progress-linear>
                                </v-col>
                            </v-row>
                        </v-list-item-content>
                    </v-list-item>

                     <div v-if="!isGetting">
                        <v-list-item v-if="get_notification.length == 0">
                            <v-list-item-content>
                                <v-row align="center" class="mt-3" justify="center"  >
                                    <v-col cols="12" class="text-center">
                                        <v-icon style="font-size:2rem">
                                            mdi-bell-off
                                        </v-icon>
                                    <p> Empty Notification  </p>
                                    </v-col>
                                </v-row>
                            </v-list-item-content>
                        </v-list-item>
                        

                    


                    
                        <v-list-item  v-show="item.hide_notif == 0 || item.hide_notif == null" v-for="(item, index) in get_notification" :key="index">
                            <v-list-item-avatar >
                                <v-icon color="blue" v-if="item.notification_type == 3 || item.notification_type == 2" large>mdi-account-plus</v-icon>
                                <v-icon color="red" v-if="item.notification_type == 1" large>mdi-bullhorn-outline</v-icon>
                                <v-icon color="green" v-if="item.notification_type == 4" large> mdi-book-open-variant</v-icon>
                               
                            </v-list-item-avatar>
                            <v-list-item-content>
                                
                                <v-list-item-title  class="font-weight-medium">
                                    <v-badge :content="item.status == 1 ? '' :'new'" :value="item.status == 1 ? '' :'new'" 
                                    :color="item.notification_type == 1  ? 'red' : item.notification_type == 3 || item.notification_type == 2 ? 'blue' : 
                                    item.notification_type == 4 ? 'green' : ''" >
                                    {{item.name}}   
                                    </v-badge>
                                    </v-list-item-title>
                            
                                <div class="body-2">
                                    {{item.message}}
                                    <a class="blue--text" @click.prevent="acceptJoin(item.notification_attachments,item.n_id)" href="" v-if="item.notification_type == 3 && item.notification_accepted == 0" link>
                                    Accept invite</a>
                                </div>
                                <small>{{format_date(item.created_at)}}</small>
                                    
                            </v-list-item-content>
                
                            <v-list-item-action>
                            

                                <v-tooltip v-if="item.status == null || item.status == 0"  left>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn style="z-index:50" icon v-bind="attrs" v-on="on"
                                            v-if="item.status == null || item.status == 0" @click="markAsread(item.n_id),closing = false">
                                            <v-icon>mdi-check</v-icon>
                                        </v-btn>
                                    </template>
                            
                                    <span>Mark as read</span>
                                </v-tooltip>

                                <v-tooltip v-if="item.status == 1" left>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn style="z-index:50" icon v-bind="attrs" v-on="on"
                                            v-if="item.status == 1" @click="NotificationHide(item.n_id),closing = false">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Hide notification</span>
                                </v-tooltip>
                            
                            </v-list-item-action>
                    
                        </v-list-item>
                    

                        <v-list-item v-if="LastPage != 1" >
                            <v-list-item-content>
                                <v-row align-content="center" justify="center">
                                    <v-col cols="12" class="text-center">
                                        <v-btn v-if="ShowPage != 1"  @click="ShowLess" rounded text color="blue">Load Less  <v-icon right>mdi-chevron-up</v-icon> </v-btn>
                                        <v-btn v-if="ShowLoadMore"  @click="ShowMore" rounded text color="blue">Load More  <v-icon right>mdi-chevron-down</v-icon> </v-btn>
                                    </v-col>
                                
                                </v-row>
                                
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list>

          <!--   </v-card> -->
        </v-menu>
    </div>
</template>

<script>

    const seeAllNotification = () => import("./SeeAllNotification")
    import moment from 'moment'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data: () => ({
            notificationList:{},
            notifLength: [],

            fav: true,
            menu: false,
            message: false,
            hints: true,
            form: new Form({
                class_code: ""
            }),
            isAccepted: false,
            dialog: false,
            closing: false,
            //isGetting: true,
            notifType: 'all',
            AttachData: {}
     
        }),
        components:{
            seeAllNotification
        },
        computed: mapGetters(["get_notification", "get_notification_count","ShowPage","ShowLoadMore","LastPage","isGetting"]),
        methods: {
            ...mapActions(['fetchNotification']),
            ...mapActions(['fetchNotificationCount']),
            ...mapActions(['ShowMore']),
            ...mapActions(['ShowLess']),
            ...mapActions(['LessNotificationCount']),
            ...mapActions(['UnreadMessage']),
            connect() {
                let newVm = this;
              /*   this.fetchNotification(); */
                this.fetchNotificationCount();
                window.Echo.private("notification")
                    .listen('NewNotification', e => {
                         newVm.$store.dispatch("fetchNotification", this.notifType )
                        newVm.fetchNotificationCount();
                    })
            },
          /*   UnreadNotification(id) {
                axios.post('/api/notification/'+id, {accepted: this.isAccepted}).then((res) => {
                    this.get_notification.forEach(item => {
                        if(item.n_id == id){
                            item.status = 1;
                            if(this.isAccepted){
                                 item.notification_accepted = 1;
                            }
                        }
                    });
                    this.$store.dispatch("LessNotificationCount");
                })
            },
            DeleteNotification(id) {
                axios.delete('/api/notification/' + id).then((res) => {
                     this.get_notification.forEach(item => {
                        if(item.n_id == id){
                            item.hide_notif = 1;
                        }
                    });
                })
            },
 */
             NotificationHide(id) {
                this.$store.dispatch("HideNotification", id)
                .then(res=>{
                    if(res == 200){
                        this.get_notification.forEach(item => {
                            if(item.n_id == id){
                                item.hide_notif = 1;
                            }
                        });
                    }
                })
                },
            markAsread(id) {
                this.AttachData.id = id;
                this.AttachData.accepted = this.isAccepted;
                this.$store.dispatch("markAsReadNotification", this.AttachData)
                .then(res=>{
                    if(res == 200){
                        this.get_notification.forEach(item => {
                            if(item.n_id == id){
                                item.status = 1;
                                if(this.isAccepted){
                                        item.notification_accepted = 1;
                                }
                            }
                        });
                        this.$store.dispatch("LessNotificationCount");
                    }
                })
            },
            acceptJoin(class_code, id){
                this.form.class_code = class_code
                   this.$store.dispatch("joinClass", this.form).then(res => {
                    if(res.status == 200){
                        this.isAccepted = true;
                         this.toastSuccess(res.data.message);
                         this.markAsread(id);
                         this.$router.push({name: 'coursePage', params: {id: res.data.course_id}})
                    }
                    else if(res.status == 202){
                        this.isAccepted = true;
                        this.toastError(res.data.message);
                        this.markAsread(id);
                         this.$router.push({name: 'coursePage', params: {id: res.data.course_id}})
                    }
                    else{
                        this.toastError('Something went wrong while joining the class!');
                    }
                    
                });
            },
            format_date(value) {
                if (value) {
                    return moment(String(value)).format("MMMM DD, h:mm a")
                }
            },
            ShowMore() {
                this.AttachData.type = this.notifType;
                this.AttachData.page = this.ShowPage;
                this.$store.dispatch("ShowMore", this.AttachData);
            },
            ShowLess(){
                this.$store.dispatch("ShowLess", this.ShowPage);
            },
            fetchNotificationall(on){
                let checker = on['aria-expanded'] == 'false' ? false : true;
                if(!checker){
                    this.$store.dispatch("fetchNotification", this.notifType )
                    .then(res=>{
                        if(res == 200){
                            //this.isGetting = false;
                        }
                        else{
                            //this.isGetting = false;
                            this.toastError('Something went wrong while loading notifications!');
                        }
                    })
                }
            
            }
        },
        mounted() {
            this.connect();
        }
    }

</script>

<style scoped>
    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
   border-radius: 3px
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
