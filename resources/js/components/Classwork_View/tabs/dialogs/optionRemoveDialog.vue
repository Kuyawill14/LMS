<template>
    <v-card>
        <v-card-title class="text-h5">
          Delete Option {{DeleteDetails.number}}
        </v-card-title>
        <v-card-text>
             <p>This will permanently remove the option from this question.</p>
            </v-card-text>
        <v-card-actions class="pb-5">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            rounded
            outlined
            @click="$emit('toggleOptionDialog')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            rounded
            @click="RemoveOption(DeleteDetails.id)"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
    props:['DeleteDetails'],
    methods:{
         RemoveOption(id){
             axios.delete('/api/question/'+id)
            .then(res=>{
                this.$store.dispatch('fetchQuestions', this.$route.query.clwk)
                .then(r=>{
                    this.$emit('reloadOptionList');
                });
            })
        }
    }
}
</script>