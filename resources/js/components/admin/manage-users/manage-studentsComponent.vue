<template>
    <div class="pt-4">
        <h2>
            Manage Students
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
                                        STUDENT ID
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
                                <tr v-for="(item, index) in StudentList" :key="index">
                                    <td> {{item.student_id}} </td>
                                    <td> {{item.lastName }} </td>
                                    <td> {{item.firstName}} </td>
                                    <td> {{item.middleName}} </td>
                                    <td> {{item.email}} </td>
                                    <td>
                                        <v-btn color="primary" :loading="IsResetting && IsResetting_id == item.user_id" @click="updatePass(item.user_id)">
                                            Reset Password
                                        </v-btn>
                                    </td>
                                    <td>

                                    <v-btn icon color="success" @click="openEdit(item, index)">
                                        <v-icon>
                                            mdi-pencil
                                        </v-icon>

                                    </v-btn>
                                    <v-btn icon color="red" @click="openDelete(item.user_id, index)">
                                        <v-icon>
                                            mdi-delete
                                        </v-icon>

                                    </v-btn>
                                </td>

                                </tr>
                                <tr v-if="StudentList.length == 0">
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
                    {{this.type == "add" ? 'Add Student' :  'Update Student'}}
                </v-card-title>
                <v-divider></v-divider>
                <v-container>

                    <v-form autocomplete="off"  class="text-center " ref="RegisterForm" v-model="valid" lazy-validation>


                        <v-row class="pa-5">
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="student_id" />
                                <v-text-field :rules="studenIdRule" label="Student ID Number" name="student_id"
                                    v-model="form.student_id" type="number" color="primary"  outlined />
                            </v-col>
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                 <HasError class="error--text" :form="form" field="firstName" />
                                <v-text-field :rules="nameRules" label="First Name" name="firstName"
                                    v-model="form.firstName" type="text" color="primary" outlined />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="middleName" />
                                <v-text-field label="Middle Name" :rules="nameRules" name="middleName"
                                    v-model="form.middleName" type="text" color="primary" outlined />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="lastName" />
                                <v-text-field label="Last Name" :rules="nameRules" name="lastname"
                                    v-model="form.lastName" type="text" color="primary" outlined
                                    @keyup="SetPassword(form.lastName)" />
                            </v-col>
                          
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="email" />
                                <v-text-field label="Email" name="Email" :rules="loginEmailRules" v-model="form.email"
                                    type="email" color="primary" outlined />
                            </v-col>
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12" v-if="type== 'add'">
                                <HasError class="error--text" :form="form" field="password" />
                                <v-text-field :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" id="password"
                                    label="Password" name="password" v-model="form.password"
                                    :type="show ? 'text' : 'password'" color="primary"
                                    :rules="[rules.required, rules.min]" counter @click:append="show = !show"
                                    outlined />
                            </v-col>




                        </v-row>



                    </v-form>
                </v-container>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn text  @click="dialog = false;$refs.RegisterForm.reset()">Cancel</v-btn>
                    <v-btn text color="primary" @click="validate()" :loading="IsAddUpdating">
                        {{this.type == "add" ? 'Add' :  'Update'}}</v-btn>
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
                IsResetting_id: null,
                type: '',
                search: "",
                valid: true,
                role: ['Teacher', 'Student'],
                updateIndex: null,
                deleteIndex: null,
                form: new Form({
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                    student_id: ""
                }),
                studenIdRule: [
                    v => !!v || 'Student Id is required',
                ],
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
                },
                StudentList: [],



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
            },

            openAdd() {
                this.type = 'add'
                this.dialog = true;
            },
            openEdit(details, index) {
                this.updateIndex = index;
                this.type = 'edit'
                this.dialog = true;
                this.form.user_id = details.user_id;
                this.form.firstName = details.firstName;
                this.form.middleName = details.middleName;
                this.form.lastName = details.lastName;
                this.form.email = details.email;
                this.form.student_id = details.student_id;
                if(!this.valid){
                    this.$refs.RegisterForm.resetValidation();
                }
            },
            openDelete(id, index) {
                this.deleteIndex = index;
                this.delId = id;
                this.Deldialog = true;
            },
            updatePass(id) {
                this.IsResetting_id = id;
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
                            this.StudentList.splice(this.deleteIndex, 1);
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
                        this.form.role = 'Student';
                        this.form.password_confirmation = this.form.password
                        this.form.post('/api/admin/add/student')
                            .then((res) => {
                                this.$refs.RegisterForm.reset()
                                this.valid = true;
                                this.dialog = false;
                                this.IsAddUpdating = false;
                                this.StudentList.push(res.data);
                            })
                    }
                    if (this.type == 'edit') {
                        this.form.post('/api/admin/teachers/update/' + this.form.user_id)
                            .then(() => {
                                ////console.log(this.StudentList[this.updateIndex])
                                this.updateDataInfrontEnd(this.form)
                                this.valid = true;
                                this.dialog = false;
                                this.IsAddUpdating = false;
                                //
                            })
                        this.toastSuccess('User Successfully Updated!');
                    }
                } else {
                    this.IsAddUpdating = false;

                }
                    this.valid = false;
                      this.IsAddUpdating = false;
            },
            async getStudent(){
                axios.get('/api/admin/students/all')
                .then(res=>{
                    this.StudentList = res.data;
                })
            },
            updateDataInfrontEnd(data){
                this.StudentList[this.updateIndex].user_id = data.user_id;
                this.StudentList[this.updateIndex].firstName = data.firstName;
                this.StudentList[this.updateIndex].middleName = data.middleName;
                this.StudentList[this.updateIndex].lastName = data.lastName;
                this.StudentList[this.updateIndex].email = data.email;
                this.StudentList[this.updateIndex].student_id = data.student_id;
                this.$refs.RegisterForm.reset();
            }
        },

        mounted() {
            this.getStudent();
            //this.$store.dispatch('fetchAllTeachers');
        }
    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
