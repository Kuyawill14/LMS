<template>
  <div>
      


        <v-container fluid ma-0 pa-0>
            <v-row no-gutters>
                <v-col  v-if="!get_Viewing" cols="12" :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'mt-0 pt-0' : 'mt-0 pt-0'">
                   <!--  <v-card  :elevation="2" class="d-flex pa-1" outlined>

                       <v-tooltip v-if="$vuetify.breakpoint.mdAndUp" top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn rounded
                                    v-bind="attrs"
                                    v-on="on"
                                    icon 
                                    text 
                                        v-if="$vuetify.breakpoint.mdAndUp"
                                    :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ?  'mb-0 pb-0' : ' mt-1 ml-2'"
                                    @click="$router.push({name: 'classwork'})" >
                                <v-icon dark>mdi-arrow-left-thick</v-icon>
                                </v-btn>
                            </template>
                            <span>Back to classworks</span>
                        </v-tooltip> -->

                    <v-app-bar :dense="$vuetify.breakpoint.mdAndUp" :app="$vuetify.breakpoint.mdAndUp">
                        <v-tooltip v-if="$vuetify.breakpoint.mdAndUp" top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn rounded
                                    v-bind="attrs"
                                    v-on="on"
                                    icon 
                                    text 
                                        v-if="$vuetify.breakpoint.mdAndUp"
                                    :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ?  'mb-0 pb-0' : ' mt-1 ml-2'"
                                    @click="$router.push({name: 'classwork'})" >
                                <v-icon dark>mdi-arrow-left-thick</v-icon>
                                </v-btn>
                            </template>
                            <span>Back to classworks</span>
                        </v-tooltip>
                    
                    <v-tabs   rounded v-if="classworkDetails.type == 'Objective Type'"
                    next-icon="mdi-arrow-right-bold-box-outline"
                    prev-icon="mdi-arrow-left-bold-box-outline"
                    show-arrows 
                    :icons-and-text="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                    centered
                    fixed-tabs
                    v-model="activeTab">
                    
                            <v-tabs-slider color="primary"></v-tabs-slider>  
                            <v-tab class="d-flex justify-center" v-for="(item,index) in ObjectIveTabs" :key="index"
                            :to="{name: item.name, query: {clwk: $route.query.clwk}}">
                            <div :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'line-height: 1.2' : ''" :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'text-caption' : ''">{{item.text}}</div>
                            <v-icon :right="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ">
                                {{item.icon}}
                            </v-icon>
                            </v-tab>  
                    </v-tabs>

                   
                    
                        <v-tabs   rounded v-if="classworkDetails.type == 'Subjective Type'"
                        next-icon="mdi-arrow-right-bold-box-outline"
                        prev-icon="mdi-arrow-left-bold-box-outline"
                        show-arrows  
                        :icons-and-text="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                        fixed-tabs
                        centered
                        v-model="activeTab">
                                <v-tabs-slider color="primary"></v-tabs-slider>  
                                <v-tab class="d-flex justify-center" v-for="(item,index) in SubjectiveTabs" :key="index"
                                :to="{name: item.name, query: {clwk: $route.query.clwk}}">
                                <div :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'line-height: 1.2' : ''" :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'text-caption' : ''">{{item.text}}</div>
                                <v-icon :right="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ">
                                    {{item.icon}}
                                </v-icon>
                            
                                </v-tab>  
                        </v-tabs>
                     </v-app-bar>
                   <!--  </v-card> -->
                  </v-col>
                  <v-col class="ml-0 mr-0 mb-0 mt-1" cols="12">
                   
                        <v-tabs-items :value="activeTab">
                        <div :class="!get_Viewing ? 'mt-3' : 'mt-0 pt-0'" >
                            <router-view :datetoday="datetoday" :totalPoints="totalPoints" :totalQuestion="totalQuestion" :classworkDetails="classworkDetails"></router-view>
                        </div>
                    </v-tabs-items>
                  </v-col>
            </v-row>
       </v-container>

         <!-- <v-bottom-navigation app grow
         v-if="!$vuetify.breakpoint.mdAndUp && classworkDetails.type == 'Subjective Type'"
        
        color="primary" >
        <v-btn small :to="{name: item.name, query: {clwk: $route.query.clwk}}" v-for="(item,index) in SubjectiveTabs" :key="index">
            <span >
                {{item.text == 'CLASSWORK DETAILS' ? 'DETAILS' : item.text == 'SUBMISSION LIST' ? 'SUBMISSION' : item.text}}
            </span>
            <v-icon small>{{item.icon}}</v-icon>
        </v-btn>
        </v-bottom-navigation> -->


  </div>
</template>

<script>
 import {mapGetters } from "vuex";
export default {
    props:['classworkDetails','totalPoints','totalQuestion','datetoday'],
    data(){
        return{
            activeTab: "",
            ObjectIveTabs: [
                { name: "clwk", text: "DETAILS", icon:"mdi-file-cog"},
                { name: "add-question", text: "QUESTION", icon:"mdi-text-box-plus-outline"}, 
                //{ name: "question-list", text: "QUESTION LIST", icon:"mdi-clipboard-list"},
                { name: "publish-to", text: "PUBLISH", icon:"mdi-publish"},
                { name: "submission-list", text: "SUBMISSIONS", icon:"mdi-notebook-check-outline"},
                { name: "question-analytics", text: "ANALYTICS", icon:"mdi-google-analytics"},
               
            ],
            SubjectiveTabs: [
                 { name: "clwk", text: "DETAILS", icon:"mdi-file-cog"},
                { name: "publish-to", text: "PUBLISH", icon:"mdi-publish"},
                { name: "submission-list", text: "SUBMISSIONS", icon:"mdi-notebook-check-outline"},
              
            ],
            tabs: null,
        }
        
    },
    computed: {
        ...mapGetters(["get_Viewing"]),
    },
    methods:{
        GotoRoute(Routename){
            this.$router.push({name: Routename, query: {clwk: this.$route.query.clwk}})
        }
    },
    created(){
          this.$emit('isMounted');
    }
  
   
}
</script>
