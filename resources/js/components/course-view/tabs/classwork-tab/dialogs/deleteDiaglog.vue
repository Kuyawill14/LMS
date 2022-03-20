<template>
<div>
      <v-overlay :value="isDeleting">
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>

      <v-card>
          <v-card-title class="text-h5">
            Delete Classwork<!-- <span class="primary--text ml-1"> "{{ DeleteDetails.title}}"</span>  -->
          </v-card-title>
          <v-card-text>
              <p>Are you sure you want to delete this classwork?</p>
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
             :loading="isDeleting"
              color="primary"
              text
              @click="RemoveClasswork()"
            >
              Yes
            </v-btn>
          </v-card-actions>
      </v-card>
</div>
   
</template>
<script>
export default {
    props:['DeleteDetails'],
    data(){
      return{
        isDeleting:false,
      }
    },
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
           this.isDeleting = true;
            axios.delete('/api/classwork/remove/'+this.DeleteDetails.id)
            .then(res=>{
                this.$emit("ToggleRefresh");
                this.isDeleting = false;
                this.toastNormal('Classwork Successfully Deleted');
            })
        }
    },
 
}
</script>