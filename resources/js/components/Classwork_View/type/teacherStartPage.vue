<template>
    <v-app>
         <div class="container">
            <questionAdd></questionAdd>
         </div>
        <!--    list tab -->
         <div class="container">
            <questionList ></questionList>
         </div>
    </v-app>
</template>

<script>
const questionAdd = () => import('../actions/QuestionAdd')
const questionList = () => import('../actions/QuestionList')
export default {

    components:{
        questionAdd,
        questionList
    },
    
}
</script>