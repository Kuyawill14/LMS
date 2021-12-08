<template>
    <v-card class="pa-2">
        <v-card-title class="text-h5 mb-3">
          Remove class
        </v-card-title>
        <v-card-text class="font-weight-bold">
             <div class="subtitle-1 " style="line-height:1.1">
                 Are yor sure to remove this class?
             </div>
            </v-card-text>
        <v-card-actions class="pb-3">
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="$emit('toggleCancelDialog')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="$emit('toggleConfirm')"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
