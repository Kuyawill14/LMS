<template>
    <v-app>
        <v-tabs rounded class="pt-2" centered v-model="activeTab">
            <v-tab v-for="(item,index) in tabs" :key="index"
            :to="{name: item.name, query: {clwk: $route.query.clwk}}">
                <v-icon left>
                {{item.icon}}
                </v-icon>
                {{$vuetify.breakpoint.xs ? '' : item.text}}
            </v-tab>

             <v-tabs-items :value="activeTab">
                 <div class="container">
                    <router-view></router-view>
                 </div>
            </v-tabs-items>
        </v-tabs>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            activeTab: "",
            tabs: [
                { name: "clwk", text: "ADD QUESTION", icon:"mdi-text-box-plus-outline"}, 
                { name: "question-list", text: "QUESTION LIST", icon:"mdi-clipboard-list"},
                { name: "publish-to", text: "PUBLISH TO", icon:"mdi-publish"},
                { name: "submission-list", text: "SUBMISSION LIST", icon:"mdi-notebook-check-outline"},
                { name: "question-analytics", text: "QUESTION ANALYTICS", icon:"mdi-google-analytics"}
            ],
        }
    }
    
}
</script>