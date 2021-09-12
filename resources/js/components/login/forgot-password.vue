<template>
<v-form class="text-center" ref="ResetForm" v-model="valid" lazy-validation>
     <vue-element-loading :active="isSending" text="Sending please wait..." spinner="bar-fade-scale" color="#EF6C00" />
        <v-row  align="center" justify="center">
             <v-col class="ma-0 pa-0 text-left mt-4" cols="12" md="8">
                <div class=" text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold">
                   <v-icon left large>mdi-lock</v-icon> Forgot your password?
                </div>
              <p class="mt-2">Enter your email address and we'll send you link to reset your password</p>
            </v-col>
            <v-col class="ma-0 pa-0 mt-4" cols="12" md="8">
                 <v-text-field :loading="isSending" outlined label="Email" v-model="form.email"
                    :rules="emailRules" name="Email" prepend-inner-icon="email"
                    dense type="email" color="primary" required />
            </v-col>

             <v-col class="ma-0 pa-0" cols="12" md="8">
               <v-btn :disabled="!valid || isSending"  @click="RequestPasswordReset()" class="pl-10 pr-10 pt-5 pb-5" rounded color="primary" > {{isSending ? 'Sending...':'Reset password'}}</v-btn>
            </v-col>

             <v-col class="ma-0 pa-0 mt-4" cols="12" md="8">
                <a href="#" @click.prevent="$emit('toggleLogin')" >Login</a>
            </v-col>
        </v-row>
</v-form>
</template>
<script>
export default {
    data(){
        return{
             valid: true,
             emailRules: [
                v => !!v || "Required",
                v => /.+@.+\..+/.test(v) || "Email must be valid"
            ],
            
            form: new Form({
                email: '',
            }),
            isSending: false
        }
    },
    methods:{
        RequestPasswordReset(){
            this.isSending = true;
            axios.put("/api/send_reset_password", this.form)
            .then(res=>{
               if(res.data.success == true){
                   this.toastSuccess(res.data.message);
                   this.isSending = false;
                    this.$emit('toggleLogin');
                   this.$refs.ResetForm.reset()
               }
               else{
                   this.toastError(res.data.message);
                   this.isSending = false;
               }
            })
            .catch(err=> {
                this.isSending = false;
                this.toastError('Something went wrong');
            })
            
        }
    }
}
</script>