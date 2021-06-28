
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

  <v-container v-if="!isloading"  pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col v-if="classworkDetails.type == 'Objective Type'" cols="12" lg="12" md="12">
                <objectiveSubmission v-if="classworkDetails.type == 'Objective Type'" :ListData="List"></objectiveSubmission>    
            </v-col>
            <v-col v-if="classworkDetails.type == 'Subjective Type'" cols="12" lg="12" md="12">
                <subjectiveSubmission v-if="classworkDetails.type == 'Subjective Type'" :ListData="List"></subjectiveSubmission>    
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
        }
    },
    mounted(){
        
        this.GetList();
    }
    
}
</script>

<style scoped>
  
        
</style>