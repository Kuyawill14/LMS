<template>
     <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="Startdate"
      :end-time="EndDate"
      :interval="1000"

      :end-text="'Event ended!'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">
  

      <template slot="countdown" slot-scope="scope">
     
        <span style="color:red">{{scope.props.hours}}</span><i>{{scope.props.hourTxt}}</i>
        <span>{{scope.props.minutes}}</span><i>{{scope.props.minutesTxt}}</i>
        <span>{{scope.props.seconds}}</span><i>{{scope.props.secondsTxt}}</i>
      </template>

     

    </vue-countdown-timer>
</template>
<script>

export default {
  data(){
    return{
      Startdate: (new Date).getTime(),
      EndDate: (new Date).getTime()+20000,
    }
  },
   methods: {
    startCallBack: function(x) {
      //console.log(x);
    },
    endCallBack: function(x) {
      //console.log(x);
    },
  },
}
</script>