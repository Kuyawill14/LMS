<template>
    <div class="pt-4">

        <v-row>
            <v-col cols="12" lg="9">
                <h2>
                    Manage Instructors
                </h2>
            </v-col>


            <v-col cols="12" lg="3" style="display:flex;justify-content: end;">
                <v-btn dark color="blue" class="mr-3" @click="openAdd_multiple_user()">
                    <v-icon left>mdi-upload</v-icon>
                    Import CSV
                </v-btn>

                <v-btn color="primary" dark @click="openAdd()">
                    <v-icon left>mdi-account-plus-outline</v-icon>
                    Add Teacher
                </v-btn>
            </v-col>


        </v-row>


        <!-- <v-btn bottom color="primary" dark fab fixed right @click="openAdd()">
            <v-icon>mdi-plus</v-icon>
        </v-btn> -->





        <v-row class="pt-2">
            <v-col>
                <v-card v-if="loading">
                    <v-skeleton-loader :loading="loading" type="table"></v-skeleton-loader>
                </v-card>

                <v-card elevation="2" v-if="!loading">
                    <v-card-title>
                        Teacher

                        <v-spacer></v-spacer>
                        <div width="30%">
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                hide-details>
                            </v-text-field>
                        </div>

                    </v-card-title>

                    <v-data-table :headers="headers" :items="filteredItems" :items-per-page="10" class="elevation-1">
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="(item, index) in items" :key="index">
                                    <td style="width:7%">
                                        <v-icon :color="item.isActive != 0 ? 'success' : ''">mdi-circle-medium</v-icon>
                                          <span :class="item.isActive != 0 ? 'success--text' : ''">{{item.isActive != 0 ? 'Online' : 'Oflline'}}</span>
                                    </td>
                                    <td> {{item.user_id}} </td>
                                    <td> {{item.lastName }} </td>
                                    <td> {{item.firstName}} </td>
                                    <td> {{item.middleName}} </td>
                                    <td> {{item.email}} </td>
                                    <td> {{ item.department_short_name}} </td>
                                    <td>
                                        <v-icon :color="item.isVerified != null ? 'success' : ''">
                                            {{item.isVerified ? 'mdi-check' : ''}}</v-icon>
                                    </td>

                                    <td>
                                        <v-btn color="primary" :disabled="IsResetting && IsResetting_id == item.user_id"
                                            @click="updatePass(item.user_id)">
                                            {{IsResetting && IsResetting_id == item.user_id ? 'Reseting...' : ' Reset Password'}}
                                        </v-btn>
                                    </td>
                                    <td>

                                        <v-btn icon color="success" @click="openEdit(item.user_id)">
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
                                <tr v-if="items.length == 0">
                                    <td colspan="42" class="text-center"> No data available</td>
                                </tr>




                            </tbody>
                        </template>
                    </v-data-table>

                </v-card>




            </v-col>


        </v-row>

        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="">
                    {{this.type == "add" ? 'Add Teacher' :  'Update Teacher'}}
                </v-card-title>
                <v-divider></v-divider>
                <v-container>

                    <v-form class="text-center " ref="RegisterForm" v-model="valid" lazy-validation>
                        <v-row class="pa-5">
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
                                <HasError class="error--text" :form="form" field="lastName" />
                                <v-text-field label="Suffix" name="suffix"
                                    v-model="form.suffix" type="text" color="primary" outlined
                                   />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="email" />
                                <v-text-field autocomplete="false" label="Email" name="Email" :rules="loginEmailRules"
                                    v-model="form.email" type="email" color="primary" outlined />
                            </v-col>
                            <v-col v-if="form.verified == null && type == 'edit'" class="ma-0 pa-0 mb-1" cols="12"
                                md="12">
                                <v-btn @click="VerifyUser(form.user_id)" block rounded large color="primary">
                                    <v-icon left>mdi-account-check-outline</v-icon>
                                    Verify user
                                </v-btn>
                            </v-col>
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12" v-if="type== 'add'">
                                <HasError class="error--text" :form="form" field="password" />
                                <v-text-field autocomplete="off" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    label="Password" name="password" v-model="form.password"
                                    :type="show ? 'text' : 'password'" color="primary"
                                    :rules="[rules.required, rules.min]" counter @click:append="show = !show"
                                    outlined />
                            </v-col>


                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="department" />
                                <v-select :items="department" v-model="form.department" item-value="id" item-text="name"
                                    return-object label="Department" dense outlined></v-select>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="dialog = false;$refs.RegisterForm.reset()">Cancel</v-btn>
                    <v-btn text @click="validate()" :loading="IsAddUpdating" :disabled="IsAddUpdating">
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
                                <v-select :items="department" v-model="department_id" item-value="id" item-text="name"
                                    return-object label="Department" dense outlined></v-select>
                            </v-col>

                     
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">

                                <v-file-input accept=".csv" prepend-inner-icon="mdi-file-outline" prepend-icon="" chips outlined label="Upload CSV File"
                                    @change="onFileChange" :disabled="json_users_text_area != null ">
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


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    // import csvToJson from 'convert-csv-to-json';
    import axios from 'axios';
    export default {
        data: function () {
            return {
                IsBulkadding: false,

                department: [],
                user_type: 'Teacher',
                Deldialog: false,
                dialog: false,
                dialog_multi_user: false,
                temp_id: '',
                IsDeleting: false,
                IsAddUpdating: false,
                IsResetting: false,
                IsResetting_id: null,
                deleteIndex: null,
                type: '',
                search: "",
                valid: true,
                role: ['Teacher', 'Student'],
                form: new Form({
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                    verified: null,
                    department: null,
                    birthDay: new Date(),
                    suffix:""
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
                },
                headers: [{
                        value: 'isActive',
                        value: 'isActive',
                    },
                    {
                        text: 'ID',
                        value: 'user_id',
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
                        value: 'department_short_name',
                        align: 'start',
                    },
                    {
                        text: 'Verified',
                        value: 'verified',
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
                teacherList: [],
                loading: true,

                direction: 'top',
                fab: false,
                fling: false,
                hover: false,
                tabs: null,
                top: false,
                right: true,
                bottom: true,
                left: false,
                transition: 'slide-y-reverse-transition',
                json_users_file: null,
                json_users_text_area: null,
                department_id: null

            }

        },
        watch: {
            top(val) {
                this.bottom = !val
            },
            right(val) {
                this.left = !val
            },
            bottom(val) {
                this.top = !val
            },
            left(val) {
                this.right = !val
            },
        },
        computed: {
            ...mapGetters(["getTeachers", "filterTeacher"]),
            filteredItems() {
                if (this.search) {
                    return this.teacherList.filter((item) => {
                        return this.search.toLowerCase().split(' ').every(v => item.firstName.toLowerCase()
                            .includes(v) || item.lastName.toLowerCase()
                            .includes(v) || item.middleName.toLowerCase()
                            .includes(v) || item.user_id.toString()
                            .includes(v))
                    })
                } else {
                    return this.teacherList;
                }

            }
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

                            if (response.status == 200) {

                                this.$refs.RegisterForm.reset()

                                this.$store.dispatch('fetchAllTeachers').then(() => {
                                    this.teacherList = this.getTeachers;
                                    this.valid = true;
                                    this.dialog_multi_user = false;
                                    this.toastSuccess('User successfully Added!')
                                    this.IsBulkadding = false;
            
                                });

                            } else {
                                this.IsBulkadding = false;
                                this.toastError('Something went wrong!, please refresh the page and try again');
                            }
                        })
                        .catch((err) => {
                            this.IsBulkadding = false;
                            this.toastError('Something went wrong!, please refresh the page and try again');
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

                };
                reader.readAsText(file);
            },
            SetPassword(lastname) {
                var tmpLastname = lastname.replace(/\s+/g, '-').toLowerCase();
                this.form.password = 'ISU-' + tmpLastname;
                this.show = true;
            },

            openAdd() {
                this.type = 'add'
                this.dialog = true;
            },

            openAdd_multiple_user() {
                this.dialog_multi_user = true;
            },


            openEdit(user_id) {

                this.type = 'edit'
                this.dialog = true;
                var currentTeacher = this.filterTeacher(user_id);
                this.form.user_id = currentTeacher.user_id;
                this.form.firstName = currentTeacher.firstName;
                this.form.middleName = currentTeacher.middleName;
                this.form.lastName = currentTeacher.lastName;
                this.form.email = currentTeacher.email;
                this.form.verified = currentTeacher.isVerified;
                this.form.department = currentTeacher.department_id;
            },
            openDelete(id, index) {
                this.deleteIndex = index;
                this.delId = id;
                this.Deldialog = true;
            },
            updatePass(id) {
                this.IsResetting_id = id;
                this.IsResetting = true;
                axios.post('/api/admin/users/reset-password/' + id)
                    .then(res => {
                        this.toastSuccess(res.data);
                        this.IsResetting = false;
                    })
            },
            deleteUser() {
                this.IsDeleting = true;
                axios.delete('/api/admin/users/remove/' + this.delId)
                    .then((res) => {
                        if (res.status == 200) {
                            this.teacherList.splice(this.deleteIndex, 1);
                            this.toastSuccess('User successfully removed!')
                            this.IsDeleting = false;
                            this.deleteIndex = null;
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
                axios.put('/api/admin/verifyUser/' + id).then((res) => {

                })
            },
            validate() {

                if (this.$refs.RegisterForm.validate()) {
                    this.IsAddUpdating = true;
                    if (this.type == 'add') {
                        this.form.password_confirmation = this.form.password
                        axios.post(`/api/admin/users/add/${this.user_type}`, this.form)
                            .then((response) => {

                                if (response.status == 200) {

                                    this.$refs.RegisterForm.reset()
                                    this.valid = true;
                                    this.dialog = false;
                                    //this.$store.dispatch('fetchAllTeachers');
                                    this.teacherList.unshift(response.data);
                                    this.toastSuccess('User successfully Added!')
                                    this.IsAddUpdating = false;
                                } else {
                                    this.IsAddUpdating = false;
                                    this.toastError('Something went wrong!')

                                }
                            })
                            .catch((err) => {
                                this.IsAddUpdating = false;
                                this.toastError('Something went wrong!');
                            })


                    } else if (this.type == 'edit') {
                        this.form.post('/api/admin/users/update/' + this.form.user_id)
                            .then((res) => {


                                if (res.status == 200) {
                                    this.$refs.RegisterForm.reset()
                                    this.valid = true;
                                    this.dialog = false;
                                    this.IsAddUpdating = false;
                                    this.$store.dispatch('fetchAllTeachers').then(() => {
                                        this.teacherList = this.getTeachers;
                                    });
                                    this.toastSuccess('User Successfully Updated!')

                                } else {
                                    this.IsAddUpdating = false;
                                    this.toastError('Something went wrong!')

                                }
                            }).catch((err) => {
                                this.IsAddUpdating = false;
                                this.toastError('Something went wrong!')
                            })

                    }





                } else {
                    this.IsAddUpdating = false;
                    this.valid = false;
                }


            },
            fetchDeparmentList() {
                axios.get('/api/admin/department/all')
                    .then((res) => {
                        this.department = res.data;
                    })
            },
        },

        mounted() {
            this.fetchDeparmentList();
            this.$store.dispatch('fetchAllTeachers').then(() => {
                this.teacherList = this.getTeachers;
                this.loading = false;
            });
        }
    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
