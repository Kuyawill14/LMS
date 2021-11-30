<template>
<v-app>
    <v-container  class="fill-height" fluid>
            <v-row class="centered" style="min-width:350px;max-width:500px">
                <v-col cols="12" >
                    <v-card width="100%" outlined class="pa-5">
                       <v-row >
                           <v-col cols="12">
                               <h2 class="font-weight-regular">Course Not Found</h2>
                               <div>Look for it on Courses, or double-check your course link.</div>
                           </v-col>
                           <v-col class="text-right" cols="12">
                               <v-btn @click="$router.push({name: 'courses'})" color="primary">
                                   Back to Courses
                               </v-btn>
                           </v-col>
                       </v-row>
                        
                    </v-card>
                </v-col>
            </v-row>
    </v-container>
</v-app>
</template>

<style scoped>
.centered{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>