
<template>
<div class="pa-1">
<!-- <v-container class="fill-height" v-if="isloading" style="height: 500px;">
  <v-row  align-content="center" justify="center">
            <v-col cols="12" class="text-center">
                <v-progress-circular
                :size="40"
                color="primary"
                indeterminate
                ></v-progress-circular>
            </v-col>
        </v-row>
</v-container> -->


 <v-overlay :value="isLeaving">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
</v-overlay>

  <v-container v-if="!isLeaving" pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12"  md="8" lg="9" xl="9">
                <vue-element-loading :active="isUpdating" spinner="bar-fade-scale" />
                <v-card elevation="1" outlined class="pa-5" >
                     <v-form ref="UpdateClassworkForm" v-model="valid" lazy-validation>
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
                                        <v-col v-if="Details.type == 'Subjective Type'" cols="12" :class="!isUploading ? 'b-0 pb-0 pt-0 mt-0': 'b-0 pb-0 pt-0 mt-0 d-none'">
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
                                    <v-col v-if="Details.type == 'Subjective Type'" :class="isUploading ? 'b-0 pb-0 pt-0 mt-0': 'b-0 pb-0 pt-0 mt-0 d-none'"  cols="12">
                                      <!--   <input
                                        ref="fileInput"
                                        class="d-none"
                                        type="file"
                                        @change="onFileChange"
                                        > -->

                                        <!-- <v-file-input
                                        ref="fileInput"
                                        show-size
                                      
                                        outlined
                                        prepend-inner-icon="mdi-paperclip"
                                        prepend-icon=""
                                        @change="onFileChange"

                                        > -->

                                        <v-file-input
                                            @change="onFileChange" 
                                            ref="fileInput"
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
                     </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
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
            isCheckingFile: false,
            isUploading: false,
            isLeaving: false,
        }
    },
    methods:{

         async UpdateClasswork(){
             this.isUpdatingSnackBar = true;
             this.isUpdating = true;
            //console.log(this.Details);
             let fd = new FormData;
             fd.append('attachment', this.Details.attachment);
             fd.append('attachment_name', this.Details.attachment_name);
             fd.append('attachment_size', this.Details.attachment_size);
             fd.append('course_id', this.Details.course_id);
             fd.append('duration', this.Details.duration);
             fd.append('instruction', this.Details.instruction);
             fd.append('id', this.Details.id);
             fd.append('module_id', this.Details.module_id);
             fd.append('points', this.Details.points);
             fd.append('title', this.Details.title);
             fd.append('type', this.Details.type);
             fd.append('user_id', this.Details.user_id);
             fd.append('OldName', this.Details.OldName);
             fd.append('file', this.file);
             
             
            
             await axios.post('/api/classwork/update', fd)
             .then(res=>{
                setTimeout(() => (
                    this.isUpdating = false,
                    this.toastSuccess("Classwork successfully updated")
                ), 1000);
             })
             .catch(e=>{

             })
             
         },
         TestUpload(){
            /*  this.$refs.fileInput.click(); */
             this.$refs.fileInput.$refs.input.click();
             this.isUploading = true;
         },
        onFileChange(element) {
            this.file = element[0];
            if(this.isCheckingFile == false){
                this.Details.OldName = this.classworkDetails.attachment_name;
            }
            this.isCheckingFile = true;
            this.Details.attachment_name = element[0].name;
             if(element[0].size > 1000000){
                let kbsize = element[0].size * 0.001;
                let mbsize = kbsize * 0.001;
                let finalSize = parseInt(mbsize);
                this.classworkDetails.attachment_size = finalSize+'mb';
            }
            else{
                let sizeFile = element[0].size * 0.001;
                let finalSize = parseInt(sizeFile);
                this.classworkDetails.attachment_size = finalSize+'kb';
            }
        },
    },
    beforeMount(){
        this.Details = this.classworkDetails;
    },
     beforeRouteLeave(to, from, next) {
        this.isLeaving = true;
        next();
    },

}
</script>

<style scoped>
  
        
</style>