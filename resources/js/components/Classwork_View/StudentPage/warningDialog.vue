<template>
    <v-card class="pa-2">
        <div class="mb-3 pa-2">
          <v-row align="center" justify="center">
              <v-col cols="12" class="text-center mb-0 pb-0">
                  <v-icon color="info" style="font-size:7rem">
                      mdi-alert-circle-outline
                  </v-icon>
              </v-col>
               <v-col cols="12" class="text-center mt-0 pt-0">
                 <div class="info--text display-1">Opps!</div>
              </v-col>
          </v-row>
        </div>
        <v-card-text >
            <v-row>
                <v-col class="text-center">
                  <div class="body-1">
                     Please refrain from leaving the examination page while it's ongoing or else it will be submitted automatically!
                  </div>
                   <v-btn color="primary" rounded large class="ml-3 mr-3 mt-2" @click="$emit('toggleCloaseDialog')">Confirm</v-btn>
                </v-col>
            </v-row>
  
        </v-card-text>
      
      </v-card>
</template>
<script>
export default {
    
}
</script>