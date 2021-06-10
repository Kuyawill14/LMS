<template>
  <div style="height: 90vh">
    <button @click="changePdf('../../storage/test.pdf')" type="button">First pdf</button>
    <button @click="changePdf('../../storage/test.pdf')" type="button">
      Second pdf
    </button>
    <vue-pdf-app
      v-if="!loading"
      :pdf="pdf"
      @pages-rendered="pdfPagesRendered"
    ></vue-pdf-app>
    <p v-else>Loading PDF...</p>
  </div>
</template>

<script>
import VuePdfApp from "vue-pdf-app";
// import this to use default icons for buttons
import "vue-pdf-app/dist/icons/main.css";
export default {
  components: {
    VuePdfApp
  },
  name: "Basic",
  data() {
    return { pdf: "../../storage/test.pdf", loading: false };
  },
  methods: {
    changePdf(pdf) {
      this.loading = true;
      setTimeout(() => {
        this.pdf = pdf;
        this.loading = false;
      }, 3000);
    },
    pdfPagesRendered(pdfApp) {
      pdfApp.pdfViewer.currentScaleValue = "page-width";
    },
  },
};
</script>