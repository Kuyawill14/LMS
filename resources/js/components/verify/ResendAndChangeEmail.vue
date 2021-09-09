<template>
    <div >

    <v-dialog
        v-model="ConfirmPassword"
        persistent
        max-width="400"
        >
        <v-card>
            <v-card-title>
                <v-btn icon @click="ConfirmPassword = false">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
                Confirm Password
            </v-card-title>
                <v-card-text>Please enter you account password, to continue changing you email address.</v-card-text>
                <div class="pl-2 pr-2">
                     <v-text-field class="mb-0 pb-0" dense outlined
                    v-model="form.password"
                    :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show ? 'text' : 'password'" name="password"
                    label="Password" prepend-inner-icon="lock"
                    hint="At least 6 characters" color="primary" 
                    @click:append="show = !show">
                </v-text-field>
                </div>
                
                
            <v-card-actions>
            <v-btn
                block
                color="primary"
                rounded
                :loading="isConfirming"
                @click="ConfirmUserPassword()">
                Confirm
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

        <p >If you hvae not received a verification email or if you have mistyped your email
            address, you can resend the verification mail. </p>

        <v-text-field outlined label="Email" 
        v-model="get_CurrentUser.email"
        :rules="loginEmailRules" name="Email" 
        prepend-inner-icon="email"
        :readonly="!isEmailChange"
        :append-icon="isEmailChange ? 'mdi-pencil' : 'mdi-pencil-off'"
        @click:append="toggleEmailChange"
        dense type="email" color="primary" required />

        <div class="text-left">
            <v-btn v-if="isEmailChange" @click="UpdateAndSendVerification()" :loading="isResending" class="primary">
                Update and Send New verification
            </v-btn>

            <v-btn v-if="!isEmailChange" @click="ResendVerification()" :loading="isResending" class="primary">
                Resend Mail
            </v-btn>
        </div>
    </div>
</template>
<script>
export default {
    props:['get_CurrentUser'],
    data(){
        return{
             loginEmailRules: [
                v => !!v || "Required",
                v => /.+@.+\..+/.test(v) || "Email must be valid"
            ],
            rules: {
                required: value => !!value || "Required.",
                min: v => (v && v.length >= 6) || "Min 6 characters"
            },
            isEmailChange: false,
            isResending: false,
            ConfirmPassword: false,
            show: false,
            form: new Form({
                    password: "",
            }),
            isConfirming: false

        }
    },
    methods:{
        async toggleEmailChange(){
            //this.isEmailChange = !this.isEmailChange;
            this.ConfirmPassword = !this.ConfirmPassword;
        },
        async ResendVerification(){
            this.isResending = true;
            axios.post('/api/resend-verification', {email: this.get_CurrentUser.email})
            .then((res)=>{
                if(res.data.success == true){
                    this.isResending = false;
                    this.toastSuccess(res.data.message);
                }
                else{
                    this.toastError(res.data.message);
                    this.isResending = false;
                }
            })
            .catch((err)=>{
                this.toastError(err.response.data.message);
                this.isResending = false;
            })
            
        },
        async ConfirmUserPassword(){
            this.isConfirming = true;
            axios.post('/api/confirm-password', this.form)
            .then((res)=>{
                if(res.data.success == true){
                    this.ConfirmPassword = false;
                    this.isConfirming = false;
                    this.isEmailChange = true;
                    this.toastSuccess(res.data.message);
                }
                else if(res.data.success == false){
                    this.isConfirming = false;
                    this.toastError(res.data.message);
                }
            })
            .catch((err)=>{
                 this.toastError(err.response.data.message);
                 this.isConfirming = false;
            }) 
        },
        async UpdateAndSendVerification(){
            axios.post('/api/change-email', {email: this.get_CurrentUser.email, id: this.get_CurrentUser.user_id })
            .then(res=>{
                if(res.data.success == true){
                    this.toastSuccess(res.data.message);
                    this.isEmailChange = false;
                }
                else{
                    this.toastError(res.data.message);
                }
            })
            .catch(err=>{
                this.toastError(err.response.data.message);
            })
        }
    }
}
</script>