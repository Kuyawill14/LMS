<template>
  <v-app>
  <v-container pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="12" md="12">
                <v-card  class="elevation-5">
                    <v-window>
                        <v-window-item >
                                <v-row>
                                    <v-col  cols="12" md="12" class="pa-7 primary">
                                 
                                    </v-col>
                                    <v-col  cols="12" md="12" class="pt-1">
                                      <div class="h2"> {{currentPage}} / {{pageCount}}</div>
                                      
                                          <pdf class="mt-0 pt-0"
                                          style="display: inline-block; width: 50%"  
                                          :src="src"
                                          @num-pages="pageCount = $event"
                                          @page-loaded="currentPage = $event"
                                          ></pdf>
                                    </v-col>
                                </v-row>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>
 
<script>
import pdf from 'vue-pdf';
export default {
    components: {
    pdf
  },
 
  data(){
        return{
            src : '../../storage/test.pdf',
            currentPage: 0,
            pageCount: 0,
        }
    },
  methods:{
     previewPDF(url){
          this.src = pdf.createLoadingTask(url)
      },
  },
 
}
</script>

