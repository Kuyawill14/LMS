<template>
  <v-app>
  <v-container pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="10" md="10">
                <v-card  class="elevation-5">
                    <v-window>
                        <v-window-item >
                                <v-row>
                                    <v-col  cols="12" md="12" class="pa-7 primary">
                                 
                                    </v-col>
                                    <v-col style="" cols="12" md="12" class="pt-1">
                                        <vue-pdf-app style="height:98vh" :pdf="pdf" :config="config"></vue-pdf-app>
                                          
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
import VuePdfApp from "vue-pdf-app";
// import this to use default icons for buttons
import "vue-pdf-app/dist/icons/main.css";

export default {
  components: {
    VuePdfApp
  },
  data() {
    return {
      config: {
        toolbar: {
          toolbarViewerLeft: { findbar: false }
        }
      },
      pdf: this.getPdf()
    };
  },
  methods:{
      getPdf() {
        const pdf = '../../storage/test'
           

         return pdf;
    },
    base64ToArrayBuffer(base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
        }
  }
};
</script>

