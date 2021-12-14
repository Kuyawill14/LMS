<template>
    <div>
        <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :to="{name: item.link}" :disabled="item.disabled">
                    {{ item.text.toUpperCase() }}
                </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>

       
        <v-row align="center" justify="center" class="pt-10" v-if="isGetting == false && getmain_module.length == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:14rem">
                    mdi-book-variant-multiple
                </v-icon>

                <h1> Empty Course Module </h1>
                <p> Creating Module, you'll be able to upload and share it with your class. </p>
                <v-btn color="primary" @click="openModal()"> CREATE MODULE </v-btn>
            </v-col>

         
        </v-row>


        <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-icon style="font-size:14rem">
                    mdi-google-classroom
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h2> Loading your Modules </h2>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>




        <div v-if="!isGetting && getmain_module.length > 0">
            <v-row class="pt-3" justify="center" align="center">
                <v-col cols="1">
                    <h2 class="pb-0"> Materials</h2>
                </v-col>
                 <v-col class="text-left">
                    <v-btn bottom color="secondary" small @click="preview()">
                        <v-icon left>mdi-eye</v-icon>
                        Preview
                    </v-btn>

                </v-col>
                <v-col class="text-right">
                    <v-btn bottom color="primary" @click="openModal()">
                        <v-icon left>mdi-plus</v-icon>
                        Create Module
                    </v-btn>
                    

                </v-col>
               

                <!-- <v-btn bottom color="primary" dark fab fixed right @click="openModal()">
                    <v-icon>mdi-plus</v-icon>
                </v-btn> -->


              <!--   <v-dialog  v-model="newModuleDialog" persistent max-width="600px">
                    <moduleForm  v-on:closeModal="newModuleDialog = false" v-on:createdModule="newModuleDialog = false"></moduleForm>
                </v-dialog> -->
            </v-row>

            <v-row>
                <modulesListComponent :role="role" />
            </v-row>
        </div>


         <v-dialog  v-model="moduleDialog" persistent max-width="600px">
            <moduleForm  v-on:closeModal="moduleDialog = false" v-on:createdModule="moduleDialog = false"></moduleForm>
        </v-dialog>
    </div>
</template>

<script>
    //import modulesListComponent from './modulesListComponent'
    const moduleForm = () => import("./Forms/ModuleForm")
    const modulesListComponent = () => import("./modulesListComponent")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {
            modulesListComponent,
            moduleForm,

        },
        data() {
            return {
                moduleDialog: false,
                newModuleDialog: false,
                loading: false,
                isGetting: false,
                moduleLength: null,
                items: [{
                        text: 'Course',
                        disabled: false,
                        link: 'courses',
                    },
                    {
                        text: 'Modules',
                        disabled: true,
                        link: 'modules',
                    },
                ],
            }
        },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"])
        },
        methods: {
            openModal() {
                this.moduleDialog = !this.moduleDialog;
            },
            openAddNewModal() {
                this.newModuleDialog = !this.newModuleDialog;
            },
            preview() {
                var id = this.$route.params.id;
                this.$router.push({
                    name: 'modules-preview',
                    params: {
                        id: id
                    }
                });
            },
            fetchAllModule() {
                this.isGetting = true;
               
                  
                    this.$store.dispatch('fetchMainModule', this.$route.params.id).then((res) => {

                        this.isGetting = false;
            
                        this.moduleLength = this.getmain_module.length;

                    });
               


            },
            UpdateAllModule() {
               
                    this.$store.dispatch('fetchMainModule', this.$route.params.id).then(() => {
                        this.moduleLength = this.getmain_module.length;

                    });
            }
        },
        mounted() {
            this.fetchAllModule();

        },

    }

</script>

<style scoped>
    .button-text-image {
        white-space: inherit;
    }

    .class-banner {
        /* background-image: url(https://gstatic.com/classroom/themes/Honors.jpg); */
        color: #fff;
        height: 200px;
        background-color: #1E1E1C;
    }

    .top-container {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    .ttr-wrapper {
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 59px;
    }

    .transparent {
        background: transparent;
        border: none;
    }

    .card-top {
        color: #fff !important;
    }

</style>
