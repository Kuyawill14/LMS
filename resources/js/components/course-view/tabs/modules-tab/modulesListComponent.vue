<template>

    <v-col>
        <vue-element-loading :active="isDrag" spinner="bar-fade-scale" color="#FF6700" />


        <v-alert v-model="tip" border="bottom" close-text="Close Alert" type="info" dismissible>
            Tips: You can change your modules arrangement by dragging your modules into a certain position.

            <v-checkbox class="pa-0 mb-0" v-model="tipCheckBox" @change="showHandler()" label="Don't show me again.">
            </v-checkbox>

        </v-alert>
        <v-expansion-panels focusable>
            <draggable v-model="mainModule" style="width: 100%" @change="onEnd" @start="isDragging = true"
                @end="isDragging = false" v-bind="dragOptions">
                <transition-group type="transition" name="flip-list">
                    <v-expansion-panel v-for="(itemModule, i) in getmain_module" :key="'module'+i" draggable="true">
                        <!-- <span class="text-right pannel-btn">


                            <v-btn icon float-right
                                @click="editModuleBtn(itemModule.id,itemModule,itemModule.isPublished)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon right
                                @click="deleteMoudleBtn(itemModule.id,itemModule.isPublished,itemModule.student_progress_count)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>

                        </span> -->
                        <v-expansion-panel-header class="py-0"
                            :class="itemModule.isPublished == 1   ? 'published_module pl-1 ' : 'not_published_module' ">

                            <span>
                                <div style="display:flex">
                                    <v-icon>mdi-dots-grid</v-icon>

                                    <v-list-item class="pl-1 ">
                                        <v-list-item-avatar>
                                            <v-icon
                                                :class="itemModule.isPublished == 1 ? 'green lighten-1' : 'grey lighten-1'"
                                                dark>
                                                mdi-folder
                                            </v-icon>
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title> {{itemModule.module_name}}
                                                ({{getSub_module(itemModule.id).length}}) </v-list-item-title>
                                            <v-list-item-subtitle class="text--primary"> Status:
                                                {{moduleStatus(itemModule )}}
                                            </v-list-item-subtitle>
                                            <v-list-item-subtitle> Created: {{format_date(itemModule.created_at)}}
                                            </v-list-item-subtitle>

                                        </v-list-item-content>

                                        <v-list-item-action>
                                            <v-tooltip top>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <div v-bind="attrs" v-on="on">
                                                        <v-menu transition="slide-y-transition" bottom>
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <v-btn icon v-bind="attrs" v-on="on">
                                                                    <v-icon color="grey lighten-1">mdi-dots-vertical
                                                                    </v-icon>
                                                                </v-btn>
                                                            </template>
                                                            <v-list>
                                                                <v-list-item link
                                                                    @click="editModuleBtn(itemModule.id,itemModule,itemModule.isPublished)">
                                                                    <v-list-item-title>Edit</v-list-item-title>

                                                                </v-list-item>
                                                                <v-list-item link
                                                                    @click="deleteMoudleBtn(itemModule.id,itemModule.isPublished,itemModule.student_progress_count)">
                                                                    <v-list-item-title>Delete</v-list-item-title>

                                                                </v-list-item>
                                                                <!-- <v-list-item link>
                                                <v-list-item-title>Archive</v-list-item-title>
                                            </v-list-item> -->
                                                            </v-list>
                                                        </v-menu>
                                                    </div>

                                                </template>
                                                <span>Menu</span>
                                            </v-tooltip>

                                        </v-list-item-action>
                                    </v-list-item>

                                    <v-tooltip top color="black">
                                        <template v-slot:activator="{ on, attrs }">
                                            <div v-bind="attrs" v-on="on" style="width:min-content;"
                                                class="module-switch">

                                                <v-btn
                                                    :class="itemModule.isPublished == 1 ? 'green lighten-1' : 'grey lighten-1'"
                                                    dark icon @click="openPublishSettings(itemModule)"
                                                    @click.native.stop>
                                                    <v-icon v-if="itemModule.isPublished == 1">
                                                        mdi-publish
                                                    </v-icon>
                                                    <svg v-if="itemModule.isPublished == 0"
                                                        style="width:24px;height:24px" viewBox="0 0 24 24">
                                                        <path fill="currentColor"
                                                            d="M20.8 22.7L15 16.9V20H9V14H5L8.6 10.4L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M19 6V4H7.2L9.2 6H19M17.2 14H19L12 7L11.1 7.9L17.2 14Z" />
                                                    </svg>
                                                </v-btn>
                                                <!-- 
                                                <v-switch v-model="itemModule.isPublished" inset v-bind="attrs"
                                                    v-on="on"
                                                    :loading="isPublishing && isPublishing_id == itemModule.id"
                                                    color="success" :disabled="isPublishing" @click.native.stop
                                                    class="pt-1"
                                                    @click="itemModule.isPublished == itemModule.isPublished,openPublishSettings(itemModule.module_name,   itemModule.id,itemModule.isPublished)">
                                                </v-switch> -->

                                            </div>

                                        </template>
                                        <!-- <span>{{itemModule.isPublished ? 'Unpublished' : 'Publish'}}</span> -->
                                        <span>Publish Settings</span>
                                    </v-tooltip>
                                </div>
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>


                            <v-list-item v-for="(itemSubModule, i) in getSub_module(itemModule.id)" :key="'Submodule'+i"
                                link class="pl-10">
                                <v-list-item-avatar>
                                    <v-icon
                                        :class="itemSubModule.type== 'Document' ? 'orange lighten-2' : 'blue lighten-2'"
                                        dark>
                                        {{itemSubModule.type =='Document' ? 'mdi-file-document' : 'mdi-file-link'}}
                                    </v-icon>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title> {{itemSubModule.sub_module_name}}</v-list-item-title>

                                    <v-list-item-subtitle> {{itemSubModule.type}}</v-list-item-subtitle>
                                    <v-list-item-subtitle> Created: {{format_date(itemSubModule.created_at)}}
                                    </v-list-item-subtitle>

                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on, attrs }">
                                            <div v-bind="attrs" v-on="on">
                                                <v-menu transition="slide-y-transition" bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn icon v-bind="attrs" v-on="on">
                                                            <v-icon color="grey lighten-1">mdi-dots-vertical</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-list>
                                                        <v-list-item link
                                                            @click="editItemBtn(itemSubModule,itemSubModule.id, itemSubModule.type,itemModule.isPublished)">
                                                            <v-list-item-title>Edit</v-list-item-title>

                                                        </v-list-item>
                                                        <v-list-item link
                                                            @click="deleteItemModuleBtn(itemSubModule.id,itemModule.isPublished,itemModule.student_progress_count)">
                                                            <v-list-item-title>Delete</v-list-item-title>

                                                        </v-list-item>
                                                        <!-- <v-list-item link>
                                                <v-list-item-title>Archive</v-list-item-title>
                                            </v-list-item> -->
                                                    </v-list>
                                                </v-menu>
                                            </div>
                                        </template>
                                        <span>Menu</span>
                                    </v-tooltip>



                                </v-list-item-action>
                            </v-list-item>

                            <v-divider v-if="getSub_module(itemModule.id).length != 0"></v-divider>


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
                                            <!-- <v-list-item link>
                                                <v-list-item-title>Classwork</v-list-item-title>
                                            </v-list-item> -->
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
        <v-dialog v-model="itemDialog" max-width="600px">
            <moduleFormEdit v-on:closeModal="itemDialog = false; itemType = ''" :propModule="propModule" :type="'edit'"
                v-if="itemType == 'edit_module'" />
            <fileForm v-on:CloseLecture="itemDialog = false ; itemType = ''" :moduleId="mainModule_id"
                v-if="itemType == 'add_file' || itemType == 'edit_file'" :submodule="pass_submodule"
                :type_action="itemType" />
            <linkForm v-on:CloseLecture="itemDialog = false; itemType = ''" :submodule="pass_submodule"
                :sub_module_id="sub_module_id" :moduleId="mainModule_id"
                v-if="itemType == 'add_link'|| itemType == 'edit_link'" :type_action="itemType" />
            <deleteForm v-on:closeModal="itemDialog = false; itemType = ''" :moduleId="mainModule_id"
                :type="'delete_module'" v-on:deleted_module="deleteModule" v-if="itemType == 'delete_module'" />
            <deleteItemForm v-on:closeModal="itemDialog = false; itemType = ''" :sub_module_id="sub_module_id"
                :type="'delete_module'" v-if="itemType == 'delete_item_module'" />


        </v-dialog>


        <v-dialog v-model="publishDialog" max-width="600px">
            <v-card>

                <v-card-title>
                    <span class="headline">Publish Settings</span>
                </v-card-title>
                <v-card-text>

                    <v-col ma-0 pa-0 class="text-left pb-0 mb-0" cols="12">
                        <!--  <v-container ma-0 pa-0 class="d-flex">
                                <v-checkbox
                                class="pa-0 ma-0"
                                v-model="EnableDue"
                                label="Always Available"
                                ></v-checkbox>
                                </v-container> -->

                        <v-radio-group hide-details class="ml-2 mt-0 pt-0 mb-0 pb-0" v-model="availability">
                            <v-radio v-for="(n, index) in radioAvailability" :key="index"
                                @change="availabilitySelection(availability)" :label="radioAvailability[index]"
                                :value="radioAvailability[index]"></v-radio>
                        </v-radio-group>
                    </v-col>


                    <v-row class="ml-2 mt-2" v-if="availability == 'Set date (From - To)'">
                        <v-col>


                            <v-menu ref="publishFrom_menu" v-model="publishFrom_menu" :close-on-content-click="false"
                                transition="scale-transition" offset-y min-width="auto" :date-picker-props="dateProps">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="publishFrom" :min="publishFrom" label="From"
                                        prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker :min="date" v-model="publishFrom" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="publishFrom_menu = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn text color="primary" @click="$refs.publishFrom_menu.save(publishFrom)">
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>


                        </v-col>

                        <v-col id="publish_to">

                            <v-menu ref="publishTo_menu" v-model="publishTo_menu" :close-on-content-click="false"
                                transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="publishTo" label="To" prepend-icon="mdi-calendar" readonly
                                        v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker :return-value.sync="publishFrom" :min="publishFrom" v-model="publishTo"
                                    no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="publishTo_menu = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn text color="primary" @click="$refs.publishTo_menu.save(publishTo)">
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>

                        </v-col>


                    </v-row>

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="publishDialog= false;stopIntervalTimer()">
                        Close
                    </v-btn>
                    <v-btn color="primary" :loading="isPublishing" text @click="savePublishSettings()">
                        Save
                    </v-btn>
                </v-card-actions>

            </v-card>

        </v-dialog>





    </v-col>


</template>

<script>
    import moment from 'moment/src/moment';
    import draggable from "vuedraggable";
    import fileForm from './Forms/FileForm'
    import linkForm from './Forms/LinkForm'
    import moduleFormEdit from './Forms/ModuleForm'
    import deleteForm from './Forms/deleteForm'
    import newClassworkForm from './Forms/NewClassworkForm'
    import deleteItemForm from './Forms/deleteItemForm'
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
            deleteForm,
            deleteItemForm
        },
        data() {
            return {
                publishTo: moment(Date.now()).format('YYYY-MM-DD'),
                publishFrom: moment(Date.now()).format('YYYY-MM-DD'),
                date: moment(Date.now()).format('YYYY-MM-DD'),
                publishTo_menu: false,
                publishFrom_menu: false,
                pickerDate: null,
                publishDialog: false,
                textFieldProps: {
                    appendIcon: 'event'
                },
                dateProps: {
                    headerColor: 'primary',
                    min: moment(Date.now()).format('YYYY-MM-DD')
                },
                toDateProps: {
                    headerColor: 'primary',
                    min: moment(Date.now()).format('YYYY-MM-DD')
                },
                timeProps: {
                    useSeconds: false,
                    ampmInTitle: true
                },
                toTimeProps: {
                    useSeconds: false,
                    ampmInTitle: true,
                    min: null,
                },
                radioAvailability: ['Always available', 'Set date (From - To)', 'Unpublish'],

                availability: null,
                tip: true,
                tipCheckBox: false,
                pass_submodule: null,
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
                sub_module_id: null,
                mainModule: [],
                propModule: [],
                studentSubModuleProgress: [],
                studentSubModuleProgressForm: {},
                to_date_jq_getter: false,


                publishSettings: {
                    module_name: null,
                    module_id: null,
                    isPublished: null,
                    date_from: null,
                    date_to: null,
                },
                publishAvailabity: null

            }
        },
        watch: {
            // pickerDate(val) {
            //   console.log(val)
            // }
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

            moduleStatus(_module) {
                if (_module.isPublished == 1) {
                    if (_module.date_from != null && _module.date_to != null) {
                        return 'Published (' + this.format_date(_module.date_from, true) + ' - ' + this.format_date(
                                _module.date_to, true) +
                            ')';
                    } else {
                        return 'Always Availabe';
                    }

                } else {
                    return 'Not Published';
                }

            },



            availabilitySelection(selection) {


                if (selection == this.radioAvailability[0] || selection == this.radioAvailability[1]) {
                    if (selection == this.radioAvailability[0]) {
                        this.publishSettings.date_from = null;
                        this.publishSettings.date_to = null;
                        this.publishAvailabity = 1;
                    }else{
                        this.publishAvailabity = 2;
                        this.publishSettings.date_from = moment(this.publishFrom).format('YYYY-MM-DD HH:mm:ss');;
                        this.publishSettings.date_to = moment(this.publishTo).format('YYYY-MM-DD HH:mm:ss');
                    }
                    
                    return 1;
                } else {
                    this.publishSettings.date_from = null;
                    this.publishSettings.date_to = null;
                    this.publishAvailabity = 0;
                    return 0;
                }



            },

            resetPublishSettings() {
                this.availability = this.radioAvailability[0];
                this.publishFrom = moment(Date.now()).format('YYYY-MM-DD');
                this.publishTo = moment(Date.now()).format('YYYY-MM-DD');
            },





            openPublishSettings(main_module) {

                this.publishSettings.module_name = main_module.module_name;
                this.publishSettings.module_id = main_module.id;

                if (main_module.isPublished == 1) {
                    /* this.publishFrom = main_module.date_from;
                    this.publishTo = main_module.date_to; */
                    this.publishFrom = moment(main_module.date_from).format('YYYY-MM-DD');
                    this.publishTo = moment(main_module.date_to).format('YYYY-MM-DD');

                    if (main_module.date_from != null && main_module.date_to != null) {
                        this.availability = this.radioAvailability[1];
                    } else {
                        this.availability = this.radioAvailability[0];
                        this.publishFrom = moment(Date.now()).format('YYYY-MM-DD');
                        this.publishTo = moment(Date.now()).format('YYYY-MM-DD');
                    }


                } else {
                    this.availability = this.radioAvailability[2];
                    this.publishFrom = moment(Date.now()).format('YYYY-MM-DD');
                    this.publishTo = moment(Date.now()).format('YYYY-MM-DD');


                }

                // this.availability = main_module.isPublished;





                this.publishDialog = true;

            },


            savePublishSettings() {
                this.publishSettings.date_from = this.publishFrom;
                this.publishSettings.date_to = this.publishTo;
                this.publishSettings.isPublished = this.availabilitySelection(this.availability);
                this.isPublishing = true;
                axios.post(`/api/main_module/publish/${ this.publishSettings.module_id}`, {
                        publishSettings: this.publishSettings
                    })
                    .then((res) => {
                        this.SendNotificationToCourse(this.publishSettings, res.data);
                        this.isPublishing_id = this.publishSettings.module_id;

                        let foundIndex = this.getmain_module.findIndex(element => element.id === this
                            .publishSettings.module_id)

                        this.getmain_module[foundIndex].isPublished = this.publishSettings.isPublished;
                        this.getmain_module[foundIndex].date_from = this.publishSettings.date_from;
                        this.getmain_module[foundIndex].date_to = this.publishSettings.date_to;




                        this.isPublishing = false;
                        this.toastSuccess('Publish Settings have been saved!')
                        this.publishDialog = false;


                    }).catch(err => {
                        this.toastError('Something went wrong, refresh the page and try again.')
                    })

            },
            deleteModule() {

                this.mainModule = this.mainModule.filter(item => item.id != this.module_id);

            },
            showHandler() {

                localStorage.setItem("tip_module_show", !this.tipCheckBox);

            },
            format_date(value, publish_format) {


                if (publish_format == true) {
                    return moment(String(value)).format('MMMM D, YYYY');
                }

                return moment(String(value)).format('MMMM D, YYYY hh:mm A')
            },

            onEnd() {
                this.isDrag = true;
                axios.post(`/api/main_module/arrange`, {
                        mainModules: this.mainModule
                    })
                    .then((res) => {


                        //  this.getmain_module = this.mainModule;
                        this.$store.dispatch('fetchMainModule', this.$route.params.id).then(() => {


                            this.isDrag = false;
                        });

                    })
            },
            getdata() {
                this.mainModule = this.getmain_module;
            },
            deleteMoudleBtn(module_id, isPublished, student_progress_count) {
                if (isPublished == 1) {
                    this.toastInfo("Unable to delete this module. Please unpublished the module to proceed");
                } else {
                    if (student_progress_count > 0) {
                        this.toastInfo("Unable to delete this module. Students have already progress in this module");
                    } else {
                        this.itemDialog = !this.itemDialog;
                        this.itemType = 'delete_module';
                        this.mainModule_id = module_id;
                    }

                }

            },

            deleteItemModuleBtn(sub_module_id, isPublished, student_progress_count) {


                if (isPublished == 1) {
                    this.toastInfo("Unable to delete this item. Please unpublished the module to proceed");
                } else {
                    if (student_progress_count > 0) {
                        this.toastInfo("Unable to delete this item. Students have already progress in this item");
                    } else {
                        this.itemDialog = !this.itemDialog;
                        this.itemType = 'delete_item_module';
                        this.sub_module_id = sub_module_id;
                    }

                }
            },
            editModuleBtn(module_id, itemModule, isPublished) {

                if (isPublished == 1) {
                    this.toastInfo("Unable to edit this module. Please unpublished the module to proceed");
                } else {

                    this.itemDialog = !this.itemDialog;
                    this.propModule = itemModule;
                    ////console.log(this.propModule);
                    this.mainModule_id = module_id;
                    this.itemType = 'edit_module';


                }

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
            editItemBtn(itemModule, sub_module_id, type, isPublished) {
                if (isPublished == 1) {
                    this.toastInfo("Unable to edit this item. Please unpublished the module to proceed");
                } else {
                    this.pass_submodule = itemModule;
                    this.itemDialog = !this.itemDialog;

                    this.sub_module_id = sub_module_id;

                    this.itemType = type == 'Link' ? 'edit_link' : 'edit_file';
                }
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
            checkSubModule(arr, sub_module_id) {
                var check = false;
                //////console.log(arr);
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].sub_module_id == sub_module_id) {
                        check = true;
                    }
                }
                return check;
            },
            stopIntervalTimer() {
                this.to_date_jq_getter = false;
                clearInterval(this.to_date_jq_getter);
            },
           async SendNotificationToCourse(data, isPublished){

                let notifDetails = {};
                notifDetails.course_id = this.$route.params.id;
                notifDetails.module_name = data.module_name;
                notifDetails.module_id = data.module_id;
                notifDetails.date_from = data.date_from;
                notifDetails.date_to = data.date_to;
                notifDetails.availability = this.publishAvailabity;
                notifDetails.isPublished = isPublished == 'published' ? true : false;
                notifDetails.type = 'module';
                axios.post('/api/notification/new', notifDetails)
                .then(res=>{
                
                })
            }



        },
        async mounted() {
            this.getdata();
            this.$emit('closeModuleDialog');

            if (localStorage.getItem("tip_module_show") === null) {
                this.tip = true;
            } else {
                this.tip = localStorage.getItem("tip_module_show") == true;
            }

        },
        created() {

        },
        beforeDestroy() {
            this.stopIntervalTimer()
        },
        beforeRouteLeave(to, from, next) {
            this.stopIntervalTimer();
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
        border-left: 10px solid #cecece !important;

    }

    .module-switch {
        position: absolute;
        right: 111px;
        bottom: 23px;
        z-index: 1000;
    }

    .published_module {
        border-left: 6px #66BB6A solid;
    }

    .not_published_module {
        padding-left: 10px !important;
    }

</style>
