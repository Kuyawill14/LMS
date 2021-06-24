<template>
     <v-row class="pb-5">
        <v-col cols="12" class="mb-0 pb-0">
           <h3>CHANGE PASSWORD</h3> 
        </v-col>
        
        <v-col cols="12">
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12" md="3">
                     
                </v-col>
                  <v-col cols="12" md="9">
                        <h4 class="mt-5">Password</h4> 
                </v-col>
            </v-row>
        </v-col>

         <v-col cols="12" class="mb-0 pb-0">
            <v-row>
                <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                     Current Password
                </v-col>
                  <v-col cols="12" md="5">
                       <v-text-field
                            dense
                          outlined
                         
                        ></v-text-field>
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
            <v-row>
                <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                     New Password
                </v-col>
                  <v-col cols="12" md="5">
                       <v-text-field
                       dense
                          outlined
                          
                        ></v-text-field>
                </v-col>
            </v-row>
        </v-col>

         <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
            <v-row>
                <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                     Re Type New Password
                </v-col>
                  <v-col cols="12" md="5">
                       <v-text-field
                       dense
                          outlined
                          
                        ></v-text-field>
                </v-col>
            </v-row>
        </v-col>

         <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
            <v-row>
                <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                     
                </v-col>
                  <v-col cols="12" md="5">
                      <v-btn rounded color="primary" dark>Save Changes</v-btn>
                      <v-btn rounded color="secondary" dark>Cancel</v-btn>
                </v-col>
            </v-row>
        </v-col>

     
    </v-row>
</template>