<template>
 <v-form ref="form" v-model="valid" lazy-validation>
    <v-row class="pb-5">
        <v-col cols="12" class="mb-0 pb-0">
           <h3>EDIT PROFILE</h3> 
        </v-col>
          <v-col cols="12" class="mb-0 pb-0">
            <v-divider></v-divider>
        </v-col>

        <v-col cols="12" v-if="isloading">
            <v-container class="fill-height" v-if="isloading" >
            <v-row  align-content="center" justify="center">
                <v-col class="text-subtitle-1 text-center" cols="12">
                    Loading
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
            </v-container>
        </v-col>

        <v-col v-if="!isloading" cols="12" class="ma-0 pa-0">
            <vue-element-loading :active="isSaving" spinner="bar-fade-scale" color="#EF6C00" />
            <v-col cols="12">
                <v-row>
                    <v-col cols="12" md="2" >
                        
                    </v-col>
                    <v-col cols="12" md="10" class="mb-0 pb-0">
                            <h4 class="mt-5">1. Personal Details</h4> 
                    </v-col>
                </v-row>
            </v-col>
              <v-col cols="12" class="mb-0 pb-0">
                <v-row>
                    <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                        Student ID
                    </v-col>
                    <v-col cols="12" md="2" class="pb-0 mb-0">
                        <v-text-field
                                dense
                                :rules="StudentIdRules"
                                outlined
                                v-model="UserDetails.student_id"
                                 @keypress="isNumber"
                            ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="mb-0 pb-0">
                <v-row>
                    <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                        First Name
                    </v-col>
                    <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                                dense
                                :rules="FieldRules"
                                outlined
                            v-model="UserDetails.firstName"
                            ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                <v-row>
                    <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                        Middle Name
                    </v-col>
                    <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                        dense
                            outlined
                            :rules="FieldRules"
                            v-model="UserDetails.middleName"
                            ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                <v-row class="mb-0 pb-0">
                    <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                        Last Name
                    </v-col>
                    <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                            dense
                            type="text"
                            outlined
                            :rules="FieldRules"
                            v-model="UserDetails.lastName"
                            class="mb-0 pb-0"
                            ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12" class="mt-0 pt-0 ">
                <v-row>
                    <v-col cols="12" md="2">
                        
                    </v-col>
                    <v-col cols="12" md="10">
                            <h4 class="mt-2">2. Contact</h4> 
                    </v-col>
                </v-row>
            </v-col>

             <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                <v-row>
                    <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0 mr-0 pr-0': 'mt-2 mr-0 pr-0'">
                        Email Address.
                    </v-col>
                    <v-col cols="10" md="6" class="pb-0 mb-0">
                        <v-text-field
                            :disabled="editEmail"
                            :rules="emailRules"
                            dense
                            outlined
                            v-model="UserDetails.email"
                            :hint="editEmail ? '': 'Please use an active email address!'"
                            ></v-text-field>
                        
                    </v-col>
                    <v-col cols="1" class="ml-0 pl-0 mt-1 mr-4">
                        <v-btn @click="editEmail = !editEmail" text icon>
                                <v-icon :color="editEmail ? '' : 'primary'">mdi-{{editEmail ? 'pencil-off-outline':'pencil-outline'}}</v-icon>
                            </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                <v-row>
                    <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                        Phone No.
                    </v-col>
                    <v-col cols="10" md="6" class="pb-0 mb-0">
                        <v-text-field
                        @keypress="isNumber"
                        max-length="11"
                           :rules="phoneNumberRules"
                        dense
                            outlined
                            :disabled="editPhone"
                            :hint="editPhone ? '': 'Please use an active phone number'"
                            v-model="UserDetails.cp_no"
                            ></v-text-field>
                    </v-col>

                      <v-col cols="1" class="ml-0 pl-0 mt-1 mr-4">
                        <v-btn @click="editPhone = !editPhone" text icon>
                                <v-icon :color="editPhone ? '' : 'primary'">mdi-{{editPhone ? 'pencil-off-outline':'pencil-outline'}}</v-icon>
                            </v-btn>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12" class="mt-0 pt-0 ">
                <v-row>
                    <v-col cols="12" md="2">
                        
                    </v-col>
                    <v-col cols="12" md="10">
                            <h4 class="mt-5">3. Social Link</h4> 
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                <v-row>
                    <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                        Facebook
                    </v-col>
                    <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                        class="blue--text"
                        dense
                            outlined
                            v-model="UserDetails.social_account"
                            ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>

        
       <!--   <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
            <v-row>
                <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                     Google+
                </v-col>
                  <v-col cols="12" md="6" class="pb-0 mb-0">
                       <v-text-field
                       dense
                          outlined
                        ></v-text-field>
                </v-col>
            </v-row>
        </v-col> -->

            <v-col cols="12" class="mb-0 pb-5">
                <v-row>
                    <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                        
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn color="primary" rounded :loading="isSaving" @click="validate()" dark>{{isSaving ? 'Saving...' : 'Save Changes'}}</v-btn>
               
                    </v-col>
                </v-row>
            </v-col>

            <!--  <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                <v-row>
                    <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                        Session
                    </v-col>
                    <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                        class="blue--text"
                        dense
                            outlined
                            v-model="UserDetails.social_account"
                            ></v-text-field>
                    </v-col>
                </v-row>
            </v-col> -->



        </v-col>
    </v-row>
 </v-form>
</template>
<script>
export default {
    props:['UserDetails'],
    data(){
        return{
            valid:false,
            editEmail: true,
            editPhone: true,
            isSaving: false,
            Details:[],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            FieldRules: [
                v => !!v || 'Field is required',
            ],
            phoneNumberRules: [
                v => (v && v.length >= 11) || 'min 11 characters',
                 v => (v && v.length <= 15) || 'Max 15 characters',
            ],
            StudentIdRules: [
                v => !!v || 'Student ID is required',
                v => (v && v.length >= 6) || 'min 8 characters',
                 v => (v && v.length <= 8) || 'Max 8 characters',
            ],
            isloading: true,
        }
    },
    methods:{
        
            isNumber(val) {
                if (isNaN(Number(val.key)) ) {
                    return val.preventDefault();
                }
               
            },
        validate () {
            if(this.$refs.form.validate()){
                this.UpdateDetails();
            }
        },
        async UpdateDetails(){
            this.isSaving = !this.isSaving;
            let test = btoa('test123')
            axios.post('/api/profile/updateDetails',this.UserDetails)
            .then(res=>{
                this.toastSuccess('Profile Successfully Updated');
                this.isSaving = !this.isSaving;
            })
            .catch(e=>{
                this.toastError('Something went wrong in updating your profile!');
                this.isSaving = !this.isSaving;
            })

           /*  this.$https.post('/api/profile/updateDetails', this.UserDetails)
            .then((response) => {
                //console.log(response.data);
                this.isSaving = !this.isSaving;
            }); */
        }
    },
    beforeMount(){
         setTimeout(() => {
                this.isloading = !this.isloading;
        }, 1000);
    }
}
</script>