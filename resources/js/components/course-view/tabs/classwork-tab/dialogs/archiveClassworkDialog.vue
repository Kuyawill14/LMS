<template>
<div>
    <v-overlay :value="isArchiving">
        <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular>
    </v-overlay>

  <v-card>
      <v-card-title >
        Archive CLasswork
      </v-card-title>
      <v-card-text>
            <p>Are you sure want to put this classwork in archive?</p>
          </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('toggleDialog')">
          Cancel
        </v-btn>
        <v-btn :loading="isArchiving" color="primary" text @click="ArchiveClasswork()">
          Yes
        </v-btn>
      </v-card-actions>
  </v-card>
</div>
    
</template>
<script>
export default {
    props:['ArchiveDetails'],
    data(){
      return{
        isArchiving: false
      }
    },
    methods:{
         async ArchiveClasswork(){
           this.isArchiving = true;
           axios.delete('/api/classwork/archive/'+this.ArchiveDetails.id)
           .then((res)=>{
                if(res.data.success == true){
                  this.toastSuccess(res.data.message);
                  this.$emit('SuccessArchive');
                }
                else{
                  this.toastError(res.data.message);
                }
                this.isArchiving = false;
           })
        }
    },
 
}
</script>