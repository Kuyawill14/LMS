<template>
 
    <v-card class="text-center">
       <v-alert class="ma-0 pa-0" >
    <v-card-title class="text-h5">
      <span class="font-weight-bold">Good Day!</span>
        <v-spacer></v-spacer> <v-btn v-if="isEvaluated" @click="$emit('closeDialog')" icon><v-icon>mdi-close</v-icon></v-btn>
    </v-card-title>
      <div class="pl-2 pr-2" >
          <p class="pl-3 pr-3" >
            Can we ask some of your time to answer our system evaluation form using the Heuristics Evaluation Checklist as prescribed  
              by the Human Computer Interaction. This is in compliance with our subject Human Computer 
              Interaction.Please evaluate our system objectively and with full honesty.
          </p>
          <a style="font-size:23px"  @click="openLink()"   href="https://forms.gle/A4RTih2hhx7wPW5Z9" target="_blank">https://forms.gle/A4RTih2hhx7wPW5Z9</a>
          <br><br>
          <p class="pl-5 pr-5" >
            <span class="font-weight-medium">Thank you for your time. </span>Your participation and cooperation is highly appreciated. Stay safe.
          </p>
  
          <p class="text-left pl-5 pr-5">
            <span class="font-weight-bold">ISUE Orange Team</span>
            <br>
            Mark Joshua Elimar Mandigma<br>
            Wilson Magaoay <br>
            Dwight Jefferson M. Salarzon<br>
          </p>

          
      </div>
        </v-alert>
    </v-card>

</template>
<script>
export default {
  data(){
    return{
      isEvaluated: localStorage.getItem("isEvaluate")
    }
  },
  methods:{
    openLink(){
      let check = localStorage.getItem("isEvaluate");
      if(!check){
        localStorage.setItem("isEvaluate", true);
        this.$emit('closeDialog');
      }
      else{
        this.$emit('closeDialog');
      }      
    }
  }
}
</script>