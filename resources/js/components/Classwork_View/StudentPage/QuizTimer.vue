<template>
    <div>
    <vue-countdown-timer
        @end_callback="EndTimer()"
        :start-time="Startdate"
        :end-time="EndDate?EndDate:endAt"
        :interval="1000"
        :hour-txt="'hours'"
        :minutes-txt="'minutes'"
        :seconds-txt="'seconds'">
        <template slot="countdown" slot-scope="scope">
        <div class="d-flex justify-center mt-0 pt-0">
            <div class="text-center">
                <div class="text-md-h6"> {{scope.props.hours}}</div>
                <div class="caption">{{scope.props.hourTxt}}</div>  
            </div>
            <span class="font-weight-bold mt-1">:</span>
            <div class="text-center">
                <div class="text-md-h6">{{scope.props.minutes}}</div>
                <div class="caption">{{scope.props.minutesTxt}}</div>  
            </div>
            <span class="font-weight-bold mt-1">:</span>
            <div class="text-center">
                <div class="text-md-h6">{{scope.props.seconds}}</div>
                <div class="caption">{{scope.props.secondsTxt}} </div>  
            </div>
        </div>
        </template>
    </vue-countdown-timer>
</div>
</template>
<script>
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
        endAt:  (new Date).getTime()+20000,
        timeSpent: null,
        isTimesUps: false
    }),
    watch: {
      'StopTimer': function(arMsg) {
         if(arMsg == true){
             if( this.isTimesUps != true){
                this.getTimeSpent();
             }
         }
      }
   },
    methods:{
        startTimer(){
            let due = (this.duration*60) * 1000;
            this.EndDate = new Date(this.StartTime).getTime()+due;
/*             let timeConsumed = this.Startdate - new Date(this.StartTime).getTime();
            this.timeSpent = Math.floor((timeConsumed / 1000)/60); */
        },
        EndTimer(){
            const timeConsumed = this.Startdate - new Date(this.StartTime).getTime();
            this.timeSpent = Math.floor((timeConsumed / 1000)/60);
            let data = {};
            data.time = this.timeSpent;
            this.isTimesUps = true;
            clearInterval(this.NewTimer);
            localStorage.removeItem(name);
            this.$emit('TimesUp', data);
        },
        getTimeSpent(){
            const timeConsumed = this.Startdate - new Date(this.StartTime).getTime();
            this.timeSpent = Math.floor((timeConsumed / 1000)/60);
            let data = {};
            data.time = this.timeSpent;
            data.istime = this.isTimesUps;
            this.$emit('TimerStop', data);
        }
    },
    beforeMount(){
        this.startTimer();
    },
   
}
</script>