<template>
    <v-card>
        <v-card-title >
     
          Archive CLasswork
        </v-card-title>
        <v-card-text>
             <p>This will put the classwork in archives.</p>
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
            @click="ArchiveClasswork()"
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
         async ArchiveClasswork(){
           axios.delete('/api/classwork/archive/'+this.ArchiveDetails.id)
           .then((res)=>{

           })
            /* axios.delete('/api/classwork/remove/'+this.ArchiveDetails.id)
            .then(res=>{
                this.$emit("ToggleRefresh");
                this.toastSuccess();
            }) */
        }
    },
 
}
</script>