<template>
    <div class="ma-0 pa-0">
        <iframe   height="100%" class="pdf-viewer holds-the-iframe"  width=100% :src="`${pdf_file}`" ></iframe>               
    </div>
</template>

<script>


    export default {
        props: ['pdf_file'],
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
/* .holds-the-iframe {
  background:url('https://orangestr.sgp1.digitaloceanspaces.com/loading/loading/Infinity-1.5s-200px.gif') center center no-repeat;
} */
    .toolbar {
        z-index: 1 !important;
    }
    .pdf-viewer {
        height: 100% !important;
        width: 100% !important;
    }
</style>