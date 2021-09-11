<template>
    <v-card class="pa-2">
        <v-card-title class="text-h5 mb-3">
          Archive class
        </v-card-title>
        <v-card-text class="font-weight-bold">
             <div class="subtitle-1 " style="line-height:1.1">
                 Clicking confirm will put your <span class="font-weight-bold">{{ArchiveDetails.class_name+' class'}}</span> in your archive. Continue?</div>
            </v-card-text>
        <v-card-actions class="pb-3">
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="$emit('toggleCancelDialog')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="PutClasstoArchive(ArchiveDetails.class_id)"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
    props:['ArchiveDetails'],
    methods:{
        async PutClasstoArchive(id){
            await axios.put('/api/class/archive-class/'+id)
            .then(res=>{
                this.$emit('toggleconfirm');
            })
        }
    }
    
}
</script>