<template>
    <div>

        <div  >
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                 <coursesummarypreview :course_details="course_details" v-on:closeDialog="dialog = false" v-if="dialog"></coursesummarypreview>
            </v-dialog>
        </div>

        <v-row>
            <v-col cols="12" sm="6" class="mb-0 pb-0">
                <h2>Courses</h2>

            </v-col>

            <v-col class="pt-4" cols="12" sm="6">
                <v-select :items="items" label="School Year" outlined></v-select>
            </v-col>
        </v-row>

        <v-col cols="12" v-if="isloading">
            <v-container class="fill-height" v-if="isloading">
                <v-row align-content="center" justify="center">
                    <v-col class="text-subtitle-1 text-center" cols="12">
                        Loading
                    </v-col>
                    <v-col cols="6">
                        <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
        <v-divider></v-divider>

        <br>
        <v-row>
            <v-col v-if="!isloading" cols="12">

                <v-row>
                    <v-col cols="6" md="3" lg="3" v-for="(item) in details" :key="item.course_id" >
                        <v-card link style="cursor:pointer" elevation="2" class="mx-auto" @click="dialog = true, course_details = item" max-width="344" outlined>
                        <v-toolbar dense :class="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ? 'd-flex justify-center' : ''"  dark color="primary">
                            <v-toolbar-title>
                                <v-tooltip top>
                                        <template v-slot:activator="{ on, attrs }">
                                            <div v-bind="attrs" v-on="on" class="text-center ">
                                                {{item.course_code +' - '+item.course_name}}
                                            </div>
                                        </template>
                                        <span>{{item.course_code +' - '+item.course_name}}</span>
                                    </v-tooltip>
                            </v-toolbar-title>
                        </v-toolbar>
                            
                          
                            <v-list-item>
                                <v-list-item-content>
                                    <div class="pa-2">
                                        <v-row>
                                            <v-col>
                                                <div class="text-center">
                                                    {{item.total_students}}
                                                </div>

                                                <div class="text-center text-subtitle-2">
                                                    Total Students
                                                </div>
                                            </v-col>


                                            <v-col>
                                                <div class="text-center">
                                                    {{item.total_classes}}
                                                </div>
                                                <div class="text-center text-subtitle-2">
                                                    Total Classes
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </div>

                                </v-list-item-content>
                            </v-list-item>


                            <div class="text-center pl-4 pr-4">
                                <v-divider></v-divider>
                            </div>

                            <v-list-item>
                                <v-list-item-content  @click="dialog = true;course_id = course_details = item">
                                    <div class="text-center ">
                                        Modules Published: {{item.sub_modules_count}}
                                    </div>
                                </v-list-item-content>
                            </v-list-item>


                            <!--  <v-card-actions>
                        <v-btn outlined rounded text>
                            View
                        </v-btn>
                        </v-card-actions> -->
                        </v-card>
                    </v-col>

                </v-row>
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
        props: ['UserDetails'],
        data() {
            return {
                dialog:false,
                moduledialog: false,
                Coursedialog: false,
                isloading: true,
                coursesLength: null,
                details: [],
                course_id: null,
                course_details: null,
                items: ['2020-2021', '2021-2022', '2022-2023', '2023-2024'],
            }
        },
        components:{
            //modulesPublished,
            coursesummarypreview
            },
        computed: mapGetters(['allCourse', 'allClass']),
        methods: {
            async fetchCourses() {
                axios.get('/api/teachers/profile/ClassesList/' + this.UserDetails.user_id)
                    .then(res => {
                        this.details = res.data;
                        this.isloading = false;
                    })
            },
        },
        beforeMount() {
            this.fetchCourses();
        }

    }

</script>
