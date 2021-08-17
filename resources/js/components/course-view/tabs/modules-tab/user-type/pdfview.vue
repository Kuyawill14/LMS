<template>



    <v-card>
        
       <iframe title="google pdf viewer" id="pdf-iframe" :src="'https://docs.google.com/viewer?embedded=true&amp;url='+'/storage/' + subModuleData.file_attachment" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                             style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"></iframe>
                            
    </v-card>




</template>

<script>
    // import VuePdfApp from "vue-pdf-app";
    // import "vue-pdf-app/dist/icons/main.css";
    // VuePdfApp component is registered in src/main.js


    export default {
        props: ['pdf_file', 'title'],
        data() {
            return {
                dialog: false,
                pdf_path:null,
            };
        },

     
        methods: {
         

        },
        created() {
        this.pdf_path = this.pdf_file;

        },
    };

</script>


<style >
    .toolbar {
        z-index: 1 !important;
    }
</style>