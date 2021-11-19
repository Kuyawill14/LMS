<template>
    <div class="pa-1">
    <div transition="slide-y-reverse-transition">
        <v-app-bar elevation="5" 
        v-if="!$vuetify.breakpoint.mdAndUp"
            app :dense="$vuetify.breakpoint.mdAndUp"  color="primary"  >
            <v-btn dark rounded icon text 
                v-if="!$vuetify.breakpoint.mdAndUp"
                @click="$router.push({name: 'classwork'})" >
                <v-icon >mdi-arrow-left-thick</v-icon>
            </v-btn>
            <v-divider   vertical></v-divider>
        </v-app-bar>
    </div>
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
      <!--       <v-progress-circular indeterminate size="64"></v-progress-circular>
             <v-container v-if="isloading" style="height: 670px;z-index:2"> -->
                <vue-element-loading :active="isLeaving" 
                text="Loading"
                duration="0.7"
                :textStyle="{fontSize: '20px'}"
                spinner="line-scale" color="#EF6C00"  size="60" />
<!--         </v-container> -->
        </v-overlay>


        <v-dialog v-model="removeDialog" persistent max-width="370">
            <removeAttachment v-on:toggleCancelDialog="removeDialog = false, isRemoving = false"
                v-on:toggleconfirm="RemoveFile(removeIndex)"></removeAttachment>
        </v-dialog>




        <v-container v-if="!isLeaving" pa-0 ma-0 class="pa-0 pa-0" fluid>

            <v-row align="center" justify="center">
                <v-col cols="12" md="8" lg="9" xl="9">
                    <vue-element-loading :active="isUpdating" spinner="bar-fade-scale" />
                    <v-card elevation="1" outlined class="pa-5">
                        <v-form ref="UpdateClassworkForm" v-model="valid" lazy-validation>
                            <v-row>

                                <v-col cols="12" class="mt-2">
                                    <v-select outlined :rules="FieldRules" v-model="Details.type"
                                        :items="['Objective Type', 'Subjective Type']" label="Type"></v-select>
                                </v-col>
                                <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12">
                                    <v-text-field outlined :rules="FieldRules" v-model="Details.title" label="Title"
                                        type="text" required>
                                    </v-text-field>
                                </v-col>
                                <v-col class="mb-8 pb-0 pt-0 mt-0" cols="12">
                                 <!--    <v-textarea :rules="FieldRules" outlined v-model="Details.instruction"
                                        label="Instruction" auto-grow>
                                    </v-textarea> -->

                                    <editor class="classwork_editor" v-model="Details.instruction" placeholder="Instruction" theme="snow"></editor>
                                </v-col>
                                <v-col v-if="Details.type == 'Objective Type'" class="mb-0 pb-0 pt-0 mt-0" cols="12">

                                    <v-text-field v-if="Details.type == 'Objective Type'" :rules="FieldRules"
                                        class="mb-0 pb-0 pt-0 mt-0" append-icon="mdi-timer" outlined
                                        v-model="Details.duration" hint="mins" label="Time Limit" type="number">
                                    </v-text-field>
                                </v-col>

                                <v-col v-if="Details.type == 'Subjective Type'" class="mb-0 pb-2 pt-0 mt-0" cols="12">

                                <v-text-field :rules="FieldRules" v-if="Details.type == 'Subjective Type'"
                                    outlined min="0" v-model="Details.points" label="Points" type="number">
                                </v-text-field>
                            </v-col>
                                
                                <v-col v-if="Details.type == 'Subjective Type'" class="mb-0 pb-2 pt-0 mt-0" cols="12">

                                    <v-row>
                                        <v-col class="text-left">
                                              <div class="text-h5">Rubrics</div>
                                        </v-col>
                                        <v-col class="text-right">
                                            
                                        <v-btn color="primary" rounded dark @click="rubricsDialog = true">
                                            <v-icon > mdi-plus </v-icon>
                                            Add
                                        </v-btn>
                                        </v-col>
                                    </v-row>
                                
                                    <v-list>
                                        <v-list-item v-for="(item, index) in Details.rubrics" :key="index">
                                            <v-list-item-avatar tile>
                                                <div class="font-weight-bold text-h6">
                                                    {{item.points}}%
                                                </div>
                                                
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="font-weight-medium">{{item.criteria_name}}</v-list-item-title>
                                                <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>

                                    
                                  <!--   <v-row justify="center" align="center">
                                        <v-col cols="11">

                                            <v-text-field :rules="FieldRules" v-if="Details.type == 'Subjective Type'"
                                                outlined min="0" v-model="Details.points" label="Points" type="number">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="1" clss="pl-0" style="margin-top: -30px;text-align:right">

                                            <v-btn color="primary" x-large dark @click="rubricsDialog = true">
                                                <v-icon > mdi-plus </v-icon>
                                              
                                            </v-btn>
                                        </v-col>
                                    </v-row> -->
                                </v-col>


                                <v-col :class="isUploading ? 'b-0 pb-0 pt-0 mt-0': 'b-0 pb-0 pt-0 mt-0 '" cols="12">

                                    <!-- <v-file-input
                                            @change="onFileChange" 
                                            ref="fileInput"
                                            label="File input"
                                            outlined
                                            show-size
                                            counter
                                            multiple
                                            prepend-icon=""
                                            prepend-inner-icon="mdi-paperclip">
                                        </v-file-input> -->

                                    <v-btn color="primary" class="mb-2" @click="$refs.inputFile.$refs.input.click()"
                                        text rounded>
                                        <v-icon left>
                                            mdi-attachment
                                        </v-icon>
                                        Attach file
                                    </v-btn>
                                    <v-file-input multiple @change="onFileChange" accept=".xlsx,.xls,image/*,.doc,.docx,.ppt, .pptx,.txt,.pdf,text/plain" ref="inputFile" class="d-none">
                                    </v-file-input>

                                    <v-list  class="ma-0 pa-0">
                                        <v-list-item v-for="(item, i) in Details.attachment" :key="i" class="ma-0 pa-0">
                                            <v-list-item-avatar>
                                                <v-icon large :color="CheckFileIconColor(item.extension)">
                                                     {{CheckFileIcon(item.extension)}}
                                                </v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-hover v-slot="{ hover }">
                                                    <v-list-item-title :class="hover ? 'blue--text' : ''"
                                                        style="cursor:pointer" @click="DownLoadFile(item.attachment)">
                                                        {{item.name}}</v-list-item-title>
                                                </v-hover>
                                                <v-list-item-subtitle>
                                                   <!--  <v-progress-linear
                                                        v-if="uploadIndex == i && uploadPercentage != 100" rounded
                                                        :value="uploadPercentage"></v-progress-linear> -->
                                                         <v-progress-linear
                                                            v-if="uploadIndex == i"
                                                              color="primary"
                                                              indeterminate
                                                              rounded
                                                              height="5">
                                                      </v-progress-linear>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                
                                                <v-menu offset-y>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn
                                                        icon
                                                
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        >
                                                        <v-icon>mdi-dots-vertical</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-list nav>
                                                        <v-list-item @click="removeDialog = true, removeIndex = i,isRemoving = true">
                                                            <v-list-item-title>
                                                               <!--  <v-btn text 
                                                                    :loading="removeIndex == i && isRemoving"
                                                                    @click="removeDialog = true, removeIndex = i,isRemoving = true"> -->
                                                                    <v-icon>
                                                                        mdi-close
                                                                    </v-icon>
                                                                    Delete
                                                           <!--      </v-btn> -->
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                         <v-list-item  @click="EditDocument(item.attachment)">
                                                            <v-list-item-title>
                                                               <!--  <v-btn text 
                                                                    :loading="removeIndex == i && isRemoving"
                                                                    @click="removeDialog = true, removeIndex = i,isRemoving = true"> -->
                                                                    <v-icon>
                                                                        mdi-pencil-outline
                                                                    </v-icon>
                                                                    Edit
                                                              <!--   </v-btn> -->
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                    </v-list>
                                                    </v-menu>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                </v-col>

                                <v-col cols="12 text-left">

                                    <v-btn rounded :loading="isUpdating" color="primary" class="ma-2 white--text"
                                        @click="UpdateClasswork()">
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
            <v-row justify="center">
                <v-dialog v-model="rubricsDialog" fullscreen hide-overlay transition="dialog-bottom-transition">

                    <rubrics :rubrics="Details.rubrics" v-on:CLoseRubricModal="rubricsDialog = false" v-on:CriteriaSave="rubricsDialog = false" 
                    :total_points="Details.points" :title="Details.title"/>
                </v-dialog>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    const removeAttachment = () => import('./dialogs/removeAttachment')
    const rubrics = () => import('./rubrics')
    export default {
        props: ['classworkDetails'],
        components: {
            removeAttachment,
            rubrics
        },
        data() {
            return {
                valid: false,
                Details: {},
                isUpdating: false,
                isUpdatingSnackBar: false,
                isloading: true,
                file: [],
                FieldRules: [
                    v => !!v || 'Field is required',
                ],
                isCheckingFile: false,
                isUploading: false,
                isLeaving: false,
                file_name: [],
                counter: 0,
                removeDialog: null,
                removeIndex: null,
                uploadPercentage: 0,
                uploadIndex: null,
                rubricsDialog: false,
                isRemoving: false,
            }
        },
        computed: {
            extension() {
                return (this.file[this.counter]) ? this.file[this.counter].name.split('.').pop() : '';
            }
        },
        methods: {
               CheckFileIcon(ext){
                    if(ext == 'jpg' ||  ext == 'jpeg' || ext == 'gif' ||  ext == 'svg' || ext == 'png' ||  ext == 'bmp'){
                    return 'mdi-image';
                    }
                    else if(ext == 'pdf'){
                    return 'mdi-file-pdf';
                    }
                    else if(ext == 'txt' ){
                    return 'mdi-note-text-outline';
                    }
                    else if(ext == 'docx' || ext == 'doc'){
                    return 'mdi-file-word';
                    }
                    else if(ext == 'link' ){
                    return 'mdi-file-link';
                    }
            },
            CheckFileIconColor(ext){
                if(ext == 'jpg' ||  ext == 'jpeg' || ext == 'gif' ||  ext == 'svg' || ext == 'png' ||  ext == 'bmp'){
                    return 'info';
                    }
                    else if(ext == 'pdf'){
                    return 'red';
                    }
                    else if(ext == 'txt' ){
                    return 'primary';
                    }
                    else if(ext == 'docx' || ext == 'doc'){
                    return 'blue';
                    }
                    else if(ext == 'link' ){
                    return 'green';
                    }
                    else{
                    return 'primary';
                    }

                },
            async UpdateClasswork(rubrics) {
                this.isUpdatingSnackBar = true;
                this.isUpdating = true;
                ////console.log(this.Details);
                let fd = new FormData;
                fd.append('course_id', this.Details.course_id);
                fd.append('duration', this.Details.duration);
                fd.append('instruction', this.Details.instruction);
                fd.append('id', this.Details.id);
                fd.append('module_id', this.Details.module_id);
                fd.append('points', this.Details.points);
                fd.append('title', this.Details.title);
                fd.append('type', this.Details.type);
                /*  for (let index = 0; index < this.file.length; index++) {
                    fd.append('file['+index+']', this.file[index]); 
                    fd.append('attachment_name['+index+']',  this.file_name[index].name);
                    fd.append('attachment_size['+index+']',  this.file_name[index].size);
                    fd.append('attachment_extension['+index+']',  this.file_name[index].extension);
                }  */

                await axios.post('/api/classwork/update', fd)
                    .then(res => {
                        //this.rubricsDialog= rubrics ? true : false;
                        this.isUpdating = false,
                        this.toastSuccess("Classwork successfully updated")
                    })
                    .catch(e => {

                    })

            },
            TestUpload() {
                /*  this.$refs.fileInput.click(); */
                this.$refs.fileInput.$refs.input.click();
                this.isUploading = true;
            },
            onFileChange(element) {
                this.file[this.counter] = element[0];
                let size;
                if (element[0].size > 1000000) {
                    let kbsize = element[0].size * 0.001;
                    let mbsize = kbsize * 0.001;
                    let finalSize = parseInt(mbsize);
                    size = finalSize + 'mb';
                    //this.classworkDetails.attachment_size = finalSize+'mb';
                } else {
                    let sizeFile = element[0].size * 0.001;
                    let finalSize = parseInt(sizeFile);
                    size = finalSize + 'kb';
                    //this.classworkDetails.attachment_size = finalSize+'kb';
                }

                this.file_name.push({
                    name: element[0].name,
                    size: size,
                    extension: this.extension
                });

                this.Details.attachment.push({
                    name: element[0].name,
                    size: size,
                    attachment: null,
                    extension: this.extension,
                })
                
                this.addFile();

            },
            DownLoadFile(file) {
                window.open(file, '_blank');
            },
            EditDocument(link){
                let path = "https://docs.google.com/gview?url="+link+"&embedded=true"
          
                 window.open(path, '_blank');
            },
            addFile() {
                //console.log(this.Details.attachment.length);
                this.uploadIndex = this.Details.attachment.length - 1;
                let fd = new FormData;
                fd.append('file', this.file[this.counter]);
                fd.append('id', this.Details.id);
                fd.append('name', this.file_name[this.counter].name);
                fd.append('size', this.file_name[this.counter].size);
                fd.append('extension', this.file_name[this.counter].extension);
                axios.post('/api/classwork/addAttachment', fd, {
                        onUploadProgress: (progressEvent) => {
                            const total = progressEvent.total;
                            const totalLength = progressEvent.lengthComputable ? total : null;
                            if (totalLength != null) {
                                this.uploadPercentage = Math.round((progressEvent.loaded * 100) / totalLength);
                            }
                        }
                    })
                    .then((res) => {
                        this.counter++;
                        this.uploadIndex = null;
                    })
            },
            RemoveFile(index) {
                if (this.Details.attachment[index].attachment != null) {
                    axios.put('/api/classwork/deleteAttachment/' + this.Details.id, {
                            attachment: this.Details.attachment[index].attachment
                        })
                        .then((res) => {
                            if (res.data.success == true) {
                                this.Details.attachment.splice(index, 1);
                            }
                        })
                } else {
                    this.Details.attachment.splice(index, 1);
                }
                this.removeDialog = false;
                 this.isRemoving = false;
            }
        },
        beforeMount() {
            this.Details = this.classworkDetails;
        },
        beforeRouteLeave(to, from, next) {
            this.isLeaving = true;
            next();
        },

    }

</script>

<style >
    .classwork_editor iframe{
        width: 100% !important;
        height: 20rem !important;
    }
    .classwork_editor .ql-editor img{

        max-height: 25rem !important;
        max-width: 100% !important;
    }
    .classwork_editor .ql-container{
        max-height: 70rem;
    }

</style>
