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
                                        <v-col class=" text-left" cols="12"  md="8" xl="7">
                                        <div class="text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold">Sign
                                            Up <span class="font-weight-regular">Now</span> <span class="font-weight-regular text-subtitle-1"> (Step {{steps}} of 3)</span>  </div>
                                        <p class="mt-2">Login Your Account <router-link class="blue--text"
                                                :to="{name: 'login'}">Click here</router-link>
                                        </p>
                                    </v-col>
                                    </v-row>
                                </v-col>

                                 <v-col class="text-center mb-0 pb-0" cols="12">
                                     <v-form @submit.prevent="validate" ref="Registerform" v-model="valid" lazy-validation>
                                      
                                     <v-row v-if="steps == 1" align="center" justify="center">
                                         <v-col cols="12" md="8" xl="7">
                                             <v-alert v-model="isValid_id" dismissible dense class="text-left" 
                                             :type="valid_type == 'Not_Valid' ? 'error' : 'info'">{{isValid_id_mesage}}</v-alert>
                                              <v-text-field
                                                :rules="StudentIdRules"
                                                :dense="$vuetify.breakpoint.mdAndUp"
                                                placeholder="e.g. 18-1234, SHS-18-1234"
                                                v-model="form.student_id"
                                                label="Student ID Number"
                                                outlined
                                            ></v-text-field>
                                         </v-col>
                                     </v-row>

                                     <v-row v-if="steps == 2" align="center" justify="center">
                                        <v-col cols="12" md="8" xl="7" class="text-left">
                                            <v-alert  dismissible dense class="text-left" 
                                             type="info">Please use your exact birthday you used in the enrollment.
                                             <br>
                                             Need help? Send us a message @<a href="https://www.messenger.com/t/102514265611526/" target="_blank" class="white--text"> Messenger</a>
                                              </v-alert>
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

                                     <v-row class="mt-0 pt-0 pb-5" align="center" justify="center">
                                      <v-col class="text-center d-flex  mt-0 pt-0"  cols="12" md="8" xl="7">
                                           <v-btn  v-if="steps > 1" @click="steps=steps-1" color="secondary"   >
                                            Previous
                                        </v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn :class="steps == 3 ? '' : 'pl-10 pr-10'" :disabled="!valid" :loading="ischecking"  @click="validate" :color="steps == 3 ? 'success' : 'primary'"   >
                                            {{steps == 3 ? 'Register' : 'Next'}}
                                        </v-btn>
                                      </v-col>
                                     </v-row>

                                    </v-form>
                                     
                                </v-col>
                            </v-row>
                        </v-col>

                         <loginRegisterFooter></loginRegisterFooter>
                    </v-row>

                </v-col>
            </v-row>

       <!--      <v-btn @click="ConfirmDialog = true">
                Test
            </v-btn> -->
            <v-row justify="center" v-if="ConfirmDialog">
                <v-dialog v-model="ConfirmDialog" persistent max-width="500">
                <v-card>
                    <div class="pa-2">
                         <v-alert   dense class="text-left" 
                        type="info">
                         Confirm Details: Before you click <span class="font-weight-medium">Confirm</span>, make sure you're using an active email address because 
                        all information regarding your class's activity will be sent to that email.

                        </v-alert>
                    </div>
                   
                   <!--  <v-card-title class="text-h5">
                    Confirm Details
                    </v-card-title> -->
                 <v-divider></v-divider>
                        <v-container class="pl-6 pr-6">
                            <v-row >
                                 <v-col cols="12" style="font-size: 20px">
                                    <span class="font-weight-bold">First Name: </span>
                                     <span>{{form.firstName}}</span> <br>
                                     <span class="font-weight-bold">Middle Initial: </span>
                                     <span>{{form.middleName}}</span> <br>

                                     <span class="font-weight-bold">Last Name: </span>
                                     <span>{{form.lastName}}</span> <br>

                                     <span class="font-weight-bold">Suffix: </span>
                                     <span>{{form.suffix}}</span> <br>

                                      <span class="font-weight-bold">Birthday: </span>
                                      <span>{{form.birthday}}</span> <br>
                                      <v-divider></v-divider>
                                       
                                      <span class="font-weight-bold">Email: </span>
                                      <span>{{form.email}}</span> <br>

                                       <span class="font-weight-bold">Password: </span>
                                      <span>{{form.password}}</span> <br>
                                </v-col>
                            </v-row>
                        </v-container>
                     
                    <v-card-actions class="pt-2 pb-3">
                        <v-spacer></v-spacer>
                        <v-btn color="secondary" text  @click="ConfirmDialog = false, ischecking =false">
                            cancel
                        </v-btn>
                        <v-btn color="primary" text  @click="registerAccount()">
                            Confirm
                        </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
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
                v => (v && v.length <= 20) || 'Must be less than 50 characters',
            ],
            StudentIdRules: [
                v => !!v || 'Student ID is required',
                v => (v && v.length >= 5) || 'min 5 characters',
                v => (v && v.length <= 20) || 'Max 20 characters',
            ],
            emailRules: [
                v => !!v || "Required",
                v => /.+@.+\..+/.test(v) || "Email must be valid"
            ],
            rules: {
                required: value => !!value || "Field is required.",
                min: v => (v && v.length >= 6) || "Minimum 6 characters",
                max: v => (v && v.length <= 20) || "Maximum 20 characters"
            },
            showPass: false,
            showConfirmPass: false,
            isValid_id: false,
            isValid_id_mesage: null,
            valid_type: null,
            ischecking: false,
            ConfirmDialog: false,
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
                            setTimeout(() => (this.ischecking = false, this.steps += 1), 500);
                            this.$refs.Registerform.resetValidation()
                        }else{
                            //this.toastError(res.data.message);
                            setTimeout(() => (this.ischecking = false), 500);
                            this.valid_type = res.data.type;
                            this.isValid_id = true;
                            this.isValid_id_mesage = res.data.message;
                            setTimeout(() => (this.isValid_id = false), 5000);
                        }
                    }).catch((error)=>{
                      setTimeout(() => (this.ischecking = false), 500);
                      console.log(error)
                      this.toastError('To many request, Please try again later');
                    })
                }else if(this.steps == 2){
                    this.ischecking = true;
                    axios.put('/api/register/check_student_details/'+this.form.student_id, this.form)
                    .then((res)=>{
                        if(res.data.success == true){
                            //this.steps += 1;
                            setTimeout(() => (this.ischecking = false, this.steps += 1, this.$refs.Registerform.resetValidation()), 500);
                            
                        }else{
                            setTimeout(() => (this.ischecking = false), 500);
                            this.toastError(res.data.message);
                            
                        }
                    }).catch((e)=>{
                        setTimeout(() => (this.ischecking = false), 500);
                        this.toastError('To many request, Please try again later');
                    })
                }else if(this.steps == 3){
                     this.ischecking = true;
                     this.ConfirmDialog = true;
                     /* axios.put('/api/register/account/'+this.form.student_id, this.form)
                    .then((res)=>{
                        if(res.data.success == true){
                            setTimeout(() => (this.ischecking = false), 500);
                            this.isRegistering = true;
                            this.sendVerification(this.form.email);
                            this.toastSuccess('Account Registerd: Please check your email for Verification!');
                            this.login(this.form.email,this.form.password)
                            window.removeEventListener('beforeunload', this.preventNav)
                        }else{
                            this.toastError(res.data.message);
                            setTimeout(() => (this.ischecking = false), 500);
                        }
                    }).catch(e => {
                        setTimeout(() => (this.ischecking = false), 500);
                        this.toastError(e.response.data.errors.email[0]);
                    }) */
                }
            },
            registerAccount(){
                this.ConfirmDialog = false;
                 axios.put('/api/register/account/'+this.form.student_id, this.form)
                    .then((res)=>{
                        if(res.data.success == true){
                            setTimeout(() => (this.ischecking = false), 500);
                            this.isRegistering = true;
                            if(res.data.isVerified){
                                 this.toastSuccess('Account Registered Successfully!');
                            }else{
                                this.toastSuccess('Account Registerd: Please check your email for Verification!');
                                this.sendVerification(this.form.email);
                            }
                            //this.sendVerification(this.form.email);
                            this.login(this.form.email,this.form.password)
                            window.removeEventListener('beforeunload', this.preventNav)
                        }else{
                            this.toastError(res.data.message);
                            setTimeout(() => (this.ischecking = false), 500);
                        }
                    }).catch(e => {
                        setTimeout(() => (this.ischecking = false), 500);
                        this.toastError(e.response.data.errors.email[0]);
                    })
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
    
    };

</script>
