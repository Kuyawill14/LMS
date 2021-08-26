<template>
    <v-card>
        <v-card-title class="text-h5">
          Delete Question {{DeleteDetails.number}}
        </v-card-title>
        <v-card-text class="pb-0 mb-0">
             <p>This will permanently remove the question.</p>
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
            color="primary"
            text
            @click="RemoveQuestion(DeleteDetails.id)"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
    props:['DeleteDetails'],
    data: ()=>({
      DeleteData:{}
    }),
    methods:{
         toastSuccess() {
            return this.$toasted.success("Question Successfully re", {
                theme: "toasted-primary",
                position: "top-center",
                icon: "done",
                duration: 3000
            });
        },
         RemoveQuestion(id){
            axios.delete('/api/question/remove/'+ id)
            .then((res)=>{
                this.DeleteData = {};
                this.$emit('reloadList');
            })
        }
    },
    mounted(){
      this.DeleteData = this.DeleteDetails;
    }

}
</script>