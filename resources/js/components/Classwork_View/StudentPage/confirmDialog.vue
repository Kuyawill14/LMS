<template>
    <v-card class="pa-2">
        <v-card-title class="text-h5 mb-3">
          Submit Quiz
        </v-card-title>
        <v-card-text class="font-weight-bold">
            
             <div v-if="unAnsweredQuestion == 0" class="subtitle-1 " style="line-height:1.1">Are you sure you want to submit your quiz?
                 You will no longer be able to make changes 
                 to your answers unless allowed by the instructor.
              </div>

              <div v-if="unAnsweredQuestion > 0" class="subtitle-1 " style="line-height:1.1">Are you sure you want to submit your quiz?
                 You have <span class="font-weight-medium">{{unAnsweredQuestion}}</span> unanswered questions.
              </div>
            </v-card-text>
        <v-card-actions >
          <v-spacer></v-spacer>
          <v-btn
            rounded
            text
            @click="$emit('toggleCancelDialog')">
            {{unAnsweredQuestion == 0 ? 'Cancel' : 'Resume'}}
          </v-btn>
          <v-btn
            color="primary"
            text
            rounded
            @click="$emit('toggleSubmit')">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
  props:['unAnsweredQuestion'],
    
}
</script>