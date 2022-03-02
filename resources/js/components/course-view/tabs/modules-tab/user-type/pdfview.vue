<template>



    <v-card style="">

        <!-- <iframe title="google pdf viewer"  class="pdf-viewer" :src="'https://docs.google.com/viewer?embedded=true&amp;url=' + pdf_file" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                             style="position: absolute; top: 0px; left: 0px; width: 100% !important; height: 100%; !important"></iframe> -->
        <iframe height="100%" class="pdf-viewer holds-the-iframe" width=100% :src="`${pdf_file}`"></iframe>
      
      
      
        <!-- <vue-pdf-app :pdf="pdf_file" :config="config"></vue-pdf-app> -->
      
      
      
      
        <!-- {{pdf_file}}
<pdf :src="pdf_file"></pdf>  -->


    </v-card>




</template>

<script>
    import VuePdfApp from "vue-pdf-app";
    // import this to use default icons for buttons
    import "vue-pdf-app/dist/icons/main.css";
    // import pdf from 'vue-pdf'

    export default {
        props: ['pdf_file', 'title'],
        components: {
            // "VuePdfApp": () => ({
            //     component: new Promise((res) => {

            //     })
            // })
            VuePdfApp

        },

        data() {
            return {

                dialog: false,
                pdf_path: null,
                config: {
                    toolbar: {
                          sidebar: {
    viewThumbnail: true,
    viewOutline: true,
    viewAttachments: true,
  },
                        toolbarViewerLeft: {
                            findbar: false,
                            download: false
                        },
                        toolbarViewerRight: {
                            presentationMode: true,
                            openFile: false,
                            print: false,
                            download: false,
                            viewBookmark: false,
                        },

                    }
                },
            };
        },
        methods: {

        },
        mounted() {
            var host = window.location.protocol + "//" + window.location.host;

            this.pdf_path = host + this.pdf_file;
            this.pdf_path = window.location.origin + '/lib/web/viewer.html?file=' + this.pdf_file;

            this.$emit('loaded');

        },
    };

</script>


<style>
#secondaryToolbarToggle,#sidebarToggle {
    display: none;
}
    .holds-the-iframe {
        background: url('https://orangestr.sgp1.digitaloceanspaces.com/loading/loading/Infinity-1.5s-200px.gif') center center no-repeat;
    }

    .toolbar {
        z-index: 1 !important;
    }

    .pdf-viewer {
        height: 100% !important;
        width: 100% !important;
    }

</style>
