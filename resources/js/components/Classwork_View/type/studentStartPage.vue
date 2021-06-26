<template>
    <v-container  fluid>
        <v-row align="center" justify="center">

          <v-col v-if="classworkDetails.response_late == 0" cols="12" sm="12" md="5">
               <responseLatePageWarning></responseLatePageWarning>
          </v-col>

          <v-col v-if="classworkDetails.response_late != 0 && classworkDetails.type == 'Objective Type'" cols="12" sm="12" md="7">
                <objectiveType v-if="classworkDetails.type == 'Objective Type'" :classworkDetails="classworkDetails"
                :totalPoints="totalPoints" :totalQuestion="totalQuestion"
                ></objectiveType>  
          </v-col>

          <v-col v-if="classworkDetails.response_late != 0 && classworkDetails.type == 'Subjective Type'" cols="12" md="10"  >
                  <subjectiveType v-if="classworkDetails.type == 'Subjective Type'" :classworkDetails="classworkDetails"
                  :totalPoints="totalPoints" :totalQuestion="totalQuestion"
                  ></subjectiveType>  
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
const objectiveType = () => import('./classworkType/ObjectiveComponent')
const subjectiveType = () => import('./classworkType/SubjectiveComponent')
const responseLatePageWarning = () => import('./classworkType/responseLateComponent')

import moment from 'moment';
export default {
    props:['classworkDetails','totalPoints','totalQuestion'],
    components:{
      objectiveType,
      subjectiveType,
      responseLatePageWarning
    },
    methods:{
         format_date(value) {
            if (value) {
                return moment(String(value)).format('dddd, h:mm a')
            }
        },
        start(){
       
          if(this.totalQuestion != 0){
            localStorage.removeItem('time_remaining');
            this.$router.push({name: 'quizstart',params: {id: this.$route.params.id},query: {clwk: this.classworkDetails.id}})
          }
        }
    },
    beforeMount(){
      window.history.forward(1)
    }
}
</script>