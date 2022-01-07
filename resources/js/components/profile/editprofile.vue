<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-row class="pb-5">
            <v-col cols="12" class="mb-0 pb-0">
                <div :class="$vuetify.breakpoint.lgAndUp ? 'text-h6 font-weight-bold': 'font-weight-bold'">EDIT PROFILE
                </div>
            </v-col>
            <v-col cols="12" class="mb-0 pb-0">
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12" style="height:550px" v-if="isloading">
                <v-container class="fill-height" v-if="isloading">
                    <vue-element-loading :active="isloading" text="Loading" duration="0.7"
                        :textStyle="{fontSize: '20px'}" spinner="line-scale" color="#EF6C00"
                        :size="$vuetify.breakpoint.lgAndUp ? '60' : '40'" />
                </v-container>
            </v-col>

            <v-col v-if="!isloading" cols="12" class="ma-0 pa-0">
                <vue-element-loading :active="isSaving" spinner="bar-fade-scale" color="#EF6C00" />
                <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? '' : 'mt-0 pt-0'">
                    <v-row>
                        <v-col cols="12" md="2">

                        </v-col>
                        <v-col cols="12" md="10"
                            :class="$vuetify.breakpoint.lgAndUp ? 'mb-0 pb-0' : 'mt-0 pt-0 mb-0 pb-0'">
                            <h4 class="mt-5">1. Personal Details</h4>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col v-if="UserDetails.role == 'Student'" cols="12" class="mb-0 pb-0">
                    <v-row>
                        <v-col cols="12" md="2" :class="!$vuetify.breakpoint.lgAndUp ? 'mb-0 pb-0': 'mt-2'">
                            Student ID
                        </v-col>
                        <v-col cols="12" md="2"
                            :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'pb-0 mb-0 mt-0 pt-0'">
                            <v-text-field @change="isNeChanges = true" dense
                                :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-0 pa-0'" :rules="StudentIdRules" outlined
                                v-model="UserDetails.student_id" @keypress="isNumber"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>


                <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'pb-0 mb-0 mt-0 pt-0'">
                    <v-row>
                        <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                            First Name
                        </v-col>
                        <v-col cols="12" md="6"
                            :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'pb-0 mb-0 mt-0 pt-0'">
                            <v-text-field @change="isNeChanges = true" dense
                                :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-0 pa-0'" :rules="FieldRules" outlined
                                v-model="UserDetails.firstName"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'pb-0 mb-0 mt-0 pt-0'">
                    <v-row>
                        <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                            Middle Name
                        </v-col>
                        <v-col cols="12" md="6"
                            :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'pb-0 mb-0 mt-0 pt-0'">
                            <v-text-field dense @change="isNeChanges = true" outlined
                                :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-0 pa-0'" :rules="FieldRules"
                                v-model="UserDetails.middleName"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'pb-0 mb-0 mt-0 pt-0'">
                    <v-row>
                        <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                            Last Name
                        </v-col>
                        <v-col cols="12" md="6"
                            :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'pb-0 mb-0 mt-0 pt-0'">
                            <v-text-field @change="isNeChanges = true" dense
                                :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-0 pa-0'" type="text" outlined
                                :rules="FieldRules" v-model="UserDetails.lastName" class="mb-0 pb-0"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
<!-- 
                <v-col cols="12" class="mb-0 pb-0">
                    <v-row>
                        <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                            Department
                        </v-col>
                        <v-col cols="12" md="6"
                            :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'pb-0 mb-0 mt-0 pt-0'">
                            <v-select @change="isNeChanges = true" class="mr-2"
                                :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-0 pa-0'" :items="departmentsList"
                                item-text="name" item-value="id" dense v-model="UserDetails.department_id" outlined>
                            </v-select>
                        </v-col>
                    </v-row>
                </v-col> -->

                <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? '' : 'mt-0 pt-0'">
                    <v-row>
                        <v-col cols="12" md="2" :class="$vuetify.breakpoint.lgAndUp ? '' : 'mt-0 pt-0'">

                        </v-col>
                        <v-col cols="12" md="10" :class="$vuetify.breakpoint.lgAndUp ? '' : 'mt-0 pt-0'">
                            <h4 class="mt-2">2. Contact</h4>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                    <v-row>
                        <v-col cols="12" md="2"
                            :class="!$vuetify.breakpoint.lgAndUp ? 'mb-0 pb-0 mr-0 pr-0': 'mt-2 mr-0 pr-0'">
                            Email Address.
                        </v-col>
                        <v-col cols="10" md="6"
                            :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'b-0 mb-0 mt-0 pt-0'">
                            <v-text-field :disabled="editEmail" @change="isNeChanges = true" :rules="emailRules"
                                :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-0 pa-0'" dense outlined
                                v-model="UserDetails.email"
                                :hint="editEmail ? '': 'Please use an active email address!'"></v-text-field>

                        </v-col>
                        <v-col cols="1" class="ml-0 pl-0 mt-1 mr-4">
                            <v-btn @click="editEmail = !editEmail" text icon>
                                <v-icon :color="editEmail ? '' : 'primary'">
                                    mdi-{{editEmail ? 'pencil-off-outline':'pencil-outline'}}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                    <v-row>
                        <v-col cols="12" md="2" :class="!$vuetify.breakpoint.lgAndUp  ? 'mb-0 pb-0 mt-0 pt-0': 'mt-2'">
                            Phone No.
                        </v-col>
                        <v-col cols="10" md="6" class="pb-0 mb-0">
                            <v-text-field @keypress="isNumber" max-length="11" @change="isNeChanges = true" dense
                                outlined :disabled="editPhone"
                                :hint="editPhone ? '': 'Please use an active phone number'" v-model="UserDetails.cp_no">
                            </v-text-field>
                        </v-col>

                        <v-col cols="1" class="ml-0 pl-0 mt-1 mr-4">
                            <v-btn @click="editPhone = !editPhone" text icon>
                                <v-icon :color="editPhone ? '' : 'primary'">
                                    mdi-{{editPhone ? 'pencil-off-outline':'pencil-outline'}}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? '' : 'mt-0 pt-0'">
                    <v-row>
                        <v-col cols="12" md="2" :class="$vuetify.breakpoint.lgAndUp ? '' : 'mt-0 pt-0'">

                        </v-col>
                        <v-col cols="12" md="10" :class="$vuetify.breakpoint.lgAndUp ? '' : 'mt-0 pt-0'">
                            <h4 class="mt-5">3. Social Link</h4>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                    <v-row>
                        <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                            Facebook
                        </v-col>
                        <v-col cols="12" md="6"
                            :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'pb-0 mb-0 mt-0 pt-0'">
                            <v-text-field @change="isNeChanges = true" dense
                                :class="$vuetify.breakpoint.lgAndUp ? 'blue--text' : 'ma-0 pa-0 blue--text'" outlined
                                v-model="UserDetails.social_account"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
                <!-- 
            <v-col cols="12" class="mt-0 pt-0 mb-2">
                <v-row>
                    <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                        Logged In Sessions
                    </v-col>
                    <v-col cols="12" md="6" :class="$vuetify.breakpoint.lgAndUp ? 'pb-0 mb-0' : 'pb-0 mb-0 mt-0 pt-0'">
                       <v-card outlined elevation="0">
                           <v-list>
                               <v-list-item v-for="item in  UserDetails.sessions" :key="item.id">
                                   <v-list-item-content>
                                       <v-list-item-title>
                                           {{item.ip_address}} - {{item.user_agent}} 
                                       </v-list-item-title>
                                       <v-list-item-subtitle>
                                           {{format_date(item.last_activity)}}
                                       </v-list-item-subtitle>
                                   </v-list-item-content>
                               </v-list-item>
                           </v-list>
                       </v-card>
                    </v-col>
                </v-row>
            </v-col> -->


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

                <v-col cols="12" :class="$vuetify.breakpoint.lgAndUp ? 'mb-0 pb-5 ' :'mb-o pb-3 mt-0 pt-0' ">
                    <v-row>
                        <v-col cols="12" md="2" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-0'">

                        </v-col>
                        <v-col cols="12" md="6" :class="$vuetify.breakpoint.lgAndUp ? '' : 'mt-0 pt-0'">
                            <v-btn :dark="isNeChanges" :disabled="!isNeChanges" :block="!$vuetify.breakpoint.mdAndUp"
                                color="primary" rounded :loading="isSaving" @click="validate()">
                                {{isSaving ? 'Saving...' : 'Save Changes'}}</v-btn>
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
    import moment from 'moment-timezone';
    export default {
        props: ['UserDetails'],

        data() {
            return {
                valid: false,
                editEmail: true,
                editPhone: true,
                isSaving: false,
                Details: [],
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
                    v => (v && v.length >= 6) || 'min 6 characters',
                    v => (v && v.length <= 8) || 'Max 8 characters',
                ],
                isloading: true,
                departmentsList: [],
                isNeChanges: false,
            }
        },
        methods: {
            /*  format_date(value) {
                let time = moment(value).format();
                console.log()
                console.log(time);
                if (value) {
                    return moment(String(time)).startOf('hour').fromNow();  
                }
            }, */

            isNumber(val) {
                if (isNaN(Number(val.key))) {
                    return val.preventDefault();
                }

            },
            validate() {
                if (this.$refs.form.validate()) {
                    this.UpdateDetails();
                }
            },
            async UpdateDetails() {
                this.isSaving = !this.isSaving;
                let test = btoa('test123')
                axios.post('/api/profile/updateDetails', this.UserDetails)
                    .then(res => {
                        this.toastSuccess('Profile Successfully Updated');
                        this.isSaving = !this.isSaving;
                    })
                    .catch(e => {
                        this.toastError('Something went wrong in updating your profile!');
                        this.isSaving = !this.isSaving;
                    })

                /*  this.$https.post('/api/profile/updateDetails', this.UserDetails)
                 .then((response) => {
                     ////console.log(response.data);
                     this.isSaving = !this.isSaving;
                 }); */
            },
            async fetchDeparmentList() {
                axios.get('/api/admin/department/all')
                    .then((res) => {
                        this.departmentsList = res.data;
                    })
            },
        },
        beforeMount() {
            this.fetchDeparmentList();
            setTimeout(() => {
                this.isloading = !this.isloading;
            }, 1000);
             $('head > title').text('My Profile');
        }
    }

</script>
