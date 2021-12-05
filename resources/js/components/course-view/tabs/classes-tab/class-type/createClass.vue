<template>

    <v-card>
        <v-form @submit.prevent="validate" ref="form" v-model="valid" lazy-validation>
        <v-card-title class="">
            Create Class
        </v-card-title>
        <v-container>
            
                <v-row class="mx-2">
                    <v-col cols="12" class="pa-0 ma-0">
                        <v-text-field :rules="rules" class="mb-0 pb-0" v-model="form.class_name"   outlined color="primary" label="Class Name">
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
                    </v-col>
                    <v-col cols="12" class="pa-0 ma-0 mt-2">
                        <v-row>
                            <v-col cols="12" v-for="(item , index) in form.schedule" :key="index">
                                <div class="d-flex">
                                    <v-icon color="red" class="pr-1">mdi-calendar</v-icon>
                                    <span>{{item.day}},- </span>
                                    <span>{{item.display_start+' to '+item.display_end}}</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
          
        </v-container>
        <v-card-actions>

            <v-spacer></v-spacer>
            <v-btn text @click="$emit('closeModal'),$refs.form.resetValidation()">Cancel</v-btn>
            <v-btn text color="primary" type="submit">Create</v-btn>
        </v-card-actions>

        <div>
              <v-dialog persistent v-model="addScheduleDialog"  width="400px">
                <v-card >
                    <v-card-title class="">
                        <v-btn @click="addScheduleDialog = !addScheduleDialog" icon>
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
                                        dense
                                        :items="items"
                                        v-model="day"
                                        hide-details
                                        outlined
                                        label="Day"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field outlined dense hide-details type="time" v-model="start_time" label="End time"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field outlined dense hide-details v-model="end_time" type="time" label="End time"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                     <v-card-actions >
                        <v-btn rounded @click="AddSchedule" block color="primary" >Add</v-btn>
                    </v-card-actions>
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
            rules: [
                v => !!v || 'Class name is required',
            ],
           
        }),
        methods: {
            validate(){
                if(this.$refs.form.validate()){
                    this.createClass();
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
                this.clearFormInputs();
                this.$emit('closeModal')
                this.toastSuccess();

            },
            AddSchedule(){
              
               
                let tmpday = this.day.toLowerCase();
                let tmp_start = Date.parse('next '+tmpday).at(this.start_time);
                let tmp_end = Date.parse('next '+tmpday).at(this.end_time);
                let display_start = moment(tmp_start).tz("Asia/Manila").format('LT');
                let display_end = moment(tmp_end).tz("Asia/Manila").format('LT');

                  this.form.schedule.push({
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
            },
            clearFormInputs(){
                this.form.class_name = '';
                this.form.course_id = null;
                this.form.end_timeauto_accept = false;
                this.form.schedule = [];
                this.$refs.form.resetValidation()
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
