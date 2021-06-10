<template>
    <v-card>
        <v-card-title class="text-h5">
          Delete Question {{DeleteDetails.number}}
        </v-card-title>
        <v-card-text>
             <p>This will permanently remove the question.</p>
            </v-card-text>
        <v-card-actions class="pb-5">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            rounded
            outlined
            @click="$emit('toggleDialog')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            rounded
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
      console.log(this.DeleteDetails);
    }

}
</script>