<template>
    <v-card class="pa-2">
        <v-card-title class="text-h5 mb-3">
          Unpublish from <span class="primary--text ml-2">"{{UnpublishDetails.class_name}}"</span> 
        </v-card-title>
        <v-card-text class="font-weight-bold">
             <div class="subtitle-1 ">Clicking confirm will unpublish this classwork. 
                 All Details Related to it will be remove. Continue?</div>
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
            @click="UnpublishClasswork();"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
  props:['UnpublishDetails'],
  methods:{
      async UnpublishClasswork(){
        axios.post('/api/classwork/unshare',this.UnpublishDetails)
        .then(res=>{
          this.$emit('UnpublishSuccess');
        })
      }
  }
    
}
</script>