<template>
    <v-container class="mb-0 pb-0 mt-2" >
    <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="11" md="10" lg="10">
            <v-card class="pt-5">
                <div class="ma-0 pa-0 title">Time Remaining</div>
                <v-container class="d-flex justify-center">
                    <div fab class="pa-3">
                        <div class="text-md-h5">{{displayHours}}</div>
                        <div class="caption ml-2">Hours</div>  
                    </div>
                     <div fab class="pa-3">
                        <div class="text-md-h5">{{displayMinutes}}</div>
                        <div class="caption ml-2">Minutes </div>  
                    </div>
                      <div fab class="pa-3">
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
    data: ()=> ({
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0,
        duration:''
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
            const EndDate = new Date();
          
            let finalHour;
            let format = moment(EndDate).format('a');
            let hour = moment(EndDate).format('h');
            let minutes = moment(EndDate).format('mm');

            const year = moment(EndDate).format('YYYY');
            const month = moment(EndDate).format('M');
            const day = moment(EndDate).format('D');

        
                if(format == 'pm'){
                    finalHour = ((parseInt(hour)+12))
                }
                else{
                    finalHour = hour;
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

                let letFinalMinutes = ((SubDuration-1)+(parseInt(minutes)));
                

                const timer = setInterval(()=>{
              
                const nowDate = new Date();
                const endDate = new Date(2021,6,6,finalHour,letFinalMinutes,60,10);
                const timeRemain = endDate.getTime() - nowDate.getTime();
                

        
                let time = timeRemain; 
                let saved_countdown = localStorage.getItem('saved_countdown');      
                

                if(saved_countdown == null) {
                    // Set the time we're counting down to using the time allowed
                    let new_countdown = new Date().getTime();
                    time = new_countdown;
                    localStorage.setItem('saved_countdown', new_countdown);
                } else {
                    time = saved_countdown;
                }

                
              



                const days = Math.floor(timeRemain/this._day);
                const hours = Math.floor((timeRemain % this._day)/this._hour);
                const minutes = Math.floor((timeRemain % this._hour)/this._minutes);
                const second = Math.floor((timeRemain % this._minutes)/this._seconds);
                this.displayHours = hours < 10 ?"0" + hours :hours;
                this.displayMinutes = minutes < 10 ?"0" + minutes :minutes;
                this.displaySeconds = second < 10 ?"0" + second :second; 
                
                if(second == 0){
                    let remai_time = this.displayMinutes;
                    localStorage.setItem('time_remaining', remai_time);
                    
                    let check = localStorage.getItem('time_remaining');
                    console.log(check)
                    if(check == '00'){
                        alert("Success");
                        clearInterval(timer);
                        localStorage.removeItem('time_remaining');
                    }
                   
                }

                

         
              /*   else if(subMinutes <= 0){
                    clearInterval(timer);
                    alert("Success")
                } */
               /*  this.displayMinutes = this.duration < 10 ?"0" + this.duration :this.duration */
                /* const now = new Date();
                const distance = time - now;
                let counter = Math.floor((distance % (1000 * 60)) / 1000);
                 this.displaySeconds = counter < 10 ?"0" + counter :counter;
                //console.log(counter)

                if(counter <= 0){
                    clearInterval(timer);
                    localStorage.removeItem('saved_countdown');
                  
                } */
                 //this.displaySeconds = counter < 10 ?"0" + second :second;


                /* const now = new Date();
                const end = new Date(year,month,day,finalHour,letFinalMinutes,60,10);
                const timeRemain = end.getTime() - now.getTime();

                
                const days = Math.floor(timeRemain/this._day);
                const hours = Math.floor((timeRemain % this._day)/this._hour);
                const minutes = Math.floor((timeRemain % this._hour)/this._minutes);
                const second = Math.floor((timeRemain % this._minutes)/this._seconds);
                this.displayHours = hours < 10 ?"0" + hours :hours;
                this.displayMinutes = minutes < 10 ?"0" + minutes :minutes;
                this.displaySeconds = second < 10 ?"0" + second :second; */
            },1000)
        }
    },
    mounted(){
         axios.get('/api/classwork/showDetails/'+ this.$route.query.clwk)
        .then(res=>{
            this.duration = res.data.Details[0].duration;
            this.ShowTimer();
        })
        
     
       

    },
   
}
</script>