
<template>
<v-app>
<v-container class="fill-height" v-if="isloading" style="height: 400px;">
    <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
            Loading
        </v-col>
        <v-col cols="6">
            <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
    </v-row>
</v-container>

 <v-row  justify="center" v-if="List.length == 0 && !isloading">
    <v-col cols="12" sm="8" md="4" class="text-center">
        <v-icon style="font-size:10rem">
            mdi-notebook-check-outline
        </v-icon>
        <h1> Empty Submission </h1>
        <p> No, student take your classwork yet!</p>
        
    </v-col>
</v-row>

  <v-container v-if="!isloading && List.length != 0 "  pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col v-if="classworkDetails.type == 'Objective Type'" cols="12" lg="8" xl="6" md="10">
                <objectiveSubmission v-if="classworkDetails.type == 'Objective Type'" :classworkDetails="classworkDetails"  :ListData="List"></objectiveSubmission>    
            </v-col>
            <v-col v-if="classworkDetails.type == 'Subjective Type'" cols="12" lg="10" xl="6" md="10">
                <subjectiveSubmission v-on:UpdateSubmission="GetListAfterEmit" v-if="classworkDetails.type == 'Subjective Type'" :classworkDetails="classworkDetails"  :ListData="List"></subjectiveSubmission>    
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>
<script>
const objectiveSubmission = () => import('./submissionType/objectiveSubmission')
const subjectiveSubmission = () => import('./submissionType/subjectiveSubmission')

export default {
    props:['classworkDetails'],
    components:{
        objectiveSubmission,
        subjectiveSubmission
    },
    data(){
        return{
            List:[],
            isloading: true
        }
    },
    methods:{
       async GetList(){
         
            axios.get('/api/submission/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data;
                this.isloading = !this.isloading;
            })
        },
          async GetListAfterEmit(){
            axios.get('/api/submission/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data;
            })
        }
    },
    mounted(){
        
        this.GetList();
    }
    
}
</script>

<style scoped>
  
        
</style>