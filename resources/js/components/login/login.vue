<template>
  <v-app>
      <v-container class="fill-height" fluid>
        <v-row  align="center" justify="center">
          <v-col class="ma-0 pa-0" cols="12" sm="12" md="12">  
            <v-card  >
              <v-window>
                    <v-window-item>
                      <v-row :class="$vuetify.breakpoint.xs ? 'fill-height' : ''" align="center" justify="center">
                          <v-col :style="$vuetify.breakpoint.xs ? 'height:2vh':'height:102vh'"  cols="12" md="5" class="primary ma-0 pa-0">
                            
                          </v-col>
                          <v-col class="ma-0 pa-0" cols="12" md="7">
                            <v-row align="center" justify="center">
                              <v-col cols="12">
                                <v-card-text >
                              <h1
                              class=" display-1 primary--text "
                              >Login to your <span>Account</span></h1>
                              <p class="mt-2">Don't have an account? <router-link :to="{name: 'register'}">Create one here</router-link></p>
                      
                              <v-form class="text-center mt-12 pl-3 pr-10" ref="loginForm" v-model="valid" lazy-validation>
                              <v-text-field
                                  label="Email"
                                  v-model="form.email" 
                                  :rules="loginEmailRules"
                                  name="Email"
                                  prepend-icon="email"
                                  type="email"
                                  color="primary"
                                  required
                              />


                              <v-text-field 
                              v-model="form.password" 
                              :append-icon="show ?'mdi-eye':'mdi-eye-off'" 
                              :rules="[rules.required, rules.min]" 
                              :type="show ? 'text' : 'password'" 
                              name="password"
                              label="Password"
                              prepend-icon="lock"
                              hint="At least 6 characters"
                              color="primary"
                              counter @click:append="show = !show">
                              </v-text-field>
                            
                              
                              </v-form >

                              <v-row class="pl-9 pr-9">
                                  <v-col>
                                  <v-checkbox
                                  ma-0 pa-0
                                  class="ma-0 pa-0"
                                      label="Remember me"
                                  ></v-checkbox>
                                  </v-col>

                                  <v-col class="float-right">
                                  <a href="forget-password.html" class="float-right">Forgot Password?</a>
                                  </v-col>
                              </v-row>
                          <!--   <h3 class="text-center mt-4">Forgot your password ?</h3> -->
                          </v-card-text>
                              </v-col>

                            </v-row>
                          
                          <v-container ma-0 pa-0 class="pb-5 pl-5 pr-5">
                              <v-btn  color="primary"
                              class="mb-5"
                              :disabled="!valid" 
                              @click="validate"
                              >
                                  <v-icon class="mr-3">mdi-login</v-icon>
                              Login
                              </v-btn>

                              <!-- <v-container ma-0 pa-0 class="mt-3">
                              <h3>Login with Social media</h3>
                                  <v-btn  color="blue" class="mb-3 mt-1 mr-5 white--text">
                                  <v-icon class="mr-3">mdi-facebook</v-icon>
                              Facebook
                              </v-btn>

                              <v-btn  color="red darken-1" class="mb-3 mt-1 white--text">
                                  <v-icon class="mr-3">mdi-google-plus</v-icon>
                              Google Plus
                              </v-btn>
                              </v-container> -->
                              
                          </v-container> 
                          </v-col> 
                      </v-row>
                    </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
 
  </v-app>
</template>

<script>

export default {
  data(){
    return{
      dialog: true,
      valid: true,
      form: new Form({
      email: "",
      password: "",
      }),
      loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "Email must be valid"
      ],
      emailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "Email must be valid"
      ],
      show: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 6) || "Min 6 characters"
      }
    }
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
         this.$store.dispatch('login', this.form);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },


};
</script>