<template>
  
        <v-container fluid ma-0 pa-0>
            <v-row no-gutters>
                <v-col cols="12" class="ma-0 pa-0 mt-0 pt-0">

            
            
                <v-tabs  rounded v-if="classworkDetails.type == 'Objective Type'"
                next-icon="mdi-arrow-right-bold-box-outline"
                prev-icon="mdi-arrow-left-bold-box-outline"
                show-arrows 
                :centered="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                :icons-and-text="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                 v-model="activeTab">
                    <v-tabs-slider color="primary"></v-tabs-slider>     
                        <v-tab class="d-flex justify-start" v-for="(item,index) in ObjectIveTabs" :key="index"
                        :to="{name: item.name, query: {clwk: $route.query.clwk}}">
                        {{$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '' : item.text}}
                            <v-icon right>
                            {{item.icon}}
                            </v-icon>
                        </v-tab>  
                 </v-tabs>

         

                 <v-tabs  rounded v-if="classworkDetails.type == 'Subjective Type'"
                next-icon="mdi-arrow-right-bold-box-outline"
                prev-icon="mdi-arrow-left-bold-box-outline"
                show-arrows  
                :centered="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                :icons-and-text="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" v-model="activeTab">
                    
                        <v-tab class="d-flex justify-start" v-for="(item,index) in SubjectiveTabs" :key="index"
                        :to="{name: item.name, query: {clwk: $route.query.clwk}}">
                        {{$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '' : item.text}}
                            <v-icon right>
                            {{item.icon}}
                            </v-icon>
                        </v-tab>  
                 </v-tabs>

               <!--  <div v-if="classworkDetails.type == 'Subjective Type' && !$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm">
                <v-navigation-drawer  :permanent="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm" :floating="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm" >
                    <v-list dense nav >
                        <v-list-item
                        v-for="(item,index) in SubjectiveTabs" :key="index"
                        :to="{name: item.name, query: {clwk: $route.query.clwk}}"
                        link
                        >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
                 </div> -->
                  </v-col>

                  <v-col class="ma-0" cols="12">
                        <v-tabs-items :value="activeTab">
                        <div class="mt-3" >
                            <router-view :classworkDetails="classworkDetails"></router-view>
                        </div>
                    </v-tabs-items>
                  </v-col>
            </v-row>
               
                  
               
                
           
               
           
       </v-container>
 
</template>

<script>
export default {
    props:['classworkDetails'],
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
}
</script>