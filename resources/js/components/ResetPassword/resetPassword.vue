<template>
  <v-app>
    
      <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>
       
        <v-row >
           
          <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'ma-0 pa-0'" cols="12" sm="12" md="12">  
                <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                    <loginRegisterImageConatiner></loginRegisterImageConatiner>

                    <v-col :class="$vuetify.breakpoint.xs ? 'ma-0 pa-3' :'ma-0 pa-0'" cols="12" md="5">
                        <v-row align="center" justify="center">
                            <v-col class="text-left" cols="12" md="12" lg="12" sm="7">
                                <v-card-text>
                                    <v-form class="text-center" ref="ResetPassword" v-model="valid" lazy-validation>
                                        <v-row  align="center" justify="center">
                                            <v-col class="ma-0 pa-0 text-left" cols="12" md="8">
                                                    <div class=" text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold">
                                                     Enter new Password
                                                    </div>
                                               
                                            </v-col>
                                               <v-col class="ma-0 pa-0 mt-6" cols="12" md="8">
                                                    <v-text-field class="mb-0 pb-0" dense outlined
                                                        v-model="form.password"
                                                        :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                                                        :rules="[rules.required, rules.min]"
                                                        :type="show ? 'text' : 'password'" name="password"
                                                        label="New Password" prepend-inner-icon="lock"
                                                        hint="At least 6 characters" color="primary" 
                                                        @click:append="show = !show">
                                                    </v-text-field>
                                                    <HasError class="error--text" :form="form" field="password" />
                                                </v-col>
                                                
                                                 <v-col class="ma-0 pa-0 mt-2" cols="12" md="8">
                                                    <v-text-field outlined dense
                                                        prepend-inner-icon="mdi-lock-check"
                                                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                        id="passwordConfirmation" label="Confirm new password"
                                                        name="password" v-model="form.password_confirmation"
                                                        :type="show1 ? 'text' : 'password'" color="primary"
                                                        :rules="[rules.required, passwordMatch]" counter
                                                        @click:append="show1 = !show1" />
                                                </v-col>

                                                 <v-col class="ma-0 pa-0 mt-2 text-left" cols="12" md="8">
                                                      <v-btn :loading="isResetting" color="primary" class="mb-5" :disabled="!valid"
                                                        @click="validate" >
                                                        <v-icon class="mr-3">mdi-lock</v-icon>
                                                        Submit
                                                    </v-btn>
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
const loginRegisterFooter = () => import( /* webpackChunkName: "login_layout" */ "../layout/LoginRegisterLayout/LoginRegisterFooter")
const loginRegisterImageConatiner = () => import( /* webpackChunkName: "login_layout" */ "../layout/LoginRegisterLayout/LoginRegisterImageConatiner")
export default {
    components:{
        loginRegisterFooter,
        loginRegisterImageConatiner
    },
    data(){
        return{
            isLoggin: false,
            dialog: true,
            valid: true,
            form: new Form({
                id: null,
                token: null,
                password: "",
                password_confirmation: "",
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
            show1: false,
            rules: {
                required: value => !!value || "Required.",
                min: v => (v && v.length >= 6) || "Min 6 characters"
            },
            ToManyAttepmtError: null,
            isForgotPassword: false,
            isResetting: false

        }
    },
    computed: {
            passwordMatch() {
                return this.form.password === this.form.password_confirmation || "Pasword does not match";
            }
        },
    methods: {
            validate() {
                if (this.$refs.ResetPassword.validate()) {
                   this.ResetPassword();
                }
            },
            ResetPassword(){
                this.isResetting = true;
                this.form.id = this.$route.query.id;
                this.form.token = this.$route.query.token;
                axios.put("/api/confirm_reset_password",  this.form)
                .then(res=>{
                    if(res.data.success == true){
                        this.toastSuccess(res.data.message);
                        this.$router.push({path: '/login'})
                        this.isResetting = false;
                    }
                    else{
                        this.toastError(res.data.message);
                        this.isResetting = false;
                    }
                })
                .catch(e=>{
                    this.toastSuccess('Something went wrong while changing password!');
                    this.isResetting = false;
                })
            }
        },
}
</script>

