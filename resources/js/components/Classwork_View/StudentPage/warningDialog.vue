<template>
    <v-card class="pa-3">
        <div class="mb-3 pa-2">
          <v-row align="center" justify="center">
              <v-col cols="12" class="text-center mb-0 pb-0">
                  <!-- <v-icon color="error" style="font-size:7rem">
                      mdi-alert
                  </v-icon> -->
                  <v-avatar tile size="120">
                       <v-img src="https://orangestr.sgp1.cdn.digitaloceanspaces.com/warning/reanimateVersion_cat.gif"></v-img>
                  </v-avatar>
              </v-col>
               <v-col cols="12" class="text-center mt-0 pt-0">
               <!--  <div v-if="isShowed">
                    <h1 class="primary--text display-3">{{leaveCount}}</h1>
                </div> -->
                 <div class="primary--text display-1">Oops...</div>
              </v-col>
          </v-row>
        </div>
        <v-card-text >
            <v-row>
                <v-col class="text-center">
                  <p class="body-1">
                     Please refrain from leaving the examination page while it's ongoing or else it will be submitted automatically!
                  </p>
                   <v-btn color="primary" rounded large class="ml-3 mr-3 mt-2" @click="$emit('toggleCloaseDialog')">Confirm</v-btn>
                </v-col>
            </v-row>
  
        </v-card-text>
      </v-card>
</template>
<script>
export default {
    props:['Count'],
    data(){
        return{
            leaveTimer:null,
            leaveCount: this.Count,
            isShowed: true,
        }
    },
    methods:{
        starttimer(){
            this.leaveTimer = setInterval(()=>{
                this.leaveCount--;
                if(this.leaveCount == 0){
                    clearInterval(this.leaveTimer);
                    this.isShowed = false;
                    this.$emit('toggleSaveLog');
                }
            },1000)
        }
    },
    mounted(){
        //this.starttimer();
    }
}
</script>