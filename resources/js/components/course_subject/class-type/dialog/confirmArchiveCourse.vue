<template>
    <v-card class="pa-2">
        <v-card-title class="text-h5 mb-3">
          Archive Course
        </v-card-title>
        <v-card-text class="font-weight-bold">
             <div class="subtitle-1 " style="line-height:1.1">
                 Clicking confirm will put your <span class="font-weight-bold">{{ArchiveDetails.name+' course'}}</span> in archive. Continue?</div>
            </v-card-text>
        <v-card-actions class="pb-5">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            rounded
            outlined
            @click="$emit('toggleCancelDialog')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            rounded
            @click="$emit('toggleconfirm')"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
    props:['ArchiveDetails'],
    
}
</script>