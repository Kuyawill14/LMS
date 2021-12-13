<template>
    <v-app>
        <div id="fb-root"></div>

        <!-- Your Chat Plugin code -->
        <div id="fb-customer-chat" class="fb-customerchat">
        </div>
        <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>

            <v-row align="center" justify="center">

                <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'ma-0 pa-0'" cols="12" sm="12"
                    md="12">

                    <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                        <loginRegisterImageConatiner></loginRegisterImageConatiner>

                        <v-col :class="$vuetify.breakpoint.xs ? 'ma-0 pa-3' :'ma-0 pa-0'" cols="12" md="5">
                            <vue-element-loading :active="isLoggin" spinner="bar-fade-scale" color="#EF6C00" />
                            <v-row align="center" justify="center">
                                <v-col class="text-left" cols="12" md="12" lg="12" sm="7">
                                    <v-card-text v-if="!isForgotPassword">
                                        <v-form @submit.prevent="validate" class="text-center" ref="loginForm"
                                            v-model="valid" lazy-validation>
                                            <v-row align="center" justify="center">
                                                <v-col class="ma-0 pa-0 text-left" cols="12" md="8">
                                                    <div class=" text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold">
                                                        Login to your <span class="font-weight-regular">Account</span>
                                                    </div>
                                                    <p class="mt-2">Don't have an account? <router-link
                                                            class="blue--text" :to="{name: 'register'}">Create one here
                                                        </router-link>
                                                    </p>
                                                </v-col>

                                                <v-col class="ma-0 pa-0 mt-4" cols="12" md="8">
                                                    <v-text-field outlined label="Email" v-model="form.email"
                                                        :rules="loginEmailRules" name="Email" prepend-inner-icon="email"
                                                        :dense="$vuetify.breakpoint.mdAndUp" type="email"
                                                        color="primary" required />
                                                </v-col>
                                                <v-col class="ma-0 pa-0 mt-2" cols="12" md="8">
                                                    <v-text-field class="mb-0 pb-0" :dense="$vuetify.breakpoint.mdAndUp"
                                                        outlined v-model="form.password"
                                                        :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                                                        :rules="[rules.required, rules.min]"
                                                        :type="show ? 'text' : 'password'" name="password"
                                                        label="Password" prepend-inner-icon="lock"
                                                        hint="At least 6 characters" color="primary" counter
                                                        @click:append="show = !show">
                                                    </v-text-field>
                                                    <HasError class="error--text" :form="form" field="password" />
                                                </v-col>


                                                <v-col class="ma-0 pa-0 text-right" cols="12" md="8">
                                                    <a href="#"
                                                        @click.prevent="isForgotPassword = !isForgotPassword, IsloadingComponent = !IsloadingComponent"
                                                        class="float-right">Forgot Password?</a>
                                                </v-col>
                                                <v-col
                                                    :class="$vuetify.breakpoint.mdAndUp ? 'ma-0 pa-0 text-left' : 'ml-0 pl-0 pr-0 mr-0 mt-1'"
                                                    cols="12" md="8">
                                                    <v-btn color="primary" class="mb-5" type="submit" :disabled="!valid"
                                                        :block="!$vuetify.breakpoint.mdAndUp"
                                                        :large="!$vuetify.breakpoint.mdAndUp"
                                                        :rounded="!$vuetify.breakpoint.mdAndUp" :loading="isLoggin">
                                                        <v-icon class="mr-3">mdi-login</v-icon>
                                                        Login
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-card-text>


                                    <v-card-text v-if="isForgotPassword">
                                        <div class="text-center">
                                            <v-progress-circular v-if="IsloadingComponent" color="primary"
                                                indeterminate></v-progress-circular>
                                        </div>

                                        <forgotPassword v-on:toggleIsloading="IsloadingComponent = !IsloadingComponent"
                                            v-on:toggleLogin="isForgotPassword = !isForgotPassword"></forgotPassword>

                                    </v-card-text>
                                </v-col>
                            </v-row>




                        </v-col>

<!-- 
                        <div style="position:absolute;bottom: 5px; right: 5px">
                         
                          <v-btn
                            style=" text-transform: unset !important;"
                                @click="openFbPage()"
                                id="help-btn" active-class="act-btn" depressed rounded text>
                          <v-icon left>mdi-facebook</v-icon>    @ISUE-Orange 
                            </v-btn>
                         
                            <v-btn
                            style=" text-transform: unset !important;"
                                @click=" openFbMessage()"
                                id="help-btn" active-class="act-btn" depressed rounded text>
                           <v-icon left>mdi-account-question</v-icon>  Help 
                            </v-btn>
                        </div> -->
                        <loginRegisterFooter></loginRegisterFooter>

                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    const forgotPassword = () => import( /* webpackChunkName: "forgot_password" */ "./forgot-password")
    const loginRegisterFooter = () => import( /* webpackChunkName: "login_layout" */ "../layout/LoginRegisterLayout/LoginRegisterFooter")
    const loginRegisterImageConatiner = () => import( /* webpackChunkName: "login_layout" */ "../layout/LoginRegisterLayout/LoginRegisterImageConatiner")

    import VueFbCustomerChat from 'vue-fb-customer-chat'

    Vue.use(VueFbCustomerChat, {
        page_id: 102514265611526, //  change 'null' to your Facebook Page ID,
        theme_color: '#333333', // theme color in HEX
        locale: 'en_US', // default 'en_US'
    })
    export default {
        title: 'Orange',
        components: {
            forgotPassword,
            loginRegisterFooter,
            loginRegisterImageConatiner
        },
        data() {
            return {
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
                },
                ToManyAttepmtError: null,
                isForgotPassword: false,
                IsloadingComponent: false

            }
        },
        computed: {
            passwordMatch() {
                return () => this.password === this.verify || "Password must match";
            }
        },
        methods: {
            openFbMessage() {
 window.open('https://www.messenger.com/t/102514265611526/', '_blank').focus();
            },
            openFbPage() {
  window.open('https://www.facebook.com/ISUE-Orange-102514265611526', '_blank').focus();
            },
            validate() {
                if (this.$refs.loginForm.validate()) {
                    this.login();
                }
            },
            reset() {
                this.$refs.form.reset();
            },
            resetValidation() {
                this.$refs.form.resetValidation();
            },

            login() {

                this.isLoggin = true;
                axios.get('/sanctum/csrf-cookie').then(response => {
                    this.form.post('/api/login')
                        .then((res) => {
                            if (res.data.success == true) {
                                this.$store.dispatch('clear_current_user');
                                window.localStorage.setItem('personal_access_token', res.data.token);
                                this.$router.push({
                                    path: "/"
                                })
                                if ($('#fb-root')) {
                                    $('#fb-root').css('display', 'none');
                                }
                                // this.toastSuccess(res.data.message);
                            } else {
                                this.isLoggin = false;
                                this.toastError(res.data.message);
                            }
                        })
                        .catch(err => {
                            if (err.response.status == 429) {
                                this.toastError(err.response.data.errors[this.form.email][0]);
                            } else {
                                this.toastError(err.response.data.message);
                            }
                            this.isLoggin = false;

                        })

                });

            },

        },
        created() {
            // window.open("", "_self");
            // window.close();

            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "102514265611526");
            chatbox.setAttribute("attribution", "biz_inbox");



            window.fbAsyncInit = function () {
                FB.init({
                    xfbml: true,
                    version: 'v12.0'
                });
            };

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

         

        },
mounted() {
         $('#fb-root').css('display', 'block');
}
    };

</script>
