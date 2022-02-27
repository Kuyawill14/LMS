<template>
<div>

    <v-row v-if="loaded" >
      
      <v-col  v-if="classworkDetails.availability == 0" cols="12" >
        <v-row align="center" justify="center">
          <v-col v-if="classworkDetails.type == 'Objective Type'" cols="12" sm="12" md="12" lg="10" xl="10">
                <objectiveType v-if="classworkDetails.type == 'Objective Type'" :classworkDetails="classworkDetails"
                :totalPoints="totalPoints" :totalQuestion="totalQuestion"
                ></objectiveType>  
          </v-col>
          <v-col v-if="classworkDetails.type == 'Subjective Type'" cols="12" sm="12" md="12" lg="10" xl="10">
              <subjectiveType v-if="classworkDetails.type == 'Subjective Type'" :classworkDetails="classworkDetails"
              :totalPoints="totalPoints" :totalQuestion="totalQuestion"
              ></subjectiveType>  
          </v-col>
        </v-row> 
      </v-col>
      
      <v-col v-else cols="12" sm="12"   justify="center">
        <v-row align="center" justify="center">
          <v-col v-if="classworkDetails.response_late == 0 && CheckFormatDue(classworkDetails.to_date) <= CheckFormatDue(classworkDetails.currentDate)  && classworkDetails.status == null" cols="12" md="7" lg="6" xl="6">
                <responseLatePageWarning :course_id="classworkDetails.course_id" ></responseLatePageWarning>
          </v-col>
            <v-col v-else cols="12" >
              <v-row align="center" justify="center">
                <v-col v-if="classworkDetails.type == 'Objective Type'" sm="12" md="12" lg="10" xl="10" cols="12">
                  <objectiveType v-if="classworkDetails.type == 'Objective Type'" :classworkDetails="classworkDetails" 
                :totalPoints="totalPoints" :totalQuestion="totalQuestion"
                ></objectiveType>  
                </v-col>
                <v-col v-if="classworkDetails.type == 'Subjective Type'" cols="12" sm="12" md="12" lg="10" xl="10">
                    <subjectiveType v-if="classworkDetails.type == 'Subjective Type'" :classworkDetails="classworkDetails" 
                  :totalPoints="totalPoints" :totalQuestion="totalQuestion"
                  ></subjectiveType> 
                </v-col>
              </v-row>
            
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</div>
</template>

<script>
const objectiveType = () => import('./classworkType/ObjectiveComponent')
const subjectiveType = () => import('./classworkType/SubjectiveComponent')
const responseLatePageWarning = () => import('./classworkType/responseLateComponent')

import moment from 'moment-timezone';
import {mapGetters, mapActions } from "vuex";
export default {
    props:['classworkDetails','totalPoints','totalQuestion'],
    components:{
      objectiveType,
      subjectiveType,
      responseLatePageWarning
    },
    data(){
      return{
        DateToday: null,
        loaded: false,
      }
    },
     computed: {
      ...mapGetters(["statusDetails"]),
    },
    methods:{
       ...mapActions(['checkClassworkStatus']),
         format_date(value) {
            if (value) {
                //return moment(String(value)).format('dddd, h:mm a')
                 return moment(String(value)).tz("Asia/Manila").format('dddd, h:mm a');
            }
        },
        start(){
          if(this.totalQuestion != 0){
            localStorage.removeItem('time_remaining');
            this.$router.push({name: 'quizstart',params: {id: this.$route.params.id},query: {clwk: this.classworkDetails.id}})
          }
        },
       
        CheckFormatDue(value){
              if (value) {
                  //return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
                   return moment(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
              }
          },
          checkStatus(){
            let data = {};
            data.id = this.$route.query.clwk;
            data.type = this.classworkDetails.type;
            this.$store.dispatch('checkClassworkStatus', data)
            .then(()=>{
                this.loaded = true;
            })

        },
          
    },
/*     beforeMount(){
      window.history.forward(1)
    }, */
    mounted(){
     /*  if(this.classworkDetails){
        this.checkStatus();
        
      } */
      this.loaded = true;
    },
    beforeMount(){
      const newDate = new Date();
      this.DateToday = moment(newDate).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
      //this.$emit('isMounted');
     
 
    },
    
}
</script>