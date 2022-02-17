<template>
<v-app>
<v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>
    <v-row align="center" justify="center">
        <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'ma-0 pa-0'" cols="12" sm="12" md="12">
            <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                <loginRegisterImageConatiner></loginRegisterImageConatiner>

                <v-col :class="$vuetify.breakpoint.xs ? 'ma-0 pa-3' :'ma-0 pa-0'" cols="12" md="5">
                    <v-row align="center" justify="center">
                        <v-col class="text-left" cols="12" md="12" lg="12" sm="7">
                            <v-card-text>
                                <v-form class="text-center">
                                    <v-row align="center" justify="center">
                                      <v-col cols="12">
                                            <v-row align="center" justify="center">
                                                <v-col v-if="!isResending" cols="12" md="8" xl="8" lg="8" class="text-center">
                                                      <v-avatar size="100" color="primary" >
                                                          <v-icon style="font-size:3.5rem" color="white">
                                                              mdi-email
                                                          </v-icon>
                                                      </v-avatar>
                                                  
                                                      <div class="text-h5">Verification Pending</div>
                                                      <p >We've sent an email to <a href="">{{get_CurrentUser.email}}</a> 
                                                          to verify your email address and active your account. If you cannot find the e-mail, please also check the Junk/Spam folder.
                                                      </p>

                                                      <p class="pl-5 pr-5">
                                                        <a href="" @click.prevent="isResending = true"> Click here </a>
                                                        if you did not receive an email or would like to change the email address you signup up with.
                                                      </p>
                                                      <div>
                                                          <v-btn @click="logout()" dark rounded color="red">Log Out</v-btn>
                                                      </div>
                                                </v-col>

                                                <v-col v-if="isResending" cols="12" md="10" xl="8" lg="8" class="text-center">
                                                        <v-avatar size="100" color="primary" >
                                                            <v-icon style="font-size:3.5rem" color="white">
                                                                mdi-email
                                                            </v-icon>
                                                        </v-avatar>
                                                        <div class="text-h5">Resend Verification</div>
                                                        <resendAndChangeEmail v-on:CancelResend="isResending = false"  :get_CurrentUser="get_CurrentUser"></resendAndChangeEmail>
                                                </v-col>
                                            </v-row>
                                      </v-col>
                                      </v-row>
                                      
                            </v-form>
                              </v-card-text>
                        </v-col>
                    </v-row>

                </v-col>
                <loginRegisterFooter></loginRegisterFooter>

            </v-row>
        </v-col>
    </v-row>
</v-container>
</v-app>
</template>
<script>
 import {mapActions, mapGetters} from 'vuex';
const resendAndChangeEmail = () => import(/* webpackChunkName: "verify-email" */"./ResendAndChangeEmail")
const loginRegisterFooter = () => import( /* webpackChunkName: "login_layout" */ "../layout/LoginRegisterLayout/LoginRegisterFooter")
const loginRegisterImageConatiner = () => import( /* webpackChunkName: "login_layout" */ "../layout/LoginRegisterLayout/LoginRegisterImageConatiner")
export default {
    components:{
      resendAndChangeEmail,
      loginRegisterImageConatiner,
      loginRegisterFooter
    },
    data(){
      return{
        isResending: false,
        
      }
    },
     computed: mapGetters(["get_CurrentUser"]),
    methods: {
      ...mapActions(["fetchCurrentUser", "clear_current_user"]),
       logout() {
            this.$store.dispatch('clearClassesNames');
            this.isLogout = true;
            axios.post('/api/logout')
                .then(() => {
                    this.clear_current_user();
                    this.$router.push({
                        path: "/login"
                    })
                })
                .catch((e) => {
                })
        }

    },
    mounted(){
      //this.fetchCurrentUser();
    }
}
</script>

