<template>
  
    <v-card>
        <v-form ref="registerForm" lazy-validation>
            <v-card-title>
                <span class="headline">Add Classwork</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-row>
                                <v-col cols="12" lg="8" md="8">
                                        <v-text-field 
                                        v-model="form.title"
                                        label="Title" type="text"  required>
                                        </v-text-field>
                                </v-col>
                                <v-col cols="12" lg="4" md="4">
                                    <v-select
                                    v-model="form.type"
                                    :items="['Quiz', 'test']"
                                    label="Type"
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea
                                v-model="form.instruction"
                                label="Instruction"
                                auto-grow
                                >
                            </v-textarea>
                        </v-col>

                            <v-col cols="12">
                                <v-row>
                                    <v-col>
                                  <!--   <v-text-field 
                                    v-model="form.due_date"
                                    label="Due Date" type="datetime-local"  required>
                                    </v-text-field> -->
                                    <v-datetime-picker label="Due Date" 
                                      v-model="datetime"
                                     :text-field-props="textFieldProps"
                                     :date-picker-props="dateProps"
                                     :time-picker-props="timeProps"
                                     time-format="HH:mm:ss"
                                     color="primary"
                                     > 
                                    

                                    </v-datetime-picker>
                                    </v-col>
                                    <v-col>
                                        <v-container class="d-flex flex-row mb-0 pb-0 pt-0 mt-0">
                                        <v-btn @click="isTimer = !isTimer" class="mr-1 mt-3" icon>
                                            <v-icon :color="isTimer ? 'primary' : ''">
                                                mdi-{{isTimer ? 'timer' : 'timer-off'}}
                                            </v-icon>
                                        </v-btn>
                                        <v-text-field
                                        :disabled="!isTimer"
                                        v-model="form.duration"
                                        hint="mins" label="Time Limit" 
                                        type="number"
                                        >
                                        </v-text-field>
                                         </v-container>
                                    </v-col>
                                </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$emit('CloseDialog')" :disabled="loading">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="SaveClasswork()" :disabled="loading">
                    Save
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
  

   
</template>

<script>
import moment from 'moment';
import Form from 'vform'
export default {
    data(){
        return{
             isTimer: false,
             loading: false,
            dialog: false,
             form:new Form({}),
            nullDatetime: null,
            datetime: new Date(),
            datetimeString: '2019-01-01 12:00',
            formattedDatetime: '09/01/2019 12:00',
            textFieldProps: {
                appendIcon: 'event'
            },
            dateProps: {
                headerColor: 'primary'
            },
            timeProps: {
                useSeconds: true,
                ampmInTitle: true
            }
        }
    },
    methods:{
         toastSuccess() {
                return this.$toasted.success("Classwork Successfully added", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 3000
                });
            },
         async SaveClasswork(){
            this.form.due_date = moment(this.datetime).format("YYYY-MM-DD, h:mm:ss")
             this.form.course_id = this.$route.params.id;
            this.$store.dispatch('createClasswork', this.form)
            .then(res=>{
                if(res == 201){
                    this.toastSuccess();
                    this.form.reset()
                    this.dialog = false;
                    this.$emit('realodClassworks');
                }
            })

           
           /*  axios.post('/api/classwork/insert', )
            .then(res=>{
                if(res.status == 201){
                    this.toastSuccess();
                    this.form.reset()
                    this.dialog = false;
                    this.$emit('realodClassworks');

                }

            }).catch(e=>{
                console.log(e);
            }) */
           
        },
    }
}
</script>

<style>
 
</style>