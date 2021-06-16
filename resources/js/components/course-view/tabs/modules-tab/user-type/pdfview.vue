<template>



    <v-card>
        
        <v-toolbar dark color="primary" style="display:none">
            <v-btn icon dark @click="$emit('closePdf')">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>

                <span class="divider"></span>
                <input :id="idConfig.pageNumber" @change="pageHandler()" type="number" name="pageNumber"
                    style="width: 40px" />
                <span class="divider"></span>

                <span> pages</span>


            </v-toolbar-items>
        </v-toolbar>
     
        <div >

            <vue-pdf-app :pdf="pdf_path" :id-config="idConfig" :page-scale="page-fit" @pages-rendered="pagesRendered"
                style="height:80vh">
               
            </vue-pdf-app>

        </div>
    </v-card>




</template>

<script>
    import VuePdfApp from "vue-pdf-app";
    import "vue-pdf-app/dist/icons/main.css";
    // VuePdfApp component is registered in src/main.js


    export default {
        props: ['pdf_file', 'title'],
        data() {
            return {
                dialog: false,
                idConfig: {
                    pageNumber: "vuePdfAppPageNumber",
                },
                page: 6,
                pdf_path:null,
            };
        },

        components: {
            VuePdfApp
        },
        methods: {
            pagesRendered(pdfApp) {


            },
            pageHandler() {

                //  $('.page').css("display", "none");
                //                 var currentPage = parseInt($('#vuePdfAppPageNumber').val()) - 1;
                //                 $('.page:eq(' + currentPage + ')').attr('style', 'display:block');
                //                 console.log(currentPage);

            },
            test() {
                alert('12312');
            }

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