<template>
    <v-card>
        <v-card-title class="text-h5">
          Delete<span class="primary--text ml-1"> "{{ DeleteDetails.title}}"</span> 
        </v-card-title>
        <v-card-text>
             <p>This will permanently remove the classwork and all data related to it.</p>
            </v-card-text>
        <v-card-actions>
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
            @click="RemoveClasswork()"
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
         toastSuccess() {
            return this.$toasted.success("Classwork Removed", {
                theme: "toasted-primary",
                position: "top-center",
                icon: "done",
                duration: 3000
            });
        },
         async RemoveClasswork(){
            axios.delete('/api/classwork/remove/'+this.DeleteDetails.id)
            .then(res=>{
                this.$emit("ToggleRefresh");
                this.toastNormal('Classwork Successfully Deleted');
            })
        }
    },
 
}
</script>