
<template>
<v-app>
  
 <!--  <v-snackbar
    v-model="isUpdatingSnackBar"

      :timeout="4000"
      :value="true"
      absolute
      centered

     text
     color="success"
      top
    >
    <v-icon left color="success">mdi-checkbox-marked-circle</v-icon>
      Classwork successfully updated.
    </v-snackbar> -->

<v-container class="fill-height" v-if="isloading" style="height: 500px;">
    <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
            Loading
        </v-col>
        <v-col cols="6">
            <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
    </v-row>
</v-container>
  <v-container v-if="!isloading" pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="12" md="12">
                <v-card  class="elevation-5 pa-5" style="border-top:5px solid #EF6C00">
                     <v-form ref="UpdateClassworkForm" v-model="valid" lazy-validation>
                    <v-window>
                        <v-window-item >
                            
                                <v-row>
                                    
                                    <v-col cols="12" class="mt-2"> 
                                        <v-select
                                        outlined
                                        :rules="FieldRules"
                                        v-model="Details.type"
                                        :items="['Objective Type', 'Subjective Type']"
                                        label="Type"
                                        ></v-select>
                                        </v-col>
                                        <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12">
                                            <v-text-field
                                            outlined
                                            :rules="FieldRules"
                                            v-model="Details.title"
                                            label="Title" type="text"  required>
                                            </v-text-field>
                                        </v-col>
                                        <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12">
                                            <v-textarea
                                                :rules="FieldRules"
                                                outlined
                                                v-model="Details.instruction"
                                                label="Instruction"
                                                auto-grow
                                                >
                                            </v-textarea>
                                        </v-col >
                                        <v-col v-if="Details.type == 'Objective Type'" class="mb-0 pb-0 pt-0 mt-0"  cols="12">
                                    
                                            <v-text-field
                                            v-if="Details.type == 'Objective Type'"
                                            :rules="FieldRules"
                                            class="mb-0 pb-0 pt-0 mt-0"
                                            append-icon="mdi-timer"
                                            outlined
                                            v-model="Details.duration"
                                            hint="mins" label="Time Limit" 
                                            type="number">
                                            </v-text-field>
                                        </v-col>
                                         <v-col v-if="Details.type == 'Subjective Type'" cols="12" class="mb-0 pb-0 pt-0 mt-0">
                                            <v-text-field
                                                @click="TestUpload"
                                            prepend-inner-icon="mdi-paperclip"
                                            v-if="Details.type == 'Subjective Type'"
                                            :rules="FieldRules"
                                            class="mb-0 pb-0 pt-0 mt-0"
                                            label="File input"
                                            show-size
                                            outlined
                                            multiple
                                            chips
                                            v-model="Details.attachment_name">
                                        </v-text-field>
                                        </v-col>
                                        <v-col v-if="Details.type == 'Subjective Type'" class="mb-0 pb-0 pt-0 mt-0 d-none"  cols="12">
                                            <input
                                            ref="fileInput"
                                            class="d-none"
                                            type="file"
                                            @change="onFileChange"
                                            >
                                        </v-col>
                                        <v-col v-if="Details.type == 'Subjective Type'" class="mb-0 pb-0 pt-0 mt-0"  cols="12">
                                            <v-text-field
                                            :rules="FieldRules"
                                            v-if="Details.type == 'Subjective Type'"
                                            outlined
                                            min="0"
                                            v-model="Details.points"
                                            label="Points" 
                                            type="number">
                                            </v-text-field>
                                        </v-col>

                                         <v-col  cols="12 text-left">
                                    
                                              <v-btn
                                                rounded
                                                :loading="isUpdating"
                                                color="primary"
                                                class="ma-2 white--text"
                                                @click="UpdateClasswork()"
                                                >
                                                Update
                                                <v-icon right dark>
                                                    mdi-update
                                                </v-icon>
                                            </v-btn>
                                        </v-col>

                                        
                                </v-row>
                        </v-window-item>
                    </v-window>
                     </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>
<script>
export default {
    props:['classworkDetails'],
    data(){
        return{
            valid:false,
            Details:{},
            isUpdating:false,
            isUpdatingSnackBar:false,
            isloading: true,
            file:null,
            FieldRules: [
                v => !!v || 'Field is required',
            ],
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
             this.isUpdatingSnackBar = true;
             this.isUpdating = true;
             axios.put('/api/classwork/update/'+this.Details.id, this.Details)
             .then(res=>{
                 this.toastSuccess();
                 this.isUpdating = false;
                
                  /*   setTimeout(() => {
                            this.isGetting = false;
                        this.classLength = this.allClass.length;
                    }, 1000); */
             })
             .catch(e=>{

             })
             
         },
         TestUpload(){
             this.$refs.fileInput.click();
         },
        onFileChange(element) {
            this.file = element.target.files[0];
            this.Details.attachment_name = element.target.files[0].name;
        },
    },
    beforeMount(){
        this.Details = this.classworkDetails;
        this.isloading = !this.isloading;
    }
}
</script>

<style scoped>
  
        
</style>