<template>
    <v-container>

        <v-col cols="12" class="pa-0">
            <v-text-field v-model="getcourseInfo.course_code" outlined color="primary" label="Course Code" >
            </v-text-field>
        </v-col>

        <v-col cols="12" class="pa-0 ">
            <v-text-field v-model="getcourseInfo.course_name" outlined color="primary" label="Course Name" >
            </v-text-field>
        </v-col>

        <v-col cols="12" class="pa-0 ">
                  <small class="text-caption">Generate google meet here: <a href="https://meet.google.com/" target="_blank">meet.google.com </a>  </small>
  
            <v-text-field v-model="getcourseInfo.v_classroom_link" outlined color="primary" label="Video Conference Link">
                    
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
                 <v-select
                class="mr-2"
                 :items="school_year"
                item-text="schoolyear"
                item-value="id"
                label="School Year"
                v-model="getcourseInfo.school_year_id"
               outlined
               
                ></v-select>
        </v-col>


             
        <v-col cols="12" class="pa-0 ">
                 <v-select
                class="mr-2"
                 :items="semester"
                item-text="semester"
                item-value="id"
                label="Semester"
                v-model="getcourseInfo.semester_id"
               outlined
                ></v-select>
        </v-col>

             
       
         


        <v-col cols="12" class="pa-0 ma-0">
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
                departmentsList:[]
            }
        },

        computed: mapGetters(["getcourseInfo"]),
        methods: {
            ...mapActions(['fetchScourse']),
                fetchAllSchoolyear_semester() {
                axios.get('/api/admin/schoolyears_semesters/all')
                    .then((res) => {
                        this.school_year =res.data.school_year;
                        this.semester = res.data.semester;
                    })
            },
            updateCourseDetails() {
                //console.log(this.getcourseInfo.semester_id);
                if (this.getcourseInfo.course_description.trim() == '' || this.getcourseInfo.course_name == '' || this
                    .course_code == '' ||  this.getcourseInfo.semester_id === undefined || this.getcourseInfo.school_year_id === undefined) {
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
 