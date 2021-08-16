<template>
  <v-app>
      <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>
        <v-row  align="center" justify="center">
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
                      <v-row align="center" justify="center">
                        <v-col class="text-left" cols="12" md="8" sm="10">
                          <v-card-text>
                              <v-form class="text-center" ref="loginForm" v-model="valid" lazy-validation>
                                <v-row align="center" justify="center">
                                  <v-col class="ma-0 pa-0 text-left" cols="12" md="8">
                                        <h1 class=" display-1 font-weight-bold">
                                        Login to your <span class="font-weight-regular">Account</span>
                                        </h1>
                                        <p class="mt-2">Don't have an account? <router-link class="blue--text" :to="{name: 'register'}">Create one here</router-link></p>
                                  </v-col>

                                  <v-col class="ma-0 pa-0  mt-12" cols="12" md="8">
                                      <v-text-field
                                        label="Email"
                                        v-model="form.email" 
                                        :rules="loginEmailRules"
                                        name="Email"
                                        prepend-inner-icon="email"
                                      
                                        type="email"
                                        color="primary"
                                        required
                                      />
                                      <HasError class="error--text" :form="form" field="email" />
                                  </v-col>
                                  <v-col class="ma-0 pa-0 mt-2" cols="12" md="8">
                                    <v-text-field 
                                      v-model="form.password" 
                                      :append-icon="show ?'mdi-eye':'mdi-eye-off'" 
                                      :rules="[rules.required, rules.min]" 
                                      :type="show ? 'text' : 'password'" 
                                      name="password"
                                      label="Password"
                                      prepend-inner-icon="lock"
                                      hint="At least 6 characters"
                                      color="primary"
                                      counter @click:append="show = !show">
                                      </v-text-field>
                                      <HasError class="error--text" :form="form" field="password" />
                                  </v-col>
                                  <v-col class="ma-0 pa-0 mt-2" cols="12" md="8">
                                    <v-row class="">
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
                                  </v-col>
                                  <v-col class="ma-0 pa-0 text-left" cols="12" md="8">
                                    <v-btn  color="primary"
                                      class="mb-5"
                                      :disabled="!valid" 
                                      @click="validate"
                                      :loading="isLoggin"
                                      >
                                        <v-icon class="mr-3">mdi-login</v-icon>
                                      Login
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-form >      
                            </v-card-text>
                        </v-col>
                      </v-row>
                    


                    <!-- <v-container ma-0 pa-0 class="pb-5 pl-5 pr-5">
                        <v-container ma-0 pa-0 class="mt-3">
                        <h3>Login with Social media</h3>
                            <v-btn  color="blue" class="mb-3 mt-1 mr-5 white--text">
                            <v-icon class="mr-3">mdi-facebook</v-icon>
                        Facebook
                        </v-btn>

                        <v-btn  color="red darken-1" class="mb-3 mt-1 white--text">
                            <v-icon class="mr-3">mdi-google-plus</v-icon>
                        Google Plus
                        </v-btn>
                        </v-container>
                    </v-container>  -->
                    </v-col> 
                </v-row>
              </v-col>
          </v-row>
      </v-container>
 
  </v-app>
</template>

<script>
import VueElementLoading from 'vue-element-loading';
export default {
  components: {
    VueElementLoading,
  },
  data(){
    return{
      isLoggin: false,
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
        this.login();
         /* this.$store.dispatch('login', this.form)
         .then(res=>{
           console.log(res);
            if(res == 200){
                this.toastSuccess("Login success");
            }
            else if(res == 203){
                 this.toastError('Login failed!');
            }
         }) */
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    login(){
      this.isLoggin = true;
      axios.get('/sanctum/csrf-cookie').then(response => {
            this.form.post('/api/login')
                .then((res) => {
                  
                    if(res.status == 200) {
                        this.toastSuccess(res.data);
                        this.$store.dispatch('clear_current_user');
                        this.$router.push({ path: "/" })
                          
                    }
                    else{
                       this.isLoggin = false;
                       this.toastError(res.data);
                    }
                })
           
        });
              
    }
  },


};
</script>