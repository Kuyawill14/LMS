<template>
  <v-app>
      <v-container fluid>
           <v-row>
                <v-col  cols="12" md="12" class="pl-5 pt-2">
                    <v-btn rounded text="" class=""
                    @click="$router.push({name: 'classwork'})" >
                        <v-icon left dark>mdi-arrow-left-thick</v-icon>
                        Back
                    </v-btn>
                </v-col>
           </v-row>
      </v-container>
      <v-container class="fill-height" v-if="isloading" style="height: 500px;">
            <v-row  align-content="center" justify="center">
                <v-col class="text-subtitle-1 text-center" cols="12">
                    Loading
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>

      <teacherStartPage v-if="!isloading && CurrentUser.role == 'Teacher'" 
      :classworkDetails="classworkDetails"
      ></teacherStartPage>

      <!-- Student Start Page -->
      <studentStartPage v-if="!isloading && CurrentUser.role == 'Student'" 
      :classworkDetails="classworkDetails"
      :totalPoints="totalPoints"
      :totalQuestion="totalQuestion"
      ></studentStartPage>
 
  </v-app>
</template>

<script>
const studentStartPage = () => import('./type/studentStartPage')
const teacherStartPage = () => import('./type/teacherStartPage')
import moment from 'moment';
export default {
  components:{
    studentStartPage,
    teacherStartPage
  },
    data(){
        return{
            isloading:false,
            classworkDetails:[],
            totalPoints:null,
            totalQuestion:null,
            CurrentUser:[]
        }
    },
    methods:{
        getClassworkDetails(){
            axios.get('/api/classwork/showDetails/'+ this.$route.query.clwk+'/'+this.$route.params.id)
            .then(res=>{
               this.classworkDetails = res.data.Details;
                this.totalPoints = res.data.totalpoints;
                this.totalQuestion = res.data.ItemsCount;
            })
        },
         format_date(value) {
            if (value) {
                return moment(String(value)).format('dddd, h:mm a')
            }
        },
    },
    mounted(){
        this.isloading = !this.isloading;
        this.getClassworkDetails();
        this.$store.dispatch('fetchCurrentUser')
        .then(res=>{
          this.isloading = !this.isloading;
          this.CurrentUser = res;
        })
    }
}
</script>