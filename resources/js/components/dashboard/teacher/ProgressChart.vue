<template>
 
    <v-card>
        <v-row class="pa-2">
           <v-col cols="12" class="d-flex justify-space-between mb-0 pb-2">
                 
                 <v-row>
                    <v-col cols="12" md="12" lg="7" xl="7" class="text-left">
                      <h3 class="mt-2 pl-2">Course/Classes Progress</h3>
                    </v-col>
                    <v-col cols="12" lg="5" xl="5" md="12"  >
                         <div class="d-flex">
                          <v-select
                          
                          dense
                          :items="allCourse"
                          @change="fetchClassList()"
                          v-model="selectedCourse_id"
                          item-text="course_code"
                          hide-details
                          item-value="course_id"
                          label="Course"
                          class="pr-1"
                          outlined
                        ></v-select>
                        <v-select
                          dense
                          hide-details
                          v-if="selectedCourse_id != null"
                          :items="allClass"
                          @change="setChartData()"
                          v-model="selected_classid"
                          item-text="class_name"
                          item-value="class_id"
                          label="Class"
                          outlined
                        ></v-select>
                      </div>
                    </v-col>
                    
                 </v-row>
                
           </v-col>
            <v-col cols="12" class="mt-0 pt-0">
               <v-divider></v-divider>
                <v-container class="fill-height" v-if="!isLoaded" style="height: 362px;">
                    <v-row  align-content="center" justify="center">
                      <!--   <v-col class="text-subtitle-1 text-center" cols="12">
                            Loading Chart
                        </v-col> -->
                        <v-col cols="12" class="text-center">
                            <!-- <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear> -->
                            <v-progress-circular
                              :size="50"
                              color="primary"
                              indeterminate
                            ></v-progress-circular>
                        </v-col>
                    </v-row>
                </v-container>

                <v-container class="fill-height" v-if="isLoaded && selected_classid == null" style="height: 363px;">
                    <v-row  align-content="center" justify="center">
                       
                        <v-col cols="12" class="text-center">
                            <!-- <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear> -->
                            <v-icon large style="font-size:8rem" >mdi-chart-bar</v-icon>
                        
                        </v-col>
                         <!--  <v-col class="text-subtitle-1 text-center" cols="12">
                            Select Course
                        </v-col> -->
                    </v-row>
                </v-container>

               

               <bar-chart v-if="isLoaded && selected_classid != null" :ChartLabel="ChartLabel" :ChartData="ChartData" :ChartBarColor="ChartBarColor" :ChartBorder="ChartBorder"></bar-chart>
           </v-col>
        </v-row>
    </v-card>
    

   

</template>

<script>
import BarChart from './Charts'
import {mapGetters,mapActions } from "vuex"; 
export default {
  props:['allCourse'],
  components: {
    BarChart
  },
  data(){
      return{
          courseList: [],
          isLoaded: false,
          CLassList:[],
          selectedCourse_id:null,
          selected_classid: null,
          ChartLabel:[],
          ChartData:[],
          ChartBarColor:[],
          ChartBorder: [],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
      }
  },
  computed: mapGetters(['allClass']),
    methods:{
            fetchCourseNames() {
            //this.$store.dispatch('fetchCourseList').then(()=>{
                /* for (let i = 0; i < this.allCourse.length; i++) {
                    this.courseList[i] = this.allCourse[i].course_name
                } */
                //this.isLoaded = true;
                setTimeout(() => (this.isLoaded = true), 500);
            //})
        },
        async fetchClassList(){
             this.$store.dispatch('fetchSubjectCourseClassList', this.selectedCourse_id)
   
         
         /*  axios.get('/api/class/subjectCourseClassList/all/'+this.selectedCourse_id)
          .then(res=>{
          this.fetchSubjectCourseClassList(this.$route.params.id)
          }) */
        },
        async setChartData(){
            this.clearData();
            await axios.get('/api/teacher/student-classGrades/'+this.selected_classid)
            .then(res=>{
                  let x = 0;
                  res.data.forEach(item => {
                    let name = item.firstname.charAt(0) +'.'+item.lastName;
                    this.ChartLabel[x] = name;
                    this.ChartData[x] =  item.final_grade != null ? parseInt(item.final_grade) : 0;
                    let color = this.rnd(0, this.backgroundColor.length - 1);
                    this.ChartBarColor[x] =  this.backgroundColor[color];
                    this.ChartBorder[x] = this.borderColor[color];
                    x++;
                  });
                  this.ChartData[this.ChartData.length+1] = 100;
                  setTimeout(() => (this.isLoaded = true), 500);
            })
        },
         rnd (a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
        clearData(){
          this.ChartLabel = [];
          this.ChartData = [];
          this.ChartBarColor = [];
          this.ChartBorder = [];
          this.isLoaded = false;
        }

    },
    mounted(){
        this.fetchCourseNames();
    }
}
</script>