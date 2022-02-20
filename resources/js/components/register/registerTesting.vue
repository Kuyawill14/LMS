<template>
    <v-app>
        <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>
            <v-row align="center" justify="center">
                <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'ma-0 pa-0'" cols="12" sm="12" md="12">
                    <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                        <loginRegisterImageConatiner></loginRegisterImageConatiner>
                        <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm? 'ma-0 pa-3 mb-12' :'ma-0 pa-0'" cols="12" md="5">
                            <vue-element-loading :active="isRegistering" spinner="bar-fade-scale" color="#EF6C00" />
                            
                            <v-row>
                                <v-col cols="12">
                                    <v-row align="center" justify="center">
                                        <v-col class=" text-left" cols="12" md="7">
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
                                     <v-form @submit.prevent="validate" ref="Registerform" v-model="valid" lazy-validation>
                                      
                                     <v-row v-if="steps == 1" align="center" justify="center">
                                         <v-col cols="12" md="8" xl="7">
                                             <v-alert v-model="isValid_id" dismissible dense class="text-left" 
                                             :type="valid_type == 'Not_Valid' ? 'error' : 'info'">{{isValid_id_mesage}}</v-alert>

                                              <v-text-field
                                                :rules="StudentIdRules"
                                                :dense="$vuetify.breakpoint.mdAndUp"
                                                placeholder="e.g. 181234"
                                                v-model="form.student_id"
                                                label="Student ID Number"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                     </v-row>

                                     <v-row v-if="steps == 2" align="center" justify="center">
                                        <v-col cols="12" md="8" xl="7" class="text-left">
                                            <v-alert  dismissible dense class="text-left" 
                                             type="info">Please used your exact birthday you used in enrollment!</v-alert>
                                             <div class="font-weight-bold">Personal Details</div>
                                         </v-col>
                                       
                                         <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="8" xl="7">
                                              <v-text-field
                                                :dense="$vuetify.breakpoint.mdAndUp"
                                                :rules="nameRules"
                                                v-model="form.firstName"
                                                label="First Name"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                         <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="8" xl="7">
                                              <v-text-field
                                                :dense="$vuetify.breakpoint.mdAndUp"
                                                :rules="nameRules"
                                                v-model="form.middleName"
                                                label="Middle Initial"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                         <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="8" xl="7">
                                              <v-text-field
                                                :dense="$vuetify.breakpoint.mdAndUp"
                                                :rules="nameRules"
                                                v-model="form.lastName"
                                                label="Last Name"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                          <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="8" xl="7">
                                              <v-text-field
                                                :dense="$vuetify.breakpoint.mdAndUp"
                                                v-model="form.suffix"
                                                label="Suffix"
                                                outlined
                                            ></v-text-field>
                                         </v-col>

                                         <v-col class="pt-0 mt-0" cols="12" md="8" xl="7">
                                              <v-text-field
                                                :dense="$vuetify.breakpoint.mdAndUp"
                                                type="Date"
                                                v-model="form.birthday"
                                                label="Birthday"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                     </v-row>

                                     <v-row v-if="steps == 3" align="center" justify="center">
                                       
                                         <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="8" xl="7">
                                              <v-text-field
                                                :dense="$vuetify.breakpoint.mdAndUp"
                                                type="email"
                                                :rules="emailRules"
                                                v-model="form.email"
                                                label="Email"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                         <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12" md="8" xl="7">
                                              <v-text-field
                                                :dense="$vuetify.breakpoint.mdAndUp"
                                                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="showPass ? 'text' : 'password'"
                                                v-model="form.password"
                                                :rules="[rules.required, rules.min, rules.max]"
                                                label="Password"
                                                outlined
                                                @click:append="showPass = !showPass"
                                            ></v-text-field>
                                         </v-col>

                                          <v-col class=" pt-0 mt-0" cols="12" md="8" xl="7">
                                              <v-text-field
                                                :dense="$vuetify.breakpoint.mdAndUp"
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

                                     <v-row class="mt-0 pt-0 pb-5">
                                      <v-col class="text-center  mt-0 pt-0" cols="12">
                                           <v-btn  v-if="steps > 1" @click="steps=steps-1" color="secondary"   >
                                            Previus
                                        </v-btn>
                                        <v-btn :disabled="!valid" :loading="ischecking"  @click="validate" :color="steps == 3 ? 'success' : 'primary'"   >
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
            loginForm: new Form({
                email: "",
                password: "",
            }),
            nameRules: [
                v => !!v || 'Field is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters',
            ],
            StudentIdRules: [
                v => !!v || 'Student ID is required',
                v => (v && v.length >= 5) || 'min 5 characters',
                v => (v && v.length <= 12) || 'Max 12 characters',
            ],
            emailRules: [
                v => !!v || "Required",
                v => /.+@.+\..+/.test(v) || "Email must be valid"
            ],
            rules: {
                required: value => !!value || "Field is required.",
                min: v => (v && v.length >= 6) || "Minimun 6 characters",
                max: v => (v && v.length <= 15) || "Maximun 12 characters"
            },
            showPass: false,
            showConfirmPass: false,
            isValid_id: false,
            isValid_id_mesage: null,
            valid_type: null,
            ischecking: false,
        }),
        computed: {
            passwordMatch() {
                return this.form.password === this.form.password_confirmation || "Pasword does not match";
            }
        },
        methods: {
            preventNav(event) {
                if (this.steps == 1) return;
                event.preventDefault()
                event.returnValue = "";
            },
            async validate() {
                if(this.$refs.Registerform.validate()) {
                    this.nextStep();
                }
            },
            async nextStep(){
                if(this.steps == 1){
                    this.ischecking = true;
                    axios.get('/api/register/check_student_id/'+this.form.student_id)
                    .then((res)=>{
                        if(res.data.success == true){
                            this.steps += 1;
                            this.ischecking = false;
                            this.$refs.Registerform.resetValidation()
                        }else{
                            //this.toastError(res.data.message);
                            this.ischecking = false;
                            this.valid_type = res.data.type;
                            this.isValid_id = true;
                            this.isValid_id_mesage = res.data.message;
                            setTimeout(() => (this.isValid_id = false), 5000);
                        }
                    }).catch((error)=>{
                      this.ischecking = false;
                      console.log(error)
                      this.toastError('To many request, Please try again later');
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
                            this.isRegistering = true;
                            this.sendVerification(this.form.email);
                            this.toastSuccess('Account Registerd: Please check your email for Verification!');
                            this.login(this.form.email,this.form.password)
                            window.removeEventListener('beforeunload', this.preventNav)
                            //this.form.student_id = '';
                            //this.$refs.Registerform.reset();
                            //this.steps = 1;
                        }else{
                            this.toastError(res.data.message);
                        }
                    }).catch(e => {
                        this.toastError(e.response.data.errors.email[0]);
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
             async login(email, password) {
                this.loginForm.email = email;
                this.loginForm.password = password;
                axios.get('/sanctum/csrf-cookie').then(response => {
                    this.loginForm.post('/api/login')
                    .then((res) => {
                        if (res.data.success == true) {
                            this.$store.dispatch('clear_current_user');
                            this.$router.push({
                                path: "/"
                            })
                        } else {
                            this.toastError(res.data.message);
                        }
                    })
                });
            },
             beforeWindowUnload(e) {
                if (this.steps == 1) {
                    // Cancel the event
                    e.preventDefault()
                    // Chrome requires returnValue to be set
                    e.returnValue = ''
                }   
            },
            
        },
        beforeMount(){
             window.addEventListener("beforeunload", this.preventNav);
        },
        
     /*    beforeDestroy(){
            window.removeEventListener('beforeunload', this.beforeWindowUnload)
        }, */
    };

</script>
