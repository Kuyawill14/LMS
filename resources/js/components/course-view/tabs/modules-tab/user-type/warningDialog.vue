<template>
    <v-card class="pa-3">
        <div class="mb-3 pa-2">
            <v-row align="center" justify="center">
                <v-col cols="12" class="text-center mb-0 pb-0">
                    <!-- <v-icon color="error" style="font-size:7rem">
                      mdi-alert
                  </v-icon> -->
                    <v-avatar tile size="120">
                        <v-img src="https://c.tenor.com/jFesPO4xs8kAAAAM/cat-watching-you.gif"></v-img>
                    </v-avatar>
                </v-col>
                <v-col cols="12" class="text-center mt-0 pt-0">
                    <div class="primary--text display-1">Oops...</div>
                </v-col>
            </v-row>
        </div>
        <v-card-text>
            <v-row>
                <v-col class="text-center">
                    <p class="body-1">

                        {{warning_type == 1 ? 
                        "You have been inactive for " +  timer_count + " seconds. Your timer will be paused."
                        :     "You have leave the module's page. Your timer will be paused."
                        }}
                        
                    </p>
                    <v-btn color="primary" :disabled="!isTimerDone || isTimerClickedFailed == true" rounded large
                        class="ml-3 mr-3 mt-2" @click="fn_timer_done()">
                        Confirm {{ timer == 0 ? '' : timer}}
                    </v-btn>
                    <br><br>
                    <span v-if="!isTimerClickedFailed "> Please click <b>Confirm</b> before {{failed_timer}} seconds</span>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
    export default {
        props: ['timer_count', 'warning_type'],
        data() {
            return {
                timer: 3,
                failed_timer: 5,
                isTimerClickedFailed: true,
                isTimerDone: false,
                _warning_type: this.warning_type,
                tmp_timer: null,
                counter: 1,

            }

        },
        methods: {
            fn_timer_done() {
                if (this.isTimerDone) {
                    this.$emit('toggleCloaseDialog');
                }

            },

            checkTimerDone(failed_timer) {
                // this.timer = this.warning_type == 0 ? this.timer : 3;
                if (failed_timer != null) {
                    this.timer = failed_timer;
                }
                var tmp_timer = setInterval(() => {

                    this.timer = this.timer - 1;
                    if (this.timer == 0) {
                        this.isTimerDone = true;
                        clearInterval(tmp_timer);
                        this.checkTimerFailed();
                    }

                }, 1000);

            },
            checkTimerFailed() {
            
                var _failed_timer = 30;
                this.failed_timer = 5;
                this.isTimerClickedFailed = false;
                var tmp_timer_failed = setInterval(() => {

                    this.failed_timer = this.failed_timer - 1;
                    if (this.failed_timer == 0) {

                        this.isTimerClickedFailed = true;
                        this.isTimerDone = false;
                        this.checkTimerDone(_failed_timer * this.counter);
                        clearInterval(tmp_timer_failed);
    this.counter++ ;
                    }

                }, 1000);

            }


        },
        mounted() {


            this.checkTimerDone();




        },
    }

</script>
