<template>
     <v-row class="pb-5">
        <v-col cols="12" class="mb-0 pb-0">
           <h3>ABOUT</h3> 
        </v-col>
        
        <v-col cols="12">
            <v-divider></v-divider>
        </v-col>

        <v-col cols="12" v-if="isloading">
            <v-container class="fill-height" v-if="isloading" >
            <v-row  align-content="center" justify="center">
                <v-col class="text-subtitle-1 text-center" cols="12">
                    Loading
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
            </v-container>
        </v-col>

        <v-col v-if="!isloading" cols="12" class="ma-0 pa-0">
 

                <v-col cols="12" class="mt-0 pt-0">
                    <v-row>
                        <v-col cols="12" md="1">
                            
                        </v-col>
                        <v-col cols="12" md="11">
                                <h4 class="mt-5">Introduction</h4> 
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                    <v-row>
                        <v-col cols="12" md="1" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                            Bio
                        </v-col>
                        <v-col cols="12" md="11">
                             <v-textarea
                                outlined
                                auto-grow
                                rows="3"
                                value="Hi, I am an 4th Student from Isabela State University, CCSICT Department."
                                ></v-textarea>
                        </v-col>
                    </v-row>
                </v-col>
         

            
        </v-col>


       

        

        

        

     
    </v-row>
</template>
<script>
export default {
    props:['UserDetails'],
    data(){
        return{
            isloading: true
        }
    },
    beforeMount(){
         setTimeout(() => {
                this.isloading = !this.isloading;
        }, 1000);
    }
}
</script>