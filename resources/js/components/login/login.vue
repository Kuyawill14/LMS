<template>
  <v-app>
      <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
          <div>
              <v-tabs v-model="tab" show-arrows background-color="primary" icons-and-text dark grow>
                  <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                    <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                  <v-tab>
                      <v-icon large>mdi-account</v-icon>
                      <div class="caption py-1">Login</div>
                  </v-tab>
                    <v-tab >
                      <v-icon large>mdi-account-outline</v-icon>
                      <div class="caption py-1">Register</div>
                  </v-tab>
                  <v-tab-item>
                      <v-card class="px-4">
                          <v-card-text>
                              <v-form ref="loginForm" v-model="valid" lazy-validation>
                                  <v-row>
                                      <v-col cols="12">
                                          <v-text-field v-model="form.email" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-text-field v-model="form.password" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                                      </v-col>
                                      <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                      </v-col>
                                      <v-spacer></v-spacer>
                                      <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                          <v-btn x-large block :disabled="!valid" color="primary" @click="validate"> Login </v-btn>
                                      </v-col>
                                  </v-row>
                              </v-form>
                          </v-card-text>
                      </v-card>
                  </v-tab-item>
                  <v-tab-item>
                      <v-card class="px-4">
                          <v-card-text>
                              <v-form ref="registerForm" v-model="valid" lazy-validation>
                                  <v-row>
                                      <v-col cols="12" sm="6" md="6">
                                          <v-text-field v-model="firstName" :rules="[rules.required]" label="First Name" maxlength="20" required></v-text-field>
                                      </v-col>
                                      <v-col cols="12" sm="6" md="6">
                                          <v-text-field v-model="lastName" :rules="[rules.required]" label="Last Name" maxlength="20" required></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                                      </v-col>
                                      <v-spacer></v-spacer>
                                      <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                          <v-btn x-large block :disabled="!valid" color="primary" @click="validate">Register</v-btn>
                                      </v-col>
                                  </v-row>
                              </v-form>
                          </v-card-text>
                      </v-card>
                  </v-tab-item>
              </v-tabs>
          </div>
      </v-dialog>
    </v-app>
</template>

<script>
export default {
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        this.form.post('/api/Userlogin')
        .then((res)=>{
            if(res.status == 200){
              
              this.$router.push({path: "/"})
            }
        })
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  data: () => ({
    dialog: true,
    tab: 0,

    valid: true,
    
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    form: new Form({
      email: "",
      password: "",
      }),
    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 6) || "Min 8 characters"
    }
  })
}
</script>