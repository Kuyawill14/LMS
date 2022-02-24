<template>
    <v-row class="pb-5">
        <v-col cols="12" class="mb-0 pb-0">
            <div :class="$vuetify.breakpoint.lgAndUp ? 'text-h6 font-weight-bold': 'font-weight-bold'">CHANGE PASSWORD</div> 
        </v-col>
        <v-col cols="12" class="mb-0 pb-0">
            <v-divider></v-divider>
        </v-col>

        <v-col cols="12">

            <vue-element-loading :active="isChanging" spinner="bar-fade-scale" color="#EF6C00" />
            <v-form @submit.prevent="" ref="form" v-model="valid" lazy-validation>
                <v-row>
                    <v-col cols="12" class="mb-0 pb-0">
                        <v-row>
                            <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                                Current Password
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-text-field :append-icon="showCurrent ?'mdi-eye':'mdi-eye-off'" dense
                                    :rules="[rules.required, rules.min]" v-model="form.current_password" outlined
                                    :type="showCurrent ? 'text' : 'password'"
                                    :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-0 pa-0'"
                                    @click:append="showCurrent = !showCurrent">
                                    </v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                        <v-row>
                            <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                                New Password
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-text-field :append-icon="showNew ?'mdi-eye':'mdi-eye-off'" dense
                                    :rules="[rules.required, rules.min, rules.max]" v-model="form.new_password" outlined
                                    :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-0 pa-0'"
                                    :type="showNew ? 'text' : 'password'" @click:append="showNew = !showNew">
                                    </v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                        <v-row>
                            <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                                Re Type New Password
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-text-field :append-icon="ShowNewRetype ?'mdi-eye':'mdi-eye-off'" dense outlined
                                    :rules="[rules.required, rules.min, rules.max]" v-model="form.new_confirm_password"
                                    :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-0 pa-0'"
                                    :type="ShowNewRetype ? 'text' : 'password'"
                                    @click:append="ShowNewRetype = !ShowNewRetype">
                                    </v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                        <v-row>
                            <v-col cols="12" md="3" :class="!$vuetify.breakpoint.lgAndUp ? 'mb-0 pb-0': 'mt-2'">

                            </v-col>
                            <v-col cols="12" md="5">
                                <v-btn :disabled="!valid" :block="!$vuetify.breakpoint.lgAndUp " :loading="isChanging" rounded @click="validate()" color="primary" :dark="valid">
                                    {{isChanging ? 'Updating...' : 'Update Password'}}</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
    </v-row>
</template>
<script>
    export default {
        data() {
            return {
                valid: false,
                showCurrent: false,
                showNew: false,
                ShowNewRetype: false,
                isChanging: false,
                data: {},
                form: {
                    current_password: null,
                    new_password: null,
                    new_confirm_password: null
                },
                rules: {
                    required: value => !!value || "Field is required.",
                    min: v => (v && v.length >= 6) || "Min 6 characters",
                    max: v => (v && v.length <= 20) || "Max 20 characters"
                }
            }
        },
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.changepassword();
                }
            },
            changepassword() {
                axios.post('/api/change-password', this.form)
                    .then(res => {
                        this.toastSuccess('Password Successfully Changed');
                        /* if (res.data == 1) {
                            
                           
                        } else {
                            this.toastError('Something went wrong in while changing your password!');
                        } */

                    })
                    .catch((e) => {
                        this.toastError('Something went wrong in while changing your password!');
                    })
            }
        }
    }

</script>
