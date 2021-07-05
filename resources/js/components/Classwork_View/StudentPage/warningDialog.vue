<template>
    <v-card class="pa-2">
        <div class="mb-3 pa-2">
          <v-row align="center" justify="center">
              <v-col cols="12" class="text-center mb-0 pb-0">
                  <v-icon color="red lighten-2" style="font-size:7rem">
                      mdi-alert-circle-outline
                  </v-icon>
              </v-col>
               <v-col cols="12" class="text-center mt-0 pt-0">
                 <div class="red--text display-1">Opps, This is warning!</div>
              </v-col>
          </v-row>
        </div>
        <v-card-text class="font-weight-bold">
            <v-row>
                <v-col class="text-center">
                    Please refrain from leaving the examination page while it's ongoing or else it will be submitted automatically!
                </v-col>
            </v-row>
  
        </v-card-text>
        <v-card-actions class="pb-5">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            rounded
            @click="$emit('toggleCloaseDialog')"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
    
}
</script>