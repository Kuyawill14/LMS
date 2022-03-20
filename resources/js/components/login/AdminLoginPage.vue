<template>
    <v-app>
        <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>

            <v-row align="center" justify="center">

                <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'ma-0 pa-0'" cols="12" sm="12"
                    md="12">

                    <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''" align="center" justify="center">
                        <loginRegisterImageConatiner></loginRegisterImageConatiner>

                        <v-col :class="$vuetify.breakpoint.xs ? 'ma-0 pa-3 PB-0' :'ma-0 pa-0'" cols="12" md="5">
                            <vue-element-loading :active="isLoggin" spinner="bar-fade-scale" color="#EF6C00" />
                            <v-row align="center" justify="center">
                                <v-col class="text-left" cols="12" md="12" lg="12" sm="7">
                                    <v-card-text v-if="!isForgotPassword">
                                        <v-form @submit.prevent="validate" class="text-center" ref="loginForm"
                                            v-model="valid" lazy-validation>
                                            <v-row align="center" justify="center">
                                                <v-col class="ma-0 pa-0 text-left" cols="12" md="8">
                                                    <div class=" text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold">
                                                        Administrator Login<span class="font-weight-regular"></span>
                                                    </div>
                                                </v-col>

                                                <v-col class="ma-0 pa-0 mt-4" cols="12" md="8">
                                                    <v-text-field outlined label="Email" v-model="form.email"
                                                        :rules="loginEmailRules" name="Email" prepend-inner-icon="email"
                                                        :dense="$vuetify.breakpoint.mdAndUp" type="email"
                                                        color="primary" required />
                                                </v-col>
                                                <v-col class="ma-0 pa-0 mt-2 mb-0" cols="12" md="8">
                                                    <v-text-field class="mb-0 pb-0" :dense="$vuetify.breakpoint.mdAndUp"
                                                        outlined v-model="form.password"
                                                        :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                                                        :rules="[rules.required, rules.min, rules.blank]"
                                                        :type="show ? 'text' : 'password'" name="password"
                                                        label="Password" prepend-inner-icon="lock"
                                                        hint="At least 6 characters" color="primary" counter
                                                        @click:append="show = !show">
                                                    </v-text-field>
                                                    <HasError class="error--text" :form="form" field="password" />
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

    import VueFbCustomerChat from 'vue-fb-customer-chat'

    Vue.use(VueFbCustomerChat, {
        page_id: 102514265611526, //  change 'null' to your Facebook Page ID,
        theme_color: '#333333', // theme color in HEX
        locale: 'en_US', // default 'en_US'
    })
    export default {
        title: 'Orange',
        components: {
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
                    remember: false
                }),
                loginEmailRules: [
                    v => !!v || "Required",
                    v => /.+@.+\..+/.test(v) || "Email must be valid",
                    v => v && !!v.trim() || 'Field cannot be blank',
                ],
                emailRules: [
                    v => !!v || "Required",
                    v => /.+@.+\..+/.test(v) || "Email must be valid",
                    v => v && !!v.trim() || 'Field cannot be blank',
                ],
                show: false,
                rules: {
                    required: value => !!value || "Required.",
                    min: v => (v && v.length >= 6) || "Min 6 characters",
                    blank: v => v && !!v.trim() || 'Field cannot be blank',
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
                    this.form.post('/api/admin_Login')
                        .then((res) => {
                          
                            if (res.data.success == true) {
                                this.$store.dispatch('clear_current_user');
                                this.$router.push({
                                    path: "/"
                                })
                                //this.StartFireBasePushNotification();
                            } else {
                                this.isLoggin = false;
                                this.toastError(res.data.message);
                            }
                        
                             //this.isLoggin = false;
                        })
                        .catch(err => {
                             this.isLoggin = false;
                            this.toastError("Incorrect Email or Password. Please try again");
                        })

                });

            },
            async StartFireBasePushNotification(){
                let firebaseConfig = {
                    apiKey: process.env.MIX_apiKey,
                    authDomain: process.env.MIX_authDomain,
                    projectId: process.env.MIX_projectId,
                    storageBucket: process.env.MIX_storageBucket,
                    messagingSenderId: process.env.MIX_messagingSenderId,
                    appId: process.env.MIX_appId,
                };
                
                if (!firebase.apps.length) {
                    firebase.initializeApp(firebaseConfig);
                }else {
                    firebase.app(); 
                }
                const messaging = firebase.messaging();
                messaging
                    .requestPermission()
                    .then(()=> {
                        return messaging.getToken()
                    })
                    .then((response)=> {
                        axios.post('/api/store_token',{token: response})
                        .then((res)=>{
                        })    
                    }).catch(function (error) {

                    });
                    messaging.onMessage(function({data:{body,title}}){
                        new Notification(title, {body});
                    });
            },

          /*   classNotification(){
                  window.OneSignal = window.OneSignal || [];
                    OneSignal.push(function() {
                    OneSignal.init({
                        appId: "2b9acbc0-fd01-474c-bdc8-754c01abcd18",
                    });
                });
            }
             */

        },
        beforeRouteEnter(to, from,next) {
            let confirmed = window.localStorage.getItem('isConfirmedPassword')

            if(confirmed){
                next();
            }else{
                let password = prompt('This page is secure enter password');
                if(password == '123123'){
                     next();
                }else{
                    return next({
                        path: "/"
                    });
                }
                /* axios.post('/api/check_password',{password: password})
                .then((res)=>{
                    if(res.data.success){
                         next();
                         window.localStorage.setItem('isConfirmedPassword',true)
                    }else{
                         window.localStorage.removeItem('isConfirmedPassword');
                        return next({
                            path: "/"
                        });
                    }
                }) */
            }
        },
    
    };

</script>
