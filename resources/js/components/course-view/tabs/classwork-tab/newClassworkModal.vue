<template>
  
    <v-card class="ma-0 pa-0">
        <vue-element-loading :active="loading" spinner="bar-fade-scale" />
        <v-form ref="NewClassworkForm" v-model="valid" lazy-validation>
            <v-card-title>
                <v-btn large icon @click="$emit('CloseDialog')" :disabled="loading">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <span class="h6">New Classwork</span>
            </v-card-title>
            <v-card-text>
                <v-container mb-0 pb-0 >
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
                        <v-col class="mb-8 pb-0 pt-0 mt-0" cols="12">
                           <!--  <v-textarea
                                outlined
                                :rules="FieldRules"
                                v-model="form.instruction"
                                label="Instruction"
                                auto-grow
                                >
                            </v-textarea> -->
                            <editor class="intruction" v-model="form.instruction" placeholder="Instruction" theme="snow" :options="options"  ></editor>
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
                            <v-text-field
                                :rules="FieldRules"
                                v-if="form.type == 'Subjective Type'"
                                outlined
                                min="0"
                                class="mb-0 pb-0"
                                v-model="form.points"
                                label="Points" 
                                type="number">
                                </v-text-field>
                        </v-col>

                          <v-col  class="mb-0 pb-0 pt-0 mt-0" cols="12">
                              <v-btn color="primary" class="mb-2" @click="$refs.inputFile.$refs.input.click()" text rounded>
                                  <v-icon left>
                                      mdi-attachment
                                  </v-icon>
                                  Attach file
                              </v-btn>
                             <v-file-input
                                multiple
                                @change="onFileChange" accept=".xlsx,.xls,image/*,.doc,.docx,.ppt, .pptx,.txt,.pdf,text/plain" ref="inputFile"
                                class="d-none">
                            </v-file-input>

                            <v-list dense class="ma-0 pa-0">
                                <v-list-item v-for="(item, index) in file_name" :key="index" class="ma-0 pa-0">
                                    <v-list-item-avatar >
                                            <v-icon large
                                             :color="item.extension == 'pdf' ? 'red' : item.extension == 'docx'? 'blue': item.extension == 'link' ? 'green':
                                          item.extension == 'jpg' ||  item.extension == 'jpeg' || item.extension == 'gif' ||  item.extension == 'svg' || item.extension == 'png' ||  item.extension == 'bmp' ? 'info': ''"
                                            >
                                                  {{item.extension == 'pdf' ? 'mdi-file-pdf': item.extension == 'txt' ? 'mdi-file-pdf' :  item.extension == 'docx'? 'mdi-file-word': item.extension == 'link'? 'mdi-file-link': 
                                          item.extension == 'jpg' ||  item.extension == 'jpeg' || item.extension == 'gif' ||  item.extension == 'svg' || item.extension == 'png' ||  item.extension == 'bmp' ? 'mdi-image' :''}}
                                            </v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>{{item.name}}</v-list-item-title>
                                         <v-list-item-subtitle> 
                                             <!-- <v-progress-linear v-if="uploadIndex == index && uploadPercentage != 100"  rounded :value="uploadPercentage"></v-progress-linear> -->
                                              <v-progress-linear
                                                v-if="uploadIndex == index"
                                                    color="primary"
                                                    indeterminate
                                                    rounded
                                                    height="5">
                                            </v-progress-linear>
                                            </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn icon @click="RemoveFile(index)">
                                            <v-icon>
                                            mdi-close
                                            </v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions class="pl-5 pr-5">
                <!-- <v-spacer></v-spacer>
                <v-btn  text @click="$emit('CloseDialog')" :disabled="loading">
                    Close
                </v-btn> -->
               
                <v-btn block="" :disabled="form.type == 'Subjective Type' ? 
                (form.title == null || form.title == '') || (form.type == null || form.type == '') || (form.instruction == null || form.instruction == '') || (form.points == null || form.points == '') : 
                (form.title == null || form.title == '') || (form.type == null || form.type == '') || (form.instruction == null || form.instruction == '') || (form.duration == null || form.duration == '')" color="primary" rounded @click="validate()" :loading="loading">
                    Save
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
  

   
</template>

<script>
import moment from 'moment/src/moment';
import Form from 'vform'
export default {
    data(){
        return{
            valid:false,
            isTimer: false,
            file:[],
            fileSize: [],
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
            file_name: [],
            counter: 0,
            tmpName:[],
            uploadPercentage: 0,
            uploadIndex: null,
            options: {
                placeholder: 'type here ...',
                blur: true,
                editorData:null,
                modules: {
                     toolbar: {
                            container:[
                               ['bold', 'italic', 'underline'],
                                [{ 'header': [1, 2, 3, 4, 5, false] }],
                                [{ 'color': [] }],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                ['link', 'image', 'video'],
                            ],
                           /*  handlers: {
                                image: this.imageHandler
                            } */
                        },
                    syntax: {
                        highlight: text => hljs.highlightAuto(text).value
                    },
                    
                }
            },
            
        }
    },
    computed:{
         extension() {
            return (this.file[this.counter]) ? this.file[this.counter].name.split('.').pop() : '';
        },
    },
    methods:{
        RemoveFile(index){
            this.file_name.splice(index,1);
            this.file.splice(index,1);
            //console.log(this.file);

        },
         validate() {
            this.loading = !this.loading;
            if (this.$refs.NewClassworkForm.validate()) {
                this.SaveClasswork(); 
            }
            else{
                setTimeout(() => {
                   this.loading = !this.loading;
                }, 1000);
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
            for (let index = 0; index < this.file.length; index++) {
                fd.append('file['+index+']', this.file[index]); 
                fd.append('attachment_name['+index+']',  this.file_name[index].name);
                fd.append('attachment_size['+index+']',  this.file_name[index].size);
                fd.append('attachment_extension['+index+']',  this.file_name[index].extesion);
            } 
             //this.form.course_id = this.$route.params.id;
            this.$store.dispatch('createClasswork', fd)
            .then(res=>{
              if(res.status == 201){
                this.toastSuccess();
                if(this.form.type == 'Objective Type'){
                    this.$router.push({name: 'add-question',params: {id: res.data.course_id},query: {clwk: res.data.id}})
                }
                else if(this.form.type == 'Subjective Type'){
                    this.$router.push({name: 'clwk',params: {id: res.data.course_id},query: {clwk: res.data.id}})
                }
                
                //this.$refs.NewClassworkForm.reset()
                //this.loading = !this.loading;
                this.$emit('realodClassworks');
              }
               

              
            })
        },
        addFile(){
           
            let fd = new FormData;
            fd.append('type', "Classwork");
            fd.append('file', this.file[this.counter]);
                axios.post('/api/classwork/newAttachment',fd,
            {
            onUploadProgress:(progressEvent)=>{
                const total = progressEvent.total;
                const totalLength = progressEvent.lengthComputable ? total : null;
                if(totalLength != null){
                    this.uploadPercentage = Math.round((progressEvent.loaded*100)/totalLength);
                }
                }
            })
            .then((res)=>{
                this.counter++;
            })
        },

        onFileChange(element) {
                 this.uploadIndex = this.counter;
                //this.file[this.counter] = element[0];
                this.file.push(element[0]);
                //this.tmpName[this.counter] = element[0].name;
                if(element[0].size > 1000000){
                    let kbsize = element[0].size * 0.001;
                    let mbsize = kbsize * 0.001;
                    let finalSize = parseInt(mbsize);
                    this.fileSize[this.counter] = finalSize+'mb';
                }
                else{
                    let sizeFile = element[0].size * 0.001;
                    let finalSize = parseInt(sizeFile);
                     this.fileSize[this.counter] =finalSize+'kb';
                }

        
                this.file_name.push({
                    name: element[0].name,
                    size: this.fileSize[this.counter],
                    extesion: this.extension
                });
                this.addFile();
                //this.counter++;
             
               

                //this.ext = this.getFileExt(file.name);

               
                //this.file = file;


            },
    },
    beforeMount(){
        /* this.form.type = 'Objective Type'; */
    }
    
}
</script>

<style  >
    iframe{
        width: 100% !important;
        height: 20rem !important;
    }
    .intruction .ql-editor img{

        max-height: 25rem !important;
    }
    .intruction ql-container{
        max-height: 70rem;
    }

    div.ql-tooltip{
        left: 0px !important;
        top: 28px !important;
    }
        
</style>