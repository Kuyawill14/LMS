<template>

    <v-col>
        <vue-element-loading :active="isDrag" spinner="bar-fade-scale" color="#FF6700" />
        <v-expansion-panels focusable>
            <draggable v-model="mainModule" style="width: 100%" @change="onEnd" @start="isDragging = true"
                @end="isDragging = false" v-bind="dragOptions">
                <transition-group type="transition" name="flip-list">
                    <v-expansion-panel v-for="(itemModule, i) in mainModule" :key="'module'+i" draggable="true">
                        <span class="text-right pannel-btn">


                            <v-btn icon float-right @click="editModuleBtn(itemModule.id,itemModule)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon right @click="deleteMoudleBtn(itemModule.id)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>

                        </span>
                        <v-expansion-panel-header>
                            <span style="font-size: 1.5rem;">
                                <v-tooltip top color="black">
                                    <template v-slot:activator="{ on, attrs }">
                                        <div v-bind="attrs" v-on="on" style="width:min-content;" class="module-switch">
                                            <v-switch v-model="itemModule.isPublished" inset v-bind="attrs" v-on="on"
                                                :loading="isPublishing && isPublishing_id == itemModule.id" color="success" :disabled="isPublishing"
                                                @click="isPublishing_id =itemModule.id, publishModule(itemModule.module_name,itemModule.id,itemModule.isPublished)">
                                            </v-switch>
                                        </div>

                                    </template>
                                    <span>{{itemModule.isPublished ? 'Unpublished' : 'Publish'}}</span>
                                </v-tooltip>

                                <v-icon style="font-size: 2.25rem; ">
                                    mdi-folder
                                </v-icon>
                                {{itemModule.module_name}}

                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-list-item v-for="(itemSubModule, i) in getSub_module(itemModule.id)" :key="'Submodule'+i"
                                link class="pl-8">
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
                            <hr v-if="getSub_module(itemModule.id).length != 0">

                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title> </v-list-item-title>

                                    <v-list-item-subtitle></v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-menu transition="slide-y-transition" bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn tile class="secondary" v-bind="attrs" v-on="on">
                                                <v-icon left>
                                                    mdi-plus
                                                </v-icon>
                                                Add item
                                            </v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-item link @click="addFileBtn(itemModule.id)">
                                                <v-list-item-title>File</v-list-item-title>

                                            </v-list-item>
                                            <v-list-item link @click="addLinkBtn(itemModule.id)">
                                                <v-list-item-title>Link</v-list-item-title>

                                            </v-list-item>
                                            <v-list-item link>
                                                <v-list-item-title>Classwork</v-list-item-title>
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

        <!-- New lecture -->
        <v-dialog v-model="itemDialog" persistent max-width="600px">
            <moduleFormEdit v-on:closeModal="itemDialog = false; itemType = ''" :propModule="propModule" :type="'edit'"
                v-if="itemType == 'edit_module'" />
            <fileForm v-on:CloseLecture="itemDialog = false ; itemType = ''" :moduleId="mainModule_id"
                v-if="itemType == 'add_file'" />
            <linkForm v-on:CloseLecture="itemDialog = false; itemType = ''" :moduleId="mainModule_id"
                v-if="itemType == 'add_link'" />
            <deleteForm v-on:closeModal="itemDialog = false; itemType = ''" :moduleId="mainModule_id"
                :type="'delete_module'" v-if="itemType == 'delete_module'" />
        </v-dialog>


    </v-col>


</template>

<script>
    import draggable from "vuedraggable";
    import fileForm from './Forms/FileForm'
    import linkForm from './Forms/LinkForm'
    import moduleFormEdit from './Forms/ModuleForm'
    import deleteForm from './Forms/deleteForm'
    import newClassworkForm from './Forms/NewClassworkForm'
    import {
        mapGetters,
        mapActions
    } from "vuex";

    export default {
        props: ['role'],
        components: {
            fileForm,
            linkForm,
            newClassworkForm,
            draggable,
            moduleFormEdit,
            deleteForm
        },
        data() {
            return {
                isPublishing: false,
     isPublishing_id: null,
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
            publishModule(module_name, id, isPublished) {
                this.isPublishing = true;
                isPublished = isPublished ? 1 : 0;

                axios.post(`/api/main_module/publish/${id}`, {
               
                        isPublished: isPublished
                    })
                    .then((res) => {
                        if (isPublished == 1) {
                            this.toastSuccess(module_name + ' Successfully Published')
                           this. isPublishing = false;
                        } else {
                            this.toastSuccess(module_name + ' Successfully Unpublished')
                           this. isPublishing = false;
                        }


                    })

            },
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
            deleteMoudleBtn(module_id) {
                this.itemDialog = !this.itemDialog;
                this.itemType = 'delete_module';
                this.mainModule_id = module_id;
            },
            editModuleBtn(module_id, itemModule) {

                this.itemDialog = !this.itemDialog;
                this.propModule = itemModule;
                console.log(this.propModule);
                this.mainModule_id = module_id;
                this.itemType = 'edit_module';
            },
            addFileBtn(module_id) {
                this.itemDialog = !this.itemDialog;
                this.mainModule_id = module_id;
                this.itemType = 'add_file';
            },
            addLinkBtn(module_id) {
                this.itemDialog = !this.itemDialog;
                this.mainModule_id = module_id;
                this.itemType = 'add_link';
            },

            classworkBtn() {
                $('#itemTypeModal').modal('hide');
                $('#Classworkmodal').modal('show');
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
                        this.studentSubModuleProgress.push(res.data);
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
            this.getdata();
            // axios.get(
            //     `/api/student_sub_module/all/${this.$route.params.id}`
            // ).then((res) => {
            //     this.studentSubModuleProgress = res.data;

            //     this.getCount(this.studentSubModuleProgress, 23);
            //     this.$store.dispatch('fetchMainModule', this.$route.params.id);
            //     this.$store.dispatch('fetchSubModule', this.$route.params.id);
            // }).catch((error) => {
            //     console.log(error)
            // })






        },
        created() {

        }

    }

</script>


<style lang="scss">
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

    .module-switch {
        position: absolute;
        right: 125px;
        top: 2px;
        z-index: 999;
    }

</style>
