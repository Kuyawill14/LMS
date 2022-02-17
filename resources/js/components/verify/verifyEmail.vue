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
                                            <v-col cols="12" md="7" xl="8" lg="8" class="text-center">
                                                <v-icon style="font-size:4rem" x-large color="success">
                                                    mdi-email-check
                                                </v-icon>
                                                <div class="text-h5 mt-1">Email verified</div>
                                                <p class="mb-0 pb-0">Your have successfully verified your email!</p>
                                                <p>You can now click Ok and Login to ISUE-ORANGE on your computer or mobile device.</p>
                                                <v-btn rounded @click="$router.push({name: 'login'})" class="primary pl-10 pr-10">Ok</v-btn>
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
  mounted(){
     /*  this.$store.dispatch('verifyEmail', this.$route.query)
      .then((res)=>{
          console.log(res);
      })
      .catch((e)=>{

      }) */

     /*  this.verifyEmail(this.$route.query).then((response) => {
          
          if(response.data.success == false){
              this.toastError(response.data.message);
          }
      });  */     


      axios.get('/api/email-verification', {
            params: this.$route.query
        }).then((response)=>{
            if(response.data.success == false){
                this.toastError(response.data.message);
                if(response.data.type == 'already_verified'){
                    this.$router.push({name: 'login'})
                }
            }
        }).catch((e)=>{

        })
    }
}
</script>

