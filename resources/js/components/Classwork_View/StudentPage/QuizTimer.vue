<template>
    <div>
    <!-- <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12" md="10" lg="10" xl="12">
            <v-card :class="!isLoaded ? 'pt-5 pb-5': 'pt-5 pb-5'">
                <div class="ma-0 pa-0 title">Time Remaining</div> -->
            
                <!-- <v-container  class="d-flex justify-center">

                    
                    <div  fab class="">
                        <div class="text-md-h5">{{displayHours}}</div>
                        <div class="caption ml-2">Hours</div>  
                    </div>
                    :
                     <div fab class="">
                        <div class="text-md-h5">{{displayMinutes}}</div>
                        <div class="caption ml-2">Minutes </div>  
                    </div>
                    :
                      <div fab class="">
                        <div class="text-md-h5">{{displaySeconds}}</div>
                        <div class="caption ml-2">Seconds </div>  
                    </div>
                </v-container> -->
                 <vue-countdown-timer

                    @end_callback="EndTimer()"
                    :start-time="Startdate"
                    :end-time="EndDate?EndDate:endAt"
                    :interval="1000"
                    :hour-txt="'hours'"
                    :minutes-txt="'minutes'"
                    :seconds-txt="'seconds'">
                    <template slot="countdown" slot-scope="scope">
                    <div  class="d-flex justify-center mt-0 pt-0">
                        <div class="text-center">
                              <div class="text-md-h6"> {{scope.props.hours}}</div>
                              <div class="caption">{{scope.props.hourTxt}}</div>  
                        </div>
                        <span>:</span>
                        <div class="text-center">
                            <div class="text-md-h6">{{scope.props.minutes}}</div>
                            <div class="caption">{{scope.props.minutesTxt}}</div>  
                        </div>
                        <span>:</span>
                        <div class="text-center">
                            <div class="text-md-h6">{{scope.props.seconds}}</div>
                            <div class="caption">{{scope.props.secondsTxt}} </div>  
                        </div>
                    </div>
                    </template>
                    </vue-countdown-timer>
         <!--    </v-card>
        
        </v-col>
    </v-row> -->
</div>
</template>
<script>
import moment from 'moment/src/moment';
export default {
    props:['duration','StopTimer','StartTime'],
    data: ()=> ({
        Startdate: (new Date).getTime(),
        EndDate: null,
        checkTime:null,
        NewTimer: null,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0,
        SecondProgress:1000,
        isLoaded: false,
        endAt:  (new Date).getTime()+5000
    }),
 
    computed: {
       
        _seconds:()=>1000,
        _minutes(){
            return this._seconds * 60;
        },
        _hour(){
            return this._minutes * 60;
        },
        _day(){
            return this._hour * 24;
        }
    },
    methods:{
         format_date(value) {
            if (value) {
                return moment(String(value)).format('YYYY M D')
            }
        },
        startTimer(){

         

            //console.log(this.StartTime);
            
            //this.Startdate = new Date(this.StartTime).getTime();
            let due;
            let name = btoa('timer_time');
            let timer_time = localStorage.getItem(name);
            if(timer_time == null){
                due = (this.duration*60) * 1000;
                localStorage.setItem(name, due)
            }
            else{
                let data = timer_time.split("|");
                let r_time = data[1];
                due = (parseInt(r_time));
            }
            let final = '';
            this.NewTimer = setInterval(()=>{
                if(this.StopTimer != true){
                      if(final == ''){
                        final = due - 1000;
                        let finalData = name+'|'+final+'|'+name;
                        localStorage.setItem(name, finalData);
                    }
                    else{
                        final = final - 1000;
                        let finalData = name+'|'+final+'|'+name;
                        localStorage.setItem(name, finalData);
                    }
                }
                else{
                    clearInterval(this.NewTimer);
                    localStorage.removeItem(name);
                     this.$emit('TimerStop');
                }
              
            },1000)
            this.EndDate = (new Date).getTime()+due;
            
        },
          ShowTimer(){

            let due = (this.duration*60) * 1000;
              if(this.StopTimer != true){
                   
                   //console.log(this.StopTimer)
              }
              else{
                  
                  this.$emit('TimerStop');
              }

              this.EndDate = new Date(this.StartTime).getTime()+due;
           
            
        },
        EndTimer(){
                //console.log('test 123');
                clearInterval(this.NewTimer);
                localStorage.removeItem(name);
                this.$emit('TimesUp');
            
            
        },
        newTimer(){
            let ExamTime = this.duration * 1000;
            setInterval(()=>{
                
                let StartTime = new Date(this.StartTime);
                
                const DateNow = new Date();
                let remainingtime = ExamTime - (Math.abs(StartTime - DateNow)/1000);

                let hours   = Math.floor(remainingtime / 3600); // get hours
                let minutes = Math.floor((remainingtime - (hours * 3600)) / 60); // get minutes
                let seconds =  Math.floor(remainingtime - (hours * 3600) - (minutes * 60));
                
               /*  //console.log('diff' , (Math.abs(StartTime - DateNow)/1000));
                //console.log('remain ',remainingtime); */
                
                this.displayMinutes = minutes;
                this.displayHours = hours < 10 ?"0" + hours :hours;
                this.displayMinutes = minutes < 10 ?"0" + minutes :minutes;
                this.displaySeconds = seconds < 10 ? "0" + seconds :seconds;
                ////console.log(minutes+':'+seconds);
            },1000)
            ////console.log(this.StartTime);
            

        }
    },
    mounted(){
        
         this.ShowTimer();
        //this.newTimer();
        //this.startTimer();
       
             
            
     
   
        
      
      

    },
   
}
</script>