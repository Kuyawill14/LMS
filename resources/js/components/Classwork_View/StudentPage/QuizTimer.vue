<template>
    <div>
    <!-- <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12" md="10" lg="10" xl="12">
            <v-card :class="!isLoaded ? 'pt-5 pb-5': 'pt-5 pb-5'">
                <div class="ma-0 pa-0 title">Time Remaining</div> -->
               <!--  <v-container v-if="isLoaded" class="d-flex justify-center">

                    
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
                    <v-container  class="d-flex justify-center mt-0 pt-0">
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
                    </v-container>
                    </template>
                    </vue-countdown-timer>
         <!--    </v-card>
        
        </v-col>
    </v-row> -->
</div>
</template>
<script>
import moment from 'moment';
export default {
    props:['duration','StopTimer'],
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
        ShowTimer(){
            const StartTime = new Date();
            
            let finalHour;
            let format = moment(StartTime).format('a');
            let hour = moment(StartTime).format('h');
            let minutes = moment(StartTime).format('mm');

            let finalSeconds;
            let seconds_tic = localStorage.getItem('seconds_tic');
            if(seconds_tic == null){ 
                finalSeconds = parseInt(moment(StartTime).format('ss'))+1;
                localStorage.setItem('seconds_tic', finalSeconds);
       
            }
            else{
                finalSeconds = parseInt(localStorage.getItem('seconds_tic'));
            }
            
           
            const year = moment(StartTime).format('YYYY');
            const month = moment(StartTime).format('M');
            const day = moment(StartTime).format('D');

            finalHour = format == 'pm' ? ((parseInt(hour)+12)) : hour;
            let additioanal;
            if(format == 'pm'){
                if(parseInt(hour) == 12){
                    finalHour = hour;
                    
                }
                else{
                    finalHour = (parseInt(hour)+12);
                }
                additioanal = 1;
            }
            else{
                if(parseInt(hour) == 12){
                    finalHour = 0;
                }
                else{
                    finalHour = hour;
                }
                additioanal = 0;
              
            }

            let letFinalMinutes;
            let SubDuration;
            let subMinutes = localStorage.getItem('time_remaining');
            if(subMinutes == null){
                localStorage.setItem('time_remaining', (this.duration-1));
                SubDuration = this.duration
                letFinalMinutes = ((SubDuration)+(parseInt(minutes)));
            }
            else{
                SubDuration = (parseInt(subMinutes))
                letFinalMinutes = ((SubDuration)+(parseInt(minutes)));
                
            }
        let due = (this.duration*60) * 1000;
            const timer = setInterval(()=>{
            const nowDate = new Date();
            //const endDate = new Date(year,month,day,finalHour,letFinalMinutes,finalSeconds);
            
            const timeRemain = nowDate.getTime() -  nowDate.getTime()+due;

            const days = Math.floor(timeRemain/this._day);
            const hours = Math.floor((timeRemain % this._day)/this._hour);
            const minutes = Math.floor((timeRemain % this._hour)/this._minutes);
            const second = Math.floor((timeRemain % this._minutes)/this._seconds);
            
        
             this.displayHours = hours < 10 ?"0" + hours :hours;
            this.displayMinutes = minutes < 10 ?"0" + minutes :minutes;
            
           /*  if(parseInt(localStorage.getItem('time_remaining')) == 0){
                this.displayHours = '00';
                this.displayMinutes = '00';
            } */
          /*   else{
                 this.displayHours = hours < 10 ?"0" + hours :hours;
                 this.displayMinutes = minutes < 10 ?"0" + minutes :minutes;
            } */
           


            this.displaySeconds = second < 10 ? "0" + second :second;

         /*    this.SecondProgress =   (this.displaySeconds / 100)

                if(second == '00' || second == 0){
                    let check = localStorage.getItem('time_remaining');
                    if(check == '0' || check == '00'){
                        this.$emit('TimesUp');
                        clearInterval(timer);
                        //this.$router.push({path: '/'});
                        localStorage.removeItem('time_remaining');
                        localStorage.removeItem('seconds_tic');
                        
                    }
                    else{
                        let remain_time = parseInt(localStorage.getItem('time_remaining'));
                        localStorage.setItem('time_remaining', (remain_time-1));
                    }
                } */
                this.isLoaded = true;
            },1000)
            
        },
        startTimer(){
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
        EndTimer(){
                console.log('test 123');
                clearInterval(this.NewTimer);
                localStorage.removeItem(name);
                this.$emit('TimesUp');
            
            
        }
    },
    mounted(){
        
         //this.ShowTimer();
       
            this.startTimer();
       
             
            
     
   
        
      
      

    },
   
}
</script>