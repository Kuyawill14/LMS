<template>
<div>
   <v-card flat max-height="600" class="pa-0 ma-0">
    <v-card-title>
      <span class="text-h6">Notifications 
        <v-icon right="">
            mdi-bell
        </v-icon></span>
    </v-card-title>
        
    <div class="pl-2 pr-2">
      

      <v-row no-gutters>
        <v-col class="pa-0 ma-0 mb-2" cols="12">
            <v-divider></v-divider>
        </v-col>

        <v-col cols="12" md="2">
          <v-tabs active-class 
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows 
          
           :vertical="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
          :centered="$vuetify.breakpoint.xs && $vuetify.breakpoint.sm"
         >
              <v-tab @click="notificationType = 'all', notifTypeName = 'all', getNotificationList()" 
              :class="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
                <v-icon :left="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                 mdi-bell
                </v-icon>
                {{!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'All' : ''}}
                
            </v-tab>
            <v-tab  @click="notificationType = 1,notifTypeName = 'announcement', getNotificationList()" 
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
            </v-tab>
            <v-tab @click="notificationType = 3,notifTypeName = 'class-invites', getNotificationList()" 
            :class="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
              <v-icon :left="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                mdi-account-plus
              </v-icon>
              
              {{!$vuetify.breakpoint.xs  && !$vuetify.breakpoint.sm ? 'Added class' : ''}}
            </v-tab>

            <v-tab @click="notificationType = 'Hidden',notifTypeName = 'hidden', getNotificationList()" 
            :class="!$vuetify.breakpoint.xs  && !$vuetify.breakpoint.sm ? 'd-flex justify-start' : ''">
              <v-icon :left="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm">
                mdi-eye-off
              </v-icon>
              {{!$vuetify.breakpoint.xs  && !$vuetify.breakpoint.sm ? 'Hidden' : ''}}
            </v-tab>

          
          </v-tabs>
        </v-col>

        <v-col cols="12" md="9">
                  <div v-if="isGetting">
     
                        <v-skeleton-loader   max-width="200" type="text"></v-skeleton-loader>
          
                     <v-skeleton-loader v-for="n in 4" :key="n"  max-width="600" type="list-item-avatar-two-line"></v-skeleton-loader>
                  </div>
      
                 <v-list v-else>       
                   <v-list-item v-if="notifLength != 0" >
                        <v-list-item-content>
                          <div class="d-flex justify-space-between">
           
                            <div class="body-1 text-uppercase">{{notifTypeName}}</div>
                              <v-btn v-if="get_notification_count != 0 && !isGetting" @click="markAllasRead" small color="primary">
                                Mark all as read
                                <v-icon right>mdi-check</v-icon> 
                              </v-btn>
                          </div>
                        </v-list-item-content>
                    </v-list-item>


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
                    
                   <template v-for="(item, index) in get_notification">
                    <v-list-item link :class="item.status == null || item.status == 0 ? 'grey_active' : ''"    :key="item.id">                  
                        <v-list-item-avatar @click="GotoThisNotification(item)" >
                            <v-icon color="blue" v-if="item.notification_type == 3 || item.notification_type == 2" large>mdi-account-plus</v-icon>
                            <v-icon color="red" v-if="item.notification_type == 1" large>mdi-bullhorn-outline</v-icon>
                                <v-icon color="green" v-if="item.notification_type == 4" large> mdi-book-open-variant</v-icon>
                                <v-icon color="red" v-if="item.notification_type == 5" large> mdi-comment-text</v-icon>
                                <v-icon color="green" v-if="item.notification_type == 6" large> mdi-notebook-check</v-icon>
                                <v-icon color="green" v-if="item.notification_type == 7" large>mdi-file-check</v-icon>
                        </v-list-item-avatar>
                      
                
                        <v-list-item-content @click="GotoThisNotification(item)">
                            
                            <v-list-item-title  class="font-weight-medium">
                                <v-badge :content="item.status == 1 ? '' :'new'" :value="item.status == 1 ? '' :'new'" 
                                :color="item.notification_type == 1 || item.notification_type == 5 ? 'red' : item.notification_type == 3 || item.notification_type == 2 ? 'blue' : 
                                item.notification_type == 4 || item.notification_type == 6 || item.notification_type == 7 ? 'green' : ''" >
                                {{ item.notification_type != 2 && item.notification_type != 6 ? item.name : item.notification_type == 6 ? 'Classwork Submission' : 'Join Class'}} 
                                </v-badge>
                                </v-list-item-title>
                           
                            <div class="body-2">
                                {{item.message}}
                            </div>
                            <small>{{format_date(item.created_at)}}</small>
                                 
                        </v-list-item-content>
             
                        <v-list-item-action style="z-index: 1">
                           

                             <!-- <v-tooltip v-if="item.status == null || item.status == 0"  top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn style="z-index:50" text icon v-bind="attrs" v-on="on"
                                        v-if="item.status == null || item.status == 0" @click="markAsread(item.n_id)">
                                      
                                   <v-icon>mdi-check</v-icon>
                                    </v-btn>
                                </template>
                          
                                <span>Mark as read</span>
                            </v-tooltip>
 -->
                           <!--  <v-tooltip v-if="item.status == 1" top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn style="z-index:50" text icon v-bind="attrs" v-on="on"
                                        v-if="item.status == 1" @click="NotificationHide(item.n_id)">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </template>
                                <span>Hide notification</span>
                            </v-tooltip> -->


                              <v-list-item-action-text >
                                        <v-tooltip  top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn small style="z-index:50" icon v-bind="attrs" v-on="on"
                                                    @click="NotificationHide(item.n_id, index, item.status)">
                                                    <v-icon small>mdi-close</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Hide notification</span>
                                        </v-tooltip>
                                    </v-list-item-action-text>
                                    <v-spacer></v-spacer>
                           
                        </v-list-item-action>
                    </v-list-item>
                      <v-divider
                              v-if="index < get_notification.length "
                              :key="index">
                              </v-divider>
                   </template>

                    <v-list-item v-if="LastPage != 1" >
                        <v-list-item-content>
                            <v-row align-content="center" justify="center">
                                <v-col cols="12" class="text-right">
                            
                                      <v-btn v-if="ShowLoadMore"  @click="ShowMore"  rounded text color="primary">Load More  <v-icon  right>mdi-chevron-down</v-icon> </v-btn>
                                </v-col>
                               
                            </v-row>
                            
                        </v-list-item-content>
                    </v-list-item>
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
 
    }
  },
  computed: {
    ...mapGetters(["get_notification", "get_notification_count","ShowPage","ShowLoadMore","LastPage","isGetting"]),
    
   /*  notificationList(){
      
      if(this.notificationType == 'all'){
        return this.get_notification;
      }
      else if(){
         Filterddata =  Filterddata.filter((item) => {
            if(this.Class == this.$route.params.id){
                return (item.status == "Submitted")
            }
            else{
                return (item.status == "Submitted" && item.class_id == this.Class)
            }
            
        })
      }
      
    } */

  },

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
      if(this.$route.params.slug != this.notifTypeName){
        this.$router.replace({ params: { slug: this.notifTypeName } })
      }

      if(this.currentSelectedType != this.notificationType){
     
          //this.$router.replace({ params: { slug: this.notifTypeName } })
        this.currentSelectedType = this.notificationType;
           this.$store.dispatch("fetchNotification", this.notificationType )
      }
    
    },
    NotificationHide(id, index, status) {
       this.$store.dispatch("HideNotification", id)
       .then(res=>{
          if(res == 200){
            this.get_notification.splice(index, 1);
            if(status != 1){
                this.$store.dispatch("LessNotificationCount");
            }
          
          }
       })
      },
    
     markAsread(id) {
       this.AttachData.id = id;
       this.AttachData.accepted = this.isAccepted;
       this.$store.dispatch("markAsReadNotification", this.AttachData)
       .then(res=>{
         ////console.log(res);
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
     GotoThisNotification(data){
                if(data.status == null || data.status == 0){
                    this.markAsread(data.n_id);
                }

                if(data.notification_type == 4){
                    let startPath = '/classwork/'+data.c_id+'/classwork-details';
                    if(this.$route.path != startPath){
                        this.$router.push({path: '/classwork/'+data.c_id+'/classwork-details?clwk='+data.notification_attachments});
                    }else{
                        if(this.$route.query.clwk != data.notification_attachments){
                            this.$router.push({path: '/classwork/'+data.c_id+'/classwork-details?clwk='+data.notification_attachments});
                        }
                    }
                }
                else if(data.notification_type == 1 || data.notification_type == 3){
                    let path = '/course/'+data.c_id+'/announcement';
                    if(this.$route.path != path){
                        this.$router.push({path: path});
                    }
                    
                }
                else if (data.notification_type == 6){
                     let SubmissionPath = '/classwork/'+data.c_id+'/classwork-details';
                      if(this.$route.path != SubmissionPath){
                            this.$router.push({path: '/classwork/'+data.c_id+'/submission-list?clwk='+data.notification_attachments});
                        }else{
                            if(this.$route.query.clwk != data.notification_attachments){
                                this.$router.push({path: '/classwork/'+data.c_id+'/submission-list?clwk='+data.notification_attachments});
                            }
                        }
                }
                else if(data.notification_type == 7){
                  let startPath = '/classwork/'+data.from_course+'/classwork-details';
                    if(this.$route.path != startPath){
                        this.$router.push({path: '/classwork/'+data.from_course+'/classwork-details?clwk='+data.notification_attachments});
                    }else{
                        if(this.$route.query.clwk != data.notification_attachments){
                            this.$router.push({path: '/classwork/'+data.from_course+'/classwork-details?clwk='+data.notification_attachments});
                        }
                    }
                }
            },
         
  },
  mounted(){
    //this.fetchNotification();
   
    this.getNotificationList();
  }
  
}
</script>