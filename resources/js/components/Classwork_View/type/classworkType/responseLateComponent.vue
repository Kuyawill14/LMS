<template>
<v-app>
<v-card  class="elevation-12" ><!-- style="border-top:5px solid #EF6C00" -->
    <v-window>
        <v-window-item >
            <v-row>
                    <v-col cols="12" md="12" class="pl-7 pr-9 pt-5">
                    <v-row style="height:4vh"></v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-container ma-0 pa-0 class="d-flex flex-row justify-space-between">
                                <v-btn
                                class="mx-2"
                                fab
                                dark
                                
                                color="red"
                                >
                                <v-icon x-large>
                                mdi-lock
                                </v-icon>
                                </v-btn>
                              
                            </v-container>
                            </v-col>
                            <v-col cols="12">
                                <div class="h1">
                                    Classwork is Lock!
                                </div>
                            </v-col>
                            
                          

                        </v-row>   
                        <v-row style="height:4vh"></v-row> 
                </v-col>
            </v-row>
      </v-window-item>
    </v-window>
</v-card>
</v-app>      
</template>

