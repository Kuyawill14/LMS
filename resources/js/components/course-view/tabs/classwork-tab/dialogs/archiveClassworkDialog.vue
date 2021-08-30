<template>
    <v-card>
        <v-card-title class="text-h5">
          Archive<span class="primary--text ml-1"> "{{ ArchiveDetails.title}}"</span> 
        </v-card-title>
        <v-card-text>
             <p>This will put the classwork in archive classworks.</p>
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
    props:['ArchiveDetails'],
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
            /* axios.delete('/api/classwork/remove/'+this.ArchiveDetails.id)
            .then(res=>{
                this.$emit("ToggleRefresh");
                this.toastSuccess();
            }) */
        }
    },
 
}
</script>