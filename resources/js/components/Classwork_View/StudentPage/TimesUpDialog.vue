<template>
    <v-card class="pa-3">
        <div class="mb-3 pa-2">
          <v-row align="center" justify="center">
              <v-col cols="12" class="text-center mb-0 pb-0">
                  <!-- <v-icon color="error" style="font-size:7rem">
                      mdi-alert
                  </v-icon> -->
                  <v-avatar tile size="120">
                       <v-img src="https://media.baamboozle.com/uploads/images/48952/1623726160_37310.gif"></v-img>
                  </v-avatar>
              </v-col>
               <v-col cols="12" class="text-center mt-0 pt-0">
                 <div class="primary--text display-2">{{count}}</div>
              </v-col>
          </v-row>
        </div>
        <v-card-text >
            <v-row>
                <v-col class="text-center">
                  <p class="body-1">
                     Your time is finish the examination will now submitted!
                  </p>
             
                </v-col>
            </v-row>
  
        </v-card-text>
      </v-card>
</template>
<script>
export default {
    data(){
        return{
            count: 5
        }
    },
    mounted(){
      
       setInterval(()=>{
            this.count--;
            if(this.count == 0){
            
            }
        },1000)
      
    }
}
</script>