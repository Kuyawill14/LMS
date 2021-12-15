<template>

    <v-card>
        <v-form @submit.prevent="validate" ref="form" v-model="valid" lazy-validation>
        <v-card-title class="">
            Create Class
        </v-card-title>
        <v-container>
            
                <v-row class="mx-2">
                    <v-col cols="12" class="pa-0 ma-0">
                        <v-text-field :hide-details="valid" :rules="rules" class="mb-0 pb-0" v-model="form.class_name"   outlined color="primary" label="Class Name">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" class="pa-0 ma-0">
                        <v-switch
                            v-model="form.auto_accept"
                            label="Auto accept"
                            hide-details
                            ></v-switch>
                    </v-col>

                    <v-col cols="12" class="pa-0 ma-0 mt-5">
                        <v-btn text rounded small @click="addScheduleDialog = !addScheduleDialog">
                            Add Schedule <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        <v-divider v-if="form.schedule.length != 0"></v-divider>
                    </v-col>
                    <v-col cols="12" class="pa-0 ma-0 mt-4">
                        <v-row>
                            <v-col class="mb-0 pb-0 mt-0 pt-0" cols="12" v-for="(item , index) in form.schedule" :key="index">
                                 <div class="d-flex justify-space-between">
                                    <div class="d-flex mt-2">
                                        <span class="pr-1"> <v-icon color="red" >mdi-calendar</v-icon></span>
                                        <span>{{item.day}}- </span>
                                        <span class="ml-1">{{formatDisplay(item.start_time)+' to '+formatDisplay(item.end_time)}}</span>
                                    </div>
                                    <div class="d-flex mb-0 pb-0">
                                        <v-btn @click="OpenEdit(item, index)"  icon><v-icon color="blue" small >mdi-pencil</v-icon></v-btn>
                                       <v-btn @click="DeleteSchedule(index)" icon><v-icon color="red" small >mdi-delete</v-icon></v-btn>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
          
        </v-container>
        <v-card-actions class="mt-3">

            <v-spacer></v-spacer>
            <v-btn text @click="$emit('closeModal'),$refs.form.resetValidation()">Cancel</v-btn>
            <v-btn text color="primary" type="submit">Create</v-btn>
        </v-card-actions>

        <div>
              <v-dialog persistent v-model="addScheduleDialog"  width="400px">
                <v-card>
                    <v-form  ref="Schedform" v-model="Schedvalid" lazy-validation>
                        <v-card-title class="">
                            <v-btn @click="addScheduleDialog = !addScheduleDialog, isUpdateSched = !isUpdateSched" icon>
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            New Schedule
                        </v-card-title>
                        <v-container>
                            <v-row class="mx-2">
                                <v-col cols="12" class="pa-0 ma-0 mb-2">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-select
                                            :rules="Schedrules"
                                            dense
                                            :items="items"
                                            v-model="day"
                                            :hide-details="Schedvalid"
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
                            <v-btn v-if="!isUpdateSched" rounded @click="validateSched" block color="primary" >Add</v-btn>
                            <v-btn v-else rounded @click="updateSchedule" block color="primary" >Update</v-btn>
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
        data: () => ({
            noError: null,
            required: null,
            textarea: null,
            hasMessages: false,
            form: {
                class_name: '',
                course_id: null,
                auto_accept: false,
                schedule:[]
            },
            items: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
            start_time: null,
            end_time: null,
            menu: false,
            menu1: false,
            addScheduleDialog: false,
            day: null,
            valid: true,
            Schedvalid: true,
            rules: [
                v => !!v || 'Class name is required',
            ],
            Schedrules: [
                v => !!v || 'Field is required',
            ],
            isUpdateSched: false,
            is_edit_index: null
           
        }),
        methods: {
            validate(){
                if(this.$refs.form.validate()){
                    this.createClass();
                }
            },

            validateSched(){
                if(this.$refs.Schedform.validate()){
                    this.AddSchedule();
                }
            },
            toastSuccess() {
                return this.$toasted.success("Class Successfully Created", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            createClass() {
               
                this.form.course_id = this.$route.params.id;
                this.$store.dispatch('createClass', this.form);
                this.$emit('newClassAdded');
                this.clearFormInputs();
                this.toastSuccess();

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

                  this.form.schedule.push({
                    day: this.day,
                    display_start:display_start,
                    display_end:display_end,
                    start_time: this.start_time,
                    end_time:this.end_time
                })

                this.addScheduleDialog = !this.addScheduleDialog;
                this.clearInputs();
                this.$refs.Schedform.resetValidation();
            },
            clearInputs(){
                this.day = null;
                this.start_time = null;
                this.end_time = null;
            },
            clearFormInputs(){
                this.form.class_name = '';
                this.form.course_id = null;
                this.form.end_timeauto_accept = false;
                this.form.schedule = [];
                this.$refs.form.resetValidation()
            },
             OpenEdit(data, index){
                this.is_edit_index = index;
                this.day = data.day;
                this.start_time = data.start_time;
                this.end_time = data.end_time;
                this.addScheduleDialog = true;
                this.isUpdateSched = true;
            },
            updateSchedule(){

                let tmpday = this.day.toLowerCase();
                let tmp_start = Date.parse('next '+tmpday).at(this.start_time);
                let tmp_end = Date.parse('next '+tmpday).at(this.end_time);
                let display_start = moment(tmp_start).tz("Asia/Manila").format('LT');
                let display_end = moment(tmp_end).tz("Asia/Manila").format('LT');

                this.form.schedule[this.is_edit_index].day = this.day;
                this.form.schedule[this.is_edit_index].display_start = display_start;
                this.form.schedule[this.is_edit_index].display_end = display_end;
                this.form.schedule[this.is_edit_index].start_time = this.start_time;
                this.form.schedule[this.is_edit_index].end_time = this.end_time;

                this.isUpdateSched = false;
                this.is_edit_index = null;
                this.addScheduleDialog = false;
                this.$refs.Schedform.resetValidation()
                this.clearInputs();
            },
            DeleteSchedule(index){
                this.form.schedule.splice(index, 1)
            }
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
