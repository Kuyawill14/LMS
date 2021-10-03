
<template>
<div class="pa-1">
<v-overlay :value="isLeaving">
    <v-progress-circular
        indeterminate
        size="64"
    ></v-progress-circular>
</v-overlay>
<v-container class="fill-height" v-if="isloading" style="height: 570px;">
    <v-row  align-content="center" justify="center">
        <v-col cols="12" class="text-center">
         <!--    <v-progress-circular
            :size="40"
            color="primary"
            indeterminate
            ></v-progress-circular> -->

            <vue-element-loading :active="isloading" 
            text="Loading"
            duration="0.7"
            :textStyle="{fontSize: '20px'}"
            spinner="line-scale" color="#EF6C00"  size="60" />
        </v-col>
    </v-row>
</v-container>

 <v-row  justify="center" v-if="List.length == 0 && !isloading">
    <v-col cols="12" sm="8" md="4" class="text-center">
        <v-icon style="font-size:10rem">
            mdi-notebook-check-outline
        </v-icon>
        <h1> Empty Submission </h1>
        <p> Your classwork is not publish to any class yet!</p>
         <v-btn color="primary" @click="$router.push({name: 'publish-to',query: {clwk: $route.query.clwk} })"> Publish classwork </v-btn>
    </v-col>
</v-row>

  <div v-if="!isloading && List.length != 0 ">
        <v-row align="center" justify="center">
            <v-col v-if="classworkDetails.type == 'Objective Type'" cols="12" class="ma-0 pa-0">
                <objectiveSubmission :ClassList="ClassList" :Submitted="Submitted" :Graded="Graded"  v-if="classworkDetails.type == 'Objective Type'" :classworkDetails="classworkDetails"  :ListData="List"></objectiveSubmission>    
            </v-col>
            <v-col v-if="classworkDetails.type == 'Subjective Type'" cols="12"  class="ma-0 pa-0" >
                <subjectiveSubmission :ClassList="ClassList" :Submitted="Submitted" :Graded="Graded" v-on:UpdateSubmission="GetListAfterEmit" v-if="classworkDetails.type == 'Subjective Type'" :classworkDetails="classworkDetails"  :ListData="List"></subjectiveSubmission>    
            </v-col>
        </v-row>
    </div>

    <!-- <v-container  >

        <subjectiveSubmission :ClassList="ClassList" :Submitted="Submitted" :Graded="Graded" v-on:UpdateSubmission="GetListAfterEmit" v-if="classworkDetails.type == 'Subjective Type'" :classworkDetails="classworkDetails"  :ListData="List"></subjectiveSubmission>    
    </v-container> -->
</div>
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
            isloading: true,
            Graded: 0,
            Submitted: 0,
            ClassList: [],
            isLeaving: false,
        }
    },
    methods:{
       async GetList(){
         
            axios.get('/api/submission/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data;
                 res.data.forEach(item => {
                    if(item.status == 'Submitted'){
                        this.Submitted +=1;
                    }
                    if(item.graded == 1){
                        this.Graded +=1;
                    }
                   
                });
                this.isloading = !this.isloading;
            })
            
        },
          async GetListAfterEmit(){
              //this.Submitted +=1;
               this.Graded +=1;
           /*  this.Graded = 0;
            this.Submitted = 0;
            axios.get('/api/submission/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data;
                res.data.forEach(item => {
                    if(item.status == 'Submitted'){
                        this.Submitted +=1;
                    }
                    if(item.graded == 1){
                        this.Graded +=1;
                    }
                });
            }) */
        },
         async FetchCLassNames(){
            await axios.get('/api/class/allnames/'+this.$route.params.id+'/'+0)
            .then(res=>{
                this.ClassList = res.data;
                this.ClassList.push({ class_id: this.$route.params.id, class_name: 'All Class', id: this.$route.params.id});
            })
        }
    },
    mounted(){
        this.GetList();
        this.FetchCLassNames();
    },
     beforeRouteLeave(to, from, next) {
        this.isLeaving = true;
        next();
    },
    
}
</script>

<style scoped>
  
        
</style>