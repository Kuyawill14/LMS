<template>
    <div class="pt-4">
        <h2>
            Manage users
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
                                       Name
                                    </th>
                                    <th>
                                       Total Courses
                                    </th>
                                     <th>
                                       Total Classes
                                    </th>
                                      <th>
                                       Total Modules Created
                                    </th>

                                        <th>
                                      Action
                                    </th>
                               
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in getTeachers" :key="index">
                                    <td> {{item.user_id}} </td>
                                    <td> {{item.lastName + ', ' + item.firstName + ' ' + item.middleName }} </td>
                              <td> {# of total courses} </td>
                                 <td> {# of total classes} </td>
                               <td> {# of total modules created} </td>
                            
                                   <td> <v-btn icon color="success" >
                                       
                                            <v-icon>
                                                mdi-eye
                                            </v-icon>

                                        </v-btn> </td>

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


    </div>



</template>
<style scoped>

</style>

<script>
    import VueElementLoading from 'vue-element-loading'

    import {
        mapGetters,
        mapActions
    } from "vuex";
import axios from 'axios';
    export default {
        components: {
            VueElementLoading
        },
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
            clearForm() {
    this.form.user_id = '';
                this.form.firstName = '';
                this.form.middleName ='';
                this.form.lastName = '';
                this.form.phone = '';
                this.form.email = '';

            },

            openAdd() {
                     this.clearForm();
          this.$refs.RegisterForm.resetValidation();
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
                axios.post('/api/teachers/reset-password/'+id ) 
                .then(res => {
                    this.toastSuccess(res.data);
                    this.IsResetting = false;
                })
            },
            deleteUser() {
                this.IsDeleting = true;
                axios.delete('/api/teachers/remove/' + this.delId)
                .then((res) => {
                    if(res.status==200) {
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
                        this.form.password_confirmation = this.form.password


                        this.form.post('/api/register')
                            .then((res) => {
                               
                             
                                this.$refs.RegisterForm.reset()
                                this.valid = true;
                                 this.dialog = false;
                                  this.IsAddUpdating = false;
                                
                            })
                      
                    }


                    if (this.type == 'edit') {
                        this.form.post('/api/teachers/update/' + this.form.user_id)
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
                   
                   
                  

                }
                else{
                   this.IsAddUpdating = false;

                }
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
