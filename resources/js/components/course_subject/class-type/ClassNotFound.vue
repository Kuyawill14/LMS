<template>

    <v-container style="height:75vh" class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="4">
                    <v-card outlined class="pa-5">
            
                       <v-row>
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

    
</template>