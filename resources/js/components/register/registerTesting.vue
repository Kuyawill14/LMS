<template>
    <v-app>
        <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>
            <v-row align="center" justify="center">
                <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'ma-0 pa-0'" cols="12" sm="12" md="12">
                    <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                        <loginRegisterImageConatiner></loginRegisterImageConatiner>
                        <v-col :class="$vuetify.breakpoint.xs ? 'ma-0 pa-3 mb-10' :'ma-0 pa-0'" cols="12" md="5">
                            <vue-element-loading :active="isRegistering" spinner="bar-fade-scale" color="#EF6C00" />

                            <v-row>
                                <v-col cols="12">
                                    <v-row align="center" justify="center">
                                        <v-col class="mt-0 pt-0 text-left" cols="12" md="7">
                                        <div class="text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold">Sign
                                            Up <span class="font-weight-regular">Now</span> <span class="font-weight-regular text-subtitle-1"> (Step {{steps}} of 3)</span>  </div>
                                        <p class="mt-2">Login Your Account <router-link class="blue--text"
                                                :to="{name: 'login'}">Click here</router-link>
                                        </p>
                                    </v-col>
                                    </v-row>
                                </v-col>
                                 
                               <!--  <v-col class="text-center" cols="12">
                                    <v-btn color="primary" small dark fab>
                                        {{steps}}
                                    </v-btn>
                                
                                </v-col> -->

                                 <v-col class="text-center mb-0 pb-0" cols="12">
                                     <v-form ref="Registerform" v-model="valid" lazy-validation>
                                   
                                     <v-row v-if="steps == 1" align="center" justify="center">
                                         <v-col cols="12" md="7">
                                             
                                              <v-text-field
                                                :rules="StudentIdRules"
                                                dense
                                                v-model="form.student_id"
                                                label="Student ID Number"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                     </v-row>

                                     <v-row v-if="steps == 2" align="center" justify="center">
                                        <v-col cols="12" md="7">
                                             <div class="font-weight-bold">Personal Details</div>
                                         </v-col>
                                         <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="7">
                                              <v-text-field
                                                dense
                                                :rules="nameRules"
                                                v-model="form.firstName"
                                                label="First Name"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                         <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="7">
                                              <v-text-field
                                                dense
                                                :rules="nameRules"
                                                v-model="form.middleName"
                                                label="Middle Initial"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                         <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="7">
                                              <v-text-field
                                                dense
                                                :rules="nameRules"
                                                v-model="form.lastName"
                                                label="Last Name"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                          <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="7">
                                              <v-text-field
                                                dense
                                                v-model="form.suffix"
                                                label="Suffix"
                                                outlined
                                            ></v-text-field>
                                         </v-col>

                                         <v-col class="pt-0 mt-0" cols="12" md="7">
                                              <v-text-field
                                                dense
                                                type="Date"
                                                v-model="form.birthday"
                                                label="Birthday"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                     </v-row>

                                     <v-row v-if="steps == 3" align="center" justify="center">
                                       
                                         <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="7">
                                              <v-text-field
                                                dense
                                                type="email"
                                                :rules="emailRules"
                                                v-model="form.email"
                                                label="Email"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                         <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="7">
                                              <v-text-field
                                                dense
                                                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="showPass ? 'text' : 'password'"
                                                v-model="form.password"
                                                :rules="[rules.required, rules.min]"
                                                label="Password"
                                                outlined
                                                @click:append="showPass = !showPass"
                                            ></v-text-field>
                                         </v-col>

                                          <v-col class=" pt-0 mt-0" cols="12" md="7">
                                              <v-text-field
                                                dense
                                                :append-icon="showConfirmPass ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="showConfirmPass ? 'text' : 'password'"
                                                :rules="[rules.required, passwordMatch]"
                                                v-model="form.password_confirmation"
                                                label="Confirm Password"
                                                outlined
                                                @click:append="showConfirmPass = !showConfirmPass"
                                            ></v-text-field>
                                         </v-col>
                                        
                                     </v-row>

                                     <v-row class="mt-0 pt-0">
                                      <v-col class="text-center mt-0 pt-0" cols="12">
                                           <v-btn  v-if="steps > 1" @click="steps=steps-1" color="secondary"   >
                                            Previus
                                        </v-btn>
                                    
                                        <v-btn  @click="validate" :color="steps == 3 ? 'success' : 'primary'"   >
                                            {{steps == 3 ? 'Register' : 'Next'}}
                                        </v-btn>
                                      </v-col>
                                     </v-row>

                                    </v-form>
                                     
                                </v-col>
                             <!--    <v-col class="text-center mt-0 pt-0" cols="12">
                                   
                                </v-col> -->
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
            loginRegisterImageConatiner,
            loginRegisterFooter
        },

        data: () => ({
            steps: 1,
            isRegistering: false,
            valid: true,
            form: {
                firstName: "",
                middleName: "",
                lastName: "",
                suffix: "",
                birthday: new Date(),
                email: "",
                password: "",
                password_confirmation: "",
                student_id: ""
            },
            nameRules: [
                v => !!v || 'Field is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters',
            ],
            StudentIdRules: [
                v => !!v || 'Student ID is required',
                v => (v && v.length >= 6) || 'min 6 characters',
                v => (v && v.length <= 8) || 'Max 8 characters',
            ],
            emailRules: [
                v => !!v || "Required",
                v => /.+@.+\..+/.test(v) || "Email must be valid"
            ],
            rules: {
                required: value => !!value || "Field is required.",
                min: v => (v && v.length >= 6) || "min 6 characters"
            },
            showPass: false,
            showConfirmPass: false
        }),
        computed: {
            passwordMatch() {
                return this.form.password === this.form.password_confirmation || "Pasword does not match";
            }
        },
        methods: {
            async validate() {
                if(this.$refs.Registerform.validate()) {
                    this.nextStep();
                }
            },
            async nextStep(){
                if(this.steps == 1){
                    axios.get('/api/register/check_student_id/'+this.form.student_id)
                    .then((res)=>{
                        if(res.data.success == true){
                            this.steps += 1;
                            this.$refs.Registerform.resetValidation()
                        }else{
                            this.toastError(res.data.message);
                        }
                    })
                }else if(this.steps == 2){
                    axios.put('/api/register/check_student_details/'+this.form.student_id, this.form)
                    .then((res)=>{
                        if(res.data.success == true){
                            this.steps += 1;
                            this.$refs.Registerform.resetValidation()
                        }else{
                            this.toastError(res.data.message);
                        }
                    })
                }else if(this.steps == 3){
                     axios.put('/api/register/account/'+this.form.student_id, this.form)
                    .then((res)=>{
                        if(res.data.success == true){
                            this.sendVerification(this.form.email);
                            this.toastSuccess('Account Registerd: Please check your email for Verification!');
                            this.form.student_id = '';
                            this.$refs.Registerform.reset();
                            this.steps = 1;
                        }else{
                            this.toastError(res.data.message);
                        }
                    })
                }
            },
            async sendVerification(email){
                 axios.post('/api/resend-verification', {email: email})
                .then((res)=>{
                    if(res.data.success == true){
                        //this.toastSuccess(res.data.message);
                    }
                    else{
                        //this.toastError(res.data.message);
                    }
                })
                .catch((err)=>{
                    /* this.toastError(err.response.errors.email);
                    this.toastError(err.response.data.message); */
                })
            },
            
        }
    };

</script>
