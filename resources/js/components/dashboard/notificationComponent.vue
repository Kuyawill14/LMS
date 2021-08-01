<template>
     <v-card style="z-index:1" :style="$vuetify.breakpoint.xs ? 'max-height:65vh':'max-height:100vh'">
                <v-list>
                     <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Notification</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>

                            <!-- <v-btn @click="$router.push({name: 'notifications'})" class="white--text caption" color="blue" text depressed rounded>
                                See all
                            </v-btn> -->

                        </v-list-item-action>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item v-if="notificationList.length == 0">
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


                 

                    <v-list-item  v-show="item.hide_notif == 0 || item.hide_notif == null" v-for="(item, index) in notificationList" :key="index">
                        

                            
                        <v-list-item-avatar >
                            <v-icon color="blue" v-if="item.notification_type == 3 || item.notification_type == 2" large>mdi-account-plus</v-icon>
                            <v-icon color="red" v-if="item.notification_type == 1" large>mdi-bullhorn-outline</v-icon>
                             <v-icon color="green" v-if="item.notification_type == 4" large> mdi-book-open-variant</v-icon>
                        </v-list-item-avatar>
                      
                
                        <v-list-item-content>
                            
                            <v-list-item-title  class="font-weight-medium">
                                <v-badge :content="item.status == 1 ? '' :'new'" :value="item.status == 1 ? '' :'new'" 
                                :color="item.notification_type == 1  ? 'red' : item.notification_type == 3 || item.notification_type == 2 ? 'blue' : item.notification_type == 3 ? 'green' : ''" >
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
                                        v-if="item.status == null || item.status == 0" @click="UnreadNotification(item.n_id)">
                                        <v-icon>mdi-check</v-icon>
                                    </v-btn>
                                </template>
                            
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

                     <v-list-item v-if="notificationList.length != 0">
                        <v-list-item-content>
                            <v-row align-content="center" justify="center">
                                <v-col cols="12" class="text-center">
                                    <!--  <v-btn v-if="ShowLoadMore"  @click="ShowMore" outlined color="primary">Load More  <v-icon right>mdi-chevron-down</v-icon> </v-btn>
                                     <v-btn v-if="!ShowLoadMore"  @click="ShowLess" outlined color="primary">Show Less  <v-icon right>mdi-chevron-down</v-icon> </v-btn> -->
                                <v-btn @click="$router.push({name: 'notifications'})"  text rounded color="primary">See all<v-icon right>mdi-chevron-down</v-icon> </v-btn>
                                </v-col>
                               
                            </v-row>
                            
                        </v-list-item-content>
                    </v-list-item>

                </v-list>

            </v-card>
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
            notificationList:[]
        }),
        computed: mapGetters(["get_notification", "get_notification_count"]),
        methods: {
            ...mapActions(['fetchNotification']),
            ...mapActions(['UnreadMessage']),
            connect() {
                let newVm = this;
                this.fetchNotification();
                window.Echo.private("notification")
                    .listen('NewNotification', e => {
                        newVm.fetchNotification();
                    })
            },
            UnreadNotification(id) {
                axios.post('/api/notification/' + id).then((res) => {
                    this.fetchNotification();
                    this.$emit('reloadnotif');
                })
            },
            DeleteNotification(id) {
                axios.delete('/api/notification/' + id).then((res) => {
                    this.fetchNotification();

                })
            },

            format_date(value) {
                if (value) {
                    return moment(String(value)).format("MMMM DD, h:mm a")
                }
            },
            fetchNotificationAll(){
               
                 axios.get('/api/notification/all')
                    .then(res => {
                        this.notificationList = res.data.data;

                    })

                     console.log(this.notificationList);
                
            }
            

        },
        mounted() {
            this.fetchNotificationAll()
       
        }
    }

</script>

