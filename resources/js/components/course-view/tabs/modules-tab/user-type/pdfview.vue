<template>



    <v-card style="height: 620px;">
        
       <!-- <iframe title="google pdf viewer"  class="pdf-viewer" :src="'https://docs.google.com/viewer?embedded=true&amp;url=' + pdf_path" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                             style="position: absolute; top: 0px; left: 0px; width: 100% !important; height: 100%; !important"></iframe> -->
               <iframe height="100%" class="pdf-viewer"  width=100% :src="`${pdf_path}`" ></iframe>               
    </v-card>




</template>

<script>


    export default {
        props: ['pdf_file', 'title'],
        data() {
            return {
                dialog: false,
                pdf_path:null,
            };
        },

        mounted() {
        var host = window.location.protocol + "//" + window.location.host;
       
       this.pdf_path = host+ this.pdf_file;
         this.pdf_path  =  window.location.origin+'/lib/web/viewer.html?file='+ this.pdf_path; 

        },
    };

</script>


<style >
    .toolbar {
        z-index: 1 !important;
    }
    .pdf-viewer {
        height: 100% !important;
        width: 100% !important;
    }
</style>