<template>
  
    <v-card style="border-top:3px solid #EF6C00">
        <v-form ref="registerForm" lazy-validation>
            <v-card-title>
                <span class="headline">Add Classwork</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12"> 
                            <v-select
                            outlined
                            v-model="form.type"
                            :items="['Objective Type', 'Subjective Type']"
                            label="Type"
                            ></v-select>
                        </v-col>

                      
                        <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12">
                             <v-textarea
                             rows="1"
                            outlined
                                v-model="form.title"
                                label="Title"
                                auto-grow
                                >
                            </v-textarea>
                        </v-col>
                        <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12">
                            <v-textarea
                            outlined
                                v-model="form.instruction"
                                label="Instruction"
                                auto-grow
                                >
                            </v-textarea>
                        </v-col>

                        <v-col v-if="form.type == 'Objective Type'" class="mb-0 pb-0 pt-0 mt-0" cols="12">
                            <v-text-field
                            @click="isTimer = !isTimer"
                            :append-icon="'mdi-'+(isTimer ? 'timer':'timer-off')"
                            outlined
                            min="0"
                            v-model="form.duration"
                            hint="mins" label="Time Limit" 
                            type="number">
                            </v-text-field>
                        </v-col>
                        
                        <v-col v-if="form.type == 'Subjective Type'" class="mb-0 pb-0 pt-0 mt-0" cols="12">
                             <v-file-input
                                v-model="files"
                                v-if="form.type == 'Subjective Type'"
                                placeholder="Upload your documents"
                                label="File input"
                                outlined
                                show-size
                                counter
                                multiple
                                prepend-icon=""
                                prepend-inner-icon="mdi-paperclip"
                            >
                                <template v-slot:selection="{ text }">
                                <v-chip
                                    small
                                    label
                                    color="primary"
                                >
                                    {{ text }}
                                </v-chip>
                                </template>
                            </v-file-input>
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
             files:null,
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
    },
    beforeMount(){
        /* this.form.type = 'Objective Type'; */
    }
    
}
</script>

<style>
 
</style>