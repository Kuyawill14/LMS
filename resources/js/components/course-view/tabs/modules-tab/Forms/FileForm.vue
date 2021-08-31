<template>
    <v-card>
        <form class="" @submit.prevent="addFile">
            <v-card-title>
                <span class="headline">Add File</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12 pb-0">
                            <v-text-field label="Title" required v-model="subModuleForm.sub_module_name">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12 pb-0">
                            <editor style="outline:none;" placeholder="Description" v-model="subModuleForm.description"
                                theme="snow" :options="options"></editor>
                        </v-col>
                        <v-col cols="12 pb-0">
                            <v-text-field label="Required time spent for Completion (minutes)" type="number" required
                                v-model="subModuleForm.required_time">
                            </v-text-field>
                        </v-col>
                        <v-file-input show-size label="Attach File" @change="onFileChange" ref="inputFile">
                        </v-file-input>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$emit('CloseLecture')" >
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="addFile()" :loading="sending">
                    Add
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
        props: ['moduleId'],
        data() {
            return {
                sending: false,
                loading: '',
                addLink: false,
                showClasswork: false,
                subModuleForm: {},
                ext: '',
                file: null,
                allowedExt: ['pdf', 'pptx', 'ppt', 'xls', 'xlsx', 'doc', 'docx', 'mp4'],
                options: {
                    modules: {
                        'toolbar': [
                            ['bold', 'italic', 'underline', 'strike'],
                            [{
                                'header': [1, 2, 3, 4, 5, false]
                            }],
                            [{
                                'align': []
                            }],
                            [{
                                'color': []
                            }],
                            [{
                                'list': 'ordered'
                            }, {
                                'list': 'bullet'
                            }],
                            ['link', 'image', 'video'],
                        ],
                    },
                }
            }
        },
        computed: mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"]),
        methods: {
            getFileExt(filename) {

                var split = filename.split('.');
                return split[split.length - 1];

            },
            onFileChange(file) {
                //console.log('selected file', file.name);

                this.ext = this.getFileExt(file.name);

                this.allowedExt.forEach(_ext => {
                    if (_ext != this.ext) {
                        //console.log('Invalid File type');
                    } else {

                        if (this.ext == 'mp4') {
                            this.type = 'Video';

                        } else {
                            this.type = 'Document';
                            if (this.ext != 'pdf') {
                                alert('Invalid File Type, Convert file document to pdf!');
                            }
                        }

                    }
                });
                this.file = file;


            },
            toastSuccess() {
                return this.$toasted.success("Lecture Successfully Created", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            addFile() {
                let fd = new FormData;

                fd.append('file', this.file);
                fd.append('main_module_id', this.moduleId);
                fd.append('description', this.subModuleForm.description);
                fd.append('required_time', this.subModuleForm.required_time * 60);
                fd.append('type', this.type);
                fd.append('sub_module_name', this.subModuleForm.sub_module_name);
                this.sending = true;

                this.$store.dispatch('createSubModule', fd)
                    .then((res) => {

                        this.subModuleForm.sub_module_name = '';
                        this.subModuleForm.description = '';
                        this.$refs.inputFile.reset();

                        this.$emit('CloseLecture');
                        this.toastSuccess();
                        setTimeout(() => {
                            this.sending = false;
                        }, 1000);

                    })

            },


        },


    }

</script>
