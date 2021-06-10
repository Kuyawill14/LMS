<template>
     <PDFDocument v-bind="{url, scale}" />
</template>



<script>

  import PDFDocument from './PDFDocument';
export default {
  // ...
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