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
                    <v-data-table :headers="header" :items="departmentsList" :items-per-page="5"
                        class="elevation-1">
                        <template v-slot:body="{ items }">
                            <tbody>
                                <tr v-for="(item, index) in items" :key="item.id">
                                     <td class="text-center"> <v-img max-width="60" max-height="60" :src="item.logo" ></v-img></td>
                                    <td>{{item.short_name}}</td>
                                    <td>{{item.name}}</td>
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
                    {{type == "add" ? 'Add Department' :  'Update Department'}}
                </v-card-title>
                <v-divider></v-divider>
            
                <v-container class="mb-0 pb-0">

                    <v-form class="text-center " ref="form" v-model="valid" lazy-validation>
                        <v-row class="pa-5">

                              <v-col class="ma-0 pa-0 text-center" cols="12" md="12">
                                 <v-avatar  :tile="form.logo != null && form.logo != ''" size="130" @click="$refs.refdepartment.$refs.input.click()">
                                    <v-hover >
                                        <template v-slot:default="{ hover }">
                                            <div>
                                            <v-avatar :tile="form.logo != null && form.logo != ''" :color="type == 'add' ? '#0D8ABC' : ''"  size="130" style="cursor: pointer">
                                                <v-icon style="font-size:4rem" color="white"  v-if="form.logo == null || form.logo == ''">mdi-cloud-upload-outline</v-icon>
                                            <v-img contain v-else alt="Proflie" 
                                            :src="form.logo">
                                            <v-row v-if="isUploading" class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>

                                            </v-img>
                                            </v-avatar>
                                                <v-fade-transition>
                                                    <v-overlay v-if="hover" absolute color="#212121" style="cursor: pointer;">
                                                        <div class=""><v-icon small>mdi-camera</v-icon> {{!isUploading ? 'Upload' : 'Uploading'}} </div>
                                                    </v-overlay>
                                                </v-fade-transition>
                                            </div>
                                        </template>
                                    </v-hover>
                                    </v-avatar>
                                   <!--  <input
                                    :disabled="isUploading"
                                    ref="fileInput"
                                    class="d-none"
                                    type="file"
                                    accept="image/jpeg"
                                    @change="onFileChange"> -->
                                      <v-file-input
                                      @change="onFileChange"
                                        class="d-none"
                                        outlined
                                        ref="refdepartment"
                                        v-model="file"
                                        :rules="Logorules"
                                        prepend-icon=""
                                        accept="image/png, image/jpeg, image/bmp"
                                        prepend-inner-icon="mdi-camera"
                                        label="Department Logo">
                                    </v-file-input>
                             </v-col>
                             <v-col class="ma-0 pa-0 mb-5" cols="12" md="12">
                                <h3> Department Logo</h3>
                            </v-col>

                              <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="short_name" />
                                     <v-textarea
                                    class="mb-0 pb-0"
                                    v-model="form.short_name" 
                                    type="text" 
                                    rows="1"
                                    name="name"
                                    label="Short Name"
                                    placeholder="Eg. CCSICT, COC, COE , etc"
                                    auto-grow
                                    outlined
                                    ></v-textarea>
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="name" />
                                     <v-textarea
                                    class="mb-0 pb-0"
                                   v-model="form.name" 
                                    type="text" 
                                    rows="1"
                                    name="name"

                                    label="Department Name"
                                    auto-grow
                                    outlined
                                    ></v-textarea>
                            </v-col>

                           <!--  <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                    <v-file-input
                                    outlined
                                    v-model="file"
                                    :rules="Logorules"
                                    prepend-icon=""
                                    accept="image/png, image/jpeg, image/bmp"
                                    prepend-inner-icon="mdi-camera"
                                    label="Department Logo"
                                    ></v-file-input>
                                </v-col> -->

                        
                           
                        </v-row>
                    </v-form>
                </v-container>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn text @click="clearData()">Cancel</v-btn>
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
                        text: 'Department Logo',
                        value: 'logo',
                        align: 'start',
                    },
                    {
                        text: 'Department Short Name',
                        value: 'name',
                        align: 'start',
                    },
                      {
                        text: 'Department Name',
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
                    short_name: "",
                    name: "",
                    logo: '',
                }),
                file: null,
                IsDeleting: false,
                deleteIndex: null,
                deleteId: null,
                isUpdateId: null,
                isUpdateIndex: null,
                isAdding: false,
                Logorules: [
                    value => !value || value.size < 10000000 || 'Avatar size should be less than 10 MB!',
                ],
                isUploading: false,
                old_logo_path: null,
                        
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

               let fd = new FormData;
               fd.append('short_name', this.form.short_name);
               fd.append('name', this.form.name);
               fd.append('logo', this.file);
               axios.post('/api/admin/department/add', fd).then((res)=>{
                  
                   if(res.data.success == true){
                       this.departmentsList.push(res.data.new_data);
                       this.dialog = false;
                       this.isAdding = false;
                       this.file = null;
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
                this.form.logo = data.logo;
                this.old_logo_path = data.logo;
                this.form.short_name = data.short_name;
                this.isUpdateId = data.id;
                this.isUpdateIndex = index;
                this.type = 'edit';
                this.dialog = true;
            },
            async UpdateDepartmentDetails(){
                let fd = new FormData;
                fd.append('short_name', this.form.short_name);
                fd.append('name', this.form.name);
                fd.append('old_logo_path', this.old_logo_path);
                fd.append('logo', this.file);

                axios.post('/api/admin/department/update/'+this.isUpdateId , fd)
                .then(res=>{
                    if(res.data.success == true){
                        this.departmentsList[ this.isUpdateIndex].name = this.form.name;
                        this.departmentsList[ this.isUpdateIndex].short_name = this.form.short_name;
                        this.departmentsList[ this.isUpdateIndex].logo = res.data.path;
                        this.isAdding = false;
                        this.dialog = false;
                        this.file = null;
                        this.$refs.form.reset();
                    }
                })
            },
              onFileChange(file) {     
                this.form.logo =   URL.createObjectURL(file)
            },
            clearData(){
                this.dialog = false;
                this.form.logo = null;
                this.$refs.form.reset()
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
