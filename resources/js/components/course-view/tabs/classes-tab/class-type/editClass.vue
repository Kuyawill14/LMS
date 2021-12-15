<template>
    <v-card>
        <v-form  ref="form" v-model="valid" lazy-validation>
            <v-card-title class="">
                Update Class
            </v-card-title>
            <v-container>
                <v-row class="mx-2">

                    <v-col cols="12" class="pa-0 ma-0">
                        <v-text-field :rules="rules"  v-model="class_details.class_name" :hide-details="valid" ref="_classname" outlined color="primary" label="Class Name">
                        </v-text-field>

                    </v-col>
                    <v-col cols="12" class="pa-0 ma-0">
                        <v-switch
                            v-model="class_details.is_auto_accept"
                            label="Auto accept"
                            hide-details
                            ></v-switch>
                    </v-col>

                <!--    <v-col cols="12" class="pa-0 ma-0 mt-5">
                        <v-btn text rounded small @click="addScheduleDialog = !addScheduleDialog">
                            Add Schedule <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col> -->

                    <v-col cols="12" class="pa-0 ma-0 mt-5">
                        <div class="d-flex justify-space-between">
                            <div class="mt-1">
                                Schedule: 
                            </div>
                            <div>
                                <v-btn icon  @click="addScheduleDialog = !addScheduleDialog">
                                    <v-icon >mdi-plus</v-icon>
                                </v-btn>
                            </div>
                        </div>
                         <v-divider v-if="class_details.schedule.length != 0"></v-divider>
                    </v-col>
                    <v-divider></v-divider>
                    <v-col cols="12" class="pa-0 ma-0 mt-4">
                        <v-row v-if="class_details.schedule != false">
                            
                            <v-col class="mb-0 pb-0 mt-0 pt-0" cols="12" v-for="(item , index) in class_details.schedule" :key="index">
                                <div class="d-flex justify-space-between">
                                    <div class="d-flex mt-2">
                                        <span class="pr-1"> <v-icon color="red" >mdi-calendar</v-icon></span>
                                    
                                        <span>{{item.day}}- </span>
                                        <span class="ml-1">{{formatDisplay(item.day,item.start_time)+' to '+formatDisplay(item.day,item.end_time)}}</span>
                                    </div>
                                    <div>
                                        <span><v-btn @click="OpenEdit(item, index)"  icon><v-icon color="blue" small >mdi-pencil</v-icon></v-btn></span>
                                        <span> <v-btn @click="DeleteSchedule(index)" icon><v-icon color="red" small >mdi-delete</v-icon></v-btn></span>
                                        
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>


                </v-row>
            </v-container>
            <v-card-actions class="mt-3">

                <v-spacer></v-spacer>
                <v-btn text color="secondary" @click="$emit('closeModal');">Cancel</v-btn>
                <v-btn text color="primary" :disabled="sending" @click="validate">Update</v-btn>
            </v-card-actions>


            <div>
                <v-dialog persistent v-model="addScheduleDialog"  width="400px">
                    <v-card>
                        <v-form  ref="Schedform" v-model="Schedvalid" lazy-validation>
                            <v-card-title class="">
                                <v-btn @click="addScheduleDialog = !addScheduleDialog, is_edit = false,clearInputs()" icon>
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                {{!is_edit ? 'New Schedule' : 'Update Schedule'}}
                            </v-card-title>
                            <v-container>
                                <v-row class="mx-2">
                                    <v-col cols="12" class="pa-0 ma-0 mb-2">
                                        <v-row>
                                            <v-col cols="12">
                                                <v-select
                                                :hide-details="Schedvalid"
                                                :rules="Schedrules"
                                                dense
                                                :items="items"
                                                v-model="day"
                                                outlined
                                                label="Day"
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-text-field outlined :rules="Schedrules" dense :hide-details="Schedvalid" type="time" v-model="start_time" label="Start time"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-text-field outlined :rules="Schedrules" dense :hide-details="Schedvalid" v-model="end_time" type="time" label="End time"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-card-actions >
                                <v-btn rounded  @click="validateSched" block color="primary" > {{!is_edit ? 'Add' : 'Update'}}</v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-dialog>
            </div>
        </v-form>
    </v-card>

</template>

<script>
import moment from 'moment-timezone';
    export default {
        props: ['class_id', 'class_name','class_details'],
        name: 'ErrorsMessages',
        data: () => ({
            noError: null,
            required: null,
            textarea: null,
            hasMessages: false,
            sending: false,
            className: '',
            form: {
                class_name: '',
                class_id: null,
                auto_accept: false,
                schedule:null
            },
            items: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
            start_time: null,
            end_time: null,
            menu: false,
            menu1: false,
            addScheduleDialog: false,
            day: null,
            is_edit: false,
            is_edit_index: null,
            Schedvalid: true,
            valid: true,
            rules: [
                v => !!v || 'Class name is required',
            ],
            Schedrules: [
                v => !!v || 'Field is required',
            ],
        }),
        methods: {
            validate(){
                if(this.$refs.form.validate()){
                    this.updateClass();
                }
            },

            validateSched(){
                if(this.$refs.Schedform.validate()){
                    if(!this.is_edit){
                         this.AddSchedule();
                    }
                    else{
                        this.updateSchedule();
                    }
                   
                }
            },
            toastSuccess() {
                return this.$toasted.success("Class Successfully updated", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },

            updateClass() {
                this.sending = true;
                this.$emit('closeModal');
                this.isloading = true;
                this.form.class_id = this.class_id;
                this.form.course_id = this.$route.params.id;
                this.form.class_name = this.class_details.class_name;
                this.form.auto_accept = this.class_details.is_auto_accept;
                this.form.schedule = this.class_details.schedule;
                this.$store.dispatch('updateClass', this.form).then(()=>{
                this.$store.dispatch('fetchSubjectCourseClassList', this.$route.params.id);
                this.toastSuccess();
                    this.isloading = false;
                    this.sending = false;
                });
            
            },
             formatDisplay(day,time){
                let tmp = Date.parse('next '+day).at(time);
                let finalTime = moment(tmp).format('LT');
                return finalTime;
            },

            AddSchedule(){
              
                let tmpday = this.day.toLowerCase();
                let tmp_start = Date.parse('next '+tmpday).at(this.start_time);
                let tmp_end = Date.parse('next '+tmpday).at(this.end_time);
                let display_start = moment(tmp_start).format('LT');
                let display_end = moment(tmp_end).format('LT');


                this.class_details.schedule = this.class_details.schedule == false ? [] : this.class_details.schedule;
                   this.class_details.schedule.push({
                    day: this.day,
                    display_start:display_start,
                    display_end:display_end,
                    start_time: this.start_time,
                    end_time:this.end_time
                })
                this.addScheduleDialog = !this.addScheduleDialog;
                this.clearInputs();
            },
            clearInputs(){
                this.day = null;
                this.start_time = null;
                this.end_time = null;
                this.$refs.Schedform.resetValidation()
            },
            OpenEdit(data, index){
                this.is_edit = true;
                this.is_edit_index = index;
                this.day = data.day;
                this.start_time = data.start_time;
                this.end_time = data.end_time;
                this.addScheduleDialog = true;
            },
            updateSchedule(){
                let tmpday = this.day.toLowerCase();
                let tmp_start = Date.parse('next '+tmpday).at(this.start_time);
                let tmp_end = Date.parse('next '+tmpday).at(this.end_time);
                let display_start = moment(tmp_start).tz("Asia/Manila").format('LT');
                let display_end = moment(tmp_end).tz("Asia/Manila").format('LT');

                this.class_details.schedule[this.is_edit_index] = {
                    day: this.day,
                    display_start:display_start,
                    display_end:display_end,
                    start_time: this.start_time,
                    end_time:this.end_time
                }
                this.addScheduleDialog = false;
                this.is_edit = false;
                this.clearInputs();
                
            },
            DeleteSchedule(index){
                this.class_details.schedule.splice(index, 1)
            }
        
        },
        mounted() {
            this.className = this.class_name;


        }
    }

</script>

<style lang="scss" scoped>
    .md-progress-bar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }

</style>
