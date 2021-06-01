<template>
<v-row class="pt-4">
    <v-col lg="8">
           <classDescriptionCard> </classDescriptionCard>
    </v-col>
      <v-col lg="4">
            <gradingCategoryCard> </gradingCategoryCard>
    </v-col>
</v-row>
  
</template>


<script>
   /*  import gradingCategoryCard from './gradingCateogry'
    import classDescriptionCard from './class_description' */
    const gradingCategoryCard = () => import("./gradingCateogry")
    const classDescriptionCard = () => import("./class_description")
   export default {
        components: {
            gradingCategoryCard,
            classDescriptionCard
        },
      
    }

</script>
