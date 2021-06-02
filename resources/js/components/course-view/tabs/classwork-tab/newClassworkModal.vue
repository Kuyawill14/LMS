<template>
  
   <div>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                    <v-btn bottom color="primary" dark fab fixed right @click="dialog = !dialog"  v-bind="attrs" v-on="on">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
            </template>
            <v-card>
                <v-form ref="registerForm"  lazy-validation>
                    <v-card-title>
                        <span class="headline">Add Module</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Module Name*"  required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea clearable clear-icon="mdi-close-circle" label="Description"
                                        ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text>
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text>
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
            dialog: false,
             form:new Form({})
        }
    },
    methods:{
         SaveClasswork(){
            this.form.course_id = this.$route.params.id;
            axios.post('/api/classwork/insert', this.form)
            .then(res=>{
                if(res.status == 201){
                     this.form.reset()
                        $('#Classworkmodal').modal('hide');
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Classwork Successfully Created',
                            showConfirmButton: false,
                            timer: 1500
                    })
                    this.$emit('realodClassworks');
                }

            }).catch(e=>{
                console.log(e);
            })
           
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