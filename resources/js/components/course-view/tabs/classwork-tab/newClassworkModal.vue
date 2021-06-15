<template>
  
    <v-card ><!-- style="border-top:3px solid #EF6C00" -->
        <v-form ref="NewClassworkForm" v-model="valid" lazy-validation>
            <v-card-title>
                <span class="headline">Add Classwork</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12"> 
                            <v-select
                            outlined
                            :rules="FieldRules"
                            v-model="form.type"
                            :items="['Objective Type', 'Subjective Type']"
                            label="Type"
                            ></v-select>
                        </v-col>

                      
                        <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12">
                             <v-textarea
                                rows="1"
                                outlined
                                :rules="FieldRules"
                                v-model="form.title"
                                label="Title"
                                auto-grow
                                >
                            </v-textarea>
                        </v-col>
                        <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12">
                            <v-textarea
                                outlined
                                :rules="FieldRules"
                                v-model="form.instruction"
                                label="Instruction"
                                auto-grow
                                >
                            </v-textarea>
                        </v-col>

                        <v-col v-if="form.type == 'Objective Type'" class="mb-0 pb-0 pt-0 mt-0" cols="12">
                            <v-text-field
                            :rules="FieldRules"
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
               
                                @change="onFileChange" ref="inputFile"
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


                          <v-col v-if="form.type == 'Subjective Type'" class="mb-0 pb-0 pt-0 mt-0" cols="12">
                            <v-text-field
                                :rules="FieldRules"
                                v-if="form.type == 'Subjective Type'"
                                outlined
                                min="0"
                                v-model="form.points"
                                label="Points" 
                                type="number">
                                </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$emit('CloseDialog')" :disabled="loading">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="validate()" :disabled="loading">
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
            valid:false,
            isTimer: false,
            file:null,
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
            },
            FieldRules: [
                v => !!v || 'Field is required',
            ],
          
        }
    },
    methods:{
         validate() {
            if (this.$refs.NewClassworkForm.validate()) {
                this.SaveClasswork(); 
            }
        },
         toastSuccess() {
                return this.$toasted.success("Classwork Successfully added", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 3000
                });
            },
         async SaveClasswork(){
            let fd = new FormData;
            fd.append('course_id', this.$route.params.id);
            fd.append('type', this.form.type);
            fd.append('title', this.form.title);
            fd.append('instruction', this.form.instruction);
            if(this.form.type == 'Objective Type'){
                this.form.points = '';
            }
            else if(this.form.type == 'Subjective Type'){
                this.form.duration = '';
            }
            fd.append('points', this.form.points);
            fd.append('duration', this.form.duration);
            fd.append('attachment_name',  this.file_name);
            //fd.append('attachment', this.file);
            fd.append('file', this.file);
            
             
            

             //this.form.course_id = this.$route.params.id;
            this.$store.dispatch('createClasswork', fd)
            .then(res=>{
                if(res == 201){
                    this.toastSuccess();
                    this.form.reset()
                    this.dialog = false;
                    this.$emit('realodClassworks');
                }
            })
        },

        onFileChange(element) {
                this.file = element[0];
                this.file_name = element[0].name;
                //this.ext = this.getFileExt(file.name);

               
                //this.file = file;


            },
    },
    beforeMount(){
        /* this.form.type = 'Objective Type'; */
    }
    
}
</script>

<style>
 
</style>