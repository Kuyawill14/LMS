<template>

       <v-card>
        <v-card-title class="text-h6">
          Are you sure?
        </v-card-title>
        <v-card-text class="pb-0 mb-0 text-subtitle-1">
      
             Deleting questions from this classwork cannot be undone.
        </v-card-text >
        <v-card-actions class="pb-3">
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="$emit('toggleDialog')"
          >
            Cancel
          </v-btn>
          <v-btn
            :loading="isDeleting"
            color="primary"
            text
            @click="$emit('confirmRemove'),isDeleting = true;"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
  data(){
    return{
      isDeleting: false,
    }
  }
}
</script>
