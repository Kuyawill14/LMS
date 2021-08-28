<template>
    <div style="width:100%;">
        <v-card class="mb-2">
            <v-list-item>

                <v-list-item-content>
                    <v-list-item-title class="course_content_header">
                        Modules Content
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">

                                <v-progress-circular v-bind="attrs" v-on="on"
                                    :value="getStudentModuleProgress.percentage" :rotate="-90" :size="40"
                                    color="green lighten-2" class="float-right">
                                    <span> {{getStudentModuleProgress.percentage}}</span></v-progress-circular>

                            </template>
                            <span>{{getStudentModuleProgress.completed}} of
                                {{getStudentModuleProgress.submodules_count}} complete</span>
                        </v-tooltip>
                    </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action v-if="expand">
                    <v-btn icon @click="$emit('listClose')">
                        <v-icon color="grey lighten-1">mdi-close</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-card>
        <v-expansion-panels focusable style="margin-left: 1px;">
            <v-expansion-panel v-for="(itemModule, i) in getmain_module" :key="'module'+i">

                <v-expansion-panel-header>
                    <span style="font-size: 1.0rem;">
                        <v-icon style="font-size: 1.0rem; ">
                            mdi-folder
                        </v-icon>
                        {{itemModule.module_name}} <br>
                        {{ getCount(studentSubModuleProgress, itemModule.id) + ' / '+ getSub_module(itemModule.id).length}}


                    </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pa-0">
                    <v-list-item v-for="(itemSubModule, i) in getSub_module(itemModule.id)" :key="'Submodule'+i" link
                        class="pl-8" @click="
                            subModuleClick(itemModule.isPublished,itemModule.id,itemSubModule.id,itemSubModule.type,studentSubModuleProgress) 
                         ">
                      


                            <!--  -->

                            <v-list-item-avatar>

                                <v-icon class="grey lighten-1" dark>
                                    mdi-folder
                                </v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title> {{itemSubModule.sub_module_name}}</v-list-item-title>

                                <v-list-item-subtitle> {{itemSubModule.type}}</v-list-item-subtitle>
                                <v-list-item-subtitle> Time spent:
                                    {{ convertTime(itemSubModule.id, -1)}}

                                </v-list-item-subtitle>
                                <v-list-item-subtitle> Required time:
                                    {{ convertTime(-1,itemSubModule.required_time)}}

                                </v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>

                                <v-icon
                                    :color="checkTimeSpent(studentSubModuleProgress,itemSubModule,itemSubModule.required_time) ? 'success' : 'lighten'">
                                    mdi-check</v-icon>

                            </v-list-item-action>
                    
                    </v-list-item>

                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

    </div>
</template>


<script>
    import VueConfetti from 'vue-confetti'

    Vue.use(VueConfetti)


    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role', 'expand'],
        components: {


        },
        data() {
            return {
                loading: true,
                temp_id: null,
                showLecture: false,
                addLink: false,
                showClasswork: false,
                subModuleForm: {},
                mainModule_id: '',
                mainModule: [],
                studentSubModuleProgress: [],
                studentSubModuleProgressForm: {},
                timespent: 0,
                time: false,
                updateTime: false,
                percentage: 0,
                firstLoad: false
            }
        },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module", "getStudentModuleProgress"])
        },
        methods: {
            subModuleClick(isPublished, itemModule_id, itemSubModule_id, itemSubModule_type, studentSubModuleProgress) {
          
               if (isPublished || this.role == 'Teacher') {
                    this.setTimeSpent(itemModule_id, itemSubModule_id, studentSubModuleProgress);
                    this.passToMainComponent(this.getSub_module(itemModule_id), itemSubModule_id);
                    this.addSubStudentProgress(itemModule_id, itemSubModule_id, itemSubModule_type,
                        studentSubModuleProgress);
                } else {
                    this.toastInfo ('Module not available, The instructor still not yet publish this module.')
                }


            },


            passToMainComponent(sub_module, id) {
                var _sub_module = sub_module.find(item => item.id === id);
                this.$emit('subModule', _sub_module);
            },
            student_sub_module_progress(id) {
                var data;
            },

            getCount(arr, mainModule_id) {

                var count = 0;
                var subModules_arr = this.getSub_module(mainModule_id);
                //   console.log(subModules_arr);
                for (var i = 0; i < subModules_arr.length; i++) {
                    for (var j = 0; j < arr.length; j++) {

                        if (arr[j] !== undefined && subModules_arr[i] !== undefined) {
                            if (arr[j].sub_module_id == subModules_arr[i].id) {
                                if (arr[j].time_spent >= subModules_arr[i].required_time) {

                                    count++;

                                }
                            }
                        }


                    }


                }
                return count;
            },

            //  if (arr[i].sub_module_id == sub_module.id) {
            //             if (arr[i].time_spent >= time_spent) {
            //                 this.$store.dispatch('studentmodule_progress', this.$route.params.id);
            //                 this.$store.dispatch('fetchClassList')
            //                 check = true;
            //             }
            //         }
            addSubStudentProgress(mainModule_id, subModule_id, type) {
                if (this.role == 'Student') {
                    this.tempSubId = subModule_id;
                    this.studentSubModuleProgressForm.main_module_id = mainModule_id;
                    this.studentSubModuleProgressForm.sub_module_id = subModule_id;
                    this.studentSubModuleProgressForm.type = type;
                    this.studentSubModuleProgressForm.course_id = this.$route.params.id;

                    axios.post(`/api/student_sub_module/insert`, {
                            studentProgress: this.studentSubModuleProgressForm
                        })
                        .then((res) => {
                            this.$store.dispatch('studentmodule_progress', this.$route.params.id);
                            this.$store.dispatch('fetchClassList')
                            this.fetchStudentModuleProgress();


                        });
                }

            },
            checkTimeSpent(arr, sub_module, time_spent) {
                var check = false;

                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].sub_module_id == sub_module.id) {
                        if (arr[i].time_spent >= time_spent) {

                            // this.$store.dispatch('studentmodule_progress', this.$route.params.id);
                            // this.$store.dispatch('fetchClassList')
                            check = true;

                            //   if(this.firstLoad == false) {
                            //               this.$confetti.start();

                            //               setTimeout(() => {
                            //                     this.$confetti.stop();
                            //               }, 3000);
                            //         }

                        }
                    }
                }
                return check;
            },

            fetchClass() {
                this.$store.dispatch('fetchClassList').then(() => {
                    console.log('fetching class');
                });
            },
            getTimeSpent(arr, sub_module_id) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].sub_module_id == sub_module_id) {
                        return arr[i].time_spent;

                    }
                }
                return 0;



            },
            convertTime(sub_module_id, dataTime) {
                if (dataTime == -1) {
                    var time = this.getTimeSpent(this.studentSubModuleProgress, sub_module_id);
                    if (time === undefined) {
                        time = 0;
                    }
                    return new Date(parseInt(time) * 1000).toISOString().substr(11, 8);
                } else {
                    return new Date(parseInt(dataTime) * 1000).toISOString().substr(11, 8);
                }


            },




            setTimeSpent(mainModule_id, subModule_id, arr) {
                if (this.role == 'Student') {

                    clearInterval(this.ctrTime);
                    clearInterval(this.updateTime);
                    this.timespent = this.getTimeSpent(this.studentSubModuleProgress, subModule_id);

                    this.ctrTime = false;
                    this.updateTime = false;
                    this.ctrTime = setInterval(() => {
                        this.timespent++;
                        this.time = true;

                    }, 1000);
                    this.updateTime = setInterval(() => {
                        this.updateStudentTimeProgress(mainModule_id, subModule_id, this.timespent);
                    }, 30000);
                }
            },
            updateStudentTimeProgress(main_module_id, subModule_id, time_spent) {
                var studentProgress = {};
                studentProgress.main_module_id = main_module_id;
                studentProgress.sub_module_id = subModule_id;
                studentProgress.time_spent = time_spent;

                const res = axios.post(`/api/student_sub_module/updatetime`, {
                    studentProgress: studentProgress
                }).then((res) => {
                    var data = res.data['studentProgress'];


                    for (var i = 0; i < this.studentSubModuleProgress.length; i++) {
                        if (this.studentSubModuleProgress[i].sub_module_id == data
                            .sub_module_id) {

                            this.studentSubModuleProgress[i].time_spent = data.time_spent;
                            this.$store.dispatch('studentmodule_progress', this.$route.params.id);
                            this.$store.dispatch('fetchClassList')
                            break;
                        }
                    }



                });


            },
            fetchStudentModuleProgress() {
                axios.get(
                    `/api/student_sub_module/all/${this.$route.params.id}`
                ).then((res) => {
                    this.studentSubModuleProgress = res.data;
                });
            },

        },
        async mounted() {

            this.fetchClass();

            this.fetchStudentModuleProgress();

            this.$store.dispatch('fetchMainModule', this.$route.params.id);
            this.$store.dispatch('fetchSubModule', this.$route.params.id);
            this.$store.dispatch('studentmodule_progress', this.$route.params.id);
            this.loading = false;
            setTimeout(() => {
                this.firstLoad = false;
            }, 5000);


        },
        created() {
            this.firstLoad = true;
        },
        beforeDestroy() {
            clearInterval(this.ctrTime);
            clearInterval(this.updateTime);
        }


    }

</script>
<style>
    .pannel-btn {
        position: absolute;
        top: 15px;
        right: 47px;
        z-index: 100;
    }

    .v-expansion-panel-content__wrap {
        padding: 0 !important;
    }

    .course_content_header {
        display: flex;
        align-items: center;
    }

</style>
