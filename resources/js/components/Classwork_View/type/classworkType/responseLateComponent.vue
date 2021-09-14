<template>
<div class=" mt-12 d-flex align-center" >
    <v-row style="margin-top:10rem"  justify="center" align="center">
        <v-col cols="12" md="10" lg="8" xl="8" class="pl-7 pr-7 pt-5">
            <v-card elevation="1" outlined class="pa-3 text-center" >
                <div class="text-left">
                    <v-btn icon @click="$router.push({name: 'classwork', params:{id: course_id}})">
                        <v-icon>
                            mdi-arrow-left
                        </v-icon>
                    </v-btn>
                </div>
                <v-row style="height:4vh"></v-row>
                    <v-row justify="center" align="center">
                        <v-col cols="12" >
                            
                            <v-avatar  color="red"  size="65">
                                 <v-icon color="white" x-large>
                            mdi-lock
                            </v-icon>
                            </v-avatar>
                        </v-col>
                        <v-col cols="12">
                            <div class="text-h5">
                                Classwork is Lock!
                            </div>
                        </v-col>
                        
                </v-row>   
                <v-row style="height:4vh"></v-row> 
            </v-card>
        </v-col>
    </v-row>
</div>      
</template>
<script>
export default {
    props:['course_id']
}
</script>

