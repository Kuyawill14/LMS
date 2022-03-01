<template>
    <v-card class="pa-2">
        <v-card-title class="text-h5 mb-3">
          Clone {{course.course_code + ' - ' + course_name}}
        </v-card-title>
        <v-card-text class="font-weight-bold">
             <div class="subtitle-1 " style="line-height:1.1">
                 Cloning this course you'll able to clone the following course contents:
                  <br>
                  Grading Criteria 
                  <br>
                  Modules
                  <br>
                  Classworks 
                  <br>

                 
                 Are you sure to clone this <span class="font-weight-bold"> {{course_code + ' - ' + course_name}}</span>?
                 
                 
                 
                 
                 </div>
            </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            rounded
            text
            @click="$emit('toggleCancelDialog')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            rounded
            text
            @click="$emit('toggleconfirm')"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
    props:['ArchiveDetails'],
    
}
</script>