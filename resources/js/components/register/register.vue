<template>
    <v-app>

        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="8">
                    <v-card class="elevation-12">
                        <v-window>
                            <v-window-item>
                                <v-row class="fill-height">
                                    <v-col cols="12" md="4" class="primary">

                                    </v-col>

                                    <v-col cols="12" md="8">
                                        <v-card-text class="pt-10">
                                            <h1 class=" display-1 primary--text ">Sign Up <span>Now</span></h1>
                                            <p class="mt-2">Login Your Account <router-link :to="{name: 'login'}">Click
                                                    here</router-link>
                                            </p>

                                            <v-form class="text-center mt-12 pl-1 pr-5" ref="RegisterForm"
                                                v-model="valid" lazy-validation>

                                                <v-text-field :rules="nameRules" label="First Name" name="firstName"
                                                    v-model="form.firstName" type="text" color="primary" />

                                                <HasError class="error--text" :form="form" field="middleName" />
                                                <v-text-field label="Middle Name" :rules="nameRules" name="middleName"
                                                    v-model="form.middleName" type="text" color="primary" />

                                                <HasError class="error--text" :form="form" field="lastName" />
                                                <v-text-field label="Last Name" :rules="nameRules" name="lastname"
                                                    v-model="form.lastName" type="text" color="primary" />

                                                <HasError class="error--text" :form="form" field="email" />
                                                <v-text-field label="Email" name="Email" :rules="loginEmailRules"
                                                    v-model="form.email" type="email" color="primary" />


                                                <HasError class="error--text" :form="form" field="password" />
                                                <v-text-field :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                                    id="password" label="Password" name="password"
                                                    v-model="form.password" :type="show ? 'text' : 'password'"
                                                    color="primary" :rules="[rules.required, rules.min]" counter
                                                    @click:append="show = !show" />

                                                <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                    id="passwordConfirmation" label="Confirm Password" name="password"
                                                    v-model="form.password_confirmation"
                                                    :type="show1 ? 'text' : 'password'" color="primary"
                                                    :rules="[rules.required, passwordMatch]" counter
                                                    @click:append="show1 = !show1" />



                                                <v-select :items="role" v-model="form.role" :rules="RoleRules"
                                                    label="Role"></v-select>
                                            </v-form>


                                            <!--   <h3 class="text-center mt-4">Forgot your password ?</h3> -->
                                        </v-card-text>
                                        <v-container ma-0 pa-0 class="pb-5 pl-5 pr-5">
                                            <v-btn :disabled="!valid" @click="validate" color="primary" class="mb-5">
                                                <v-icon class="mr-3">mdi-login</v-icon>
                                                Sign Up
                                            </v-btn>

                                            <v-container ma-0 pa-0 class="mt-2">
                                                <h3>Sign Up with Social media</h3>
                                                <v-btn color="blue" class="mb-3 mt-1 mr-5 white--text">
                                                    <v-icon class="mr-3">mdi-facebook</v-icon>
                                                    Facebook
                                                </v-btn>

                                                <v-btn color="red darken-1" class="mb-3 mt-1 white--text">
                                                    <v-icon class="mr-3">mdi-google-plus</v-icon>
                                                    Google Plus
                                                </v-btn>
                                            </v-container>

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
