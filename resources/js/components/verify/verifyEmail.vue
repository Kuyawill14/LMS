<template>
  <v-app>
    
      <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>
       
        <v-row >
           
          <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'ma-0 pa-0'" cols="12" sm="12" md="12">  
                <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                    <v-col :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'height:35vh;':'height:100vh'"  cols="12" md="4" class="primary ma-0 pa-0 d-flex flex-column">
                         <v-container v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" class="pb-0 mb-0 pl-5 d-flex justify-space-between">
                              <v-img
                                height="70"
                                width="70"
                                max-height="70"
                                max-width="70"
                                src="../images/isu_logo1.png"
                              ></v-img>

                               <v-img
                            
                                height="70"
                                width="70"
                                max-height="70"
                                max-width="70"
                                src="../images/ccsict_logo_2.png"
                              ></v-img>
                          </v-container>
                        
                        
                        <v-container class="fill-height" fluid>
                          <v-card-text>
                            <v-form class="text-center">
                                <v-row align="center" justify="center">
                                  <v-col cols="12">
                                      <div class="display-2 white--text font-weight-bold">ORANGE</div>
                                      <div class="white--text"><b class="text-h6">O</b>nline <b class="text-h6">R</b>esources <b class="text-h6">A</b>pp for a <b class="text-h6">N</b>ew <b class="text-h6">G</b>uild of <b class="text-h6">E</b>ducation</div>
                                  </v-col>
                                </v-row>
                              </v-form>
                          </v-card-text>

                          
                        </v-container>
                       <v-container v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class="pb-0 mb-0 pl-5 d-flex justify-center">
                              <v-img
                         
                                height="70"
                                width="70"
                                max-height="70"
                                max-width="70"
                                src="../images/isu_logo1.png"
                              ></v-img>

                               <v-img
                            
                                height="70"
                                width="70"
                                max-height="70"
                                max-width="70"
                                src="../images/ccsict_logo_2.png"
                              ></v-img>
                          </v-container>
                       
                    </v-col>
                    <v-col :class="$vuetify.breakpoint.xs ? 'ma-0 pa-3' :'ma-0 pa-0'" cols="12" md="8">
                     <!--    <v-container>
                              <v-row align="center" justify="center">
                            <v-col cols="12" class="text-right d-flex">
                                 <p class="mt-2">Login Your Account <router-link class="blue--text" :to="{name: 'login'}">Click here</router-link></p>
                            </v-col>
                        </v-row>
                        </v-container> -->

                        <v-container class="d-flex align-start" fluid>
                          <v-card-text>
                            <v-form class="text-center">
                                <v-row align="center" justify="center">
                                  <v-col cols="12">
                                        <v-row align="center" justify="center">
                                            <v-col cols="12" md="5" xl="5" lg="5" class="text-center">
                                                <v-icon style="font-size:4rem" x-large color="success">
                                                    mdi-check
                                                </v-icon>
                                                <div class="text-h5">Email Verified</div>
                                                <p>Your email address was successfully verified</p>
                                                <v-btn rounded @click="$router.push({name: 'login'})" class="primary">Continue</v-btn>
                                            </v-col>
                                        </v-row>
                                  </v-col>
                                </v-row>
                              </v-form>
                              
                          </v-card-text>
                           
                          
                        </v-container >
                       
                      
                       
                
                    </v-col> 
                </v-row>
              </v-col>
          </v-row>
      </v-container>
 
  </v-app>
</template>
<script>
 import {mapActions} from 'vuex';
export default {
      methods: {
            ...mapActions(["verifyEmail"])
        },
    created(){
       this.verifyEmail(this.$route.query).then((response) => {
            //this.$router.push({name: 'login'});
        });

        
        
    }
}
</script>

