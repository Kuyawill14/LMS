
<template>
<div class="pa-1">

<div transition="slide-y-reverse-transition">
    <v-app-bar elevation="5" 
     v-if="!$vuetify.breakpoint.mdAndUp"
        app :dense="$vuetify.breakpoint.mdAndUp"  color="primary"  >
         <v-btn dark rounded icon text 
            v-if="!$vuetify.breakpoint.mdAndUp"
            @click="$router.push({name: 'classwork'})" >
            <v-icon >mdi-arrow-left-thick</v-icon>
        </v-btn>
        <v-divider   vertical></v-divider>
    </v-app-bar>
</div>
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

 <v-row class="centered" :style="$vuetify.breakpoint.mdAndUp ? '' : 'width:330px !important'"  justify="center" v-if="List.length == 0 && !isloading">
    <v-col cols="12" class="text-center">
        <v-icon style="font-size:10rem">
            mdi-notebook-check-outline
        </v-icon>
        <h1 v-if="$vuetify.breakpoint.mdAndUp"> Empty Submission </h1>
        <h2 v-else> Empty Submission </h2>
        <p> Your classwork is not publish to any class yet!</p>
         <v-btn color="primary" @click="$router.push({name: 'publish-to',query: {clwk: $route.query.clwk} })"> Publish classwork </v-btn>
    </v-col>
</v-row>

  <div v-if="!isloading && List.length != 0 ">
        <v-row align="center" justify="center">
            <v-col v-if="classworkDetails.type == 'Objective Type'" cols="12" class="ma-0 pa-0">
                <objectiveSubmission :class_id="class_id" :ClassList="ClassList" :Submitted="Submitted" :Graded="Graded"  v-if="classworkDetails.type == 'Objective Type'" :classworkDetails="classworkDetails"  :ListData="List"></objectiveSubmission>    
            </v-col>
            <v-col v-if="classworkDetails.type == 'Subjective Type'" cols="12"  class="ma-0 pa-0" >
                <subjectiveSubmission :class_id="class_id" :ClassList="ClassList" :Submitted="Submitted" :Graded="Graded" v-on:UpdateSubmission="GetListAfterEmit" v-if="classworkDetails.type == 'Subjective Type'" :classworkDetails="classworkDetails"  :ListData="List"></subjectiveSubmission>    
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
    props:['classworkDetails', 'List', 'class_id'],
    components:{
        objectiveSubmission,
        subjectiveSubmission
    },
    data(){
        return{
            //List:[],
            isloading: true,
            Graded: 0,
            Submitted: 0,
            ClassList: [],
            isLeaving: false,
        }
    },
    watch: {
        'class_id'(newId, oldId) {
            this.class_id = newId;
        }
    },
    methods:{
       async GetList(){
         
          /*   axios.get('/api/submission/all/'+this.$route.query.clwk)
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
            }) */

             this.isloading = !this.isloading;
            
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
  .centered{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
        
</style>