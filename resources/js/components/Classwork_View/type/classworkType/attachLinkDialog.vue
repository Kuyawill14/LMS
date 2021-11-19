<template>
    <v-card >
        <v-card-title >
          <v-btn
          
            icon
            @click="$emit('toggleCancelDialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <span class="text-h6"> Attach Link</span>
      
        </v-card-title>
        <v-card-text >
           <v-row>
                <v-col cols="12" class="mb-0 pb-0">
                  <v-textarea
                  v-model="title"
                  class="mb-0 pb-0"
                   outlined
                   dense
                   rows="1"
                  label="Title"
                  auto-grow
                ></v-textarea>
                </v-col>

                 <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0">
        
                  <v-textarea
                  v-model="link"
                  class="mb-0 pb-0"
                   outlined
                   dense
                   rows="1"
                  label="Link"
                  auto-grow
                ></v-textarea>
                </v-col>
            </v-row>
       
        </v-card-text>
      
        <v-card-actions class="pb-2 pl-5 pr-5">
          <v-spacer></v-spacer>
            <!--  @click="$emit('toggleSubmit')" -->
          <v-btn
            color="primary"
            block
            rounded
            @click="scrapeDocID"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
  data(){
    return{
      title: null,
      link: null,
    }
  },
  methods:{
    scrapeDocID() {
              var d = this.link.replace(/.*\/d\//, '').replace(/\/.*/, '');
              //console.log(this.link);
              var path = "https://drive.google.com/file/d/" + d + "/preview";
             
              //window.open(path,'_blank');
          }
  }
}
</script>