<template>
    <v-app>
        <v-tabs rounded 
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows centered icons-and-text v-model="activeTab">
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tab v-for="(item,index) in tabs" :key="index"
            :to="{name: item.name, query: {clwk: $route.query.clwk}}">
              {{$vuetify.breakpoint.xs ? '' : item.text}}
                <v-icon left>
                {{item.icon}}
                </v-icon>
              
            </v-tab>

             <v-tabs-items :value="activeTab">
                 <div class="container">
                    <router-view :classworkDetails="classworkDetails"></router-view>
                 </div>
            </v-tabs-items>
        </v-tabs>
    </v-app>
</template>

<script>
export default {
    props:['classworkDetails'],
    data(){
        return{
            activeTab: "",
            tabs: [
                { name: "clwk", text: "ADD QUESTION", icon:"mdi-text-box-plus-outline"}, 
                { name: "question-list", text: "QUESTION LIST", icon:"mdi-clipboard-list"},
                { name: "publish-to", text: "PUBLISH TO", icon:"mdi-publish"},
                { name: "submission-list", text: "SUBMISSION LIST", icon:"mdi-notebook-check-outline"},
                { name: "question-analytics", text: "QUESTION ANALYTICS", icon:"mdi-google-analytics"},
                { name: "classwork-seting", text: "SETTINGS", icon:"mdi-file-cog"}
            ],
        }
    },

    
}
</script>