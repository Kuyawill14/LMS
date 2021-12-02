<template>
    <div>

       
        <!-- <v-row v-if="isGetting" align-content="center" style="margin-top: 10rem" justify="center">
            <v-col class="text-subtitle-1 text-center" cols="12">
                Loading Classworks
            </v-col>
            <v-col cols="6">
                <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
            </v-col>
        </v-row>
 -->
         <v-row v-if="isGetting"  >
            <v-col v-for="n in 6" :key="n" cols="12" md="4" >
                <v-card elevation="0" class="pa-4">
                     <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
                </v-card>
            </v-col>
        </v-row>
        
        <v-row v-if="!isGetting && classworkList.length == 0" style="margin-top: 7rem" align="center" justify="center" class="pt-10" >
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:7rem">
                    mdi-book-open-variant
                </v-icon>
                <h2> Empty Classwork </h2>
            </v-col>
        </v-row>


        <v-row v-if="!isGetting &&  classworkList.length != 0"    >
            <v-col cols="12" md="6" lg="4" xl="4" v-for="(item, index) in classworkList" :key="index">
                <v-expansion-panels focusable>
                    <v-expansion-panel  class="ma-0 pa-0">
                        <v-expansion-panel-header  class="ma-0 pa-0 pa-2" disable-icon-rotate hide-actions>
                                <v-list>
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-avatar size="50"
                                            color="blue">
                                                <v-icon  color="white" >
                                                mdi-book-open-variant
                                            </v-icon>
                                        </v-avatar>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title style="width:10px" >
                                            {{item.title}}<small class="primary--text">({{item.points == null ? 0+'points' : item.points+'points'}})</small>
                                        </v-list-item-title>
                                        <v-list-item-subtitle>
                                            Created: {{format_date(item.created_at)}}
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-menu  bottom offset-y>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                icon
                                                v-bind="attrs"
                                                v-on="on" >
                                                <v-icon >mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        
                                            </template>
                                        
                                            <v-list rounded >
                                                <v-list-item link ma-0 pa-0>
                                                    <v-list-item-title><v-icon left>mdi-eye</v-icon>View</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                                


                                
                        </v-expansion-panel-header>
                    <!--  </v-hover> -->
                    <v-expansion-panel-content id="extend" class=" expand ma-0 pa-0 mt-3">
                        <v-row no-gutters>
                            <v-col cols="8" class=" pl-5" >
                                <!-- <div  class="mb-5 ml-5 text-caption">{{item.instruction}}</div> -->
                                  <!--  <span class="mb-5 text-sm-body-2 " v-html="item.instruction"></span> -->
                                <v-row no-gutters class="pt-2">
                                    <v-col cols="12"  >
                                        <div  class="ml-5 font-weight-bold ">Publish to class:</div>
                                    </v-col>
                                    <v-col cols="12"  >
                                    <v-list class="pt-0 pb-0">
                                        <v-list-item v-for="(item, i) in item.publish_in" :key="i">
                                            <v-list-item-avatar >
                                                <v-icon>mdi-account-multiple</v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content class="pl-0">
                                                <v-list-item-title class="font-weight-medium">
                                                    {{item.class_name}}
                                                </v-list-item-title>
                                                <v-list-item-subtitle>
                                                    <span class="font-weight-medium">Due:</span>
                                                    {{item.availability == 1 ? format_date(item.to_date) : 'Always available'}}
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                    </v-col>
                                </v-row>
                            </v-col>
                                <v-col cols="4" class="pl-3">
                                    <div class="flex-column">
                                        <h1 class="mb-0 pb-0">{{item.submittion_count ? item.submittion_count : 0}}</h1>
                                        <small class="mt-0 pt-0">Submitted</small>
                                    </div>
                            </v-col>
                        </v-row>

                      
                        
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>

    </div>
</template>
<script>
 import moment from 'moment/src/moment';
export default {
    props: ['course_details'],
    data(){
        return{
            classworkList:[],
            isGetting: true,
              teacher_id: '',
        }
    },
 
    methods:{
         format_date(value) {
            if (value) {
                return moment(String(value)).format('MMMM Do YYYY, hh:mm A')
            }
        },
        async GetCourseClassworkList(){
            axios.get('/api/admin/teachers/classworkList/'+this.course_details.course_id)
            .then(res=>{
                this.classworkList = res.data;
                setTimeout(() => (this.isGetting = false), 700);
            })
        }

    },
    beforeMount(){
        this.GetCourseClassworkList();
      
    },
 /*    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.GetCourseClassworkList();
        });
    }, */

    


}
</script>
<style >
    span img{
        max-width: 100% !important;
        max-height: 15rem !important;
    }
</style>