
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
<!-- <v-container class="fill-height" v-if="isloading" style="height: 570px;">
    <v-row  align-content="center" justify="center">
        <v-col cols="12" class="text-center">


            <vue-element-loading :active="isloading" 
            text="Loading"
            duration="0.7"
            :textStyle="{fontSize: '20px'}"
            spinner="line-scale" color="#EF6C00"  size="60" />
        </v-col>
    </v-row>
</v-container> -->
<v-row v-if="isloading" align="center" justify="center">
    <v-col  cols="12" class="mb-5" >
    <v-row>
        <v-col class="text-left"  cols="6" md="2">
                <v-card class="pl-2 pr-2 pt-3 pb-3 " elevation="0"  v-if="isloading">
                    <v-skeleton-loader class="mx-auto"  type="heading list-item"></v-skeleton-loader>
                </v-card>
        </v-col>
    </v-row>
       
    </v-col>
     <v-col v-if="isloading" cols="12" >
         <v-row>
             <v-col cols="12" md="2"  v-for="(ii, k) in 5" :key="k">
                   <v-card  elevation="0"  v-if="isloading">
                    <v-skeleton-loader class="mx-auto"  type="button"></v-skeleton-loader>
                </v-card>
             </v-col>
         </v-row>
      
    </v-col>
    
    <v-col v-for="(i, index) in 20" :key="index" cols="12" md="6" lg="3" xl="3">
        <v-card class="pl-2 pr-2 pt-3 pb-3" elevation="0"  v-if="isloading">
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                         <v-skeleton-loader class="mx-auto"  type="list-item-avatar-two-line"></v-skeleton-loader>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-skeleton-loader class="mx-auto"  type="chip"></v-skeleton-loader>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
           
        </v-card>
    </v-col>
</v-row>

 <!-- <v-row class="centered" :style="$vuetify.breakpoint.mdAndUp ? '' : 'width:330px !important'"  justify="center" v-if="List.length == 0 && !isloading">
        <v-col cols="12" class="text-center">
            <v-icon style="font-size:10rem">
                mdi-notebook-check-outline
            </v-icon>
            <h1 v-if="$vuetify.breakpoint.mdAndUp"> Empty Submission </h1>
            <h2 v-else> Empty Submission </h2>
            <p> Your classwork has no submssion yet!</p>
        </v-col>
    </v-row> -->

  <div v-if="!isloading">
        <v-row align="center" justify="center">
            <v-col v-if="classworkDetails.type == 'Objective Type'" cols="12" class="ma-0 pa-0">
                <objectiveSubmission v-on:reloadSubmission="reloadSubmission" :ClassList="ClassList" :Submitted="Submitted" :Graded="Graded"  v-if="classworkDetails.type == 'Objective Type'" :classworkDetails="classworkDetails"  :ListData="List"></objectiveSubmission>    
            </v-col>
            <v-col v-if="classworkDetails.type == 'Subjective Type'" cols="12"  class="ma-0 pa-0" >
                <subjectiveSubmission v-on:reloadSubmission="reloadSubmission" :ClassList="ClassList" :Submitted="Submitted" :Graded="Graded" v-on:UpdateSubmission="GetListAfterEmit" v-if="classworkDetails.type == 'Subjective Type'" :classworkDetails="classworkDetails"  :ListData="List"></subjectiveSubmission>    
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
import {mapGetters} from "vuex";
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
            Class_id: null
        }
    },
     computed: {
      ...mapGetters(["getClassesNames"]),
    },
    methods:{
       async GetList(){
            axios.get('/api/submission/all/'+this.$route.query.clwk+'/'+this.Class_id)
            .then(res=>{''
                this.List = res.data;
                 res.data.forEach(item => {
                    if(item.status == 'Submitted' && item.graded == 0){
                        this.Submitted++;
                    }

                    if(item.status == 'Submitted' && item.graded == 1){
                        this.Graded++;
                    }
                   
                });
                this.isloading = false;
            })
            
        },
        reloadSubmission(id){
            this.Submitted = 0;
            this.Graded = 0;
            this.Class_id = id;
            this.GetList();
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
            if(this.getClassesNames.length == 0){
                this.$store.dispatch('fetchClassesNames', this.$route.params.id)
                .then(()=>{
                    
                    this.ClassList = this.getClassesNames.filter((item) => {
                        return item.class_name != 'All Class';
                    })
                    this.Class_id = this.ClassList[0].class_id;
                    this.GetList();
                    
                })
            }else{
                this.ClassList = this.getClassesNames.filter((item) => {
                    return item.class_name != 'All Class';     
                })
                 this.Class_id = this.ClassList[0].class_id;
                this.GetList();
            }
        }
    },
    mounted(){
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