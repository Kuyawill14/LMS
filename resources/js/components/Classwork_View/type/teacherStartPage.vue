<template>
    <v-app>
                <v-tabs rounded v-if="classworkDetails.type == 'Objective Type'"
                next-icon="mdi-arrow-right-bold-box-outline"
                prev-icon="mdi-arrow-left-bold-box-outline"
                show-arrows centered icons-and-text v-model="activeTab">
                    <v-tabs-slider color="primary"></v-tabs-slider>     
                        <v-tab  v-for="(item,index) in ObjectIveTabs" :key="index"
                        :to="{name: item.name, query: {clwk: $route.query.clwk}}">
                        {{$vuetify.breakpoint.xs ? '' : item.text}}
                            <v-icon left>
                            {{item.icon}}
                            </v-icon>
                        </v-tab>  
                 </v-tabs>

                 <v-tabs rounded v-if="classworkDetails.type == 'Subjective Type'"
                next-icon="mdi-arrow-right-bold-box-outline"
                prev-icon="mdi-arrow-left-bold-box-outline"
                show-arrows centered icons-and-text v-model="activeTab">
                    <v-tabs-slider color="primary"></v-tabs-slider>     
                        <v-tab  v-for="(item,index) in SubjectiveTabs" :key="index"
                        :to="{name: item.name, query: {clwk: $route.query.clwk}}">
                        {{$vuetify.breakpoint.xs ? '' : item.text}}
                            <v-icon left>
                            {{item.icon}}
                            </v-icon>
                        </v-tab>  
                 </v-tabs>
       
          

             <v-tabs-items :value="activeTab">
                 <div class="container">
                    <router-view :classworkDetails="classworkDetails"></router-view>
                 </div>
            </v-tabs-items>
       
    </v-app>
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