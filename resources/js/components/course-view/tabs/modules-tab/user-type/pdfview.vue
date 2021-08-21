<template>



    <v-card style="height: 500px;">
        
       <iframe title="google pdf viewer" id="pdf-iframe" :src="'https://docs.google.com/viewer?embedded=true&amp;url=' + pdf_path" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                             style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"></iframe>
                            
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

        created() {
        var host = window.location.protocol + "//" + window.location.host;
        this.pdf_path = host+ this.pdf_file;

        },
    };

</script>


<style >
    .toolbar {
        z-index: 1 !important;
    }
</style>