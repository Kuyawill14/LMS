<template>
<div>
   <v-card flat max-height="600" class="pa-0 ma-0">
    <v-card-title>
      <span class="text-h5">Notifications</span>
   
    </v-card-title>
        
    <div class="pl-2 pr-2">
      

      <v-row no-gutters>
        <v-col class="pa-0 ma-0 mb-2" cols="12">
            <v-divider></v-divider>
        </v-col>

        <v-col cols="12" md="2">
          <v-tabs active-class d
          :centered="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
          :vertical="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm">
              <v-tab @click="notificationType = 'all', notifTypeName = 'All', getNotificationList()" 
              :class="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
                <v-icon :left="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm">
                 mdi-bell
                </v-icon>
                {{!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'All' : ''}}
                
            </v-tab>
            <v-tab @click="notificationType = 1,notifTypeName = 'Announcement', getNotificationList()" 
            :class="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
              <v-icon :left="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm">
                mdi-bullhorn-outline
              </v-icon>
              
              {{!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'Announcement' : ''}}
            </v-tab>
            <v-tab @click="notificationType = 4,notifTypeName = 'Classwork', getNotificationList()" 
            :class="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
             <v-icon :left="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm">
                mdi-book-open-variant
              </v-icon>
              
              {{!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'Classwork' : ''}}
            </v-tab>
            <v-tab @click="notificationType = 3,notifTypeName = 'Class Invites', getNotificationList()" 
            :class="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
              <v-icon :left="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm">
                mdi-account-plus
              </v-icon>
              
              {{!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'Class Invites' : ''}}
            </v-tab>

            <v-tab @click="notificationType = 'Hidden',notifTypeName = 'Hidden', getNotificationList()" 
            :class="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
              <v-icon :left="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm">
                mdi-account-plus
              </v-icon>
              {{!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'Hidden' : ''}}
            </v-tab>

          
          </v-tabs>
        </v-col>

        <v-col cols="12" md="9">

      
                 <v-list >

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

           
                   <v-list-item v-if="notifLength != 0" >
                        <v-list-item-content>
                          <div class="d-flex justify-space-between">

                            <div class="body-1">{{notifTypeName}}</div>
                              <v-btn v-if="get_notification_count != 0 && !isGetting" @click="markAllasRead" small color="primary">
                                Mark all as read
                                <v-icon  right>mdi-check</v-icon> 
                              </v-btn>
                          </div>
                        </v-list-item-content>
                    </v-list-item>


                    <v-list-item v-if="notifLength == 0">
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
                    

                    <v-list-item link  v-show="notificationType == 'all' || item.notification_type == notificationType" v-for="(item, index) in get_notification" :key="index">
                        

                            
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
                               <!--  <v-btn v-if="item.notification_type == 3 && item.notification_accepted == 0"
                                 
                                @click="acceptJoin(item.notification_attachments)" rounded small text>Accept invite</v-btn> -->
                               
                            </div>
                            <small>{{format_date(item.created_at)}}</small>
                                 
                        </v-list-item-content>
             
                        <v-list-item-action style="z-index: 1">
                           

                             <v-tooltip v-if="item.status == null || item.status == 0"  top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn style="z-index:50" text icon v-bind="attrs" v-on="on"
                                        v-if="item.status == null || item.status == 0" @click="markAsread(item.n_id)">
                                      
                                   <v-icon>mdi-check</v-icon>
                                    </v-btn>
                                </template>
                          
                                <span>Mark as read</span>
                            </v-tooltip>

                            <v-tooltip v-if="item.status == 1" top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn style="z-index:50" text icon v-bind="attrs" v-on="on"
                                        v-if="item.status == 1" @click="NotificationHide(item.n_id)">
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
                                <v-col cols="12" class="text-right">
                            
                                      <v-btn v-if="ShowLoadMore"  @click="ShowMore"  rounded text color="primary">Load More  <v-icon  right>mdi-chevron-down</v-icon> </v-btn>
                                </v-col>
                               
                            </v-row>
                            
                        </v-list-item-content>
                    </v-list-item>
                    </div>
                </v-list>
     
      
        </v-col>
      </v-row>
          
 
    </div>
  
  </v-card>
</div>
 
</template>

<script>
import moment from 'moment'
import { mapGetters,mapActions } from "vuex";
export default {
  data(){
    return{
      notificationType: 'all',
      notifTypeName: 'All',
      notificationList: {},
      notifLength: null,
      isSelected: null,
      currentSelectedType: null,
      AttachData: {},
      isAccepted: false,
 
    }
  },
  computed: mapGetters(["get_notification", "get_notification_count","ShowPage","ShowLoadMore","LastPage","isGetting"]),
  methods:{
   ...mapActions(['fetchNotification']),
    ...mapActions(['fetchNotificationCount']),
    ...mapActions(['ShowMore']),
    ...mapActions(['ShowLess']),
    ...mapActions(['LessNotificationCount']),
    ...mapActions(['UnreadMessage']),
    ...mapActions(['HideNotification']),
    ...mapActions(['markAsReadNotification']),
    
    
    test(data){
      this.testdata = data;
    },
    format_date(value) {
          if (value) {
              return moment(String(value)).format("MMMM DD, h:mm a")
          }
      },
    ShowMore() {
        this.$store.dispatch("ShowMore", this.ShowPage);
    },
    async getNotificationList(){
      if(this.currentSelectedType != this.notificationType){
        this.currentSelectedType = this.notificationType;
           this.$store.dispatch("fetchNotification", this.notificationType )
      }
    
    },
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
         console.log(res);
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
    markAllasRead(){
      axios.post('/api/notification/mark-all')
      .then((res)=>{
          this.get_notification.forEach(item => {
                if(item.status== null){
                    item.status = 1;
                }
            });

          for (let i = 0; i < res.data; i++) {
             this.$store.dispatch("LessNotificationCount");
          }
      })
    },
    ShowMore() {
        this.AttachData.type = this.notificationType;
        this.AttachData.page = this.ShowPage;
        this.$store.dispatch("ShowMore", this.AttachData);
    },
         
  },
  mounted(){
    //this.fetchNotification();
   
    this.getNotificationList();
  }
  
}
</script>