<template>
<div>
     

     <v-row>
        <v-col cols="12" class="mb-0 pb-0">
            <div :class="$vuetify.breakpoint.lgAndUp ? 'text-h6 font-weight-bold': 'font-weight-bold'">COURSES</div> 
        </v-col>

        <v-col cols="12">
            <v-divider></v-divider>
        </v-col>

        <v-col cols="12"  style="height:550px" v-if="isloading">
            <v-container class="fill-height" v-if="isloading" >
                <vue-element-loading :active="isloading" 
                text="Loading"
                duration="0.7"
                :textStyle="{fontSize: '20px'}"
                spinner="line-scale" color="#EF6C00"  size="60" />
            </v-container>
        </v-col>

        
        <v-col v-if="!isloading"  cols="12">
         
             <v-row>
                 <v-col cols="6" md="3" lg="3" v-for="(item) in details" :key="item.course_id">
                    <v-card
                        style="border-top: 3px solid #EF6C00;cursor:pointer"
                        class="mx-auto"
                        max-width="344"
                        outlined
                    >
                        <v-list-item>
                        <v-list-item-content style="max-height:30px;overflow:hidden">
                              <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                     <div  v-bind="attrs" v-on="on" class="text-center blue--text">
                                        {{item.course_code +' - '+item.course_name}}
                                    </div>
                                </template>
                                <span>{{item.course_code +' - '+item.course_name}}</span>
                                </v-tooltip>
                           
                        </v-list-item-content>
                        </v-list-item>

                  
                 
                            <div class="text-center pl-4 pr-4">
                                <v-divider></v-divider>
                            </div>
                   


                      

                           <v-list-item>
                        <v-list-item-content >
                            <div class="pa-2">
                                <div class="text-center">
                                {{UserDetails.role != 'Teacher' ? item.progress+'%' : item.student_count}}
                                </div>

                              

                                <div v-if="UserDetails.role != 'Teacher'" class="text-center pb-1 pt-1">
                                 <v-progress-linear v-if="UserDetails.role != 'Teacher'" :value="item.progress" height="4" class="rounded-sm">
                                    </v-progress-linear>
                                </div>
                                  <div class="text-center">
                                {{UserDetails.role != 'Teacher' ? 'Progress' : 'Students'}}
                                </div>
                                
                             </div>
                          
                        </v-list-item-content>
                        </v-list-item>

                   
                           <div class="text-center pl-4 pr-4">
                                <v-divider></v-divider>
                            </div>

                           <v-list-item>
                        <v-list-item-content>
                            <div class="text-center overline">
                            {{UserDetails.role != 'Teacher' ? '':'Classworks '+item.classwork_count}}
                            </div>
                        </v-list-item-content>
                        </v-list-item>
                        

                       <!--  <v-card-actions>
                        <v-btn outlined rounded text>
                            View
                        </v-btn>
                        </v-card-actions> -->
                    </v-card>
                 </v-col>
               
             </v-row>
        </v-col>
      
     
    </v-row>
</div>
</template>
<script>
 import {
        mapGetters,
        mapActions
    } from "vuex";
export default {
    props:['UserDetails'],
    data(){
        return{
            isloading: true,
            coursesLength: null,
            details:[]
        }
    },
    computed: mapGetters(['allCourse','allClass']),
    methods:{
         async fetchCourses() {
           axios.get('/api/profile/ClassesList')
           .then(res=>{
               this.details = res.data;
               this.isloading = false;
           })
        },
    },
    beforeMount(){
        this.fetchCourses();
    }

}
</script>