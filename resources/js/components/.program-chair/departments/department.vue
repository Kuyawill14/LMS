<template>
    <div class="pt-2">
        <h2>
            Manage Departments
        </h2>
        <v-row class="pt-2" >


            <v-col cols="12" >
                <v-card elevation="2">
                    <v-card-title>
                    
                        <v-btn color="primary" small class="white--text ml-auto" align="right"
                            @click="dialog = true, type='add'">
                            Department
                            <v-icon right dark>
                                mdi-plus
                            </v-icon>
                        </v-btn>

                    </v-card-title>
                    <v-divider></v-divider>
                    <v-data-table dense :headers="header" :items="departmentsList" :items-per-page="5"
                        class="elevation-1">
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="(item, index) in items" :key="item.id">
                                    <td>{{item.name}}</td>
                                    <td>{{item.description}}</td>
                                    <td style="width:8%">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn v-bind="attrs" v-on="on" text icon
                                                    @click="OpendepartmentDialog(item, index)">
                                                    <v-icon >mdi-pencil-box-multiple-outline</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Edit</span>
                                        </v-tooltip>


                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn v-bind="attrs" v-on="on" text icon
                                                    @click="Deldialog = true,deleteIndex = index, deleteId= item.id">
                                                    <v-icon >mdi-delete</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Delete</span>
                                        </v-tooltip>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>


        <v-dialog persistent v-model="dialog" width="500">
            <v-card>
                <v-card-title class="">
                    {{this.type == "add" ? 'Add Department' :  'Update Department'}}
                </v-card-title>
                <v-divider></v-divider>
            
                <v-container class="mb-0 pb-0">

                    <v-form class="text-center " ref="form" v-model="valid" lazy-validation>
                        <v-row class="pa-5">
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="name" />
                              <!--   <v-text-field :rules="Rules" label="Department Name" name="name"
                                    v-model="form.name" type="text" color="primary" outlined /> -->
                                     <v-textarea
                                    class="mb-0 pb-0"
                                   v-model="form.name" 
                                    type="text" 
                                    rows="1"
                                        name="name"
                                         :rules="Rules"
                                        label="Department Name"
                                        auto-grow
                                      outlined
                                        ></v-textarea>
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="middleName" />
                               <!--  <v-text-field label="Middle Name" :rules="Rules" name="middleName"
                                    v-model="form.description" type="text" color="primary" outlined /> -->

                                    <v-textarea
                                    class="mb-0 pb-0"
                                    v-model="form.description"
                                    type="text" 
                                        name="description"
                                         :rules="Rules"
                                        label="Description"
                                        auto-grow
                                      outlined
                                        ></v-textarea>
                            </v-col>

                           
                        </v-row>
                    </v-form>
                </v-container>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn text @click="dialog = false;$refs.form.reset()">Cancel</v-btn>
                    <v-btn :loading="isAdding" text color="primary" @click="validate()">
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
                    <v-btn text @click="Deldialog = false">
                        No
                    </v-btn>
                    <v-btn :loading="IsDeleting" color="primary" text @click="deleteDepartment()">
                        Yes
                    </v-btn>
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
    import axios from 'axios';
    export default {
        data: function () {
            return {
                departmentsList:[],
                header: [
                    {
                        text: 'Department Name',
                        value: 'name',
                        align: 'start',
                    },
                      {
                        text: 'Description',
                        value: 'description',
                        align: 'start',
                    },
                    {
                        text: 'Actions',
                        sortable: false
                    },
                ],
                type: null,
                valid: true,
                dialog: false,
                Deldialog: false,
                Rules: [
                    v => !!v || "Field is required",
                ],
                 form: new Form({
                    name: "",
                    description: "",
                  
                }),
                IsDeleting: false,
                deleteIndex: null,
                deleteId: null,
                isUpdateId: null,
                isUpdateIndex: null,
                isAdding: false
              
            }
        },

        methods: {
            fetchDeparmentList() {
                axios.get('/api/admin/department/all')
                .then((res) => {
                    this.departmentsList = res.data;
                })
            },
           async addDepartment(){
               axios.post('/api/admin/department/add', this.form).then((res)=>{
                  
                   if(res.status == 201){
                        this.departmentsList.push(res.data);
                       
                       this.dialog = false;
                        this.isAdding = false;
                       this.$refs.form.reset();
                   }
               })
            },
             validate() {
                 this.isAdding = true;
                 if(this.$refs.form.validate()){
                     if(this.type == 'add'){
                          this.addDepartment();
                     }
                     else if(this.type == 'edit'){
                         this.UpdateDepartmentDetails();
                     }
                 }
                 else{
                      this.isAdding = false;
                 }
            },
            async deleteDepartment(){
                axios.delete('/api/admin/department/delete/'+this.deleteId)
                .then(res=>{
                    if(res.data.success == true){
                         this.departmentsList.splice(this.deleteIndex, 1);
                         this.Deldialog = false;
                    }
                })
            },
            OpendepartmentDialog(data, index){
                this.form.name = data.name;
                this.form.description = data.description;
                this.isUpdateId = data.id;
                this.isUpdateIndex = index;
                this.type = 'edit';
                this.dialog = true;
            },
            async UpdateDepartmentDetails(){
                axios.put('/api/admin/department/update/'+this.isUpdateId , this.form)
                .then(res=>{
                    if(res.data.success == true){
                        this.departmentsList[ this.isUpdateIndex].name = this.form.name;
                        this.departmentsList[ this.isUpdateIndex].description = this.form.description;
                         this.isAdding = false;
                        this.dialog = false;
                         this.$refs.form.reset();
                    }
                })
            }
        },

        mounted() {
            this.fetchDeparmentList();
        }



    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>
