<template>
<div>
   <v-card flat max-height="600" class="pa-0 ma-0">
    <v-card-title>
      <span class="text-h6">Invites 
        <v-icon right="">
            mdi-account-plus
        </v-icon></span>
    </v-card-title>
        
    <div class="pl-2 pr-2">
      

      <v-row no-gutters>
        <v-col class="pa-0 ma-0 mb-2" cols="12">
            <v-divider></v-divider>
        </v-col>

          <v-col cols="12" md="1">
          <v-tabs active-class 
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows 
          
           :vertical="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
          :centered="$vuetify.breakpoint.xs && $vuetify.breakpoint.sm"
         >
              <v-tab
              :class="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
                <v-icon :left="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                 mdi-bell
                </v-icon>
                {{!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'Invite' : ''}}
                
            </v-tab>

              <v-tab
                :class="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
                <v-icon :left="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                 mdi-bell
                </v-icon>
                {{!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'Request' : ''}}
            </v-tab>
            <!-- <v-tab  @click="notificationType = 1,notifTypeName = 'announcement', getNotificationList()" 
            :class="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
              <v-icon :left="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                mdi-bullhorn-outline
              </v-icon>
              
              {{!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'Announcement' : ''}}
            </v-tab>
            <v-tab @click="notificationType = 4,notifTypeName = 'classwork', getNotificationList()" 
            :class="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
             <v-icon :left="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                mdi-book-open-variant
              </v-icon>
              
              {{!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'Classwork' : ''}}
            </v-tab> -->
            <!-- <v-tab @click="notificationType = 3,notifTypeName = 'class-invites', getNotificationList()" 
            :class="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
              <v-icon :left="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                mdi-account-plus
              </v-icon>
              
              {{!$vuetify.breakpoint.xs  && !$vuetify.breakpoint.sm ? 'Class Invites' : ''}}
            </v-tab> -->

            <!-- <v-tab @click="notificationType = 'Hidden',notifTypeName = 'hidden', getNotificationList()" 
            :class="!$vuetify.breakpoint.xs  && !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
              <v-icon :left="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm">
                mdi-eye-off
              </v-icon>
              {{!$vuetify.breakpoint.xs  && !$vuetify.breakpoint.sm ? 'Hidden' : ''}}
            </v-tab> -->

          
          </v-tabs>
        </v-col>

        <v-col cols="12" md="9">

      
                 <v-list >

                  <!--  <v-list-item v-if="isGetting">
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
                    </v-list-item> -->

                <div >

           
                  <!--  <v-list-item v-if="notifLength != 0" >
                        <v-list-item-content>
                          <div class="d-flex justify-space-between">
           
                            <div class="body-1 text-uppercase">{{notifTypeName}}</div>
                              <v-btn v-if="get_notification_count != 0 && !isGetting" @click="markAllasRead" small color="primary">
                                Mark all as read
                                <v-icon  right>mdi-check</v-icon> 
                              </v-btn>
                          </div>
                        </v-list-item-content>
                    </v-list-item> -->


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
                    

                    <v-list-item   v-for="(item, index) in get_invites" :key="index">
                        

                            
                        <v-list-item-avatar >
                            <v-icon color="blue" large>mdi-account-plus</v-icon>
                           
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
                                 <a class="blue--text" @click.prevent="acceptJoin(item.notification_attachments,item.n_id, index)" href="" v-if="item.notification_type == 3 && item.notification_accepted == 0" link>
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

                   <!--  <v-list-item v-if="LastPage != 1" >
                        <v-list-item-content>
                            <v-row align-content="center" justify="center">
                                <v-col cols="12" class="text-right">
                            
                                      <v-btn v-if="ShowLoadMore"  @click="ShowMore"  rounded text color="primary">Load More  <v-icon  right>mdi-chevron-down</v-icon> </v-btn>
                                </v-col>
                               
                            </v-row>
                            
                        </v-list-item-content>
                    </v-list-item> -->
                    </div>
                </v-list>
     
      
        </v-col>
      </v-row>
          
 
    </div>
  
  </v-card>
</div>
 
</template>

<script>
import moment from 'moment/src/moment'
import { mapGetters,mapActions } from "vuex";
export default {
  data(){
    return{
      notificationType: 'all',
      notifTypeName: 'all',
      notificationList: {},
      notifLength: null,
      isSelected: null,
      currentSelectedType: null,
      AttachData: {},
      isAccepted: false,
        form: new Form({
            class_code: ""
        }),

    }
  },
  computed: mapGetters(["get_invites"]),
  methods:{
   ...mapActions(['fetchClassInvites','LessInviteCount']),

    
    
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
        this.$store.dispatch("fetchClassInvites", 3)
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
         //console.log(res);
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
     acceptJoin(class_code, id, index){
                this.form.class_code = class_code
                   this.$store.dispatch("joinClass", this.form).then(res => {
                    if(res.status == 200){
                        this.isAccepted = true;
                         this.toastSuccess(res.data.message);
                         
                         this.AttachData.id = id;
                        this.AttachData.accepted = this.isAccepted;
                        this.$store.dispatch("markAsReadNotification", this.AttachData);

                         this.$store.dispatch("LessInviteCount");
                         this.$router.push({name: 'announcement', params: {id: res.data.course_id}})
                    }
                    else if(res.status == 202){
                        this.isAccepted = true;
                        this.toastError(res.data.message);
                          this.AttachData.id = id;
                        this.AttachData.accepted = this.isAccepted;
                        this.$store.dispatch("markAsReadNotification", this.AttachData);
                        
                         this.$store.dispatch("LessInviteCount");
                         this.$router.push({name: 'announcement', params: {id: res.data.course_id}})
                    }
                    else{
                        this.toastError('Something went wrong while joining the class!');
                    }
                    //this.get_notification.splice(index, 1);
                });
            },
         
  },
  mounted(){
    //this.fetchNotification();
   
    this.getNotificationList();
  }
  
}
</script>