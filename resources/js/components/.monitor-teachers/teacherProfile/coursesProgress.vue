<template>
    <div>

        <div>
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <coursesummarypreview :course_details="course_details" v-on:closeDialog="dialog = false" v-if="dialog">
                </coursesummarypreview>
            </v-dialog>
        </div>

        <v-row v-if="false">
            <v-col cols="12" lg="5" class="mb-0 pb-0">
                <h2>Courses</h2>

            </v-col>

            <v-col lg="1" class="text-right mt-2">
                <v-btn icon @click="fetchCourses" v-if="school_year_id != 0 || semester_id !=0 ">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col lg="3" class="text-right">
                <v-select class="mr-2 my-1" dense :items="school_year" item-text="schoolyear" item-value="id"
                    label="School Year" v-model="school_year_id" outlined small @change=" schoolYearFilter()">
                </v-select>
            </v-col>
            <v-col class="text-right" lg="3">
                <v-select class="mr-2 my-1" dense :items="semester" item-text="semester" item-value="id"
                    :disabled="school_year_id == 0" label="Semester" v-model="semester_id" outlined small
                    @change="semesterFilter()"></v-select>


            </v-col>
        </v-row>

       
        <v-row>
            <v-col  cols="12">

 
                <v-data-table :headers="headers" :items="allCoursesData" :items-per-page="10"  class="elevation-1">
                    <template v-slot:body="{ items }">
                        <tbody>
                            <tr v-for="(item,index ) in items" :key="index">

                                <td > {{item.course_code}} </td>
                                <td > {{item.course_name}} </td>
                                <td class="text-center"> {{item.total_classes}} </td>
                                <td class="text-center"> {{item.total_students}} </td>
                                <td class="text-center"> {{item.sub_modules_count}} </td>
                                <td class="text-center"> {{item.total_classworks}} </td>
                                <td >
                                    <v-btn icon color="success" link @click="dialog = true;course_details=item">
                                        <v-icon>
                                            mdi-eye
                                        </v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                            <tr v-if="items.length == 0">
                                <td colspan="42" class="text-center"> No data available</td>
                            </tr>


                        </tbody>
                    </template>
                </v-data-table>
            </v-col>


        </v-row>
    </div>
</template>
<script>
    //const modulesPublished = () => import('./courses/modules_publish')
    const coursesummarypreview = () => import('./courses/course_summary_preview')

    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['courses'],
        data() {
            return {
              
                allCoursesData: this.courses,
                dialog: false,
                moduledialog: false,
                Coursedialog: false,
                isloading: true,
                coursesLength: null,
                details: [],
                course_id: null,
                allCourse: [],
                course_details: null,
                headers: [

                    {
                        text: 'Course Code',
                        value: 'course_code',
                        align: 'start',
                    },
                    {
                        text: 'Course Name',
                        value: 'course_title',
                        align: 'start',
                    },
                    {
                        text: 'Total Classes',
                        value: 'total_classes',
                        align: 'center',
                    },
                    {
                        text: 'Total Student',
                        value: 'total_student',
                        align: 'center',
                    },

                    {
                        text: ' Total Modules',
                        value: 'total_modules',
                        align: 'center',
                    },
                    {
                        text: 'Total Classwork',
                        value: 'total_classwork',
                        align: 'center',
                    },

                    {
                        text: 'Actions',
                        sortable: false
                    },
                ],

            }
        },
        components: {
            //modulesPublished,
            coursesummarypreview
        },
       mounted() {


       }
       
    }

</script>
