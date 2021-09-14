<template>
    <v-app>

        <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'fill-height'" fluid>

            <v-row align="center" justify="center">

                <v-col :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? '' : 'ma-0 pa-0'" cols="12" sm="12"
                    md="12">
                    <v-row :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'fill-height' : ''"
                        align="center" justify="center">
                        <v-col
                            :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'height:35vh;':'height:100vh'"
                            cols="12" md="4" class="primary ma-0 pa-0 d-flex flex-column">
                            <v-container v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                                class="pb-0 mb-0 pl-5 d-flex justify-space-between">
                                <v-img height="70" width="70" max-height="70" max-width="70"
                                    src="../images/isu_logo1.png"></v-img>

                                <v-img height="70" width="70" max-height="70" max-width="70"
                                    src="../images/ccsict_logo_2.png"></v-img>
                            </v-container>

                            <v-container v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
                                class="pt-10 mb-0 pl-5 d-flex justify-center">
                                <div style="width: 250px;">
                                    <v-img class="float-right" height="100" width="100" max-height="100" max-width="100"
                                        src="../images/isu_logo1.png"></v-img>

                                    <v-img height="100" width="100" max-height="100" max-width="100"
                                        src="../images/ccsict_logo_2.png"></v-img>
                                </div>
                            </v-container>



                            <v-container class="fill-height " fluid style="padding-top: 35px;">
                                <v-card-text>
                                    <v-form class="text-center">
                                        <v-row align="center" justify="center">
                                            <v-col cols="12">
                                                <div class="display-2 white--text font-weight-bold">ORANGE</div>
                                                <div class="white--text"><b class="text-h6">O</b>nline <b
                                                        class="text-h6">R</b>esources <b class="text-h6">A</b>pp for a
                                                    <b class="text-h6">N</b>ew <b class="text-h6">G</b>uild of <b
                                                        class="text-h6">E</b>ducation</div>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>

                            </v-container>

                            <v-container :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'd-none' : ''" class="fill-height" fluid>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" class="text-center">
                                        <!-- <iframe width="440" height="250"
                                            src="https://www.youtube-nocookie.com/embed/cMb9NdAf11o?start=0&end=150&vq=hd1080&autoplay=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&color=white&disablekb=1"
                                                title="YouTube video player" frameborder="0">
                                            </iframe> -->
                                        <iframe src="https://player.vimeo.com/video/601244029?h=d67ddce656&muted=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=0&#t=150s" width="440"
                                            height="250" frameborder="0"
                                            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                    </v-col>
                                </v-row>
                            </v-container>

                        </v-col>
                        <v-col :class="$vuetify.breakpoint.xs ? 'ma-0 pa-3' :'ma-0 pa-0'" cols="12" md="8">

                            <vue-element-loading :active="isLoggin" spinner="bar-fade-scale" color="#EF6C00" />
                            <v-row align="center" justify="center">
                                <v-col class="text-left" cols="12" md="8" lg="6" sm="7">
                                    <v-card-text v-if="!isForgotPassword">
                                        <v-form @submit.prevent="validate" class="text-center" ref="loginForm" v-model="valid" lazy-validation>
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
                                                        dense type="email" color="primary" required />
                                                    <!--   <HasError class="error--text" :form="form" field="email" /> -->

                                                </v-col>
                                                <v-col class="ma-0 pa-0 mt-2" cols="12" md="8">
                                                    <v-text-field class="mb-0 pb-0" dense outlined
                                                        v-model="form.password"
                                                        :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                                                        :rules="[rules.required, rules.min]"
                                                        :type="show ? 'text' : 'password'" name="password"
                                                        label="Password" prepend-inner-icon="lock"
                                                        hint="At least 6 characters" color="primary" counter
                                                        @click:append="show = !show">
                                                    </v-text-field>
                                                    <HasError class="error--text" :form="form" field="password" />
                                                </v-col>
                                                <!--   <span class="error--text mt-0 pt-0 mb-2">{{ToManyAttepmtError}}</span> -->

                                                <v-col class="ma-0 pa-0 text-right" cols="12" md="8">
                                                    <!-- <v-row class="">
                                                        <v-col>
                                                            <v-checkbox ma-0 pa-0 class="ma-0 pa-0" label="Remember me">
                                                            </v-checkbox>
                                                        </v-col>
                                                        <v-col class="float-right"> -->
                                                            <a href="#" @click.prevent="isForgotPassword = !isForgotPassword, IsloadingComponent = !IsloadingComponent" class="float-right">Forgot Password?</a>
                                                    <!--     </v-col>
                                                    </v-row> -->
                                                </v-col>
                                                <v-col class="ma-0 pa-0 text-left" cols="12" md="8">
                                                    <v-btn color="primary" class="mb-5" type="submit" :disabled="!valid"
                                                       :loading="isLoggin">
                                                        <v-icon class="mr-3">mdi-login</v-icon>
                                                        Login
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-card-text>


                                     <v-card-text v-if="isForgotPassword">
                                 <!--            <vue-element-loading :active="IsloadingComponent" spinner="bar-fade-scale" color="#EF6C00" /> -->
                                            <div class="text-center">
                                                <v-progress-circular
                                           
                                                v-if="IsloadingComponent"
                                                color="primary"
                                                indeterminate
                                                ></v-progress-circular>
                                            </div>
                                         
                                            <forgotPassword v-on:toggleIsloading="IsloadingComponent = !IsloadingComponent" v-on:toggleLogin="isForgotPassword = !isForgotPassword"></forgotPassword>
                                    
                                    </v-card-text>
                                </v-col>
                            </v-row>



                            <!-- <v-container ma-0 pa-0 class="pb-5 pl-5 pr-5">
                            <v-container ma-0 pa-0 class="mt-3">
                            <h3>Login with Social media</h3>
                                <v-btn  color="blue" class="mb-3 mt-1 mr-5 white--text">
                                <v-icon class="mr-3">mdi-facebook</v-icon>
                            Facebook
                            </v-btn>

                            <v-btn  color="red darken-1" class="mb-3 mt-1 white--text">
                                <v-icon class="mr-3">mdi-google-plus</v-icon>
                            Google Plus
                            </v-btn>
                            </v-container>
                        </v-container>  -->
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

    </v-app>
</template>

<script>
    const forgotPassword = () => import(/* webpackChunkName: "verify-email" */"./forgot-password")
    export default {
        components:{
            forgotPassword
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
            validate() {
                if (this.$refs.loginForm.validate()) {
                    this.login();
                    /* this.$store.dispatch('login', this.form)
                    .then(res=>{
                      //console.log(res);
                       if(res == 200){
                           this.toastSuccess("Login success");
                       }
                       else if(res == 203){
                            this.toastError('Login failed!');
                       }
                    }) */
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
        created(){
            window.open("", "_self");
window.close();
        }



    };

</script>
