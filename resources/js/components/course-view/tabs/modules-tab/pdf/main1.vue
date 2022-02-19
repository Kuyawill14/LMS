<template>
     <PDFDocument v-bind="{pdf_file, scale}" class="tests" />
</template>



<script>

  import PDFDocument from './PDFDocument1';
export default {
  // ...
  props:['pdf_file'],
  data() {
    return {
      url: 'https://cdn.filestackcontent.com/5qOCEpKzQldoRsVatUPS', // a PDF
      scale: 2,
    }
  },
  components: {
      PDFDocument
  },
}
</script>