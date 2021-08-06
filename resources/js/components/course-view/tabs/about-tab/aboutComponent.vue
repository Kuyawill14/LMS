<template>
<div>
     <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
        <template v-slot:item="{ item }">
        <v-breadcrumbs-item
            :to="{name: item.link}"
            :disabled="item.disabled"
        >
            {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
        </template>
    </v-breadcrumbs>

<v-row class="mt-1">
   

    <v-col cols="12" md="12" lg="8">
           <classDescriptionCard> </classDescriptionCard>
    </v-col>
      <v-col class="12" md="12" lg="4">
            <gradingCategoryCard> </gradingCategoryCard>
    </v-col>
</v-row>
  </div>
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
        data(){
            return{
                items: [
                    {
                    text: 'Course',
                    disabled: false,
                    link: 'courses',
                    },
                    {
                    text: 'About',
                    disabled: true,
                    link: 'breadcrumbs_link_2',
                    },
                ],
            }
        }
      
    }

</script>
