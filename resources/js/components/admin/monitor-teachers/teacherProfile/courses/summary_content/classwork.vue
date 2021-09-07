<template>
    <div>

       
        <v-row v-if="isGetting" align-content="center" style="margin-top: 10rem" justify="center">
            <v-col class="text-subtitle-1 text-center" cols="12">
                Loading Classworks
            </v-col>
            <v-col cols="6">
                <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
            </v-col>
        </v-row>
        
        <v-row style="margin-top: 7rem" align="center" justify="center" class="pt-10" >
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:7rem">
                    mdi-book-open-variant
                </v-icon>
                <h2> Empty Classwork </h2>
            </v-col>
        </v-row>

        
        
    </div>
</template>
<script>
export default {
    props: ['course_details'],
    data(){
        return{
         
            isGetting: true,
        }
    },
 
    methods:{
        

    },
    mounted(){
       this.isGetting = false;
    },


}
</script>