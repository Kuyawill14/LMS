<template>
   <div>
        <v-card>
            <v-form ref="registerForm" lazy-validation>
                <v-card-title>
                    <span class="headline">Classwork Details</span>
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
                                        <v-text-field
                                        v-model="due_date"   
                                        ref="Due_date"
                                        label="Due Date" type="datetime-local"  required>
                                        </v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-text-field
                                            v-model="form.duration"
                                            hint="mins" label="Duration" type="number"  required>
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="$emit('closeEditModal')" :disabled="loading">
                        Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="UpdateClasswork()" :disabled="loading">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
   
</template>

<script>
import moment from 'moment';
import Form from 'vform'
import axios from 'axios';
export default {
    props:['dialog','editData'],
    data(){
        return{
             loading: false,
             due_date:null,
             form:new Form({})
        }
    },
    methods:{
         toastSuccess() {
                return this.$toasted.success("Classwork successfully updated", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 3000
                });
            },
         async UpdateClasswork(){
             console.log(this.$refs.Due_date.value)
             this.form.due_date = this.$refs.Due_date.value;
             axios.put('/api/classwork/update/'+this.form.id, this.form)
             .then(res=>{
                 this.toastSuccess();
                 this.$emit('closeEditModal');

             })
           /*  this.form.course_id = this.$route.params.id;
            axios.post('/api/classwork/insert', this.form)
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

          format_date(value){
                if (value) {
                return moment(String(value)).format("YYYY-MM-DDThh:mm")
                }
            },

        
        
    },
    mounted(){
        this.due_date = this.format_date(this.editData.due_date);
        this.form = this.editData;
        console.log(this.editData);
        
    }
    
}
</script>
<style scoped>
    input, select{
        border-left: none;
        border-right: none;
        border-top: none;
    }
  
    
</style>