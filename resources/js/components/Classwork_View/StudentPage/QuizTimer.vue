<template>
    <div>
      <div v-if="EndDate">
          <countdown ref="QuizTimer" @progress="handleCountdownProgress"
          @abort="getTimeSpent" @end="EndTimer" :time="EndDate" :interval="100" tag="p" v-slot="{hours, minutes, seconds }">
            <template> 
                <div class="d-flex justify-center mt-0 pt-0">
                    <div class="text-center">
                        <div class="text-md-h6"> {{hours >= 10 ? hours : '0'+hours}}</div>
                        <div class="caption">hours</div>  
                    </div>
                    <span class="font-weight-bold mt-1">:</span>
                    <div class="text-center">
                        <div class="text-md-h6">{{minutes >= 10 ? minutes : '0'+minutes }}</div>
                        <div class="caption">minutes</div>  
                    </div>
                    <span class="font-weight-bold mt-1">:</span>
                    <div class="text-center">
                        <div class="text-md-h6">{{seconds >= 10 ? seconds : '0'+seconds }}</div>
                        <div class="caption">seconds</div>  
                    </div>
                </div>
            </template>
        </countdown>
      </div>
</div>
</template>
<script>
import Countdown from '@chenfengyuan/vue-countdown';
export default {
    props:['duration','StopTimer','StartTime','CurrentTime'],
    components:{
        Countdown
    },
    data: ()=> ({
        EndDate: null,
        endAt: null,
        timeSpent: null,
        isTimesUps: false,
        Startdate: null,
        CurrentUserTime:{}
    }),
    watch: {
      'StopTimer': function(arMsg) {
         if(arMsg == true){
             if( this.isTimesUps != true){
                //this.getTimeSpent();
                this.$refs.QuizTimer.abort();
             }
         }
      }
   },
    methods:{
        startTimer(){
            this.endAt = this.CurrentTime+1000;
            this.Startdate = this.CurrentTime;
            let due = (this.duration*60) * 1000;
            this.EndDate = (this.StartTime+due) - this.CurrentTime;
        },
        EndTimer(){
            let totalSeconds = ((this.CurrentUserTime.hours*60)*1000)+(this.CurrentUserTime.minutes*1000);
            this.timeSpent = this.duration;
            let data = {};
            data.time = this.timeSpent;
            this.isTimesUps = true;
            this.$emit('TimesUp', data);
        },
        getTimeSpent(){
            let totalSeconds = (((this.CurrentUserTime.hours*60)*60)*1000)+((this.CurrentUserTime.minutes*60)*1000);
            this.timeSpent = Math.floor((totalSeconds / 1000)/60);
            //console.log((this.duration - this.timeSpent));
            let data = {};
            data.time = this.duration - this.timeSpent;
            data.istime = this.isTimesUps;
            this.$emit('TimerStop', data);
        },
        handleCountdownProgress(data) {
            this.CurrentUserTime.hours = data.hours;
            this.CurrentUserTime.minutes = data.minutes;
        },
    },
    beforeMount(){
        this.startTimer();
    },
}
</script>