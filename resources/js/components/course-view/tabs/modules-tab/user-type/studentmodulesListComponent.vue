<template>
    <div style="width:100%;">

        <v-dialog v-model="warningDialog" persistent max-width="500">
            <dialogWarning v-on:toggleCloaseDialog="confirmWarning_fn" v-if="warningDialog" :timer_count="idleTimer"
                :warning_type="warning_type">
            </dialogWarning>
        </v-dialog>

        <v-card class="mb-2">
            <v-list-item>

                <v-list-item-content>
                    <v-list-item-title class="course_content_header">
                        Modules Content
                        <v-spacer></v-spacer>
                        <v-idle @idle="onidle" :reminders="idleTimer_reminder" :loop="true" :duration="idleTimer"
                            v-if="isSelectedModule && renderComponent" style="opacity: 0%" />
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

                <v-list-item-action v-if="expand && role == 'Teacher'">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">


                            <v-btn v-bind="attrs" v-on="on" icon @click="closeHandlerModule();">
                                <v-icon color="grey lighten-1">mdi-close</v-icon>
                            </v-btn>
                        </template>
                        <span>{{role == 'Teacher' ? 'Close Preview' : 'Close Modules Content'}}</span>
                    </v-tooltip>

                </v-list-item-action>
            </v-list-item>
        </v-card>

        <div v-if="loading && role != 'Teacher' ">
            <v-card elevation="2" style="border-radius: 0;" v-for="i in 5" :key="i">
                <v-skeleton-loader :loading="loading" type="list-item-avatar-two-line"> </v-skeleton-loader>
            </v-card>
        </div>


        <div class="expansion-pannel-container">


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
                        <v-list-item v-for="(itemSubModule, i) in getSub_module(itemModule.id)" :key="'Submodule'+i"
                            link :disabled="click_id == itemSubModule.id" class="pl-8" @click="click_id=itemSubModule.id,
                            subModuleClick(itemModule,itemModule.id,itemSubModule.id,itemSubModule.type,studentSubModuleProgress) 
                         ">

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
                                    {{ convertTime(-1,itemSubModule.required_time*60)}}

                                </v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>

                                <v-icon
                                    :color="checkTimeSpent(studentSubModuleProgress,itemSubModule,itemSubModule.required_time*60) ? 'success' : 'lighten'">
                                    mdi-check</v-icon>

                            </v-list-item-action>

                        </v-list-item>

                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

        </div>




    </div>
</template>


<script>
    import moment from 'moment/src/moment';

    import Vidle from 'v-idle'
    Vue.use(Vidle)

    import dialogWarning from './warningDialog';
    import {
        mapGetters,
        mapActions
    } from "vuex";
    import axios from 'axios';
    export default {
        props: ['role', 'expand'],
        components: {
            dialogWarning,


        },
        data() {
            return {
                isBlur: false,
                renderComponent: true,
                warning_count: 0,
                idleTimer: 180,
                idleTimer_reminder: [10, 20],
                click_id: null,
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
                firstLoad: false,
                warningDialog: false,
                confirmWarning: false,
                _mainModule_id: '',
                _subModule_id: '',
                isSelectedModule: false,
                warning_type: 0,
                blurTimer: false,
            }
        },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module", "getStudentModuleProgress"])
        },
        methods: {

            closeHandlerModule() {
                if (this.role == 'Teacher') {
                    // this.$router.push({
                    //     path: 'modules'
                    // })
                    window.location.replace('modules')
                } else {
                    this.$emit('listClose');
                }
            },

            subModuleClick(itemModule, itemModule_id, itemSubModule_id, itemSubModule_type, studentSubModuleProgress) {
                $(window).scrollTop(0);
                this.$emit('selected_item');

                if (this.role == 'Teacher') {
                    this.passToMainComponent(this.getSub_module(itemModule_id), itemSubModule_id);

                    this.isSelectedModule = true;




                } else {
                    // console.log(itemModule);

                    if (itemModule.isPublished == 1) {


                        axios.get('/api/time_today')
                            .then((res) => {
                                var date = moment(String(res.data)).format('MM-DD-YYYY');
                                var startDate = moment(String(itemModule.date_from)).format('MM-DD-YYYY');;
                                var endDate = moment(String(itemModule.date_to)).format('MM-DD-YYYY');;
                                // console.log('res.datetime', res.data);
                                console.log('date', date);
                                console.log('startDate', startDate);
                                console.log('endDate', endDate);

                                if (itemModule.date_from != null && itemModule.date_to != null) {
                                    if (startDate <= date && date <= endDate) {
                                        this.setTimeSpent(itemModule_id, itemSubModule_id,
                                            studentSubModuleProgress);
                                        this.addSubStudentProgress(itemModule_id, itemSubModule_id,
                                            itemSubModule_type,
                                            studentSubModuleProgress);
                                        this.passToMainComponent(this.getSub_module(itemModule_id, 0,
                                                studentSubModuleProgress),
                                            itemSubModule_id);

                                        this.isSelectedModule = true;


                                    } else {
                                        this.toastInfo(
                                            'Module not available, You can only access this module from ' + this
                                            .format_date(itemModule.date_from) + ' to ' + this.format_date(
                                                itemModule
                                                .date_to));
                                    }
                                } else {
                                    this.setTimeSpent(itemModule_id, itemSubModule_id, studentSubModuleProgress);
                                    this.addSubStudentProgress(itemModule_id, itemSubModule_id, itemSubModule_type,
                                        studentSubModuleProgress);
                                    this.passToMainComponent(this.getSub_module(itemModule_id), itemSubModule_id,
                                        studentSubModuleProgress);

                                    this.isSelectedModule = true;
                                }
                            })




                    } else {

                        this.toastInfo('Module not available, The instructor still not yet publish this module.')
                        this.isSelectedModule = false;
                    }





                }


            },
            format_date(value) {
                return moment(String(value)).format('MMMM D, YYYY')
            },


            passToMainComponent(sub_module, id, student_progress) {
                var _sub_module = sub_module.find(item => item.id === id);
                var _student_progress = [];
                if (student_progress) {
                    _student_progress = student_progress.find(item => item.sub_module_id === _sub_module.id);

                }


                this.$emit('subModule', _sub_module, _student_progress);
            },
            student_sub_module_progress(id) {
                var data;
            },

            getCount(arr, mainModule_id) {

                var count = 0;
                var subModules_arr = this.getSub_module(mainModule_id);
                //   ////console.log(subModules_arr);
                for (var i = 0; i < subModules_arr.length; i++) {
                    for (var j = 0; j < arr.length; j++) {

                        if (arr[j] !== undefined && subModules_arr[i] !== undefined) {
                            if (arr[j].sub_module_id == subModules_arr[i].id) {
                                if (arr[j].time_spent >= subModules_arr[i].required_time * 60) {

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
                            // this.$store.dispatch('fetchClassList')
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
                            this.$emit('completed_module', sub_module);

                        }
                    }
                }
                return check;
            },

            fetchClass() {
                this.$store.dispatch('fetchClassList').then(() => {
                    ////console.log('fetching class');
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

            convertHHMMSS(sec) {
                

                var d = Number(sec);
                var h = Math.floor(d / 3600);
                var m = Math.floor(d % 3600 / 60);
                var s = Math.floor(d % 3600 % 60);


                if (h < 10) {
                    h = "0" + h;
                }
                if (m < 10) {
                    m = "0" + m;
                }
                if (s < 10) {
                    s = "0" + s;
                }
                var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
                var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
                var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
                return h + ':' + m + ':' + s;

            },
            convertTime(sub_module_id, dataTime) {
                if (dataTime == -1) {
                    var time = this.getTimeSpent(this.studentSubModuleProgress, sub_module_id);
                    if (time === undefined) {
                        time = 0;
                    }
                    return this.convertHHMMSS(time);
                } else {
                     return this.convertHHMMSS(dataTime);
                }


            },


            setTimeSpent(mainModule_id, subModule_id) {
                if (this.role == 'Student') {
                    this._mainModule_id = mainModule_id;
                    this._subModule_id = subModule_id;
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
                            // this.$store.dispatch('fetchClassList')
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

            confirmWarning_fn() {
                this.warningDialog = !this.warningDialog;


                if (this.confirmWarning = true) {
                    //console.log('continue the timer');
                    this.warningDialog = false;
                    this.setTimeSpent(this._mainModule_id, this._subModule_id);
                    this.confirmWarning = false;
                }
            },

            triggerWarning() {
                if (this.isSelectedModule && this.role != 'Teacher') {
                    this.warningDialog = true;
                    this.confirmWarning = false;
                    clearInterval(this.ctrTime);
                    clearInterval(this.updateTime);

                }
            },
            onidle(time) {
                this.triggerWarning();
                this.warning_type = 1;
            },

            forceRerender() {
                // Remove my-component from the DOM
                this.renderComponent = false;

                this.$nextTick(() => {
                    // Add the component back in
                    this.renderComponent = true;
                });
            }

        },

        async mounted() {

            // this.fetchClass();


            this.fetchStudentModuleProgress();



            this.$store.dispatch('studentmodule_progress', this.$route.params.id);
            this.$store.dispatch('fetchMainModule', this.$route.params.id).then(() => {
                this.loading = false;
            });
            // setTimeout(() => {
            //     this.firstLoad = false;
            // }, 5000);


        },
        created() {
            this.firstLoad = true;
        },

        beforeMount() {
            var self = this;

            $(window).bind('touchstart', function () {
                self.forceRerender();
            });
            $(window).bind('touchmove', function () {
                self.forceRerender();
            });


            // document.addEventListener('contextmenu', function (e) {
            //     e.preventDefault();
            // });
            window.addEventListener("onbeforeunload", this.preventNav);
            document.addEventListener('contextmenu', event => event.preventDefault());

            $(window).blur(function () {



                let activeElement = document.activeElement;
                let iframeElement = document.querySelector('iframe');


                if (activeElement === iframeElement) {
                    console.log(document.activeElement.tagName);
                    //  document.activeElement.blur();
                    document.activeElement.blur();
                    //     this.isBlur = setInterval(() => {
                    //    document.activeElement.blur();     
                    //     }, 1000);


                } else {
                    console.log(document.activeElement.tagName);
                    self.triggerWarning()
                }





            });




        },

        beforeDestroy() {
            clearInterval(this.blurTimer);
            clearInterval(this.ctrTime);
            clearInterval(this.updateTime);
            clearInterval(this.isBlur);
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

    .expansion-pannel-container {
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }

</style>

<style scoped>
    .v-list-item--disabled {
        background: #F6F6F6;
    }

</style>
