<template>
    <v-container>

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

        <!-- <v-col cols="12" class="pa-0 ">
                 <v-select
                class="mr-2"
                 :items="departmentsList"
                item-text="name"
                item-value="id"
                label="Department"
                  v-model="getcourseInfo.department"
                outlined
                ></v-select>
        </v-col> -->


        <v-col cols="12" class="pa-0 ">
            <v-select class="mr-2" :items="school_year" item-text="schoolyear" item-value="id" label="School Year"
                v-model="getcourseInfo.school_year_id" outlined></v-select>
        </v-col>



        <v-col cols="12" class="pa-0 ">
            <v-select class="mr-2" :items="semester" item-text="semester" item-value="id" label="Semester"
                v-model="getcourseInfo.semester_id" outlined></v-select>
        </v-col>


      <v-col cols="12" class="pa-0 ">
            <v-file-input show-size outlined label="Course Guide" @change="onFileChange" ref="inputFile"
                prepend-inner-icon="mdi-file" prepend-icon="">

            </v-file-input>
        </v-col>
        
        <v-col cols="12" class="pa-0 mx-0">
            <v-card>
                <v-card-title class="pl-3 py-3" style="font-size: 1rem;color:grey">Course Description
                </v-card-title>
                <v-divider></v-divider>

                <editor v-model="getcourseInfo.course_description" theme="snow"></editor>
            </v-card>
        </v-col>


        <br> <br>
        <v-divider></v-divider>
        <br>
        <v-row>
            <v-col>
                <v-btn class="float-right" color="primary" @click="updateCourseDetails()" :disabled="isUpdating">
                    {{isUpdating ? 'Saving..' : 'Next'}}
                </v-btn>
            </v-col>

        </v-row>
    </v-container>


</template>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data() {
            return {
                el: 2,
                isUpdating: false,
                courseDetails: [],
                school_year: [],
                semester: [],
                departmentsList: [],
                  isInvalidFileType: false,
                  isInvalidFileSize: false,
                isFileSize: null,
            }
        },

        computed: mapGetters(["getcourseInfo"]),
        methods: {
            ...mapActions(['fetchScourse']),
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
                        this.toastError('Invalid File Type, (.pdf , .docx and .mp4 are allowed)')
                        this.$refs.inputFile.value = null;
                    }

                }

                this.file = file;
            },
            
            removeFile(id) {
                this.isDeleting = true;
                axios.put('/api/sub_module/file-remove/' + id, {
                    file: this.getcourseInfo.course_guide
                }).then(res => {
                    this.oldFileInput = false;
                    console.log(res);
                    this.isDeleting = false;
                    this.isRemove = true;
                })

            },

            fetchAllSchoolyear_semester() {
                axios.get('/api/admin/schoolyears_semesters/all')
                    .then((res) => {
                        this.school_year = res.data.school_year;
                        this.semester = res.data.semester;
                    })
            },
            updateCourseDetails() {
                ////console.log(this.getcourseInfo.semester_id);
                if (this.getcourseInfo.course_description.trim() == '' || this.getcourseInfo.course_name == '' || this
                    .course_code == '' || this.getcourseInfo.semester_id === undefined || this.getcourseInfo
                    .school_year_id === undefined) {
                    this.toastError('Please complete all the field to proceed to the next step');
                } else {
                    this.isUpdating = true;
                    this.$store.dispatch('updateCourse', this.getcourseInfo);
                    this.isUpdating = false;
                    this.$emit('changeStep', this.el);
                }

            },
            fetchDeparmentList() {
                axios.get('/api/admin/department/all')
                    .then((res) => {
                        this.departmentsList = res.data;
                    })
            },

        },
        mounted() {
            this.fetchAllSchoolyear_semester();
            this.fetchDeparmentList();
        }
    }

</script>
