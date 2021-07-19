<template>
    <div class="text-center">
    

        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="400" offset-y :max-width="400">
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-badge :content="get_notification_count" :value="get_notification_count" color="red darken-2"
                        overlap>
                        <v-icon>
                            mdi-bell
                        </v-icon>
                    </v-badge>
                </v-btn>
            </template>

            <v-card :style="$vuetify.breakpoint.xs ? 'max-height:65vh':'max-height:80vh'">
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Notification</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>



                            <v-btn @click="$emit('toggleSeeNotif')" class="white--text caption" color="blue" text depressed rounded>
                                See all
                            </v-btn>

                        </v-list-item-action>
                    </v-list-item>

                    <v-divider></v-divider>
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
                        </v-list-item-avatar>
                      
                
                        <v-list-item-content>
                            
                            <v-list-item-title  class="font-weight-medium">
                                <v-badge :content="item.status == 1 ? '' :'new'" :value="item.status == 1 ? '' :'new'" 
                                :color="item.notification_type == 1  ? 'red' : item.notification_type == 3 || item.notification_type == 2 ? 'blue' : ''" >
                                {{item.name}}   
                                </v-badge>
                                </v-list-item-title>
                           
                            <div class="body-2">
                                {{item.message}}
                                 <a class="blue--text" @click.prevent="acceptJoin(item.notification_attachments,item.n_id)" href="" v-if="item.notification_type == 3 && item.notification_accepted == 0" link>
                                Accept invite</a>
                               <!--  <v-btn v-if="item.notification_type == 3 && item.notification_accepted == 0"
                                 
                                @click="acceptJoin(item.notification_attachments)" rounded small text>Accept invite</v-btn> -->
                               
                            </div>
                            <small>{{format_date(item.created_at)}}</small>
                                 
                        </v-list-item-content>
             
                        <v-list-item-action>
                           

                             <v-tooltip v-if="item.status == null || item.status == 0"  left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn style="z-index:50" icon v-bind="attrs" v-on="on"
                                        v-if="item.status == null || item.status == 0" @click="UnreadNotification(item.n_id)">
                                        <v-icon>mdi-check</v-icon>
                                    </v-btn>
                                </template>
                               <!--  <span> {{item.notification_type == 3 ? 'Accept Invite' : 'Mark as read'}}</span> -->
                                <span>Mark as read</span>
                            </v-tooltip>

                            <v-tooltip v-if="item.status == 1" left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn style="z-index:50" icon v-bind="attrs" v-on="on"
                                        v-if="item.status == 1" @click="DeleteNotification(item.n_id)">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </template>
                                <span>Hide notification</span>
                            </v-tooltip>
                           
                        </v-list-item-action>
                   
                    </v-list-item>

                    <v-list-item v-if="get_notification_count != 0">
                        <v-list-item-content>
                            <v-row align-content="center" justify="center">
                                <v-col cols="12" class="text-center">
                                     <v-btn v-if="ShowLoadMore"  @click="ShowMore" outlined color="primary">Load More  <v-icon right>mdi-chevron-down</v-icon> </v-btn>
                                     <v-btn v-if="!ShowLoadMore"  @click="ShowLess" outlined color="primary">Show Less  <v-icon right>mdi-chevron-down</v-icon> </v-btn>
                                    <!--  <pagination
                                        class="hidden"
                                        :data="notificationList"
                                        @pagination-change-page="getResults"
                                        ></pagination> -->
                                </v-col>
                               
                            </v-row>
                            
                        </v-list-item-content>
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
            /* page: 0,
            loadMore: false, */
        }),
        computed: mapGetters(["get_notification", "get_notification_count","ShowPage","ShowLoadMore"]),
        methods: {
            ...mapActions(['fetchNotification']),
            ...mapActions(['fetchNotificationCount']),
             ...mapActions(['ShowMore']),
            
            ...mapActions(['UnreadMessage']),
            connect() {
                let newVm = this;
                this.fetchNotificationall();
                this.fetchNotificationCount();
                window.Echo.private("notification")
                    .listen('NewNotification', e => {
                        newVm.fetchNotificationall();
                        newVm.fetchNotificationCount();
                    })
            },
            UnreadNotification(id) {
                axios.post('/api/notification/'+id, {accepted: this.isAccepted}).then((res) => {
                    this.get_notification.forEach(item => {
                        if(item.n_id == id){
                            item.status = 1;
                        }
                    });
                    this.fetchNotificationCount();
                })
            },
            DeleteNotification(id) {
                axios.delete('/api/notification/' + id).then((res) => {
                     this.get_notification.forEach(item => {
                        if(item.n_id == id){
                            item.hide_notif = 1;
                        }
                    });
                    this.fetchNotificationCount();
                })
            },
            acceptJoin(class_code, id){
                this.form.class_code = class_code
                   this.$store.dispatch("joinClass", this.form).then(res => {

                    if(res.status == 200){
                        this.isAccepted = true;
                         this.toastSuccess(res.data);
                         this.UnreadNotification(id);
                    }
                    else if(res.status == 202){
                        this.toastError(res.data);
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
            fetchNotificationall(){
                this.$store.dispatch("fetchNotification");

                /*  axios.get('/api/notification/all')
                    .then(res => {
                        this.notificationList = res.data;
                        this.notifLength = res.data.data;
                       
                        if(res.data.current_page != res.data.last_page){
                            this.loadMore = true;
                            this.page = res.data.current_page + 1;
                        }
                        else{
                            this.loadMore = false;
                        }
                    })
                    .catch(e=>{

                    }) */



                   
 
                //this.page = this.page + 1;
            },

            ShowMore() {
                  this.$store.dispatch("ShowMore", this.ShowPage);
               /*  axios.get('/api/notification/all?page='+this.page).then(res => {
                    res.data.data.forEach(item => {
                        this.notificationList.data.push(item);
                    });
                    if(res.data.current_page != res.data.last_page){
                        this.loadMore = true;
                        this.page = res.data.current_page + 1;
                    }
                    else{
                        this.loadMore = false;
                    }
                }); */
            },
            ShowLess(){
                this.page -=1;
                  axios.get('/api/notification/all?page='+this.page).then(res => {
                    this.notificationList = res.data;


        
                    if(res.data.current_page != res.data.last_page){
                        this.loadMore = true;
                        this.page = res.data.current_page + 1;
                    }
                    else{
                        this.loadMore = false;
                    }
                });
                

            }
           
            
        },
        mounted() {
            this.connect();
        }
    }

</script>
