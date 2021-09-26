<template>
    <div>
        <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :to="{name: item.link}" :disabled="item.disabled">
                    {{ item.text.toUpperCase() }}
                </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
        <v-card elevation="2" class="pa-3 mt-5">

            <v-col cols="12" class="pa-0">
                <v-text-field v-model="getcourseInfo.course_code" outlined color="primary" label="Course Code">
                </v-text-field>
            </v-col>

            <v-col cols="12" class="pa-0 ">
                <v-text-field v-model="getcourseInfo.course_name" outlined color="primary" label="Course Title">
                </v-text-field>
            </v-col>

            <v-col cols="12" class="pa-0 ">
                <small class="text-caption">Generate google meet here: <a href="https://meet.google.com/"
                        target="_blank">meet.google.com </a> </small>

                <v-text-field v-model="getcourseInfo.v_classroom_link" outlined color="primary"
                    label="Video Conference Link">

                </v-text-field>

            </v-col>

            <v-col cols="12" class="pa-0 ">
                 <v-select
                class="mr-2"
                 :items="departmentsList"
                item-text="name"
                item-value="id"
                label="Department"
                  v-model="getcourseInfo.department"
                outlined
                ></v-select>
            </v-col>


            <v-col cols="12" class="pa-0 ">
                <v-select class="mr-2" :items="school_year" item-text="schoolyear" item-value="id" label="School Year"
                    v-model="getcourseInfo.school_year_id" outlined></v-select>
            </v-col>



            <v-col cols="12" class="pa-0 ">
                <v-select class="mr-2" :items="semester" item-text="semester" item-value="id" label="Semester"
                    v-model="getcourseInfo.semester_id" outlined></v-select>
            </v-col>


            <v-col cols="12" class="pa-0 " v-if="getcourseInfo.course_guide == null">
                <v-file-input show-size outlined label="Course Guide" @change="onFileChange" ref="inputFile"
                    prepend-inner-icon="mdi-file" prepend-icon="">

                </v-file-input>
            </v-col>

            <v-col cols="12 py-0 my-0">

                <v-progress-linear rounded :value="uploadPercentage" v-if="uploadPercentage !=0 " height="14px">
                    <span style="color:#fff">{{uploadPercentage+ '%'}} </span>
                </v-progress-linear>
            </v-col>



   <small class="text-caption"  v-if="getcourseInfo.course_guide != null ">Course Guide</small>
            <v-row align="center" justify="center" class="mb-5"
                style="height: 55px; border: 1px solid; border-radius: 4px; width: 100%; margin: auto;"
                v-if="getcourseInfo.course_guide != null ">
                 

                <vue-element-loading :active="isDeleting" spinner="bar-fade-scale" />

                <v-col class="grow text-left py-0 pr-0 col-1" style="max-width: 2.333333% !important;">
                    <v-icon>mdi-file</v-icon>
                </v-col>


                <v-col >
                    <div class="text-decoration-underline':''"> {{ getFileName(getcourseInfo.course_guide) }}</div>
                </v-col>
                <v-col class="shrink d-flex py-0 shrink d-flex">
                    <div class="black--text mt-1 mr-2"></div>

                    <div class="py-0">

                        <v-btn rounded small icon text @click="removeFile()">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>


                    </div>

                </v-col>

            </v-row>
            <!-- <div style="margin-top: 10px;position: relative;z-index: 90999;">
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
        </div> -->



            <v-col cols="12" class="pa-0 mx-0">
                <v-card>
                    <v-card-title class="pl-3 py-3" style="font-size: 1rem;color:grey">Course Description
                    </v-card-title>
                    <v-divider></v-divider>

                    <editor v-model="getcourseInfo.course_description" theme="snow"></editor>
                </v-card>
            </v-col>


            <div class="text-right pt-6">
                <v-btn tile color="primary" large @click="updateCourseDetails" :disabled="isUpdating"
                    :loading="isUpdating">
                    <v-icon left>
                        mdi-pencil
                    </v-icon>
                    Save Changes
                </v-btn>
            </div>
        </v-card>


    </div>

</template>
<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data: function () {
            return {
                classInfo: [],
                loading: false,
                items: [{
                        text: 'Course',
                        disabled: false,
                        link: 'courses',
                    },
                    {
                        text: 'Setting',
                        disabled: true,
                        link: 'settings',
                    },
                ],
                school_year: [],
                semester: [],
                isUpdating: false,
                isInvalidFileType: false,
                isInvalidFileSize: false,
                isFileSize: null,
                uploadPercentage: 0,
                isDeleting: false,
                file: null,

            }
        },
        computed: mapGetters(["getcourseInfo"]),
        methods: {
            ...mapActions(['fetchScourse']),
            getFileName(file) {
                var name = file.split('/');
                return name[name.length - 1];
            },
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

                    if (this.ext == 'pdf' || this.ext == 'docx' || this.ext == 'doc' || this.ext == 'pptx' ||
                        this.ext == 'ppt') {


                    } else {
                        this.isInvalidFileType = true;
                        this.toastError('Invalid File Type, (.pdf , .doc and  .docx  are allowed)')
                        this.$refs.inputFile.value = null;
                    }

                }

                this.file = file;
            },

            removeFile() {
                this.isDeleting = true;
                axios.put('/api/course/file-remove/' + this.$route.params.id,{course_guide: this.getcourseInfo.course_guide}).then(res => {
                    this.oldFileInput = false;
                    console.log(res);
                    this.isDeleting = false;
                    this.isRemove = true;
                    this.getcourseInfo.course_guide = null
                }).catch(e => {
                    this.toastError('Something went wrong')
                })

            },

            fetchAllSchoolyear_semester() {
                axios.get('/api/admin/schoolyears_semesters/all')
                    .then((res) => {
                        this.school_year = res.data.school_year;
                        this.semester = res.data.semester;
                        this.departmentsList = res.data.departments;
                    })
            },
            updateCourseDetails() {
                ////console.log(this.getcourseInfo.semester_id);
                if (this.getcourseInfo.course_description.trim() == '' || this.getcourseInfo.course_name == '' || this
                    .course_code == '' || this.getcourseInfo.semester_id === undefined || this.getcourseInfo
                    .school_year_id === undefined) {
                    this.toastError('Please complete all the field to proceed to the next step');
                } else {
                    let fd = new FormData
                    fd.append('file', this.file);
                    fd.append('courseItem', JSON.stringify(this.getcourseInfo));



                    this.isUpdating = true;
                    axios.post(`/api/course/update/${this.$route.params.id}`, fd, {
                                onUploadProgress: (progressEvent) => {
                                    const total = progressEvent.total;
                                    const totalLength = progressEvent.lengthComputable ? total : null;
                                    if (totalLength != null && this.$refs.inputFile != null) {
                                        this.uploadPercentage = Math.round((progressEvent.loaded * 100) /
                                            totalLength);
                                    }
                                }
                            }

                        )
                        .then(res => {
                            this.getcourseInfo.course_guide = res.data.course_guide;
                            if (this.$refs.inputFile != null) {
                                this.$refs.inputFile.reset();
                            }
                            this.toastSuccess('Course Details Successfully updated')
                            this.isUpdating = false;
                            this.uploadPercentage = 0;

                        })
                        .catch(e => {
                            this.toastError('Something went wrong!')
                            this.isUpdating = false;

                        });
                }



            },
            fetchDeparmentList() {
                axios.get('/api/admin/department/all')
                    .then((res) => {
                        this.departmentsList = res.data;
                    })
            },

        },
        created() {
            this.fetchAllSchoolyear_semester();
        },


    }

</script>

<style>
    .border {
        border: 1px solid #d6d6d6;
    }

    .quill-editor {
        position: relative;
        background: #ffffff !important;
        ;

    }

    .ql-container.ql-snow {
        border: none !important;
    }




    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
        border-radius: 5px;
    }

</style>
