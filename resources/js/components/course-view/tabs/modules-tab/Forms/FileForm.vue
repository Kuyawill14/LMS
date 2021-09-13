<template>
    <v-card>
        <vue-element-loading :active="isSaving" spinner="bar-fade-scale" />
        <form class="" @submit.prevent="addFile">
            <v-card-title>
                <span class="headline">Add File</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" class="py-0 my-0">
                            <v-text-field label="Title" required outlined="" v-model="subModuleForm.sub_module_name">
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" class="py-0 my-0">


                            <v-textarea outlined v-model="subModuleForm.description" label="Description" auto-grow>
                            </v-textarea>
                        </v-col>
                        <v-col cols="12" class="py-0 my-0">
                            <v-text-field label="Required time spent for Completion (minutes)" outlined type="number"
                                required v-model="subModuleForm.required_time">
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" class="py-0 my-0" v-if="oldFileInput == false">

                            <v-file-input show-size outlined label="Attach File" @change="onFileChange" ref="inputFile"
                                prepend-inner-icon="mdi-file" prepend-icon="">

                            </v-file-input>
                            <div style="margin-top: -20px;position: relative;z-index: 90999;">
                                <v-tooltip right="">
                                    <template v-slot:activator="{ on, attrs }">
                                        <span v-bind="attrs" v-on="on">
                                            <v-icon color="info">mdi-information-outline</v-icon>
                                            Supported files
                                        </span>
                                    </template>
                                    <span>
                                        Supported files:
                                        <ul>
                                            <li>.pdf</li>
                                            <li>.doc .docx</li>
                                            <li>.pptx .ppt</li>
                                            <li>File must be less than 10 mb</li>
                                        </ul>
                                    </span>
                                </v-tooltip>
                            </div>


                        </v-col>


                        <vue-element-loading :active="isDeleting" spinner="bar-fade-scale" />
                        <v-col cols="12 py-0 my-0" v-if="oldFileInput == true ">

                            <v-row align="center" justify="center"
                                style="height: 55px; border: 1px solid; border-radius: 4px; width: 100%; margin: auto;">
                                <v-col class="grow text-left py-0 pr-0 col-1">
                                    <v-icon>mdi-file</v-icon>
                                </v-col>

                                <v-col class="grow text-left py-0  pl-0">
                                    <div class="text-decoration-underline':''"> {{ oldFIle.file_name}}</div>
                                </v-col>
                                <v-col class="shrink d-flex py-0 shrink d-flex">
                                    <div class="black--text mt-1 mr-2"></div>

                                    <div class="py-0">

                                        <v-btn rounded small icon text @click="removeFile(submodule.id)">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>


                                    </div>

                                </v-col>

                            </v-row>
                            <div style="margin-top: 10px;position: relative;z-index: 90999;">
                                <v-tooltip right="">
                                    <template v-slot:activator="{ on, attrs }">
                                        <span v-bind="attrs" v-on="on">
                                            <v-icon color="info">mdi-information-outline</v-icon>
                                            Supported files
                                        </span>
                                    </template>
                                    <span>
                                        Supported files:
                                        <ul>
                                            <li>.pdf</li>
                                            <li>.doc .docx</li>
                                            <li>.pptx .ppt</li>
                                            <li>File must be less than 10 mb</li>
                                        </ul>
                                    </span>
                                </v-tooltip>
                            </div>
                        </v-col>


                        <v-col cols="12 py-0 my-0">

                            <v-progress-linear rounded :value="uploadPercentage" v-if="uploadPercentage !=0"
                                height="14px">
                                <span style="color:#fff">{{uploadPercentage+ '%'}} </span>
                            </v-progress-linear>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="$emit('CloseLecture')">
                    Close
                </v-btn>
                <v-btn color="primary" text @click="addFile()" :loading="sending" :disabled="sending">
                    Save
                </v-btn>
            </v-card-actions>
        </form>
    </v-card>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['moduleId', 'submodule', 'type_action'],
        data() {
            return {
                isSaving: false,
                isDeleting: false,
                oldFIle: {},
                oldFileInput: false,
                isRemove: false,
                uploadPercentage: 0,
                progress: false,
                sending: false,
                loading: '',
                addLink: false,
                showClasswork: false,
                subModuleForm: {

                },
                ext: '',
                file: null,
                allowedExt: ['pdf', 'pptx', 'ppt', 'xls', 'xlsx', 'doc', 'docx', 'mp4'],
                isInvalidFileType: false,
                isFileSize: null,
                main_module_id: null,
                type: ''


            }
        },
        computed: mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"]),
        methods: {
            getFileExt(filename) {

                var split = filename.split('.');
                return split[split.length - 1];

            },
            onFileChange(file) {
                console.log('selected file', file);
                if (file != null) {
                    this.ext = this.getFileExt(file.name);
                    console.log(this.ext);
                    this.isInvalidFileSize = false;
                    this.isInvalidFileType = false;
                    if (file.size >= 10000000) {
                        this.isInvalidFileSize = true;
                        this.$refs.inputFile.value = null;
                        this.toastError('File size must be less than 10MB')
                    }


                    if (this.ext == 'mp4') {
                        this.type = 'Video';

                    } else if (this.ext == 'pdf' || this.ext == 'docx' || this.ext == 'doc' || this.ext == 'pptx' ||
                        this.ext == 'ppt') {
                        this.type = 'Document';

                    } else {
                        this.isInvalidFileType = true;
                        this.toastError('Invalid File Type, (.pdf , .docx and .mp4 are allowed)')
                        this.$refs.inputFile.value = null;
                    }



                }



                this.file = file;


            },


            removeFile(id) {
                this.isDeleting = true;
                axios.put('/api/sub_module/file-remove/' + id, {
                    file: this.submodule.file_attachment
                }).then(res => {
                    this.oldFileInput = false;
                    console.log(res);
                    this.isDeleting = false;
                    this.isRemove = true;
                })

            },

            toastSuccess() {
                return this.$toasted.success("Lecture Successfully saved", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            addFile() {
                console.log(this.file);
                console.log('this.isInvalidFileType', this.isInvalidFileType);


                if (this.type_action == 'edit_file') {
                    if (this.subModuleForm.sub_module_name == '' || this.subModuleForm.description == '' || this
                        .subModuleForm.required_time == '') {
                        this.toastError('Please Complete all the fields');


                    } else if (this.file != null) {
                        var good = true;
                        if (this.isInvalidFileSize) {
                            this.toastError('File must be less than 10mb');
                            good = false;
                        }
                        if (this.isInvalidFileType == null || this.isInvalidFileType == true) {
                            this.toastError('something went wrong, refresh the page and try again');

                            good = false;
                        }

                        if (good) {
                            this.addUpdate();
                        }

                    } else {
                        if (this.isRemove) {
                            this.toastError('Please Complete all the fields');
                        } else {
                            this.addUpdate();
                        }

                    }
                } else {



                    if (this.subModuleForm.sub_module_name == '' || this.subModuleForm.description == '' || this
                        .subModuleForm.required_time == '' || this.file == null) {
                        this.toastError('Please Complete all the fields');


                    } else if (this.file != null) {
                        var good = true;
                        if (this.isInvalidFileSize) {
                            this.toastError('File must be less than 10mb');
                            good = false;
                        }
                        if (this.isInvalidFileType == null || this.isInvalidFileType == true) {
                            this.toastError('something went wrong, refresh the page and try again');

                            good = false;
                        }

                        if (good) {
                            this.addUpdate();
                        }
                    }

                }




            },
            detectExt(ext) {
                let type = '';
                if (ext == 'mp4') {
                    type = 'Video';

                }
                if (ext == 'pdf' || ext == 'docx' || ext == 'doc' || ext == 'pptx' || ext == 'ppt') {
                    type = 'Document';

                }
                return type;
            },

            addUpdate() {

                let tmp, edit_ext_type;
                this.main_module_id = this.moduleId;
                if (this.type_action == 'edit_file') {
                    tmp = this.oldFIle.file_name.split('.');
                    edit_ext_type = tmp[tmp.length - 1];
                    this.main_module_id = this.subModuleForm.main_module_id;
                    this.type = this.type == '' ? this.detectExt(edit_ext_type) : this.type;

                }


                this.isSaving = true;
                let fd = new FormData

                fd.append('file', this.file);
                fd.append('submodule_id', this.subModuleForm.id);
                fd.append('main_module_id', this.main_module_id);
                fd.append('description', this.subModuleForm.description);
                fd.append('required_time', this.subModuleForm.required_time);
                fd.append('type', this.type);
                fd.append('sub_module_name', this.subModuleForm.sub_module_name);
                this.sending = true;
                axios.post(`/api/sub_module/insert`, fd, {
                    onUploadProgress: (progressEvent) => {
                        const total = progressEvent.total;
                        const totalLength = progressEvent.lengthComputable ? total : null;
                        if (totalLength != null) {
                            this.uploadPercentage = Math.round((progressEvent.loaded * 100) /
                                totalLength);
                        }
                    }
                }).then((res) => {
                    this.isSaving = false;
                    this.$store.dispatch('fetchMainModule', this.$route.params.id)
                    this.subModuleForm.sub_module_name = '';
                    this.subModuleForm.description = '';

                    if (this.$refs.inputFile != null) {
                        this.$refs.inputFile.reset();
                    }


                    this.$emit('CloseLecture');
                    // this.toastSuccess();
                    setTimeout(() => {
                        this.sending = false;
                    }, 1000);

                })

            }


        },
        created() {
            if (this.type_action == 'edit_file') {

                this.submodule['required_time'] = this.submodule['required_time'] /60;
                this.subModuleForm = this.submodule;
                let newfile = new File([""], window.location.origin + '/' + this.submodule.file_attachment);;

                var name = newfile.name.split('/');
                this.oldFIle.file_name = name[name.length - 1];
                console.log(this.oldFIle.file_name);
                if (this.oldFIle.file_name == -1) {
                    this.oldFileInput = false;
                } else {
                    this.oldFileInput = true;
                }

            } else {
                this.subModuleForm = {};
            }






        }


    }

</script>
