<template>
  
        <v-container fluid ma-0 pa-0>
            <v-row no-gutters>
                <v-col cols="12" :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'ma-0 pa-0 mt-0 pt-0' : 'ma-0 pa-0 mt-0 pt-0 pr-7 d-flex'">
                     <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn rounded
                                    v-bind="attrs"
                                    v-on="on"
                                    icon 
                                    text 
                                    :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ?  'mb-0 pb-0' : ' mt-1 ml-2'"
                                    @click="$router.push({name: 'classwork'})" >
                                <v-icon dark>mdi-arrow-left-thick</v-icon>
                                </v-btn>
                            </template>
                            <span>Back to classworks</span>
                        </v-tooltip>
                  
            
                <v-tabs  rounded v-if="classworkDetails.type == 'Objective Type'"
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
                      <!--   {{$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '' : item.text}} -->
                            
                        </v-tab>  
                 </v-tabs>
                

         

                 <v-tabs  rounded v-if="classworkDetails.type == 'Subjective Type'"
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
                  </v-col>
                  <v-col class="ma-0" cols="12">
                       <v-divider></v-divider>
                        <v-tabs-items :value="activeTab">
                        <div class="mt-3" >
                            <router-view :totalPoints="totalPoints" :totalQuestion="totalQuestion" :classworkDetails="classworkDetails"></router-view>
                        </div>
                    </v-tabs-items>
                  </v-col>
            </v-row>
       </v-container>
</template>

<script>
export default {
    props:['classworkDetails','totalPoints','totalQuestion'],
    data(){
        return{
            activeTab: "",
            ObjectIveTabs: [
                { name: "clwk", text: "CLASSWORK DETAILS", icon:"mdi-file-cog"},
                { name: "add-question", text: "ADD QUESTION", icon:"mdi-text-box-plus-outline"}, 
                { name: "question-list", text: "QUESTION LIST", icon:"mdi-clipboard-list"},
                { name: "publish-to", text: "PUBLISH TO", icon:"mdi-publish"},
                { name: "submission-list", text: "SUBMISSION LIST", icon:"mdi-notebook-check-outline"},
                { name: "question-analytics", text: "QUESTION ANALYTICS", icon:"mdi-google-analytics"},
               
            ],
            SubjectiveTabs: [
                 { name: "clwk", text: "CLASSWORK DETAILS", icon:"mdi-file-cog"},
                { name: "publish-to", text: "PUBLISH TO", icon:"mdi-publish"},
                { name: "submission-list", text: "SUBMISSION LIST", icon:"mdi-notebook-check-outline"},
              
            ],
            tabs: null,
        }
        
    },
    created(){
          this.$emit('isMounted');
    }
  
   
}
</script>
