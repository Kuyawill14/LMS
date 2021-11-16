<template>
    <div>
      <div class="pb-0 mb-0" >
          <countdown class="mb-0 pb-0" ref="QuizTimer" 
            :time="EndDate" :interval="100" tag="p" v-slot="{hours, minutes, seconds }">
            <template> 
                <div class="d-flex justify-center mt-0 pt-0 mb-0 pb-0">
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
    props:['duration'],
    components:{
        Countdown
    },
    data: ()=> ({
        EndDate: null,
        endAt: null,
        timeSpent: null,
        isTimesUps: false,
        StartTime: new Date().getTime(),
        CurrentUserTime:{},
        CurrentTime: new Date().getTime(),
    }),
    methods:{
        startTimer(){
            let due = (this.duration*60) * 1000;
            this.EndDate = (this.StartTime+due) - this.CurrentTime;
        },
      
    },
    mounted(){
        this.startTimer();
    },
}
</script>