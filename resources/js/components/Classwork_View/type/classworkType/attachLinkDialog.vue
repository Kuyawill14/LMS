<template>
    <v-card class="pa-2">
        <v-card-title class="text-h5">
          Attach Link
        </v-card-title>
        <div class="pl-2 pr-2 mb-2">
          <v-divider></v-divider>
        </div>
        
          <v-container>

        
            <v-row>
                <v-col cols="12" class="mb-0 pb-0">
                  <v-textarea
                   outlined
                   dense
                   rows="1"
                  label="Title"
                  auto-grow
                ></v-textarea>
                </v-col>

                 <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0">
        
                  <v-textarea
                   outlined
                   dense
                   rows="1"
                  label="Link"
                  auto-grow
                ></v-textarea>
                </v-col>
            </v-row>
         </v-container>
        <v-card-actions class="pb-5">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            rounded
            outlined
            @click="$emit('toggleCancelDialog')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            rounded
            @click="$emit('toggleSubmit')"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>