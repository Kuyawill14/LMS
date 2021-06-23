<template>
     <v-row class="pb-5">
        <v-col cols="12" class="mb-0 pb-0">
           <h3>COURSES</h3>
        
        </v-col>

        <v-col cols="12">
            <v-divider></v-divider>
        </v-col>

        
        <v-col cols="12">
         
             <v-row>
                 <v-col cols="4" v-for="(n, index) in 5" :key="index">
                    <v-card
                        class="mx-auto"
                        max-width="344"
                        outlined
                    >
                        <v-list-item>
                        <v-list-item-content>
                            <div class="text-center">
                            Programming 1
                            </div>
                        </v-list-item-content>
                        </v-list-item>
                          <v-divider></v-divider>

                           <v-list-item>
                        <v-list-item-content >
                            <div class="pa-2">
                                <div class="text-center">
                                89%
                                </div>

                                <div class="text-center">
                                Progress
                                </div>
                             </div>
                          
                        </v-list-item-content>
                        </v-list-item>
                          <v-divider></v-divider>

                           <v-list-item>
                        <v-list-item-content>
                            <div class="text-center">
                            Course Name
                            </div>
                        </v-list-item-content>
                        </v-list-item>
                        

                       <!--  <v-card-actions>
                        <v-btn outlined rounded text>
                            View
                        </v-btn>
                        </v-card-actions> -->
                    </v-card>
                 </v-col>
               
            

              
                 
             </v-row>
                    
                    

           

               
           
        </v-col>
        
    

     

      

    

       

     
    </v-row>
</template>