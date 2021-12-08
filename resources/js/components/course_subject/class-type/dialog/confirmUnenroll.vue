<template>
    <v-card class="pa-2">
        <v-card-title class="text-h5 mb-3">
          Unenroll Course
        </v-card-title>
        <v-card-text class="font-weight-bold">
             <div class="subtitle-1 " style="line-height:1.1">
                 Clicking confirm will remove this <span class="font-weight-bold">{{ArchiveDetails.name+' course'}}</span> and put in your in archive courses. Continue?</div>
            </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            rounded
            text
            @click="$emit('toggleCancelDialog')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            rounded
            text
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