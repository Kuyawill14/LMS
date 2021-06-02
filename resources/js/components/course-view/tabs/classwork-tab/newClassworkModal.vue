<template>
  
   <div>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                    <v-btn bottom color="primary" dark fab fixed right @click="dialog = !dialog"  v-bind="attrs" v-on="on">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
            </template>
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
                                            <v-text-field 
                                            v-model="form.due_date"
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
                        <v-btn color="blue darken-1" text @click="dialog = false" :disabled="loading">
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="SaveClasswork()" :disabled="loading">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
   
</template>

<script>
import Form from 'vform'
export default {
    data(){
        return{
             loading: false,
            dialog: false,
             form:new Form({})
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
<style scoped>
    input, select{
        border-left: none;
        border-right: none;
        border-top: none;
    }
  
    
</style>