<template>
    <v-container class="mb-0 pb-0 mt-2">
    <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12" md="10" lg="10" xl="12">
            <v-card :class="!isLoaded ? 'pt-5 pb-5': 'pt-5'">
                <div class="ma-0 pa-0 title">Time Remaining</div>
                <v-container v-if="isLoaded" class="d-flex justify-center">
                    
                    <div v-if="displayHours != 0" fab class="">
                        <div class="text-md-h5">{{displayHours}}</div>
                        <div class="caption ml-2">Hours</div>  
                    </div>
                    {{displayHours != 0 ? ':' : ''}}
                     <div fab class="">
                        <div class="text-md-h5">{{displayMinutes}}</div>
                        <div class="caption ml-2">Minutes </div>  
                    </div>
                    :
                      <div fab class="">
                        <div class="text-md-h5">{{displaySeconds}}</div>
                        <div class="caption ml-2">Seconds </div>  
                    </div>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
import moment from 'moment';
export default {
    props:['duration'],
    data: ()=> ({
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0,
        SecondProgress:1000,
        isLoaded: false
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
            let seconds_tic = localStorage.getItem('seconds_tic')
            if(seconds_tic == null){ 
                finalSeconds = parseInt(moment(StartTime).format('ss'))+1;
                localStorage.setItem('seconds_tic', finalSeconds);
            }
            else{
                finalSeconds = parseInt(localStorage.getItem('seconds_tic'))+1;
            }
            
           
            const year = moment(StartTime).format('YYYY');
            const month = moment(StartTime).format('M');
            const day = moment(StartTime).format('D');

            finalHour = format == 'pm' ? ((parseInt(hour)+12)) : hour;

            if(format == 'pm'){
                if(parseInt(hour) == 12){
                    finalHour = hour;
                }
                else{
                    finalHour = (parseInt(hour)+12);
                }
            }
            else{
                if(parseInt(hour) == 12){
                    finalHour = 0;
                }
                else{
                    finalHour = hour;
                }
              
            }

            let SubDuration;
            let subMinutes = localStorage.getItem('time_remaining');
            if(subMinutes == null){
                localStorage.setItem('time_remaining', this.duration);
                SubDuration = this.duration
            }
            else{
                SubDuration = (parseInt(subMinutes))
            }

            let letFinalMinutes = ((SubDuration)+(parseInt(minutes)));
  
         
                

   
                

            const timer = setInterval(()=>{
            
            const nowDate = new Date();
            const endDate = new Date(year,month,day,finalHour,letFinalMinutes,finalSeconds);
            const timeRemain = endDate.getTime() - nowDate.getTime();
            
            const days = Math.floor(timeRemain/this._day);
            const hours = Math.floor((timeRemain % this._day)/this._hour);
            const minutes = Math.floor((timeRemain % this._hour)/this._minutes);
            const second = Math.floor((timeRemain % this._minutes)/this._seconds);
            this.displayHours = hours < 10 ?"0" + hours :hours;
            this.displayMinutes = minutes < 10 ?"0" + minutes :minutes;


                this.displaySeconds = second < 10 ?"0" + second :second;

                this.SecondProgress =   (this.displaySeconds / 100)

                if(second == 0){
                    let remain_time =parseInt((localStorage.getItem('time_remaining'))-1);
                    localStorage.setItem('time_remaining', remain_time);
                    let check = localStorage.getItem('time_remaining');
                    if(check == '0'){
                        clearInterval(timer);
                        this.$router.push({path: '/'});
                        localStorage.removeItem('time_remaining');
                        localStorage.removeItem('seconds_tic');
                    }
                }
                this.isLoaded = true;
            },1000)
            
        }
    },
    mounted(){
        
         this.ShowTimer();
     
       

    },
   
}
</script>