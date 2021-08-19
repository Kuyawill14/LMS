
<template>
<div class="pa-1">
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

  <v-container v-if="!isloading" pa-0 ma-0  class="pa-0 pa-0" fluid>
      <v-row>
          <v-col cols="4" style="max-height:85vh;overflow-y:scroll;overflow-x: hidden;">
              <h3>Questions</h3>
                <v-list>
                      <v-list-item @click="setChartForAllQuestionCorrect()" link :class="isSelected == 'correct' ? 'grey lighten-2 rounded' : 'rounded'"  >
                        <v-list-item-content class="ma-0 pa-0" >
                            <div class="d-flex">
                       
                                <p class="mb-0 pb-0 pl-1 font-weight-bold"><v-icon left color="success">mdi-check</v-icon>Correct student per question</p>
                            </div>
                        </v-list-item-content>
                    </v-list-item>

                     <v-list-item @click="setChartForAllQuestionWrong()" link :class="isSelected == 'wrong' ? 'grey lighten-2 rounded' : 'rounded'"  >
                        <v-list-item-content class="ma-0 pa-0" >
                            <div class="d-flex">
                                <p class="mb-0 pb-0 pl-1 font-weight-bold"><v-icon left color="error">mdi-close</v-icon>Wrong student per question</p>
                            </div>
                        </v-list-item-content>
                    </v-list-item>
                         <v-divider></v-divider>
                    
                    <v-list-item @click="setChartForThisQuestion(item,index)" :class="isSelected == index ? 'grey lighten-2 rounded' : 'rounded'"
                    link v-for="(item, index) in List" :key="index">
                        <v-list-item-content class="ma-0 pa-0" >
                            <div class="d-flex">
                                <h4>{{'Q'+ (index+1) +". " }}</h4>
                                <p class="mb-0 pb-0 pl-1"><span v-html="item.question" class="post-content"></span></p>
                            </div>
                        </v-list-item-content>
                       
                    </v-list-item>
                </v-list>
          </v-col>
          <v-col cols="8">
              


              <v-container class="fill-height" v-if="isSettingData" style="height: 500px;">
                <v-row  align-content="center" justify="center">
                    <v-col class="text-subtitle-1 text-center" cols="12">
                        Loading Chart
                    </v-col>
                    <v-col cols="6">
                        <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                    </v-col>
                </v-row>
            </v-container>
           
            <v-container class="fill-height" v-if="!isSettingData" style="height: 600px;">
                  <v-row  align-content="center" justify="center">
                    <v-col class="text-subtitle-1 text-center" cols="12">
                          <h3>Question statistics</h3>
                    </v-col>
                    <v-col cols="12">
                        <bar-chart v-if="!isSettingData" :chartTitle="chartTitle" :Qname="Qname" :QCorrentCount="QCorrentCount" :barColors="barColors" :barborderColors="barborderColors"></bar-chart>
                    </v-col>
                </v-row>
            </v-container>

            
          </v-col>
      </v-row>
    </v-container>
</div>
</template>
<script>
import BarChart from './Qanalytics/charts'
export default {
    components:{
        BarChart
    },
    data(){
        return{
            List:[],
            search:'',
            selectedTasks: [],
            isloading: true,
             headers: [
                {
                    text: 'id',
                    align: 'start',
                    value: 'id',
                    icon:''
                },
                { text: 'Question', value: 'question',icon:'' },
                { text: '# of Correct', value: 'status',align: 'center',icon:'mdi-account-multiple-check'},
                { text: '# of Wrong', value: 'points' ,icon:'mdi-account-multiple-remove'},
                { text: 'Average Time Consume', value:'time',icon:'mdi-timer'},
                { text: 'Actions',sortable: false,icon:'mdi-cog'},
                
            ],
            Qname: [],
            QCorrentCount:[],
            barColors: [],
            barborderColors:[],
            chartTitle: '',
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
           isSettingData: false,
           isSelected: null,
           submissionLength: 0,
        }
    },
    methods:{
       async GetList(){
            axios.get('/api/QAnalytics/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data.analytics;
                this.submissionLength = res.data.totalSubmission;
                let x = 0;
                let total = 0
                res.data.analytics.forEach(item => {
                    this.Qname[x] = 'Q'+(x+1);
                    this.QCorrentCount[x] = item.correct_count != null ? item.correct_count : 0;
                    let color = this.rnd(0, this.backgroundColor.length - 1);
                    this.barColors[x] =  this.backgroundColor[color];
                    this.barborderColors[x] =  this.borderColor[color];
                    x++;
                });
                this.QCorrentCount[this.QCorrentCount.length+1] = this.submissionLength;
                this.chartTitle = '# Correct student per question';
                this.isSelected = 'correct';
                this.isloading = !this.isloading;
            })
        },
        setChartForThisQuestion(data, index){
          this.isSelected = index;
           this.clearChartData();
           this.Qname[0] = '# of Correct';
           this.Qname[1] = '# of Wrong'
           this.QCorrentCount[0] = data.correct_count;
           this.QCorrentCount[1] = data.wrong_count;
           this.QCorrentCount[3] =  this.submissionLength;

           this.barColors[0] =  'rgba(76,175,80,0.2)';
           this.barborderColors[0] =  'rgba(76,175,80,1)';
           this.barColors[1] =  'rgba(183,28,28,0.2)';
           this.barborderColors[1] =  'rgba(183,28,28,1)';
           this.chartTitle = 'Question #'+(index+1);
           //this.isSettingData = false;
           setTimeout(() => (this.isSettingData = false), 500);
        },
        setChartForAllQuestionCorrect(){
            this.isSelected = 'correct';
            this.clearChartData();
             axios.get('/api/QAnalytics/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data.analytics;
                 this.submissionLength = res.data.totalSubmission;
                let x = 0;
                let total = 0
                res.data.analytics.forEach(item => {
                    this.Qname[x] = 'Q'+(x+1);
                    this.QCorrentCount[x] = item.correct_count != null ? item.correct_count : 0;
                    let color = this.rnd(0, this.backgroundColor.length - 1);
                    this.barColors[x] =  this.backgroundColor[color];
                    this.barborderColors[x] =  this.borderColor[color];
                    x++;
                });
                this.QCorrentCount[this.QCorrentCount.length+1] = this.submissionLength;
                this.chartTitle = '# Correct student per question';
            })
            setTimeout(() => (this.isSettingData = false), 500);
        },
        setChartForAllQuestionWrong(){
            this.isSelected = 'wrong';
            this.clearChartData();
             axios.get('/api/QAnalytics/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data.analytics;
                 this.submissionLength = res.data.totalSubmission;
                let x = 0;
                let total = 0
                res.data.analytics.forEach(item => {
                    this.Qname[x] = 'Q'+(x+1);
                    this.QCorrentCount[x] = item.wrong_count != null ? item.wrong_count : 0;
                    let color = this.rnd(0, this.backgroundColor.length - 1);
                    this.barColors[x] =  this.backgroundColor[color];
                    this.barborderColors[x] =  this.borderColor[color];
                    x++;
                });
                this.QCorrentCount[this.QCorrentCount.length+1] = this.submissionLength;
                this.chartTitle = '# Wrong student per question';
            })
            setTimeout(() => (this.isSettingData = false), 500);
        },
        clearChartData(){
            this.isSettingData = true;
            this.Qname = [];
            this.QCorrentCount = [];
            this.barColors =  [];
            this.barborderColors =  [];
            this.chartTitle = '';
        },
        rnd (a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
    },
    async GetSubmissionLIst(){
        
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
    mounted(){
        this.GetList();
        this.$emit('isMounted');
    },

    created(){
        this.$emit('isMounted');
    },
    beforeDestroy(){
        this.$emit('isUnMounted');
    }
}
</script>

<style scoped>
    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
   border-radius: 3px
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>