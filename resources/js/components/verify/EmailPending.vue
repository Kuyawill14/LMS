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

                        <v-container class="d-flex align-start" ma-0 pa-0 fluid>
                          <v-card-text>
                            <v-form class="text-center">
                                <v-row align="center" justify="center">
                                  <v-col cols="12">
                                        <v-row align="center" justify="center">
                                            <v-col v-if="!isResending" cols="12" md="8" xl="5" lg="5" class="text-center">
                                                   
                                                      <v-avatar size="100" color="primary" >
                                                          <v-icon style="font-size:3.5rem" color="white">
                                                              mdi-email
                                                          </v-icon>
                                                      </v-avatar>
                                                  
                                                      <div class="text-h5">Verification Pending</div>
                                                      <p >We've sent and email to <a href="">{{get_CurrentUser.email}}</a> 
                                                          to verify your email address and active your account. If you cannot find the mail, please also check the Junk/Spam folder.
                                                      </p>

                                                      <p class="pl-5 pr-5">
                                                        <a href="" @click.prevent="isResending = true"> Click here </a>
                                                        if you did not receive an email or would like to change the email address you signup up with.
                                                      </p>
                                            </v-col>

                                             <v-col v-if="isResending" cols="12" md="8" xl="5" lg="5" class="text-center">
                                                   
                                                      <v-avatar size="100" color="primary" >
                                                          <v-icon style="font-size:3.5rem" color="white">
                                                              mdi-email
                                                          </v-icon>
                                                      </v-avatar>
                                                      <div class="text-h5">Resend Verification</div>

                                                      <resendAndChangeEmail :get_CurrentUser="get_CurrentUser"></resendAndChangeEmail>
                                                     
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
 import {mapActions, mapGetters} from 'vuex';
const resendAndChangeEmail = () => import(/* webpackChunkName: "verify-email" */"./ResendAndChangeEmail")
export default {
    components:{
      resendAndChangeEmail
    },
    data(){
      return{
        isResending: false,
        
      }
    },
     computed: mapGetters(["get_CurrentUser"]),
    methods: {
      ...mapActions(["fetchCurrentUser"])
    },
    mounted(){
      this.fetchCurrentUser();
    }
}
</script>

