<template>
    <div>

       
        <v-row style="margin-top: 13rem"  v-if="isGetting" align-content="center" justify="center">
            <v-col class="text-subtitle-1 text-center" cols="12">
                Loading Modules
            </v-col>
            <v-col cols="6">
                <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
            </v-col>
        </v-row>
           

        <v-row style="margin-top: 7rem" align="center" justify="center" class="pt-10" v-if="getmain_module.length == 0 && !isGetting">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:7rem">
                    mdi-folder
                </v-icon>
                <h2> Empty Modules </h2>
            </v-col>
        </v-row>

        <div  v-if="!isGetting && getmain_module.length != 0">
            <v-expansion-panels  focusable>
                <draggable v-model="mainModule" style="width: 100%" @change="onEnd" @start="isDragging = true"
                    @end="isDragging = false" v-bind="dragOptions">
                    <transition-group type="transition" name="flip-list">
                        <v-expansion-panel v-for="(itemModule, i) in mainModule" :key="'module'+i" draggable="true">
                            <span class="text-right pannel-btn">

                            
                            </span>
                            <v-expansion-panel-header>
                                <span style="font-size: 1.5rem;">
                                    <v-icon style="font-size: 2.25rem; ">
                                        mdi-folder
                                    </v-icon>
                                    {{itemModule.module_name}}

                                </span>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="pa-0">
                                <v-list-item v-for="(itemSubModule, i) in getSub_module(itemModule.id)"
                                    :key="'Submodule'+i" link class="pl-8">
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

                                        <v-menu transition="slide-y-transition" bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon v-bind="attrs" v-on="on">
                                                    <v-icon color="grey lighten-1">mdi-dots-vertical</v-icon>
                                                </v-btn>
                                            </template>
                                            <v-list>
                                                <v-list-item link @click="editFileBtn(itemModule.id)">
                                                    <v-list-item-title>Edit</v-list-item-title>

                                                </v-list-item>
                                                <v-list-item link @click="editLinkBtn(itemModule.id)">
                                                    <v-list-item-title>Delete</v-list-item-title>

                                                </v-list-item>
                                                <v-list-item link>
                                                    <v-list-item-title>Archive</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-list-item-action>
                                </v-list-item>
                            
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </transition-group>
                </draggable>
            </v-expansion-panels>
        </div>
    </div>
</template>
<script>
    import draggable from "vuedraggable";

    import {
        mapGetters,
        mapActions
    } from "vuex";

    export default {
        props: ['course_details'],
        data() {
            return {
                    moduleName: '',
                    isEdit: false,
                    itemType: '',
                    isDrag: false,
                    itemDialog: false,
                    temp_id: null,
                    showLecture: false,
                    addLink: false,
                    showClasswork: false,
                    subModuleForm: {},
                    mainModule_id: '',
                    mainModule: [],
                    propModule: [],
                    studentSubModuleProgress: [],
                    studentSubModuleProgressForm: {},
                    isGetting: true,
                    }
                },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"]),
            dragOptions() {
                return {
                    animation: 0,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                };
            },

        },
        methods: {
            onEnd() {
                this.isDrag = true;
                axios.post(`/api/main_module/arrange`, {
                        mainModules: this.mainModule
                    })
                    .then((res) => {
                        this.isDrag = false;
                    })
            },
            getdata() {
                this.mainModule = this.getmain_module;
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
           
            checkSubModule(arr, sub_module_id) {
                var check = false;
                ////console.log(arr);
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].sub_module_id == sub_module_id) {
                        check = true;
                    }
                }
                return check;
            },
            fetchAllModule() {
                this.$store.dispatch('fetchMainModule', this.course_details.course_id).then(() => {
                    this.isGetting = false;
                    this.moduleLength = this.getmain_module.length;
                    this.mainModule = this.getmain_module;
                });
                this.$store.dispatch('fetchSubModule', this.course_details.course_id);
            },
            
        },
        async beforeMount(){
            this.fetchAllModule();
        }
        

    }

</script>
<style scoped>

</style>
<style>
    .flip-list-move {
        transition: transform 0.5s !important;
    }

    .no-move {
        transition: transform 0s !important;
    }

    .pannel-btn {
        position: absolute;
        top: 15px;
        right: 47px;
        z-index: 100;
    }

    .v-expansion-panel-content__wrap {
        padding: 0 !important;
    }

    .ghost {
        border-left: 10px solid #FF5400 !important;
        ;
    }

</style>
