<template>
    <v-app>
        <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>
            <v-row align="center" justify="center">
                <v-col class="ma-0 pa-0" cols="12" sm="12" md="12">
                        <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                            <v-col :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'height:30vh;':'height:100vh'"  cols="12" md="4" class="primary ma-0 pa-0">
                               
                            </v-col>

                            <v-col :class="$vuetify.breakpoint.xs ? 'ma-0 pa-5' :'ma-0 pa-0'" cols="12" md="8">
                                <v-row align="center" justify="center">
                                    <v-col class="text-left" cols="12" md="8" sm="10">
                                          <v-card-text >
                                           

                                            <v-form class="text-center " ref="RegisterForm"
                                                v-model="valid" lazy-validation>
                                                 <v-row align="center" justify="center">
                                                    <v-col class="ma-0 pa-0 text-left mt-5"  cols="12" md="8">
                                                        <h1 class=" display-1 font-weight-bold">Sign Up <span class="font-weight-regular">Now</span></h1>
                                                        <p class="mt-2">Login Your Account <router-link class="blue--text" :to="{name: 'login'}">Click here</router-link></p>
                                                    </v-col>

                                                    <v-col class="ma-0 pa-0 mt-2 mb-1" cols="12" md="8">
                                                        <v-text-field :rules="nameRules" label="First Name" name="firstName"
                                                        v-model="form.firstName" type="text" color="primary" />
                                                    </v-col>

                                                     <v-col class="ma-0 pa-0 mb-1" cols="12" md="8">
                                                       <HasError class="error--text" :form="form" field="middleName" />
                                                        <v-text-field label="Middle Name" :rules="nameRules" name="middleName"
                                                            v-model="form.middleName" type="text" color="primary" />
                                                    </v-col>

                                                    <v-col class="ma-0 pa-0 mb-1" cols="12" md="8">
                                                       <HasError class="error--text" :form="form" field="lastName" />
                                                        <v-text-field label="Last Name" :rules="nameRules" name="lastname"
                                                            v-model="form.lastName" type="text" color="primary" />
                                                    </v-col>

                                                    <v-col class="ma-0 pa-0 mb-1" cols="12" md="8">
                                                       <HasError class="error--text" :form="form" field="email" />
                                                        <v-text-field label="Email" name="Email" :rules="loginEmailRules"
                                                            v-model="form.email" type="email" color="primary" />
                                                    </v-col>

                                                    <v-col class="ma-0 pa-0 mb-1" cols="12" md="8">
                                                        <HasError class="error--text" :form="form" field="password" />
                                                        <v-text-field :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                                            id="password" label="Password" name="password"
                                                            v-model="form.password" :type="show ? 'text' : 'password'"
                                                            color="primary" :rules="[rules.required, rules.min]" counter
                                                            @click:append="show = !show" />
                                                    </v-col>

                                                     <v-col class="ma-0 pa-0 mb-1" cols="12" md="8">
                                                        <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                        id="passwordConfirmation" label="Confirm Password" name="password"
                                                        v-model="form.password_confirmation"
                                                        :type="show1 ? 'text' : 'password'" color="primary"
                                                        :rules="[rules.required, passwordMatch]" counter
                                                        @click:append="show1 = !show1" />
                                                    </v-col>

                                                     <v-col class="ma-0 pa-0 mb-1" cols="12" md="8">
                                                        <v-select :items="role" v-model="form.role" :rules="RoleRules"
                                                        label="Role"></v-select>
                                                    </v-col>


                                                    <v-col class="ma-0 pa-0 text-left mt-2" cols="12" md="8">
                                                          <v-btn :disabled="!valid" @click="validate" color="primary" class="mb-5">
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
            valid: true,
            role: ['Teacher', 'Student'],
            form: new Form({
                firstName: "",
                middleName: "",
                lastName: "",
                email: "",
                password: "",
                password_confirmation: "",
                role: ""
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
                    this.form.post('/api/register')
                    .then(() => {
                        console.log("Success");
                        this.$refs.RegisterForm.reset()
                        this.valid = true;
                    })
                }
            },
        }
    };

</script>
