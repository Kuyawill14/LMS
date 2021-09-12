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
         async ArchiveClasswork(){
           axios.delete('/api/classwork/archive/'+this.ArchiveDetails.id)
           .then((res)=>{
                if(res.data.success == true){
                  this.toastSuccess(res.data.message);
                  this.$emit('SuccessArchive');
                  
                }
                else{
                  this.toastError(res.data.message);
                }
           })
        }
    },
 
}
</script>