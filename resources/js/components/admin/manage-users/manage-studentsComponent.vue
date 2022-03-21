<template>
    <div class="pt-4">

        <v-row class="mb-0">
            <v-col cols="12" lg="10">
                <h2>
                    Manage Students
                </h2>
            </v-col>
            <v-col cols="12" lg="2" style="display:flex;justify-content: end;">
                <v-btn dark color="blue" class="mr-3" @click="openAdd_multiple_user()">
                    <v-icon left>mdi-upload</v-icon>
                    Import CSV
                </v-btn>
                <v-btn color="primary" dark @click="openAdd()">
                    <v-icon left>mdi-account-plus-outline</v-icon>
                    Add Student
                </v-btn>
            </v-col>
        </v-row>
        <!--         <v-btn bottom color="primary" dark fab fixed right @click="openAdd()">
            <v-icon>mdi-plus</v-icon>
        </v-btn> -->
        <v-row>
            <v-col cols="12" class="mt-0 pt-0">



                <v-card v-if="loading">
                    <v-skeleton-loader :loading="loading" type="table"></v-skeleton-loader>
                </v-card>


                <v-card elevation="2" v-if="!loading">
                    <v-card-title>
                        Students

                        <v-spacer></v-spacer>
                        
                             <v-text-field v-model="search" placeholder="Student ID, Last Name" append-icon="mdi-magnify" label="Search" single-line
                                hide-details>
                            </v-text-field>
                        
                       
                    </v-card-title>

                    <v-data-table :headers="headers" :items="filteredItems" :items-per-page="10" class="elevation-1">
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="(item, i) in items" :key="item.id">
                                    <td style="width:7%">
                                        <v-icon :color="item.isActive != 0 ? 'success' : ''">mdi-circle-medium</v-icon>
                                        <span
                                            :class="item.isActive != 0 ? 'success--text' : ''">{{item.isActive != 0 ? 'Online' : 'Oflline'}}</span>

                                    </td>
                                    <td> {{item.student_id}}</td>
                                    <td> {{item.lastName }}</td>
                                    <td> {{item.firstName}} </td>
                                    <td> {{item.middleName}} </td>
                                    <td> {{item.email}} </td>
                                    <td> {{ item.department_short_name}} </td>
                                    <td>
                                        <v-icon :color="item.isVerified != null ? 'success' : ''">
                                            {{item.isVerified ? 'mdi-check' : ''}}</v-icon>
                                    </td>

                                    <td>
                                        <v-btn color="primary" :loading="IsResetting && IsResetting_id == item.user_id"
                                            @click="OpenupdatePassDialog(item.user_id)">
                                            Reset Password
                                        </v-btn>
                                    </td>
                                    <td>

                                        <v-btn icon color="success" @click="openEdit(item, i)">
                                            <v-icon>
                                                mdi-pencil
                                            </v-icon>

                                        </v-btn>
                                        <v-btn icon color="red" @click="openDelete(item.user_id, i)">
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
                    </v-data-table>

                </v-card>




            </v-col>
        </v-row>

        <v-dialog  v-model="dialog" width="500">
            <v-card class="pa-1">
                <v-card-title class="">
                    {{this.type == "add" ? 'Add Student' :  'Update Student'}}
                </v-card-title>
                <v-divider></v-divider>
                <v-container>

                    <v-form autocomplete="false" class="text-center " ref="RegisterForm" v-model="valid"
                        lazy-validation>


                        <v-row class="pa-5">
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="student_id" />
                                <v-text-field autocomplete="false" :rules="studenIdRule" label="Student ID Number"
                                    name="student_id" v-model="form.student_id" color="primary" outlined />
                            </v-col>
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="firstName" />
                                <v-text-field :rules="nameRules" label="First Name" name="firstName"
                                    v-model="form.firstName" type="text" color="primary" outlined />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="middleName" />
                                <v-text-field label="Middle Initial"  name="middleName"
                                    v-model="form.middleName" type="text" color="primary" outlined />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="lastName" />
                                <v-text-field label="Last Name" :rules="nameRules" name="lastname"
                                    v-model="form.lastName" type="text" color="primary" outlined
                                    @keyup="SetPassword(form.lastName)" />
                            </v-col>
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="lastName" />
                                <v-text-field label="Suffix" name="suffix"
                                    v-model="form.suffix" type="text" color="primary" outlined
                                   />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <v-text-field label="Birthday" data-date="" data-date-format="YYYY-MMMM-DD"
                                    :rules="nameRules" name="birthDay" v-model="form.birthDay" type="Date"
                                    color="primary" outlined />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" v-if="this.type == 'edit'" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="email" />
                                <v-text-field label="Email" name="Email"  v-model="form.email"
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



                          <!--   <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="department" />
                                <v-select :items="department" item-value="id" v-model="form.department" item-text="name"
                                    return-object label="Department"  outlined></v-select>
                            </v-col> -->

                            <v-col v-if="form.verified == null && type == 'edit'" class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <v-btn @click="VerifyUser(form.user_id)" block :disabled="isVerifying" rounded large
                                    color="primary">
                                    <v-icon left>{{isVerifying  ? '' : 'mdi-account-check-outline'}}</v-icon>
                                    {{isVerifying ? 'Verifying...' : 'Verify user'}}
                                </v-btn>
                            </v-col>

                        </v-row>



                    </v-form>
                </v-container>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn text @click="dialog = false;$refs.RegisterForm.reset()">Cancel</v-btn>
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

        <v-dialog v-model="ResetPassworddialog" persistent max-width="290">

            <v-card>
                <v-card-title class="headline">
                    Are you sure you want to reset this user password?
                </v-card-title>
                <!-- <v-card-text>{some message} </v-card-text> -->
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="ResetPassworddialog = false, IsResetting = false">
                        No
                    </v-btn>
                    <v-btn :loading="isConfirmReset" @click="updatePass()" color="primary" text>
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>






        <v-dialog v-model="dialog_multi_user" width="500" persistent>
            <v-card>
                <v-card-title class="">
                    Bulk Add Teachers
                </v-card-title>
                <v-divider></v-divider>
                <v-container>

                    <v-form class="text-center " ref="RegisterForm" v-model="valid" lazy-validation>
                        <v-row class="pa-5">

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">

                                <v-file-input accept=".csv" prepend-inner-icon="mdi-file-outline" prepend-icon="" chips
                                    outlined label="Upload CSV File" @change="onFileChange"
                                    :disabled="json_users_text_area != null ">
                                </v-file-input>
                            </v-col>

                        </v-row>
                    </v-form>
                </v-container>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn text color="primary"
                        @click="dialog_multi_user = false;json_users_text_area='';json_users_file = null;">Cancel
                    </v-btn>
                    <v-btn text @click="addBulk()" :loading="IsBulkadding" :disabled="IsBulkadding">
                        Add Bulk</v-btn>
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
                dialog_multi_user: false,
                IsBulkadding: false,

                department: [],
                user_type: 'Student',
                isVerifying: false,
                Deldialog: false,
                ResetPassworddialog: false,
                dialog: false,
                temp_id: '',
                IsDeleting: false,
                IsAddUpdating: false,
                IsResetting: false,
                IsResetting_id: null,
                isConfirmReset: false,
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
                    suffix: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                    student_id: "",
                    birthDay: new Date(),
                    verified: null,
                    department: null,
                    updateIndex: null
                }),
                studenIdRule: [
                    v => !!v || 'Student ID is required',
                    v => (v && v.length >= 6) || 'Min 6 characters',
                    v => (v && v.length <= 20) || 'Max 20 characters',
                ],
                nameRules: [
                    v => !!v || 'Field is required',
                    v => (v && v.length <= 50) || 'Name must be less than 50 characters',
                ],
                loginEmailRules: [
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
                headers: [{
                        value: 'isActive',
                    },
                    {
                        text: 'Student ID',
                        value: 'student_id',
                        align: 'start',
                    },
                    {
                        text: 'Last Name',
                        value: 'lastName',
                        align: 'start',
                    },
                    {
                        text: 'First Name',
                        value: 'firstName',
                        align: 'start',
                    },
                    {
                        text: 'Middle Initial',
                        value: 'middleName',
                        align: 'start',
                    },
                    {
                        text: 'Email',
                        value: 'email',
                        align: 'start',
                    },
                    {
                        text: 'Deparment',
                        align: 'start',
                    },
                    {
                        text: 'Verified',
                        align: 'start',
                    },

                    {
                        text: 'Password Reset',
                        sortable: false
                    },

                    {
                        text: 'Actions',
                        sortable: false
                    },
                ],

                loading: true,
                json_users_file: null,
                json_users_text_area: null,
                department_id: null,

            }

        },
        computed: {
            filteredItems() {
                if (this.search) {
                    return this.StudentList.filter((item) => {
                        return this.search.toLowerCase().split(' ').every(v => item.firstName.toLowerCase()
                            .includes(v) || item.lastName.toLowerCase()
                            .includes(v) || item.student_id.toString()
                            .includes(v))
                            //.includes(v) : item.student_id.toString().includes(v))
                    })
/* 
                     return this.StudentList.filter((item) => {
                        return this.search.toLowerCase().split(' ').every(v => item.firstName.toLowerCase()
                            .includes(v) || item.lastName.toLowerCase()
                            .includes(v) || item.user_id.toString()
                            .includes(v))
                    }) */
                } else {
                    return this.StudentList;
                }

            },
        },

        methods: {
            addBulk() {

                if (this.department != null && (this.json_users_file != null || this
                        .json_users_text_area != null)) {
                    let json_users_data = this.json_users_file != null ? this.json_users_file : JSON.parse(this
                        .json_users_text_area);
                    this.IsBulkadding = true;

                        axios.post(`/api/admin/users/bulk_add`, {
                                user_type: this.user_type,
                                users_data: json_users_data,
                                department: this.department_id
                            })
                            .then((response) => {
                                console.log(response);

                                if (response.status == 200) {

                                    this.$refs.RegisterForm.reset()
                                    this.getStudent().then(() => {
                                        this.valid = true;
                                        this.dialog_multi_user = false;
                                        this.toastSuccess('User successfully Added!')
                                        this.IsBulkadding = false;
                                        // this.json_users_text_area = null;
                                        // this.json_users_file = null;
                                    })


                                } else {
                                    this.IsBulkadding = false;
                                    this.toastError('Something went wrong!')
                                    // this.$refs.RegisterForm.reset();
                                    // this.json_users_text_area = null;
                                    // this.json_users_file = null;

                                }
                            })
                            .catch((err) => {
                                this.IsBulkadding = false;
                                this.toastError('Something went wrong!');
                                // this.$refs.RegisterForm.reset();
                                // this.json_users_text_area = null;
                                // this.json_users_file = null;
                            })

                
                }

            },
            onFileChange(file) {

                if (file != null) {
                    this.readFile(file);
                } else {
                    this.json_users_file = null;
                }





            },
            readFile(file) {
                let reader = new FileReader();
                reader.onload = e => {
                    //  console.log(e.target.result);
                    // let json = JSON.parse(e.target.result);
                    // this.json_users_file = json;
                    // this.json_users_ready = true;


                    const lines = e.target.result.replaceAll('\r', '').split('\n') // 1️⃣
                    const header = lines[0].split(',') // 2️⃣
                    const output = lines.slice(1).map(line => {
                        const fields = line.split(',') // 3️⃣
                        return Object.fromEntries(header.map((h, i) => [h, fields[i]])) // 4️⃣
                    })

                    this.json_users_file = output;
                    console.log(this.json_users_file);

                };
                reader.readAsText(file);
            },

            openAdd_multiple_user() {
                this.dialog_multi_user = true;
            },

            fetchDeparmentList() {
                axios.get('/api/admin/department/all')
                    .then((res) => {
                        this.department = res.data;
                    })
            },
            SetPassword(lastname) {
                var tmpLastname = lastname.replace(/\s+/g, '-').toLowerCase();
                this.form.password = 'LMS-' + tmpLastname;
                this.show = true;
            },

            openAdd() {
                this.type = 'add'
                this.dialog = true;
            },
            openEdit(details, Dataindex) {
                console.log(Dataindex);
                this.updateIndex = Dataindex;
                this.type = 'edit'
                this.dialog = true;
                this.form.user_id = details.user_id;
                this.form.firstName = details.firstName;
                this.form.middleName = details.middleName;
                this.form.lastName = details.lastName;
                this.form.suffix = details.suffix;
                this.form.birthDay = details.birthday;
                this.form.email = details.email;
                this.form.student_id = details.student_id;
                this.form.verified = details.isVerified;
                this.form.department = details.department_id;
                if (!this.valid) {
                    this.$refs.RegisterForm.resetValidation();
                }
            },
            openDelete(id, index) {
                this.deleteIndex = index;
                this.delId = id;
                this.Deldialog = true;
            },
            updatePass() {
                this.isConfirmReset = true;
                axios.post('/api/admin/users/reset-password/' + this.IsResetting_id)
                    .then(res => {
                        this.toastSuccess(res.data);
                        alert(res.data);
                        this.isConfirmReset = false;
                        this.IsResetting = false;
                        this.ResetPassworddialog = false;
                    })
            },

            OpenupdatePassDialog(id) {
                this.IsResetting_id = id;
                this.ResetPassworddialog = true;
                this.IsResetting = true;

            },

            deleteUser() {
                this.IsDeleting = true;
                axios.delete('/api/admin/users/remove/' + this.delId)
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
            async VerifyUser(id) {
                this.isVerifying = true;
                axios.put('/api/admin/verifyUser/' + id).then((res) => {
                        if (res.data.success == true) {
                            this.markAsVerify(id)
                            this.form.verified = 'Verified';
                            this.toastSuccess('User Successfully Verified!');
                            this.isVerifying = false;

                        } else {
                            this.toastError('Something went wrong!');
                            this.isVerifying = false;
                        }
                    })
                    .catch(e => {
                        this.toastError('Something went wrong!');
                        this.isVerifying = false;
                    })
            },
            markAsVerify(id){
                this.StudentList.forEach(item => {
                    if(id== item.user_id){
                        item.isVerified = 'Verified';
                    }
                });
            },
            validate() {
                this.IsAddUpdating = true;
                if (this.$refs.RegisterForm.validate()) {

                    if (this.type == 'add') {
                        this.form.role = 'Student';
                        this.form.password_confirmation = this.form.password
                        this.form.post('/api/admin/users/add/' + this.user_type)
                            .then((res) => {
                                this.$refs.RegisterForm.reset()
                                this.valid = true;
                                this.dialog = false;
                                this.IsAddUpdating = false;

                                this.StudentList.unshift(res.data);
                                this.toastSuccess('User Successfully Added!');


                            })
                    }
                    if (this.type == 'edit') {
                        this.form.post('/api/admin/users/update/' + this.form.user_id)
                            .then(() => {
                                //////console.log(this.StudentList[this.updateIndex])
                                this.updateDataInfrontEnd(this.form)
                                this.valid = true;
                                this.dialog = false;
                                this.IsAddUpdating = false;


                                this.toastSuccess('User Successfully Updated!');
                            })

                    }
                } else {
                    this.IsAddUpdating = false;

                }
                this.valid = false;
                this.IsAddUpdating = false;
            },
            async getStudent() {
                axios.get('/api/admin/users/all/' + this.user_type)
                    .then(res => {
                        this.StudentList = res.data;
                        this.loading = false;
                    })
            },
            updateDataInfrontEnd(data) {
                this.StudentList.forEach(item => {
                    if(data.user_id == item.user_id){
                        item.user_id = data.user_id;
                        item.firstName = data.firstName;
                        item.middleName = data.middleName;
                        item.suffix = data.suffix;
                        item.birthday = data.birthDay;
                        item.lastName = data.lastName;
                        item.email = data.email;
                        item.student_id = data.student_id;
                    }
                });


                
                /* this.StudentList[this.updateIndex].department_short_name = data.department.short_name;
                this.StudentList[this.updateIndex].department_name = data.department.name; */
                this.$refs.RegisterForm.reset();
            }
        },

        mounted() {
            this.fetchDeparmentList();
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
