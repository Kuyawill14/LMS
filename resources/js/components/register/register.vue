<template>
    <v-app>
        <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>
            <v-row align="center" justify="center">
                <v-col class="ma-0 pa-0" cols="12" sm="12" md="12">
                        <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                            <v-col :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'height:30vh;':'height:100vh'"  cols="12" md="4" class="primary ma-0 pa-0 d-flex flex-column">
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
                                <vue-element-loading :active="isRegistering" spinner="bar-fade-scale" color="#EF6C00" />
                                <v-row align="center" justify="center">
                                    <v-col class="text-left" cols="12" md="8" lg="6" sm="7">
                                         
                                          <v-card-text >
                                            <v-form autocomplete="off"  class="text-center " ref="RegisterForm"
                                                v-model="valid" lazy-validation>
                                                 <v-row align="center" justify="center">
                                                    <v-col class="ma-0 pa-0 text-left mt-5"  cols="12" md="8">
                                                        <div class="text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold">Sign Up <span class="font-weight-regular">Now</span></div>
                                                        <p class="mt-2">Login Your Account <router-link class="blue--text" :to="{name: 'login'}">Click here</router-link></p>
                                                    </v-col>

                                                     <v-col class="ma-0 pa-0 mt-2 " cols="12" md="8">
                                                         <HasError class="error--text" :form="form" field="student_id" />
                                                        <v-text-field outlined dense :rules="nameRules" label="Student ID Number" name="student_id"
                                                        v-model="form.student_id" type="text" color="primary" />
                                                    </v-col>

                                                    <v-col class="ma-0 pa-0" cols="12" md="8">
                                                        <v-text-field outlined dense :rules="nameRules" label="First Name" name="firstName"
                                                        v-model="form.firstName" type="text" color="primary" />
                                                    </v-col>

                                                     <v-col class="ma-0 pa-0 " cols="12" md="8">
                                                       <HasError class="error--text" :form="form" field="middleName" />
                                                        <v-text-field outlined dense label="Middle Name" :rules="nameRules" name="middleName"
                                                            v-model="form.middleName" type="text" color="primary" />
                                                    </v-col>

                                                    <v-col class="ma-0 pa-0 " cols="12" md="8">
                                                       <HasError class="error--text" :form="form" field="lastName" />
                                                        <v-text-field outlined dense label="Last Name" :rules="nameRules" name="lastname"
                                                            v-model="form.lastName" type="text" color="primary" />
                                                    </v-col>

                                                    <v-col class="ma-0 pa-0 " cols="12" md="8">
                                                       <HasError class="error--text" :form="form" field="email" />
                                                        <v-text-field outlined dense label="Email" name="Email" :rules="loginEmailRules"
                                                            v-model="form.email" type="email" color="primary" />
                                                    </v-col>

                                                    <v-col class="ma-0 pa-0 " cols="12" md="8">
                                                        <HasError class="error--text" :form="form" field="password" />
                                                        <v-text-field outlined dense :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                                            id="password" label="Password" name="password"
                                                            v-model="form.password" :type="show ? 'text' : 'password'"
                                                            color="primary" :rules="[rules.required, rules.min]" counter
                                                            @click:append="show = !show" />
                                                    </v-col>

                                                     <v-col class="ma-0 pa-0 " cols="12" md="8">
                                                        <v-text-field outlined dense :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                        id="passwordConfirmation" label="Confirm Password" name="password"
                                                        v-model="form.password_confirmation"
                                                        :type="show1 ? 'text' : 'password'" color="primary"
                                                        :rules="[rules.required, passwordMatch]" counter
                                                        @click:append="show1 = !show1" />
                                                    </v-col>

                                                   <!--   <v-col class="ma-0 pa-0 " cols="12" md="8">
                                                        
                                                         <span class="error--text text-left"> {{invalid_classcode_message}}</span>
                                                        <v-text-field 
                                                         outlined dense class="mb-0 pb-0" label="Class Code" :rules="[ClassCodeRules.required]" name="class_code"
                                                        hint="Please provide a valid class code to be able to register"
                                                            v-model="form.class_code" type="text" color="primary" />
                                                            
                                                    </v-col> -->
                                                    

                                                    <!--  <v-col class="ma-0 pa-0 mb-1" cols="12" md="8">
                                                        <v-select dense :items="role" v-model="form.role" :rules="RoleRules"
                                                        label="Role"></v-select>
                                                    </v-col> -->

                                                    <v-col class="ma-0 pa-0 text-left mt-2" cols="12" md="8">
                                                        <v-btn :loading="isRegistering" :disabled="!valid" @click="validate" color="primary" class="mb-5">
                                                            <v-icon class="mr-3">mdi-login</v-icon>
                                                            Sign Up
                                                        </v-btn>
                                                    </v-col>
                                                 </v-row>
                                            </v-form>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                              
                                <v-container ma-0 pa-0 class="pb-5 pl-5 pr-5">
                                  

                                    <!--   <v-container ma-0 pa-0 class="mt-2">
                                        <h3>Sign Up with Social media</h3>
                                        <v-btn color="blue" class="mb-3 mt-1 mr-5 white--text">
                                            <v-icon class="mr-3">mdi-facebook</v-icon>
                                            Facebook
                                        </v-btn>

                                        <v-btn color="red darken-1" class="mb-3 mt-1 white--text">
                                            <v-icon class="mr-3">mdi-google-plus</v-icon>
                                            Google Plus
                                        </v-btn>
                                    </v-container> -->

                                </v-container>
                            </v-col>
                        </v-row>
                           
                </v-col>
            </v-row>
        </v-container>

    </v-app>
</template>

<script>
    export default {
        data: () => ({
            isRegistering: false,
            valid: true,
            role: ['Teacher', 'Student'],
            invalid_classcode_message: null,
            form: new Form({
                firstName: "",
                middleName: "",
                lastName: "",
                email: "",
                password: "",
                password_confirmation: "",
                student_id: ""
            }),
            loginForm: new Form({
                email: "",
                password: "",
            }),
            nameRules: [
                v => !!v || 'Field is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters',
            ],
            loginEmailRules: [
                v => !!v || "Field is required",
                v => /.+@.+\..+/.test(v) || "Email must be valid"
            ],
            RoleRules: [
                v => !!v || "Field is required",
            ],
            ClassCodeRules:{
                required: v => !!v || "Class code is required",
            },
            show: false,
            show1: false,
            rules: {
                required: value => !!value || "Field is required.",
                min: v => (v && v.length >= 6) || "min 6 characters"
            }
        }),
        computed: {
            passwordMatch() {
                return () => this.password === this.password_confirmation || "Password must match";
            }
        },
        methods: {
            Test() {
                console.log(this.form);
            },
            validate() {
                if (this.$refs.RegisterForm.validate()) {
                    this.isRegistering = true;
                    this.form.post('/api/register')
                    .then((res) => {
                        if(res.data.success == true){
                            this.toastSuccess(res.data.message);
                            this.$refs.RegisterForm.reset()
                            this.valid = true;
                            this.isRegistering = false;
                            
                        }
                        else{
                            this.toastError(res.data.message);
                            this.invalid_classcode_message = res.data.message;
                            this.isRegistering = false;
                        }
                       
                    })
                    .catch(e=>{
                        this.toastError(e.response.data.message);
                        this.isRegistering = false;
                    })
                    
                }
            },
            login(email, password){
            this.loginForm.email = email;
            this.loginForm.password = password;
            axios.get('/sanctum/csrf-cookie').then(response => {
                    this.loginForm.post('/api/login')
                    .then((res) => {
                        if(res.status == 200) {
                            this.$store.dispatch('clear_current_user');
                            this.$router.push({ path: "/" })
                        }
                        else{
                        this.toastError(res.data);
                        }
                    })
            
                });
                    
            },
            
        }
    };

</script>
