<template>
    <v-app>
        <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>
            <v-row align="center" justify="center">
                <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'ma-0 pa-0'" cols="12" sm="12" md="12">
                    <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                        <loginRegisterImageConatiner></loginRegisterImageConatiner>
                        <v-col :class="$vuetify.breakpoint.xs ? 'ma-0 pa-3 mb-10' :'ma-0 pa-0'" cols="12" md="5">
                            <vue-element-loading :active="isRegistering" spinner="bar-fade-scale" color="#EF6C00" />
                            <v-row align="center" justify="center">
                                <v-col cols="12" md="12" lg="12" sm="7">
                                    <v-card-text>
                                        <v-form autocomplete="off" class="text-center " ref="RegisterForm"
                                            v-model="valid" lazy-validation>
                                            <v-row align="center" justify="center">
                                                <v-col class="mt-0 pt-0 text-left" cols="12" md="8">
                                                    <div class="text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold">Sign
                                                        Up <span class="font-weight-regular">Now</span></div>
                                                    <p class="mt-2">Login Your Account <router-link class="blue--text"
                                                            :to="{name: 'login'}">Click here</router-link>
                                                    </p>
                                                </v-col>

                                                <v-col class="ma-0 pa-0 mt-2 " cols="12" md="8">
                                                    <HasError class="error--text" :form="form" field="student_id" />
                                                    <v-text-field outlined :dense="$vuetify.breakpoint.mdAndUp" :rules="StudentIdRules"
                                                        label="Student ID Number" name="student_id"
                                                        v-model="form.student_id" type="number" color="primary"
                                                        @keypress="isNumber" maxlength="6"/>
                                                </v-col>

                                                <v-col class="ma-0 pa-0 mt-0" cols="12" md="8">
                                                    <v-text-field outlined :dense="$vuetify.breakpoint.mdAndUp" :rules="nameRules" label="First Name"
                                                        name="firstName" v-model="form.firstName" type="text"
                                                        color="primary" />
                                                </v-col>

                                                <v-col class="ma-0 pa-0 mt-0 " cols="12" md="8">
                                                    <HasError class="error--text" :form="form" field="middleName" />
                                                    <v-text-field outlined :dense="$vuetify.breakpoint.mdAndUp" label="Middle Name" :rules="nameRules"
                                                        name="middleName" v-model="form.middleName" type="text"
                                                        color="primary" />
                                                </v-col>

                                                <v-col class="ma-0 pa-0 mt-0" cols="12" md="8">
                                                    <HasError class="error--text" :form="form" field="lastName" />
                                                    <v-text-field outlined :dense="$vuetify.breakpoint.mdAndUp" label="Last Name" :rules="nameRules"
                                                        name="lastname" v-model="form.lastName" type="text"
                                                        color="primary" />
                                                </v-col>

                                                <v-col class="ma-0 pa-0 mt-0 " cols="12" md="8">
                                                    <HasError class="error--text" :form="form" field="email" />
                                                    <v-text-field outlined :dense="$vuetify.breakpoint.mdAndUp" label="Email" name="Email"
                                                        :rules="loginEmailRules" v-model="form.email" type="email"
                                                        color="primary" />
                                                </v-col>

                                                <v-col class="ma-0 pa-0" cols="12" md="8">
                                                    <HasError class="error--text" :form="form" field="password" />
                                                    <v-text-field outlined :dense="$vuetify.breakpoint.mdAndUp"
                                                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" id="password"
                                                        label="Password" name="password" v-model="form.password"
                                                        :type="show ? 'text' : 'password'" color="primary"
                                                        :rules="[rules.required, rules.min]" counter
                                                        @click:append="show = !show" />
                                                </v-col>

                                                <v-col class="ma-0 pa-0 " cols="12" md="8">
                                                    <v-text-field outlined :dense="$vuetify.breakpoint.mdAndUp"
                                                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                        id="passwordConfirmation" label="Confirm Password"
                                                        name="password" v-model="form.password_confirmation"
                                                        :type="show1 ? 'text' : 'password'" color="primary"
                                                        :rules="[rules.required, passwordMatch]" counter
                                                        @click:append="show1 = !show1" />
                                                </v-col>

                                                <v-col class="ma-0 pa-0 text-left mt-2" cols="12" md="8">
                                                    <v-btn :loading="isRegistering" :disabled="!valid" @click="validate"
                                                    :block="!$vuetify.breakpoint.mdAndUp"
                                                     :large="!$vuetify.breakpoint.mdAndUp"
                                                    :rounded="!$vuetify.breakpoint.mdAndUp"
                                                        color="primary" class="mb-5">
                                                        <v-icon class="mr-3">mdi-login</v-icon>
                                                        Sign Up
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
            loginRegisterImageConatiner,
            loginRegisterFooter
        },

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
            StudentIdRules: [
                v => !!v || 'Student ID is required',
                v => (v && v.length >= 6) || 'min 6 characters',
                v => (v && v.length <= 8) || 'Max 8 characters',
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
                return this.form.password === this.form.password_confirmation || "Pasword does not match";
            }
        },
        methods: {
            isNumber(val) {
                if (isNaN(Number(val.key)) ) {
                    return val.preventDefault();
                }
            },
            validate() {
                if (this.$refs.RegisterForm.validate()) {
                    this.isRegistering = true;
                    this.form.post('/api/register')
                    .then((res) => {
                        if (res.data.success == true) {
                            this.toastSuccess(res.data.message);
                            this.login(this.form.email, this.form.password);
                            this.valid = true;
                            this.isRegistering = false;
                                this.$refs.RegisterForm.reset();

                        } else {
                            this.toastError(res.data.message);
                            this.invalid_classcode_message = res.data.message;
                            this.isRegistering = false;
                        }

                    })
                    .catch(e => {
                        this.toastError(e.response.data.message);
                        this.isRegistering = false;
                    })

                }
            },
            login(email, password) {
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

        }
    };

</script>
