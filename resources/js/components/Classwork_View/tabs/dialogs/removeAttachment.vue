<template>
<div>
    <v-card class="pa-2">
        <v-card-title class="text-h5 mb-3">
          Remove Attachment
        </v-card-title>
        <v-card-text class="font-weight-bold">
             <div class="subtitle-1 " style="line-height:1.1">
                 Are you sure to remove this file attachment?
             </div>
            </v-card-text>
        <v-card-actions >
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
      
            @click="$emit('toggleconfirm')"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
      </div>
</template>
