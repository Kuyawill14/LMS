<template>


    <v-card>


        <v-dialog width="350" v-model="closeDialog">
            <v-card class="pa-2">
                <v-card-text class="font-weight-bold">
                    <div class="subtitle-1 " style="line-height:1.1">
                        You have new changes you want to save?
                      </div>
                    </v-card-text>
                <v-card-actions class="pb-5">
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    rounded
                    outlined
                    @click="SaveAndclose(false)"
                >
                    Cancel
                </v-btn>
                <v-btn
                    color="primary"
                    rounded
                    @click="SaveAndclose(true)"
                >
                    Confirm
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-form ref="form" v-model="valid" lazy-validation>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="CheckChanges()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Rubrics</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-title>{{title}} ({{total_points}}pts)</v-toolbar-title>


                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="validate()">
                        Save
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>


            <v-container>

                <v-row align="center" class="pt-4" >
                    <vue-element-loading :active="loading" spinner="bar-fade-scale" color="#FF6700" />
                    <v-col cols="3" v-for="(item, index) in criteria" :key="index">
                        <v-card class="pa-5">
                            <v-btn class="mx-2" fab dark x-small color="red"
                                @click="deleteDialog = true, rubrics_id = item.id,deleteIndex = index"
                                style="position: absolute;right: -20px;top: -11px;height:20px !important;width:20px !important;">
                                <v-icon dark style="font-size: 15px;">
                                    mdi-close
                                </v-icon>
                            </v-btn>
                            <v-row no-gutters>
                              
                                <v-col cols="12" >
                                    <v-text-field outlined label="Criteria name" v-model="item.criteria_name"
                                        :rules="nameRules" type="text" class="text-field" required>
                                    </v-text-field>
                                </v-col>
                                  <v-col cols="12"  >
                                    <v-text-field outlined label="Points" class="text-field" v-model="item.points"
                                        type="number" :rules="pointsRules" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" >
                                    <v-textarea label="Description" class="text-field" v-model="item.description"
                                        outlined auto-grow>
                                    </v-textarea>
                                </v-col>
                            </v-row>
                        </v-card>


                    </v-col>

                   <!--  <v-col cols="3">
                        <v-card class="pa-5">

                            <v-row>
                                <v-col cols="12" style="margin-bottom: -20px;">
                                    <v-text-field type="number" outlined label="Points" v-model="criteria_form.points" 
                                        :rules="pointsRules" class="text-field" >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" class="py-0" style="margin-bottom: -20px;">
                                    <v-text-field  outlined label="Cirterion name" v-model="criteria_form.criteria_name"
                                        :rules="nameRules" class="text-field"  >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" class="py-0" style="margin-bottom: -20px;">
                                    <v-textarea label="Description" class="text-field"
                                        v-model="criteria_form.description" outlined auto-grow>
                                    </v-textarea>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col> -->


                    <v-btn color="primary"  @click="addCriteria" class="ml-3">
                        <v-icon>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </v-row>
            </v-container>
        </v-form>





        <v-dialog v-model="deleteDialog" persistent max-width="400">
            <v-card>

                <v-card-title>
                    <span class="headline">Confirmation</span>
                </v-card-title>
                <v-card-text>
                    Are you sure you want to delete this Item?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="deleteDialog =false">
                        Cancel
                    </v-btn>
                    <v-btn color="red" text @click="deleteRubrics(rubrics_id)" :loading="loading">
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>


<script>
    import axios from 'axios'
    export default {
        props: ['dialog', 'total_points', 'title', 'rubricsDetails'],
        data() {
            return {
                isSaved: true,
                loading: false,
                deleteDialog: false,
                rubrics_id: '',
                deleteIndex: null,
                modal: this.dialog,
                criteria: [],
                num: -999,
                criteria_form: {
                    id: '',
                    points: '',
                    criteria_name: '',
                    description: ''
                },
                valid: true,
                nameRules: [
                    v => !!v || 'Field is required',

                ],
                pointsRules: [
                    v => ( v && v >= 1 ) || "Points should be above or equal to 1",
                    v => ( v && v <= 100 ) || "Points should not be above 100",
                    v => !!v || 'Points is required'
                ],
                closeDialog: false,
                newChanges: false,
                tmpCriteria: [],
                totalPoints: 0,
            }
        },
        methods: {
            SaveAndclose(data){
                if(data){
                    this.$emit('CloseAndSave',this.criteria);
                }
                else{
                    this.$emit('CLoseRubricModal');
                }
            },
            CheckChanges(){
                if(this.newChanges){
                    this.closeDialog = true;
                }
                else{
                    this.$emit('CLoseRubricModal');
                }
            },
            closeModal() {
                this.saveAllCriteria()
                .then(() => {
                    this.$emit('closeModal')
                });
            },

            resetForm() {
                this.criteria_form.points = '';
                this.criteria_form.criteria_name = '';
                this.criteria_form.description = '';
            },
            saveAllCriteria() {
                if(this.criteria.length != 0){
                    this.totalPoints = 0;
                    this.criteria.forEach(element => {
                        this.totalPoints+=element.points;
                    });
                }


                if(this.totalPoints > 100){
                    this.toastError('The total points for the rubrics is above 100!') 
                }
                else{
                    this.loading = true;       
                axios.post(`/api/classwork/rubrics-save/${this.$route.query.clwk}`, {
                    rubrics: this.criteria
                })
                .then((res) => {
                    this.loading = false;
                    this.$emit('CloseAndSave',this.criteria);
                })
                .catch((err) => {
                    this.toastError('Something went wrong');
                    this.loading = false;
                })
                }

                
            },
            validate(){
                if(this.$refs.form.validate()){
                    this.saveAllCriteria();
                }
            },
            addCriteria() {
                if(this.criteria.length != 0){
                    this.totalPoints = 0;
                    this.criteria.forEach(element => {
                        this.totalPoints+=element.points;
                    });
                }

                if(this.totalPoints > 100){
                    this.toastError('The total points is already 100') 
                }
                else{
                    this.newChanges = true;
                    this.isSaved = false;
                    if (!this.$refs.form.validate()) {
                        this.toastError('Please Complete the fields')
                    }else{
                        this.criteria.push({
                            id: null,
                            points: null,
                            criteria_name: null,
                            description: null,
                        })
                    }
                }
                
                
            

                
            },
           /*  fetchAllRubrics() {
                this.loading = true;
                axios.get(`/api/classwork/rubric/all/${this.$route.query.clwk}`, this.criteria)
                    .then((res) => {
                        this.criteria = res.data;
                        this.loading = false;
                    }).catch((err) => {
                        //console.log(err);
                        this.toastError('Something went wrong');
                        this.loading = false;
                    })
            }, */
            deleteRubrics(rubrics_id) {
                this.loading = true;
                axios.delete(`/api/classwork/rubric/delete/${this.$route.query.clwk}/${rubrics_id}`)
                    .then((res) => {
                        this.loading = false;
                        this.deleteDialog = false;
                        this.criteria.splice(this.deleteIndex, 1);
                        this.$emit('deleteRubrics',rubrics_id);
                    }).catch((err) => {
                        this.toastError('Something went wrong');
                        this.loading = false;
                    })
            },
            CheckCriteria(){
                if(this.rubricsDetails.length == 0){
                     this.criteria.push({
                        id: null,
                        points: null,
                        criteria_name: null,
                        description: null,
                    })
                }
                else{
                    this.rubricsDetails.forEach(item => {
                         this.criteria.push({
                            id: item.id,
                            points: item.points,
                            criteria_name: item.criteria_name,
                            description: item.description,
                        })

                        this.totalPoints+= item.points;
                    });
                }
            }
        },
        mounted() {
            this.tmpCriteria = this.rubricsDetails;
            this.CheckCriteria();
        }

    }

</script>

<style>
    /* .text-field>.v-input__control>.v-text-field__details>.error--text {
        margin-top: -55px !important;
        position: absolute !important;
        z-index: 9999999 !important;


    } */

</style>
