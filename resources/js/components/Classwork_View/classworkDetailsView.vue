<template>
  <div>
  
         <!--   <v-row>
                <v-col  cols="12" md="12" class="pl-5 pt-2">
                    <v-btn rounded text="" class=""
                    @click="$router.push({name: 'classwork'})" >
                        <v-icon left dark>mdi-arrow-left-thick</v-icon>
                        Back
                    </v-btn>
                </v-col>
           </v-row> -->

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

        <v-row v-if="!isloading">
            <v-col v-if="role == 'Teacher'" cols="12" class="ma-0 pa-0 pa-2">
                   <!--  <v-row >
                        <v-col cols="12" >
                              <v-btn rounded text="" class=""
                            @click="$router.push({name: 'classwork'})" >
                                <v-icon left dark>mdi-arrow-left-thick</v-icon>
                                Back to classworks
                            </v-btn>
                        </v-col>
                    </v-row> -->
                 <teacherStartPage v-if="role == 'Teacher'" 
                :classworkDetails="classworkDetails"
                ></teacherStartPage>
            </v-col>
            <v-col v-if="role == 'Student'" cols="12" class="ma-0 pa-0 ">
                 <studentStartPage v-if="role == 'Student'" 
                :classworkDetails="classworkDetails"
                :totalPoints="totalPoints"
                :totalQuestion="totalQuestion"
                ></studentStartPage>
            </v-col>
        </v-row>
     

      <!-- Student Start Page -->
     
 
  </div>
</template>

<script>
const studentStartPage = () => import('./type/studentStartPage')
const teacherStartPage = () => import('./type/teacherStartPage')
import moment from 'moment';
export default {
    props:['role','UserDetails'],
  components:{
    studentStartPage,
    teacherStartPage
  },
    data(){
        return{
            isloading:true,
            classworkDetails:[],
            totalPoints:null,
            totalQuestion:null,
            CurrentUser:[]
        }
    },
    methods:{
       async getClassworkDetails(){
            axios.get('/api/classwork/showDetails/'+ this.$route.query.clwk+'/'+this.$route.params.id)
            .then(res=>{
               this.classworkDetails = res.data.Details;
                this.totalPoints = res.data.totalpoints;
                this.totalQuestion = res.data.ItemsCount;
                this.isloading = !this.isloading;
            })
            .catch(e=>{
                this.isloading = !this.isloading;
            })
        },
         format_date(value) {
            if (value) {
                return moment(String(value)).format('dddd, h:mm a')
            }
        },
    },
    mounted(){
        this.getClassworkDetails();
    },
    beforeDestroy(){
        this.classworkDetails.destroy();
        this.totalPoints.destroy();
        this.totalQuestion.destroy();
    }
    
}
</script>