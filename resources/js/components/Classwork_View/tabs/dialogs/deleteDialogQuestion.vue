<template>
    <v-card>
        <v-card-title class="text-h5">
          Are you sure?
        </v-card-title>
        <v-card-text class="pb-0 mb-0">
             <p class="d-flex textData">To delete this question?</p>
        </v-card-text >
        <v-card-actions class="pb-2">
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
            @click="$emit('confirmRemove'),isDeleting = true"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
    props:['DeleteDetails'],
     data(){
      return{
        isDeleting: false,
    }
  }
}
</script>
