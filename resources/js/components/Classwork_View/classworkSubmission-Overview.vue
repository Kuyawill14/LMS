<template>
  
        <v-container fluid ma-0 pa-0>
          <v-row no-gutters align="center" justify="center">
              <v-col cols="12" class="mb-0">
                   <v-card elevation="2" outlined class="pl-2 pr-4 pb-2">
                           <v-list>
                               <v-list-item>
                                   <v-list-item-avatar size="52" color="primary">
                                       <v-icon color="white" size="30"> 
                                           mdi-book-open-variant
                                       </v-icon>
                                   </v-list-item-avatar>
                                   <v-list-item-content>
                                       <v-list-item-title style="font-size:22px" class="font-weight-bold">
                                           {{classworkDetails.title}}
                                       </v-list-item-title>
                                       <v-list-item-subtitle class="font-weight-medium">
                                           Created: {{ format_date(classworkDetails.created_at)}}
                                       </v-list-item-subtitle>
                                     
                                   </v-list-item-content>
                                     <v-list-item-action>
                                            <v-list-item-action-text>
                                                <v-btn  @click="$emit('closeDialog')" small text rounded >
                                                    <v-icon small>mdi-close</v-icon> Close
                                                </v-btn>  
                                            </v-list-item-action-text>
                                             <v-spacer></v-spacer>
                                          
                                       </v-list-item-action>
                               </v-list-item>
                           </v-list>
                       </v-card>
              </v-col>
              <v-col cols="12" md="10" class="mt-3">
                   <v-card elevation="2" outlined class="pt-3 pb-2">
                  <v-row>
                      <v-col cols="12" md="4">
                        <v-tabs v-model="activeTab" slider-size="4" fixed-tabs  color="primary">
                            <v-tab>
                                Classwork Overview
                            </v-tab>
                            <v-tab>
                                Student Submission
                            </v-tab>
                        </v-tabs>
                      </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row>
                      <v-col cols="12" class="pa-5 mb-0">
                          <v-row class="pt-3 pl-3 pr-3">
                              <v-col class="text-left" cols="12" md="2">
                                <v-select 
                                @change="filterOverview()"
                                v-model="class_id"
                                 :items="ClassList"
                                hide-details
                                item-text="class_name"
                                item-value="class_id"
                                outlined dense  label="Class">
                                </v-select>
                              </v-col>
                               <v-col class="text-right" cols="12" md="10">
                                  <div class="d-flex justify-end mt-2">
                                     Total Points: <span class="font-weight-medium pl-1">{{classworkDetails.points}}</span> 
                                    </div>
                              </v-col>
                          </v-row>
                          <v-row>
                              <v-col cols="12" class="pt-0 mt-0">
                                    <v-divider></v-divider>
                              </v-col>
                          </v-row>
                      </v-col>

                      <v-col cols="12" class="mt-0 pt-0">
                            <v-tabs-items v-model="activeTab">
                                <v-tab-item>
                                    <v-row>
                                        <v-col cols="12">
                                             
                                            <div class="d-flex justify-center">
                                                 <v-spacer></v-spacer>
                                                <v-spacer></v-spacer>
                                                <div class="text-center pa-2">
                                                    <h1 class="display-2" >{{Submitted}}</h1>
                                                    <span>Submitted</span>
                                                </div>
                                                <v-spacer></v-spacer>
                                                 <div class="text-center pa-2">
                                                    <h1 class="display-2">{{Graded}}</h1>
                                                    <span>{{classworkDetails.type == 'Objective Type' ? 'Taking' : 'Graded'}}</span>
                                                </div>
                                                 <v-spacer></v-spacer>
                                                 <div class="text-center pa-2">
                                                    <h1 class="display-2">{{No_submission}}</h1>
                                                    <span>No submission</span>
                                                </div>
                                                 <v-spacer></v-spacer>
                                                  <v-spacer></v-spacer>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-tab-item>
                                 <v-tab-item class="pr-2">
                                    <submissionList :class_id="class_id" :List="List" :classworkDetails="get_classwork_show_details.Details" ></submissionList>
                                </v-tab-item>
                            </v-tabs-items>
                      </v-col>
                  </v-row>
                 
                     
                  </v-card>
              </v-col>
          </v-row>
                  
               
                
           
               
           
       </v-container>
 
</template>

<script>
const submissionList = () => import('./tabs/submissionListTabcopy')
import moment from 'moment-timezone';
import {mapGetters, mapActions } from "vuex";
export default {
    props:['role','UserDetails'],
    components:{
        submissionList
    },
    data(){
        return{
            activeTab: null,
            tabs: null,
            ClassList: [],
            class_id: null,
            classworkDetails: [],
            Graded: 0,
            Submitted: 0,
            No_submission: 0,
            List:[],
        }
    },
     computed: {
      ...mapGetters(["get_classwork_show_details"]),
  },
  methods:{
       format_date(value) {
            if (value) {
                //return moment(String(value)).format('MM/d/YYYY, hh:mm A');
                return moment(String(value)).tz("Asia/Manila").format('MM/d/YYYY, hh:mm A');
                
            }
        },
       getClassworkDetails(){
             let data = {classwork_id : this.$route.query.clwk, course_id : this.$route.params.id}
            this.$store.dispatch('fetchClassworkShowDetails',  data)
            .then(()=>{
                this.classworkDetails = this.get_classwork_show_details.Details;
              
            })
        },
        async FetchCLassNames(){
            await axios.get('/api/class/allnames/'+this.$route.params.id+'/'+0)
            .then(res=>{
                this.ClassList = res.data;
                this.class_id = res.data[0].class_id;
                
            })
        },
        async GetList(){
         
            axios.get('/api/submission/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data;
                 res.data.forEach(item => {
                     if(this.class_id == item.class_id){
                          if(item.status == 'Submitted' && item.graded == 0){
                            this.Submitted +=1;
                        }
                        else if(item.status == 'Submitted' && item.graded == 1){
                            this.Graded +=1;
                        }
                        else{
                            this.No_submission++;
                        }
                     }
                   
                   
                });
                this.isloading = !this.isloading;
            })
            
        },
        filterOverview(){
            this.Submitted = 0;
            this.Graded = 0;
            this.No_submission = 0;

            this.List .forEach(item => {
                 if(this.class_id == item.class_id){
                          if(item.status == 'Submitted' && item.graded == 0){
                            this.Submitted +=1;
                        }
                        else if(item.status == 'Submitted' && item.graded == 1){
                            this.Graded +=1;
                        }
                        else{
                            this.No_submission++;
                        }
                     }
            });
        }
  },
    mounted() {
      
            this.FetchCLassNames();
            this.getClassworkDetails();
            this.GetList();
            
    
    },
}
</script>
