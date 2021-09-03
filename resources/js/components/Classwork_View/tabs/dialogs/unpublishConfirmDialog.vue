<template>
    <v-card>
        <v-card-title >
          <v-btn large
            icon
            @click="$emit('toggleCancelDialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <span class="h6"> Unpublish from <span class="primary--text ml-2">"{{UnpublishDetails.class_name}}"</span> </span>
        </v-card-title>

        <v-card-text class="font-weight-bold">
             <div class="subtitle-1 ">Clicking confirm will unpublish this classwork. 
                 All Details Related to it will be remove. Continue?</div>
        </v-card-text>

        <v-card-actions class="pb-2 pl-5 pr-5">
          
          <v-btn
            color="primary"
            block
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