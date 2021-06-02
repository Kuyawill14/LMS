<template>
    <v-navigation-drawer width="100%" height="100vh">
        <v-card class="mb-2">
            <v-list-item>

                <v-list-item-content>
                    <v-list-item-title>Course Content</v-list-item-title>


                </v-list-item-content>

                <v-list-item-action>
                    <v-btn icon>
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
                        class="pl-8" @click="passToMainComponent(getSub_module(itemModule.id),itemSubModule.id)">


                        <v-list-item-avatar>

                            <v-icon class="grey lighten-1" dark>
                                mdi-folder
                            </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title> {{itemSubModule.sub_module_name}}</v-list-item-title>

                            <v-list-item-subtitle> {{itemSubModule.type}}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn icon
                                :color="checkSubModule(studentSubModuleProgress,itemSubModule.id) ? 'success' : 'lighten'"
                                @click="addSubStudentProgress(itemModule.id,itemSubModule.id,itemSubModule.type,studentSubModuleProgress)">
                                <v-icon>mdi-check</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>

                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-navigation-drawer>
</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {


        },
        data() {
            return {
                temp_id: null,
                showLecture: false,
                addLink: false,
                showClasswork: false,
                subModuleForm: {},
                mainModule_id: '',
                mainModule: [],
                studentSubModuleProgress: [],
                studentSubModuleProgressForm: {},
            }
        },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"])
        },
        methods: {

            passToMainComponent(sub_module, id) {

                var _sub_module = sub_module.find(item => item.id === id);

                this.$emit('subModule', _sub_module);
            },

            student_sub_module_progress(id) {
                var data;

            },
            getCount(module_id) {
                var count = 0;
                for (var i = 0; i < this.studentSubModuleProgress.length; i++) {
                    if (this.studentSubModuleProgress.main_module_id == module_id) {
                        count++;
                    }
                }
                return count;
            },
            getCount(arr, mainModule_id) {
                var count = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].main_module_id == mainModule_id) {
                        count++;
                    }
                }
                return count;
            },
            addSubStudentProgress(mainModule_id, subModule_id, type) {
                this.tempSubId = subModule_id;
                this.studentSubModuleProgressForm.main_module_id = mainModule_id;
                this.studentSubModuleProgressForm.sub_module_id = subModule_id;
                this.studentSubModuleProgressForm.type = type;
                this.studentSubModuleProgressForm.course_id = this.$route.params.id;
                axios.post(`/api/student_sub_module/insert`, {
                        studentProgress: this.studentSubModuleProgressForm
                    })
                    .then((res) => {
                        var arr = this.studentSubModuleProgress;
                        var exist = false;
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i].sub_module_id == subModule_id) {
                                arr.splice(i, 1); 
                                exist = true;
                                break;
                            }
                        }
                        if (exist == false) {
                            this.studentSubModuleProgress.push(res.data);
                        }

                    });
            },
            checkSubModule(arr, sub_module_id) {
                var check = false;
                //console.log(arr);
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].sub_module_id == sub_module_id) {
                        check = true;
                    }
                }
                return check;
            }


        },
        async mounted() {
            axios.get(
                `/api/student_sub_module/all/${this.$route.params.id}`
            ).then((res) => {
                this.studentSubModuleProgress = res.data;

                this.getCount(this.studentSubModuleProgress, 23);
                this.$store.dispatch('fetchMainModule', this.$route.params.id);
                this.$store.dispatch('fetchSubModule', this.$route.params.id);
            }).catch((error) => {
                console.log(error)
            })






        },
        created() {

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

</style>
