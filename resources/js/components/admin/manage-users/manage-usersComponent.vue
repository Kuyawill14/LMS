<template>
    <div class="pt-4">
        <h2>
            Manage Teachers
        </h2>
        <v-btn bottom color="primary" dark fab fixed right @click="openAdd()">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-row class="pt-2">


            <v-col>
                <v-card elevation="2">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Middle Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Password Reset
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in getTeachers" :key="index">
                                    <td> {{item.user_id}} </td>
                                    <td> {{item.lastName }} </td>
                                    <td> {{item.firstName}} </td>
                                    <td> {{item.middleName}} </td>
                                    <td> {{item.email}} </td>


                                    <td>
                                        <v-btn color="primary" :loading="IsResetting" @click="updatePass(item.user_id)">
                                            Reset Password
                                        </v-btn>
                                    </td>
                                    <td>

                                        <v-btn icon color="success" @click="openEdit(item.user_id)">
                                            <v-icon>
                                                mdi-pencil
                                            </v-icon>

                                        </v-btn>
                                        <v-btn icon color="red" @click="openDelete(item.user_id)">
                                            <v-icon>
                                                mdi-delete
                                            </v-icon>

                                        </v-btn>
                                    </td>

                                </tr>
                                <tr v-if="getTeachers.length == 0">
                                    <td colspan="42" class="text-center"> No data available</td>
                                </tr>


                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="">
                    Add Teacher
                </v-card-title>
                <v-divider></v-divider>
                <v-container>

                    <v-form class="text-center " ref="RegisterForm" v-model="valid" lazy-validation>


                        <v-row class="pa-5">
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <v-text-field :rules="nameRules" label="First Name" name="firstName"
                                    v-model="form.firstName" type="text" color="primary" outlined />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="middleName" />
                                <v-text-field label="Middle Name" :rules="nameRules" name="middleName"
                                    v-model="form.middleName" type="text" color="primary" outlined />
                                <HasError class="error--text" :form="form" field="middleName" />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="lastName" />
                                <v-text-field label="Last Name" :rules="nameRules" name="lastname"
                                    v-model="form.lastName" type="text" color="primary" outlined
                                    @keyup="SetPassword(form.lastName)" />
                                <HasError class="error--text" :form="form" field="lastName" />
                            </v-col>
                            <!-- <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="phone" />
                                <v-text-field label="Phone number" name="phone" :rules="RoleRules" v-model="form.phone"
                                    type="phone" color="primary" outlined />
                            </v-col> -->


                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="email" />
                                <v-text-field label="Email" name="Email" :rules="loginEmailRules" v-model="form.email"
                                    type="email" color="primary" outlined />
                                <HasError class="error--text" :form="form" field="email" />
                            </v-col>
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12" v-if="type== 'add'">
                                <HasError class="error--text" :form="form" field="password" />
                                <v-text-field :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" id="password"
                                    label="Password" name="password" v-model="form.password"
                                    :type="show ? 'text' : 'password'" color="primary"
                                    :rules="[rules.required, rules.min]" counter @click:append="show = !show"
                                    outlined />
                                <HasError class="error--text" :form="form" field="password" />
                            </v-col>




                        </v-row>


                        <!-- <v-col> -->
                        <!-- <v-row class="pa-5"> -->
                        <!-- <v-col class="ma-0 pa-0 mb-1" cols="12" md="12" v-if="type== 'add'">
                                        <HasError class="error--text" :form="form" field="password" />
                                        <v-text-field :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" id="password"
                                            label="Password" name="password" v-model="form.password"
                                            :type="show ? 'text' : 'password'" color="primary"
                                            :rules="[rules.required, rules.min]" counter @click:append="show = !show"
                                            outlined />
                                    </v-col> -->



                        <!-- <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                        <v-select :items="role" v-model="form.role" :rules="RoleRules" outlined
                                            label="Role"></v-select>
                                    </v-col> -->
                        <!-- </v-row> -->
                        <!-- </v-col> -->

                    </v-form>
                </v-container>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="dialog = false;$refs.RegisterForm.reset()">Cancel</v-btn>
                    <v-btn text @click="validate()" :loading="IsAddUpdating">
                        Add</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>



        <v-dialog v-model="Deldialog" persistent max-width="290">

            <v-card>
                <v-card-title class="headline">
                    Are you sure you want to delete this?
                </v-card-title>
                <!-- <v-card-text>{some message} </v-card-text> -->
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="Deldialog = false;$refs.RegisterForm.reset()">
                        No
                    </v-btn>
                    <v-btn :loading="IsDeleting" color="primary" text @click="deleteUser()">
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>



</template>
<style scoped>

</style>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    import axios from 'axios';
    export default {
        data: function () {
            return {
                Deldialog: false,
                dialog: false,
                temp_id: '',
                IsDeleting: false,
                IsAddUpdating: false,
                IsResetting: false,
                type: '',
                search: "",
                valid: true,
                role: ['Teacher', 'Student'],
                form: new Form({
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    password: "",
                    password_confirmation: "",
                    role: ""
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
                show: false,
                show1: false,
                rules: {
                    required: value => !!value || "Field is required.",
                    min: v => (v && v.length >= 6) || "min 6 characters"
                }



            }

        },
        computed: {
            ...mapGetters(["getTeachers", "filterTeacher"])
        },

        methods: {
            SetPassword(lastname) {
                var tmpLastname = lastname.replace(/\s+/g, '-').toLowerCase();
                this.form.password = 'LMS-' + tmpLastname;
                this.show = true;
                /* var self = this;
                  this.timeout = setTimeout(function () {
                     self.show = false;
                }, 3000);  */
            },

            openAdd() {
                this.type = 'add'
                // this.grading_criteria_form.name = '';
                // this.grading_criteria_form.percentage = '';
                this.dialog = true;
            },
            openEdit(user_id) {
                this.type = 'edit'
                this.dialog = true;
                var currentTeacher = this.filterTeacher(user_id);
                console.log(currentTeacher);
                this.form.user_id = currentTeacher.user_id;
                this.form.firstName = currentTeacher.firstName;
                this.form.middleName = currentTeacher.middleName;
                this.form.lastName = currentTeacher.lastName;
                this.form.phone = currentTeacher.cp_no;
                this.form.email = currentTeacher.email;


            },
            openDelete(id) {
                this.delId = id;
                this.Deldialog = true;
            },
            updatePass(id) {
                this.IsResetting = true;
                axios.post('/api/admin/teachers/reset-password/' + id)
                    .then(res => {
                        this.toastSuccess(res.data);
                        this.IsResetting = false;
                    })
            },
            deleteUser() {
                this.IsDeleting = true;
                axios.delete('/api/admin/teachers/remove/' + this.delId)
                    .then((res) => {
                        if (res.status == 200) {
                            this.toastSuccess('User Successfully removed!')
                            this.IsDeleting = false;
                        } else {
                            this.toastError('Something went wrong!')
                            this.IsDeleting = false;
                        }
                        this.Deldialog = false;
                        this.$store.dispatch('fetchAllTeachers');
                    })
            },
            updateTeacherDetails() {
                this.$store.dispatch('updateTeacher', this.form);
            },
            validate() {
                this.IsAddUpdating = true;
                if (this.$refs.RegisterForm.validate()) {
                    if (this.type == 'add') {
                        this.form.role = 'Teacher';
                           this.form.class_code = '123';
                        this.form.password_confirmation = this.form.password


                        this.form.post('/api/register')
                            .then((res) => {


                                this.$refs.RegisterForm.reset()
                                this.valid = true;
                                this.dialog = false;


                            })

                    }


                    if (this.type == 'edit') {
                        this.form.post('/api/admin/teachers/update/' + this.form.user_id)
                            .then(() => {
                                console.log("Success");
                                this.$refs.RegisterForm.reset()
                                this.valid = true;
                                this.dialog = false;
                                this.IsAddUpdating = false;
                            })
                        this.toastSuccess('User Successfully Updated!')
                    }
                    this.$store.dispatch('fetchAllTeachers');




                } else {
                    this.IsAddUpdating = false;

                }
                    this.valid = false;
                      this.IsAddUpdating = false;
            },
        },

        mounted() {

            this.$store.dispatch('fetchAllTeachers');



        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
