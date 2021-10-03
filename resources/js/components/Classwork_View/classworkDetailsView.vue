<template>
  <div>
    <v-overlay :value="iChange">
        <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular>
    </v-overlay>

  
         <!--   <v-row>
                <v-col  cols="12" md="12" class="pl-5 pt-2">
                    <v-btn rounded text="" class=""
                    @click="$router.push({name: 'classwork'})" >
                        <v-icon left dark>mdi-arrow-left-thick</v-icon>
                        Back
                    </v-btn>
                </v-col>
           </v-row> -->

     <!--  <v-container class="fill-height" v-if="isloading" style="height: 500px;">
            <v-row  align-content="center" justify="center">
                <v-col class="text-subtitle-1 text-center" cols="12">
                    Loading
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container> -->
        <v-container v-if="isloading" style="height: 670px;z-index:2">
                <vue-element-loading :active="isloading" 
                text="Loading"
                duration="0.7"
                :textStyle="{fontSize: '20px'}"
                spinner="line-scale" color="#EF6C00"  size="60" />
        </v-container>
         
       <!--  <v-row v-if="!isloading && classworkDetails.success == false" align="center" justify="center"> -->
           <!--  <v-col align="center" justify="center">
                <h1>Classwork Not Found</h1>
            </v-col> -->

            <v-row style="height:75vh" align="center" justify="center" v-if="!isloading && classworkDetails.success == false" >
                <v-col  cols="12" md="4" lg="3" xl="3">
                    <v-card outlined class="pa-5">
                       <v-row>
                           <v-col cols="12">
                               <h2 class="font-weight-regular">Classwork not found!</h2>
                               <div>Check you classwork list.</div>
                           </v-col>
                           <v-col class="text-right" cols="12">
                               <v-btn @click="$router.push({name: 'classwork', params: $route.params.id})" color="primary">
                                   Back to Class
                               </v-btn>
                           </v-col>
                       </v-row>
                    </v-card>
                </v-col>
            </v-row>
     <!--    </v-row> -->

        <v-row v-if="!isloading && classworkDetails.success == true">
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
                  :totalPoints="totalPoints"
                  :totalQuestion="totalQuestion"
                  v-on:isMounted="isloading = false"
                  :classworkDetails="classworkDetails.Details"
                ></teacherStartPage>
            </v-col>
            <v-col v-if="role == 'Student'" cols="12" class="ma-0 pa-0 ">
                 <studentStartPage v-if="role == 'Student'" 
                :classworkDetails="classworkDetails.Details"
                :totalPoints="totalPoints"
                v-on:isMounted="isloading = false"
                :totalQuestion="totalQuestion"
                :statusDetails="statusDetails"
          
                ></studentStartPage>
            </v-col>
        </v-row>
     

      <!-- Student Start Page -->
     
  </div>
</template>

<script>
const studentStartPage = () => import('./type/studentStartPage')
const teacherStartPage = () => import('./type/teacherStartPage')
import moment from 'moment/src/moment';
 import {mapGetters, mapActions } from "vuex";
export default {
    props:['role','UserDetails'],
  components:{
    studentStartPage,
    teacherStartPage
  },
    data(){
        return{
            isloading:true,
            classworkDetails:{},
            totalPoints:null,
            totalQuestion:null,
            //statusDetails: [],
            iChange: false,
            Isloaded: false,
        }
    },
    watch: {
      '$route.query.clwk'(newId, oldId) {
          this.isloading = true;
          this.iChange = true;
          this.getClassworkDetails()
      }
  },
  computed: {
      ...mapGetters(["statusDetails"]),
  },
    methods:{
         ...mapActions(['checkClassworkStatus']),
       async getClassworkDetails(){
            axios.get('/api/classwork/showDetails/'+ this.$route.query.clwk+'/'+this.$route.params.id)
            .then(res=>{
               this.classworkDetails = res.data;
                this.totalPoints = res.data.totalpoints;
                this.totalQuestion = res.data.ItemsCount;
                this.checkStatus(res.data.Details.type);
                this.iChange = false;
                this.isloading = false;
            })
            .catch(e=>{
                this.iChange = false;
                this.isloading = false;
            })
        },
        async checkStatus(type){
            
            if(this.role == 'Student'){
                let data = {};
                data.id = this.$route.query.clwk;
                data.type = type;
               
                this.$store.dispatch('checkClassworkStatus', data)
                .then(()=>{
                    this.isloading = false;
                })
            }
        }
    },
    async beforeRouteEnter(to, from, next) {
        next(vm => {

            vm.getClassworkDetails();
            
        });
    },
}
</script>