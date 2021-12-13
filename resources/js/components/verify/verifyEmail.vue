<template>
<v-app>
<v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>
    <v-row align="center" justify="center">
        <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'ma-0 pa-0'" cols="12" sm="12" md="12">
            <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                <loginRegisterImageConatiner></loginRegisterImageConatiner>
                <v-col :class="$vuetify.breakpoint.xs ? 'ma-0 pa-3' :'ma-0 pa-0'" cols="12" md="5">
                    <vue-element-loading :active="isLoggin" spinner="bar-fade-scale" color="#EF6C00" />
                    <v-row align="center" justify="center">
                        <v-col class="text-left" cols="12" md="12" lg="12" sm="7">
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
 import {mapActions} from 'vuex';
 const loginRegisterFooter = () => import( /* webpackChunkName: "login_layout" */ "../layout/LoginRegisterLayout/LoginRegisterFooter")
const loginRegisterImageConatiner = () => import( /* webpackChunkName: "login_layout" */ "../layout/LoginRegisterLayout/LoginRegisterImageConatiner")
export default {
  components:{
    loginRegisterImageConatiner,
    loginRegisterFooter
  },
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

